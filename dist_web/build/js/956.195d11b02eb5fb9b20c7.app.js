"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[956],{

/***/ 64745
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
var _default = exports.A = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), 'Search');

/***/ },

/***/ 956
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4640);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32005);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47767);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99380);
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46986);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71510);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14519);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89828);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8532);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88248);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(49799);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(37636);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(33198);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(64137);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(96627);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(86798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(70691);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(43884);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(82022);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(844);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(75737);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(601);
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(48484);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(62274);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(95236);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(3100);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(40301);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(64745);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(11848);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_38__);
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
var MainContent = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Ay)('main', {
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
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .useNavigate */ .Zp)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_3__/* .selectCurrentUser */ .xu);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__/* .useDispatch */ .wA)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    sideBar = _useState2[0],
    setSideBar = _useState2[1];
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_3__/* .logOut */ .je)());
    navigate('/');
  };
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
          var res = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_6__/* .cachedGet */ .Fe)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_7__/* .ENDPOINT_URL */ .m, "/grantAccess"));
          var userAccess = (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.find(row => row.userID === user.data.id);
          var isGG = user.data.userName === 'GG';
          if (userAccess) {
            var _userAccess$modules$f;
            var blockAccess = (_userAccess$modules$f = userAccess.modules.find(m => m.moduleName === 'Block-Factory')) === null || _userAccess$modules$f === void 0 ? void 0 : _userAccess$modules$f.access;
            if (!isGG && !(blockAccess !== null && blockAccess !== void 0 && blockAccess.readM)) {
              react_toastify__WEBPACK_IMPORTED_MODULE_8__/* .toast */ .oR.error("You don't have permission to access Inventory.");
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
        var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_7__/* .ENDPOINT_URL */ .m, "/block-production")), axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_7__/* .ENDPOINT_URL */ .m, "/block-sales")), axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_7__/* .ENDPOINT_URL */ .m, "/block-damage")), axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_7__/* .ENDPOINT_URL */ .m, "/block-config")), axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_7__/* .ENDPOINT_URL */ .m, "/rateReturn"))]),
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
        react_toastify__WEBPACK_IMPORTED_MODULE_8__/* .toast */ .oR.error("Failed to load live data from server.");
      }
    });
    return function fetchAllData() {
      return _ref3.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchAllData();
  }, []);
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_38___default()().subtract(30, 'day').format('YYYY-MM-DD')),
    _useState18 = _slicedToArray(_useState17, 2),
    startDate = _useState18[0],
    setStartDate = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_38___default()().format('YYYY-MM-DD')),
    _useState20 = _slicedToArray(_useState19, 2),
    endDate = _useState20[0],
    setEndDate = _useState20[1];
  var memoizedData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    // Monthly Fixed Overheads (Strictly Rent & Taxes)
    var fixedMonthly = config ? parseFloat(config.rentPrice || 0) + parseFloat(config.taxesPrice || 0) : 0;
    var sharedMonthly = config ? parseFloat(config.fuelPrice || 0) + parseFloat(config.transportPrice || 0) + parseFloat(config.commissionPrice || 0) + parseFloat(config.supervisorSalary || 0) + parseFloat(config.staffWages || 0) : 0;
    var filterByDate = arr => arr.filter(item => {
      var itemDate = item.date ? dayjs__WEBPACK_IMPORTED_MODULE_38___default()(item.date).format('YYYY-MM-DD') : '';
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      width: '100%',
      minHeight: '100vh',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    position: "fixed",
    sx: {
      zIndex: theme => theme.zIndex.drawer + 1,
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    color: "inherit",
    onClick: toggleDrawer,
    edge: "start",
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "h6",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Block Factory Inventory & Analytics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MainContent, {
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      mt: 2,
      width: '100%',
      px: 0,
      m: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2,
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    sx: {
      p: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_29__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_30__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_31__/* .DatePicker */ .l, {
    label: "Start Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_38___default()(startDate),
    onChange: newValue => setStartDate(newValue ? newValue.format('YYYY-MM-DD') : ""),
    format: "DD/MM/YYYY",
    slotProps: {
      textField: {
        size: 'small'
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, "to"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_31__/* .DatePicker */ .l, {
    label: "End Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_38___default()(endDate),
    onChange: newValue => setEndDate(newValue ? newValue.format('YYYY-MM-DD') : ""),
    format: "DD/MM/YYYY",
    slotProps: {
      textField: {
        size: 'small'
      }
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    sx: {
      bgcolor: '#e3f2fd',
      boxShadow: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    color: "textSecondary",
    gutterBottom: true
  }, "Total Produced"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "h4"
  }, stats.totalProduced.toLocaleString())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    sx: {
      bgcolor: '#fff3e0',
      boxShadow: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    color: "textSecondary",
    gutterBottom: true
  }, "Total Sold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "h4"
  }, stats.totalSold.toLocaleString())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    sx: {
      bgcolor: '#ffebee',
      boxShadow: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    color: "textSecondary",
    gutterBottom: true
  }, "Total Damaged"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "h4"
  }, stats.totalDamaged.toLocaleString())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    sx: {
      bgcolor: '#e8f5e9',
      boxShadow: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    color: "textSecondary",
    gutterBottom: true
  }, "Total Revenue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "h4",
    color: "success.main"
  }, "$", (stats.totalRevenue || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    sx: {
      bgcolor: '#fff3e0',
      boxShadow: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    color: "textSecondary",
    gutterBottom: true
  }, "Total Investment & Costing (Period)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "h5"
  }, "$", (stats.totalCost || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    item: true,
    xs: 6,
    sx: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "caption",
    display: "block"
  }, "Variable: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "$", (stats.variableCost || 0).toLocaleString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "caption",
    display: "block"
  }, "Fixed: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "$", (stats.fixedOverhead || 0).toLocaleString()))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    sx: {
      bgcolor: '#e0f2f1',
      boxShadow: 2,
      border: '2px solid #004d40'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    color: "textSecondary",
    gutterBottom: true
  }, "Estimated Profit (Period)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "h4",
    sx: {
      fontWeight: 'bold',
      color: (stats.totalRevenue || 0) - (stats.totalCost || 0) >= 0 ? 'success.main' : 'error.main'
    }
  }, "$", ((stats.totalRevenue || 0) - (stats.totalCost || 0)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "caption"
  }, "Revenue - (Variable + Fixed Costs)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    sx: {
      p: 2,
      borderRadius: 2,
      boxShadow: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "h6",
    gutterBottom: true
  }, "Inventory by Block Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
    sx: {
      bgcolor: '#eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, null, "Block Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, "Average Cost/Block ($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, "Produced"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, "Sold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, "Damaged"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "In Stock"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "center",
    sx: {
      fontWeight: 'bold',
      minWidth: 120
    }
  }, "Physical Count"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "Variance (Rest)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, null, inventory.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    key: row.type
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, null, row.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, "$", (row.avgCost || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, (row.produced || 0).toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, (row.sold || 0).toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, (row.damaged || 0).toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    label: (row.stock || 0).toLocaleString(),
    color: row.stock > 0 ? "success" : "error",
    variant: "outlined",
    size: "small",
    sx: {
      fontWeight: 'bold',
      minWidth: 70
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, actualCounts[row.type] !== undefined && actualCounts[row.type] !== '' ? (() => {
    var diff = (parseInt(actualCounts[row.type]) || 0) - row.stock;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      variant: "body2",
      fontWeight: "bold",
      color: diff < 0 ? 'error.main' : diff > 0 ? 'success.main' : 'text.secondary'
    }, diff > 0 ? '+' : '', diff.toLocaleString());
  })() : '-')))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    sx: {
      p: 3,
      bgcolor: '#f5f5f5',
      borderRadius: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "h6",
    gutterBottom: true
  }, "Total Investment & Costing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, "Production Costs (Materials + Overheads + Labor):"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    fontWeight: "bold"
  }, "$", (stats.totalCost || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      color: stats.totalRevenue - stats.totalCost >= 0 ? 'success.main' : 'error.main'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "h6"
  }, "Estimated Profit:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "h6",
    fontWeight: "bold"
  }, "$", ((stats.totalRevenue || 0) - (stats.totalCost || 0)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    sx: {
      p: 2,
      mt: 3,
      borderRadius: 2,
      boxShadow: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 2,
      flexWrap: 'wrap',
      gap: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "h6"
  }, "Production Cost History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, {
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
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {
        sx: {
          color: 'action.active',
          mr: 1,
          fontSize: 20
        }
      })
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
    sx: {
      bgcolor: '#eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, null, "Block Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, "Blocks Produced"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, "Total Cost ($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, "Cost per Block ($)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, null, productionHistory.map((run, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    key: run._id || run.id || idx
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, null, dayjs__WEBPACK_IMPORTED_MODULE_38___default()(run.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, null, run.blockType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, (run.totalBlocks || 0).toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, "$", parseFloat(run.totalCost || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    align: "right"
  }, "$", (run.totalBlocks > 0 ? parseFloat(run.totalCost || 0) / run.totalBlocks : 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))))))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockTrackingView);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);