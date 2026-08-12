"use strict";
exports.id = "src_js_AdminView1_PageView_BlockFactory_BlockMixerView_js";
exports.ids = ["src_js_AdminView1_PageView_BlockFactory_BlockMixerView_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/GroupAdd.js"
/*!******************************************************!*\
  !*** ./node_modules/@mui/icons-material/GroupAdd.js ***!
  \******************************************************/
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
  d: "M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m4.51-8.95C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95m4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17"
}), 'GroupAdd');

/***/ },

/***/ "./src/js/AdminView1/PageView/BlockFactory/BlockMixerView.js"
/*!*******************************************************************!*\
  !*** ./src/js/AdminView1/PageView/BlockFactory/BlockMixerView.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ToggleButton/ToggleButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_icons_material_GroupAdd__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/GroupAdd */ "./node_modules/@mui/icons-material/GroupAdd.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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

















var drawerWidth = 240;
var MainContent = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_31__["default"])('main', {
  shouldForwardProp: prop => prop !== 'open'
})(_ref => {
  var theme = _ref.theme,
    open = _ref.open;
  return _objectSpread({
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: "-".concat(drawerWidth, "px")
  }, open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  });
});
function BlockMixerView() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_3__.selectCurrentUser);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    sideBar = _useState2[0],
    setSideBar = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    employees = _useState4[0],
    setEmployees = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_34___default()().format('YYYY-MM-DD')),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedDate = _useState6[0],
    setSelectedDate = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    workerName = _useState8[0],
    setWorkerName = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    halfDay = _useState0[0],
    setHalfDay = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isSubmitting = _useState10[0],
    setIsSubmitting = _useState10[1];

  // Fetch Access
  var fetchMixerWorkers = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* () {
      try {
        var mixerRes = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/block-mixer"));
        if (mixerRes.data.data) {
          var _mixerRes$data;
          setMixerWorkers((_mixerRes$data = mixerRes.data) === null || _mixerRes$data === void 0 || (_mixerRes$data = _mixerRes$data.data) === null || _mixerRes$data === void 0 ? void 0 : _mixerRes$data.filter(mw => mw.date === selectedDate));
        }
      } catch (err) {
        console.error('Error fetching mixer workers:', err);
      }
    });
    return function fetchMixerWorkers() {
      return _ref2.apply(this, arguments);
    };
  }();

  // Fetch Initial Data
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchInitialData = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(function* () {
        try {
          var _accRes$data;
          // Fetch Access
          var accRes = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/grantAccess"));
          var userAccess = (_accRes$data = accRes.data) === null || _accRes$data === void 0 || (_accRes$data = _accRes$data.data) === null || _accRes$data === void 0 ? void 0 : _accRes$data.find(row => row.userID === user.data.id);
          if (userAccess) {
            var _userAccess$modules$f;
            var blockAccess = (_userAccess$modules$f = userAccess.modules.find(m => m.moduleName === 'Block-Mixer')) === null || _userAccess$modules$f === void 0 ? void 0 : _userAccess$modules$f.access;
            if (user.data.userName !== 'GG' && (!blockAccess || !blockAccess.createM)) {
              alert('You do not have permission to manage the Mixer Team.');
              navigate('/SideBlockFactory');
              return;
            }
          }

          // Fetch Employees
          var empRes = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/employee"));
          var allEmployees = empRes.data.data;
          var factoryEmployees = allEmployees.filter(e => {
            var isFactory = e.department && e.department.toUpperCase().includes('FACTORY');
            var isActive = e.status !== 'Fired' && e.status !== 'Resign';
            return isFactory && isActive;
          });
          setEmployees(factoryEmployees.length > 0 ? factoryEmployees : allEmployees.filter(e => e.status !== 'Fired' && e.status !== 'Resign'));

          // Fetch Productions (for worker availability check)
          var prodRes = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/block-production"));
          if (prodRes.data.data) setAllRuns(prodRes.data.data);

          // Fetch Mixer Workers
          yield fetchMixerWorkers();
        } catch (err) {
          console.error('Error fetching initial data:', err);
        }
      });
      return function fetchInitialData() {
        return _ref3.apply(this, arguments);
      };
    }();
    if (user.data.id) fetchInitialData();
  }, [user, navigate, selectedDate]);

  // Online States
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    mixerWorkers = _useState12[0],
    setMixerWorkers = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    allRuns = _useState14[0],
    setAllRuns = _useState14[1];
  var productionWorkersOnDate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var runsOnDate = allRuns.filter(r => dayjs__WEBPACK_IMPORTED_MODULE_34___default()(r.date).isSame(dayjs__WEBPACK_IMPORTED_MODULE_34___default()(selectedDate), 'day'));
    var workers = new Set();
    runsOnDate.forEach(r => {
      if (r.operatorName) workers.add(r.operatorName);
      if (r.helper1) workers.add(r.helper1);
      if (r.helper2) workers.add(r.helper2);
      if (r.helper3) workers.add(r.helper3);
    });
    return workers;
  }, [allRuns, selectedDate]);
  var availableEmployees = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return employees.filter(e => !productionWorkersOnDate.has(e.employeeName) && !mixerWorkers.some(mw => mw.workerName === e.employeeName));
  }, [employees, productionWorkersOnDate, mixerWorkers]);
  var toggleDrawer = () => setSideBar(!sideBar);
  var handleAddWorker = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* () {
      if (!workerName) {
        react_toastify__WEBPACK_IMPORTED_MODULE_33__.toast.warning("Please select a worker.");
        return;
      }
      if (mixerWorkers.some(w => w.workerName === workerName)) {
        react_toastify__WEBPACK_IMPORTED_MODULE_33__.toast.warning("Worker already added for this day.");
        return;
      }
      setIsSubmitting(true);
      try {
        var record = {
          date: selectedDate,
          workerName,
          halfDay,
          synced: false,
          updateS: true
        };

        // Save directly to server
        yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/create-block-mixer"), record);

        // Trigger Refresh
        yield fetchMixerWorkers();
        setWorkerName("");
        setHalfDay(false);
        react_toastify__WEBPACK_IMPORTED_MODULE_33__.toast.success("Worker added to mixer team.");
      } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_33__.toast.error("Error adding worker.");
      } finally {
        setIsSubmitting(false);
      }
    });
    return function handleAddWorker() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(function* (id, serverId) {
      if (!window.confirm("Remove this worker from mixer team?")) return;
      try {
        var _res$data;
        if (serverId) {
          yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/delete-block-mixer"), {
            id: serverId
          });
        }
        var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/block-mixer"));
        if (res.data.data) setMixerWorkers((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.filter(mw => mw.date === selectedDate));
        react_toastify__WEBPACK_IMPORTED_MODULE_33__.toast.success("Worker removed.");
      } catch (err) {
        react_toastify__WEBPACK_IMPORTED_MODULE_33__.toast.error("Error removing worker.");
      }
    });
    return function handleDelete(_x, _x2) {
      return _ref5.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      width: '100%',
      minHeight: '100vh',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    position: "fixed",
    sx: {
      zIndex: theme => theme.zIndex.drawer + 1,
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "inherit",
    onClick: toggleDrawer,
    edge: "start",
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_28__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6",
    noWrap: true
  }, "Mixer Team Management"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "persistent",
    anchor: "left",
    open: sideBar,
    sx: {
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainContent, {
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      mt: 3,
      px: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    md: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      p: 3,
      borderRadius: 2,
      boxShadow: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6",
    gutterBottom: true
  }, "Add Mixer Personnel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_36__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_37__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_38__.DatePicker, {
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_34___default()(selectedDate),
    onChange: newValue => setSelectedDate(newValue ? newValue.format('YYYY-MM-DD') : ""),
    format: "DD/MM/YYYY",
    slotProps: {
      textField: {
        fullWidth: true
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    fullWidth: true,
    options: availableEmployees,
    getOptionLabel: option => option.employeeName || "",
    value: availableEmployees.find(e => e.employeeName === workerName) || null,
    onChange: (e, newValue) => setWorkerName(newValue ? newValue.employeeName : ""),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({}, params, {
      label: "Select Worker"
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: halfDay ? 'half' : 'full',
    exclusive: true,
    onChange: (e, val) => val && setHalfDay(val === 'half'),
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "full",
    sx: {
      color: 'success.main',
      fontWeight: 'bold'
    }
  }, "Full Share"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "half",
    sx: {
      color: 'warning.main',
      fontWeight: 'bold'
    }
  }, "Half Share (\xBD)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    fullWidth: true,
    variant: "contained",
    size: "large",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_GroupAdd__WEBPACK_IMPORTED_MODULE_30__["default"], null),
    onClick: handleAddWorker,
    disabled: isSubmitting,
    sx: {
      bgcolor: '#30368a',
      mt: 1
    }
  }, isSubmitting ? "Adding..." : "ADD TO MIXER")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    md: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      p: 3,
      borderRadius: 2,
      boxShadow: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6"
  }, "Mixer Team - ", dayjs__WEBPACK_IMPORTED_MODULE_34___default()(selectedDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    label: "".concat(mixerWorkers.length, " Workers"),
    color: "primary",
    variant: "outlined"
  })), mixerWorkers.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    severity: "info"
  }, "No mixer workers recorded for this date.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      bgcolor: '#f5f5f5'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    sx: {
      fontWeight: 'bold'
    }
  }, "Worker Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    sx: {
      fontWeight: 'bold'
    }
  }, "Share Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], null, mixerWorkers.map(w => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: w.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, w.workerName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    label: w.halfDay ? "Half Day" : "Full Day",
    size: "small",
    color: w.halfDay ? "warning" : "success",
    variant: "tonal"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    align: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "error",
    size: "small",
    onClick: () => handleDelete(w.id, w._id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fontSize: "small"
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      mt: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    severity: "warning",
    sx: {
      border: '1px solid #ffcc80'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "How it works:"), " Mixer workers are paid from a pool generated by machines with fewer than 3 workers. Each 'missing' spot on a machine contributes one full worker share of that production run to this team.")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockMixerView);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfQmxvY2tGYWN0b3J5X0Jsb2NrTWl4ZXJWaWV3X2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRCxDQUE0RDtBQUNIO0FBQ2Y7QUFDMkI7QUFDdEI7QUFNeEI7QUFDeUI7QUFDQTtBQUNJO0FBQ0k7QUFDVjtBQUNJO0FBRVg7QUFDYjtBQUNBO0FBQ3NEO0FBQ2hCO0FBQ0o7QUFFNUQsSUFBTThDLFdBQVcsR0FBRyxHQUFHO0FBRXZCLElBQU1DLFdBQVcsR0FBR1QsaUVBQU0sQ0FBQyxNQUFNLEVBQUU7RUFBRVUsaUJBQWlCLEVBQUdDLElBQUksSUFBS0EsSUFBSSxLQUFLO0FBQU8sQ0FBQyxDQUFDLENBQ2hGQyxJQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxJQUFBLENBQUxDLEtBQUs7SUFBRUMsSUFBSSxHQUFBRixJQUFBLENBQUpFLElBQUk7RUFBQSxPQUFBQyxhQUFBO0lBQ1ZDLFFBQVEsRUFBRSxDQUFDO0lBQ1hDLE9BQU8sRUFBRSxDQUFDO0lBQ1ZDLFVBQVUsRUFBRUwsS0FBSyxDQUFDTSxXQUFXLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7TUFDM0NDLE1BQU0sRUFBRVIsS0FBSyxDQUFDTSxXQUFXLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztNQUN0Q0MsUUFBUSxFQUFFVixLQUFLLENBQUNNLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDQztJQUN6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TCxDQUNMLENBQ2IsQ0FDTSxDQUNSLENBQ0ssQ0FFakIsQ0FBQyxlQUVSdFAsMERBQUEsQ0FBQ2MscURBQUc7SUFBQzJLLEVBQUUsRUFBRTtNQUFFbUIsRUFBRSxFQUFFO0lBQUU7RUFBRSxnQkFDZjVNLDBEQUFBLENBQUNpQyxzREFBSztJQUFDZ04sUUFBUSxFQUFDLFNBQVM7SUFBQ3hELEVBQUUsRUFBRTtNQUFFOEQsTUFBTSxFQUFFO0lBQW9CO0VBQUUsZ0JBQzFEdlAsMERBQUEsWUFBRyxlQUFnQixDQUFDLGdNQUVqQixDQUNOLENBQ0gsQ0FDSixDQUNMLENBQ0ksQ0FDWixDQUFDO0FBRWQ7QUFFQSxpRUFBZW1FLGNBQWMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9Hcm91cEFkZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvQmxvY2tGYWN0b3J5L0Jsb2NrTWl4ZXJWaWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0yMiA5VjdoLTJ2MmgtMnYyaDJ2Mmgydi0yaDJWOXpNOCAxMmMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDRtMCAxYy0yLjY3IDAtOCAxLjM0LTggNHYzaDE2di0zYzAtMi42Ni01LjMzLTQtOC00bTQuNTEtOC45NUMxMy40MyA1LjExIDE0IDYuNDkgMTQgOHMtLjU3IDIuODktMS40OSAzLjk1QzE0LjQ3IDExLjcgMTYgMTAuMDQgMTYgOHMtMS41My0zLjctMy40OS0zLjk1bTQuMDIgOS43OEMxNy40MiAxNC42NiAxOCAxNS43IDE4IDE3djNoMnYtM2MwLTEuNDUtMS41OS0yLjUxLTMuNDctMy4xN1wiXG59KSwgJ0dyb3VwQWRkJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2gnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2VsZWN0Q3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7XHJcbiAgICBDb250YWluZXIsIFR5cG9ncmFwaHksIFBhcGVyLCBHcmlkLCBUZXh0RmllbGQsIEJ1dHRvbiwgQm94LFxyXG4gICAgTWVudUl0ZW0sIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVIZWFkLCBUYWJsZVJvdyxcclxuICAgIENzc0Jhc2VsaW5lLCBBcHBCYXIsIFRvb2xiYXIsIERyYXdlciwgRGl2aWRlciwgTGlzdCwgVGFibGVDb250YWluZXIsIEljb25CdXR0b24sXHJcbiAgICBBdXRvY29tcGxldGUsIFRvZ2dsZUJ1dHRvbiwgVG9nZ2xlQnV0dG9uR3JvdXAsIENoaXAsIEFsZXJ0XHJcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgU2F2ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TYXZlJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgR3JvdXBBZGRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvR3JvdXBBZGQnO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0xvY2FsaXphdGlvblByb3ZpZGVyJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlUGlja2VyJztcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgTWFpbkNvbnRlbnQgPSBzdHlsZWQoJ21haW4nLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWFyZ2luJywge1xyXG4gICAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbWFyZ2luTGVmdDogYC0ke2RyYXdlcldpZHRofXB4YCxcclxuICAgICAgICAuLi4ob3BlbiAmJiB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWFyZ2luJywge1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSxcclxuKTtcclxuXHJcbmZ1bmN0aW9uIEJsb2NrTWl4ZXJWaWV3KCkge1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuICAgIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2VtcGxveWVlcywgc2V0RW1wbG95ZWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZERhdGUsIHNldFNlbGVjdGVkRGF0ZV0gPSB1c2VTdGF0ZShkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKTtcclxuICAgIGNvbnN0IFt3b3JrZXJOYW1lLCBzZXRXb3JrZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2hhbGZEYXksIHNldEhhbGZEYXldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyBGZXRjaCBBY2Nlc3NcclxuICAgIGNvbnN0IGZldGNoTWl4ZXJXb3JrZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1peGVyUmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vYmxvY2stbWl4ZXJgKTtcclxuICAgICAgICAgICAgaWYgKG1peGVyUmVzLmRhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2V0TWl4ZXJXb3JrZXJzKG1peGVyUmVzLmRhdGE/LmRhdGE/LmZpbHRlcihtdyA9PiBtdy5kYXRlID09PSBzZWxlY3RlZERhdGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBtaXhlciB3b3JrZXJzOicsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBGZXRjaCBJbml0aWFsIERhdGFcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hJbml0aWFsRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEZldGNoIEFjY2Vzc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjUmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ3JhbnRBY2Nlc3NgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJBY2Nlc3MgPSBhY2NSZXMuZGF0YT8uZGF0YT8uZmluZChyb3cgPT4gcm93LnVzZXJJRCA9PT0gdXNlci5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyQWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tBY2Nlc3MgPSB1c2VyQWNjZXNzLm1vZHVsZXMuZmluZChtID0+IG0ubW9kdWxlTmFtZSA9PT0gJ0Jsb2NrLU1peGVyJyk/LmFjY2VzcztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5kYXRhLnVzZXJOYW1lICE9PSAnR0cnICYmICghYmxvY2tBY2Nlc3MgfHwgIWJsb2NrQWNjZXNzLmNyZWF0ZU0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byBtYW5hZ2UgdGhlIE1peGVyIFRlYW0uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKCcvU2lkZUJsb2NrRmFjdG9yeScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZldGNoIEVtcGxveWVlc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1wUmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZW1wbG95ZWVgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbEVtcGxveWVlcyA9IGVtcFJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWN0b3J5RW1wbG95ZWVzID0gYWxsRW1wbG95ZWVzLmZpbHRlcihlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0ZhY3RvcnkgPSBlLmRlcGFydG1lbnQgJiYgZS5kZXBhcnRtZW50LnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoJ0ZBQ1RPUlknKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGUuc3RhdHVzICE9PSAnRmlyZWQnICYmIGUuc3RhdHVzICE9PSAnUmVzaWduJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNGYWN0b3J5ICYmIGlzQWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRFbXBsb3llZXMoZmFjdG9yeUVtcGxveWVlcy5sZW5ndGggPiAwID8gZmFjdG9yeUVtcGxveWVlcyA6IGFsbEVtcGxveWVlcy5maWx0ZXIoZSA9PiBlLnN0YXR1cyAhPT0gJ0ZpcmVkJyAmJiBlLnN0YXR1cyAhPT0gJ1Jlc2lnbicpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBGZXRjaCBQcm9kdWN0aW9ucyAoZm9yIHdvcmtlciBhdmFpbGFiaWxpdHkgY2hlY2spXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kUmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vYmxvY2stcHJvZHVjdGlvbmApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2RSZXMuZGF0YS5kYXRhKSBzZXRBbGxSdW5zKHByb2RSZXMuZGF0YS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBGZXRjaCBNaXhlciBXb3JrZXJzXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaE1peGVyV29ya2VycygpO1xyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBpbml0aWFsIGRhdGE6JywgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHVzZXIuZGF0YS5pZCkgZmV0Y2hJbml0aWFsRGF0YSgpO1xyXG4gICAgfSwgW3VzZXIsIG5hdmlnYXRlLCBzZWxlY3RlZERhdGVdKTtcclxuXHJcbiAgICAvLyBPbmxpbmUgU3RhdGVzXHJcbiAgICBjb25zdCBbbWl4ZXJXb3JrZXJzLCBzZXRNaXhlcldvcmtlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2FsbFJ1bnMsIHNldEFsbFJ1bnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgcHJvZHVjdGlvbldvcmtlcnNPbkRhdGUgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBjb25zdCBydW5zT25EYXRlID0gYWxsUnVucy5maWx0ZXIociA9PiBkYXlqcyhyLmRhdGUpLmlzU2FtZShkYXlqcyhzZWxlY3RlZERhdGUpLCAnZGF5JykpO1xyXG4gICAgICAgIGNvbnN0IHdvcmtlcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgcnVuc09uRGF0ZS5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoci5vcGVyYXRvck5hbWUpIHdvcmtlcnMuYWRkKHIub3BlcmF0b3JOYW1lKTtcclxuICAgICAgICAgICAgaWYgKHIuaGVscGVyMSkgd29ya2Vycy5hZGQoci5oZWxwZXIxKTtcclxuICAgICAgICAgICAgaWYgKHIuaGVscGVyMikgd29ya2Vycy5hZGQoci5oZWxwZXIyKTtcclxuICAgICAgICAgICAgaWYgKHIuaGVscGVyMykgd29ya2Vycy5hZGQoci5oZWxwZXIzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gd29ya2VycztcclxuICAgIH0sIFthbGxSdW5zLCBzZWxlY3RlZERhdGVdKTtcclxuXHJcbiAgICBjb25zdCBhdmFpbGFibGVFbXBsb3llZXMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gZW1wbG95ZWVzLmZpbHRlcihlID0+XHJcbiAgICAgICAgICAgICFwcm9kdWN0aW9uV29ya2Vyc09uRGF0ZS5oYXMoZS5lbXBsb3llZU5hbWUpICYmXHJcbiAgICAgICAgICAgICFtaXhlcldvcmtlcnMuc29tZShtdyA9PiBtdy53b3JrZXJOYW1lID09PSBlLmVtcGxveWVlTmFtZSlcclxuICAgICAgICApO1xyXG4gICAgfSwgW2VtcGxveWVlcywgcHJvZHVjdGlvbldvcmtlcnNPbkRhdGUsIG1peGVyV29ya2Vyc10pO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkZFdvcmtlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoIXdvcmtlck5hbWUpIHtcclxuICAgICAgICAgICAgdG9hc3Qud2FybmluZyhcIlBsZWFzZSBzZWxlY3QgYSB3b3JrZXIuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtaXhlcldvcmtlcnMuc29tZSh3ID0+IHcud29ya2VyTmFtZSA9PT0gd29ya2VyTmFtZSkpIHtcclxuICAgICAgICAgICAgdG9hc3Qud2FybmluZyhcIldvcmtlciBhbHJlYWR5IGFkZGVkIGZvciB0aGlzIGRheS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZWNvcmQgPSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiBzZWxlY3RlZERhdGUsXHJcbiAgICAgICAgICAgICAgICB3b3JrZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgaGFsZkRheSxcclxuICAgICAgICAgICAgICAgIHN5bmNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBTYXZlIGRpcmVjdGx5IHRvIHNlcnZlclxyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLWJsb2NrLW1peGVyYCwgcmVjb3JkKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgUmVmcmVzaFxyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaE1peGVyV29ya2VycygpO1xyXG5cclxuICAgICAgICAgICAgc2V0V29ya2VyTmFtZShcIlwiKTtcclxuICAgICAgICAgICAgc2V0SGFsZkRheShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJXb3JrZXIgYWRkZWQgdG8gbWl4ZXIgdGVhbS5cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvciBhZGRpbmcgd29ya2VyLlwiKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkLCBzZXJ2ZXJJZCkgPT4ge1xyXG4gICAgICAgIGlmICghd2luZG93LmNvbmZpcm0oXCJSZW1vdmUgdGhpcyB3b3JrZXIgZnJvbSBtaXhlciB0ZWFtP1wiKSkgcmV0dXJuO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2RlbGV0ZS1ibG9jay1taXhlcmAsIHsgaWQ6IHNlcnZlcklkIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2Jsb2NrLW1peGVyYCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5kYXRhKSBzZXRNaXhlcldvcmtlcnMocmVzLmRhdGE/LmRhdGE/LmZpbHRlcihtdyA9PiBtdy5kYXRlID09PSBzZWxlY3RlZERhdGUpKTtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIldvcmtlciByZW1vdmVkLlwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvciByZW1vdmluZyB3b3JrZXIuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6ICcxMDAlJywgbWluSGVpZ2h0OiAnMTAwdmgnLCBvdmVyZmxvd1g6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgc3g9e3sgekluZGV4OiAodGhlbWUpID0+IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0gZWRnZT1cInN0YXJ0XCIgc3g9e3sgbXI6IDIgfX0+PE1lbnVJY29uIC8+PC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcD5NaXhlciBUZWFtIE1hbmFnZW1lbnQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicGVyc2lzdGVudFwiXHJcbiAgICAgICAgICAgICAgICBhbmNob3I9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgIG9wZW49e3NpZGVCYXJ9XHJcbiAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogZHJhd2VyV2lkdGgsIGZsZXhTaHJpbms6IDAsICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7IHdpZHRoOiBkcmF3ZXJXaWR0aCwgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcgfSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciAvPjxCb3ggc3g9e3sgb3ZlcmZsb3c6ICdhdXRvJyB9fT48TGlzdD48U2lkZWJhckRhc2ggLz48L0xpc3Q+PC9Cb3g+XHJcbiAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICA8TWFpbkNvbnRlbnQgb3Blbj17c2lkZUJhcn0+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgICAgICAgPEJveCBzeD17eyBtdDogMywgcHg6IDQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIHN4PXt7IHA6IDMsIGJvcmRlclJhZGl1czogMiwgYm94U2hhZG93OiAzIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbT5BZGQgTWl4ZXIgUGVyc29ubmVsPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKHNlbGVjdGVkRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXdWYWx1ZSkgPT4gc2V0U2VsZWN0ZWREYXRlKG5ld1ZhbHVlID8gbmV3VmFsdWUuZm9ybWF0KCdZWVlZLU1NLUREJykgOiBcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJERC9NTS9ZWVlZXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90UHJvcHM9e3sgdGV4dEZpZWxkOiB7IGZ1bGxXaWR0aDogdHJ1ZSB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXthdmFpbGFibGVFbXBsb3llZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmVtcGxveWVlTmFtZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2F2YWlsYWJsZUVtcGxveWVlcy5maW5kKGUgPT4gZS5lbXBsb3llZU5hbWUgPT09IHdvcmtlck5hbWUpIHx8IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBzZXRXb3JrZXJOYW1lKG5ld1ZhbHVlID8gbmV3VmFsdWUuZW1wbG95ZWVOYW1lIDogXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIlNlbGVjdCBXb3JrZXJcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVCdXR0b25Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2hhbGZEYXkgPyAnaGFsZicgOiAnZnVsbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsdXNpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsKSA9PiB2YWwgJiYgc2V0SGFsZkRheSh2YWwgPT09ICdoYWxmJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvbiB2YWx1ZT1cImZ1bGxcIiBzeD17eyBjb2xvcjogJ3N1Y2Nlc3MubWFpbicsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5GdWxsIFNoYXJlPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uIHZhbHVlPVwiaGFsZlwiIHN4PXt7IGNvbG9yOiAnd2FybmluZy5tYWluJywgZm9udFdlaWdodDogJ2JvbGQnIH19PkhhbGYgU2hhcmUgKMK9KTwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEljb249ezxHcm91cEFkZEljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRXb3JrZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgYmdjb2xvcjogJyMzMDM2OGEnLCBtdDogMSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNTdWJtaXR0aW5nID8gXCJBZGRpbmcuLi5cIiA6IFwiQUREIFRPIE1JWEVSXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs3fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBzeD17eyBwOiAzLCBib3JkZXJSYWRpdXM6IDIsIGJveFNoYWRvdzogMyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1iOiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5NaXhlciBUZWFtIC0ge2RheWpzKHNlbGVjdGVkRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcCBsYWJlbD17YCR7bWl4ZXJXb3JrZXJzLmxlbmd0aH0gV29ya2Vyc2B9IGNvbG9yPVwicHJpbWFyeVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttaXhlcldvcmtlcnMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJpbmZvXCI+Tm8gbWl4ZXIgd29ya2VycyByZWNvcmRlZCBmb3IgdGhpcyBkYXRlLjwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQgc3g9e3sgYmdjb2xvcjogJyNmNWY1ZjUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5Xb3JrZXIgTmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+U2hhcmUgVHlwZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkFjdGlvbjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttaXhlcldvcmtlcnMubWFwKCh3KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXt3LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPnt3Lndvcmtlck5hbWV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt3LmhhbGZEYXkgPyBcIkhhbGYgRGF5XCIgOiBcIkZ1bGwgRGF5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3cuaGFsZkRheSA/IFwid2FybmluZ1wiIDogXCJzdWNjZXNzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidG9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImVycm9yXCIgc2l6ZT1cInNtYWxsXCIgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHcuaWQsIHcuX2lkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgbXQ6IDMgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwid2FybmluZ1wiIHN4PXt7IGJvcmRlcjogJzFweCBzb2xpZCAjZmZjYzgwJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+SG93IGl0IHdvcmtzOjwvYj4gTWl4ZXIgd29ya2VycyBhcmUgcGFpZCBmcm9tIGEgcG9vbCBnZW5lcmF0ZWQgYnkgbWFjaGluZXMgd2l0aCBmZXdlciB0aGFuIDMgd29ya2Vycy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWFjaCAnbWlzc2luZycgc3BvdCBvbiBhIG1hY2hpbmUgY29udHJpYnV0ZXMgb25lIGZ1bGwgd29ya2VyIHNoYXJlIG9mIHRoYXQgcHJvZHVjdGlvbiBydW4gdG8gdGhpcyB0ZWFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L01haW5Db250ZW50PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvY2tNaXhlclZpZXc7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsIlNpZGViYXJEYXNoIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RDdXJyZW50VXNlciIsInVzZU5hdmlnYXRlIiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsIlBhcGVyIiwiR3JpZCIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIkJveCIsIk1lbnVJdGVtIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIkNzc0Jhc2VsaW5lIiwiQXBwQmFyIiwiVG9vbGJhciIsIkRyYXdlciIsIkRpdmlkZXIiLCJMaXN0IiwiVGFibGVDb250YWluZXIiLCJJY29uQnV0dG9uIiwiQXV0b2NvbXBsZXRlIiwiVG9nZ2xlQnV0dG9uIiwiVG9nZ2xlQnV0dG9uR3JvdXAiLCJDaGlwIiwiQWxlcnQiLCJNZW51SWNvbiIsIlNhdmVJY29uIiwiRGVsZXRlSWNvbiIsIkdyb3VwQWRkSWNvbiIsInN0eWxlZCIsIkVORFBPSU5UX1VSTCIsInRvYXN0IiwiZGF5anMiLCJheGlvcyIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImRyYXdlcldpZHRoIiwiTWFpbkNvbnRlbnQiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmIiwidGhlbWUiLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsImZsZXhHcm93IiwicGFkZGluZyIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImNvbmNhdCIsImVhc2VPdXQiLCJlbnRlcmluZ1NjcmVlbiIsIkJsb2NrTWl4ZXJWaWV3IiwibmF2aWdhdGUiLCJ1c2VyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImVtcGxveWVlcyIsInNldEVtcGxveWVlcyIsIl91c2VTdGF0ZTUiLCJmb3JtYXQiLCJfdXNlU3RhdGU2Iiwic2VsZWN0ZWREYXRlIiwic2V0U2VsZWN0ZWREYXRlIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJ3b3JrZXJOYW1lIiwic2V0V29ya2VyTmFtZSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwiaGFsZkRheSIsInNldEhhbGZEYXkiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJmZXRjaE1peGVyV29ya2VycyIsIl9yZWYyIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJtaXhlclJlcyIsImdldCIsImRhdGEiLCJfbWl4ZXJSZXMkZGF0YSIsInNldE1peGVyV29ya2VycyIsImZpbHRlciIsIm13IiwiZGF0ZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImFwcGx5IiwiYXJndW1lbnRzIiwiZmV0Y2hJbml0aWFsRGF0YSIsIl9yZWYzIiwiX2FjY1JlcyRkYXRhIiwiYWNjUmVzIiwidXNlckFjY2VzcyIsImZpbmQiLCJyb3ciLCJ1c2VySUQiLCJpZCIsIl91c2VyQWNjZXNzJG1vZHVsZXMkZiIsImJsb2NrQWNjZXNzIiwibW9kdWxlcyIsIm0iLCJtb2R1bGVOYW1lIiwiYWNjZXNzIiwidXNlck5hbWUiLCJjcmVhdGVNIiwiYWxlcnQiLCJlbXBSZXMiLCJhbGxFbXBsb3llZXMiLCJmYWN0b3J5RW1wbG95ZWVzIiwiZSIsImlzRmFjdG9yeSIsImRlcGFydG1lbnQiLCJ0b1VwcGVyQ2FzZSIsImluY2x1ZGVzIiwiaXNBY3RpdmUiLCJzdGF0dXMiLCJsZW5ndGgiLCJwcm9kUmVzIiwic2V0QWxsUnVucyIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJtaXhlcldvcmtlcnMiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiYWxsUnVucyIsInByb2R1Y3Rpb25Xb3JrZXJzT25EYXRlIiwicnVuc09uRGF0ZSIsInIiLCJpc1NhbWUiLCJ3b3JrZXJzIiwiU2V0IiwiZm9yRWFjaCIsIm9wZXJhdG9yTmFtZSIsImFkZCIsImhlbHBlcjEiLCJoZWxwZXIyIiwiaGVscGVyMyIsImF2YWlsYWJsZUVtcGxveWVlcyIsImhhcyIsImVtcGxveWVlTmFtZSIsInNvbWUiLCJ0b2dnbGVEcmF3ZXIiLCJoYW5kbGVBZGRXb3JrZXIiLCJfcmVmNCIsIndhcm5pbmciLCJ3IiwicmVjb3JkIiwic3luY2VkIiwidXBkYXRlUyIsInBvc3QiLCJzdWNjZXNzIiwiaGFuZGxlRGVsZXRlIiwiX3JlZjUiLCJzZXJ2ZXJJZCIsIndpbmRvdyIsImNvbmZpcm0iLCJfcmVzJGRhdGEiLCJyZXMiLCJfeCIsIl94MiIsImNyZWF0ZUVsZW1lbnQiLCJzeCIsImRpc3BsYXkiLCJ3aWR0aCIsIm1pbkhlaWdodCIsIm92ZXJmbG93WCIsInBvc2l0aW9uIiwiekluZGV4IiwiZHJhd2VyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJvbkNsaWNrIiwiZWRnZSIsIm1yIiwidmFyaWFudCIsIm5vV3JhcCIsImFuY2hvciIsImZsZXhTaHJpbmsiLCJib3hTaXppbmciLCJvdmVyZmxvdyIsIm10IiwicHgiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiaXRlbSIsInhzIiwibWQiLCJwIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiZ3V0dGVyQm90dG9tIiwiZmxleERpcmVjdGlvbiIsImdhcCIsImRhdGVBZGFwdGVyIiwibGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwibmV3VmFsdWUiLCJzbG90UHJvcHMiLCJ0ZXh0RmllbGQiLCJmdWxsV2lkdGgiLCJvcHRpb25zIiwiZ2V0T3B0aW9uTGFiZWwiLCJvcHRpb24iLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsIl9leHRlbmRzIiwiZXhjbHVzaXZlIiwidmFsIiwiZm9udFdlaWdodCIsInNpemUiLCJzdGFydEljb24iLCJkaXNhYmxlZCIsImJnY29sb3IiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYiIsInNldmVyaXR5IiwiYWxpZ24iLCJtYXAiLCJrZXkiLCJfaWQiLCJmb250U2l6ZSIsImJvcmRlciJdLCJzb3VyY2VSb290IjoiIn0=