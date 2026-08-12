"use strict";
exports.id = "src_js_AdminView1_PageView_ProjectView_ProjectNameInfo_js";
exports.ids = ["src_js_AdminView1_PageView_ProjectView_ProjectNameInfo_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/ProjectView/ProjectNameInfo.js"
/*!*******************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ProjectView/ProjectNameInfo.js ***!
  \*******************************************************************/
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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
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









var ViewTooltip = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__["default"])(_ref => {
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
function ProjectNameInfo(_ref3) {
  var onId = _ref3.onId;
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_16__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_17__.selectCurrentUser);
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    project = _useState2[0],
    setProject = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    filteredRows = _useState4[0],
    setFilteredRows = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    hidden = _useState6[0],
    setHidden = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    search = _useState8[0],
    setSearch = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState0 = _slicedToArray(_useState9, 2),
    show2 = _useState0[0],
    setShow2 = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    value = _useState10[0],
    setValue = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    value2 = _useState12[0],
    setValue2 = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* () {
        try {
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_14__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_15__.ENDPOINT_URL, "/projects")), axios__WEBPACK_IMPORTED_MODULE_14__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_15__.ENDPOINT_URL, "/hidden"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2),
            resProjects = _yield$Promise$all2[0],
            resHidden = _yield$Promise$all2[1];
          setProject(resProjects.data.data.reverse());
          setHidden(resHidden.data.data);
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      });
      return function fetchData() {
        return _ref4.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setFilteredRows(project.filter(row => !hidden.some(row2 => row2.idRow === row._id)));
  }, [project, hidden]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var selectedIndex = project.findIndex(row => row._id === onId);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
    var selectedIndex2 = filteredRows.findIndex(row => row._id === onId);
    if (selectedIndex2 !== -1) {
      setValue2(selectedIndex2);
    }
  }, [project, filteredRows, onId]);
  var handleSearch = e => {
    setSearch(e.target.value);
  };
  var newArray = search !== '' ? project.filter(row => row.projectName.toLowerCase().includes(search.toLowerCase()) || row.projectNumber.toString().includes(search) || row.description && row.description.toLowerCase().includes(search.toLowerCase()) || row.customerName && row.customerName.customerName.toLowerCase().includes(search.toLowerCase())) : project;
  var newArray2 = search !== '' ? filteredRows.filter(row => row.projectName.toLowerCase().includes(search.toLowerCase()) || row.description && row.description.toLowerCase().includes(search.toLowerCase()) || row.projectNumber.toString().includes(search) || row.customerName && row.customerName.customerName.toLowerCase().includes(search.toLowerCase())) : filteredRows;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, show2 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    variant: "h6"
  }, "All Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer1",
    onClick: () => setShow2(2),
    style: {
      cursor: 'pointer'
    }
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: value,
    onChange: (e, v) => setValue(v),
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, (user.data.role === 'CEO' ? project : filteredRows).map((row, index) => {
    var _row$customerName;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      label: "".concat(((_row$customerName = row.customerName) === null || _row$customerName === void 0 ? void 0 : _row$customerName.customerName) || 'Unknown', " | P-").concat(String(row.projectNumber).padStart(6, '0')),
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
      to: "/ProjectInfo/".concat(row._id),
      sx: {
        '&.Mui-selected': {
          color: 'white',
          backgroundColor: '#30368a',
          borderRadius: '10px'
        }
      }
    });
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    label: "Search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch,
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => setShow2(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    value: user.data.role === 'CEO' ? value : value2,
    onChange: (e, v) => user.data.role === 'CEO' ? setValue(v) : setValue2(v),
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, (user.data.role === 'CEO' ? newArray : newArray2).map((row, index) => {
    var _row$customerName2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      label: "".concat(((_row$customerName2 = row.customerName) === null || _row$customerName2 === void 0 ? void 0 : _row$customerName2.customerName) || 'Unknown', " | P-").concat(String(row.projectNumber).padStart(6, '0')),
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
      to: "/ProjectInfo/".concat(row._id),
      sx: {
        '&.Mui-selected': {
          color: '#30368a'
        }
      }
    });
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectNameInfo);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUHJvamVjdFZpZXdfUHJvamVjdE5hbWVJbmZvX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBbUQ7QUFDMEM7QUFDakQ7QUFDUztBQUNXO0FBQ2xCO0FBQ3BCO0FBQ3dCO0FBQ1I7QUFDMkI7QUFFckUsSUFBTW9CLFdBQVcsR0FBR0wsaUVBQU0sQ0FBQ00sSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQzdDekIsMERBQUEsQ0FBQ2EsOERBQU8sRUFBQWMsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN6RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDZixPQUFBQyxNQUFBLENBQU9sQiw4REFBYyxDQUFDbUIsT0FBTyxJQUFLO01BQzlCQyxlQUFlLEVBQUUsU0FBUztNQUMxQkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDM0JDLFFBQVEsRUFBRTtJQUNkO0VBQ0osQ0FBQztBQUFBLENBQUMsQ0FBQztBQUVILFNBQVNDLGVBQWVBLENBQUFDLEtBQUEsRUFBVztFQUFBLElBQVJDLElBQUksR0FBQUQsS0FBQSxDQUFKQyxJQUFJO0VBQzNCLElBQU1DLElBQUksR0FBR3hCLHlEQUFXLENBQUNDLHdFQUFpQixDQUFDO0VBQzNDLElBQU13QixRQUFRLEdBQUcvQiw4REFBVyxDQUFDLENBQUM7RUFDOUIsSUFBQWdDLFNBQUEsR0FBOEIxQywrQ0FBUSxDQUFDLEVBQUUs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SCxrQkFBQSxHQUFBMUQsR0FBRyxDQUFDa0IsWUFBWSxjQUFBd0Msa0JBQUEsdUJBQWhCQSxrQkFBQSxDQUFrQnhDLFlBQVksS0FBSSxTQUFTLFdBQUE1RSxNQUFBLENBQVFxRyxNQUFNLENBQUMzQyxHQUFHLENBQUNlLGFBQWEsQ0FBQyxDQUFDNkIsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBRztNQUMxR0MsU0FBUyxFQUFFNUgsa0RBQUs7TUFDaEI2SCxFQUFFLGtCQUFBeEcsTUFBQSxDQUFrQjBELEdBQUcsQ0FBQ0ksR0FBRyxDQUFHO01BQzlCZ0MsRUFBRSxFQUFFO1FBQ0EsZ0JBQWdCLEVBQUU7VUFDZDNGLEtBQUssRUFBRTtRQUNYO01BQ0o7SUFBRSxDQUNMLENBQUM7RUFBQSxDQUNMLENBQ0MsQ0FDTCxDQUNQLENBRUwsQ0FBQztBQUVkO0FBRUEsaUVBQWVJLGVBQWUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9Qcm9qZWN0Vmlldy9Qcm9qZWN0TmFtZUluZm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCwgSWNvbkJ1dHRvbiwgVGFicywgVGFiLCBDaGVja2JveCwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBDbG9zZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNlbGVjdEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5cclxuY29uc3QgVmlld1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICAgIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgICAgIGZvbnRTaXplOiAxMSxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3ROYW1lSW5mbyh7IG9uSWQgfSkge1xyXG4gICAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICAgIGNvbnN0IFtwcm9qZWN0LCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtmaWx0ZXJlZFJvd3MsIHNldEZpbHRlcmVkUm93c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzaG93Miwgc2V0U2hvdzJdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3ZhbHVlMiwgc2V0VmFsdWUyXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3Jlc1Byb2plY3RzLCByZXNIaWRkZW5dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3Byb2plY3RzYCksXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaGlkZGVuYClcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvamVjdChyZXNQcm9qZWN0cy5kYXRhLmRhdGEucmV2ZXJzZSgpKTtcclxuICAgICAgICAgICAgICAgIHNldEhpZGRlbihyZXNIaWRkZW4uZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2plY3RzOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXJlZFJvd3MocHJvamVjdC5maWx0ZXIocm93ID0+ICFoaWRkZW4uc29tZSgocm93MikgPT4gcm93Mi5pZFJvdyA9PT0gcm93Ll9pZCkpKTtcclxuICAgIH0sIFtwcm9qZWN0LCBoaWRkZW5dKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBwcm9qZWN0LmZpbmRJbmRleChyb3cgPT4gcm93Ll9pZCA9PT0gb25JZCk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHNldFZhbHVlKHNlbGVjdGVkSW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4MiA9IGZpbHRlcmVkUm93cy5maW5kSW5kZXgocm93ID0+IHJvdy5faWQgPT09IG9uSWQpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4MiAhPT0gLTEpIHtcclxuICAgICAgICAgICAgc2V0VmFsdWUyKHNlbGVjdGVkSW5kZXgyKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvamVjdCwgZmlsdGVyZWRSb3dzLCBvbklkXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcclxuICAgICAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuZXdBcnJheSA9IHNlYXJjaCAhPT0gJycgPyBwcm9qZWN0LmZpbHRlcigocm93KSA9PlxyXG4gICAgICAgIHJvdy5wcm9qZWN0TmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgIHJvdy5wcm9qZWN0TnVtYmVyLnRvU3RyaW5nKCkuaW5jbHVkZXMoc2VhcmNoKSB8fFxyXG4gICAgICAgIChyb3cuZGVzY3JpcHRpb24gJiYgcm93LmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKSB8fFxyXG4gICAgICAgIChyb3cuY3VzdG9tZXJOYW1lICYmIHJvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKVxyXG4gICAgKSA6IHByb2plY3Q7XHJcblxyXG4gICAgY29uc3QgbmV3QXJyYXkyID0gc2VhcmNoICE9PSAnJyA/IGZpbHRlcmVkUm93cy5maWx0ZXIoKHJvdykgPT5cclxuICAgICAgICByb3cucHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAocm93LmRlc2NyaXB0aW9uICYmIHJvdy5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgICAgICByb3cucHJvamVjdE51bWJlci50b1N0cmluZygpLmluY2x1ZGVzKHNlYXJjaCkgfHxcclxuICAgICAgICAocm93LmN1c3RvbWVyTmFtZSAmJiByb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSlcclxuICAgICkgOiBmaWx0ZXJlZFJvd3M7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICB7c2hvdzIgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHBhZGRpbmc6ICc1cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPkFsbCBQcm9qZWN0czwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjEnIG9uQ2xpY2s9eygpID0+IHNldFNob3cyKDIpfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5GaWx0ZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDE3MHB4KScsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdikgPT4gc2V0VmFsdWUodil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJyA/IHByb2plY3QgOiBmaWx0ZXJlZFJvd3MpLm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Ake3Jvdy5jdXN0b21lck5hbWU/LmN1c3RvbWVyTmFtZSB8fCAnVW5rbm93bid9IHwgUC0ke1N0cmluZyhyb3cucHJvamVjdE51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL1Byb2plY3RJbmZvLyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTBweCcgfX0gc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gc2V0U2hvdzIoMSl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzMwMzY4YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDEyNXB4KScsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycgPyB2YWx1ZSA6IHZhbHVlMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdikgPT4gdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nID8gc2V0VmFsdWUodikgOiBzZXRWYWx1ZTIodil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsodXNlci5kYXRhLnJvbGUgPT09ICdDRU8nID8gbmV3QXJyYXkgOiBuZXdBcnJheTIpLm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Ake3Jvdy5jdXN0b21lck5hbWU/LmN1c3RvbWVyTmFtZSB8fCAnVW5rbm93bid9IHwgUC0ke1N0cmluZyhyb3cucHJvamVjdE51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL1Byb2plY3RJbmZvLyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMwMzY4YSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdE5hbWVJbmZvO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRleHRGaWVsZCIsIkljb25CdXR0b24iLCJUYWJzIiwiVGFiIiwiQ2hlY2tib3giLCJUeXBvZ3JhcGh5IiwiR3JpZCIsIkNsb3NlIiwiTGluayIsInVzZUxvY2F0aW9uIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwic3R5bGVkIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEN1cnJlbnRVc2VyIiwiVmlld1Rvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIlByb2plY3ROYW1lSW5mbyIsIl9yZWYzIiwib25JZCIsInVzZXIiLCJsb2NhdGlvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInByb2plY3QiLCJzZXRQcm9qZWN0IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJmaWx0ZXJlZFJvd3MiLCJzZXRGaWx0ZXJlZFJvd3MiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImhpZGRlbiIsInNldEhpZGRlbiIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJzaG93MiIsInNldFNob3cyIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwidmFsdWUiLCJzZXRWYWx1ZSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJ2YWx1ZTIiLCJzZXRWYWx1ZTIiLCJmZXRjaERhdGEiLCJfcmVmNCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3lpZWxkJFByb21pc2UkYWxsIiwiUHJvbWlzZSIsImFsbCIsImdldCIsIl95aWVsZCRQcm9taXNlJGFsbDIiLCJyZXNQcm9qZWN0cyIsInJlc0hpZGRlbiIsImRhdGEiLCJyZXZlcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJmaWx0ZXIiLCJyb3ciLCJzb21lIiwicm93MiIsImlkUm93IiwiX2lkIiwic2VsZWN0ZWRJbmRleCIsImZpbmRJbmRleCIsInNlbGVjdGVkSW5kZXgyIiwiaGFuZGxlU2VhcmNoIiwiZSIsInRhcmdldCIsIm5ld0FycmF5IiwicHJvamVjdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicHJvamVjdE51bWJlciIsInRvU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJjdXN0b21lck5hbWUiLCJuZXdBcnJheTIiLCJGcmFnbWVudCIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJ2YXJpYW50Iiwib25DbGljayIsImN1cnNvciIsImhlaWdodCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dZIiwid2lkdGgiLCJvbkNoYW5nZSIsInYiLCJvcmllbnRhdGlvbiIsInN4Iiwicm9sZSIsIm1hcCIsImluZGV4IiwiX3JvdyRjdXN0b21lck5hbWUiLCJrZXkiLCJsYWJlbCIsIlN0cmluZyIsInBhZFN0YXJ0IiwiY29tcG9uZW50IiwidG8iLCJib3JkZXJSYWRpdXMiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiaXRlbSIsInhzIiwiaWQiLCJmdWxsV2lkdGgiLCJ0aXRsZSIsInBsYWNlbWVudCIsInBvc2l0aW9uIiwiZmxvYXQiLCJfcm93JGN1c3RvbWVyTmFtZTIiXSwic291cmNlUm9vdCI6IiJ9