"use strict";
exports.id = "src_js_AdminView1_PageView_ItemView_ItemNameInfo_js";
exports.ids = ["src_js_AdminView1_PageView_ItemView_ItemNameInfo_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/ItemView/ItemNameInfo.js"
/*!*************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ItemView/ItemNameInfo.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
var _excluded = ["className"];
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





var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"].tooltip)]: {
      backgroundColor: '#30368a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
function ItemNameInfo(_ref3) {
  var onId = _ref3.onId,
    item = _ref3.item,
    search = _ref3.search,
    debouncedSearch = _ref3.debouncedSearch,
    handleSearch = _ref3.handleSearch;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var handleShow = e => {
    setShow(e);
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    value2 = _useState6[0],
    setValue2 = _useState6[1];
  var newArray = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return debouncedSearch !== '' ? item.filter(row => row.typeItem.toLowerCase().includes(debouncedSearch.toLowerCase()) || row.itemDescription && row.itemDescription.toLowerCase().includes(debouncedSearch.toLowerCase()) || row.itemName.toLowerCase().includes(debouncedSearch.toLowerCase()) || row.itemBrand && row.itemBrand.toLowerCase().includes(debouncedSearch.toLowerCase()) || row.itemManufacturer && row.itemManufacturer.toLowerCase().includes(debouncedSearch.toLowerCase()) || row.itemStore && row.itemStore.toLowerCase().includes(debouncedSearch.toLowerCase())) : item;
  }, [item, debouncedSearch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var selectedIndex = item.findIndex(row => row._id === onId);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
    var selectedIndex2 = newArray.findIndex(row => row._id === onId);
    if (selectedIndex2 !== -1) {
      setValue2(selectedIndex2);
    }
  }, [item, onId]);
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h5"
  }, "All Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow(2)
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '512px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, item === null || item === void 0 ? void 0 : item.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    label: row.itemName.toUpperCase(),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
    to: "/ItemInfo/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    label: row.itemName.toUpperCase(),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
    to: "/ItemInfo/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : '');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemNameInfo);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfSXRlbVZpZXdfSXRlbU5hbWVJbmZvX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUEyRDtBQUNrTTtBQUNuTztBQUN1QjtBQUNPO0FBQ1E7QUFFaEUsSUFBTW1DLFdBQVcsR0FBRzdCLHlEQUFNLENBQUM4QixJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDL0N4QywwREFBQSxDQUFDaUMsOERBQU8sRUFBQVMsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPYiw4REFBYyxDQUFDYyxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxTQUFTO01BQzFCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQztNQUMzQkMsUUFBUSxFQUFFO0lBQ1o7RUFDRixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBQ0gsU0FBU0MsWUFBWUEsQ0FBQUMsS0FBQSxFQUF3RDtFQUFBLElBQXJEQyxJQUFJLEdBQUFELEtBQUEsQ0FBSkMsSUFBSTtJQUFFQyxJQUFJLEdBQUFGLEtBQUEsQ0FBSkUsSUFBSTtJQUFFQyxNQUFNLEdBQUFILEtBQUEsQ0FBTkcsTUFBTTtJQUFFQyxlQUFlLEdBQUFKLEtBQUEsQ0FBZkksZUFBZTtJQUFFQyxZQUFZLEdBQUFMLEtBQUEsQ0FBWkssWUFBWTtFQUV2RSxJQUFBQyxTQUFBLEdBQXdCM0QsK0NBQVEs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SCxDQUNGLENBQUMsR0FDSixFQUdELENBQUM7QUFFVjtBQUVBLGlFQUFlSSxZQUFZLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvSXRlbVZpZXcvSXRlbU5hbWVJbmZvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRhYmxlLCBJY29uQnV0dG9uLCBzdHlsZWQsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBDaGVja2JveCwgVGFibGVDb250YWluZXIsIFBhcGVyLCBUeXBvZ3JhcGh5LCBNb2RhbCwgQm94LCBHcmlkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBNZW51SXRlbSwgQmFja2Ryb3AsIEF1dG9jb21wbGV0ZSwgVGV4dEZpZWxkLCBUYWJzLCBUYWIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQWRkLCBDbG9zZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBPdXRsZXQsIE5hdkxpbmssIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcblxyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmZ1bmN0aW9uIEl0ZW1OYW1lSW5mbyh7IG9uSWQsIGl0ZW0sIHNlYXJjaCwgZGVib3VuY2VkU2VhcmNoLCBoYW5kbGVTZWFyY2ggfSkge1xyXG5cclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZSgyKTtcclxuICBjb25zdCBoYW5kbGVTaG93ID0gKGUpID0+IHtcclxuICAgIHNldFNob3coZSk7XHJcbiAgfVxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3ZhbHVlMiwgc2V0VmFsdWUyXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBuZXdBcnJheSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIGRlYm91bmNlZFNlYXJjaCAhPT0gJycgPyBpdGVtLmZpbHRlcigocm93KSA9PlxyXG4gICAgICByb3cudHlwZUl0ZW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhkZWJvdW5jZWRTZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgKHJvdy5pdGVtRGVzY3JpcHRpb24gJiYgcm93Lml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaC50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgICAgcm93Lml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZGVib3VuY2VkU2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgIChyb3cuaXRlbUJyYW5kICYmIHJvdy5pdGVtQnJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhkZWJvdW5jZWRTZWFyY2gudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICAgIChyb3cuaXRlbU1hbnVmYWN0dXJlciAmJiByb3cuaXRlbU1hbnVmYWN0dXJlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaC50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgICAgKHJvdy5pdGVtU3RvcmUgJiYgcm93Lml0ZW1TdG9yZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaC50b0xvd2VyQ2FzZSgpKSlcclxuICAgICkgOiBpdGVtO1xyXG4gIH0sIFtpdGVtLCBkZWJvdW5jZWRTZWFyY2hdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBpdGVtLmZpbmRJbmRleChyb3cgPT4gcm93Ll9pZCA9PT0gb25JZCk7XHJcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgc2V0VmFsdWUoc2VsZWN0ZWRJbmRleClcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXgyID0gbmV3QXJyYXkuZmluZEluZGV4KHJvdyA9PiByb3cuX2lkID09PSBvbklkKTtcclxuICAgIGlmIChzZWxlY3RlZEluZGV4MiAhPT0gLTEpIHtcclxuICAgICAgc2V0VmFsdWUyKHNlbGVjdGVkSW5kZXgyKVxyXG4gICAgfVxyXG4gIH0sIFtpdGVtLCBvbklkXSk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlMiA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUyKG5ld1ZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3Nob3cgPT09IDEgP1xyXG4gICAgICAgICg8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgcGFkZGluZzogJzVweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveCAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5BbGwgSXRlbTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIxJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93KDIpfT5GaWx0ZXI8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzUxMnB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXRlbT8ubWFwKChyb3csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtyb3cuaXRlbU5hbWUudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICB0bz17YC9JdGVtSW5mby8ke3Jvdy5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgOiAnJ1xyXG4gICAgICB9XHJcbiAgICAgIHtzaG93ID09PSAyID9cclxuICAgICAgICAoPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzEwcHgnIH19IHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3coMSl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzMwMzY4YScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTI1cHgpJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTJ9XHJcbiAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICcmIC5NdWlUYWJzLWluZGljYXRvcic6IHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge25ld0FycmF5Py5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jvdy5pdGVtTmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIHRvPXtgL0l0ZW1JbmZvLyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMwMzY4YSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgOiAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtTmFtZUluZm9cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwiVGFibGUiLCJJY29uQnV0dG9uIiwic3R5bGVkIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJDaGVja2JveCIsIlRhYmxlQ29udGFpbmVyIiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiTW9kYWwiLCJCb3giLCJHcmlkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiTWVudUl0ZW0iLCJCYWNrZHJvcCIsIkF1dG9jb21wbGV0ZSIsIlRleHRGaWVsZCIsIlRhYnMiLCJUYWIiLCJheGlvcyIsIkFkZCIsIkNsb3NlIiwiT3V0bGV0IiwiTmF2TGluayIsIkxpbmsiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJWaWV3VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiSXRlbU5hbWVJbmZvIiwiX3JlZjMiLCJvbklkIiwiaXRlbSIsInNlYXJjaCIsImRlYm91bmNlZFNlYXJjaCIsImhhbmRsZVNlYXJjaCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlU2hvdyIsImUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInZhbHVlIiwic2V0VmFsdWUiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInZhbHVlMiIsInNldFZhbHVlMiIsIm5ld0FycmF5IiwiZmlsdGVyIiwicm93IiwidHlwZUl0ZW0iLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaXRlbURlc2NyaXB0aW9uIiwiaXRlbU5hbWUiLCJpdGVtQnJhbmQiLCJpdGVtTWFudWZhY3R1cmVyIiwiaXRlbVN0b3JlIiwic2VsZWN0ZWRJbmRleCIsImZpbmRJbmRleCIsIl9pZCIsInNlbGVjdGVkSW5kZXgyIiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJoYW5kbGVDaGFuZ2UyIiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJvdmVyZmxvd1kiLCJ3aWR0aCIsIm9uQ2hhbmdlIiwib3JpZW50YXRpb24iLCJzeCIsIm1hcCIsImluZGV4Iiwia2V5IiwibGFiZWwiLCJ0b1VwcGVyQ2FzZSIsImNvbXBvbmVudCIsInRvIiwiYm9yZGVyUmFkaXVzIiwiY29udGFpbmVyIiwic3BhY2luZyIsInhzIiwiaWQiLCJ0aXRsZSIsInBsYWNlbWVudCIsInBvc2l0aW9uIiwiZmxvYXQiXSwic291cmNlUm9vdCI6IiJ9