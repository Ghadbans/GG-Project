"use strict";
exports.id = "src_js_AdminView1_PageView_Payment_PaymentInformation_js";
exports.ids = ["src_js_AdminView1_PageView_Payment_PaymentInformation_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/Payment/PaymentInformation.js"
/*!******************************************************************!*\
  !*** ./src/js/AdminView1/PageView/Payment/PaymentInformation.js ***!
  \******************************************************************/
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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
var _excluded = ["className"];
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;






var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
function PaymentInformation(_ref3) {
  var onId = _ref3.onId;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    payment = _useState2[0],
    setPayment = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    payment2 = _useState4[0],
    SetPayment2 = _useState4[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_2__.ENDPOINT_URL, "/payment");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchPayment = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* () {
        if (true) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(apiUrl);
            setPayment(res.data.data.reverse());
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchPayment() {
        return _ref4.apply(this, arguments);
      };
    }();
    fetchPayment();
  }, []);
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    show = _useState6[0],
    setShow = _useState6[1];
  var handleShow = e => {
    setShow(e);
  };
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    value = _useState8[0],
    setValue = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    value2 = _useState0[0],
    setValue2 = _useState0[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var selectedIndex = payment.findIndex(row => row._id === onId);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [payment, onId]);
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    search = _useState10[0],
    setSearch = _useState10[1];
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
  };
  var newArray = search !== '' ? payment.filter(row => row.paymentNumber.toString().includes(search) || row.customerName.customerName.toLowerCase().includes(search.toLowerCase())) : payment;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, show === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "All Payment")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, payment === null || payment === void 0 ? void 0 : payment.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: index,
    label: row.customerName.customerName + ' | ' + row.paymentNumber,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: "/PaymentInformationView/".concat(row._id),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
    label: row.customerName.customerName + ' | ' + row.paymentNumber,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: "/PaymentInformationView/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : '');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentInformation);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUGF5bWVudF9QYXltZW50SW5mb3JtYXRpb25fanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFrRDtBQUN4QjtBQUN3QjtBQUNrUztBQUN0UjtBQUNsQjtBQUNvQjtBQUdoRSxJQUFNMEMsV0FBVyxHQUFHckIsMERBQU0sQ0FBQ3NCLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUMvQy9DLDBEQUFBLENBQUN3Qyw4REFBTyxFQUFBUyxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU9iLDhEQUFjLENBQUNjLE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLFNBQVM7TUFDMUJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzNCQyxRQUFRLEVBQUU7SUFDWjtFQUNGLENBQUM7QUFBQSxDQUFDLENBQUM7QUFFSCxTQUFTQyxrQkFBa0JBLENBQUFDLEtBQUEsRUFBVztFQUFBLElBQVJDLElBQUksR0FBQUQsS0FBQSxDQUFKQyxJQUFJO0VBQ2hDLElBQUFDLFNBQUEsR0FBOEI5RCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBK0QsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBbkNHLE9BQU8sR0FBQUYsVUFBQTtJQUFFRyxVQUFVLEdBQUFILFVBQUE7RUFDMUIsSUFBQUksVUFBQSxHQUFn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SyxFQUFFbkMsR0FBRyxDQUFDZ0IsWUFBWSxDQUFDQSxZQUFZLEdBQUcsS0FBSyxHQUFHaEIsR0FBRyxDQUFDYSxhQUFjO0lBQ2pFdUIsU0FBUyxFQUFFbkcsbURBQUs7SUFDaEJvRyxFQUFFLDZCQUFBcEYsTUFBQSxDQUE2QitDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFHO0lBQ3pDOEIsRUFBRSxFQUFFO01BQ0YsZ0JBQWdCLEVBQUU7UUFDaEIzRSxLQUFLLEVBQUU7TUFDVDtJQUNGO0VBQUUsQ0FDSCxDQUNGLENBQ0csQ0FDSCxDQUNGLENBQUMsR0FDSixFQUVELENBQUM7QUFFVjtBQUVBLGlFQUFlSSxrQkFBa0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9QYXltZW50L1BheW1lbnRJbmZvcm1hdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZVJvdywgVGFibGVIZWFkLCBQYXBlciwgVGFibGVDb250YWluZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgQXV0b2NvbXBsZXRlLCBzdHlsZWQsIE1vZGFsLCBCYWNrZHJvcCwgRmFkZSwgQm94LCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgQ2hlY2tib3gsIExpbmVhclByb2dyZXNzLCBTdGVwcGVyLCBTdGVwLCBTdGVwTGFiZWwsIEJ1dHRvbiwgVGFicywgVGFiIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE5hdkxpbmssIHVzZU5hdmlnYXRlLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IENsb3NlIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuXHJcblxyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBQYXltZW50SW5mb3JtYXRpb24oeyBvbklkIH0pIHtcclxuICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbcGF5bWVudDIsIFNldFBheW1lbnQyXSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IGFwaVVybCA9IGAke0VORFBPSU5UX1VSTH0vcGF5bWVudGA7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUGF5bWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHRydWUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGFwaVVybClcclxuICAgICAgICAgIHNldFBheW1lbnQocmVzLmRhdGEuZGF0YS5yZXZlcnNlKCkpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hQYXltZW50KClcclxuICB9LCBbXSlcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBoYW5kbGVTaG93ID0gKGUpID0+IHtcclxuICAgIHNldFNob3coZSk7XHJcbiAgfVxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3ZhbHVlMiwgc2V0VmFsdWUyXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gcGF5bWVudC5maW5kSW5kZXgocm93ID0+IHJvdy5faWQgPT09IG9uSWQpO1xyXG4gICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHNldFZhbHVlKHNlbGVjdGVkSW5kZXgpXHJcbiAgICB9XHJcbiAgfSwgW3BheW1lbnQsIG9uSWRdKVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZTIgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlMihuZXdWYWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgIHNldFNlYXJjaCh2YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG5ld0FycmF5ID0gc2VhcmNoICE9PSAnJyA/IHBheW1lbnQuZmlsdGVyKChyb3cpID0+XHJcbiAgICByb3cucGF5bWVudE51bWJlci50b1N0cmluZygpLmluY2x1ZGVzKHNlYXJjaCkgfHxcclxuICAgIHJvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXHJcbiAgKSA6IHBheW1lbnRcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3Nob3cgPT09IDEgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHBhZGRpbmc6ICc1cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3ggLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+QWxsIFBheW1lbnQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMScgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdygyKX0+RmlsdGVyPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTcwcHgpJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cGF5bWVudD8ubWFwKChyb3csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtyb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZSArICcgfCAnICsgcm93LnBheW1lbnROdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgdG89e2AvUGF5bWVudEluZm9ybWF0aW9uVmlldy8ke3Jvdy5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgICAgIDogJydcclxuICAgICAgfVxyXG4gICAgICB7c2hvdyA9PT0gMiA/XHJcbiAgICAgICAgKDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxMHB4JyB9fSBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICBpZD0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93KDEpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMzMDM2OGEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDEyNXB4KScsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UyfVxyXG4gICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtuZXdBcnJheT8ubWFwKChyb3csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtyb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZSArICcgfCAnICsgcm93LnBheW1lbnROdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgdG89e2AvUGF5bWVudEluZm9ybWF0aW9uVmlldy8ke3Jvdy5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMzMDM2OGEnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgIDogJydcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50SW5mb3JtYXRpb25cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlUm93IiwiVGFibGVIZWFkIiwiUGFwZXIiLCJUYWJsZUNvbnRhaW5lciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJBdXRvY29tcGxldGUiLCJzdHlsZWQiLCJNb2RhbCIsIkJhY2tkcm9wIiwiRmFkZSIsIkJveCIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIkNoZWNrYm94IiwiTGluZWFyUHJvZ3Jlc3MiLCJTdGVwcGVyIiwiU3RlcCIsIlN0ZXBMYWJlbCIsIkJ1dHRvbiIsIlRhYnMiLCJUYWIiLCJOYXZMaW5rIiwidXNlTmF2aWdhdGUiLCJMaW5rIiwiQ2xvc2UiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJWaWV3VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiUGF5bWVudEluZm9ybWF0aW9uIiwiX3JlZjMiLCJvbklkIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicGF5bWVudCIsInNldFBheW1lbnQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBheW1lbnQyIiwiU2V0UGF5bWVudDIiLCJhcGlVcmwiLCJmZXRjaFBheW1lbnQiLCJfcmVmNCIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiZGF0YSIsInJldmVyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2Iiwic2hvdyIsInNldFNob3ciLCJoYW5kbGVTaG93IiwiZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwidmFsdWUiLCJzZXRWYWx1ZSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwidmFsdWUyIiwic2V0VmFsdWUyIiwic2VsZWN0ZWRJbmRleCIsImZpbmRJbmRleCIsInJvdyIsIl9pZCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlIiwiaGFuZGxlQ2hhbmdlMiIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsInNlYXJjaCIsInNldFNlYXJjaCIsImhhbmRsZVNlYXJjaCIsInRhcmdldCIsIm5ld0FycmF5IiwiZmlsdGVyIiwicGF5bWVudE51bWJlciIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJjdXN0b21lck5hbWUiLCJ0b0xvd2VyQ2FzZSIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJ2YXJpYW50Iiwib25DbGljayIsImhlaWdodCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dZIiwid2lkdGgiLCJvbkNoYW5nZSIsIm9yaWVudGF0aW9uIiwic3giLCJtYXAiLCJpbmRleCIsImtleSIsImxhYmVsIiwiY29tcG9uZW50IiwidG8iLCJib3JkZXJSYWRpdXMiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiaXRlbSIsInhzIiwiaWQiLCJ0aXRsZSIsInBsYWNlbWVudCIsInBvc2l0aW9uIiwiZmxvYXQiXSwic291cmNlUm9vdCI6IiJ9