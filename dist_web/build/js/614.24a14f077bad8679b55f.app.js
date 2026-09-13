"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[614],{

/***/ 99682
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20561);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), 'Add'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 70614
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68525);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37636);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(58331);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14519);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(71543);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(97834);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8451);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(13561);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(71510);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(32005);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(47767);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(40301);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(4640);
/* harmony import */ var _component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(34687);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(99682);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(17809);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(65821);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(28597);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(1835);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(3100);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(95236);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(99571);
var _excluded = ["className"],
  _excluded2 = ["className"];
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;





































var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A.tooltip)]: {
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
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref5 => {
  var theme = _ref5.theme,
    open = _ref5.open;
  return _objectSpread({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }, open && {
    marginLeft: drawerWidth,
    width: "calc(100% - ".concat(drawerWidth, "px)"),
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  });
});
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref6 => {
  var theme = _ref6.theme,
    open = _ref6.open;
  return {
    '& .MuiDrawer-paper': _objectSpread({
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      boxSizing: 'border-box'
    }, !open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9)
      }
    })
  };
});
function RateViewAdmin() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_24__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_24__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_27__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_27__/* .setUser */ .gV)({
              userName: Name,
              role: Role,
              id: res.data.data._id
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
            react_toastify__WEBPACK_IMPORTED_MODULE_41__/* .toast */ .oR.error('Failed to fetch user data.');
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_27__/* .logOut */ .je)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    rate = _useState2[0],
    setRate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    rateReturned = _useState4[0],
    setRateReturned = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    PayRate = _useState6[0],
    setPayRate = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    category = _useState8[0],
    setCategory = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    cash = _useState0[0],
    setCash = _useState0[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/rate"));
          setRate(res.data.data);
          var resReturn = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/rateReturn"));
          setRateReturned(resReturn.data.data);
          localStorage.setItem('Rate', JSON.stringify(res.data.data));
          var resRatePayment = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/paymentRate"));
          setPayRate(resRatePayment.data.data);
          localStorage.setItem('PaymentRate', JSON.stringify(resRatePayment.data.data));

          // Save POS Category to State and LocalStorage
          var resCategory = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/expensesCategory"));
          var formatDate = resCategory.data.data.map((item, i) => _objectSpread(_objectSpread({}, item), {}, {
            id: item._id,
            number: i + 1
          }));
          localStorage.setItem('Category', JSON.stringify(resCategory.data.data));
          setCategory(formatDate);
          var resCash = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/cash"));
          var formatDate1 = resCash.data.data.map(item => _objectSpread(_objectSpread({}, item), {}, {
            id: item._id,
            dataField: dayjs__WEBPACK_IMPORTED_MODULE_38___default()(item.cashDate).format('DD/MM/YYYY')
          }));
          localStorage.setItem('Cash', JSON.stringify(resCash.data.data));
          setCash(formatDate1.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
          react_toastify__WEBPACK_IMPORTED_MODULE_41__/* .toast */ .oR.error('Connection error.');
        }
      });
      return function fetchData() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    selectedRows = _useState10[0],
    setSelectedRows = _useState10[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    filterModel = _React$useState4[0],
    setFilterModel = _React$useState4[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    columnVisibilityModel = _useState12[0],
    setColumnVisibilityModel = _useState12[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsDailyExpensesCategory', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    setFilterModel(newModel);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterDailyExpensesCategoryTst'));
    if (storedQuick) {
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsDailyExpensesCategory'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, []);
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    open1 = _useState14[0],
    setOpen1 = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    updateId = _useState16[0],
    setUpdateId = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    open3 = _useState18[0],
    setOpen3 = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    updateId1 = _useState20[0],
    setUpdateId1 = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    open2 = _useState22[0],
    setOpen2 = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    updateIdRate = _useState24[0],
    setUpdateIdRate = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    updateRate = _useState26[0],
    setUpdateRate = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    updateRateReturn = _useState28[0],
    setUpdateRateReturn = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    updatePaymentRate = _useState30[0],
    setUpdatePaymentRate = _useState30[1];
  var handleOpenUpdate = id => {
    setOpen1(true);
    setUpdateId(id);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
    setUpdateId(null);
  };
  var handleOpenUpdateReturn = id => {
    setOpen3(true);
    setUpdateId1(id);
  };
  var handleCloseUpdateReturn = () => {
    setOpen3(false);
    setUpdateId1(null);
  };
  var handleOpenUpdatePayment = id => {
    setOpen2(true);
    setUpdateIdRate(id);
  };
  var handleCloseUpdatePayment = () => {
    setOpen2(false);
    setUpdateIdRate(null);
  };
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    loading = _useState32[0],
    setLoading = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    loadingOpenModal = _useState34[0],
    setLoadingOpenModal = _useState34[1];

  // Category Modal State
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    openCategoryModal = _useState36[0],
    setOpenCategoryModal = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    isEditCategory = _useState38[0],
    setIsEditCategory = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState40 = _slicedToArray(_useState39, 2),
    categoryEditId = _useState40[0],
    setCategoryEditId = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState42 = _slicedToArray(_useState41, 2),
    categoryInputName = _useState42[0],
    setCategoryInputName = _useState42[1];
  var handleOpenCategoryModal = function handleOpenCategoryModal() {
    var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (row) {
      setIsEditCategory(true);
      setCategoryEditId(row._id || row.id);
      setCategoryInputName(row.expensesCategory || "");
    } else {
      setIsEditCategory(false);
      setCategoryEditId(null);
      setCategoryInputName("");
    }
    setOpenCategoryModal(true);
  };
  var handleCloseCategoryModal = () => {
    setOpenCategoryModal(false);
    setIsEditCategory(false);
    setCategoryEditId(null);
    setCategoryInputName("");
  };
  var handleSubmitCategory = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var trimmed = (categoryInputName || "").trim();
      if (!trimmed) {
        react_toastify__WEBPACK_IMPORTED_MODULE_41__/* .toast */ .oR.error('Category name is required.');
        return;
      }
      try {
        if (isEditCategory && categoryEditId) {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/update-expensesCategory/").concat(categoryEditId), {
            expensesCategory: trimmed
          });
          if (res) {
            localStorage.removeItem('Category');
            handleCloseCategoryModal();
            handleOpenLoading();
          }
        } else {
          var _res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/create-expensesCategory"), {
            expensesCategory: trimmed
          });
          if (_res) {
            localStorage.removeItem('Category');
            handleCloseCategoryModal();
            handleOpenLoading();
          }
        }
      } catch (error) {
        var _error$response;
        console.error('Error saving category:', error);
        react_toastify__WEBPACK_IMPORTED_MODULE_41__/* .toast */ .oR.error(((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.error) || 'Failed to save category.');
      }
    });
    return function handleSubmitCategory(_x) {
      return _ref9.apply(this, arguments);
    };
  }();
  {/** Loading Update View Start */}
  var handleOpenLoading = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    handleCloseUpdate();
    handleCloseUpdatePayment();
    handleCloseUpdateReturn();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleCloseLoading = () => {
    window.location.reload();
  };
  {/** Loading Update View End */}

  /** Start of Getting All Rate */
  ;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchRateId = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        if (updateId !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/get-rate/").concat(updateId));
            setUpdateRate(res.data.data.rate);
          } catch (error) {
            console.error('Error fetching data:', error);
            react_toastify__WEBPACK_IMPORTED_MODULE_41__/* .toast */ .oR.error('Error fetching rate.');
          }
        }
      });
      return function fetchRateId() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchRateId();
  }, [updateId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchRateId = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (updateId1 !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/get-rateReturn/").concat(updateId1));
            setUpdateRateReturn(res.data.data.rateR);
          } catch (error) {
            console.error('Error fetching data:', error);
            react_toastify__WEBPACK_IMPORTED_MODULE_41__/* .toast */ .oR.error('Error fetching rate.');
          }
        }
      });
      return function fetchRateId() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchRateId();
  }, [updateId1]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchPayId = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        if (updateIdRate !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/get-paymentRate/").concat(updateIdRate));
            setUpdatePaymentRate(res.data.data.paymentRate);
          } catch (error) {
            console.error('Error fetching data:', error);
            react_toastify__WEBPACK_IMPORTED_MODULE_41__/* .toast */ .oR.error('Error fetching rate.');
          }
        }
      });
      return function fetchPayId() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchPayId();
  }, [updateIdRate]);
  /** End of Getting All Rate */
  /** Start of Updating All Rate */
  var handleSubmitUpdateStatus = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        rate: updateRate
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/update-rate/").concat(updateId), data);
        if (res) {
          handleOpenLoading();
        }
      } catch (error) {
        console.error('Error making POST request:', error);
        react_toastify__WEBPACK_IMPORTED_MODULE_41__/* .toast */ .oR.error('Update failed.');
      }
    });
    return function handleSubmitUpdateStatus(_x2) {
      return _ref11.apply(this, arguments);
    };
  }();
  var handleSubmitUpdateStatusReturn = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        rateR: updateRateReturn
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/update-rateReturn/").concat(updateId1), data);
        if (res) {
          handleOpenLoading();
        }
      } catch (error) {
        console.error('Error making POST request:', error);
        react_toastify__WEBPACK_IMPORTED_MODULE_41__/* .toast */ .oR.error('Update failed.');
      }
    });
    return function handleSubmitUpdateStatusReturn(_x3) {
      return _ref12.apply(this, arguments);
    };
  }();
  var handleSubmitUpdateStatusRate = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        paymentRate: updatePaymentRate
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/update-paymentRate/").concat(updateIdRate), data);
        if (res) {
          handleOpenLoading();
        }
      } catch (error) {
        console.error('Error making POST request:', error);
        react_toastify__WEBPACK_IMPORTED_MODULE_41__/* .toast */ .oR.error('Update failed.');
      }
    });
    return function handleSubmitUpdateStatusRate(_x4) {
      return _ref13.apply(this, arguments);
    };
  }();
  /** End of Updating All Rate */
  var columns = [{
    field: 'number',
    headerName: '#',
    width: 70
  }, {
    field: 'expensesCategory',
    headerName: 'Category',
    flex: 1,
    minWidth: 150
  }, {
    field: 'action',
    headerName: 'Action',
    width: 90,
    sortable: false,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        height: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditTooltip, {
      title: "Edit Category"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      size: "small",
      onClick: () => handleOpenCategoryModal(params.row),
      sx: {
        color: '#202a5a'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {
      fontSize: "small"
    }))))
  }];
  var columns1 = [{
    field: 'cashNumber',
    headerName: '#',
    width: 80
  }, {
    field: 'dataField',
    headerName: 'Date',
    width: 100
  }, {
    field: 'status',
    headerName: 'Daily Status',
    width: 80
  }, {
    field: 'totalExpensesFC',
    headerName: 'A-ExpensesFC',
    width: 150,
    renderCell: params => {
      var _params$row$totalExpe;
      return "FC".concat(params.row.totalExpensesFC !== undefined ? (_params$row$totalExpe = params.row.totalExpensesFC) === null || _params$row$totalExpe === void 0 ? void 0 : _params$row$totalExpe.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0);
    }
  }, {
    field: 'totalExpensesUSD',
    headerName: 'A-Expenses$',
    width: 150,
    renderCell: params => {
      var _params$row$totalExpe2;
      return "$".concat(params.row.totalExpensesUSD !== undefined ? (_params$row$totalExpe2 = params.row.totalExpensesUSD) === null || _params$row$totalExpe2 === void 0 ? void 0 : _params$row$totalExpe2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0);
    }
  }, {
    field: 'totalPayrollUSD',
    headerName: 'A-PayRoll',
    width: 150,
    renderCell: params => {
      var _params$row$totalPayr;
      return "$".concat(params.row.totalPayrollUSD !== undefined ? (_params$row$totalPayr = params.row.totalPayrollUSD) === null || _params$row$totalPayr === void 0 ? void 0 : _params$row$totalPayr.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0);
    }
  }, {
    field: 'totalItemPurchaseUSD',
    headerName: 'A-ItemPurchase',
    width: 150,
    renderCell: params => {
      var _params$row$totalItem;
      return "$".concat(params.row.totalItemPurchaseUSD !== undefined ? (_params$row$totalItem = params.row.totalItemPurchaseUSD) === null || _params$row$totalItem === void 0 ? void 0 : _params$row$totalItem.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0);
    }
  }, {
    field: 'returnAmountFC',
    headerName: 'A-ReturnFC',
    width: 150,
    renderCell: params => {
      var _params$row$returnAmo;
      return "FC".concat(params.row.returnAmountFC !== undefined ? (_params$row$returnAmo = params.row.returnAmountFC) === null || _params$row$returnAmo === void 0 ? void 0 : _params$row$returnAmo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0);
    }
  }, {
    field: 'returnAmountUSD',
    headerName: 'A-Return$',
    width: 150,
    renderCell: params => {
      var _params$row$returnAmo2;
      return "$".concat(params.row.returnAmountUSD !== undefined ? (_params$row$returnAmo2 = params.row.returnAmountUSD) === null || _params$row$returnAmo2 === void 0 ? void 0 : _params$row$returnAmo2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0);
    }
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    container: true,
    style: {
      textAlign: 'center',
      padding: '10px'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    style: {
      width: '100%',
      fontSize: '20px',
      marginTop: '16px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    colSpan: 3,
    style: {
      textAlign: 'center'
    }
  }, "Today's Rate"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, rate.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$"), " 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "FC"), " ", row.rate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditTooltip, {
    title: "Edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    onClick: () => handleOpenUpdate(row._id)
  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {
    style: {
      color: 'gray'
    }
  }))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    style: {
      width: '100%',
      fontSize: '20px',
      marginTop: '16px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    colSpan: 3,
    style: {
      textAlign: 'center'
    }
  }, "POS Rate"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, rateReturned === null || rateReturned === void 0 ? void 0 : rateReturned.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$"), " 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "FC"), " ", row.rateR), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditTooltip, {
    title: "Edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    onClick: () => handleOpenUpdateReturn(row._id)
  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {
    style: {
      color: 'gray'
    }
  }))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    style: {
      width: '100%',
      fontSize: '20px',
      marginTop: '16px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    colSpan: 3,
    style: {
      textAlign: 'center'
    }
  }, "Paying Rate"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, PayRate.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$"), " 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "FC"), " ", row.paymentRate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditTooltip, {
    title: "Edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    onClick: () => handleOpenUpdatePayment(row._id)
  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {
    style: {
      color: 'gray'
    }
  })))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,
    sx: {
      width: '100%',
      height: '100%',
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    item: true,
    xs: 6,
    sx: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    variant: "h6"
  }, "All Category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    item: true,
    xs: 6,
    sx: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditTooltip, {
    title: "Add New Category"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {
    className: "btnCustomer",
    style: {
      fontSize: '36px',
      cursor: 'pointer'
    },
    onClick: () => handleOpenCategoryModal(null)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    sx: {
      height: 450,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_37__/* .DataGrid */ .zh, {
    rows: category,
    columns: columns,
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    hideFooter: true,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,
    sx: {
      width: '100%',
      height: '330px',
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_37__/* .DataGrid */ .zh, {
    rows: cash,
    columns: columns1,
    hideFooter: true,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Update Today's Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmitUpdateStatus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    value: updateRate,
    name: "updateRate",
    onChange: e => setUpdateRate(e.target.value),
    label: "Rate",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Update")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    open: open2,
    onClose: handleCloseUpdatePayment,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    onClick: handleCloseUpdatePayment,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Update Paying Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmitUpdateStatusRate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    value: updatePaymentRate,
    name: "updatePaymentRate",
    onChange: e => setUpdatePaymentRate(e.target.value),
    label: "Rate",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Update")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    open: open3,
    onClose: handleCloseUpdateReturn,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    onClick: handleCloseUpdateReturn,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Update POS Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmitUpdateStatusReturn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    value: updateRateReturn,
    name: "updateRateReturn",
    onChange: e => setUpdateRateReturn(e.target.value),
    label: "Rate",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Update")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    open: openCategoryModal,
    onClose: handleCloseCategoryModal,
    "aria-labelledby": "modal-category-title",
    "aria-describedby": "modal-category-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    onClick: handleCloseCategoryModal,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    id: "modal-category-title",
    variant: "h6",
    component: "h2",
    sx: {
      mb: 2,
      fontWeight: 'bold',
      color: '#202a5a'
    }
  }, isEditCategory ? 'Edit Category' : 'Add New Category'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmitCategory
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    value: categoryInputName,
    name: "categoryInputName",
    onChange: e => setCategoryInputName(e.target.value),
    label: "Category Name",
    required: true,
    fullWidth: true,
    autoFocus: true,
    sx: {
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, isEditCategory ? 'Update Category' : 'Save Category')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: handleCloseLoading,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleCloseLoading,
    className: "btnCustomer"
  }, "Close"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RateViewAdmin);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);