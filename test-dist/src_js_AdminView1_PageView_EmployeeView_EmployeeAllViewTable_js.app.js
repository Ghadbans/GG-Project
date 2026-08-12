"use strict";
exports.id = "src_js_AdminView1_PageView_EmployeeView_EmployeeAllViewTable_js";
exports.ids = ["src_js_AdminView1_PageView_EmployeeView_EmployeeAllViewTable_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/Add.js"
/*!*************************************************!*\
  !*** ./node_modules/@mui/icons-material/Add.js ***!
  \*************************************************/
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), 'Add');

/***/ },

/***/ "./node_modules/@mui/icons-material/WarningAmber.js"
/*!**********************************************************!*\
  !*** ./node_modules/@mui/icons-material/WarningAmber.js ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


"use client";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));
var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _default = exports["default"] = (0, _createSvgIcon.default)([/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12 5.99 19.53 19H4.47zM12 2 1 21h22z"
}, "0"), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M13 16h-2v2h2zm0-6h-2v5h2z"
}, "1")], 'WarningAmber');

/***/ },

/***/ "./src/js/AdminView1/PageView/EmployeeView/EmployeeAllViewTable.js"
/*!*************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EmployeeView/EmployeeAllViewTable.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/ConfirmDeleteModal */ "./src/js/component/ConfirmDeleteModal.js");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/icons-material/Add */ "./node_modules/@mui/icons-material/Add.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../img/no-data.png */ "./src/js/img/no-data.png");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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


















var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6__["default"].tooltip)]: {
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
function EmployeeAllViewTable() {
  var _employee$find;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_27__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_27__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_28__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    if (storesUserId) {
      axios__WEBPACK_IMPORTED_MODULE_22__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_23__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId)).then(res => {
        // Handle the response data here
        var Name = res.data.data.employeeName;
        var Role = res.data.data.role;
        dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_28__.setUser)({
          userName: Name,
          role: Role
        }));
      }).catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
        dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_28__.logOut)());
      });
    } else {
      console.log('no id');
      navigate('/');
    }
  }, [dispatch]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    employee = _useState2[0],
    setEmployee = _useState2[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_23__.ENDPOINT_URL, "/employee");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_22__["default"].get(apiUrl).then(res => {
      // Handle the response data here
      setEmployee(res.data.data);
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  }, []);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    DeleteId = _useState6[0],
    setDeleteId = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    modalOpenLoading = _useState0[0],
    setModalOpenLoading = _useState0[1];
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    setOpen(false);
  };
  var handleCloseModal = () => {
    window.location.reload();
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_22__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_23__.ENDPOINT_URL, "/delete-employee/").concat(DeleteId));
        if (res) {
          setOpen(false);
          handleOpenModal();
        }
      } catch (error) {
        alert(error);
      }
    });
    return function handleDelete() {
      return _ref7.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "allTableContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Add",
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disabled: user.data.role === 'User'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, {
    to: "/EmployeeFormView",
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_24__["default"], {
    className: "btnCustomer"
  }))))), employee.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_12__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "center"
  }, "Join Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "center"
  }, "Employee Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "center"
  }, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "center"
  }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "center"
  }, "Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "center"
  }, "Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "left"
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, employee === null || employee === void 0 ? void 0 : employee.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "center"
  }, dayjs__WEBPACK_IMPORTED_MODULE_25___default()(row.joinDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "center"
  }, row.employeeName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "center"
  }, row.employeePhone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "center"
  }, row.employeeAddress), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "center"
  }, row.employeeRole), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "center"
  }, row.department), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: "center",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "View"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disabled: user.data.role === 'User'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, {
    to: "/EmployeeViewAdminAll/".concat(row._id),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      display: 'flex',
      gap: '10px',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
    title: "Edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disabled: user.data.role === 'User'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, {
    to: "/EmployeeUpdateView/".concat(row._id),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      color: 'gray'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
    title: "Delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => handleOpen(row._id),
    disabled: user.data.role === 'User'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  }))))))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_no_data_png__WEBPACK_IMPORTED_MODULE_30__,
    style: {
      position: 'relative',
      marginLeft: '19%',
      padding: '25px',
      height: '35%',
      top: '40px',
      width: '50%',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    open: open,
    handleClose: handleClose,
    handleDelete: handleDelete,
    itemName: ((_employee$find = employee.find(e => e._id === DeleteId)) === null || _employee$find === void 0 ? void 0 : _employee$find.employeeName) || "this employee"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: modalOpenLoading,
    onClose: handleCloseModal,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_18__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_29__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_26__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data successfully deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseModal,
    className: "btnCustomer"
  }, "Close")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeAllViewTable);

