"use strict";
exports.id = "src_js_AdminView1_PageView_EmployeeView_EmployeeAttendanceSheet_js";
exports.ids = ["src_js_AdminView1_PageView_EmployeeView_EmployeeAttendanceSheet_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/EmployeeView/EmployeeAttendanceSheet.js"
/*!****************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EmployeeView/EmployeeAttendanceSheet.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
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
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
var _excluded = ["className"];
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
var filteredData = (startDate, endDate) => {
  var headers = [];
  var currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    headers.push(currentDate.toDateString());
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return headers;
};
function EmployeeAttendanceSheet() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return dayjs__WEBPACK_IMPORTED_MODULE_26___default()(date);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    startDate = _useState2[0],
    setStartDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return dayjs__WEBPACK_IMPORTED_MODULE_26___default()(date);
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    endDate = _useState4[0],
    setEndDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    Attendance = _useState6[0],
    setAttendance = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    employee = _useState8[0],
    setEmployee = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('StartDateInfo'));
    var storedQuick2 = JSON.parse(localStorage.getItem('EndDateInfo'));
    if (storedQuick) {
      setStartDate(new Date(storedQuick));
    }
    if (storedQuick2) {
      setEndDate(new Date(storedQuick2));
    }
  }, []);
  var handleStart = date => {
    setStartDate(date);
    localStorage.setItem('StartDateInfo', JSON.stringify(date));
  };
  var handleEnd = date => {
    setEndDate(date);
    localStorage.setItem('EndDateInfo', JSON.stringify(date));
  };
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState0 = _slicedToArray(_useState9, 2),
    loadingData = _useState0[0],
    setLoadingData = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loadingOpenModal = _useState12[0],
    setLoadingOpenModal = _useState12[1];
  var handleOpenOffline = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleCloseModal = () => {
    window.location.reload();
  };
  var fetchData = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(function* () {
      try {
        var _res$data;
        var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/employeeattendance"));
        setAttendance((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.filter(row => row.observation !== "Stopped"));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
    return function fetchData() {
      return _ref5.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchEmployeeName = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* () {
        try {
          var _resEmployee$data;
          var resEmployee = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/employee"));
          setEmployee((_resEmployee$data = resEmployee.data) === null || _resEmployee$data === void 0 || (_resEmployee$data = _resEmployee$data.data) === null || _resEmployee$data === void 0 ? void 0 : _resEmployee$data.filter(row => row.status === 'Employed'));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchEmployeeName() {
        return _ref6.apply(this, arguments);
      };
    }();
    fetchEmployeeName();
  }, []);
  {/*const totalDayWorked = 
   employee.map((row)=>{
   const dateOfTheMonth = filteredData.map(dayM=>{
   const relatedDay = Attendance.find(item => dayjs( new Date(item.timeIn)).format('DD/MM/YYYY') === dayjs(dayM).format('DD/MM/YYYY') && item.id === row._id)
   if (relatedDay) {
   return relatedDay
   }
   })
   return ( {
   id: row._id,
   dayW: dateOfTheMonth.filter(item=> item !== undefined && (item.observation === 'P' || item.observation === 'H') ).reduce((sum,item)=> item !== undefined?sum + item.daysWN:0,0)
   })
   })*/}
  var dates = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (startDate && endDate) {
      return filteredData(startDate, endDate);
    }
    return [];
  }, [startDate, endDate]);
  var attendanceStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var statusMap = {};
    Attendance.forEach(_ref7 => {
      var id = _ref7.id,
        timeIn = _ref7.timeIn,
        observation = _ref7.observation,
        daysWN = _ref7.daysWN;
      if (!statusMap[id]) statusMap[id] = {};
      statusMap[id][dayjs__WEBPACK_IMPORTED_MODULE_26___default()(timeIn).format('DD/MM/YYYY')] = observation;
    });
    return statusMap;
  }, [Attendance]);
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    openView = _useState14[0],
    setOpenView = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    idView = _useState16[0],
    setIdView = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    employeeAttendanceInfo = _useState18[0],
    setEmployeeAttendanceInfo = _useState18[1];
  var handleShow = id => {
    setOpenView(true);
    setIdView(id);
  };
  var handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        if (idView !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/get-employeeattendance/").concat(idView));
            setEmployeeAttendanceInfo(res.data.data);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchData2() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [idView]);
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    search2 = _useState20[0],
    setSearch2 = _useState20[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => search2 !== '' ? employee.filter(row => row.employeeName.toLowerCase().includes(search2.toLowerCase())) : employee, [employee, search2]);
  var totalCounts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var counts = {};
    newArray.forEach(name => {
      counts[name._id] = {
        P: 0,
        A: 0,
        S: 0,
        H: 0
      };
      dates.forEach(date => {
        var _attendanceStatus$nam;
        var record = (_attendanceStatus$nam = attendanceStatus[name._id]) === null || _attendanceStatus$nam === void 0 ? void 0 : _attendanceStatus$nam[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(date).format('DD/MM/YYYY')];
        if (record) {
          counts[[name._id]][record]++;
        }
      });
    });
    return counts;
  }, [newArray, dates, attendanceStatus]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Search",
    id: "search2",
    value: search2,
    onChange: handleSearch2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_18__.LocalizationProvider, {
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      maxHeight: '500px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "collapsible table",
    stickyHeader: true,
    sx: {
      backgroundColor: 'white',
      marginBottom: '0px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: '100px'
    }
  }, "Employee"), dates === null || dates === void 0 ? void 0 : dates.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], {
    key: row
  }, dayjs__WEBPACK_IMPORTED_MODULE_26___default()(row).format('DD/MM'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: '10px'
    }
  }, "P"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: '10px'
    }
  }, "A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: '10px'
    }
  }, "H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: '10px'
    }
  }, "S"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, newArray.map((row, i) => {
    var _totalCounts$row$_id, _totalCounts$row$_id2, _totalCounts$row$_id3, _totalCounts$row$_id4;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableRow, {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], null, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], null, row.employeeName), dates.map(dateI => {
      var _attendanceStatus$row, _attendanceStatus$row2, _attendanceStatus$row3, _attendanceStatus$row4, _attendanceStatus$row5, _attendanceStatus$row6, _attendanceStatus$row7;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], {
        key: dateI
      }, (_attendanceStatus$row = attendanceStatus[row._id]) !== null && _attendanceStatus$row !== void 0 && _attendanceStatus$row[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(dateI).format('DD/MM/YYYY')] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        color: ((_attendanceStatus$row2 = attendanceStatus[row._id]) === null || _attendanceStatus$row2 === void 0 ? void 0 : _attendanceStatus$row2[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(dateI).format('DD/MM/YYYY')]) === "#" ? "gray" : ((_attendanceStatus$row3 = attendanceStatus[row._id]) === null || _attendanceStatus$row3 === void 0 ? void 0 : _attendanceStatus$row3[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(dateI).format('DD/MM/YYYY')]) === "P" ? "blue" : ((_attendanceStatus$row4 = attendanceStatus[row._id]) === null || _attendanceStatus$row4 === void 0 ? void 0 : _attendanceStatus$row4[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(dateI).format('DD/MM/YYYY')]) === "A" ? "red" : ((_attendanceStatus$row5 = attendanceStatus[row._id]) === null || _attendanceStatus$row5 === void 0 ? void 0 : _attendanceStatus$row5[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(dateI).format('DD/MM/YYYY')]) === "H" ? "#339ba5" : ((_attendanceStatus$row6 = attendanceStatus[row._id]) === null || _attendanceStatus$row6 === void 0 ? void 0 : _attendanceStatus$row6[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(dateI).format('DD/MM/YYYY')]) === "S" ? "#6a1b9a" : "black"
      }, (_attendanceStatus$row7 = attendanceStatus[row._id]) === null || _attendanceStatus$row7 === void 0 ? void 0 : _attendanceStatus$row7[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(dateI).format('DD/MM/YYYY')]) : 'N/A');
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], null, ((_totalCounts$row$_id = totalCounts[row._id]) === null || _totalCounts$row$_id === void 0 ? void 0 : _totalCounts$row$_id.P) || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], null, ((_totalCounts$row$_id2 = totalCounts[row._id]) === null || _totalCounts$row$_id2 === void 0 ? void 0 : _totalCounts$row$_id2.A) || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], null, ((_totalCounts$row$_id3 = totalCounts[row._id]) === null || _totalCounts$row$_id3 === void 0 ? void 0 : _totalCounts$row$_id3.H) || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__["default"], null, ((_totalCounts$row$_id4 = totalCounts[row._id]) === null || _totalCounts$row$_id4 === void 0 ? void 0 : _totalCounts$row$_id4.S) || 0));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    open: openView,
    onClose: handleCloseView,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 850
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Attendance Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleCloseView,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_28__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), employeeAttendanceInfo !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    sx: {
      marginBottom: '10px',
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      height: '275px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, employeeAttendanceInfo.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Time In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, dayjs__WEBPACK_IMPORTED_MODULE_26___default()(employeeAttendanceInfo.timeIn).format('DD/MM/YYYY HH:mm'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      position: 'relative',
      marginLeft: '16%',
      padding: '20px',
      border: '1px solid gray',
      borderRadius: '20px',
      textAlign: 'center',
      width: '200px',
      backgroundColor: '#30368a',
      color: 'white'
    }
  }, Math.floor((new Date(employeeAttendanceInfo.timeOut) - new Date(employeeAttendanceInfo.timeIn)) / (1000 * 60 * 60)), " hrs ", Math.floor((new Date(employeeAttendanceInfo.timeOut) - new Date(employeeAttendanceInfo.timeIn)) % (1000 * 60 * 60) / (1000 * 60)), " min")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Time Out")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, dayjs__WEBPACK_IMPORTED_MODULE_26___default()(employeeAttendanceInfo.timeOut).format('DD/MM/YYYY HH:mm'))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      height: '275px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Observation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      cursor: 'pointer'
    },
    color: employeeAttendanceInfo.observation === "PH" ? "gray" : employeeAttendanceInfo.observation === "H" ? "blue" : employeeAttendanceInfo.observation === "A" ? "red" : employeeAttendanceInfo.observation === "S" ? "#801313" : employeeAttendanceInfo.observation === "P" ? "#4caf50" : employeeAttendanceInfo.observation === "#" ? "gray" : "black"
  }, employeeAttendanceInfo ? employeeAttendanceInfo.observation : 'NA')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Note: ", employeeAttendanceInfo.note))))))) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    open: loadingOpenModal,
    onClose: handleCloseModal,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_13__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_29__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
    onClick: handleCloseModal,
    className: "btnCustomer"
  }, "Close"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeAttendanceSheet);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRW1wbG95ZWVWaWV3X0VtcGxveWVlQXR0ZW5kYW5jZVNoZWV0X2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBNEQ7QUFDMEg7QUFDaEg7QUFDQztBQUNQO0FBQ0E7QUFDRztBQUN6QztBQUN3QjtBQUN4QjtBQUNvQztBQUNBO0FBQ1I7QUFDVTtBQUVqQjtBQUUvQyxJQUFNdUMsV0FBVyxHQUFHM0IsMERBQU0sQ0FBQzRCLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUMvQzVDLDBEQUFBLENBQUN5Qiw4REFBTyxFQUFBcUIsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPekIsOERBQWMsQ0FBQzBCLE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLFNBQVM7TUFDMUJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzNCQyxRQUFRLEVBQUU7SUFDWjtFQUNGLENBQUM7QUFBQSxDQUFDLENBQUM7QUFFSCxJQUFNQyxlQUFlLEdBQUc5QywwREFBTSxDQUFDUSxnRUFBUyxDQUFDLENBQUN1QyxLQUFBO0VBQUEsSUFBR1QsS0FBSyxHQUFBUyxLQUFBLENBQUxULEtBQUs7RUFBQSxPQUFRO0lBQ3hELE1BQUFDLE1BQUEsQ0FBTTlCLGdFQUFnQixDQUFDdUMs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Q0FBQ3NDLDBEQUFNLE1BQUUsQ0FBQyxnQkFFcEJ0QywwREFBQTtJQUFLb0UsS0FBSyxFQUFFO01BQUVrSyxjQUFjLEVBQUUsUUFBUTtNQUFFVyxTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUM1RGpQLDBEQUFBLHlCQUFHQSwwREFBQSxDQUFDK0Isd0VBQWU7SUFBQ3FDLEtBQUssRUFBRTtNQUFFZCxLQUFLLEVBQUUsT0FBTztNQUFFMEwsTUFBTSxFQUFFLE1BQU07TUFBRTdLLEtBQUssRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUFJLENBQUMsZUFDcEZuRSwwREFBQSxhQUFJLDBCQUE0QixDQUFDLGVBQ2pDQSwwREFBQTtJQUFLb0UsS0FBSyxFQUFFO01BQUVvSSxPQUFPLEVBQUUsTUFBTTtNQUFFRSxHQUFHLEVBQUUsTUFBTTtNQUFFNEIsY0FBYyxFQUFFO0lBQVM7RUFBRSxnQkFDckV0TywwREFBQTtJQUFReU8sT0FBTyxFQUFFekcsZ0JBQWlCO0lBQUN2RixTQUFTLEVBQUM7RUFBYSxHQUFDLE9BRW5ELENBQ0wsQ0FDRixDQUVKLENBQ0EsQ0FDUCxDQUFDO0FBRVA7QUFFQSxpRUFBZThDLHVCQUF1QixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0VtcGxveWVlVmlldy9FbXBsb3llZUF0dGVuZGFuY2VTaGVldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBJY29uQnV0dG9uLCBNb2RhbCwgQmFja2Ryb3AsIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlSGVhZCwgVGFibGVSb3csIHN0eWxlZCwgVHlwb2dyYXBoeSwgR3JpZCwgUGFwZXIsIENhcmQsIENhcmRDb250ZW50LCBUYWJsZUNvbnRhaW5lciwgVGV4dEZpZWxkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IFRhYmxlQ2VsbCwgeyB0YWJsZUNlbGxDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyLCBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMnO1xyXG5pbXBvcnQgeyBBZGFwdGVyRGF5anMgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0FkYXB0ZXJEYXlqcyc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IHsgRGVtb0NvbnRhaW5lciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvaW50ZXJuYWxzL2RlbW8nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgeyBBZGQsIENsb3NlLCBNYWlsT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBIZWlnaHQsIFBhZGRpbmcgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IExvY2FsUHJpbnRzaG9wIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9jYWxQcmludHNob3AnO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuXHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFN0eWxlZFRhYmxlQ2VsbCA9IHN0eWxlZChUYWJsZUNlbGwpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmLiR7dGFibGVDZWxsQ2xhc3Nlcy5ib2R5fWBdOiB7XHJcbiAgICBmb250U2l6ZTogMTIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU3R5bGVkVGFibGVSb3cgPSBzdHlsZWQoVGFibGVSb3cpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgJyY6bnRoLW9mLXR5cGUob2RkKSc6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXIsXHJcbiAgfSxcclxuICAvLyBoaWRlIGxhc3QgYm9yZGVyXHJcbiAgJyY6bGFzdC1jaGlsZCB0ZCwgJjpsYXN0LWNoaWxkIHRoJzoge1xyXG4gICAgYm9yZGVyOiAwLFxyXG4gICAgd2lkdGg6IDVcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZmlsdGVyZWREYXRhID0gKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlcnMgPSBbXTtcclxuICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gIHdoaWxlIChjdXJyZW50RGF0ZSA8PSBlbmREYXRlKSB7XHJcbiAgICBoZWFkZXJzLnB1c2goY3VycmVudERhdGUudG9EYXRlU3RyaW5nKCkpO1xyXG4gICAgY3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuICB9XHJcbiAgcmV0dXJuIGhlYWRlcnNcclxufVxyXG5mdW5jdGlvbiBFbXBsb3llZUF0dGVuZGFuY2VTaGVldCgpIHtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXlqcyhkYXRlKVxyXG4gIH0pO1xyXG4gIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICByZXR1cm4gZGF5anMoZGF0ZSlcclxuICB9KTtcclxuICBjb25zdCBbQXR0ZW5kYW5jZSwgc2V0QXR0ZW5kYW5jZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbZW1wbG95ZWUsIHNldEVtcGxveWVlXSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRRdWljayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N0YXJ0RGF0ZUluZm8nKSlcclxuICAgIGNvbnN0IHN0b3JlZFF1aWNrMiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0VuZERhdGVJbmZvJykpXHJcbiAgICBpZiAoc3RvcmVkUXVpY2spIHtcclxuICAgICAgc2V0U3RhcnREYXRlKG5ldyBEYXRlKHN0b3JlZFF1aWNrKSlcclxuICAgIH1cclxuICAgIGlmIChzdG9yZWRRdWljazIpIHtcclxuICAgICAgc2V0RW5kRGF0ZShuZXcgRGF0ZShzdG9yZWRRdWljazIpKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKGRhdGUpID0+IHtcclxuICAgIHNldFN0YXJ0RGF0ZShkYXRlKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1N0YXJ0RGF0ZUluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRlKSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRW5kID0gKGRhdGUpID0+IHtcclxuICAgIHNldEVuZERhdGUoZGF0ZSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdFbmREYXRlSW5mbycsIEpTT04uc3RyaW5naWZ5KGRhdGUpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuT2ZmbGluZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVlYXR0ZW5kYW5jZWApXHJcbiAgICAgIHNldEF0dGVuZGFuY2UocmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cub2JzZXJ2YXRpb24gIT09IFwiU3RvcHBlZFwiKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEVtcGxveWVlTmFtZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNFbXBsb3llZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVlYClcclxuICAgICAgICBzZXRFbXBsb3llZShyZXNFbXBsb3llZS5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnN0YXR1cyA9PT0gJ0VtcGxveWVkJykpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaEVtcGxveWVlTmFtZSgpXHJcbiAgfSwgW10pXHJcblxyXG4gIHsvKmNvbnN0IHRvdGFsRGF5V29ya2VkID0gXHJcbiAgZW1wbG95ZWUubWFwKChyb3cpPT57XHJcbiBjb25zdCBkYXRlT2ZUaGVNb250aCA9IGZpbHRlcmVkRGF0YS5tYXAoZGF5TT0+e1xyXG4gIGNvbnN0IHJlbGF0ZWREYXkgPSBBdHRlbmRhbmNlLmZpbmQoaXRlbSA9PiBkYXlqcyggbmV3IERhdGUoaXRlbS50aW1lSW4pKS5mb3JtYXQoJ0REL01NL1lZWVknKSA9PT0gZGF5anMoZGF5TSkuZm9ybWF0KCdERC9NTS9ZWVlZJykgJiYgaXRlbS5pZCA9PT0gcm93Ll9pZClcclxuaWYgKHJlbGF0ZWREYXkpIHtcclxuICAgcmV0dXJuIHJlbGF0ZWREYXlcclxufVxyXG4gfSlcclxuIHJldHVybiAoIHtcclxuICBpZDogcm93Ll9pZCxcclxuICBkYXlXOiBkYXRlT2ZUaGVNb250aC5maWx0ZXIoaXRlbT0+IGl0ZW0gIT09IHVuZGVmaW5lZCAmJiAoaXRlbS5vYnNlcnZhdGlvbiA9PT0gJ1AnIHx8IGl0ZW0ub2JzZXJ2YXRpb24gPT09ICdIJykgKS5yZWR1Y2UoKHN1bSxpdGVtKT0+IGl0ZW0gIT09IHVuZGVmaW5lZD9zdW0gKyBpdGVtLmRheXNXTjowLDApXHJcbiB9KVxyXG59KSovfVxyXG5cclxuICBjb25zdCBkYXRlcyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XHJcbiAgICAgIHJldHVybiBmaWx0ZXJlZERhdGEoc3RhcnREYXRlLCBlbmREYXRlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdXHJcbiAgfSwgW3N0YXJ0RGF0ZSwgZW5kRGF0ZV0pXHJcblxyXG5cclxuICBjb25zdCBhdHRlbmRhbmNlU3RhdHVzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBzdGF0dXNNYXAgPSB7fVxyXG4gICAgQXR0ZW5kYW5jZS5mb3JFYWNoKCh7IGlkLCB0aW1lSW4sIG9ic2VydmF0aW9uLCBkYXlzV04gfSkgPT4ge1xyXG4gICAgICBpZiAoIXN0YXR1c01hcFtpZF0pIHN0YXR1c01hcFtpZF0gPSB7fVxyXG4gICAgICBzdGF0dXNNYXBbaWRdW2RheWpzKHRpbWVJbikuZm9ybWF0KCdERC9NTS9ZWVlZJyldID0gb2JzZXJ2YXRpb25cclxuICAgIH0pXHJcbiAgICByZXR1cm4gKHN0YXR1c01hcClcclxuICB9LCBbQXR0ZW5kYW5jZV0pXHJcblxyXG5cclxuXHJcbiAgY29uc3QgW29wZW5WaWV3LCBzZXRPcGVuVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lkVmlldywgc2V0SWRWaWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlbXBsb3llZUF0dGVuZGFuY2VJbmZvLCBzZXRFbXBsb3llZUF0dGVuZGFuY2VJbmZvXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgaGFuZGxlU2hvdyA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3BlblZpZXcodHJ1ZSk7XHJcbiAgICBzZXRJZFZpZXcoaWQpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVmlldyA9ICgpID0+IHtcclxuICAgIHNldE9wZW5WaWV3KGZhbHNlKTtcclxuICAgIHNldElkVmlldyhudWxsKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoaWRWaWV3ICE9PSBudWxsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZWF0dGVuZGFuY2UvJHtpZFZpZXd9YClcclxuICAgICAgICAgIHNldEVtcGxveWVlQXR0ZW5kYW5jZUluZm8ocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEyKClcclxuICB9LCBbaWRWaWV3XSlcclxuXHJcbiAgY29uc3QgW3NlYXJjaDIsIHNldFNlYXJjaDJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaDIgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U2VhcmNoMih2YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG5ld0FycmF5ID0gdXNlTWVtbygoKSA9PiBzZWFyY2gyICE9PSAnJyA/IGVtcGxveWVlLmZpbHRlcigocm93KSA9PlxyXG4gICAgcm93LmVtcGxveWVlTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDIudG9Mb3dlckNhc2UoKSlcclxuICApIDogZW1wbG95ZWUsIFtlbXBsb3llZSwgc2VhcmNoMl0pXHJcblxyXG4gIGNvbnN0IHRvdGFsQ291bnRzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBjb3VudHMgPSB7fTtcclxuICAgIG5ld0FycmF5LmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIGNvdW50c1tuYW1lLl9pZF0gPSB7IFA6IDAsIEE6IDAsIFM6IDAsIEg6IDAgfTtcclxuICAgICAgZGF0ZXMuZm9yRWFjaChkYXRlID0+IHtcclxuICAgICAgICBjb25zdCByZWNvcmQgPSBhdHRlbmRhbmNlU3RhdHVzW25hbWUuX2lkXT8uW2RheWpzKGRhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpXTtcclxuICAgICAgICBpZiAocmVjb3JkKSB7XHJcbiAgICAgICAgICBjb3VudHNbW25hbWUuX2lkXV1bcmVjb3JkXSsrXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBjb3VudHNcclxuICB9LCBbbmV3QXJyYXksIGRhdGVzLCBhdHRlbmRhbmNlU3RhdHVzXSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzEwcHgnIH19PlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPSdTZWFyY2gnXHJcbiAgICAgICAgICBpZD0nc2VhcmNoMidcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2gyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaDJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInLCAnRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG5hbWU9J3N0YXJ0RGF0ZSdcclxuICAgICAgICAgICAgICBsYWJlbD0nRnJvbSBEYXRlJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhzdGFydERhdGUpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gaGFuZGxlU3RhcnQoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJywgJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPSdlbmREYXRlJ1xyXG4gICAgICAgICAgICAgIGxhYmVsPSdUbyBEYXRlJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhlbmREYXRlKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IGhhbmRsZUVuZChkYXRlKX1cclxuICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFRhYmxlQ29udGFpbmVyIHN4PXt7IG1heEhlaWdodDogJzUwMHB4JyB9fT5cclxuICAgICAgICAgIDxUYWJsZSBhcmlhLWxhYmVsPVwiY29sbGFwc2libGUgdGFibGVcIiBzdGlja3lIZWFkZXIgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBtYXJnaW5Cb3R0b206ICcwcHgnIH19PlxyXG4gICAgICAgICAgICA8VGFibGVIZWFkID5cclxuICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPklEPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IHdpZHRoOiAnMTAwcHgnIH19PkVtcGxveWVlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVzPy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtyb3d9PntkYXlqcyhyb3cpLmZvcm1hdCgnREQvTU0nKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgd2lkdGg6ICcxMHB4JyB9fT5QPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IHdpZHRoOiAnMTBweCcgfX0+QTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyB3aWR0aDogJzEwcHgnIH19Pkg8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgd2lkdGg6ICcxMHB4JyB9fT5TPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmV3QXJyYXkubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVSb3cga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2kgKyAxfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LmVtcGxveWVlTmFtZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZXMubWFwKGRhdGVJID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBrZXk9e2RhdGVJfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGFuY2VTdGF0dXNbcm93Ll9pZF0/LltkYXlqcyhkYXRlSSkuZm9ybWF0KCdERC9NTS9ZWVlZJyldID8gPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kYW5jZVN0YXR1c1tyb3cuX2lkXT8uW2RheWpzKGRhdGVJKS5mb3JtYXQoJ0REL01NL1lZWVknKV0gPT09IFwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyYXlcIiA6IGF0dGVuZGFuY2VTdGF0dXNbcm93Ll9pZF0/LltkYXlqcyhkYXRlSSkuZm9ybWF0KCdERC9NTS9ZWVlZJyldID09PSBcIlBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRhbmNlU3RhdHVzW3Jvdy5faWRdPy5bZGF5anMoZGF0ZUkpLmZvcm1hdCgnREQvTU0vWVlZWScpXSA9PT0gXCJBXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJlZFwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kYW5jZVN0YXR1c1tyb3cuX2lkXT8uW2RheWpzKGRhdGVJKS5mb3JtYXQoJ0REL01NL1lZWVknKV0gPT09IFwiSFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiMzMzliYTVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kYW5jZVN0YXR1c1tyb3cuX2lkXT8uW2RheWpzKGRhdGVJKS5mb3JtYXQoJ0REL01NL1lZWVknKV0gPT09IFwiU1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiIzZhMWI5YVwiIDogXCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2F0dGVuZGFuY2VTdGF0dXNbcm93Ll9pZF0/LltkYXlqcyhkYXRlSSkuZm9ybWF0KCdERC9NTS9ZWVlZJyldfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT4gOiAnTi9BJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPnt0b3RhbENvdW50c1tyb3cuX2lkXT8uUCB8fCAwfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57dG90YWxDb3VudHNbcm93Ll9pZF0/LkEgfHwgMH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3RvdGFsQ291bnRzW3Jvdy5faWRdPy5IIHx8IDB9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPnt0b3RhbENvdW50c1tyb3cuX2lkXT8uUyB8fCAwfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuVmlld31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVZpZXd9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDg1MCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkF0dGVuZGFuY2UgSW5mb3JtYXRpb248L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVZpZXd9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZW1wbG95ZWVBdHRlbmRhbmNlSW5mbyAhPT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiAnMjc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2VtcGxveWVlQXR0ZW5kYW5jZUluZm8ubmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+VGltZSBJbjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57ZGF5anMoZW1wbG95ZWVBdHRlbmRhbmNlSW5mby50aW1lSW4pLmZvcm1hdCgnREQvTU0vWVlZWSBISDptbScpfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luTGVmdDogJzE2JScsIHBhZGRpbmc6ICcyMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCBib3JkZXJSYWRpdXM6ICcyMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnLCBjb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLmZsb29yKChuZXcgRGF0ZShlbXBsb3llZUF0dGVuZGFuY2VJbmZvLnRpbWVPdXQpIC0gbmV3IERhdGUoZW1wbG95ZWVBdHRlbmRhbmNlSW5mby50aW1lSW4pKSAvICgxMDAwICogNjAgKiA2MCkpfSBocnMge01hdGguZmxvb3IoKChuZXcgRGF0ZShlbXBsb3llZUF0dGVuZGFuY2VJbmZvLnRpbWVPdXQpIC0gbmV3IERhdGUoZW1wbG95ZWVBdHRlbmRhbmNlSW5mby50aW1lSW4pKSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpfSBtaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+VGltZSBPdXQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2RheWpzKGVtcGxveWVlQXR0ZW5kYW5jZUluZm8udGltZU91dCkuZm9ybWF0KCdERC9NTS9ZWVlZIEhIOm1tJyl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBoZWlnaHQ6ICcyNzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pk9ic2VydmF0aW9uPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlQXR0ZW5kYW5jZUluZm8ub2JzZXJ2YXRpb24gPT09IFwiUEhcIiA/IFwiZ3JheVwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZUF0dGVuZGFuY2VJbmZvLm9ic2VydmF0aW9uID09PSBcIkhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZUF0dGVuZGFuY2VJbmZvLm9ic2VydmF0aW9uID09PSBcIkFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmVkXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZUF0dGVuZGFuY2VJbmZvLm9ic2VydmF0aW9uID09PSBcIlNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjODAxMzEzXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlQXR0ZW5kYW5jZUluZm8ub2JzZXJ2YXRpb24gPT09IFwiUFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiIzRjYWY1MFwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlQXR0ZW5kYW5jZUluZm8ub2JzZXJ2YXRpb24gPT09IFwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJncmF5XCIgOiBcImJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW1wbG95ZWVBdHRlbmRhbmNlSW5mbyA/IGVtcGxveWVlQXR0ZW5kYW5jZUluZm8ub2JzZXJ2YXRpb24gOiAnTkEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+Tm90ZToge2VtcGxveWVlQXR0ZW5kYW5jZUluZm8ubm90ZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApIDogJydcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZUF0dGVuZGFuY2VTaGVldFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJCb3giLCJJY29uQnV0dG9uIiwiTW9kYWwiLCJCYWNrZHJvcCIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJzdHlsZWQiLCJUeXBvZ3JhcGh5IiwiR3JpZCIsIlBhcGVyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiVGFibGVDb250YWluZXIiLCJUZXh0RmllbGQiLCJUYWJsZUNlbGwiLCJ0YWJsZUNlbGxDbGFzc2VzIiwiRGF0ZVBpY2tlciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiRGVtb0NvbnRhaW5lciIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiZGF5anMiLCJDaGVja0NpcmNsZUljb24iLCJBZGQiLCJDbG9zZSIsIk1haWxPdXRsaW5lIiwiSGVpZ2h0IiwiUGFkZGluZyIsIkxvY2FsUHJpbnRzaG9wIiwiTG9hZGVyIiwiVmlld1Rvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIlN0eWxlZFRhYmxlQ2VsbCIsIl9yZWYzIiwiYm9keSIsIlN0eWxlZFRhYmxlUm93IiwiX3JlZjQiLCJwYWxldHRlIiwiYWN0aW9uIiwiaG92ZXIiLCJib3JkZXIiLCJ3aWR0aCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsImZpbHRlcmVkRGF0YSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJoZWFkZXJzIiwiY3VycmVudERhdGUiLCJEYXRlIiwicHVzaCIsInRvRGF0ZVN0cmluZyIsInNldERhdGUiLCJnZXREYXRlIiwiRW1wbG95ZWVBdHRlbmRhbmNlU2hlZXQiLCJfdXNlU3RhdGUiLCJkYXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2V0U3RhcnREYXRlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJzZXRFbmREYXRlIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJBdHRlbmRhbmNlIiwic2V0QXR0ZW5kYW5jZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiZW1wbG95ZWUiLCJzZXRFbXBsb3llZSIsInN0b3JlZFF1aWNrIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0b3JlZFF1aWNrMiIsImhhbmRsZVN0YXJ0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZUVuZCIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiaGFuZGxlT3Blbk9mZmxpbmUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xvc2VNb2RhbCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmV0Y2hEYXRhIiwiX3JlZjUiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZXMkZGF0YSIsInJlcyIsImdldCIsImRhdGEiLCJmaWx0ZXIiLCJyb3ciLCJvYnNlcnZhdGlvbiIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiZmV0Y2hFbXBsb3llZU5hbWUiLCJfcmVmNiIsIl9yZXNFbXBsb3llZSRkYXRhIiwicmVzRW1wbG95ZWUiLCJzdGF0dXMiLCJkYXRlcyIsImF0dGVuZGFuY2VTdGF0dXMiLCJzdGF0dXNNYXAiLCJmb3JFYWNoIiwiX3JlZjciLCJpZCIsInRpbWVJbiIsImRheXNXTiIsImZvcm1hdCIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJvcGVuVmlldyIsInNldE9wZW5WaWV3IiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsImlkVmlldyIsInNldElkVmlldyIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJlbXBsb3llZUF0dGVuZGFuY2VJbmZvIiwic2V0RW1wbG95ZWVBdHRlbmRhbmNlSW5mbyIsImhhbmRsZVNob3ciLCJoYW5kbGVDbG9zZVZpZXciLCJmZXRjaERhdGEyIiwiX3JlZjgiLCJsb2ciLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwic2VhcmNoMiIsInNldFNlYXJjaDIiLCJoYW5kbGVTZWFyY2gyIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwibmV3QXJyYXkiLCJlbXBsb3llZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidG90YWxDb3VudHMiLCJjb3VudHMiLCJuYW1lIiwiX2lkIiwiUCIsIkEiLCJTIiwiSCIsIl9hdHRlbmRhbmNlU3RhdHVzJG5hbSIsInJlY29yZCIsIkZyYWdtZW50IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJnYXAiLCJsYWJlbCIsIm9uQ2hhbmdlIiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwicmVxdWlyZWQiLCJzeCIsIm1heEhlaWdodCIsInN0aWNreUhlYWRlciIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImtleSIsImkiLCJfdG90YWxDb3VudHMkcm93JF9pZCIsIl90b3RhbENvdW50cyRyb3ckX2lkMiIsIl90b3RhbENvdW50cyRyb3ckX2lkMyIsIl90b3RhbENvdW50cyRyb3ckX2lkNCIsImRhdGVJIiwiX2F0dGVuZGFuY2VTdGF0dXMkcm93IiwiX2F0dGVuZGFuY2VTdGF0dXMkcm93MiIsIl9hdHRlbmRhbmNlU3RhdHVzJHJvdzMiLCJfYXR0ZW5kYW5jZVN0YXR1cyRyb3c0IiwiX2F0dGVuZGFuY2VTdGF0dXMkcm93NSIsIl9hdHRlbmRhbmNlU3RhdHVzJHJvdzYiLCJfYXR0ZW5kYW5jZVN0YXR1cyRyb3c3Iiwib3BlbiIsIm9uQ2xvc2UiLCJfb2JqZWN0U3ByZWFkIiwianVzdGlmeUNvbnRlbnQiLCJ0aXRsZSIsInBsYWNlbWVudCIsIm9uQ2xpY2siLCJmbG9hdCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJzcGFjaW5nIiwiaXRlbSIsInhzIiwiaGVpZ2h0IiwidGV4dEFsaWduIiwibWFyZ2luTGVmdCIsImJvcmRlclJhZGl1cyIsIk1hdGgiLCJmbG9vciIsInRpbWVPdXQiLCJjdXJzb3IiLCJub3RlIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==