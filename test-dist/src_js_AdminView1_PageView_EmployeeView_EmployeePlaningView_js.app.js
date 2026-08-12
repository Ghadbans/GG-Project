"use strict";
exports.id = "src_js_AdminView1_PageView_EmployeeView_EmployeePlaningView_js";
exports.ids = ["src_js_AdminView1_PageView_EmployeeView_EmployeePlaningView_js"];
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

/***/ "./node_modules/@mui/icons-material/KeyboardArrowUp.js"
/*!*************************************************************!*\
  !*** ./node_modules/@mui/icons-material/KeyboardArrowUp.js ***!
  \*************************************************************/
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
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), 'KeyboardArrowUp');

/***/ },

/***/ "./src/js/AdminView1/PageView/EmployeeView/EmployeePlaningView.js"
/*!************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EmployeeView/EmployeePlaningView.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/TableCell */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/TableCell */ "./node_modules/@mui/material/TableCell/tableCellClasses.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ "./node_modules/@mui/icons-material/KeyboardArrowUp.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
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



















var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var StyledTableCell = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"])(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"])(_ref3 => {
  var theme = _ref3.theme;
  return {
    ["&.".concat(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"].body)]: {
      fontSize: 12
    }
  };
});
var StyledTableRow = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4 => {
  var theme = _ref4.theme;
  return {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
      width: 5
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
var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"])(_ref7 => {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref8 => {
  var theme = _ref8.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
function EmployeePlaningView(_ref9) {
  var user = _ref9.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var EmployeeInfoD = grantAccess.filter(row => row.moduleName === "Employee" && row.access.deleteM === true);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return dayjs__WEBPACK_IMPORTED_MODULE_26___default()(date);
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    startDate = _useState4[0],
    setStartDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return dayjs__WEBPACK_IMPORTED_MODULE_26___default()(date);
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    endDate = _useState6[0],
    setEndDate = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    filteredData = _useState8[0],
    setFilteredData = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('StartDateInfo1'));
    var storedQuick2 = JSON.parse(localStorage.getItem('EndDateInfo1'));
    if (storedQuick) {
      setStartDate(new Date(storedQuick));
    }
    if (storedQuick2) {
      setEndDate(new Date(storedQuick2));
    }
  }, []);
  var handleStart = date => {
    setStartDate(date);
    localStorage.setItem('StartDateInfo1', JSON.stringify(date));
  };
  var handleEnd = date => {
    setEndDate(date);
    localStorage.setItem('EndDateInfo1', JSON.stringify(date));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var headers = [];
    var currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      headers.push(currentDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setFilteredData(headers);
  }, [startDate, endDate]);
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    planing = _useState0[0],
    setPlaning = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState10 = _slicedToArray(_useState1, 2),
    loadingData = _useState10[0],
    setLoadingData = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loading = _useState12[0],
    setLoading = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loadingOpenModal = _useState14[0],
    setLoadingOpenModal = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    ErrorOpenModal = _useState16[0],
    setErrorOpenModal = _useState16[1];
  var handleOpenOffline = () => {
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
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    reason = _useState18[0],
    setReason = _useState18[1];
  var fetchData = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      try {
        var _resEmp$data, _res$data2;
        var resEmp = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/employee"));
        var factoryIds = (_resEmp$data = resEmp.data) === null || _resEmp$data === void 0 || (_resEmp$data = _resEmp$data.data) === null || _resEmp$data === void 0 ? void 0 : _resEmp$data.filter(emp => {
          var _emp$department;
          return ((_emp$department = emp.department) === null || _emp$department === void 0 ? void 0 : _emp$department.toUpperCase()) === 'FACTORY';
        }).map(emp => emp._id);
        var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/planing"));
        var nonFactoryPlaning = (_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.filter(plan => !factoryIds.includes(plan.employeeID)).reverse();
        setPlaning(nonFactoryPlaning);
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    });
    return function fetchData() {
      return _ref1.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchData();
  }, []);
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    open = _useState20[0],
    setOpen = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    DeleteId = _useState22[0],
    setDeleteId = _useState22[1];
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleClose = () => {
    setOpen(false);
  };
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    openReasonDelete = _useState24[0],
    setOpenReasonDelete = _useState24[1];
  var handleOpenReasonDelete = e => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    modalDeleteOpenLoading = _useState26[0],
    setModalDeleteOpenLoading = _useState26[1];
  {/** Loading Delete View Start */}
  var handleDeleteOpenLoading = () => {
    setModalDeleteOpenLoading(true);
    setLoading(true);
    handleClose();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleDeleteCloseLoading = () => {
    window.location.reload();
  };
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    reference = _useState28[0],
    setReference = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    relatedNumber = _useState30[0],
    setRelatedNumber = _useState30[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchId = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        if (DeleteId !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/get-planing/").concat(DeleteId));
            setReference(res.data.data.employeeName);
            setRelatedNumber(dayjs__WEBPACK_IMPORTED_MODULE_26___default()(res.data.data.planingDate).format('DD/MM/YYYY'));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchId() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchId();
  }, [DeleteId]);
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + ' Planing For ' + reference + ' Created on ' + relatedNumber,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref11.apply(this, arguments);
    };
  }();
  var handleDeleteUpdate = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/delete-planing/").concat(DeleteId));
        if (res) {
          handleDeleteOpenLoading();
          handleCreateNotification();
        }
      } catch (error) {
        console.log('An error as occur in delete');
      }
    });
    return function handleDeleteUpdate(_x) {
      return _ref12.apply(this, arguments);
    };
  }();
  {/** getting all info start */}
  var Row = props => {
    var row = props.row;
    var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState32 = _slicedToArray(_useState31, 2),
      open = _useState32[0],
      setOpen = _useState32[1];
    var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState34 = _slicedToArray(_useState33, 2),
      search2 = _useState34[0],
      setSearch2 = _useState34[1];
    var handleSearch2 = e => {
      var value = e.target.value;
      setSearch2(value);
    };
    var newArray = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => search2 !== '' ? planing.filter(row => row.employeeName.toLowerCase().includes(search2.toLowerCase()) || row.projectName && row.projectName.name.toLowerCase().includes(search2.toLowerCase())) : planing, [planing, search2]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
      sx: {
        '& > *': {
          borderBottom: 'unset'
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], {
      sx: {
        padding: '1px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "aria-label": "expand row",
      size: "small",
      onClick: () => setOpen(!open)
    }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_31__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_32__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], {
      sx: {
        padding: '1px'
      },
      component: "th",
      scope: "row"
    }, dayjs__WEBPACK_IMPORTED_MODULE_26___default()(row).format('DD-MMMM-YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], {
      style: {
        paddingBottom: 0,
        paddingTop: 0
      },
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      in: open,
      timeout: "auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      sx: {
        margin: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: "Search",
      id: "search2",
      value: search2,
      onChange: handleSearch2
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        color: 'gray'
      },
      size: "small",
      "aria-label": "purchases"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "ProjectName"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, newArray.filter(row1 => dayjs__WEBPACK_IMPORTED_MODULE_26___default()(row1.planingDate).format('DD/MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_26___default()(row).format('DD/MM/YYYY')).map((row1, i) => {
      var _row1$projectName;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        key: row1._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, " ", i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, " ", row1.employeeName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, " ", (_row1$projectName = row1.projectName) === null || _row1$projectName === void 0 ? void 0 : _row1$projectName.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, " ", row1.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, " ", row1.planingTask), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, " ", row1.planingDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          border: '1px solid gray'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
        title: "Edit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.NavLink, {
        to: "/EmployeePlaningFormUpdate/".concat(row1._id),
        className: "LinkName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_33__["default"], {
        style: {
          color: 'gray'
        }
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
        title: "Delete"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onClick: () => handleOpen(row1._id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_34__["default"], {
        style: {
          cursor: 'pointer',
          color: 'red'
        }
      }))))));
    }))))))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_18__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_20__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_23__.DemoContainer, {
    components: ['DatePicker', 'DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_19__.DatePicker, {
    required: true,
    name: "startDate",
    label: "From Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_26___default()(startDate),
    onChange: date => handleStart(date),
    format: "DD/MM/YYYY"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_18__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_20__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_23__.DemoContainer, {
    components: ['DatePicker', 'DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_19__.DatePicker, {
    required: true,
    name: "endDate",
    label: "To Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_26___default()(endDate),
    onChange: date => handleEnd(date),
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      maxHeight: '500px'
    },
    component: _mui_material__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], null, "Date"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, filteredData.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Row, {
    key: row,
    row: row
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Do you want to Delete ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer2",
    onClick: handleOpenReasonDelete
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleClose
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: handleCloseReasonDelete,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_29__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete the planing of: ", reference, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleDeleteUpdate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    required: true,
    id: "reason1",
    name: "reason1",
    multiline: true,
    rows: 4,
    value: reason,
    placeholder: "Reason",
    onChange: e => setReason(e.target.value),
    label: "Reason",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    open: modalDeleteOpenLoading,
    onClose: handleDeleteCloseLoading,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_13__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_30__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_28__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data successfully deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleDeleteCloseLoading,
    className: "btnCustomer"
  }, "Close")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeePlaningView);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRW1wbG95ZWVWaWV3X0VtcGxveWVlUGxhbmluZ1ZpZXdfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLHdCOzs7Ozs7Ozs7O0FDWlk7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLHNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsQ0FBNEQ7QUFDb0k7QUFDMUg7QUFDQztBQUNQO0FBQ0E7QUFDRztBQUN6QztBQUN3QjtBQUN4QjtBQUNpQjtBQUNtQjtBQUNBO0FBQ1I7QUFDVTtBQUVqQjtBQUNtQjtBQUNJO0FBQ3RCO0FBQ0k7QUFFcEQsSUFBTTZDLFdBQVcsR0FBR2pDLDBEQUFNLENBQUNrQyxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDL0NsRCwwREFBQSxDQUFDMEIsOERBQU8sRUFBQTBCLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUs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QWU7SUFBQ3lDLEtBQUssRUFBRTtNQUFFZCxLQUFLLEVBQUUsT0FBTztNQUFFMlAsTUFBTSxFQUFFLE1BQU07TUFBRTlPLEtBQUssRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUFJLENBQUMsZUFDcEZ6RSwwREFBQSxhQUFJLDRCQUE4QixDQUFDLGVBQ25DQSwwREFBQTtJQUFLMEUsS0FBSyxFQUFFO01BQUV1TSxPQUFPLEVBQUUsTUFBTTtNQUFFRSxHQUFHLEVBQUUsTUFBTTtNQUFFb0IsY0FBYyxFQUFFO0lBQVM7RUFBRSxnQkFDckV2UywwREFBQTtJQUFRd1EsT0FBTyxFQUFFaEQsd0JBQXlCO0lBQUN6SyxTQUFTLEVBQUM7RUFBYSxHQUFDLE9BRTNELENBQ0wsQ0FDRixDQUVOLENBQ0YsQ0FDQSxDQUNKLENBQUM7QUFFVjtBQUVBLGlFQUFlNEMsbUJBQW1CLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd24uanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dVcC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvRW1wbG95ZWVWaWV3L0VtcGxveWVlUGxhbmluZ1ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cInVzZSBjbGllbnRcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTcuNDEgOC41OSAxMiAxMy4xN2w0LjU5LTQuNThMMTggMTBsLTYgNi02LTZ6XCJcbn0pLCAnS2V5Ym9hcmRBcnJvd0Rvd24nKTsiLCJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNNy40MSAxNS40MSAxMiAxMC44M2w0LjU5IDQuNThMMTggMTRsLTYtNi02IDZ6XCJcbn0pLCAnS2V5Ym9hcmRBcnJvd1VwJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgSWNvbkJ1dHRvbiwgTW9kYWwsIEJhY2tkcm9wLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUhlYWQsIFRhYmxlUm93LCBzdHlsZWQsIFR5cG9ncmFwaHksIEdyaWQsIFBhcGVyLCBDYXJkLCBDYXJkQ29udGVudCwgVGFibGVDb250YWluZXIsIFRleHRGaWVsZCwgQ29sbGFwc2UgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVGFibGVDZWxsLCB7IHRhYmxlQ2VsbENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycyc7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IHsgQWRkLCBDbG9zZSwgTWFpbE91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgSGVpZ2h0LCBQYWRkaW5nIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBMb2NhbFByaW50c2hvcCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvY2FsUHJpbnRzaG9wJztcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBLZXlib2FyZEFycm93VXAgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93VXAnO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93bic7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcblxyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTdHlsZWRUYWJsZUNlbGwgPSBzdHlsZWQoVGFibGVDZWxsKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJi4ke3RhYmxlQ2VsbENsYXNzZXMuYm9keX1gXToge1xyXG4gICAgZm9udFNpemU6IDEyLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFN0eWxlZFRhYmxlUm93ID0gc3R5bGVkKFRhYmxlUm93KSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gICcmOm50aC1vZi10eXBlKG9kZCknOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmhvdmVyLFxyXG4gIH0sXHJcbiAgLy8gaGlkZSBsYXN0IGJvcmRlclxyXG4gICcmOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aCc6IHtcclxuICAgIGJvcmRlcjogMCxcclxuICAgIHdpZHRoOiA1XHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IERlbGV0ZVRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBFZGl0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBFbXBsb3llZVBsYW5pbmdWaWV3KHsgdXNlciB9KSB7XHJcbiAgY29uc3QgW2dyYW50QWNjZXNzLCBzZXRHcmFudEFjY2Vzc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dyYW50QWNjZXNzYCk7XHJcbiAgICAgICAgcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cudXNlcklEID09PSB1c2VyLmRhdGEuaWQpXHJcbiAgICAgICAgICAubWFwKChyb3cpID0+IHNldEdyYW50QWNjZXNzKHJvdy5tb2R1bGVzKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hOdW1iZXIoKVxyXG4gIH0sIFt1c2VyXSlcclxuXHJcbiAgY29uc3QgRW1wbG95ZWVJbmZvRCA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJFbXBsb3llZVwiICYmIHJvdy5hY2Nlc3MuZGVsZXRlTSA9PT0gdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgcmV0dXJuIGRheWpzKGRhdGUpXHJcbiAgfSk7XHJcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXlqcyhkYXRlKVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbZmlsdGVyZWREYXRhLCBzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRRdWljayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N0YXJ0RGF0ZUluZm8xJykpXHJcbiAgICBjb25zdCBzdG9yZWRRdWljazIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdFbmREYXRlSW5mbzEnKSlcclxuICAgIGlmIChzdG9yZWRRdWljaykge1xyXG4gICAgICBzZXRTdGFydERhdGUobmV3IERhdGUoc3RvcmVkUXVpY2spKVxyXG4gICAgfVxyXG4gICAgaWYgKHN0b3JlZFF1aWNrMikge1xyXG4gICAgICBzZXRFbmREYXRlKG5ldyBEYXRlKHN0b3JlZFF1aWNrMikpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgY29uc3QgaGFuZGxlU3RhcnQgPSAoZGF0ZSkgPT4ge1xyXG4gICAgc2V0U3RhcnREYXRlKGRhdGUpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnU3RhcnREYXRlSW5mbzEnLCBKU09OLnN0cmluZ2lmeShkYXRlKSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRW5kID0gKGRhdGUpID0+IHtcclxuICAgIHNldEVuZERhdGUoZGF0ZSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdFbmREYXRlSW5mbzEnLCBKU09OLnN0cmluZ2lmeShkYXRlKSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBbXTtcclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoc3RhcnREYXRlKVxyXG4gICAgd2hpbGUgKGN1cnJlbnREYXRlIDw9IGVuZERhdGUpIHtcclxuICAgICAgaGVhZGVycy5wdXNoKGN1cnJlbnREYXRlLnRvRGF0ZVN0cmluZygpKTtcclxuICAgICAgY3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuICAgIH1cclxuICAgIHNldEZpbHRlcmVkRGF0YShoZWFkZXJzKVxyXG4gIH0sIFtzdGFydERhdGUsIGVuZERhdGVdKVxyXG4gIGNvbnN0IFtwbGFuaW5nLCBzZXRQbGFuaW5nXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk9mZmxpbmUgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc0VtcCA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVlYClcclxuICAgICAgY29uc3QgZmFjdG9yeUlkcyA9IHJlc0VtcC5kYXRhPy5kYXRhPy5maWx0ZXIoZW1wID0+IGVtcC5kZXBhcnRtZW50Py50b1VwcGVyQ2FzZSgpID09PSAnRkFDVE9SWScpLm1hcChlbXAgPT4gZW1wLl9pZClcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3BsYW5pbmdgKVxyXG5cclxuICAgICAgY29uc3Qgbm9uRmFjdG9yeVBsYW5pbmcgPSByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKHBsYW4gPT4gIWZhY3RvcnlJZHMuaW5jbHVkZXMocGxhbi5lbXBsb3llZUlEKSkucmV2ZXJzZSgpXHJcblxyXG4gICAgICBzZXRQbGFuaW5nKG5vbkZhY3RvcnlQbGFuaW5nKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbXSlcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0RlbGV0ZUlkLCBzZXREZWxldGVJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICBzZXREZWxldGVJZChpZClcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbb3BlblJlYXNvbkRlbGV0ZSwgc2V0T3BlblJlYXNvbkRlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5SZWFzb25EZWxldGUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuUmVhc29uRGVsZXRlKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuUmVhc29uRGVsZXRlKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IFttb2RhbERlbGV0ZU9wZW5Mb2FkaW5nLCBzZXRNb2RhbERlbGV0ZU9wZW5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgey8qKiBMb2FkaW5nIERlbGV0ZSBWaWV3IFN0YXJ0ICovIH1cclxuICBjb25zdCBoYW5kbGVEZWxldGVPcGVuTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsRGVsZXRlT3BlbkxvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgaGFuZGxlQ2xvc2UoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsb3NlTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFtyZWZlcmVuY2UsIHNldFJlZmVyZW5jZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtyZWxhdGVkTnVtYmVyLCBzZXRSZWxhdGVkTnVtYmVyXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoSWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChEZWxldGVJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcGxhbmluZy8ke0RlbGV0ZUlkfWApXHJcbiAgICAgICAgICBzZXRSZWZlcmVuY2UocmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWUpO1xyXG4gICAgICAgICAgc2V0UmVsYXRlZE51bWJlcihkYXlqcyhyZXMuZGF0YS5kYXRhLnBsYW5pbmdEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hJZCgpXHJcbiAgfSwgW0RlbGV0ZUlkXSlcclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86ICcnLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgRGVsZXRlZCAnICsgJyBQbGFuaW5nIEZvciAnICsgcmVmZXJlbmNlICsgJyBDcmVhdGVkIG9uICcgKyByZWxhdGVkTnVtYmVyLFxyXG4gICAgICByZWFzb24sXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEZWxldGVVcGRhdGUgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5kZWxldGUoYCR7RU5EUE9JTlRfVVJMfS9kZWxldGUtcGxhbmluZy8ke0RlbGV0ZUlkfWApO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmcoKTtcclxuICAgICAgICBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBbiBlcnJvciBhcyBvY2N1ciBpbiBkZWxldGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHsvKiogZ2V0dGluZyBhbGwgaW5mbyBzdGFydCAqLyB9XHJcblxyXG5cclxuICBjb25zdCBSb3cgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgcm93IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWFyY2gyLCBzZXRTZWFyY2gyXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaDIgPSAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgIHNldFNlYXJjaDIodmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdBcnJheSA9IHVzZU1lbW8oKCkgPT4gc2VhcmNoMiAhPT0gJycgPyBwbGFuaW5nLmZpbHRlcigocm93KSA9PlxyXG4gICAgICByb3cuZW1wbG95ZWVOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoMi50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICByb3cucHJvamVjdE5hbWUgJiYgcm93LnByb2plY3ROYW1lLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpXHJcbiAgICApIDogcGxhbmluZywgW3BsYW5pbmcsIHNlYXJjaDJdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFRhYmxlUm93IHN4PXt7ICcmID4gKic6IHsgYm9yZGVyQm90dG9tOiAndW5zZXQnIH0gfX0+XHJcbiAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IHBhZGRpbmc6ICcxcHgnIH19PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJleHBhbmQgcm93XCJcclxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge29wZW4gPyA8S2V5Ym9hcmRBcnJvd1VwIC8+IDogPEtleWJvYXJkQXJyb3dEb3duIC8+fVxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgcGFkZGluZzogJzFweCcgfX0gY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7ZGF5anMocm93KS5mb3JtYXQoJ0RELU1NTU0tWVlZWScpfVxyXG4gICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDAsIHBhZGRpbmdUb3A6IDAgfX0gY29sU3Bhbj17Nn0+XHJcbiAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0gdGltZW91dD1cImF1dG9cIj5cclxuICAgICAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpbjogMSB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2gyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2gyfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJywgY29sb3I6ICdncmF5JyB9fSBzaXplPVwic21hbGxcIiBhcmlhLWxhYmVsPVwicHVyY2hhc2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5FbXBsb3llZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlByb2plY3ROYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+VGFzazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkuZmlsdGVyKChyb3cxKSA9PiBkYXlqcyhyb3cxLnBsYW5pbmdEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSA9PT0gZGF5anMocm93KS5mb3JtYXQoJ0REL01NL1lZWVknKSkubWFwKChyb3cxLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3JvdzEuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PiB7aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PiB7cm93MS5lbXBsb3llZU5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PiB7cm93MS5wcm9qZWN0TmFtZT8ubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+IHtyb3cxLnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+IHtyb3cxLnBsYW5pbmdUYXNrfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT4ge3JvdzEucGxhbmluZ0Rlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdFRvb2x0aXAgdGl0bGU9XCJFZGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0VtcGxveWVlUGxhbmluZ0Zvcm1VcGRhdGUvJHtyb3cxLl9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRWRpdFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlVG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW4ocm93MS5faWQpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVsZXRlVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnMTBweCcgfX0+XHJcbiAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJywgJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPSdzdGFydERhdGUnXHJcbiAgICAgICAgICAgICAgbGFiZWw9J0Zyb20gRGF0ZSdcclxuICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoc3RhcnREYXRlKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IGhhbmRsZVN0YXJ0KGRhdGUpfVxyXG4gICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlcicsICdEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbmFtZT0nZW5kRGF0ZSdcclxuICAgICAgICAgICAgICBsYWJlbD0nVG8gRGF0ZSdcclxuICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoZW5kRGF0ZSl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBoYW5kbGVFbmQoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPFRhYmxlQ29udGFpbmVyIHN4PXt7IG1heEhlaWdodDogJzUwMHB4JyB9fSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCAvPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGF0ZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICB7ZmlsdGVyZWREYXRhLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJvdyBrZXk9e3Jvd30gcm93PXtyb3d9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgb25DbGljaz17aGFuZGxlT3BlblJlYXNvbkRlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VSZWFzb25EZWxldGV9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIFdoeSBkbyB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHBsYW5pbmcgb2Y6IHtyZWZlcmVuY2V9P1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZURlbGV0ZVVwZGF0ZX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgaWQ9J3JlYXNvbjEnXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3JlYXNvbjEnXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlYXNvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdSZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bW9kYWxEZWxldGVPcGVuTG9hZGluZ31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVEZWxldGVDbG9zZUxvYWRpbmd9XHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+IERhdGEgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsb3NlTG9hZGluZ30gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95ZWVQbGFuaW5nVmlld1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJCb3giLCJJY29uQnV0dG9uIiwiTW9kYWwiLCJCYWNrZHJvcCIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJzdHlsZWQiLCJUeXBvZ3JhcGh5IiwiR3JpZCIsIlBhcGVyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiVGFibGVDb250YWluZXIiLCJUZXh0RmllbGQiLCJDb2xsYXBzZSIsIlRhYmxlQ2VsbCIsInRhYmxlQ2VsbENsYXNzZXMiLCJEYXRlUGlja2VyIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJBZGFwdGVyRGF5anMiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJEZW1vQ29udGFpbmVyIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJkYXlqcyIsIk5hdkxpbmsiLCJDaGVja0NpcmNsZUljb24iLCJBZGQiLCJDbG9zZSIsIk1haWxPdXRsaW5lIiwiSGVpZ2h0IiwiUGFkZGluZyIsIkxvY2FsUHJpbnRzaG9wIiwiTG9hZGVyIiwiS2V5Ym9hcmRBcnJvd1VwIiwiS2V5Ym9hcmRBcnJvd0Rvd24iLCJFZGl0SWNvbiIsIkRlbGV0ZUljb24iLCJWaWV3VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiU3R5bGVkVGFibGVDZWxsIiwiX3JlZjMiLCJib2R5IiwiU3R5bGVkVGFibGVSb3ciLCJfcmVmNCIsInBhbGV0dGUiLCJhY3Rpb24iLCJob3ZlciIsImJvcmRlciIsIndpZHRoIiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiRGVsZXRlVG9vbHRpcCIsIl9yZWY1IiwiX2V4Y2x1ZGVkMiIsIl9yZWY2IiwiRWRpdFRvb2x0aXAiLCJfcmVmNyIsIl9leGNsdWRlZDMiLCJfcmVmOCIsIkVtcGxveWVlUGxhbmluZ1ZpZXciLCJfcmVmOSIsInVzZXIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJncmFudEFjY2VzcyIsInNldEdyYW50QWNjZXNzIiwiZmV0Y2hOdW1iZXIiLCJfcmVmMCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlcyRkYXRhIiwicmVzIiwiZ2V0IiwiZGF0YSIsImZpbHRlciIsInJvdyIsInVzZXJJRCIsImlkIiwibWFwIiwibW9kdWxlcyIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiRW1wbG95ZWVJbmZvRCIsIm1vZHVsZU5hbWUiLCJhY2Nlc3MiLCJkZWxldGVNIiwiX3VzZVN0YXRlMyIsImRhdGUiLCJEYXRlIiwiX3VzZVN0YXRlNCIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImZpbHRlcmVkRGF0YSIsInNldEZpbHRlcmVkRGF0YSIsInN0b3JlZFF1aWNrIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0b3JlZFF1aWNrMiIsImhhbmRsZVN0YXJ0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZUVuZCIsImhlYWRlcnMiLCJjdXJyZW50RGF0ZSIsInB1c2giLCJ0b0RhdGVTdHJpbmciLCJzZXREYXRlIiwiZ2V0RGF0ZSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwicGxhbmluZyIsInNldFBsYW5pbmciLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJsb2FkaW5nRGF0YSIsInNldExvYWRpbmdEYXRhIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuT2ZmbGluZSIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJmZXRjaERhdGEiLCJfcmVmMSIsIl9yZXNFbXAkZGF0YSIsIl9yZXMkZGF0YTIiLCJyZXNFbXAiLCJmYWN0b3J5SWRzIiwiZW1wIiwiX2VtcCRkZXBhcnRtZW50IiwiZGVwYXJ0bWVudCIsInRvVXBwZXJDYXNlIiwiX2lkIiwibm9uRmFjdG9yeVBsYW5pbmciLCJwbGFuIiwiaW5jbHVkZXMiLCJlbXBsb3llZUlEIiwicmV2ZXJzZSIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJvcGVuIiwic2V0T3BlbiIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJEZWxldGVJZCIsInNldERlbGV0ZUlkIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsIm9wZW5SZWFzb25EZWxldGUiLCJzZXRPcGVuUmVhc29uRGVsZXRlIiwiaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlUmVhc29uRGVsZXRlIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsIm1vZGFsRGVsZXRlT3BlbkxvYWRpbmciLCJzZXRNb2RhbERlbGV0ZU9wZW5Mb2FkaW5nIiwiaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmciLCJoYW5kbGVEZWxldGVDbG9zZUxvYWRpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJyZWZlcmVuY2UiLCJzZXRSZWZlcmVuY2UiLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwicmVsYXRlZE51bWJlciIsInNldFJlbGF0ZWROdW1iZXIiLCJmZXRjaElkIiwiX3JlZjEwIiwiZW1wbG95ZWVOYW1lIiwicGxhbmluZ0RhdGUiLCJmb3JtYXQiLCJoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24iLCJfcmVmMTEiLCJpZEluZm8iLCJwZXJzb24iLCJ1c2VyTmFtZSIsImRhdGVOb3RpZmljYXRpb24iLCJwb3N0IiwibG9nIiwiaGFuZGxlRGVsZXRlVXBkYXRlIiwiX3JlZjEyIiwiZGVsZXRlIiwiX3giLCJSb3ciLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsInNlYXJjaDIiLCJzZXRTZWFyY2gyIiwiaGFuZGxlU2VhcmNoMiIsInZhbHVlIiwidGFyZ2V0IiwibmV3QXJyYXkiLCJ0b0xvd2VyQ2FzZSIsInByb2plY3ROYW1lIiwibmFtZSIsIkZyYWdtZW50Iiwic3giLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nIiwic2l6ZSIsIm9uQ2xpY2siLCJjb21wb25lbnQiLCJzY29wZSIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwiY29sU3BhbiIsImluIiwidGltZW91dCIsIm1hcmdpbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwibGFiZWwiLCJvbkNoYW5nZSIsImJvcmRlckNvbGxhcHNlIiwicm93MSIsImkiLCJfcm93MSRwcm9qZWN0TmFtZSIsImtleSIsInN0YXR1cyIsInBsYW5pbmdUYXNrIiwicGxhbmluZ0Rlc2NyaXB0aW9uIiwidGl0bGUiLCJ0byIsImN1cnNvciIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsInJlcXVpcmVkIiwibWF4SGVpZ2h0Iiwib25DbG9zZSIsIl9vYmplY3RTcHJlYWQiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsInBsYWNlbWVudCIsImZsb2F0IiwidmFyaWFudCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsIm11bHRpbGluZSIsInJvd3MiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9