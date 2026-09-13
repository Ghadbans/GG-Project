"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[1019],{

/***/ 51019
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55746);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37636);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33198);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64137);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96627);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43884);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70691);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75737);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48484);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(601);
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(61087);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71510);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(65821);
/* harmony import */ var _mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(17925);
/* harmony import */ var _mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(78398);
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;
















function createData(id, employeeName, timeIn, status, transport) {
  return {
    id,
    employeeName,
    timeIn,
    status,
    transport
  };
}
var rows = [createData(1, 'Robert', '7h50 Am', 'Present', '2000fc'), createData(2, 'Robert', '7h50 Am', 'Present', '4000fc')];
function EmployeeTodayAttendance() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    startDate = _useState2[0],
    setStartDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    Attendance = _useState4[0],
    setAttendance = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    planing = _useState6[0],
    setPlaning = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        try {
          var _resEmp$data, _res$data, _resPlaning$data;
          var resEmp = yield axios__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_16__/* .ENDPOINT_URL */ .m, "/employee"));
          var factoryIds = (_resEmp$data = resEmp.data) === null || _resEmp$data === void 0 || (_resEmp$data = _resEmp$data.data) === null || _resEmp$data === void 0 ? void 0 : _resEmp$data.filter(emp => {
            var _emp$department;
            return ((_emp$department = emp.department) === null || _emp$department === void 0 ? void 0 : _emp$department.toUpperCase()) === 'FACTORY';
          }).map(emp => emp._id);
          var res = yield axios__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_16__/* .ENDPOINT_URL */ .m, "/employeeattendance"));
          var resPlaning = yield axios__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_16__/* .ENDPOINT_URL */ .m, "/planing"));

          // Filter out any attendance records or planings belonging to Factory workers
          var nonFactoryAttendance = (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.filter(att => !factoryIds.includes(att.id));
          var nonFactoryPlaning = (_resPlaning$data = resPlaning.data) === null || _resPlaning$data === void 0 || (_resPlaning$data = _resPlaning$data.data) === null || _resPlaning$data === void 0 ? void 0 : _resPlaning$data.filter(plan => !factoryIds.includes(plan.employeeID));
          setAttendance(nonFactoryAttendance);
          setPlaning(nonFactoryPlaning);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var filterAttendance = Attendance.filter(row => dayjs__WEBPACK_IMPORTED_MODULE_17___default()(new Date(row.timeIn)).format('DD/MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_17___default()(startDate).format('DD/MM/YYYY') && dayjs__WEBPACK_IMPORTED_MODULE_17___default()(row.timeOut).format('DD/MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_17___default()(startDate).format('DD/MM/YYYY'));
  var filterPlaning = planing.filter(row => dayjs__WEBPACK_IMPORTED_MODULE_17___default()(row.planingDate).format('DD/MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_17___default()(startDate).format('DD/MM/YYYY'));
  var todayP = filterAttendance.filter(row => row.observation === 'P');
  var todayA = filterAttendance.filter(row => row.observation === 'A');
  var todayS = filterAttendance.filter(row => row.observation === 'S');
  var todayH = filterAttendance.filter(row => row.observation === 'H');
  var todayST = filterAttendance.filter(row => row.observation === 'Stopped');
  var data = [{
    "id": 1,
    label: 'Present',
    Ob: 'P',
    value: todayP.length
  }, {
    "id": 2,
    label: 'Absent',
    Ob: 'A',
    value: todayA.length
  }, {
    "id": 3,
    label: 'Suspended',
    Ob: 'S',
    value: todayS.length
  }, {
    "id": 4,
    label: 'Half Day',
    Ob: 'H',
    value: todayH.length
  }, {
    "id": 5,
    label: 'Stopped',
    Ob: 'Stopped',
    value: todayST.length
  }];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    observation = _useState8[0],
    setObservation = _useState8[1];
  var onClickAttendance = (e, b) => {
    data.filter((row, i) => i === b.dataIndex).map(row => setObservation(row.Ob));
  };
  var newArray = observation !== "" ? filterAttendance.filter(row => row.observation === observation) : filterAttendance;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_11__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_13__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_14__/* .DemoContainer */ .j, {
    components: ['DatePicker', 'DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_12__/* .DatePicker */ .l, {
    required: true,
    name: "startDate",
    label: "From Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_17___default()(startDate),
    onChange: date => setStartDate(date),
    format: "DD/MM/YYYY"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_19__/* .PieChart */ .r, {
    series: [{
      arcLabel: item => "".concat(item.label, "(").concat(item.value, ")"),
      arcLabelMinAngle: 35,
      highlightScope: {
        faded: 'global',
        highlighted: 'item'
      },
      faded: {
        innerRadius: 30,
        additionalRadius: -30,
        color: 'gray'
      },
      data
    }],
    width: 450,
    height: 250,
    onItemClick: (e, b) => onClickAttendance(e, b),
    sx: {
      ["& .".concat(_mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_20__/* .pieArcLabelClasses */ .hM.root)]: {
        fill: 'white',
        fontWeight: 'bold'
      }
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
    sx: {
      maxHeight: '500px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    style: {
      backgroundColor: 'white'
    },
    "aria-label": "collapsible table",
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    align: "center"
  }, "Employee Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    align: "center"
  }, "Time In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    align: "center"
  }, "Time Out"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    align: "center"
  }, "Observation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    align: "center"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    align: "center"
  }, "Note"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, i) => {
    var related = filterPlaning.length !== 0 ? filterPlaning.find(row1 => row1.employeeID === row.id) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      key: row.id,
      sx: {
        '&:last-child td, &:last-child th': {
          border: 0
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      component: "th",
      scope: "row"
    }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      align: "center"
    }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      align: "center"
    }, dayjs__WEBPACK_IMPORTED_MODULE_17___default()(row.timeIn).format('HH:mm'), " AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      align: "center"
    }, dayjs__WEBPACK_IMPORTED_MODULE_17___default()(row.timeOut).format('HH:mm'), " PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      align: "center"
    }, row.observation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      align: "center"
    }, related ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        color: 'green'
      }
    }, "Assigned") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        color: 'red'
      }
    }, "UnAssigned")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      align: "center"
    }, row.note));
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeTodayAttendance);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);