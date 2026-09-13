"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[483],{

/***/ 30483
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33198);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64137);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96627);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43884);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37636);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(70691);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16023);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(75737);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(48484);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(601);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(58331);
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(61087);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(71510);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(17809);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(65821);
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














var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var StyledTableCell = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(_ref3 => {
  var theme = _ref3.theme;
  return {
    ["&.".concat(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A.body)]: {
      fontSize: 12
    }
  };
});
var StyledTableRow = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_ref4 => {
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
        var res = yield axios__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__/* .ENDPOINT_URL */ .m, "/employeeattendance"));
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
          var resEmployee = yield axios__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__/* .ENDPOINT_URL */ .m, "/employee"));
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
            var res = yield axios__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__/* .ENDPOINT_URL */ .m, "/get-employeeattendance/").concat(idView));
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    label: "Search",
    id: "search2",
    value: search2,
    onChange: handleSearch2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_18__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_20__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_23__/* .DemoContainer */ .j, {
    components: ['DatePicker', 'DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_19__/* .DatePicker */ .l, {
    required: true,
    name: "startDate",
    label: "From Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_26___default()(startDate),
    onChange: date => handleStart(date),
    format: "DD/MM/YYYY"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_18__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_20__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_23__/* .DemoContainer */ .j, {
    components: ['DatePicker', 'DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_19__/* .DatePicker */ .l, {
    required: true,
    name: "endDate",
    label: "To Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_26___default()(endDate),
    onChange: date => handleEnd(date),
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      maxHeight: '500px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    "aria-label": "collapsible table",
    stickyHeader: true,
    sx: {
      backgroundColor: 'white',
      marginBottom: '0px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: {
      width: '100px'
    }
  }, "Employee"), dates === null || dates === void 0 ? void 0 : dates.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    key: row
  }, dayjs__WEBPACK_IMPORTED_MODULE_26___default()(row).format('DD/MM'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: {
      width: '10px'
    }
  }, "P"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: {
      width: '10px'
    }
  }, "A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: {
      width: '10px'
    }
  }, "H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: {
      width: '10px'
    }
  }, "S"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, newArray.map((row, i) => {
    var _totalCounts$row$_id, _totalCounts$row$_id2, _totalCounts$row$_id3, _totalCounts$row$_id4;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledTableRow, {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, row.employeeName), dates.map(dateI => {
      var _attendanceStatus$row, _attendanceStatus$row2, _attendanceStatus$row3, _attendanceStatus$row4, _attendanceStatus$row5, _attendanceStatus$row6, _attendanceStatus$row7;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
        key: dateI
      }, (_attendanceStatus$row = attendanceStatus[row._id]) !== null && _attendanceStatus$row !== void 0 && _attendanceStatus$row[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(dateI).format('DD/MM/YYYY')] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
        color: ((_attendanceStatus$row2 = attendanceStatus[row._id]) === null || _attendanceStatus$row2 === void 0 ? void 0 : _attendanceStatus$row2[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(dateI).format('DD/MM/YYYY')]) === "#" ? "gray" : ((_attendanceStatus$row3 = attendanceStatus[row._id]) === null || _attendanceStatus$row3 === void 0 ? void 0 : _attendanceStatus$row3[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(dateI).format('DD/MM/YYYY')]) === "P" ? "blue" : ((_attendanceStatus$row4 = attendanceStatus[row._id]) === null || _attendanceStatus$row4 === void 0 ? void 0 : _attendanceStatus$row4[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(dateI).format('DD/MM/YYYY')]) === "A" ? "red" : ((_attendanceStatus$row5 = attendanceStatus[row._id]) === null || _attendanceStatus$row5 === void 0 ? void 0 : _attendanceStatus$row5[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(dateI).format('DD/MM/YYYY')]) === "H" ? "#339ba5" : ((_attendanceStatus$row6 = attendanceStatus[row._id]) === null || _attendanceStatus$row6 === void 0 ? void 0 : _attendanceStatus$row6[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(dateI).format('DD/MM/YYYY')]) === "S" ? "#6a1b9a" : "black"
      }, (_attendanceStatus$row7 = attendanceStatus[row._id]) === null || _attendanceStatus$row7 === void 0 ? void 0 : _attendanceStatus$row7[dayjs__WEBPACK_IMPORTED_MODULE_26___default()(dateI).format('DD/MM/YYYY')]) : 'N/A');
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, ((_totalCounts$row$_id = totalCounts[row._id]) === null || _totalCounts$row$_id === void 0 ? void 0 : _totalCounts$row$_id.P) || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, ((_totalCounts$row$_id2 = totalCounts[row._id]) === null || _totalCounts$row$_id2 === void 0 ? void 0 : _totalCounts$row$_id2.A) || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, ((_totalCounts$row$_id3 = totalCounts[row._id]) === null || _totalCounts$row$_id3 === void 0 ? void 0 : _totalCounts$row$_id3.H) || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, ((_totalCounts$row$_id4 = totalCounts[row._id]) === null || _totalCounts$row$_id4 === void 0 ? void 0 : _totalCounts$row$_id4.S) || 0));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    open: openView,
    onClose: handleCloseView,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 850
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, "Attendance Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    onClick: handleCloseView,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  })))), employeeAttendanceInfo !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    container: true,
    sx: {
      marginBottom: '10px',
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: {
      height: '275px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, employeeAttendanceInfo.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, "Time In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, dayjs__WEBPACK_IMPORTED_MODULE_26___default()(employeeAttendanceInfo.timeIn).format('DD/MM/YYYY HH:mm'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
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
  }, Math.floor((new Date(employeeAttendanceInfo.timeOut) - new Date(employeeAttendanceInfo.timeIn)) / (1000 * 60 * 60)), " hrs ", Math.floor((new Date(employeeAttendanceInfo.timeOut) - new Date(employeeAttendanceInfo.timeIn)) % (1000 * 60 * 60) / (1000 * 60)), " min")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, "Time Out")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, dayjs__WEBPACK_IMPORTED_MODULE_26___default()(employeeAttendanceInfo.timeOut).format('DD/MM/YYYY HH:mm'))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: {
      height: '275px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, "Observation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    sx: {
      cursor: 'pointer'
    },
    color: employeeAttendanceInfo.observation === "PH" ? "gray" : employeeAttendanceInfo.observation === "H" ? "blue" : employeeAttendanceInfo.observation === "A" ? "red" : employeeAttendanceInfo.observation === "S" ? "#801313" : employeeAttendanceInfo.observation === "P" ? "#4caf50" : employeeAttendanceInfo.observation === "#" ? "gray" : "black"
  }, employeeAttendanceInfo ? employeeAttendanceInfo.observation : 'NA')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, "Note: ", employeeAttendanceInfo.note))))))) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: handleCloseModal,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleCloseModal,
    className: "btnCustomer"
  }, "Close"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeAttendanceSheet);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);