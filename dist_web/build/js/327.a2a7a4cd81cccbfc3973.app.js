"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[327],{

/***/ 15542
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
var _default = exports.A = (0, _createSvgIcon.default)([/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12 5.99 19.53 19H4.47zM12 2 1 21h22z"
}, "0"), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M13 16h-2v2h2zm0-6h-2v5h2z"
}, "1")], 'WarningAmber');

/***/ },

/***/ 30327
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _component_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80542);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55746);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5673);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28597);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58331);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67034);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84976);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47767);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33198);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64137);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96627);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(70691);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(43884);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(11848);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(71510);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(16718);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(20889);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(32005);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(65821);
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

















var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay)(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.tooltip)]: {
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
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_27__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_27__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_28__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    if (storesUserId) {
      axios__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_23__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId)).then(res => {
        // Handle the response data here
        var Name = res.data.data.employeeName;
        var Role = res.data.data.role;
        dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_28__/* .setUser */ .gV)({
          userName: Name,
          role: Role
        }));
      }).catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
        dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_28__/* .logOut */ .je)());
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
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_23__/* .ENDPOINT_URL */ .m, "/employee");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.get(apiUrl).then(res => {
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
        var res = yield axios__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_23__/* .ENDPOINT_URL */ .m, "/delete-employee/").concat(DeleteId));
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "allTableContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Add",
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    disabled: user.data.role === 'User'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .NavLink */ .k2, {
    to: "/EmployeeFormView",
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    className: "btnCustomer"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    style: {
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    align: "center"
  }, "Join Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    align: "center"
  }, "Employee Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    align: "center"
  }, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    align: "center"
  }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    align: "center"
  }, "Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    align: "center"
  }, "Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    align: "left"
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, null, employee && employee.length > 0 ? employee.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    align: "center"
  }, dayjs__WEBPACK_IMPORTED_MODULE_25___default()(row.joinDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    align: "center"
  }, row.employeeName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    align: "center"
  }, row.employeePhone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    align: "center"
  }, row.employeeAddress), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    align: "center"
  }, row.employeeRole), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    align: "center"
  }, row.department), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    align: "center",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "View"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    disabled: user.data.role === 'User'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .NavLink */ .k2, {
    to: "/EmployeeViewAdminAll/".concat(row._id),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      display: 'flex',
      gap: '10px',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditTooltip, {
    title: "Edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    disabled: user.data.role === 'User'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .NavLink */ .k2, {
    to: "/EmployeeUpdateView/".concat(row._id),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    style: {
      color: 'gray'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DeleteTooltip, {
    title: "Delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    onClick: () => handleOpen(row._id),
    disabled: user.data.role === 'User'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  })))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    colSpan: 7,
    align: "center",
    sx: {
      py: 3,
      color: '#888'
    }
  }, "No employees found")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    open: open,
    handleClose: handleClose,
    handleDelete: handleDelete,
    itemName: ((_employee$find = employee.find(e => e._id === DeleteId)) === null || _employee$find === void 0 ? void 0 : _employee$find.employeeName) || "this employee"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    open: modalOpenLoading,
    onClose: handleCloseModal,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Data successfully deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleCloseModal,
    className: "btnCustomer"
  }, "Close")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeAllViewTable);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 80542
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35406);
/* harmony import */ var _mui_icons_material_WarningAmber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15542);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39781);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    open: open,
    onClose: onClose,
    "aria-labelledby": "confirm-delete-title",
    "aria-describedby": "confirm-delete-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    sx: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    id: "confirm-delete-title",
    variant: "h5",
    component: "h2",
    sx: {
      display: 'flex',
      alignItems: 'center',
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_WarningAmber__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      mr: 1
    }
  }), " Confirm Deletion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 2,
    sx: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    onClick: onClose,
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    variant: "body1",
    sx: {
      mt: 2,
      mb: 1
    }
  }, "Are you sure you want to delete ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, itemName || 'this record'), "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    variant: "body2",
    color: "text.secondary",
    sx: {
      mb: 3
    }
  }, "This action is irreversible and may affect linked data.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    variant: "body2",
    sx: {
      mb: 1,
      fontWeight: 'medium'
    }
  }, "Please type ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, "DELETE"), " to confirm:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    variant: "outlined",
    placeholder: "Type DELETE here",
    value: confirmText,
    onChange: e => setConfirmText(e.target.value),
    autoFocus: true,
    error: confirmText !== '' && confirmText !== 'DELETE'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sx: {
      mt: 3,
      display: 'flex',
      gap: 2,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
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
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);