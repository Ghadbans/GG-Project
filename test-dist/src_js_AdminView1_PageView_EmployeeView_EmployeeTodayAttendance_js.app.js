"use strict";
exports.id = "src_js_AdminView1_PageView_EmployeeView_EmployeeTodayAttendance_js";
exports.ids = ["src_js_AdminView1_PageView_EmployeeView_EmployeeTodayAttendance_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/EmployeeView/EmployeeTodayAttendance.js"
/*!****************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EmployeeView/EmployeeTodayAttendance.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TableCell */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/x-charts/PieChart */ "./node_modules/@mui/x-charts/PieChart/PieChart.js");
/* harmony import */ var _mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/x-charts/PieChart */ "./node_modules/@mui/x-charts/PieChart/PieArcLabel.js");
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
          var resEmp = yield axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_16__.ENDPOINT_URL, "/employee"));
          var factoryIds = (_resEmp$data = resEmp.data) === null || _resEmp$data === void 0 || (_resEmp$data = _resEmp$data.data) === null || _resEmp$data === void 0 ? void 0 : _resEmp$data.filter(emp => {
            var _emp$department;
            return ((_emp$department = emp.department) === null || _emp$department === void 0 ? void 0 : _emp$department.toUpperCase()) === 'FACTORY';
          }).map(emp => emp._id);
          var res = yield axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_16__.ENDPOINT_URL, "/employeeattendance"));
          var resPlaning = yield axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_16__.ENDPOINT_URL, "/planing"));

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_11__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_13__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_14__.DemoContainer, {
    components: ['DatePicker', 'DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_12__.DatePicker, {
    required: true,
    name: "startDate",
    label: "From Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_17___default()(startDate),
    onChange: date => setStartDate(date),
    format: "DD/MM/YYYY"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_19__.PieChart, {
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
      ["& .".concat(_mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_20__.pieArcLabelClasses.root)]: {
        fill: 'white',
        fontWeight: 'bold'
      }
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_5__["default"],
    sx: {
      maxHeight: '500px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      backgroundColor: 'white'
    },
    "aria-label": "collapsible table",
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: "center"
  }, "Employee Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: "center"
  }, "Time In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: "center"
  }, "Time Out"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: "center"
  }, "Observation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: "center"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: "center"
  }, "Note"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, i) => {
    var related = filterPlaning.length !== 0 ? filterPlaning.find(row1 => row1.employeeID === row.id) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: row.id,
      sx: {
        '&:last-child td, &:last-child th': {
          border: 0
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      component: "th",
      scope: "row"
    }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      align: "center"
    }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      align: "center"
    }, dayjs__WEBPACK_IMPORTED_MODULE_17___default()(row.timeIn).format('HH:mm'), " AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      align: "center"
    }, dayjs__WEBPACK_IMPORTED_MODULE_17___default()(row.timeOut).format('HH:mm'), " PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      align: "center"
    }, row.observation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      align: "center"
    }, related ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        color: 'green'
      }
    }, "Assigned") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        color: 'red'
      }
    }, "UnAssigned")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      align: "center"
    }, row.note));
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeTodayAttendance);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRW1wbG95ZWVWaWV3X0VtcGxveWVlVG9kYXlBdHRlbmRhbmNlX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBbUQ7QUFDekI7QUFDaUo7QUFDckc7QUFDQztBQUNQO0FBQ0E7QUFDRztBQUN6QztBQUN3QjtBQUN4QjtBQUNvQztBQUNBO0FBQ1I7QUFDVTtBQUVqQjtBQUN1QjtBQUV0RSxTQUFTdUMsVUFBVUEsQ0FBQ0MsRUFBRSxFQUFFQyxZQUFZLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUU7RUFDL0QsT0FBTztJQUFFSixFQUFFO0lBQUVDLFlBQVk7SUFBRUMsTUFBTTtJQUFFQyxNQUFNO0lBQUVDO0VBQVUsQ0FBQztBQUN4RDtBQUVBLElBQU1DLElBQUksR0FBRyxDQUNYTixVQUFVLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxFQUN2REEsVUFBVSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FFeEQ7QUFDRCxTQUFTTyx1QkFBdUJBLENBQUEsRUFBRztFQUNqQyxJQUFBQyxTQUFBLEdBQWtDN0MsK0NBQVEsQ0FBQyxNQUFNO01BQy9DLElBQU04QyxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdkIsT0FBT0QsSUFBSTtJQUNiLENBQUMsQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUosU0FBQTtJQUhLSyxTQUFTLEdBQUFGLFVBQUE7SUFBRUcsWUFBWSxHQUFBSCxVQUFBO0VBSTlCLElBQUFJLFVBQUEsR0FBb0NwRCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBcUQsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBekNFLFVBQVUsR0FBQUQsVUFBQTtJQUFF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LDBEQUFBLENBQUNrQixnRUFBUztNQUFDa0ksS0FBSyxFQUFDO0lBQVEsR0FBRUMsT0FBTyxnQkFBR3JKLDBEQUFBO01BQU1zSCxLQUFLLEVBQUU7UUFBRWtCLEtBQUssRUFBRTtNQUFRO0lBQUUsR0FBQyxVQUFjLENBQUMsZ0JBQUd4SSwwREFBQTtNQUFNc0gsS0FBSyxFQUFFO1FBQUVrQixLQUFLLEVBQUU7TUFBTTtJQUFFLEdBQUMsWUFBZ0IsQ0FBYSxDQUFDLGVBQ3JKeEksMERBQUEsQ0FBQ2tCLGdFQUFTO01BQUNrSSxLQUFLLEVBQUM7SUFBUSxHQUFFdkQsR0FBRyxDQUFDOEQsSUFBZ0IsQ0FDdkMsQ0FBQztFQUVmLENBQUMsQ0FDUSxDQUVOLENBQ08sQ0FFYixDQUFDO0FBRVY7QUFFQSxpRUFBZTdHLHVCQUF1QixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0VtcGxveWVlVmlldy9FbXBsb3llZVRvZGF5QXR0ZW5kYW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IHsgQm94LCBJY29uQnV0dG9uLCBNb2RhbCwgQmFja2Ryb3AsIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlSGVhZCwgVGFibGVSb3csIHN0eWxlZCwgVHlwb2dyYXBoeSwgR3JpZCwgUGFwZXIsIENhcmQsIENhcmRDb250ZW50LCBUYWJsZUNvbnRhaW5lciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBUYWJsZUNlbGwsIHsgdGFibGVDZWxsQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDZWxsJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciwgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IHsgQWRkLCBDbG9zZSwgTWFpbE91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgSGVpZ2h0LCBQYWRkaW5nIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBMb2NhbFByaW50c2hvcCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvY2FsUHJpbnRzaG9wJztcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCB7IFBpZUNoYXJ0LCBwaWVBcmNMYWJlbENsYXNzZXMgfSBmcm9tICdAbXVpL3gtY2hhcnRzL1BpZUNoYXJ0JztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhdGEoaWQsIGVtcGxveWVlTmFtZSwgdGltZUluLCBzdGF0dXMsIHRyYW5zcG9ydCkge1xyXG4gIHJldHVybiB7IGlkLCBlbXBsb3llZU5hbWUsIHRpbWVJbiwgc3RhdHVzLCB0cmFuc3BvcnQgfTtcclxufVxyXG5cclxuY29uc3Qgcm93cyA9IFtcclxuICBjcmVhdGVEYXRhKDEsICdSb2JlcnQnLCAnN2g1MCBBbScsICdQcmVzZW50JywgJzIwMDBmYycpLFxyXG4gIGNyZWF0ZURhdGEoMiwgJ1JvYmVydCcsICc3aDUwIEFtJywgJ1ByZXNlbnQnLCAnNDAwMGZjJyksXHJcblxyXG5dO1xyXG5mdW5jdGlvbiBFbXBsb3llZVRvZGF5QXR0ZW5kYW5jZSgpIHtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgY29uc3QgW0F0dGVuZGFuY2UsIHNldEF0dGVuZGFuY2VdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3BsYW5pbmcsIHNldFBsYW5pbmddID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNFbXAgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9lbXBsb3llZWApXHJcbiAgICAgICAgY29uc3QgZmFjdG9yeUlkcyA9IHJlc0VtcC5kYXRhPy5kYXRhPy5maWx0ZXIoZW1wID0+IGVtcC5kZXBhcnRtZW50Py50b1VwcGVyQ2FzZSgpID09PSAnRkFDVE9SWScpLm1hcChlbXAgPT4gZW1wLl9pZClcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZW1wbG95ZWVhdHRlbmRhbmNlYClcclxuICAgICAgICBjb25zdCByZXNQbGFuaW5nID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcGxhbmluZ2ApXHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBvdXQgYW55IGF0dGVuZGFuY2UgcmVjb3JkcyBvciBwbGFuaW5ncyBiZWxvbmdpbmcgdG8gRmFjdG9yeSB3b3JrZXJzXHJcbiAgICAgICAgY29uc3Qgbm9uRmFjdG9yeUF0dGVuZGFuY2UgPSByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKGF0dCA9PiAhZmFjdG9yeUlkcy5pbmNsdWRlcyhhdHQuaWQpKVxyXG4gICAgICAgIGNvbnN0IG5vbkZhY3RvcnlQbGFuaW5nID0gcmVzUGxhbmluZy5kYXRhPy5kYXRhPy5maWx0ZXIocGxhbiA9PiAhZmFjdG9yeUlkcy5pbmNsdWRlcyhwbGFuLmVtcGxveWVlSUQpKVxyXG5cclxuICAgICAgICBzZXRBdHRlbmRhbmNlKG5vbkZhY3RvcnlBdHRlbmRhbmNlKTtcclxuICAgICAgICBzZXRQbGFuaW5nKG5vbkZhY3RvcnlQbGFuaW5nKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgZmlsdGVyQXR0ZW5kYW5jZSA9IEF0dGVuZGFuY2UuZmlsdGVyKChyb3cpID0+XHJcbiAgICBkYXlqcyhuZXcgRGF0ZShyb3cudGltZUluKSkuZm9ybWF0KCdERC9NTS9ZWVlZJykgPT09IGRheWpzKHN0YXJ0RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJykgJiYgZGF5anMocm93LnRpbWVPdXQpLmZvcm1hdCgnREQvTU0vWVlZWScpID09PSBkYXlqcyhzdGFydERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpXHJcbiAgKVxyXG4gIGNvbnN0IGZpbHRlclBsYW5pbmcgPSBwbGFuaW5nLmZpbHRlcigocm93KSA9PlxyXG4gICAgZGF5anMocm93LnBsYW5pbmdEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSA9PT0gZGF5anMoc3RhcnREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKVxyXG4gIClcclxuXHJcbiAgY29uc3QgdG9kYXlQID0gZmlsdGVyQXR0ZW5kYW5jZS5maWx0ZXIoKHJvdykgPT4gcm93Lm9ic2VydmF0aW9uID09PSAnUCcpXHJcbiAgY29uc3QgdG9kYXlBID0gZmlsdGVyQXR0ZW5kYW5jZS5maWx0ZXIoKHJvdykgPT4gcm93Lm9ic2VydmF0aW9uID09PSAnQScpXHJcbiAgY29uc3QgdG9kYXlTID0gZmlsdGVyQXR0ZW5kYW5jZS5maWx0ZXIoKHJvdykgPT4gcm93Lm9ic2VydmF0aW9uID09PSAnUycpXHJcbiAgY29uc3QgdG9kYXlIID0gZmlsdGVyQXR0ZW5kYW5jZS5maWx0ZXIoKHJvdykgPT4gcm93Lm9ic2VydmF0aW9uID09PSAnSCcpXHJcbiAgY29uc3QgdG9kYXlTVCA9IGZpbHRlckF0dGVuZGFuY2UuZmlsdGVyKChyb3cpID0+IHJvdy5vYnNlcnZhdGlvbiA9PT0gJ1N0b3BwZWQnKVxyXG5cclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAgeyBcImlkXCI6IDEsIGxhYmVsOiAnUHJlc2VudCcsIE9iOiAnUCcsIHZhbHVlOiB0b2RheVAubGVuZ3RoIH0sXHJcbiAgICB7IFwiaWRcIjogMiwgbGFiZWw6ICdBYnNlbnQnLCBPYjogJ0EnLCB2YWx1ZTogdG9kYXlBLmxlbmd0aCB9LFxyXG4gICAgeyBcImlkXCI6IDMsIGxhYmVsOiAnU3VzcGVuZGVkJywgT2I6ICdTJywgdmFsdWU6IHRvZGF5Uy5sZW5ndGggfSxcclxuICAgIHsgXCJpZFwiOiA0LCBsYWJlbDogJ0hhbGYgRGF5JywgT2I6ICdIJywgdmFsdWU6IHRvZGF5SC5sZW5ndGggfSxcclxuICAgIHsgXCJpZFwiOiA1LCBsYWJlbDogJ1N0b3BwZWQnLCBPYjogJ1N0b3BwZWQnLCB2YWx1ZTogdG9kYXlTVC5sZW5ndGggfSxcclxuICBdO1xyXG4gIGNvbnN0IFtvYnNlcnZhdGlvbiwgc2V0T2JzZXJ2YXRpb25dID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBvbkNsaWNrQXR0ZW5kYW5jZSA9IChlLCBiKSA9PiB7XHJcbiAgICBkYXRhLmZpbHRlcigocm93LCBpKSA9PiBpID09PSBiLmRhdGFJbmRleCkubWFwKChyb3cpID0+IHNldE9ic2VydmF0aW9uKHJvdy5PYikpXHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdBcnJheSA9IG9ic2VydmF0aW9uICE9PSBcIlwiID8gZmlsdGVyQXR0ZW5kYW5jZS5maWx0ZXIoKHJvdykgPT5cclxuICAgIHJvdy5vYnNlcnZhdGlvbiA9PT0gb2JzZXJ2YXRpb25cclxuICApIDogZmlsdGVyQXR0ZW5kYW5jZVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInLCAnRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG5hbWU9J3N0YXJ0RGF0ZSdcclxuICAgICAgICAgICAgICBsYWJlbD0nRnJvbSBEYXRlJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhzdGFydERhdGUpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0U3RhcnREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8UGllQ2hhcnRcclxuICAgICAgICAgICAgICBzZXJpZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgYXJjTGFiZWw6IChpdGVtKSA9PiBgJHtpdGVtLmxhYmVsfSgke2l0ZW0udmFsdWV9KWAsXHJcbiAgICAgICAgICAgICAgICAgIGFyY0xhYmVsTWluQW5nbGU6IDM1LFxyXG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHRTY29wZTogeyBmYWRlZDogJ2dsb2JhbCcsIGhpZ2hsaWdodGVkOiAnaXRlbScgfSxcclxuICAgICAgICAgICAgICAgICAgZmFkZWQ6IHsgaW5uZXJSYWRpdXM6IDMwLCBhZGRpdGlvbmFsUmFkaXVzOiAtMzAsIGNvbG9yOiAnZ3JheScgfSxcclxuICAgICAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICB3aWR0aD17NDUwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjUwfVxyXG4gICAgICAgICAgICAgIG9uSXRlbUNsaWNrPXsoZSwgYikgPT4gb25DbGlja0F0dGVuZGFuY2UoZSwgYil9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIFtgJiAuJHtwaWVBcmNMYWJlbENsYXNzZXMucm9vdH1gXToge1xyXG4gICAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9IHN4PXt7IG1heEhlaWdodDogJzUwMHB4JyB9fT5cclxuICAgICAgICA8VGFibGUgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19IGFyaWEtbGFiZWw9XCJjb2xsYXBzaWJsZSB0YWJsZVwiIHN0aWNreUhlYWRlcj5cclxuICAgICAgICAgIDxUYWJsZUhlYWQgPlxyXG4gICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5JRDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5FbXBsb3llZSBOYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlRpbWUgSW48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+VGltZSBPdXQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+T2JzZXJ2YXRpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+U3RhdHVzPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPk5vdGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAge25ld0FycmF5Py5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWQgPSBmaWx0ZXJQbGFuaW5nLmxlbmd0aCAhPT0gMCA/IGZpbHRlclBsYW5pbmcuZmluZCgocm93MSkgPT4gcm93MS5lbXBsb3llZUlEID09PSByb3cuaWQpIDogbnVsbFxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VGFibGVSb3dcclxuICAgICAgICAgICAgICAgICAga2V5PXtyb3cuaWR9XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7ICcmOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aCc6IHsgYm9yZGVyOiAwIH0gfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2kgKyAxfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntyb3cubmFtZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntkYXlqcyhyb3cudGltZUluKS5mb3JtYXQoJ0hIOm1tJyl9IEFNPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57ZGF5anMocm93LnRpbWVPdXQpLmZvcm1hdCgnSEg6bW0nKX0gUE08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntyb3cub2JzZXJ2YXRpb259PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cmVsYXRlZCA/IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PkFzc2lnbmVkPC9zcGFuPiA6IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5VbkFzc2lnbmVkPC9zcGFuPn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntyb3cubm90ZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95ZWVUb2RheUF0dGVuZGFuY2VcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCb3giLCJJY29uQnV0dG9uIiwiTW9kYWwiLCJCYWNrZHJvcCIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJzdHlsZWQiLCJUeXBvZ3JhcGh5IiwiR3JpZCIsIlBhcGVyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiVGFibGVDb250YWluZXIiLCJUYWJsZUNlbGwiLCJ0YWJsZUNlbGxDbGFzc2VzIiwiRGF0ZVBpY2tlciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiRGVtb0NvbnRhaW5lciIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiZGF5anMiLCJDaGVja0NpcmNsZUljb24iLCJBZGQiLCJDbG9zZSIsIk1haWxPdXRsaW5lIiwiSGVpZ2h0IiwiUGFkZGluZyIsIkxvY2FsUHJpbnRzaG9wIiwiTG9hZGVyIiwiUGllQ2hhcnQiLCJwaWVBcmNMYWJlbENsYXNzZXMiLCJjcmVhdGVEYXRhIiwiaWQiLCJlbXBsb3llZU5hbWUiLCJ0aW1lSW4iLCJzdGF0dXMiLCJ0cmFuc3BvcnQiLCJyb3dzIiwiRW1wbG95ZWVUb2RheUF0dGVuZGFuY2UiLCJfdXNlU3RhdGUiLCJkYXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiQXR0ZW5kYW5jZSIsInNldEF0dGVuZGFuY2UiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInBsYW5pbmciLCJzZXRQbGFuaW5nIiwiZmV0Y2hEYXRhIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3Jlc0VtcCRkYXRhIiwiX3JlcyRkYXRhIiwiX3Jlc1BsYW5pbmckZGF0YSIsInJlc0VtcCIsImdldCIsImNvbmNhdCIsImZhY3RvcnlJZHMiLCJkYXRhIiwiZmlsdGVyIiwiZW1wIiwiX2VtcCRkZXBhcnRtZW50IiwiZGVwYXJ0bWVudCIsInRvVXBwZXJDYXNlIiwibWFwIiwiX2lkIiwicmVzIiwicmVzUGxhbmluZyIsIm5vbkZhY3RvcnlBdHRlbmRhbmNlIiwiYXR0IiwiaW5jbHVkZXMiLCJub25GYWN0b3J5UGxhbmluZyIsInBsYW4iLCJlbXBsb3llZUlEIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJmaWx0ZXJBdHRlbmRhbmNlIiwicm93IiwiZm9ybWF0IiwidGltZU91dCIsImZpbHRlclBsYW5pbmciLCJwbGFuaW5nRGF0ZSIsInRvZGF5UCIsIm9ic2VydmF0aW9uIiwidG9kYXlBIiwidG9kYXlTIiwidG9kYXlIIiwidG9kYXlTVCIsImxhYmVsIiwiT2IiLCJ2YWx1ZSIsImxlbmd0aCIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4Iiwic2V0T2JzZXJ2YXRpb24iLCJvbkNsaWNrQXR0ZW5kYW5jZSIsImUiLCJiIiwiaSIsImRhdGFJbmRleCIsIm5ld0FycmF5IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsInJlcXVpcmVkIiwibmFtZSIsIm9uQ2hhbmdlIiwic2VyaWVzIiwiYXJjTGFiZWwiLCJpdGVtIiwiYXJjTGFiZWxNaW5BbmdsZSIsImhpZ2hsaWdodFNjb3BlIiwiZmFkZWQiLCJoaWdobGlnaHRlZCIsImlubmVyUmFkaXVzIiwiYWRkaXRpb25hbFJhZGl1cyIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJvbkl0ZW1DbGljayIsInN4Iiwicm9vdCIsImZpbGwiLCJmb250V2VpZ2h0IiwiY29tcG9uZW50IiwibWF4SGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwic3RpY2t5SGVhZGVyIiwiYWxpZ24iLCJyZWxhdGVkIiwiZmluZCIsInJvdzEiLCJrZXkiLCJib3JkZXIiLCJzY29wZSIsIm5vdGUiXSwic291cmNlUm9vdCI6IiJ9