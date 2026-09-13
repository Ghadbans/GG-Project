"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[7171],{

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


/***/ }

}]);