/***/ },

/***/ "./src/js/component/ConfirmDeleteModal.js"
/*!************************************************!*\
  !*** ./src/js/component/ConfirmDeleteModal.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_icons_material_WarningAmber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/WarningAmber */ "./node_modules/@mui/icons-material/WarningAmber.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;



var style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
  borderTop: '8px solid #d32f2f' // Red warning border
};
var ConfirmDeleteModal = _ref => {
  var open = _ref.open,
    handleClose = _ref.handleClose,
    handleDelete = _ref.handleDelete,
    itemName = _ref.itemName;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    confirmText = _useState2[0],
    setConfirmText = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isDisabled = _useState4[0],
    setIsDisabled = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (confirmText === 'DELETE') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [confirmText]);
  var onConfirm = () => {
    handleDelete();
    setConfirmText('');
    handleClose();
  };
  var onClose = () => {
    setConfirmText('');
    handleClose();
    handleClose();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: open,
    onClose: onClose,
    "aria-labelledby": "confirm-delete-title",
    "aria-describedby": "confirm-delete-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "confirm-delete-title",
    variant: "h5",
    component: "h2",
    sx: {
      display: 'flex',
      alignItems: 'center',
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_WarningAmber__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      mr: 1
    }
  }), " Confirm Deletion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 2,
    sx: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: onClose,
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1",
    sx: {
      mt: 2,
      mb: 1
    }
  }, "Are you sure you want to delete ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, itemName || 'this record'), "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body2",
    color: "text.secondary",
    sx: {
      mb: 3
    }
  }, "This action is irreversible and may affect linked data.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body2",
    sx: {
      mb: 1,
      fontWeight: 'medium'
    }
  }, "Please type ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, "DELETE"), " to confirm:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    size: "small",
    variant: "outlined",
    placeholder: "Type DELETE here",
    value: confirmText,
    onChange: e => setConfirmText(e.target.value),
    autoFocus: true,
    error: confirmText !== '' && confirmText !== 'DELETE'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    sx: {
      mt: 3,
      display: 'flex',
      gap: 2,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: onClose,
    variant: "outlined",
    sx: {
      color: 'gray',
      borderColor: 'gray',
      '&:hover': {
        borderColor: '#202a5a',
        color: '#202a5a'
      }
    }
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: onConfirm,
    variant: "contained",
    disabled: isDisabled,
    sx: {
      bgcolor: '#d32f2f',
      '&:hover': {
        bgcolor: '#b71c1c'
      },
      '&:disabled': {
        bgcolor: '#ef9a9a',
        color: 'white'
      }
    }
  }, "Delete Irreversibly")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmDeleteModal);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRW1wbG95ZWVWaWV3X0VtcGxveWVlQWxsVmlld1RhYmxlX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyxVOzs7Ozs7Ozs7O0FDWlk7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDLHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRCxDQUFtRDtBQUNvQjtBQUM5QztBQUNtQztBQUNaO0FBQ2E7QUFDVDtBQUNHO0FBQ2tGO0FBQy9HO0FBQ3dCO0FBQ1I7QUFDaEI7QUFDb0M7QUFDVjtBQUNHO0FBQytCO0FBQ3ZDO0FBQ0Y7QUFDN0MsSUFBTW9DLGFBQWEsR0FBR3RCLDBEQUFNLENBQUN1QixJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDakR6QywwREFBQSxDQUFDTSw2REFBTyxFQUFBcUMsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7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QUNsRnhLLDBEQUFBLENBQUM0SyxxREFBTTtJQUNIbkIsT0FBTyxFQUFFUyxPQUFRO0lBQ2pCMEIsT0FBTyxFQUFDLFVBQVU7SUFDbEJ0QixFQUFFLEVBQUU7TUFBRW5ILEtBQUssRUFBRSxNQUFNO01BQUVxSixXQUFXLEVBQUUsTUFBTTtNQUFFLFNBQVMsRUFBRTtRQUFFQSxXQUFXLEVBQUUsU0FBUztRQUFFckosS0FBSyxFQUFFO01BQVU7SUFBRTtFQUFFLEdBQ3ZHLFFBRU8sQ0FBQyxlQUNUbkQsMERBQUEsQ0FBQzRLLHFEQUFNO0lBQ0huQixPQUFPLEVBQUU4QixTQUFVO0lBQ25CSyxPQUFPLEVBQUMsV0FBVztJQUNuQnJELFFBQVEsRUFBRThDLFVBQVc7SUFDckJmLEVBQUUsRUFBRTtNQUNBakcsT0FBTyxFQUFFLFNBQVM7TUFDbEIsU0FBUyxFQUFFO1FBQUVBLE9BQU8sRUFBRTtNQUFVLENBQUM7TUFDakMsWUFBWSxFQUFFO1FBQUVBLE9BQU8sRUFBRSxTQUFTO1FBQUVsQixLQUFLLEVBQUU7TUFBUTtJQUN2RDtFQUFFLEdBQ0wscUJBRU8sQ0FDTixDQUNKLENBQ0wsQ0FDRixDQUFDO0FBRWhCLENBQUM7QUFFRCxpRUFBZWhELGtCQUFrQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL0FkZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvV2FybmluZ0FtYmVyLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9FbXBsb3llZVZpZXcvRW1wbG95ZWVBbGxWaWV3VGFibGUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvQ29uZmlybURlbGV0ZU1vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2elwiXG59KSwgJ0FkZCcpOyIsIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoWy8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0xMiA1Ljk5IDE5LjUzIDE5SDQuNDd6TTEyIDIgMSAyMWgyMnpcIlxufSwgXCIwXCIpLCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTMgMTZoLTJ2Mmgyem0wLTZoLTJ2NWgyelwiXG59LCBcIjFcIildLCAnV2FybmluZ0FtYmVyJyk7IiwiaW1wb3J0IFJlYWN0ICwge3VzZUVmZmVjdCwgdXNlU3RhdGUgfSAgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb25maXJtRGVsZXRlTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0NvbmZpcm1EZWxldGVNb2RhbCc7XHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcydcclxuaW1wb3J0IFZpc2liaWxpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVmlzaWJpbGl0eSc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgVG9vbHRpcCx7dG9vbHRpcENsYXNzZXN9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgTmF2TGluayx1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQge1RhYmxlLFBhcGVyLCBJY29uQnV0dG9uLHN0eWxlZCxUYWJsZUJvZHksVGFibGVDZWxsLFRhYmxlSGVhZCxUYWJsZVJvdywgVGFibGVDb250YWluZXIsTW9kYWwsQmFja2Ryb3AsQm94IH0gIGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgQWRkIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi8uLi9pbWcvbm8tZGF0YS5wbmcnO1xyXG5jb25zdCBEZWxldGVUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIEVtcGxveWVlQWxsVmlld1RhYmxlKCkge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaD0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGEgaGVyZVxyXG4gICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFVzZXIoe3VzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlfSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvcnNcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnbm8gaWQnKTtcclxuICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgIH1cclxuICB9LFtkaXNwYXRjaF0pXHJcbiAgY29uc3QgW2VtcGxveWVlLHNldEVtcGxveWVlXT0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGNvbnN0IGFwaVVybCA9IGAke0VORFBPSU5UX1VSTH0vZW1wbG95ZWVgO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgYXhpb3MuZ2V0KGFwaVVybClcclxuICAudGhlbihyZXMgPT4ge1xyXG4gICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBkYXRhIGhlcmVcclxuICAgIHNldEVtcGxveWVlKHJlcy5kYXRhLmRhdGEpO1xyXG4gIH0pXHJcbiAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgIC8vIEhhbmRsZSBlcnJvcnNcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gIH0pO1xyXG59LFtdKVxyXG5jb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbmNvbnN0IFtEZWxldGVJZCwgc2V0RGVsZXRlSWRdPSB1c2VTdGF0ZShudWxsKTtcclxuY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ109IHVzZVN0YXRlKGZhbHNlKTtcclxuY29uc3QgW21vZGFsT3BlbkxvYWRpbmcsc2V0TW9kYWxPcGVuTG9hZGluZ109IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbmNvbnN0IGhhbmRsZU9wZW4gPSAoaWQpID0+IHtcclxuICBzZXRPcGVuKHRydWUpO1xyXG4gIHNldERlbGV0ZUlkKGlkKVxyXG59O1xyXG5jb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgc2V0TW9kYWxPcGVuTG9hZGluZyh0cnVlKTtcclxuICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfSwgNTAwKTtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gIHNldE9wZW4oZmFsc2UpO1xyXG59O1xyXG5jb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59O1xyXG5jb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtFTkRQT0lOVF9VUkx9L2RlbGV0ZS1lbXBsb3llZS8ke0RlbGV0ZUlkfWApO1xyXG4gICAgaWYgKHJlcykge1xyXG4gICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgaGFuZGxlT3Blbk1vZGFsKCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGVycm9yKTtcclxuICB9XHJcbn07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+IFxyXG4gPGRpdiBjbGFzc05hbWU9J2FsbFRhYmxlQ29udGFpbmVyJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZScsZmxvYXQ6J3JpZ2h0JyxtYXJnaW46JzEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvRW1wbG95ZWVGb3JtVmlld1wiIGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG5DdXN0b21lcicvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW1wbG95ZWUubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICA8VGFibGUgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319PlxyXG4gIDxUYWJsZUhlYWQgPlxyXG4gICAgPFRhYmxlUm93PlxyXG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+Sm9pbiBEYXRlPC9UYWJsZUNlbGw+XHJcbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5FbXBsb3llZSBOYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5QaG9uZTwvVGFibGVDZWxsPlxyXG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+QWRkcmVzczwvVGFibGVDZWxsPlxyXG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+Um9sZTwvVGFibGVDZWxsPlxyXG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+RGVwYXJ0bWVudDwvVGFibGVDZWxsPlxyXG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwibGVmdFwiPkFjdGlvbjwvVGFibGVDZWxsPlxyXG4gICAgPC9UYWJsZVJvdz5cclxuICA8L1RhYmxlSGVhZD5cclxuICA8VGFibGVCb2R5PlxyXG4gICAge2VtcGxveWVlPy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICA8VGFibGVSb3dcclxuICAgICAgICBrZXk9e3Jvdy5faWR9ICA+XHJcbiAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntkYXlqcyhyb3cuam9pbkRhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cm93LmVtcGxveWVlTmFtZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+e3Jvdy5lbXBsb3llZVBob25lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cm93LmVtcGxveWVlQWRkcmVzc308L1RhYmxlQ2VsbD5cclxuICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+e3Jvdy5lbXBsb3llZVJvbGV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntyb3cuZGVwYXJ0bWVudH08L1RhYmxlQ2VsbD5cclxuICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGdhcDonNXB4J319PiAgXHJcbiAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJWaWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvRW1wbG95ZWVWaWV3QWRtaW5BbGwvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5SWNvbiBzdHlsZT17e2NvbG9yOicjMjAyYTVhJ319Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxnYXA6JzEwcHgnLHBvc2l0aW9uOidyZWxhdGl2ZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdFRvb2x0aXAgdGl0bGU9XCJFZGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvRW1wbG95ZWVVcGRhdGVWaWV3LyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gc3R5bGU9e3tjb2xvcjonZ3JheSd9fS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9FZGl0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlVG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3Blbihyb3cuX2lkKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInLGNvbG9yOidyZWQnfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RlbGV0ZVRvb2x0aXA+IFxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICA8L1RhYmxlUm93PlxyXG4gICAgKSl9XHJcbiAgPC9UYWJsZUJvZHk+XHJcbiAgICAgIFxyXG4gIDwvVGFibGU+XHJcbiAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICApIDogPGRpdj5cclxuICAgPGltZyBzcmM9e0ltYWdlfSBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZScsbWFyZ2luTGVmdDonMTklJyxwYWRkaW5nOicyNXB4JywgaGVpZ2h0OiczNSUnLHRvcDonNDBweCcsIHdpZHRoOic1MCUnLCBib3hTaGFkb3c6JzAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpJ319Lz5cclxuICAgPC9kaXY+fVxyXG4gIDwvZGl2PlxyXG4gIDxDb25maXJtRGVsZXRlTW9kYWwgb3Blbj17b3Blbn0gaGFuZGxlQ2xvc2U9e2hhbmRsZUNsb3NlfSBoYW5kbGVEZWxldGU9e2hhbmRsZURlbGV0ZX0gaXRlbU5hbWU9e2VtcGxveWVlLmZpbmQoZSA9PiBlLl9pZCA9PT0gRGVsZXRlSWQpPy5lbXBsb3llZU5hbWUgfHwgXCJ0aGlzIGVtcGxveWVlXCJ9IC8+XHJcbiAgICA8TW9kYWxcclxuICAgICAgb3Blbj17bW9kYWxPcGVuTG9hZGluZ31cclxuICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICAgICB9fVxyXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICA+XHJcbiAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2xvYWRpbmc/KDxMb2FkZXIvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICA6KCBcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3tjb2xvcjonZ3JlZW4nLGhlaWdodDonNDBweCcsIHdpZHRoOic0MHB4J319Lz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj4gRGF0YSBzdWNjZXNzZnVsbHkgZGVsZXRlZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZ2FwOic2MHB4JyxqdXN0aWZ5Q29udGVudDonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L01vZGFsPlxyXG4gIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95ZWVBbGxWaWV3VGFibGVcclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vZGFsLCBCb3gsIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgQnV0dG9uLCBHcmlkLCBJY29uQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgV2FybmluZ0FtYmVySWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1dhcm5pbmdBbWJlcic7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgd2lkdGg6IDQ1MCxcbiAgICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXG4gICAgYm94U2hhZG93OiAyNCxcbiAgICBwOiA0LFxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgYm9yZGVyVG9wOiAnOHB4IHNvbGlkICNkMzJmMmYnIC8vIFJlZCB3YXJuaW5nIGJvcmRlclxufTtcblxuY29uc3QgQ29uZmlybURlbGV0ZU1vZGFsID0gKHsgb3BlbiwgaGFuZGxlQ2xvc2UsIGhhbmRsZURlbGV0ZSwgaXRlbU5hbWUgfSkgPT4ge1xuICAgIGNvbnN0IFtjb25maXJtVGV4dCwgc2V0Q29uZmlybVRleHRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtpc0Rpc2FibGVkLCBzZXRJc0Rpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGNvbmZpcm1UZXh0ID09PSAnREVMRVRFJykge1xuICAgICAgICAgICAgc2V0SXNEaXNhYmxlZChmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRJc0Rpc2FibGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW2NvbmZpcm1UZXh0XSk7XG5cbiAgICBjb25zdCBvbkNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIGhhbmRsZURlbGV0ZSgpO1xuICAgICAgICBzZXRDb25maXJtVGV4dCgnJyk7XG4gICAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHNldENvbmZpcm1UZXh0KCcnKTtcbiAgICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbmZpcm0tZGVsZXRlLXRpdGxlXCJcbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjb25maXJtLWRlbGV0ZS1kZXNjcmlwdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwiY29uZmlybS1kZWxldGUtdGl0bGVcIiB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiIHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGNvbG9yOiAnI2QzMmYyZicsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2FybmluZ0FtYmVySWNvbiBzeD17eyBtcjogMSB9fSAvPiBDb25maXJtIERlbGV0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3g9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17b25DbG9zZX0gc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgbXQ6IDIsIG1iOiAxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgPHN0cm9uZz57aXRlbU5hbWUgfHwgJ3RoaXMgcmVjb3JkJ308L3N0cm9uZz4/XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbWI6IDMgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBhY3Rpb24gaXMgaXJyZXZlcnNpYmxlIGFuZCBtYXkgYWZmZWN0IGxpbmtlZCBkYXRhLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3g9e3sgbWI6IDEsIGZvbnRXZWlnaHQ6ICdtZWRpdW0nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSB0eXBlIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnI2QzMmYyZicsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5ERUxFVEU8L3NwYW4+IHRvIGNvbmZpcm06XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBERUxFVEUgaGVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpcm1UZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29uZmlybVRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtjb25maXJtVGV4dCAhPT0gJycgJiYgY29uZmlybVRleHQgIT09ICdERUxFVEUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyBtdDogMywgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDIsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBjb2xvcjogJ2dyYXknLCBib3JkZXJDb2xvcjogJ2dyYXknLCAnJjpob3Zlcic6IHsgYm9yZGVyQ29sb3I6ICcjMjAyYTVhJywgY29sb3I6ICcjMjAyYTVhJyB9IH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Db25maXJtfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICcjZDMyZjJmJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzogeyBiZ2NvbG9yOiAnI2I3MWMxYycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6ZGlzYWJsZWQnOiB7IGJnY29sb3I6ICcjZWY5YTlhJywgY29sb3I6ICd3aGl0ZScgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIElycmV2ZXJzaWJseVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybURlbGV0ZU1vZGFsO1xuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29uZmlybURlbGV0ZU1vZGFsIiwiVmlzaWJpbGl0eUljb24iLCJFZGl0SWNvbiIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIkRlbGV0ZUljb24iLCJOYXZMaW5rIiwidXNlTmF2aWdhdGUiLCJUYWJsZSIsIlBhcGVyIiwiSWNvbkJ1dHRvbiIsInN0eWxlZCIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiVGFibGVDb250YWluZXIiLCJNb2RhbCIsIkJhY2tkcm9wIiwiQm94IiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJBZGQiLCJkYXlqcyIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9hZGVyIiwiSW1hZ2UiLCJEZWxldGVUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJFZGl0VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiRW1wbG95ZWVBbGxWaWV3VGFibGUiLCJfZW1wbG95ZWUkZmluZCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldCIsInRoZW4iLCJyZXMiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImVtcGxveWVlIiwic2V0RW1wbG95ZWUiLCJhcGlVcmwiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm9wZW4iLCJzZXRPcGVuIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJEZWxldGVJZCIsInNldERlbGV0ZUlkIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwibW9kYWxPcGVuTG9hZGluZyIsInNldE1vZGFsT3BlbkxvYWRpbmciLCJoYW5kbGVPcGVuIiwiaWQiLCJoYW5kbGVPcGVuTW9kYWwiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbG9zZU1vZGFsIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVEZWxldGUiLCJfcmVmNyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZGVsZXRlIiwiYWxlcnQiLCJhcHBseSIsImFyZ3VtZW50cyIsInRpdGxlIiwiZmxvYXQiLCJtYXJnaW4iLCJkaXNhYmxlZCIsInRvIiwibGVuZ3RoIiwiY29tcG9uZW50IiwiYWxpZ24iLCJtYXAiLCJyb3ciLCJrZXkiLCJfaWQiLCJqb2luRGF0ZSIsImZvcm1hdCIsImVtcGxveWVlUGhvbmUiLCJlbXBsb3llZUFkZHJlc3MiLCJlbXBsb3llZVJvbGUiLCJkZXBhcnRtZW50IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJnYXAiLCJvbkNsaWNrIiwiY3Vyc29yIiwic3JjIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJoZWlnaHQiLCJpdGVtTmFtZSIsImZpbmQiLCJlIiwib25DbG9zZSIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJzeCIsIl9vYmplY3RTcHJlYWQiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsIlR5cG9ncmFwaHkiLCJUZXh0RmllbGQiLCJCdXR0b24iLCJHcmlkIiwiV2FybmluZ0FtYmVySWNvbiIsIkNsb3NlSWNvbiIsInAiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJUb3AiLCJjb25maXJtVGV4dCIsInNldENvbmZpcm1UZXh0IiwiaXNEaXNhYmxlZCIsInNldElzRGlzYWJsZWQiLCJvbkNvbmZpcm0iLCJjb250YWluZXIiLCJzcGFjaW5nIiwiaXRlbSIsInhzIiwidmFyaWFudCIsImZvbnRXZWlnaHQiLCJtciIsInNpemUiLCJtdCIsIm1iIiwiZnVsbFdpZHRoIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYXV0b0ZvY3VzIiwiYm9yZGVyQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9