"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[5394,7171],{

/***/ 92659
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
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
}), 'ArrowBack');

/***/ },

/***/ 9483
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
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
}), 'KeyboardArrowDown');

/***/ },

/***/ 67626
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20561);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2zm-1 7h5.5L14 6.5z"
}), 'FileCopy'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 7171
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71510);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27558);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17532);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11848);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84976);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47767);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17809);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(58331);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(32005);
var _excluded = ["className"];
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;








var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
function EstimateInformation(_ref3) {
  var onId = _ref3.onId;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_16__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_16__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_17__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_2__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_17__/* .setUser */ .gV)({
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
        return _ref4.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    estimate = _useState2[0],
    setEstimate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    estimate2 = _useState4[0],
    SetEstimate2 = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    hidden = _useState6[0],
    setHidden = _useState6[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_2__/* .ENDPOINT_URL */ .m, "/estimation");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchEstimate = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(apiUrl);
          setEstimate(res.data.data.sort((a, b) => b.estimateNumber - a.estimateNumber));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchEstimate() {
        return _ref5.apply(this, arguments);
      };
    }();
    fetchEstimate();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_2__/* .ENDPOINT_URL */ .m, "/hidden"));
          setHidden(res.data.data);
          localStorage.removeItem('Hidden');
          // await Promise.all(res.data.data.map(async (item) => {
          //   await db.hiddenSchema.put({ ...item, synced: true, updateS: true })
          // }))
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref6.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    show = _useState8[0],
    setShow = _useState8[1];
  var handleShow = e => {
    setShow(e);
  };
  var filteredRows = estimate.filter(row => !hidden.some(row2 => row2.idRow === row._id));
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    value = _useState0[0],
    setValue = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    value2 = _useState10[0],
    setValue2 = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var selectedIndex = estimate.findIndex(row => row._id === onId);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [estimate, onId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var selectedIndex = filteredRows.findIndex(row => row._id === onId);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [filteredRows, onId]);
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    search = _useState12[0],
    setSearch = _useState12[1];
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
  };
  var matchEstimateSearch = (row, query) => {
    var _row$customerName, _row$customerName2;
    if (!query) return true;
    var s = query.toLowerCase().trim();
    var estName = String(row.estimateName || '').toLowerCase();
    var estSub = String(row.estimateSubject || '').toLowerCase();
    var estDef = String(row.estimateDefect || '').toLowerCase();
    var estNum = String(row.estimateNumber || '').toLowerCase();
    var custName = String(((_row$customerName = row.customerName) === null || _row$customerName === void 0 ? void 0 : _row$customerName.customerName) || ((_row$customerName2 = row.customerName) === null || _row$customerName2 === void 0 ? void 0 : _row$customerName2.companyName) || (typeof row.customerName === 'string' ? row.customerName : '')).toLowerCase();
    var matchesItem = Array.isArray(row.items) && row.items.some(Item => {
      var _Item$itemName, _Item$itemName2, _Item$itemDescription;
      if (!Item) return false;
      var itName = typeof Item.itemName === 'string' ? Item.itemName : ((_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName.itemName) || ((_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2.itemDescription) || '';
      var itDesc = typeof Item.itemDescription === 'string' ? Item.itemDescription : ((_Item$itemDescription = Item.itemDescription) === null || _Item$itemDescription === void 0 ? void 0 : _Item$itemDescription.itemDescription) || '';
      return typeof itName === 'string' && itName.toLowerCase().includes(s) || typeof itDesc === 'string' && itDesc.toLowerCase().includes(s);
    });
    return estName.includes(s) || estSub.includes(s) || estDef.includes(s) || estNum.includes(s) || custName.includes(s) || matchesItem;
  };
  var newArray = search !== '' ? estimate.filter(row => matchEstimateSearch(row, search)) : estimate;
  var newArray2 = search !== '' ? filteredRows.filter(row => matchEstimateSearch(row, search)) : filteredRows;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, show === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      padding: '5px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    variant: "h6"
  }, "All Quotations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow(2)
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, estimate === null || estimate === void 0 ? void 0 : estimate.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    key: index,
    label: row.customerName.customerName + ' | ' + (row.estimateName ? row.estimateName.replace(/EST\s*-?/i, 'QUO-') : 'QUO-' + String(row.estimateNumber).padStart(6, '0')),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__/* .Link */ .N_,
    to: "/EstimateViewAdminAll/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: 'calc(100vh - 125px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    key: index,
    label: row.customerName.customerName + ' | ' + (row.estimateName ? row.estimateName.replace(/EST\s*-?/i, 'QUO-') : 'QUO-' + String(row.estimateNumber).padStart(6, '0')),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__/* .Link */ .N_,
    to: "/EstimateViewAdminAll/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : '') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, show === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      padding: '5px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    variant: "h6"
  }, "All Quotations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow(2)
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, filteredRows === null || filteredRows === void 0 ? void 0 : filteredRows.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    key: index,
    label: row.customerName.customerName + ' | ' + (row.estimateName ? row.estimateName.replace(/EST\s*-?/i, 'QUO-') : 'QUO-' + String(row.estimateNumber).padStart(6, '0')),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__/* .Link */ .N_,
    to: "/EstimateViewAdminAll/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: 'calc(100vh - 125px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray2 === null || newArray2 === void 0 ? void 0 : newArray2.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    key: index,
    label: row.customerName.customerName + ' | ' + (row.estimateName ? row.estimateName.replace(/EST\s*-?/i, 'QUO-') : 'QUO-' + String(row.estimateNumber).padStart(6, '0')),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__/* .Link */ .N_,
    to: "/EstimateViewAdminAll/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : ''));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EstimateInformation);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 85394
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _hooks_useLayoutConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99076);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4640);
/* harmony import */ var _component_PrintHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77438);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68525);
/* harmony import */ var _InvoiceView_AdminView_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78448);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55746);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71543);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(94405);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20973);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(11848);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(28597);
/* harmony import */ var _mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8659);
/* harmony import */ var _EstimateInformation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7171);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(84976);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(47767);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(99380);
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(46986);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(71510);
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(41845);
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(19873);
/* harmony import */ var _mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(67415);
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(72761);
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_img_images_png__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(58331);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(14519);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(97834);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(8451);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(57240);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(40301);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(65821);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(82299);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(39781);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(92659);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(9483);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(3100);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(95236);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(67626);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(24974);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(4213);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(85781);
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
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






















































