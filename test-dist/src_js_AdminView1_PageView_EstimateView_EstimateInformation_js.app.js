"use strict";
exports.id = "src_js_AdminView1_PageView_EstimateView_EstimateInformation_js";
exports.ids = ["src_js_AdminView1_PageView_EstimateView_EstimateInformation_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/EstimateView/EstimateInformation.js"
/*!************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EstimateView/EstimateInformation.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
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








var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_15__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
function EstimateInformation(_ref3) {
  var onId = _ref3.onId;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_16__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_16__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_17__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_2__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_17__.setUser)({
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
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_2__.ENDPOINT_URL, "/estimation");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchEstimate = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(apiUrl);
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_2__.ENDPOINT_URL, "/hidden"));
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
  var newArray = search !== '' ? estimate.filter(row => {
    var _row$customerName;
    return (row.estimateName || '').toLowerCase().includes(search.toLowerCase()) || (row.estimateSubject || '').toLowerCase().includes(search.toLowerCase()) || (row.estimateDefect || '').toLowerCase().includes(search.toLowerCase()) || (((_row$customerName = row.customerName) === null || _row$customerName === void 0 ? void 0 : _row$customerName.customerName) || '').toLowerCase().includes(search.toLowerCase()) || row.items && row.items.some(Item => Item.itemName && (Item.itemName.itemName || '').toLowerCase().includes(search.toLowerCase())) || row.items && row.items.some(Item => Item.itemDescription && (Item.itemDescription || '').toLowerCase().includes(search.toLowerCase()));
  }) : estimate;
  var newArray2 = search !== '' ? filteredRows.filter(row => {
    var _row$customerName2;
    return (row.estimateName || '').toLowerCase().includes(search.toLowerCase()) || (row.estimateSubject || '').toLowerCase().includes(search.toLowerCase()) || (row.estimateDefect || '').toLowerCase().includes(search.toLowerCase()) || (((_row$customerName2 = row.customerName) === null || _row$customerName2 === void 0 ? void 0 : _row$customerName2.customerName) || '').toLowerCase().includes(search.toLowerCase()) || row.items && row.items.some(Item => Item.itemName && (Item.itemName.itemName || '').toLowerCase().includes(search.toLowerCase())) || row.items && row.items.some(Item => Item.itemDescription && (Item.itemDescription || '').toLowerCase().includes(search.toLowerCase()));
  }) : filteredRows;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, show === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "All Quotations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow(2)
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, estimate === null || estimate === void 0 ? void 0 : estimate.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: index,
    label: row.customerName.customerName + ' | ' + (row.estimateName ? row.estimateName.replace(/EST\s*-?/i, 'QUO-') : 'QUO-' + String(row.estimateNumber).padStart(6, '0')),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: "/EstimateViewAdminAll/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: 'calc(100vh - 125px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: index,
    label: row.customerName.customerName + ' | ' + (row.estimateName ? row.estimateName.replace(/EST\s*-?/i, 'QUO-') : 'QUO-' + String(row.estimateNumber).padStart(6, '0')),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: "/EstimateViewAdminAll/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : '') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, show === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "All Quotations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow(2)
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, filteredRows === null || filteredRows === void 0 ? void 0 : filteredRows.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: index,
    label: row.customerName.customerName + ' | ' + (row.estimateName ? row.estimateName.replace(/EST\s*-?/i, 'QUO-') : 'QUO-' + String(row.estimateNumber).padStart(6, '0')),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: "/EstimateViewAdminAll/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: 'calc(100vh - 125px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray2 === null || newArray2 === void 0 ? void 0 : newArray2.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: index,
    label: row.customerName.customerName + ' | ' + (row.estimateName ? row.estimateName.replace(/EST\s*-?/i, 'QUO-') : 'QUO-' + String(row.estimateNumber).padStart(6, '0')),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: "/EstimateViewAdminAll/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : ''));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EstimateInformation);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRXN0aW1hdGVWaWV3X0VzdGltYXRlSW5mb3JtYXRpb25fanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFrRDtBQUN4QjtBQUN3QjtBQUNrUztBQUN0UjtBQUNsQjtBQUNvQjtBQUNWO0FBQ2dDO0FBR3RGLElBQU0rQyxXQUFXLEdBQUd4QiwwREFBTSxDQUFDeUIsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQy9DcEQsMERBQUEsQ0FBQ3dDLDhEQUFPLEVBQUFjLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxLQUFBLENBQUxDLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBT2xCLDhEQUFjLENBQUNtQixPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxTQUFTO01BQzFCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQztNQUMzQkMsUUFBUSxFQUFFO0lBQ1o7RUFDRixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBQ0gsU0FBU0MsbUJBQW1CQSxDQUFBQyxLQUFBLEVBQVc7RUFBQSxJQUFSQyxJQUFJLEdBQUFELEtBQUEsQ0FBSkMsSUFBSTtFQUNqQyxJQUFNQyxRQUFRLEdBQUdoQyw4REFBVyxDQUFDLENBQUM7RUFDOUIsSUFBTWlDLFFBQVEsR0FBRzVCLHlEQUFXLENBQUMsQ0FBQztFQUM5QixJQUFNNkIsSUFBSSxHQUFHNUIseURBQVcsQ0FBQ0Usd0VBQWlC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LEdBQUcsQ0FBQ1osY0FBYyxDQUFDLENBQUNzRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBRSxDQUFFO0lBQzNLQyxTQUFTLEVBQUU5SSxtREFBSztJQUNoQitJLEVBQUUsMkJBQUExSCxNQUFBLENBQTJCOEQsR0FBRyxDQUFDSSxHQUFHLENBQUc7SUFDdkMrQyxFQUFFLEVBQUU7TUFDRixnQkFBZ0IsRUFBRTtRQUNoQjlHLEtBQUssRUFBRTtNQUNUO0lBQ0Y7RUFBRSxDQUNILENBQ0YsQ0FDRyxDQUNILENBQ0YsQ0FBQyxHQUNKLEVBRUQsQ0FJTixDQUFDO0FBRVY7QUFFQSxpRUFBZUksbUJBQW1CLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvRXN0aW1hdGVWaWV3L0VzdGltYXRlSW5mb3JtYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgTWVudUl0ZW0sIEdyaWQsIFRhYnMsIFRhYiwgSWNvbkJ1dHRvbiwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZVJvdywgVGFibGVIZWFkLCBQYXBlciwgVGFibGVDb250YWluZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgQXV0b2NvbXBsZXRlLCBzdHlsZWQsIE1vZGFsLCBCYWNrZHJvcCwgRmFkZSwgQm94LCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgQ2hlY2tib3gsIExpbmVhclByb2dyZXNzLCBTdGVwcGVyLCBTdGVwLCBTdGVwTGFiZWwsIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCB1c2VOYXZpZ2F0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBDbG9zZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcblxyXG5cclxuY29uc3QgVmlld1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5mdW5jdGlvbiBFc3RpbWF0ZUluZm9ybWF0aW9uKHsgb25JZCB9KSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuICBjb25zdCBbZXN0aW1hdGUsIHNldEVzdGltYXRlXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtlc3RpbWF0ZTIsIFNldEVzdGltYXRlMl0gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGFwaVVybCA9IGAke0VORFBPSU5UX1VSTH0vZXN0aW1hdGlvbmA7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRXN0aW1hdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGFwaVVybClcclxuICAgICAgICBzZXRFc3RpbWF0ZShyZXMuZGF0YS5kYXRhLnNvcnQoKGEsYikgPT4gYi5lc3RpbWF0ZU51bWJlciAtIGEuZXN0aW1hdGVOdW1iZXIpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hFc3RpbWF0ZSgpXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9oaWRkZW5gKVxyXG4gICAgICAgIHNldEhpZGRlbihyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdIaWRkZW4nKVxyXG4gICAgICAgIC8vIGF3YWl0IFByb21pc2UuYWxsKHJlcy5kYXRhLmRhdGEubWFwKGFzeW5jIChpdGVtKSA9PiB7XHJcbiAgICAgICAgLy8gICBhd2FpdCBkYi5oaWRkZW5TY2hlbWEucHV0KHsgLi4uaXRlbSwgc3luY2VkOiB0cnVlLCB1cGRhdGVTOiB0cnVlIH0pXHJcbiAgICAgICAgLy8gfSkpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgaGFuZGxlU2hvdyA9IChlKSA9PiB7XHJcbiAgICBzZXRTaG93KGUpO1xyXG4gIH1cclxuICBjb25zdCBmaWx0ZXJlZFJvd3MgPSBlc3RpbWF0ZS5maWx0ZXIocm93ID0+ICFoaWRkZW4uc29tZSgocm93MikgPT4gcm93Mi5pZFJvdyA9PT0gcm93Ll9pZCkpXHJcblxyXG5cclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt2YWx1ZTIsIHNldFZhbHVlMl0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGVzdGltYXRlLmZpbmRJbmRleChyb3cgPT4gcm93Ll9pZCA9PT0gb25JZCk7XHJcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgc2V0VmFsdWUoc2VsZWN0ZWRJbmRleClcclxuICAgIH1cclxuICB9LCBbZXN0aW1hdGUsIG9uSWRdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gZmlsdGVyZWRSb3dzLmZpbmRJbmRleChyb3cgPT4gcm93Ll9pZCA9PT0gb25JZCk7XHJcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgc2V0VmFsdWUoc2VsZWN0ZWRJbmRleClcclxuICAgIH1cclxuICB9LCBbZmlsdGVyZWRSb3dzLCBvbklkXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlMiA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUyKG5ld1ZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRTZWFyY2godmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IG5ld0FycmF5ID0gc2VhcmNoICE9PSAnJyA/IGVzdGltYXRlLmZpbHRlcigocm93KSA9PlxyXG4gICAgKHJvdy5lc3RpbWF0ZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAocm93LmVzdGltYXRlU3ViamVjdCB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIChyb3cuZXN0aW1hdGVEZWZlY3QgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAocm93LmN1c3RvbWVyTmFtZT8uY3VzdG9tZXJOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgKHJvdy5pdGVtcyAmJiByb3cuaXRlbXMuc29tZSgoSXRlbSkgPT4gSXRlbS5pdGVtTmFtZSAmJiAoSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkpKSB8fFxyXG4gICAgKHJvdy5pdGVtcyAmJiByb3cuaXRlbXMuc29tZSgoSXRlbSkgPT4gSXRlbS5pdGVtRGVzY3JpcHRpb24gJiYgKEl0ZW0uaXRlbURlc2NyaXB0aW9uIHx8ICcnKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSkpXHJcbiAgKSA6IGVzdGltYXRlXHJcbiAgY29uc3QgbmV3QXJyYXkyID0gc2VhcmNoICE9PSAnJyA/IGZpbHRlcmVkUm93cy5maWx0ZXIoKHJvdykgPT5cclxuICAgIChyb3cuZXN0aW1hdGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgKHJvdy5lc3RpbWF0ZVN1YmplY3QgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAocm93LmVzdGltYXRlRGVmZWN0IHx8ICcnKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgKHJvdy5jdXN0b21lck5hbWU/LmN1c3RvbWVyTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIChyb3cuaXRlbXMgJiYgcm93Lml0ZW1zLnNvbWUoKEl0ZW0pID0+IEl0ZW0uaXRlbU5hbWUgJiYgKEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKSkgfHxcclxuICAgIChyb3cuaXRlbXMgJiYgcm93Lml0ZW1zLnNvbWUoKEl0ZW0pID0+IEl0ZW0uaXRlbURlc2NyaXB0aW9uICYmIChJdGVtLml0ZW1EZXNjcmlwdGlvbiB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkpKVxyXG4gICkgOiBmaWx0ZXJlZFJvd3NcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtcclxuICAgICAgICB1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycgPyAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7c2hvdyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgcGFkZGluZzogJzVweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz5BbGwgUXVvdGF0aW9uczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIxJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93KDIpfT5GaWx0ZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJ2NhbGMoMTAwdmggLSAxNzBweCknLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICcmIC5NdWlUYWJzLWluZGljYXRvcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlc3RpbWF0ZT8ubWFwKChyb3csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtyb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZSArICcgfCAnICsgKHJvdy5lc3RpbWF0ZU5hbWUgPyByb3cuZXN0aW1hdGVOYW1lLnJlcGxhY2UoL0VTVFxccyotPy9pLCAnUVVPLScpIDogKCdRVU8tJyArIFN0cmluZyhyb3cuZXN0aW1hdGVOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9Fc3RpbWF0ZVZpZXdBZG1pbkFsbC8ke3Jvdy5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7c2hvdyA9PT0gMiA/XHJcbiAgICAgICAgICAgICAgKDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxMHB4JyB9fSBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93KDEpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMzMDM2OGEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTI1cHgpJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICcmIC5NdWlUYWJzLWluZGljYXRvcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YSdcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge25ld0FycmF5Py5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lICsgJyB8ICcgKyAocm93LmVzdGltYXRlTmFtZSA/IHJvdy5lc3RpbWF0ZU5hbWUucmVwbGFjZSgvRVNUXFxzKi0/L2ksICdRVU8tJykgOiAoJ1FVTy0nICsgU3RyaW5nKHJvdy5lc3RpbWF0ZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL0VzdGltYXRlVmlld0FkbWluQWxsLyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMwMzY4YSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Nob3cgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHBhZGRpbmc6ICc1cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+QWxsIFF1b3RhdGlvbnM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMScgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdygyKX0+RmlsdGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTcwcHgpJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyZWRSb3dzPy5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lICsgJyB8ICcgKyAocm93LmVzdGltYXRlTmFtZSA/IHJvdy5lc3RpbWF0ZU5hbWUucmVwbGFjZSgvRVNUXFxzKi0/L2ksICdRVU8tJykgOiAoJ1FVTy0nICsgU3RyaW5nKHJvdy5lc3RpbWF0ZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL0VzdGltYXRlVmlld0FkbWluQWxsLyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtzaG93ID09PSAyID9cclxuICAgICAgICAgICAgICAoPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzEwcHgnIH19IHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3coMSl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzMwMzY4YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTI1cHgpJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICcmIC5NdWlUYWJzLWluZGljYXRvcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YSdcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge25ld0FycmF5Mj8ubWFwKChyb3csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtyb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZSArICcgfCAnICsgKHJvdy5lc3RpbWF0ZU5hbWUgPyByb3cuZXN0aW1hdGVOYW1lLnJlcGxhY2UoL0VTVFxccyotPy9pLCAnUVVPLScpIDogKCdRVU8tJyArIFN0cmluZyhyb3cuZXN0aW1hdGVOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9Fc3RpbWF0ZVZpZXdBZG1pbkFsbC8ke3Jvdy5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMzMDM2OGEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFc3RpbWF0ZUluZm9ybWF0aW9uXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJNZW51SXRlbSIsIkdyaWQiLCJUYWJzIiwiVGFiIiwiSWNvbkJ1dHRvbiIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVSb3ciLCJUYWJsZUhlYWQiLCJQYXBlciIsIlRhYmxlQ29udGFpbmVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsIkF1dG9jb21wbGV0ZSIsInN0eWxlZCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJGYWRlIiwiQm94IiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiQ2hlY2tib3giLCJMaW5lYXJQcm9ncmVzcyIsIlN0ZXBwZXIiLCJTdGVwIiwiU3RlcExhYmVsIiwiQnV0dG9uIiwiTmF2TGluayIsInVzZU5hdmlnYXRlIiwiTGluayIsIkNsb3NlIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIlZpZXdUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJFc3RpbWF0ZUluZm9ybWF0aW9uIiwiX3JlZjMiLCJvbklkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjQiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZXN0aW1hdGUiLCJzZXRFc3RpbWF0ZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZXN0aW1hdGUyIiwiU2V0RXN0aW1hdGUyIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJhcGlVcmwiLCJmZXRjaEVzdGltYXRlIiwiX3JlZjUiLCJzb3J0IiwiYSIsImIiLCJlc3RpbWF0ZU51bWJlciIsImZldGNoRGF0YSIsIl9yZWY2IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4Iiwic2hvdyIsInNldFNob3ciLCJoYW5kbGVTaG93IiwiZSIsImZpbHRlcmVkUm93cyIsImZpbHRlciIsInJvdyIsInNvbWUiLCJyb3cyIiwiaWRSb3ciLCJfaWQiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsInZhbHVlIiwic2V0VmFsdWUiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJ2YWx1ZTIiLCJzZXRWYWx1ZTIiLCJzZWxlY3RlZEluZGV4IiwiZmluZEluZGV4IiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJoYW5kbGVDaGFuZ2UyIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInNlYXJjaCIsInNldFNlYXJjaCIsImhhbmRsZVNlYXJjaCIsInRhcmdldCIsIm5ld0FycmF5IiwiX3JvdyRjdXN0b21lck5hbWUiLCJlc3RpbWF0ZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZXN0aW1hdGVTdWJqZWN0IiwiZXN0aW1hdGVEZWZlY3QiLCJjdXN0b21lck5hbWUiLCJpdGVtcyIsIkl0ZW0iLCJpdGVtTmFtZSIsIml0ZW1EZXNjcmlwdGlvbiIsIm5ld0FycmF5MiIsIl9yb3ckY3VzdG9tZXJOYW1lMiIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJ2YXJpYW50Iiwib25DbGljayIsImhlaWdodCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dZIiwid2lkdGgiLCJvbkNoYW5nZSIsIm9yaWVudGF0aW9uIiwic3giLCJtYXAiLCJpbmRleCIsImtleSIsImxhYmVsIiwicmVwbGFjZSIsIlN0cmluZyIsInBhZFN0YXJ0IiwiY29tcG9uZW50IiwidG8iLCJib3JkZXJSYWRpdXMiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiaXRlbSIsInhzIiwiaWQiLCJ0aXRsZSIsInBsYWNlbWVudCIsInBvc2l0aW9uIiwiZmxvYXQiXSwic291cmNlUm9vdCI6IiJ9