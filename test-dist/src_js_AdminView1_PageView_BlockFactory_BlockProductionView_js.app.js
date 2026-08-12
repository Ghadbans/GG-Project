"use strict";
exports.id = "src_js_AdminView1_PageView_BlockFactory_BlockProductionView_js";
exports.ids = ["src_js_AdminView1_PageView_BlockFactory_BlockProductionView_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/Save.js"
/*!**************************************************!*\
  !*** ./node_modules/@mui/icons-material/Save.js ***!
  \**************************************************/
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
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"
}), 'Save');

/***/ },

/***/ "./src/js/AdminView1/PageView/BlockFactory/BlockProductionView.js"
/*!************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/BlockFactory/BlockProductionView.js ***!
  \************************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ToggleButton/ToggleButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/Save */ "./node_modules/@mui/icons-material/Save.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
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



















dayjs__WEBPACK_IMPORTED_MODULE_35___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_36___default()));

// Global helper to parse dates robustly across formats
var parseDate = d => {
  if (!d) return dayjs__WEBPACK_IMPORTED_MODULE_35___default()(null);
  if (typeof d === 'string') {
    var formats = ['YYYY-MM-DD', 'DD/MM/YYYY', 'D/M/YYYY', 'DD-MM-YYYY', 'DD/MM/YY', 'D/M/YY', 'YYYY-MM-DDTHH:mm:ss.SSSZ'];
    var parsed = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(d, formats, true);
    if (!parsed.isValid()) parsed = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(d); // Fallback to native
    return parsed;
  }
  return dayjs__WEBPACK_IMPORTED_MODULE_35___default()(d);
};
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
function BlockProductionView() {
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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    grantAccess = _useState6[0],
    setGrantAccess = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchAccess = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/grantAccess"));
          var userAccess = (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.find(row => row.userID === user.data.id);
          if (userAccess) {
            var _userAccess$modules$f;
            setGrantAccess(userAccess.modules);
            var blockAccess = (_userAccess$modules$f = userAccess.modules.find(m => m.moduleName === 'Block-Factory')) === null || _userAccess$modules$f === void 0 ? void 0 : _userAccess$modules$f.access;
            var isGG = user.data.userName === 'GG';
            if (!isGG && !(blockAccess !== null && blockAccess !== void 0 && blockAccess.createM)) {
              react_toastify__WEBPACK_IMPORTED_MODULE_34__.toast.error("You don't have permission to access Production.");
              navigate('/AdminHome');
            }
          } else if (user.data.userName !== 'GG') {
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
  var fetchPosRate = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      try {
        var _res$data$data$;
        var res = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/rateReturn"));
        return parseFloat((_res$data$data$ = res.data.data[0]) === null || _res$data$data$ === void 0 ? void 0 : _res$data$data$.rateR) || 1;
      } catch (err) {
        console.error('Error fetching rate:', err);
        return 2800; // Fallback
      }
    });
    return function fetchPosRate() {
      return _ref3.apply(this, arguments);
    };
  }();
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      date: dayjs__WEBPACK_IMPORTED_MODULE_35___default()().format('YYYY-MM-DD'),
      machineNo: "",
      operatorName: "",
      helper1: "",
      helper2: "",
      helper3: "",
      halfDayOperator: false,
      halfDayHelper1: false,
      halfDayHelper2: false,
      halfDayHelper3: false,
      blockType: "",
      sacksUsed: 0,
      sackDetails: [],
      // Array of block counts per sack
      cementUsed: 0,
      concasseWheelbarrows: 0,
      gravelWheelbarrows: 0,
      sandWheelbarrows: 0,
      laborPot: 0
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    productionData = _useState8[0],
    setProductionData = _useState8[1];
  // Unified Date range for production logs - Default to Today
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_35___default()().format('YYYY-MM-DD')),
    _useState0 = _slicedToArray(_useState9, 2),
    fromDate = _useState0[0],
    setFromDate = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_35___default()().format('YYYY-MM-DD')),
    _useState10 = _slicedToArray(_useState1, 2),
    toDate = _useState10[0],
    setToDate = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2800),
    _useState12 = _slicedToArray(_useState11, 2),
    posRate = _useState12[0],
    setPosRate = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isSubmitting = _useState14[0],
    setIsSubmitting = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    configs = _useState16[0],
    setConfigs = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    rawRecentProductions = _useState18[0],
    setRawRecentProductions = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    dailyProductions = _useState20[0],
    setDailyProductions = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    dailyMixerWorkers = _useState22[0],
    setDailyMixerWorkers = _useState22[1];
  var toggleDrawer = () => setSideBar(!sideBar);

  // Generic refetcher for system sync
  var fetchMisc = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* () {
      var rate = yield fetchPosRate();
      setPosRate(rate);
      try {
        // Fetch Config
        var configRes = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/block-config"));
        if (configRes.data && configRes.data.data && Array.isArray(configRes.data.data)) {
          var configArr = configRes.data.data;
          var config = configArr.find(c => c.blockType === "GLOBAL") || configArr[0];
          setConfigs(config);
        }

        // Fetch Recent Productions for Logs
        var prodRes = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/block-production"));
        if (prodRes.data.data) setRawRecentProductions(prodRes.data.data);
        var res = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/employee"));
        var allEmployees = res.data.data;
        var uniqueNames = new Set();
        var factoryEmployees = allEmployees.filter(e => {
          var isFactory = e.department && e.department.toUpperCase().includes('FACTORY');
          var isActive = e.status !== 'Fired' && e.status !== 'Resign';
          if (isFactory && isActive && !uniqueNames.has(e.employeeName)) {
            uniqueNames.add(e.employeeName);
            return true;
          }
          return false;
        });
        setEmployees(factoryEmployees.length > 0 ? factoryEmployees : allEmployees.filter(e => e.status !== 'Fired' && e.status !== 'Resign'));
      } catch (err) {
        console.error('Error fetching misc data:', err);
      }
    });
    return function fetchMisc() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchMisc();
  }, []);

  // Update Daily states when date or raw data changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (rawRecentProductions.length > 0) {
      setDailyProductions(rawRecentProductions.filter(p => p.date === productionData.date));
    }
  }, [productionData.date, rawRecentProductions]);

  // Per-worker share calculator (mirrors WorkerPaymentView logic)
  var calculateWorkerShare = (typeStr, s, e, half) => {
    var rates = (configs === null || configs === void 0 ? void 0 : configs.laborRates) || {
      rate50_33: {
        perSack: 10000
      },
      rate20: {
        t1_sacks: 6,
        t1_rate: 9000,
        t2_sacks: 7,
        t2_rate: 16500,
        t3_sacks: 8,
        t3_rate: 19000,
        t4_sacks: 12,
        t4_rate: 21500,
        t5_rate: 24500
      },
      rate15: {
        t1_sacks: 5,
        t1_rate: 9000,
        t2_sacks: 6,
        t2_rate: 16500,
        t3_sacks: 7,
        t3_rate: 19000,
        t4_sacks: 10,
        t4_rate: 21500,
        t5_rate: 24500
      },
      rate14: {
        t1_sacks: 6,
        t1_rate: 9000,
        t2_sacks: 7,
        t2_rate: 17000,
        t3_sacks: 8,
        t3_rate: 19500,
        t4_sacks: 9,
        t4_rate: 22000,
        t5_rate: 24500
      },
      rate12: {
        t1_sacks: 6,
        t1_rate: 9000,
        t2_sacks: 7,
        t2_rate: 17000,
        t3_sacks: 8,
        t3_rate: 19500,
        t4_sacks: 9,
        t4_rate: 22000,
        t5_rate: 24500
      },
      rate10: {
        t1_sacks: 6,
        t1_rate: 9000,
        t2_sacks: 7,
        t2_rate: 17000,
        t3_sacks: 8,
        t3_rate: 19500,
        t4_sacks: 9,
        t4_rate: 22000,
        t5_rate: 24500
      }
    };
    if (!typeStr) return 0;
    if (typeStr.includes('50') || typeStr.includes('33')) {
      var tot = s * rates.rate50_33.perSack;
      return half ? tot / 2 : tot / Math.max(e, 1);
    }
    var rt = null,
      limitSacks = 0;
    if (typeStr.includes('20')) {
      rt = (rates === null || rates === void 0 ? void 0 : rates.rate20) || {};
    } else if (typeStr.includes('15')) {
      rt = (rates === null || rates === void 0 ? void 0 : rates.rate15) || {};
    } else if (typeStr.includes('14')) {
      rt = (rates === null || rates === void 0 ? void 0 : rates.rate14) || (rates === null || rates === void 0 ? void 0 : rates.rate10_14_12) || {};
    } else if (typeStr.includes('12')) {
      rt = (rates === null || rates === void 0 ? void 0 : rates.rate12) || (rates === null || rates === void 0 ? void 0 : rates.rate10_14_12) || {};
    } else if (typeStr.includes('10')) {
      rt = (rates === null || rates === void 0 ? void 0 : rates.rate10) || (rates === null || rates === void 0 ? void 0 : rates.rate10_14_12) || {};
    } else return 0;
    limitSacks = rt.t2_sacks || 0;
    var effectiveSacks = half ? Math.min(s, limitSacks) : s;
    var rate = 0;
    if (effectiveSacks <= (rt.t1_sacks || 0)) rate = (rt.t1_rate || 0) * s;else if (effectiveSacks <= (rt.t2_sacks || 0)) rate = rt.t2_rate || 0;else if (effectiveSacks === (rt.t3_sacks || 0)) rate = rt.t3_rate || 0;else if (effectiveSacks <= (rt.t4_sacks || 0)) rate = rt.t4_rate || 0;else rate = rt.t5_rate || 0;
    return half ? rate / 2 : rate;
  };
  var recentProductions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!rawRecentProductions) return [];

    // Apply Date Filter
    var filteredProductions = rawRecentProductions;
    if (fromDate && toDate) {
      var fD = parseDate(fromDate).startOf('day');
      var tD = parseDate(toDate).endOf('day');
      if (fD.isValid() && tD.isValid() && !fD.isAfter(tD)) {
        filteredProductions = rawRecentProductions.filter(r => {
          var d = parseDate(r.date);
          return (d.isSame(fD, 'day') || d.isAfter(fD)) && (d.isSame(tD, 'day') || d.isBefore(tD));
        });
      } else {
        filteredProductions = [];
      }
    } else {
      filteredProductions = [];
    }
    var pricing = configs;
    var fixedMonthly = pricing ? (parseFloat(pricing.rentPrice) || 0) + (parseFloat(pricing.taxesPrice) || 0) : 0;
    var sharedMonthly = pricing ? (parseFloat(pricing.fuelPrice) || 0) + (parseFloat(pricing.transportPrice) || 0) + (parseFloat(pricing.commissionPrice) || 0) + (parseFloat(pricing.supervisorSalary) || 0) + (parseFloat(pricing.staffWages) || 0) : 0;
    var dailyOverhead = (fixedMonthly + sharedMonthly) / 26;
    return filteredProductions.map(r => {
      var cM3 = (r.concasseWheelbarrows || 0) * (r.sacksUsed || 0) / 15;
      var gM3 = (r.gravelWheelbarrows || 0) * (r.sacksUsed || 0) / 15;
      var sM3 = (r.sandWheelbarrows || 0) * (r.sacksUsed || 0) / 15;

      // 1. Labor Calculation (Prioritize saved laborPot for historical accuracy)
      var opShare = r.operatorName ? calculateWorkerShare(r.blockType, r.sacksUsed, 3, !!r.halfDayOperator) : 0;
      var h1Share = r.helper1 ? calculateWorkerShare(r.blockType, r.sacksUsed, 3, !!r.halfDayHelper1) : 0;
      var h2Share = r.helper2 ? calculateWorkerShare(r.blockType, r.sacksUsed, 3, !!r.halfDayHelper2) : 0;
      var h3Share = r.helper3 ? calculateWorkerShare(r.blockType, r.sacksUsed, 3, !!r.halfDayHelper3) : 0;
      var mixerShare = (r.sacksUsed || 0) * ((pricing === null || pricing === void 0 ? void 0 : pricing.mixerRatePerSack) || 300);
      var crewOnlyFC = opShare + h1Share + h2Share + h3Share;
      var fullCrewAndMixerFC = crewOnlyFC + mixerShare;
      var laborFC = 0;
      if (r.laborPot) {
        // Backwards-compatible detection: Check if saved laborPot includes or excludes mixer share
        var oldSchemaDiff = Math.abs(r.laborPot - fullCrewAndMixerFC);
        var newSchemaDiff = Math.abs(r.laborPot - crewOnlyFC);
        if (newSchemaDiff < oldSchemaDiff) {
          laborFC = r.laborPot + mixerShare; // New schema: crew-only, so add mixer share for total cost
        } else {
          laborFC = r.laborPot; // Old schema: already includes mixer share
        }
      } else {
        laborFC = fullCrewAndMixerFC;
      }

      // 2. Material Cost (Prioritize saved totalMatCost, but self-correct if abnormally low/zero)
      var calculatedMatCost = pricing ? (r.cementUsed || r.sacksUsed || 0) * (pricing.cementPrice || 0) + cM3 * (pricing.concassePrice || 0) + gM3 * (pricing.gravelPrice || 0) + sM3 * (pricing.sandPrice || 0) : 0;
      var cementThreshold = (r.sacksUsed || 1) * ((pricing === null || pricing === void 0 ? void 0 : pricing.cementPrice) || 0) * 0.9;
      var matCost = r.totalMatCost && r.totalMatCost > cementThreshold ? r.totalMatCost : calculatedMatCost;
      var baseCost = matCost + laborFC / posRate;

      // 2. Stable Overhead Allocation (Prioritize saved snapshot for history)
      var machinesOnDate = new Set(rawRecentProductions.filter(rec => rec.date === r.date).map(rec => rec.machineNo));
      var totalMachinesOnDate = machinesOnDate.size || 1;
      var overheadShare = r.overheadSnapshot || dailyOverhead / totalMachinesOnDate;

      // Final Total Cost (Prioritize saved totalCost if available)
      var finalTotalCost = r.totalCost || baseCost + overheadShare;
      return _objectSpread(_objectSpread({}, r), {}, {
        totalCost: parseFloat(finalTotalCost).toFixed(2)
      });
    });
  }, [rawRecentProductions, fromDate, toDate, configs, posRate]);
  var productionSummary = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var totalSacks = 0;
    var blocksByType = {};
    recentProductions.forEach(r => {
      var sacks = parseInt(r.sacksUsed) || 0;
      var blocks = parseInt(r.totalBlocks) || 0;
      totalSacks += sacks;
      var type = r.blockType || 'Unknown';
      if (!blocksByType[type]) blocksByType[type] = 0;
      blocksByType[type] += blocks;
    });
    return {
      totalSacks,
      blocksByType
    };
  }, [recentProductions]);

  // Helper: compute actual total payout across all workers (respecting half-day)
  // EXCLUDES the virtual Mixer share from the live preview and saved laborPot as requested by the user
  var computeActualPot = data => {
    if (!data.blockType) return 0;
    var opShare = data.operatorName ? calculateWorkerShare(data.blockType, data.sacksUsed, 3, !!data.halfDayOperator) : 0;
    var h1Share = data.helper1 ? calculateWorkerShare(data.blockType, data.sacksUsed, 3, !!data.halfDayHelper1) : 0;
    var h2Share = data.helper2 ? calculateWorkerShare(data.blockType, data.sacksUsed, 3, !!data.halfDayHelper2) : 0;
    var h3Share = data.helper3 ? calculateWorkerShare(data.blockType, data.sacksUsed, 3, !!data.halfDayHelper3) : 0;
    return opShare + h1Share + h2Share + h3Share;
  };
  var alreadyAssigned = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var names = new Set();
    dailyProductions.forEach(r => {
      if (r.operatorName) names.add(r.operatorName);
      if (r.helper1) names.add(r.helper1);
      if (r.helper2) names.add(r.helper2);
      if (r.helper3) names.add(r.helper3);
    });
    dailyMixerWorkers.forEach(mw => {
      if (mw.workerName) names.add(mw.workerName);
    });
    return names;
  }, [dailyProductions, dailyMixerWorkers]);
  var getAvailableEmployees = currentField => {
    var currentSelections = [productionData.operatorName, productionData.helper1, productionData.helper2, productionData.helper3].filter((val, idx) => {
      var fields = ['operatorName', 'helper1', 'helper2', 'helper3'];
      return val && fields[idx] !== currentField;
    });
    return employees.filter(e => !alreadyAssigned.has(e.employeeName) && !currentSelections.includes(e.employeeName));
  };
  var handleSackChange = val => {
    var numSacks = parseInt(val) || 0;
    var newDetails = Array.from({
      length: numSacks
    }).map((_, i) => (productionData.sackDetails || [])[i] || 0);
    var updated = _objectSpread(_objectSpread({}, productionData), {}, {
      sacksUsed: numSacks,
      sackDetails: newDetails,
      cementUsed: numSacks
    });
    updated.laborPot = computeActualPot(updated);
    setProductionData(updated);
  };
  var handleSackDetailChange = (index, val) => {
    var newDetails = [...productionData.sackDetails];
    newDetails[index] = parseInt(val) || 0;
    setProductionData(_objectSpread(_objectSpread({}, productionData), {}, {
      sackDetails: newDetails
    }));
  };
  var getWeightedUnits = data => {
    var pairs = [[data.operatorName, data.halfDayOperator], [data.helper1, data.halfDayHelper1], [data.helper2, data.halfDayHelper2], [data.helper3, data.halfDayHelper3]];
    return pairs.filter(_ref5 => {
      var _ref6 = _slicedToArray(_ref5, 1),
        name = _ref6[0];
      return name;
    }).reduce((sum, _ref7) => {
      var _ref8 = _slicedToArray(_ref7, 2),
        half = _ref8[1];
      return sum + (half ? 0.5 : 1);
    }, 0);
  };
  var handlePersonnelChange = (field, value) => {
    var updated = _objectSpread(_objectSpread({}, productionData), {}, {
      [field]: value
    });
    updated.laborPot = computeActualPot(updated);
    setProductionData(updated);
  };

  // Toggle half/full day — also updates laborPot to the actual payout
  var handleHalfDayToggle = (halfDayField, value) => {
    var updated = _objectSpread(_objectSpread({}, productionData), {}, {
      [halfDayField]: value === 'half'
    });
    updated.laborPot = computeActualPot(updated);
    setProductionData(updated);
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(function* () {
      if (isSubmitting) return;

      // Validation - ensure all critical fields are filled
      var totalBlocks = (productionData.sackDetails || []).reduce((a, b) => a + (parseInt(b) || 0), 0);
      var hasMissingBlocks = productionData.sacksUsed > 0 && (productionData.sackDetails.length < productionData.sacksUsed || productionData.sackDetails.some(val => !val || parseInt(val) <= 0));
      if (!productionData.machineNo) {
        react_toastify__WEBPACK_IMPORTED_MODULE_34__.toast.warning("Please enter Machine No.");
        return;
      }
      if (!productionData.blockType) {
        react_toastify__WEBPACK_IMPORTED_MODULE_34__.toast.warning("Please select Block Type.");
        return;
      }
      if (!productionData.operatorName) {
        react_toastify__WEBPACK_IMPORTED_MODULE_34__.toast.warning("Please select an Operator.");
        return;
      }
      if (!productionData.sacksUsed || productionData.sacksUsed <= 0) {
        react_toastify__WEBPACK_IMPORTED_MODULE_34__.toast.warning("Please enter Sacks of Cement.");
        return;
      }
      if (!productionData.concasseWheelbarrows || parseFloat(productionData.concasseWheelbarrows) <= 0) {
        react_toastify__WEBPACK_IMPORTED_MODULE_34__.toast.warning("Please enter Wheelbarrow Concasse (per sack).");
        return;
      }
      if (totalBlocks <= 0) {
        react_toastify__WEBPACK_IMPORTED_MODULE_34__.toast.warning("Please enter at least one block count in Production per Sack section.");
        return;
      }
      if (hasMissingBlocks) {
        react_toastify__WEBPACK_IMPORTED_MODULE_34__.toast.warning("Some sacks are missing block counts. Please fill all sack details.");
        return;
      }
      setIsSubmitting(true);
      try {
        // 15 wheelbarrow = 1m3
        var wbFactor = (configs === null || configs === void 0 ? void 0 : configs.wheelbarrowPerM3) || 15;
        var concasseM3 = productionData.concasseWheelbarrows * productionData.sacksUsed / wbFactor;
        var gravelM3 = productionData.gravelWheelbarrows * productionData.sacksUsed / wbFactor;
        var sandM3 = productionData.sandWheelbarrows * productionData.sacksUsed / wbFactor;

        // Direct Material Cost
        var totalMatCost = 0;
        if (configs) {
          totalMatCost = (productionData.cementUsed || productionData.sacksUsed || 0) * (configs.cementPrice || 0) + concasseM3 * (configs.concassePrice || 0) + gravelM3 * (configs.gravelPrice || 0) + sandM3 * (configs.sandPrice || 0);
        }
        var _posRate = yield fetchPosRate();
        var actualLaborPot = computeActualPot(productionData); // crew-only
        var mixerShare = (productionData.sacksUsed || 0) * ((configs === null || configs === void 0 ? void 0 : configs.mixerRatePerSack) || 300);
        var totalLaborFC = actualLaborPot + mixerShare;
        var laborPotUSD = totalLaborFC / _posRate;

        // Overhead Calculation (v2.5.9-STABLE)
        // Distribute total daily overhead across all machine runs for this specific date
        var dailyOverhead = configs ? ((parseFloat(configs.rentPrice) || 0) + (parseFloat(configs.taxesPrice) || 0) + (parseFloat(configs.fuelPrice) || 0) + (parseFloat(configs.transportPrice) || 0) + (parseFloat(configs.commissionPrice) || 0) + (parseFloat(configs.supervisorSalary) || 0) + (parseFloat(configs.staffWages) || 0)) / 26 : 0;

        // Stable Overhead Allocation (DIVIDE BY NUMBER OF MACHINES)
        var machinesOnDateSnapshot = new Set(rawRecentProductions.filter(rec => rec.date === productionData.date).map(rec => rec.machineNo));
        var totalMachinesOnDate = Math.max(machinesOnDateSnapshot.size, 1);
        var overheadShare = dailyOverhead / totalMachinesOnDate;
        var serverId = productionData.id || productionData._id;
        var payload = _objectSpread(_objectSpread({}, productionData), {}, {
          totalBlocks,
          concasseM3,
          gravelM3,
          sandM3,
          laborPotUSD,
          totalMatCost,
          overheadSnapshot: overheadShare,
          totalCost: totalMatCost + laborPotUSD + overheadShare // Persist the FULL cost
        });
        if (serverId) {
          payload.id = serverId;
          payload._id = serverId;
          yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/update-block-production"), payload);
          react_toastify__WEBPACK_IMPORTED_MODULE_34__.toast.success("Production run updated successfully!");
        } else {
          yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/create-block-production"), payload);
          react_toastify__WEBPACK_IMPORTED_MODULE_34__.toast.success("Production run recorded successfully!");
        }

        // INSTANT UI SYNC - No reload
        yield fetchMisc();
        setProductionData(_objectSpread(_objectSpread({}, productionData), {}, {
          // Keep the date and other contextual fields
          machineNo: "",
          operatorName: "",
          helper1: "",
          helper2: "",
          helper3: "",
          halfDayOperator: false,
          halfDayHelper1: false,
          halfDayHelper2: false,
          halfDayHelper3: false,
          blockType: "",
          sacksUsed: 0,
          sackDetails: [],
          concasseWheelbarrows: 1,
          gravelWheelbarrows: 0.5,
          sandWheelbarrows: 0.5,
          laborPot: 0,
          id: null,
          _id: null
        }));
      } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_34__.toast.error("Error saving production run");
      } finally {
        setIsSubmitting(false);
      }
    });
    return function handleSave() {
      return _ref9.apply(this, arguments);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_29__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6",
    noWrap: true
  }, "Block Production Entry"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
      mt: 2,
      width: '100%',
      px: 0,
      m: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      p: 4,
      borderRadius: 2,
      boxShadow: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6",
    gutterBottom: true
  }, "Production Run Details - Standardized"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_38__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_39__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__.DatePicker, {
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_35___default()(productionData.date),
    onChange: newValue => setProductionData(_objectSpread(_objectSpread({}, productionData), {}, {
      date: newValue ? newValue.format('YYYY-MM-DD') : ""
    })),
    format: "DD/MM/YYYY",
    slotProps: {
      textField: {
        fullWidth: true
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    fullWidth: true,
    label: "Machine No.",
    value: productionData.machineNo,
    onChange: e => setProductionData(_objectSpread(_objectSpread({}, productionData), {}, {
      machineNo: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    fullWidth: true,
    options: ["Block 50", "Block 33", "Block 20", "Block 15", "Block 10", "Block 14", "Block 12"],
    value: productionData.blockType || null,
    onChange: (e, newValue) => handlePersonnelChange('blockType', newValue || ""),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, params, {
      label: "Block Type"
    })),
    isOptionEqualToValue: (option, value) => option === value
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      gap: 1,
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    fullWidth: true,
    options: getAvailableEmployees('operatorName'),
    getOptionLabel: option => option.employeeName || "",
    value: employees.find(e => e.employeeName === productionData.operatorName) || null,
    onChange: (e, newValue) => handlePersonnelChange('operatorName', newValue ? newValue.employeeName : ""),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, params, {
      label: "Operator"
    }))
  }), productionData.operatorName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: productionData.halfDayOperator ? 'half' : 'full',
    exclusive: true,
    onChange: (e, val) => val && handleHalfDayToggle('halfDayOperator', val),
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "full",
    sx: {
      px: 1.5,
      color: 'success.main'
    }
  }, "Full"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "half",
    sx: {
      px: 1.5,
      color: 'warning.main'
    }
  }, "\xBD Day")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      gap: 1,
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    fullWidth: true,
    options: getAvailableEmployees('helper1'),
    getOptionLabel: option => option.employeeName || "",
    value: employees.find(e => e.employeeName === productionData.helper1) || null,
    onChange: (e, newValue) => handlePersonnelChange('helper1', newValue ? newValue.employeeName : ""),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, params, {
      label: "Helper 1"
    }))
  }), productionData.helper1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: productionData.halfDayHelper1 ? 'half' : 'full',
    exclusive: true,
    onChange: (e, val) => val && handleHalfDayToggle('halfDayHelper1', val),
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "full",
    sx: {
      px: 1.5,
      color: 'success.main'
    }
  }, "Full"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "half",
    sx: {
      px: 1.5,
      color: 'warning.main'
    }
  }, "\xBD Day")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      gap: 1,
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    fullWidth: true,
    options: getAvailableEmployees('helper2'),
    getOptionLabel: option => option.employeeName || "",
    value: employees.find(e => e.employeeName === productionData.helper2) || null,
    onChange: (e, newValue) => handlePersonnelChange('helper2', newValue ? newValue.employeeName : ""),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, params, {
      label: "Helper 2"
    }))
  }), productionData.helper2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: productionData.halfDayHelper2 ? 'half' : 'full',
    exclusive: true,
    onChange: (e, val) => val && handleHalfDayToggle('halfDayHelper2', val),
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "full",
    sx: {
      px: 1.5,
      color: 'success.main'
    }
  }, "Full"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "half",
    sx: {
      px: 1.5,
      color: 'warning.main'
    }
  }, "\xBD Day")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      gap: 1,
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    fullWidth: true,
    options: getAvailableEmployees('helper3'),
    getOptionLabel: option => option.employeeName || "",
    value: employees.find(e => e.employeeName === productionData.helper3) || null,
    onChange: (e, newValue) => handlePersonnelChange('helper3', newValue ? newValue.employeeName : ""),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, params, {
      label: "Helper 3"
    }))
  }), productionData.helper3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: productionData.halfDayHelper3 ? 'half' : 'full',
    exclusive: true,
    onChange: (e, val) => val && handleHalfDayToggle('halfDayHelper3', val),
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "full",
    sx: {
      px: 1.5,
      color: 'success.main'
    }
  }, "Full"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "half",
    sx: {
      px: 1.5,
      color: 'warning.main'
    }
  }, "\xBD Day")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    sx: {
      my: 1
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    fullWidth: true,
    type: "number",
    label: "Sacks of Cement",
    value: productionData.sacksUsed,
    onChange: e => handleSackChange(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    fullWidth: true,
    type: "number",
    label: "Wheelbarrow Concasse (per Sack)",
    value: productionData.concasseWheelbarrows,
    onChange: e => setProductionData(_objectSpread(_objectSpread({}, productionData), {}, {
      concasseWheelbarrows: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    fullWidth: true,
    type: "number",
    label: "Wheelbarrow Gravel (per Sack)",
    value: productionData.gravelWheelbarrows,
    onChange: e => setProductionData(_objectSpread(_objectSpread({}, productionData), {}, {
      gravelWheelbarrows: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    fullWidth: true,
    type: "number",
    label: "Wheelbarrow Sand (per Sack)",
    value: productionData.sandWheelbarrows,
    onChange: e => setProductionData(_objectSpread(_objectSpread({}, productionData), {}, {
      sandWheelbarrows: e.target.value
    }))
  })), productionData.sacksUsed > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "subtitle2"
  }, "Production per Sack (Blocks)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    label: "Total Blocks: ".concat((productionData.sackDetails || []).reduce((sum, val) => sum + (parseInt(val) || 0), 0)),
    color: "primary",
    size: "small",
    sx: {
      fontWeight: 'bold'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 2
    }
  }, (productionData.sackDetails || []).map((val, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    key: idx,
    label: "Sack ".concat(idx + 1),
    size: "small",
    type: "number",
    value: val,
    onChange: e => handleSackDetailChange(idx, e.target.value),
    sx: {
      width: 100
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      p: 2,
      bgcolor: '#f0f0f0',
      borderRadius: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "caption"
  }, "Calculated Labor Pot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6",
    color: "secondary"
  }, Math.round(computeActualPot(productionData) || 0).toLocaleString(), " FC")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    fullWidth: true,
    variant: "contained",
    size: "large",
    onClick: handleSave,
    sx: {
      mt: 3,
      bgcolor: '#30368a'
    },
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_30__["default"], null),
    disabled: isSubmitting
  }, isSubmitting ? "Saving..." : productionData.id || productionData._id ? "UPDATE PRODUCTION" : "RECORD PRODUCTION"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12
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
  }, "Production Logs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      gap: 1,
      alignItems: 'center',
      p: 1,
      border: '1px solid #ddd',
      borderRadius: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "caption",
    fontWeight: "bold"
  }, "Period Filter:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_38__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_39__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__.DatePicker, {
    label: "From",
    value: fromDate ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(fromDate) : null,
    onChange: newValue => setFromDate(newValue && newValue.isValid() ? newValue.format('YYYY-MM-DD') : null),
    format: "DD/MM/YYYY",
    slotProps: {
      textField: {
        size: 'small',
        sx: {
          width: 140
        }
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__.DatePicker, {
    label: "To",
    value: toDate ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(toDate) : null,
    onChange: newValue => setToDate(newValue && newValue.isValid() ? newValue.format('YYYY-MM-DD') : null),
    format: "DD/MM/YYYY",
    slotProps: {
      textField: {
        size: 'small',
        sx: {
          width: 140
        }
      }
    }
  })))), !fromDate || !toDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    severity: "warning",
    sx: {
      mt: 2,
      bgcolor: '#fffde7',
      border: '1px solid #fff59d'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "No Filter Active:"), " Please select a date range to view production logs.") : recentProductions.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    severity: "info",
    sx: {
      mt: 2
    }
  }, "No production runs found for this period.") : null, fromDate && toDate && recentProductions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], {
    sx: {
      bgcolor: '#eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    sx: {
      fontWeight: 'bold'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    sx: {
      fontWeight: 'bold'
    }
  }, "Machine"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    sx: {
      fontWeight: 'bold'
    }
  }, "Operator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    sx: {
      fontWeight: 'bold'
    }
  }, "Block Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "Sacks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "Blocks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "Cost/Block ($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"], null, recentProductions.map(r => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    key: r.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], null, dayjs__WEBPACK_IMPORTED_MODULE_35___default()(r.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], null, r.machineNo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], null, r.operatorName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], null, r.blockType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    align: "right"
  }, r.sacksUsed), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    align: "right"
  }, r.totalBlocks), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    align: "right"
  }, "$", (r.totalBlocks > 0 ? (parseFloat(r.totalCost) || 0) / r.totalBlocks : 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    align: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: "small",
    color: "primary",
    onClick: () => setProductionData(r)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_32__["default"], {
    fontSize: "small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: "small",
    color: "error",
    onClick: /*#__PURE__*/_asyncToGenerator(function* () {
      if (window.confirm("Delete this record?")) {
        var serverId = r._id || r.id;

        // Optimistically update UI
        var backup = [...rawRecentProductions];
        setRawRecentProductions(prev => prev.filter(item => (item._id || item.id) !== serverId));
        react_toastify__WEBPACK_IMPORTED_MODULE_34__.toast.success("Record deleted");
        try {
          if (typeof serverId === 'string' && serverId.length > 10) {
            yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/delete-block-production"), {
              id: serverId
            });
          }
          // Refresh state to ensure perfect sync
          fetchMisc().catch(() => {});
        } catch (err) {
          console.error("Delete failed", err);
          react_toastify__WEBPACK_IMPORTED_MODULE_34__.toast.error("Server update failed");
          // Rollback on failure
          setRawRecentProductions(backup);
        }
      }
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_31__["default"], {
    fontSize: "small"
  })))))))), fromDate && toDate && recentProductions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      mt: 3,
      p: 2,
      bgcolor: '#f0fdf4',
      border: '1px solid #bbf7d0',
      borderRadius: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "subtitle2",
    fontWeight: "bold",
    color: "#166534",
    gutterBottom: true
  }, "Period Summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    spacing: 2,
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "body2",
    color: "#15803d"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Total Cement Sacks:"), " ", productionSummary.totalSacks)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    sm: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      gap: 1,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "body2",
    color: "#15803d"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Blocks Produced:")), Object.entries(productionSummary.blocksByType).map(_ref1 => {
    var _ref10 = _slicedToArray(_ref1, 2),
      type = _ref10[0],
      count = _ref10[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      key: type,
      label: "".concat(type, ": ").concat(count.toLocaleString()),
      size: "small",
      sx: {
        bgcolor: '#dcfce7',
        color: '#166534',
        fontWeight: 'bold'
      }
    });
  }))))))), recentProductions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      p: 3,
      borderRadius: 2,
      boxShadow: 3,
      bgcolor: '#f9fbe7',
      border: '1px solid #c5e1a5'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mb: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6"
  }, "\uD83D\uDCCA Transparent Breakdown \u2014 Who Earned What")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    spacing: 2
  }, recentProductions.map(r => {
    var workersList = [{
      name: r.operatorName,
      half: r.halfDayOperator || false,
      role: '👷 Operator'
    }, {
      name: r.helper1,
      half: r.halfDayHelper1 || false,
      role: '🔧 Helper 1'
    }, {
      name: r.helper2,
      half: r.halfDayHelper2 || false,
      role: '🔧 Helper 2'
    }, {
      name: r.helper3,
      half: r.halfDayHelper3 || false,
      role: '🔧 Helper 3'
    }].filter(w => w.name);
    var workerCount = workersList.length;
    var rates = (configs === null || configs === void 0 ? void 0 : configs.laborRates) || {
      rate50_33: {
        perSack: 10000
      },
      rate20: {
        t1_sacks: 6,
        t1_rate: 9000,
        t2_sacks: 7,
        t2_rate: 16500,
        t3_sacks: 8,
        t3_rate: 19000,
        t4_sacks: 12,
        t4_rate: 21500,
        t5_rate: 24500
      },
      rate15: {
        t1_sacks: 5,
        t1_rate: 9000,
        t2_sacks: 6,
        t2_rate: 16500,
        t3_sacks: 7,
        t3_rate: 19000,
        t4_sacks: 10,
        t4_rate: 21500,
        t5_rate: 24500
      },
      rate14: {
        t1_sacks: 6,
        t1_rate: 9000,
        t2_sacks: 7,
        t2_rate: 17000,
        t3_sacks: 8,
        t3_rate: 19500,
        t4_sacks: 9,
        t4_rate: 22000,
        t5_rate: 24500
      },
      rate12: {
        t1_sacks: 6,
        t1_rate: 9000,
        t2_sacks: 7,
        t2_rate: 17000,
        t3_sacks: 8,
        t3_rate: 19500,
        t4_sacks: 9,
        t4_rate: 22000,
        t5_rate: 24500
      },
      rate10: {
        t1_sacks: 6,
        t1_rate: 9000,
        t2_sacks: 7,
        t2_rate: 17000,
        t3_sacks: 8,
        t3_rate: 19500,
        t4_sacks: 9,
        t4_rate: 22000,
        t5_rate: 24500
      }
    };
    var calculateWorkerShare = (typeStr, s, e, half) => {
      if (typeStr.includes("50") || typeStr.includes("33")) {
        var _rates$rate50_, _rates$rate50_2;
        return half ? s * ((rates === null || rates === void 0 || (_rates$rate50_ = rates.rate50_33) === null || _rates$rate50_ === void 0 ? void 0 : _rates$rate50_.perSack) || 0) / 2 : s * ((rates === null || rates === void 0 || (_rates$rate50_2 = rates.rate50_33) === null || _rates$rate50_2 === void 0 ? void 0 : _rates$rate50_2.perSack) || 0) / Math.max(e, 1);
      }
      var rt = null,
        limitSacks = 0;
      if (typeStr.includes("20")) {
        rt = (rates === null || rates === void 0 ? void 0 : rates.rate20) || {};
      } else if (typeStr.includes("15")) {
        rt = (rates === null || rates === void 0 ? void 0 : rates.rate15) || {};
      } else if (typeStr.includes("14")) {
        rt = (rates === null || rates === void 0 ? void 0 : rates.rate14) || (rates === null || rates === void 0 ? void 0 : rates.rate10_14_12) || {};
      } else if (typeStr.includes("12")) {
        rt = (rates === null || rates === void 0 ? void 0 : rates.rate12) || (rates === null || rates === void 0 ? void 0 : rates.rate10_14_12) || {};
      } else if (typeStr.includes("10")) {
        rt = (rates === null || rates === void 0 ? void 0 : rates.rate10) || (rates === null || rates === void 0 ? void 0 : rates.rate10_14_12) || {};
      } else return 0;
      limitSacks = rt.t2_sacks || 0;
      var effectiveSacks = half ? Math.min(s, limitSacks) : s;
      var rate = 0;
      if (effectiveSacks <= (rt.t1_sacks || 0)) rate = (rt.t1_rate || 0) * s;else if (effectiveSacks <= (rt.t2_sacks || 0)) rate = rt.t2_rate || 0;else if (effectiveSacks === (rt.t3_sacks || 0)) rate = rt.t3_rate || 0;else if (effectiveSacks <= (rt.t4_sacks || 0)) rate = rt.t4_rate || 0;else rate = rt.t5_rate || 0;
      return half ? rate / 2 : rate;
    };
    var standardSpots = 3;
    var unitShare = calculateWorkerShare(r.blockType, r.sacksUsed || 0, standardSpots, false);
    var detailedWorkers = workersList.map(w => {
      var share = w.half ? unitShare / 2 : unitShare;
      return _objectSpread(_objectSpread({}, w), {}, {
        share
      });
    });
    var machinePayout = detailedWorkers.reduce((sum, w) => sum + w.share, 0);
    var totalLaborPot = machinePayout;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      item: true,
      xs: 12,
      md: 6,
      key: r.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      sx: {
        p: 2,
        border: '1px solid #aed581',
        borderRadius: 2
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        mb: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "subtitle2",
      fontWeight: "bold"
    }, "Machine ", r.machineNo, " \u2014 ", r.blockType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "caption",
      color: "textSecondary"
    }, dayjs__WEBPACK_IMPORTED_MODULE_35___default()(r.date).format('DD/MM/YYYY'), " \xB7 ", r.sacksUsed, " sacks \xB7 ", r.totalBlocks, " blocks")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "caption",
      color: "textSecondary"
    }, "Total Labor Pot (incl. Mixer)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "body1",
      fontWeight: "bold",
      color: "success.main"
    }, Math.round(totalLaborPot || 0).toLocaleString(), " FC"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: {
        my: 1
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "caption",
      color: "textSecondary",
      display: "block",
      mb: 1
    }, "Unit Share: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, Math.round(unitShare).toLocaleString(), " FC"), " (based on ", standardSpots, " spots per run)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1
      }
    }, detailedWorkers.map((w, wi) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: wi,
      sx: {
        p: 1,
        bgcolor: '#e8f5e9',
        borderRadius: 1,
        border: '1px solid #a5d6a7',
        minWidth: 140
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "caption",
      color: "textSecondary"
    }, w.role), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "body2",
      fontWeight: "bold"
    }, w.name, " ", w.half && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        color: '#ff9800',
        fontSize: '0.8em'
      }
    }, "(\xBD Day)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "body2",
      color: "success.main"
    }, "+", Math.round(w.share || 0).toLocaleString(), " FC"))))));
  }))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockProductionView);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfQmxvY2tGYWN0b3J5X0Jsb2NrUHJvZHVjdGlvblZpZXdfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRCxDQUE0RDtBQUNIO0FBQ2Y7QUFDMkI7QUFDdEI7QUFNeEI7QUFDeUI7QUFDQTtBQUNGO0FBQ007QUFDSjtBQUNGO0FBRVA7QUFDYjtBQUNxQztBQUNyQztBQUNzRDtBQUNoQjtBQUNKO0FBQ1Y7QUFFbER5QyxvREFBWSxDQUFDQyx3RUFBaUIsQ0FBQzs7QUFFL0I7QUFDQSxJQUFNTyxTQUFTLEdBQUlDLENBQUMsSUFBSztFQUNyQixJQUFJLENBQUNBLENBQUMsRUFBRSxPQUFPVCw2Q0FBSyxDQUFDLElBQUksQ0FBQztFQUMxQixJQUFJLE9BQU9TLENBQUMsS0FBSyxRQUFRLEVBQUU7SUFDdkIsSUFBTUMsT0FBTyxHQUFHLENBQ1osWUFBWSxFQUNaLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixRQUFRLEVBQ1IsMEJBQTBCLENBQzdCO0lBQ0QsSUFBSUMsTUFBTSxHQUFHWCw2Q0FBSyxDQUFDUyxDQUFDLEVBQUVDLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDcEMsSUFBSSxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxDQUFDLEVBQUVELE1BQU0sR0FBR1gsNkNBQUssQ0FBQ1MsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxPQUFPRSxNQUFNO0VBQ2pCO0VBQ0EsT0FBT1gsNkNBQUssQ0FBQ1MsQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFFRCxJQUFNSSxXQUFXLEdBQUcsR0FBRztBQUV2QixJQUFNQyxXQUFXLEdBQUdoQixpRUFBTSxDQUFDLE1BQU0sRUFBRTtFQUFFaUIsaUJBQWlCLEVBQUdDLElBQUksSUFBS0EsSUFBSSxLQUFLO0FBQU8sQ0FBQyxDQUFDLENBQ2hGQyxJQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxJQUFBLENBQUxDLEtBQUs7SUFBRUMsSUFBSSxHQUFBRixJQUFBLENBQUpFLElBQUk7RUFBQSxPQUFBQyxhQUFBO0lBQ1ZDLFFBQVEsRUFBRSxDQUFDO0lBQ1hDLE9BQU8sRUFBRSxDQUFDO0lBQ1ZDLFVBQVUsRUFBRUwsS0FBSyxDQUFDTSxXQUFXLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7TUFDM0NDLE1BQU0sRUFBRVIsS0FBSyxDQUFDTSxXQUFXLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztNQUN0Q0MsUUFBUSxFQUFFVixLQUFLLENBQUNNLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDQztJQUN6QyxDQUFDLENBQUM7SUFDRkMsVUFBVSxNQUFBQyxNQUFBLENBQU1sQixXQUFXO0VBQUksR0FDM0JNLElBQUksSUFBSTtJQUNSSSxVQUFVLEVBQUVMLEtBQUssQ0FBQ00sV0FBVyxDQUFDQyxNQUFNLENBQUMsUUFBUSxFQUFFO01BQzNDQyxNQUFNLEVBQUVSLEtBQUssQ0FBQ00sV0FBVyxDQUFDRSxNQUFNLENBQUNNLE9BQU87TUFDeENKLFFBQVEsRUFBRVYsS0FBSyxDQUFDTSxXQUFXLENBQUNJLFFBQVEsQ0FBQ0s7SUFDekMsQ0FBQyxDQUFDO0lBQ0ZILFVBQVUsRUFBRTtFQUNoQixDQUFDO0FBQUEsQ0FFVCxDQUFDO0FBRUQsU0FBU0ksbUJBQW1CQSxDQUFBLEVBQUc7RUFDM0IsSUFBTUMsUUFBUSxHQUFHckUsNkRBQVcsQ0FBQyxDQUFDO0VBQzlCLElBQU1zRSxJQUFJLEdBQUd4RSx3REFBVyxDQUFDQyx1RUFBaUIsQ0FBQztFQUMzQyxJQUFBd0UsU0FBQSxHQUE4QjVFLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUE2RSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFyQ0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUMxQixJQUFBSSxVQUFBLEdBQWtDakYsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWtGLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXZDRSxTQUFTLEdBQUFELFVBQUE7SUFBRUUsWUFBWSxHQUFBRixVQUFBO0VBQzlCLElBQUFHLFVBQUEsR0FBc0NyRiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBc0YsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBM0NFLFdBQVcsR0FBQUQsVUFBQTtJQUFFRSxjQUFjLEdBQUFGLFVBQUE7RUFFbEN2RixnREFBUyxDQUFDLE1BQU07SUFDWixJQUFNMEYsV0FBVztNQUFBLElBQUFDLEtBQUEsR0FBQUMsaUJBQUEsQ0FBRyxhQUFZO1FBQzVCLElBQUk7VUFBQSxJQUFBQyxTQUFBO1VBQ0EsSUFBTUMsR0FBRyxTQUFTcEQsOENBQUssQ0FBQ3FELEdBQUcsSUFBQXhCLE1BQUEsQ0FBSXpCLHFEQUFZLGlCQUFjLENBQUM7VUFDMUQsSUFBTWtELFVBQVUsSUFBQUgsU0FBQSxHQUFHQyxHQUFHLENBQUNHLElBQUksY0FBQUosU0FBQSxnQkFBQUEsU0FBQSxHQUFSQSxTQUFBLENBQVVJLElBQUksY0FBQUosU0FBQSx1QkFBZEEsU0FBQSxDQUFnQkssSUFBSSxDQUFDQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsTUFBTSxLQUFLeEIsSUFBSSxDQUFDcUIsSUFBSSxDQUFDSSxFQUFFLENBQUM7VUFDM0UsSUFBSUwsVUFBVSxFQUFFO1lBQUEsSUFBQU0scUJBQUE7WUFDWmIsY0FBYyxDQUFDTyxVQUFVLENBQUNPLE9BQU8sQ0FBQztZQUNsQyxJQUFNQyxXQUFXLElBQUFGLHFCQUFBLEdBQUdOLFVBQVUsQ0FBQ08sT0FBTyxDQUFDTCxJQUFJLENBQUNPLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxVQUFVLEtBQUssZUFBZSxDQUFDLGNBQUFKLHFCQUFBLHVCQUE5REEscUJBQUEsQ0FBZ0VLLE1BQU07WUFDMUYsSUFBTUMsSUFBSSxHQUFHaEMsSUFBSSxDQUFDcUIsSUFBSSxDQUFDWSxRQUFRLEtBQUssSUFBSTtZQUN4QyxJQUFJLENBQUNELElBQUksSUFBSSxFQUFDSixXQUFXLGFBQVhBLFdBQVcsZUFBWEEsV0FBVyxDQUFFTSxPQUFPLEdBQUU7Y0FDaEN2RSxrREFBSyxDQUFDd0UsS0FBSyxDQUFDLGlEQUFpRCxDQUFDO2NBQzlEcEMsUUFBUSxDQUFDLFlBQVksQ0FBQztZQUMxQjtVQUNKLENBQUMsTUFBTSxJQUFJQyxJQUFJLENBQUNxQixJQUFJLENBQUNZLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDcENsQyxRQUFRLENBQUMsWUFBWSxDQUFDO1VBQzFCO1FBQ0osQ0FBQyxDQUFDLE9BQU9vQyxLQUFLLEVBQUU7VUFDWkMsT0FBTyxDQUFDRCxLQUFLLENBQUMsd0JBQXdCLEVBQUVBLEtBQUssQ0FBQztRQUNsRDtNQUNKLENBQUM7TUFBQSxnQkFsQktyQixXQUFXQSxDQUFBO1FBQUEsT0FBQUMsS0FBQSxDQUFBc0IsS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQWtCaEI7SUFDRCxJQUFJdEMsSUFBSSxDQUFDcUIsSUFBSSxDQUFDSSxFQUFFLEVBQUVYLFdBQVcsQ0FBQyxDQUFDO0VBQ25DLENBQUMsRUFBRSxDQUFDZCxJQUFJLEVBQUVELFFBQVEsQ0FBQyxDQUFDO0VBRXBCLElBQU13QyxZQUFZO0lBQUEsSUFBQUMsS0FBQSxHQUFBeEIsaUJBQUEsQ0FBRyxhQUFZO01BQzdCLElBQUk7UUFBQSxJQUFBeUIsZUFBQTtRQUNBLElBQU12QixHQUFHLFNBQVNwRCw4Q0FBSyxDQUFDcUQsR0FBRyxJQUFBeEIsTUFBQSxDQUFJekIscURBQVksZ0JBQWEsQ0FBQztRQUN6RCxPQUFPd0UsVUFBVSxFQUFBRCxlQUFBLEdBQUN2QixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFBb0IsZUFBQSx1QkFBaEJBLGVBQUEsQ0FBa0JFLEtBQUssQ0FBQyxJQUFJLENBQUM7TUFDbkQsQ0FBQyxDQUFDLE9BQU9DLEdBQUcsRUFBRTtRQUNWUixPQUFPLENBQUNELEtBQUssQ0FBQyxzQkFBc0IsRUFBRVMsR0FBRyxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLENBQUM7TUFDakI7SUFDSixDQUFDO0lBQUEsZ0JBUktMLFlBQVlBLENBQUE7TUFBQSxPQUFBQyxLQUFBLENBQUFILEtBQUEsT0FBQUMsU0FBQTtJQUFBO0VBQUEsR0FRakI7RUFDRCxJQUFBTyxVQUFBLEdBQTRDeEgsK0NBQVEsQ0FBQztNQUNqRHlILElBQUksRUFBRWxGLDZDQUFLLENBQUMsQ0FBQyxDQUFDbUYsTUFBTSxDQUFDLFlBQVksQ0FBQztNQUNsQ0MsU0FBUyxFQUFFLEVBQUU7TUFDYkMsWUFBWSxFQUFFLEVBQUU7TUFDaEJDLE9BQU8sRUFBRSxFQUFFO01BQ1hDLE9BQU8sRUFBRSxFQUFFO01BQ1hDLE9BQU8sRUFBRSxFQUFFO01BQ1hDLGVBQWUsRUFBRSxLQUFLO01BQ3RCQyxjQUFjLEVBQUUsS0FBSztNQUNyQkMsY0FBYyxFQUFFLEtBQUs7TUFDckJDLGNBQWMsRUFBRSxLQUFLO01BQ3JCQyxTQUFTLEVBQUUsRUFBRTtNQUNiQyxTQUFTLEVBQUUsQ0FBQztNQUNaQyxXQUFXLEVBQUUsRUFBRTtNQUFFO01BQ2pCQyxVQUFVLEVBQUUsQ0FBQztNQUNiQyxvQkFBb0IsRUFBRSxDQUFDO01BQ3ZCQyxrQkFBa0IsRUFBRSxDQUFDO01BQ3JCQyxnQkFBZ0IsRUFBRSxDQUFDO01BQ25CQyxRQUFRLEVBQUU7SUFDZCxDQUFDLENBQUM7SUFBQUMsVUFBQSxHQUFBOUQsY0FBQSxDQUFBMEMsVUFBQTtJQW5CS3FCLGNBQWMsR0FBQUQsVUFBQTtJQUFFRSxpQkFBaUIsR0FBQUYsVUFBQTtFQW9CeEM7RUFDQSxJQUFBRyxVQUFBLEdBQWdDL0ksK0NBQVEsQ0FBQ3VDLDZDQUFLLENBQUMsQ0FBQyxDQUFDbUYsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQUFzQixVQUFBLEdBQUFsRSxjQUFBLENBQUFpRSxVQUFBO0lBQS9ERSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBO0VBQzVCLElBQUFHLFVBQUEsR0FBNEJuSiwrQ0FBUSxDQUFDdUMsNkNBQUssQ0FBQyxDQUFDLENBQUNtRixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFBQTBCLFdBQUEsR0FBQXRFLGNBQUEsQ0FBQXFFLFVBQUE7SUFBM0RFLE1BQU0sR0FBQUQsV0FBQTtJQUFFRSxTQUFTLEdBQUFGLFdBQUE7RUFDeEIsSUFBQUcsV0FBQSxHQUE4QnZKLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUF3SixXQUFBLEdBQUExRSxjQUFBLENBQUF5RSxXQUFBO0lBQXJDRSxPQUFPLEdBQUFELFdBQUE7SUFBRUUsVUFBVSxHQUFBRixXQUFBO0VBQzFCLElBQUFHLFdBQUEsR0FBd0MzSiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBNEosV0FBQSxHQUFBOUUsY0FBQSxDQUFBNkUsV0FBQTtJQUFoREUsWUFBWSxHQUFBRCxXQUFBO0lBQUVFLGVBQWUsR0FBQUYsV0FBQTtFQUVwQyxJQUFBRyxXQUFBLEdBQThCL0osK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWdLLFdBQUEsR0FBQWxGLGNBQUEsQ0FBQWlGLFdBQUE7SUFBckNFLE9BQU8sR0FBQUQsV0FBQTtJQUFFRSxVQUFVLEdBQUFGLFdBQUE7RUFDMUIsSUFBQUcsV0FBQSxHQUF3RG5LLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFvSyxXQUFBLEdBQUF0RixjQUFBLENBQUFxRixXQUFBO0lBQTdERSxvQkFBb0IsR0FBQUQsV0FBQTtJQUFFRSx1QkFBdUIsR0FBQUYsV0FBQTtFQUNwRCxJQUFBRyxXQUFBLEdBQWdEdkssK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXdLLFdBQUEsR0FBQTFGLGNBQUEsQ0FBQXlGLFdBQUE7SUFBckRFLGdCQUFnQixHQUFBRCxXQUFBO0lBQUVFLG1CQUFtQixHQUFBRixXQUFBO0VBQzVDLElBQUFHLFdBQUEsR0FBa0QzSywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBNEssV0FBQSxHQUFBOUYsY0FBQSxDQUFBNkYsV0FBQTtJQUF2REUsaUJBQWlCLEdBQUFELFdBQUE7SUFBRUUsb0JBQW9CLEdBQUFGLFdBQUE7RUFFOUMsSUFBTUcsWUFBWSxHQUFHQSxDQUFBLEtBQU0vRixVQUFVLENBQUMsQ0FBQ0QsT0FBTyxDQUFDOztFQUUvQztFQUNBLElBQU1pRyxTQUFTO0lBQUEsSUFBQUMsS0FBQSxHQUFBdEYsaUJBQUEsQ0FBRyxhQUFZO01BQzFCLElBQU11RixJQUFJLFNBQVNoRSxZQUFZLENBQUMsQ0FBQztNQUNqQ3dDLFVBQVUsQ0FBQ3dCLElBQUksQ0FBQztNQUNoQixJQUFJO1FBQ0E7UUFDQSxJQUFNQyxTQUFTLFNBQVMxSSw4Q0FBSyxDQUFDcUQsR0FBRyxJQUFBeEIsTUFBQSxDQUFJekIscURBQVksa0JBQWUsQ0FBQztRQUNqRSxJQUFJc0ksU0FBUyxDQUFDbkYsSUFBSSxJQUFJbUYsU0FBUyxDQUFDbkYsSUFBSSxDQUFDQSxJQUFJLElBQUlvRixLQUFLLENBQUNDLE9BQU8sQ0FBQ0YsU0FBUyxDQUFDbkYsSUFBSSxDQUFDQSxJQUFJLENBQUMsRUFBRTtVQUM3RSxJQUFNc0YsU0FBUyxHQUFHSCxTQUFTLENBQUNuRixJQUFJLENBQUNBLElBQUk7VUFDckMsSUFBTXVGLE1BQU0sR0FBR0QsU0FBUyxDQUFDckYsSUFBSSxDQUFDdUYsQ0FBQyxJQUFJQSxDQUFDLENBQUNwRCxTQUFTLEtBQUssUUFBUSxDQUFDLElBQUlrRCxTQUFTLENBQUMsQ0FBQyxDQUFDO1VBQzVFcEIsVUFBVSxDQUFDcUIsTUFBTSxDQUFDO1FBQ3RCOztRQUVBO1FBQ0EsSUFBTUUsT0FBTyxTQUFTaEosOENBQUssQ0FBQ3FELEdBQUcsSUFBQXhCLE1BQUEsQ0FBSXpCLHFEQUFZLHNCQUFtQixDQUFDO1FBQ25FLElBQUk0SSxPQUFPLENBQUN6RixJQUFJLENBQUNBLElBQUksRUFBRXNFLHVCQUF1QixDQUFDbUIsT0FBTyxDQUFDekYsSUFBSSxDQUFDQSxJQUFJLENBQUM7UUFFakUsSUFBTUgsR0FBRyxTQUFTcEQsOENBQUssQ0FBQ3FELEdBQUcsSUFBQXhCLE1BQUEsQ0FBSXpCLHFEQUFZLGNBQVcsQ0FBQztRQUN2RCxJQUFNNkksWUFBWSxHQUFHN0YsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUk7UUFDbEMsSUFBTTJGLFdBQVcsR0FBRyxJQUFJQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFNQyxnQkFBZ0IsR0FBR0gsWUFBWSxDQUFDSSxNQUFNLENBQUNDLENBQUMsSUFBSTtVQUM5QyxJQUFNQyxTQUFTLEdBQUdELENBQUMsQ0FBQ0UsVUFBVSxJQUFJRixDQUFDLENBQUNFLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQztVQUNoRixJQUFNQyxRQUFRLEdBQUdMLENBQUMsQ0FBQ00sTUFBTSxLQUFLLE9BQU8sSUFBSU4sQ0FBQyxDQUFDTSxNQUFNLEtBQUssUUFBUTtVQUM5RCxJQUFJTCxTQUFTLElBQUlJLFFBQVEsSUFBSSxDQUFDVCxXQUFXLENBQUNXLEdBQUcsQ0FBQ1AsQ0FBQyxDQUFDUSxZQUFZLENBQUMsRUFBRTtZQUMzRFosV0FBVyxDQUFDYSxHQUFHLENBQUNULENBQUMsQ0FBQ1EsWUFBWSxDQUFDO1lBQy9CLE9BQU8sSUFBSTtVQUNmO1VBQ0EsT0FBTyxLQUFLO1FBQ2hCLENBQUMsQ0FBQztRQUNGbkgsWUFBWSxDQUFDeUcsZ0JBQWdCLENBQUNZLE1BQU0sR0FBRyxDQUFDLEdBQUdaLGdCQUFnQixHQUFHSCxZQUFZLENBQUNJLE1BQU0sQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNNLE1BQU0sS0FBSyxPQUFPLElBQUlOLENBQUMsQ0FBQ00sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDO01BQzFJLENBQUMsQ0FBQyxPQUFPOUUsR0FBRyxFQUFFO1FBQ1ZSLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDJCQUEyQixFQUFFUyxHQUFHLENBQUM7TUFDbkQ7SUFDSixDQUFDO0lBQUEsZ0JBaENLeUQsU0FBU0EsQ0FBQTtNQUFBLE9BQUFDLEtBQUEsQ0FBQWpFLEtBQUEsT0FBQUMsU0FBQTtJQUFBO0VBQUEsR0FnQ2Q7RUFFRGxILGdEQUFTLENBQUMsTUFBTTtJQUNaaUwsU0FBUyxDQUFDLENBQUM7RUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDOztFQUVOO0VBQ0FqTCxnREFBUyxDQUFDLE1BQU07SUFDWixJQUFJc0ssb0JBQW9CLENBQUNvQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ2pDL0IsbUJBQW1CLENBQUNMLG9CQUFvQixDQUFDeUIsTUFBTSxDQUFDWSxDQUFDLElBQUlBLENBQUMsQ0FBQ2pGLElBQUksS0FBS29CLGNBQWMsQ0FBQ3BCLElBQUksQ0FBQyxDQUFDO0lBQ3pGO0VBQ0osQ0FBQyxFQUFFLENBQUNvQixjQUFjLENBQUNwQixJQUFJLEVBQUU0QyxvQkFBb0IsQ0FBQyxDQUFDOztFQUUvQztFQUNBLElBQU1zQyxvQkFBb0IsR0FBR0EsQ0FBQ0MsT0FBTyxFQUFFQyxDQUFDLEVBQUVkLENBQUMsRUFBRWUsSUFBSSxLQUFLO0lBQ2xELElBQU1DLEtBQUssR0FBRyxDQUFBOUMsT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUUrQyxVQUFVLEtBQUk7TUFDakNDLFNBQVMsRUFBRTtRQUFFQyxPQUFPLEVBQUU7TUFBTSxDQUFDO01BQzdCQyxNQUFNLEVBQUU7UUFBRUMsUUFBUSxFQUFFLENBQUM7UUFBRUMsT0FBTyxFQUFFLElBQUk7UUFBRUMsUUFBUSxFQUFFLENBQUM7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsUUFBUSxFQUFFLENBQUM7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsUUFBUSxFQUFFLEVBQUU7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFO01BQU0sQ0FBQztNQUM5SUMsTUFBTSxFQUFFO1FBQUVULFFBQVEsRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxJQUFJO1FBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLFFBQVEsRUFBRSxFQUFFO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRTtNQUFNLENBQUM7TUFDOUlFLE1BQU0sRUFBRTtRQUFFVixRQUFRLEVBQUUsQ0FBQztRQUFFQyxPQUFPLEVBQUUsSUFBSTtRQUFFQyxRQUFRLEVBQUUsQ0FBQztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxRQUFRLEVBQUUsQ0FBQztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxRQUFRLEVBQUUsQ0FBQztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUU7TUFBTSxDQUFDO01BQzdJRyxNQUFNLEVBQUU7UUFBRVgsUUFBUSxFQUFFLENBQUM7UUFBRUMsT0FBTyxFQUFFLElBQUk7UUFBRUMsUUFBUSxFQUFFLENBQUM7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsUUFBUSxFQUFFLENBQUM7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsUUFBUSxFQUFFLENBQUM7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFO01BQU0sQ0FBQztNQUM3SUksTUFBTSxFQUFFO1FBQUVaLFFBQVEsRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxJQUFJO1FBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRTtNQUFNO0lBQ2hKLENBQUM7SUFDRCxJQUFJLENBQUNoQixPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQ3RCLElBQUlBLE9BQU8sQ0FBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJUyxPQUFPLENBQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUNsRCxJQUFNOEIsR0FBRyxHQUFHcEIsQ0FBQyxHQUFHRSxLQUFLLENBQUNFLFNBQVMsQ0FBQ0MsT0FBTztNQUN2QyxPQUFPSixJQUFJLEdBQUdtQixHQUFHLEdBQUcsQ0FBQyxHQUFHQSxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxDQUFDcEMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRDtJQUNBLElBQUlxQyxFQUFFLEdBQUcsSUFBSTtNQUFFQyxVQUFVLEdBQUcsQ0FBQztJQUM3QixJQUFJekIsT0FBTyxDQUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFBRWlDLEVBQUUsR0FBRyxDQUFBckIsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUVJLE1BQU0sS0FBSSxDQUFDLENBQUM7SUFBRSxDQUFDLE1BQ3BELElBQUlQLE9BQU8sQ0FBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO01BQUVpQyxFQUFFLEdBQUcsQ0FBQXJCLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFYyxNQUFNLEtBQUksQ0FBQyxDQUFDO0lBQUUsQ0FBQyxNQUN6RCxJQUFJakIsT0FBTyxDQUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFBRWlDLEVBQUUsR0FBRyxDQUFBckIsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUVlLE1BQU0sTUFBSWYsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUV1QixZQUFZLEtBQUksQ0FBQyxDQUFDO0lBQUUsQ0FBQyxNQUNoRixJQUFJMUIsT0FBTyxDQUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFBRWlDLEVBQUUsR0FBRyxDQUFBckIsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUVnQixNQUFNLE1BQUloQixLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRXVCLFlBQVksS0FBSSxDQUFDLENBQUM7SUFBRSxDQUFDLE1BQ2hGLElBQUkxQixPQUFPLENBQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUFFaUMsRUFBRSxHQUFHLENBQUFyQixLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRWlCLE1BQU0sTUFBSWpCLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFdUIsWUFBWSxLQUFJLENBQUMsQ0FBQztJQUFFLENBQUMsTUFDaEYsT0FBTyxDQUFDO0lBRWJELFVBQVUsR0FBR0QsRUFBRSxDQUFDZCxRQUFRLElBQUksQ0FBQztJQUM3QixJQUFNaUIsY0FBYyxHQUFHekIsSUFBSSxHQUFHb0IsSUFBSSxDQUFDTSxHQUFHLENBQUMzQixDQUFDLEVBQUV3QixVQUFVLENBQUMsR0FBR3hCLENBQUM7SUFDekQsSUFBSTNCLElBQUksR0FBRyxDQUFDO0lBQ1osSUFBSXFELGNBQWMsS0FBS0gsRUFBRSxDQUFDaEIsUUFBUSxJQUFJLENBQUMsQ0FBQyxFQUFFbEMsSUFBSSxHQUFHLENBQUNrRCxFQUFFLENBQUNmLE9BQU8sSUFBSSxDQUFDLElBQUlSLENBQUMsQ0FBQyxLQUNsRSxJQUFJMEIsY0FBYyxLQUFLSCxFQUFFLENBQUNkLFFBQVEsSUFBSSxDQUFDLENBQUMsRUFBRXBDLElBQUksR0FBR2tELEVBQUUsQ0FBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQyxLQUNqRSxJQUFJZ0IsY0FBYyxNQUFNSCxFQUFFLENBQUNaLFFBQVEsSUFBSSxDQUFDLENBQUMsRUFBRXRDLElBQUksR0FBR2tELEVBQUUsQ0FBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQyxLQUNsRSxJQUFJYyxjQUFjLEtBQUtILEVBQUUsQ0FBQ1YsUUFBUSxJQUFJLENBQUMsQ0FBQyxFQUFFeEMsSUFBSSxHQUFHa0QsRUFBRSxDQUFDVCxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQ2pFekMsSUFBSSxHQUFHa0QsRUFBRSxDQUFDUixPQUFPLElBQUksQ0FBQztJQUMzQixPQUFPZCxJQUFJLEdBQUc1QixJQUFJLEdBQUcsQ0FBQyxHQUFHQSxJQUFJO0VBQ2pDLENBQUM7RUFFRCxJQUFNdUQsaUJBQWlCLEdBQUd4Tyw4Q0FBTyxDQUFDLE1BQU07SUFDcEMsSUFBSSxDQUFDb0ssb0JBQW9CLEVBQUUsT0FBTyxFQUFFOztJQUVwQztJQUNBLElBQUlxRSxtQkFBbUIsR0FBR3JFLG9CQUFvQjtJQUM5QyxJQUFJcEIsUUFBUSxJQUFJSSxNQUFNLEVBQUU7TUFDcEIsSUFBTXNGLEVBQUUsR0FBRzVMLFNBQVMsQ0FBQ2tHLFFBQVEsQ0FBQyxDQUFDMkYsT0FBTyxDQUFDLEtBQUssQ0FBQztNQUM3QyxJQUFNQyxFQUFFLEdBQUc5TCxTQUFTLENBQUNzRyxNQUFNLENBQUMsQ0FBQ3lGLEtBQUssQ0FBQyxLQUFLLENBQUM7TUFDekMsSUFBSUgsRUFBRSxDQUFDeEwsT0FBTyxDQUFDLENBQUMsSUFBSTBMLEVBQUUsQ0FBQzFMLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQ3dMLEVBQUUsQ0FBQ0ksT0FBTyxDQUFDRixFQUFFLENBQUMsRUFBRTtRQUNqREgsbUJBQW1CLEdBQUdyRSxvQkFBb0IsQ0FBQ3lCLE1BQU0sQ0FBQ2tELENBQUMsSUFBSTtVQUNuRCxJQUFNaE0sQ0FBQyxHQUFHRCxTQUFTLENBQUNpTSxDQUFDLENBQUN2SCxJQUFJLENBQUM7VUFDM0IsT0FBTyxDQUFDekUsQ0FBQyxDQUFDaU0sTUFBTSxDQUFDTixFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUkzTCxDQUFDLENBQUMrTCxPQUFPLENBQUNKLEVBQUUsQ0FBQyxNQUFNM0wsQ0FBQyxDQUFDaU0sTUFBTSxDQUFDSixFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUk3TCxDQUFDLENBQUNrTSxRQUFRLENBQUNMLEVBQUUsQ0FBQyxDQUFDO1FBQzVGLENBQUMsQ0FBQztNQUNOLENBQUMsTUFBTTtRQUNISCxtQkFBbUIsR0FBRyxFQUFFO01BQzVCO0lBQ0osQ0FBQyxNQUFNO01BQ0hBLG1CQUFtQixHQUFHLEVBQUU7SUFDNUI7SUFFQSxJQUFNUyxPQUFPLEdBQUdsRixPQUFPO0lBQ3ZCLElBQU1tRixZQUFZLEdBQUdELE9BQU8sR0FDeEIsQ0FBQzlILFVBQVUsQ0FBQzhILE9BQU8sQ0FBQ0UsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUNsQ2hJLFVBQVUsQ0FBQzhILE9BQU8sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQ3JDLENBQUM7SUFDTCxJQUFNQyxhQUFhLEdBQUdKLE9BQU8sR0FDekIsQ0FBQzlILFVBQVUsQ0FBQzhILE9BQU8sQ0FBQ0ssU0FBUyxDQUFDLElBQUksQ0FBQyxLQUNsQ25JLFVBQVUsQ0FBQzhILE9BQU8sQ0FBQ00sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQ3hDcEksVUFBVSxDQUFDOEgsT0FBTyxDQUFDTyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsSUFDekNySSxVQUFVLENBQUM4SCxPQUFPLENBQUNRLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQzFDdEksVUFBVSxDQUFDOEgsT0FBTyxDQUFDUyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsR0FDckMsQ0FBQztJQUNMLElBQU1DLGFBQWEsR0FBRyxDQUFDVCxZQUFZLEdBQUdHLGFBQWEsSUFBSSxFQUFFO0lBRXpELE9BQU9iLG1CQUFtQixDQUFDb0IsR0FBRyxDQUFDZCxDQUFDLElBQUk7TUFDaEMsSUFBTWUsR0FBRyxHQUFJLENBQUNmLENBQUMsQ0FBQ3hHLG9CQUFvQixJQUFJLENBQUMsS0FBS3dHLENBQUMsQ0FBQzNHLFNBQVMsSUFBSSxDQUFDLENBQUMsR0FBSSxFQUFFO01BQ3JFLElBQU0ySCxHQUFHLEdBQUksQ0FBQ2hCLENBQUMsQ0FBQ3ZHLGtCQUFrQixJQUFJLENBQUMsS0FBS3VHLENBQUMsQ0FBQzNHLFNBQVMsSUFBSSxDQUFDLENBQUMsR0FBSSxFQUFFO01BQ25FLElBQU00SCxHQUFHLEdBQUksQ0FBQ2pCLENBQUMsQ0FBQ3RHLGdCQUFnQixJQUFJLENBQUMsS0FBS3NHLENBQUMsQ0FBQzNHLFNBQVMsSUFBSSxDQUFDLENBQUMsR0FBSSxFQUFFOztNQUVqRTtNQUNBLElBQU02SCxPQUFPLEdBQUdsQixDQUFDLENBQUNwSCxZQUFZLEdBQUcrRSxvQkFBb0IsQ0FBQ3FDLENBQUMsQ0FBQzVHLFNBQVMsRUFBRTRHLENBQUMsQ0FBQzNHLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDMkcsQ0FBQyxDQUFDaEgsZUFBZSxDQUFDLEdBQUcsQ0FBQztNQUMzRyxJQUFNbUksT0FBTyxHQUFHbkIsQ0FBQyxDQUFDbkgsT0FBTyxHQUFHOEUsb0JBQW9CLENBQUNxQyxDQUFDLENBQUM1RyxTQUFTLEVBQUU0RyxDQUFDLENBQUMzRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzJHLENBQUMsQ0FBQy9HLGNBQWMsQ0FBQyxHQUFHLENBQUM7TUFDckcsSUFBTW1JLE9BQU8sR0FBR3BCLENBQUMsQ0FBQ2xILE9BQU8sR0FBRzZFLG9CQUFvQixDQUFDcUMsQ0FBQyxDQUFDNUcsU0FBUyxFQUFFNEcsQ0FBQyxDQUFDM0csU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMyRyxDQUFDLENBQUM5RyxjQUFjLENBQUMsR0FBRyxDQUFDO01BQ3JHLElBQU1tSSxPQUFPLEdBQUdyQixDQUFDLENBQUNqSCxPQUFPLEdBQUc0RSxvQkFBb0IsQ0FBQ3FDLENBQUMsQ0FBQzVHLFNBQVMsRUFBRTRHLENBQUMsQ0FBQzNHLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDMkcsQ0FBQyxDQUFDN0csY0FBYyxDQUFDLEdBQUcsQ0FBQztNQUNyRyxJQUFNbUksVUFBVSxHQUFHLENBQUN0QixDQUFDLENBQUMzRyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUE4RyxPQUFPLGFBQVBBLE9BQU8sdUJBQVBBLE9BQU8sQ0FBRW9CLGdCQUFnQixLQUFJLEdBQUcsQ0FBQztNQUUxRSxJQUFNQyxVQUFVLEdBQUdOLE9BQU8sR0FBR0MsT0FBTyxHQUFHQyxPQUFPLEdBQUdDLE9BQU87TUFDeEQsSUFBTUksa0JBQWtCLEdBQUdELFVBQVUsR0FBR0YsVUFBVTtNQUVsRCxJQUFJSSxPQUFPLEdBQUcsQ0FBQztNQUNmLElBQUkxQixDQUFDLENBQUNyRyxRQUFRLEVBQUU7UUFDWjtRQUNBLElBQU1nSSxhQUFhLEdBQUd6QyxJQUFJLENBQUMwQyxHQUFHLENBQUM1QixDQUFDLENBQUNyRyxRQUFRLEdBQUc4SCxrQkFBa0IsQ0FBQztRQUMvRCxJQUFNSSxhQUFhLEdBQUczQyxJQUFJLENBQUMwQyxHQUFHLENBQUM1QixDQUFDLENBQUNyRyxRQUFRLEdBQUc2SCxVQUFVLENBQUM7UUFDdkQsSUFBSUssYUFBYSxHQUFHRixhQUFhLEVBQUU7VUFDL0JELE9BQU8sR0FBRzFCLENBQUMsQ0FBQ3JHLFFBQVEsR0FBRzJILFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsTUFBTTtVQUNISSxPQUFPLEdBQUcxQixDQUFDLENBQUNyRyxRQUFRLENBQUMsQ0FBQztRQUMxQjtNQUNKLENBQUMsTUFBTTtRQUNIK0gsT0FBTyxHQUFHRCxrQkFBa0I7TUFDaEM7O01BRUE7TUFDQSxJQUFNSyxpQkFBaUIsR0FBRzNCLE9BQU8sR0FDNUIsQ0FBQ0gsQ0FBQyxDQUFDekcsVUFBVSxJQUFJeUcsQ0FBQyxDQUFDM0csU0FBUyxJQUFJLENBQUMsS0FBSzhHLE9BQU8sQ0FBQzRCLFdBQVcsSUFBSSxDQUFDLENBQUMsR0FDL0RoQixHQUFHLElBQUlaLE9BQU8sQ0FBQzZCLGFBQWEsSUFBSSxDQUFDLENBQUUsR0FDbkNoQixHQUFHLElBQUliLE9BQU8sQ0FBQzhCLFdBQVcsSUFBSSxDQUFDLENBQUUsR0FDakNoQixHQUFHLElBQUlkLE9BQU8sQ0FBQytCLFNBQVMsSUFBSSxDQUFDLENBQUUsR0FDaEMsQ0FBQztNQUVMLElBQU1DLGVBQWUsR0FBRyxDQUFDbkMsQ0FBQyxDQUFDM0csU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFBOEcsT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUU0QixXQUFXLEtBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRztNQUM5RSxJQUFNSyxPQUFPLEdBQUlwQyxDQUFDLENBQUNxQyxZQUFZLElBQUlyQyxDQUFDLENBQUNxQyxZQUFZLEdBQUdGLGVBQWUsR0FBSW5DLENBQUMsQ0FBQ3FDLFlBQVksR0FBR1AsaUJBQWlCO01BRXpHLElBQU1RLFFBQVEsR0FBR0YsT0FBTyxHQUFJVixPQUFPLEdBQUdqSCxPQUFROztNQUU5QztNQUNBLElBQU04SCxjQUFjLEdBQUcsSUFBSTNGLEdBQUcsQ0FBQ3ZCLG9CQUFvQixDQUFDeUIsTUFBTSxDQUFDMEYsR0FBRyxJQUFJQSxHQUFHLENBQUMvSixJQUFJLEtBQUt1SCxDQUFDLENBQUN2SCxJQUFJLENBQUMsQ0FBQ3FJLEdBQUcsQ0FBQzBCLEdBQUcsSUFBSUEsR0FBRyxDQUFDN0osU0FBUyxDQUFDLENBQUM7TUFDakgsSUFBTThKLG1CQUFtQixHQUFHRixjQUFjLENBQUNHLElBQUksSUFBSSxDQUFDO01BQ3BELElBQU1DLGFBQWEsR0FBRzNDLENBQUMsQ0FBQzRDLGdCQUFnQixJQUFLL0IsYUFBYSxHQUFHNEIsbUJBQW9COztNQUVqRjtNQUNBLElBQU1JLGNBQWMsR0FBRzdDLENBQUMsQ0FBQzhDLFNBQVMsSUFBS1IsUUFBUSxHQUFHSyxhQUFjO01BRWhFLE9BQUFoTyxhQUFBLENBQUFBLGFBQUEsS0FBWXFMLENBQUM7UUFBRThDLFNBQVMsRUFBRXpLLFVBQVUsQ0FBQ3dLLGNBQWMsQ0FBQyxDQUFDRSxPQUFPLENBQUMsQ0FBQztNQUFDO0lBQ25FLENBQUMsQ0FBQztFQUNOLENBQUMsRUFBRSxDQUFDMUgsb0JBQW9CLEVBQUVwQixRQUFRLEVBQUVJLE1BQU0sRUFBRVksT0FBTyxFQUFFUixPQUFPLENBQUMsQ0FBQztFQUU5RCxJQUFNdUksaUJBQWlCLEdBQUcvUiw4Q0FBTyxDQUFDLE1BQU07SUFDcEMsSUFBSWdTLFVBQVUsR0FBRyxDQUFDO0lBQ2xCLElBQU1DLFlBQVksR0FBRyxDQUFDLENBQUM7SUFFdkJ6RCxpQkFBaUIsQ0FBQzBELE9BQU8sQ0FBQ25ELENBQUMsSUFBSTtNQUMzQixJQUFNb0QsS0FBSyxHQUFHQyxRQUFRLENBQUNyRCxDQUFDLENBQUMzRyxTQUFTLENBQUMsSUFBSSxDQUFDO01BQ3hDLElBQU1pSyxNQUFNLEdBQUdELFFBQVEsQ0FBQ3JELENBQUMsQ0FBQ3VELFdBQVcsQ0FBQyxJQUFJLENBQUM7TUFFM0NOLFVBQVUsSUFBSUcsS0FBSztNQUVuQixJQUFNSSxJQUFJLEdBQUd4RCxDQUFDLENBQUM1RyxTQUFTLElBQUksU0FBUztNQUNyQyxJQUFJLENBQUM4SixZQUFZLENBQUNNLElBQUksQ0FBQyxFQUFFTixZQUFZLENBQUNNLElBQUksQ0FBQyxHQUFHLENBQUM7TUFDL0NOLFlBQVksQ0FBQ00sSUFBSSxDQUFDLElBQUlGLE1BQU07SUFDaEMsQ0FBQyxDQUFDO0lBRUYsT0FBTztNQUFFTCxVQUFVO01BQUVDO0lBQWEsQ0FBQztFQUN2QyxDQUFDLEVBQUUsQ0FBQ3pELGlCQUFpQixDQUFDLENBQUM7O0VBRXZCO0VBQ0E7RUFDQSxJQUFNZ0UsZ0JBQWdCLEdBQUl6TSxJQUFJLElBQUs7SUFDL0IsSUFBSSxDQUFDQSxJQUFJLENBQUNvQyxTQUFTLEVBQUUsT0FBTyxDQUFDO0lBQzdCLElBQU04SCxPQUFPLEdBQUdsSyxJQUFJLENBQUM0QixZQUFZLEdBQUcrRSxvQkFBb0IsQ0FBQzNHLElBQUksQ0FBQ29DLFNBQVMsRUFBRXBDLElBQUksQ0FBQ3FDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDckMsSUFBSSxDQUFDZ0MsZUFBZSxDQUFDLEdBQUcsQ0FBQztJQUN2SCxJQUFNbUksT0FBTyxHQUFHbkssSUFBSSxDQUFDNkIsT0FBTyxHQUFHOEUsb0JBQW9CLENBQUMzRyxJQUFJLENBQUNvQyxTQUFTLEVBQUVwQyxJQUFJLENBQUNxQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQ3JDLElBQUksQ0FBQ2lDLGNBQWMsQ0FBQyxHQUFHLENBQUM7SUFDakgsSUFBTW1JLE9BQU8sR0FBR3BLLElBQUksQ0FBQzhCLE9BQU8sR0FBRzZFLG9CQUFvQixDQUFDM0csSUFBSSxDQUFDb0MsU0FBUyxFQUFFcEMsSUFBSSxDQUFDcUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUNyQyxJQUFJLENBQUNrQyxjQUFjLENBQUMsR0FBRyxDQUFDO0lBQ2pILElBQU1tSSxPQUFPLEdBQUdySyxJQUFJLENBQUMrQixPQUFPLEdBQUc0RSxvQkFBb0IsQ0FBQzNHLElBQUksQ0FBQ29DLFNBQVMsRUFBRXBDLElBQUksQ0FBQ3FDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDckMsSUFBSSxDQUFDbUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztJQUNqSCxPQUFPK0gsT0FBTyxHQUFHQyxPQUFPLEdBQUdDLE9BQU8sR0FBR0MsT0FBTztFQUNoRCxDQUFDO0VBRUQsSUFBTXFDLGVBQWUsR0FBR3pTLDhDQUFPLENBQUMsTUFBTTtJQUNsQyxJQUFNMFMsS0FBSyxHQUFHLElBQUkvRyxHQUFHLENBQUMsQ0FBQztJQUN2Qm5CLGdCQUFnQixDQUFDMEgsT0FBTyxDQUFDbkQsQ0FBQyxJQUFJO01BQzFCLElBQUlBLENBQUMsQ0FBQ3BILFlBQVksRUFBRStLLEtBQUssQ0FBQ25HLEdBQUcsQ0FBQ3dDLENBQUMsQ0FBQ3BILFlBQVksQ0FBQztNQUM3QyxJQUFJb0gsQ0FBQyxDQUFDbkgsT0FBTyxFQUFFOEssS0FBSyxDQUFDbkcsR0FBRyxDQUFDd0MsQ0FBQyxDQUFDbkgsT0FBTyxDQUFDO01BQ25DLElBQUltSCxDQUFDLENBQUNsSCxPQUFPLEVBQUU2SyxLQUFLLENBQUNuRyxHQUFHLENBQUN3QyxDQUFDLENBQUNsSCxPQUFPLENBQUM7TUFDbkMsSUFBSWtILENBQUMsQ0FBQ2pILE9BQU8sRUFBRTRLLEtBQUssQ0FBQ25HLEdBQUcsQ0FBQ3dDLENBQUMsQ0FBQ2pILE9BQU8sQ0FBQztJQUN2QyxDQUFDLENBQUM7SUFDRjhDLGlCQUFpQixDQUFDc0gsT0FBTyxDQUFDUyxFQUFFLElBQUk7TUFDNUIsSUFBSUEsRUFBRSxDQUFDQyxVQUFVLEVBQUVGLEtBQUssQ0FBQ25HLEdBQUcsQ0FBQ29HLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDO0lBQy9DLENBQUMsQ0FBQztJQUNGLE9BQU9GLEtBQUs7RUFDaEIsQ0FBQyxFQUFFLENBQUNsSSxnQkFBZ0IsRUFBRUksaUJBQWlCLENBQUMsQ0FBQztFQUV6QyxJQUFNaUkscUJBQXFCLEdBQUlDLFlBQVksSUFBSztJQUM1QyxJQUFNQyxpQkFBaUIsR0FBRyxDQUN0Qm5LLGNBQWMsQ0FBQ2pCLFlBQVksRUFDM0JpQixjQUFjLENBQUNoQixPQUFPLEVBQ3RCZ0IsY0FBYyxDQUFDZixPQUFPLEVBQ3RCZSxjQUFjLENBQUNkLE9BQU8sQ0FDekIsQ0FBQytELE1BQU0sQ0FBQyxDQUFDbUgsR0FBRyxFQUFFQyxHQUFHLEtBQUs7TUFDbkIsSUFBTUMsTUFBTSxHQUFHLENBQUMsY0FBYyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO01BQ2hFLE9BQU9GLEdBQUcsSUFBSUUsTUFBTSxDQUFDRCxHQUFHLENBQUMsS0FBS0gsWUFBWTtJQUM5QyxDQUFDLENBQUM7SUFFRixPQUFPNU4sU0FBUyxDQUFDMkcsTUFBTSxDQUFDQyxDQUFDLElBQ3JCLENBQUMyRyxlQUFlLENBQUNwRyxHQUFHLENBQUNQLENBQUMsQ0FBQ1EsWUFBWSxDQUFDLElBQUksQ0FBQ3lHLGlCQUFpQixDQUFDN0csUUFBUSxDQUFDSixDQUFDLENBQUNRLFlBQVksQ0FDdEYsQ0FBQztFQUNMLENBQUM7RUFJRCxJQUFNNkcsZ0JBQWdCLEdBQUlILEdBQUcsSUFBSztJQUM5QixJQUFNSSxRQUFRLEdBQUdoQixRQUFRLENBQUNZLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDbkMsSUFBTUssVUFBVSxHQUFHbEksS0FBSyxDQUFDbUksSUFBSSxDQUFDO01BQUU5RyxNQUFNLEVBQUU0RztJQUFTLENBQUMsQ0FBQyxDQUFDdkQsR0FBRyxDQUFDLENBQUMwRCxDQUFDLEVBQUVDLENBQUMsS0FDekQsQ0FBQzVLLGNBQWMsQ0FBQ1AsV0FBVyxJQUFJLEVBQUUsRUFBRW1MLENBQUMsQ0FBQyxJQUFJLENBQzdDLENBQUM7SUFDRCxJQUFNQyxPQUFPLEdBQUEvUCxhQUFBLENBQUFBLGFBQUEsS0FDTmtGLGNBQWM7TUFDakJSLFNBQVMsRUFBRWdMLFFBQVE7TUFDbkIvSyxXQUFXLEVBQUVnTCxVQUFVO01BQ3ZCL0ssVUFBVSxFQUFFOEs7SUFBUSxFQUN2QjtJQUNESyxPQUFPLENBQUMvSyxRQUFRLEdBQUc4SixnQkFBZ0IsQ0FBQ2lCLE9BQU8sQ0FBQztJQUM1QzVLLGlCQUFpQixDQUFDNEssT0FBTyxDQUFDO0VBQzlCLENBQUM7RUFFRCxJQUFNQyxzQkFBc0IsR0FBR0EsQ0FBQ0MsS0FBSyxFQUFFWCxHQUFHLEtBQUs7SUFDM0MsSUFBTUssVUFBVSxHQUFHLENBQUMsR0FBR3pLLGNBQWMsQ0FBQ1AsV0FBVyxDQUFDO0lBQ2xEZ0wsVUFBVSxDQUFDTSxLQUFLLENBQUMsR0FBR3ZCLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDLElBQUksQ0FBQztJQUN0Q25LLGlCQUFpQixDQUFBbkYsYUFBQSxDQUFBQSxhQUFBLEtBQU1rRixjQUFjO01BQUVQLFdBQVcsRUFBRWdMO0lBQVUsRUFBRSxDQUFDO0VBQ3JFLENBQUM7RUFFRCxJQUFNTyxnQkFBZ0IsR0FBSTdOLElBQUksSUFBSztJQUMvQixJQUFNOE4sS0FBSyxHQUFHLENBQ1YsQ0FBQzlOLElBQUksQ0FBQzRCLFlBQVksRUFBRTVCLElBQUksQ0FBQ2dDLGVBQWUsQ0FBQyxFQUN6QyxDQUFDaEMsSUFBSSxDQUFDNkIsT0FBTyxFQUFFN0IsSUFBSSxDQUFDaUMsY0FBYyxDQUFDLEVBQ25DLENBQUNqQyxJQUFJLENBQUM4QixPQUFPLEVBQUU5QixJQUFJLENBQUNrQyxjQUFjLENBQUMsRUFDbkMsQ0FBQ2xDLElBQUksQ0FBQytCLE9BQU8sRUFBRS9CLElBQUksQ0FBQ21DLGNBQWMsQ0FBQyxDQUN0QztJQUNELE9BQU8yTCxLQUFLLENBQUNoSSxNQUFNLENBQUNpSSxLQUFBO01BQUEsSUFBQUMsS0FBQSxHQUFBbFAsY0FBQSxDQUFBaVAsS0FBQTtRQUFFRSxJQUFJLEdBQUFELEtBQUE7TUFBQSxPQUFNQyxJQUFJO0lBQUEsRUFBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFBQyxLQUFBO01BQUEsSUFBQUMsS0FBQSxHQUFBdlAsY0FBQSxDQUFBc1AsS0FBQTtRQUFLdEgsSUFBSSxHQUFBdUgsS0FBQTtNQUFBLE9BQU1GLEdBQUcsSUFBSXJILElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQUEsR0FBRSxDQUFDLENBQUM7RUFDOUYsQ0FBQztFQUVELElBQU13SCxxQkFBcUIsR0FBR0EsQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEtBQUs7SUFDNUMsSUFBTWQsT0FBTyxHQUFBL1AsYUFBQSxDQUFBQSxhQUFBLEtBQVFrRixjQUFjO01BQUUsQ0FBQzBMLEtBQUssR0FBR0M7SUFBSyxFQUFFO0lBQ3JEZCxPQUFPLENBQUMvSyxRQUFRLEdBQUc4SixnQkFBZ0IsQ0FBQ2lCLE9BQU8sQ0FBQztJQUM1QzVLLGlCQUFpQixDQUFDNEssT0FBTyxDQUFDO0VBQzlCLENBQUM7O0VBRUQ7RUFDQSxJQUFNZSxtQkFBbUIsR0FBR0EsQ0FBQ0MsWUFBWSxFQUFFRixLQUFLLEtBQUs7SUFDakQsSUFBTWQsT0FBTyxHQUFBL1AsYUFBQSxDQUFBQSxhQUFBLEtBQVFrRixjQUFjO01BQUUsQ0FBQzZMLFlBQVksR0FBR0YsS0FBSyxLQUFLO0lBQU0sRUFBRTtJQUN2RWQsT0FBTyxDQUFDL0ssUUFBUSxHQUFHOEosZ0JBQWdCLENBQUNpQixPQUFPLENBQUM7SUFDNUM1SyxpQkFBaUIsQ0FBQzRLLE9BQU8sQ0FBQztFQUM5QixDQUFDO0VBRUQsSUFBTWlCLFVBQVU7SUFBQSxJQUFBQyxLQUFBLEdBQUFqUCxpQkFBQSxDQUFHLGFBQVk7TUFDM0IsSUFBSWtFLFlBQVksRUFBRTs7TUFFbEI7TUFDQSxJQUFNMEksV0FBVyxHQUFHLENBQUMxSixjQUFjLENBQUNQLFdBQVcsSUFBSSxFQUFFLEVBQUU0TCxNQUFNLENBQUMsQ0FBQ1csQ0FBQyxFQUFFQyxDQUFDLEtBQUtELENBQUMsSUFBSXhDLFFBQVEsQ0FBQ3lDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNsRyxJQUFNQyxnQkFBZ0IsR0FBR2xNLGNBQWMsQ0FBQ1IsU0FBUyxHQUFHLENBQUMsS0FDaERRLGNBQWMsQ0FBQ1AsV0FBVyxDQUFDbUUsTUFBTSxHQUFHNUQsY0FBYyxDQUFDUixTQUFTLElBQ3pEUSxjQUFjLENBQUNQLFdBQVcsQ0FBQzBNLElBQUksQ0FBQy9CLEdBQUcsSUFBSSxDQUFDQSxHQUFHLElBQUlaLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7TUFFM0UsSUFBSSxDQUFDcEssY0FBYyxDQUFDbEIsU0FBUyxFQUFFO1FBQzNCckYsa0RBQUssQ0FBQzJTLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztRQUFFO01BQy9DO01BQ0EsSUFBSSxDQUFDcE0sY0FBYyxDQUFDVCxTQUFTLEVBQUU7UUFDM0I5RixrREFBSyxDQUFDMlMsT0FBTyxDQUFDLDJCQUEyQixDQUFDO1FBQUU7TUFDaEQ7TUFDQSxJQUFJLENBQUNwTSxjQUFjLENBQUNqQixZQUFZLEVBQUU7UUFDOUJ0RixrREFBSyxDQUFDMlMsT0FBTyxDQUFDLDRCQUE0QixDQUFDO1FBQUU7TUFDakQ7TUFDQSxJQUFJLENBQUNwTSxjQUFjLENBQUNSLFNBQVMsSUFBSVEsY0FBYyxDQUFDUixTQUFTLElBQUksQ0FBQyxFQUFFO1FBQzVEL0Ysa0RBQUssQ0FBQzJTLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztRQUFFO01BQ3BEO01BQ0EsSUFBSSxDQUFDcE0sY0FBYyxDQUFDTCxvQkFBb0IsSUFBSW5CLFVBQVUsQ0FBQ3dCLGNBQWMsQ0FBQ0wsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDOUZsRyxrREFBSyxDQUFDMlMsT0FBTyxDQUFDLCtDQUErQyxDQUFDO1FBQUU7TUFDcEU7TUFDQSxJQUFJMUMsV0FBVyxJQUFJLENBQUMsRUFBRTtRQUNsQmpRLGtEQUFLLENBQUMyUyxPQUFPLENBQUMsdUVBQXVFLENBQUM7UUFBRTtNQUM1RjtNQUNBLElBQUlGLGdCQUFnQixFQUFFO1FBQ2xCelMsa0RBQUssQ0FBQzJTLE9BQU8sQ0FBQyxvRUFBb0UsQ0FBQztRQUFFO01BQ3pGO01BRUFuTCxlQUFlLENBQUMsSUFBSSxDQUFDO01BQ3JCLElBQUk7UUFDQTtRQUNBLElBQU1vTCxRQUFRLEdBQUcsQ0FBQWpMLE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFa0wsZ0JBQWdCLEtBQUksRUFBRTtRQUNoRCxJQUFNQyxVQUFVLEdBQUl2TSxjQUFjLENBQUNMLG9CQUFvQixHQUFHSyxjQUFjLENBQUNSLFNBQVMsR0FBSTZNLFFBQVE7UUFDOUYsSUFBTUcsUUFBUSxHQUFJeE0sY0FBYyxDQUFDSixrQkFBa0IsR0FBR0ksY0FBYyxDQUFDUixTQUFTLEdBQUk2TSxRQUFRO1FBQzFGLElBQU1JLE1BQU0sR0FBSXpNLGNBQWMsQ0FBQ0gsZ0JBQWdCLEdBQUdHLGNBQWMsQ0FBQ1IsU0FBUyxHQUFJNk0sUUFBUTs7UUFFdEY7UUFDQSxJQUFJN0QsWUFBWSxHQUFHLENBQUM7UUFDcEIsSUFBSXBILE9BQU8sRUFBRTtVQUNUb0gsWUFBWSxHQUFJLENBQUN4SSxjQUFjLENBQUNOLFVBQVUsSUFBSU0sY0FBYyxDQUFDUixTQUFTLElBQUksQ0FBQyxLQUFLNEIsT0FBTyxDQUFDOEcsV0FBVyxJQUFJLENBQUMsQ0FBQyxHQUNwR3FFLFVBQVUsSUFBSW5MLE9BQU8sQ0FBQytHLGFBQWEsSUFBSSxDQUFDLENBQUUsR0FDMUNxRSxRQUFRLElBQUlwTCxPQUFPLENBQUNnSCxXQUFXLElBQUksQ0FBQyxDQUFFLEdBQ3RDcUUsTUFBTSxJQUFJckwsT0FBTyxDQUFDaUgsU0FBUyxJQUFJLENBQUMsQ0FBRTtRQUMzQztRQUVBLElBQU16SCxRQUFPLFNBQVN2QyxZQUFZLENBQUMsQ0FBQztRQUNwQyxJQUFNcU8sY0FBYyxHQUFHOUMsZ0JBQWdCLENBQUM1SixjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQU15SCxVQUFVLEdBQUcsQ0FBQ3pILGNBQWMsQ0FBQ1IsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFBNEIsT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUVzRyxnQkFBZ0IsS0FBSSxHQUFHLENBQUM7UUFDdkYsSUFBTWlGLFlBQVksR0FBR0QsY0FBYyxHQUFHakYsVUFBVTtRQUNoRCxJQUFNbUYsV0FBVyxHQUFHRCxZQUFZLEdBQUcvTCxRQUFPOztRQUUxQztRQUNBO1FBQ0EsSUFBTW9HLGFBQWEsR0FBRzVGLE9BQU8sR0FBRyxDQUM1QixDQUFDNUMsVUFBVSxDQUFDNEMsT0FBTyxDQUFDb0YsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUNsQ2hJLFVBQVUsQ0FBQzRDLE9BQU8sQ0FBQ3FGLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUNwQ2pJLFVBQVUsQ0FBQzRDLE9BQU8sQ0FBQ3VGLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUNuQ25JLFVBQVUsQ0FBQzRDLE9BQU8sQ0FBQ3dGLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUN4Q3BJLFVBQVUsQ0FBQzRDLE9BQU8sQ0FBQ3lGLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUN6Q3JJLFVBQVUsQ0FBQzRDLE9BQU8sQ0FBQzBGLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQzFDdEksVUFBVSxDQUFDNEMsT0FBTyxDQUFDMkYsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQ3JDLEVBQUUsR0FBRyxDQUFDOztRQUVWO1FBQ0EsSUFBTThGLHNCQUFzQixHQUFHLElBQUk5SixHQUFHLENBQUN2QixvQkFBb0IsQ0FBQ3lCLE1BQU0sQ0FBQzBGLEdBQUcsSUFBSUEsR0FBRyxDQUFDL0osSUFBSSxLQUFLb0IsY0FBYyxDQUFDcEIsSUFBSSxDQUFDLENBQUNxSSxHQUFHLENBQUMwQixHQUFHLElBQUlBLEdBQUcsQ0FBQzdKLFNBQVMsQ0FBQyxDQUFDO1FBQ3RJLElBQU04SixtQkFBbUIsR0FBR3ZELElBQUksQ0FBQ0MsR0FBRyxDQUFDdUgsc0JBQXNCLENBQUNoRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLElBQU1DLGFBQWEsR0FBRzlCLGFBQWEsR0FBRzRCLG1CQUFtQjtRQUV6RCxJQUFNa0UsUUFBUSxHQUFHOU0sY0FBYyxDQUFDekMsRUFBRSxJQUFJeUMsY0FBYyxDQUFDK00sR0FBRztRQUN4RCxJQUFNQyxPQUFPLEdBQUFsUyxhQUFBLENBQUFBLGFBQUEsS0FDTmtGLGNBQWM7VUFDakIwSixXQUFXO1VBQ1g2QyxVQUFVO1VBQ1ZDLFFBQVE7VUFDUkMsTUFBTTtVQUNORyxXQUFXO1VBQ1hwRSxZQUFZO1VBQ1pPLGdCQUFnQixFQUFFRCxhQUFhO1VBQy9CRyxTQUFTLEVBQUdULFlBQVksR0FBR29FLFdBQVcsR0FBRzlELGFBQWMsQ0FBQztRQUFBLEVBQzNEO1FBRUQsSUFBSWdFLFFBQVEsRUFBRTtVQUNWRSxPQUFPLENBQUN6UCxFQUFFLEdBQUd1UCxRQUFRO1VBQ3JCRSxPQUFPLENBQUNELEdBQUcsR0FBR0QsUUFBUTtVQUN0QixNQUFNbFQsOENBQUssQ0FBQ3FULElBQUksSUFBQXhSLE1BQUEsQ0FBSXpCLHFEQUFZLCtCQUE0QmdULE9BQU8sQ0FBQztVQUNwRXZULGtEQUFLLENBQUN5VCxPQUFPLENBQUMsc0NBQXNDLENBQUM7UUFDekQsQ0FBQyxNQUFNO1VBQ0gsTUFBTXRULDhDQUFLLENBQUNxVCxJQUFJLElBQUF4UixNQUFBLENBQUl6QixxREFBWSwrQkFBNEJnVCxPQUFPLENBQUM7VUFDcEV2VCxrREFBSyxDQUFDeVQsT0FBTyxDQUFDLHVDQUF1QyxDQUFDO1FBQzFEOztRQUVBO1FBQ0EsTUFBTS9LLFNBQVMsQ0FBQyxDQUFDO1FBRWpCbEMsaUJBQWlCLENBQUFuRixhQUFBLENBQUFBLGFBQUEsS0FDVmtGLGNBQWM7VUFBRTtVQUNuQmxCLFNBQVMsRUFBRSxFQUFFO1VBQ2JDLFlBQVksRUFBRSxFQUFFO1VBQ2hCQyxPQUFPLEVBQUUsRUFBRTtVQUNYQyxPQUFPLEVBQUUsRUFBRTtVQUNYQyxPQUFPLEVBQUUsRUFBRTtVQUNYQyxlQUFlLEVBQUUsS0FBSztVQUN0QkMsY0FBYyxFQUFFLEtBQUs7VUFDckJDLGNBQWMsRUFBRSxLQUFLO1VBQ3JCQyxjQUFjLEVBQUUsS0FBSztVQUNyQkMsU0FBUyxFQUFFLEVBQUU7VUFDYkMsU0FBUyxFQUFFLENBQUM7VUFDWkMsV0FBVyxFQUFFLEVBQUU7VUFDZkUsb0JBQW9CLEVBQUUsQ0FBQztVQUN2QkMsa0JBQWtCLEVBQUUsR0FBRztVQUN2QkMsZ0JBQWdCLEVBQUUsR0FBRztVQUNyQkMsUUFBUSxFQUFFLENBQUM7VUFDWHZDLEVBQUUsRUFBRSxJQUFJO1VBQ1J3UCxHQUFHLEVBQUU7UUFBSSxFQUNaLENBQUM7TUFDTixDQUFDLENBQUMsT0FBTzlPLEtBQUssRUFBRTtRQUNaeEUsa0RBQUssQ0FBQ3dFLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQztNQUM5QyxDQUFDLFNBQVM7UUFDTmdELGVBQWUsQ0FBQyxLQUFLLENBQUM7TUFDMUI7SUFDSixDQUFDO0lBQUEsZ0JBM0hLNkssVUFBVUEsQ0FBQTtNQUFBLE9BQUFDLEtBQUEsQ0FBQTVOLEtBQUEsT0FBQUMsU0FBQTtJQUFBO0VBQUEsR0EySGY7RUFFRCxvQkFDSW5ILDBEQUFBLENBQUNjLHFEQUFHO0lBQUNxVixFQUFFLEVBQUU7TUFBRUMsT0FBTyxFQUFFLE1BQU07TUFBRUMsS0FBSyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFLE9BQU87TUFBRUMsU0FBUyxFQUFFO0lBQVM7RUFBRSxnQkFDakZ2VywwREFBQSxDQUFDcUIscURBQVcsTUFBRSxDQUFDLGVBQ2ZyQiwwREFBQSxDQUFDc0IscURBQU07SUFBQ2tWLFFBQVEsRUFBQyxPQUFPO0lBQUNMLEVBQUUsRUFBRTtNQUFFTSxNQUFNLEVBQUc5UyxLQUFLLElBQUtBLEtBQUssQ0FBQzhTLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLENBQUM7TUFBRUMsZUFBZSxFQUFFO0lBQVU7RUFBRSxnQkFDcEczVywwREFBQSxDQUFDdUIscURBQU8scUJBQ0p2QiwwREFBQSxDQUFDNEIscURBQVU7SUFBQ2dWLEtBQUssRUFBQyxTQUFTO0lBQUNDLE9BQU8sRUFBRTVMLFlBQWE7SUFBQzZMLElBQUksRUFBQyxPQUFPO0lBQUNYLEVBQUUsRUFBRTtNQUFFWSxFQUFFLEVBQUU7SUFBRTtFQUFFLGdCQUFDL1csMERBQUEsQ0FBQ2tDLGlFQUFRLE1BQUUsQ0FBYSxDQUFDLGVBQ3hHbEMsMERBQUEsQ0FBQ1Msc0RBQVU7SUFBQ3VXLE9BQU8sRUFBQyxJQUFJO0lBQUNDLE1BQU07RUFBQSxHQUFDLHdCQUFrQyxDQUM3RCxDQUNMLENBQUMsZUFDVGpYLDBEQUFBLENBQUN3QixzREFBTTtJQUNId1YsT0FBTyxFQUFDLFlBQVk7SUFDcEJFLE1BQU0sRUFBQyxNQUFNO0lBQ2J0VCxJQUFJLEVBQUVxQixPQUFRO0lBQ2RrUixFQUFFLEVBQUU7TUFBRUUsS0FBSyxFQUFFL1MsV0FBVztNQUFFNlQsVUFBVSxFQUFFLENBQUM7TUFBRSxvQkFBb0IsRUFBRTtRQUFFZCxLQUFLLEVBQUUvUyxXQUFXO1FBQUU4VCxTQUFTLEVBQUU7TUFBYTtJQUFFO0VBQUUsZ0JBRWpIcFgsMERBQUEsQ0FBQ3VCLHFEQUFPLE1BQUUsQ0FBQyxlQUFBdkIsMERBQUEsQ0FBQ2MscURBQUc7SUFBQ3FWLEVBQUUsRUFBRTtNQUFFa0IsUUFBUSxFQUFFO0lBQU87RUFBRSxnQkFBQ3JYLDBEQUFBLENBQUMwQixzREFBSSxxQkFBQzFCLDBEQUFBLENBQUNJLDhEQUFXLE1BQUUsQ0FBTyxDQUFNLENBQ3ZFLENBQUMsZUFDVEosMERBQUEsQ0FBQ3VELFdBQVc7SUFBQ0ssSUFBSSxFQUFFcUI7RUFBUSxnQkFDdkJqRiwwREFBQSxDQUFDdUIscURBQU8sTUFBRSxDQUFDLGVBQ1h2QiwwREFBQSxDQUFDYyxxREFBRztJQUFDcVYsRUFBRSxFQUFFO01BQUVtQixFQUFFLEVBQUUsQ0FBQztNQUFFakIsS0FBSyxFQUFFLE1BQU07TUFBRWtCLEVBQUUsRUFBRSxDQUFDO01BQUU3USxDQUFDLEVBQUU7SUFBRTtFQUFFLGdCQUMzQzFHLDBEQUFBLENBQUNXLHNEQUFJO0lBQUM2VyxTQUFTO0lBQUNDLE9BQU8sRUFBRTtFQUFFLGdCQUN2QnpYLDBEQUFBLENBQUNXLHNEQUFJO0lBQUMrVyxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNkM1gsMERBQUEsQ0FBQ1Usc0RBQUs7SUFBQ3lWLEVBQUUsRUFBRTtNQUFFdkosQ0FBQyxFQUFFLENBQUM7TUFBRWdMLFlBQVksRUFBRSxDQUFDO01BQUVDLFNBQVMsRUFBRTtJQUFFO0VBQUUsZ0JBQy9DN1gsMERBQUEsQ0FBQ1Msc0RBQVU7SUFBQ3VXLE9BQU8sRUFBQyxJQUFJO0lBQUNjLFlBQVk7RUFBQSxHQUFDLHVDQUFpRCxDQUFDLGVBQ3hGOVgsMERBQUEsQ0FBQ1csc0RBQUk7SUFBQzZXLFNBQVM7SUFBQ0MsT0FBTyxFQUFFO0VBQUUsZ0JBQ3ZCelgsMERBQUEsQ0FBQ1csc0RBQUk7SUFBQytXLElBQUk7SUFBQ0MsRUFBRSxFQUFFLEVBQUc7SUFBQ0ksRUFBRSxFQUFFO0VBQUUsZ0JBQ3JCL1gsMERBQUEsQ0FBQzRDLDJGQUFvQjtJQUFDb1YsV0FBVyxFQUFFblYsMkVBQVlBO0VBQUMsZ0JBQzVDN0MsMERBQUEsQ0FBQzhDLHVFQUFVO0lBQ1BtVixLQUFLLEVBQUMsTUFBTTtJQUNadkQsS0FBSyxFQUFFalMsNkNBQUssQ0FBQ3NHLGNBQWMsQ0FBQ3BCLElBQUksQ0FBRTtJQUNsQ3VRLFFBQVEsRUFBR0MsUUFBUSxJQUFLblAsaUJBQWlCLENBQUFuRixhQUFBLENBQUFBLGFBQUEsS0FBTWtGLGNBQWM7TUFBRXBCLElBQUksRUFBRXdRLFFBQVEsR0FBR0EsUUFBUSxDQUFDdlEsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHO0lBQUUsRUFBRSxDQUFFO0lBQ3RIQSxNQUFNLEVBQUMsWUFBWTtJQUNuQndRLFNBQVMsRUFBRTtNQUFFQyxTQUFTLEVBQUU7UUFBRUMsU0FBUyxFQUFFO01BQUs7SUFBRTtFQUFFLENBQ2pELENBQ2lCLENBQ3BCLENBQUMsZUFDUHRZLDBEQUFBLENBQUNXLHNEQUFJO0lBQUMrVyxJQUFJO0lBQUNDLEVBQUUsRUFBRSxFQUFHO0lBQUNJLEVBQUUsRUFBRTtFQUFFLGdCQUNyQi9YLDBEQUFBLENBQUNZLHNEQUFTO0lBQUMwWCxTQUFTO0lBQUNMLEtBQUssRUFBQyxhQUFhO0lBQUN2RCxLQUFLLEVBQUUzTCxjQUFjLENBQUNsQixTQUFVO0lBQUNxUSxRQUFRLEVBQUdqTSxDQUFDLElBQUtqRCxpQkFBaUIsQ0FBQW5GLGFBQUEsQ0FBQUEsYUFBQSxLQUFNa0YsY0FBYztNQUFFbEIsU0FBUyxFQUFFb0UsQ0FBQyxDQUFDc00sTUFBTSxDQUFDN0Q7SUFBSyxFQUFFO0VBQUUsQ0FBRSxDQUMvSixDQUFDLGVBQ1AxVSwwREFBQSxDQUFDVyxzREFBSTtJQUFDK1csSUFBSTtJQUFDQyxFQUFFLEVBQUUsRUFBRztJQUFDSSxFQUFFLEVBQUU7RUFBRSxnQkFDckIvWCwwREFBQSxDQUFDNkIsc0RBQVk7SUFDVHlXLFNBQVM7SUFDVEUsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFFO0lBQzlGOUQsS0FBSyxFQUFFM0wsY0FBYyxDQUFDVCxTQUFTLElBQUksSUFBSztJQUN4QzRQLFFBQVEsRUFBRUEsQ0FBQ2pNLENBQUMsRUFBRWtNLFFBQVEsS0FBSzNELHFCQUFxQixDQUFDLFdBQVcsRUFBRTJELFFBQVEsSUFBSSxFQUFFLENBQUU7SUFDOUVNLFdBQVcsRUFBR0MsTUFBTSxpQkFBSzFZLDBEQUFBLENBQUNZLHNEQUFTLEVBQUErWCxRQUFBLEtBQUtELE1BQU07TUFBRVQsS0FBSyxFQUFDO0lBQVksRUFBRSxDQUFFO0lBQ3RFVyxvQkFBb0IsRUFBRUEsQ0FBQ0MsTUFBTSxFQUFFbkUsS0FBSyxLQUFLbUUsTUFBTSxLQUFLbkU7RUFBTSxDQUM3RCxDQUNDLENBQUMsZUFFUDFVLDBEQUFBLENBQUNXLHNEQUFJO0lBQUMrVyxJQUFJO0lBQUNDLEVBQUUsRUFBRSxFQUFHO0lBQUNJLEVBQUUsRUFBRTtFQUFFLGdCQUNyQi9YLDBEQUFBLENBQUNjLHFEQUFHO0lBQUNxVixFQUFFLEVBQUU7TUFBRUMsT0FBTyxFQUFFLE1BQU07TUFBRTBDLEdBQUcsRUFBRSxDQUFDO01BQUVDLFVBQVUsRUFBRTtJQUFTO0VBQUUsZ0JBQ3ZEL1ksMERBQUEsQ0FBQzZCLHNEQUFZO0lBQ1R5VyxTQUFTO0lBQ1RFLE9BQU8sRUFBRXhGLHFCQUFxQixDQUFDLGNBQWMsQ0FBRTtJQUMvQ2dHLGNBQWMsRUFBR0gsTUFBTSxJQUFLQSxNQUFNLENBQUNwTSxZQUFZLElBQUksRUFBRztJQUN0RGlJLEtBQUssRUFBRXJQLFNBQVMsQ0FBQ2MsSUFBSSxDQUFDOEYsQ0FBQyxJQUFJQSxDQUFDLENBQUNRLFlBQVksS0FBSzFELGNBQWMsQ0FBQ2pCLFlBQVksQ0FBQyxJQUFJLElBQUs7SUFDbkZvUSxRQUFRLEVBQUVBLENBQUNqTSxDQUFDLEVBQUVrTSxRQUFRLEtBQUszRCxxQkFBcUIsQ0FBQyxjQUFjLEVBQUUyRCxRQUFRLEdBQUdBLFFBQVEsQ0FBQzFMLFlBQVksR0FBRyxFQUFFLENBQUU7SUFDeEdnTSxXQUFXLEVBQUdDLE1BQU0saUJBQUsxWSwwREFBQSxDQUFDWSxzREFBUyxFQUFBK1gsUUFBQSxLQUFLRCxNQUFNO01BQUVULEtBQUssRUFBQztJQUFVLEVBQUU7RUFBRSxDQUN2RSxDQUFDLEVBQ0RsUCxjQUFjLENBQUNqQixZQUFZLGlCQUN4QjlILDBEQUFBLENBQUMrQixzREFBaUI7SUFDZDJTLEtBQUssRUFBRTNMLGNBQWMsQ0FBQ2IsZUFBZSxHQUFHLE1BQU0sR0FBRyxNQUFPO0lBQ3hEK1EsU0FBUztJQUNUZixRQUFRLEVBQUVBLENBQUNqTSxDQUFDLEVBQUVrSCxHQUFHLEtBQUtBLEdBQUcsSUFBSXdCLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFeEIsR0FBRyxDQUFFO0lBQ3pFdkIsSUFBSSxFQUFDO0VBQU8sZ0JBRVo1UiwwREFBQSxDQUFDOEIsc0RBQVk7SUFBQzRTLEtBQUssRUFBQyxNQUFNO0lBQUN5QixFQUFFLEVBQUU7TUFBRW9CLEVBQUUsRUFBRSxHQUFHO01BQUVYLEtBQUssRUFBRTtJQUFlO0VBQUUsR0FBQyxNQUFrQixDQUFDLGVBQ3RGNVcsMERBQUEsQ0FBQzhCLHNEQUFZO0lBQUM0UyxLQUFLLEVBQUMsTUFBTTtJQUFDeUIsRUFBRSxFQUFFO01BQUVvQixFQUFFLEVBQUUsR0FBRztNQUFFWCxLQUFLLEVBQUU7SUFBZTtFQUFFLEdBQUMsVUFBbUIsQ0FDdkUsQ0FFdEIsQ0FDSCxDQUFDLGVBQ1A1VywwREFBQSxDQUFDVyxzREFBSTtJQUFDK1csSUFBSTtJQUFDQyxFQUFFLEVBQUUsRUFBRztJQUFDSSxFQUFFLEVBQUU7RUFBRSxnQkFDckIvWCwwREFBQSxDQUFDYyxxREFBRztJQUFDcVYsRUFBRSxFQUFFO01BQUVDLE9BQU8sRUFBRSxNQUFNO01BQUUwQyxHQUFHLEVBQUUsQ0FBQztNQUFFQyxVQUFVLEVBQUU7SUFBUztFQUFFLGdCQUN2RC9ZLDBEQUFBLENBQUM2QixzREFBWTtJQUNUeVcsU0FBUztJQUNURSxPQUFPLEVBQUV4RixxQkFBcUIsQ0FBQyxTQUFTLENBQUU7SUFDMUNnRyxjQUFjLEVBQUdILE1BQU0sSUFBS0EsTUFBTSxDQUFDcE0sWUFBWSxJQUFJLEVBQUc7SUFDdERpSSxLQUFLLEVBQUVyUCxTQUFTLENBQUNjLElBQUksQ0FBQzhGLENBQUMsSUFBSUEsQ0FBQyxDQUFDUSxZQUFZLEtBQUsxRCxjQUFjLENBQUNoQixPQUFPLENBQUMsSUFBSSxJQUFLO0lBQzlFbVEsUUFBUSxFQUFFQSxDQUFDak0sQ0FBQyxFQUFFa00sUUFBUSxLQUFLM0QscUJBQXFCLENBQUMsU0FBUyxFQUFFMkQsUUFBUSxHQUFHQSxRQUFRLENBQUMxTCxZQUFZLEdBQUcsRUFBRSxDQUFFO0lBQ25HZ00sV0FBVyxFQUFHQyxNQUFNLGlCQUFLMVksMERBQUEsQ0FBQ1ksc0RBQVMsRUFBQStYLFFBQUEsS0FBS0QsTUFBTTtNQUFFVCxLQUFLLEVBQUM7SUFBVSxFQUFFO0VBQUUsQ0FDdkUsQ0FBQyxFQUNEbFAsY0FBYyxDQUFDaEIsT0FBTyxpQkFDbkIvSCwwREFBQSxDQUFDK0Isc0RBQWlCO0lBQ2QyUyxLQUFLLEVBQUUzTCxjQUFjLENBQUNaLGNBQWMsR0FBRyxNQUFNLEdBQUcsTUFBTztJQUN2RDhRLFNBQVM7SUFDVGYsUUFBUSxFQUFFQSxDQUFDak0sQ0FBQyxFQUFFa0gsR0FBRyxLQUFLQSxHQUFHLElBQUl3QixtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRXhCLEdBQUcsQ0FBRTtJQUN4RXZCLElBQUksRUFBQztFQUFPLGdCQUVaNVIsMERBQUEsQ0FBQzhCLHNEQUFZO0lBQUM0UyxLQUFLLEVBQUMsTUFBTTtJQUFDeUIsRUFBRSxFQUFFO01BQUVvQixFQUFFLEVBQUUsR0FBRztNQUFFWCxLQUFLLEVBQUU7SUFBZTtFQUFFLEdBQUMsTUFBa0IsQ0FBQyxlQUN0RjVXLDBEQUFBLENBQUM4QixzREFBWTtJQUFDNFMsS0FBSyxFQUFDLE1BQU07SUFBQ3lCLEVBQUUsRUFBRTtNQUFFb0IsRUFBRSxFQUFFLEdBQUc7TUFBRVgsS0FBSyxFQUFFO0lBQWU7RUFBRSxHQUFDLFVBQW1CLENBQ3ZFLENBRXRCLENBQ0gsQ0FBQyxlQUNQNVcsMERBQUEsQ0FBQ1csc0RBQUk7SUFBQytXLElBQUk7SUFBQ0MsRUFBRSxFQUFFLEVBQUc7SUFBQ0ksRUFBRSxFQUFFO0VBQUUsZ0JBQ3JCL1gsMERBQUEsQ0FBQ2MscURBQUc7SUFBQ3FWLEVBQUUsRUFBRTtNQUFFQyxPQUFPLEVBQUUsTUFBTTtNQUFFMEMsR0FBRyxFQUFFLENBQUM7TUFBRUMsVUFBVSxFQUFFO0lBQVM7RUFBRSxnQkFDdkQvWSwwREFBQSxDQUFDNkIsc0RBQVk7SUFDVHlXLFNBQVM7SUFDVEUsT0FBTyxFQUFFeEYscUJBQXFCLENBQUMsU0FBUyxDQUFFO0lBQzFDZ0csY0FBYyxFQUFHSCxNQUFNLElBQUtBLE1BQU0sQ0FBQ3BNLFlBQVksSUFBSSxFQUFHO0lBQ3REaUksS0FBSyxFQUFFclAsU0FBUyxDQUFDYyxJQUFJLENBQUM4RixDQUFDLElBQUlBLENBQUMsQ0FBQ1EsWUFBWSxLQUFLMUQsY0FBYyxDQUFDZixPQUFPLENBQUMsSUFBSSxJQUFLO0lBQzlFa1EsUUFBUSxFQUFFQSxDQUFDak0sQ0FBQyxFQUFFa00sUUFBUSxLQUFLM0QscUJBQXFCLENBQUMsU0FBUyxFQUFFMkQsUUFBUSxHQUFHQSxRQUFRLENBQUMxTCxZQUFZLEdBQUcsRUFBRSxDQUFFO0lBQ25HZ00sV0FBVyxFQUFHQyxNQUFNLGlCQUFLMVksMERBQUEsQ0FBQ1ksc0RBQVMsRUFBQStYLFFBQUEsS0FBS0QsTUFBTTtNQUFFVCxLQUFLLEVBQUM7SUFBVSxFQUFFO0VBQUUsQ0FDdkUsQ0FBQyxFQUNEbFAsY0FBYyxDQUFDZixPQUFPLGlCQUNuQmhJLDBEQUFBLENBQUMrQixzREFBaUI7SUFDZDJTLEtBQUssRUFBRTNMLGNBQWMsQ0FBQ1gsY0FBYyxHQUFHLE1BQU0sR0FBRyxNQUFPO0lBQ3ZENlEsU0FBUztJQUNUZixRQUFRLEVBQUVBLENBQUNqTSxDQUFDLEVBQUVrSCxHQUFHLEtBQUtBLEdBQUcsSUFBSXdCLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFeEIsR0FBRyxDQUFFO0lBQ3hFdkIsSUFBSSxFQUFDO0VBQU8sZ0JBRVo1UiwwREFBQSxDQUFDOEIsc0RBQVk7SUFBQzRTLEtBQUssRUFBQyxNQUFNO0lBQUN5QixFQUFFLEVBQUU7TUFBRW9CLEVBQUUsRUFBRSxHQUFHO01BQUVYLEtBQUssRUFBRTtJQUFlO0VBQUUsR0FBQyxNQUFrQixDQUFDLGVBQ3RGNVcsMERBQUEsQ0FBQzhCLHNEQUFZO0lBQUM0UyxLQUFLLEVBQUMsTUFBTTtJQUFDeUIsRUFBRSxFQUFFO01BQUVvQixFQUFFLEVBQUUsR0FBRztNQUFFWCxLQUFLLEVBQUU7SUFBZTtFQUFFLEdBQUMsVUFBbUIsQ0FDdkUsQ0FFdEIsQ0FDSCxDQUFDLGVBQ1A1VywwREFBQSxDQUFDVyxzREFBSTtJQUFDK1csSUFBSTtJQUFDQyxFQUFFLEVBQUUsRUFBRztJQUFDSSxFQUFFLEVBQUU7RUFBRSxnQkFDckIvWCwwREFBQSxDQUFDYyxxREFBRztJQUFDcVYsRUFBRSxFQUFFO01BQUVDLE9BQU8sRUFBRSxNQUFNO01BQUUwQyxHQUFHLEVBQUUsQ0FBQztNQUFFQyxVQUFVLEVBQUU7SUFBUztFQUFFLGdCQUN2RC9ZLDBEQUFBLENBQUM2QixzREFBWTtJQUNUeVcsU0FBUztJQUNURSxPQUFPLEVBQUV4RixxQkFBcUIsQ0FBQyxTQUFTLENBQUU7SUFDMUNnRyxjQUFjLEVBQUdILE1BQU0sSUFBS0EsTUFBTSxDQUFDcE0sWUFBWSxJQUFJLEVBQUc7SUFDdERpSSxLQUFLLEVBQUVyUCxTQUFTLENBQUNjLElBQUksQ0FBQzhGLENBQUMsSUFBSUEsQ0FBQyxDQUFDUSxZQUFZLEtBQUsxRCxjQUFjLENBQUNkLE9BQU8sQ0FBQyxJQUFJLElBQUs7SUFDOUVpUSxRQUFRLEVBQUVBLENBQUNqTSxDQUFDLEVBQUVrTSxRQUFRLEtBQUszRCxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUyRCxRQUFRLEdBQUdBLFFBQVEsQ0FBQzFMLFlBQVksR0FBRyxFQUFFLENBQUU7SUFDbkdnTSxXQUFXLEVBQUdDLE1BQU0saUJBQUsxWSwwREFBQSxDQUFDWSxzREFBUyxFQUFBK1gsUUFBQSxLQUFLRCxNQUFNO01BQUVULEtBQUssRUFBQztJQUFVLEVBQUU7RUFBRSxDQUN2RSxDQUFDLEVBQ0RsUCxjQUFjLENBQUNkLE9BQU8saUJBQ25CakksMERBQUEsQ0FBQytCLHNEQUFpQjtJQUNkMlMsS0FBSyxFQUFFM0wsY0FBYyxDQUFDVixjQUFjLEdBQUcsTUFBTSxHQUFHLE1BQU87SUFDdkQ0USxTQUFTO0lBQ1RmLFFBQVEsRUFBRUEsQ0FBQ2pNLENBQUMsRUFBRWtILEdBQUcsS0FBS0EsR0FBRyxJQUFJd0IsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUV4QixHQUFHLENBQUU7SUFDeEV2QixJQUFJLEVBQUM7RUFBTyxnQkFFWjVSLDBEQUFBLENBQUM4QixzREFBWTtJQUFDNFMsS0FBSyxFQUFDLE1BQU07SUFBQ3lCLEVBQUUsRUFBRTtNQUFFb0IsRUFBRSxFQUFFLEdBQUc7TUFBRVgsS0FBSyxFQUFFO0lBQWU7RUFBRSxHQUFDLE1BQWtCLENBQUMsZUFDdEY1VywwREFBQSxDQUFDOEIsc0RBQVk7SUFBQzRTLEtBQUssRUFBQyxNQUFNO0lBQUN5QixFQUFFLEVBQUU7TUFBRW9CLEVBQUUsRUFBRSxHQUFHO01BQUVYLEtBQUssRUFBRTtJQUFlO0VBQUUsR0FBQyxVQUFtQixDQUN2RSxDQUV0QixDQUNILENBQUMsZUFFUDVXLDBEQUFBLENBQUNXLHNEQUFJO0lBQUMrVyxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUFDM1gsMERBQUEsQ0FBQ3lCLHNEQUFPO0lBQUMwVSxFQUFFLEVBQUU7TUFBRStDLEVBQUUsRUFBRTtJQUFFO0VBQUUsQ0FBRSxDQUFPLENBQUMsZUFFcERsWiwwREFBQSxDQUFDVyxzREFBSTtJQUFDK1csSUFBSTtJQUFDQyxFQUFFLEVBQUUsRUFBRztJQUFDSSxFQUFFLEVBQUU7RUFBRSxnQkFDckIvWCwwREFBQSxDQUFDWSxzREFBUztJQUFDMFgsU0FBUztJQUFDNUYsSUFBSSxFQUFDLFFBQVE7SUFBQ3VGLEtBQUssRUFBQyxpQkFBaUI7SUFBQ3ZELEtBQUssRUFBRTNMLGNBQWMsQ0FBQ1IsU0FBVTtJQUFDMlAsUUFBUSxFQUFHak0sQ0FBQyxJQUFLcUgsZ0JBQWdCLENBQUNySCxDQUFDLENBQUNzTSxNQUFNLENBQUM3RCxLQUFLO0VBQUUsQ0FBRSxDQUM5SSxDQUFDLGVBQ1AxVSwwREFBQSxDQUFDVyxzREFBSTtJQUFDK1csSUFBSTtJQUFDQyxFQUFFLEVBQUUsRUFBRztJQUFDSSxFQUFFLEVBQUU7RUFBRSxnQkFDckIvWCwwREFBQSxDQUFDWSxzREFBUztJQUFDMFgsU0FBUztJQUFDNUYsSUFBSSxFQUFDLFFBQVE7SUFBQ3VGLEtBQUssRUFBQyxpQ0FBaUM7SUFBQ3ZELEtBQUssRUFBRTNMLGNBQWMsQ0FBQ0wsb0JBQXFCO0lBQUN3UCxRQUFRLEVBQUdqTSxDQUFDLElBQUtqRCxpQkFBaUIsQ0FBQW5GLGFBQUEsQ0FBQUEsYUFBQSxLQUFNa0YsY0FBYztNQUFFTCxvQkFBb0IsRUFBRXVELENBQUMsQ0FBQ3NNLE1BQU0sQ0FBQzdEO0lBQUssRUFBRTtFQUFFLENBQUUsQ0FDdk4sQ0FBQyxlQUNQMVUsMERBQUEsQ0FBQ1csc0RBQUk7SUFBQytXLElBQUk7SUFBQ0MsRUFBRSxFQUFFLEVBQUc7SUFBQ0ksRUFBRSxFQUFFO0VBQUUsZ0JBQ3JCL1gsMERBQUEsQ0FBQ1ksc0RBQVM7SUFBQzBYLFNBQVM7SUFBQzVGLElBQUksRUFBQyxRQUFRO0lBQUN1RixLQUFLLEVBQUMsK0JBQStCO0lBQUN2RCxLQUFLLEVBQUUzTCxjQUFjLENBQUNKLGtCQUFtQjtJQUFDdVAsUUFBUSxFQUFHak0sQ0FBQyxJQUFLakQsaUJBQWlCLENBQUFuRixhQUFBLENBQUFBLGFBQUEsS0FBTWtGLGNBQWM7TUFBRUosa0JBQWtCLEVBQUVzRCxDQUFDLENBQUNzTSxNQUFNLENBQUM3RDtJQUFLLEVBQUU7RUFBRSxDQUFFLENBQ2pOLENBQUMsZUFDUDFVLDBEQUFBLENBQUNXLHNEQUFJO0lBQUMrVyxJQUFJO0lBQUNDLEVBQUUsRUFBRSxFQUFHO0lBQUNJLEVBQUUsRUFBRTtFQUFFLGdCQUNyQi9YLDBEQUFBLENBQUNZLHNEQUFTO0lBQUMwWCxTQUFTO0lBQUM1RixJQUFJLEVBQUMsUUFBUTtJQUFDdUYsS0FBSyxFQUFDLDZCQUE2QjtJQUFDdkQsS0FBSyxFQUFFM0wsY0FBYyxDQUFDSCxnQkFBaUI7SUFBQ3NQLFFBQVEsRUFBR2pNLENBQUMsSUFBS2pELGlCQUFpQixDQUFBbkYsYUFBQSxDQUFBQSxhQUFBLEtBQU1rRixjQUFjO01BQUVILGdCQUFnQixFQUFFcUQsQ0FBQyxDQUFDc00sTUFBTSxDQUFDN0Q7SUFBSyxFQUFFO0VBQUUsQ0FBRSxDQUMzTSxDQUFDLEVBRU4zTCxjQUFjLENBQUNSLFNBQVMsR0FBRyxDQUFDLGlCQUN6QnZJLDBEQUFBLENBQUNXLHNEQUFJO0lBQUMrVyxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNkM1gsMERBQUEsQ0FBQ2MscURBQUc7SUFBQ3FWLEVBQUUsRUFBRTtNQUFFQyxPQUFPLEVBQUUsTUFBTTtNQUFFMkMsVUFBVSxFQUFFLFFBQVE7TUFBRUQsR0FBRyxFQUFFLENBQUM7TUFBRUssRUFBRSxFQUFFO0lBQUU7RUFBRSxnQkFDOURuWiwwREFBQSxDQUFDUyxzREFBVTtJQUFDdVcsT0FBTyxFQUFDO0VBQVcsR0FBQyw4QkFBd0MsQ0FBQyxlQUN6RWhYLDBEQUFBLENBQUNnQyxzREFBSTtJQUNEaVcsS0FBSyxtQkFBQXpULE1BQUEsQ0FBbUIsQ0FBQ3VFLGNBQWMsQ0FBQ1AsV0FBVyxJQUFJLEVBQUUsRUFBRTRMLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVsQixHQUFHLEtBQUtrQixHQUFHLElBQUk5QixRQUFRLENBQUNZLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFHO0lBQ2pIeUQsS0FBSyxFQUFDLFNBQVM7SUFDZmhGLElBQUksRUFBQyxPQUFPO0lBQ1p1RSxFQUFFLEVBQUU7TUFBRWlELFVBQVUsRUFBRTtJQUFPO0VBQUUsQ0FDOUIsQ0FDQSxDQUFDLGVBQ05wWiwwREFBQSxDQUFDYyxxREFBRztJQUFDcVYsRUFBRSxFQUFFO01BQUVDLE9BQU8sRUFBRSxNQUFNO01BQUVpRCxRQUFRLEVBQUUsTUFBTTtNQUFFUCxHQUFHLEVBQUU7SUFBRTtFQUFFLEdBQ2xELENBQUMvUCxjQUFjLENBQUNQLFdBQVcsSUFBSSxFQUFFLEVBQUV3SCxHQUFHLENBQUMsQ0FBQ21ELEdBQUcsRUFBRUMsR0FBRyxrQkFDN0NwVCwwREFBQSxDQUFDWSxzREFBUztJQUFDMFksR0FBRyxFQUFFbEcsR0FBSTtJQUFDNkUsS0FBSyxVQUFBelQsTUFBQSxDQUFVNE8sR0FBRyxHQUFHLENBQUMsQ0FBRztJQUFDeEIsSUFBSSxFQUFDLE9BQU87SUFBQ2MsSUFBSSxFQUFDLFFBQVE7SUFBQ2dDLEtBQUssRUFBRXZCLEdBQUk7SUFBQytFLFFBQVEsRUFBR2pNLENBQUMsSUFBSzRILHNCQUFzQixDQUFDVCxHQUFHLEVBQUVuSCxDQUFDLENBQUNzTSxNQUFNLENBQUM3RCxLQUFLLENBQUU7SUFBQ3lCLEVBQUUsRUFBRTtNQUFFRSxLQUFLLEVBQUU7SUFBSTtFQUFFLENBQUUsQ0FDNUssQ0FDQSxDQUNILENBQ1QsZUFFRHJXLDBEQUFBLENBQUNXLHNEQUFJO0lBQUMrVyxJQUFJO0lBQUNDLEVBQUUsRUFBRSxFQUFHO0lBQUNJLEVBQUUsRUFBRTtFQUFFLGdCQUNyQi9YLDBEQUFBLENBQUNjLHFEQUFHO0lBQUNxVixFQUFFLEVBQUU7TUFBRXZKLENBQUMsRUFBRSxDQUFDO01BQUUyTSxPQUFPLEVBQUUsU0FBUztNQUFFM0IsWUFBWSxFQUFFO0lBQUU7RUFBRSxnQkFDbkQ1WCwwREFBQSxDQUFDUyxzREFBVTtJQUFDdVcsT0FBTyxFQUFDO0VBQVMsR0FBQyxzQkFBZ0MsQ0FBQyxlQUMvRGhYLDBEQUFBLENBQUNTLHNEQUFVO0lBQUN1VyxPQUFPLEVBQUMsSUFBSTtJQUFDSixLQUFLLEVBQUM7RUFBVyxHQUFFeEksSUFBSSxDQUFDb0wsS0FBSyxDQUFDN0csZ0JBQWdCLENBQUM1SixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzBRLGNBQWMsQ0FBQyxDQUFDLEVBQUMsS0FBZSxDQUM3SCxDQUNILENBQ0osQ0FBQyxlQUNQelosMERBQUEsQ0FBQ2Esc0RBQU07SUFDSHlYLFNBQVM7SUFDVHRCLE9BQU8sRUFBQyxXQUFXO0lBQ25CcEYsSUFBSSxFQUFDLE9BQU87SUFDWmlGLE9BQU8sRUFBRWhDLFVBQVc7SUFDcEJzQixFQUFFLEVBQUU7TUFBRW1CLEVBQUUsRUFBRSxDQUFDO01BQUVpQyxPQUFPLEVBQUU7SUFBVSxDQUFFO0lBQ2xDRyxTQUFTLGVBQUUxWiwwREFBQSxDQUFDbUMsaUVBQVEsTUFBRSxDQUFFO0lBQ3hCd1gsUUFBUSxFQUFFNVA7RUFBYSxHQUV0QkEsWUFBWSxHQUFHLFdBQVcsR0FBSWhCLGNBQWMsQ0FBQ3pDLEVBQUUsSUFBSXlDLGNBQWMsQ0FBQytNLEdBQUcsR0FBRyxtQkFBbUIsR0FBRyxtQkFDM0YsQ0FDTCxDQUNMLENBQUMsZUFFUDlWLDBEQUFBLENBQUNXLHNEQUFJO0lBQUMrVyxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNkM1gsMERBQUEsQ0FBQ1Usc0RBQUs7SUFBQ3lWLEVBQUUsRUFBRTtNQUFFdkosQ0FBQyxFQUFFLENBQUM7TUFBRWdMLFlBQVksRUFBRSxDQUFDO01BQUVDLFNBQVMsRUFBRTtJQUFFO0VBQUUsZ0JBQy9DN1gsMERBQUEsQ0FBQ2MscURBQUc7SUFBQ3FWLEVBQUUsRUFBRTtNQUFFQyxPQUFPLEVBQUUsTUFBTTtNQUFFd0QsY0FBYyxFQUFFLGVBQWU7TUFBRWIsVUFBVSxFQUFFLFFBQVE7TUFBRUksRUFBRSxFQUFFO0lBQUU7RUFBRSxnQkFDdkZuWiwwREFBQSxDQUFDUyxzREFBVTtJQUFDdVcsT0FBTyxFQUFDO0VBQUksR0FBQyxpQkFBMkIsQ0FBQyxlQUNyRGhYLDBEQUFBLENBQUNjLHFEQUFHO0lBQUNxVixFQUFFLEVBQUU7TUFBRUMsT0FBTyxFQUFFLE1BQU07TUFBRTBDLEdBQUcsRUFBRSxDQUFDO01BQUVDLFVBQVUsRUFBRSxRQUFRO01BQUVuTSxDQUFDLEVBQUUsQ0FBQztNQUFFaU4sTUFBTSxFQUFFLGdCQUFnQjtNQUFFakMsWUFBWSxFQUFFO0lBQUU7RUFBRSxnQkFDeEc1WCwwREFBQSxDQUFDUyxzREFBVTtJQUFDdVcsT0FBTyxFQUFDLFNBQVM7SUFBQ29DLFVBQVUsRUFBQztFQUFNLEdBQUMsZ0JBQTBCLENBQUMsZUFDM0VwWiwwREFBQSxDQUFDNEMsMkZBQW9CO0lBQUNvVixXQUFXLEVBQUVuViwyRUFBWUE7RUFBQyxnQkFDNUM3QywwREFBQSxDQUFDOEMsdUVBQVU7SUFDUG1WLEtBQUssRUFBQyxNQUFNO0lBQ1p2RCxLQUFLLEVBQUV2TCxRQUFRLEdBQUcxRyw2Q0FBSyxDQUFDMEcsUUFBUSxDQUFDLEdBQUcsSUFBSztJQUN6QytPLFFBQVEsRUFBR0MsUUFBUSxJQUFLL08sV0FBVyxDQUFDK08sUUFBUSxJQUFJQSxRQUFRLENBQUM5VSxPQUFPLENBQUMsQ0FBQyxHQUFHOFUsUUFBUSxDQUFDdlEsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBRTtJQUMzR0EsTUFBTSxFQUFDLFlBQVk7SUFDbkJ3USxTQUFTLEVBQUU7TUFBRUMsU0FBUyxFQUFFO1FBQUV6RyxJQUFJLEVBQUUsT0FBTztRQUFFdUUsRUFBRSxFQUFFO1VBQUVFLEtBQUssRUFBRTtRQUFJO01BQUU7SUFBRTtFQUFFLENBQ25FLENBQUMsZUFDRnJXLDBEQUFBLENBQUM4Qyx1RUFBVTtJQUNQbVYsS0FBSyxFQUFDLElBQUk7SUFDVnZELEtBQUssRUFBRW5MLE1BQU0sR0FBRzlHLDZDQUFLLENBQUM4RyxNQUFNLENBQUMsR0FBRyxJQUFLO0lBQ3JDMk8sUUFBUSxFQUFHQyxRQUFRLElBQUszTyxTQUFTLENBQUMyTyxRQUFRLElBQUlBLFFBQVEsQ0FBQzlVLE9BQU8sQ0FBQyxDQUFDLEdBQUc4VSxRQUFRLENBQUN2USxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFFO0lBQ3pHQSxNQUFNLEVBQUMsWUFBWTtJQUNuQndRLFNBQVMsRUFBRTtNQUFFQyxTQUFTLEVBQUU7UUFBRXpHLElBQUksRUFBRSxPQUFPO1FBQUV1RSxFQUFFLEVBQUU7VUFBRUUsS0FBSyxFQUFFO1FBQUk7TUFBRTtJQUFFO0VBQUUsQ0FDbkUsQ0FDaUIsQ0FDckIsQ0FDSixDQUFDLEVBQ0osQ0FBQ2xOLFFBQVEsSUFBSSxDQUFDSSxNQUFNLGdCQUNsQnZKLDBEQUFBLENBQUNpQyxzREFBSztJQUFDNlgsUUFBUSxFQUFDLFNBQVM7SUFBQzNELEVBQUUsRUFBRTtNQUFFbUIsRUFBRSxFQUFFLENBQUM7TUFBRWlDLE9BQU8sRUFBRSxTQUFTO01BQUVNLE1BQU0sRUFBRTtJQUFvQjtFQUFFLGdCQUNyRjdaLDBEQUFBLFlBQUcsbUJBQW9CLENBQUMsd0RBQ3JCLENBQUMsR0FDUjJPLGlCQUFpQixDQUFDaEMsTUFBTSxLQUFLLENBQUMsZ0JBQzlCM00sMERBQUEsQ0FBQ2lDLHNEQUFLO0lBQUM2WCxRQUFRLEVBQUMsTUFBTTtJQUFDM0QsRUFBRSxFQUFFO01BQUVtQixFQUFFLEVBQUU7SUFBRTtFQUFFLEdBQUMsMkNBRS9CLENBQUMsR0FDUixJQUFJLEVBRVBuTyxRQUFRLElBQUlJLE1BQU0sSUFBSW9GLGlCQUFpQixDQUFDaEMsTUFBTSxHQUFHLENBQUMsaUJBQy9DM00sMERBQUEsQ0FBQzJCLHNEQUFjLHFCQUNYM0IsMERBQUEsQ0FBQ2dCLHNEQUFLO0lBQUM0USxJQUFJLEVBQUM7RUFBTyxnQkFDZjVSLDBEQUFBLENBQUNtQixzREFBUztJQUFDZ1YsRUFBRSxFQUFFO01BQUVvRCxPQUFPLEVBQUU7SUFBTztFQUFFLGdCQUMvQnZaLDBEQUFBLENBQUNvQixzREFBUSxxQkFDTHBCLDBEQUFBLENBQUNrQixzREFBUztJQUFDaVYsRUFBRSxFQUFFO01BQUVpRCxVQUFVLEVBQUU7SUFBTztFQUFFLEdBQUMsTUFBZSxDQUFDLGVBQ3ZEcFosMERBQUEsQ0FBQ2tCLHNEQUFTO0lBQUNpVixFQUFFLEVBQUU7TUFBRWlELFVBQVUsRUFBRTtJQUFPO0VBQUUsR0FBQyxTQUFrQixDQUFDLGVBQzFEcFosMERBQUEsQ0FBQ2tCLHNEQUFTO0lBQUNpVixFQUFFLEVBQUU7TUFBRWlELFVBQVUsRUFBRTtJQUFPO0VBQUUsR0FBQyxVQUFtQixDQUFDLGVBQzNEcFosMERBQUEsQ0FBQ2tCLHNEQUFTO0lBQUNpVixFQUFFLEVBQUU7TUFBRWlELFVBQVUsRUFBRTtJQUFPO0VBQUUsR0FBQyxZQUFxQixDQUFDLGVBQzdEcFosMERBQUEsQ0FBQ2tCLHNEQUFTO0lBQUM2WSxLQUFLLEVBQUMsT0FBTztJQUFDNUQsRUFBRSxFQUFFO01BQUVpRCxVQUFVLEVBQUU7SUFBTztFQUFFLEdBQUMsT0FBZ0IsQ0FBQyxlQUN0RXBaLDBEQUFBLENBQUNrQixzREFBUztJQUFDNlksS0FBSyxFQUFDLE9BQU87SUFBQzVELEVBQUUsRUFBRTtNQUFFaUQsVUFBVSxFQUFFO0lBQU87RUFBRSxHQUFDLFFBQWlCLENBQUMsZUFDdkVwWiwwREFBQSxDQUFDa0Isc0RBQVM7SUFBQzZZLEtBQUssRUFBQyxPQUFPO0lBQUM1RCxFQUFFLEVBQUU7TUFBRWlELFVBQVUsRUFBRTtJQUFPO0VBQUUsR0FBQyxnQkFBeUIsQ0FBQyxlQUMvRXBaLDBEQUFBLENBQUNrQixzREFBUztJQUFDNlksS0FBSyxFQUFDLE9BQU87SUFBQzVELEVBQUUsRUFBRTtNQUFFaUQsVUFBVSxFQUFFO0lBQU87RUFBRSxHQUFDLFNBQWtCLENBQ2pFLENBQ0gsQ0FBQyxlQUNacFosMERBQUEsQ0FBQ2lCLHNEQUFTLFFBQ0wwTixpQkFBaUIsQ0FBQ3FCLEdBQUcsQ0FBQ2QsQ0FBQyxpQkFDcEJsUCwwREFBQSxDQUFDb0Isc0RBQVE7SUFBQ2tZLEdBQUcsRUFBRXBLLENBQUMsQ0FBQzVJO0VBQUcsZ0JBQ2hCdEcsMERBQUEsQ0FBQ2tCLHNEQUFTLFFBQUV1Qiw2Q0FBSyxDQUFDeU0sQ0FBQyxDQUFDdkgsSUFBSSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQWEsQ0FBQyxlQUMzRDVILDBEQUFBLENBQUNrQixzREFBUyxRQUFFZ08sQ0FBQyxDQUFDckgsU0FBcUIsQ0FBQyxlQUNwQzdILDBEQUFBLENBQUNrQixzREFBUyxRQUFFZ08sQ0FBQyxDQUFDcEgsWUFBd0IsQ0FBQyxlQUN2QzlILDBEQUFBLENBQUNrQixzREFBUyxRQUFFZ08sQ0FBQyxDQUFDNUcsU0FBcUIsQ0FBQyxlQUNwQ3RJLDBEQUFBLENBQUNrQixzREFBUztJQUFDNlksS0FBSyxFQUFDO0VBQU8sR0FBRTdLLENBQUMsQ0FBQzNHLFNBQXFCLENBQUMsZUFDbER2SSwwREFBQSxDQUFDa0Isc0RBQVM7SUFBQzZZLEtBQUssRUFBQztFQUFPLEdBQUU3SyxDQUFDLENBQUN1RCxXQUF1QixDQUFDLGVBQ3BEelMsMERBQUEsQ0FBQ2tCLHNEQUFTO0lBQUM2WSxLQUFLLEVBQUM7RUFBTyxHQUFDLEdBQ3BCLEVBQUMsQ0FBQzdLLENBQUMsQ0FBQ3VELFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQ2xMLFVBQVUsQ0FBQzJILENBQUMsQ0FBQzhDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSTlDLENBQUMsQ0FBQ3VELFdBQVcsR0FBRyxDQUFDLEVBQUVnSCxjQUFjLENBQUNPLFNBQVMsRUFBRTtJQUFFQyxxQkFBcUIsRUFBRSxDQUFDO0lBQUVDLHFCQUFxQixFQUFFO0VBQUUsQ0FBQyxDQUNwSixDQUFDLGVBQ1psYSwwREFBQSxDQUFDa0Isc0RBQVM7SUFBQzZZLEtBQUssRUFBQztFQUFPLGdCQUNwQi9aLDBEQUFBLENBQUM0QixxREFBVTtJQUFDZ1EsSUFBSSxFQUFDLE9BQU87SUFBQ2dGLEtBQUssRUFBQyxTQUFTO0lBQUNDLE9BQU8sRUFBRUEsQ0FBQSxLQUFNN04saUJBQWlCLENBQUNrRyxDQUFDO0VBQUUsZ0JBQUNsUCwwREFBQSxDQUFDc0MsaUVBQVE7SUFBQzZYLFFBQVEsRUFBQztFQUFPLENBQUUsQ0FBYSxDQUFDLGVBQ3hIbmEsMERBQUEsQ0FBQzRCLHFEQUFVO0lBQUNnUSxJQUFJLEVBQUMsT0FBTztJQUFDZ0YsS0FBSyxFQUFDLE9BQU87SUFBQ0MsT0FBTyxlQUFBaFIsaUJBQUEsQ0FBRSxhQUFZO01BQ3hELElBQUl1VSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1FBQ3ZDLElBQU14RSxRQUFRLEdBQUczRyxDQUFDLENBQUM0RyxHQUFHLElBQUk1RyxDQUFDLENBQUM1SSxFQUFFOztRQUU5QjtRQUNBLElBQU1nVSxNQUFNLEdBQUcsQ0FBQyxHQUFHL1Asb0JBQW9CLENBQUM7UUFDeENDLHVCQUF1QixDQUFDK1AsSUFBSSxJQUFJQSxJQUFJLENBQUN2TyxNQUFNLENBQUMwTCxJQUFJLElBQUksQ0FBQ0EsSUFBSSxDQUFDNUIsR0FBRyxJQUFJNEIsSUFBSSxDQUFDcFIsRUFBRSxNQUFNdVAsUUFBUSxDQUFDLENBQUM7UUFDeEZyVCxrREFBSyxDQUFDeVQsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBRS9CLElBQUk7VUFDQSxJQUFJLE9BQU9KLFFBQVEsS0FBSyxRQUFRLElBQUlBLFFBQVEsQ0FBQ2xKLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDdEQsTUFBTWhLLDhDQUFLLENBQUNxVCxJQUFJLElBQUF4UixNQUFBLENBQUl6QixxREFBWSwrQkFBNEI7Y0FBRXVELEVBQUUsRUFBRXVQO1lBQVMsQ0FBQyxDQUFDO1VBQ2pGO1VBQ0E7VUFDQTNLLFNBQVMsQ0FBQyxDQUFDLENBQUNzUCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsT0FBTy9TLEdBQUcsRUFBRTtVQUNWUixPQUFPLENBQUNELEtBQUssQ0FBQyxlQUFlLEVBQUVTLEdBQUcsQ0FBQztVQUNuQ2pGLGtEQUFLLENBQUN3RSxLQUFLLENBQUMsc0JBQXNCLENBQUM7VUFDbkM7VUFDQXdELHVCQUF1QixDQUFDOFAsTUFBTSxDQUFDO1FBQ25DO01BQ0o7SUFDSixDQUFDO0VBQUMsZ0JBQUN0YSwwREFBQSxDQUFDcUMsbUVBQVU7SUFBQzhYLFFBQVEsRUFBQztFQUFPLENBQUUsQ0FBYSxDQUN2QyxDQUNMLENBQ2IsQ0FDTSxDQUNSLENBQ0ssQ0FDbkIsRUFFQWhSLFFBQVEsSUFBSUksTUFBTSxJQUFJb0YsaUJBQWlCLENBQUNoQyxNQUFNLEdBQUcsQ0FBQyxpQkFDL0MzTSwwREFBQSxDQUFDYyxxREFBRztJQUFDcVYsRUFBRSxFQUFFO01BQUVtQixFQUFFLEVBQUUsQ0FBQztNQUFFMUssQ0FBQyxFQUFFLENBQUM7TUFBRTJNLE9BQU8sRUFBRSxTQUFTO01BQUVNLE1BQU0sRUFBRSxtQkFBbUI7TUFBRWpDLFlBQVksRUFBRTtJQUFFO0VBQUUsZ0JBQ3ZGNVgsMERBQUEsQ0FBQ1Msc0RBQVU7SUFBQ3VXLE9BQU8sRUFBQyxXQUFXO0lBQUNvQyxVQUFVLEVBQUMsTUFBTTtJQUFDeEMsS0FBSyxFQUFDLFNBQVM7SUFBQ2tCLFlBQVk7RUFBQSxHQUFDLGdCQUVuRSxDQUFDLGVBQ2I5WCwwREFBQSxDQUFDVyxzREFBSTtJQUFDNlcsU0FBUztJQUFDQyxPQUFPLEVBQUUsQ0FBRTtJQUFDc0IsVUFBVSxFQUFDO0VBQVEsZ0JBQzNDL1ksMERBQUEsQ0FBQ1csc0RBQUk7SUFBQytXLElBQUk7SUFBQ0MsRUFBRSxFQUFFLEVBQUc7SUFBQ0ksRUFBRSxFQUFFO0VBQUUsZ0JBQ3JCL1gsMERBQUEsQ0FBQ1Msc0RBQVU7SUFBQ3VXLE9BQU8sRUFBQyxPQUFPO0lBQUNKLEtBQUssRUFBQztFQUFTLGdCQUN2QzVXLDBEQUFBLFlBQUcscUJBQXNCLENBQUMsS0FBQyxFQUFDa1MsaUJBQWlCLENBQUNDLFVBQ3RDLENBQ1YsQ0FBQyxlQUNQblMsMERBQUEsQ0FBQ1csc0RBQUk7SUFBQytXLElBQUk7SUFBQ0MsRUFBRSxFQUFFLEVBQUc7SUFBQ0ksRUFBRSxFQUFFO0VBQUUsZ0JBQ3JCL1gsMERBQUEsQ0FBQ2MscURBQUc7SUFBQ3FWLEVBQUUsRUFBRTtNQUFFQyxPQUFPLEVBQUUsTUFBTTtNQUFFMEMsR0FBRyxFQUFFLENBQUM7TUFBRU8sUUFBUSxFQUFFLE1BQU07TUFBRU4sVUFBVSxFQUFFO0lBQVM7RUFBRSxnQkFDekUvWSwwREFBQSxDQUFDUyxzREFBVTtJQUFDdVcsT0FBTyxFQUFDLE9BQU87SUFBQ0osS0FBSyxFQUFDO0VBQVMsZ0JBQ3ZDNVcsMERBQUEsWUFBRyxrQkFBbUIsQ0FDZCxDQUFDLEVBQ1p5YSxNQUFNLENBQUNDLE9BQU8sQ0FBQ3hJLGlCQUFpQixDQUFDRSxZQUFZLENBQUMsQ0FBQ3BDLEdBQUcsQ0FBQzJLLEtBQUE7SUFBQSxJQUFBQyxNQUFBLEdBQUE1VixjQUFBLENBQUEyVixLQUFBO01BQUVqSSxJQUFJLEdBQUFrSSxNQUFBO01BQUVDLEtBQUssR0FBQUQsTUFBQTtJQUFBLG9CQUM3RDVhLDBEQUFBLENBQUNnQyxzREFBSTtNQUFDc1gsR0FBRyxFQUFFNUcsSUFBSztNQUFDdUYsS0FBSyxLQUFBelQsTUFBQSxDQUFLa08sSUFBSSxRQUFBbE8sTUFBQSxDQUFLcVcsS0FBSyxDQUFDcEIsY0FBYyxDQUFDLENBQUMsQ0FBRztNQUFDN0gsSUFBSSxFQUFDLE9BQU87TUFBQ3VFLEVBQUUsRUFBRTtRQUFFb0QsT0FBTyxFQUFFLFNBQVM7UUFBRTNDLEtBQUssRUFBRSxTQUFTO1FBQUV3QyxVQUFVLEVBQUU7TUFBTztJQUFFLENBQUUsQ0FBQztFQUFBLENBQ2xKLENBQ0EsQ0FDSCxDQUNKLENBQ0wsQ0FFTixDQUNMLENBQUMsRUFHTnpLLGlCQUFpQixDQUFDaEMsTUFBTSxHQUFHLENBQUMsaUJBQ3pCM00sMERBQUEsQ0FBQ1csc0RBQUk7SUFBQytXLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsZ0JBQ2QzWCwwREFBQSxDQUFDVSxzREFBSztJQUFDeVYsRUFBRSxFQUFFO01BQUV2SixDQUFDLEVBQUUsQ0FBQztNQUFFZ0wsWUFBWSxFQUFFLENBQUM7TUFBRUMsU0FBUyxFQUFFLENBQUM7TUFBRTBCLE9BQU8sRUFBRSxTQUFTO01BQUVNLE1BQU0sRUFBRTtJQUFvQjtFQUFFLGdCQUNoRzdaLDBEQUFBLENBQUNjLHFEQUFHO0lBQUNxVixFQUFFLEVBQUU7TUFBRUMsT0FBTyxFQUFFLE1BQU07TUFBRTJDLFVBQVUsRUFBRSxRQUFRO01BQUVELEdBQUcsRUFBRSxDQUFDO01BQUVLLEVBQUUsRUFBRTtJQUFFO0VBQUUsZ0JBQzlEblosMERBQUEsQ0FBQ1Msc0RBQVU7SUFBQ3VXLE9BQU8sRUFBQztFQUFJLEdBQUMsMkRBQXNELENBQzlFLENBQUMsZUFDTmhYLDBEQUFBLENBQUNXLHNEQUFJO0lBQUM2VyxTQUFTO0lBQUNDLE9BQU8sRUFBRTtFQUFFLEdBQ3RCOUksaUJBQWlCLENBQUNxQixHQUFHLENBQUVkLENBQUMsSUFBSztJQUMxQixJQUFNNEwsV0FBVyxHQUFHLENBQ2hCO01BQUUzRyxJQUFJLEVBQUVqRixDQUFDLENBQUNwSCxZQUFZO01BQUVrRixJQUFJLEVBQUVrQyxDQUFDLENBQUNoSCxlQUFlLElBQUksS0FBSztNQUFFNlMsSUFBSSxFQUFFO0lBQWMsQ0FBQyxFQUMvRTtNQUFFNUcsSUFBSSxFQUFFakYsQ0FBQyxDQUFDbkgsT0FBTztNQUFFaUYsSUFBSSxFQUFFa0MsQ0FBQyxDQUFDL0csY0FBYyxJQUFJLEtBQUs7TUFBRTRTLElBQUksRUFBRTtJQUFjLENBQUMsRUFDekU7TUFBRTVHLElBQUksRUFBRWpGLENBQUMsQ0FBQ2xILE9BQU87TUFBRWdGLElBQUksRUFBRWtDLENBQUMsQ0FBQzlHLGNBQWMsSUFBSSxLQUFLO01BQUUyUyxJQUFJLEVBQUU7SUFBYyxDQUFDLEVBQ3pFO01BQUU1RyxJQUFJLEVBQUVqRixDQUFDLENBQUNqSCxPQUFPO01BQUUrRSxJQUFJLEVBQUVrQyxDQUFDLENBQUM3RyxjQUFjLElBQUksS0FBSztNQUFFMFMsSUFBSSxFQUFFO0lBQWMsQ0FBQyxDQUM1RSxDQUFDL08sTUFBTSxDQUFDZ1AsQ0FBQyxJQUFJQSxDQUFDLENBQUM3RyxJQUFJLENBQUM7SUFFckIsSUFBTThHLFdBQVcsR0FBR0gsV0FBVyxDQUFDbk8sTUFBTTtJQUV0QyxJQUFNTSxLQUFLLEdBQUcsQ0FBQTlDLE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFK0MsVUFBVSxLQUFJO01BQ2pDQyxTQUFTLEVBQUU7UUFBRUMsT0FBTyxFQUFFO01BQU0sQ0FBQztNQUM3QkMsTUFBTSxFQUFFO1FBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxJQUFJO1FBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLFFBQVEsRUFBRSxFQUFFO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRTtNQUFNLENBQUM7TUFDOUlDLE1BQU0sRUFBRTtRQUFFVCxRQUFRLEVBQUUsQ0FBQztRQUFFQyxPQUFPLEVBQUUsSUFBSTtRQUFFQyxRQUFRLEVBQUUsQ0FBQztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxRQUFRLEVBQUUsQ0FBQztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxRQUFRLEVBQUUsRUFBRTtRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUU7TUFBTSxDQUFDO01BQzlJRSxNQUFNLEVBQUU7UUFBRVYsUUFBUSxFQUFFLENBQUM7UUFBRUMsT0FBTyxFQUFFLElBQUk7UUFBRUMsUUFBUSxFQUFFLENBQUM7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsUUFBUSxFQUFFLENBQUM7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsUUFBUSxFQUFFLENBQUM7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFO01BQU0sQ0FBQztNQUM3SUcsTUFBTSxFQUFFO1FBQUVYLFFBQVEsRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxJQUFJO1FBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRTtNQUFNLENBQUM7TUFDN0lJLE1BQU0sRUFBRTtRQUFFWixRQUFRLEVBQUUsQ0FBQztRQUFFQyxPQUFPLEVBQUUsSUFBSTtRQUFFQyxRQUFRLEVBQUUsQ0FBQztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxRQUFRLEVBQUUsQ0FBQztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxRQUFRLEVBQUUsQ0FBQztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUU7TUFBTTtJQUNoSixDQUFDO0lBRUQsSUFBTWpCLG9CQUFvQixHQUFHQSxDQUFDQyxPQUFPLEVBQUVDLENBQUMsRUFBRWQsQ0FBQyxFQUFFZSxJQUFJLEtBQUs7TUFDbEQsSUFBSUYsT0FBTyxDQUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUlTLE9BQU8sQ0FBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQUEsSUFBQTZPLGNBQUEsRUFBQUMsZUFBQTtRQUNsRCxPQUFPbk8sSUFBSSxHQUFJRCxDQUFDLElBQUksQ0FBQUUsS0FBSyxhQUFMQSxLQUFLLGdCQUFBaU8sY0FBQSxHQUFMak8sS0FBSyxDQUFFRSxTQUFTLGNBQUErTixjQUFBLHVCQUFoQkEsY0FBQSxDQUFrQjlOLE9BQU8sS0FBSSxDQUFDLENBQUMsR0FBSSxDQUFDLEdBQUlMLENBQUMsSUFBSSxDQUFBRSxLQUFLLGFBQUxBLEtBQUssZ0JBQUFrTyxlQUFBLEdBQUxsTyxLQUFLLENBQUVFLFNBQVMsY0FBQWdPLGVBQUEsdUJBQWhCQSxlQUFBLENBQWtCL04sT0FBTyxLQUFJLENBQUMsQ0FBQyxHQUFJZ0IsSUFBSSxDQUFDQyxHQUFHLENBQUNwQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ3RIO01BRUEsSUFBSXFDLEVBQUUsR0FBRyxJQUFJO1FBQUVDLFVBQVUsR0FBRyxDQUFDO01BQzdCLElBQUl6QixPQUFPLENBQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUFFaUMsRUFBRSxHQUFHLENBQUFyQixLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRUksTUFBTSxLQUFJLENBQUMsQ0FBQztNQUFFLENBQUMsTUFDcEQsSUFBSVAsT0FBTyxDQUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFBRWlDLEVBQUUsR0FBRyxDQUFBckIsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUVjLE1BQU0sS0FBSSxDQUFDLENBQUM7TUFBRSxDQUFDLE1BQ3pELElBQUlqQixPQUFPLENBQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUFFaUMsRUFBRSxHQUFHLENBQUFyQixLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRWUsTUFBTSxNQUFJZixLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRXVCLFlBQVksS0FBSSxDQUFDLENBQUM7TUFBRSxDQUFDLE1BQ2hGLElBQUkxQixPQUFPLENBQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUFFaUMsRUFBRSxHQUFHLENBQUFyQixLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRWdCLE1BQU0sTUFBSWhCLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFdUIsWUFBWSxLQUFJLENBQUMsQ0FBQztNQUFFLENBQUMsTUFDaEYsSUFBSTFCLE9BQU8sQ0FBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQUVpQyxFQUFFLEdBQUcsQ0FBQXJCLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFaUIsTUFBTSxNQUFJakIsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUV1QixZQUFZLEtBQUksQ0FBQyxDQUFDO01BQUUsQ0FBQyxNQUNoRixPQUFPLENBQUM7TUFFYkQsVUFBVSxHQUFHRCxFQUFFLENBQUNkLFFBQVEsSUFBSSxDQUFDO01BRTdCLElBQU1pQixjQUFjLEdBQUd6QixJQUFJLEdBQUdvQixJQUFJLENBQUNNLEdBQUcsQ0FBQzNCLENBQUMsRUFBRXdCLFVBQVUsQ0FBQyxHQUFHeEIsQ0FBQztNQUV6RCxJQUFJM0IsSUFBSSxHQUFHLENBQUM7TUFDWixJQUFJcUQsY0FBYyxLQUFLSCxFQUFFLENBQUNoQixRQUFRLElBQUksQ0FBQyxDQUFDLEVBQUVsQyxJQUFJLEdBQUcsQ0FBQ2tELEVBQUUsQ0FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSVIsQ0FBQyxDQUFDLEtBQ2xFLElBQUkwQixjQUFjLEtBQUtILEVBQUUsQ0FBQ2QsUUFBUSxJQUFJLENBQUMsQ0FBQyxFQUFFcEMsSUFBSSxHQUFHa0QsRUFBRSxDQUFDYixPQUFPLElBQUksQ0FBQyxDQUFDLEtBQ2pFLElBQUlnQixjQUFjLE1BQU1ILEVBQUUsQ0FBQ1osUUFBUSxJQUFJLENBQUMsQ0FBQyxFQUFFdEMsSUFBSSxHQUFHa0QsRUFBRSxDQUFDWCxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQ2xFLElBQUljLGNBQWMsS0FBS0gsRUFBRSxDQUFDVixRQUFRLElBQUksQ0FBQyxDQUFDLEVBQUV4QyxJQUFJLEdBQUdrRCxFQUFFLENBQUNULE9BQU8sSUFBSSxDQUFDLENBQUMsS0FDakV6QyxJQUFJLEdBQUdrRCxFQUFFLENBQUNSLE9BQU8sSUFBSSxDQUFDO01BRTNCLE9BQU9kLElBQUksR0FBRzVCLElBQUksR0FBRyxDQUFDLEdBQUdBLElBQUk7SUFDakMsQ0FBQztJQUVELElBQU1nUSxhQUFhLEdBQUcsQ0FBQztJQUN2QixJQUFNQyxTQUFTLEdBQUd4TyxvQkFBb0IsQ0FBQ3FDLENBQUMsQ0FBQzVHLFNBQVMsRUFBRTRHLENBQUMsQ0FBQzNHLFNBQVMsSUFBSSxDQUFDLEVBQUU2UyxhQUFhLEVBQUUsS0FBSyxDQUFDO0lBRTNGLElBQU1FLGVBQWUsR0FBR1IsV0FBVyxDQUFDOUssR0FBRyxDQUFDZ0wsQ0FBQyxJQUFJO01BQ3pDLElBQU1PLEtBQUssR0FBR1AsQ0FBQyxDQUFDaE8sSUFBSSxHQUFHcU8sU0FBUyxHQUFHLENBQUMsR0FBR0EsU0FBUztNQUNoRCxPQUFBeFgsYUFBQSxDQUFBQSxhQUFBLEtBQVltWCxDQUFDO1FBQUVPO01BQUs7SUFDeEIsQ0FBQyxDQUFDO0lBRUYsSUFBTUMsYUFBYSxHQUFHRixlQUFlLENBQUNsSCxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFMkcsQ0FBQyxLQUFLM0csR0FBRyxHQUFHMkcsQ0FBQyxDQUFDTyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLElBQU1FLGFBQWEsR0FBR0QsYUFBYTtJQUVuQyxvQkFDSXhiLDBEQUFBLENBQUNXLHNEQUFJO01BQUMrVyxJQUFJO01BQUNDLEVBQUUsRUFBRSxFQUFHO01BQUMrRCxFQUFFLEVBQUUsQ0FBRTtNQUFDcEMsR0FBRyxFQUFFcEssQ0FBQyxDQUFDNUk7SUFBRyxnQkFDaEN0RywwREFBQSxDQUFDVSxzREFBSztNQUFDeVYsRUFBRSxFQUFFO1FBQUV2SixDQUFDLEVBQUUsQ0FBQztRQUFFaU4sTUFBTSxFQUFFLG1CQUFtQjtRQUFFakMsWUFBWSxFQUFFO01BQUU7SUFBRSxnQkFDOUQ1WCwwREFBQSxDQUFDYyxxREFBRztNQUFDcVYsRUFBRSxFQUFFO1FBQUVDLE9BQU8sRUFBRSxNQUFNO1FBQUV3RCxjQUFjLEVBQUUsZUFBZTtRQUFFVCxFQUFFLEVBQUU7TUFBRTtJQUFFLGdCQUNqRW5aLDBEQUFBLENBQUNjLHFEQUFHLHFCQUNBZCwwREFBQSxDQUFDUyxzREFBVTtNQUFDdVcsT0FBTyxFQUFDLFdBQVc7TUFBQ29DLFVBQVUsRUFBQztJQUFNLEdBQUMsVUFBUSxFQUFDbEssQ0FBQyxDQUFDckgsU0FBUyxFQUFDLFVBQUcsRUFBQ3FILENBQUMsQ0FBQzVHLFNBQXNCLENBQUMsZUFDcEd0SSwwREFBQSxDQUFDUyxzREFBVTtNQUFDdVcsT0FBTyxFQUFDLFNBQVM7TUFBQ0osS0FBSyxFQUFDO0lBQWUsR0FBRW5VLDZDQUFLLENBQUN5TSxDQUFDLENBQUN2SCxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFDLFFBQUcsRUFBQ3NILENBQUMsQ0FBQzNHLFNBQVMsRUFBQyxjQUFTLEVBQUMyRyxDQUFDLENBQUN1RCxXQUFXLEVBQUMsU0FBbUIsQ0FDbEosQ0FBQyxlQUNOelMsMERBQUEsQ0FBQ2MscURBQUc7TUFBQ3FWLEVBQUUsRUFBRTtRQUFFd0YsU0FBUyxFQUFFO01BQVE7SUFBRSxnQkFDNUIzYiwwREFBQSxDQUFDUyxzREFBVTtNQUFDdVcsT0FBTyxFQUFDLFNBQVM7TUFBQ0osS0FBSyxFQUFDO0lBQWUsR0FBQywrQkFBeUMsQ0FBQyxlQUM5RjVXLDBEQUFBLENBQUNTLHNEQUFVO01BQUN1VyxPQUFPLEVBQUMsT0FBTztNQUFDb0MsVUFBVSxFQUFDLE1BQU07TUFBQ3hDLEtBQUssRUFBQztJQUFjLEdBQUV4SSxJQUFJLENBQUNvTCxLQUFLLENBQUNpQyxhQUFhLElBQUksQ0FBQyxDQUFDLENBQUNoQyxjQUFjLENBQUMsQ0FBQyxFQUFDLEtBQWUsQ0FDbEksQ0FDSixDQUFDLGVBQ056WiwwREFBQSxDQUFDeUIsc0RBQU87TUFBQzBVLEVBQUUsRUFBRTtRQUFFK0MsRUFBRSxFQUFFO01BQUU7SUFBRSxDQUFFLENBQUMsZUFDMUJsWiwwREFBQSxDQUFDUyxzREFBVTtNQUFDdVcsT0FBTyxFQUFDLFNBQVM7TUFBQ0osS0FBSyxFQUFDLGVBQWU7TUFBQ1IsT0FBTyxFQUFDLE9BQU87TUFBQytDLEVBQUUsRUFBRTtJQUFFLEdBQUMsY0FDM0QsZUFBQW5aLDBEQUFBLFlBQUlvTyxJQUFJLENBQUNvTCxLQUFLLENBQUM2QixTQUFTLENBQUMsQ0FBQzVCLGNBQWMsQ0FBQyxDQUFDLEVBQUMsS0FBTSxDQUFDLGVBQVcsRUFBQzJCLGFBQWEsRUFBQyxpQkFDaEYsQ0FBQyxlQUNicGIsMERBQUEsQ0FBQ2MscURBQUc7TUFBQ3FWLEVBQUUsRUFBRTtRQUFFQyxPQUFPLEVBQUUsTUFBTTtRQUFFaUQsUUFBUSxFQUFFLE1BQU07UUFBRVAsR0FBRyxFQUFFO01BQUU7SUFBRSxHQUNsRHdDLGVBQWUsQ0FBQ3RMLEdBQUcsQ0FBQyxDQUFDZ0wsQ0FBQyxFQUFFWSxFQUFFLGtCQUN2QjViLDBEQUFBLENBQUNjLHFEQUFHO01BQUN3WSxHQUFHLEVBQUVzQyxFQUFHO01BQUN6RixFQUFFLEVBQUU7UUFBRXZKLENBQUMsRUFBRSxDQUFDO1FBQUUyTSxPQUFPLEVBQUUsU0FBUztRQUFFM0IsWUFBWSxFQUFFLENBQUM7UUFBRWlDLE1BQU0sRUFBRSxtQkFBbUI7UUFBRWdDLFFBQVEsRUFBRTtNQUFJO0lBQUUsZ0JBQ3hHN2IsMERBQUEsQ0FBQ1Msc0RBQVU7TUFBQ3VXLE9BQU8sRUFBQyxTQUFTO01BQUNKLEtBQUssRUFBQztJQUFlLEdBQUVvRSxDQUFDLENBQUNELElBQWlCLENBQUMsZUFDekUvYSwwREFBQSxDQUFDUyxzREFBVTtNQUFDdVcsT0FBTyxFQUFDLE9BQU87TUFBQ29DLFVBQVUsRUFBQztJQUFNLEdBQ3hDNEIsQ0FBQyxDQUFDN0csSUFBSSxFQUFDLEdBQUMsRUFBQzZHLENBQUMsQ0FBQ2hPLElBQUksaUJBQUloTiwwREFBQTtNQUFNOGIsS0FBSyxFQUFFO1FBQUVsRixLQUFLLEVBQUUsU0FBUztRQUFFdUQsUUFBUSxFQUFFO01BQVE7SUFBRSxHQUFDLFlBQWEsQ0FDL0UsQ0FBQyxlQUNibmEsMERBQUEsQ0FBQ1Msc0RBQVU7TUFBQ3VXLE9BQU8sRUFBQyxPQUFPO01BQUNKLEtBQUssRUFBQztJQUFjLEdBQUMsR0FBQyxFQUFDeEksSUFBSSxDQUFDb0wsS0FBSyxDQUFDd0IsQ0FBQyxDQUFDTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM5QixjQUFjLENBQUMsQ0FBQyxFQUFDLEtBQWUsQ0FDM0csQ0FDUixDQUNBLENBQ0YsQ0FDTCxDQUFDO0VBRWYsQ0FBQyxDQUNDLENBQ0gsQ0FDTCxDQUVSLENBQ0wsQ0FDSSxDQUNaLENBQUM7QUFFZDtBQUVBLGlFQUFlOVUsbUJBQW1CLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2F2ZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvQmxvY2tGYWN0b3J5L0Jsb2NrUHJvZHVjdGlvblZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cInVzZSBjbGllbnRcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE3IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjd6bS01IDE2Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM20zLTEwSDVWNWgxMHpcIlxufSksICdTYXZlJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2gnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2VsZWN0Q3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7XHJcbiAgICBDb250YWluZXIsIFR5cG9ncmFwaHksIFBhcGVyLCBHcmlkLCBUZXh0RmllbGQsIEJ1dHRvbiwgQm94LFxyXG4gICAgTWVudUl0ZW0sIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVIZWFkLCBUYWJsZVJvdyxcclxuICAgIENzc0Jhc2VsaW5lLCBBcHBCYXIsIFRvb2xiYXIsIERyYXdlciwgRGl2aWRlciwgTGlzdCwgVGFibGVDb250YWluZXIsIEljb25CdXR0b24sXHJcbiAgICBBdXRvY29tcGxldGUsIFRvZ2dsZUJ1dHRvbiwgVG9nZ2xlQnV0dG9uR3JvdXAsIENoaXAsIEFsZXJ0XHJcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgU2F2ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TYXZlJztcclxuaW1wb3J0IEFkZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BZGQnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcblxyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IGN1c3RvbVBhcnNlRm9ybWF0IGZyb20gJ2RheWpzL3BsdWdpbi9jdXN0b21QYXJzZUZvcm1hdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcblxyXG5kYXlqcy5leHRlbmQoY3VzdG9tUGFyc2VGb3JtYXQpO1xyXG5cclxuLy8gR2xvYmFsIGhlbHBlciB0byBwYXJzZSBkYXRlcyByb2J1c3RseSBhY3Jvc3MgZm9ybWF0c1xyXG5jb25zdCBwYXJzZURhdGUgPSAoZCkgPT4ge1xyXG4gICAgaWYgKCFkKSByZXR1cm4gZGF5anMobnVsbCk7XHJcbiAgICBpZiAodHlwZW9mIGQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0cyA9IFtcclxuICAgICAgICAgICAgJ1lZWVktTU0tREQnLFxyXG4gICAgICAgICAgICAnREQvTU0vWVlZWScsXHJcbiAgICAgICAgICAgICdEL00vWVlZWScsXHJcbiAgICAgICAgICAgICdERC1NTS1ZWVlZJyxcclxuICAgICAgICAgICAgJ0REL01NL1lZJyxcclxuICAgICAgICAgICAgJ0QvTS9ZWScsXHJcbiAgICAgICAgICAgICdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1onXHJcbiAgICAgICAgXTtcclxuICAgICAgICBsZXQgcGFyc2VkID0gZGF5anMoZCwgZm9ybWF0cywgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKCFwYXJzZWQuaXNWYWxpZCgpKSBwYXJzZWQgPSBkYXlqcyhkKTsgLy8gRmFsbGJhY2sgdG8gbmF0aXZlXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXlqcyhkKTtcclxufTtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgTWFpbkNvbnRlbnQgPSBzdHlsZWQoJ21haW4nLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWFyZ2luJywge1xyXG4gICAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbWFyZ2luTGVmdDogYC0ke2RyYXdlcldpZHRofXB4YCxcclxuICAgICAgICAuLi4ob3BlbiAmJiB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWFyZ2luJywge1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSxcclxuKTtcclxuXHJcbmZ1bmN0aW9uIEJsb2NrUHJvZHVjdGlvblZpZXcoKSB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gICAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZW1wbG95ZWVzLCBzZXRFbXBsb3llZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2dyYW50QWNjZXNzLCBzZXRHcmFudEFjY2Vzc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaEFjY2VzcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dyYW50QWNjZXNzYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyQWNjZXNzID0gcmVzLmRhdGE/LmRhdGE/LmZpbmQocm93ID0+IHJvdy51c2VySUQgPT09IHVzZXIuZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlckFjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEdyYW50QWNjZXNzKHVzZXJBY2Nlc3MubW9kdWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tBY2Nlc3MgPSB1c2VyQWNjZXNzLm1vZHVsZXMuZmluZChtID0+IG0ubW9kdWxlTmFtZSA9PT0gJ0Jsb2NrLUZhY3RvcnknKT8uYWNjZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzR0cgPSB1c2VyLmRhdGEudXNlck5hbWUgPT09ICdHRyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0dHICYmICFibG9ja0FjY2Vzcz8uY3JlYXRlTSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihcIllvdSBkb24ndCBoYXZlIHBlcm1pc3Npb24gdG8gYWNjZXNzIFByb2R1Y3Rpb24uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZSgnL0FkbWluSG9tZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodXNlci5kYXRhLnVzZXJOYW1lICE9PSAnR0cnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoJy9BZG1pbkhvbWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFjY2VzczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh1c2VyLmRhdGEuaWQpIGZldGNoQWNjZXNzKCk7XHJcbiAgICB9LCBbdXNlciwgbmF2aWdhdGVdKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaFBvc1JhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcmF0ZVJldHVybmApO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChyZXMuZGF0YS5kYXRhWzBdPy5yYXRlUikgfHwgMTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcmF0ZTonLCBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gMjgwMDsgLy8gRmFsbGJhY2tcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW3Byb2R1Y3Rpb25EYXRhLCBzZXRQcm9kdWN0aW9uRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZGF0ZTogZGF5anMoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcclxuICAgICAgICBtYWNoaW5lTm86IFwiXCIsXHJcbiAgICAgICAgb3BlcmF0b3JOYW1lOiBcIlwiLFxyXG4gICAgICAgIGhlbHBlcjE6IFwiXCIsXHJcbiAgICAgICAgaGVscGVyMjogXCJcIixcclxuICAgICAgICBoZWxwZXIzOiBcIlwiLFxyXG4gICAgICAgIGhhbGZEYXlPcGVyYXRvcjogZmFsc2UsXHJcbiAgICAgICAgaGFsZkRheUhlbHBlcjE6IGZhbHNlLFxyXG4gICAgICAgIGhhbGZEYXlIZWxwZXIyOiBmYWxzZSxcclxuICAgICAgICBoYWxmRGF5SGVscGVyMzogZmFsc2UsXHJcbiAgICAgICAgYmxvY2tUeXBlOiBcIlwiLFxyXG4gICAgICAgIHNhY2tzVXNlZDogMCxcclxuICAgICAgICBzYWNrRGV0YWlsczogW10sIC8vIEFycmF5IG9mIGJsb2NrIGNvdW50cyBwZXIgc2Fja1xyXG4gICAgICAgIGNlbWVudFVzZWQ6IDAsXHJcbiAgICAgICAgY29uY2Fzc2VXaGVlbGJhcnJvd3M6IDAsXHJcbiAgICAgICAgZ3JhdmVsV2hlZWxiYXJyb3dzOiAwLFxyXG4gICAgICAgIHNhbmRXaGVlbGJhcnJvd3M6IDAsXHJcbiAgICAgICAgbGFib3JQb3Q6IDBcclxuICAgIH0pO1xyXG4gICAgLy8gVW5pZmllZCBEYXRlIHJhbmdlIGZvciBwcm9kdWN0aW9uIGxvZ3MgLSBEZWZhdWx0IHRvIFRvZGF5XHJcbiAgICBjb25zdCBbZnJvbURhdGUsIHNldEZyb21EYXRlXSA9IHVzZVN0YXRlKGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xyXG4gICAgY29uc3QgW3RvRGF0ZSwgc2V0VG9EYXRlXSA9IHVzZVN0YXRlKGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xyXG4gICAgY29uc3QgW3Bvc1JhdGUsIHNldFBvc1JhdGVdID0gdXNlU3RhdGUoMjgwMCk7XHJcbiAgICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtjb25maWdzLCBzZXRDb25maWdzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Jhd1JlY2VudFByb2R1Y3Rpb25zLCBzZXRSYXdSZWNlbnRQcm9kdWN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGFpbHlQcm9kdWN0aW9ucywgc2V0RGFpbHlQcm9kdWN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGFpbHlNaXhlcldvcmtlcnMsIHNldERhaWx5TWl4ZXJXb3JrZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuXHJcbiAgICAvLyBHZW5lcmljIHJlZmV0Y2hlciBmb3Igc3lzdGVtIHN5bmNcclxuICAgIGNvbnN0IGZldGNoTWlzYyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByYXRlID0gYXdhaXQgZmV0Y2hQb3NSYXRlKCk7XHJcbiAgICAgICAgc2V0UG9zUmF0ZShyYXRlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBGZXRjaCBDb25maWdcclxuICAgICAgICAgICAgY29uc3QgY29uZmlnUmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vYmxvY2stY29uZmlnYCk7XHJcbiAgICAgICAgICAgIGlmIChjb25maWdSZXMuZGF0YSAmJiBjb25maWdSZXMuZGF0YS5kYXRhICYmIEFycmF5LmlzQXJyYXkoY29uZmlnUmVzLmRhdGEuZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZ0FyciA9IGNvbmZpZ1Jlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSBjb25maWdBcnIuZmluZChjID0+IGMuYmxvY2tUeXBlID09PSBcIkdMT0JBTFwiKSB8fCBjb25maWdBcnJbMF07XHJcbiAgICAgICAgICAgICAgICBzZXRDb25maWdzKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZldGNoIFJlY2VudCBQcm9kdWN0aW9ucyBmb3IgTG9nc1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kUmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vYmxvY2stcHJvZHVjdGlvbmApO1xyXG4gICAgICAgICAgICBpZiAocHJvZFJlcy5kYXRhLmRhdGEpIHNldFJhd1JlY2VudFByb2R1Y3Rpb25zKHByb2RSZXMuZGF0YS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVlYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbEVtcGxveWVlcyA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IHVuaXF1ZU5hbWVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmYWN0b3J5RW1wbG95ZWVzID0gYWxsRW1wbG95ZWVzLmZpbHRlcihlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRmFjdG9yeSA9IGUuZGVwYXJ0bWVudCAmJiBlLmRlcGFydG1lbnQudG9VcHBlckNhc2UoKS5pbmNsdWRlcygnRkFDVE9SWScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBlLnN0YXR1cyAhPT0gJ0ZpcmVkJyAmJiBlLnN0YXR1cyAhPT0gJ1Jlc2lnbic7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNGYWN0b3J5ICYmIGlzQWN0aXZlICYmICF1bmlxdWVOYW1lcy5oYXMoZS5lbXBsb3llZU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlTmFtZXMuYWRkKGUuZW1wbG95ZWVOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldEVtcGxveWVlcyhmYWN0b3J5RW1wbG95ZWVzLmxlbmd0aCA+IDAgPyBmYWN0b3J5RW1wbG95ZWVzIDogYWxsRW1wbG95ZWVzLmZpbHRlcihlID0+IGUuc3RhdHVzICE9PSAnRmlyZWQnICYmIGUuc3RhdHVzICE9PSAnUmVzaWduJykpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBtaXNjIGRhdGE6JywgZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hNaXNjKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIERhaWx5IHN0YXRlcyB3aGVuIGRhdGUgb3IgcmF3IGRhdGEgY2hhbmdlc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocmF3UmVjZW50UHJvZHVjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXREYWlseVByb2R1Y3Rpb25zKHJhd1JlY2VudFByb2R1Y3Rpb25zLmZpbHRlcihwID0+IHAuZGF0ZSA9PT0gcHJvZHVjdGlvbkRhdGEuZGF0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9kdWN0aW9uRGF0YS5kYXRlLCByYXdSZWNlbnRQcm9kdWN0aW9uc10pO1xyXG5cclxuICAgIC8vIFBlci13b3JrZXIgc2hhcmUgY2FsY3VsYXRvciAobWlycm9ycyBXb3JrZXJQYXltZW50VmlldyBsb2dpYylcclxuICAgIGNvbnN0IGNhbGN1bGF0ZVdvcmtlclNoYXJlID0gKHR5cGVTdHIsIHMsIGUsIGhhbGYpID0+IHtcclxuICAgICAgICBjb25zdCByYXRlcyA9IGNvbmZpZ3M/LmxhYm9yUmF0ZXMgfHwge1xyXG4gICAgICAgICAgICByYXRlNTBfMzM6IHsgcGVyU2FjazogMTAwMDAgfSxcclxuICAgICAgICAgICAgcmF0ZTIwOiB7IHQxX3NhY2tzOiA2LCB0MV9yYXRlOiA5MDAwLCB0Ml9zYWNrczogNywgdDJfcmF0ZTogMTY1MDAsIHQzX3NhY2tzOiA4LCB0M19yYXRlOiAxOTAwMCwgdDRfc2Fja3M6IDEyLCB0NF9yYXRlOiAyMTUwMCwgdDVfcmF0ZTogMjQ1MDAgfSxcclxuICAgICAgICAgICAgcmF0ZTE1OiB7IHQxX3NhY2tzOiA1LCB0MV9yYXRlOiA5MDAwLCB0Ml9zYWNrczogNiwgdDJfcmF0ZTogMTY1MDAsIHQzX3NhY2tzOiA3LCB0M19yYXRlOiAxOTAwMCwgdDRfc2Fja3M6IDEwLCB0NF9yYXRlOiAyMTUwMCwgdDVfcmF0ZTogMjQ1MDAgfSxcclxuICAgICAgICAgICAgcmF0ZTE0OiB7IHQxX3NhY2tzOiA2LCB0MV9yYXRlOiA5MDAwLCB0Ml9zYWNrczogNywgdDJfcmF0ZTogMTcwMDAsIHQzX3NhY2tzOiA4LCB0M19yYXRlOiAxOTUwMCwgdDRfc2Fja3M6IDksIHQ0X3JhdGU6IDIyMDAwLCB0NV9yYXRlOiAyNDUwMCB9LFxyXG4gICAgICAgICAgICByYXRlMTI6IHsgdDFfc2Fja3M6IDYsIHQxX3JhdGU6IDkwMDAsIHQyX3NhY2tzOiA3LCB0Ml9yYXRlOiAxNzAwMCwgdDNfc2Fja3M6IDgsIHQzX3JhdGU6IDE5NTAwLCB0NF9zYWNrczogOSwgdDRfcmF0ZTogMjIwMDAsIHQ1X3JhdGU6IDI0NTAwIH0sXHJcbiAgICAgICAgICAgIHJhdGUxMDogeyB0MV9zYWNrczogNiwgdDFfcmF0ZTogOTAwMCwgdDJfc2Fja3M6IDcsIHQyX3JhdGU6IDE3MDAwLCB0M19zYWNrczogOCwgdDNfcmF0ZTogMTk1MDAsIHQ0X3NhY2tzOiA5LCB0NF9yYXRlOiAyMjAwMCwgdDVfcmF0ZTogMjQ1MDAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKCF0eXBlU3RyKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAodHlwZVN0ci5pbmNsdWRlcygnNTAnKSB8fCB0eXBlU3RyLmluY2x1ZGVzKCczMycpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdCA9IHMgKiByYXRlcy5yYXRlNTBfMzMucGVyU2FjaztcclxuICAgICAgICAgICAgcmV0dXJuIGhhbGYgPyB0b3QgLyAyIDogdG90IC8gTWF0aC5tYXgoZSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBydCA9IG51bGwsIGxpbWl0U2Fja3MgPSAwO1xyXG4gICAgICAgIGlmICh0eXBlU3RyLmluY2x1ZGVzKCcyMCcpKSB7IHJ0ID0gcmF0ZXM/LnJhdGUyMCB8fCB7fTsgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVTdHIuaW5jbHVkZXMoJzE1JykpIHsgcnQgPSByYXRlcz8ucmF0ZTE1IHx8IHt9OyB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZVN0ci5pbmNsdWRlcygnMTQnKSkgeyBydCA9IHJhdGVzPy5yYXRlMTQgfHwgcmF0ZXM/LnJhdGUxMF8xNF8xMiB8fCB7fTsgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVTdHIuaW5jbHVkZXMoJzEyJykpIHsgcnQgPSByYXRlcz8ucmF0ZTEyIHx8IHJhdGVzPy5yYXRlMTBfMTRfMTIgfHwge307IH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlU3RyLmluY2x1ZGVzKCcxMCcpKSB7IHJ0ID0gcmF0ZXM/LnJhdGUxMCB8fCByYXRlcz8ucmF0ZTEwXzE0XzEyIHx8IHt9OyB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgbGltaXRTYWNrcyA9IHJ0LnQyX3NhY2tzIHx8IDA7XHJcbiAgICAgICAgY29uc3QgZWZmZWN0aXZlU2Fja3MgPSBoYWxmID8gTWF0aC5taW4ocywgbGltaXRTYWNrcykgOiBzO1xyXG4gICAgICAgIGxldCByYXRlID0gMDtcclxuICAgICAgICBpZiAoZWZmZWN0aXZlU2Fja3MgPD0gKHJ0LnQxX3NhY2tzIHx8IDApKSByYXRlID0gKHJ0LnQxX3JhdGUgfHwgMCkgKiBzO1xyXG4gICAgICAgIGVsc2UgaWYgKGVmZmVjdGl2ZVNhY2tzIDw9IChydC50Ml9zYWNrcyB8fCAwKSkgcmF0ZSA9IHJ0LnQyX3JhdGUgfHwgMDtcclxuICAgICAgICBlbHNlIGlmIChlZmZlY3RpdmVTYWNrcyA9PT0gKHJ0LnQzX3NhY2tzIHx8IDApKSByYXRlID0gcnQudDNfcmF0ZSB8fCAwO1xyXG4gICAgICAgIGVsc2UgaWYgKGVmZmVjdGl2ZVNhY2tzIDw9IChydC50NF9zYWNrcyB8fCAwKSkgcmF0ZSA9IHJ0LnQ0X3JhdGUgfHwgMDtcclxuICAgICAgICBlbHNlIHJhdGUgPSBydC50NV9yYXRlIHx8IDA7XHJcbiAgICAgICAgcmV0dXJuIGhhbGYgPyByYXRlIC8gMiA6IHJhdGU7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlY2VudFByb2R1Y3Rpb25zID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyYXdSZWNlbnRQcm9kdWN0aW9ucykgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICAvLyBBcHBseSBEYXRlIEZpbHRlclxyXG4gICAgICAgIGxldCBmaWx0ZXJlZFByb2R1Y3Rpb25zID0gcmF3UmVjZW50UHJvZHVjdGlvbnM7XHJcbiAgICAgICAgaWYgKGZyb21EYXRlICYmIHRvRGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmRCA9IHBhcnNlRGF0ZShmcm9tRGF0ZSkuc3RhcnRPZignZGF5Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHREID0gcGFyc2VEYXRlKHRvRGF0ZSkuZW5kT2YoJ2RheScpO1xyXG4gICAgICAgICAgICBpZiAoZkQuaXNWYWxpZCgpICYmIHRELmlzVmFsaWQoKSAmJiAhZkQuaXNBZnRlcih0RCkpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkUHJvZHVjdGlvbnMgPSByYXdSZWNlbnRQcm9kdWN0aW9ucy5maWx0ZXIociA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IHBhcnNlRGF0ZShyLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoZC5pc1NhbWUoZkQsICdkYXknKSB8fCBkLmlzQWZ0ZXIoZkQpKSAmJiAoZC5pc1NhbWUodEQsICdkYXknKSB8fCBkLmlzQmVmb3JlKHREKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkUHJvZHVjdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkUHJvZHVjdGlvbnMgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByaWNpbmcgPSBjb25maWdzO1xyXG4gICAgICAgIGNvbnN0IGZpeGVkTW9udGhseSA9IHByaWNpbmcgPyAoXHJcbiAgICAgICAgICAgIChwYXJzZUZsb2F0KHByaWNpbmcucmVudFByaWNlKSB8fCAwKSArXHJcbiAgICAgICAgICAgIChwYXJzZUZsb2F0KHByaWNpbmcudGF4ZXNQcmljZSkgfHwgMClcclxuICAgICAgICApIDogMDtcclxuICAgICAgICBjb25zdCBzaGFyZWRNb250aGx5ID0gcHJpY2luZyA/IChcclxuICAgICAgICAgICAgKHBhcnNlRmxvYXQocHJpY2luZy5mdWVsUHJpY2UpIHx8IDApICtcclxuICAgICAgICAgICAgKHBhcnNlRmxvYXQocHJpY2luZy50cmFuc3BvcnRQcmljZSkgfHwgMCkgK1xyXG4gICAgICAgICAgICAocGFyc2VGbG9hdChwcmljaW5nLmNvbW1pc3Npb25QcmljZSkgfHwgMCkgK1xyXG4gICAgICAgICAgICAocGFyc2VGbG9hdChwcmljaW5nLnN1cGVydmlzb3JTYWxhcnkpIHx8IDApICtcclxuICAgICAgICAgICAgKHBhcnNlRmxvYXQocHJpY2luZy5zdGFmZldhZ2VzKSB8fCAwKVxyXG4gICAgICAgICkgOiAwO1xyXG4gICAgICAgIGNvbnN0IGRhaWx5T3ZlcmhlYWQgPSAoZml4ZWRNb250aGx5ICsgc2hhcmVkTW9udGhseSkgLyAyNjtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZmlsdGVyZWRQcm9kdWN0aW9ucy5tYXAociA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNNMyA9ICgoci5jb25jYXNzZVdoZWVsYmFycm93cyB8fCAwKSAqIChyLnNhY2tzVXNlZCB8fCAwKSkgLyAxNTtcclxuICAgICAgICAgICAgY29uc3QgZ00zID0gKChyLmdyYXZlbFdoZWVsYmFycm93cyB8fCAwKSAqIChyLnNhY2tzVXNlZCB8fCAwKSkgLyAxNTtcclxuICAgICAgICAgICAgY29uc3Qgc00zID0gKChyLnNhbmRXaGVlbGJhcnJvd3MgfHwgMCkgKiAoci5zYWNrc1VzZWQgfHwgMCkpIC8gMTU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAxLiBMYWJvciBDYWxjdWxhdGlvbiAoUHJpb3JpdGl6ZSBzYXZlZCBsYWJvclBvdCBmb3IgaGlzdG9yaWNhbCBhY2N1cmFjeSlcclxuICAgICAgICAgICAgY29uc3Qgb3BTaGFyZSA9IHIub3BlcmF0b3JOYW1lID8gY2FsY3VsYXRlV29ya2VyU2hhcmUoci5ibG9ja1R5cGUsIHIuc2Fja3NVc2VkLCAzLCAhIXIuaGFsZkRheU9wZXJhdG9yKSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGgxU2hhcmUgPSByLmhlbHBlcjEgPyBjYWxjdWxhdGVXb3JrZXJTaGFyZShyLmJsb2NrVHlwZSwgci5zYWNrc1VzZWQsIDMsICEhci5oYWxmRGF5SGVscGVyMSkgOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBoMlNoYXJlID0gci5oZWxwZXIyID8gY2FsY3VsYXRlV29ya2VyU2hhcmUoci5ibG9ja1R5cGUsIHIuc2Fja3NVc2VkLCAzLCAhIXIuaGFsZkRheUhlbHBlcjIpIDogMDtcclxuICAgICAgICAgICAgY29uc3QgaDNTaGFyZSA9IHIuaGVscGVyMyA/IGNhbGN1bGF0ZVdvcmtlclNoYXJlKHIuYmxvY2tUeXBlLCByLnNhY2tzVXNlZCwgMywgISFyLmhhbGZEYXlIZWxwZXIzKSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG1peGVyU2hhcmUgPSAoci5zYWNrc1VzZWQgfHwgMCkgKiAocHJpY2luZz8ubWl4ZXJSYXRlUGVyU2FjayB8fCAzMDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY3Jld09ubHlGQyA9IG9wU2hhcmUgKyBoMVNoYXJlICsgaDJTaGFyZSArIGgzU2hhcmU7XHJcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxDcmV3QW5kTWl4ZXJGQyA9IGNyZXdPbmx5RkMgKyBtaXhlclNoYXJlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGxhYm9yRkMgPSAwO1xyXG4gICAgICAgICAgICBpZiAoci5sYWJvclBvdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQmFja3dhcmRzLWNvbXBhdGlibGUgZGV0ZWN0aW9uOiBDaGVjayBpZiBzYXZlZCBsYWJvclBvdCBpbmNsdWRlcyBvciBleGNsdWRlcyBtaXhlciBzaGFyZVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkU2NoZW1hRGlmZiA9IE1hdGguYWJzKHIubGFib3JQb3QgLSBmdWxsQ3Jld0FuZE1peGVyRkMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U2NoZW1hRGlmZiA9IE1hdGguYWJzKHIubGFib3JQb3QgLSBjcmV3T25seUZDKTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdTY2hlbWFEaWZmIDwgb2xkU2NoZW1hRGlmZikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYm9yRkMgPSByLmxhYm9yUG90ICsgbWl4ZXJTaGFyZTsgLy8gTmV3IHNjaGVtYTogY3Jldy1vbmx5LCBzbyBhZGQgbWl4ZXIgc2hhcmUgZm9yIHRvdGFsIGNvc3RcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFib3JGQyA9IHIubGFib3JQb3Q7IC8vIE9sZCBzY2hlbWE6IGFscmVhZHkgaW5jbHVkZXMgbWl4ZXIgc2hhcmVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxhYm9yRkMgPSBmdWxsQ3Jld0FuZE1peGVyRkM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIDIuIE1hdGVyaWFsIENvc3QgKFByaW9yaXRpemUgc2F2ZWQgdG90YWxNYXRDb3N0LCBidXQgc2VsZi1jb3JyZWN0IGlmIGFibm9ybWFsbHkgbG93L3plcm8pXHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRNYXRDb3N0ID0gcHJpY2luZyA/IChcclxuICAgICAgICAgICAgICAgICgoci5jZW1lbnRVc2VkIHx8IHIuc2Fja3NVc2VkIHx8IDApICogKHByaWNpbmcuY2VtZW50UHJpY2UgfHwgMCkpICtcclxuICAgICAgICAgICAgICAgIChjTTMgKiAocHJpY2luZy5jb25jYXNzZVByaWNlIHx8IDApKSArXHJcbiAgICAgICAgICAgICAgICAoZ00zICogKHByaWNpbmcuZ3JhdmVsUHJpY2UgfHwgMCkpICtcclxuICAgICAgICAgICAgICAgIChzTTMgKiAocHJpY2luZy5zYW5kUHJpY2UgfHwgMCkpXHJcbiAgICAgICAgICAgICkgOiAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2VtZW50VGhyZXNob2xkID0gKHIuc2Fja3NVc2VkIHx8IDEpICogKHByaWNpbmc/LmNlbWVudFByaWNlIHx8IDApICogMC45O1xyXG4gICAgICAgICAgICBjb25zdCBtYXRDb3N0ID0gKHIudG90YWxNYXRDb3N0ICYmIHIudG90YWxNYXRDb3N0ID4gY2VtZW50VGhyZXNob2xkKSA/IHIudG90YWxNYXRDb3N0IDogY2FsY3VsYXRlZE1hdENvc3Q7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBiYXNlQ29zdCA9IG1hdENvc3QgKyAobGFib3JGQyAvIHBvc1JhdGUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gMi4gU3RhYmxlIE92ZXJoZWFkIEFsbG9jYXRpb24gKFByaW9yaXRpemUgc2F2ZWQgc25hcHNob3QgZm9yIGhpc3RvcnkpXHJcbiAgICAgICAgICAgIGNvbnN0IG1hY2hpbmVzT25EYXRlID0gbmV3IFNldChyYXdSZWNlbnRQcm9kdWN0aW9ucy5maWx0ZXIocmVjID0+IHJlYy5kYXRlID09PSByLmRhdGUpLm1hcChyZWMgPT4gcmVjLm1hY2hpbmVObykpO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbE1hY2hpbmVzT25EYXRlID0gbWFjaGluZXNPbkRhdGUuc2l6ZSB8fCAxO1xyXG4gICAgICAgICAgICBjb25zdCBvdmVyaGVhZFNoYXJlID0gci5vdmVyaGVhZFNuYXBzaG90IHx8IChkYWlseU92ZXJoZWFkIC8gdG90YWxNYWNoaW5lc09uRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBGaW5hbCBUb3RhbCBDb3N0IChQcmlvcml0aXplIHNhdmVkIHRvdGFsQ29zdCBpZiBhdmFpbGFibGUpXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsVG90YWxDb3N0ID0gci50b3RhbENvc3QgfHwgKGJhc2VDb3N0ICsgb3ZlcmhlYWRTaGFyZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5yLCB0b3RhbENvc3Q6IHBhcnNlRmxvYXQoZmluYWxUb3RhbENvc3QpLnRvRml4ZWQoMikgfTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtyYXdSZWNlbnRQcm9kdWN0aW9ucywgZnJvbURhdGUsIHRvRGF0ZSwgY29uZmlncywgcG9zUmF0ZV0pO1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3Rpb25TdW1tYXJ5ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvdGFsU2Fja3MgPSAwO1xyXG4gICAgICAgIGNvbnN0IGJsb2Nrc0J5VHlwZSA9IHt9O1xyXG5cclxuICAgICAgICByZWNlbnRQcm9kdWN0aW9ucy5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzYWNrcyA9IHBhcnNlSW50KHIuc2Fja3NVc2VkKSB8fCAwO1xyXG4gICAgICAgICAgICBjb25zdCBibG9ja3MgPSBwYXJzZUludChyLnRvdGFsQmxvY2tzKSB8fCAwO1xyXG5cclxuICAgICAgICAgICAgdG90YWxTYWNrcyArPSBzYWNrcztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSByLmJsb2NrVHlwZSB8fCAnVW5rbm93bic7XHJcbiAgICAgICAgICAgIGlmICghYmxvY2tzQnlUeXBlW3R5cGVdKSBibG9ja3NCeVR5cGVbdHlwZV0gPSAwO1xyXG4gICAgICAgICAgICBibG9ja3NCeVR5cGVbdHlwZV0gKz0gYmxvY2tzO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyB0b3RhbFNhY2tzLCBibG9ja3NCeVR5cGUgfTtcclxuICAgIH0sIFtyZWNlbnRQcm9kdWN0aW9uc10pO1xyXG5cclxuICAgIC8vIEhlbHBlcjogY29tcHV0ZSBhY3R1YWwgdG90YWwgcGF5b3V0IGFjcm9zcyBhbGwgd29ya2VycyAocmVzcGVjdGluZyBoYWxmLWRheSlcclxuICAgIC8vIEVYQ0xVREVTIHRoZSB2aXJ0dWFsIE1peGVyIHNoYXJlIGZyb20gdGhlIGxpdmUgcHJldmlldyBhbmQgc2F2ZWQgbGFib3JQb3QgYXMgcmVxdWVzdGVkIGJ5IHRoZSB1c2VyXHJcbiAgICBjb25zdCBjb21wdXRlQWN0dWFsUG90ID0gKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoIWRhdGEuYmxvY2tUeXBlKSByZXR1cm4gMDtcclxuICAgICAgICBjb25zdCBvcFNoYXJlID0gZGF0YS5vcGVyYXRvck5hbWUgPyBjYWxjdWxhdGVXb3JrZXJTaGFyZShkYXRhLmJsb2NrVHlwZSwgZGF0YS5zYWNrc1VzZWQsIDMsICEhZGF0YS5oYWxmRGF5T3BlcmF0b3IpIDogMDtcclxuICAgICAgICBjb25zdCBoMVNoYXJlID0gZGF0YS5oZWxwZXIxID8gY2FsY3VsYXRlV29ya2VyU2hhcmUoZGF0YS5ibG9ja1R5cGUsIGRhdGEuc2Fja3NVc2VkLCAzLCAhIWRhdGEuaGFsZkRheUhlbHBlcjEpIDogMDtcclxuICAgICAgICBjb25zdCBoMlNoYXJlID0gZGF0YS5oZWxwZXIyID8gY2FsY3VsYXRlV29ya2VyU2hhcmUoZGF0YS5ibG9ja1R5cGUsIGRhdGEuc2Fja3NVc2VkLCAzLCAhIWRhdGEuaGFsZkRheUhlbHBlcjIpIDogMDtcclxuICAgICAgICBjb25zdCBoM1NoYXJlID0gZGF0YS5oZWxwZXIzID8gY2FsY3VsYXRlV29ya2VyU2hhcmUoZGF0YS5ibG9ja1R5cGUsIGRhdGEuc2Fja3NVc2VkLCAzLCAhIWRhdGEuaGFsZkRheUhlbHBlcjMpIDogMDtcclxuICAgICAgICByZXR1cm4gb3BTaGFyZSArIGgxU2hhcmUgKyBoMlNoYXJlICsgaDNTaGFyZTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWxyZWFkeUFzc2lnbmVkID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgZGFpbHlQcm9kdWN0aW9ucy5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoci5vcGVyYXRvck5hbWUpIG5hbWVzLmFkZChyLm9wZXJhdG9yTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChyLmhlbHBlcjEpIG5hbWVzLmFkZChyLmhlbHBlcjEpO1xyXG4gICAgICAgICAgICBpZiAoci5oZWxwZXIyKSBuYW1lcy5hZGQoci5oZWxwZXIyKTtcclxuICAgICAgICAgICAgaWYgKHIuaGVscGVyMykgbmFtZXMuYWRkKHIuaGVscGVyMyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGFpbHlNaXhlcldvcmtlcnMuZm9yRWFjaChtdyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtdy53b3JrZXJOYW1lKSBuYW1lcy5hZGQobXcud29ya2VyTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWVzO1xyXG4gICAgfSwgW2RhaWx5UHJvZHVjdGlvbnMsIGRhaWx5TWl4ZXJXb3JrZXJzXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0QXZhaWxhYmxlRW1wbG95ZWVzID0gKGN1cnJlbnRGaWVsZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZWxlY3Rpb25zID0gW1xyXG4gICAgICAgICAgICBwcm9kdWN0aW9uRGF0YS5vcGVyYXRvck5hbWUsXHJcbiAgICAgICAgICAgIHByb2R1Y3Rpb25EYXRhLmhlbHBlcjEsXHJcbiAgICAgICAgICAgIHByb2R1Y3Rpb25EYXRhLmhlbHBlcjIsXHJcbiAgICAgICAgICAgIHByb2R1Y3Rpb25EYXRhLmhlbHBlcjNcclxuICAgICAgICBdLmZpbHRlcigodmFsLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gWydvcGVyYXRvck5hbWUnLCAnaGVscGVyMScsICdoZWxwZXIyJywgJ2hlbHBlcjMnXTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbCAmJiBmaWVsZHNbaWR4XSAhPT0gY3VycmVudEZpZWxkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZW1wbG95ZWVzLmZpbHRlcihlID0+XHJcbiAgICAgICAgICAgICFhbHJlYWR5QXNzaWduZWQuaGFzKGUuZW1wbG95ZWVOYW1lKSAmJiAhY3VycmVudFNlbGVjdGlvbnMuaW5jbHVkZXMoZS5lbXBsb3llZU5hbWUpXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTYWNrQ2hhbmdlID0gKHZhbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG51bVNhY2tzID0gcGFyc2VJbnQodmFsKSB8fCAwO1xyXG4gICAgICAgIGNvbnN0IG5ld0RldGFpbHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1TYWNrcyB9KS5tYXAoKF8sIGkpID0+XHJcbiAgICAgICAgICAgIChwcm9kdWN0aW9uRGF0YS5zYWNrRGV0YWlscyB8fCBbXSlbaV0gfHwgMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZCA9IHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdGlvbkRhdGEsXHJcbiAgICAgICAgICAgIHNhY2tzVXNlZDogbnVtU2Fja3MsXHJcbiAgICAgICAgICAgIHNhY2tEZXRhaWxzOiBuZXdEZXRhaWxzLFxyXG4gICAgICAgICAgICBjZW1lbnRVc2VkOiBudW1TYWNrcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZWQubGFib3JQb3QgPSBjb21wdXRlQWN0dWFsUG90KHVwZGF0ZWQpO1xyXG4gICAgICAgIHNldFByb2R1Y3Rpb25EYXRhKHVwZGF0ZWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTYWNrRGV0YWlsQ2hhbmdlID0gKGluZGV4LCB2YWwpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEZXRhaWxzID0gWy4uLnByb2R1Y3Rpb25EYXRhLnNhY2tEZXRhaWxzXTtcclxuICAgICAgICBuZXdEZXRhaWxzW2luZGV4XSA9IHBhcnNlSW50KHZhbCkgfHwgMDtcclxuICAgICAgICBzZXRQcm9kdWN0aW9uRGF0YSh7IC4uLnByb2R1Y3Rpb25EYXRhLCBzYWNrRGV0YWlsczogbmV3RGV0YWlscyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0V2VpZ2h0ZWRVbml0cyA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFpcnMgPSBbXHJcbiAgICAgICAgICAgIFtkYXRhLm9wZXJhdG9yTmFtZSwgZGF0YS5oYWxmRGF5T3BlcmF0b3JdLFxyXG4gICAgICAgICAgICBbZGF0YS5oZWxwZXIxLCBkYXRhLmhhbGZEYXlIZWxwZXIxXSxcclxuICAgICAgICAgICAgW2RhdGEuaGVscGVyMiwgZGF0YS5oYWxmRGF5SGVscGVyMl0sXHJcbiAgICAgICAgICAgIFtkYXRhLmhlbHBlcjMsIGRhdGEuaGFsZkRheUhlbHBlcjNdXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gcGFpcnMuZmlsdGVyKChbbmFtZV0pID0+IG5hbWUpLnJlZHVjZSgoc3VtLCBbLCBoYWxmXSkgPT4gc3VtICsgKGhhbGYgPyAwLjUgOiAxKSwgMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBlcnNvbm5lbENoYW5nZSA9IChmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkID0geyAuLi5wcm9kdWN0aW9uRGF0YSwgW2ZpZWxkXTogdmFsdWUgfTtcclxuICAgICAgICB1cGRhdGVkLmxhYm9yUG90ID0gY29tcHV0ZUFjdHVhbFBvdCh1cGRhdGVkKTtcclxuICAgICAgICBzZXRQcm9kdWN0aW9uRGF0YSh1cGRhdGVkKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gVG9nZ2xlIGhhbGYvZnVsbCBkYXkg4oCUIGFsc28gdXBkYXRlcyBsYWJvclBvdCB0byB0aGUgYWN0dWFsIHBheW91dFxyXG4gICAgY29uc3QgaGFuZGxlSGFsZkRheVRvZ2dsZSA9IChoYWxmRGF5RmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZCA9IHsgLi4ucHJvZHVjdGlvbkRhdGEsIFtoYWxmRGF5RmllbGRdOiB2YWx1ZSA9PT0gJ2hhbGYnIH07XHJcbiAgICAgICAgdXBkYXRlZC5sYWJvclBvdCA9IGNvbXB1dGVBY3R1YWxQb3QodXBkYXRlZCk7XHJcbiAgICAgICAgc2V0UHJvZHVjdGlvbkRhdGEodXBkYXRlZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzU3VibWl0dGluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBWYWxpZGF0aW9uIC0gZW5zdXJlIGFsbCBjcml0aWNhbCBmaWVsZHMgYXJlIGZpbGxlZFxyXG4gICAgICAgIGNvbnN0IHRvdGFsQmxvY2tzID0gKHByb2R1Y3Rpb25EYXRhLnNhY2tEZXRhaWxzIHx8IFtdKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyAocGFyc2VJbnQoYikgfHwgMCksIDApO1xyXG4gICAgICAgIGNvbnN0IGhhc01pc3NpbmdCbG9ja3MgPSBwcm9kdWN0aW9uRGF0YS5zYWNrc1VzZWQgPiAwICYmXHJcbiAgICAgICAgICAgIChwcm9kdWN0aW9uRGF0YS5zYWNrRGV0YWlscy5sZW5ndGggPCBwcm9kdWN0aW9uRGF0YS5zYWNrc1VzZWQgfHxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Rpb25EYXRhLnNhY2tEZXRhaWxzLnNvbWUodmFsID0+ICF2YWwgfHwgcGFyc2VJbnQodmFsKSA8PSAwKSk7XHJcblxyXG4gICAgICAgIGlmICghcHJvZHVjdGlvbkRhdGEubWFjaGluZU5vKSB7XHJcbiAgICAgICAgICAgIHRvYXN0Lndhcm5pbmcoXCJQbGVhc2UgZW50ZXIgTWFjaGluZSBOby5cIik7IHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFwcm9kdWN0aW9uRGF0YS5ibG9ja1R5cGUpIHtcclxuICAgICAgICAgICAgdG9hc3Qud2FybmluZyhcIlBsZWFzZSBzZWxlY3QgQmxvY2sgVHlwZS5cIik7IHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFwcm9kdWN0aW9uRGF0YS5vcGVyYXRvck5hbWUpIHtcclxuICAgICAgICAgICAgdG9hc3Qud2FybmluZyhcIlBsZWFzZSBzZWxlY3QgYW4gT3BlcmF0b3IuXCIpOyByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcHJvZHVjdGlvbkRhdGEuc2Fja3NVc2VkIHx8IHByb2R1Y3Rpb25EYXRhLnNhY2tzVXNlZCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRvYXN0Lndhcm5pbmcoXCJQbGVhc2UgZW50ZXIgU2Fja3Mgb2YgQ2VtZW50LlwiKTsgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXByb2R1Y3Rpb25EYXRhLmNvbmNhc3NlV2hlZWxiYXJyb3dzIHx8IHBhcnNlRmxvYXQocHJvZHVjdGlvbkRhdGEuY29uY2Fzc2VXaGVlbGJhcnJvd3MpIDw9IDApIHtcclxuICAgICAgICAgICAgdG9hc3Qud2FybmluZyhcIlBsZWFzZSBlbnRlciBXaGVlbGJhcnJvdyBDb25jYXNzZSAocGVyIHNhY2spLlwiKTsgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG90YWxCbG9ja3MgPD0gMCkge1xyXG4gICAgICAgICAgICB0b2FzdC53YXJuaW5nKFwiUGxlYXNlIGVudGVyIGF0IGxlYXN0IG9uZSBibG9jayBjb3VudCBpbiBQcm9kdWN0aW9uIHBlciBTYWNrIHNlY3Rpb24uXCIpOyByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoYXNNaXNzaW5nQmxvY2tzKSB7XHJcbiAgICAgICAgICAgIHRvYXN0Lndhcm5pbmcoXCJTb21lIHNhY2tzIGFyZSBtaXNzaW5nIGJsb2NrIGNvdW50cy4gUGxlYXNlIGZpbGwgYWxsIHNhY2sgZGV0YWlscy5cIik7IHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyAxNSB3aGVlbGJhcnJvdyA9IDFtM1xyXG4gICAgICAgICAgICBjb25zdCB3YkZhY3RvciA9IGNvbmZpZ3M/LndoZWVsYmFycm93UGVyTTMgfHwgMTU7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmNhc3NlTTMgPSAocHJvZHVjdGlvbkRhdGEuY29uY2Fzc2VXaGVlbGJhcnJvd3MgKiBwcm9kdWN0aW9uRGF0YS5zYWNrc1VzZWQpIC8gd2JGYWN0b3I7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyYXZlbE0zID0gKHByb2R1Y3Rpb25EYXRhLmdyYXZlbFdoZWVsYmFycm93cyAqIHByb2R1Y3Rpb25EYXRhLnNhY2tzVXNlZCkgLyB3YkZhY3RvcjtcclxuICAgICAgICAgICAgY29uc3Qgc2FuZE0zID0gKHByb2R1Y3Rpb25EYXRhLnNhbmRXaGVlbGJhcnJvd3MgKiBwcm9kdWN0aW9uRGF0YS5zYWNrc1VzZWQpIC8gd2JGYWN0b3I7XHJcblxyXG4gICAgICAgICAgICAvLyBEaXJlY3QgTWF0ZXJpYWwgQ29zdFxyXG4gICAgICAgICAgICBsZXQgdG90YWxNYXRDb3N0ID0gMDtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZ3MpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsTWF0Q29zdCA9ICgocHJvZHVjdGlvbkRhdGEuY2VtZW50VXNlZCB8fCBwcm9kdWN0aW9uRGF0YS5zYWNrc1VzZWQgfHwgMCkgKiAoY29uZmlncy5jZW1lbnRQcmljZSB8fCAwKSkgK1xyXG4gICAgICAgICAgICAgICAgICAgIChjb25jYXNzZU0zICogKGNvbmZpZ3MuY29uY2Fzc2VQcmljZSB8fCAwKSkgK1xyXG4gICAgICAgICAgICAgICAgICAgIChncmF2ZWxNMyAqIChjb25maWdzLmdyYXZlbFByaWNlIHx8IDApKSArXHJcbiAgICAgICAgICAgICAgICAgICAgKHNhbmRNMyAqIChjb25maWdzLnNhbmRQcmljZSB8fCAwKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc1JhdGUgPSBhd2FpdCBmZXRjaFBvc1JhdGUoKTtcclxuICAgICAgICAgICAgY29uc3QgYWN0dWFsTGFib3JQb3QgPSBjb21wdXRlQWN0dWFsUG90KHByb2R1Y3Rpb25EYXRhKTsgLy8gY3Jldy1vbmx5XHJcbiAgICAgICAgICAgIGNvbnN0IG1peGVyU2hhcmUgPSAocHJvZHVjdGlvbkRhdGEuc2Fja3NVc2VkIHx8IDApICogKGNvbmZpZ3M/Lm1peGVyUmF0ZVBlclNhY2sgfHwgMzAwKTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxMYWJvckZDID0gYWN0dWFsTGFib3JQb3QgKyBtaXhlclNoYXJlO1xyXG4gICAgICAgICAgICBjb25zdCBsYWJvclBvdFVTRCA9IHRvdGFsTGFib3JGQyAvIHBvc1JhdGU7XHJcblxyXG4gICAgICAgICAgICAvLyBPdmVyaGVhZCBDYWxjdWxhdGlvbiAodjIuNS45LVNUQUJMRSlcclxuICAgICAgICAgICAgLy8gRGlzdHJpYnV0ZSB0b3RhbCBkYWlseSBvdmVyaGVhZCBhY3Jvc3MgYWxsIG1hY2hpbmUgcnVucyBmb3IgdGhpcyBzcGVjaWZpYyBkYXRlXHJcbiAgICAgICAgICAgIGNvbnN0IGRhaWx5T3ZlcmhlYWQgPSBjb25maWdzID8gKFxyXG4gICAgICAgICAgICAgICAgKHBhcnNlRmxvYXQoY29uZmlncy5yZW50UHJpY2UpIHx8IDApICtcclxuICAgICAgICAgICAgICAgIChwYXJzZUZsb2F0KGNvbmZpZ3MudGF4ZXNQcmljZSkgfHwgMCkgK1xyXG4gICAgICAgICAgICAgICAgKHBhcnNlRmxvYXQoY29uZmlncy5mdWVsUHJpY2UpIHx8IDApICtcclxuICAgICAgICAgICAgICAgIChwYXJzZUZsb2F0KGNvbmZpZ3MudHJhbnNwb3J0UHJpY2UpIHx8IDApICtcclxuICAgICAgICAgICAgICAgIChwYXJzZUZsb2F0KGNvbmZpZ3MuY29tbWlzc2lvblByaWNlKSB8fCAwKSArXHJcbiAgICAgICAgICAgICAgICAocGFyc2VGbG9hdChjb25maWdzLnN1cGVydmlzb3JTYWxhcnkpIHx8IDApICtcclxuICAgICAgICAgICAgICAgIChwYXJzZUZsb2F0KGNvbmZpZ3Muc3RhZmZXYWdlcykgfHwgMClcclxuICAgICAgICAgICAgKSAvIDI2IDogMDtcclxuXHJcbiAgICAgICAgICAgIC8vIFN0YWJsZSBPdmVyaGVhZCBBbGxvY2F0aW9uIChESVZJREUgQlkgTlVNQkVSIE9GIE1BQ0hJTkVTKVxyXG4gICAgICAgICAgICBjb25zdCBtYWNoaW5lc09uRGF0ZVNuYXBzaG90ID0gbmV3IFNldChyYXdSZWNlbnRQcm9kdWN0aW9ucy5maWx0ZXIocmVjID0+IHJlYy5kYXRlID09PSBwcm9kdWN0aW9uRGF0YS5kYXRlKS5tYXAocmVjID0+IHJlYy5tYWNoaW5lTm8pKTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxNYWNoaW5lc09uRGF0ZSA9IE1hdGgubWF4KG1hY2hpbmVzT25EYXRlU25hcHNob3Quc2l6ZSwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJoZWFkU2hhcmUgPSBkYWlseU92ZXJoZWFkIC8gdG90YWxNYWNoaW5lc09uRGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlcnZlcklkID0gcHJvZHVjdGlvbkRhdGEuaWQgfHwgcHJvZHVjdGlvbkRhdGEuX2lkO1xyXG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0geyBcclxuICAgICAgICAgICAgICAgIC4uLnByb2R1Y3Rpb25EYXRhLCBcclxuICAgICAgICAgICAgICAgIHRvdGFsQmxvY2tzLCBcclxuICAgICAgICAgICAgICAgIGNvbmNhc3NlTTMsIFxyXG4gICAgICAgICAgICAgICAgZ3JhdmVsTTMsIFxyXG4gICAgICAgICAgICAgICAgc2FuZE0zLCBcclxuICAgICAgICAgICAgICAgIGxhYm9yUG90VVNELCBcclxuICAgICAgICAgICAgICAgIHRvdGFsTWF0Q29zdCxcclxuICAgICAgICAgICAgICAgIG92ZXJoZWFkU25hcHNob3Q6IG92ZXJoZWFkU2hhcmUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbENvc3Q6ICh0b3RhbE1hdENvc3QgKyBsYWJvclBvdFVTRCArIG92ZXJoZWFkU2hhcmUpIC8vIFBlcnNpc3QgdGhlIEZVTEwgY29zdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHNlcnZlcklkKSB7XHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkLmlkID0gc2VydmVySWQ7XHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkLl9pZCA9IHNlcnZlcklkO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1ibG9jay1wcm9kdWN0aW9uYCwgcGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdGlvbiBydW4gdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ibG9jay1wcm9kdWN0aW9uYCwgcGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdGlvbiBydW4gcmVjb3JkZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSU5TVEFOVCBVSSBTWU5DIC0gTm8gcmVsb2FkXHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoTWlzYygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0UHJvZHVjdGlvbkRhdGEoe1xyXG4gICAgICAgICAgICAgICAgLi4ucHJvZHVjdGlvbkRhdGEsIC8vIEtlZXAgdGhlIGRhdGUgYW5kIG90aGVyIGNvbnRleHR1YWwgZmllbGRzXHJcbiAgICAgICAgICAgICAgICBtYWNoaW5lTm86IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvck5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBoZWxwZXIxOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaGVscGVyMjogXCJcIixcclxuICAgICAgICAgICAgICAgIGhlbHBlcjM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBoYWxmRGF5T3BlcmF0b3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGFsZkRheUhlbHBlcjE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGFsZkRheUhlbHBlcjI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGFsZkRheUhlbHBlcjM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tUeXBlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc2Fja3NVc2VkOiAwLFxyXG4gICAgICAgICAgICAgICAgc2Fja0RldGFpbHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgY29uY2Fzc2VXaGVlbGJhcnJvd3M6IDEsIFxyXG4gICAgICAgICAgICAgICAgZ3JhdmVsV2hlZWxiYXJyb3dzOiAwLjUsXHJcbiAgICAgICAgICAgICAgICBzYW5kV2hlZWxiYXJyb3dzOiAwLjUsXHJcbiAgICAgICAgICAgICAgICBsYWJvclBvdDogMCxcclxuICAgICAgICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgX2lkOiBudWxsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiRXJyb3Igc2F2aW5nIHByb2R1Y3Rpb24gcnVuXCIpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCB3aWR0aDogJzEwMCUnLCBtaW5IZWlnaHQ6ICcxMDB2aCcsIG92ZXJmbG93WDogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBzeD17eyB6SW5kZXg6ICh0aGVtZSkgPT4gdGhlbWUuekluZGV4LmRyYXdlciArIDEsIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17dG9nZ2xlRHJhd2VyfSBlZGdlPVwic3RhcnRcIiBzeD17eyBtcjogMiB9fT48TWVudUljb24gLz48L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgbm9XcmFwPkJsb2NrIFByb2R1Y3Rpb24gRW50cnk8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicGVyc2lzdGVudFwiXHJcbiAgICAgICAgICAgICAgICBhbmNob3I9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgIG9wZW49e3NpZGVCYXJ9XHJcbiAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogZHJhd2VyV2lkdGgsIGZsZXhTaHJpbms6IDAsICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7IHdpZHRoOiBkcmF3ZXJXaWR0aCwgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcgfSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciAvPjxCb3ggc3g9e3sgb3ZlcmZsb3c6ICdhdXRvJyB9fT48TGlzdD48U2lkZWJhckRhc2ggLz48L0xpc3Q+PC9Cb3g+XHJcbiAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICA8TWFpbkNvbnRlbnQgb3Blbj17c2lkZUJhcn0+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgICAgICAgPEJveCBzeD17eyBtdDogMiwgd2lkdGg6ICcxMDAlJywgcHg6IDAsIG06IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgc3g9e3sgcDogNCwgYm9yZGVyUmFkaXVzOiAyLCBib3hTaGFkb3c6IDMgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tPlByb2R1Y3Rpb24gUnVuIERldGFpbHMgLSBTdGFuZGFyZGl6ZWQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhwcm9kdWN0aW9uRGF0YS5kYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXdWYWx1ZSkgPT4gc2V0UHJvZHVjdGlvbkRhdGEoeyAuLi5wcm9kdWN0aW9uRGF0YSwgZGF0ZTogbmV3VmFsdWUgPyBuZXdWYWx1ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IFwiXCIgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIkREL01NL1lZWVlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90UHJvcHM9e3sgdGV4dEZpZWxkOiB7IGZ1bGxXaWR0aDogdHJ1ZSB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIGxhYmVsPVwiTWFjaGluZSBOby5cIiB2YWx1ZT17cHJvZHVjdGlvbkRhdGEubWFjaGluZU5vfSBvbkNoYW5nZT17KGUpID0+IHNldFByb2R1Y3Rpb25EYXRhKHsgLi4ucHJvZHVjdGlvbkRhdGEsIG1hY2hpbmVObzogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXCJCbG9jayA1MFwiLCBcIkJsb2NrIDMzXCIsIFwiQmxvY2sgMjBcIiwgXCJCbG9jayAxNVwiLCBcIkJsb2NrIDEwXCIsIFwiQmxvY2sgMTRcIiwgXCJCbG9jayAxMlwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHVjdGlvbkRhdGEuYmxvY2tUeXBlIHx8IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlUGVyc29ubmVsQ2hhbmdlKCdibG9ja1R5cGUnLCBuZXdWYWx1ZSB8fCBcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkJsb2NrIFR5cGVcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wdGlvbkVxdWFsVG9WYWx1ZT17KG9wdGlvbiwgdmFsdWUpID0+IG9wdGlvbiA9PT0gdmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogMSwgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Z2V0QXZhaWxhYmxlRW1wbG95ZWVzKCdvcGVyYXRvck5hbWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5lbXBsb3llZU5hbWUgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtcGxveWVlcy5maW5kKGUgPT4gZS5lbXBsb3llZU5hbWUgPT09IHByb2R1Y3Rpb25EYXRhLm9wZXJhdG9yTmFtZSkgfHwgbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlUGVyc29ubmVsQ2hhbmdlKCdvcGVyYXRvck5hbWUnLCBuZXdWYWx1ZSA/IG5ld1ZhbHVlLmVtcGxveWVlTmFtZSA6IFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIk9wZXJhdG9yXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdGlvbkRhdGEub3BlcmF0b3JOYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvbkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHVjdGlvbkRhdGEuaGFsZkRheU9wZXJhdG9yID8gJ2hhbGYnIDogJ2Z1bGwnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVzaXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHZhbCkgPT4gdmFsICYmIGhhbmRsZUhhbGZEYXlUb2dnbGUoJ2hhbGZEYXlPcGVyYXRvcicsIHZhbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uIHZhbHVlPVwiZnVsbFwiIHN4PXt7IHB4OiAxLjUsIGNvbG9yOiAnc3VjY2Vzcy5tYWluJyB9fT5GdWxsPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uIHZhbHVlPVwiaGFsZlwiIHN4PXt7IHB4OiAxLjUsIGNvbG9yOiAnd2FybmluZy5tYWluJyB9fT7CvSBEYXk8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDEsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dldEF2YWlsYWJsZUVtcGxveWVlcygnaGVscGVyMScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmVtcGxveWVlTmFtZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVzLmZpbmQoZSA9PiBlLmVtcGxveWVlTmFtZSA9PT0gcHJvZHVjdGlvbkRhdGEuaGVscGVyMSkgfHwgbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlUGVyc29ubmVsQ2hhbmdlKCdoZWxwZXIxJywgbmV3VmFsdWUgPyBuZXdWYWx1ZS5lbXBsb3llZU5hbWUgOiBcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJIZWxwZXIgMVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3Rpb25EYXRhLmhlbHBlcjEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0aW9uRGF0YS5oYWxmRGF5SGVscGVyMSA/ICdoYWxmJyA6ICdmdWxsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1c2l2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWwpID0+IHZhbCAmJiBoYW5kbGVIYWxmRGF5VG9nZ2xlKCdoYWxmRGF5SGVscGVyMScsIHZhbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uIHZhbHVlPVwiZnVsbFwiIHN4PXt7IHB4OiAxLjUsIGNvbG9yOiAnc3VjY2Vzcy5tYWluJyB9fT5GdWxsPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uIHZhbHVlPVwiaGFsZlwiIHN4PXt7IHB4OiAxLjUsIGNvbG9yOiAnd2FybmluZy5tYWluJyB9fT7CvSBEYXk8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDEsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dldEF2YWlsYWJsZUVtcGxveWVlcygnaGVscGVyMicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmVtcGxveWVlTmFtZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVzLmZpbmQoZSA9PiBlLmVtcGxveWVlTmFtZSA9PT0gcHJvZHVjdGlvbkRhdGEuaGVscGVyMikgfHwgbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlUGVyc29ubmVsQ2hhbmdlKCdoZWxwZXIyJywgbmV3VmFsdWUgPyBuZXdWYWx1ZS5lbXBsb3llZU5hbWUgOiBcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJIZWxwZXIgMlwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3Rpb25EYXRhLmhlbHBlcjIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0aW9uRGF0YS5oYWxmRGF5SGVscGVyMiA/ICdoYWxmJyA6ICdmdWxsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1c2l2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWwpID0+IHZhbCAmJiBoYW5kbGVIYWxmRGF5VG9nZ2xlKCdoYWxmRGF5SGVscGVyMicsIHZhbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uIHZhbHVlPVwiZnVsbFwiIHN4PXt7IHB4OiAxLjUsIGNvbG9yOiAnc3VjY2Vzcy5tYWluJyB9fT5GdWxsPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uIHZhbHVlPVwiaGFsZlwiIHN4PXt7IHB4OiAxLjUsIGNvbG9yOiAnd2FybmluZy5tYWluJyB9fT7CvSBEYXk8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDEsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dldEF2YWlsYWJsZUVtcGxveWVlcygnaGVscGVyMycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmVtcGxveWVlTmFtZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVzLmZpbmQoZSA9PiBlLmVtcGxveWVlTmFtZSA9PT0gcHJvZHVjdGlvbkRhdGEuaGVscGVyMykgfHwgbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlUGVyc29ubmVsQ2hhbmdlKCdoZWxwZXIzJywgbmV3VmFsdWUgPyBuZXdWYWx1ZS5lbXBsb3llZU5hbWUgOiBcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJIZWxwZXIgM1wiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3Rpb25EYXRhLmhlbHBlcjMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0aW9uRGF0YS5oYWxmRGF5SGVscGVyMyA/ICdoYWxmJyA6ICdmdWxsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1c2l2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWwpID0+IHZhbCAmJiBoYW5kbGVIYWxmRGF5VG9nZ2xlKCdoYWxmRGF5SGVscGVyMycsIHZhbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uIHZhbHVlPVwiZnVsbFwiIHN4PXt7IHB4OiAxLjUsIGNvbG9yOiAnc3VjY2Vzcy5tYWluJyB9fT5GdWxsPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uIHZhbHVlPVwiaGFsZlwiIHN4PXt7IHB4OiAxLjUsIGNvbG9yOiAnd2FybmluZy5tYWluJyB9fT7CvSBEYXk8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT48RGl2aWRlciBzeD17eyBteTogMSB9fSAvPjwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCB0eXBlPVwibnVtYmVyXCIgbGFiZWw9XCJTYWNrcyBvZiBDZW1lbnRcIiB2YWx1ZT17cHJvZHVjdGlvbkRhdGEuc2Fja3NVc2VkfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNhY2tDaGFuZ2UoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCB0eXBlPVwibnVtYmVyXCIgbGFiZWw9XCJXaGVlbGJhcnJvdyBDb25jYXNzZSAocGVyIFNhY2spXCIgdmFsdWU9e3Byb2R1Y3Rpb25EYXRhLmNvbmNhc3NlV2hlZWxiYXJyb3dzfSBvbkNoYW5nZT17KGUpID0+IHNldFByb2R1Y3Rpb25EYXRhKHsgLi4ucHJvZHVjdGlvbkRhdGEsIGNvbmNhc3NlV2hlZWxiYXJyb3dzOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggdHlwZT1cIm51bWJlclwiIGxhYmVsPVwiV2hlZWxiYXJyb3cgR3JhdmVsIChwZXIgU2FjaylcIiB2YWx1ZT17cHJvZHVjdGlvbkRhdGEuZ3JhdmVsV2hlZWxiYXJyb3dzfSBvbkNoYW5nZT17KGUpID0+IHNldFByb2R1Y3Rpb25EYXRhKHsgLi4ucHJvZHVjdGlvbkRhdGEsIGdyYXZlbFdoZWVsYmFycm93czogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHR5cGU9XCJudW1iZXJcIiBsYWJlbD1cIldoZWVsYmFycm93IFNhbmQgKHBlciBTYWNrKVwiIHZhbHVlPXtwcm9kdWN0aW9uRGF0YS5zYW5kV2hlZWxiYXJyb3dzfSBvbkNoYW5nZT17KGUpID0+IHNldFByb2R1Y3Rpb25EYXRhKHsgLi4ucHJvZHVjdGlvbkRhdGEsIHNhbmRXaGVlbGJhcnJvd3M6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdGlvbkRhdGEuc2Fja3NVc2VkID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDIsIG1iOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCI+UHJvZHVjdGlvbiBwZXIgU2FjayAoQmxvY2tzKTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtgVG90YWwgQmxvY2tzOiAkeyhwcm9kdWN0aW9uRGF0YS5zYWNrRGV0YWlscyB8fCBbXSkucmVkdWNlKChzdW0sIHZhbCkgPT4gc3VtICsgKHBhcnNlSW50KHZhbCkgfHwgMCksIDApfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnLCBnYXA6IDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvZHVjdGlvbkRhdGEuc2Fja0RldGFpbHMgfHwgW10pLm1hcCgodmFsLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQga2V5PXtpZHh9IGxhYmVsPXtgU2FjayAke2lkeCArIDF9YH0gc2l6ZT1cInNtYWxsXCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt2YWx9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlU2Fja0RldGFpbENoYW5nZShpZHgsIGUudGFyZ2V0LnZhbHVlKX0gc3g9e3sgd2lkdGg6IDEwMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHA6IDIsIGJnY29sb3I6ICcjZjBmMGYwJywgYm9yZGVyUmFkaXVzOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCI+Q2FsY3VsYXRlZCBMYWJvciBQb3Q8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJzZWNvbmRhcnlcIj57TWF0aC5yb3VuZChjb21wdXRlQWN0dWFsUG90KHByb2R1Y3Rpb25EYXRhKSB8fCAwKS50b0xvY2FsZVN0cmluZygpfSBGQzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtdDogMywgYmdjb2xvcjogJyMzMDM2OGEnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzU3VibWl0dGluZyA/IFwiU2F2aW5nLi4uXCIgOiAocHJvZHVjdGlvbkRhdGEuaWQgfHwgcHJvZHVjdGlvbkRhdGEuX2lkID8gXCJVUERBVEUgUFJPRFVDVElPTlwiIDogXCJSRUNPUkQgUFJPRFVDVElPTlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBzeD17eyBwOiAzLCBib3JkZXJSYWRpdXM6IDIsIGJveFNoYWRvdzogMyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1iOiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5Qcm9kdWN0aW9uIExvZ3M8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDEsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBwOiAxLCBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsIGJvcmRlclJhZGl1czogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZm9udFdlaWdodD1cImJvbGRcIj5QZXJpb2QgRmlsdGVyOjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZyb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZnJvbURhdGUgPyBkYXlqcyhmcm9tRGF0ZSkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5ld1ZhbHVlKSA9PiBzZXRGcm9tRGF0ZShuZXdWYWx1ZSAmJiBuZXdWYWx1ZS5pc1ZhbGlkKCkgPyBuZXdWYWx1ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJERC9NTS9ZWVlZXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFByb3BzPXt7IHRleHRGaWVsZDogeyBzaXplOiAnc21hbGwnLCBzeDogeyB3aWR0aDogMTQwIH0gfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b0RhdGUgPyBkYXlqcyh0b0RhdGUpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXdWYWx1ZSkgPT4gc2V0VG9EYXRlKG5ld1ZhbHVlICYmIG5ld1ZhbHVlLmlzVmFsaWQoKSA/IG5ld1ZhbHVlLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIkREL01NL1lZWVlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90UHJvcHM9e3sgdGV4dEZpZWxkOiB7IHNpemU6ICdzbWFsbCcsIHN4OiB7IHdpZHRoOiAxNDAgfSB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoIWZyb21EYXRlIHx8ICF0b0RhdGUpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJ3YXJuaW5nXCIgc3g9e3sgbXQ6IDIsIGJnY29sb3I6ICcjZmZmZGU3JywgYm9yZGVyOiAnMXB4IHNvbGlkICNmZmY1OWQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+Tm8gRmlsdGVyIEFjdGl2ZTo8L2I+IFBsZWFzZSBzZWxlY3QgYSBkYXRlIHJhbmdlIHRvIHZpZXcgcHJvZHVjdGlvbiBsb2dzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiByZWNlbnRQcm9kdWN0aW9ucy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiBzeD17eyBtdDogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIHByb2R1Y3Rpb24gcnVucyBmb3VuZCBmb3IgdGhpcyBwZXJpb2QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmcm9tRGF0ZSAmJiB0b0RhdGUgJiYgcmVjZW50UHJvZHVjdGlvbnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkIHN4PXt7IGJnY29sb3I6ICcjZWVlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+RGF0ZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+TWFjaGluZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+T3BlcmF0b3I8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkJsb2NrIFR5cGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5TYWNrczwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkJsb2NrczwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkNvc3QvQmxvY2sgKCQpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+QWN0aW9uczwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNlbnRQcm9kdWN0aW9ucy5tYXAociA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntkYXlqcyhyLmRhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3IubWFjaGluZU5vfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Iub3BlcmF0b3JOYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3IuYmxvY2tUeXBlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyLnNhY2tzVXNlZH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57ci50b3RhbEJsb2Nrc308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsoci50b3RhbEJsb2NrcyA+IDAgPyAocGFyc2VGbG9hdChyLnRvdGFsQ29zdCkgfHwgMCkgLyByLnRvdGFsQmxvY2tzIDogMCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRQcm9kdWN0aW9uRGF0YShyKX0+PEVkaXRJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJlcnJvclwiIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIkRlbGV0ZSB0aGlzIHJlY29yZD9cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJ2ZXJJZCA9IHIuX2lkIHx8IHIuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW1pc3RpY2FsbHkgdXBkYXRlIFVJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFja3VwID0gWy4uLnJhd1JlY2VudFByb2R1Y3Rpb25zXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSYXdSZWNlbnRQcm9kdWN0aW9ucyhwcmV2ID0+IHByZXYuZmlsdGVyKGl0ZW0gPT4gKGl0ZW0uX2lkIHx8IGl0ZW0uaWQpICE9PSBzZXJ2ZXJJZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJSZWNvcmQgZGVsZXRlZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzZXJ2ZXJJZCA9PT0gJ3N0cmluZycgJiYgc2VydmVySWQubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9kZWxldGUtYmxvY2stcHJvZHVjdGlvbmAsIHsgaWQ6IHNlcnZlcklkIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlZnJlc2ggc3RhdGUgdG8gZW5zdXJlIHBlcmZlY3Qgc3luY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaE1pc2MoKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEZWxldGUgZmFpbGVkXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiU2VydmVyIHVwZGF0ZSBmYWlsZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJvbGxiYWNrIG9uIGZhaWx1cmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmF3UmVjZW50UHJvZHVjdGlvbnMoYmFja3VwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjxEZWxldGVJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZnJvbURhdGUgJiYgdG9EYXRlICYmIHJlY2VudFByb2R1Y3Rpb25zLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IG10OiAzLCBwOiAyLCBiZ2NvbG9yOiAnI2YwZmRmNCcsIGJvcmRlcjogJzFweCBzb2xpZCAjYmJmN2QwJywgYm9yZGVyUmFkaXVzOiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgY29sb3I9XCIjMTY2NTM0XCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcmlvZCBTdW1tYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwiIzE1ODAzZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+VG90YWwgQ2VtZW50IFNhY2tzOjwvYj4ge3Byb2R1Y3Rpb25TdW1tYXJ5LnRvdGFsU2Fja3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogMSwgZmxleFdyYXA6ICd3cmFwJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cIiMxNTgwM2RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5CbG9ja3MgUHJvZHVjZWQ6PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHByb2R1Y3Rpb25TdW1tYXJ5LmJsb2Nrc0J5VHlwZSkubWFwKChbdHlwZSwgY291bnRdKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXAga2V5PXt0eXBlfSBsYWJlbD17YCR7dHlwZX06ICR7Y291bnQudG9Mb2NhbGVTdHJpbmcoKX1gfSBzaXplPVwic21hbGxcIiBzeD17eyBiZ2NvbG9yOiAnI2RjZmNlNycsIGNvbG9yOiAnIzE2NjUzNCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUcmFuc3BhcmVudCBCcmVha2Rvd24gb2YgUHJvZHVjdGlvbiBMb2dzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVjZW50UHJvZHVjdGlvbnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIHN4PXt7IHA6IDMsIGJvcmRlclJhZGl1czogMiwgYm94U2hhZG93OiAzLCBiZ2NvbG9yOiAnI2Y5ZmJlNycsIGJvcmRlcjogJzFweCBzb2xpZCAjYzVlMWE1JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEsIG1iOiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+8J+TiiBUcmFuc3BhcmVudCBCcmVha2Rvd24g4oCUIFdobyBFYXJuZWQgV2hhdDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNlbnRQcm9kdWN0aW9ucy5tYXAoKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3b3JrZXJzTGlzdCA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiByLm9wZXJhdG9yTmFtZSwgaGFsZjogci5oYWxmRGF5T3BlcmF0b3IgfHwgZmFsc2UsIHJvbGU6ICfwn5G3IE9wZXJhdG9yJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IHIuaGVscGVyMSwgaGFsZjogci5oYWxmRGF5SGVscGVyMSB8fCBmYWxzZSwgcm9sZTogJ/CflKcgSGVscGVyIDEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogci5oZWxwZXIyLCBoYWxmOiByLmhhbGZEYXlIZWxwZXIyIHx8IGZhbHNlLCByb2xlOiAn8J+UpyBIZWxwZXIgMicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiByLmhlbHBlcjMsIGhhbGY6IHIuaGFsZkRheUhlbHBlcjMgfHwgZmFsc2UsIHJvbGU6ICfwn5SnIEhlbHBlciAzJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5maWx0ZXIodyA9PiB3Lm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3b3JrZXJDb3VudCA9IHdvcmtlcnNMaXN0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmF0ZXMgPSBjb25maWdzPy5sYWJvclJhdGVzIHx8IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0ZTUwXzMzOiB7IHBlclNhY2s6IDEwMDAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGUyMDogeyB0MV9zYWNrczogNiwgdDFfcmF0ZTogOTAwMCwgdDJfc2Fja3M6IDcsIHQyX3JhdGU6IDE2NTAwLCB0M19zYWNrczogOCwgdDNfcmF0ZTogMTkwMDAsIHQ0X3NhY2tzOiAxMiwgdDRfcmF0ZTogMjE1MDAsIHQ1X3JhdGU6IDI0NTAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGUxNTogeyB0MV9zYWNrczogNSwgdDFfcmF0ZTogOTAwMCwgdDJfc2Fja3M6IDYsIHQyX3JhdGU6IDE2NTAwLCB0M19zYWNrczogNywgdDNfcmF0ZTogMTkwMDAsIHQ0X3NhY2tzOiAxMCwgdDRfcmF0ZTogMjE1MDAsIHQ1X3JhdGU6IDI0NTAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGUxNDogeyB0MV9zYWNrczogNiwgdDFfcmF0ZTogOTAwMCwgdDJfc2Fja3M6IDcsIHQyX3JhdGU6IDE3MDAwLCB0M19zYWNrczogOCwgdDNfcmF0ZTogMTk1MDAsIHQ0X3NhY2tzOiA5LCB0NF9yYXRlOiAyMjAwMCwgdDVfcmF0ZTogMjQ1MDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0ZTEyOiB7IHQxX3NhY2tzOiA2LCB0MV9yYXRlOiA5MDAwLCB0Ml9zYWNrczogNywgdDJfcmF0ZTogMTcwMDAsIHQzX3NhY2tzOiA4LCB0M19yYXRlOiAxOTUwMCwgdDRfc2Fja3M6IDksIHQ0X3JhdGU6IDIyMDAwLCB0NV9yYXRlOiAyNDUwMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRlMTA6IHsgdDFfc2Fja3M6IDYsIHQxX3JhdGU6IDkwMDAsIHQyX3NhY2tzOiA3LCB0Ml9yYXRlOiAxNzAwMCwgdDNfc2Fja3M6IDgsIHQzX3JhdGU6IDE5NTAwLCB0NF9zYWNrczogOSwgdDRfcmF0ZTogMjIwMDAsIHQ1X3JhdGU6IDI0NTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVXb3JrZXJTaGFyZSA9ICh0eXBlU3RyLCBzLCBlLCBoYWxmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlU3RyLmluY2x1ZGVzKFwiNTBcIikgfHwgdHlwZVN0ci5pbmNsdWRlcyhcIjMzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFsZiA/IChzICogKHJhdGVzPy5yYXRlNTBfMzM/LnBlclNhY2sgfHwgMCkpIC8gMiA6IChzICogKHJhdGVzPy5yYXRlNTBfMzM/LnBlclNhY2sgfHwgMCkpIC8gTWF0aC5tYXgoZSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBydCA9IG51bGwsIGxpbWl0U2Fja3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZVN0ci5pbmNsdWRlcyhcIjIwXCIpKSB7IHJ0ID0gcmF0ZXM/LnJhdGUyMCB8fCB7fTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlU3RyLmluY2x1ZGVzKFwiMTVcIikpIHsgcnQgPSByYXRlcz8ucmF0ZTE1IHx8IHt9OyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVTdHIuaW5jbHVkZXMoXCIxNFwiKSkgeyBydCA9IHJhdGVzPy5yYXRlMTQgfHwgcmF0ZXM/LnJhdGUxMF8xNF8xMiB8fCB7fTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlU3RyLmluY2x1ZGVzKFwiMTJcIikpIHsgcnQgPSByYXRlcz8ucmF0ZTEyIHx8IHJhdGVzPy5yYXRlMTBfMTRfMTIgfHwge307IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZVN0ci5pbmNsdWRlcyhcIjEwXCIpKSB7IHJ0ID0gcmF0ZXM/LnJhdGUxMCB8fCByYXRlcz8ucmF0ZTEwXzE0XzEyIHx8IHt9OyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdFNhY2tzID0gcnQudDJfc2Fja3MgfHwgMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVmZmVjdGl2ZVNhY2tzID0gaGFsZiA/IE1hdGgubWluKHMsIGxpbWl0U2Fja3MpIDogcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYXRlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVmZmVjdGl2ZVNhY2tzIDw9IChydC50MV9zYWNrcyB8fCAwKSkgcmF0ZSA9IChydC50MV9yYXRlIHx8IDApICogcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZWZmZWN0aXZlU2Fja3MgPD0gKHJ0LnQyX3NhY2tzIHx8IDApKSByYXRlID0gcnQudDJfcmF0ZSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlZmZlY3RpdmVTYWNrcyA9PT0gKHJ0LnQzX3NhY2tzIHx8IDApKSByYXRlID0gcnQudDNfcmF0ZSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlZmZlY3RpdmVTYWNrcyA8PSAocnQudDRfc2Fja3MgfHwgMCkpIHJhdGUgPSBydC50NF9yYXRlIHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmF0ZSA9IHJ0LnQ1X3JhdGUgfHwgMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoYWxmID8gcmF0ZSAvIDIgOiByYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YW5kYXJkU3BvdHMgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVuaXRTaGFyZSA9IGNhbGN1bGF0ZVdvcmtlclNoYXJlKHIuYmxvY2tUeXBlLCByLnNhY2tzVXNlZCB8fCAwLCBzdGFuZGFyZFNwb3RzLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbGVkV29ya2VycyA9IHdvcmtlcnNMaXN0Lm1hcCh3ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhcmUgPSB3LmhhbGYgPyB1bml0U2hhcmUgLyAyIDogdW5pdFNoYXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi53LCBzaGFyZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYWNoaW5lUGF5b3V0ID0gZGV0YWlsZWRXb3JrZXJzLnJlZHVjZSgoc3VtLCB3KSA9PiBzdW0gKyB3LnNoYXJlLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbExhYm9yUG90ID0gbWFjaGluZVBheW91dDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fSBrZXk9e3IuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIHN4PXt7IHA6IDIsIGJvcmRlcjogJzFweCBzb2xpZCAjYWVkNTgxJywgYm9yZGVyUmFkaXVzOiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBtYjogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBmb250V2VpZ2h0PVwiYm9sZFwiPk1hY2hpbmUge3IubWFjaGluZU5vfSDigJQge3IuYmxvY2tUeXBlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e2RheWpzKHIuZGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9IMK3IHtyLnNhY2tzVXNlZH0gc2Fja3Mgwrcge3IudG90YWxCbG9ja3N9IGJsb2NrczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5Ub3RhbCBMYWJvciBQb3QgKGluY2wuIE1peGVyKTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgY29sb3I9XCJzdWNjZXNzLm1haW5cIj57TWF0aC5yb3VuZCh0b3RhbExhYm9yUG90IHx8IDApLnRvTG9jYWxlU3RyaW5nKCl9IEZDPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBzeD17eyBteTogMSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgZGlzcGxheT1cImJsb2NrXCIgbWI9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbml0IFNoYXJlOiA8Yj57TWF0aC5yb3VuZCh1bml0U2hhcmUpLnRvTG9jYWxlU3RyaW5nKCl9IEZDPC9iPiAoYmFzZWQgb24ge3N0YW5kYXJkU3BvdHN9IHNwb3RzIHBlciBydW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnLCBnYXA6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXRhaWxlZFdvcmtlcnMubWFwKCh3LCB3aSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e3dpfSBzeD17eyBwOiAxLCBiZ2NvbG9yOiAnI2U4ZjVlOScsIGJvcmRlclJhZGl1czogMSwgYm9yZGVyOiAnMXB4IHNvbGlkICNhNWQ2YTcnLCBtaW5XaWR0aDogMTQwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e3cucm9sZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgZm9udFdlaWdodD1cImJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3cubmFtZX0ge3cuaGFsZiAmJiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyNmZjk4MDAnLCBmb250U2l6ZTogJzAuOGVtJyB9fT4owr0gRGF5KTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwic3VjY2Vzcy5tYWluXCI+K3tNYXRoLnJvdW5kKHcuc2hhcmUgfHwgMCkudG9Mb2NhbGVTdHJpbmcoKX0gRkM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9NYWluQ29udGVudD5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2NrUHJvZHVjdGlvblZpZXc7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsIlNpZGViYXJEYXNoIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RDdXJyZW50VXNlciIsInVzZU5hdmlnYXRlIiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsIlBhcGVyIiwiR3JpZCIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIkJveCIsIk1lbnVJdGVtIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIkNzc0Jhc2VsaW5lIiwiQXBwQmFyIiwiVG9vbGJhciIsIkRyYXdlciIsIkRpdmlkZXIiLCJMaXN0IiwiVGFibGVDb250YWluZXIiLCJJY29uQnV0dG9uIiwiQXV0b2NvbXBsZXRlIiwiVG9nZ2xlQnV0dG9uIiwiVG9nZ2xlQnV0dG9uR3JvdXAiLCJDaGlwIiwiQWxlcnQiLCJNZW51SWNvbiIsIlNhdmVJY29uIiwiQWRkSWNvbiIsIkRlbGV0ZUljb24iLCJFZGl0SWNvbiIsInN0eWxlZCIsInRvYXN0IiwiZGF5anMiLCJjdXN0b21QYXJzZUZvcm1hdCIsImF4aW9zIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJBZGFwdGVyRGF5anMiLCJEYXRlUGlja2VyIiwiRU5EUE9JTlRfVVJMIiwiZXh0ZW5kIiwicGFyc2VEYXRlIiwiZCIsImZvcm1hdHMiLCJwYXJzZWQiLCJpc1ZhbGlkIiwiZHJhd2VyV2lkdGgiLCJNYWluQ29udGVudCIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWYiLCJ0aGVtZSIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiZmxleEdyb3ciLCJwYWRkaW5nIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiY29uY2F0IiwiZWFzZU91dCIsImVudGVyaW5nU2NyZWVuIiwiQmxvY2tQcm9kdWN0aW9uVmlldyIsIm5hdmlnYXRlIiwidXNlciIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlbXBsb3llZXMiLCJzZXRFbXBsb3llZXMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImdyYW50QWNjZXNzIiwic2V0R3JhbnRBY2Nlc3MiLCJmZXRjaEFjY2VzcyIsIl9yZWYyIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVzJGRhdGEiLCJyZXMiLCJnZXQiLCJ1c2VyQWNjZXNzIiwiZGF0YSIsImZpbmQiLCJyb3ciLCJ1c2VySUQiLCJpZCIsIl91c2VyQWNjZXNzJG1vZHVsZXMkZiIsIm1vZHVsZXMiLCJibG9ja0FjY2VzcyIsIm0iLCJtb2R1bGVOYW1lIiwiYWNjZXNzIiwiaXNHRyIsInVzZXJOYW1lIiwiY3JlYXRlTSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiZmV0Y2hQb3NSYXRlIiwiX3JlZjMiLCJfcmVzJGRhdGEkZGF0YSQiLCJwYXJzZUZsb2F0IiwicmF0ZVIiLCJlcnIiLCJfdXNlU3RhdGU3IiwiZGF0ZSIsImZvcm1hdCIsIm1hY2hpbmVObyIsIm9wZXJhdG9yTmFtZSIsImhlbHBlcjEiLCJoZWxwZXIyIiwiaGVscGVyMyIsImhhbGZEYXlPcGVyYXRvciIsImhhbGZEYXlIZWxwZXIxIiwiaGFsZkRheUhlbHBlcjIiLCJoYWxmRGF5SGVscGVyMyIsImJsb2NrVHlwZSIsInNhY2tzVXNlZCIsInNhY2tEZXRhaWxzIiwiY2VtZW50VXNlZCIsImNvbmNhc3NlV2hlZWxiYXJyb3dzIiwiZ3JhdmVsV2hlZWxiYXJyb3dzIiwic2FuZFdoZWVsYmFycm93cyIsImxhYm9yUG90IiwiX3VzZVN0YXRlOCIsInByb2R1Y3Rpb25EYXRhIiwic2V0UHJvZHVjdGlvbkRhdGEiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsImZyb21EYXRlIiwic2V0RnJvbURhdGUiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJ0b0RhdGUiLCJzZXRUb0RhdGUiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwicG9zUmF0ZSIsInNldFBvc1JhdGUiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsImNvbmZpZ3MiLCJzZXRDb25maWdzIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInJhd1JlY2VudFByb2R1Y3Rpb25zIiwic2V0UmF3UmVjZW50UHJvZHVjdGlvbnMiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiZGFpbHlQcm9kdWN0aW9ucyIsInNldERhaWx5UHJvZHVjdGlvbnMiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwiZGFpbHlNaXhlcldvcmtlcnMiLCJzZXREYWlseU1peGVyV29ya2VycyIsInRvZ2dsZURyYXdlciIsImZldGNoTWlzYyIsIl9yZWY0IiwicmF0ZSIsImNvbmZpZ1JlcyIsIkFycmF5IiwiaXNBcnJheSIsImNvbmZpZ0FyciIsImNvbmZpZyIsImMiLCJwcm9kUmVzIiwiYWxsRW1wbG95ZWVzIiwidW5pcXVlTmFtZXMiLCJTZXQiLCJmYWN0b3J5RW1wbG95ZWVzIiwiZmlsdGVyIiwiZSIsImlzRmFjdG9yeSIsImRlcGFydG1lbnQiLCJ0b1VwcGVyQ2FzZSIsImluY2x1ZGVzIiwiaXNBY3RpdmUiLCJzdGF0dXMiLCJoYXMiLCJlbXBsb3llZU5hbWUiLCJhZGQiLCJsZW5ndGgiLCJwIiwiY2FsY3VsYXRlV29ya2VyU2hhcmUiLCJ0eXBlU3RyIiwicyIsImhhbGYiLCJyYXRlcyIsImxhYm9yUmF0ZXMiLCJyYXRlNTBfMzMiLCJwZXJTYWNrIiwicmF0ZTIwIiwidDFfc2Fja3MiLCJ0MV9yYXRlIiwidDJfc2Fja3MiLCJ0Ml9yYXRlIiwidDNfc2Fja3MiLCJ0M19yYXRlIiwidDRfc2Fja3MiLCJ0NF9yYXRlIiwidDVfcmF0ZSIsInJhdGUxNSIsInJhdGUxNCIsInJhdGUxMiIsInJhdGUxMCIsInRvdCIsIk1hdGgiLCJtYXgiLCJydCIsImxpbWl0U2Fja3MiLCJyYXRlMTBfMTRfMTIiLCJlZmZlY3RpdmVTYWNrcyIsIm1pbiIsInJlY2VudFByb2R1Y3Rpb25zIiwiZmlsdGVyZWRQcm9kdWN0aW9ucyIsImZEIiwic3RhcnRPZiIsInREIiwiZW5kT2YiLCJpc0FmdGVyIiwiciIsImlzU2FtZSIsImlzQmVmb3JlIiwicHJpY2luZyIsImZpeGVkTW9udGhseSIsInJlbnRQcmljZSIsInRheGVzUHJpY2UiLCJzaGFyZWRNb250aGx5IiwiZnVlbFByaWNlIiwidHJhbnNwb3J0UHJpY2UiLCJjb21taXNzaW9uUHJpY2UiLCJzdXBlcnZpc29yU2FsYXJ5Iiwic3RhZmZXYWdlcyIsImRhaWx5T3ZlcmhlYWQiLCJtYXAiLCJjTTMiLCJnTTMiLCJzTTMiLCJvcFNoYXJlIiwiaDFTaGFyZSIsImgyU2hhcmUiLCJoM1NoYXJlIiwibWl4ZXJTaGFyZSIsIm1peGVyUmF0ZVBlclNhY2siLCJjcmV3T25seUZDIiwiZnVsbENyZXdBbmRNaXhlckZDIiwibGFib3JGQyIsIm9sZFNjaGVtYURpZmYiLCJhYnMiLCJuZXdTY2hlbWFEaWZmIiwiY2FsY3VsYXRlZE1hdENvc3QiLCJjZW1lbnRQcmljZSIsImNvbmNhc3NlUHJpY2UiLCJncmF2ZWxQcmljZSIsInNhbmRQcmljZSIsImNlbWVudFRocmVzaG9sZCIsIm1hdENvc3QiLCJ0b3RhbE1hdENvc3QiLCJiYXNlQ29zdCIsIm1hY2hpbmVzT25EYXRlIiwicmVjIiwidG90YWxNYWNoaW5lc09uRGF0ZSIsInNpemUiLCJvdmVyaGVhZFNoYXJlIiwib3ZlcmhlYWRTbmFwc2hvdCIsImZpbmFsVG90YWxDb3N0IiwidG90YWxDb3N0IiwidG9GaXhlZCIsInByb2R1Y3Rpb25TdW1tYXJ5IiwidG90YWxTYWNrcyIsImJsb2Nrc0J5VHlwZSIsImZvckVhY2giLCJzYWNrcyIsInBhcnNlSW50IiwiYmxvY2tzIiwidG90YWxCbG9ja3MiLCJ0eXBlIiwiY29tcHV0ZUFjdHVhbFBvdCIsImFscmVhZHlBc3NpZ25lZCIsIm5hbWVzIiwibXciLCJ3b3JrZXJOYW1lIiwiZ2V0QXZhaWxhYmxlRW1wbG95ZWVzIiwiY3VycmVudEZpZWxkIiwiY3VycmVudFNlbGVjdGlvbnMiLCJ2YWwiLCJpZHgiLCJmaWVsZHMiLCJoYW5kbGVTYWNrQ2hhbmdlIiwibnVtU2Fja3MiLCJuZXdEZXRhaWxzIiwiZnJvbSIsIl8iLCJpIiwidXBkYXRlZCIsImhhbmRsZVNhY2tEZXRhaWxDaGFuZ2UiLCJpbmRleCIsImdldFdlaWdodGVkVW5pdHMiLCJwYWlycyIsIl9yZWY1IiwiX3JlZjYiLCJuYW1lIiwicmVkdWNlIiwic3VtIiwiX3JlZjciLCJfcmVmOCIsImhhbmRsZVBlcnNvbm5lbENoYW5nZSIsImZpZWxkIiwidmFsdWUiLCJoYW5kbGVIYWxmRGF5VG9nZ2xlIiwiaGFsZkRheUZpZWxkIiwiaGFuZGxlU2F2ZSIsIl9yZWY5IiwiYSIsImIiLCJoYXNNaXNzaW5nQmxvY2tzIiwic29tZSIsIndhcm5pbmciLCJ3YkZhY3RvciIsIndoZWVsYmFycm93UGVyTTMiLCJjb25jYXNzZU0zIiwiZ3JhdmVsTTMiLCJzYW5kTTMiLCJhY3R1YWxMYWJvclBvdCIsInRvdGFsTGFib3JGQyIsImxhYm9yUG90VVNEIiwibWFjaGluZXNPbkRhdGVTbmFwc2hvdCIsInNlcnZlcklkIiwiX2lkIiwicGF5bG9hZCIsInBvc3QiLCJzdWNjZXNzIiwiY3JlYXRlRWxlbWVudCIsInN4IiwiZGlzcGxheSIsIndpZHRoIiwibWluSGVpZ2h0Iiwib3ZlcmZsb3dYIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJkcmF3ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm9uQ2xpY2siLCJlZGdlIiwibXIiLCJ2YXJpYW50Iiwibm9XcmFwIiwiYW5jaG9yIiwiZmxleFNocmluayIsImJveFNpemluZyIsIm92ZXJmbG93IiwibXQiLCJweCIsImNvbnRhaW5lciIsInNwYWNpbmciLCJpdGVtIiwieHMiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJndXR0ZXJCb3R0b20iLCJzbSIsImRhdGVBZGFwdGVyIiwibGFiZWwiLCJvbkNoYW5nZSIsIm5ld1ZhbHVlIiwic2xvdFByb3BzIiwidGV4dEZpZWxkIiwiZnVsbFdpZHRoIiwidGFyZ2V0Iiwib3B0aW9ucyIsInJlbmRlcklucHV0IiwicGFyYW1zIiwiX2V4dGVuZHMiLCJpc09wdGlvbkVxdWFsVG9WYWx1ZSIsIm9wdGlvbiIsImdhcCIsImFsaWduSXRlbXMiLCJnZXRPcHRpb25MYWJlbCIsImV4Y2x1c2l2ZSIsIm15IiwibWIiLCJmb250V2VpZ2h0IiwiZmxleFdyYXAiLCJrZXkiLCJiZ2NvbG9yIiwicm91bmQiLCJ0b0xvY2FsZVN0cmluZyIsInN0YXJ0SWNvbiIsImRpc2FibGVkIiwianVzdGlmeUNvbnRlbnQiLCJib3JkZXIiLCJzZXZlcml0eSIsImFsaWduIiwidW5kZWZpbmVkIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiZm9udFNpemUiLCJ3aW5kb3ciLCJjb25maXJtIiwiYmFja3VwIiwicHJldiIsImNhdGNoIiwiT2JqZWN0IiwiZW50cmllcyIsIl9yZWYxIiwiX3JlZjEwIiwiY291bnQiLCJ3b3JrZXJzTGlzdCIsInJvbGUiLCJ3Iiwid29ya2VyQ291bnQiLCJfcmF0ZXMkcmF0ZTUwXyIsIl9yYXRlcyRyYXRlNTBfMiIsInN0YW5kYXJkU3BvdHMiLCJ1bml0U2hhcmUiLCJkZXRhaWxlZFdvcmtlcnMiLCJzaGFyZSIsIm1hY2hpbmVQYXlvdXQiLCJ0b3RhbExhYm9yUG90IiwibWQiLCJ0ZXh0QWxpZ24iLCJ3aSIsIm1pbldpZHRoIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9