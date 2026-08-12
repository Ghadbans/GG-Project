"use strict";
exports.id = "src_js_AdminView1_PageView_ExpensesView_ExpensesViewAdminAll_js";
exports.ids = ["src_js_AdminView1_PageView_ExpensesView_ExpensesViewAdminAll_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/ExpensesView/ExpensesViewAdminAll.js"
/*!*************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ExpensesView/ExpensesViewAdminAll.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_NotificationsNone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/NotificationsNone */ "./node_modules/@mui/icons-material/NotificationsNone.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/ResponsiveContainer.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Cell.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/polar/Pie.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/PieChart.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/ArrowBack.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
var _excluded = ["className"],
  _excluded2 = ["className"];
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
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;





















var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__["default"].tooltip)]: {
      backgroundColor: 'gray',
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
function ExpensesViewAdminAll() {
  var _expenses$filter;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    if (storesUserId) {
      axios__WEBPACK_IMPORTED_MODULE_22__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_23__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId)).then(res => {
        // Handle the response data here
        var Name = res.data.data.employeeName;
        var Role = res.data.data.role;
        dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__.setUser)({
          userName: Name,
          role: Role
        }));
      }).catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
        dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__.logOut)());
      });
    } else {
      console.log('no id');
      navigate('/');
    }
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__.logOut)());
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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    expenses2 = _useState6[0],
    SetExpenses2 = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingData = _useState8[0],
    setLoadingData = _useState8[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_23__.ENDPOINT_URL, "/dailyexpense");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_22__["default"].get(apiUrl).then(res => {
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
    axios__WEBPACK_IMPORTED_MODULE_22__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_23__.ENDPOINT_URL, "/invoice?summary=true")).then(res => {
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
  var newExpense = expenses.filter(row => !invoice.some(item => row.referenceNumber === item.invoiceNumber));
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    amount = _useState0[0],
    setAmount = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    amount2 = _useState10[0],
    setAmount2 = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var row = document.querySelectorAll('#totalCostInfo');
    var sum = 0;
    for (var i = 0; i < row.length; i++) {
      sum += parseFloat(row[i].innerHTML);
      setAmount(sum);
    }
    var invTotal = document.querySelectorAll('#totalInvoice');
    var prod = 0;
    for (var _i = 0; _i < invTotal.length; _i++) {
      prod = parseFloat(invTotal[_i].innerHTML);
      setAmount2(prod);
    }
  });
  var Gain = amount2 - amount;
  var data = [{
    "id": 1,
    "label": "Cost",
    "value": amount
  }, {
    "id": 2,
    "label": "Sell",
    "value": amount2
  }, {
    "id": 3,
    "label": "Sell",
    "value": Gain
  }];
  var RADIAN = Math.PI / 180;
  var renderCustomizedLabel = _ref5 => {
    var cx = _ref5.cx,
      cy = _ref5.cy,
      midAngle = _ref5.midAngle,
      innerRadius = _ref5.innerRadius,
      outerRadius = _ref5.outerRadius,
      percent = _ref5.percent,
      index = _ref5.index;
    var radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    var x = cx + radius * Math.cos(-midAngle * RADIAN);
    var y = cy + radius * Math.sin(-midAngle * RADIAN);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
      x: x,
      y: y,
      fill: "white",
      textAnchor: x > cx ? 'start' : 'end',
      dominantBaseline: "central"
    }, "".concat((percent * 100).toFixed(0), "%"));
  };
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState12 = _slicedToArray(_useState11, 2),
    show = _useState12[0],
    setShow = _useState12[1];
  var handleShow = e => {
    setShow(e);
  };
  var expensesFiltered = newExpense === null || newExpense === void 0 ? void 0 : newExpense.filter(row => row._id === expenses2._id);
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState14 = _slicedToArray(_useState13, 2),
    show1 = _useState14[0],
    setShow1 = _useState14[1];
  var handleShow1 = e => {
    setShow1(e);
  };
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    reason = _useState16[0],
    setReason = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    Comments1 = _useState18[0],
    setComments = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_22__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_23__.ENDPOINT_URL, "/comment")).then(res => {
      var _res$data2;
      // Handle the response data here
      var resp = (_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.filter(row => row.CommentInfo.idInfo === id);
      setComments(resp.reverse());
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  }, [id]);
  var CommentInfo = {
    idInfo: id,
    person: user.data.userName,
    reason
  };
  {/** Loading Start */}
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    loading = _useState20[0],
    setLoading = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    loadingOpenModal = _useState22[0],
    setLoadingOpenModal = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    ErrorOpenModal = _useState24[0],
    setErrorOpenModal = _useState24[1];
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
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_29___default()(Date.now());
  var handleSubmitEdit = e => {
    e.preventDefault();
    var data = {
      CommentInfo,
      dateComment
    };
    axios__WEBPACK_IMPORTED_MODULE_22__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_23__.ENDPOINT_URL, "/create-comment/"), data).then(res => {
      if (res) {
        setReason("");
        handleOpen();
        var newData = res.data.data;
        setComments([newData, ...Comments1]);
      }
    }).catch(error => {
      if (error) {
        handleError();
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sidemnuandcontent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "headername"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h5"
  }, "Expenses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rightcontent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Back",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => navigate(-1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
    className: "btnCustomer6"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_NotificationsNone__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "iconesize"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "User Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Logout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_30__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemview1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 2
  }, show1 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 3
  }, show === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6"
  }, "All Expense")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, newExpense === null || newExpense === void 0 ? void 0 : newExpense.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainerContent1",
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      lineHeight: '2px',
      fontSize: '1rem',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__.NavLink, {
    to: "/ExpensesViewAdminAll/".concat(row._id),
    className: "LinkName",
    style: {
      width: '75%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainerContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, row.customerName !== undefined ? row.customerName.customerName.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "INV-", String(row.referenceNumber).padStart(6, '0')))))))))) : '', show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    disableClearable: true,
    options: newExpense,
    getOptionLabel: option => 'INV-' + String(option.referenceNumber).padStart(6, '0'),
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], props, option.customerName.customerName.toUpperCase(), "/INV-", String(option.referenceNumber).padStart(6, '0')),
    onChange: (e, newValue) => SetExpenses2(newValue),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, params, {
      label: "Expenses"
    })),
    size: "small",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '565px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, expensesFiltered === null || expensesFiltered === void 0 ? void 0 : expensesFiltered.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainerContent1",
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      lineHeight: '2px',
      fontSize: '1rem',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__.NavLink, {
    to: "/ExpensesViewAdminAll/".concat(row._id),
    className: "LinkName",
    style: {
      width: '75%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainerContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, row.customerName !== undefined ? row.customerName.customerName.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "INV-", String(row.referenceNumber).padStart(6, '0')))))))))) : '') : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      background: 'white'
    }
  }, expenses === null || expenses === void 0 || (_expenses$filter = expenses.filter(row => row._id === id)) === null || _expenses$filter === void 0 ? void 0 : _expenses$filter.map(row => {
    var _row$items, _row$items2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h5"
    }, row.customerName !== undefined ? row.customerName.customerName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "INV-", String(row.referenceNumber).padStart(6, '0'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "btnCustomer1",
      onClick: () => handleShow1(2)
    }, "Comments"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        height: '450px',
        overflow: 'hidden',
        overflowY: 'scroll',
        width: '100%',
        background: 'white',
        margin: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "itemInfoContainer2Content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      container: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        padding: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "tableItemInfo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h6"
    }, "Reference")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "INV-", String(row.referenceNumber).padStart(6, '0')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "tableItemInfo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h6"
    }, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, dayjs__WEBPACK_IMPORTED_MODULE_29___default()(row.expenseDate).format('DD/MM/YYYY'))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Item Expenses Cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "tableinvoice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      align: "center",
      style: {
        width: '50px'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'left',
        padding: '10px',
        width: '100px'
      }
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'left',
        padding: '10px',
        width: '120px'
      }
    }, "Cost Unit price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'left',
        padding: '10px',
        width: '80px'
      }
    }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'left',
        padding: '10px',
        width: '80px'
      }
    }, "Amount"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, (_row$items = row.items) === null || _row$items === void 0 ? void 0 : _row$items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: Item.idRow
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'center'
      }
    }, " ", i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, Item.itemName.itemName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, Item.itemCost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, Item.itemQty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "totalCostInfo"
    }, Item.itemCost * Item.itemQty))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "downTabledetails",
      style: {
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: '55%',
        padding: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      style: {
        listStyle: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Total Cost Item"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "downTabledetailstotal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "firstTable2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        borderBottom: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        borderBottom: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      id: "sumTotalCost"
    }, amount)))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Item Invoice Sell"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "tableinvoice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      align: "center",
      style: {
        width: '50px'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'left',
        padding: '10px',
        width: '20%'
      }
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'left',
        padding: '10px',
        width: '40%'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'right',
        padding: '10px',
        width: '10%'
      }
    }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'right',
        padding: '10px',
        width: '15%'
      }
    }, "Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'right',
        padding: '10px',
        width: '13%'
      }
    }, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'right',
        padding: '10px',
        width: '15%'
      }
    }, "Amount"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, (_row$items2 = row.items) === null || _row$items2 === void 0 ? void 0 : _row$items2.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: Item.idRow
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'center'
      }
    }, " ", i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, Item.itemName.itemName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        padding: '10px'
      }
    }, Item.itemDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        padding: '10px'
      }
    }, Item.itemQty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        padding: '10px'
      }
    }, Item.itemRate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        padding: '10px'
      }
    }, Item.itemDiscount, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        padding: '10px'
      }
    }, Item.itemAmount))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "downTabledetails"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: '55%',
        padding: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      style: {
        listStyle: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Total Invoice Item"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "downTabledetailstotal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "firstTable2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        borderBottom: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        borderBottom: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      id: "totalInvoice"
    }, " ", row.subTotal)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'left',
        borderBottom: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total in Words")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.totalW)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      item: true,
      xs: 12,
      style: {
        display: 'flex',
        margin: '10px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_25__.ResponsiveContainer, {
      width: "100%",
      height: "100%",
      margin: "30%"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_28__.PieChart, {
      width: 50,
      height: 50
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_27__.Pie, {
      data: data,
      cx: "50%",
      cy: "50%",
      labelLine: false,
      label: renderCustomizedLabel,
      outerRadius: 80,
      fill: "#8884d8",
      dataKey: "value"
    }, data.map(entry => {
      if (entry.id === 1) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_26__.Cell, {
          key: "cell-".concat(entry.id),
          fill: "#FFBB28"
        });
      } else if (entry.id === 2) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_26__.Cell, {
          key: "cell-".concat(entry.id),
          fill: "#0088FE"
        });
      } else if (entry.id === 3) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_26__.Cell, {
          key: "cell-".concat(entry.id),
          fill: "#00C49F"
        });
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      align: "center",
      sx: {
        backgroundColor: '#FFBB28',
        color: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Cost")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      align: "right",
      sx: {
        color: '#FFBB28',
        width: '30%'
      },
      id: "amountT"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), " ", amount))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      align: "center",
      sx: {
        backgroundColor: '#0088FE',
        color: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Sell")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      align: "right",
      sx: {
        color: '#0088FE',
        width: '30%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), " ", row.subTotal))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      align: "center",
      sx: {
        backgroundColor: '#00C49F',
        color: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Gain")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      align: "right",
      sx: {
        color: '#00C49F',
        width: '30%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), " ", row.subTotal - amount))))))))));
  })))), show1 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "COMMENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow1(1)
  }, "Close")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    id: "comments",
    name: "comments",
    multiline: true,
    rows: 4,
    value: reason,
    onChange: e => setReason(e.target.value),
    label: "Comments",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    style: {
      width: '100%'
    },
    className: "btnCustomer6"
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '333px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, Comments1.map(Item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: Item._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '100%',
      borderBottom: '1px solid black'
    }
  }, Item.dateComment ? dayjs__WEBPACK_IMPORTED_MODULE_29___default()(Item.dateComment).format('DD/MM') : '', " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_16__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_30__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_31__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_16__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_30__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_32__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpensesViewAdminAll);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRXhwZW5zZXNWaWV3X0V4cGVuc2VzVmlld0FkbWluQWxsX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQWtEO0FBQ087QUFDbEM7QUFDRTtBQUMyQjtBQUNzQjtBQUNSO0FBQzRRO0FBQzlRO0FBQ047QUFDaEM7QUFDd0I7QUFDUDtBQUNpQztBQUNsRDtBQUNxQjtBQUNlO0FBQ1Y7QUFDRztBQUNBO0FBQytCO0FBQ3RDO0FBRWhELElBQU00RCxXQUFXLEdBQUcxQywwREFBTSxDQUFDMkMsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQy9DakUsMERBQUEsQ0FBQ29DLDhEQUFPLEVBQUErQixRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU9uQyw4REFBYyxDQUFDb0MsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsU0FBUztNQUMxQkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDM0JDLFFBQVEsRUFBRTtJQUNaO0VBQ0YsQ0FBQztBQUFBLENBQUMsQ0FBQztBQUNILElBQU1DLFdBQVcsR0FBRzdELDBEQUFNLENBQUM4RCxLQUFBO0VBQUEsSUFBR2xCLFNBQVMsR0FBQWtCLEtBQUEsQ0FBVGxCLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3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QVk7SUFBQ3JLLFNBQVMsRUFBQztFQUFhLEdBQUMsT0FFOUMsQ0FDTCxDQUNGLENBRUosQ0FDQSxDQUFDLGVBQ1I5RCwwREFBQSxDQUFDMEIsc0RBQUs7SUFDSndSLElBQUksRUFBRXBGLGNBQWU7SUFDckJxRixPQUFPLEVBQUUvRSxnQkFBaUI7SUFDMUJnRixvQkFBb0I7SUFDcEJDLGlCQUFpQixFQUFFMVIsc0RBQVM7SUFDNUIyUixhQUFhLEVBQUU7TUFDYkMsT0FBTyxFQUFFO0lBQ1gsQ0FBRTtJQUNGLG1CQUFnQixtQkFBbUI7SUFDbkMsb0JBQWlCO0VBQXlCLGdCQUUxQ3ZULDBEQUFBLENBQUM2QixzREFBRztJQUFDaVAsRUFBRSxFQUFBMEMsYUFBQSxDQUFBQSxhQUFBLEtBQU9yTyxLQUFLO01BQUVLLEtBQUssRUFBRTtJQUFHO0VBQUcsR0FFL0I4SCxPQUFPLGdCQUFJdE4sMERBQUEsQ0FBQ2lELDBEQUFNLE1BQUUsQ0FBQyxnQkFFcEJqRCwwREFBQTtJQUFLbUYsS0FBSyxFQUFFO01BQUVpSyxjQUFjLEVBQUUsUUFBUTtNQUFFb0MsU0FBUyxFQUFFO0lBQVM7RUFBRSxnQkFDNUR4UiwwREFBQSx5QkFBR0EsMERBQUEsQ0FBQ21ELG1FQUFVO0lBQUNnQyxLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFLEtBQUs7TUFBRTRLLE1BQU0sRUFBRSxNQUFNO01BQUUvSixLQUFLLEVBQUU7SUFBTztFQUFFLENBQUUsQ0FBSSxDQUFDLGVBQzdFeEYsMERBQUEsYUFBSSx1QkFBeUIsQ0FBQyxlQUM5QkEsMERBQUE7SUFBUThELFNBQVMsRUFBQyxhQUFhO0lBQUNpTCxPQUFPLEVBQUVYO0VBQWlCLEdBQUMsV0FFbkQsQ0FDTCxDQUVKLENBQ0EsQ0FDSixDQUFDO0FBRVY7QUFFQSxpRUFBZXZJLG9CQUFvQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0V4cGVuc2VzVmlldy9FeHBlbnNlc1ZpZXdBZG1pbkFsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2lkZWJhckRhc2ggZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcydcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJ1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbnRhaW5lciwgQ2hlY2tib3gsIE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBQYXBlciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBzdHlsZWQsIEZvcm1MYWJlbCwgUmFkaW9Hcm91cCwgRm9ybUNvbnRyb2xMYWJlbCwgUmFkaW8sIElucHV0LCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgTW9kYWwsIEJhY2tkcm9wLCBGYWRlLCBCb3gsIEF1dG9jb21wbGV0ZSwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZVJvdywgVGFibGVIZWFkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IFBpZUNoYXJ0LCBQaWUsIFNlY3RvciwgQ2VsbCwgUmVzcG9uc2l2ZUNvbnRhaW5lciB9IGZyb20gJ3JlY2hhcnRzJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgeyBBcnJvd0JhY2ssIENsb3NlIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcblxyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IEVkaXRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmZ1bmN0aW9uIEV4cGVuc2VzVmlld0FkbWluQWxsKCkge1xyXG4gIGxldCB7IGlkIH0gPSB1c2VQYXJhbXMoKVxyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGEgaGVyZVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy8gSGFuZGxlIGVycm9yc1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdubyBpZCcpO1xyXG4gICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaF0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtleHBlbnNlcywgc2V0RXhwZW5zZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2ludm9pY2UsIHNldEludm9pY2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtleHBlbnNlczIsIFNldEV4cGVuc2VzMl0gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGFwaVVybCA9IGAke0VORFBPSU5UX1VSTH0vZGFpbHlleHBlbnNlYDtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGFwaVVybClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGEgaGVyZVxyXG4gICAgICAgIHNldEV4cGVuc2VzKHJlcy5kYXRhLmRhdGEucmV2ZXJzZSgpKTtcclxuICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAvLyBIYW5kbGUgZXJyb3JzXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pbnZvaWNlP3N1bW1hcnk9dHJ1ZWApXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBkYXRhIGhlcmVcclxuICAgICAgICBjb25zdCByZXN1bHQgPSByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5SZWYgJiYgKFxyXG4gICAgICAgICAgcm93XHJcbiAgICAgICAgKSlcclxuICAgICAgICBzZXRJbnZvaWNlKHJlc3VsdClcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAvLyBIYW5kbGUgZXJyb3JzXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IG5ld0V4cGVuc2UgPSBleHBlbnNlcy5maWx0ZXIoKHJvdykgPT4gIWludm9pY2Uuc29tZSgoaXRlbSkgPT5cclxuICAgIHJvdy5yZWZlcmVuY2VOdW1iZXIgPT09IGl0ZW0uaW52b2ljZU51bWJlclxyXG4gICkpXHJcblxyXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYW1vdW50Miwgc2V0QW1vdW50Ml0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0b3RhbENvc3RJbmZvJyk7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHN1bSArPSBwYXJzZUZsb2F0KHJvd1tpXS5pbm5lckhUTUwpO1xyXG4gICAgICBzZXRBbW91bnQoc3VtKVxyXG4gICAgfVxyXG4gICAgbGV0IGludlRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3RvdGFsSW52b2ljZScpXHJcbiAgICBsZXQgcHJvZCA9IDBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW52VG90YWwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcHJvZCA9IHBhcnNlRmxvYXQoaW52VG90YWxbaV0uaW5uZXJIVE1MKTtcclxuICAgICAgc2V0QW1vdW50Mihwcm9kKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgR2FpbiA9IGFtb3VudDIgLSBhbW91bnRcclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDEsXHJcbiAgICAgIFwibGFiZWxcIjogXCJDb3N0XCIsXHJcbiAgICAgIFwidmFsdWVcIjogYW1vdW50LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICBcImxhYmVsXCI6IFwiU2VsbFwiLFxyXG4gICAgICBcInZhbHVlXCI6IGFtb3VudDIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDMsXHJcbiAgICAgIFwibGFiZWxcIjogXCJTZWxsXCIsXHJcbiAgICAgIFwidmFsdWVcIjogR2FpbixcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCBSQURJQU4gPSBNYXRoLlBJIC8gMTgwO1xyXG4gIGNvbnN0IHJlbmRlckN1c3RvbWl6ZWRMYWJlbCA9ICh7IGN4LCBjeSwgbWlkQW5nbGUsIGlubmVyUmFkaXVzLCBvdXRlclJhZGl1cywgcGVyY2VudCwgaW5kZXggfSkgPT4ge1xyXG4gICAgY29uc3QgcmFkaXVzID0gaW5uZXJSYWRpdXMgKyAob3V0ZXJSYWRpdXMgLSBpbm5lclJhZGl1cykgKiAwLjU7XHJcbiAgICBjb25zdCB4ID0gY3ggKyByYWRpdXMgKiBNYXRoLmNvcygtbWlkQW5nbGUgKiBSQURJQU4pO1xyXG4gICAgY29uc3QgeSA9IGN5ICsgcmFkaXVzICogTWF0aC5zaW4oLW1pZEFuZ2xlICogUkFESUFOKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGV4dCB4PXt4fSB5PXt5fSBmaWxsPVwid2hpdGVcIiB0ZXh0QW5jaG9yPXt4ID4gY3ggPyAnc3RhcnQnIDogJ2VuZCd9IGRvbWluYW50QmFzZWxpbmU9XCJjZW50cmFsXCI+XHJcbiAgICAgICAge2AkeyhwZXJjZW50ICogMTAwKS50b0ZpeGVkKDApfSVgfVxyXG4gICAgICA8L3RleHQ+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgaGFuZGxlU2hvdyA9IChlKSA9PiB7XHJcbiAgICBzZXRTaG93KGUpO1xyXG4gIH1cclxuICBjb25zdCBleHBlbnNlc0ZpbHRlcmVkID0gbmV3RXhwZW5zZT8uZmlsdGVyKChyb3cpID0+IHJvdy5faWQgPT09IGV4cGVuc2VzMi5faWQpXHJcblxyXG4gIGNvbnN0IFtzaG93MSwgc2V0U2hvdzFdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgaGFuZGxlU2hvdzEgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvdzEoZSk7XHJcbiAgfVxyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbQ29tbWVudHMxLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9jb21tZW50YClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGEgaGVyZVxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5Db21tZW50SW5mby5pZEluZm8gPT09IGlkKVxyXG4gICAgICAgIHNldENvbW1lbnRzKHJlc3AucmV2ZXJzZSgpKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvcnNcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW2lkXSlcclxuXHJcbiAgY29uc3QgQ29tbWVudEluZm8gPVxyXG4gIHtcclxuICAgIGlkSW5mbzogaWQsXHJcbiAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSxcclxuICAgIHJlYXNvblxyXG4gIH1cclxuXHJcbiAgey8qKiBMb2FkaW5nIFN0YXJ0ICovIH1cclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuXHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcblxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgey8qKiBMb2FkaW5nIEVuZCAqLyB9XHJcbiAgY29uc3QgZGF0ZUNvbW1lbnQgPSBkYXlqcyhEYXRlLm5vdygpKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0RWRpdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBDb21tZW50SW5mbyxcclxuICAgICAgZGF0ZUNvbW1lbnRcclxuICAgIH07XHJcbiAgICBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLWNvbW1lbnQvYCwgZGF0YSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgIHNldFJlYXNvbihcIlwiKTtcclxuICAgICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICBzZXRDb21tZW50cyhbbmV3RGF0YSwgLi4uQ29tbWVudHMxXSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZW1udWFuZGNvbnRlbnQnPlxyXG4gICAgICAgIDxTaWRlYmFyRGFzaCAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcm5hbWUnPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+RXhwZW5zZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodGNvbnRlbnQnPlxyXG4gICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJCYWNrXCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKC0xKX0+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dCYWNrIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25zTm9uZUljb24gY2xhc3NOYW1lPSdpY29uZXNpemUnIC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlVzZXIgTmFtZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiTG9nb3V0XCI+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICB7XHJcbiAgICAgICAgbG9hZGluZ0RhdGEgPyA8ZGl2IGNsYXNzTmFtZT0naW52b2ljZSc+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxMjBweCcgfX0+XHJcbiAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtdmlldzEnPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAge3Nob3cxID09PSAxID9cclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3cgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHBhZGRpbmc6ICc1cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPkFsbCBFeHBlbnNlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjEnIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3coMil9PkZpbHRlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDE3MHB4KScsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3RXhwZW5zZT8ubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lckNvbnRlbnQxJyBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgbGluZUhlaWdodDogJzJweCcsIGZvbnRTaXplOiAnMXJlbScsIHdpZHRoOiAnMTAwJScgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0V4cGVuc2VzVmlld0FkbWluQWxsLyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJyBzdHlsZT17eyB3aWR0aDogJzc1JScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgd2lkdGg6ICcxMDAlJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lckNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pntyb3cuY3VzdG9tZXJOYW1lICE9PSB1bmRlZmluZWQgPyByb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZS50b1VwcGVyQ2FzZSgpIDogJyd9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5JTlYte1N0cmluZyhyb3cucmVmZXJlbmNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfTwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3cgPT09IDIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgKDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzEwcHgnIH19IHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtuZXdFeHBlbnNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gJ0lOVi0nICsgU3RyaW5nKG9wdGlvbi5yZWZlcmVuY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30+e29wdGlvbi5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvVXBwZXJDYXNlKCl9L0lOVi17U3RyaW5nKG9wdGlvbi5yZWZlcmVuY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IFNldEV4cGVuc2VzMihuZXdWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiRXhwZW5zZXNcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93KDEpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNTY1cHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2V4cGVuc2VzRmlsdGVyZWQ/Lm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXJDb250ZW50MScga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGxpbmVIZWlnaHQ6ICcycHgnLCBmb250U2l6ZTogJzFyZW0nLCB3aWR0aDogJzEwMCUnIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9FeHBlbnNlc1ZpZXdBZG1pbkFsbC8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZScgc3R5bGU9e3sgd2lkdGg6ICc3NSUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHdpZHRoOiAnMTAwJScsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXJDb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57cm93LmN1c3RvbWVyTmFtZSAhPT0gdW5kZWZpbmVkID8gcm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9VcHBlckNhc2UoKSA6ICcnfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+SU5WLXtTdHJpbmcocm93LnJlZmVyZW5jZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX08L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+KSA6ICcnfVxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyMic+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZDogJ3doaXRlJyB9fT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtleHBlbnNlcz8uZmlsdGVyKHJvdyA9PiByb3cuX2lkID09PSBpZCk/Lm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cm93Ll9pZH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz57cm93LmN1c3RvbWVyTmFtZSAhPT0gdW5kZWZpbmVkID8gcm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9VcHBlckNhc2UoKSA6ICcnfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PklOVi17U3RyaW5nKHJvdy5yZWZlcmVuY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMScgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdzEoMil9PkNvbW1lbnRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNDUwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmQ6ICd3aGl0ZScsIG1hcmdpbjogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcjJDb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzE1cHgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZUl0ZW1JbmZvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj0nbGVmdCc+PFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPlJlZmVyZW5jZTwvVHlwb2dyYXBoeT48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PFR5cG9ncmFwaHkgPklOVi17U3RyaW5nKHJvdy5yZWZlcmVuY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9PC9UeXBvZ3JhcGh5PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSXRlbUluZm8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGFsaWduPSdsZWZ0Jz48VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgPkRhdGU8L1R5cG9ncmFwaHk+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxUeXBvZ3JhcGh5PntkYXlqcyhyb3cuZXhwZW5zZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvVHlwb2dyYXBoeT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5ID5JdGVtIEV4cGVuc2VzIENvc3Q8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlaW52b2ljZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0aCBhbGlnbj0nY2VudGVyJyBzdHlsZT17eyB3aWR0aDogJzUwcHgnIH19PiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHBhZGRpbmc6ICcxMHB4Jywgd2lkdGg6ICcxMDBweCcgfX0+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEyMHB4JyB9fT5Db3N0IFVuaXQgcHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHBhZGRpbmc6ICcxMHB4Jywgd2lkdGg6ICc4MHB4JyB9fT5RdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHBhZGRpbmc6ICcxMHB4Jywgd2lkdGg6ICc4MHB4JyB9fT5BbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXRlbXM/Lm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtJdGVtLmlkUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT4ge2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID57SXRlbS5pdGVtTmFtZS5pdGVtTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+e0l0ZW0uaXRlbUNvc3R9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0l0ZW0uaXRlbVF0eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD0ndG90YWxDb3N0SW5mbyc+e0l0ZW0uaXRlbUNvc3QgKiBJdGVtLml0ZW1RdHl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb3duVGFibGVkZXRhaWxzJyBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNTUlJywgcGFkZGluZzogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ub3RhbCBDb3N0IEl0ZW08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG93blRhYmxlZGV0YWlsc3RvdGFsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaXJzdFRhYmxlMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJ25vbmUnIH19PjxzcGFuID5Ub3RhbDwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJ25vbmUnIH19PjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+PHNwYW4gaWQ9J3N1bVRvdGFsQ29zdCc+e2Ftb3VudH08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5JdGVtIEludm9pY2UgU2VsbDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUYWJsZSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVpbnZvaWNlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj0nY2VudGVyJyBzdHlsZT17eyB3aWR0aDogJzUwcHgnIH19PiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzIwJScgfX0+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnNDAlJyB9fT5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwJScgfX0+UXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTUlJyB9fT5Vbml0IFByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTMlJyB9fT5EaXNjb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzE1JScgfX0+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXRlbXM/Lm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0l0ZW0uaWRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+IHtpICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID57SXRlbS5pdGVtTmFtZS5pdGVtTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBwYWRkaW5nOiAnMTBweCcgfX0+e0l0ZW0uaXRlbURlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBwYWRkaW5nOiAnMTBweCcgfX0+e0l0ZW0uaXRlbVF0eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgcGFkZGluZzogJzEwcHgnIH19PntJdGVtLml0ZW1SYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBwYWRkaW5nOiAnMTBweCcgfX0+e0l0ZW0uaXRlbURpc2NvdW50fTxzcGFuIGRhdGEtcHJlZml4PiU8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIHBhZGRpbmc6ICcxMHB4JyB9fT57SXRlbS5pdGVtQW1vdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rvd25UYWJsZWRldGFpbHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzU1JScsIHBhZGRpbmc6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRvdGFsIEludm9pY2UgSXRlbTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb3duVGFibGVkZXRhaWxzdG90YWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlyc3RUYWJsZTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXJCb3R0b206ICdub25lJyB9fSA+PHNwYW4gPlRvdGFsPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXJCb3R0b206ICdub25lJyB9fT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuIGlkPSd0b3RhbEludm9pY2UnPiB7cm93LnN1YlRvdGFsfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICdub25lJyB9fT48c3BhbiA+VG90YWwgaW4gV29yZHM8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICdub25lJyB9fT48c3Bhbj57cm93LnRvdGFsV308L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgZGV0YWlscyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW46ICcxMHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIG1hcmdpbj1cIjMwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpZUNoYXJ0IHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN4PVwiNTAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeT1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxMaW5lPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cmVuZGVyQ3VzdG9taXplZExhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyUmFkaXVzPXs4MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzg4ODRkOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pZCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENlbGwga2V5PXtgY2VsbC0ke2VudHJ5LmlkfWB9IGZpbGw9XCIjRkZCQjI4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVudHJ5LmlkID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2VsbCBrZXk9e2BjZWxsLSR7ZW50cnkuaWR9YH0gZmlsbD1cIiMwMDg4RkVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRyeS5pZCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENlbGwga2V5PXtgY2VsbC0ke2VudHJ5LmlkfWB9IGZpbGw9XCIjMDBDNDlGXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGllPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QaWVDaGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdjZW50ZXInIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNGRkJCMjgnLCBjb2xvcjogJ3doaXRlJyB9fT48VHlwb2dyYXBoeT5Db3N0PC9UeXBvZ3JhcGh5PjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0JyBzeD17eyBjb2xvcjogJyNGRkJCMjgnLCB3aWR0aDogJzMwJScgfX0gaWQ9J2Ftb3VudFQnPjxUeXBvZ3JhcGh5PiA8c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPiB7YW1vdW50fTwvVHlwb2dyYXBoeT48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J2NlbnRlcicgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzAwODhGRScsIGNvbG9yOiAnd2hpdGUnIH19PjxUeXBvZ3JhcGh5PlNlbGw8L1R5cG9ncmFwaHk+PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0ncmlnaHQnIHN4PXt7IGNvbG9yOiAnIzAwODhGRScsIHdpZHRoOiAnMzAlJyB9fT48VHlwb2dyYXBoeT4gPHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj4ge3Jvdy5zdWJUb3RhbH08L1R5cG9ncmFwaHk+PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdjZW50ZXInIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMwMEM0OUYnLCBjb2xvcjogJ3doaXRlJyB9fT48VHlwb2dyYXBoeT5HYWluPC9UeXBvZ3JhcGh5PjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0JyBzeD17eyBjb2xvcjogJyMwMEM0OUYnLCB3aWR0aDogJzMwJScgfX0+PFR5cG9ncmFwaHk+IDxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+IHtyb3cuc3ViVG90YWwgLSBhbW91bnR9PC9UeXBvZ3JhcGh5PjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAge3Nob3cxID09PSAyID9cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DT01NRU5UUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjEnIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cxKDEpfT5DbG9zZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdEVkaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nY29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzMzM3B4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtDb21tZW50czEubWFwKChJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtJdGVtLmRhdGVDb21tZW50ID8gZGF5anMoSXRlbS5kYXRlQ29tbWVudCkuZm9ybWF0KCdERC9NTScpIDogJyd9IHtJdGVtLkNvbW1lbnRJbmZvLnBlcnNvbiArICc6ICcgKyBJdGVtLkNvbW1lbnRJbmZvLnJlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gOiBcIlwifVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIEZhaWxlZCB0byBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGVuc2VzVmlld0FkbWluQWxsXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2giLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJUYWJsZUNvbnRhaW5lciIsIkNoZWNrYm94IiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlBhcGVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkZvcm1MYWJlbCIsIlJhZGlvR3JvdXAiLCJGb3JtQ29udHJvbExhYmVsIiwiUmFkaW8iLCJJbnB1dCIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJGYWRlIiwiQm94IiwiQXV0b2NvbXBsZXRlIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZVJvdyIsIlRhYmxlSGVhZCIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsInVzZVBhcmFtcyIsInVzZU5hdmlnYXRlIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJOYXZMaW5rIiwiUGllQ2hhcnQiLCJQaWUiLCJTZWN0b3IiLCJDZWxsIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsImRheWpzIiwiTG9hZGVyIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkFycm93QmFjayIsIkNsb3NlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsIlZpZXdUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJFZGl0VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJFeHBlbnNlc1ZpZXdBZG1pbkFsbCIsIl9leHBlbnNlcyRmaWx0ZXIiLCJfdXNlUGFyYW1zIiwiaWQiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXQiLCJ0aGVuIiwicmVzIiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZXhwZW5zZXMiLCJzZXRFeHBlbnNlcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiaW52b2ljZSIsInNldEludm9pY2UiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImV4cGVuc2VzMiIsIlNldEV4cGVuc2VzMiIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsImFwaVVybCIsInJldmVyc2UiLCJfcmVzJGRhdGEiLCJyZXN1bHQiLCJmaWx0ZXIiLCJyb3ciLCJSZWYiLCJuZXdFeHBlbnNlIiwic29tZSIsIml0ZW0iLCJyZWZlcmVuY2VOdW1iZXIiLCJpbnZvaWNlTnVtYmVyIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJhbW91bnQyIiwic2V0QW1vdW50MiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInN1bSIsImkiLCJsZW5ndGgiLCJwYXJzZUZsb2F0IiwiaW5uZXJIVE1MIiwiaW52VG90YWwiLCJwcm9kIiwiR2FpbiIsIlJBRElBTiIsIk1hdGgiLCJQSSIsInJlbmRlckN1c3RvbWl6ZWRMYWJlbCIsIl9yZWY1IiwiY3giLCJjeSIsIm1pZEFuZ2xlIiwiaW5uZXJSYWRpdXMiLCJvdXRlclJhZGl1cyIsInBlcmNlbnQiLCJpbmRleCIsInJhZGl1cyIsIngiLCJjb3MiLCJ5Iiwic2luIiwiZmlsbCIsInRleHRBbmNob3IiLCJkb21pbmFudEJhc2VsaW5lIiwidG9GaXhlZCIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJzaG93Iiwic2V0U2hvdyIsImhhbmRsZVNob3ciLCJlIiwiZXhwZW5zZXNGaWx0ZXJlZCIsIl9pZCIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJzaG93MSIsInNldFNob3cxIiwiaGFuZGxlU2hvdzEiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwicmVhc29uIiwic2V0UmVhc29uIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsIkNvbW1lbnRzMSIsInNldENvbW1lbnRzIiwiX3JlcyRkYXRhMiIsInJlc3AiLCJDb21tZW50SW5mbyIsImlkSW5mbyIsInBlcnNvbiIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xvc2VFcnJvciIsImRhdGVDb21tZW50IiwiRGF0ZSIsIm5vdyIsImhhbmRsZVN1Ym1pdEVkaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJuZXdEYXRhIiwidmFyaWFudCIsInRpdGxlIiwicGxhY2VtZW50Iiwib25DbGljayIsImNvbnRhaW5lciIsInNwYWNpbmciLCJ4cyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJvdmVyZmxvd1kiLCJtYXAiLCJrZXkiLCJsaW5lSGVpZ2h0IiwidG8iLCJjdXN0b21lck5hbWUiLCJ1bmRlZmluZWQiLCJ0b1VwcGVyQ2FzZSIsIlN0cmluZyIsInBhZFN0YXJ0IiwiZGlzYWJsZUNsZWFyYWJsZSIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIm9wdGlvbiIsInJlbmRlck9wdGlvbiIsIm9uQ2hhbmdlIiwibmV3VmFsdWUiLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsImxhYmVsIiwic2l6ZSIsInN4IiwiZmxvYXQiLCJiYWNrZ3JvdW5kIiwiX3JvdyRpdGVtcyIsIl9yb3ckaXRlbXMyIiwibWFyZ2luIiwiZ2FwIiwiYWxpZ24iLCJleHBlbnNlRGF0ZSIsImZvcm1hdCIsInRleHRBbGlnbiIsIml0ZW1zIiwiSXRlbSIsImlkUm93IiwiaXRlbU5hbWUiLCJpdGVtQ29zdCIsIml0ZW1RdHkiLCJsaXN0U3R5bGUiLCJib3JkZXJCb3R0b20iLCJpdGVtRGVzY3JpcHRpb24iLCJpdGVtUmF0ZSIsIml0ZW1EaXNjb3VudCIsIml0ZW1BbW91bnQiLCJzdWJUb3RhbCIsInRvdGFsVyIsImxhYmVsTGluZSIsImRhdGFLZXkiLCJlbnRyeSIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJuYW1lIiwibXVsdGlsaW5lIiwicm93cyIsInZhbHVlIiwidGFyZ2V0IiwidHlwZSIsIm9wZW4iLCJvbkNsb3NlIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwiX29iamVjdFNwcmVhZCJdLCJzb3VyY2VSb290IjoiIn0=