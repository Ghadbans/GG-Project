"use strict";
exports.id = "src_js_AdminView1_ReportsViewAdmin_js";
exports.ids = ["src_js_AdminView1_ReportsViewAdmin_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/DashboardInfo/ARAgingReport.js"
/*!*******************************************************************!*\
  !*** ./src/js/AdminView1/PageView/DashboardInfo/ARAgingReport.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogActions/DialogActions.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/FileDownload.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/InfoOutlined.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/LocalPrintshop.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/excel.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_29__);
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;






function ARAgingReport(_ref) {
  var _selectedCustomer$tot;
  var onInvoice = _ref.onInvoice,
    onPayment = _ref.onPayment;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedCustomer = _useState4[0],
    setSelectedCustomer = _useState4[1];
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_29__.useReactToPrint)({
    content: () => componentRef.current,
    documentTitle: "Statement_Of_Accounts_".concat((selectedCustomer === null || selectedCustomer === void 0 ? void 0 : selectedCustomer.name) || 'Customer')
  });
  var customerInvoices = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
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
  var agingData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
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
      var invDate = dayjs__WEBPACK_IMPORTED_MODULE_26___default()(inv.invoiceDate);
      var today = dayjs__WEBPACK_IMPORTED_MODULE_26___default()();
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
  var totals = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
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
    var _ref2 = _asyncToGenerator(function* () {
      var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_27___default().Workbook)();
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
      (0,file_saver__WEBPACK_IMPORTED_MODULE_28__.saveAs)(new Blob([buffer]), "AR_Aging_Report_".concat(dayjs__WEBPACK_IMPORTED_MODULE_26___default()().format('YYYY-MM-DD'), ".xlsx"));
    });
    return function exportToExcel() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      mb: 3,
      display: 'flex',
      gap: 2,
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Search Customer",
    size: "small",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    sx: {
      width: 300
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Aging is calculated based on Invoice Date vs Today"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_24__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_23__["default"], null),
    onClick: exportToExcel,
    sx: {
      ml: 'auto',
      backgroundColor: '#30368a'
    }
  }, "Export Excel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 2,
    sx: {
      mb: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      borderTop: '4px solid #4caf50'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "textSecondary",
    variant: "caption",
    sx: {
      fontWeight: 'bold'
    }
  }, "0-30 DAYS (CURRENT)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", totals['0-30'].toLocaleString())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      borderTop: '4px solid #ff9800'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "textSecondary",
    variant: "caption",
    sx: {
      fontWeight: 'bold'
    }
  }, "31-60 DAYS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", totals['31-60'].toLocaleString())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      borderTop: '4px solid #f44336'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "textSecondary",
    variant: "caption",
    sx: {
      fontWeight: 'bold'
    }
  }, "61-90 DAYS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", totals['61-90'].toLocaleString())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      borderTop: '4px solid #b71c1c',
      backgroundColor: '#fff5f5'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "textSecondary",
    variant: "caption",
    sx: {
      fontWeight: 'bold'
    }
  }, "OVER 90 DAYS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold',
      color: '#b71c1c'
    }
  }, "$", totals['90+'].toLocaleString()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_11__["default"],
    sx: {
      boxShadow: 'none',
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Customer Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "0-30 Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "31-60 Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "61-90 Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "90+ Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#30368a',
      color: 'white'
    }
  }, "Total Balance"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, agingData.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    key: row.id,
    hover: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      fontWeight: '500',
      color: '#1976d2',
      cursor: 'pointer',
      textDecoration: 'underline'
    },
    onClick: () => setSelectedCustomer(row)
  }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      color: row['0-30'] > 0 ? '#4caf50' : '#ccc'
    }
  }, row['0-30'] > 0 ? "$".concat(row['0-30'].toLocaleString()) : '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      color: row['31-60'] > 0 ? '#ff9800' : '#ccc'
    }
  }, row['31-60'] > 0 ? "$".concat(row['31-60'].toLocaleString()) : '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      color: row['61-90'] > 0 ? '#f44336' : '#ccc'
    }
  }, row['61-90'] > 0 ? "$".concat(row['61-90'].toLocaleString()) : '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      color: row['90+'] > 0 ? '#b71c1c' : '#ccc',
      fontWeight: row['90+'] > 0 ? '700' : '400'
    }
  }, row['90+'] > 0 ? "$".concat(row['90+'].toLocaleString()) : '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", row.total.toLocaleString()))), agingData.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    colSpan: 6,
    align: "center",
    sx: {
      py: 3
    }
  }, "No outstanding balances found."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "GRAND TOTALS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "$", totals['0-30'].toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "$", totals['31-60'].toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "$", totals['61-90'].toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "$", totals['90+'].toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4',
      fontSize: '1.1rem'
    }
  }, "$", totals.total.toLocaleString()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    open: Boolean(selectedCustomer),
    onClose: () => setSelectedCustomer(null),
    maxWidth: "md",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f8f9fa'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    sx: {
      fontWeight: 'bold'
    }
  }, "Statement of Accounts - ", selectedCustomer === null || selectedCustomer === void 0 ? void 0 : selectedCustomer.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => setSelectedCustomer(null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_22__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    dividers: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: componentRef,
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold',
      mb: 3,
      display: 'none',
      '@media print': {
        display: 'block'
      }
    }
  }, "Statement of Accounts - ", selectedCustomer === null || selectedCustomer === void 0 ? void 0 : selectedCustomer.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_11__["default"],
    sx: {
      boxShadow: 'none',
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "Invoice #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "Total Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "Amount Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "center",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "Overdue"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, customerInvoices.map(inv => {
    var invDate = dayjs__WEBPACK_IMPORTED_MODULE_26___default()(inv.invoiceDate);
    var daysOverdue = Math.max(0, dayjs__WEBPACK_IMPORTED_MODULE_26___default()().diff(invDate, 'day'));
    var total = Number(inv.totalInvoice || inv.total || 0);
    var balance = Number(inv.balanceDue || 0);
    var paid = total - balance;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: inv._id,
      hover: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, invDate.format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, inv.invoiceNumber ? "INV-".concat(String(inv.invoiceNumber).padStart(6, '0')) : inv.factureNumber ? "INV-".concat(String(inv.factureNumber).padStart(6, '0')) : 'N/A'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      align: "right"
    }, "$", total.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      align: "right"
    }, "$", paid.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      align: "right",
      sx: {
        fontWeight: 'bold',
        color: '#d32f2f'
      }
    }, "$", balance.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      label: "".concat(daysOverdue, " days"),
      size: "small",
      color: daysOverdue > 90 ? "error" : daysOverdue > 30 ? "warning" : "success",
      variant: "outlined"
    })));
  }), customerInvoices.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    colSpan: 6,
    align: "center",
    sx: {
      py: 3
    }
  }, "No outstanding invoices found."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    colSpan: 4,
    sx: {
      fontWeight: 'bold',
      textAlign: 'right',
      backgroundColor: '#f8f9fa'
    }
  }, "Total Outstanding Balance:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      backgroundColor: '#f8f9fa'
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handlePrint,
    variant: "outlined",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_25__["default"], null),
    sx: {
      mr: 'auto',
      color: '#30368a',
      borderColor: '#30368a'
    }
  }, "Print"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: () => setSelectedCustomer(null),
    variant: "contained",
    sx: {
      backgroundColor: '#30368a'
    }
  }, "Close"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ARAgingReport);

/***/ },

/***/ "./src/js/AdminView1/PageView/DashboardInfo/InventoryMovementReport.js"
/*!*****************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/DashboardInfo/InventoryMovementReport.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dayjs/plugin/isBetween */ "./node_modules/dayjs/plugin/isBetween.js");
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/excel.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/FileDownload.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_20__);
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
;








dayjs__WEBPACK_IMPORTED_MODULE_14___default().extend((dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_15___default()));
dayjs__WEBPACK_IMPORTED_MODULE_14___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_20___default()));
function InventoryMovementReport(_ref) {
  var onInventoryIn = _ref.onInventoryIn,
    onInventoryOut = _ref.onInventoryOut;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Month'),
    _useState2 = _slicedToArray(_useState, 2),
    dateRange = _useState2[0],
    setDateRange = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchTerm = _useState4[0],
    setSearchTerm = _useState4[1];
  var processedData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var movement = {};
    var now = dayjs__WEBPACK_IMPORTED_MODULE_14___default()();
    var start = dateRange === 'Month' ? now.startOf('month') : now.startOf('year');
    var end = now.endOf('day');

    // Process Purchases (In)
    if (Array.isArray(onInventoryIn)) {
      onInventoryIn.forEach(proc => {
        // Try parsing robustly
        var d = dayjs__WEBPACK_IMPORTED_MODULE_14___default()(proc.itemPurchaseDate, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
        if (!d.isValid()) d = dayjs__WEBPACK_IMPORTED_MODULE_14___default()(proc.itemPurchaseDate);
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
          var d = dayjs__WEBPACK_IMPORTED_MODULE_14___default()(out.itemOutDate, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
          if (!d.isValid()) d = dayjs__WEBPACK_IMPORTED_MODULE_14___default()(out.itemOutDate);
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
    return Object.values(movement).filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map(item => _objectSpread(_objectSpread({}, item), {}, {
      balance: item.in - item.out
    })).sort((a, b) => b.in + b.out - (a.in + a.out));
  }, [onInventoryIn, onInventoryOut, dateRange, searchTerm]);
  var exportToExcel = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* () {
      var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_16___default().Workbook)();
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
      (0,file_saver__WEBPACK_IMPORTED_MODULE_17__.saveAs)(new Blob([buffer]), "Inventory_Movement_".concat(dayjs__WEBPACK_IMPORTED_MODULE_14___default()().format('YYYY-MM-DD'), ".xlsx"));
    });
    return function exportToExcel() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      mb: 3,
      display: 'flex',
      gap: 2,
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Search Item",
    size: "small",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "small",
    sx: {
      width: 150
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Period"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: dateRange,
    label: "Period",
    onChange: e => setDateRange(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: "Month"
  }, "This Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: "Year"
  }, "This Year"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
    variant: "contained",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_18__["default"], null),
    onClick: exportToExcel,
    sx: {
      ml: 'auto',
      backgroundColor: '#30368a'
    }
  }, "Export Excel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_8__["default"],
    elevation: 0,
    sx: {
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      fontWeight: 'bold'
    }
  }, "Item Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      color: 'success.main'
    }
  }, "Stock In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      color: 'error.main'
    }
  }, "Stock Out"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "Net Movement"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, processedData.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: row.name,
    hover: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right"
  }, row.in.toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right"
  }, row.out.toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, row.balance > 0 ? "+".concat(row.balance) : row.balance)))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InventoryMovementReport);

/***/ },

/***/ "./src/js/AdminView1/PageView/DashboardInfo/InventoryValuationReport.js"
/*!******************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/DashboardInfo/InventoryValuationReport.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/excel.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/FileDownload.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Inventory.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/MonetizationOn.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_20__);
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;






function InventoryValuationReport(_ref) {
  var items = _ref.items;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var processedData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
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
  var totals = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return processedData.reduce((acc, curr) => ({
      qty: acc.qty + curr.quantity,
      value: acc.value + curr.valuation
    }), {
      qty: 0,
      value: 0
    });
  }, [processedData]);
  var exportToExcel = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* () {
      var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_14___default().Workbook)();
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
      (0,file_saver__WEBPACK_IMPORTED_MODULE_15__.saveAs)(new Blob([buffer]), "Inventory_Valuation_".concat(dayjs__WEBPACK_IMPORTED_MODULE_20___default()().format('YYYY-MM-DD'), ".xlsx"));
    });
    return function exportToExcel() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      mb: 3,
      display: 'flex',
      gap: 2,
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Search Inventory",
    size: "small",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    sx: {
      width: 300
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
    variant: "contained",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__["default"], null),
    onClick: exportToExcel,
    sx: {
      ml: 'auto',
      backgroundColor: '#30368a'
    }
  }, "Export Excel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: 2,
    sx: {
      mb: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outlined",
    sx: {
      borderLeft: '5px solid #30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    color: "primary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Units in Stock")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h4",
    sx: {
      fontWeight: 'bold'
    }
  }, totals.qty.toLocaleString())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outlined",
    sx: {
      borderLeft: '5px solid #2e7d32'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: "success"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Inventory Assets")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h4",
    sx: {
      fontWeight: 'bold',
      color: '#2e7d32'
    }
  }, "$", totals.value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_8__["default"],
    elevation: 0,
    sx: {
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    stickyHeader: true,
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Item Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "center",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Unit Cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Subtotal Value"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, processedData.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: row.id,
    hover: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      fontWeight: 'medium'
    }
  }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'text.secondary',
      fontSize: '0.85rem'
    }
  }, row.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "center"
  }, row.quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right"
  }, "$", row.costPrice.toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", row.valuation.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))), processedData.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    colSpan: 5,
    align: "center",
    sx: {
      py: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "textSecondary"
  }, "No items found matching your search.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    colSpan: 2,
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "TOTAL INVENTORY VALUATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "center",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, totals.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right",
    sx: {
      backgroundColor: '#f8f9fa'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InventoryValuationReport);

/***/ },

/***/ "./src/js/AdminView1/PageView/DashboardInfo/POSAnalyticsReport.js"
/*!************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/DashboardInfo/POSAnalyticsReport.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! dayjs/plugin/isBetween */ "./node_modules/dayjs/plugin/isBetween.js");
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_x_charts_LineChart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/x-charts/LineChart */ "./node_modules/@mui/x-charts/LineChart/LineChart.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/excel.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/FileDownload.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/PointOfSale.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Receipt.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/TrendingUp.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_28__);
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;









dayjs__WEBPACK_IMPORTED_MODULE_18___default().extend((dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_19___default()));
dayjs__WEBPACK_IMPORTED_MODULE_18___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_28___default()));
function POSAnalyticsReport(_ref) {
  var onPos = _ref.onPos;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Month'),
    _useState2 = _slicedToArray(_useState, 2),
    dateRange = _useState2[0],
    setDateRange = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_18___default()().startOf('month').format('YYYY-MM-DD')),
    _useState4 = _slicedToArray(_useState3, 2),
    customStart = _useState4[0],
    setCustomStart = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_18___default()().endOf('month').format('YYYY-MM-DD')),
    _useState6 = _slicedToArray(_useState5, 2),
    customEnd = _useState6[0],
    setCustomEnd = _useState6[1];
  var processedData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!onPos || !Array.isArray(onPos)) return {
      items: [],
      chartData: [],
      stats: {
        revenue: 0,
        count: 0,
        profit: 0
      }
    };
    var now = dayjs__WEBPACK_IMPORTED_MODULE_18___default()();
    var start, end;
    if (dateRange === 'Month') {
      start = now.startOf('month');
      end = now.endOf('month');
    } else if (dateRange === 'Year') {
      start = now.startOf('year');
      end = now.endOf('year');
    } else if (dateRange === 'Custom') {
      start = dayjs__WEBPACK_IMPORTED_MODULE_18___default()(customStart);
      end = dayjs__WEBPACK_IMPORTED_MODULE_18___default()(customEnd);
    }
    var filtered = onPos.filter(inv => {
      if (dateRange === 'All') return true;
      var d = dayjs__WEBPACK_IMPORTED_MODULE_18___default()(inv.invoiceDate, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
      if (!d.isValid()) d = dayjs__WEBPACK_IMPORTED_MODULE_18___default()(inv.invoiceDate);
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
      var monthSales = onPos.filter(inv => dayjs__WEBPACK_IMPORTED_MODULE_18___default()(inv.invoiceDate).isBetween(startM, endM, 'day', '[]')).reduce((sum, inv) => sum + (inv.TotalAmountPaid || 0) / (inv.rate || 1), 0);
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
    var _ref2 = _asyncToGenerator(function* () {
      var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_21___default().Workbook)();
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
          date: dayjs__WEBPACK_IMPORTED_MODULE_18___default()(row.invoiceDate).format('YYYY-MM-DD'),
          customer: ((_row$customerName = row.customerName) === null || _row$customerName === void 0 ? void 0 : _row$customerName.customerName) || 'Walk-in',
          amount: (row.TotalAmountPaid || 0) / (row.rate || 1)
        });
      });
      var buffer = yield workbook.xlsx.writeBuffer();
      (0,file_saver__WEBPACK_IMPORTED_MODULE_22__.saveAs)(new Blob([buffer]), "POS_Sales_".concat(dayjs__WEBPACK_IMPORTED_MODULE_18___default()().format('YYYY-MM-DD'), ".xlsx"));
    });
    return function exportToExcel() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      mb: 3,
      display: 'flex',
      gap: 2,
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h6",
    sx: {
      fontWeight: 'bold',
      color: '#30368a'
    }
  }, "POS Performance Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "small",
    sx: {
      width: 150,
      ml: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Period"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: dateRange,
    label: "Period",
    onChange: e => setDateRange(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: "All"
  }, "All Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: "Month"
  }, "This Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: "Year"
  }, "This Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: "Custom"
  }, "Custom Range"))), dateRange === 'Custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      display: 'flex',
      gap: 1,
      ml: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "date",
    label: "From",
    size: "small",
    value: customStart,
    onChange: e => setCustomStart(e.target.value),
    InputLabelProps: {
      shrink: true
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "date",
    label: "To",
    size: "small",
    value: customEnd,
    onChange: e => setCustomEnd(e.target.value),
    InputLabelProps: {
      shrink: true
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_27__["default"], {
    variant: "contained",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_23__["default"], null),
    onClick: exportToExcel,
    sx: {
      backgroundColor: '#30368a'
    }
  }, "Export Excel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    spacing: 2,
    sx: {
      mb: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    color: "primary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Sales Volume")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, processedData.stats.count, " Transactions")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    color: "success"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "textSecondary",
    variant: "subtitle2"
  }, "POS Revenue")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", processedData.stats.revenue.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_25__["default"], {
    color: "secondary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Gross Profit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold',
      color: 'success.main'
    }
  }, "+$", processedData.stats.profit.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      height: 350,
      mb: 4,
      p: 2,
      border: '1px solid #eee',
      borderRadius: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "subtitle2",
    sx: {
      mb: 2,
      fontWeight: 'bold'
    }
  }, "Sales Trend (Last 12 Months)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_charts_LineChart__WEBPACK_IMPORTED_MODULE_20__.LineChart, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_12__["default"],
    elevation: 0,
    sx: {
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    stickyHeader: true,
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Invoice #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Total USD"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, processedData.items.slice(0, 10).map(row => {
    var _row$customerName2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: row._id,
      hover: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, "S-", String(row.factureNumber).padStart(5, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, dayjs__WEBPACK_IMPORTED_MODULE_18___default()(row.invoiceDate).format('DD MMM YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, ((_row$customerName2 = row.customerName) === null || _row$customerName2 === void 0 ? void 0 : _row$customerName2.customerName) || 'Walk-in'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      align: "right"
    }, "$", ((row.TotalAmountPaid || 0) / (row.rate || 1)).toLocaleString()));
  }), processedData.items.length > 10 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    colSpan: 4,
    align: "center",
    sx: {
      color: 'text.secondary',
      fontStyle: 'italic'
    }
  }, "Viewing last 10 transactions. Export to Excel for full history.")), processedData.items.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    colSpan: 4,
    align: "center",
    sx: {
      py: 3
    }
  }, "No data for selected period"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (POSAnalyticsReport);

/***/ },

/***/ "./src/js/AdminView1/PageView/DashboardInfo/SalesByCustomerReport.js"
/*!***************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/DashboardInfo/SalesByCustomerReport.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Slide/Slide.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! dayjs/plugin/isBetween */ "./node_modules/dayjs/plugin/isBetween.js");
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/excel.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/FileDownload.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_31__);
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









dayjs__WEBPACK_IMPORTED_MODULE_25___default().extend((dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_26___default()));
dayjs__WEBPACK_IMPORTED_MODULE_25___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_31___default()));
dayjs__WEBPACK_IMPORTED_MODULE_25___default().extend((dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_26___default()));
dayjs__WEBPACK_IMPORTED_MODULE_25___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_31___default()));
var Transition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    direction: "up",
    ref: ref
  }, props));
});
function SalesByCustomerReport(_ref) {
  var onInvoice = _ref.onInvoice,
    onPos = _ref.onPos,
    onPayment = _ref.onPayment;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All'),
    _useState4 = _slicedToArray(_useState3, 2),
    dateRange = _useState4[0],
    setDateRange = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_25___default()().startOf('month').format('YYYY-MM-DD')),
    _useState6 = _slicedToArray(_useState5, 2),
    customStart = _useState6[0],
    setCustomStart = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_25___default()().endOf('month').format('YYYY-MM-DD')),
    _useState8 = _slicedToArray(_useState7, 2),
    customEnd = _useState8[0],
    setCustomEnd = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedCustomer = _useState0[0],
    setSelectedCustomer = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    openDetails = _useState10[0],
    setOpenDetails = _useState10[1];
  var processedData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
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
      var now = dayjs__WEBPACK_IMPORTED_MODULE_25___default()();
      var start, end;
      if (dateRange === 'Month') {
        start = now.startOf('month');
        end = now.endOf('month');
      } else if (dateRange === 'Year') {
        start = now.startOf('year');
        end = now.endOf('year');
      } else if (dateRange === 'Custom') {
        start = dayjs__WEBPACK_IMPORTED_MODULE_25___default()(customStart);
        end = dayjs__WEBPACK_IMPORTED_MODULE_25___default()(customEnd);
      }
      filteredTransactions = filteredTransactions.filter(item => {
        var d = dayjs__WEBPACK_IMPORTED_MODULE_25___default()(item.date, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
        if (!d.isValid()) d = dayjs__WEBPACK_IMPORTED_MODULE_25___default()(item.date);
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
  var totals = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
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
      var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_27___default().Workbook)();
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
      (0,file_saver__WEBPACK_IMPORTED_MODULE_28__.saveAs)(new Blob([buffer]), "Sales_By_Customer_".concat(dayjs__WEBPACK_IMPORTED_MODULE_25___default()().format('YYYY-MM-DD'), ".xlsx"));
    });
    return function exportToExcel() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      mb: 3,
      display: 'flex',
      gap: 2,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Search Customer",
    size: "small",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    sx: {
      width: 250
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "small",
    sx: {
      width: 150
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Period"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: dateRange,
    label: "Period",
    onChange: e => setDateRange(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: "All"
  }, "All Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: "Month"
  }, "This Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: "Year"
  }, "This Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: "Custom"
  }, "Custom Range"))), dateRange === 'Custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "date",
    label: "From",
    size: "small",
    value: customStart,
    onChange: e => setCustomStart(e.target.value),
    InputLabelProps: {
      shrink: true
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "date",
    label: "To",
    size: "small",
    value: customEnd,
    onChange: e => setCustomEnd(e.target.value),
    InputLabelProps: {
      shrink: true
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_30__["default"], {
    variant: "contained",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_29__["default"], null),
    onClick: exportToExcel,
    sx: {
      ml: 'auto',
      backgroundColor: '#30368a'
    }
  }, "Export Excel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    spacing: 2,
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      backgroundColor: '#e8f5e9'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Sales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", totals.sales.toLocaleString())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      backgroundColor: '#e3f2fd'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Collected"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", totals.paid.toLocaleString())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      backgroundColor: '#fff3e0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Outstanding"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold',
      color: '#e65100'
    }
  }, "$", totals.balance.toLocaleString()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_13__["default"],
    sx: {
      boxShadow: 'none',
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Customer Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "center",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Invoices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Total Sales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Total Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Balance Due"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, processedData.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    key: row.id,
    hover: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      fontWeight: 'medium',
      cursor: 'pointer',
      color: '#30368a',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    onClick: () => handleOpenDetails(row)
  }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "center"
  }, row.invoiceCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "right"
  }, "$", row.totalSales.toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "right",
    sx: {
      color: 'success.main'
    }
  }, "$", row.totalPaid.toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "right",
    sx: {
      color: row.balance > 0 ? 'error.main' : 'inherit'
    }
  }, "$", row.balance.toLocaleString()))), processedData.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    colSpan: 5,
    align: "center",
    sx: {
      py: 3
    }
  }, "No data found for the selected criteria"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "TOTALS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "center",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, processedData.reduce((a, b) => a + b.invoiceCount, 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "$", totals.sales.toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "$", totals.paid.toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "$", totals.balance.toLocaleString()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    fullScreen: true,
    open: openDetails,
    onClose: handleCloseDetails,
    TransitionComponent: Transition
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      position: 'relative',
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    edge: "start",
    color: "inherit",
    onClick: handleCloseDetails,
    "aria-label": "close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_24__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      ml: 2,
      flex: 1
    },
    variant: "h6",
    component: "div"
  }, "Transaction Details: ", selectedCustomer === null || selectedCustomer === void 0 ? void 0 : selectedCustomer.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_30__["default"], {
    autoFocus: true,
    color: "inherit",
    onClick: handleCloseDetails
  }, "Close"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    sx: {
      p: 4,
      backgroundColor: '#f5f5f5'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "overline",
    color: "textSecondary"
  }, "Total Sales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5",
    sx: {
      color: '#2e7d32',
      fontWeight: 'bold'
    }
  }, "$", ((selectedCustomer === null || selectedCustomer === void 0 ? void 0 : selectedCustomer.totalSales) || 0).toLocaleString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "overline",
    color: "textSecondary"
  }, "Total Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5",
    sx: {
      color: '#0288d1',
      fontWeight: 'bold'
    }
  }, "$", ((selectedCustomer === null || selectedCustomer === void 0 ? void 0 : selectedCustomer.totalPaid) || 0).toLocaleString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "overline",
    color: "textSecondary"
  }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5",
    sx: {
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, "$", ((selectedCustomer === null || selectedCustomer === void 0 ? void 0 : selectedCustomer.balance) || 0).toLocaleString()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_13__["default"],
    sx: {
      boxShadow: 'none',
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Balance"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, (_selectedCustomer$tra => {
    var runningBalance = 0;
    return selectedCustomer === null || selectedCustomer === void 0 || (_selectedCustomer$tra = selectedCustomer.transactions) === null || _selectedCustomer$tra === void 0 ? void 0 : _selectedCustomer$tra.sort((a, b) => new Date(a.date) - new Date(b.date)).map((item, idx) => {
      if (item.type === 'Invoice' || item.type === 'POS') {
        runningBalance += item.amount || 0;
      }
      runningBalance -= item.paid || 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
        key: idx
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, dayjs__WEBPACK_IMPORTED_MODULE_25___default()(item.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        style: {
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '0.75rem',
          backgroundColor: item.type === 'Invoice' ? '#e8f5e9' : item.type === 'POS' ? '#e3f2fd' : '#fff3e0',
          color: item.type === 'Invoice' ? '#2e7d32' : item.type === 'POS' ? '#0288d1' : '#e65100'
        }
      }, item.type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, item.type === 'Invoice' ? "INV-".concat(item.invoiceNumber) : item.type === 'POS' ? "POS-".concat(item.factureNumber) : "PAY-".concat(item.paymentNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
        align: "right"
      }, "$", (item.amount || 0).toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
        align: "right"
      }, "$", (item.paid || 0).toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
        align: "right",
        sx: {
          fontWeight: 'bold'
        }
      }, "$", runningBalance.toLocaleString()));
    });
  })()))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SalesByCustomerReport);

