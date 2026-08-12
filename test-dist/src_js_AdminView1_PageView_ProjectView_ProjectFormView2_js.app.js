"use strict";
exports.id = "src_js_AdminView1_PageView_ProjectView_ProjectFormView2_js";
exports.ids = ["src_js_AdminView1_PageView_ProjectView_ProjectFormView2_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/ProjectView/ProjectFormView2.js"
/*!********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ProjectView/ProjectFormView2.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SideMaintenance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SideMaintenance */ "./src/js/component/SideMaintenance.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_35__);
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




























var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"].tooltip)]: {
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
var ProjectFormView2 = _ref7 => {
  var onCreateOption = _ref7.onCreateOption,
    onClose = _ref7.onClose,
    onId = _ref7.onId,
    onEstimate = _ref7.onEstimate;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_31__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_31__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_32__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_19__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_32__.setUser)({
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
        return _ref8.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    customerName = _useState2[0],
    setCustomerName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    projectName = _useState4[0],
    setProjectName = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    status = _useState6[0],
    setStatus = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    phase = _useState8[0],
    setPhase = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    description = _useState0[0],
    setDescription = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    startDate = _useState10[0],
    setStartDate = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    projectNumber = _useState12[0],
    setProjectNumber = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_19__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/get-last-saved-project"));
          var num = res.data && res.data.projectNumber ? parseInt(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.projectNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.projectNumber) || 0) : 0;
          setProjectNumber(num + 1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchlastNumber() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchlastNumber();
  }, []);
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    CustomerNameInfo = _useState14[0],
    setCustomerNameInfo = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    invoiceDate = _useState16[0],
    setInvoiceDate = _useState16[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchRelated = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        if (onId) {
          try {
            var resInvoice = yield axios__WEBPACK_IMPORTED_MODULE_19__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/get-invoice/").concat(onId));
            setCustomerNameInfo(resInvoice.data.data.customerName.customerName);
            setCustomerName(resInvoice.data.data.customerName);
            setInvoiceDate(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(resInvoice.data.data.invoiceDate));
          } catch (error) {
            console.log('no related');
          }
        } else if (onEstimate) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_19__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/get-estimation/").concat(onEstimate));
            setCustomerNameInfo(res.data.data.customerName.customerName);
            setCustomerName(res.data.data.customerName);
            setInvoiceDate(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(res.data.data.estimateDate));
          } catch (error) {
            console.log('no related');
          }
        }
      });
      return function fetchRelated() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchRelated();
  }, []);
  var handleAdd = () => {
    var abc = [...phase, []];
    setPhase(abc);
  };
  var handleChange = (onChangeValue, i) => {
    var inputData = [...phase];
    inputData[i] = onChangeValue.target.value.toUpperCase();
    setPhase(inputData);
  };
  var handleDelete = i => {
    var deletePhase = [...phase];
    deletePhase.splice(i, 1);
    setPhase(deletePhase);
  };
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    loading = _useState18[0],
    setLoading = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    loadingOpenModal = _useState20[0],
    setLoadingOpenModal = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    ErrorOpenModal = _useState22[0],
    setErrorOpenModal = _useState22[1];
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
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(Date.now()).format('DD/MM/YYYY');
  var Create = {
    person: user.data.userName + ' CREATED ',
    projectName,
    dateComment
  };
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState24 = _slicedToArray(_useState23, 2),
    saving = _useState24[0],
    setSaving = _useState24[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_22__["default"])(),
        customerName,
        projectName,
        status,
        phase,
        description,
        startDate,
        visitDate: invoiceDate,
        projectNumber,
        synced: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_19__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/create-projects"), data);
        if (res) {
          // Open Loading View
          handleOpen();
          // await db.projectSchema.add({ ...res.data.data, synced: true })
          onCreateOption(res.data.data);
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x) {
      return _ref1.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: true,
    id: "customerName",
    name: "customerName",
    label: "Customer Name",
    value: CustomerNameInfo,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_25__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_26__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_24__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_27__.DatePicker, {
    required: true,
    name: "visitDate",
    label: "Visit Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_35___default()(invoiceDate),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_25__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_26__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_24__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_27__.DatePicker, {
    required: true,
    name: "startDate",
    label: "Start Date",
    onChange: date => setStartDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    required: true,
    id: "ProjectName",
    name: "ProjectName",
    value: projectName,
    label: "Project Name",
    onChange: e => setProjectName(e.target.value.toUpperCase()),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    htmlFor: "projectNumber"
  }, "Project Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "number",
    id: "projectNumber",
    name: "projectNumber",
    label: "Project Number",
    value: projectNumber,
    onChange: e => setProjectNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      position: "start"
    }, "P-")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Phase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: "btnCustomer",
    onClick: handleAdd
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, phase.map((data, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "phase",
    id: "phase",
    label: "Phase",
    value: data,
    onChange: e => handleChange(e, i),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_33__["default"], {
    className: "btnCustomer",
    onClick: () => handleDelete(i)
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "status"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    id: "status",
    value: status,
    onChange: e => setStatus(e.target.value),
    name: "status",
    label: "status",
    defaultValue: "Pending"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: "Pending"
  }, "Pending"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: "On-Going"
  }, "On-Going"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: "Stopped"
  }, "Stopped"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: "Completed"
  }, "Completed")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "description",
    name: "description",
    value: description,
    label: "Description",
    multiline: true,
    rows: 4,
    onChange: e => setDescription(e.target.value.toUpperCase()),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, saving !== 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer6",
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "Saving...")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: loadingOpenModal,
    onClose: onClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_13__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_30__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
    onClick: onClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_13__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_30__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_29__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: 'red'
    }
  }, "Saving Failed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectFormView2);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUHJvamVjdFZpZXdfUHJvamVjdEZvcm1WaWV3Ml9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBbUQ7QUFDYztBQUN6QztBQUNFO0FBQzBCO0FBQ3NCO0FBQ3RCO0FBQ2dLO0FBQ3BKO0FBQ3ZDO0FBQ3NDO0FBQ2I7QUFDeEI7QUFDcUI7QUFDb0I7QUFDYTtBQUNoQjtBQUNKO0FBQ047QUFDUTtBQUNWO0FBQ0w7QUFDUTtBQUMrQjtBQUN0QztBQUNBO0FBQ2tCO0FBQ3BCO0FBQ3BCO0FBSTFCLElBQU1rRCxZQUFZLEdBQUdsQywwREFBTSxDQUFDbUMsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2hEdkQsMERBQUEsQ0FBQ3dCLDhEQUFPLEVBQUFpQyxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU9yQyw4REFBYyxDQUFDc0MsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDM0JDLFFBQVEsRUFBRTtJQUNaO0VBQ0YsQ0FBQztBQUFBLENBQUMsQ0FBQztBQUVILElBQU1DLFlBQVksR0FBR3JELDBEQUFNLENBQUNzRCxLQUFBO0VBQUEsSUFBR2xCLFNBQVMsR0FBQWtC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QjtJQUNwQkMsaUJBQWlCLEVBQUU5TixzREFBUztJQUM1QitOLGFBQWEsRUFBRTtNQUNiQyxPQUFPLEVBQUU7SUFDWCxDQUFFO0lBQ0YsbUJBQWdCLG1CQUFtQjtJQUNuQyxvQkFBaUI7RUFBeUIsZ0JBRTFDcFAsMERBQUEsQ0FBQ2lCLHNEQUFHO0lBQUM4TSxFQUFFLEVBQUFzQixhQUFBLENBQUFBLGFBQUEsS0FBT3hLLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxHQUUvQmdHLE9BQU8sZ0JBQUlsTCwwREFBQSxDQUFDdUMsMERBQU0sTUFBRSxDQUFDLGdCQUVwQnZDLDBEQUFBO0lBQUs2RSxLQUFLLEVBQUU7TUFBRTJKLGNBQWMsRUFBRSxRQUFRO01BQUVPLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzVEL08sMERBQUEseUJBQUdBLDBEQUFBLENBQUNzQyxtRUFBVTtJQUFDdUMsS0FBSyxFQUFFO01BQUVaLEtBQUssRUFBRSxLQUFLO01BQUVxTCxNQUFNLEVBQUUsTUFBTTtNQUFFcEssS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQUksQ0FBQyxlQUM3RWxGLDBEQUFBO0lBQUk2RSxLQUFLLEVBQUU7TUFBRVosS0FBSyxFQUFFO0lBQU07RUFBRSxHQUFDLGVBQWlCLENBQUMsZUFDL0NqRSwwREFBQTtJQUFRb0QsU0FBUyxFQUFDLGFBQWE7SUFBQ3FMLE9BQU8sRUFBRXpDO0VBQWlCLEdBQUMsV0FFbkQsQ0FDTCxDQUVKLENBQ0EsQ0FDSixDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlekcsZ0JBQWdCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvUHJvamVjdFZpZXcvUHJvamVjdEZvcm1WaWV3Mi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGVNYWludGVuYW5jZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZU1haW50ZW5hbmNlJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcyc7XHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgUGFwZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgc3R5bGVkLCBCb3gsIEF1dG9jb21wbGV0ZSwgTW9kYWwsIEJhY2tkcm9wLCBUYWJsZUNvbnRhaW5lciwgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0xvY2FsaXphdGlvblByb3ZpZGVyJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlUGlja2VyJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IERlbGV0ZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCBDdXN0b21lckZvcm1WaWV3MiBmcm9tICcuLi9DdXN0b21lclZJZXcvQ3VzdG9tZXJGb3JtVmlldzInO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IExpZ2h0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuXHJcblxyXG5jb25zdCBQcm9qZWN0Rm9ybVZpZXcyID0gKHsgb25DcmVhdGVPcHRpb24sIG9uQ2xvc2UsIG9uSWQsIG9uRXN0aW1hdGUgfSkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG4gIGNvbnN0IFtjdXN0b21lck5hbWUsIHNldEN1c3RvbWVyTmFtZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3Byb2plY3ROYW1lLCBzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BoYXNlLCBzZXRQaGFzZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgY29uc3QgW3Byb2plY3ROdW1iZXIsIHNldFByb2plY3ROdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNobGFzdE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbGFzdC1zYXZlZC1wcm9qZWN0YClcclxuICAgICAgICBjb25zdCBudW0gPSByZXMuZGF0YSAmJiByZXMuZGF0YS5wcm9qZWN0TnVtYmVyID8gKHBhcnNlSW50KHJlcy5kYXRhPy5kYXRhPy5wcm9qZWN0TnVtYmVyIHx8IHJlcy5kYXRhPy5wcm9qZWN0TnVtYmVyIHx8IDApKSA6IDA7XHJcbiAgICAgICAgc2V0UHJvamVjdE51bWJlcihudW0gKyAxKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaGxhc3ROdW1iZXIoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IFtDdXN0b21lck5hbWVJbmZvLCBzZXRDdXN0b21lck5hbWVJbmZvXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtpbnZvaWNlRGF0ZSwgc2V0SW52b2ljZURhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUmVsYXRlZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKG9uSWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzSW52b2ljZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pbnZvaWNlLyR7b25JZH1gKVxyXG4gICAgICAgICAgc2V0Q3VzdG9tZXJOYW1lSW5mbyhyZXNJbnZvaWNlLmRhdGEuZGF0YS5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lKTtcclxuICAgICAgICAgIHNldEN1c3RvbWVyTmFtZShyZXNJbnZvaWNlLmRhdGEuZGF0YS5jdXN0b21lck5hbWUpO1xyXG4gICAgICAgICAgc2V0SW52b2ljZURhdGUoZGF5anMocmVzSW52b2ljZS5kYXRhLmRhdGEuaW52b2ljZURhdGUpKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ25vIHJlbGF0ZWQnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChvbkVzdGltYXRlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lc3RpbWF0aW9uLyR7b25Fc3RpbWF0ZX1gKVxyXG4gICAgICAgICAgc2V0Q3VzdG9tZXJOYW1lSW5mbyhyZXMuZGF0YS5kYXRhLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUpO1xyXG4gICAgICAgICAgc2V0Q3VzdG9tZXJOYW1lKHJlcy5kYXRhLmRhdGEuY3VzdG9tZXJOYW1lKTtcclxuICAgICAgICAgIHNldEludm9pY2VEYXRlKGRheWpzKHJlcy5kYXRhLmRhdGEuZXN0aW1hdGVEYXRlKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdubyByZWxhdGVkJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoUmVsYXRlZCgpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFiYyA9IFsuLi5waGFzZSwgW11dXHJcbiAgICBzZXRQaGFzZShhYmMpXHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAob25DaGFuZ2VWYWx1ZSwgaSkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXREYXRhID0gWy4uLnBoYXNlXVxyXG4gICAgaW5wdXREYXRhW2ldID0gb25DaGFuZ2VWYWx1ZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIHNldFBoYXNlKGlucHV0RGF0YSlcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpKSA9PiB7XHJcbiAgICBjb25zdCBkZWxldGVQaGFzZSA9IFsuLi5waGFzZV1cclxuICAgIGRlbGV0ZVBoYXNlLnNwbGljZShpLCAxKVxyXG4gICAgc2V0UGhhc2UoZGVsZXRlUGhhc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGVDb21tZW50ID0gZGF5anMoRGF0ZS5ub3coKSkuZm9ybWF0KCdERC9NTS9ZWVlZJylcclxuICBjb25zdCBDcmVhdGUgPSB7XHJcbiAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgQ1JFQVRFRCAnLFxyXG4gICAgcHJvamVjdE5hbWUsXHJcbiAgICBkYXRlQ29tbWVudFxyXG4gIH1cclxuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNhdmluZygndHJ1ZScpXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBfaWQ6IHY0KCksXHJcbiAgICAgIGN1c3RvbWVyTmFtZSxcclxuICAgICAgcHJvamVjdE5hbWUsXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgcGhhc2UsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBzdGFydERhdGUsXHJcbiAgICAgIHZpc2l0RGF0ZTogaW52b2ljZURhdGUsXHJcbiAgICAgIHByb2plY3ROdW1iZXIsIHN5bmNlZDogZmFsc2VcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLXByb2plY3RzYCwgZGF0YSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAvLyBPcGVuIExvYWRpbmcgVmlld1xyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICAvLyBhd2FpdCBkYi5wcm9qZWN0U2NoZW1hLmFkZCh7IC4uLnJlcy5kYXRhLmRhdGEsIHN5bmNlZDogdHJ1ZSB9KVxyXG4gICAgICAgIG9uQ3JlYXRlT3B0aW9uKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHNldFNhdmluZygnJylcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiA+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9ID5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgaWQ9J2N1c3RvbWVyTmFtZSdcclxuICAgICAgICAgICAgICBuYW1lPSdjdXN0b21lck5hbWUnXHJcbiAgICAgICAgICAgICAgbGFiZWw9J0N1c3RvbWVyIE5hbWUnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e0N1c3RvbWVyTmFtZUluZm99XHJcbiAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3Zpc2l0RGF0ZSdcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J1Zpc2l0IERhdGUnXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhpbnZvaWNlRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgbmFtZT0nc3RhcnREYXRlJ1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nU3RhcnQgRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRTdGFydERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBpZD0nUHJvamVjdE5hbWUnXHJcbiAgICAgICAgICAgICAgbmFtZT0nUHJvamVjdE5hbWUnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3ROYW1lfVxyXG4gICAgICAgICAgICAgIGxhYmVsPSdQcm9qZWN0IE5hbWUnXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9qZWN0TmFtZShlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpKX1cclxuICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJwcm9qZWN0TnVtYmVyXCI+UHJvamVjdCBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgIGlkPSdwcm9qZWN0TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0ncHJvamVjdE51bWJlcidcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdQcm9qZWN0IE51bWJlcidcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0TnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9qZWN0TnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlAtPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxoMz5QaGFzZTwvaDM+XHJcbiAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVBZGR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcGhhc2UubWFwKChkYXRhLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhhc2VcIiBpZD1cInBoYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1BoYXNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInN0YXR1c1wiPlN0YXR1czwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXR1c31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdHVzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiUGVuZGluZ1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUGVuZGluZ1wiPlBlbmRpbmc8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiT24tR29pbmdcIj5Pbi1Hb2luZzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJTdG9wcGVkXCI+U3RvcHBlZDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJDb21wbGV0ZWRcIj5Db21wbGV0ZWQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBsYWJlbD0nRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkpfVxyXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2F2aW5nICE9PSAndHJ1ZScgPyA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPiA6IDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlNhdmluZy4uLjwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+U2F2aW5nIEZhaWxlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RGb3JtVmlldzJcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlTWFpbnRlbmFuY2UiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiRGVsZXRlSWNvbiIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJQYXBlciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJzdHlsZWQiLCJCb3giLCJBdXRvY29tcGxldGUiLCJNb2RhbCIsIkJhY2tkcm9wIiwiVGFibGVDb250YWluZXIiLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJheGlvcyIsIkFkZCIsIkFycm93VXB3YXJkT3V0bGluZWQiLCJFTkRQT0lOVF9VUkwiLCJ2NCIsInVzZU5hdmlnYXRlIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsIkFycm93QmFjayIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2FkZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiRGVsZXRlIiwiQ3VzdG9tZXJGb3JtVmlldzIiLCJDbG9zZSIsImRheWpzIiwiTGlnaHRUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJCbGFja1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIlZpZXdUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsIlByb2plY3RGb3JtVmlldzIiLCJfcmVmNyIsIm9uQ3JlYXRlT3B0aW9uIiwib25DbG9zZSIsIm9uSWQiLCJvbkVzdGltYXRlIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjgiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY3VzdG9tZXJOYW1lIiwic2V0Q3VzdG9tZXJOYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwcm9qZWN0TmFtZSIsInNldFByb2plY3ROYW1lIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInBoYXNlIiwic2V0UGhhc2UiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJfdXNlU3RhdGUxIiwiZGF0ZSIsIkRhdGUiLCJfdXNlU3RhdGUxMCIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJwcm9qZWN0TnVtYmVyIiwic2V0UHJvamVjdE51bWJlciIsImZldGNobGFzdE51bWJlciIsIl9yZWY5IiwiX3JlcyRkYXRhIiwiX3JlcyRkYXRhMiIsIm51bSIsInBhcnNlSW50IiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsIkN1c3RvbWVyTmFtZUluZm8iLCJzZXRDdXN0b21lck5hbWVJbmZvIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsImludm9pY2VEYXRlIiwic2V0SW52b2ljZURhdGUiLCJmZXRjaFJlbGF0ZWQiLCJfcmVmMCIsInJlc0ludm9pY2UiLCJsb2ciLCJlc3RpbWF0ZURhdGUiLCJoYW5kbGVBZGQiLCJhYmMiLCJoYW5kbGVDaGFuZ2UiLCJvbkNoYW5nZVZhbHVlIiwiaSIsImlucHV0RGF0YSIsInRhcmdldCIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJoYW5kbGVEZWxldGUiLCJkZWxldGVQaGFzZSIsInNwbGljZSIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xvc2VFcnJvciIsImRhdGVDb21tZW50Iiwibm93IiwiZm9ybWF0IiwiQ3JlYXRlIiwicGVyc29uIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsInNhdmluZyIsInNldFNhdmluZyIsImhhbmRsZVN1Ym1pdCIsIl9yZWYxIiwiZSIsInByZXZlbnREZWZhdWx0IiwiX2lkIiwidmlzaXREYXRlIiwic3luY2VkIiwicG9zdCIsIl94Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsInNwYWNpbmciLCJjb21wb25lbnQiLCJpdGVtIiwieHMiLCJkaXNhYmxlZCIsImlkIiwibmFtZSIsImxhYmVsIiwic3giLCJkYXRlQWRhcHRlciIsImNvbXBvbmVudHMiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwiaHRtbEZvciIsInR5cGUiLCJzdGFydEFkb3JubWVudCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm9uQ2xpY2siLCJtYXAiLCJrZXkiLCJkZWZhdWx0VmFsdWUiLCJtdWx0aWxpbmUiLCJyb3dzIiwidGV4dEFsaWduIiwib3BlbiIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsIl9vYmplY3RTcHJlYWQiLCJoZWlnaHQiLCJnYXAiXSwic291cmNlUm9vdCI6IiJ9