"use strict";
exports.id = "src_js_AdminView1_PageView_BlockFactory_BlockSalesView_js";
exports.ids = ["src_js_AdminView1_PageView_BlockFactory_BlockSalesView_js"];
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

/***/ "./src/js/AdminView1/PageView/BlockFactory/BlockSalesView.js"
/*!*******************************************************************!*\
  !*** ./src/js/AdminView1/PageView/BlockFactory/BlockSalesView.js ***!
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/Save */ "./node_modules/@mui/icons-material/Save.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_38__);
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




















dayjs__WEBPACK_IMPORTED_MODULE_37___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_38___default()));

// Global helper to parse dates robustly across formats
var parseDate = d => {
  if (!d) return dayjs__WEBPACK_IMPORTED_MODULE_37___default()(null);
  if (typeof d === 'string') {
    var formats = ['YYYY-MM-DD', 'DD/MM/YYYY', 'D/M/YYYY', 'DD-MM-YYYY', 'DD/MM/YY', 'D/M/YY', 'YYYY-MM-DDTHH:mm:ss.SSSZ'];
    var parsed = dayjs__WEBPACK_IMPORTED_MODULE_37___default()(d, formats, true);
    if (!parsed.isValid()) parsed = dayjs__WEBPACK_IMPORTED_MODULE_37___default()(d); // Fallback to native
    return parsed;
  }
  return dayjs__WEBPACK_IMPORTED_MODULE_37___default()(d);
};
var drawerWidth = 240;
var MainContent = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_34__["default"])('main', {
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
function BlockSalesView() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_3__.selectCurrentUser);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    sideBar = _useState2[0],
    setSideBar = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    configs = _useState4[0],
    setConfigs = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* () {
        try {
          var _accRes$data;
          // Fetch Access
          var accRes = yield axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/grantAccess"));
          var userAccess = (_accRes$data = accRes.data) === null || _accRes$data === void 0 || (_accRes$data = _accRes$data.data) === null || _accRes$data === void 0 ? void 0 : _accRes$data.find(row => row.userID === user.data.id);
          var isGG = user.data.userName === 'GG';
          if (userAccess) {
            var _userAccess$modules$f;
            var blockAccess = (_userAccess$modules$f = userAccess.modules.find(m => m.moduleName === 'Block-Factory')) === null || _userAccess$modules$f === void 0 ? void 0 : _userAccess$modules$f.access;
            if (!isGG && !(blockAccess !== null && blockAccess !== void 0 && blockAccess.readM)) {
              react_toastify__WEBPACK_IMPORTED_MODULE_36__.toast.error("You don't have permission to access Block Sales.");
              navigate('/AdminHome');
            }
          } else if (!isGG) {
            navigate('/AdminHome');
          }

          // Fetch Configs
          var configRes = yield axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/block-config"));
          if (configRes.data && configRes.data.data && Array.isArray(configRes.data.data)) {
            var configArr = configRes.data.data;
            var config = configArr.find(c => c.blockType === "GLOBAL") || configArr[0];
            setConfigs(config);
          }

          // Fetch Sales
          var salesRes = yield axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/block-sales"));
          if (salesRes.data.data) setRecentSales(salesRes.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();
    if (user.data.id) fetchData();
  }, [user, navigate]);
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      date: dayjs__WEBPACK_IMPORTED_MODULE_37___default()().format('YYYY-MM-DD'),
      clientName: "",
      blockType: "",
      quantitySold: 0,
      pricePerUnit: 0,
      totalAmount: 0
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    salesData = _useState6[0],
    setSalesData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    recentSales = _useState8[0],
    setRecentSales = _useState8[1];
  // Unified Date range for sales logs - Start empty as requested
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    fromDate = _useState0[0],
    setFromDate = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    toDate = _useState10[0],
    setToDate = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    editId = _useState12[0],
    setEditId = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isSubmitting = _useState14[0],
    setIsSubmitting = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    searchTerm = _useState16[0],
    setSearchTerm = _useState16[1];
  var filteredSales = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var baseList = recentSales;

    // Apply Date Filter (Robust native Date comparison to prevent crashes)
    if (fromDate && toDate) {
      var fromD = parseDate(fromDate);
      var toD = parseDate(toDate);
      if (fromD.isValid() && toD.isValid()) {
        var fromTime = fromD.startOf('day').toDate().getTime();
        var toTime = toD.endOf('day').toDate().getTime();
        if (fromTime <= toTime) {
          baseList = baseList.filter(row => {
            var rowDate = parseDate(row.date);
            if (!rowDate.isValid()) return false;
            var rowTime = rowDate.toDate().getTime();
            return rowTime >= fromTime && rowTime <= toTime;
          });
        } else {
          baseList = []; // Inverted range
        }
      } else {
        baseList = [];
      }
    } else {
      // If user wants it EMPTY by default when no range is selected:
      baseList = [];
    }
    if (!searchTerm) return baseList;
    var s = searchTerm.toLowerCase();
    return baseList.filter(row => (row.clientName || "").toLowerCase().includes(s) || (row.blockType || "").toLowerCase().includes(s));
  }, [recentSales, searchTerm, fromDate, toDate]);
  var toggleDrawer = () => setSideBar(!sideBar);
  var handleInputChange = (field, value) => {
    var updatedData = _objectSpread(_objectSpread({}, salesData), {}, {
      [field]: value
    });
    if (field === 'quantitySold' || field === 'pricePerUnit') {
      updatedData.totalAmount = parseFloat(updatedData.quantitySold) * parseFloat(updatedData.pricePerUnit);
    }
    setSalesData(updatedData);
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      if (isSubmitting) return;
      setIsSubmitting(true);
      try {
        var record = _objectSpread(_objectSpread({}, salesData), {}, {
          synced: true,
          updateS: true
        });
        var payload = _objectSpread({}, record);
        delete payload._id;
        delete payload.id;
        if (editId) {
          var targetId = salesData._id || editId;
          yield axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/update-block-sales"), _objectSpread({
            id: targetId
          }, payload));
          react_toastify__WEBPACK_IMPORTED_MODULE_36__.toast.success("Sales record updated!");
        } else {
          yield axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/create-block-sales"), payload);
          react_toastify__WEBPACK_IMPORTED_MODULE_36__.toast.success("Sales record saved!");
        }

        // Silent Refresh
        var salesRes = yield axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/block-sales"));
        if (salesRes.data.data) setRecentSales(salesRes.data.data);
        setSalesData(_objectSpread(_objectSpread({}, salesData), {}, {
          // Keep the date and meta
          clientName: "",
          blockType: "",
          quantitySold: 0,
          pricePerUnit: 0,
          totalAmount: 0
        }));
        setEditId(null);
      } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_36__.toast.error("Error saving record");
      } finally {
        setIsSubmitting(false);
      }
    });
    return function handleSave() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleEdit = record => {
    setSalesData(record);
    setEditId(record._id || record.id);
    react_toastify__WEBPACK_IMPORTED_MODULE_36__.toast.info("Editing sales record.");
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* (r) {
      if (window.confirm("Are you sure you want to delete this sales record?")) {
        var serverId = r._id || r.id;
        try {
          if (typeof serverId === 'string' && serverId.length > 10) {
            try {
              yield axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/delete-block-sales"), {
                id: serverId
              });
            } catch (err) {
              console.error("Backend delete failed", err);
            }
          }
          var salesRes = yield axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/block-sales"));
          if (salesRes.data.data) setRecentSales(salesRes.data.data);
          react_toastify__WEBPACK_IMPORTED_MODULE_36__.toast.success("Sales record deleted!");
        } catch (error) {
          react_toastify__WEBPACK_IMPORTED_MODULE_36__.toast.error("Error deleting record.");
        }
      }
    });
    return function handleDelete(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      display: 'flex',
      width: '100%',
      minHeight: '100vh',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    position: "fixed",
    sx: {
      zIndex: theme => theme.zIndex.drawer + 1,
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    onClick: toggleDrawer,
    edge: "start",
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_29__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6",
    noWrap: true,
    component: "div"
  }, "Block Sales Tracking"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainContent, {
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      mt: 2,
      width: '100%',
      px: 0,
      m: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      p: 3,
      borderRadius: 2,
      boxShadow: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6",
    sx: {
      mb: 2
    }
  }, "New Sales Record"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_26__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_27__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_28__.DatePicker, {
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_37___default()(salesData.date),
    onChange: newValue => setSalesData(_objectSpread(_objectSpread({}, salesData), {}, {
      date: newValue ? newValue.format('YYYY-MM-DD') : ""
    })),
    format: "DD/MM/YYYY",
    slotProps: {
      textField: {
        fullWidth: true
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    fullWidth: true,
    label: "Client Name",
    value: salesData.clientName,
    onChange: e => handleInputChange('clientName', e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    fullWidth: true,
    select: true,
    label: "Block Type",
    value: salesData.blockType,
    onChange: e => handleInputChange('blockType', e.target.value)
  }, ["Block 50", "Block 33", "Block 20", "Block 15", "Block 10", "Block 14", "Block 12"].map(b => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    key: b,
    value: b
  }, b)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    fullWidth: true,
    type: "number",
    label: "Quantity Sold",
    value: salesData.quantitySold,
    onChange: e => handleInputChange('quantitySold', e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    fullWidth: true,
    type: "number",
    label: "Price Per Unit ($)",
    value: salesData.pricePerUnit,
    onChange: e => handleInputChange('pricePerUnit', e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    fullWidth: true,
    label: "Total Amount ($)",
    value: salesData.totalAmount,
    InputProps: {
      readOnly: true
    },
    sx: {
      backgroundColor: '#f9f9f9'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    fullWidth: true,
    variant: "contained",
    sx: {
      mt: 3,
      py: 1.5,
      backgroundColor: '#30368a'
    },
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_30__["default"], null),
    onClick: handleSave,
    disabled: isSubmitting
  }, isSubmitting ? "Saving..." : "Save Sale"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      p: 3,
      borderRadius: 2,
      boxShadow: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 2,
      flexWrap: 'wrap',
      gap: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, "Recent Sales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      display: 'flex',
      gap: 2,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    size: "small",
    label: "Search Sales",
    placeholder: "By Client or Block Type...",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    sx: {
      minWidth: 280,
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      display: 'flex',
      gap: 1,
      alignItems: 'center',
      p: 1,
      border: '1px solid #ddd',
      borderRadius: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "caption",
    fontWeight: "bold"
  }, "Period:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_26__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_27__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_28__.DatePicker, {
    label: "From",
    value: fromDate ? dayjs__WEBPACK_IMPORTED_MODULE_37___default()(fromDate) : null,
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_28__.DatePicker, {
    label: "To",
    value: toDate ? dayjs__WEBPACK_IMPORTED_MODULE_37___default()(toDate) : null,
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
  }))))), !fromDate || !toDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    severity: "warning",
    sx: {
      mt: 2,
      bgcolor: '#fffde7',
      border: '1px solid #fff59d'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "No Filter Active:"), " Please select a date range to view sale records.") : filteredSales.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    severity: "info",
    sx: {
      mt: 2
    }
  }, "No sales records found for this period.") : null, fromDate && toDate && filteredSales.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: {
      backgroundColor: '#f5f5f5'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      fontWeight: 'bold'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      fontWeight: 'bold'
    }
  }, "Client"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      fontWeight: 'bold'
    }
  }, "Block"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "center",
    sx: {
      fontWeight: 'bold'
    }
  }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], null, filteredSales.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    key: row.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, row.clientName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, row.blockType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, row.quantitySold), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "right"
  }, (row.totalAmount || 0).toLocaleString(), " $"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "primary",
    size: "small",
    onClick: () => handleEdit(row)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_33__["default"], {
    fontSize: "small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "error",
    size: "small",
    onClick: () => handleDelete(row)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_31__["default"], {
    fontSize: "small"
  }))))))))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockSalesView);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfQmxvY2tGYWN0b3J5X0Jsb2NrU2FsZXNWaWV3X2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyxXOzs7Ozs7Ozs7O0FDWlk7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pELENBQTREO0FBQ0g7QUFDZjtBQUMyQjtBQUN0QjtBQUNyQjtBQUtIO0FBQ3lEO0FBQ2hCO0FBQ0o7QUFDWjtBQUNjO0FBQ2Q7QUFDSTtBQUNBO0FBQ0o7QUFDRjtBQUNJO0FBRVg7QUFDYjtBQUNxQztBQUMvRDJDLG9EQUFZLENBQUNDLHdFQUFpQixDQUFDOztBQUUvQjtBQUNBLElBQU1FLFNBQVMsR0FBSUMsQ0FBQyxJQUFLO0VBQ3JCLElBQUksQ0FBQ0EsQ0FBQyxFQUFFLE9BQU9KLDZDQUFLLENBQUMsSUFBSSxDQUFDO0VBQzFCLElBQUksT0FBT0ksQ0FBQyxLQUFLLFFBQVEsRUFBRTtJQUN2QixJQUFNQyxPQUFPLEdBQUcsQ0FDWixZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osVUFB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LENBQUMsQ0FBQyxFQUFDLElBQWEsQ0FBQyxlQUNoRm5RLDBEQUFBLENBQUNtQixzREFBUztJQUFDK08sS0FBSyxFQUFDO0VBQVEsZ0JBQ3JCbFEsMERBQUEsQ0FBQzZCLHNEQUFVO0lBQUM4SyxLQUFLLEVBQUMsU0FBUztJQUFDOEMsSUFBSSxFQUFDLE9BQU87SUFBQzdDLE9BQU8sRUFBRUEsQ0FBQSxLQUFNdEIsVUFBVSxDQUFDekYsR0FBRztFQUFFLGdCQUFDN0YsMERBQUEsQ0FBQ3VDLGlFQUFRO0lBQUN1TixRQUFRLEVBQUM7RUFBTyxDQUFFLENBQWEsQ0FBQyxlQUNuSDlQLDBEQUFBLENBQUM2QixzREFBVTtJQUFDOEssS0FBSyxFQUFDLE9BQU87SUFBQzhDLElBQUksRUFBQyxPQUFPO0lBQUM3QyxPQUFPLEVBQUVBLENBQUEsS0FBTXBCLFlBQVksQ0FBQzNGLEdBQUc7RUFBRSxnQkFBQzdGLDBEQUFBLENBQUNxQyxtRUFBVTtJQUFDeU4sUUFBUSxFQUFDO0VBQU8sQ0FBRSxDQUFhLENBQzdHLENBQ0wsQ0FDYixDQUNNLENBQ1IsQ0FDSyxDQUVqQixDQUNMLENBQ0osQ0FDTCxDQUNJLENBQ1osQ0FBQztBQUVkO0FBRUEsaUVBQWV0TCxjQUFjLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2F2ZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9CbG9ja0ZhY3RvcnkvQmxvY2tTYWxlc1ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cInVzZSBjbGllbnRcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE3IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjd6bS01IDE2Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM20zLTEwSDVWNWgxMHpcIlxufSksICdTYXZlJyk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cInVzZSBjbGllbnRcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0XCJcbn0pLCAnU2VhcmNoJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2gnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2VsZWN0Q3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgICBDb250YWluZXIsIFR5cG9ncmFwaHksIFBhcGVyLCBHcmlkLCBUZXh0RmllbGQsIEJ1dHRvbiwgQm94LFxyXG4gICAgTWVudUl0ZW0sIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVIZWFkLCBUYWJsZVJvdyxcclxuICAgIENzc0Jhc2VsaW5lLCBBcHBCYXIsIFRvb2xiYXIsIERyYXdlciwgRGl2aWRlciwgTGlzdCwgVGFibGVDb250YWluZXIsIEljb25CdXR0b24sIEFsZXJ0XHJcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgU2F2ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TYXZlJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IGN1c3RvbVBhcnNlRm9ybWF0IGZyb20gJ2RheWpzL3BsdWdpbi9jdXN0b21QYXJzZUZvcm1hdCc7XHJcbmRheWpzLmV4dGVuZChjdXN0b21QYXJzZUZvcm1hdCk7XHJcblxyXG4vLyBHbG9iYWwgaGVscGVyIHRvIHBhcnNlIGRhdGVzIHJvYnVzdGx5IGFjcm9zcyBmb3JtYXRzXHJcbmNvbnN0IHBhcnNlRGF0ZSA9IChkKSA9PiB7XHJcbiAgICBpZiAoIWQpIHJldHVybiBkYXlqcyhudWxsKTtcclxuICAgIGlmICh0eXBlb2YgZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBjb25zdCBmb3JtYXRzID0gW1xyXG4gICAgICAgICAgICAnWVlZWS1NTS1ERCcsXHJcbiAgICAgICAgICAgICdERC9NTS9ZWVlZJyxcclxuICAgICAgICAgICAgJ0QvTS9ZWVlZJyxcclxuICAgICAgICAgICAgJ0RELU1NLVlZWVknLFxyXG4gICAgICAgICAgICAnREQvTU0vWVknLFxyXG4gICAgICAgICAgICAnRC9NL1lZJyxcclxuICAgICAgICAgICAgJ1lZWVktTU0tRERUSEg6bW06c3MuU1NTWidcclxuICAgICAgICBdO1xyXG4gICAgICAgIGxldCBwYXJzZWQgPSBkYXlqcyhkLCBmb3JtYXRzLCB0cnVlKTtcclxuICAgICAgICBpZiAoIXBhcnNlZC5pc1ZhbGlkKCkpIHBhcnNlZCA9IGRheWpzKGQpOyAvLyBGYWxsYmFjayB0byBuYXRpdmVcclxuICAgICAgICByZXR1cm4gcGFyc2VkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRheWpzKGQpO1xyXG59O1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcblxyXG5jb25zdCBNYWluQ29udGVudCA9IHN0eWxlZCgnbWFpbicsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdtYXJnaW4nLCB7XHJcbiAgICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICBtYXJnaW5MZWZ0OiBgLSR7ZHJhd2VyV2lkdGh9cHhgLFxyXG4gICAgICAgIC4uLihvcGVuICYmIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdtYXJnaW4nLCB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0LFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogMCxcclxuICAgICAgICB9KSxcclxuICAgIH0pLFxyXG4pO1xyXG5cclxuZnVuY3Rpb24gQmxvY2tTYWxlc1ZpZXcoKSB7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gICAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbY29uZmlncywgc2V0Q29uZmlnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGZXRjaCBBY2Nlc3NcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjY1JlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dyYW50QWNjZXNzYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyQWNjZXNzID0gYWNjUmVzLmRhdGE/LmRhdGE/LmZpbmQocm93ID0+IHJvdy51c2VySUQgPT09IHVzZXIuZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0dHID0gdXNlci5kYXRhLnVzZXJOYW1lID09PSAnR0cnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJBY2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja0FjY2VzcyA9IHVzZXJBY2Nlc3MubW9kdWxlcy5maW5kKG0gPT4gbS5tb2R1bGVOYW1lID09PSAnQmxvY2stRmFjdG9yeScpPy5hY2Nlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0dHICYmICFibG9ja0FjY2Vzcz8ucmVhZE0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyBCbG9jayBTYWxlcy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKCcvQWRtaW5Ib21lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghaXNHRykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKCcvQWRtaW5Ib21lJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRmV0Y2ggQ29uZmlnc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlnUmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vYmxvY2stY29uZmlnYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnUmVzLmRhdGEgJiYgY29uZmlnUmVzLmRhdGEuZGF0YSAmJiBBcnJheS5pc0FycmF5KGNvbmZpZ1Jlcy5kYXRhLmRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlnQXJyID0gY29uZmlnUmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSBjb25maWdBcnIuZmluZChjID0+IGMuYmxvY2tUeXBlID09PSBcIkdMT0JBTFwiKSB8fCBjb25maWdBcnJbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlncyhjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZldGNoIFNhbGVzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzYWxlc1JlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2Jsb2NrLXNhbGVzYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2FsZXNSZXMuZGF0YS5kYXRhKSBzZXRSZWNlbnRTYWxlcyhzYWxlc1Jlcy5kYXRhLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHVzZXIuZGF0YS5pZCkgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbdXNlciwgbmF2aWdhdGVdKTtcclxuICAgIGNvbnN0IFtzYWxlc0RhdGEsIHNldFNhbGVzRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZGF0ZTogZGF5anMoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcclxuICAgICAgICBjbGllbnROYW1lOiBcIlwiLFxyXG4gICAgICAgIGJsb2NrVHlwZTogXCJcIixcclxuICAgICAgICBxdWFudGl0eVNvbGQ6IDAsXHJcbiAgICAgICAgcHJpY2VQZXJVbml0OiAwLFxyXG4gICAgICAgIHRvdGFsQW1vdW50OiAwXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtyZWNlbnRTYWxlcywgc2V0UmVjZW50U2FsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy8gVW5pZmllZCBEYXRlIHJhbmdlIGZvciBzYWxlcyBsb2dzIC0gU3RhcnQgZW1wdHkgYXMgcmVxdWVzdGVkXHJcbiAgICBjb25zdCBbZnJvbURhdGUsIHNldEZyb21EYXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3RvRGF0ZSwgc2V0VG9EYXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtlZGl0SWQsIHNldEVkaXRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBmaWx0ZXJlZFNhbGVzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgbGV0IGJhc2VMaXN0ID0gcmVjZW50U2FsZXM7XHJcblxyXG4gICAgICAgIC8vIEFwcGx5IERhdGUgRmlsdGVyIChSb2J1c3QgbmF0aXZlIERhdGUgY29tcGFyaXNvbiB0byBwcmV2ZW50IGNyYXNoZXMpXHJcbiAgICAgICAgaWYgKGZyb21EYXRlICYmIHRvRGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmcm9tRCA9IHBhcnNlRGF0ZShmcm9tRGF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvRCA9IHBhcnNlRGF0ZSh0b0RhdGUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGZyb21ELmlzVmFsaWQoKSAmJiB0b0QuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmcm9tVGltZSA9IGZyb21ELnN0YXJ0T2YoJ2RheScpLnRvRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvVGltZSA9IHRvRC5lbmRPZignZGF5JykudG9EYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoZnJvbVRpbWUgPD0gdG9UaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUxpc3QgPSBiYXNlTGlzdC5maWx0ZXIocm93ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93RGF0ZSA9IHBhcnNlRGF0ZShyb3cuZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcm93RGF0ZS5pc1ZhbGlkKCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93VGltZSA9IHJvd0RhdGUudG9EYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm93VGltZSA+PSBmcm9tVGltZSAmJiByb3dUaW1lIDw9IHRvVGltZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUxpc3QgPSBbXTsgLy8gSW52ZXJ0ZWQgcmFuZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJhc2VMaXN0ID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJZiB1c2VyIHdhbnRzIGl0IEVNUFRZIGJ5IGRlZmF1bHQgd2hlbiBubyByYW5nZSBpcyBzZWxlY3RlZDpcclxuICAgICAgICAgICAgYmFzZUxpc3QgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2VhcmNoVGVybSkgcmV0dXJuIGJhc2VMaXN0O1xyXG4gICAgICAgIGNvbnN0IHMgPSBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIGJhc2VMaXN0LmZpbHRlcihyb3cgPT5cclxuICAgICAgICAgICAgKHJvdy5jbGllbnROYW1lIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocykgfHxcclxuICAgICAgICAgICAgKHJvdy5ibG9ja1R5cGUgfHwgXCJcIikudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzKVxyXG4gICAgICAgICk7XHJcbiAgICB9LCBbcmVjZW50U2FsZXMsIHNlYXJjaFRlcm0sIGZyb21EYXRlLCB0b0RhdGVdKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSB7IC4uLnNhbGVzRGF0YSwgW2ZpZWxkXTogdmFsdWUgfTtcclxuICAgICAgICBpZiAoZmllbGQgPT09ICdxdWFudGl0eVNvbGQnIHx8IGZpZWxkID09PSAncHJpY2VQZXJVbml0Jykge1xyXG4gICAgICAgICAgICB1cGRhdGVkRGF0YS50b3RhbEFtb3VudCA9IHBhcnNlRmxvYXQodXBkYXRlZERhdGEucXVhbnRpdHlTb2xkKSAqIHBhcnNlRmxvYXQodXBkYXRlZERhdGEucHJpY2VQZXJVbml0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2FsZXNEYXRhKHVwZGF0ZWREYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2F2ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoaXNTdWJtaXR0aW5nKSByZXR1cm47XHJcbiAgICAgICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHsgLi4uc2FsZXNEYXRhLCBzeW5jZWQ6IHRydWUsIHVwZGF0ZVM6IHRydWUgfTtcclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHsgLi4ucmVjb3JkIH07XHJcbiAgICAgICAgICAgIGRlbGV0ZSBwYXlsb2FkLl9pZDtcclxuICAgICAgICAgICAgZGVsZXRlIHBheWxvYWQuaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWRpdElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHNhbGVzRGF0YS5faWQgfHwgZWRpdElkO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1ibG9jay1zYWxlc2AsIHsgaWQ6IHRhcmdldElkLCAuLi5wYXlsb2FkIH0pO1xyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlNhbGVzIHJlY29yZCB1cGRhdGVkIVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtYmxvY2stc2FsZXNgLCBwYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJTYWxlcyByZWNvcmQgc2F2ZWQhXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTaWxlbnQgUmVmcmVzaFxyXG4gICAgICAgICAgICBjb25zdCBzYWxlc1JlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2Jsb2NrLXNhbGVzYCk7XHJcbiAgICAgICAgICAgIGlmIChzYWxlc1Jlcy5kYXRhLmRhdGEpIHNldFJlY2VudFNhbGVzKHNhbGVzUmVzLmRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBzZXRTYWxlc0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgLi4uc2FsZXNEYXRhLCAvLyBLZWVwIHRoZSBkYXRlIGFuZCBtZXRhXHJcbiAgICAgICAgICAgICAgICBjbGllbnROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tUeXBlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHlTb2xkOiAwLFxyXG4gICAgICAgICAgICAgICAgcHJpY2VQZXJVbml0OiAwLFxyXG4gICAgICAgICAgICAgICAgdG90YWxBbW91bnQ6IDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldEVkaXRJZChudWxsKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihcIkVycm9yIHNhdmluZyByZWNvcmRcIik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUVkaXQgPSAocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgc2V0U2FsZXNEYXRhKHJlY29yZCk7XHJcbiAgICAgICAgc2V0RWRpdElkKHJlY29yZC5faWQgfHwgcmVjb3JkLmlkKTtcclxuICAgICAgICB0b2FzdC5pbmZvKFwiRWRpdGluZyBzYWxlcyByZWNvcmQuXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAocikgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzYWxlcyByZWNvcmQ/XCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcnZlcklkID0gci5faWQgfHwgci5pZDtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VydmVySWQgPT09ICdzdHJpbmcnICYmIHNlcnZlcklkLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2RlbGV0ZS1ibG9jay1zYWxlc2AsIHsgaWQ6IHNlcnZlcklkIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQmFja2VuZCBkZWxldGUgZmFpbGVkXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2FsZXNSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ibG9jay1zYWxlc2ApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNhbGVzUmVzLmRhdGEuZGF0YSkgc2V0UmVjZW50U2FsZXMoc2FsZXNSZXMuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJTYWxlcyByZWNvcmQgZGVsZXRlZCFcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihcIkVycm9yIGRlbGV0aW5nIHJlY29yZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIHdpZHRoOiAnMTAwJScsIG1pbkhlaWdodDogJzEwMHZoJywgb3ZlcmZsb3dYOiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIHN4PXt7IHpJbmRleDogKHRoZW1lKSA9PiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSwgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9IGVkZ2U9XCJzdGFydFwiIHN4PXt7IG1yOiAyIH19PjxNZW51SWNvbiAvPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBub1dyYXAgY29tcG9uZW50PVwiZGl2XCI+QmxvY2sgU2FsZXMgVHJhY2tpbmc8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicGVyc2lzdGVudFwiXHJcbiAgICAgICAgICAgICAgICBhbmNob3I9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgIG9wZW49e3NpZGVCYXJ9XHJcbiAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogZHJhd2VyV2lkdGgsIGZsZXhTaHJpbms6IDAsICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7IHdpZHRoOiBkcmF3ZXJXaWR0aCwgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcgfSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciAvPjxCb3ggc3g9e3sgb3ZlcmZsb3c6ICdhdXRvJyB9fT48TGlzdD48U2lkZWJhckRhc2ggLz48L0xpc3Q+PC9Cb3g+XHJcbiAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICA8TWFpbkNvbnRlbnQgb3Blbj17c2lkZUJhcn0+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgICAgICAgPEJveCBzeD17eyBtdDogMiwgd2lkdGg6ICcxMDAlJywgcHg6IDAsIG06IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgc3g9e3sgcDogMywgYm9yZGVyUmFkaXVzOiAyLCBib3hTaGFkb3c6IDMgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3sgbWI6IDIgfX0+TmV3IFNhbGVzIFJlY29yZDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKHNhbGVzRGF0YS5kYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXdWYWx1ZSkgPT4gc2V0U2FsZXNEYXRhKHsgLi4uc2FsZXNEYXRhLCBkYXRlOiBuZXdWYWx1ZSA/IG5ld1ZhbHVlLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogXCJcIiB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiREQvTU0vWVlZWVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RQcm9wcz17eyB0ZXh0RmllbGQ6IHsgZnVsbFdpZHRoOiB0cnVlIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggbGFiZWw9XCJDbGllbnQgTmFtZVwiIHZhbHVlPXtzYWxlc0RhdGEuY2xpZW50TmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZSgnY2xpZW50TmFtZScsIGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggc2VsZWN0IGxhYmVsPVwiQmxvY2sgVHlwZVwiIHZhbHVlPXtzYWxlc0RhdGEuYmxvY2tUeXBlfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKCdibG9ja1R5cGUnLCBlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbXCJCbG9jayA1MFwiLCBcIkJsb2NrIDMzXCIsIFwiQmxvY2sgMjBcIiwgXCJCbG9jayAxNVwiLCBcIkJsb2NrIDEwXCIsIFwiQmxvY2sgMTRcIiwgXCJCbG9jayAxMlwiXS5tYXAoYiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2J9IHZhbHVlPXtifT57Yn08L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHR5cGU9XCJudW1iZXJcIiBsYWJlbD1cIlF1YW50aXR5IFNvbGRcIiB2YWx1ZT17c2FsZXNEYXRhLnF1YW50aXR5U29sZH0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZSgncXVhbnRpdHlTb2xkJywgZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCB0eXBlPVwibnVtYmVyXCIgbGFiZWw9XCJQcmljZSBQZXIgVW5pdCAoJClcIiB2YWx1ZT17c2FsZXNEYXRhLnByaWNlUGVyVW5pdH0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZSgncHJpY2VQZXJVbml0JywgZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBsYWJlbD1cIlRvdGFsIEFtb3VudCAoJClcIiB2YWx1ZT17c2FsZXNEYXRhLnRvdGFsQW1vdW50fSBJbnB1dFByb3BzPXt7IHJlYWRPbmx5OiB0cnVlIH19IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNmOWY5ZjknIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG10OiAzLCBweTogMS41LCBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEljb249ezxTYXZlSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1N1Ym1pdHRpbmcgPyBcIlNhdmluZy4uLlwiIDogXCJTYXZlIFNhbGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgc3g9e3sgcDogMywgYm9yZGVyUmFkaXVzOiAyLCBib3hTaGFkb3c6IDMgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYjogMiwgZmxleFdyYXA6ICd3cmFwJywgZ2FwOiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5SZWNlbnQgU2FsZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDIsIGZsZXhXcmFwOiAnd3JhcCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2ggU2FsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnkgQ2xpZW50IG9yIEJsb2NrIFR5cGUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbWluV2lkdGg6IDI4MCwgYmdjb2xvcjogJyNmMWYzZjQnLCBib3JkZXJSYWRpdXM6IDEgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBzeD17eyBjb2xvcjogJ2FjdGlvbi5hY3RpdmUnLCBtcjogMSwgZm9udFNpemU6IDIwIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcDogMSwgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLCBib3JkZXJSYWRpdXM6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBmb250V2VpZ2h0PVwiYm9sZFwiPlBlcmlvZDo8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGcm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmcm9tRGF0ZSA/IGRheWpzKGZyb21EYXRlKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5ld1ZhbHVlKSA9PiBzZXRGcm9tRGF0ZShuZXdWYWx1ZSAmJiBuZXdWYWx1ZS5pc1ZhbGlkKCkgPyBuZXdWYWx1ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiREQvTU0vWVlZWVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90UHJvcHM9e3sgdGV4dEZpZWxkOiB7IHNpemU6ICdzbWFsbCcsIHN4OiB7IHdpZHRoOiAxNDAgfSB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b0RhdGUgPyBkYXlqcyh0b0RhdGUpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV3VmFsdWUpID0+IHNldFRvRGF0ZShuZXdWYWx1ZSAmJiBuZXdWYWx1ZS5pc1ZhbGlkKCkgPyBuZXdWYWx1ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiREQvTU0vWVlZWVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90UHJvcHM9e3sgdGV4dEZpZWxkOiB7IHNpemU6ICdzbWFsbCcsIHN4OiB7IHdpZHRoOiAxNDAgfSB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCFmcm9tRGF0ZSB8fCAhdG9EYXRlKSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwid2FybmluZ1wiIHN4PXt7IG10OiAyLCBiZ2NvbG9yOiAnI2ZmZmRlNycsIGJvcmRlcjogJzFweCBzb2xpZCAjZmZmNTlkJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPk5vIEZpbHRlciBBY3RpdmU6PC9iPiBQbGVhc2Ugc2VsZWN0IGEgZGF0ZSByYW5nZSB0byB2aWV3IHNhbGUgcmVjb3Jkcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogZmlsdGVyZWRTYWxlcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiBzeD17eyBtdDogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIHNhbGVzIHJlY29yZHMgZm91bmQgZm9yIHRoaXMgcGVyaW9kLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmcm9tRGF0ZSAmJiB0b0RhdGUgJiYgZmlsdGVyZWRTYWxlcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkRhdGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkNsaWVudDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+QmxvY2s8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5RdHk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5BbW91bnQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+QWN0aW9uczwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZFNhbGVzLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2RheWpzKHJvdy5kYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuY2xpZW50TmFtZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuYmxvY2tUeXBlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cucXVhbnRpdHlTb2xkfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPnsocm93LnRvdGFsQW1vdW50IHx8IDApLnRvTG9jYWxlU3RyaW5nKCl9ICQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXQocm93KX0+PEVkaXRJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJlcnJvclwiIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShyb3cpfT48RGVsZXRlSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz48L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9NYWluQ29udGVudD5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2NrU2FsZXNWaWV3O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJTaWRlYmFyRGFzaCIsInVzZVNlbGVjdG9yIiwic2VsZWN0Q3VycmVudFVzZXIiLCJ1c2VOYXZpZ2F0ZSIsImF4aW9zIiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsIlBhcGVyIiwiR3JpZCIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIkJveCIsIk1lbnVJdGVtIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIkNzc0Jhc2VsaW5lIiwiQXBwQmFyIiwiVG9vbGJhciIsIkRyYXdlciIsIkRpdmlkZXIiLCJMaXN0IiwiVGFibGVDb250YWluZXIiLCJJY29uQnV0dG9uIiwiQWxlcnQiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIkRhdGVQaWNrZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIlNhdmVJY29uIiwiRGVsZXRlSWNvbiIsIlNlYXJjaEljb24iLCJFZGl0SWNvbiIsInN0eWxlZCIsIkVORFBPSU5UX1VSTCIsInRvYXN0IiwiZGF5anMiLCJjdXN0b21QYXJzZUZvcm1hdCIsImV4dGVuZCIsInBhcnNlRGF0ZSIsImQiLCJmb3JtYXRzIiwicGFyc2VkIiwiaXNWYWxpZCIsImRyYXdlcldpZHRoIiwiTWFpbkNvbnRlbnQiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmIiwidGhlbWUiLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsImZsZXhHcm93IiwicGFkZGluZyIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImNvbmNhdCIsImVhc2VPdXQiLCJlbnRlcmluZ1NjcmVlbiIsIkJsb2NrU2FsZXNWaWV3IiwibmF2aWdhdGUiLCJ1c2VyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImNvbmZpZ3MiLCJzZXRDb25maWdzIiwiZmV0Y2hEYXRhIiwiX3JlZjIiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9hY2NSZXMkZGF0YSIsImFjY1JlcyIsImdldCIsInVzZXJBY2Nlc3MiLCJkYXRhIiwiZmluZCIsInJvdyIsInVzZXJJRCIsImlkIiwiaXNHRyIsInVzZXJOYW1lIiwiX3VzZXJBY2Nlc3MkbW9kdWxlcyRmIiwiYmxvY2tBY2Nlc3MiLCJtb2R1bGVzIiwibSIsIm1vZHVsZU5hbWUiLCJhY2Nlc3MiLCJyZWFkTSIsImVycm9yIiwiY29uZmlnUmVzIiwiQXJyYXkiLCJpc0FycmF5IiwiY29uZmlnQXJyIiwiY29uZmlnIiwiYyIsImJsb2NrVHlwZSIsInNhbGVzUmVzIiwic2V0UmVjZW50U2FsZXMiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfdXNlU3RhdGU1IiwiZGF0ZSIsImZvcm1hdCIsImNsaWVudE5hbWUiLCJxdWFudGl0eVNvbGQiLCJwcmljZVBlclVuaXQiLCJ0b3RhbEFtb3VudCIsIl91c2VTdGF0ZTYiLCJzYWxlc0RhdGEiLCJzZXRTYWxlc0RhdGEiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInJlY2VudFNhbGVzIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJmcm9tRGF0ZSIsInNldEZyb21EYXRlIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwidG9EYXRlIiwic2V0VG9EYXRlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImVkaXRJZCIsInNldEVkaXRJZCIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2Iiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJmaWx0ZXJlZFNhbGVzIiwiYmFzZUxpc3QiLCJmcm9tRCIsInRvRCIsImZyb21UaW1lIiwic3RhcnRPZiIsImdldFRpbWUiLCJ0b1RpbWUiLCJlbmRPZiIsImZpbHRlciIsInJvd0RhdGUiLCJyb3dUaW1lIiwicyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0b2dnbGVEcmF3ZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImZpZWxkIiwidmFsdWUiLCJ1cGRhdGVkRGF0YSIsInBhcnNlRmxvYXQiLCJoYW5kbGVTYXZlIiwiX3JlZjMiLCJyZWNvcmQiLCJzeW5jZWQiLCJ1cGRhdGVTIiwicGF5bG9hZCIsIl9pZCIsInRhcmdldElkIiwicG9zdCIsInN1Y2Nlc3MiLCJoYW5kbGVFZGl0IiwiaW5mbyIsImhhbmRsZURlbGV0ZSIsIl9yZWY0IiwiciIsIndpbmRvdyIsImNvbmZpcm0iLCJzZXJ2ZXJJZCIsImxlbmd0aCIsImVyciIsIl94IiwiY3JlYXRlRWxlbWVudCIsInN4IiwiZGlzcGxheSIsIndpZHRoIiwibWluSGVpZ2h0Iiwib3ZlcmZsb3dYIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJkcmF3ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm9uQ2xpY2siLCJlZGdlIiwibXIiLCJ2YXJpYW50Iiwibm9XcmFwIiwiY29tcG9uZW50IiwiYW5jaG9yIiwiZmxleFNocmluayIsImJveFNpemluZyIsIm92ZXJmbG93IiwibXQiLCJweCIsImNvbnRhaW5lciIsInNwYWNpbmciLCJpdGVtIiwieHMiLCJwIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwibWIiLCJzbSIsImRhdGVBZGFwdGVyIiwibGFiZWwiLCJvbkNoYW5nZSIsIm5ld1ZhbHVlIiwic2xvdFByb3BzIiwidGV4dEZpZWxkIiwiZnVsbFdpZHRoIiwiZSIsInRhcmdldCIsInNlbGVjdCIsIm1hcCIsImIiLCJrZXkiLCJ0eXBlIiwiSW5wdXRQcm9wcyIsInJlYWRPbmx5IiwicHkiLCJzdGFydEljb24iLCJkaXNhYmxlZCIsIm1kIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleFdyYXAiLCJnYXAiLCJzaXplIiwicGxhY2Vob2xkZXIiLCJtaW5XaWR0aCIsImJnY29sb3IiLCJzdGFydEFkb3JubWVudCIsImZvbnRTaXplIiwiYm9yZGVyIiwiZm9udFdlaWdodCIsInNldmVyaXR5IiwiYWxpZ24iLCJ0b0xvY2FsZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=