/***/ },

/***/ "./src/js/AdminView1/PageView/DashboardInfo/SupplierReportInfo.js"
/*!************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/DashboardInfo/SupplierReportInfo.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Slide/Slide.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/FileDownload.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! dayjs/plugin/isBetween */ "./node_modules/dayjs/plugin/isBetween.js");
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/excel.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_31__);
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







dayjs__WEBPACK_IMPORTED_MODULE_27___default().extend((dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_28___default()));
dayjs__WEBPACK_IMPORTED_MODULE_27___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_31___default()));
var Transition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    direction: "up",
    ref: ref
  }, props));
});
function SupplierReportInfo(_ref) {
  var _selectedSupplier$pur;
  var onSuppliers = _ref.onSuppliers,
    onItemPurchase = _ref.onItemPurchase;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All'),
    _useState4 = _slicedToArray(_useState3, 2),
    filterPaid = _useState4[0],
    setFilterPaid = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedSupplier = _useState6[0],
    setSelectedSupplier = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openDetails = _useState8[0],
    setOpenDetails = _useState8[1];
  var processedData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
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
        supplierMap[matchedSupplierId].purchases.push(_objectSpread(_objectSpread({}, purchase), {}, {
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
  var totals = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
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
    var _ref2 = _asyncToGenerator(function* () {
      var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_29___default().Workbook)();
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
      (0,file_saver__WEBPACK_IMPORTED_MODULE_30__.saveAs)(new Blob([buffer]), "Supplier_Payables_".concat(dayjs__WEBPACK_IMPORTED_MODULE_27___default()().format('YYYY-MM-DD'), ".xlsx"));
    });
    return function exportToExcel() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      mb: 3,
      display: 'flex',
      gap: 2,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Search Supplier / Store",
    size: "small",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    sx: {
      width: 250
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "small",
    sx: {
      width: 180
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: filterPaid,
    label: "Status",
    onChange: e => setFilterPaid(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: "All"
  }, "All Statuses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: "Paid"
  }, "Fully Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: "Partially-Paid"
  }, "Partially Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: "Unpaid"
  }, "Unpaid"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_26__["default"], null),
    onClick: exportToExcel,
    sx: {
      ml: 'auto',
      backgroundColor: '#30368a'
    }
  }, "Export Excel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    spacing: 2,
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      backgroundColor: '#e8f5e9'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Billed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", totals.billed.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      backgroundColor: '#e3f2fd'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Paid to Suppliers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", totals.paid.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      backgroundColor: '#fff3e0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold',
      color: '#e65100'
    }
  }, "$", totals.balance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_14__["default"],
    sx: {
      boxShadow: 'none',
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Supplier Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Store Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Total Billed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Total Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "center",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Status"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, processedData.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    key: row.id,
    hover: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      fontWeight: 'medium',
      cursor: 'pointer',
      color: '#30368a',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    onClick: () => handleOpenDetails(row)
  }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, row.storeName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "right"
  }, "$", row.totalBilled.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "right",
    sx: {
      color: 'success.main'
    }
  }, "$", row.totalPaid.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "right",
    sx: {
      color: row.balance > 0 ? 'error.main' : 'inherit'
    }
  }, "$", row.balance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      backgroundColor: row.status === 'Paid' ? '#e8f5e9' : row.status === 'Partially-Paid' ? '#fff3e0' : '#ffebee',
      color: row.status === 'Paid' ? '#2e7d32' : row.status === 'Partially-Paid' ? '#e65100' : '#c62828'
    }
  }, row.status)))), processedData.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    colSpan: 6,
    align: "center",
    sx: {
      py: 3
    }
  }, "No data found for the selected criteria"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    colSpan: 2,
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "TOTALS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "$", totals.billed.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "$", totals.paid.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "$", totals.balance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      backgroundColor: '#f8f9fa'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    fullScreen: true,
    open: openDetails,
    onClose: handleCloseDetails,
    TransitionComponent: Transition
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    sx: {
      position: 'relative',
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    edge: "start",
    color: "inherit",
    onClick: handleCloseDetails,
    "aria-label": "close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_25__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      ml: 2,
      flex: 1
    },
    variant: "h6",
    component: "div"
  }, "Supplier Breakdown: ", selectedSupplier === null || selectedSupplier === void 0 ? void 0 : selectedSupplier.name, " (", selectedSupplier === null || selectedSupplier === void 0 ? void 0 : selectedSupplier.storeName, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    autoFocus: true,
    color: "inherit",
    onClick: handleCloseDetails
  }, "Close"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      p: 4,
      backgroundColor: '#f5f5f5'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "overline",
    color: "textSecondary"
  }, "Total Billed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h5",
    sx: {
      color: '#2e7d32',
      fontWeight: 'bold'
    }
  }, "$", ((selectedSupplier === null || selectedSupplier === void 0 ? void 0 : selectedSupplier.totalBilled) || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "overline",
    color: "textSecondary"
  }, "Total Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h5",
    sx: {
      color: '#0288d1',
      fontWeight: 'bold'
    }
  }, "$", ((selectedSupplier === null || selectedSupplier === void 0 ? void 0 : selectedSupplier.totalPaid) || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "overline",
    color: "textSecondary"
  }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h5",
    sx: {
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, "$", ((selectedSupplier === null || selectedSupplier === void 0 ? void 0 : selectedSupplier.balance) || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_14__["default"],
    sx: {
      boxShadow: 'none',
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Purchase Ref"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Description / Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Billed Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Paid Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Balance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    align: "center",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Status"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, selectedSupplier === null || selectedSupplier === void 0 || (_selectedSupplier$pur = selectedSupplier.purchases) === null || _selectedSupplier$pur === void 0 ? void 0 : _selectedSupplier$pur.sort((a, b) => new Date(a.itemPurchaseDate) - new Date(b.itemPurchaseDate)).map((item, idx) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      key: idx,
      hover: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, dayjs__WEBPACK_IMPORTED_MODULE_27___default()(item.itemPurchaseDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, item.itemPurchaseNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, item.projectName ? item.projectName.name : item.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      align: "right"
    }, "$", (item.calculatedTotal || 0).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      align: "right"
    }, "$", (item.calculatedPaid || 0).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      align: "right",
      sx: {
        fontWeight: 'bold',
        color: item.calculatedBalance > 0 ? '#d32f2f' : 'inherit'
      }
    }, "$", (item.calculatedBalance || 0).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '0.75rem',
        backgroundColor: item.displayStatus === 'Paid' ? '#e8f5e9' : item.displayStatus === 'Partially-Paid' ? '#fff3e0' : '#ffebee',
        color: item.displayStatus === 'Paid' ? '#2e7d32' : item.displayStatus === 'Partially-Paid' ? '#e65100' : '#c62828'
      }
    }, item.displayStatus)));
  }), (!(selectedSupplier !== null && selectedSupplier !== void 0 && selectedSupplier.purchases) || selectedSupplier.purchases.length === 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    colSpan: 7,
    align: "center",
    sx: {
      py: 3
    }
  }, "No purchases found for this supplier."))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SupplierReportInfo);

/***/ },

/***/ "./src/js/AdminView1/ReportsViewAdmin.js"
/*!***********************************************!*\
  !*** ./src/js/AdminView1/ReportsViewAdmin.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListSubheader/ListSubheader.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Assessment.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/ChevronLeft.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Description.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Engineering.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/ExpandLess.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/ExpandMore.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Groups.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Inventory.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/LocalPrintshop.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Logout.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Menu.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/MonetizationOn.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Receipt.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/StarBorder.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _PageView_DashboardInfo_RevenueExpensesAll__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./PageView/DashboardInfo/RevenueExpensesAll */ "./src/js/AdminView1/PageView/DashboardInfo/RevenueExpensesAll.js");
/* harmony import */ var _PageView_DashboardInfo_ItemReportInfo__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./PageView/DashboardInfo/ItemReportInfo */ "./src/js/AdminView1/PageView/DashboardInfo/ItemReportInfo.js");
/* harmony import */ var _PageView_DashboardInfo_MaintenanceReportInfo__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./PageView/DashboardInfo/MaintenanceReportInfo */ "./src/js/AdminView1/PageView/DashboardInfo/MaintenanceReportInfo.js");
/* harmony import */ var _PageView_DashboardInfo_InvoiceReportInfo__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./PageView/DashboardInfo/InvoiceReportInfo */ "./src/js/AdminView1/PageView/DashboardInfo/InvoiceReportInfo.js");
/* harmony import */ var _PageView_DashboardInfo_PayRollReportInfo__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./PageView/DashboardInfo/PayRollReportInfo */ "./src/js/AdminView1/PageView/DashboardInfo/PayRollReportInfo.js");
/* harmony import */ var _PageView_DashboardInfo_ProjectReportInfo__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./PageView/DashboardInfo/ProjectReportInfo */ "./src/js/AdminView1/PageView/DashboardInfo/ProjectReportInfo.js");
/* harmony import */ var _PageView_DashboardInfo_DailyExpensesReportInfo__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./PageView/DashboardInfo/DailyExpensesReportInfo */ "./src/js/AdminView1/PageView/DashboardInfo/DailyExpensesReportInfo.js");
/* harmony import */ var _PageView_DashboardInfo_SalesByCustomerReport__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./PageView/DashboardInfo/SalesByCustomerReport */ "./src/js/AdminView1/PageView/DashboardInfo/SalesByCustomerReport.js");
/* harmony import */ var _PageView_DashboardInfo_POSAnalyticsReport__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./PageView/DashboardInfo/POSAnalyticsReport */ "./src/js/AdminView1/PageView/DashboardInfo/POSAnalyticsReport.js");
/* harmony import */ var _PageView_DashboardInfo_InventoryMovementReport__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./PageView/DashboardInfo/InventoryMovementReport */ "./src/js/AdminView1/PageView/DashboardInfo/InventoryMovementReport.js");
/* harmony import */ var _PageView_DashboardInfo_InventoryValuationReport__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./PageView/DashboardInfo/InventoryValuationReport */ "./src/js/AdminView1/PageView/DashboardInfo/InventoryValuationReport.js");
/* harmony import */ var _PageView_DashboardInfo_ARAgingReport__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./PageView/DashboardInfo/ARAgingReport */ "./src/js/AdminView1/PageView/DashboardInfo/ARAgingReport.js");
/* harmony import */ var _PageView_DashboardInfo_SupplierReportInfo__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./PageView/DashboardInfo/SupplierReportInfo */ "./src/js/AdminView1/PageView/DashboardInfo/SupplierReportInfo.js");
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;












dayjs__WEBPACK_IMPORTED_MODULE_43___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_44___default()));





// Import existing report components