var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var PrintTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A.tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref7 => {
  var theme = _ref7.theme,
    open = _ref7.open;
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Ay, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref8 => {
  var theme = _ref8.theme,
    open = _ref8.open;
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
function EstimateViewAdminAll() {
  var _estimate$filter;
  var _useLayoutConfig = (0,_hooks_useLayoutConfig__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(),
    config = _useLayoutConfig.config;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__/* .useParams */ .g)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_44__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_44__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__/* .setUser */ .gV)({
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
        return _ref9.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__/* .cachedGet */ .Fe)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var estimationInfoU = grantAccess.filter(row => row.moduleName === "Estimate" && row.access.editM === true);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    estimate = _useState4[0],
    setEstimate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loadingData = _useState6[0],
    setLoadingData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    item = _useState8[0],
    SetItems = _useState8[1];
  // Store all invoices so the third useEffect reuses them without a second API call
  var allInvoicesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/estimation");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          // Run both fetches IN PARALLEL instead of sequentially
          var _yield$Promise$all = yield Promise.all([(0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__/* .cachedGet */ .Fe)(apiUrl), (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__/* .cachedGet */ .Fe)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/item"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2),
            res = _yield$Promise$all2[0],
            resItem = _yield$Promise$all2[1];
          setEstimate(res.data.data);
          SetItems(resItem.data.data);
          setLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchData() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    invoice = _useState0[0],
    setInvoice = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    invoice2 = _useState10[0],
    setInvoice2 = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    purchase = _useState12[0],
    setPurchase = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    maintenance = _useState14[0],
    setMaintenance = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    customerName1 = _useState16[0],
    setCustomerName1 = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    estimateNumber = _useState18[0],
    setEstimateNumber1 = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    items = _useState20[0],
    setItems = _useState20[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var _invoiceResponse$data, _purchaseResponse$dat, _maintenanceResponse$;
          // All 3 requests now run IN PARALLEL (invoice, purchase, and this specific estimation)
          var _yield$Promise$all3 = yield Promise.all([(0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__/* .cachedGet */ .Fe)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/invoice?summary=true")), (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__/* .cachedGet */ .Fe)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/purchase")), (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__/* .cachedGet */ .Fe)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/maintenance")), axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/get-estimation/").concat(id)) // always fresh — no cache for specific record
            ]),
            _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 4),
            invoiceResponse = _yield$Promise$all4[0],
            purchaseResponse = _yield$Promise$all4[1],
            maintenanceResponse = _yield$Promise$all4[2],
            resEst = _yield$Promise$all4[3];
          // Store all invoices in ref so the next useEffect can reuse them without fetching again
          allInvoicesRef.current = ((_invoiceResponse$data = invoiceResponse.data) === null || _invoiceResponse$data === void 0 ? void 0 : _invoiceResponse$data.data) || [];
          setCustomerName1(resEst.data.data.customerName.customerName.replace(/\s+/g, '_').replace(/\./g, ''));
          setEstimateNumber1(resEst.data.data.estimateNumber);
          setItems(resEst.data.data.items);
          var estRef = resEst.data.data.ReferenceName;
          var validEstRef = estRef && typeof estRef === 'string' && estRef.trim() !== '';
          setInvoice(allInvoicesRef.current.filter(row => row.ReferenceName === id || validEstRef && row.ReferenceName === estRef));
          setPurchase((_purchaseResponse$dat = purchaseResponse.data) === null || _purchaseResponse$dat === void 0 || (_purchaseResponse$dat = _purchaseResponse$dat.data) === null || _purchaseResponse$dat === void 0 ? void 0 : _purchaseResponse$dat.filter(row => row.ReferenceName === id || validEstRef && row.ReferenceName === estRef));
          setMaintenance((_maintenanceResponse$ = maintenanceResponse.data) === null || _maintenanceResponse$ === void 0 || (_maintenanceResponse$ = _maintenanceResponse$.data) === null || _maintenanceResponse$ === void 0 ? void 0 : _maintenanceResponse$.filter(row => row.ReferenceName === id || validEstRef && row._id === estRef));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchData() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchData();
  }, [id]);
  var showDiscount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return items.some(item => item.itemDiscount > 0);
  }, [items]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Reuse already-fetched invoice data from allInvoicesRef — NO second API call needed
    if (purchase.length > 0 && allInvoicesRef.current.length > 0) {
      var filteredInvoice = allInvoicesRef.current.filter(row => purchase.find(Item => row._id === Item.ReferenceName2));
      setInvoice2(filteredInvoice);
    }
  }, [purchase]);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    anchorEl = _React$useState2[0],
    setAnchorEl = _React$useState2[1];
  var open = Boolean(anchorEl);
  var handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  var handleCloseMenu = () => {
    setAnchorEl(null);
  };
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_43__.useReactToPrint)({
    content: () => componentRef.current,
    documentTitle: 'Q-00' + estimateNumber + ' For ' + customerName1,
    onBeforeGetContent: () => {
      var PAGE_HEIGHT = 1045;
      var printElement = componentRef.current;
      if (printElement) {
        printElement.classList.add("temp-class-for-height");
        var height = printElement.clientHeight;
        var numberOfPage = Math.ceil(height / PAGE_HEIGHT);
        if (numberOfPage > 1) {
          var _printElement$getElem, _printElement$getElem2;
          var heightWithSingleHeader = numberOfPage * PAGE_HEIGHT;
          var requiredHeight = heightWithSingleHeader;
          var headerHeight = (_printElement$getElem = printElement.getElementsByTagName("thead")) === null || _printElement$getElem === void 0 || (_printElement$getElem = _printElement$getElem[0]) === null || _printElement$getElem === void 0 ? void 0 : _printElement$getElem.clientHeight;
          var footerHeight = (_printElement$getElem2 = printElement.getElementsByTagName("tfoot")) === null || _printElement$getElem2 === void 0 || (_printElement$getElem2 = _printElement$getElem2[0]) === null || _printElement$getElem2 === void 0 ? void 0 : _printElement$getElem2.clientHeight;
          requiredHeight -= (numberOfPage - 1) * (headerHeight + footerHeight);
          printElement.style.height = "".concat(requiredHeight, "px");
        }
        printElement.classList.remove("temp-class-for-height");
      }
    },
    onAfterPrint: () => {
      var printElement = componentRef.current;
      if (printElement) {
        printElement.style.height = "auto";
      }
    }
  });
  var handleOpenPrint = () => {
    handlePrint();
    setAnchorEl(null);
  };
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState22 = _slicedToArray(_useState21, 2),
    show1 = _useState22[0],
    setShow1 = _useState22[1];
  var handleShow1 = e => {
    setShow1(e);
    setAnchorEl(null);
  };
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    reason = _useState24[0],
    setReason = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    Comments1 = _useState26[0],
    setComments = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    notification = _useState28[0],
    setNotification = _useState28[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchComment = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var _resComment$data, _resNotification$data;
          // Fetch comment and notification IN PARALLEL instead of sequentially
          var _yield$Promise$all5 = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/comment")), axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/notification"))]),
            _yield$Promise$all6 = _slicedToArray(_yield$Promise$all5, 2),
            resComment = _yield$Promise$all6[0],
            resNotification = _yield$Promise$all6[1];
          setComments((_resComment$data = resComment.data) === null || _resComment$data === void 0 || (_resComment$data = _resComment$data.data) === null || _resComment$data === void 0 ? void 0 : _resComment$data.filter(row => row.CommentInfo.idInfo === id).reverse());
          setNotification((_resNotification$data = resNotification.data) === null || _resNotification$data === void 0 || (_resNotification$data = _resNotification$data.data) === null || _resNotification$data === void 0 ? void 0 : _resNotification$data.filter(row => row.idInfo === id));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchComment() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchComment();
  }, [id]);
  var CommentInfo = {
    idInfo: id,
    person: user.data.userName,
    reason
  };
  {/** Loading Start */}
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    loading = _useState30[0],
    setLoading = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    loadingOpenModal = _useState32[0],
    setLoadingOpenModal = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    ErrorOpenModal = _useState34[0],
    setErrorOpenModal = _useState34[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    setLoadingOpenModal(false);
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  {/** Loading End */}
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_42___default()(Date.now());
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo,
        dateComment
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/create-comment/"), data);
        if (res) {
          setReason("");
          handleOpen();
          var newData = res.data.data;
          setComments([newData, ...Comments1]);
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmitEdit(_x) {
      return _ref12.apply(this, arguments);
    };
  }();
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__/* .logOut */ .je)());
    navigate('/');
  };
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState36 = _slicedToArray(_useState35, 2),
    showRef = _useState36[0],
    setShowRef = _useState36[1];
  var handleShowRef = e => {
    setShowRef(e);
    setAnchorEl(null);
  };
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var data0 = estimate.filter(row => row._id === id).map(row => ({
    number: 'Q-' + String(row.estimateNumber).padStart(6, '0'),
    invoiceDate: dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.estimateDate).format('DD/MM/YYYY'),
    customerName: row.customerName.customerName,
    Address: row.customerName.billingAddress.toUpperCase() + row.customerName.billingCity.toUpperCase(),
    status: row.status
  }));
  var data2 = estimate.filter(row => row._id === id).map(row => ({
    no: '',
    invoiceDate: "",
    invoiceSubject: row.estimateSubject,
    invoiceDefect: row.estimateDefect
  }));
  var data5 = items.map((Item, i) => {
    return {
      no: i + 1,
      item: Item.itemName.itemName,
      itemDescription: Item.itemDescription,
      itemQty: Item.itemQty,
      itemRate: '$' + Item.itemRate,
      itemDiscount: '%' + Item.itemDiscount,
      itemAmount: '$' + Item.itemAmount
    };
  });
  var data6 = estimate.filter(row => row._id === id).map((row, i) => {
    return {
      no: '',
      item: "",
      itemDescription: "",
      itemQty: "",
      itemRate: "",
      itemDiscount: "Sub Total (Tax Inclusive)",
      itemAmount: '$' + row.subTotal
    };
  });
  var data9 = estimate.filter(row => row._id === id).map((row, i) => {
    return {
      no: '',
      item: "",
      itemDescription: "",
      itemQty: "",
      itemRate: "",
      itemDiscount: "Total",
      itemAmount: '$' + row.totalInvoice
    };
  });
  var data4 = estimate.filter(row => row._id === id).map(row => ({
    noteInfo: 'Note ' + row.noteInfo
  }));
  var data11 = estimate.filter(row => row._id === id).map((row, i) => {
    return {
      no: '',
      item: "",
      itemDescription: "",
      itemQty: "",
      itemRate: "",
      itemDiscount: "Balance Due",
      itemAmount: '$' + row.balanceDue
    };
  });
  var data12 = estimate.filter(row => row._id === id).map((row, i) => {
    return {
      no: '',
      item: "",
      itemDescription: "",
      itemQty: "",
      itemRate: "",
      itemDiscount: "Total In Words",
      itemAmount: '$' + row.totalW
    };
  });
  var exportToExcel = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* () {
      var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_56___default().Workbook)();
      var workSheet = workbook.addWorksheet('Sheet1');
      var columns1 = [{
        header: "#",
        key: 'number',
        width: 20
      }, {
        header: "Date",
        key: 'invoiceDate',
        width: 20
      }, {
        header: "Customer",
        key: 'customerName',
        width: 20
      }, {
        header: "Address",
        key: 'Address',
        width: 20
      }, {
        header: "Status",
        key: 'status',
        width: 20
      }];
      var columns2 = [{
        header: "",
        key: 'no',
        width: 20
      }, {
        header: "",
        key: 'invoiceDate',
        width: 20
      }, {
        header: "Subject",
        key: 'invoiceSubject',
        width: 20
      }, {
        header: "Defect",
        key: 'invoiceDefect',
        width: 20
      }];
      var columns5 = [{
        header: "#",
        key: 'no',
        width: 20
      }, {
        header: "Item",
        key: 'item',
        width: 20
      }, {
        header: "Item Description",
        key: 'itemDescription',
        width: 20
      }, {
        header: "Qty",
        key: 'itemQty',
        width: 20
      }, {
        header: "Rate",
        key: 'itemRate',
        width: 20
      }, {
        header: "Discount",
        key: 'itemDiscount',
        width: 20
      }, {
        header: "Amount",
        key: 'itemAmount',
        width: 20
      }];
      workSheet.addRow(columns1.map(col => col.header));
      data0.forEach(item => {
        workSheet.addRow([item.number, item.invoiceDate, item.customerName, item.Address, item.status]);
      });
      workSheet.addRow([]);
      workSheet.addRow(columns2.map(col => col.header));
      data2.forEach(item => {
        workSheet.addRow([item.no, item.invoiceDate, item.invoiceSubject, item.invoiceDefect]);
      });
      workSheet.addRow([]);
      workSheet.mergeCells('A8,E8');
      data4.forEach(item => {
        workSheet.addRow([item.noteInfo]);
      });
      workSheet.addRow([]);
      workSheet.addRow(['Item']);
      workSheet.addRow(columns5.map(col => col.header));
      data5.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount]);
      });
      data6.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount]);
      });
      data9.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount]);
      });
      data11.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount]);
      });
      data12.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount]);
      });
      var buffer = yield workbook.xlsx.writeBuffer();
      var bold = new Blob([buffer], {
        type: 'application/octet-stream'
      });
      (0,file_saver__WEBPACK_IMPORTED_MODULE_57__.saveAs)(bold, "".concat('Q-' + String(estimateNumber).padStart(6, '0') + ' for ' + customerName1, ".xlsx"));
    });
    return function exportToExcel() {
      return _ref13.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Quotation Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    onClick: () => navigate('/EstimateViewAdmin')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_54__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A, {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2
  }, show1 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EstimateInformation__WEBPACK_IMPORTED_MODULE_22__["default"], {
    onId: id
  })) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay, {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemInfoContainer2",
    id: "myModal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: '100%'
    }
  }, estimate === null || estimate === void 0 || (_estimate$filter = estimate.filter(row => row._id === id)) === null || _estimate$filter === void 0 ? void 0 : _estimate$filter.map(row => {
    var _ref14, _data, _row$items, _data2, _data3, _row$items2, _data4;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
      style: {
        display: 'block',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
      sx: {
        fontWeight: 'bold',
        fontSize: '20px'
      }
    }, row.customerName.customerName.toUpperCase(), " | ", (_ref14 = row.estimateName || row.invoiceName) === null || _ref14 === void 0 ? void 0 : _ref14.replace(/EST\s*-?/i, 'QUO-'), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
      color: row.status === "Draft" ? "gray" : row.status === "Sent" ? "blue" : row.status === "Decline" ? "red" : row.status === "Approved" ? "#339ba5" : row.status === "Invoiced" ? "#6a1b9a" : "black"
    }, row.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      "aria-controls": open ? 'demo-customized-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open ? 'true' : undefined,
      variant: "contained",
      disableElevation: true,
      onClick: handleClick,
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .A, null),
      sx: {
        bgcolor: 'gray',
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray'
        }
      }
    }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      id: "demo-customized-menu",
      MenuListProps: {
        'aria-labelledby': 'demo-customized-button'
      },
      anchorEl: anchorEl,
      open: open,
      onClose: handleCloseMenu,
      TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
      disabled: row.status !== 'Draft' && estimationInfoU.length === 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__/* .NavLink */ .k2, {
      to: "/EstimateInvoiceFormUpdate/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__/* .NavLink */ .k2, {
      to: "/EstimateFormClone/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_55__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Clone"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
      onClick: handleOpenPrint,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Print")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
      onClick: exportToExcel,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_58__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Export to Excel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
      onClick: () => handleShow1(2)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        color: 'gray'
      }
    }, "Comments"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
      onClick: () => handleShow1(3)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        color: 'gray'
      }
    }, "History")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null, row.ReferenceName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        color: 'gray'
      },
      onClick: () => handleShowRef(2)
    }, "Reference") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      onClick: handleCloseMenu,
      style: {
        color: 'gray'
      }
    }, "No Related Reference")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null, row.status !== 'Converted' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__/* .NavLink */ .k2, {
      to: "/EstimateViewConvertToInvoice/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Convert To Invoice")), row.status === 'Converted' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__/* .NavLink */ .k2, {
      to: "/EstimateViewConvertToInvoice/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Convert To Invoice (Again)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null, row.status !== 'Converted' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__/* .NavLink */ .k2, {
      to: "/MakePurchaseConvertToProject/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Convert to Project")), row.status === 'Converted' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__/* .NavLink */ .k2, {
      to: "/MakePurchaseConvertToProject/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Convert to Project (Again)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null, row.status !== 'Converted' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__/* .NavLink */ .k2, {
      to: "/EstimateConvertToMaintenance/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Convert To Maintenance")), row.status === 'Converted' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__/* .NavLink */ .k2, {
      to: "/EstimateConvertToMaintenance/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Convert To Maintenance (Again)")))))), showRef === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, purchase ? purchase.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: row._id
    }, " | ", row.purchaseName, ", ", row.projectName.projectName)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, invoice2 ? invoice2.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: row._id
    }, " | ", row.invoiceName)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, invoice ? invoice.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: row._id
    }, " | ", row.invoiceName)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, maintenance ? maintenance.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: row._id
    }, " | M-", String(row.serviceNumber).padStart(6, '0'))) : null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      style: {
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center'
      }
    }, showRef === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '80%',
        marginBottom: '5px'
      }
    }, invoice && invoice.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, invoice.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Invoice # ", row.invoiceName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Amount  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$"), " ", row.totalInvoice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Paid  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$"), " ", row.total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Balance  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$"), " ", row.balanceDue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__/* .NavLink */ .k2, {
      to: "/InvoiceViewAdminAll/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        fontSize: '12px'
      }
    }, "View"))))))))), invoice2 && invoice2.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, invoice2.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Invoice # ", row.invoiceName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Amount  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$"), " ", row.totalInvoice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Paid  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$"), " ", row.total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Balance  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$"), " ", row.balanceDue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__/* .NavLink */ .k2, {
      to: "/InvoiceViewAdminAll/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        fontSize: '12px'
      }
    }, "View"))))))))), purchase && purchase.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, purchase.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.purchaseDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Purchase # ", row.purchaseName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Purchase Cost  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$"), " ", row.purchaseAmount1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__/* .NavLink */ .k2, {
      to: "/PurchasesViewAdminAll/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        fontSize: '12px'
      }
    }, "View"))))))))), maintenance && maintenance.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, maintenance.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.serviceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Maintenance # M-", String(row.serviceNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Amount  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$"), " ", row.totalInvoice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__/* .NavLink */ .k2, {
      to: "/MaintenanceViewInformation/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        fontSize: '12px'
      }
    }, "View")))))))))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
      title: "Close",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      onClick: () => handleShowRef(1),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, {
      style: {
        color: '#202a5a'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        height: 'calc(100vh - 230px)',
        overflow: 'hidden',
        overflowY: 'auto',
        width: '100%',
        background: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      hidden: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      ref: componentRef,
      className: "invoicedetails"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "invoiceTest"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data = data) === null || _data === void 0 ? void 0 : _data.branchId : ""
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "invoicehr"
    }, "QUOTATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content",
      style: {
        marginBottom: '20px',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        padding: '0px',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("address", {
      style: {
        marginLeft: config['--client-block-left-offset'] || '0px',
        position: 'relative',
        lineHeight: 1.35,
        width: 'fit-content',
        minWidth: '200px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        fontSize: '10px'
      }
    }, "Quotation For"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '15px'
      }
    }, row.customerName.customerName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        fontSize: '10px'
      }
    }, row.customerName.billingAddress.toUpperCase(), ",", row.customerName.billingCity.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginLeft: 'auto',
        marginRight: config['--metadata-block-right-offset'] || '0px',
        width: 'fit-content',
        display: 'block',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: '24px',
        rowGap: '6px',
        fontSize: '80%',
        alignContent: 'start',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Quotation #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, "Q-", String(row.estimateNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.estimateDate).format('DD/MM/YYYY')), row.estimateSubject !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Subject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: 'left',
        wordBreak: 'break-word',
        maxWidth: '400px'
      }
    }, row.estimateSubject.toUpperCase())), row.estimateDefect !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Defect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: 'left',
        wordBreak: 'break-word',
        maxWidth: '400px'
      }
    }, row.estimateDefect.toUpperCase()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      style: {}
    }, row.noteInfo !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      style: {
        position: 'relative',
        fontSize: '70%',
        float: 'left',
        left: '0',
        width: '50%',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, row.noteInfo !== undefined ? row.noteInfo : '')))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "secondTable",
      style: {
        width: '100%',
        clear: 'both',
        fontSize: '80%',
        marginBottom: '5px',
        border: '1px solid #DDD',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Rate"), showDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Total"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, (_row$items = row.items) === null || _row$items === void 0 ? void 0 : _row$items.map((Item, i) => {
      var relatedUnit = item.find(Item1 => Item1._id === Item.itemName._id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        key: Item.idRow
      }, Item.itemDescription !== 'Labor Fees' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        },
        colSpan: 6
      }, Item.newDescription)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'center',
          width: '30px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          width: '200px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        hidden: Item.itemName ? Item.itemName.itemName === 'empty' : ''
      }, Item.itemName.itemName.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'left',
          width: '250px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Item.itemDescription.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'right',
          width: '30px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Item.itemQty, " ", relatedUnit !== null && relatedUnit !== void 0 && relatedUnit.unit ? String(relatedUnit.unit).toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'right',
          width: '80px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Item.itemRate)), showDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'right',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        "data-prefix": true
      }, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Item.itemDiscount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'right',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Number(Item.itemAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'center',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        },
        colSpan: showDiscount ? 5 : 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Item.itemDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Item.itemAmount))));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      style: {
        width: '100%',
        clear: 'both',
        fontSize: '80%',
        pageBreakInside: 'avoid'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }, row.note), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Sub Total", row.CheckTvA ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        color: 'gray'
      }
    }, "(Tax Inclusive)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.subTotal))), row.shipping ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Shipping")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.shipping.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.adjustmentNumber ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.adjustment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.adjustmentNumber.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.CheckTvA ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "TVA @ 16%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.tax ? row.tax.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0.00'))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.totalInvoice ? row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''))), row.total ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Amount Paid")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD',
        color: '#093170',
        fontWeight: 'bold'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Balance Due")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD',
        color: '#093170',
        fontWeight: 'bold'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.balanceDue !== undefined ? row.balanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'center'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total In Words")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '150px'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.totalW))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("address", {
      style: {
        float: 'left',
        fontSize: '70%',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        lineHeight: '14px',
        fontWeight: 'bold'
      }
    }, "Bank: SOFIBANQUE SA ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Entitled: GLOBAL GATE SARL", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Bank Account: 00023233330214247020073", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Code Swift: SFBXCDKIXXX"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontWeight: 'bold'
      }
    }, "Terms & Conditions "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, row.terms.toUpperCase())))))))), row.includeLetter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", {
      style: {
        pageBreakBefore: 'always'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        padding: '5px 40px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        borderBottom: '2px solid #30368a',
        paddingBottom: '15px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.branchId : ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: 'right',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontSize: '110%',
        margin: 0
      }
    }, "Kolwezi, le ", dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.estimateDate).format('DD MMMM YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontSize: '110%',
        fontWeight: 'bold',
        margin: '0 0 2px'
      }
    }, "To: ", row.customerName.customerName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontSize: '110%',
        margin: 0
      }
    }, row.customerName.billingAddress.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontSize: '110%',
        margin: 0
      }
    }, row.customerName.billingCity.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontSize: '115%',
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#30368a',
        margin: 0
      }
    }, "Subject: Quotation Q-", String(row.estimateNumber).padStart(6, '0'), " - ", row.estimateSubject.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        whiteSpace: 'pre-wrap',
        lineHeight: '1.4',
        fontSize: '110%',
        color: '#333',
        textAlign: 'justify',
        fontFamily: 'serif'
      }
    }, row.attachedLetter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginTop: 'auto',
        paddingTop: '5px',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontWeight: 'bold',
        fontSize: '110%'
      }
    }, "The Management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        color: '#30368a',
        fontWeight: 'bold'
      }
    }, "GLOBAL GATE SARL")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        position: 'relative',
        marginTop: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      style: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "contact@globalgate.sarl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "+243 827 722 222")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "www.GlobalGate.sarl"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "invoicedetails"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
      className: "invoiceTest"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.branchId : ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "invoicehr"
    }, "QUOTATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        padding: '0px',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("address", {
      style: {
        marginLeft: config['--client-block-left-offset'] || '0px',
        lineHeight: 1.35,
        width: 'fit-content',
        minWidth: '200px',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Bill To", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, row.customerName.customerName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), row.customerName.billingAddress.toUpperCase(), ",", row.customerName.billingCity.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginLeft: 'auto',
        marginRight: config['--metadata-block-right-offset'] || '0px',
        width: 'fit-content',
        display: 'block',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: '24px',
        rowGap: '6px',
        fontSize: '70%',
        alignContent: 'start',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Quotation #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, "Q-", String(row.estimateNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.estimateDate).format('DD/MM/YYYY')), row.estimateSubject !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Subject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: 'left',
        wordBreak: 'break-word',
        maxWidth: '400px'
      }
    }, row.estimateSubject.toUpperCase())), row.estimateDefect !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Defect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: 'left',
        wordBreak: 'break-word',
        maxWidth: '400px'
      }
    }, row.estimateDefect.toUpperCase()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, row.noteInfo !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      style: {
        position: 'relative',
        fontSize: '70%',
        float: 'left',
        left: '0',
        width: '50%',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: 'left',
        width: '30px'
      }
    }, "Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left'
      }
    }, row.noteInfo)))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '70%',
        marginBottom: '5px',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Rate"), showDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Total"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, (_row$items2 = row.items) === null || _row$items2 === void 0 ? void 0 : _row$items2.map((Item, i) => {
      var relatedUnit = item.find(Item1 => Item1._id === Item.itemName._id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        key: Item.idRow
      }, Item.itemDescription !== 'Labor Fees' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        },
        colSpan: 6
      }, Item.newDescription)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'center',
          width: '30px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          width: '200px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        hidden: Item.itemName ? Item.itemName.itemName === 'empty' : ''
      }, Item.itemName.itemName.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'left',
          width: '250px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Item.itemDescription.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'right',
          width: '30px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Item.itemQty, " ", relatedUnit !== null && relatedUnit !== void 0 && relatedUnit.unit ? String(relatedUnit.unit).toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'right',
          width: '80px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Item.itemRate)), showDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'right',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        "data-prefix": true
      }, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Item.itemDiscount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'right',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Number(Item.itemAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'center',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        },
        colSpan: showDiscount ? 5 : 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Item.itemDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Item.itemAmount))));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      style: {
        fontSize: '70%',
        pageBreakInside: 'avoid',
        pageBreakInside: 'avoid'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }, row.note), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Sub Total", row.CheckTvA ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        color: 'gray'
      }
    }, "(Tax Inclusive)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.subTotal))), row.shipping ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Shipping")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.shipping.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.adjustmentNumber ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.adjustment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.adjustmentNumber.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.CheckTvA ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "TVA @ 16%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.tax ? row.tax.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0.00'))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.totalInvoice ? row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''))), row.total ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Amount Paid")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD',
        color: '#093170',
        fontWeight: 'bold'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Balance Due")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD',
        color: '#093170',
        fontWeight: 'bold'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.balanceDue !== undefined ? row.balanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'center'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total In Words")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: 'left',
        width: '150px'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.totalW))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      style: {
        position: 'relative',
        marginTop: '-50px',
        fontSize: '80%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Bank"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "SOFIBANQUE SA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Entitled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "GLOBAL GATE SARL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        backgroundColor: 'white',
        width: '100px',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Bank Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "00023233330214247020073")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Code Swift"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "SFBXCDKIXXX")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      style: {
        fontSize: '80%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Terms & Conditions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, row.terms.toUpperCase())))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "footerinvoice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "contact@globalgate.sarl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "+243 827722222")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "www.GlobalGate.sarl"))), row.includeLetter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginTop: '50px',
        borderTop: '1px dashed #ccc',
        paddingTop: '50px',
        backgroundColor: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        padding: '20px',
        border: '1px solid #eee',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        borderBottom: '2px solid #30368a',
        paddingBottom: '10px',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data4 = data) === null || _data4 === void 0 ? void 0 : _data4.branchId : ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: 'right',
        marginBottom: '30px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Kolwezi, le ", dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.estimateDate).format('DD MMMM YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: '30px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontWeight: 'bold'
      }
    }, "To: ", row.customerName.customerName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, row.customerName.billingAddress.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, row.customerName.billingCity.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: '30px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#30368a'
      }
    }, "Subject: Quotation Q-", String(row.estimateNumber).padStart(6, '0'), " - ", row.estimateSubject.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        whiteSpace: 'pre-wrap',
        lineHeight: '1.6',
        color: '#333',
        textAlign: 'justify'
      }
    }, row.attachedLetter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginTop: '40px',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontWeight: 'bold'
      }
    }, "The Management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        color: '#30368a',
        fontWeight: 'bold'
      }
    }, "GLOBAL GATE SARL")))))));
  })))), show1 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "COMMENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    required: true,
    id: "comments",
    name: "comments",
    multiline: true,
    rows: 4,
    value: reason,
    onChange: e => setReason(e.target.value.toUpperCase()),
    label: "Comments",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    style: {
      width: '100%'
    },
    className: "btnCustomer6"
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: '355px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, Comments1.map(Item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    key: Item._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '100%',
      borderBottom: '1px solid black'
    }
  }, Item.dateComment ? dayjs__WEBPACK_IMPORTED_MODULE_42___default()(Item.dateComment).format('DD/MM') : '', " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "", show1 === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "HISTORY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: '518px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      padding: '10px'
    }
  }, notification.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.person + ' on ' + dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.dateNotification).format('DD/MMMM'), ": ", row.reason))))))) : "")), " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A, {
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
    type: "button",
    onClick: handleClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .A, {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EstimateViewAdminAll);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 92887
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.invoiceTest{margin:0 0 3em;height:75px}h1{font:bold 100% sans-serif;letter-spacing:.5em;text-align:center;text-transform:uppercase}.invoiceTest address{float:right;font-size:75%;font-style:normal;line-height:1.25;margin:0 0 1em 1em}address{float:right;font-size:75%;font-style:normal;margin:0 0 1em 1em}.invoiceTest h1{background-color:#000;border-color:#999;border-bottom-style:solid;border-bottom-width:10%;font:bold 100% sans-serif;letter-spacing:.5em;text-align:center;text-transform:uppercase}.invoiceTest address p{margin:0 0 .25em}.invoiceTest span,.invoiceTest img{display:block;float:left}.invoiceTest span{margin:0 1em 1em 0;max-height:25%;max-width:90%;position:absolute}.invoiceTest img{max-height:80px;max-width:var(--header-logo-width, 240px);object-fit:contain;margin-top:10px}.invoiceTest:after{clear:both;content:"";display:table}article,article address,table{margin:0 0 3em}article h1{clip:rect(0 0 0 0);position:absolute}article address{float:left;font-size:90%;float:left;line-height:10px}article:after{clear:both;content:"";display:table}table{table-layout:auto;width:100%}table{border-collapse:collapse}table.firstTable{float:right;width:50%;height:50%}table.firstTable:after{clear:both;content:"";display:table}table.firstTable th{width:40%}table.firstTable td{width:60%}aside h1#notes{border:none;border-width:0 0 1px;margin:0 0 1em}aside h1#notes{border-color:#999;border-bottom-style:solid;border-bottom-width:10%;font:bold 100% sans-serif;letter-spacing:.5em;text-align:center;text-transform:uppercase}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 78448
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85072);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55056);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92887);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ }

}]);