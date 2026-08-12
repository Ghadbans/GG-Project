"use strict";
exports.id = "src_js_AdminView1_PageView_BlockFactory_BlockTrackingView_js";
exports.ids = ["src_js_AdminView1_PageView_BlockFactory_BlockTrackingView_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/Search.js"
/*!****************************************************!*\
  !*** ./node_modules/@mui/icons-material/Search.js ***!
  \****************************************************/
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
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), 'Search');

/***/ },

/***/ "./src/js/AdminView1/PageView/BlockFactory/BlockTrackingView.js"
/*!**********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/BlockFactory/BlockTrackingView.js ***!
  \**********************************************************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_34__);
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
var MainContent = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_33__["default"])('main', {
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
function BlockTrackingView() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_3__.selectCurrentUser);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    sideBar = _useState2[0],
    setSideBar = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    searchTerm = _useState4[0],
    setSearchTerm = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    actualCounts = _useState6[0],
    setActualCounts = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    focusedField = _useState8[0],
    setFocusedField = _useState8[1];
  var handleCountChange = (type, value) => {
    setActualCounts(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [type]: value
    }));
  };
  var toggleDrawer = () => setSideBar(prev => !prev);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchAccess = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_6__.ENDPOINT_URL, "/grantAccess"));
          var userAccess = (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.find(row => row.userID === user.data.id);
          var isGG = user.data.userName === 'GG';
          if (userAccess) {
            var _userAccess$modules$f;
            var blockAccess = (_userAccess$modules$f = userAccess.modules.find(m => m.moduleName === 'Block-Factory')) === null || _userAccess$modules$f === void 0 ? void 0 : _userAccess$modules$f.access;
            if (!isGG && !(blockAccess !== null && blockAccess !== void 0 && blockAccess.readM)) {
              react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("You don't have permission to access Inventory.");
              navigate('/AdminHome');
            }
          } else if (!isGG) {
            navigate('/AdminHome');
          }
        } catch (error) {
          console.error('Error fetching access:', error);
        }
      });
      return function fetchAccess() {
        return _ref2.apply(this, arguments);
      };
    }();
    if (user.data.id) fetchAccess();
  }, [user, navigate]);
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    rawRecentProductions = _useState0[0],
    setRawRecentProductions = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    allSales = _useState10[0],
    setAllSales = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    allDamages = _useState12[0],
    setAllDamages = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    config = _useState14[0],
    setConfig = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState16 = _slicedToArray(_useState15, 2),
    posRate = _useState16[0],
    setPosRate = _useState16[1];
  var fetchAllData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      try {
        var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_6__.ENDPOINT_URL, "/block-production")), axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_6__.ENDPOINT_URL, "/block-sales")), axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_6__.ENDPOINT_URL, "/block-damage")), axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_6__.ENDPOINT_URL, "/block-config")), axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_6__.ENDPOINT_URL, "/rateReturn"))]),
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 5),
          runs = _yield$Promise$all2[0],
          sales = _yield$Promise$all2[1],
          dmgs = _yield$Promise$all2[2],
          cfg = _yield$Promise$all2[3],
          rates = _yield$Promise$all2[4];
        setRawRecentProductions(runs.data.data || []);
        setAllSales(sales.data.data || []);
        setAllDamages(dmgs.data.data || []);
        if (cfg.data.data && cfg.data.data.length > 0) {
          setConfig(cfg.data.data[cfg.data.data.length - 1]);
        }
        if (rates.data.data && rates.data.data.length > 0) {
          var _rates$data;
          setPosRate(((_rates$data = rates.data) === null || _rates$data === void 0 || (_rates$data = _rates$data.data) === null || _rates$data === void 0 || (_rates$data = _rates$data[0]) === null || _rates$data === void 0 ? void 0 : _rates$data.rateR) || 1);
        }
      } catch (err) {
        console.error("Error fetching live data:", err);
        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Failed to load live data from server.");
      }
    });
    return function fetchAllData() {
      return _ref3.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchAllData();
  }, []);
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_34___default()().subtract(30, 'day').format('YYYY-MM-DD')),
    _useState18 = _slicedToArray(_useState17, 2),
    startDate = _useState18[0],
    setStartDate = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_34___default()().format('YYYY-MM-DD')),
    _useState20 = _slicedToArray(_useState19, 2),
    endDate = _useState20[0],
    setEndDate = _useState20[1];
  var memoizedData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    // Monthly Fixed Overheads (Strictly Rent & Taxes)
    var fixedMonthly = config ? parseFloat(config.rentPrice || 0) + parseFloat(config.taxesPrice || 0) : 0;
    var sharedMonthly = config ? parseFloat(config.fuelPrice || 0) + parseFloat(config.transportPrice || 0) + parseFloat(config.commissionPrice || 0) + parseFloat(config.supervisorSalary || 0) + parseFloat(config.staffWages || 0) : 0;
    var filterByDate = arr => arr.filter(item => {
      var itemDate = item.date ? dayjs__WEBPACK_IMPORTED_MODULE_34___default()(item.date).format('YYYY-MM-DD') : '';
      return itemDate >= startDate && itemDate <= endDate;
    });

    // Enrich all productions with USD costs and ensure numeric fields (v2.5.9-STABLE)
    var allProductionsEnriched = rawRecentProductions.map(r => {
      var baseCost = 0;
      var overheadShare = 0;
      var wbFactor = (config === null || config === void 0 ? void 0 : config.wheelbarrowPerM3) || 15;
      var cM3 = (r.concasseWheelbarrows || 0) * (r.sacksUsed || 0) / wbFactor;
      var gM3 = (r.gravelWheelbarrows || 0) * (r.sacksUsed || 0) / wbFactor;
      var sM3 = (r.sandWheelbarrows || 0) * (r.sacksUsed || 0) / wbFactor;
      var calculatedMatCost = config ? (r.cementUsed || r.sacksUsed || 0) * config.cementPrice + cM3 * config.concassePrice + gM3 * config.gravelPrice + sM3 * config.sandPrice : 0;
      if (r.totalMatCost !== undefined) {
        // Modern structured runs: trust USD components completely, but guard against zero/corrupt material cost
        var cementThreshold = (r.sacksUsed || 1) * ((config === null || config === void 0 ? void 0 : config.cementPrice) || 0) * 0.9;
        var matCost = parseFloat(r.totalMatCost || 0);
        if (matCost < cementThreshold) {
          matCost = calculatedMatCost;
        }
        baseCost = matCost + parseFloat(r.laborPotUSD || 0);
        overheadShare = parseFloat(r.overheadSnapshot || r.overheadShareUSD || 0);
      } else if (r.isFinalizedCost) {
        // v2.5.9-STABLE: Trust the captured totalCost and overheadShare
        baseCost = parseFloat(r.totalCost || 0) - parseFloat(r.overheadShareUSD || 0);
        overheadShare = parseFloat(r.overheadShareUSD || 0);
      } else if (r.totalCost && parseFloat(r.totalCost) > 0) {
        // Historical conversion: if > 20000, it's FC, otherwise USD
        var rawCost = parseFloat(r.totalCost);
        baseCost = rawCost > 20000 ? rawCost / posRate : rawCost;
      } else {
        // Fallback for very old records without totalCost
        var mixerShare = (r.sacksUsed || 0) * ((config === null || config === void 0 ? void 0 : config.mixerRatePerSack) || 300);
        baseCost = calculatedMatCost + ((r.laborPot || 0) + mixerShare) / posRate;
      }
      var totalBlocks = parseInt(r.totalBlocks || 0);
      if (totalBlocks === 0) {
        totalBlocks = (r.sackDetails || []).reduce((a, b) => a + (parseInt(b) || 0), 0);
      }
      return _objectSpread(_objectSpread({}, r), {}, {
        baseCostUSD: baseCost,
        overheadShareUSD: overheadShare,
        totalBlocks
      });
    });

    // Group by date to count unique machines for overhead sharing (all-time to be mathematically accurate)
    var machinesByDate = {};
    allProductionsEnriched.forEach(p => {
      if (!machinesByDate[p.date]) machinesByDate[p.date] = new Set();
      machinesByDate[p.date].add(p.machineNo);
    });
    var dailyOverhead = (fixedMonthly + sharedMonthly) / 26;

    // Pre-calculate machine run counts to avoid O(N^2) filter inside map
    var runsCountMap = {};
    allProductionsEnriched.forEach(r => {
      var key = "".concat(r.date, "_").concat(r.machineNo);
      runsCountMap[key] = (runsCountMap[key] || 0) + 1;
    });
    var allProductionsWithCost = allProductionsEnriched.map(p => {
      var shareForThisRun = 0;
      if (p.overheadShareUSD && parseFloat(p.overheadShareUSD) > 0) {
        shareForThisRun = parseFloat(p.overheadShareUSD);
      } else if (p.isFinalizedCost) {
        shareForThisRun = parseFloat(p.overheadShareUSD || 0);
      } else {
        var _machinesByDate$p$dat;
        var key = "".concat(p.date, "_").concat(p.machineNo);
        var runsForMachineOnDate = runsCountMap[key] || 1;
        var machinesOnDateCount = ((_machinesByDate$p$dat = machinesByDate[p.date]) === null || _machinesByDate$p$dat === void 0 ? void 0 : _machinesByDate$p$dat.size) || 1;
        shareForThisRun = dailyOverhead / (machinesOnDateCount * runsForMachineOnDate);
      }
      return _objectSpread(_objectSpread({}, p), {}, {
        totalCost: (p.baseCostUSD + shareForThisRun).toFixed(2),
        totalOverheadShareUSD: shareForThisRun.toFixed(2)
      });
    });
    var productionsFiltered = filterByDate(allProductionsWithCost).sort((a, b) => new Date(b.date) - new Date(a.date));
    var salesFiltered = filterByDate(allSales);
    var damagesFiltered = filterByDate(allDamages);

    // All-time Stock Calculations (Ensuring all are numeric)
    var producedAllTime = {};
    var soldAllTime = {};
    var damagedAllTime = {};
    allProductionsEnriched.forEach(p => {
      var type = p.blockType || "Unknown";
      producedAllTime[type] = (producedAllTime[type] || 0) + (parseInt(p.totalBlocks) || 0);
    });
    allSales.forEach(s => {
      var type = s.blockType || "Unknown";
      soldAllTime[type] = (soldAllTime[type] || 0) + (parseInt(s.quantitySold) || 0);
    });
    allDamages.forEach(d => {
      var type = d.blockType || "Unknown";
      damagedAllTime[type] = (damagedAllTime[type] || 0) + (parseInt(d.damagedBlocks) || 0);
    });
    var allTypes = Array.from(new Set([...Object.keys(producedAllTime), ...Object.keys(soldAllTime), ...Object.keys(damagedAllTime)])).filter(t => t !== "Unknown");

    // Calculate all-time average cost fallback for each block type
    var allTimeCostMap = {};
    var allTimeProducedMap = {};
    allProductionsWithCost.forEach(p => {
      var type = p.blockType || "Unknown";
      allTimeCostMap[type] = (allTimeCostMap[type] || 0) + parseFloat(p.totalCost || 0);
      allTimeProducedMap[type] = (allTimeProducedMap[type] || 0) + (parseInt(p.totalBlocks) || 0);
    });
    var allTimeAvgCostMap = {};
    allTypes.forEach(type => {
      var produced = allTimeProducedMap[type] || 0;
      var cost = allTimeCostMap[type] || 0;
      allTimeAvgCostMap[type] = produced > 0 ? cost / produced : 0;
    });

    // Period-specific aggregates for Inventory Table
    var producedInPeriod = {};
    var soldInPeriod = {};
    var damagedInPeriod = {};
    var costInPeriod = {};
    productionsFiltered.forEach(p => {
      var type = p.blockType || "Unknown";
      producedInPeriod[type] = (producedInPeriod[type] || 0) + (parseInt(p.totalBlocks) || 0);
      costInPeriod[type] = (costInPeriod[type] || 0) + parseFloat(p.totalCost || 0);
    });
    salesFiltered.forEach(s => {
      var type = s.blockType || "Unknown";
      soldInPeriod[type] = (soldInPeriod[type] || 0) + (parseInt(s.quantitySold) || 0);
    });
    damagesFiltered.forEach(d => {
      var type = d.blockType || "Unknown";
      damagedInPeriod[type] = (damagedInPeriod[type] || 0) + (parseInt(d.damagedBlocks) || 0);
    });
    var totalProducedInPeriod = productionsFiltered.reduce((s, p) => s + (p.totalBlocks || 0), 0);
    var totalSoldInPeriod = salesFiltered.reduce((s, sl) => s + (parseInt(sl.quantitySold) || 0), 0);
    var totalDamagedInPeriod = damagesFiltered.reduce((s, d) => s + (parseInt(d.damagedBlocks) || 0), 0);
    var totalSacksInPeriod = productionsFiltered.reduce((s, p) => s + (parseInt(p.sacksUsed) || 0), 0);
    var totalRevenueInPeriod = salesFiltered.reduce((s, sl) => s + (parseFloat(sl.totalAmount) || 0), 0);
    var totalCostInPeriod = productionsFiltered.reduce((s, p) => s + parseFloat(p.totalCost || 0), 0);
    var filteredHistory = searchTerm ? productionsFiltered.filter(p => (p.blockType || "").toLowerCase().includes(searchTerm.toLowerCase()) || (p.machineNo || "").toString().includes(searchTerm)) : productionsFiltered;
    return {
      stats: {
        totalProduced: totalProducedInPeriod,
        totalSold: totalSoldInPeriod,
        totalDamaged: totalDamagedInPeriod,
        efficiency: totalSacksInPeriod > 0 ? (totalProducedInPeriod / totalSacksInPeriod).toFixed(1) : 0,
        totalRevenue: totalRevenueInPeriod,
        totalCost: totalCostInPeriod,
        variableCost: productionsFiltered.reduce((s, p) => s + parseFloat(p.baseCostUSD || 0), 0),
        fixedOverhead: productionsFiltered.reduce((s, p) => s + parseFloat(p.totalOverheadShareUSD || 0), 0),
        netProfitUSD: (totalRevenueInPeriod - totalCostInPeriod).toFixed(2)
      },
      inventory: allTypes.map(type => {
        var producedTotal = producedAllTime[type] || 0;
        var soldTotal = soldAllTime[type] || 0;
        var damagedTotal = damagedAllTime[type] || 0;
        var pProduced = producedInPeriod[type] || 0;
        var pCost = costInPeriod[type] || 0;
        var periodAvgCost = pProduced > 0 ? pCost / pProduced : 0;
        var avgCost = periodAvgCost > 0 ? periodAvgCost : allTimeAvgCostMap[type] || 0;
        return {
          type,
          produced: pProduced,
          sold: soldInPeriod[type] || 0,
          damaged: damagedInPeriod[type] || 0,
          stock: producedTotal - soldTotal - damagedTotal,
          avgCost
        };
      }).sort((a, b) => b.stock - a.stock),
      productionHistory: filteredHistory.map(p => ({
        id: p.id || p._id,
        date: p.date,
        machineNo: p.machineNo,
        blockType: p.blockType,
        totalBlocks: p.totalBlocks,
        totalCost: p.totalCost,
        unitCost: (parseFloat(p.totalCost) / (parseInt(p.totalBlocks) || 1)).toFixed(2)
      }))
    };
  }, [rawRecentProductions, allSales, allDamages, config, startDate, endDate, posRate, searchTerm]);
  var stats = memoizedData.stats,
    inventory = memoizedData.inventory,
    productionHistory = memoizedData.productionHistory;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      display: 'flex',
      width: '100%',
      minHeight: '100vh',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    position: "fixed",
    sx: {
      zIndex: theme => theme.zIndex.drawer + 1,
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "inherit",
    onClick: toggleDrawer,
    edge: "start",
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h6",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Block Factory Inventory & Analytics"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainContent, {
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      mt: 2,
      width: '100%',
      px: 0,
      m: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    container: true,
    spacing: 2,
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      p: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_28__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_29__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_30__.DatePicker, {
    label: "Start Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_34___default()(startDate),
    onChange: newValue => setStartDate(newValue ? newValue.format('YYYY-MM-DD') : ""),
    format: "DD/MM/YYYY",
    slotProps: {
      textField: {
        size: 'small'
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, "to"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_30__.DatePicker, {
    label: "End Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_34___default()(endDate),
    onChange: newValue => setEndDate(newValue ? newValue.format('YYYY-MM-DD') : ""),
    format: "DD/MM/YYYY",
    slotProps: {
      textField: {
        size: 'small'
      }
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      bgcolor: '#e3f2fd',
      boxShadow: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "textSecondary",
    gutterBottom: true
  }, "Total Produced"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h4"
  }, stats.totalProduced.toLocaleString())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      bgcolor: '#fff3e0',
      boxShadow: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "textSecondary",
    gutterBottom: true
  }, "Total Sold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h4"
  }, stats.totalSold.toLocaleString())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      bgcolor: '#ffebee',
      boxShadow: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "textSecondary",
    gutterBottom: true
  }, "Total Damaged"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h4"
  }, stats.totalDamaged.toLocaleString())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      bgcolor: '#e8f5e9',
      boxShadow: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "textSecondary",
    gutterBottom: true
  }, "Total Revenue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h4",
    color: "success.main"
  }, "$", (stats.totalRevenue || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      bgcolor: '#fff3e0',
      boxShadow: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "textSecondary",
    gutterBottom: true
  }, "Total Investment & Costing (Period)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h5"
  }, "$", (stats.totalCost || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 6,
    sx: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "caption",
    display: "block"
  }, "Variable: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "$", (stats.variableCost || 0).toLocaleString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "caption",
    display: "block"
  }, "Fixed: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "$", (stats.fixedOverhead || 0).toLocaleString()))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      bgcolor: '#e0f2f1',
      boxShadow: 2,
      border: '2px solid #004d40'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "textSecondary",
    gutterBottom: true
  }, "Estimated Profit (Period)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h4",
    sx: {
      fontWeight: 'bold',
      color: (stats.totalRevenue || 0) - (stats.totalCost || 0) >= 0 ? 'success.main' : 'error.main'
    }
  }, "$", ((stats.totalRevenue || 0) - (stats.totalCost || 0)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "caption"
  }, "Revenue - (Variable + Fixed Costs)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      p: 2,
      borderRadius: 2,
      boxShadow: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h6",
    gutterBottom: true
  }, "Inventory by Block Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: {
      bgcolor: '#eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, "Block Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, "Average Cost/Block ($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, "Produced"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, "Sold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, "Damaged"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "In Stock"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "center",
    sx: {
      fontWeight: 'bold',
      minWidth: 120
    }
  }, "Physical Count"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "Variance (Rest)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], null, inventory.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    key: row.type
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, row.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, "$", (row.avgCost || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, (row.produced || 0).toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, (row.sold || 0).toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, (row.damaged || 0).toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    label: (row.stock || 0).toLocaleString(),
    color: row.stock > 0 ? "success" : "error",
    variant: "outlined",
    size: "small",
    sx: {
      fontWeight: 'bold',
      minWidth: 70
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    size: "small",
    type: "number",
    placeholder: "Count",
    value: actualCounts[row.type] !== undefined ? actualCounts[row.type] : '',
    onChange: e => handleCountChange(row.type, e.target.value),
    sx: {
      width: '100px',
      bgcolor: '#fff',
      borderRadius: 1
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, actualCounts[row.type] !== undefined && actualCounts[row.type] !== '' ? (() => {
    var diff = (parseInt(actualCounts[row.type]) || 0) - row.stock;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "body2",
      fontWeight: "bold",
      color: diff < 0 ? 'error.main' : diff > 0 ? 'success.main' : 'text.secondary'
    }, diff > 0 ? '+' : '', diff.toLocaleString());
  })() : '-')))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      p: 3,
      bgcolor: '#f5f5f5',
      borderRadius: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h6",
    gutterBottom: true
  }, "Total Investment & Costing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, "Production Costs (Materials + Overheads + Labor):"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    fontWeight: "bold"
  }, "$", (stats.totalCost || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      color: stats.totalRevenue - stats.totalCost >= 0 ? 'success.main' : 'error.main'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h6"
  }, "Estimated Profit:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h6",
    fontWeight: "bold"
  }, "$", ((stats.totalRevenue || 0) - (stats.totalCost || 0)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      p: 2,
      mt: 3,
      borderRadius: 2,
      boxShadow: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 2,
      flexWrap: 'wrap',
      gap: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h6"
  }, "Production Cost History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    size: "small",
    label: "Search History",
    placeholder: "Machine or Block Type...",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    sx: {
      minWidth: 350,
      bgcolor: '#f1f3f4',
      borderRadius: 1
    },
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_32__["default"], {
        sx: {
          color: 'action.active',
          mr: 1,
          fontSize: 20
        }
      })
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: {
      bgcolor: '#eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, "Block Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, "Blocks Produced"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, "Total Cost ($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, "Cost per Block ($)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], null, productionHistory.map((run, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    key: run._id || run.id || idx
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, dayjs__WEBPACK_IMPORTED_MODULE_34___default()(run.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, run.blockType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, (run.totalBlocks || 0).toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, "$", parseFloat(run.totalCost || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, "$", (run.totalBlocks > 0 ? parseFloat(run.totalCost || 0) / run.totalBlocks : 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))))))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockTrackingView);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfQmxvY2tGYWN0b3J5X0Jsb2NrVHJhY2tpbmdWaWV3X2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsQ0FBNEQ7QUFDSDtBQUNmO0FBQzJCO0FBQ3RCO0FBQ3JCO0FBQ3dCO0FBQ1g7QUFLaEI7QUFDeUQ7QUFDaEI7QUFDSjtBQUNaO0FBQ0k7QUFDTjtBQUNwQjtBQUUxQixJQUFNd0MsV0FBVyxHQUFHLEdBQUc7QUFFdkIsSUFBTUMsV0FBVyxHQUFHSCxpRUFBTSxDQUFDLE1BQU0sRUFBRTtFQUFFSSxpQkFBaUIsRUFBR0MsSUFBSSxJQUFLQSxJQUFJLEtBQUs7QUFBTyxDQUFDLENBQUMsQ0FDaEZDLElBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztJQUFFQyxJQUFJLEdBQUFGLElBQUEsQ0FBSkUsSUFBSTtFQUFBLE9BQUFDLGFBQUE7SUFDVkMsUUFBUSxFQUFFLENBQUM7SUFDWEMsT0FBTyxFQUFFLENBQUM7SUFDVkMsVUFBVSxFQUFFTCxLQUFLLENBQUNNLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsRUFBRTtNQUMzQ0MsTUFBTSxFQUFFUixLQUFLLENBQUNNLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO01BQ3RDQyxRQUFRLEVBQUVWLEtBQUssQ0FBQ00sV0FBVyxDQUFDSSxRQUFRLENBQUNDO0lBQ3pDLENBQUMsQ0FB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QUFDLENBQWEsQ0FBQyxlQUM5RTNVLDBEQUFBLENBQUNpQixzREFBUztJQUFDaVUsS0FBSyxFQUFDO0VBQU8sR0FBQyxHQUFDLEVBQUNwTCxVQUFVLENBQUMrTCxHQUFHLENBQUNwSixTQUFTLElBQUksQ0FBQyxDQUFDLENBQUNrSSxjQUFjLENBQUN6SSxTQUFTLEVBQUU7SUFBRTBJLHFCQUFxQixFQUFFLENBQUM7SUFBRUMscUJBQXFCLEVBQUU7RUFBRSxDQUFDLENBQWEsQ0FBQyxlQUN4SjdVLDBEQUFBLENBQUNpQixzREFBUztJQUFDaVUsS0FBSyxFQUFDO0VBQU8sR0FBQyxHQUNwQixFQUFDLENBQUNXLEdBQUcsQ0FBQy9JLFdBQVcsR0FBRyxDQUFDLEdBQUloRCxVQUFVLENBQUMrTCxHQUFHLENBQUNwSixTQUFTLElBQUksQ0FBQyxDQUFDLEdBQUdvSixHQUFHLENBQUMvSSxXQUFXLEdBQUksQ0FBQyxFQUFFNkgsY0FBYyxDQUFDekksU0FBUyxFQUFFO0lBQUUwSSxxQkFBcUIsRUFBRSxDQUFDO0lBQUVDLHFCQUFxQixFQUFFO0VBQUUsQ0FBQyxDQUMxSixDQUNMLENBQ2IsQ0FDTSxDQUNSLENBQ0ssQ0FDYixDQUNMLENBQ0osQ0FDTCxDQUNJLENBQ1osQ0FBQztBQUVkO0FBRUEsaUVBQWVoUixpQkFBaUIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0Jsb2NrRmFjdG9yeS9CbG9ja1RyYWNraW5nVmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTl6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTRcIlxufSksICdTZWFyY2gnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZWxlY3RDdXJyZW50VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7XHJcbiAgICBDb250YWluZXIsIFR5cG9ncmFwaHksIFBhcGVyLCBHcmlkLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsXHJcbiAgICBUYWJsZUhlYWQsIFRhYmxlUm93LCBDc3NCYXNlbGluZSwgQXBwQmFyLCBUb29sYmFyLCBEcmF3ZXIsXHJcbiAgICBEaXZpZGVyLCBMaXN0LCBUYWJsZUNvbnRhaW5lciwgQm94LCBDYXJkLCBDYXJkQ29udGVudCwgSWNvbkJ1dHRvbiwgVGV4dEZpZWxkLCBDaGlwXHJcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgTWFpbkNvbnRlbnQgPSBzdHlsZWQoJ21haW4nLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWFyZ2luJywge1xyXG4gICAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbWFyZ2luTGVmdDogYC0ke2RyYXdlcldpZHRofXB4YCxcclxuICAgICAgICAuLi4ob3BlbiAmJiB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWFyZ2luJywge1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSxcclxuKTtcclxuXHJcbmZ1bmN0aW9uIEJsb2NrVHJhY2tpbmdWaWV3KCkge1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuICAgIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbYWN0dWFsQ291bnRzLCBzZXRBY3R1YWxDb3VudHNdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2ZvY3VzZWRGaWVsZCwgc2V0Rm9jdXNlZEZpZWxkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvdW50Q2hhbmdlID0gKHR5cGUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0dWFsQ291bnRzKHByZXYgPT4gKHsgLi4ucHJldiwgW3R5cGVdOiB2YWx1ZSB9KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHNldFNpZGVCYXIocHJldiA9PiAhcHJldik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaEFjY2VzcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dyYW50QWNjZXNzYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyQWNjZXNzID0gcmVzLmRhdGE/LmRhdGE/LmZpbmQocm93ID0+IHJvdy51c2VySUQgPT09IHVzZXIuZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0dHID0gdXNlci5kYXRhLnVzZXJOYW1lID09PSAnR0cnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJBY2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja0FjY2VzcyA9IHVzZXJBY2Nlc3MubW9kdWxlcy5maW5kKG0gPT4gbS5tb2R1bGVOYW1lID09PSAnQmxvY2stRmFjdG9yeScpPy5hY2Nlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0dHICYmICFibG9ja0FjY2Vzcz8ucmVhZE0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyBJbnZlbnRvcnkuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZSgnL0FkbWluSG9tZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzR0cpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZSgnL0FkbWluSG9tZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWNjZXNzOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHVzZXIuZGF0YS5pZCkgZmV0Y2hBY2Nlc3MoKTtcclxuICAgIH0sIFt1c2VyLCBuYXZpZ2F0ZV0pO1xyXG5cclxuICAgIGNvbnN0IFtyYXdSZWNlbnRQcm9kdWN0aW9ucywgc2V0UmF3UmVjZW50UHJvZHVjdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2FsbFNhbGVzLCBzZXRBbGxTYWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbYWxsRGFtYWdlcywgc2V0QWxsRGFtYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcG9zUmF0ZSwgc2V0UG9zUmF0ZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaEFsbERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgW3J1bnMsIHNhbGVzLCBkbWdzLCBjZmcsIHJhdGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2Jsb2NrLXByb2R1Y3Rpb25gKSxcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2Jsb2NrLXNhbGVzYCksXHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ibG9jay1kYW1hZ2VgKSxcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2Jsb2NrLWNvbmZpZ2ApLFxyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcmF0ZVJldHVybmApXHJcbiAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgc2V0UmF3UmVjZW50UHJvZHVjdGlvbnMocnVucy5kYXRhLmRhdGEgfHwgW10pO1xyXG4gICAgICAgICAgICBzZXRBbGxTYWxlcyhzYWxlcy5kYXRhLmRhdGEgfHwgW10pO1xyXG4gICAgICAgICAgICBzZXRBbGxEYW1hZ2VzKGRtZ3MuZGF0YS5kYXRhIHx8IFtdKTtcclxuICAgICAgICAgICAgaWYgKGNmZy5kYXRhLmRhdGEgJiYgY2ZnLmRhdGEuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb25maWcoY2ZnLmRhdGEuZGF0YVtjZmcuZGF0YS5kYXRhLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmF0ZXMuZGF0YS5kYXRhICYmIHJhdGVzLmRhdGEuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQb3NSYXRlKHJhdGVzLmRhdGE/LmRhdGE/LlswXT8ucmF0ZVIgfHwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGxpdmUgZGF0YTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBsaXZlIGRhdGEgZnJvbSBzZXJ2ZXIuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaEFsbERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoZGF5anMoKS5zdWJ0cmFjdCgzMCwgJ2RheScpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKTtcclxuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xyXG5cclxuICAgIGNvbnN0IG1lbW9pemVkRGF0YSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIC8vIE1vbnRobHkgRml4ZWQgT3ZlcmhlYWRzIChTdHJpY3RseSBSZW50ICYgVGF4ZXMpXHJcbiAgICAgICAgY29uc3QgZml4ZWRNb250aGx5ID0gY29uZmlnID8gKFxyXG4gICAgICAgICAgICBwYXJzZUZsb2F0KGNvbmZpZy5yZW50UHJpY2UgfHwgMCkgKyBwYXJzZUZsb2F0KGNvbmZpZy50YXhlc1ByaWNlIHx8IDApXHJcbiAgICAgICAgKSA6IDA7XHJcbiAgICAgICAgY29uc3Qgc2hhcmVkTW9udGhseSA9IGNvbmZpZyA/IChcclxuICAgICAgICAgICAgcGFyc2VGbG9hdChjb25maWcuZnVlbFByaWNlIHx8IDApICtcclxuICAgICAgICAgICAgcGFyc2VGbG9hdChjb25maWcudHJhbnNwb3J0UHJpY2UgfHwgMCkgK1xyXG4gICAgICAgICAgICBwYXJzZUZsb2F0KGNvbmZpZy5jb21taXNzaW9uUHJpY2UgfHwgMCkgK1xyXG4gICAgICAgICAgICBwYXJzZUZsb2F0KGNvbmZpZy5zdXBlcnZpc29yU2FsYXJ5IHx8IDApICtcclxuICAgICAgICAgICAgcGFyc2VGbG9hdChjb25maWcuc3RhZmZXYWdlcyB8fCAwKVxyXG4gICAgICAgICkgOiAwO1xyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJCeURhdGUgPSAoYXJyKSA9PiBhcnIuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtRGF0ZSA9IGl0ZW0uZGF0ZSA/IGRheWpzKGl0ZW0uZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJykgOiAnJztcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1EYXRlID49IHN0YXJ0RGF0ZSAmJiBpdGVtRGF0ZSA8PSBlbmREYXRlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBFbnJpY2ggYWxsIHByb2R1Y3Rpb25zIHdpdGggVVNEIGNvc3RzIGFuZCBlbnN1cmUgbnVtZXJpYyBmaWVsZHMgKHYyLjUuOS1TVEFCTEUpXHJcbiAgICAgICAgY29uc3QgYWxsUHJvZHVjdGlvbnNFbnJpY2hlZCA9IHJhd1JlY2VudFByb2R1Y3Rpb25zLm1hcChyID0+IHtcclxuICAgICAgICAgICAgbGV0IGJhc2VDb3N0ID0gMDtcclxuICAgICAgICAgICAgbGV0IG92ZXJoZWFkU2hhcmUgPSAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2JGYWN0b3IgPSBjb25maWc/LndoZWVsYmFycm93UGVyTTMgfHwgMTU7XHJcbiAgICAgICAgICAgIGNvbnN0IGNNMyA9ICgoci5jb25jYXNzZVdoZWVsYmFycm93cyB8fCAwKSAqIChyLnNhY2tzVXNlZCB8fCAwKSkgLyB3YkZhY3RvcjtcclxuICAgICAgICAgICAgY29uc3QgZ00zID0gKChyLmdyYXZlbFdoZWVsYmFycm93cyB8fCAwKSAqIChyLnNhY2tzVXNlZCB8fCAwKSkgLyB3YkZhY3RvcjtcclxuICAgICAgICAgICAgY29uc3Qgc00zID0gKChyLnNhbmRXaGVlbGJhcnJvd3MgfHwgMCkgKiAoci5zYWNrc1VzZWQgfHwgMCkpIC8gd2JGYWN0b3I7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRNYXRDb3N0ID0gY29uZmlnID8gKFxyXG4gICAgICAgICAgICAgICAgKHIuY2VtZW50VXNlZCB8fCByLnNhY2tzVXNlZCB8fCAwKSAqIGNvbmZpZy5jZW1lbnRQcmljZSArXHJcbiAgICAgICAgICAgICAgICBjTTMgKiBjb25maWcuY29uY2Fzc2VQcmljZSArXHJcbiAgICAgICAgICAgICAgICBnTTMgKiBjb25maWcuZ3JhdmVsUHJpY2UgK1xyXG4gICAgICAgICAgICAgICAgc00zICogY29uZmlnLnNhbmRQcmljZVxyXG4gICAgICAgICAgICApIDogMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChyLnRvdGFsTWF0Q29zdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBNb2Rlcm4gc3RydWN0dXJlZCBydW5zOiB0cnVzdCBVU0QgY29tcG9uZW50cyBjb21wbGV0ZWx5LCBidXQgZ3VhcmQgYWdhaW5zdCB6ZXJvL2NvcnJ1cHQgbWF0ZXJpYWwgY29zdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VtZW50VGhyZXNob2xkID0gKHIuc2Fja3NVc2VkIHx8IDEpICogKGNvbmZpZz8uY2VtZW50UHJpY2UgfHwgMCkgKiAwLjk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF0Q29zdCA9IHBhcnNlRmxvYXQoci50b3RhbE1hdENvc3QgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Q29zdCA8IGNlbWVudFRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdENvc3QgPSBjYWxjdWxhdGVkTWF0Q29zdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJhc2VDb3N0ID0gbWF0Q29zdCArIHBhcnNlRmxvYXQoci5sYWJvclBvdFVTRCB8fCAwKTtcclxuICAgICAgICAgICAgICAgIG92ZXJoZWFkU2hhcmUgPSBwYXJzZUZsb2F0KHIub3ZlcmhlYWRTbmFwc2hvdCB8fCByLm92ZXJoZWFkU2hhcmVVU0QgfHwgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoci5pc0ZpbmFsaXplZENvc3QpIHtcclxuICAgICAgICAgICAgICAgIC8vIHYyLjUuOS1TVEFCTEU6IFRydXN0IHRoZSBjYXB0dXJlZCB0b3RhbENvc3QgYW5kIG92ZXJoZWFkU2hhcmVcclxuICAgICAgICAgICAgICAgIGJhc2VDb3N0ID0gcGFyc2VGbG9hdChyLnRvdGFsQ29zdCB8fCAwKSAtIHBhcnNlRmxvYXQoci5vdmVyaGVhZFNoYXJlVVNEIHx8IDApO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmhlYWRTaGFyZSA9IHBhcnNlRmxvYXQoci5vdmVyaGVhZFNoYXJlVVNEIHx8IDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHIudG90YWxDb3N0ICYmIHBhcnNlRmxvYXQoci50b3RhbENvc3QpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSGlzdG9yaWNhbCBjb252ZXJzaW9uOiBpZiA+IDIwMDAwLCBpdCdzIEZDLCBvdGhlcndpc2UgVVNEXHJcbiAgICAgICAgICAgICAgICBjb25zdCByYXdDb3N0ID0gcGFyc2VGbG9hdChyLnRvdGFsQ29zdCk7XHJcbiAgICAgICAgICAgICAgICBiYXNlQ29zdCA9IHJhd0Nvc3QgPiAyMDAwMCA/IChyYXdDb3N0IC8gcG9zUmF0ZSkgOiByYXdDb3N0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sgZm9yIHZlcnkgb2xkIHJlY29yZHMgd2l0aG91dCB0b3RhbENvc3RcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1peGVyU2hhcmUgPSAoci5zYWNrc1VzZWQgfHwgMCkgKiAoY29uZmlnPy5taXhlclJhdGVQZXJTYWNrIHx8IDMwMCk7XHJcbiAgICAgICAgICAgICAgICBiYXNlQ29zdCA9IGNhbGN1bGF0ZWRNYXRDb3N0ICsgKCgoci5sYWJvclBvdCB8fCAwKSArIG1peGVyU2hhcmUpIC8gcG9zUmF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0b3RhbEJsb2NrcyA9IHBhcnNlSW50KHIudG90YWxCbG9ja3MgfHwgMCk7XHJcbiAgICAgICAgICAgIGlmICh0b3RhbEJsb2NrcyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxCbG9ja3MgPSAoci5zYWNrRGV0YWlscyB8fCBbXSkucmVkdWNlKChhLCBiKSA9PiBhICsgKHBhcnNlSW50KGIpIHx8IDApLCAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uciwgYmFzZUNvc3RVU0Q6IGJhc2VDb3N0LCBvdmVyaGVhZFNoYXJlVVNEOiBvdmVyaGVhZFNoYXJlLCB0b3RhbEJsb2NrcyB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBHcm91cCBieSBkYXRlIHRvIGNvdW50IHVuaXF1ZSBtYWNoaW5lcyBmb3Igb3ZlcmhlYWQgc2hhcmluZyAoYWxsLXRpbWUgdG8gYmUgbWF0aGVtYXRpY2FsbHkgYWNjdXJhdGUpXHJcbiAgICAgICAgY29uc3QgbWFjaGluZXNCeURhdGUgPSB7fTtcclxuICAgICAgICBhbGxQcm9kdWN0aW9uc0VucmljaGVkLmZvckVhY2gocCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbWFjaGluZXNCeURhdGVbcC5kYXRlXSkgbWFjaGluZXNCeURhdGVbcC5kYXRlXSA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgbWFjaGluZXNCeURhdGVbcC5kYXRlXS5hZGQocC5tYWNoaW5lTm8pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBkYWlseU92ZXJoZWFkID0gKGZpeGVkTW9udGhseSArIHNoYXJlZE1vbnRobHkpIC8gMjY7XHJcblxyXG4gICAgICAgIC8vIFByZS1jYWxjdWxhdGUgbWFjaGluZSBydW4gY291bnRzIHRvIGF2b2lkIE8oTl4yKSBmaWx0ZXIgaW5zaWRlIG1hcFxyXG4gICAgICAgIGNvbnN0IHJ1bnNDb3VudE1hcCA9IHt9O1xyXG4gICAgICAgIGFsbFByb2R1Y3Rpb25zRW5yaWNoZWQuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gYCR7ci5kYXRlfV8ke3IubWFjaGluZU5vfWA7XHJcbiAgICAgICAgICAgIHJ1bnNDb3VudE1hcFtrZXldID0gKHJ1bnNDb3VudE1hcFtrZXldIHx8IDApICsgMTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxsUHJvZHVjdGlvbnNXaXRoQ29zdCA9IGFsbFByb2R1Y3Rpb25zRW5yaWNoZWQubWFwKHAgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2hhcmVGb3JUaGlzUnVuID0gMDtcclxuICAgICAgICAgICAgaWYgKHAub3ZlcmhlYWRTaGFyZVVTRCAmJiBwYXJzZUZsb2F0KHAub3ZlcmhlYWRTaGFyZVVTRCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzaGFyZUZvclRoaXNSdW4gPSBwYXJzZUZsb2F0KHAub3ZlcmhlYWRTaGFyZVVTRCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocC5pc0ZpbmFsaXplZENvc3QpIHtcclxuICAgICAgICAgICAgICAgIHNoYXJlRm9yVGhpc1J1biA9IHBhcnNlRmxvYXQocC5vdmVyaGVhZFNoYXJlVVNEIHx8IDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYCR7cC5kYXRlfV8ke3AubWFjaGluZU5vfWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBydW5zRm9yTWFjaGluZU9uRGF0ZSA9IHJ1bnNDb3VudE1hcFtrZXldIHx8IDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYWNoaW5lc09uRGF0ZUNvdW50ID0gbWFjaGluZXNCeURhdGVbcC5kYXRlXT8uc2l6ZSB8fCAxO1xyXG4gICAgICAgICAgICAgICAgc2hhcmVGb3JUaGlzUnVuID0gZGFpbHlPdmVyaGVhZCAvIChtYWNoaW5lc09uRGF0ZUNvdW50ICogcnVuc0Zvck1hY2hpbmVPbkRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4ucCxcclxuICAgICAgICAgICAgICAgIHRvdGFsQ29zdDogKHAuYmFzZUNvc3RVU0QgKyBzaGFyZUZvclRoaXNSdW4pLnRvRml4ZWQoMiksXHJcbiAgICAgICAgICAgICAgICB0b3RhbE92ZXJoZWFkU2hhcmVVU0Q6IHNoYXJlRm9yVGhpc1J1bi50b0ZpeGVkKDIpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3Rpb25zRmlsdGVyZWQgPSBmaWx0ZXJCeURhdGUoYWxsUHJvZHVjdGlvbnNXaXRoQ29zdCkuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSkpO1xyXG5cclxuICAgICAgICBjb25zdCBzYWxlc0ZpbHRlcmVkID0gZmlsdGVyQnlEYXRlKGFsbFNhbGVzKTtcclxuICAgICAgICBjb25zdCBkYW1hZ2VzRmlsdGVyZWQgPSBmaWx0ZXJCeURhdGUoYWxsRGFtYWdlcyk7XHJcblxyXG4gICAgICAgIC8vIEFsbC10aW1lIFN0b2NrIENhbGN1bGF0aW9ucyAoRW5zdXJpbmcgYWxsIGFyZSBudW1lcmljKVxyXG4gICAgICAgIGNvbnN0IHByb2R1Y2VkQWxsVGltZSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHNvbGRBbGxUaW1lID0ge307XHJcbiAgICAgICAgY29uc3QgZGFtYWdlZEFsbFRpbWUgPSB7fTtcclxuICAgICAgICBhbGxQcm9kdWN0aW9uc0VucmljaGVkLmZvckVhY2gocCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBwLmJsb2NrVHlwZSB8fCBcIlVua25vd25cIjtcclxuICAgICAgICAgICAgcHJvZHVjZWRBbGxUaW1lW3R5cGVdID0gKHByb2R1Y2VkQWxsVGltZVt0eXBlXSB8fCAwKSArIChwYXJzZUludChwLnRvdGFsQmxvY2tzKSB8fCAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbGxTYWxlcy5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gcy5ibG9ja1R5cGUgfHwgXCJVbmtub3duXCI7XHJcbiAgICAgICAgICAgIHNvbGRBbGxUaW1lW3R5cGVdID0gKHNvbGRBbGxUaW1lW3R5cGVdIHx8IDApICsgKHBhcnNlSW50KHMucXVhbnRpdHlTb2xkKSB8fCAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbGxEYW1hZ2VzLmZvckVhY2goZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBkLmJsb2NrVHlwZSB8fCBcIlVua25vd25cIjtcclxuICAgICAgICAgICAgZGFtYWdlZEFsbFRpbWVbdHlwZV0gPSAoZGFtYWdlZEFsbFRpbWVbdHlwZV0gfHwgMCkgKyAocGFyc2VJbnQoZC5kYW1hZ2VkQmxvY2tzKSB8fCAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxsVHlwZXMgPSBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLk9iamVjdC5rZXlzKHByb2R1Y2VkQWxsVGltZSksIC4uLk9iamVjdC5rZXlzKHNvbGRBbGxUaW1lKSwgLi4uT2JqZWN0LmtleXMoZGFtYWdlZEFsbFRpbWUpXSkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0ICE9PSBcIlVua25vd25cIik7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBhbGwtdGltZSBhdmVyYWdlIGNvc3QgZmFsbGJhY2sgZm9yIGVhY2ggYmxvY2sgdHlwZVxyXG4gICAgICAgIGNvbnN0IGFsbFRpbWVDb3N0TWFwID0ge307XHJcbiAgICAgICAgY29uc3QgYWxsVGltZVByb2R1Y2VkTWFwID0ge307XHJcbiAgICAgICAgYWxsUHJvZHVjdGlvbnNXaXRoQ29zdC5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gcC5ibG9ja1R5cGUgfHwgXCJVbmtub3duXCI7XHJcbiAgICAgICAgICAgIGFsbFRpbWVDb3N0TWFwW3R5cGVdID0gKGFsbFRpbWVDb3N0TWFwW3R5cGVdIHx8IDApICsgcGFyc2VGbG9hdChwLnRvdGFsQ29zdCB8fCAwKTtcclxuICAgICAgICAgICAgYWxsVGltZVByb2R1Y2VkTWFwW3R5cGVdID0gKGFsbFRpbWVQcm9kdWNlZE1hcFt0eXBlXSB8fCAwKSArIChwYXJzZUludChwLnRvdGFsQmxvY2tzKSB8fCAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxsVGltZUF2Z0Nvc3RNYXAgPSB7fTtcclxuICAgICAgICBhbGxUeXBlcy5mb3JFYWNoKHR5cGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWNlZCA9IGFsbFRpbWVQcm9kdWNlZE1hcFt0eXBlXSB8fCAwO1xyXG4gICAgICAgICAgICBjb25zdCBjb3N0ID0gYWxsVGltZUNvc3RNYXBbdHlwZV0gfHwgMDtcclxuICAgICAgICAgICAgYWxsVGltZUF2Z0Nvc3RNYXBbdHlwZV0gPSBwcm9kdWNlZCA+IDAgPyAoY29zdCAvIHByb2R1Y2VkKSA6IDA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFBlcmlvZC1zcGVjaWZpYyBhZ2dyZWdhdGVzIGZvciBJbnZlbnRvcnkgVGFibGVcclxuICAgICAgICBjb25zdCBwcm9kdWNlZEluUGVyaW9kID0ge307XHJcbiAgICAgICAgY29uc3Qgc29sZEluUGVyaW9kID0ge307XHJcbiAgICAgICAgY29uc3QgZGFtYWdlZEluUGVyaW9kID0ge307XHJcbiAgICAgICAgY29uc3QgY29zdEluUGVyaW9kID0ge307XHJcblxyXG4gICAgICAgIHByb2R1Y3Rpb25zRmlsdGVyZWQuZm9yRWFjaChwID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHAuYmxvY2tUeXBlIHx8IFwiVW5rbm93blwiO1xyXG4gICAgICAgICAgICBwcm9kdWNlZEluUGVyaW9kW3R5cGVdID0gKHByb2R1Y2VkSW5QZXJpb2RbdHlwZV0gfHwgMCkgKyAocGFyc2VJbnQocC50b3RhbEJsb2NrcykgfHwgMCk7XHJcbiAgICAgICAgICAgIGNvc3RJblBlcmlvZFt0eXBlXSA9IChjb3N0SW5QZXJpb2RbdHlwZV0gfHwgMCkgKyBwYXJzZUZsb2F0KHAudG90YWxDb3N0IHx8IDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNhbGVzRmlsdGVyZWQuZm9yRWFjaChzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHMuYmxvY2tUeXBlIHx8IFwiVW5rbm93blwiO1xyXG4gICAgICAgICAgICBzb2xkSW5QZXJpb2RbdHlwZV0gPSAoc29sZEluUGVyaW9kW3R5cGVdIHx8IDApICsgKHBhcnNlSW50KHMucXVhbnRpdHlTb2xkKSB8fCAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkYW1hZ2VzRmlsdGVyZWQuZm9yRWFjaChkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGQuYmxvY2tUeXBlIHx8IFwiVW5rbm93blwiO1xyXG4gICAgICAgICAgICBkYW1hZ2VkSW5QZXJpb2RbdHlwZV0gPSAoZGFtYWdlZEluUGVyaW9kW3R5cGVdIHx8IDApICsgKHBhcnNlSW50KGQuZGFtYWdlZEJsb2NrcykgfHwgMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdGFsUHJvZHVjZWRJblBlcmlvZCA9IHByb2R1Y3Rpb25zRmlsdGVyZWQucmVkdWNlKChzLCBwKSA9PiBzICsgKHAudG90YWxCbG9ja3MgfHwgMCksIDApO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsU29sZEluUGVyaW9kID0gc2FsZXNGaWx0ZXJlZC5yZWR1Y2UoKHMsIHNsKSA9PiBzICsgKHBhcnNlSW50KHNsLnF1YW50aXR5U29sZCkgfHwgMCksIDApO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsRGFtYWdlZEluUGVyaW9kID0gZGFtYWdlc0ZpbHRlcmVkLnJlZHVjZSgocywgZCkgPT4gcyArIChwYXJzZUludChkLmRhbWFnZWRCbG9ja3MpIHx8IDApLCAwKTtcclxuICAgICAgICBjb25zdCB0b3RhbFNhY2tzSW5QZXJpb2QgPSBwcm9kdWN0aW9uc0ZpbHRlcmVkLnJlZHVjZSgocywgcCkgPT4gcyArIChwYXJzZUludChwLnNhY2tzVXNlZCkgfHwgMCksIDApO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUmV2ZW51ZUluUGVyaW9kID0gc2FsZXNGaWx0ZXJlZC5yZWR1Y2UoKHMsIHNsKSA9PiBzICsgKHBhcnNlRmxvYXQoc2wudG90YWxBbW91bnQpIHx8IDApLCAwKTtcclxuICAgICAgICBjb25zdCB0b3RhbENvc3RJblBlcmlvZCA9IHByb2R1Y3Rpb25zRmlsdGVyZWQucmVkdWNlKChzLCBwKSA9PiBzICsgcGFyc2VGbG9hdChwLnRvdGFsQ29zdCB8fCAwKSwgMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkSGlzdG9yeSA9IHNlYXJjaFRlcm0gPyBwcm9kdWN0aW9uc0ZpbHRlcmVkLmZpbHRlcihwID0+XHJcbiAgICAgICAgICAgIChwLmJsb2NrVHlwZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgKHAubWFjaGluZU5vIHx8IFwiXCIpLnRvU3RyaW5nKCkuaW5jbHVkZXMoc2VhcmNoVGVybSlcclxuICAgICAgICApIDogcHJvZHVjdGlvbnNGaWx0ZXJlZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhdHM6IHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJvZHVjZWQ6IHRvdGFsUHJvZHVjZWRJblBlcmlvZCxcclxuICAgICAgICAgICAgICAgIHRvdGFsU29sZDogdG90YWxTb2xkSW5QZXJpb2QsXHJcbiAgICAgICAgICAgICAgICB0b3RhbERhbWFnZWQ6IHRvdGFsRGFtYWdlZEluUGVyaW9kLFxyXG4gICAgICAgICAgICAgICAgZWZmaWNpZW5jeTogdG90YWxTYWNrc0luUGVyaW9kID4gMCA/ICh0b3RhbFByb2R1Y2VkSW5QZXJpb2QgLyB0b3RhbFNhY2tzSW5QZXJpb2QpLnRvRml4ZWQoMSkgOiAwLFxyXG4gICAgICAgICAgICAgICAgdG90YWxSZXZlbnVlOiB0b3RhbFJldmVudWVJblBlcmlvZCxcclxuICAgICAgICAgICAgICAgIHRvdGFsQ29zdDogdG90YWxDb3N0SW5QZXJpb2QsXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZUNvc3Q6IHByb2R1Y3Rpb25zRmlsdGVyZWQucmVkdWNlKChzLCBwKSA9PiBzICsgcGFyc2VGbG9hdChwLmJhc2VDb3N0VVNEIHx8IDApLCAwKSxcclxuICAgICAgICAgICAgICAgIGZpeGVkT3ZlcmhlYWQ6IHByb2R1Y3Rpb25zRmlsdGVyZWQucmVkdWNlKChzLCBwKSA9PiBzICsgcGFyc2VGbG9hdChwLnRvdGFsT3ZlcmhlYWRTaGFyZVVTRCB8fCAwKSwgMCksXHJcbiAgICAgICAgICAgICAgICBuZXRQcm9maXRVU0Q6ICh0b3RhbFJldmVudWVJblBlcmlvZCAtIHRvdGFsQ29zdEluUGVyaW9kKS50b0ZpeGVkKDIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGludmVudG9yeTogYWxsVHlwZXMubWFwKHR5cGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjZWRUb3RhbCA9IHByb2R1Y2VkQWxsVGltZVt0eXBlXSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc29sZFRvdGFsID0gc29sZEFsbFRpbWVbdHlwZV0gfHwgMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhbWFnZWRUb3RhbCA9IGRhbWFnZWRBbGxUaW1lW3R5cGVdIHx8IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcFByb2R1Y2VkID0gcHJvZHVjZWRJblBlcmlvZFt0eXBlXSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcENvc3QgPSBjb3N0SW5QZXJpb2RbdHlwZV0gfHwgMDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJpb2RBdmdDb3N0ID0gcFByb2R1Y2VkID4gMCA/IChwQ29zdCAvIHBQcm9kdWNlZCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXZnQ29zdCA9IHBlcmlvZEF2Z0Nvc3QgPiAwID8gcGVyaW9kQXZnQ29zdCA6IChhbGxUaW1lQXZnQ29zdE1hcFt0eXBlXSB8fCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjZWQ6IHBQcm9kdWNlZCxcclxuICAgICAgICAgICAgICAgICAgICBzb2xkOiBzb2xkSW5QZXJpb2RbdHlwZV0gfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICBkYW1hZ2VkOiBkYW1hZ2VkSW5QZXJpb2RbdHlwZV0gfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICBzdG9jazogcHJvZHVjZWRUb3RhbCAtIHNvbGRUb3RhbCAtIGRhbWFnZWRUb3RhbCxcclxuICAgICAgICAgICAgICAgICAgICBhdmdDb3N0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KS5zb3J0KChhLCBiKSA9PiBiLnN0b2NrIC0gYS5zdG9jayksXHJcbiAgICAgICAgICAgIHByb2R1Y3Rpb25IaXN0b3J5OiBmaWx0ZXJlZEhpc3RvcnkubWFwKHAgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBwLmlkIHx8IHAuX2lkLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogcC5kYXRlLFxyXG4gICAgICAgICAgICAgICAgbWFjaGluZU5vOiBwLm1hY2hpbmVObyxcclxuICAgICAgICAgICAgICAgIGJsb2NrVHlwZTogcC5ibG9ja1R5cGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbEJsb2NrczogcC50b3RhbEJsb2NrcyxcclxuICAgICAgICAgICAgICAgIHRvdGFsQ29zdDogcC50b3RhbENvc3QsXHJcbiAgICAgICAgICAgICAgICB1bml0Q29zdDogKHBhcnNlRmxvYXQocC50b3RhbENvc3QpIC8gKHBhcnNlSW50KHAudG90YWxCbG9ja3MpIHx8IDEpKS50b0ZpeGVkKDIpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbcmF3UmVjZW50UHJvZHVjdGlvbnMsIGFsbFNhbGVzLCBhbGxEYW1hZ2VzLCBjb25maWcsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcG9zUmF0ZSwgc2VhcmNoVGVybV0pO1xyXG5cclxuICAgIGNvbnN0IHsgc3RhdHMsIGludmVudG9yeSwgcHJvZHVjdGlvbkhpc3RvcnkgfSA9IG1lbW9pemVkRGF0YTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6ICcxMDAlJywgbWluSGVpZ2h0OiAnMTAwdmgnLCBvdmVyZmxvd1g6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgc3g9e3sgekluZGV4OiAodGhlbWUpID0+IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0gZWRnZT1cInN0YXJ0XCIgc3g9e3sgbXI6IDIgfX0+PE1lbnVJY29uIC8+PC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcCBzeD17eyBmbGV4R3JvdzogMSB9fT5CbG9jayBGYWN0b3J5IEludmVudG9yeSAmIEFuYWx5dGljczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwZXJzaXN0ZW50XCJcclxuICAgICAgICAgICAgICAgIGFuY2hvcj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgb3Blbj17c2lkZUJhcn1cclxuICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiBkcmF3ZXJXaWR0aCwgZmxleFNocmluazogMCwgJyYgLk11aURyYXdlci1wYXBlcic6IHsgd2lkdGg6IGRyYXdlcldpZHRoLCBib3hTaXppbmc6ICdib3JkZXItYm94JyB9IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyIC8+PEJveCBzeD17eyBvdmVyZmxvdzogJ2F1dG8nIH19PjxMaXN0PjxTaWRlYmFyRGFzaCAvPjwvTGlzdD48L0JveD5cclxuICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICAgIDxNYWluQ29udGVudCBvcGVuPXtzaWRlQmFyfT5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IG10OiAyLCB3aWR0aDogJzEwMCUnLCBweDogMCwgbTogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3g9e3sgbWI6IDMgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgc3g9e3sgcDogMiwgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoc3RhcnREYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV3VmFsdWUpID0+IHNldFN0YXJ0RGF0ZShuZXdWYWx1ZSA/IG5ld1ZhbHVlLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJERC9NTS9ZWVlZXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RQcm9wcz17eyB0ZXh0RmllbGQ6IHsgc2l6ZTogJ3NtYWxsJyB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PnRvPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbmQgRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoZW5kRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5ld1ZhbHVlKSA9PiBzZXRFbmREYXRlKG5ld1ZhbHVlID8gbmV3VmFsdWUuZm9ybWF0KCdZWVlZLU1NLUREJykgOiBcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIkREL01NL1lZWVlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFByb3BzPXt7IHRleHRGaWVsZDogeyBzaXplOiAnc21hbGwnIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgYmdjb2xvcjogJyNlM2YyZmQnLCBib3hTaGFkb3c6IDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBndXR0ZXJCb3R0b20+VG90YWwgUHJvZHVjZWQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdGF0cy50b3RhbFByb2R1Y2VkLnRvTG9jYWxlU3RyaW5nKCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGJnY29sb3I6ICcjZmZmM2UwJywgYm94U2hhZG93OiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgZ3V0dGVyQm90dG9tPlRvdGFsIFNvbGQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntzdGF0cy50b3RhbFNvbGQudG9Mb2NhbGVTdHJpbmcoKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgYmdjb2xvcjogJyNmZmViZWUnLCBib3hTaGFkb3c6IDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBndXR0ZXJCb3R0b20+VG90YWwgRGFtYWdlZDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3N0YXRzLnRvdGFsRGFtYWdlZC50b0xvY2FsZVN0cmluZygpfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBiZ2NvbG9yOiAnI2U4ZjVlOScsIGJveFNoYWRvdzogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGd1dHRlckJvdHRvbT5Ub3RhbCBSZXZlbnVlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjb2xvcj1cInN1Y2Nlc3MubWFpblwiPiR7KHN0YXRzLnRvdGFsUmV2ZW51ZSB8fCAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBiZ2NvbG9yOiAnI2ZmZjNlMCcsIGJveFNoYWRvdzogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGd1dHRlckJvdHRvbT5Ub3RhbCBJbnZlc3RtZW50ICYgQ29zdGluZyAoUGVyaW9kKTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+JHsoc3RhdHMudG90YWxDb3N0IHx8IDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzeD17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBkaXNwbGF5PVwiYmxvY2tcIj5WYXJpYWJsZTogPGI+JHsoc3RhdHMudmFyaWFibGVDb3N0IHx8IDApLnRvTG9jYWxlU3RyaW5nKCl9PC9iPjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGRpc3BsYXk9XCJibG9ja1wiPkZpeGVkOiA8Yj4keyhzdGF0cy5maXhlZE92ZXJoZWFkIHx8IDApLnRvTG9jYWxlU3RyaW5nKCl9PC9iPjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBiZ2NvbG9yOiAnI2UwZjJmMScsIGJveFNoYWRvdzogMiwgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDRkNDAnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgZ3V0dGVyQm90dG9tPkVzdGltYXRlZCBQcm9maXQgKFBlcmlvZCk8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgY29sb3I6ICgoc3RhdHMudG90YWxSZXZlbnVlIHx8IDApIC0gKHN0YXRzLnRvdGFsQ29zdCB8fCAwKSkgPj0gMCA/ICdzdWNjZXNzLm1haW4nIDogJ2Vycm9yLm1haW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsoKHN0YXRzLnRvdGFsUmV2ZW51ZSB8fCAwKSAtIChzdGF0cy50b3RhbENvc3QgfHwgMCkpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiPlJldmVudWUgLSAoVmFyaWFibGUgKyBGaXhlZCBDb3N0cyk8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIHN4PXt7IHA6IDIsIGJvcmRlclJhZGl1czogMiwgYm94U2hhZG93OiAzIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbT5JbnZlbnRvcnkgYnkgQmxvY2sgVHlwZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQgc3g9e3sgYmdjb2xvcjogJyNlZWUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5CbG9jayBUeXBlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkF2ZXJhZ2UgQ29zdC9CbG9jayAoJCk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+UHJvZHVjZWQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+U29sZDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5EYW1hZ2VkPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5JbiBTdG9jazwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBtaW5XaWR0aDogMTIwIH19PlBoeXNpY2FsIENvdW50PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5WYXJpYW5jZSAoUmVzdCk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZlbnRvcnkubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93LnR5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LnR5cGV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj4keyhyb3cuYXZnQ29zdCB8fCAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57KHJvdy5wcm9kdWNlZCB8fCAwKS50b0xvY2FsZVN0cmluZygpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+eyhyb3cuc29sZCB8fCAwKS50b0xvY2FsZVN0cmluZygpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+eyhyb3cuZGFtYWdlZCB8fCAwKS50b0xvY2FsZVN0cmluZygpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eyhyb3cuc3RvY2sgfHwgMCkudG9Mb2NhbGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3Jvdy5zdG9jayA+IDAgPyBcInN1Y2Nlc3NcIiA6IFwiZXJyb3JcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBtaW5XaWR0aDogNzAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3R1YWxDb3VudHNbcm93LnR5cGVdICE9PSB1bmRlZmluZWQgPyBhY3R1YWxDb3VudHNbcm93LnR5cGVdIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ291bnRDaGFuZ2Uocm93LnR5cGUsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJnY29sb3I6ICcjZmZmJywgYm9yZGVyUmFkaXVzOiAxIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdHVhbENvdW50c1tyb3cudHlwZV0gIT09IHVuZGVmaW5lZCAmJiBhY3R1YWxDb3VudHNbcm93LnR5cGVdICE9PSAnJyA/ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAocGFyc2VJbnQoYWN0dWFsQ291bnRzW3Jvdy50eXBlXSkgfHwgMCkgLSByb3cuc3RvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtkaWZmIDwgMCA/ICdlcnJvci5tYWluJyA6IChkaWZmID4gMCA/ICdzdWNjZXNzLm1haW4nIDogJ3RleHQuc2Vjb25kYXJ5Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpZmYgPiAwID8gJysnIDogJyd9e2RpZmYudG9Mb2NhbGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpIDogJy0nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBzeD17eyBwOiAzLCBiZ2NvbG9yOiAnI2Y1ZjVmNScsIGJvcmRlclJhZGl1czogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBndXR0ZXJCb3R0b20+VG90YWwgSW52ZXN0bWVudCAmIENvc3Rpbmc8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIG1iOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Qcm9kdWN0aW9uIENvc3RzIChNYXRlcmlhbHMgKyBPdmVyaGVhZHMgKyBMYWJvcik6PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBmb250V2VpZ2h0PVwiYm9sZFwiPiR7KHN0YXRzLnRvdGFsQ29zdCB8fCAwKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBjb2xvcjogc3RhdHMudG90YWxSZXZlbnVlIC0gc3RhdHMudG90YWxDb3N0ID49IDAgPyAnc3VjY2Vzcy5tYWluJyA6ICdlcnJvci5tYWluJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+RXN0aW1hdGVkIFByb2ZpdDo8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+JHsoKHN0YXRzLnRvdGFsUmV2ZW51ZSB8fCAwKSAtIChzdGF0cy50b3RhbENvc3QgfHwgMCkpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgc3g9e3sgcDogMiwgbXQ6IDMsIGJvcmRlclJhZGl1czogMiwgYm94U2hhZG93OiAzIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWI6IDIsIGZsZXhXcmFwOiAnd3JhcCcsIGdhcDogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+UHJvZHVjdGlvbiBDb3N0IEhpc3Rvcnk8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBIaXN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWFjaGluZSBvciBCbG9jayBUeXBlLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1pbldpZHRoOiAzNTAsIGJnY29sb3I6ICcjZjFmM2Y0JywgYm9yZGVyUmFkaXVzOiAxIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gc3g9e3sgY29sb3I6ICdhY3Rpb24uYWN0aXZlJywgbXI6IDEsIGZvbnRTaXplOiAyMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBzeD17eyBiZ2NvbG9yOiAnI2VlZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkRhdGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5CbG9jayBUeXBlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkJsb2NrcyBQcm9kdWNlZDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5Ub3RhbCBDb3N0ICgkKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5Db3N0IHBlciBCbG9jayAoJCk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0aW9uSGlzdG9yeS5tYXAoKHJ1biwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3J1bi5faWQgfHwgcnVuLmlkIHx8IGlkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntkYXlqcyhydW4uZGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntydW4uYmxvY2tUeXBlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+eyhydW4udG90YWxCbG9ja3MgfHwgMCkudG9Mb2NhbGVTdHJpbmcoKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPiR7cGFyc2VGbG9hdChydW4udG90YWxDb3N0IHx8IDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7KHJ1bi50b3RhbEJsb2NrcyA+IDAgPyAocGFyc2VGbG9hdChydW4udG90YWxDb3N0IHx8IDApIC8gcnVuLnRvdGFsQmxvY2tzKSA6IDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9NYWluQ29udGVudD5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2NrVHJhY2tpbmdWaWV3O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJTaWRlYmFyRGFzaCIsInVzZVNlbGVjdG9yIiwic2VsZWN0Q3VycmVudFVzZXIiLCJ1c2VOYXZpZ2F0ZSIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwidG9hc3QiLCJDb250YWluZXIiLCJUeXBvZ3JhcGh5IiwiUGFwZXIiLCJHcmlkIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIkNzc0Jhc2VsaW5lIiwiQXBwQmFyIiwiVG9vbGJhciIsIkRyYXdlciIsIkRpdmlkZXIiLCJMaXN0IiwiVGFibGVDb250YWluZXIiLCJCb3giLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJJY29uQnV0dG9uIiwiVGV4dEZpZWxkIiwiQ2hpcCIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsIk1lbnVJY29uIiwiU2VhcmNoSWNvbiIsInN0eWxlZCIsImRheWpzIiwiZHJhd2VyV2lkdGgiLCJNYWluQ29udGVudCIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWYiLCJ0aGVtZSIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiZmxleEdyb3ciLCJwYWRkaW5nIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiY29uY2F0IiwiZWFzZU91dCIsImVudGVyaW5nU2NyZWVuIiwiQmxvY2tUcmFja2luZ1ZpZXciLCJuYXZpZ2F0ZSIsInVzZXIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzaWRlQmFyIiwic2V0U2lkZUJhciIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImFjdHVhbENvdW50cyIsInNldEFjdHVhbENvdW50cyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiZm9jdXNlZEZpZWxkIiwic2V0Rm9jdXNlZEZpZWxkIiwiaGFuZGxlQ291bnRDaGFuZ2UiLCJ0eXBlIiwidmFsdWUiLCJwcmV2IiwidG9nZ2xlRHJhd2VyIiwiZmV0Y2hBY2Nlc3MiLCJfcmVmMiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlcyRkYXRhIiwicmVzIiwiZ2V0IiwidXNlckFjY2VzcyIsImRhdGEiLCJmaW5kIiwicm93IiwidXNlcklEIiwiaWQiLCJpc0dHIiwidXNlck5hbWUiLCJfdXNlckFjY2VzcyRtb2R1bGVzJGYiLCJibG9ja0FjY2VzcyIsIm1vZHVsZXMiLCJtIiwibW9kdWxlTmFtZSIsImFjY2VzcyIsInJlYWRNIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsInJhd1JlY2VudFByb2R1Y3Rpb25zIiwic2V0UmF3UmVjZW50UHJvZHVjdGlvbnMiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJhbGxTYWxlcyIsInNldEFsbFNhbGVzIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImFsbERhbWFnZXMiLCJzZXRBbGxEYW1hZ2VzIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImNvbmZpZyIsInNldENvbmZpZyIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJwb3NSYXRlIiwic2V0UG9zUmF0ZSIsImZldGNoQWxsRGF0YSIsIl9yZWYzIiwiX3lpZWxkJFByb21pc2UkYWxsIiwiUHJvbWlzZSIsImFsbCIsIl95aWVsZCRQcm9taXNlJGFsbDIiLCJydW5zIiwic2FsZXMiLCJkbWdzIiwiY2ZnIiwicmF0ZXMiLCJsZW5ndGgiLCJfcmF0ZXMkZGF0YSIsInJhdGVSIiwiZXJyIiwiX3VzZVN0YXRlMTciLCJzdWJ0cmFjdCIsImZvcm1hdCIsIl91c2VTdGF0ZTE4Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwibWVtb2l6ZWREYXRhIiwiZml4ZWRNb250aGx5IiwicGFyc2VGbG9hdCIsInJlbnRQcmljZSIsInRheGVzUHJpY2UiLCJzaGFyZWRNb250aGx5IiwiZnVlbFByaWNlIiwidHJhbnNwb3J0UHJpY2UiLCJjb21taXNzaW9uUHJpY2UiLCJzdXBlcnZpc29yU2FsYXJ5Iiwic3RhZmZXYWdlcyIsImZpbHRlckJ5RGF0ZSIsImFyciIsImZpbHRlciIsIml0ZW0iLCJpdGVtRGF0ZSIsImRhdGUiLCJhbGxQcm9kdWN0aW9uc0VucmljaGVkIiwibWFwIiwiciIsImJhc2VDb3N0Iiwib3ZlcmhlYWRTaGFyZSIsIndiRmFjdG9yIiwid2hlZWxiYXJyb3dQZXJNMyIsImNNMyIsImNvbmNhc3NlV2hlZWxiYXJyb3dzIiwic2Fja3NVc2VkIiwiZ00zIiwiZ3JhdmVsV2hlZWxiYXJyb3dzIiwic00zIiwic2FuZFdoZWVsYmFycm93cyIsImNhbGN1bGF0ZWRNYXRDb3N0IiwiY2VtZW50VXNlZCIsImNlbWVudFByaWNlIiwiY29uY2Fzc2VQcmljZSIsImdyYXZlbFByaWNlIiwic2FuZFByaWNlIiwidG90YWxNYXRDb3N0IiwidW5kZWZpbmVkIiwiY2VtZW50VGhyZXNob2xkIiwibWF0Q29zdCIsImxhYm9yUG90VVNEIiwib3ZlcmhlYWRTbmFwc2hvdCIsIm92ZXJoZWFkU2hhcmVVU0QiLCJpc0ZpbmFsaXplZENvc3QiLCJ0b3RhbENvc3QiLCJyYXdDb3N0IiwibWl4ZXJTaGFyZSIsIm1peGVyUmF0ZVBlclNhY2siLCJsYWJvclBvdCIsInRvdGFsQmxvY2tzIiwicGFyc2VJbnQiLCJzYWNrRGV0YWlscyIsInJlZHVjZSIsImEiLCJiIiwiYmFzZUNvc3RVU0QiLCJtYWNoaW5lc0J5RGF0ZSIsImZvckVhY2giLCJwIiwiU2V0IiwiYWRkIiwibWFjaGluZU5vIiwiZGFpbHlPdmVyaGVhZCIsInJ1bnNDb3VudE1hcCIsImtleSIsImFsbFByb2R1Y3Rpb25zV2l0aENvc3QiLCJzaGFyZUZvclRoaXNSdW4iLCJfbWFjaGluZXNCeURhdGUkcCRkYXQiLCJydW5zRm9yTWFjaGluZU9uRGF0ZSIsIm1hY2hpbmVzT25EYXRlQ291bnQiLCJzaXplIiwidG9GaXhlZCIsInRvdGFsT3ZlcmhlYWRTaGFyZVVTRCIsInByb2R1Y3Rpb25zRmlsdGVyZWQiLCJzb3J0IiwiRGF0ZSIsInNhbGVzRmlsdGVyZWQiLCJkYW1hZ2VzRmlsdGVyZWQiLCJwcm9kdWNlZEFsbFRpbWUiLCJzb2xkQWxsVGltZSIsImRhbWFnZWRBbGxUaW1lIiwiYmxvY2tUeXBlIiwicyIsInF1YW50aXR5U29sZCIsImQiLCJkYW1hZ2VkQmxvY2tzIiwiYWxsVHlwZXMiLCJBcnJheSIsImZyb20iLCJPYmplY3QiLCJrZXlzIiwidCIsImFsbFRpbWVDb3N0TWFwIiwiYWxsVGltZVByb2R1Y2VkTWFwIiwiYWxsVGltZUF2Z0Nvc3RNYXAiLCJwcm9kdWNlZCIsImNvc3QiLCJwcm9kdWNlZEluUGVyaW9kIiwic29sZEluUGVyaW9kIiwiZGFtYWdlZEluUGVyaW9kIiwiY29zdEluUGVyaW9kIiwidG90YWxQcm9kdWNlZEluUGVyaW9kIiwidG90YWxTb2xkSW5QZXJpb2QiLCJzbCIsInRvdGFsRGFtYWdlZEluUGVyaW9kIiwidG90YWxTYWNrc0luUGVyaW9kIiwidG90YWxSZXZlbnVlSW5QZXJpb2QiLCJ0b3RhbEFtb3VudCIsInRvdGFsQ29zdEluUGVyaW9kIiwiZmlsdGVyZWRIaXN0b3J5IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInRvU3RyaW5nIiwic3RhdHMiLCJ0b3RhbFByb2R1Y2VkIiwidG90YWxTb2xkIiwidG90YWxEYW1hZ2VkIiwiZWZmaWNpZW5jeSIsInRvdGFsUmV2ZW51ZSIsInZhcmlhYmxlQ29zdCIsImZpeGVkT3ZlcmhlYWQiLCJuZXRQcm9maXRVU0QiLCJpbnZlbnRvcnkiLCJwcm9kdWNlZFRvdGFsIiwic29sZFRvdGFsIiwiZGFtYWdlZFRvdGFsIiwicFByb2R1Y2VkIiwicENvc3QiLCJwZXJpb2RBdmdDb3N0IiwiYXZnQ29zdCIsInNvbGQiLCJkYW1hZ2VkIiwic3RvY2siLCJwcm9kdWN0aW9uSGlzdG9yeSIsIl9pZCIsInVuaXRDb3N0IiwiY3JlYXRlRWxlbWVudCIsInN4IiwiZGlzcGxheSIsIndpZHRoIiwibWluSGVpZ2h0Iiwib3ZlcmZsb3dYIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJkcmF3ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm9uQ2xpY2siLCJlZGdlIiwibXIiLCJ2YXJpYW50Iiwibm9XcmFwIiwiYW5jaG9yIiwiZmxleFNocmluayIsImJveFNpemluZyIsIm92ZXJmbG93IiwibXQiLCJweCIsImNvbnRhaW5lciIsInNwYWNpbmciLCJtYiIsInhzIiwic20iLCJhbGlnbkl0ZW1zIiwiZ2FwIiwiZGF0ZUFkYXB0ZXIiLCJsYWJlbCIsIm9uQ2hhbmdlIiwibmV3VmFsdWUiLCJzbG90UHJvcHMiLCJ0ZXh0RmllbGQiLCJiZ2NvbG9yIiwiYm94U2hhZG93IiwiZ3V0dGVyQm90dG9tIiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJ0ZXh0QWxpZ24iLCJib3JkZXIiLCJmb250V2VpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYWxpZ24iLCJtaW5XaWR0aCIsInBsYWNlaG9sZGVyIiwiZSIsInRhcmdldCIsImRpZmYiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwiSW5wdXRQcm9wcyIsInN0YXJ0QWRvcm5tZW50IiwiZm9udFNpemUiLCJydW4iLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9