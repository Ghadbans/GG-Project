"use strict";
exports.id = "src_js_AdminView1_PageView_DailyExpenses_CategoryViewDailyExpenses_js";
exports.ids = ["src_js_AdminView1_PageView_DailyExpenses_CategoryViewDailyExpenses_js"];
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

/***/ "./src/js/AdminView1/PageView/DailyExpenses/CategoryChart.js"
/*!*******************************************************************!*\
  !*** ./src/js/AdminView1/PageView/DailyExpenses/CategoryChart.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_x_charts_LineChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/x-charts/LineChart */ "./node_modules/@mui/x-charts/LineChart/LineChart.js");
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
;








function CategoryChart(_ref) {
  var onChangeId = _ref.onChangeId;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    expenses = _useState2[0],
    setExpenses = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    yearExpensesTotal = _useState4[0],
    setYearExpensesTotal = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_2__.ENDPOINT_URL, "/expense?summary=true"));
          setExpenses(res.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchData();
    var dateNow = new Date();
    setYearExpensesTotal(dayjs__WEBPACK_IMPORTED_MODULE_7___default()(dateNow).format('YYYY'));
  }, []);
  var filteredArray = expenses.filter(row => row.expenseCategory._id === onChangeId).map(row => _objectSpread(_objectSpread({}, row), {}, {
    id: row._id,
    dataField: dayjs__WEBPACK_IMPORTED_MODULE_7___default()(row.expenseDate).format('DD/MM/YYYY'),
    category: row.expenseCategory.expensesCategory
  }));
  var TotalMonth = filteredArray ? filteredArray.reduce((acc, item) => {
    var month = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(item.expenseDate).format('MMMM');
    var year = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(item.expenseDate).format('YYYY');
    if (!acc[month]) {
      acc[month] = {
        year,
        month,
        total: 0
      };
    }
    acc[month].total += parseFloat(item.total);
    return acc;
  }, {}) : '';
  var newMonthArray = Object.entries(TotalMonth).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
      month = _ref4[0],
      total = _ref4[1];
    return {
      month: total.month,
      total: parseFloat(total.total.toFixed(2)),
      year: total.year
    };
  });
  var sortArrayByMonth = newMonthArray.sort((a, b) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December'];
    return months.indexOf(a.month) - months.indexOf(b.month);
  }).filter(row => {
    var rowDate = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(row.year).format('YYYY');
    return rowDate === dayjs__WEBPACK_IMPORTED_MODULE_7___default()(yearExpensesTotal).format('YYYY');
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_3__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_5__.DemoContainer, {
    components: ['DatePicker', 'DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_4__.DatePicker, {
    views: ['year'],
    label: "Year",
    name: "yearExpensesTotal",
    value: dayjs__WEBPACK_IMPORTED_MODULE_7___default()(yearExpensesTotal),
    onChange: date => setYearExpensesTotal(date)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_charts_LineChart__WEBPACK_IMPORTED_MODULE_8__.LineChart, {
    dataset: sortArrayByMonth,
    xAxis: [{
      scaleType: 'point',
      data: sortArrayByMonth.map(row => row.month)
    }],
    series: [{
      dataKey: 'total',
      area: true
    }],
    sx: {
      width: '100%'
    },
    height: 300
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryChart);

/***/ },

/***/ "./src/js/AdminView1/PageView/DailyExpenses/CategoryViewDailyExpenses.js"
/*!*******************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/DailyExpenses/CategoryViewDailyExpenses.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _CategoryChart__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./CategoryChart */ "./src/js/AdminView1/PageView/DailyExpenses/CategoryChart.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabContext/TabContext.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabList/TabList.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabPanel/TabPanel.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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













































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref => {
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
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref7 => {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded4);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref8 => {
  var theme = _ref8.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_26__["default"], {
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
function CategoryViewDailyExpenses() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_34__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_38__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_38__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_39__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_39__.setUser)({
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
        return _ref1.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_39__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    categories = _useState2[0],
    setCategories = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    expenses = _useState4[0],
    setExpenses = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    expensesId = _useState6[0],
    setExpensesID = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result = localStorage.getItem('CategoryTabId');
    if (result) {
      setExpensesID(result);
    }
  });
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingData = _useState8[0],
    setLoadingData = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCategory = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/expense?summary=true")), axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/expensesCategory"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2),
            expenseResponse = _yield$Promise$all2[0],
            categoryResponse = _yield$Promise$all2[1];
          setExpenses(expenseResponse.data.data.reverse());
          setCategories(categoryResponse.data.data);
          setLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchCategory() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchCategory();
  }, []);
  var expensesFiltered = expenses.filter(row => row.expenseCategory._id === expensesId);
  var newCategory = categories.filter(row => row._id === expensesId).map(row => row.expensesCategory);
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    totalAmount = _useState0[0],
    setTotalAmount = _useState0[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var totalAmount1 = expensesFiltered ? expensesFiltered.reduce((sum, row) => sum + parseFloat(row.total), 0) : 0;
    var result = Math.round(totalAmount1 * 100) / 100;
    setTotalAmount(result);
  });
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState10 = _slicedToArray(_useState1, 2),
    show3 = _useState10[0],
    setShow3 = _useState10[1];
  var handleShow3 = e => {
    setShow3(e);
  };
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var result = localStorage.getItem('CategoryTab');
      return result !== null ? parseInt(result) : 0;
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    value = _useState12[0],
    setValue = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    value2 = _useState14[0],
    setValue2 = _useState14[1];
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
  var handleChangeIdIndex = (index, id) => {
    var newIndex = index;
    var newIndexId = id;
    setValue(newIndex);
    setExpensesID(id);
    localStorage.setItem('CategoryTab', newIndex);
    localStorage.setItem('CategoryTabId', newIndexId);
  };
  var handleChangeIdIndex2 = (index, id) => {
    var newIndex = index;
    var newIndexId = id;
    var result = categories.findIndex(row => row._id === id);
    setValue(result);
    setValue2(newIndex);
    setExpensesID(id);
    localStorage.setItem('CategoryTab', result);
    localStorage.setItem('CategoryTabId', newIndexId);
  };
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    search2 = _useState16[0],
    setSearch2 = _useState16[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray2 = search2 !== '' ? categories.filter(Item => Item.expensesCategory && Item.expensesCategory.toLowerCase().includes(search2.toLowerCase())) : categories;
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    search = _useState18[0],
    setSearch = _useState18[1];
  var newArray = search !== '' ? expensesFiltered.filter(row => row.accountName.toLowerCase().includes(search.toLowerCase()) || row.accountNameInfo && row.accountNameInfo.name.toLowerCase().includes(search.toLowerCase()) || dayjs__WEBPACK_IMPORTED_MODULE_35___default()(row.expenseDate).format('DD/MM/YYYY').includes(search) || row.employeeName && row.employeeName.some(Item => Item.employee.toLowerCase().includes(search.toLowerCase()))) : expensesFiltered;
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    newTotal = _useState20[0],
    setNewTotal = _useState20[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var total = 0;
    newArray.forEach(item => {
      if (item.total) {
        total += parseFloat(item.total);
      }
    });
    setNewTotal(total);
  }, [newArray]);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState('1'),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    value3 = _React$useState2[0],
    setValue3 = _React$useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result = localStorage.getItem('TabCategoryValue');
    if (result) {
      setValue3(result);
    }
  });
  var handleChange3 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('TabCategoryValue', changeValue);
  };
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_29__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Expenses Category Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: () => navigate('/DailyExpenses')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_36__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_48__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_47__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_40__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_30__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_27__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_28__["default"], {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_37__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 3
  }, show3 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h6"
  }, "All Category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow3(2)
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, categories === null || categories === void 0 ? void 0 : categories.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: index,
    label: row.expensesCategory,
    onClick: () => handleChangeIdIndex(index, row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show3 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "search",
    id: "search",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: () => handleShow3(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_41__["default"], {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '565px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray2 === null || newArray2 === void 0 ? void 0 : newArray2.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: index,
    label: row.expensesCategory,
    onClick: () => handleChangeIdIndex2(index, row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      background: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer2Head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h5"
  }, newCategory ? newCategory : 'Choose Category'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_43__["default"], {
    value: value3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: {
      borderBottom: 1,
      borderColor: 'divider'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_44__["default"], {
    onChange: handleChange3,
    "aria-label": "lab API tabs example",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: "E-Table",
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_45__["default"], {
    value: "1",
    sx: {
      height: '500px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, expensesId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      backgroundColor: '#30368a',
      color: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      display: "flex",
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, newCategory), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), " ", totalAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CategoryChart__WEBPACK_IMPORTED_MODULE_42__["default"], {
    onChangeId: expensesId
  })))) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_45__["default"], {
    value: "2",
    sx: {
      height: '500px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '5px'
    }
  }, expensesId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      padding: '20px',
      fontSize: '20px'
    }
  }, "Total : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ ", newTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: e => setSearch(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    "aria-label": "collapsible table",
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, "Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, "Account Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, newArray.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, "D-0", row.expenseNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, dayjs__WEBPACK_IMPORTED_MODULE_35___default()(row.expenseDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, row.accountName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, row.accountName === 'Office' && row.description, row.accountName === 'Project' && row.accountNameInfo.name, row.accountName === 'Employee' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, row.employeeName.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    key: i
  }, " ", Item.employee, " / FC ", Item.amount, " / $ ", Item.total)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
    title: "Edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.NavLink, {
    to: "/DailyExpenseUpdate/".concat(row._id),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: 'gray'
    }
  }))))))))))) : ''))))))))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryViewDailyExpenses);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRGFpbHlFeHBlbnNlc19DYXRlZ29yeVZpZXdEYWlseUV4cGVuc2VzX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRCxDQUFtRDtBQUN6QjtBQUN3QjtBQUNxQjtBQUNKO0FBQ0g7QUFDdEM7QUFDMEI7QUFDZ0I7QUFJcEUsU0FBU2UsYUFBYUEsQ0FBQUMsSUFBQSxFQUFpQjtFQUFBLElBQWRDLFVBQVUsR0FBQUQsSUFBQSxDQUFWQyxVQUFVO0VBRWpDLElBQUFDLFNBQUEsR0FBZ0NoQiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBaUIsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBckNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUIsSUFBQUksVUFBQSxHQUFrRHJCLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFzQixVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUF2REUsaUJBQWlCLEdBQUFELFVBQUE7SUFBRUUsb0JBQW9CLEdBQUFGLFVBQUE7RUFDOUN2QixnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNMEIsU0FBUztNQUFBLElBQUFDLEtBQUEsR0FBQUMsaUJBQUEsQ0FBRyxhQUFZO1FBQzVCLElBQUk7VUFDRixJQUFNQyxHQUFHLFNBQVMzQiw2Q0FBSyxDQUFDNEIsR0FBRyxJQUFBQyxNQUFBLENBQUk1QixvREFBWSwwQkFBdUIsQ0FBQztVQUNuRWtC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RyxzREFBUyxRQUNQMUQsR0FBRyxDQUFDZ0IsS0FBSyxDQUFDTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNtUyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUNqRCxDQUFDLGVBQ1pyVywwREFBQSxDQUFDcUcsc0RBQVMscUJBQ1JyRywwREFBQSxDQUFDa0wsV0FBVztJQUFDNEssS0FBSyxFQUFDO0VBQU0sZ0JBQ3ZCOVYsMERBQUEsNEJBQ0VBLDBEQUFBLENBQUNrRyxxREFBVSxxQkFDVGxHLDBEQUFBLENBQUMySSxzREFBTztJQUFDZ08sRUFBRSx5QkFBQTNVLE1BQUEsQ0FBeUJXLEdBQUcsQ0FBQ0UsR0FBRyxDQUFHO0lBQUNxSCxTQUFTLEVBQUM7RUFBVSxnQkFDakVsSywwREFBQSxDQUFDOEosaUVBQVE7SUFBQzRCLEtBQUssRUFBRTtNQUFFZCxLQUFLLEVBQUU7SUFBTztFQUFFLENBQUUsQ0FDOUIsQ0FDQyxDQUNSLENBQ0ssQ0FDSixDQUNILENBQ1gsQ0FFTSxDQUNOLENBQ0osQ0FBQyxHQUNKLEVBQ0QsQ0FDRyxDQUNBLENBQ1QsQ0FDRixDQUNGLENBRUYsQ0FDRCxDQUNGLENBQ0gsQ0FHQSxDQUNSLENBQ0YsQ0FDRixDQUFDO0FBRVY7QUFFQSxpRUFBZWdELHlCQUF5QixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjay5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvRGFpbHlFeHBlbnNlcy9DYXRlZ29yeUNoYXJ0LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9EYWlseUV4cGVuc2VzL0NhdGVnb3J5Vmlld0RhaWx5RXhwZW5zZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cInVzZSBjbGllbnRcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTIwIDExSDcuODNsNS41OS01LjU5TDEyIDRsLTggOCA4IDggMS40MS0xLjQxTDcuODMgMTNIMjB6XCJcbn0pLCAnQXJyb3dCYWNrJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycyc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgeyBMaW5lQ2hhcnQgfSBmcm9tICdAbXVpL3gtY2hhcnRzL0xpbmVDaGFydCc7XHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIENhdGVnb3J5Q2hhcnQoeyBvbkNoYW5nZUlkIH0pIHtcclxuXHJcbiAgY29uc3QgW2V4cGVuc2VzLCBzZXRFeHBlbnNlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3llYXJFeHBlbnNlc1RvdGFsLCBzZXRZZWFyRXhwZW5zZXNUb3RhbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9leHBlbnNlP3N1bW1hcnk9dHJ1ZWApXHJcbiAgICAgICAgc2V0RXhwZW5zZXMocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpXHJcbiAgICBjb25zdCBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuICAgIHNldFllYXJFeHBlbnNlc1RvdGFsKGRheWpzKGRhdGVOb3cpLmZvcm1hdCgnWVlZWScpKVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IGV4cGVuc2VzLmZpbHRlcigocm93KSA9PiByb3cuZXhwZW5zZUNhdGVnb3J5Ll9pZCA9PT0gb25DaGFuZ2VJZClcclxuICAgIC5tYXAoKHJvdykgPT4gKHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBpZDogcm93Ll9pZCxcclxuICAgICAgZGF0YUZpZWxkOiBkYXlqcyhyb3cuZXhwZW5zZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpLFxyXG4gICAgICBjYXRlZ29yeTogcm93LmV4cGVuc2VDYXRlZ29yeS5leHBlbnNlc0NhdGVnb3J5LFxyXG4gICAgfSkpXHJcbiAgY29uc3QgVG90YWxNb250aCA9IGZpbHRlcmVkQXJyYXkgPyBmaWx0ZXJlZEFycmF5LnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBtb250aCA9IGRheWpzKGl0ZW0uZXhwZW5zZURhdGUpLmZvcm1hdCgnTU1NTScpO1xyXG4gICAgY29uc3QgeWVhciA9IGRheWpzKGl0ZW0uZXhwZW5zZURhdGUpLmZvcm1hdCgnWVlZWScpO1xyXG4gICAgaWYgKCFhY2NbbW9udGhdKSB7XHJcbiAgICAgIGFjY1ttb250aF0gPSB7IHllYXIsIG1vbnRoLCB0b3RhbDogMCB9XHJcbiAgICB9XHJcbiAgICBhY2NbbW9udGhdLnRvdGFsICs9IHBhcnNlRmxvYXQoaXRlbS50b3RhbClcclxuICAgIHJldHVybiBhY2NcclxuICB9LCB7fSkgOiAnJ1xyXG4gIGNvbnN0IG5ld01vbnRoQXJyYXkgPSAoT2JqZWN0LmVudHJpZXMoVG90YWxNb250aCkubWFwKChbbW9udGgsIHRvdGFsXSkgPT4gKHtcclxuICAgIG1vbnRoOiB0b3RhbC5tb250aCwgdG90YWw6IHBhcnNlRmxvYXQodG90YWwudG90YWwudG9GaXhlZCgyKSksIHllYXI6IHRvdGFsLnllYXJcclxuICB9KSkpXHJcbiAgY29uc3Qgc29ydEFycmF5QnlNb250aCA9IG5ld01vbnRoQXJyYXkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgY29uc3QgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXHJcbiAgICByZXR1cm4gbW9udGhzLmluZGV4T2YoYS5tb250aCkgLSBtb250aHMuaW5kZXhPZihiLm1vbnRoKVxyXG4gIH0pLmZpbHRlcihyb3cgPT4ge1xyXG4gICAgY29uc3Qgcm93RGF0ZSA9IGRheWpzKHJvdy55ZWFyKS5mb3JtYXQoJ1lZWVknKTtcclxuICAgIHJldHVybiByb3dEYXRlID09PSBkYXlqcyh5ZWFyRXhwZW5zZXNUb3RhbCkuZm9ybWF0KCdZWVlZJylcclxuICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJywgJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICB2aWV3cz17Wyd5ZWFyJ119XHJcbiAgICAgICAgICAgIGxhYmVsPSdZZWFyJ1xyXG4gICAgICAgICAgICBuYW1lPSd5ZWFyRXhwZW5zZXNUb3RhbCdcclxuICAgICAgICAgICAgdmFsdWU9e2RheWpzKHllYXJFeHBlbnNlc1RvdGFsKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRZZWFyRXhwZW5zZXNUb3RhbChkYXRlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICA8TGluZUNoYXJ0XHJcbiAgICAgICAgZGF0YXNldD17c29ydEFycmF5QnlNb250aH1cclxuICAgICAgICB4QXhpcz17W3sgc2NhbGVUeXBlOiAncG9pbnQnLCBkYXRhOiBzb3J0QXJyYXlCeU1vbnRoLm1hcCgocm93KSA9PiByb3cubW9udGgpIH1dfVxyXG4gICAgICAgIHNlcmllcz17W3tcclxuICAgICAgICAgIGRhdGFLZXk6ICd0b3RhbCcsXHJcbiAgICAgICAgICBhcmVhOiB0cnVlLFxyXG4gICAgICAgIH1dfVxyXG4gICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlDaGFydFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaCc7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnO1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlUm93LCBUYWJsZUhlYWQsIFBhcGVyLCBUYWJsZUNvbnRhaW5lciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBBdXRvY29tcGxldGUsIHN0eWxlZCwgTW9kYWwsIEJhY2tkcm9wLCBGYWRlLCBCb3gsIE91dGxpbmVkSW5wdXQsIElucHV0QWRvcm5tZW50LCBDaGVja2JveCwgVGFicywgVGFiLCBDYXJkLCBDYXJkQ29udGVudCwgRGl2aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IEFkZCwgQXJyb3dVcHdhcmRPdXRsaW5lZCwgRXhpdFRvQXBwIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCBOYXZMaW5rLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0xvY2FsaXphdGlvblByb3ZpZGVyJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlUGlja2VyJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IHsgQ2xvc2UgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IEN1cnJlbmN5RXhjaGFuZ2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DdXJyZW5jeUV4Y2hhbmdlJztcclxuaW1wb3J0IE1vbmV0aXphdGlvbk9uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9uZXRpemF0aW9uT24nO1xyXG5pbXBvcnQgeyBEYXRhR3JpZCB9IGZyb20gJ0BtdWkveC1kYXRhLWdyaWQnO1xyXG5pbXBvcnQgQ2F0ZWdvcnlDaGFydCBmcm9tICcuL0NhdGVnb3J5Q2hhcnQnO1xyXG5pbXBvcnQgeyBUYWJDb250ZXh0LCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ0BtdWkvbGFiJztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5cclxuXHJcbmNvbnN0IExpZ2h0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIENhdGVnb3J5Vmlld0RhaWx5RXhwZW5zZXMoKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtleHBlbnNlcywgc2V0RXhwZW5zZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtleHBlbnNlc0lkLCBzZXRFeHBlbnNlc0lEXSA9IHVzZVN0YXRlKCcnKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0NhdGVnb3J5VGFiSWQnKTtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgc2V0RXhwZW5zZXNJRChyZXN1bHQpXHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaENhdGVnb3J5ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IFtleHBlbnNlUmVzcG9uc2UsIGNhdGVnb3J5UmVzcG9uc2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZXhwZW5zZT9zdW1tYXJ5PXRydWVgKSxcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2V4cGVuc2VzQ2F0ZWdvcnlgKVxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgc2V0RXhwZW5zZXMoZXhwZW5zZVJlc3BvbnNlLmRhdGEuZGF0YS5yZXZlcnNlKCkpO1xyXG4gICAgICAgIHNldENhdGVnb3JpZXMoY2F0ZWdvcnlSZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaENhdGVnb3J5KClcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgZXhwZW5zZXNGaWx0ZXJlZCA9IGV4cGVuc2VzLmZpbHRlcigocm93KSA9PiByb3cuZXhwZW5zZUNhdGVnb3J5Ll9pZCA9PT0gZXhwZW5zZXNJZClcclxuICBjb25zdCBuZXdDYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmlsdGVyKChyb3cpID0+IHJvdy5faWQgPT09IGV4cGVuc2VzSWQpXHJcbiAgICAubWFwKChyb3cpID0+IChcclxuICAgICAgcm93LmV4cGVuc2VzQ2F0ZWdvcnlcclxuICAgICkpXHJcbiAgY29uc3QgW3RvdGFsQW1vdW50LCBzZXRUb3RhbEFtb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudDEgPSBleHBlbnNlc0ZpbHRlcmVkID8gZXhwZW5zZXNGaWx0ZXJlZC5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyBwYXJzZUZsb2F0KHJvdy50b3RhbCksIDApIDogMFxyXG4gICAgY29uc3QgcmVzdWx0ID0gTWF0aC5yb3VuZCh0b3RhbEFtb3VudDEgKiAxMDApIC8gMTAwXHJcbiAgICBzZXRUb3RhbEFtb3VudChyZXN1bHQpXHJcbiAgfSlcclxuICBjb25zdCBbc2hvdzMsIHNldFNob3czXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3czID0gKGUpID0+IHtcclxuICAgIHNldFNob3czKGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQ2F0ZWdvcnlUYWInKVxyXG4gICAgcmV0dXJuIHJlc3VsdCAhPT0gbnVsbCA/IHBhcnNlSW50KHJlc3VsdCkgOiAwO1xyXG4gIH0pO1xyXG4gIGNvbnN0IFt2YWx1ZTIsIHNldFZhbHVlMl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UyID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZTIobmV3VmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUlkSW5kZXggPSAoaW5kZXgsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJbmRleCA9IGluZGV4O1xyXG4gICAgY29uc3QgbmV3SW5kZXhJZCA9IGlkO1xyXG4gICAgc2V0VmFsdWUobmV3SW5kZXgpO1xyXG4gICAgc2V0RXhwZW5zZXNJRChpZClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdDYXRlZ29yeVRhYicsIG5ld0luZGV4KVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0NhdGVnb3J5VGFiSWQnLCBuZXdJbmRleElkKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJZEluZGV4MiA9IChpbmRleCwgaWQpID0+IHtcclxuICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXg7XHJcbiAgICBjb25zdCBuZXdJbmRleElkID0gaWQ7XHJcbiAgICBjb25zdCByZXN1bHQgPSBjYXRlZ29yaWVzLmZpbmRJbmRleCgocm93KSA9PiByb3cuX2lkID09PSBpZClcclxuICAgIHNldFZhbHVlKHJlc3VsdCk7XHJcbiAgICBzZXRWYWx1ZTIobmV3SW5kZXgpO1xyXG4gICAgc2V0RXhwZW5zZXNJRChpZClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdDYXRlZ29yeVRhYicsIHJlc3VsdClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdDYXRlZ29yeVRhYklkJywgbmV3SW5kZXhJZClcclxuICB9XHJcbiAgY29uc3QgW3NlYXJjaDIsIHNldFNlYXJjaDJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaDIgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U2VhcmNoMih2YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgbmV3QXJyYXkyID0gc2VhcmNoMiAhPT0gJycgPyBjYXRlZ29yaWVzLmZpbHRlcigoSXRlbSkgPT5cclxuICAgIEl0ZW0uZXhwZW5zZXNDYXRlZ29yeSAmJiBJdGVtLmV4cGVuc2VzQ2F0ZWdvcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpXHJcbiAgKSA6IGNhdGVnb3JpZXNcclxuXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IG5ld0FycmF5ID0gc2VhcmNoICE9PSAnJyA/IGV4cGVuc2VzRmlsdGVyZWQuZmlsdGVyKChyb3cpID0+XHJcbiAgICByb3cuYWNjb3VudE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIHJvdy5hY2NvdW50TmFtZUluZm8gJiYgcm93LmFjY291bnROYW1lSW5mby5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICBkYXlqcyhyb3cuZXhwZW5zZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpLmluY2x1ZGVzKHNlYXJjaCkgfHxcclxuICAgIChyb3cuZW1wbG95ZWVOYW1lICYmIHJvdy5lbXBsb3llZU5hbWUuc29tZSgoSXRlbSkgPT5cclxuICAgICAgSXRlbS5lbXBsb3llZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxyXG4gICAgKSlcclxuICApIDogZXhwZW5zZXNGaWx0ZXJlZFxyXG4gIGNvbnN0IFtuZXdUb3RhbCwgc2V0TmV3VG90YWxdID0gdXNlU3RhdGUoMClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRvdGFsID0gMFxyXG4gICAgbmV3QXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS50b3RhbCkge1xyXG4gICAgICAgIHRvdGFsICs9IHBhcnNlRmxvYXQoaXRlbS50b3RhbClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHNldE5ld1RvdGFsKHRvdGFsKVxyXG4gIH0sIFtuZXdBcnJheV0pXHJcblxyXG4gIGNvbnN0IFt2YWx1ZTMsIHNldFZhbHVlM10gPSBSZWFjdC51c2VTdGF0ZSgnMScpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFiQ2F0ZWdvcnlWYWx1ZScpXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHNldFZhbHVlMyhyZXN1bHQpXHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UzID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSBuZXdWYWx1ZVxyXG4gICAgc2V0VmFsdWUzKGNoYW5nZVZhbHVlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUYWJDYXRlZ29yeVZhbHVlJywgY2hhbmdlVmFsdWUpXHJcbiAgfTtcclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBFeHBlbnNlcyBDYXRlZ29yeSBJbmZvcm1hdGlvblxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvRGFpbHlFeHBlbnNlcycpfT5cclxuICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRhc2ggLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDIgfX0gPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbG9hZGluZ0RhdGEgPyA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnMTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2hvdzMgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHBhZGRpbmc6ICc1cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz5BbGwgQ2F0ZWdvcnk8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMScgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdzMoMil9PkZpbHRlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDE3MHB4KScsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXM/Lm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cm93LmV4cGVuc2VzQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VJZEluZGV4KGluZGV4LCByb3cuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93MyA9PT0gMiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzEwcHgnIH19IHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2gyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdzMoMSl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMzMDM2OGEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc1NjVweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld0FycmF5Mj8ubWFwKChyb3csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtyb3cuZXhwZW5zZXNDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZUlkSW5kZXgyKGluZGV4LCByb3cuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMzMDM2OGEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcjInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmQ6ICd3aGl0ZScgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcjJIZWFkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+e25ld0NhdGVnb3J5ID8gbmV3Q2F0ZWdvcnkgOiAnQ2hvb3NlIENhdGVnb3J5J308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkNvbnRleHQgdmFsdWU9e3ZhbHVlM30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBib3JkZXJCb3R0b206IDEsIGJvcmRlckNvbG9yOiAnZGl2aWRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxhYiBBUEkgdGFicyBleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPdmVydmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJFLVRhYmxlXCIgdmFsdWU9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjFcIiBzeD17eyBoZWlnaHQ6ICc1MDBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHBlbnNlc0lkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScsIGNvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntuZXdDYXRlZ29yeX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlRvdGFsPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj48c3Bhbj4kPC9zcGFuPiB7dG90YWxBbW91bnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlDaGFydCBvbkNoYW5nZUlkPXtleHBlbnNlc0lkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjJcIiBzeD17eyBoZWlnaHQ6ICc1MDBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHBlbnNlc0lkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgcGFkZGluZzogJzIwcHgnLCBmb250U2l6ZTogJzIwcHgnIH19PlRvdGFsIDogPHNwYW4+JCB7bmV3VG90YWwudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGFyaWEtbGFiZWw9XCJjb2xsYXBzaWJsZSB0YWJsZVwiIHN0aWNreUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPiM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGF0ZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5BY2NvdW50PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkFjY291bnQgTmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Ub3RhbDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5BY3Rpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRC0we3Jvdy5leHBlbnNlTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF5anMocm93LmV4cGVuc2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5hY2NvdW50TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYWNjb3VudE5hbWUgPT09ICdPZmZpY2UnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYWNjb3VudE5hbWUgPT09ICdQcm9qZWN0JyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFjY291bnROYW1lSW5mby5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFjY291bnROYW1lID09PSAnRW1wbG95ZWUnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmVtcGxveWVlTmFtZS5tYXAoKEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2l9ID4ge0l0ZW0uZW1wbG95ZWV9IC8gRkMge0l0ZW0uYW1vdW50fSAvICQge0l0ZW0udG90YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy50b3RhbC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0VG9vbHRpcCB0aXRsZT1cIkVkaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9EYWlseUV4cGVuc2VVcGRhdGUvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9FZGl0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiQ29udGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVZpZXdEYWlseUV4cGVuc2VzXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJEYXRlUGlja2VyIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJEZW1vQ29udGFpbmVyIiwiQWRhcHRlckRheWpzIiwiZGF5anMiLCJMaW5lQ2hhcnQiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJHcmlkIiwiVHlwb2dyYXBoeSIsIkNhdGVnb3J5Q2hhcnQiLCJfcmVmIiwib25DaGFuZ2VJZCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImV4cGVuc2VzIiwic2V0RXhwZW5zZXMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInllYXJFeHBlbnNlc1RvdGFsIiwic2V0WWVhckV4cGVuc2VzVG90YWwiLCJmZXRjaERhdGEiLCJfcmVmMiIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiY29uY2F0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiZGF0ZU5vdyIsIkRhdGUiLCJmb3JtYXQiLCJmaWx0ZXJlZEFycmF5IiwiZmlsdGVyIiwicm93IiwiZXhwZW5zZUNhdGVnb3J5IiwiX2lkIiwibWFwIiwiX29iamVjdFNwcmVhZCIsImlkIiwiZGF0YUZpZWxkIiwiZXhwZW5zZURhdGUiLCJjYXRlZ29yeSIsImV4cGVuc2VzQ2F0ZWdvcnkiLCJUb3RhbE1vbnRoIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsIm1vbnRoIiwieWVhciIsInRvdGFsIiwicGFyc2VGbG9hdCIsIm5ld01vbnRoQXJyYXkiLCJPYmplY3QiLCJlbnRyaWVzIiwiX3JlZjMiLCJfcmVmNCIsInRvRml4ZWQiLCJzb3J0QXJyYXlCeU1vbnRoIiwic29ydCIsImEiLCJiIiwibW9udGhzIiwiaW5kZXhPZiIsInJvd0RhdGUiLCJjcmVhdGVFbGVtZW50IiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwidmlld3MiLCJsYWJlbCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZGF0ZSIsImRhdGFzZXQiLCJ4QXhpcyIsInNjYWxlVHlwZSIsInNlcmllcyIsImRhdGFLZXkiLCJhcmVhIiwic3giLCJ3aWR0aCIsImhlaWdodCIsIlNpZGViYXJEYXNoIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiRGVsZXRlSWNvbiIsIk1lbnVJdGVtIiwiSWNvbkJ1dHRvbiIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVSb3ciLCJUYWJsZUhlYWQiLCJQYXBlciIsIlRhYmxlQ29udGFpbmVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiQXV0b2NvbXBsZXRlIiwic3R5bGVkIiwiTW9kYWwiLCJCYWNrZHJvcCIsIkZhZGUiLCJCb3giLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJDaGVja2JveCIsIlRhYnMiLCJUYWIiLCJEaXZpZGVyIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsIkFkZCIsIkFycm93VXB3YXJkT3V0bGluZWQiLCJFeGl0VG9BcHAiLCJ2NCIsInVzZU5hdmlnYXRlIiwiTmF2TGluayIsIkxpbmsiLCJBcnJvd0JhY2siLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiTG9hZGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsIkNsb3NlIiwiQ3VycmVuY3lFeGNoYW5nZSIsIk1vbmV0aXphdGlvbk9uIiwiRGF0YUdyaWQiLCJUYWJDb250ZXh0IiwiVGFiTGlzdCIsIlRhYlBhbmVsIiwiRWRpdEljb24iLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJMaWdodFRvb2x0aXAiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsInRoZW1lIiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiVmlld1Rvb2x0aXAiLCJfZXhjbHVkZWQyIiwiRWRpdFRvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsIkJsYWNrVG9vbHRpcCIsIl9yZWY3IiwiX2V4Y2x1ZGVkNCIsIl9yZWY4Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmOSIsIm9wZW4iLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWYwIiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiQ2F0ZWdvcnlWaWV3RGFpbHlFeHBlbnNlcyIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWYxIiwiTmFtZSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImV4cGVuc2VzSWQiLCJzZXRFeHBlbnNlc0lEIiwicmVzdWx0IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJsb2FkaW5nRGF0YSIsInNldExvYWRpbmdEYXRhIiwiZmV0Y2hDYXRlZ29yeSIsIl9yZWYxMCIsIl95aWVsZCRQcm9taXNlJGFsbCIsIlByb21pc2UiLCJhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwiZXhwZW5zZVJlc3BvbnNlIiwiY2F0ZWdvcnlSZXNwb25zZSIsInJldmVyc2UiLCJleHBlbnNlc0ZpbHRlcmVkIiwibmV3Q2F0ZWdvcnkiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsInRvdGFsQW1vdW50Iiwic2V0VG90YWxBbW91bnQiLCJ0b3RhbEFtb3VudDEiLCJzdW0iLCJNYXRoIiwicm91bmQiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJzaG93MyIsInNldFNob3czIiwiaGFuZGxlU2hvdzMiLCJlIiwiX3VzZVN0YXRlMTEiLCJwYXJzZUludCIsIl91c2VTdGF0ZTEyIiwic2V0VmFsdWUiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwidmFsdWUyIiwic2V0VmFsdWUyIiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJoYW5kbGVDaGFuZ2UyIiwiaGFuZGxlQ2hhbmdlSWRJbmRleCIsImluZGV4IiwibmV3SW5kZXgiLCJuZXdJbmRleElkIiwic2V0SXRlbSIsImhhbmRsZUNoYW5nZUlkSW5kZXgyIiwiZmluZEluZGV4IiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsInNlYXJjaDIiLCJzZXRTZWFyY2gyIiwiaGFuZGxlU2VhcmNoMiIsInRhcmdldCIsIm5ld0FycmF5MiIsIkl0ZW0iLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInNlYXJjaCIsInNldFNlYXJjaCIsIm5ld0FycmF5IiwiYWNjb3VudE5hbWUiLCJhY2NvdW50TmFtZUluZm8iLCJzb21lIiwiZW1wbG95ZWUiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwibmV3VG90YWwiLCJzZXROZXdUb3RhbCIsImZvckVhY2giLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwidmFsdWUzIiwic2V0VmFsdWUzIiwiaGFuZGxlQ2hhbmdlMyIsImV2ZW50IiwiY2hhbmdlVmFsdWUiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm9uQ2xpY2siLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsImNvbnRhaW5lciIsInhzIiwicGFkZGluZyIsIm92ZXJmbG93WSIsIm9yaWVudGF0aW9uIiwia2V5IiwiYm9yZGVyUmFkaXVzIiwidGl0bGUiLCJwbGFjZW1lbnQiLCJmbG9hdCIsImJhY2tncm91bmQiLCJib3JkZXJCb3R0b20iLCJib3JkZXJDb2xvciIsImJvcmRlciIsInJlcGxhY2UiLCJzdGlja3lIZWFkZXIiLCJleHBlbnNlTnVtYmVyIiwiZGVzY3JpcHRpb24iLCJpIiwiYW1vdW50IiwidG8iXSwic291cmNlUm9vdCI6IiJ9