var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_38__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_39__["default"], {
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
var KPICard = _ref3 => {
  var title = _ref3.title,
    value = _ref3.value,
    icon = _ref3.icon,
    color = _ref3.color;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      height: '100%',
      boxShadow: 3,
      borderLeft: "5px solid ".concat(color)
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "textSecondary",
    gutterBottom: true,
    variant: "overline",
    sx: {
      fontSize: '0.7rem'
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      mb: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: onToggle,
    sx: {
      borderRadius: 1,
      mb: 0.5,
      backgroundColor: open ? 'rgba(48, 54, 138, 0.04)' : 'transparent'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: '#30368a'
    }
  }, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    primary: title,
    sx: {
      fontWeight: 'bold'
    }
  }), open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_28__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_29__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "div",
    disablePadding: true
  }, items.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: index,
    sx: {
      pl: 4,
      borderRadius: 1,
      backgroundColor: activeReport === item.id ? 'rgba(48, 54, 138, 0.1)' : 'transparent'
    },
    onClick: () => onSelect(item.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
    fontSize: "small",
    color: activeReport === item.id ? "primary" : "inherit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    primary: item.label,
    sx: {
      color: activeReport === item.id ? '#30368a' : 'inherit'
    }
  }))))));
};
function ReportsViewAdmin() {
  var _user$data2;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_46__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_40__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_40__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.selectCurrentUser);
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    sideBar = _useState2[0],
    setSideBar = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('financials'),
    _useState4 = _slicedToArray(_useState3, 2),
    openSection = _useState4[0],
    setOpenSection = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('revenue'),
    _useState6 = _slicedToArray(_useState5, 2),
    activeReport = _useState6[0],
    setActiveReport = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
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
    _useState8 = _slicedToArray(_useState7, 2),
    data = _useState8[0],
    setData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      revenue: 0,
      expenses: 0,
      profit: 0,
      inventoryValue: 0
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    stats = _useState0[0],
    setStats = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All'),
    _useState10 = _slicedToArray(_useState1, 2),
    selectedYear = _useState10[0],
    setSelectedYear = _useState10[1];
  var availableYears = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    var years = new Set();
    var getYear = date => {
      if (!date) return null;
      // Try parsing common formats
      var d = dayjs__WEBPACK_IMPORTED_MODULE_43___default()(date, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
      if (!d.isValid()) d = dayjs__WEBPACK_IMPORTED_MODULE_43___default()(date);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var filterByYear = (items, dateField) => {
      if (selectedYear === 'All' || !items) return items || [];
      return items.filter(item => {
        var date = item[dateField];
        if (!date) return false;
        var d = dayjs__WEBPACK_IMPORTED_MODULE_43___default()(date, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
        if (!d.isValid()) d = dayjs__WEBPACK_IMPORTED_MODULE_43___default()(date);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_41__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.setUser)({
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
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    grantAccess = _useState12[0],
    setGrantAccess = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState14 = _slicedToArray(_useState13, 2),
    isFetchingAccess = _useState14[0],
    setIsFetchingAccess = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _user$data;
    if (user !== null && user !== void 0 && (_user$data = user.data) !== null && _user$data !== void 0 && _user$data.id) {
      var fetchNumber = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator(function* () {
          try {
            var _res$data;
            var res = yield axios__WEBPACK_IMPORTED_MODULE_41__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/grantAccess"));
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _user$data3;
    if (!hasAccess && grantAccess.length > 0 && (user === null || user === void 0 || (_user$data3 = user.data) === null || _user$data3 === void 0 ? void 0 : _user$data3.userName) !== 'GG') {
      // If we've fetched permissions and user is not GG and doesn't have access
      // We could redirect or show a message.
    }
    var fetchAllData = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        try {
          var _resItemOut$data, _resSuppliers$data;
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_41__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/item")), axios__WEBPACK_IMPORTED_MODULE_41__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/invoice?summary=true")), axios__WEBPACK_IMPORTED_MODULE_41__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/expense?summary=true")), axios__WEBPACK_IMPORTED_MODULE_41__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/payRoll")), axios__WEBPACK_IMPORTED_MODULE_41__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/payment")), axios__WEBPACK_IMPORTED_MODULE_41__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/itemPurchase?summary=true")), axios__WEBPACK_IMPORTED_MODULE_41__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/maintenance?summary=true")), axios__WEBPACK_IMPORTED_MODULE_41__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/projects")), axios__WEBPACK_IMPORTED_MODULE_41__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/pos?summary=true")), axios__WEBPACK_IMPORTED_MODULE_41__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/item-usage")), axios__WEBPACK_IMPORTED_MODULE_41__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/Supplier"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 11),
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.logOut)());
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      pr: '24px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Professional Report Center"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_48__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_47__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_25__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "main",
    sx: {
      backgroundColor: '#f4f5f7',
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    maxWidth: "xl",
    sx: {
      mt: 4,
      mb: 4
    }
  }, isFetchingAccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      mt: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null)) : !hasAccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      textAlign: 'center',
      mt: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h4",
    color: "error"
  }, "Access Denied"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body1"
  }, "You do not have permission to view the Professional Report Center. Please contact GG for access.")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 'bold',
      color: '#30368a'
    }
  }, "Performance Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
  }, availableYears.map(year => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    key: year,
    value: year
  }, year)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    container: true,
    spacing: 3,
    sx: {
      mb: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(KPICard, {
    title: "Total Revenue",
    value: "$".concat(stats.revenue.toLocaleString()),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
      fontSize: "large"
    }),
    color: "#2e7d32"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(KPICard, {
    title: "Total Expenses",
    value: "$".concat(stats.expenses.toLocaleString()),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
      fontSize: "large"
    }),
    color: "#d32f2f"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(KPICard, {
    title: "Net Profit",
    value: "$".concat(stats.profit.toLocaleString()),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      fontSize: "large"
    }),
    color: "#0288d1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(KPICard, {
    title: "Inventory Value",
    value: "$".concat(stats.inventoryValue.toLocaleString()),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], {
      fontSize: "large"
    }),
    color: "#ed6c02"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    item: true,
    xs: 12,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      boxShadow: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: {
      p: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    component: "div",
    sx: {
      py: 2,
      fontWeight: 'bold',
      fontSize: '1rem',
      backgroundColor: '#fff',
      color: '#30368a'
    }
  }, "Operational Reports"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      p: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReportSection, {
    title: "Financials",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null),
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReportSection, {
    title: "Inventory",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], null),
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReportSection, {
    title: "Projects & Ops",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_27__["default"], null),
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReportSection, {
    title: "HR & Payroll",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_30__["default"], null),
    open: openSection === 'hr',
    onToggle: () => handleToggleSection('hr'),
    activeReport: activeReport,
    onSelect: setActiveReport,
    items: [{
      id: 'payroll',
      label: 'Payroll summary'
    }]
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    item: true,
    xs: 12,
    md: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      height: '100%',
      minHeight: '650px',
      boxShadow: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h6",
    color: "primary",
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    fontSize: "small"
  }), " ", activeReportLabel()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    direction: "row",
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_to_print__WEBPACK_IMPORTED_MODULE_49___default()), {
    trigger: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
      variant: "outlined",
      startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], null),
      size: "small"
    }, "Print Report"),
    content: () => componentRef.current
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      mb: 2
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      p: 1,
      backgroundColor: '#fff',
      minHeight: '550px'
    },
    ref: componentRef
  }, activeReport === 'revenue' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_DashboardInfo_RevenueExpensesAll__WEBPACK_IMPORTED_MODULE_51__["default"], {
    onMonth: "All",
    onPayment: data.payments,
    onPayRoll: data.payroll,
    onItemPurChase: data.itemPurchases,
    onExpenses: data.expenses,
    allInvoices: data.invoices,
    posInvoice: data.pos,
    customers: data.customers
  }), activeReport === 'item_report' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_DashboardInfo_ItemReportInfo__WEBPACK_IMPORTED_MODULE_52__["default"], {
    onMonth: "Category",
    onItem: data.items
  }), activeReport === 'maintenance' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_DashboardInfo_MaintenanceReportInfo__WEBPACK_IMPORTED_MODULE_53__["default"], {
    onMonth: "All",
    onMaintenance: data.maintenance
  }), activeReport === 'daily_exp' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_DashboardInfo_DailyExpensesReportInfo__WEBPACK_IMPORTED_MODULE_57__["default"], {
    onMonth: "All",
    onExpenses: data.expenses
  }), activeReport === 'ar_aging' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_DashboardInfo_ARAgingReport__WEBPACK_IMPORTED_MODULE_62__["default"], {
    onInvoice: data.invoices,
    onPayment: data.payments
  }), activeReport === 'payroll' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_DashboardInfo_PayRollReportInfo__WEBPACK_IMPORTED_MODULE_55__["default"], {
    onMonth: "",
    onPayRoll: data.payroll
  }), activeReport === 'projects' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_DashboardInfo_ProjectReportInfo__WEBPACK_IMPORTED_MODULE_56__["default"], {
    onMonth: "Revenue",
    onProjectName: data.projects,
    onPayment: data.payments
  }), activeReport === 'stock_val' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_DashboardInfo_InventoryValuationReport__WEBPACK_IMPORTED_MODULE_61__["default"], {
    items: data.items
  }), activeReport === 'sales_customer' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_DashboardInfo_SalesByCustomerReport__WEBPACK_IMPORTED_MODULE_58__["default"], {
    onInvoice: data.invoices,
    onPos: data.pos,
    onPayment: data.payments
  }), activeReport === 'pos_analysis' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_DashboardInfo_POSAnalyticsReport__WEBPACK_IMPORTED_MODULE_59__["default"], {
    onPos: data.pos
  }), activeReport === 'inventory_movement' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_DashboardInfo_InventoryMovementReport__WEBPACK_IMPORTED_MODULE_60__["default"], {
    onInventoryIn: data.itemPurchases,
    onInventoryOut: data.itemOut
  }), activeReport === 'supplier_payables' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_DashboardInfo_SupplierReportInfo__WEBPACK_IMPORTED_MODULE_63__["default"], {
    onSuppliers: data.suppliers,
    onItemPurchase: data.itemPurchases
  })))))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportsViewAdmin);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUmVwb3J0c1ZpZXdBZG1pbl9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQXlEO0FBS2xDO0FBQ2lFO0FBQzlEO0FBQ0k7QUFDTTtBQUNhO0FBRWpELFNBQVNrQyxhQUFhQSxDQUFBQyxJQUFBLEVBQTJCO0VBQUEsSUFBQUMscUJBQUE7RUFBQSxJQUF4QkMsU0FBUyxHQUFBRixJQUFBLENBQVRFLFNBQVM7SUFBRUMsU0FBUyxHQUFBSCxJQUFBLENBQVRHLFNBQVM7RUFDekMsSUFBQUMsU0FBQSxHQUFvQ3RDLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUF1QyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF6Q0csVUFBVSxHQUFBRixVQUFBO0lBQUVHLGFBQWEsR0FBQUgsVUFBQTtFQUNoQyxJQUFBSSxVQUFBLEdBQWdEM0MsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTRDLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXZERSxnQkFBZ0IsR0FBQUQsVUFBQTtJQUFFRSxtQkFBbUIsR0FBQUYsVUFBQTtFQUM1QyxJQUFNRyxZQUFZLEdBQUc3Qyw2Q0FBTSxDQUFDLENBQUM7RUFFN0IsSUFBTThDLFdBQVcsR0FBR2hCLGdFQUFlLENBQUM7SUFDaENpQixPQUFPLEVBQUVBLENBQUEsS0FBTUYsWUFBWSxDQUFDRyxPQUFPO0lBQ25DQyxhQUFhLDJCQUFBQyxNQUFBLENBQTJCLENBQUFQLGdCQUFnQixhQUFoQkEsZ0JBQWdCLHVCQUFoQkEsZ0JBQWdCLENBQUVRLElBQUksS0FBSSxVQUFVO0VBQ2hGLENBQUMsQ0FBQztFQUVGLElBQU1DLGdCQUFnQixHQUFHckQsOENBQU8sQ0FBQyxNQUFNO0lBQ25DLElBQUksQ0FBQzRDLGdCQUFnQixJQUFJLENBQUNULFNBQVMsSUFBSSxDQUFDbUIsS0FBSyxDQUFDQyxPQUFP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InNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9EYXNoYm9hcmRJbmZvL0FSQWdpbmdSZXBvcnQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0Rhc2hib2FyZEluZm8vSW52ZW50b3J5TW92ZW1lbnRSZXBvcnQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0Rhc2hib2FyZEluZm8vSW52ZW50b3J5VmFsdWF0aW9uUmVwb3J0LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9EYXNoYm9hcmRJbmZvL1BPU0FuYWx5dGljc1JlcG9ydC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvRGFzaGJvYXJkSW5mby9TYWxlc0J5Q3VzdG9tZXJSZXBvcnQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0Rhc2hib2FyZEluZm8vU3VwcGxpZXJSZXBvcnRJbmZvLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9SZXBvcnRzVmlld0FkbWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgQm94LCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsXHJcbiAgICBUYWJsZVJvdywgUGFwZXIsIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgRGl2aWRlciwgR3JpZCwgQ2FyZCwgQ2FyZENvbnRlbnQsXHJcbiAgICBJY29uQnV0dG9uLCBUb29sdGlwLCBDaGlwLCBCdXR0b24sIERpYWxvZywgRGlhbG9nVGl0bGUsIERpYWxvZ0NvbnRlbnQsIERpYWxvZ0FjdGlvbnNcclxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTG9jYWxQcmludHNob3AsIEZpbGVEb3dubG9hZCwgSW5mb091dGxpbmVkLCBDbG9zZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgRXhjZWxKUyBmcm9tICdleGNlbGpzJztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IHVzZVJlYWN0VG9QcmludCB9IGZyb20gJ3JlYWN0LXRvLXByaW50JztcclxuXHJcbmZ1bmN0aW9uIEFSQWdpbmdSZXBvcnQoeyBvbkludm9pY2UsIG9uUGF5bWVudCB9KSB7XHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRDdXN0b21lciwgc2V0U2VsZWN0ZWRDdXN0b21lcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByaW50ID0gdXNlUmVhY3RUb1ByaW50KHtcclxuICAgICAgICBjb250ZW50OiAoKSA9PiBjb21wb25lbnRSZWYuY3VycmVudCxcclxuICAgICAgICBkb2N1bWVudFRpdGxlOiBgU3RhdGVtZW50X09mX0FjY291bnRzXyR7c2VsZWN0ZWRDdXN0b21lcj8ubmFtZSB8fCAnQ3VzdG9tZXInfWBcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGN1c3RvbWVySW52b2ljZXMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkQ3VzdG9tZXIgfHwgIW9uSW52b2ljZSB8fCAhQXJyYXkuaXNBcnJheShvbkludm9pY2UpKSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIG9uSW52b2ljZS5maWx0ZXIoaW52ID0+IHtcclxuICAgICAgICAgICAgaWYgKFsnRHJhZnQnLCAnVm9pZGVkJywgJ1ZvaWQnLCAnRGVjbGluZSddLmluY2x1ZGVzKGludi5zdGF0dXMpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhbGFuY2UgPSBOdW1iZXIoaW52LmJhbGFuY2VEdWUgfHwgMCk7XHJcbiAgICAgICAgICAgIGlmIChiYWxhbmNlIDw9IDApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgY3VzdElkID0gaW52LmN1c3RvbWVyTmFtZT8uX2lkIHx8IGludi5jdXN0b21lcklkIHx8ICd1bmtub3duJztcclxuICAgICAgICAgICAgcmV0dXJuIGN1c3RJZCA9PT0gc2VsZWN0ZWRDdXN0b21lci5pZDtcclxuICAgICAgICB9KS5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmludm9pY2VEYXRlKSAtIG5ldyBEYXRlKGIuaW52b2ljZURhdGUpKTtcclxuICAgIH0sIFtzZWxlY3RlZEN1c3RvbWVyLCBvbkludm9pY2VdKTtcclxuXHJcbiAgICBjb25zdCBhZ2luZ0RhdGEgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBpZiAoIW9uSW52b2ljZSB8fCAhQXJyYXkuaXNBcnJheShvbkludm9pY2UpKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbWVyTWFwID0ge307XHJcblxyXG4gICAgICAgIG9uSW52b2ljZS5mb3JFYWNoKGludiA9PiB7XHJcbiAgICAgICAgICAgIC8vIE9ubHkgY29uc2lkZXIgaW52b2ljZXMgd2l0aCBhIGJhbGFuY2UgZHVlIGFuZCBub3Qgdm9pZGVkL2RyYWZ0XHJcbiAgICAgICAgICAgIGlmIChbJ0RyYWZ0JywgJ1ZvaWRlZCcsICdWb2lkJywgJ0RlY2xpbmUnXS5pbmNsdWRlcyhpbnYuc3RhdHVzKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYmFsYW5jZSA9IE51bWJlcihpbnYuYmFsYW5jZUR1ZSB8fCAwKTtcclxuICAgICAgICAgICAgaWYgKGJhbGFuY2UgPD0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VzdElkID0gaW52LmN1c3RvbWVyTmFtZT8uX2lkIHx8IGludi5jdXN0b21lcklkIHx8ICd1bmtub3duJztcclxuICAgICAgICAgICAgY29uc3QgY3VzdE5hbWUgPSBpbnYuY3VzdG9tZXJOYW1lPy5jdXN0b21lck5hbWUgfHwgJ1Vua25vd24gQ3VzdG9tZXInO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFjdXN0b21lck1hcFtjdXN0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21lck1hcFtjdXN0SWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBjdXN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogY3VzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJzAtMzAnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICczMS02MCc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgJzYxLTkwJzogMCxcclxuICAgICAgICAgICAgICAgICAgICAnOTArJzogMCxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogMFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaW52RGF0ZSA9IGRheWpzKGludi5pbnZvaWNlRGF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gZGF5anMoKTtcclxuICAgICAgICAgICAgY29uc3QgZGF5c092ZXJkdWUgPSB0b2RheS5kaWZmKGludkRhdGUsICdkYXknKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXlzT3ZlcmR1ZSA8PSAzMCkge1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJNYXBbY3VzdElkXVsnMC0zMCddICs9IGJhbGFuY2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF5c092ZXJkdWUgPD0gNjApIHtcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyTWFwW2N1c3RJZF1bJzMxLTYwJ10gKz0gYmFsYW5jZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXlzT3ZlcmR1ZSA8PSA5MCkge1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJNYXBbY3VzdElkXVsnNjEtOTAnXSArPSBiYWxhbmNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJNYXBbY3VzdElkXVsnOTArJ10gKz0gYmFsYW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXN0b21lck1hcFtjdXN0SWRdLnRvdGFsICs9IGJhbGFuY2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKGN1c3RvbWVyTWFwKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYy5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSlcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudG90YWwgLSBhLnRvdGFsKTtcclxuICAgIH0sIFtvbkludm9pY2UsIHNlYXJjaFRlcm1dKTtcclxuXHJcbiAgICBjb25zdCB0b3RhbHMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gYWdpbmdEYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiAoe1xyXG4gICAgICAgICAgICAnMC0zMCc6IGFjY1snMC0zMCddICsgY3VyclsnMC0zMCddLFxyXG4gICAgICAgICAgICAnMzEtNjAnOiBhY2NbJzMxLTYwJ10gKyBjdXJyWyczMS02MCddLFxyXG4gICAgICAgICAgICAnNjEtOTAnOiBhY2NbJzYxLTkwJ10gKyBjdXJyWyc2MS05MCddLFxyXG4gICAgICAgICAgICAnOTArJzogYWNjWyc5MCsnXSArIGN1cnJbJzkwKyddLFxyXG4gICAgICAgICAgICB0b3RhbDogYWNjLnRvdGFsICsgY3Vyci50b3RhbFxyXG4gICAgICAgIH0pLCB7ICcwLTMwJzogMCwgJzMxLTYwJzogMCwgJzYxLTkwJzogMCwgJzkwKyc6IDAsIHRvdGFsOiAwIH0pO1xyXG4gICAgfSwgW2FnaW5nRGF0YV0pO1xyXG5cclxuICAgIGNvbnN0IGV4cG9ydFRvRXhjZWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd29ya2Jvb2sgPSBuZXcgRXhjZWxKUy5Xb3JrYm9vaygpO1xyXG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHdvcmtib29rLmFkZFdvcmtzaGVldCgnQS1SIEFnaW5nIFJlcG9ydCcpO1xyXG5cclxuICAgICAgICB3b3Jrc2hlZXQuY29sdW1ucyA9IFtcclxuICAgICAgICAgICAgeyBoZWFkZXI6ICdDdXN0b21lciBOYW1lJywga2V5OiAnbmFtZScsIHdpZHRoOiAzMCB9LFxyXG4gICAgICAgICAgICB7IGhlYWRlcjogJzAtMzAgRGF5cycsIGtleTogJzAtMzAnLCB3aWR0aDogMTUgfSxcclxuICAgICAgICAgICAgeyBoZWFkZXI6ICczMS02MCBEYXlzJywga2V5OiAnMzEtNjAnLCB3aWR0aDogMTUgfSxcclxuICAgICAgICAgICAgeyBoZWFkZXI6ICc2MS05MCBEYXlzJywga2V5OiAnNjEtOTAnLCB3aWR0aDogMTUgfSxcclxuICAgICAgICAgICAgeyBoZWFkZXI6ICc5MCsgRGF5cycsIGtleTogJzkwKycsIHdpZHRoOiAxNSB9LFxyXG4gICAgICAgICAgICB7IGhlYWRlcjogJ1RvdGFsIEJhbGFuY2UnLCBrZXk6ICd0b3RhbCcsIHdpZHRoOiAxOCB9LFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGFnaW5nRGF0YS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIHdvcmtzaGVldC5hZGRSb3cocm93KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd29ya3NoZWV0LmdldFJvdygxKS5mb250ID0geyBib2xkOiB0cnVlIH07XHJcbiAgICAgICAgd29ya3NoZWV0LmFkZFJvdyhbXSk7XHJcbiAgICAgICAgd29ya3NoZWV0LmFkZFJvdyh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdUT1RBTFMnLFxyXG4gICAgICAgICAgICAnMC0zMCc6IHRvdGFsc1snMC0zMCddLFxyXG4gICAgICAgICAgICAnMzEtNjAnOiB0b3RhbHNbJzMxLTYwJ10sXHJcbiAgICAgICAgICAgICc2MS05MCc6IHRvdGFsc1snNjEtOTAnXSxcclxuICAgICAgICAgICAgJzkwKyc6IHRvdGFsc1snOTArJ10sXHJcbiAgICAgICAgICAgIHRvdGFsOiB0b3RhbHMudG90YWxcclxuICAgICAgICB9KS5mb250ID0geyBib2xkOiB0cnVlIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IHdvcmtib29rLnhsc3gud3JpdGVCdWZmZXIoKTtcclxuICAgICAgICBzYXZlQXMobmV3IEJsb2IoW2J1ZmZlcl0pLCBgQVJfQWdpbmdfUmVwb3J0XyR7ZGF5anMoKS5mb3JtYXQoJ1lZWVktTU0tREQnKX0ueGxzeGApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgbWI6IDMsIGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAyLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBDdXN0b21lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAzMDAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkFnaW5nIGlzIGNhbGN1bGF0ZWQgYmFzZWQgb24gSW52b2ljZSBEYXRlIHZzIFRvZGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCI+PEluZm9PdXRsaW5lZCAvPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PEZpbGVEb3dubG9hZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtleHBvcnRUb0V4Y2VsfVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IG1sOiAnYXV0bycsIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRXhwb3J0IEV4Y2VsXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3g9e3sgbWI6IDQgfX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGJvcmRlclRvcDogJzRweCBzb2xpZCAjNGNhZjUwJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgdmFyaWFudD1cImNhcHRpb25cIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+MC0zMCBEQVlTIChDVVJSRU5UKTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT4ke3RvdGFsc1snMC0zMCddLnRvTG9jYWxlU3RyaW5nKCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgYm9yZGVyVG9wOiAnNHB4IHNvbGlkICNmZjk4MDAnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiB2YXJpYW50PVwiY2FwdGlvblwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT4zMS02MCBEQVlTPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PiR7dG90YWxzWyczMS02MCddLnRvTG9jYWxlU3RyaW5nKCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgYm9yZGVyVG9wOiAnNHB4IHNvbGlkICNmNDQzMzYnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiB2YXJpYW50PVwiY2FwdGlvblwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT42MS05MCBEQVlTPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PiR7dG90YWxzWyc2MS05MCddLnRvTG9jYWxlU3RyaW5nKCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgYm9yZGVyVG9wOiAnNHB4IHNvbGlkICNiNzFjMWMnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmNWY1JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgdmFyaWFudD1cImNhcHRpb25cIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+T1ZFUiA5MCBEQVlTPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBjb2xvcjogJyNiNzFjMWMnIH19PiR7dG90YWxzWyc5MCsnXS50b0xvY2FsZVN0cmluZygpfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfSBzeD17eyBib3hTaGFkb3c6ICdub25lJywgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnIH19PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIHN0aWNreUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+Q3VzdG9tZXIgTmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT4wLTMwIERheXM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+MzEtNjAgRGF5czwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT42MS05MCBEYXlzPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnIH19PjkwKyBEYXlzPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnLCBjb2xvcjogJ3doaXRlJyB9fT5Ub3RhbCBCYWxhbmNlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FnaW5nRGF0YS5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93LmlkfSBob3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBmb250V2VpZ2h0OiAnNTAwJywgY29sb3I6ICcjMTk3NmQyJywgY3Vyc29yOiAncG9pbnRlcicsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDdXN0b21lcihyb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGNvbG9yOiByb3dbJzAtMzAnXSA+IDAgPyAnIzRjYWY1MCcgOiAnI2NjYycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3dbJzAtMzAnXSA+IDAgPyBgJCR7cm93WycwLTMwJ10udG9Mb2NhbGVTdHJpbmcoKX1gIDogJy0nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGNvbG9yOiByb3dbJzMxLTYwJ10gPiAwID8gJyNmZjk4MDAnIDogJyNjY2MnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93WyczMS02MCddID4gMCA/IGAkJHtyb3dbJzMxLTYwJ10udG9Mb2NhbGVTdHJpbmcoKX1gIDogJy0nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGNvbG9yOiByb3dbJzYxLTkwJ10gPiAwID8gJyNmNDQzMzYnIDogJyNjY2MnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93Wyc2MS05MCddID4gMCA/IGAkJHtyb3dbJzYxLTkwJ10udG9Mb2NhbGVTdHJpbmcoKX1gIDogJy0nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGNvbG9yOiByb3dbJzkwKyddID4gMCA/ICcjYjcxYzFjJyA6ICcjY2NjJywgZm9udFdlaWdodDogcm93Wyc5MCsnXSA+IDAgPyAnNzAwJyA6ICc0MDAnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93Wyc5MCsnXSA+IDAgPyBgJCR7cm93Wyc5MCsnXS50b0xvY2FsZVN0cmluZygpfWAgOiAnLSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3Jvdy50b3RhbC50b0xvY2FsZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthZ2luZ0RhdGEubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezZ9IGFsaWduPVwiY2VudGVyXCIgc3g9e3sgcHk6IDMgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIG91dHN0YW5kaW5nIGJhbGFuY2VzIGZvdW5kLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2YxZjNmNCcgfX0+R1JBTkQgVE9UQUxTPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmMWYzZjQnIH19PiR7dG90YWxzWycwLTMwJ10udG9Mb2NhbGVTdHJpbmcoKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2YxZjNmNCcgfX0+JHt0b3RhbHNbJzMxLTYwJ10udG9Mb2NhbGVTdHJpbmcoKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2YxZjNmNCcgfX0+JHt0b3RhbHNbJzYxLTkwJ10udG9Mb2NhbGVTdHJpbmcoKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2YxZjNmNCcgfX0+JHt0b3RhbHNbJzkwKyddLnRvTG9jYWxlU3RyaW5nKCl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmMWYzZjQnLCBmb250U2l6ZTogJzEuMXJlbScgfX0+JHt0b3RhbHMudG90YWwudG9Mb2NhbGVTdHJpbmcoKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8RGlhbG9nIG9wZW49e0Jvb2xlYW4oc2VsZWN0ZWRDdXN0b21lcil9IG9uQ2xvc2U9eygpID0+IHNldFNlbGVjdGVkQ3VzdG9tZXIobnVsbCl9IG1heFdpZHRoPVwibWRcIiBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZW1lbnQgb2YgQWNjb3VudHMgLSB7c2VsZWN0ZWRDdXN0b21lcj8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDdXN0b21lcihudWxsKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudCBkaXZpZGVycz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17Y29tcG9uZW50UmVmfSBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgbWI6IDMsIGRpc3BsYXk6ICdub25lJywgJ0BtZWRpYSBwcmludCc6IHsgZGlzcGxheTogJ2Jsb2NrJyB9IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVtZW50IG9mIEFjY291bnRzIC0ge3NlbGVjdGVkQ3VzdG9tZXI/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9IHN4PXt7IGJveFNoYWRvdzogJ25vbmUnLCBib3JkZXI6ICcxcHggc29saWQgI2VlZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmMWYzZjQnIH19PkRhdGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjFmM2Y0JyB9fT5JbnZvaWNlICM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2YxZjNmNCcgfX0+VG90YWwgQW1vdW50PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmMWYzZjQnIH19PkFtb3VudCBQYWlkPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmMWYzZjQnIH19PkJhbGFuY2UgRHVlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjFmM2Y0JyB9fT5PdmVyZHVlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1c3RvbWVySW52b2ljZXMubWFwKGludiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnZEYXRlID0gZGF5anMoaW52Lmludm9pY2VEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRheXNPdmVyZHVlID0gTWF0aC5tYXgoMCwgZGF5anMoKS5kaWZmKGludkRhdGUsICdkYXknKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IE51bWJlcihpbnYudG90YWxJbnZvaWNlIHx8IGludi50b3RhbCB8fCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhbGFuY2UgPSBOdW1iZXIoaW52LmJhbGFuY2VEdWUgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWlkID0gdG90YWwgLSBiYWxhbmNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtpbnYuX2lkfSBob3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57aW52RGF0ZS5mb3JtYXQoJ0REL01NL1lZWVknKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57aW52Lmludm9pY2VOdW1iZXIgPyBgSU5WLSR7U3RyaW5nKGludi5pbnZvaWNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfWAgOiAoaW52LmZhY3R1cmVOdW1iZXIgPyBgSU5WLSR7U3RyaW5nKGludi5mYWN0dXJlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfWAgOiAnTi9BJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPiR7dG90YWwudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJ9KX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+JHtwYWlkLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge21pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyfSl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgY29sb3I6ICcjZDMyZjJmJyB9fT4ke2JhbGFuY2UudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJ9KX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXAgbGFiZWw9e2Ake2RheXNPdmVyZHVlfSBkYXlzYH0gc2l6ZT1cInNtYWxsXCIgY29sb3I9e2RheXNPdmVyZHVlID4gOTAgPyBcImVycm9yXCIgOiBkYXlzT3ZlcmR1ZSA+IDMwID8gXCJ3YXJuaW5nXCIgOiBcInN1Y2Nlc3NcIn0gdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VzdG9tZXJJbnZvaWNlcy5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Nn0gYWxpZ249XCJjZW50ZXJcIiBzeD17eyBweTogMyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gb3V0c3RhbmRpbmcgaW52b2ljZXMgZm91bmQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17NH0gc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnIH19PlRvdGFsIE91dHN0YW5kaW5nIEJhbGFuY2U6PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGNvbG9yOiAnI2QzMmYyZicsIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnLCBmb250U2l6ZTogJzEuMXJlbScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzZWxlY3RlZEN1c3RvbWVyPy50b3RhbD8udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJ9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVByaW50fSB2YXJpYW50PVwib3V0bGluZWRcIiBzdGFydEljb249ezxMb2NhbFByaW50c2hvcCAvPn0gc3g9e3sgbXI6ICdhdXRvJywgY29sb3I6ICcjMzAzNjhhJywgYm9yZGVyQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJpbnRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ3VzdG9tZXIobnVsbCl9IHZhcmlhbnQ9XCJjb250YWluZWRcIiBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBUkFnaW5nUmVwb3J0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBCb3gsIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVDb250YWluZXIsIFRhYmxlSGVhZCxcclxuICAgIFRhYmxlUm93LCBQYXBlciwgVHlwb2dyYXBoeSwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCxcclxuICAgIE1lbnVJdGVtLCBHcmlkLCBDYXJkLCBDYXJkQ29udGVudCwgRGl2aWRlciwgVGV4dEZpZWxkXHJcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBpc0JldHdlZW4gZnJvbSAnZGF5anMvcGx1Z2luL2lzQmV0d2Vlbic7XHJcbmltcG9ydCBFeGNlbEpTIGZyb20gJ2V4Y2VsanMnO1xyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IHsgRmlsZURvd25sb2FkIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5cclxuaW1wb3J0IGN1c3RvbVBhcnNlRm9ybWF0IGZyb20gJ2RheWpzL3BsdWdpbi9jdXN0b21QYXJzZUZvcm1hdCc7XHJcblxyXG5kYXlqcy5leHRlbmQoaXNCZXR3ZWVuKTtcclxuZGF5anMuZXh0ZW5kKGN1c3RvbVBhcnNlRm9ybWF0KTtcclxuXHJcbmZ1bmN0aW9uIEludmVudG9yeU1vdmVtZW50UmVwb3J0KHsgb25JbnZlbnRvcnlJbiwgb25JbnZlbnRvcnlPdXQgfSkge1xyXG4gICAgY29uc3QgW2RhdGVSYW5nZSwgc2V0RGF0ZVJhbmdlXSA9IHVzZVN0YXRlKCdNb250aCcpO1xyXG4gICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBjb25zdCBtb3ZlbWVudCA9IHt9O1xyXG5cclxuICAgICAgICBjb25zdCBub3cgPSBkYXlqcygpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gZGF0ZVJhbmdlID09PSAnTW9udGgnID8gbm93LnN0YXJ0T2YoJ21vbnRoJykgOiBub3cuc3RhcnRPZigneWVhcicpO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IG5vdy5lbmRPZignZGF5Jyk7XHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3MgUHVyY2hhc2VzIChJbilcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbkludmVudG9yeUluKSkge1xyXG4gICAgICAgICAgICBvbkludmVudG9yeUluLmZvckVhY2gocHJvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBUcnkgcGFyc2luZyByb2J1c3RseVxyXG4gICAgICAgICAgICAgICAgbGV0IGQgPSBkYXlqcyhwcm9jLml0ZW1QdXJjaGFzZURhdGUsIFsnWVlZWS1NTS1ERCcsICdERC9NTS9ZWVlZJywgJ01NL0REL1lZWVknLCAnWVlZWS9NTS9ERCddLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmICghZC5pc1ZhbGlkKCkpIGQgPSBkYXlqcyhwcm9jLml0ZW1QdXJjaGFzZURhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRlUmFuZ2UgIT09ICdBbGwnICYmICghZC5pc1ZhbGlkKCkgfHwgIWQuaXNCZXR3ZWVuKHN0YXJ0LCBlbmQsICdkYXknLCAnW10nKSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAocHJvYy5pdGVtcyB8fCBbXSkuZm9yRWFjaChpdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2t1ID0gaXQuaXRlbU5hbWU/Lml0ZW1OYW1lIHx8ICh0eXBlb2YgaXQuaXRlbU5hbWUgPT09ICdzdHJpbmcnID8gaXQuaXRlbU5hbWUgOiAnVW5rbm93bicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbW92ZW1lbnRbc2t1XSkgbW92ZW1lbnRbc2t1XSA9IHsgbmFtZTogc2t1LCBpbjogMCwgb3V0OiAwLCBiYWxhbmNlOiAwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZW1lbnRbc2t1XS5pbiArPSBOdW1iZXIoaXQuaXRlbVF0eSB8fCAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3MgSXRlbSBPdXRzXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob25JbnZlbnRvcnlPdXQpKSB7XHJcbiAgICAgICAgICAgIG9uSW52ZW50b3J5T3V0LmZvckVhY2gob3V0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRlUmFuZ2UgIT09ICdBbGwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVHJ5IHBhcnNpbmcgcm9idXN0bHlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZCA9IGRheWpzKG91dC5pdGVtT3V0RGF0ZSwgWydZWVlZLU1NLUREJywgJ0REL01NL1lZWVknLCAnTU0vREQvWVlZWScsICdZWVlZL01NL0REJ10sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZC5pc1ZhbGlkKCkpIGQgPSBkYXlqcyhvdXQuaXRlbU91dERhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWQuaXNWYWxpZCgpIHx8ICFkLmlzQmV0d2VlbihzdGFydCwgZW5kLCAnZGF5JywgJ1tdJykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAob3V0Lml0ZW1zUXR5QXJyYXkgfHwgW10pLmZvckVhY2goaXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNrdSA9IGl0Lml0ZW1OYW1lPy5pdGVtTmFtZSB8fCAodHlwZW9mIGl0Lml0ZW1OYW1lID09PSAnc3RyaW5nJyA/IGl0Lml0ZW1OYW1lIDogJ1Vua25vd24nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1vdmVtZW50W3NrdV0pIG1vdmVtZW50W3NrdV0gPSB7IG5hbWU6IHNrdSwgaW46IDAsIG91dDogMCwgYmFsYW5jZTogMCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSBuZXdJdGVtT3V0IChmcm9tIEl0ZW1PdXQpIG9yIGl0ZW1PdXQgKGZhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVtZW50W3NrdV0ub3V0ICs9IE51bWJlcihpdC5uZXdJdGVtT3V0IHx8IGl0Lml0ZW1PdXQgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhtb3ZlbWVudClcclxuICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkpXHJcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiAoeyAuLi5pdGVtLCBiYWxhbmNlOiBpdGVtLmluIC0gaXRlbS5vdXQgfSkpXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmluICsgYi5vdXQgLSAoYS5pbiArIGEub3V0KSk7XHJcbiAgICB9LCBbb25JbnZlbnRvcnlJbiwgb25JbnZlbnRvcnlPdXQsIGRhdGVSYW5nZSwgc2VhcmNoVGVybV0pO1xyXG5cclxuICAgIGNvbnN0IGV4cG9ydFRvRXhjZWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd29ya2Jvb2sgPSBuZXcgRXhjZWxKUy5Xb3JrYm9vaygpO1xyXG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHdvcmtib29rLmFkZFdvcmtzaGVldCgnSW52ZW50b3J5IE1vdmVtZW50Jyk7XHJcbiAgICAgICAgd29ya3NoZWV0LmNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIHsgaGVhZGVyOiAnSXRlbSBOYW1lJywga2V5OiAnbmFtZScsIHdpZHRoOiAzMCB9LFxyXG4gICAgICAgICAgICB7IGhlYWRlcjogJ1RvdGFsIEluJywga2V5OiAnaW4nLCB3aWR0aDogMTUgfSxcclxuICAgICAgICAgICAgeyBoZWFkZXI6ICdUb3RhbCBPdXQnLCBrZXk6ICdvdXQnLCB3aWR0aDogMTUgfSxcclxuICAgICAgICAgICAgeyBoZWFkZXI6ICdOZXQgTW92ZW1lbnQnLCBrZXk6ICdiYWxhbmNlJywgd2lkdGg6IDE1IH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBwcm9jZXNzZWREYXRhLmZvckVhY2gocm93ID0+IHdvcmtzaGVldC5hZGRSb3cocm93KSk7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgd29ya2Jvb2sueGxzeC53cml0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIHNhdmVBcyhuZXcgQmxvYihbYnVmZmVyXSksIGBJbnZlbnRvcnlfTW92ZW1lbnRfJHtkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCcpfS54bHN4YCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPEJveCBzeD17eyBtYjogMywgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDIsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoIEl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc2l6ZT1cInNtYWxsXCIgc3g9e3sgd2lkdGg6IDE1MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbD5QZXJpb2Q8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCB2YWx1ZT17ZGF0ZVJhbmdlfSBsYWJlbD1cIlBlcmlvZFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0ZVJhbmdlKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIk1vbnRoXCI+VGhpcyBNb250aDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlllYXJcIj5UaGlzIFllYXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0YXJ0SWNvbj17PEZpbGVEb3dubG9hZCAvPn0gb25DbGljaz17ZXhwb3J0VG9FeGNlbH0gc3g9e3sgbWw6ICdhdXRvJywgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgRXhwb3J0IEV4Y2VsXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0gZWxldmF0aW9uPXswfSBzeD17eyBib3JkZXI6ICcxcHggc29saWQgI2VlZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgc3RpY2t5SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19Pkl0ZW0gTmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBjb2xvcjogJ3N1Y2Nlc3MubWFpbicgfX0+U3RvY2sgSW48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgY29sb3I6ICdlcnJvci5tYWluJyB9fT5TdG9jayBPdXQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5OZXQgTW92ZW1lbnQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzc2VkRGF0YS5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93Lm5hbWV9IGhvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5uYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuaW4udG9Mb2NhbGVTdHJpbmcoKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93Lm91dC50b0xvY2FsZVN0cmluZygpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5iYWxhbmNlID4gMCA/IGArJHtyb3cuYmFsYW5jZX1gIDogcm93LmJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZlbnRvcnlNb3ZlbWVudFJlcG9ydDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgQm94LCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsXHJcbiAgICBUYWJsZVJvdywgUGFwZXIsIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgR3JpZCwgQ2FyZCwgQ2FyZENvbnRlbnQsIERpdmlkZXJcclxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IEV4Y2VsSlMgZnJvbSAnZXhjZWxqcyc7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyBGaWxlRG93bmxvYWQsIEludmVudG9yeSwgTW9uZXRpemF0aW9uT24gfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcblxyXG5mdW5jdGlvbiBJbnZlbnRvcnlWYWx1YXRpb25SZXBvcnQoeyBpdGVtcyB9KSB7XHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIGlmICghaXRlbXMgfHwgIUFycmF5LmlzQXJyYXkoaXRlbXMpKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtc1xyXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlSXRlbSA9PT0gJ0dvb2RzJylcclxuICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+XHJcbiAgICAgICAgICAgICAgICBpdGVtLml0ZW1OYW1lPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgIGl0ZW0uaXRlbURlc2NyaXB0aW9uPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpdGVtLl9pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0uaXRlbU5hbWUgfHwgJ1VubmFtZWQgSXRlbScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5pdGVtRGVzY3JpcHRpb24gfHwgJy0nLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IGl0ZW0uaXRlbVF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgICAgICAgICBjb3N0UHJpY2U6IGl0ZW0uaXRlbUNvc3RQcmljZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgdmFsdWF0aW9uOiAoaXRlbS5pdGVtUXVhbnRpdHkgfHwgMCkgKiAoaXRlbS5pdGVtQ29zdFByaWNlIHx8IDApXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1YXRpb24gLSBhLnZhbHVhdGlvbik7XHJcbiAgICB9LCBbaXRlbXMsIHNlYXJjaFRlcm1dKTtcclxuXHJcbiAgICBjb25zdCB0b3RhbHMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4gKHtcclxuICAgICAgICAgICAgcXR5OiBhY2MucXR5ICsgY3Vyci5xdWFudGl0eSxcclxuICAgICAgICAgICAgdmFsdWU6IGFjYy52YWx1ZSArIGN1cnIudmFsdWF0aW9uXHJcbiAgICAgICAgfSksIHsgcXR5OiAwLCB2YWx1ZTogMCB9KTtcclxuICAgIH0sIFtwcm9jZXNzZWREYXRhXSk7XHJcblxyXG4gICAgY29uc3QgZXhwb3J0VG9FeGNlbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB3b3JrYm9vayA9IG5ldyBFeGNlbEpTLldvcmtib29rKCk7XHJcbiAgICAgICAgY29uc3Qgd29ya3NoZWV0ID0gd29ya2Jvb2suYWRkV29ya3NoZWV0KCdJbnZlbnRvcnkgVmFsdWF0aW9uJyk7XHJcbiAgICAgICAgd29ya3NoZWV0LmNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIHsgaGVhZGVyOiAnSXRlbSBOYW1lJywga2V5OiAnbmFtZScsIHdpZHRoOiAzMCB9LFxyXG4gICAgICAgICAgICB7IGhlYWRlcjogJ0Rlc2NyaXB0aW9uJywga2V5OiAnZGVzY3JpcHRpb24nLCB3aWR0aDogNDAgfSxcclxuICAgICAgICAgICAgeyBoZWFkZXI6ICdRdWFudGl0eScsIGtleTogJ3F1YW50aXR5Jywgd2lkdGg6IDEyIH0sXHJcbiAgICAgICAgICAgIHsgaGVhZGVyOiAnVW5pdCBDb3N0ICgkKScsIGtleTogJ2Nvc3RQcmljZScsIHdpZHRoOiAxNSB9LFxyXG4gICAgICAgICAgICB7IGhlYWRlcjogJ1RvdGFsIFZhbHVlICgkKScsIGtleTogJ3ZhbHVhdGlvbicsIHdpZHRoOiAxNSB9LFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHByb2Nlc3NlZERhdGEuZm9yRWFjaChyb3cgPT4gd29ya3NoZWV0LmFkZFJvdyhyb3cpKTtcclxuICAgICAgICB3b3Jrc2hlZXQuZ2V0Um93KDEpLmZvbnQgPSB7IGJvbGQ6IHRydWUgfTtcclxuICAgICAgICB3b3Jrc2hlZXQuYWRkUm93KFtdKTtcclxuICAgICAgICB3b3Jrc2hlZXQuYWRkUm93KHsgbmFtZTogJ1RPVEFMUycsIHF1YW50aXR5OiB0b3RhbHMucXR5LCB2YWx1YXRpb246IHRvdGFscy52YWx1ZSB9KS5mb250ID0geyBib2xkOiB0cnVlIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IHdvcmtib29rLnhsc3gud3JpdGVCdWZmZXIoKTtcclxuICAgICAgICBzYXZlQXMobmV3IEJsb2IoW2J1ZmZlcl0pLCBgSW52ZW50b3J5X1ZhbHVhdGlvbl8ke2RheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREJyl9Lnhsc3hgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IG1iOiAzLCBkaXNwbGF5OiAnZmxleCcsIGdhcDogMiwgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2ggSW52ZW50b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6IDMwMCB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEljb249ezxGaWxlRG93bmxvYWQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXhwb3J0VG9FeGNlbH1cclxuICAgICAgICAgICAgICAgICAgICBzeD17eyBtbDogJ2F1dG8nLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEV4cG9ydCBFeGNlbFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN4PXt7IG1iOiA0IH19PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCB2YXJpYW50PVwib3V0bGluZWRcIiBzeD17eyBib3JkZXJMZWZ0OiAnNXB4IHNvbGlkICMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMSwgbWI6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEludmVudG9yeSBjb2xvcj1cInByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5Ub3RhbCBVbml0cyBpbiBTdG9jazwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19Pnt0b3RhbHMucXR5LnRvTG9jYWxlU3RyaW5nKCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgdmFyaWFudD1cIm91dGxpbmVkXCIgc3g9e3sgYm9yZGVyTGVmdDogJzVweCBzb2xpZCAjMmU3ZDMyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEsIG1iOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb25ldGl6YXRpb25PbiBjb2xvcj1cInN1Y2Nlc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5Ub3RhbCBJbnZlbnRvcnkgQXNzZXRzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGNvbG9yOiAnIzJlN2QzMicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0b3RhbHMudmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9IGVsZXZhdGlvbj17MH0gc3g9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnIH19PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIHN0aWNreUhlYWRlciBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+SXRlbSBOYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+RGVzY3JpcHRpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnIH19PlF0eTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5Vbml0IENvc3Q8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+U3VidG90YWwgVmFsdWU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzc2VkRGF0YS5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93LmlkfSBob3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdtZWRpdW0nIH19Pntyb3cubmFtZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGNvbG9yOiAndGV4dC5zZWNvbmRhcnknLCBmb250U2l6ZTogJzAuODVyZW0nIH19Pntyb3cuZGVzY3JpcHRpb259PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntyb3cucXVhbnRpdHl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+JHtyb3cuY29zdFByaWNlLnRvTG9jYWxlU3RyaW5nKCl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3Jvdy52YWx1YXRpb24udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9jZXNzZWREYXRhLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs1fSBhbGlnbj1cImNlbnRlclwiIHN4PXt7IHB5OiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5ObyBpdGVtcyBmb3VuZCBtYXRjaGluZyB5b3VyIHNlYXJjaC48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Mn0gc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5UT1RBTCBJTlZFTlRPUlkgVkFMVUFUSU9OPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT57dG90YWxzLnF0eX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnIH19PjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJywgZm9udFNpemU6ICcxcmVtJywgY29sb3I6ICcjMmU3ZDMyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RvdGFscy52YWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZlbnRvcnlWYWx1YXRpb25SZXBvcnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIEJveCwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUNvbnRhaW5lciwgVGFibGVIZWFkLFxyXG4gICAgVGFibGVSb3csIFBhcGVyLCBUeXBvZ3JhcGh5LCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LFxyXG4gICAgTWVudUl0ZW0sIEdyaWQsIENhcmQsIENhcmRDb250ZW50LCBEaXZpZGVyLCBUZXh0RmllbGRcclxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IGlzQmV0d2VlbiBmcm9tICdkYXlqcy9wbHVnaW4vaXNCZXR3ZWVuJztcclxuaW1wb3J0IHsgTGluZUNoYXJ0IH0gZnJvbSAnQG11aS94LWNoYXJ0cy9MaW5lQ2hhcnQnO1xyXG5pbXBvcnQgRXhjZWxKUyBmcm9tICdleGNlbGpzJztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IEZpbGVEb3dubG9hZCwgVHJlbmRpbmdVcCwgUmVjZWlwdCwgUG9pbnRPZlNhbGUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcblxyXG5pbXBvcnQgY3VzdG9tUGFyc2VGb3JtYXQgZnJvbSAnZGF5anMvcGx1Z2luL2N1c3RvbVBhcnNlRm9ybWF0JztcclxuXHJcbmRheWpzLmV4dGVuZChpc0JldHdlZW4pO1xyXG5kYXlqcy5leHRlbmQoY3VzdG9tUGFyc2VGb3JtYXQpO1xyXG5cclxuZnVuY3Rpb24gUE9TQW5hbHl0aWNzUmVwb3J0KHsgb25Qb3MgfSkge1xyXG4gICAgY29uc3QgW2RhdGVSYW5nZSwgc2V0RGF0ZVJhbmdlXSA9IHVzZVN0YXRlKCdNb250aCcpO1xyXG4gICAgY29uc3QgW2N1c3RvbVN0YXJ0LCBzZXRDdXN0b21TdGFydF0gPSB1c2VTdGF0ZShkYXlqcygpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xyXG4gICAgY29uc3QgW2N1c3RvbUVuZCwgc2V0Q3VzdG9tRW5kXSA9IHVzZVN0YXRlKGRheWpzKCkuZW5kT2YoJ21vbnRoJykuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xyXG5cclxuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBpZiAoIW9uUG9zIHx8ICFBcnJheS5pc0FycmF5KG9uUG9zKSkgcmV0dXJuIHsgaXRlbXM6IFtdLCBjaGFydERhdGE6IFtdLCBzdGF0czogeyByZXZlbnVlOiAwLCBjb3VudDogMCwgcHJvZml0OiAwIH0gfTtcclxuXHJcbiAgICAgICAgY29uc3Qgbm93ID0gZGF5anMoKTtcclxuICAgICAgICBsZXQgc3RhcnQsIGVuZDtcclxuXHJcbiAgICAgICAgaWYgKGRhdGVSYW5nZSA9PT0gJ01vbnRoJykge1xyXG4gICAgICAgICAgICBzdGFydCA9IG5vdy5zdGFydE9mKCdtb250aCcpO1xyXG4gICAgICAgICAgICBlbmQgPSBub3cuZW5kT2YoJ21vbnRoJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRlUmFuZ2UgPT09ICdZZWFyJykge1xyXG4gICAgICAgICAgICBzdGFydCA9IG5vdy5zdGFydE9mKCd5ZWFyJyk7XHJcbiAgICAgICAgICAgIGVuZCA9IG5vdy5lbmRPZigneWVhcicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0ZVJhbmdlID09PSAnQ3VzdG9tJykge1xyXG4gICAgICAgICAgICBzdGFydCA9IGRheWpzKGN1c3RvbVN0YXJ0KTtcclxuICAgICAgICAgICAgZW5kID0gZGF5anMoY3VzdG9tRW5kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gb25Qb3MuZmlsdGVyKGludiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRlUmFuZ2UgPT09ICdBbGwnKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGQgPSBkYXlqcyhpbnYuaW52b2ljZURhdGUsIFsnWVlZWS1NTS1ERCcsICdERC9NTS9ZWVlZJywgJ01NL0REL1lZWVknLCAnWVlZWS9NTS9ERCddLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKCFkLmlzVmFsaWQoKSkgZCA9IGRheWpzKGludi5pbnZvaWNlRGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkLmlzVmFsaWQoKSAmJiBkLmlzQmV0d2VlbihzdGFydCwgZW5kLCAnZGF5JywgJ1tdJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXRzID0gZmlsdGVyZWQucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsbCA9IChjdXJyLlRvdGFsQW1vdW50UGFpZCB8fCAwKSAvIChjdXJyLnJhdGUgfHwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvc3QgPSBjdXJyLml0ZW1zPy5yZWR1Y2UoKHN1bSwgaXQpID0+IHN1bSArICgoaXQuaXRlbVF0eSB8fCAwKSAqIChpdC5pdGVtQ29zdCB8fCAwKSksIDApIC8gKGN1cnIucmF0ZSB8fCAxKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXZlbnVlOiBhY2MucmV2ZW51ZSArIHNlbGwsXHJcbiAgICAgICAgICAgICAgICBjb3VudDogYWNjLmNvdW50ICsgMSxcclxuICAgICAgICAgICAgICAgIHByb2ZpdDogYWNjLnByb2ZpdCArIChzZWxsIC0gY29zdClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LCB7IHJldmVudWU6IDAsIGNvdW50OiAwLCBwcm9maXQ6IDAgfSk7XHJcblxyXG4gICAgICAgIC8vIENoYXJ0IERhdGEgKExhc3QgMTIgbW9udGhzKVxyXG4gICAgICAgIGNvbnN0IG1vbnRocyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgbSA9IG5vdy5zdWJ0cmFjdChpLCAnbW9udGgnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRNID0gbS5zdGFydE9mKCdtb250aCcpO1xyXG4gICAgICAgICAgICBjb25zdCBlbmRNID0gbS5lbmRPZignbW9udGgnKTtcclxuICAgICAgICAgICAgY29uc3QgbW9udGhMYWJlbCA9IG0uZm9ybWF0KCdNTU0nKTtcclxuICAgICAgICAgICAgY29uc3QgbW9udGhTYWxlcyA9IG9uUG9zXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGludiA9PiBkYXlqcyhpbnYuaW52b2ljZURhdGUpLmlzQmV0d2VlbihzdGFydE0sIGVuZE0sICdkYXknLCAnW10nKSlcclxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgaW52KSA9PiBzdW0gKyAoKGludi5Ub3RhbEFtb3VudFBhaWQgfHwgMCkgLyAoaW52LnJhdGUgfHwgMSkpLCAwKTtcclxuICAgICAgICAgICAgbW9udGhzLnB1c2goeyBsYWJlbDogbW9udGhMYWJlbCwgdmFsdWU6IG1vbnRoU2FsZXMgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBpdGVtczogZmlsdGVyZWQsIGNoYXJ0RGF0YTogbW9udGhzLCBzdGF0cyB9O1xyXG4gICAgfSwgW29uUG9zLCBkYXRlUmFuZ2UsIGN1c3RvbVN0YXJ0LCBjdXN0b21FbmRdKTtcclxuXHJcbiAgICBjb25zdCBleHBvcnRUb0V4Y2VsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdvcmtib29rID0gbmV3IEV4Y2VsSlMuV29ya2Jvb2soKTtcclxuICAgICAgICBjb25zdCB3b3Jrc2hlZXQgPSB3b3JrYm9vay5hZGRXb3Jrc2hlZXQoJ1BPUyBTYWxlcycpO1xyXG4gICAgICAgIHdvcmtzaGVldC5jb2x1bW5zID0gW1xyXG4gICAgICAgICAgICB7IGhlYWRlcjogJ0ludm9pY2UgIycsIGtleTogJ2ZhY3R1cmUnLCB3aWR0aDogMTUgfSxcclxuICAgICAgICAgICAgeyBoZWFkZXI6ICdEYXRlJywga2V5OiAnZGF0ZScsIHdpZHRoOiAxNSB9LFxyXG4gICAgICAgICAgICB7IGhlYWRlcjogJ0N1c3RvbWVyJywga2V5OiAnY3VzdG9tZXInLCB3aWR0aDogMjUgfSxcclxuICAgICAgICAgICAgeyBoZWFkZXI6ICdUb3RhbCBQYWlkIChVU0QpJywga2V5OiAnYW1vdW50Jywgd2lkdGg6IDE1IH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBwcm9jZXNzZWREYXRhLml0ZW1zLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgd29ya3NoZWV0LmFkZFJvdyh7XHJcbiAgICAgICAgICAgICAgICBmYWN0dXJlOiBgUy0ke1N0cmluZyhyb3cuZmFjdHVyZU51bWJlcikucGFkU3RhcnQoNSwgJzAnKX1gLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogZGF5anMocm93Lmludm9pY2VEYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyOiByb3cuY3VzdG9tZXJOYW1lPy5jdXN0b21lck5hbWUgfHwgJ1dhbGstaW4nLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAocm93LlRvdGFsQW1vdW50UGFpZCB8fCAwKSAvIChyb3cucmF0ZSB8fCAxKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCB3b3JrYm9vay54bHN4LndyaXRlQnVmZmVyKCk7XHJcbiAgICAgICAgc2F2ZUFzKG5ldyBCbG9iKFtidWZmZXJdKSwgYFBPU19TYWxlc18ke2RheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREJyl9Lnhsc3hgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IG1iOiAzLCBkaXNwbGF5OiAnZmxleCcsIGdhcDogMiwgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGNvbG9yOiAnIzMwMzY4YScgfX0+UE9TIFBlcmZvcm1hbmNlIE92ZXJ2aWV3PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHNpemU9XCJzbWFsbFwiIHN4PXt7IHdpZHRoOiAxNTAsIG1sOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWw+UGVyaW9kPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2RhdGVSYW5nZX0gbGFiZWw9XCJQZXJpb2RcIiBvbkNoYW5nZT17KGUpID0+IHNldERhdGVSYW5nZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJBbGxcIj5BbGwgVGltZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIk1vbnRoXCI+VGhpcyBNb250aDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlllYXJcIj5UaGlzIFllYXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJDdXN0b21cIj5DdXN0b20gUmFuZ2U8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIHtkYXRlUmFuZ2UgPT09ICdDdXN0b20nICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxLCBtbDogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGcm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1c3RvbVN0YXJ0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbUVuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VzdG9tRW5kKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdGFydEljb249ezxGaWxlRG93bmxvYWQgLz59IG9uQ2xpY2s9e2V4cG9ydFRvRXhjZWx9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEV4cG9ydCBFeGNlbFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN4PXt7IG1iOiA0IH19PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEsIG1iOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb2ludE9mU2FsZSBjb2xvcj1cInByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5TYWxlcyBWb2x1bWU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT57cHJvY2Vzc2VkRGF0YS5zdGF0cy5jb3VudH0gVHJhbnNhY3Rpb25zPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAxLCBtYjogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJlbmRpbmdVcCBjb2xvcj1cInN1Y2Nlc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5QT1MgUmV2ZW51ZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PiR7cHJvY2Vzc2VkRGF0YS5zdGF0cy5yZXZlbnVlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEsIG1iOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWNlaXB0IGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiB2YXJpYW50PVwic3VidGl0bGUyXCI+R3Jvc3MgUHJvZml0PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGNvbG9yOiAnc3VjY2Vzcy5tYWluJyB9fT4rJHtwcm9jZXNzZWREYXRhLnN0YXRzLnByb2ZpdC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDM1MCwgbWI6IDQsIHA6IDIsIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJywgYm9yZGVyUmFkaXVzOiAyIH19PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIHN4PXt7IG1iOiAyLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+U2FsZXMgVHJlbmQgKExhc3QgMTIgTW9udGhzKTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnRcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI4MH1cclxuICAgICAgICAgICAgICAgICAgICBzZXJpZXM9e1t7IGRhdGE6IHByb2Nlc3NlZERhdGEuY2hhcnREYXRhLm1hcChkID0+IGQudmFsdWUpLCBsYWJlbDogJ01vbnRobHkgU2FsZXMgKCQpJywgY29sb3I6ICcjMzAzNjhhJywgYXJlYTogdHJ1ZSB9XX1cclxuICAgICAgICAgICAgICAgICAgICB4QXhpcz17W3sgc2NhbGVUeXBlOiAncG9pbnQnLCBkYXRhOiBwcm9jZXNzZWREYXRhLmNoYXJ0RGF0YS5tYXAoZCA9PiBkLmxhYmVsKSB9XX1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49e3sgdG9wOiAxMCwgYm90dG9tOiAzMCwgbGVmdDogNjAsIHJpZ2h0OiAxMCB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0gZWxldmF0aW9uPXswfSBzeD17eyBib3JkZXI6ICcxcHggc29saWQgI2VlZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgc3RpY2t5SGVhZGVyIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5JbnZvaWNlICM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5EYXRlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+Q3VzdG9tZXI8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+VG90YWwgVVNEPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2Nlc3NlZERhdGEuaXRlbXMuc2xpY2UoMCwgMTApLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuX2lkfSBob3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlMte1N0cmluZyhyb3cuZmFjdHVyZU51bWJlcikucGFkU3RhcnQoNSwgJzAnKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntkYXlqcyhyb3cuaW52b2ljZURhdGUpLmZvcm1hdCgnREQgTU1NIFlZWVknKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuY3VzdG9tZXJOYW1lPy5jdXN0b21lck5hbWUgfHwgJ1dhbGstaW4nfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPiR7KChyb3cuVG90YWxBbW91bnRQYWlkIHx8IDApIC8gKHJvdy5yYXRlIHx8IDEpKS50b0xvY2FsZVN0cmluZygpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9jZXNzZWREYXRhLml0ZW1zLmxlbmd0aCA+IDEwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezR9IGFsaWduPVwiY2VudGVyXCIgc3g9e3sgY29sb3I6ICd0ZXh0LnNlY29uZGFyeScsIGZvbnRTdHlsZTogJ2l0YWxpYycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXdpbmcgbGFzdCAxMCB0cmFuc2FjdGlvbnMuIEV4cG9ydCB0byBFeGNlbCBmb3IgZnVsbCBoaXN0b3J5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2Nlc3NlZERhdGEuaXRlbXMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezR9IGFsaWduPVwiY2VudGVyXCIgc3g9e3sgcHk6IDMgfX0+Tm8gZGF0YSBmb3Igc2VsZWN0ZWQgcGVyaW9kPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBPU0FuYWx5dGljc1JlcG9ydDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgQm94LCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsXHJcbiAgICBUYWJsZVJvdywgUGFwZXIsIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsXHJcbiAgICBTZWxlY3QsIE1lbnVJdGVtLCBEaXZpZGVyLCBHcmlkLCBDYXJkLCBDYXJkQ29udGVudCwgRGlhbG9nLFxyXG4gICAgRGlhbG9nVGl0bGUsIERpYWxvZ0NvbnRlbnQsIEFwcEJhciwgVG9vbGJhciwgU2xpZGUsIEljb25CdXR0b25cclxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgQ2xvc2UgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IGlzQmV0d2VlbiBmcm9tICdkYXlqcy9wbHVnaW4vaXNCZXR3ZWVuJztcclxuaW1wb3J0IEV4Y2VsSlMgZnJvbSAnZXhjZWxqcyc7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyBMb2NhbFByaW50c2hvcCwgRmlsZURvd25sb2FkIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5cclxuaW1wb3J0IGN1c3RvbVBhcnNlRm9ybWF0IGZyb20gJ2RheWpzL3BsdWdpbi9jdXN0b21QYXJzZUZvcm1hdCc7XHJcblxyXG5kYXlqcy5leHRlbmQoaXNCZXR3ZWVuKTtcclxuZGF5anMuZXh0ZW5kKGN1c3RvbVBhcnNlRm9ybWF0KTtcclxuXHJcbmRheWpzLmV4dGVuZChpc0JldHdlZW4pO1xyXG5kYXlqcy5leHRlbmQoY3VzdG9tUGFyc2VGb3JtYXQpO1xyXG5cclxuY29uc3QgVHJhbnNpdGlvbiA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgcmVmKSB7XHJcbiAgICByZXR1cm4gPFNsaWRlIGRpcmVjdGlvbj1cInVwXCIgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz47XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gU2FsZXNCeUN1c3RvbWVyUmVwb3J0KHsgb25JbnZvaWNlLCBvblBvcywgb25QYXltZW50IH0pIHtcclxuICAgIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkYXRlUmFuZ2UsIHNldERhdGVSYW5nZV0gPSB1c2VTdGF0ZSgnQWxsJyk7XHJcbiAgICBjb25zdCBbY3VzdG9tU3RhcnQsIHNldEN1c3RvbVN0YXJ0XSA9IHVzZVN0YXRlKGRheWpzKCkuc3RhcnRPZignbW9udGgnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSk7XHJcbiAgICBjb25zdCBbY3VzdG9tRW5kLCBzZXRDdXN0b21FbmRdID0gdXNlU3RhdGUoZGF5anMoKS5lbmRPZignbW9udGgnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRDdXN0b21lciwgc2V0U2VsZWN0ZWRDdXN0b21lcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtvcGVuRGV0YWlscywgc2V0T3BlbkRldGFpbHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBsZXQgYWxsVHJhbnNhY3Rpb25zID0gW107XHJcblxyXG4gICAgICAgIC8vIDEuIFByb2Nlc3MgSW52b2ljZXNcclxuICAgICAgICBpZiAob25JbnZvaWNlICYmIEFycmF5LmlzQXJyYXkob25JbnZvaWNlKSkge1xyXG4gICAgICAgICAgICBhbGxUcmFuc2FjdGlvbnMgPSBbLi4uYWxsVHJhbnNhY3Rpb25zLCAuLi5vbkludm9pY2UuZmlsdGVyKGludiA9PiBpbnYuc3RhdHVzICYmICFbJ0RyYWZ0JywgJ0RlY2xpbmUnLCAnVm9pZCddLmluY2x1ZGVzKGludi5zdGF0dXMpKS5tYXAoaW52ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi5pbnYsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnSW52b2ljZScsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBpbnYuaW52b2ljZURhdGUsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IChpbnYudG90YWxJbnZvaWNlIHx8IDApLFxyXG4gICAgICAgICAgICAgICAgcGFpZDogMCwgLy8gRG8gbm90IGFkZCBpbnZvaWNlJ3MgcGFpZCBhbW91bnQgdG8gYXZvaWQgZG91YmxlIGNvdW50aW5nIHdpdGggUGF5bWVudHNcclxuICAgICAgICAgICAgICAgIGR1ZTogKGludi5iYWxhbmNlRHVlIHx8IDApXHJcbiAgICAgICAgICAgIH0pKV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyLiBQcm9jZXNzIFBPUyBTYWxlcyAoaWYgY3VzdG9tZXIgaXMgYXR0YWNoZWQpXHJcbiAgICAgICAgaWYgKG9uUG9zICYmIEFycmF5LmlzQXJyYXkob25Qb3MpKSB7XHJcbiAgICAgICAgICAgIGFsbFRyYW5zYWN0aW9ucyA9IFsuLi5hbGxUcmFuc2FjdGlvbnMsIC4uLm9uUG9zXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHAgPT4gcC5jdXN0b21lck5hbWUgJiYgKHAuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZSB8fCB0eXBlb2YgcC5jdXN0b21lck5hbWUgPT09ICdzdHJpbmcnKSkgLy8gT25seSBuYW1lZCBjdXN0b21lcnNcclxuICAgICAgICAgICAgICAgIC5tYXAocG9zID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucG9zLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHBvcy5pbnZvaWNlRGF0ZSB8fCBwb3MucGF5bWVudERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAocG9zLlRvdGFsQW1vdW50UGFpZCB8fCBwb3MudG90YWxJbnZvaWNlIHx8IDApIC8gKHBvcy5yYXRlIHx8IDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhaWQ6IChwb3MuVG90YWxBbW91bnRQYWlkIHx8IHBvcy50b3RhbEludm9pY2UgfHwgMCkgLyAocG9zLnJhdGUgfHwgMSksIC8vIFBPUyBpcyBmdWxseSBwYWlkXHJcbiAgICAgICAgICAgICAgICAgICAgZHVlOiAwXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDMuIFByb2Nlc3MgUGF5bWVudHNcclxuICAgICAgICBpZiAob25QYXltZW50ICYmIEFycmF5LmlzQXJyYXkob25QYXltZW50KSkge1xyXG4gICAgICAgICAgICBhbGxUcmFuc2FjdGlvbnMgPSBbLi4uYWxsVHJhbnNhY3Rpb25zLCAuLi5vblBheW1lbnRcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIocGF5ID0+IHBheS5tb2RlcyAhPT0gJ0NyZWRpdC1BY2NvdW50JykgLy8gUHJldmVudCBkb3VibGUgY291bnRpbmcgY3JlZGl0IHVzYWdlc1xyXG4gICAgICAgICAgICAgICAgLm1hcChwYXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBBbW91bnQgPSBwYXJzZUZsb2F0KHBheS5hbW91bnQgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5Lm1vZGVzID09PSAnQ3JlZGl0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBBbW91bnQgPSBwYXJzZUZsb2F0KHBheS5QYXltZW50UmVjZWl2ZWRVU0QgfHwgMCkgKyAocGFyc2VGbG9hdChwYXkuUGF5bWVudFJlY2VpdmVkRkMgfHwgMCkgLyBwYXJzZUZsb2F0KHBheS5yYXRlIHx8IDEpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocEFtb3VudCA9PT0gMCAmJiAocGF5LmFtb3VudEZDIHx8IHBheS5QYXltZW50UmVjZWl2ZWRGQykpIHtcclxuICAgICAgICAgICAgICAgICAgICBwQW1vdW50ID0gcGFyc2VGbG9hdChwYXkudG90YWxVU0QgfHwgMCkgfHwgKHBhcnNlRmxvYXQocGF5LmFtb3VudCB8fCAwKSArIChwYXJzZUZsb2F0KHBheS5hbW91bnRGQyB8fCBwYXkuUGF5bWVudFJlY2VpdmVkRkMgfHwgMCkgLyBwYXJzZUZsb2F0KHBheS5yYXRlIHx8IDEpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEV4Y2x1ZGUgQ3JlZGl0IGJhbGFuY2UgdGhhdCBoYXNuJ3QgYmVlbiBhcHBsaWVkIGlmIHdlIHdhbnQgdHJ1ZSBjb2xsZWN0aW9ucywgXHJcbiAgICAgICAgICAgICAgICAvLyBidXQgc2luY2UgaXQncyBhIGN1c3RvbWVyIHN0YXRlbWVudCwgYWR2YW5jZWQgcGF5bWVudHMgU0hPVUxEIHJlZHVjZSB0aGVpciBiYWxhbmNlIVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAocGF5LnRyYW5zYWN0aW9uVHlwZSA9PT0gJ1JlZnVuZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBwQW1vdW50ID0gLU1hdGguYWJzKHBBbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wYXksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BheW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHBheS5wYXltZW50RGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFpZDogcEFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkdWU6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZpbHRlcmVkVHJhbnNhY3Rpb25zID0gWy4uLmFsbFRyYW5zYWN0aW9uc107XHJcbiAgICAgICAgLy8gRGF0ZSBGaWx0ZXJpbmdcclxuICAgICAgICBpZiAoZGF0ZVJhbmdlICE9PSAnQWxsJykge1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBkYXlqcygpO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnQsIGVuZDtcclxuICAgICAgICAgICAgaWYgKGRhdGVSYW5nZSA9PT0gJ01vbnRoJykge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBub3cuc3RhcnRPZignbW9udGgnKTtcclxuICAgICAgICAgICAgICAgIGVuZCA9IG5vdy5lbmRPZignbW9udGgnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlUmFuZ2UgPT09ICdZZWFyJykge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBub3cuc3RhcnRPZigneWVhcicpO1xyXG4gICAgICAgICAgICAgICAgZW5kID0gbm93LmVuZE9mKCd5ZWFyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZVJhbmdlID09PSAnQ3VzdG9tJykge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBkYXlqcyhjdXN0b21TdGFydCk7XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBkYXlqcyhjdXN0b21FbmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmaWx0ZXJlZFRyYW5zYWN0aW9ucyA9IGZpbHRlcmVkVHJhbnNhY3Rpb25zLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkID0gZGF5anMoaXRlbS5kYXRlLCBbJ1lZWVktTU0tREQnLCAnREQvTU0vWVlZWScsICdNTS9ERC9ZWVlZJywgJ1lZWVkvTU0vREQnXSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWQuaXNWYWxpZCgpKSBkID0gZGF5anMoaXRlbS5kYXRlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkLmlzVmFsaWQoKSAmJiBkLmlzQmV0d2VlbihzdGFydCwgZW5kLCAnZGF5JywgJ1tdJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWdncmVnYXRpb25cclxuICAgICAgICBjb25zdCBjdXN0b21lck1hcCA9IHt9O1xyXG4gICAgICAgIGZpbHRlcmVkVHJhbnNhY3Rpb25zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdXN0SWQgPSBpdGVtLmN1c3RvbWVyTmFtZT8uX2lkIHx8IGl0ZW0uY3VzdG9tZXJJZDsgXHJcbiAgICAgICAgICAgIGxldCBjdXN0TmFtZSA9IGl0ZW0uY3VzdG9tZXJOYW1lPy5jdXN0b21lck5hbWUgfHwgaXRlbS5jdXN0b21lck5hbWUgfHwgJ1Vua25vd24gQ3VzdG9tZXInO1xyXG5cclxuICAgICAgICAgICAgLy8gRmFsbGJhY2sgZm9yIG1pc3NpbmcgSUQgYnV0IGhhdmluZyBuYW1lXHJcbiAgICAgICAgICAgIGlmICghY3VzdElkICYmIHR5cGVvZiBpdGVtLmN1c3RvbWVyTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGN1c3RJZCA9IGl0ZW0uY3VzdG9tZXJOYW1lOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjdXN0SWQgJiYgaXRlbS50eXBlICE9PSAnUE9TJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaWQgPSBjdXN0SWQgfHwgJ3Bvc191bm5hbWVkJztcclxuXHJcbiAgICAgICAgICAgIGlmICghY3VzdG9tZXJNYXBbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21lck1hcFtpZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHR5cGVvZiBjdXN0TmFtZSA9PT0gJ3N0cmluZycgPyBjdXN0TmFtZSA6ICdVbmtub3duIEN1c3RvbWVyJyxcclxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlQ291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxTYWxlczogMCxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFBhaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZTogMCxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbnM6IFtdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBFeGNsdWRlIHZvaWRlZCBwYXltZW50cyBmcm9tIHN0YXRlbWVudFxyXG4gICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnUGF5bWVudCcgJiYgaXRlbS5zdGF0dXMgPT09ICdWb2lkZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjdXN0b21lck1hcFtpZF0udHJhbnNhY3Rpb25zLnB1c2goaXRlbSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnSW52b2ljZScpIHtcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyTWFwW2lkXS5pbnZvaWNlQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyTWFwW2lkXS50b3RhbFNhbGVzICs9IChpdGVtLmFtb3VudCB8fCAwKTtcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyTWFwW2lkXS50b3RhbFBhaWQgKz0gKGl0ZW0ucGFpZCB8fCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdQT1MnKSB7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21lck1hcFtpZF0uaW52b2ljZUNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21lck1hcFtpZF0udG90YWxTYWxlcyArPSAoaXRlbS5hbW91bnQgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21lck1hcFtpZF0udG90YWxQYWlkICs9IChpdGVtLnBhaWQgfHwgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnUGF5bWVudCcpIHtcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyTWFwW2lkXS50b3RhbFBhaWQgKz0gKGl0ZW0ucGFpZCB8fCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBGaW5hbGl6ZSBiYWxhbmNlIGNhbGN1bGF0aW9uIGZvciBlYWNoIGN1c3RvbWVyXHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhjdXN0b21lck1hcCkuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgYy5iYWxhbmNlID0gYy50b3RhbFNhbGVzIC0gYy50b3RhbFBhaWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKGN1c3RvbWVyTWFwKS5maWx0ZXIoYyA9PlxyXG4gICAgICAgICAgICBjLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgKS5zb3J0KChhLCBiKSA9PiBiLnRvdGFsU2FsZXMgLSBhLnRvdGFsU2FsZXMpO1xyXG4gICAgfSwgW29uSW52b2ljZSwgb25Qb3MsIG9uUGF5bWVudCwgc2VhcmNoVGVybSwgZGF0ZVJhbmdlLCBjdXN0b21TdGFydCwgY3VzdG9tRW5kXSk7XHJcblxyXG4gICAgY29uc3QgdG90YWxzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+ICh7XHJcbiAgICAgICAgICAgIHNhbGVzOiBhY2Muc2FsZXMgKyBjdXJyLnRvdGFsU2FsZXMsXHJcbiAgICAgICAgICAgIHBhaWQ6IGFjYy5wYWlkICsgY3Vyci50b3RhbFBhaWQsXHJcbiAgICAgICAgICAgIGJhbGFuY2U6IGFjYy5iYWxhbmNlICsgY3Vyci5iYWxhbmNlXHJcbiAgICAgICAgfSksIHsgc2FsZXM6IDAsIHBhaWQ6IDAsIGJhbGFuY2U6IDAgfSk7XHJcbiAgICB9LCBbcHJvY2Vzc2VkRGF0YV0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9wZW5EZXRhaWxzID0gKGN1c3RvbWVyKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDdXN0b21lcihjdXN0b21lcik7XHJcbiAgICAgICAgc2V0T3BlbkRldGFpbHModHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlRGV0YWlscyA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuRGV0YWlscyhmYWxzZSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDdXN0b21lcihudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZXhwb3J0VG9FeGNlbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB3b3JrYm9vayA9IG5ldyBFeGNlbEpTLldvcmtib29rKCk7XHJcbiAgICAgICAgY29uc3Qgd29ya3NoZWV0ID0gd29ya2Jvb2suYWRkV29ya3NoZWV0KCdTYWxlcyBieSBDdXN0b21lcicpO1xyXG5cclxuICAgICAgICB3b3Jrc2hlZXQuY29sdW1ucyA9IFtcclxuICAgICAgICAgICAgeyBoZWFkZXI6ICdDdXN0b21lciBOYW1lJywga2V5OiAnbmFtZScsIHdpZHRoOiAzMCB9LFxyXG4gICAgICAgICAgICB7IGhlYWRlcjogJ0ludm9pY2VzJywga2V5OiAnY291bnQnLCB3aWR0aDogMTAgfSxcclxuICAgICAgICAgICAgeyBoZWFkZXI6ICdUb3RhbCBTYWxlcycsIGtleTogJ3NhbGVzJywgd2lkdGg6IDE1IH0sXHJcbiAgICAgICAgICAgIHsgaGVhZGVyOiAnVG90YWwgUGFpZCcsIGtleTogJ3BhaWQnLCB3aWR0aDogMTUgfSxcclxuICAgICAgICAgICAgeyBoZWFkZXI6ICdCYWxhbmNlIER1ZScsIGtleTogJ2JhbGFuY2UnLCB3aWR0aDogMTUgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBwcm9jZXNzZWREYXRhLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgd29ya3NoZWV0LmFkZFJvdyh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiByb3cubmFtZSxcclxuICAgICAgICAgICAgICAgIGNvdW50OiByb3cuaW52b2ljZUNvdW50LFxyXG4gICAgICAgICAgICAgICAgc2FsZXM6IHJvdy50b3RhbFNhbGVzLFxyXG4gICAgICAgICAgICAgICAgcGFpZDogcm93LnRvdGFsUGFpZCxcclxuICAgICAgICAgICAgICAgIGJhbGFuY2U6IHJvdy5iYWxhbmNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3b3Jrc2hlZXQuZ2V0Um93KDEpLmZvbnQgPSB7IGJvbGQ6IHRydWUgfTtcclxuICAgICAgICB3b3Jrc2hlZXQuYWRkUm93KFtdKTtcclxuICAgICAgICB3b3Jrc2hlZXQuYWRkUm93KHtcclxuICAgICAgICAgICAgbmFtZTogJ1RPVEFMUycsXHJcbiAgICAgICAgICAgIHNhbGVzOiB0b3RhbHMuc2FsZXMsXHJcbiAgICAgICAgICAgIHBhaWQ6IHRvdGFscy5wYWlkLFxyXG4gICAgICAgICAgICBiYWxhbmNlOiB0b3RhbHMuYmFsYW5jZVxyXG4gICAgICAgIH0pLmZvbnQgPSB7IGJvbGQ6IHRydWUgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgd29ya2Jvb2sueGxzeC53cml0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIHNhdmVBcyhuZXcgQmxvYihbYnVmZmVyXSksIGBTYWxlc19CeV9DdXN0b21lcl8ke2RheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREJyl9Lnhsc3hgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IG1iOiAzLCBkaXNwbGF5OiAnZmxleCcsIGdhcDogMiwgZmxleFdyYXA6ICd3cmFwJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2ggQ3VzdG9tZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogMjUwIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHNpemU9XCJzbWFsbFwiIHN4PXt7IHdpZHRoOiAxNTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWw+UGVyaW9kPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGVSYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQZXJpb2RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERhdGVSYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJBbGxcIj5BbGwgVGltZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIk1vbnRoXCI+VGhpcyBNb250aDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlllYXJcIj5UaGlzIFllYXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJDdXN0b21cIj5DdXN0b20gUmFuZ2U8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICB7ZGF0ZVJhbmdlID09PSAnQ3VzdG9tJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGcm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1c3RvbVN0YXJ0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbUVuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VzdG9tRW5kKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PEZpbGVEb3dubG9hZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtleHBvcnRUb0V4Y2VsfVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IG1sOiAnYXV0bycsIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRXhwb3J0IEV4Y2VsXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3g9e3sgbWI6IDMgfX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNlOGY1ZTknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiB2YXJpYW50PVwic3VidGl0bGUyXCI+VG90YWwgU2FsZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+JHt0b3RhbHMuc2FsZXMudG9Mb2NhbGVTdHJpbmcoKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZTNmMmZkJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgdmFyaWFudD1cInN1YnRpdGxlMlwiPlRvdGFsIENvbGxlY3RlZDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT4ke3RvdGFscy5wYWlkLnRvTG9jYWxlU3RyaW5nKCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2ZmZjNlMCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5Ub3RhbCBPdXRzdGFuZGluZzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgY29sb3I6ICcjZTY1MTAwJyB9fT4ke3RvdGFscy5iYWxhbmNlLnRvTG9jYWxlU3RyaW5nKCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9IHN4PXt7IGJveFNoYWRvdzogJ25vbmUnLCBib3JkZXI6ICcxcHggc29saWQgI2VlZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgc3RpY2t5SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5DdXN0b21lciBOYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5JbnZvaWNlczwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5Ub3RhbCBTYWxlczwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5Ub3RhbCBQYWlkPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnIH19PkJhbGFuY2UgRHVlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2Nlc3NlZERhdGEubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZH0gaG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ21lZGl1bScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMwMzY4YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlT3BlbkRldGFpbHMocm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+e3Jvdy5pbnZvaWNlQ291bnR9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+JHtyb3cudG90YWxTYWxlcy50b0xvY2FsZVN0cmluZygpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGNvbG9yOiAnc3VjY2Vzcy5tYWluJyB9fT4ke3Jvdy50b3RhbFBhaWQudG9Mb2NhbGVTdHJpbmcoKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBjb2xvcjogcm93LmJhbGFuY2UgPiAwID8gJ2Vycm9yLm1haW4nIDogJ2luaGVyaXQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3Jvdy5iYWxhbmNlLnRvTG9jYWxlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2Nlc3NlZERhdGEubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezV9IGFsaWduPVwiY2VudGVyXCIgc3g9e3sgcHk6IDMgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIGRhdGEgZm91bmQgZm9yIHRoZSBzZWxlY3RlZCBjcml0ZXJpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+VE9UQUxTPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT57cHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLmludm9pY2VDb3VudCwgMCl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnIH19PiR7dG90YWxzLnNhbGVzLnRvTG9jYWxlU3RyaW5nKCl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnIH19PiR7dG90YWxzLnBhaWQudG9Mb2NhbGVTdHJpbmcoKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+JHt0b3RhbHMuYmFsYW5jZS50b0xvY2FsZVN0cmluZygpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgZnVsbFNjcmVlblxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3BlbkRldGFpbHN9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZURldGFpbHN9XHJcbiAgICAgICAgICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtUcmFuc2l0aW9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QXBwQmFyIHN4PXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VEZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWw6IDIsIGZsZXg6IDEgfX0gdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbiBEZXRhaWxzOiB7c2VsZWN0ZWRDdXN0b21lcj8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGF1dG9Gb2N1cyBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZURldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudCBzeD17eyBwOiA0LCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBtYjogMyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJvdmVybGluZVwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlRvdGFsIFNhbGVzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBzeD17eyBjb2xvcjogJyMyZTdkMzInLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyhzZWxlY3RlZEN1c3RvbWVyPy50b3RhbFNhbGVzIHx8IDApLnRvTG9jYWxlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+VG90YWwgUGFpZDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgY29sb3I6ICcjMDI4OGQxJywgZm9udFdlaWdodDogJ2JvbGQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsoc2VsZWN0ZWRDdXN0b21lcj8udG90YWxQYWlkIHx8IDApLnRvTG9jYWxlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+QmFsYW5jZSBEdWU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IGNvbG9yOiAnI2QzMmYyZicsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7KHNlbGVjdGVkQ3VzdG9tZXI/LmJhbGFuY2UgfHwgMCkudG9Mb2NhbGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfSBzeD17eyBib3hTaGFkb3c6ICdub25lJywgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3RpY2t5SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5EYXRlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5UeXBlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5SZWZlcmVuY2U8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5BbW91bnQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5QYWlkPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+QmFsYW5jZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBydW5uaW5nQmFsYW5jZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZEN1c3RvbWVyPy50cmFuc2FjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYS5kYXRlKSAtIG5ldyBEYXRlKGIuZGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChpdGVtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnSW52b2ljZScgfHwgaXRlbS50eXBlID09PSAnUE9TJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nQmFsYW5jZSArPSAoaXRlbS5hbW91bnQgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdCYWxhbmNlIC09IChpdGVtLnBhaWQgfHwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntkYXlqcyhpdGVtLmRhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNHB4IDhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMC43NXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXRlbS50eXBlID09PSAnSW52b2ljZScgPyAnI2U4ZjVlOScgOiBpdGVtLnR5cGUgPT09ICdQT1MnID8gJyNlM2YyZmQnIDogJyNmZmYzZTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXRlbS50eXBlID09PSAnSW52b2ljZScgPyAnIzJlN2QzMicgOiBpdGVtLnR5cGUgPT09ICdQT1MnID8gJyMwMjg4ZDEnIDogJyNlNjUxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnR5cGUgPT09ICdJbnZvaWNlJyA/IGBJTlYtJHtpdGVtLmludm9pY2VOdW1iZXJ9YCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udHlwZSA9PT0gJ1BPUycgPyBgUE9TLSR7aXRlbS5mYWN0dXJlTnVtYmVyfWAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFBBWS0ke2l0ZW0ucGF5bWVudE51bWJlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj4keyhpdGVtLmFtb3VudCB8fCAwKS50b0xvY2FsZVN0cmluZygpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+JHsoaXRlbS5wYWlkIHx8IDApLnRvTG9jYWxlU3RyaW5nKCl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtydW5uaW5nQmFsYW5jZS50b0xvY2FsZVN0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbGVzQnlDdXN0b21lclJlcG9ydDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgQm94LCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsXHJcbiAgICBUYWJsZVJvdywgUGFwZXIsIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsXHJcbiAgICBTZWxlY3QsIE1lbnVJdGVtLCBHcmlkLCBDYXJkLCBDYXJkQ29udGVudCwgRGlhbG9nLFxyXG4gICAgRGlhbG9nVGl0bGUsIERpYWxvZ0NvbnRlbnQsIEFwcEJhciwgVG9vbGJhciwgU2xpZGUsIEljb25CdXR0b24sIEJ1dHRvblxyXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBDbG9zZSwgRmlsZURvd25sb2FkIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBpc0JldHdlZW4gZnJvbSAnZGF5anMvcGx1Z2luL2lzQmV0d2Vlbic7XHJcbmltcG9ydCBFeGNlbEpTIGZyb20gJ2V4Y2VsanMnO1xyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IGN1c3RvbVBhcnNlRm9ybWF0IGZyb20gJ2RheWpzL3BsdWdpbi9jdXN0b21QYXJzZUZvcm1hdCc7XHJcblxyXG5kYXlqcy5leHRlbmQoaXNCZXR3ZWVuKTtcclxuZGF5anMuZXh0ZW5kKGN1c3RvbVBhcnNlRm9ybWF0KTtcclxuXHJcbmNvbnN0IFRyYW5zaXRpb24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIHJlZikge1xyXG4gICAgcmV0dXJuIDxTbGlkZSBkaXJlY3Rpb249XCJ1cFwiIHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+O1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFN1cHBsaWVyUmVwb3J0SW5mbyh7IG9uU3VwcGxpZXJzLCBvbkl0ZW1QdXJjaGFzZSB9KSB7XHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZmlsdGVyUGFpZCwgc2V0RmlsdGVyUGFpZF0gPSB1c2VTdGF0ZSgnQWxsJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRTdXBwbGllciwgc2V0U2VsZWN0ZWRTdXBwbGllcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtvcGVuRGV0YWlscywgc2V0T3BlbkRldGFpbHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBsZXQgc3VwcGxpZXJzTGlzdCA9IG9uU3VwcGxpZXJzIHx8IFtdO1xyXG4gICAgICAgIGxldCBwdXJjaGFzZXNMaXN0ID0gb25JdGVtUHVyY2hhc2UgfHwgW107XHJcblxyXG4gICAgICAgIGNvbnN0IHN1cHBsaWVyTWFwID0ge307XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgbWFwIHdpdGggYWxsIHN1cHBsaWVyc1xyXG4gICAgICAgIHN1cHBsaWVyc0xpc3QuZm9yRWFjaChzdXBwbGllciA9PiB7XHJcbiAgICAgICAgICAgIHN1cHBsaWVyTWFwW3N1cHBsaWVyLl9pZF0gPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogc3VwcGxpZXIuX2lkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogc3VwcGxpZXIuc3VwcGxpZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgc3RvcmVOYW1lOiBzdXBwbGllci5zdG9yZU5hbWUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbEJpbGxlZDogMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsUGFpZDogMCxcclxuICAgICAgICAgICAgICAgIGJhbGFuY2U6IDAsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdQYWlkJyxcclxuICAgICAgICAgICAgICAgIHB1cmNoYXNlczogW11cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTWFwIHB1cmNoYXNlcyB0byBzdXBwbGllcnMgYW5kIGNhbGN1bGF0ZVxyXG4gICAgICAgIHB1cmNoYXNlc0xpc3QuZm9yRWFjaChwdXJjaGFzZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEZpbmQgc3VwcGxpZXIgbWF0Y2ggKGVpdGhlciBieSBJRCBvciBzdG9yZU5hbWUvbWFudWZhY3R1cmVyIHN0cmluZyBtYXRjaClcclxuICAgICAgICAgICAgbGV0IG1hdGNoZWRTdXBwbGllcklkID0gcHVyY2hhc2UubWFudWZhY3R1cmVySUQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBGYWxsYmFjayBpZiBJRCBpcyBtaXNzaW5nIGJ1dCB3ZSBoYXZlIG5hbWUgbWF0Y2hcclxuICAgICAgICAgICAgaWYgKCFtYXRjaGVkU3VwcGxpZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm91bmQgPSBzdXBwbGllcnNMaXN0LmZpbmQocyA9PiBzLnN0b3JlTmFtZSA9PT0gcHVyY2hhc2UubWFudWZhY3R1cmVyIHx8IHMuc3VwcGxpZXJOYW1lID09PSBwdXJjaGFzZS5tYW51ZmFjdHVyZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSBtYXRjaGVkU3VwcGxpZXJJZCA9IGZvdW5kLl9pZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG1hdGNoZWRTdXBwbGllcklkICYmIHN1cHBsaWVyTWFwW21hdGNoZWRTdXBwbGllcklkXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxWYWwgPSBwdXJjaGFzZS50b3RhbFVTRCAhPT0gdW5kZWZpbmVkID8gcHVyY2hhc2UudG90YWxVU0QgOiAocHVyY2hhc2UudG90YWwgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBwdXJjaGFzZVN0YXR1cyA9IHB1cmNoYXNlLnN0YXR1cyB8fCAnVW5wYWlkJztcclxuICAgICAgICAgICAgICAgIGlmIChwdXJjaGFzZVN0YXR1cy50b0xvd2VyQ2FzZSgpID09PSAncGFydGlhbGx5LXBhaWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VTdGF0dXMgPSAnUGFydGlhbGx5LVBhaWQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwYWlkVmFsID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChwdXJjaGFzZVN0YXR1cy50b0xvd2VyQ2FzZSgpID09PSAncGFpZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWlkVmFsID0gdG90YWxWYWw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHB1cmNoYXNlU3RhdHVzID09PSAnUGFydGlhbGx5LVBhaWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFpZFZhbCA9IChwdXJjaGFzZS5wYXltZW50cyB8fCBbXSkucmVkdWNlKChzdW0sIHApID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKyAocC50b3RhbFVTRCB8fCAocGFyc2VGbG9hdChwLmFtb3VudCB8fCAwKSArIChwYXJzZUZsb2F0KHAuYW1vdW50RkMgfHwgMCkgLyBwYXJzZUZsb2F0KHAucmF0ZSB8fCAxKSkpKSwgMFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVucGFpZFZhbCA9IE1hdGgubWF4KDAsIHRvdGFsVmFsIC0gcGFpZFZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3VwcGxpZXJNYXBbbWF0Y2hlZFN1cHBsaWVySWRdLnB1cmNoYXNlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wdXJjaGFzZSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVkVG90YWw6IHRvdGFsVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRQYWlkOiBwYWlkVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRCYWxhbmNlOiB1bnBhaWRWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVN0YXR1czogcHVyY2hhc2VTdGF0dXNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHN1cHBsaWVyTWFwW21hdGNoZWRTdXBwbGllcklkXS50b3RhbEJpbGxlZCArPSB0b3RhbFZhbDtcclxuICAgICAgICAgICAgICAgIHN1cHBsaWVyTWFwW21hdGNoZWRTdXBwbGllcklkXS50b3RhbFBhaWQgKz0gcGFpZFZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBGaW5hbGl6ZSBiYWxhbmNlIGFuZCBvdmVyYWxsIHN0YXR1c1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoc3VwcGxpZXJNYXApLmZvckVhY2gocyA9PiB7XHJcbiAgICAgICAgICAgIHMuYmFsYW5jZSA9IHMudG90YWxCaWxsZWQgLSBzLnRvdGFsUGFpZDtcclxuICAgICAgICAgICAgaWYgKHMudG90YWxCaWxsZWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHMuc3RhdHVzID0gJy0nO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHMuYmFsYW5jZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzLnN0YXR1cyA9ICdQYWlkJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzLnRvdGFsUGFpZCA+IDAgJiYgcy5iYWxhbmNlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcy5zdGF0dXMgPSAnUGFydGlhbGx5LVBhaWQnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcy5zdGF0dXMgPSAnVW5wYWlkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhzdXBwbGllck1hcCkuZmlsdGVyKHMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzU2VhcmNoID0gcy5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc3RvcmVOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXNTdGF0dXMgPSBmaWx0ZXJQYWlkID09PSAnQWxsJyB8fCBzLnN0YXR1cyA9PT0gZmlsdGVyUGFpZDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzU2VhcmNoICYmIG1hdGNoZXNTdGF0dXMgJiYgcy5wdXJjaGFzZXMubGVuZ3RoID4gMDsgLy8gb25seSBzaG93IHN1cHBsaWVycyB3aXRoIGFjdGl2aXR5XHJcbiAgICAgICAgfSkuc29ydCgoYSwgYikgPT4gYi50b3RhbEJpbGxlZCAtIGEudG90YWxCaWxsZWQpO1xyXG5cclxuICAgIH0sIFtvblN1cHBsaWVycywgb25JdGVtUHVyY2hhc2UsIHNlYXJjaFRlcm0sIGZpbHRlclBhaWRdKTtcclxuXHJcbiAgICBjb25zdCB0b3RhbHMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4gKHtcclxuICAgICAgICAgICAgYmlsbGVkOiBhY2MuYmlsbGVkICsgY3Vyci50b3RhbEJpbGxlZCxcclxuICAgICAgICAgICAgcGFpZDogYWNjLnBhaWQgKyBjdXJyLnRvdGFsUGFpZCxcclxuICAgICAgICAgICAgYmFsYW5jZTogYWNjLmJhbGFuY2UgKyBjdXJyLmJhbGFuY2VcclxuICAgICAgICB9KSwgeyBiaWxsZWQ6IDAsIHBhaWQ6IDAsIGJhbGFuY2U6IDAgfSk7XHJcbiAgICB9LCBbcHJvY2Vzc2VkRGF0YV0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9wZW5EZXRhaWxzID0gKHN1cHBsaWVyKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRTdXBwbGllcihzdXBwbGllcik7XHJcbiAgICAgICAgc2V0T3BlbkRldGFpbHModHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlRGV0YWlscyA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuRGV0YWlscyhmYWxzZSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRTdXBwbGllcihudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZXhwb3J0VG9FeGNlbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB3b3JrYm9vayA9IG5ldyBFeGNlbEpTLldvcmtib29rKCk7XHJcbiAgICAgICAgY29uc3Qgd29ya3NoZWV0ID0gd29ya2Jvb2suYWRkV29ya3NoZWV0KCdTdXBwbGllciBQYXlhYmxlcycpO1xyXG5cclxuICAgICAgICB3b3Jrc2hlZXQuY29sdW1ucyA9IFtcclxuICAgICAgICAgICAgeyBoZWFkZXI6ICdTdXBwbGllciBOYW1lJywga2V5OiAnbmFtZScsIHdpZHRoOiAyNSB9LFxyXG4gICAgICAgICAgICB7IGhlYWRlcjogJ1N0b3JlIE5hbWUnLCBrZXk6ICdzdG9yZScsIHdpZHRoOiAyNSB9LFxyXG4gICAgICAgICAgICB7IGhlYWRlcjogJ1RvdGFsIEJpbGxlZCcsIGtleTogJ2JpbGxlZCcsIHdpZHRoOiAxNSB9LFxyXG4gICAgICAgICAgICB7IGhlYWRlcjogJ1RvdGFsIFBhaWQnLCBrZXk6ICdwYWlkJywgd2lkdGg6IDE1IH0sXHJcbiAgICAgICAgICAgIHsgaGVhZGVyOiAnQmFsYW5jZSBEdWUnLCBrZXk6ICdiYWxhbmNlJywgd2lkdGg6IDE1IH0sXHJcbiAgICAgICAgICAgIHsgaGVhZGVyOiAnU3RhdHVzJywga2V5OiAnc3RhdHVzJywgd2lkdGg6IDE1IH0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcHJvY2Vzc2VkRGF0YS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIHdvcmtzaGVldC5hZGRSb3coe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogcm93Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBzdG9yZTogcm93LnN0b3JlTmFtZSxcclxuICAgICAgICAgICAgICAgIGJpbGxlZDogcm93LnRvdGFsQmlsbGVkLFxyXG4gICAgICAgICAgICAgICAgcGFpZDogcm93LnRvdGFsUGFpZCxcclxuICAgICAgICAgICAgICAgIGJhbGFuY2U6IHJvdy5iYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiByb3cuc3RhdHVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3b3Jrc2hlZXQuZ2V0Um93KDEpLmZvbnQgPSB7IGJvbGQ6IHRydWUgfTtcclxuICAgICAgICB3b3Jrc2hlZXQuYWRkUm93KFtdKTtcclxuICAgICAgICB3b3Jrc2hlZXQuYWRkUm93KHtcclxuICAgICAgICAgICAgbmFtZTogJ1RPVEFMUycsXHJcbiAgICAgICAgICAgIGJpbGxlZDogdG90YWxzLmJpbGxlZCxcclxuICAgICAgICAgICAgcGFpZDogdG90YWxzLnBhaWQsXHJcbiAgICAgICAgICAgIGJhbGFuY2U6IHRvdGFscy5iYWxhbmNlXHJcbiAgICAgICAgfSkuZm9udCA9IHsgYm9sZDogdHJ1ZSB9O1xyXG5cclxuICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCB3b3JrYm9vay54bHN4LndyaXRlQnVmZmVyKCk7XHJcbiAgICAgICAgc2F2ZUFzKG5ldyBCbG9iKFtidWZmZXJdKSwgYFN1cHBsaWVyX1BheWFibGVzXyR7ZGF5anMoKS5mb3JtYXQoJ1lZWVktTU0tREQnKX0ueGxzeGApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgbWI6IDMsIGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAyLCBmbGV4V3JhcDogJ3dyYXAnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBTdXBwbGllciAvIFN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6IDI1MCB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzaXplPVwic21hbGxcIiBzeD17eyB3aWR0aDogMTgwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsPlN0YXR1czwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaWx0ZXJQYWlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmlsdGVyUGFpZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJBbGxcIj5BbGwgU3RhdHVzZXM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJQYWlkXCI+RnVsbHkgUGFpZDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlBhcnRpYWxseS1QYWlkXCI+UGFydGlhbGx5IFBhaWQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJVbnBhaWRcIj5VbnBhaWQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8RmlsZURvd25sb2FkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V4cG9ydFRvRXhjZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgbWw6ICdhdXRvJywgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBFeHBvcnQgRXhjZWxcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzeD17eyBtYjogMyB9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjVlOScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5Ub3RhbCBCaWxsZWQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+JHt0b3RhbHMuYmlsbGVkLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge21pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyfSl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2UzZjJmZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5Ub3RhbCBQYWlkIHRvIFN1cHBsaWVyczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT4ke3RvdGFscy5wYWlkLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge21pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyfSl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2ZmZjNlMCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5Ub3RhbCBCYWxhbmNlIER1ZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgY29sb3I6ICcjZTY1MTAwJyB9fT4ke3RvdGFscy5iYWxhbmNlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge21pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyfSl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9IHN4PXt7IGJveFNoYWRvdzogJ25vbmUnLCBib3JkZXI6ICcxcHggc29saWQgI2VlZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgc3RpY2t5SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5TdXBwbGllciBOYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+U3RvcmUgTmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5Ub3RhbCBCaWxsZWQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+VG90YWwgUGFpZDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5CYWxhbmNlIER1ZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+U3RhdHVzPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2Nlc3NlZERhdGEubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZH0gaG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ21lZGl1bScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMwMzY4YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHsgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlT3BlbkRldGFpbHMocm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuc3RvcmVOYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPiR7cm93LnRvdGFsQmlsbGVkLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge21pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyfSl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgY29sb3I6ICdzdWNjZXNzLm1haW4nIH19PiR7cm93LnRvdGFsUGFpZC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHttaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMn0pfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGNvbG9yOiByb3cuYmFsYW5jZSA+IDAgPyAnZXJyb3IubWFpbicgOiAnaW5oZXJpdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cm93LmJhbGFuY2UudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJ9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNHB4IDhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcwLjc1cmVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcm93LnN0YXR1cyA9PT0gJ1BhaWQnID8gJyNlOGY1ZTknIDogcm93LnN0YXR1cyA9PT0gJ1BhcnRpYWxseS1QYWlkJyA/ICcjZmZmM2UwJyA6ICcjZmZlYmVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByb3cuc3RhdHVzID09PSAnUGFpZCcgPyAnIzJlN2QzMicgOiByb3cuc3RhdHVzID09PSAnUGFydGlhbGx5LVBhaWQnID8gJyNlNjUxMDAnIDogJyNjNjI4MjgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzc2VkRGF0YS5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Nn0gYWxpZ249XCJjZW50ZXJcIiBzeD17eyBweTogMyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gZGF0YSBmb3VuZCBmb3IgdGhlIHNlbGVjdGVkIGNyaXRlcmlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Mn0gc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5UT1RBTFM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+JHt0b3RhbHMuYmlsbGVkLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge21pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyfSl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnIH19PiR7dG90YWxzLnBhaWQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJ9KX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+JHt0b3RhbHMuYmFsYW5jZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHttaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMn0pfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgICAgICBmdWxsU2NyZWVuXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVuRGV0YWlsc31cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRGV0YWlsc31cclxuICAgICAgICAgICAgICAgIFRyYW5zaXRpb25Db21wb25lbnQ9e1RyYW5zaXRpb259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBcHBCYXIgc3g9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZURldGFpbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2UgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtbDogMiwgZmxleDogMSB9fSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1cHBsaWVyIEJyZWFrZG93bjoge3NlbGVjdGVkU3VwcGxpZXI/Lm5hbWV9ICh7c2VsZWN0ZWRTdXBwbGllcj8uc3RvcmVOYW1lfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGF1dG9Gb2N1cyBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZURldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudCBzeD17eyBwOiA0LCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBtYjogMyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJvdmVybGluZVwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlRvdGFsIEJpbGxlZDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgY29sb3I6ICcjMmU3ZDMyJywgZm9udFdlaWdodDogJ2JvbGQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsoc2VsZWN0ZWRTdXBwbGllcj8udG90YWxCaWxsZWQgfHwgMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJ9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5Ub3RhbCBQYWlkPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBzeD17eyBjb2xvcjogJyMwMjg4ZDEnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyhzZWxlY3RlZFN1cHBsaWVyPy50b3RhbFBhaWQgfHwgMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJ9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwib3ZlcmxpbmVcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5CYWxhbmNlIER1ZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgY29sb3I6ICcjZDMyZjJmJywgZm9udFdlaWdodDogJ2JvbGQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsoc2VsZWN0ZWRTdXBwbGllcj8uYmFsYW5jZSB8fCAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHttaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMn0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9IHN4PXt7IGJveFNoYWRvdzogJ25vbmUnLCBib3JkZXI6ICcxcHggc29saWQgI2VlZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdGlja3lIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnIH19PkRhdGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnIH19PlB1cmNoYXNlIFJlZjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+RGVzY3JpcHRpb24gLyBQcm9qZWN0PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+QmlsbGVkIEFtb3VudDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnIH19PlBhaWQgQW1vdW50PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+QmFsYW5jZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyB9fT5TdGF0dXM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFN1cHBsaWVyPy5wdXJjaGFzZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLml0ZW1QdXJjaGFzZURhdGUpIC0gbmV3IERhdGUoYi5pdGVtUHVyY2hhc2VEYXRlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2lkeH0gaG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2RheWpzKGl0ZW0uaXRlbVB1cmNoYXNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2l0ZW0uaXRlbVB1cmNoYXNlTnVtYmVyfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntpdGVtLnByb2plY3ROYW1lID8gaXRlbS5wcm9qZWN0TmFtZS5uYW1lIDogaXRlbS5kZXNjcmlwdGlvbn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+JHsoaXRlbS5jYWxjdWxhdGVkVG90YWwgfHwgMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJ9KX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+JHsoaXRlbS5jYWxjdWxhdGVkUGFpZCB8fCAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHttaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMn0pfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGNvbG9yOiBpdGVtLmNhbGN1bGF0ZWRCYWxhbmNlID4gMCA/ICcjZDMyZjJmJyA6ICdpbmhlcml0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW0uY2FsY3VsYXRlZEJhbGFuY2UgfHwgMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJ9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzRweCA4cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcwLjc1cmVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uZGlzcGxheVN0YXR1cyA9PT0gJ1BhaWQnID8gJyNlOGY1ZTknIDogaXRlbS5kaXNwbGF5U3RhdHVzID09PSAnUGFydGlhbGx5LVBhaWQnID8gJyNmZmYzZTAnIDogJyNmZmViZWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpdGVtLmRpc3BsYXlTdGF0dXMgPT09ICdQYWlkJyA/ICcjMmU3ZDMyJyA6IGl0ZW0uZGlzcGxheVN0YXR1cyA9PT0gJ1BhcnRpYWxseS1QYWlkJyA/ICcjZTY1MTAwJyA6ICcjYzYyODI4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGlzcGxheVN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoIXNlbGVjdGVkU3VwcGxpZXI/LnB1cmNoYXNlcyB8fCBzZWxlY3RlZFN1cHBsaWVyLnB1cmNoYXNlcy5sZW5ndGggPT09IDApICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs3fSBhbGlnbj1cImNlbnRlclwiIHN4PXt7IHB5OiAzIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIHB1cmNoYXNlcyBmb3VuZCBmb3IgdGhpcyBzdXBwbGllci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1cHBsaWVyUmVwb3J0SW5mbztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL3ZpZXcuY3NzJ1xyXG5pbXBvcnQgU2lkZWJhckRhc2ggZnJvbSAnLi4vY29tcG9uZW50L1NpZGViYXJEYXNoJ1xyXG5pbXBvcnQge1xyXG4gIEljb25CdXR0b24sIHN0eWxlZCwgVHlwb2dyYXBoeSwgQm94LCBUZXh0RmllbGQsIEdyaWQsIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsIEJ1dHRvbiwgRGl2aWRlciwgU3RhY2ssIExpc3QsIExpc3RJdGVtSWNvbixcclxuICBMaXN0SXRlbVRleHQsIENvbGxhcHNlLCBDb250YWluZXIsIENzc0Jhc2VsaW5lLCBUb29sYmFyLFxyXG4gIExpc3RTdWJoZWFkZXIsIExpc3RJdGVtQnV0dG9uLCBQYXBlciwgQ2lyY3VsYXJQcm9ncmVzc1xyXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge1xyXG4gIEFzc2Vzc21lbnQsIE1vbmV0aXphdGlvbk9uLCBJbnZlbnRvcnksIEdyb3VwcywgRW5naW5lZXJpbmcsXHJcbiAgRGVzY3JpcHRpb24sIFJlY2VpcHQsIExvY2FsUHJpbnRzaG9wLCBFeHBhbmRMZXNzLCBFeHBhbmRNb3JlLFxyXG4gIFN0YXJCb3JkZXIsIFBlcnNvbjNPdXRsaW5lZCwgTG9nb3V0LCBDaGV2cm9uTGVmdCwgTWVudSBhcyBNZW51SWNvblxyXG59IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgY3VzdG9tUGFyc2VGb3JtYXQgZnJvbSAnZGF5anMvcGx1Z2luL2N1c3RvbVBhcnNlRm9ybWF0JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuXHJcbmRheWpzLmV4dGVuZChjdXN0b21QYXJzZUZvcm1hdCk7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuaW1wb3J0IFJlYWN0VG9QcmludCBmcm9tICdyZWFjdC10by1wcmludCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbi8vIEltcG9ydCBleGlzdGluZyByZXBvcnQgY29tcG9uZW50c1xyXG5pbXBvcnQgUmV2ZW51ZUV4cGVuc2VzQWxsIGZyb20gJy4vUGFnZVZpZXcvRGFzaGJvYXJkSW5mby9SZXZlbnVlRXhwZW5zZXNBbGwnO1xyXG5pbXBvcnQgSXRlbVJlcG9ydEluZm8gZnJvbSAnLi9QYWdlVmlldy9EYXNoYm9hcmRJbmZvL0l0ZW1SZXBvcnRJbmZvJztcclxuaW1wb3J0IE1haW50ZW5hbmNlUmVwb3J0SW5mbyBmcm9tICcuL1BhZ2VWaWV3L0Rhc2hib2FyZEluZm8vTWFpbnRlbmFuY2VSZXBvcnRJbmZvJztcclxuaW1wb3J0IEludm9pY2VSZXBvcnRJbmZvIGZyb20gJy4vUGFnZVZpZXcvRGFzaGJvYXJkSW5mby9JbnZvaWNlUmVwb3J0SW5mbyc7XHJcbmltcG9ydCBQYXlSb2xsUmVwb3J0SW5mbyBmcm9tICcuL1BhZ2VWaWV3L0Rhc2hib2FyZEluZm8vUGF5Um9sbFJlcG9ydEluZm8nO1xyXG5pbXBvcnQgUHJvamVjdFJlcG9ydEluZm8gZnJvbSAnLi9QYWdlVmlldy9EYXNoYm9hcmRJbmZvL1Byb2plY3RSZXBvcnRJbmZvJztcclxuaW1wb3J0IERhaWx5RXhwZW5zZXNSZXBvcnRJbmZvIGZyb20gJy4vUGFnZVZpZXcvRGFzaGJvYXJkSW5mby9EYWlseUV4cGVuc2VzUmVwb3J0SW5mbyc7XHJcbmltcG9ydCBTYWxlc0J5Q3VzdG9tZXJSZXBvcnQgZnJvbSAnLi9QYWdlVmlldy9EYXNoYm9hcmRJbmZvL1NhbGVzQnlDdXN0b21lclJlcG9ydCc7XHJcbmltcG9ydCBQT1NBbmFseXRpY3NSZXBvcnQgZnJvbSAnLi9QYWdlVmlldy9EYXNoYm9hcmRJbmZvL1BPU0FuYWx5dGljc1JlcG9ydCc7XHJcbmltcG9ydCBJbnZlbnRvcnlNb3ZlbWVudFJlcG9ydCBmcm9tICcuL1BhZ2VWaWV3L0Rhc2hib2FyZEluZm8vSW52ZW50b3J5TW92ZW1lbnRSZXBvcnQnO1xyXG5pbXBvcnQgSW52ZW50b3J5VmFsdWF0aW9uUmVwb3J0IGZyb20gJy4vUGFnZVZpZXcvRGFzaGJvYXJkSW5mby9JbnZlbnRvcnlWYWx1YXRpb25SZXBvcnQnO1xyXG5pbXBvcnQgQVJBZ2luZ1JlcG9ydCBmcm9tICcuL1BhZ2VWaWV3L0Rhc2hib2FyZEluZm8vQVJBZ2luZ1JlcG9ydCc7XHJcbmltcG9ydCBTdXBwbGllclJlcG9ydEluZm8gZnJvbSAnLi9QYWdlVmlldy9EYXNoYm9hcmRJbmZvL1N1cHBsaWVyUmVwb3J0SW5mbyc7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuXHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuXHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuY29uc3QgS1BJQ2FyZCA9ICh7IHRpdGxlLCB2YWx1ZSwgaWNvbiwgY29sb3IgfSkgPT4gKFxyXG4gIDxDYXJkIHN4PXt7IGhlaWdodDogJzEwMCUnLCBib3hTaGFkb3c6IDMsIGJvcmRlckxlZnQ6IGA1cHggc29saWQgJHtjb2xvcn1gIH19PlxyXG4gICAgPENhcmRDb250ZW50PlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGd1dHRlckJvdHRvbSB2YXJpYW50PVwib3ZlcmxpbmVcIiBzeD17eyBmb250U2l6ZTogJzAuN3JlbScgfX0+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cclxuICAgICAgICAgICAge3ZhbHVlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggc3g9e3sgY29sb3I6IGNvbG9yIH19PlxyXG4gICAgICAgICAge2ljb259XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9DYXJkQ29udGVudD5cclxuICA8L0NhcmQ+XHJcbik7XHJcblxyXG5jb25zdCBSZXBvcnRTZWN0aW9uID0gKHsgdGl0bGUsIGljb24sIGl0ZW1zLCBvcGVuLCBvblRvZ2dsZSwgYWN0aXZlUmVwb3J0LCBvblNlbGVjdCB9KSA9PiAoXHJcbiAgPEJveCBzeD17eyBtYjogMiB9fT5cclxuICAgIDxMaXN0SXRlbUJ1dHRvbiBvbkNsaWNrPXtvblRvZ2dsZX0gc3g9e3sgYm9yZGVyUmFkaXVzOiAxLCBtYjogMC41LCBiYWNrZ3JvdW5kQ29sb3I6IG9wZW4gPyAncmdiYSg0OCwgNTQsIDEzOCwgMC4wNCknIDogJ3RyYW5zcGFyZW50JyB9fT5cclxuICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJyMzMDM2OGEnIH19PntpY29ufTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RpdGxlfSBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0gLz5cclxuICAgICAge29wZW4gPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fVxyXG4gICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgIDxDb2xsYXBzZSBpbj17b3Blbn0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtQnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIHN4PXt7IHBsOiA0LCBib3JkZXJSYWRpdXM6IDEsIGJhY2tncm91bmRDb2xvcjogYWN0aXZlUmVwb3J0ID09PSBpdGVtLmlkID8gJ3JnYmEoNDgsIDU0LCAxMzgsIDAuMSknIDogJ3RyYW5zcGFyZW50JyB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChpdGVtLmlkKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8U3RhckJvcmRlciBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9e2FjdGl2ZVJlcG9ydCA9PT0gaXRlbS5pZCA/IFwicHJpbWFyeVwiIDogXCJpbmhlcml0XCJ9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2l0ZW0ubGFiZWx9IHN4PXt7IGNvbG9yOiBhY3RpdmVSZXBvcnQgPT09IGl0ZW0uaWQgPyAnIzMwMzY4YScgOiAnaW5oZXJpdCcgfX0gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvQ29sbGFwc2U+XHJcbiAgPC9Cb3g+XHJcbik7XHJcblxyXG5mdW5jdGlvbiBSZXBvcnRzVmlld0FkbWluKCkge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuICBjb25zdCBjb21wb25lbnRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW29wZW5TZWN0aW9uLCBzZXRPcGVuU2VjdGlvbl0gPSB1c2VTdGF0ZSgnZmluYW5jaWFscycpO1xyXG4gIGNvbnN0IFthY3RpdmVSZXBvcnQsIHNldEFjdGl2ZVJlcG9ydF0gPSB1c2VTdGF0ZSgncmV2ZW51ZScpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIGludm9pY2VzOiBbXSxcclxuICAgIGV4cGVuc2VzOiBbXSxcclxuICAgIHBheXJvbGw6IFtdLFxyXG4gICAgcGF5bWVudHM6IFtdLFxyXG4gICAgaXRlbVB1cmNoYXNlczogW10sXHJcbiAgICBtYWludGVuYW5jZTogW10sXHJcbiAgICBwcm9qZWN0czogW10sXHJcbiAgICBwb3M6IFtdLFxyXG4gICAgaXRlbU91dDogW10sXHJcbiAgICBzdXBwbGllcnM6IFtdXHJcbiAgfSk7XHJcbiAgY29uc3QgW3N0YXRzLCBzZXRTdGF0c10gPSB1c2VTdGF0ZSh7XHJcbiAgICByZXZlbnVlOiAwLFxyXG4gICAgZXhwZW5zZXM6IDAsXHJcbiAgICBwcm9maXQ6IDAsXHJcbiAgICBpbnZlbnRvcnlWYWx1ZTogMFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbc2VsZWN0ZWRZZWFyLCBzZXRTZWxlY3RlZFllYXJdID0gdXNlU3RhdGUoJ0FsbCcpO1xyXG5cclxuICBjb25zdCBhdmFpbGFibGVZZWFycyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgeWVhcnMgPSBuZXcgU2V0KCk7XHJcbiAgICBjb25zdCBnZXRZZWFyID0gKGRhdGUpID0+IHtcclxuICAgICAgaWYgKCFkYXRlKSByZXR1cm4gbnVsbDtcclxuICAgICAgLy8gVHJ5IHBhcnNpbmcgY29tbW9uIGZvcm1hdHNcclxuICAgICAgbGV0IGQgPSBkYXlqcyhkYXRlLCBbJ1lZWVktTU0tREQnLCAnREQvTU0vWVlZWScsICdNTS9ERC9ZWVlZJywgJ1lZWVkvTU0vREQnXSwgdHJ1ZSk7XHJcbiAgICAgIGlmICghZC5pc1ZhbGlkKCkpIGQgPSBkYXlqcyhkYXRlKTtcclxuICAgICAgcmV0dXJuIGQuaXNWYWxpZCgpID8gZC5mb3JtYXQoJ1lZWVknKSA6IG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEuaW52b2ljZXMuZm9yRWFjaChpID0+IHtcclxuICAgICAgY29uc3QgeSA9IGdldFllYXIoaS5pbnZvaWNlRGF0ZSB8fCBpLmRhdGVJbnZvaWNlIHx8IGkuZGF0ZSk7XHJcbiAgICAgIGlmICh5KSB5ZWFycy5hZGQoeSk7XHJcbiAgICB9KTtcclxuICAgIGRhdGEuZXhwZW5zZXMuZm9yRWFjaChlID0+IHtcclxuICAgICAgY29uc3QgeSA9IGdldFllYXIoZS5leHBlbnNlRGF0ZSk7XHJcbiAgICAgIGlmICh5KSB5ZWFycy5hZGQoeSk7XHJcbiAgICB9KTtcclxuICAgIGRhdGEucGF5cm9sbC5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICBjb25zdCB5ID0gZ2V0WWVhcihwLm1vbnRoKTtcclxuICAgICAgaWYgKHkpIHllYXJzLmFkZCh5KTtcclxuICAgIH0pO1xyXG4gICAgZGF0YS5wb3MuZm9yRWFjaChwID0+IHtcclxuICAgICAgY29uc3QgeSA9IGdldFllYXIocC5pbnZvaWNlRGF0ZSB8fCBwLnBheW1lbnREYXRlKTtcclxuICAgICAgaWYgKHkpIHllYXJzLmFkZCh5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZpbmFsWWVhcnMgPSBBcnJheS5mcm9tKHllYXJzKS5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XHJcbiAgICByZXR1cm4gWydBbGwnLCAuLi5maW5hbFllYXJzXTtcclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmlsdGVyQnlZZWFyID0gKGl0ZW1zLCBkYXRlRmllbGQpID0+IHtcclxuICAgICAgaWYgKHNlbGVjdGVkWWVhciA9PT0gJ0FsbCcgfHwgIWl0ZW1zKSByZXR1cm4gaXRlbXMgfHwgW107XHJcbiAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGl0ZW1bZGF0ZUZpZWxkXTtcclxuICAgICAgICBpZiAoIWRhdGUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgZCA9IGRheWpzKGRhdGUsIFsnWVlZWS1NTS1ERCcsICdERC9NTS9ZWVlZJywgJ01NL0REL1lZWVknLCAnWVlZWS9NTS9ERCddLCB0cnVlKTtcclxuICAgICAgICBpZiAoIWQuaXNWYWxpZCgpKSBkID0gZGF5anMoZGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGQuaXNWYWxpZCgpICYmIGQuZm9ybWF0KCdZWVlZJykgPT09IHNlbGVjdGVkWWVhcjtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZpbHRlcmVkSW52b2ljZXMgPSBmaWx0ZXJCeVllYXIoZGF0YS5pbnZvaWNlcywgJ2ludm9pY2VEYXRlJyk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFBvcyA9IGZpbHRlckJ5WWVhcihkYXRhLnBvcywgJ2ludm9pY2VEYXRlJyk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEV4cGVuc2VzID0gZmlsdGVyQnlZZWFyKGRhdGEuZXhwZW5zZXMsICdleHBlbnNlRGF0ZScpO1xyXG4gICAgY29uc3QgZmlsdGVyZWRQYXlyb2xsID0gZmlsdGVyQnlZZWFyKGRhdGEucGF5cm9sbCwgJ21vbnRoJyk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1QdXJjaGFzZXMgPSBmaWx0ZXJCeVllYXIoZGF0YS5pdGVtUHVyY2hhc2VzLCAnaXRlbVB1cmNoYXNlRGF0ZScpO1xyXG5cclxuICAgIC8vIEZvciBJbnZlbnRvcnkgVmFsdWUsIHdlIHNob3cgdG90YWwgdmFsdWUgcmVnYXJkbGVzcyBvZiBzZWxlY3RlZCB5ZWFyIGZvciB0aGUgc25hcHNob3RcclxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBkYXRhLml0ZW1zO1xyXG5cclxuICAgIC8vIDEuIElOVk9JQ0VTOiBPbmx5IGNvdW50IEludm9pY2VzIHRoYXQgaGF2ZSBhY3R1YWxseSBiZWVuIFBBSUQgb3IgUEFSVElBTExZLVBBSUQgKEFjdHVhbCBtb25leSByZWNlaXZlZClcclxuICAgIGNvbnN0IHRvdGFsSW52b2ljZVJldmVudWUgPSBmaWx0ZXJlZEludm9pY2VzXHJcbiAgICAgIC5maWx0ZXIoaW52ID0+IHtcclxuICAgICAgICBjb25zdCBzID0gKGludi5zdGF0dXMgfHwgJycpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIHMgPT09ICdQQUlEJyB8fCBzID09PSAnRlVMTCBQQUlEJyB8fCBzID09PSAnUEFSVElBTExZLVBBSUQnIHx8IHMgPT09ICdQQVJUSUFMTFkgUEFJRCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5yZWR1Y2UoKHN1bSwgaW52KSA9PiBzdW0gKyAoTnVtYmVyKGludi50b3RhbCB8fCAwKSksIDApO1xyXG5cclxuICAgIC8vIDIuIFBPUyBTQUxFUzogQWxyZWFkeSBjb3VudHMgJ1RvdGFsQW1vdW50UGFpZCcgKG1vbmV5IGFjdHVhbGx5IGNvbGxlY3RlZClcclxuICAgIGNvbnN0IHRvdGFsUG9zUmV2ZW51ZSA9IGZpbHRlcmVkUG9zLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyAoTnVtYmVyKHAuVG90YWxBbW91bnRQYWlkIHx8IDApIC8gKE51bWJlcihwLnJhdGUgfHwgMSkpKSwgMCk7XHJcbiAgICBjb25zdCB0b3RhbFJldmVudWUgPSB0b3RhbEludm9pY2VSZXZlbnVlICsgdG90YWxQb3NSZXZlbnVlO1xyXG5cclxuICAgIC8vIDMuIEVYUEVOU0VTOiBBZGQgRGFpbHkgRXhwZW5zZXMsIFBheXJvbGwsIEFORCBJdGVtIFB1cmNoYXNlc1xyXG4gICAgY29uc3QgdG90YWxFeHAgPSBmaWx0ZXJlZEV4cGVuc2VzLnJlZHVjZSgoc3VtLCBleHApID0+IHN1bSArIChOdW1iZXIoZXhwLnRvdGFsIHx8IDApKSwgMCk7XHJcbiAgICBjb25zdCB0b3RhbFBheXJvbGwgPSBmaWx0ZXJlZFBheXJvbGwucmVkdWNlKChzdW0sIHJvbGwpID0+IHN1bSArIChOdW1iZXIocm9sbC50b3RhbFBhaWREb2xsYXJzIHx8IDApKSwgMCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvdGFsSXRlbVB1cmNoYXNlcyA9IGZpbHRlcmVkSXRlbVB1cmNoYXNlc1xyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IHMgPSAoaXRlbS5zdGF0dXMgfHwgJycpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIHMgPT09ICdQQUlEJyB8fCBzID09PSAnRlVMTCBQQUlEJyB8fCBzID09PSAnUEFSVElBTExZLVBBSUQnIHx8IHMgPT09ICdQQVJUSUFMTFkgUEFJRCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4ge1xyXG4gICAgICAgIC8vIFN1bSB0aGUgYWN0dWFsIG1vbmV5IHBhaWQgdG8gc3VwcGxpZXJzIGZvciB0aGlzIGl0ZW0gcHVyY2hhc2VcclxuICAgICAgICBjb25zdCBwYWlkQW1vdW50ID0gKGl0ZW0ucGF5bWVudHMgfHwgW10pLnJlZHVjZSgocFN1bSwgcCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmF0ZSA9IHBhcnNlRmxvYXQocC5yYXRlKSB8fCAyODAwO1xyXG4gICAgICAgICAgY29uc3QgcFVTRCA9IHBhcnNlRmxvYXQocC5hbW91bnQpIHx8IDA7XHJcbiAgICAgICAgICBjb25zdCBwRkMgPSBwYXJzZUZsb2F0KHAuYW1vdW50RkMpIHx8IDA7XHJcbiAgICAgICAgICByZXR1cm4gcFN1bSArIChwYXJzZUZsb2F0KHAudG90YWxVU0QpIHx8IChwVVNEICsgKHBGQyAvIHJhdGUpKSk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHN1bSArIHBhaWRBbW91bnQ7XHJcbiAgICAgIH0sIDApO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsRXhwZW5zZXMgPSB0b3RhbEV4cCArIHRvdGFsUGF5cm9sbCArIHRvdGFsSXRlbVB1cmNoYXNlcztcclxuXHJcbiAgICBjb25zdCBpbnZWYWwgPSBmaWx0ZXJlZEl0ZW1zXHJcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGVJdGVtID09PSAnR29vZHMnKVxyXG4gICAgICAucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIChOdW1iZXIoaXRlbS5pdGVtUXVhbnRpdHkgfHwgMCkgKiBOdW1iZXIoaXRlbS5pdGVtQ29zdFByaWNlIHx8IDApKSwgMCk7XHJcblxyXG4gICAgc2V0U3RhdHMoe1xyXG4gICAgICByZXZlbnVlOiB0b3RhbFJldmVudWUsXHJcbiAgICAgIGV4cGVuc2VzOiB0b3RhbEV4cGVuc2VzLFxyXG4gICAgICBwcm9maXQ6IHRvdGFsUmV2ZW51ZSAtIHRvdGFsRXhwZW5zZXMsXHJcbiAgICAgIGludmVudG9yeVZhbHVlOiBOdW1iZXIoaW52VmFsLnRvRml4ZWQoMikpXHJcbiAgICB9KTtcclxuICB9LCBbZGF0YSwgc2VsZWN0ZWRZZWFyXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUsIGlkOiByZXMuZGF0YS5kYXRhLl9pZCB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaCwgbmF2aWdhdGVdKTtcclxuXHJcbiAgY29uc3QgW2dyYW50QWNjZXNzLCBzZXRHcmFudEFjY2Vzc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzRmV0Y2hpbmdBY2Nlc3MsIHNldElzRmV0Y2hpbmdBY2Nlc3NdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlcj8uZGF0YT8uaWQpIHtcclxuICAgICAgY29uc3QgZmV0Y2hOdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dyYW50QWNjZXNzYCk7XHJcbiAgICAgICAgICBjb25zdCB1c2VyQWNjZXNzID0gcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cudXNlcklEID09PSB1c2VyLmRhdGEuaWQpO1xyXG4gICAgICAgICAgaWYgKHVzZXJBY2Nlc3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXRHcmFudEFjY2Vzcyh1c2VyQWNjZXNzWzBdLm1vZHVsZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhY2Nlc3M6JywgZXJyb3IpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICBzZXRJc0ZldGNoaW5nQWNjZXNzKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGZldGNoTnVtYmVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJZiB1c2VyIGlzIG5vdCB5ZXQgbG9hZGVkIGludG8gUmVkdXgsIGtlZXAgaXQgbG9hZGluZ1xyXG4gICAgICBzZXRJc0ZldGNoaW5nQWNjZXNzKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIGNvbnN0IGhhc0FjY2VzcyA9IHVzZXI/LmRhdGE/LnVzZXJOYW1lID09PSAnR0cnIHx8IGdyYW50QWNjZXNzLnNvbWUobSA9PiBtLm1vZHVsZU5hbWUgPT09ICdSZXBvcnRzJyAmJiBtLmFjY2Vzcy5yZWFkTSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWhhc0FjY2VzcyAmJiBncmFudEFjY2Vzcy5sZW5ndGggPiAwICYmIHVzZXI/LmRhdGE/LnVzZXJOYW1lICE9PSAnR0cnKSB7XHJcbiAgICAgIC8vIElmIHdlJ3ZlIGZldGNoZWQgcGVybWlzc2lvbnMgYW5kIHVzZXIgaXMgbm90IEdHIGFuZCBkb2Vzbid0IGhhdmUgYWNjZXNzXHJcbiAgICAgIC8vIFdlIGNvdWxkIHJlZGlyZWN0IG9yIHNob3cgYSBtZXNzYWdlLlxyXG4gICAgfVxyXG4gICAgY29uc3QgZmV0Y2hBbGxEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IFtcclxuICAgICAgICAgIHJlc0l0ZW1zLCByZXNJbnZvaWNlcywgcmVzRXhwZW5zZXMsIHJlc1BheXJvbGwsXHJcbiAgICAgICAgICByZXNQYXltZW50cywgcmVzSXRlbVB1cmNoYXNlcywgcmVzTWFpbnRlbmFuY2UsIHJlc1Byb2plY3RzLFxyXG4gICAgICAgICAgcmVzUG9zLCByZXNJdGVtT3V0LCByZXNTdXBwbGllcnNcclxuICAgICAgICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbWApLFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaW52b2ljZT9zdW1tYXJ5PXRydWVgKSxcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2V4cGVuc2U/c3VtbWFyeT10cnVlYCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wYXlSb2xsYCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wYXltZW50YCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtUHVyY2hhc2U/c3VtbWFyeT10cnVlYCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9tYWludGVuYW5jZT9zdW1tYXJ5PXRydWVgKSxcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3Byb2plY3RzYCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wb3M/c3VtbWFyeT10cnVlYCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtLXVzYWdlYCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9TdXBwbGllcmApXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZldGNoZWREYXRhID0ge1xyXG4gICAgICAgICAgaXRlbXM6IHJlc0l0ZW1zLmRhdGEuZGF0YSB8fCBbXSxcclxuICAgICAgICAgIGludm9pY2VzOiByZXNJbnZvaWNlcy5kYXRhLmRhdGEgfHwgW10sXHJcbiAgICAgICAgICBleHBlbnNlczogcmVzRXhwZW5zZXMuZGF0YS5kYXRhIHx8IFtdLFxyXG4gICAgICAgICAgcGF5cm9sbDogcmVzUGF5cm9sbC5kYXRhLmRhdGEgfHwgW10sXHJcbiAgICAgICAgICBwYXltZW50czogcmVzUGF5bWVudHMuZGF0YS5kYXRhIHx8IFtdLFxyXG4gICAgICAgICAgaXRlbVB1cmNoYXNlczogcmVzSXRlbVB1cmNoYXNlcy5kYXRhLmRhdGEgfHwgW10sXHJcbiAgICAgICAgICBtYWludGVuYW5jZTogcmVzTWFpbnRlbmFuY2UuZGF0YS5kYXRhIHx8IFtdLFxyXG4gICAgICAgICAgcHJvamVjdHM6IHJlc1Byb2plY3RzLmRhdGEuZGF0YSB8fCBbXSxcclxuICAgICAgICAgIHBvczogcmVzUG9zLmRhdGEuZGF0YSB8fCBbXSxcclxuICAgICAgICAgIGl0ZW1PdXQ6IHJlc0l0ZW1PdXQuZGF0YT8uZGF0YSB8fCBbXSxcclxuICAgICAgICAgIHN1cHBsaWVyczogcmVzU3VwcGxpZXJzLmRhdGE/LmRhdGEgfHwgW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXREYXRhKGZldGNoZWREYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzdGF0czonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaEFsbERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUb2dnbGVTZWN0aW9uID0gKHNlY3Rpb24pID0+IHtcclxuICAgIHNldE9wZW5TZWN0aW9uKG9wZW5TZWN0aW9uID09PSBzZWN0aW9uID8gbnVsbCA6IHNlY3Rpb24pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdGl2ZVJlcG9ydExhYmVsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWxsSXRlbXMgPSBbXHJcbiAgICAgIHsgaWQ6ICdyZXZlbnVlJywgbGFiZWw6ICdSZXZlbnVlIENlbnRyYWxzJyB9LFxyXG4gICAgICB7IGlkOiAnaXRlbV9yZXBvcnQnLCBsYWJlbDogJ0l0ZW0gSW52ZW50b3J5JyB9LFxyXG4gICAgICB7IGlkOiAnc3RvY2tfdmFsJywgbGFiZWw6ICdJbnZlbnRvcnkgVmFsdWF0aW9uJyB9LFxyXG4gICAgICB7IGlkOiAnbWFpbnRlbmFuY2UnLCBsYWJlbDogJ01haW50ZW5hbmNlIEFuYWx5c2lzJyB9LFxyXG4gICAgICB7IGlkOiAncHJvamVjdHMnLCBsYWJlbDogJ1Byb2plY3QgUHJvZml0YWJpbGl0eScgfSxcclxuICAgICAgeyBpZDogJ3BheXJvbGwnLCBsYWJlbDogJ1BheXJvbGwgU3VtbWFyeScgfSxcclxuICAgICAgeyBpZDogJ2RhaWx5X2V4cCcsIGxhYmVsOiAnRGFpbHkgRXhwZW5zZXMnIH0sXHJcbiAgICAgIHsgaWQ6ICdzYWxlc19jdXN0b21lcicsIGxhYmVsOiAnU2FsZXMgYnkgQ3VzdG9tZXInIH0sXHJcbiAgICAgIHsgaWQ6ICdwb3NfYW5hbHlzaXMnLCBsYWJlbDogJ1BPUyBTYWxlcyBBbmFseXNpcycgfSxcclxuICAgICAgeyBpZDogJ2ludmVudG9yeV9tb3ZlbWVudCcsIGxhYmVsOiAnSW52ZW50b3J5IE1vdmVtZW50JyB9LFxyXG4gICAgICB7IGlkOiAnYXJfYWdpbmcnLCBsYWJlbDogJ0EvUiBBZ2luZyBSZXBvcnQnIH0sXHJcbiAgICAgIHsgaWQ6ICdzdXBwbGllcl9wYXlhYmxlcycsIGxhYmVsOiAnU3VwcGxpZXIgUGF5YWJsZXMnIH1cclxuICAgIF07XHJcbiAgICByZXR1cm4gYWxsSXRlbXMuZmluZChpID0+IGkuaWQgPT09IGFjdGl2ZVJlcG9ydCk/LmxhYmVsIHx8ICdSZXBvcnQnO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhciBzeD17eyBwcjogJzI0cHgnIH19PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17eyBtYXJnaW5SaWdodDogJzM2cHgnLCAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBub1dyYXAgc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgICAgUHJvZmVzc2lvbmFsIFJlcG9ydCBDZW50ZXJcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNpZGVCYXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2lkZUJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXIgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsIHB4OiBbMV0gfX0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaCAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3ggY29tcG9uZW50PVwibWFpblwiIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNmNGY1ZjcnLCBmbGV4R3JvdzogMSwgaGVpZ2h0OiAnMTAwdmgnLCBvdmVyZmxvdzogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4bFwiIHN4PXt7IG10OiA0LCBtYjogNCB9fT5cclxuICAgICAgICAgICAge2lzRmV0Y2hpbmdBY2Nlc3MgPyAoXHJcbiAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgbXQ6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKSA6ICFoYXNBY2Nlc3MgPyAoXHJcbiAgICAgICAgICAgICAgPEJveCBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtdDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjb2xvcj1cImVycm9yXCI+QWNjZXNzIERlbmllZDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPllvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIHZpZXcgdGhlIFByb2Zlc3Npb25hbCBSZXBvcnQgQ2VudGVyLiBQbGVhc2UgY29udGFjdCBHRyBmb3IgYWNjZXNzLjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgey8qIEtQSSBTZWN0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYjogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBjb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIFBlcmZvcm1hbmNlIE92ZXJ2aWV3XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgYnkgWWVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkWWVhcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgU2VsZWN0UHJvcHM9e3sgbmF0aXZlOiB0cnVlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6IDE1MCB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZVllYXJzLm1hcCh5ZWFyID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt5ZWFyfSB2YWx1ZT17eWVhcn0+e3llYXJ9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IHN4PXt7IG1iOiA0IH19PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8S1BJQ2FyZCB0aXRsZT1cIlRvdGFsIFJldmVudWVcIiB2YWx1ZT17YCQke3N0YXRzLnJldmVudWUudG9Mb2NhbGVTdHJpbmcoKX1gfSBpY29uPXs8TW9uZXRpemF0aW9uT24gZm9udFNpemU9XCJsYXJnZVwiIC8+fSBjb2xvcj1cIiMyZTdkMzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxLUElDYXJkIHRpdGxlPVwiVG90YWwgRXhwZW5zZXNcIiB2YWx1ZT17YCQke3N0YXRzLmV4cGVuc2VzLnRvTG9jYWxlU3RyaW5nKCl9YH0gaWNvbj17PFJlY2VpcHQgZm9udFNpemU9XCJsYXJnZVwiIC8+fSBjb2xvcj1cIiNkMzJmMmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxLUElDYXJkIHRpdGxlPVwiTmV0IFByb2ZpdFwiIHZhbHVlPXtgJCR7c3RhdHMucHJvZml0LnRvTG9jYWxlU3RyaW5nKCl9YH0gaWNvbj17PEFzc2Vzc21lbnQgZm9udFNpemU9XCJsYXJnZVwiIC8+fSBjb2xvcj1cIiMwMjg4ZDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxLUElDYXJkIHRpdGxlPVwiSW52ZW50b3J5IFZhbHVlXCIgdmFsdWU9e2AkJHtzdGF0cy5pbnZlbnRvcnlWYWx1ZS50b0xvY2FsZVN0cmluZygpfWB9IGljb249ezxJbnZlbnRvcnkgZm9udFNpemU9XCJsYXJnZVwiIC8+fSBjb2xvcj1cIiNlZDZjMDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE1haW4gQ29udGVudCAqL31cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBib3hTaGFkb3c6IDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgcDogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RTdWJoZWFkZXIgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgcHk6IDIsIGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcxcmVtJywgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsIGNvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgT3BlcmF0aW9uYWwgUmVwb3J0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RTdWJoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IHN4PXt7IHA6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlcG9ydFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRmluYW5jaWFsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8TW9uZXRpemF0aW9uT24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVuU2VjdGlvbiA9PT0gJ2ZpbmFuY2lhbHMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9eygpID0+IGhhbmRsZVRvZ2dsZVNlY3Rpb24oJ2ZpbmFuY2lhbHMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVJlcG9ydD17YWN0aXZlUmVwb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3NldEFjdGl2ZVJlcG9ydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQ6ICdyZXZlbnVlJywgbGFiZWw6ICdSZXZlbnVlIENlbnRyYWxzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiAnZGFpbHlfZXhwJywgbGFiZWw6ICdEYWlseSBFeHBlbnNlcycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogJ3NhbGVzX2N1c3RvbWVyJywgbGFiZWw6ICdTYWxlcyBieSBDdXN0b21lcicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogJ2FyX2FnaW5nJywgbGFiZWw6ICdBL1IgQWdpbmcgVmlldycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogJ3N1cHBsaWVyX3BheWFibGVzJywgbGFiZWw6ICdTdXBwbGllciBQYXlhYmxlcycgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvcnRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkludmVudG9yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8SW52ZW50b3J5IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3BlblNlY3Rpb24gPT09ICdpbnZlbnRvcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9eygpID0+IGhhbmRsZVRvZ2dsZVNlY3Rpb24oJ2ludmVudG9yeScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUmVwb3J0PXthY3RpdmVSZXBvcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17c2V0QWN0aXZlUmVwb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogJ2l0ZW1fcmVwb3J0JywgbGFiZWw6ICdJdGVtIEludmVudG9yeScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogJ3N0b2NrX3ZhbCcsIGxhYmVsOiAnU3RvY2sgVmFsdWF0aW9uJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiAnaW52ZW50b3J5X21vdmVtZW50JywgbGFiZWw6ICdNb3ZlbWVudCBBbmFseXNpcycgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvcnRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByb2plY3RzICYgT3BzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249ezxFbmdpbmVlcmluZyAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW5TZWN0aW9uID09PSAnb3BzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXsoKSA9PiBoYW5kbGVUb2dnbGVTZWN0aW9uKCdvcHMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVJlcG9ydD17YWN0aXZlUmVwb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3NldEFjdGl2ZVJlcG9ydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQ6ICdtYWludGVuYW5jZScsIGxhYmVsOiAnTWFpbnRlbmFuY2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQ6ICdwcm9qZWN0cycsIGxhYmVsOiAnUHJvamVjdCBJbmZvJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiAncG9zX2FuYWx5c2lzJywgbGFiZWw6ICdQT1MgQW5hbHlzaXMnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVwb3J0U2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJIUiAmIFBheXJvbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEdyb3VwcyAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW5TZWN0aW9uID09PSAnaHInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9eygpID0+IGhhbmRsZVRvZ2dsZVNlY3Rpb24oJ2hyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVSZXBvcnQ9e2FjdGl2ZVJlcG9ydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZXRBY3RpdmVSZXBvcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiAncGF5cm9sbCcsIGxhYmVsOiAnUGF5cm9sbCBzdW1tYXJ5JyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogJzEwMCUnLCBtaW5IZWlnaHQ6ICc2NTBweCcsIGJveFNoYWRvdzogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYjogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInByaW1hcnlcIiBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24gZm9udFNpemU9XCJzbWFsbFwiIC8+IHthY3RpdmVSZXBvcnRMYWJlbCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RUb1ByaW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0YXJ0SWNvbj17PExvY2FsUHJpbnRzaG9wIC8+fSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW50IFJlcG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXsoKSA9PiBjb21wb25lbnRSZWYuY3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHN4PXt7IG1iOiAyIH19IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHA6IDEsIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLCBtaW5IZWlnaHQ6ICc1NTBweCcgfX0gcmVmPXtjb21wb25lbnRSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVSZXBvcnQgPT09ICdyZXZlbnVlJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZW51ZUV4cGVuc2VzQWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW9udGg9XCJBbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBheW1lbnQ9e2RhdGEucGF5bWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGF5Um9sbD17ZGF0YS5wYXlyb2xsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1QdXJDaGFzZT17ZGF0YS5pdGVtUHVyY2hhc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkV4cGVuc2VzPXtkYXRhLmV4cGVuc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxJbnZvaWNlcz17ZGF0YS5pbnZvaWNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zSW52b2ljZT17ZGF0YS5wb3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVycz17ZGF0YS5jdXN0b21lcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVJlcG9ydCA9PT0gJ2l0ZW1fcmVwb3J0JyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVJlcG9ydEluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb250aD1cIkNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtPXtkYXRhLml0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVSZXBvcnQgPT09ICdtYWludGVuYW5jZScgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW50ZW5hbmNlUmVwb3J0SW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vbnRoPVwiQWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25NYWludGVuYW5jZT17ZGF0YS5tYWludGVuYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlUmVwb3J0ID09PSAnZGFpbHlfZXhwJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFpbHlFeHBlbnNlc1JlcG9ydEluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb250aD1cIkFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXhwZW5zZXM9e2RhdGEuZXhwZW5zZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVJlcG9ydCA9PT0gJ2FyX2FnaW5nJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QVJBZ2luZ1JlcG9ydCBvbkludm9pY2U9e2RhdGEuaW52b2ljZXN9IG9uUGF5bWVudD17ZGF0YS5wYXltZW50c30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVSZXBvcnQgPT09ICdwYXlyb2xsJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGF5Um9sbFJlcG9ydEluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb250aD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGF5Um9sbD17ZGF0YS5wYXlyb2xsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVSZXBvcnQgPT09ICdwcm9qZWN0cycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RSZXBvcnRJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW9udGg9XCJSZXZlbnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9qZWN0TmFtZT17ZGF0YS5wcm9qZWN0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYXltZW50PXtkYXRhLnBheW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVSZXBvcnQgPT09ICdzdG9ja192YWwnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnZlbnRvcnlWYWx1YXRpb25SZXBvcnQgaXRlbXM9e2RhdGEuaXRlbXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlUmVwb3J0ID09PSAnc2FsZXNfY3VzdG9tZXInICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTYWxlc0J5Q3VzdG9tZXJSZXBvcnQgb25JbnZvaWNlPXtkYXRhLmludm9pY2VzfSBvblBvcz17ZGF0YS5wb3N9IG9uUGF5bWVudD17ZGF0YS5wYXltZW50c30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVSZXBvcnQgPT09ICdwb3NfYW5hbHlzaXMnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQT1NBbmFseXRpY3NSZXBvcnQgb25Qb3M9e2RhdGEucG9zfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVJlcG9ydCA9PT0gJ2ludmVudG9yeV9tb3ZlbWVudCcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEludmVudG9yeU1vdmVtZW50UmVwb3J0IG9uSW52ZW50b3J5SW49e2RhdGEuaXRlbVB1cmNoYXNlc30gb25JbnZlbnRvcnlPdXQ9e2RhdGEuaXRlbU91dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVSZXBvcnQgPT09ICdzdXBwbGllcl9wYXlhYmxlcycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN1cHBsaWVyUmVwb3J0SW5mbyBvblN1cHBsaWVycz17ZGF0YS5zdXBwbGllcnN9IG9uSXRlbVB1cmNoYXNlPXtkYXRhLml0ZW1QdXJjaGFzZXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0c1ZpZXdBZG1pbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwidXNlUmVmIiwiQm94IiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiVGV4dEZpZWxkIiwiRGl2aWRlciIsIkdyaWQiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJJY29uQnV0dG9uIiwiVG9vbHRpcCIsIkNoaXAiLCJCdXR0b24iLCJEaWFsb2ciLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dBY3Rpb25zIiwiTG9jYWxQcmludHNob3AiLCJGaWxlRG93bmxvYWQiLCJJbmZvT3V0bGluZWQiLCJDbG9zZSIsImRheWpzIiwiRXhjZWxKUyIsInNhdmVBcyIsInVzZVJlYWN0VG9QcmludCIsIkFSQWdpbmdSZXBvcnQiLCJfcmVmIiwiX3NlbGVjdGVkQ3VzdG9tZXIkdG90Iiwib25JbnZvaWNlIiwib25QYXltZW50IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInNlbGVjdGVkQ3VzdG9tZXIiLCJzZXRTZWxlY3RlZEN1c3RvbWVyIiwiY29tcG9uZW50UmVmIiwiaGFuZGxlUHJpbnQiLCJjb250ZW50IiwiY3VycmVudCIsImRvY3VtZW50VGl0bGUiLCJjb25jYXQiLCJuYW1lIiwiY3VzdG9tZXJJbnZvaWNlcyIsIkFycmF5IiwiaXNBcnJheSIsImZpbHRlciIsImludiIsIl9pbnYkY3VzdG9tZXJOYW1lIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJiYWxhbmNlIiwiTnVtYmVyIiwiYmFsYW5jZUR1ZSIsImN1c3RJZCIsImN1c3RvbWVyTmFtZSIsIl9pZCIsImN1c3RvbWVySWQiLCJpZCIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJpbnZvaWNlRGF0ZSIsImFnaW5nRGF0YSIsImN1c3RvbWVyTWFwIiwiZm9yRWFjaCIsIl9pbnYkY3VzdG9tZXJOYW1lMiIsIl9pbnYkY3VzdG9tZXJOYW1lMyIsImN1c3ROYW1lIiwidG90YWwiLCJpbnZEYXRlIiwidG9kYXkiLCJkYXlzT3ZlcmR1ZSIsImRpZmYiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjIiwidG9Mb3dlckNhc2UiLCJ0b3RhbHMiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwiZXhwb3J0VG9FeGNlbCIsIl9yZWYyIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJ3b3JrYm9vayIsIldvcmtib29rIiwid29ya3NoZWV0IiwiYWRkV29ya3NoZWV0IiwiY29sdW1ucyIsImhlYWRlciIsImtleSIsIndpZHRoIiwicm93IiwiYWRkUm93IiwiZ2V0Um93IiwiZm9udCIsImJvbGQiLCJidWZmZXIiLCJ4bHN4Iiwid3JpdGVCdWZmZXIiLCJCbG9iIiwiZm9ybWF0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjcmVhdGVFbGVtZW50Iiwic3giLCJtYiIsImRpc3BsYXkiLCJnYXAiLCJhbGlnbkl0ZW1zIiwibGFiZWwiLCJzaXplIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0aXRsZSIsInZhcmlhbnQiLCJzdGFydEljb24iLCJvbkNsaWNrIiwibWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiaXRlbSIsInhzIiwibWQiLCJib3JkZXJUb3AiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJ0b0xvY2FsZVN0cmluZyIsImNvbXBvbmVudCIsImJveFNoYWRvdyIsImJvcmRlciIsInN0aWNreUhlYWRlciIsImFsaWduIiwibWFwIiwiaG92ZXIiLCJjdXJzb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsImxlbmd0aCIsImNvbFNwYW4iLCJweSIsImZvbnRTaXplIiwib3BlbiIsIkJvb2xlYW4iLCJvbkNsb3NlIiwibWF4V2lkdGgiLCJmdWxsV2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImRpdmlkZXJzIiwicmVmIiwic3R5bGUiLCJwYWRkaW5nIiwiTWF0aCIsIm1heCIsInRvdGFsSW52b2ljZSIsInBhaWQiLCJpbnZvaWNlTnVtYmVyIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJmYWN0dXJlTnVtYmVyIiwidW5kZWZpbmVkIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwidGV4dEFsaWduIiwibXIiLCJib3JkZXJDb2xvciIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIk1lbnVJdGVtIiwiaXNCZXR3ZWVuIiwiY3VzdG9tUGFyc2VGb3JtYXQiLCJleHRlbmQiLCJJbnZlbnRvcnlNb3ZlbWVudFJlcG9ydCIsIm9uSW52ZW50b3J5SW4iLCJvbkludmVudG9yeU91dCIsImRhdGVSYW5nZSIsInNldERhdGVSYW5nZSIsInByb2Nlc3NlZERhdGEiLCJtb3ZlbWVudCIsIm5vdyIsInN0YXJ0Iiwic3RhcnRPZiIsImVuZCIsImVuZE9mIiwicHJvYyIsImQiLCJpdGVtUHVyY2hhc2VEYXRlIiwiaXNWYWxpZCIsIml0ZW1zIiwiaXQiLCJfaXQkaXRlbU5hbWUiLCJza3UiLCJpdGVtTmFtZSIsImluIiwib3V0IiwiaXRlbVF0eSIsIml0ZW1PdXREYXRlIiwiaXRlbXNRdHlBcnJheSIsIl9pdCRpdGVtTmFtZTIiLCJuZXdJdGVtT3V0IiwiaXRlbU91dCIsIl9vYmplY3RTcHJlYWQiLCJlbGV2YXRpb24iLCJJbnZlbnRvcnkiLCJNb25ldGl6YXRpb25PbiIsIkludmVudG9yeVZhbHVhdGlvblJlcG9ydCIsInR5cGVJdGVtIiwiX2l0ZW0kaXRlbU5hbWUiLCJfaXRlbSRpdGVtRGVzY3JpcHRpb24iLCJpdGVtRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInF1YW50aXR5IiwiaXRlbVF1YW50aXR5IiwiY29zdFByaWNlIiwiaXRlbUNvc3RQcmljZSIsInZhbHVhdGlvbiIsInF0eSIsImJvcmRlckxlZnQiLCJMaW5lQ2hhcnQiLCJUcmVuZGluZ1VwIiwiUmVjZWlwdCIsIlBvaW50T2ZTYWxlIiwiUE9TQW5hbHl0aWNzUmVwb3J0Iiwib25Qb3MiLCJjdXN0b21TdGFydCIsInNldEN1c3RvbVN0YXJ0IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJjdXN0b21FbmQiLCJzZXRDdXN0b21FbmQiLCJjaGFydERhdGEiLCJzdGF0cyIsInJldmVudWUiLCJjb3VudCIsInByb2ZpdCIsImZpbHRlcmVkIiwiX2N1cnIkaXRlbXMiLCJzZWxsIiwiVG90YWxBbW91bnRQYWlkIiwicmF0ZSIsImNvc3QiLCJzdW0iLCJpdGVtQ29zdCIsIm1vbnRocyIsIl9sb29wIiwibSIsInN1YnRyYWN0IiwiaSIsInN0YXJ0TSIsImVuZE0iLCJtb250aExhYmVsIiwibW9udGhTYWxlcyIsInB1c2giLCJfcm93JGN1c3RvbWVyTmFtZSIsImZhY3R1cmUiLCJkYXRlIiwiY3VzdG9tZXIiLCJhbW91bnQiLCJ0eXBlIiwiSW5wdXRMYWJlbFByb3BzIiwic2hyaW5rIiwiaGVpZ2h0IiwicCIsImJvcmRlclJhZGl1cyIsInNlcmllcyIsImRhdGEiLCJhcmVhIiwieEF4aXMiLCJzY2FsZVR5cGUiLCJtYXJnaW4iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJzbGljZSIsIl9yb3ckY3VzdG9tZXJOYW1lMiIsImZvbnRTdHlsZSIsIkFwcEJhciIsIlRvb2xiYXIiLCJTbGlkZSIsIlRyYW5zaXRpb24iLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJfZXh0ZW5kcyIsImRpcmVjdGlvbiIsIlNhbGVzQnlDdXN0b21lclJlcG9ydCIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJvcGVuRGV0YWlscyIsInNldE9wZW5EZXRhaWxzIiwiYWxsVHJhbnNhY3Rpb25zIiwiZHVlIiwicG9zIiwicGF5bWVudERhdGUiLCJwYXkiLCJtb2RlcyIsInBBbW91bnQiLCJwYXJzZUZsb2F0IiwiUGF5bWVudFJlY2VpdmVkVVNEIiwiUGF5bWVudFJlY2VpdmVkRkMiLCJhbW91bnRGQyIsInRvdGFsVVNEIiwidHJhbnNhY3Rpb25UeXBlIiwiYWJzIiwiZmlsdGVyZWRUcmFuc2FjdGlvbnMiLCJfaXRlbSRjdXN0b21lck5hbWUiLCJfaXRlbSRjdXN0b21lck5hbWUyIiwiaW52b2ljZUNvdW50IiwidG90YWxTYWxlcyIsInRvdGFsUGFpZCIsInRyYW5zYWN0aW9ucyIsInNhbGVzIiwiaGFuZGxlT3BlbkRldGFpbHMiLCJoYW5kbGVDbG9zZURldGFpbHMiLCJmbGV4V3JhcCIsIkZyYWdtZW50IiwiZnVsbFNjcmVlbiIsIlRyYW5zaXRpb25Db21wb25lbnQiLCJwb3NpdGlvbiIsImVkZ2UiLCJmbGV4IiwiYXV0b0ZvY3VzIiwiX3NlbGVjdGVkQ3VzdG9tZXIkdHJhIiwicnVubmluZ0JhbGFuY2UiLCJpZHgiLCJwYXltZW50TnVtYmVyIiwiU3VwcGxpZXJSZXBvcnRJbmZvIiwiX3NlbGVjdGVkU3VwcGxpZXIkcHVyIiwib25TdXBwbGllcnMiLCJvbkl0ZW1QdXJjaGFzZSIsImZpbHRlclBhaWQiLCJzZXRGaWx0ZXJQYWlkIiwic2VsZWN0ZWRTdXBwbGllciIsInNldFNlbGVjdGVkU3VwcGxpZXIiLCJzdXBwbGllcnNMaXN0IiwicHVyY2hhc2VzTGlzdCIsInN1cHBsaWVyTWFwIiwic3VwcGxpZXIiLCJzdXBwbGllck5hbWUiLCJzdG9yZU5hbWUiLCJ0b3RhbEJpbGxlZCIsInB1cmNoYXNlcyIsInB1cmNoYXNlIiwibWF0Y2hlZFN1cHBsaWVySWQiLCJtYW51ZmFjdHVyZXJJRCIsImZvdW5kIiwiZmluZCIsInMiLCJtYW51ZmFjdHVyZXIiLCJ0b3RhbFZhbCIsInB1cmNoYXNlU3RhdHVzIiwicGFpZFZhbCIsInBheW1lbnRzIiwidW5wYWlkVmFsIiwiY2FsY3VsYXRlZFRvdGFsIiwiY2FsY3VsYXRlZFBhaWQiLCJjYWxjdWxhdGVkQmFsYW5jZSIsImRpc3BsYXlTdGF0dXMiLCJtYXRjaGVzU2VhcmNoIiwibWF0Y2hlc1N0YXR1cyIsImJpbGxlZCIsInN0b3JlIiwiaXRlbVB1cmNoYXNlTnVtYmVyIiwicHJvamVjdE5hbWUiLCJ1c2VFZmZlY3QiLCJTaWRlYmFyRGFzaCIsInN0eWxlZCIsIlN0YWNrIiwiTGlzdCIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIkNvbGxhcHNlIiwiQ29udGFpbmVyIiwiQ3NzQmFzZWxpbmUiLCJMaXN0U3ViaGVhZGVyIiwiTGlzdEl0ZW1CdXR0b24iLCJDaXJjdWxhclByb2dyZXNzIiwiQXNzZXNzbWVudCIsIkdyb3VwcyIsIkVuZ2luZWVyaW5nIiwiRGVzY3JpcHRpb24iLCJFeHBhbmRMZXNzIiwiRXhwYW5kTW9yZSIsIlN0YXJCb3JkZXIiLCJQZXJzb24zT3V0bGluZWQiLCJMb2dvdXQiLCJDaGV2cm9uTGVmdCIsIk1lbnUiLCJNZW51SWNvbiIsIk11aUFwcEJhciIsIk11aURyYXdlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsInVzZU5hdmlnYXRlIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiUmVhY3RUb1ByaW50IiwiTG9hZGVyIiwiUmV2ZW51ZUV4cGVuc2VzQWxsIiwiSXRlbVJlcG9ydEluZm8iLCJNYWludGVuYW5jZVJlcG9ydEluZm8iLCJJbnZvaWNlUmVwb3J0SW5mbyIsIlBheVJvbGxSZXBvcnRJbmZvIiwiUHJvamVjdFJlcG9ydEluZm8iLCJEYWlseUV4cGVuc2VzUmVwb3J0SW5mbyIsImRyYXdlcldpZHRoIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwidGhlbWUiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJicmVha3BvaW50cyIsInVwIiwiS1BJQ2FyZCIsIl9yZWYzIiwiaWNvbiIsImd1dHRlckJvdHRvbSIsIlJlcG9ydFNlY3Rpb24iLCJfcmVmNCIsIm9uVG9nZ2xlIiwiYWN0aXZlUmVwb3J0Iiwib25TZWxlY3QiLCJwcmltYXJ5IiwidGltZW91dCIsInVubW91bnRPbkV4aXQiLCJkaXNhYmxlUGFkZGluZyIsImluZGV4IiwicGwiLCJSZXBvcnRzVmlld0FkbWluIiwiX3VzZXIkZGF0YTIiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwib3BlblNlY3Rpb24iLCJzZXRPcGVuU2VjdGlvbiIsInNldEFjdGl2ZVJlcG9ydCIsImludm9pY2VzIiwiZXhwZW5zZXMiLCJwYXlyb2xsIiwiaXRlbVB1cmNoYXNlcyIsIm1haW50ZW5hbmNlIiwicHJvamVjdHMiLCJzdXBwbGllcnMiLCJzZXREYXRhIiwiaW52ZW50b3J5VmFsdWUiLCJzZXRTdGF0cyIsInNlbGVjdGVkWWVhciIsInNldFNlbGVjdGVkWWVhciIsImF2YWlsYWJsZVllYXJzIiwieWVhcnMiLCJTZXQiLCJnZXRZZWFyIiwieSIsImRhdGVJbnZvaWNlIiwiYWRkIiwiZXhwZW5zZURhdGUiLCJtb250aCIsImZpbmFsWWVhcnMiLCJmcm9tIiwiZmlsdGVyQnlZZWFyIiwiZGF0ZUZpZWxkIiwiZmlsdGVyZWRJbnZvaWNlcyIsImZpbHRlcmVkUG9zIiwiZmlsdGVyZWRFeHBlbnNlcyIsImZpbHRlcmVkUGF5cm9sbCIsImZpbHRlcmVkSXRlbVB1cmNoYXNlcyIsImZpbHRlcmVkSXRlbXMiLCJ0b3RhbEludm9pY2VSZXZlbnVlIiwidG9VcHBlckNhc2UiLCJ0b3RhbFBvc1JldmVudWUiLCJ0b3RhbFJldmVudWUiLCJ0b3RhbEV4cCIsImV4cCIsInRvdGFsUGF5cm9sbCIsInJvbGwiLCJ0b3RhbFBhaWREb2xsYXJzIiwidG90YWxJdGVtUHVyY2hhc2VzIiwicGFpZEFtb3VudCIsInBTdW0iLCJwVVNEIiwicEZDIiwidG90YWxFeHBlbnNlcyIsImludlZhbCIsInRvRml4ZWQiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjUiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJncmFudEFjY2VzcyIsInNldEdyYW50QWNjZXNzIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImlzRmV0Y2hpbmdBY2Nlc3MiLCJzZXRJc0ZldGNoaW5nQWNjZXNzIiwiX3VzZXIkZGF0YSIsImZldGNoTnVtYmVyIiwiX3JlZjYiLCJfcmVzJGRhdGEiLCJ1c2VyQWNjZXNzIiwidXNlcklEIiwibW9kdWxlcyIsImhhc0FjY2VzcyIsInNvbWUiLCJtb2R1bGVOYW1lIiwiYWNjZXNzIiwicmVhZE0iLCJfdXNlciRkYXRhMyIsImZldGNoQWxsRGF0YSIsIl9yZWY3IiwiX3Jlc0l0ZW1PdXQkZGF0YSIsIl9yZXNTdXBwbGllcnMkZGF0YSIsIl95aWVsZCRQcm9taXNlJGFsbCIsIlByb21pc2UiLCJhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwicmVzSXRlbXMiLCJyZXNJbnZvaWNlcyIsInJlc0V4cGVuc2VzIiwicmVzUGF5cm9sbCIsInJlc1BheW1lbnRzIiwicmVzSXRlbVB1cmNoYXNlcyIsInJlc01haW50ZW5hbmNlIiwicmVzUHJvamVjdHMiLCJyZXNQb3MiLCJyZXNJdGVtT3V0IiwicmVzU3VwcGxpZXJzIiwiZmV0Y2hlZERhdGEiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwidG9nZ2xlRHJhd2VyIiwiaGFuZGxlVG9nZ2xlU2VjdGlvbiIsInNlY3Rpb24iLCJhY3RpdmVSZXBvcnRMYWJlbCIsIl9hbGxJdGVtcyRmaW5kIiwiYWxsSXRlbXMiLCJjbGFzc05hbWUiLCJwciIsIm1hcmdpblJpZ2h0Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJweCIsIm92ZXJmbG93IiwibXQiLCJzZWxlY3QiLCJTZWxlY3RQcm9wcyIsIm5hdGl2ZSIsInllYXIiLCJzbSIsIm1pbkhlaWdodCIsInRyaWdnZXIiLCJvbk1vbnRoIiwib25QYXlSb2xsIiwib25JdGVtUHVyQ2hhc2UiLCJvbkV4cGVuc2VzIiwiYWxsSW52b2ljZXMiLCJwb3NJbnZvaWNlIiwiY3VzdG9tZXJzIiwib25JdGVtIiwib25NYWludGVuYW5jZSIsIm9uUHJvamVjdE5hbWUiXSwic291cmNlUm9vdCI6IiJ9