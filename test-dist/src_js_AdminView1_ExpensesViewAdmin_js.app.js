"use strict";
exports.id = "src_js_AdminView1_ExpensesViewAdmin_js";
exports.ids = ["src_js_AdminView1_ExpensesViewAdmin_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/NotificationsNone.js"
/*!***************************************************************!*\
  !*** ./node_modules/@mui/icons-material/NotificationsNone.js ***!
  \***************************************************************/
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
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"
}), 'NotificationsNone');

/***/ },

/***/ "./src/js/AdminView1/ExpensesViewAdmin.js"
/*!************************************************!*\
  !*** ./src/js/AdminView1/ExpensesViewAdmin.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _mui_icons_material_NotificationsNone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/NotificationsNone */ "./node_modules/@mui/icons-material/NotificationsNone.js");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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


















var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
function ExpensesViewAdmin() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_17__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_17__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_18__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          if (navigator.onLine) {
            try {
              var res = yield axios__WEBPACK_IMPORTED_MODULE_14__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_15__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
              var Name = res.data.data.employeeName;
              var Role = res.data.data.role;
              dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_18__.setUser)({
                userName: Name,
                role: Role,
                id: res.data.data._id
              }));
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          } else {
            var resLocalInfo = yield db.employeeUserSchema.get({
              _id: storesUserId
            });
            var _Name = resLocalInfo.employeeName;
            var _Role = resLocalInfo.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_18__.setUser)({
              userName: _Name,
              role: _Role,
              id: resLocalInfo._id
            }));
          }
        } else {
          navigate('/');
        }
      });
      return function fetchUser() {
        return _ref7.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_18__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    expenses = _useState2[0],
    setExpenses = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    invoice = _useState4[0],
    setInvoice = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    hidden = _useState6[0],
    setHidden = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingData = _useState8[0],
    setLoadingData = _useState8[1];
  var apiUrl = 'https://gg-project-production.up.railway.app/endpoint/dailyexpense';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_14__["default"].get(apiUrl).then(res => {
      // Handle the response data here
      setExpenses(res.data.data.reverse());
      setLoadingData(false);
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
      setLoadingData(false);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_14__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_15__.ENDPOINT_URL, "/invoice")).then(res => {
      var _res$data;
      // Handle the response data here
      var result = (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.filter(row => row.Ref && row);
      setInvoice(result);
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
      setLoadingData(false);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_14__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_15__.ENDPOINT_URL, "/hidden")).then(res => {
      // Handle the response data here
      setHidden(res.data.data);
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
      setLoadingData(false);
    });
  }, []);
  var newExpense = expenses.filter(row => !invoice.some(item => row.referenceNumber === item.invoiceNumber)).map(row => _objectSpread(_objectSpread({}, row), {}, {
    id: row._id,
    dateField: dayjs__WEBPACK_IMPORTED_MODULE_16___default()(row.expenseDate).format('DD/MM/YYYY')
  }));
  var filteredRows = newExpense.filter(row => !hidden.some(row2 => row2.idRow === row._id));
  {/** search start */}
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    searchInvExpenses = _useState0[0],
    setSearchInvExpenses = _useState0[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    var storedValue = localStorage.getItem('QuickFilterInvExpenses');
    if (storedValue) {
      setSearchInvExpenses(storedValue);
    }
  });
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filterModel = _React$useState2[0],
    setFilterModel = _React$useState2[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState10 = _slicedToArray(_useState1, 2),
    columnVisibilityModel = _useState10[0],
    setColumnVisibilityModel = _useState10[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsInvExpenses', JSON.stringify(newHidden));
  };
  localStorage.setItem('QuickFilterInvExpenses', filterModel.quickFilterValues[0] || '');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (searchInvExpenses !== undefined) {
      setFilterModel(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        quickFilterValues: [searchInvExpenses]
      }));
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsInvExpenses'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchInvExpenses]);
  {/** search end */}
  var columns = [{
    field: 'dateField',
    headerName: 'Date',
    width: 200
  }, {
    field: 'referenceNumber',
    headerName: 'Reference#',
    width: 150,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "INV-", String(params.row.referenceNumber).padStart(6, '0')), " ")
  }, {
    field: 'customer',
    headerName: 'Customer Name',
    width: 250,
    valueGetter: params => params.row.customerName !== undefined ? params.row.customerName.customerName.toUpperCase() : ''
  }, {
    field: 'expenseType',
    headerName: 'Category',
    width: 250
  }, {
    field: 'view',
    headerName: 'View',
    width: 80,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      disabled: user.data.role === 'User'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
      to: "/ExpensesViewAdminAll/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        color: '#202a5a'
      }
    })))))
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sidemnuandcontent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "headername"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h5"
  }, "Expenses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rightcontent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_NotificationsNone__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "iconesize"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Logout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      color: 'white'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "invoice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_23__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "invoice"
  }, newExpense.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_21__.DataGrid, {
    rows: newExpense,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_22__.GridToolbar
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    checkboxSelection: true,
    disableDensitySelector: true,
    filterModel: filterModel,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_21__.DataGrid, {
    rows: filteredRows,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_22__.GridToolbar
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    checkboxSelection: true,
    disableColumnFilter: true,
    disableDensitySelector: true,
    filterModel: filterModel,
    onFilterModelChange: newModel => setFilterModel(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_no_data_png__WEBPACK_IMPORTED_MODULE_20__,
    style: {
      position: 'relative',
      marginLeft: '19%',
      padding: '25px',
      height: '40%',
      top: '40px',
      width: '55%',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)'
    }
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpensesViewAdmin);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfRXhwZW5zZXNWaWV3QWRtaW5fanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLHdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pELENBQW1EO0FBQy9CO0FBQytCO0FBQ0M7QUFDc0I7QUFDekM7QUFDMkI7QUFDSjtBQUNpSTtBQUM1SDtBQUNuQztBQUNrQjtBQUNsQjtBQUM0QjtBQUMwQjtBQUNoQztBQUNUO0FBQ2tCO0FBQ2hCO0FBRXpDLElBQU13QyxhQUFhLEdBQUc1QiwwREFBTSxDQUFDNkIsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2pEN0MsMERBQUEsQ0FBQ3lCLDhEQUFPLEVBQUFzQixRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU8xQiw4REFBYyxDQUFDMkIsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFD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QjtJQUMvQzZDLDZCQUE2QixFQUFFM0Msa0JBQW1CO0lBQ2pENkIsRUFBRSxFQUFFO01BQUNqQixLQUFLLEVBQUMsTUFBTTtNQUFDL0csZUFBZSxFQUFDLE9BQU87TUFBRStJLE9BQU8sRUFBQztJQUFNO0VBQUUsQ0FDbEUsQ0FHUSxDQUFDLGdCQUNick0sMERBQUEsMkJBQ0pBLDBEQUFBO0lBQUt1TSxHQUFHLEVBQUVuSyw4Q0FBTTtJQUFDNEksS0FBSyxFQUFFO01BQUNHLFFBQVEsRUFBQyxVQUFVO01BQUNxQixVQUFVLEVBQUMsS0FBSztNQUFDSCxPQUFPLEVBQUMsTUFBTTtNQUFFZCxNQUFNLEVBQUMsS0FBSztNQUFDSCxHQUFHLEVBQUMsTUFBTTtNQUFFZixLQUFLLEVBQUMsS0FBSztNQUFFN0csU0FBUyxFQUFDO0lBQStCO0VBQUUsQ0FBQyxDQUMzSixDQUNGLENBRVAsQ0FBQztBQUVOO0FBRUEsaUVBQWVXLGlCQUFpQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9FeHBlbnNlc1ZpZXdBZG1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgMjJjMS4xIDAgMi0uOSAyLTJoLTRjMCAxLjEuOSAyIDIgMm02LTZ2LTVjMC0zLjA3LTEuNjMtNS42NC00LjUtNi4zMlY0YzAtLjgzLS42Ny0xLjUtMS41LTEuNXMtMS41LjY3LTEuNSAxLjV2LjY4QzcuNjQgNS4zNiA2IDcuOTIgNiAxMXY1bC0yIDJ2MWgxNnYtMXptLTIgMUg4di02YzAtMi40OCAxLjUxLTQuNSA0LTQuNXM0IDIuMDIgNCA0LjV6XCJcbn0pLCAnTm90aWZpY2F0aW9uc05vbmUnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LHVzZVN0YXRlIH0gIGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL3ZpZXcuY3NzJztcclxuaW1wb3J0IFNpZGViYXJEYXNoIGZyb20gJy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaCc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0ICcuL1BhZ2VWaWV3L0NoYXJ0dmlldy5jc3MnXHJcbmltcG9ydCBWaXNpYmlsaXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHknO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQge1RhYmxlLE1vZGFsLCBJY29uQnV0dG9uLHN0eWxlZCwgVGFibGVCb2R5LFRhYmxlQ2VsbCxUYWJsZUhlYWQsVGFibGVSb3csQ2hlY2tib3gsIFRhYmxlQ29udGFpbmVyLCBQYXBlciwgVHlwb2dyYXBoeSwgQm94LCBBdXRvY29tcGxldGUsVGV4dEZpZWxkLEJhY2tkcm9wIH0gIGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgVG9vbHRpcCx7dG9vbHRpcENsYXNzZXN9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vaW1nL25vLWRhdGEucG5nJztcclxuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRUb29sYmFyIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50L0xvYWRlcic7XHJcblxyXG5jb25zdCBEZWxldGVUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5cclxuZnVuY3Rpb24gRXhwZW5zZXNWaWV3QWRtaW4oKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgaWYgKG5hdmlnYXRvci5vbkxpbmUpIHtcclxuICAgICAgIHRyeSB7XHJcbiAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0ICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7dXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUsIGlkOnJlcy5kYXRhLmRhdGEuX2lkfSkpO1xyXG4gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICB9XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmVzTG9jYWxJbmZvID0gYXdhaXQgZGIuZW1wbG95ZWVVc2VyU2NoZW1hLmdldCh7X2lkOnN0b3Jlc1VzZXJJZH0pXHJcbiAgICAgIGNvbnN0IE5hbWUgPSByZXNMb2NhbEluZm8uZW1wbG95ZWVOYW1lO1xyXG4gICAgICBjb25zdCBSb2xlID0gcmVzTG9jYWxJbmZvLnJvbGU7XHJcbiAgICAgIGRpc3BhdGNoKHNldFVzZXIoe3VzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlLCBpZDpyZXNMb2NhbEluZm8uX2lkfSkpO1xyXG4gICAgIH1cclxuICAgIH1lbHNlIHtcclxuICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSxbZGlzcGF0Y2hdKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBbZXhwZW5zZXMsc2V0RXhwZW5zZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbnZvaWNlLHNldEludm9pY2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly9nZy1wcm9qZWN0LXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvZW5kcG9pbnQvZGFpbHlleHBlbnNlJztcclxuICBcclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgYXhpb3MuZ2V0KGFwaVVybClcclxuICAudGhlbihyZXMgPT4ge1xyXG4gICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBkYXRhIGhlcmVcclxuICAgIHNldEV4cGVuc2VzKHJlcy5kYXRhLmRhdGEucmV2ZXJzZSgpKTtcclxuICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxyXG4gIH0pXHJcbiAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgIC8vIEhhbmRsZSBlcnJvcnNcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgfSk7XHJcbn0sW10pXHJcbnVzZUVmZmVjdCgoKT0+IHtcclxuICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pbnZvaWNlYClcclxuICAudGhlbihyZXMgPT4ge1xyXG4gICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBkYXRhIGhlcmVcclxuICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdyk9PiByb3cuUmVmICYmIChcclxuICAgICAgcm93XHJcbiAgICApKVxyXG4gICAgc2V0SW52b2ljZShyZXN1bHQpXHJcbiAgfSlcclxuICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgLy8gSGFuZGxlIGVycm9yc1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcclxuICB9KTtcclxuICB9LFtdKVxyXG4gIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2hpZGRlbmApXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGEgaGVyZVxyXG4gICAgICBzZXRIaWRkZW4ocmVzLmRhdGEuZGF0YSlcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAvLyBIYW5kbGUgZXJyb3JzXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcclxuICAgIH0pO1xyXG4gIH0sW10pXHJcbiAgY29uc3QgbmV3RXhwZW5zZSA9IGV4cGVuc2VzLmZpbHRlcigocm93KT0+ICFpbnZvaWNlLnNvbWUoKGl0ZW0pPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cucmVmZXJlbmNlTnVtYmVyID09PSBpdGVtLmludm9pY2VOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyb3cpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcm93Ll9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRmllbGQ6IGRheWpzKHJvdy5leHBlbnNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpIFxyXG4gIGNvbnN0IGZpbHRlcmVkUm93cyA9IG5ld0V4cGVuc2UuZmlsdGVyKHJvdz0+ICFoaWRkZW4uc29tZSgocm93Mik9PiByb3cyLmlkUm93ID09PSByb3cuX2lkKSlcclxuXHJcbiAgey8qKiBzZWFyY2ggc3RhcnQgKi99XHJcbmNvbnN0IFtzZWFyY2hJbnZFeHBlbnNlcywgc2V0U2VhcmNoSW52RXhwZW5zZXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbnVzZVN0YXRlKCgpPT57XHJcbiAgY29uc3Qgc3RvcmVkVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUXVpY2tGaWx0ZXJJbnZFeHBlbnNlcycpXHJcbiAgaWYgKHN0b3JlZFZhbHVlKSB7XHJcbiAgICBzZXRTZWFyY2hJbnZFeHBlbnNlcyhzdG9yZWRWYWx1ZSlcclxuICB9XHJcbiAgXHJcbn0pXHJcbmNvbnN0IFtmaWx0ZXJNb2RlbCwgc2V0RmlsdGVyTW9kZWxdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gIGl0ZW1zOiBbXSxcclxuICBxdWlja0ZpbHRlckV4Y2x1ZGVIaWRkZW5Db2x1bW5zOiB0cnVlLFxyXG4gIHF1aWNrRmlsdGVyVmFsdWVzOiBbXSxcclxufSk7XHJcbiAgY29uc3QgW2NvbHVtblZpc2liaWxpdHlNb2RlbCwgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBoYW5kZWxIaWRkZW5Db2x1bW4gPSAobmV3SGlkZGVuKSA9PiB7XHJcbiAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwobmV3SGlkZGVuKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0hpZGRlbkNvbHVtbnNJbnZFeHBlbnNlcycsSlNPTi5zdHJpbmdpZnkobmV3SGlkZGVuKSlcclxuICB9XHJcbiAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdRdWlja0ZpbHRlckludkV4cGVuc2VzJyxmaWx0ZXJNb2RlbC5xdWlja0ZpbHRlclZhbHVlc1swXSB8fCAnJylcclxuICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZiAoc2VhcmNoSW52RXhwZW5zZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBzZXRGaWx0ZXJNb2RlbCgocHJldlN0YXRlKT0+ICh7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgIHF1aWNrRmlsdGVyVmFsdWVzOiAgWyBzZWFyY2hJbnZFeHBlbnNlc11cclxuICAgICAgfSkpXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdG9yZWRDb2x1bW5zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnSGlkZGVuQ29sdW1uc0ludkV4cGVuc2VzJykpXHJcbiAgICBpZiAoc3RvcmVkQ29sdW1ucykge1xyXG4gICAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwoc3RvcmVkQ29sdW1ucylcclxuICAgIH1cclxuXHJcbiAgIH0sW3NlYXJjaEludkV4cGVuc2VzXSlcclxuey8qKiBzZWFyY2ggZW5kICovfVxyXG5cclxuY29uc3QgY29sdW1ucyA9IFtcclxuICB7ZmllbGQ6ICdkYXRlRmllbGQnLCBoZWFkZXJOYW1lOiAnRGF0ZScsIHdpZHRoOjIwMH0sXHJcbiAge2ZpZWxkOiAncmVmZXJlbmNlTnVtYmVyJywgaGVhZGVyTmFtZTogJ1JlZmVyZW5jZSMnLCB3aWR0aDoxNTAsIHJlbmRlckNlbGw6IChwYXJhbXMpPT4oIDxkaXY+IDxzcGFuPklOVi17U3RyaW5nKHBhcmFtcy5yb3cucmVmZXJlbmNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfTwvc3Bhbj4gPC9kaXY+ICl9LFxyXG4gIHtmaWVsZDogJ2N1c3RvbWVyJywgaGVhZGVyTmFtZTogJ0N1c3RvbWVyIE5hbWUnLCB3aWR0aDoyNTAsIHZhbHVlR2V0dGVyOihwYXJhbXMpPT4gcGFyYW1zLnJvdy5jdXN0b21lck5hbWUhPT0gdW5kZWZpbmVkP3BhcmFtcy5yb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZS50b1VwcGVyQ2FzZSgpOicnfSxcclxuICB7ZmllbGQ6ICdleHBlbnNlVHlwZScsIGhlYWRlck5hbWU6ICdDYXRlZ29yeScsIHdpZHRoOjI1MH0sXHJcbiAge2ZpZWxkOiAndmlldycsIGhlYWRlck5hbWU6ICdWaWV3Jywgd2lkdGg6ODAsIHJlbmRlckNlbGw6KHBhcmFtcyk9PiAoXHJcbiAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJWaWV3XCI+XHJcbiAgICA8c3Bhbj5cclxuICAgICAgIDxJY29uQnV0dG9uIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfT5cclxuICAgICAgIDxOYXZMaW5rIHRvPXtgL0V4cGVuc2VzVmlld0FkbWluQWxsLyR7cGFyYW1zLnJvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICA8VmlzaWJpbGl0eUljb24gc3R5bGU9e3tjb2xvcjonIzIwMmE1YSd9fS8+IFxyXG4gICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgIDwvc3Bhbj5cclxuPC9WaWV3VG9vbHRpcD5cclxuICAgICBcclxuICApIH1cclxuXVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZW1udWFuZGNvbnRlbnQnPlxyXG4gICAgICAgPFNpZGViYXJEYXNoLz5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJuYW1lJz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5FeHBlbnNlczwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHRjb250ZW50Jz5cclxuICAgICAgICAgIDxOb3RpZmljYXRpb25zTm9uZUljb24gY2xhc3NOYW1lPSdpY29uZXNpemUnLz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiTG9nb3V0XCI+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3tjb2xvcjond2hpdGUnfX0gLz4gXHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgPGJyLz5cclxuICAgICB7XHJcbiAgICAgIGxvYWRpbmdEYXRhPzxkaXYgY2xhc3NOYW1lPSdpbnZvaWNlJz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246J3JlbGF0aXZlJywgdG9wOicxMjBweCd9fT5cclxuICAgICAgICAgIDxMb2FkZXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj46KFxyXG48ZGl2IGNsYXNzTmFtZT0naW52b2ljZSc+XHJcbiAgICAgIHtuZXdFeHBlbnNlLmxlbmd0aCA+IDAgPyAoICAgXHJcbiAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OjYwMCwgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nPyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e25ld0V4cGVuc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RzPXt7dG9vbGJhcjogR3JpZFRvb2xiYXJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1F1aWNrRmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludE9wdGlvbnM6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVRvb2xiYXJCdXR0b246IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94U2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURlbnNpdHlTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck1vZGVsPXtmaWx0ZXJNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZpbHRlck1vZGVsQ2hhbmdlPXsobmV3TW9kZWwpID0+IGhhbmRsZUZpbHRlcihuZXdNb2RlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uVmlzaWJpbGl0eU1vZGVsID0ge2NvbHVtblZpc2liaWxpdHlNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZT17aGFuZGVsSGlkZGVuQ29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e3dpZHRoOicxMDAlJyxiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJywgcGFkZGluZzonMTBweCd9fVxyXG4gICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICk6KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17ZmlsdGVyZWRSb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90cz17e3Rvb2xiYXI6IEdyaWRUb29sYmFyfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dRdWlja0ZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRPcHRpb25zOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVUb29sYmFyQnV0dG9uOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDb2x1bW5GaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRGVuc2l0eVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTW9kZWw9e2ZpbHRlck1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uRmlsdGVyTW9kZWxDaGFuZ2U9eyhuZXdNb2RlbCkgPT4gc2V0RmlsdGVyTW9kZWwobmV3TW9kZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZpc2liaWxpdHlNb2RlbCA9IHtjb2x1bW5WaXNpYmlsaXR5TW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25Db2x1bW5WaXNpYmlsaXR5TW9kZWxDaGFuZ2U9e2hhbmRlbEhpZGRlbkNvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3t3aWR0aDonMTAwJScsYmFja2dyb3VuZENvbG9yOid3aGl0ZScsIHBhZGRpbmc6JzEwcHgnfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICApIDogPGRpdj5cclxuICAgICAgICAgPGltZyBzcmM9e0ltYWdlfSBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZScsbWFyZ2luTGVmdDonMTklJyxwYWRkaW5nOicyNXB4JywgaGVpZ2h0Oic0MCUnLHRvcDonNDBweCcsIHdpZHRoOic1NSUnLCBib3hTaGFkb3c6JzAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpJ319Lz5cclxuICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgPC9kaXY+KVxyXG4gICAgIH1cclxuPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBlbnNlc1ZpZXdBZG1pblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIlZpc2liaWxpdHlJY29uIiwiTmF2TGluayIsInVzZU5hdmlnYXRlIiwiVGFibGUiLCJNb2RhbCIsIkljb25CdXR0b24iLCJzdHlsZWQiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIkNoZWNrYm94IiwiVGFibGVDb250YWluZXIiLCJQYXBlciIsIlR5cG9ncmFwaHkiLCJCb3giLCJBdXRvY29tcGxldGUiLCJUZXh0RmllbGQiLCJCYWNrZHJvcCIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiZGF5anMiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiSW1hZ2UiLCJEYXRhR3JpZCIsIkdyaWRUb29sYmFyIiwiTG9hZGVyIiwiRGVsZXRlVG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiRWRpdFRvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIlZpZXdUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJFeHBlbnNlc1ZpZXdBZG1pbiIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY3IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJpZCIsIl9pZCIsImVycm9yIiwiY29uc29sZSIsInJlc0xvY2FsSW5mbyIsImRiIiwiZW1wbG95ZWVVc2VyU2NoZW1hIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZXhwZW5zZXMiLCJzZXRFeHBlbnNlcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiaW52b2ljZSIsInNldEludm9pY2UiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImhpZGRlbiIsInNldEhpZGRlbiIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsImFwaVVybCIsInRoZW4iLCJyZXZlcnNlIiwiY2F0Y2giLCJfcmVzJGRhdGEiLCJyZXN1bHQiLCJmaWx0ZXIiLCJyb3ciLCJSZWYiLCJuZXdFeHBlbnNlIiwic29tZSIsIml0ZW0iLCJyZWZlcmVuY2VOdW1iZXIiLCJpbnZvaWNlTnVtYmVyIiwibWFwIiwiX29iamVjdFNwcmVhZCIsImRhdGVGaWVsZCIsImV4cGVuc2VEYXRlIiwiZm9ybWF0IiwiZmlsdGVyZWRSb3dzIiwicm93MiIsImlkUm93IiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJzZWFyY2hJbnZFeHBlbnNlcyIsInNldFNlYXJjaEludkV4cGVuc2VzIiwic3RvcmVkVmFsdWUiLCJfUmVhY3QkdXNlU3RhdGUiLCJpdGVtcyIsInF1aWNrRmlsdGVyRXhjbHVkZUhpZGRlbkNvbHVtbnMiLCJxdWlja0ZpbHRlclZhbHVlcyIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJmaWx0ZXJNb2RlbCIsInNldEZpbHRlck1vZGVsIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwiY29sdW1uVmlzaWJpbGl0eU1vZGVsIiwic2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsIiwiaGFuZGVsSGlkZGVuQ29sdW1uIiwibmV3SGlkZGVuIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJwcmV2U3RhdGUiLCJzdG9yZWRDb2x1bW5zIiwicGFyc2UiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwid2lkdGgiLCJyZW5kZXJDZWxsIiwicGFyYW1zIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJ2YWx1ZUdldHRlciIsImN1c3RvbWVyTmFtZSIsInRvVXBwZXJDYXNlIiwidGl0bGUiLCJkaXNhYmxlZCIsInRvIiwic3R5bGUiLCJ2YXJpYW50Iiwib25DbGljayIsInBvc2l0aW9uIiwidG9wIiwibGVuZ3RoIiwic3giLCJoZWlnaHQiLCJyb3dzIiwic2xvdHMiLCJ0b29sYmFyIiwic2xvdFByb3BzIiwic2hvd1F1aWNrRmlsdGVyIiwicHJpbnRPcHRpb25zIiwiZGlzYWJsZVRvb2xiYXJCdXR0b24iLCJjaGVja2JveFNlbGVjdGlvbiIsImRpc2FibGVEZW5zaXR5U2VsZWN0b3IiLCJvbkZpbHRlck1vZGVsQ2hhbmdlIiwibmV3TW9kZWwiLCJoYW5kbGVGaWx0ZXIiLCJvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZSIsInBhZGRpbmciLCJkaXNhYmxlQ29sdW1uRmlsdGVyIiwic3JjIiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=