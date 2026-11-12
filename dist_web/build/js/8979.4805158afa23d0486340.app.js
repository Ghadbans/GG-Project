"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[8979],{

/***/ 28979
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84976);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47767);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99380);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82022);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14519);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8532);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71543);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49799);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97834);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(33198);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64137);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(96627);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(86798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(70691);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(43884);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(73357);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(56655);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(94405);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(77037);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(46831);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(22477);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(58763);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(88248);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(8451);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(16718);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(5673);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(28597);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(67034);
/* harmony import */ var _mui_icons_material_RequestQuote__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(82574);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(64745);
/* harmony import */ var _mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(42376);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(32005);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(71510);
/* harmony import */ var _component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(34687);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(95236);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(83818);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(40301);
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;






















var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref => {
  var theme = _ref.theme,
    open = _ref.open;
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Ay, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref2 => {
  var theme = _ref2.theme,
    open = _ref2.open;
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
function InspectionReportView() {
  var _user$data, _user$data2;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_46__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_46__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__/* .selectCurrentUser */ .xu);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    sideBar = _useState2[0],
    setSideBar = _useState2[1];
  var toggleDrawer = () => setSideBar(!sideBar);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    reports = _useState4[0],
    setReports = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    search = _useState8[0],
    setSearch = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All'),
    _useState0 = _slicedToArray(_useState9, 2),
    statusFilter = _useState0[0],
    setStatusFilter = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    deleteId = _useState10[0],
    setDeleteId = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    deleteOpen = _useState12[0],
    setDeleteOpen = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    deleting = _useState14[0],
    setDeleting = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__/* .setUser */ .gV)({
              userName: Name,
              role: Role,
              id: res.data.data._id
            }));
          } catch (error) {
            console.error('Error fetching user:', error);
          }
        } else {
          navigate('/');
        }
      });
      return function fetchUser() {
        return _ref3.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch, navigate]);
  var handleLogout = () => {
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__/* .logOut */ .je)());
    navigate('/');
  };
  var fetchReports = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* () {
      setLoading(true);
      try {
        var params = {};
        if (search.trim()) params.search = search.trim();
        if (statusFilter !== 'All') params.status = statusFilter;
        var res = yield axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__/* .ENDPOINT_URL */ .m, "/inspection-reports"), {
          params
        });
        if (res.data && res.data.success) {
          setReports(res.data.data || []);
        }
      } catch (err) {
        console.error('Error fetching inspection reports:', err);
      } finally {
        setLoading(false);
      }
    });
    return function fetchReports() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchReports();
  }, [statusFilter]);
  var handleSearchSubmit = e => {
    e.preventDefault();
    fetchReports();
  };
  var handleOpenDelete = id => {
    setDeleteId(id);
    setDeleteOpen(true);
  };
  var handleConfirmDelete = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(function* () {
      if (!deleteId) return;
      setDeleting(true);
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__/* .ENDPOINT_URL */ .m, "/inspection-reports/").concat(deleteId));
        setReports(prev => prev.filter(r => r._id !== deleteId));
        setDeleteOpen(false);
        setDeleteId(null);
      } catch (err) {
        console.error('Error deleting report:', err);
      } finally {
        setDeleting(false);
      }
    });
    return function handleConfirmDelete() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleConvertToQuote = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(function* (row) {
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__/* .ENDPOINT_URL */ .m, "/inspection-reports/").concat(row._id, "/convert-quote"));
        setReports(prev => prev.map(r => r._id === row._id ? _objectSpread(_objectSpread({}, r), {}, {
          status: 'CONVERTED TO QUOTE'
        }) : r));
      } catch (err) {
        console.error('Error updating status on convert:', err);
      }
      navigate('/EstimateInvoiceForm', {
        state: {
          fromInspectionReport: true,
          reportId: row._id,
          reportCode: row.reportCode,
          customerId: row.customerId,
          customerName: row.customerName,
          estimateSubject: row.subject || "Technical Remediation - ".concat(row.reportCode || '')
        }
      });
    });
    return function handleConvertToQuote(_x) {
      return _ref6.apply(this, arguments);
    };
  }();

  // Quick Status Menu State & Handler
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    statusMenuAnchor = _useState16[0],
    setStatusMenuAnchor = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    selectedReportForStatus = _useState18[0],
    setSelectedReportForStatus = _useState18[1];
  var handleOpenStatusMenu = (e, row) => {
    e.stopPropagation();
    setStatusMenuAnchor(e.currentTarget);
    setSelectedReportForStatus(row);
  };
  var handleCloseStatusMenu = () => {
    setStatusMenuAnchor(null);
    setSelectedReportForStatus(null);
  };
  var handleUpdateStatus = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(function* (newStatus) {
      if (!selectedReportForStatus) return;
      var targetId = selectedReportForStatus._id;
      var quoteNum = selectedReportForStatus.linkedQuotationNumber || '';
      if (newStatus === 'CONVERTED TO QUOTE' && !quoteNum) {
        var input = window.prompt('Enter Quotation Number (e.g. Q-001753) or leave blank:', '');
        if (input !== null) {
          quoteNum = input.trim();
        }
      }
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.patch("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__/* .ENDPOINT_URL */ .m, "/inspection-reports/").concat(targetId, "/status"), {
          status: newStatus,
          quotationNumber: quoteNum
        });
        setReports(prev => prev.map(r => r._id === targetId ? _objectSpread(_objectSpread({}, r), {}, {
          status: newStatus,
          linkedQuotationNumber: quoteNum
        }) : r));
      } catch (err) {
        console.error('Error updating status:', err);
      } finally {
        handleCloseStatusMenu();
      }
    });
    return function handleUpdateStatus(_x2) {
      return _ref7.apply(this, arguments);
    };
  }();
  var getStatusChip = (status, row) => {
    var s = (status || '').toUpperCase();
    switch (s) {
      case 'COMPLETED':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
          label: "COMPLETED",
          size: "small",
          sx: {
            backgroundColor: '#e0f2fe',
            color: '#0369a1',
            fontWeight: 'bold'
          }
        });
      case 'SENT TO CLIENT':
      case 'SENT':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
          label: "SENT TO CLIENT",
          size: "small",
          sx: {
            backgroundColor: '#dcfce7',
            color: '#15803d',
            fontWeight: 'bold'
          }
        });
      case 'CONVERTED TO QUOTE':
      case 'CONVERTED':
        var quoteLabel = row !== null && row !== void 0 && row.linkedQuotationNumber ? "CONVERTED TO QUOTE ".concat(row.linkedQuotationNumber) : 'CONVERTED TO QUOTE';
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
          label: quoteLabel,
          size: "small",
          sx: {
            backgroundColor: '#fef3c7',
            color: '#b45309',
            fontWeight: 'bold'
          }
        });
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
          label: "DRAFT",
          size: "small",
          sx: {
            backgroundColor: '#f1f5f9',
            color: '#64748b',
            fontWeight: 'bold'
          }
        });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#202a5a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    sx: {
      pr: '24px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .A, {
    sx: {
      mr: 1.5,
      fontSize: 26
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1,
      fontWeight: 600
    }
  }, "Technical Inspection Reports"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, {
    name: (user === null || user === void 0 || (_user$data = user.data) === null || _user$data === void 0 ? void 0 : _user$data.userName) || '',
    role: (user === null || user === void 0 || (_user$data2 = user.data) === null || _user$data2 === void 0 ? void 0 : _user$data2.role) || ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      pt: 10,
      pb: 6,
      px: {
        xs: 2,
        sm: 3
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    maxWidth: "xl",
    disableGutters: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 3,
      flexWrap: 'wrap',
      gap: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "h5",
    sx: {
      fontWeight: 700,
      color: '#0f172a'
    }
  }, "Inspection Reports Registry"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "body2",
    sx: {
      color: '#64748b'
    }
  }, "Engineering surveys, diagnostic root causes, and remediation action plans")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    variant: "contained",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .NavLink */ .k2,
    to: "/InspectionReportForm",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, null),
    sx: {
      backgroundColor: '#30368a',
      '&:hover': {
        backgroundColor: '#1e2468'
      },
      textTransform: 'none',
      fontWeight: 600,
      px: 3,
      py: 1
    }
  }, "New Inspection Report")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    sx: {
      p: 2,
      mb: 3,
      borderRadius: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSearchSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      gap: 2,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    placeholder: "Search by subject, customer, report #, or location...",
    value: search,
    onChange: e => setSearch(e.target.value),
    sx: {
      flex: {
        xs: '1 1 100%',
        md: '1 1 auto'
      }
    },
    InputProps: {
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        type: "submit",
        size: "small"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, null))
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    size: "small",
    sx: {
      minWidth: 200
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    id: "status-filter-label"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    labelId: "status-filter-label",
    value: statusFilter,
    label: "Status",
    onChange: e => setStatusFilter(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    value: "All"
  }, "All Statuses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    value: "DRAFT"
  }, "Draft"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    value: "COMPLETED"
  }, "Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    value: "SENT TO CLIENT"
  }, "Sent to Client"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    value: "CONVERTED TO QUOTE"
  }, "Converted to Quote"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    type: "submit",
    variant: "outlined",
    sx: {
      textTransform: 'none',
      borderColor: '#cbd5e1',
      color: '#334155'
    }
  }, "Apply")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,
    sx: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    size: "medium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    sx: {
      backgroundColor: '#f8fafc'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      color: '#334155'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      color: '#334155'
    }
  }, "REPORT #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      color: '#334155'
    }
  }, "DATE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      color: '#334155'
    }
  }, "CLIENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      color: '#334155'
    }
  }, "SUBJECT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      color: '#334155'
    }
  }, "LOCATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      color: '#334155'
    }
  }, "STATUS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      color: '#334155',
      textAlign: 'center'
    }
  }, "ACTIONS"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    colSpan: 8,
    sx: {
      textAlign: 'center',
      py: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
    size: 32
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "body2",
    sx: {
      mt: 1.5,
      color: '#64748b'
    }
  }, "Loading inspection reports..."))) : reports.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    colSpan: 8,
    sx: {
      textAlign: 'center',
      py: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .A, {
    sx: {
      fontSize: 48,
      color: '#cbd5e1',
      mb: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "body1",
    sx: {
      color: '#64748b',
      fontWeight: 600
    }
  }, "No inspection reports found."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "body2",
    sx: {
      color: '#94a3b8'
    }
  }, "Click \"New Inspection Report\" above to create your first report."))) : reports.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
    key: row._id,
    hover: true,
    sx: {
      '&:last-child td, &:last-child th': {
        border: 0
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      color: '#64748b'
    }
  }, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      color: '#30368a'
    }
  }, row.reportCode || "IR-".concat(String(row.reportNumber || 0).padStart(4, '0'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      color: '#334155'
    }
  }, row.date ? dayjs__WEBPACK_IMPORTED_MODULE_45___default()(row.date).format('DD/MM/YYYY') : '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      fontWeight: 600,
      color: '#0f172a'
    }
  }, row.customerName || 'Direct / Unlisted Client'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      maxWidth: 300,
      color: '#334155'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "body2",
    noWrap: true,
    title: row.subject
  }, row.subject || '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      color: '#64748b'
    }
  }, row.location || '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    title: "Click to change status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    onClick: e => handleOpenStatusMenu(e, row),
    sx: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, getStatusChip(row.status, row)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      textAlign: 'center',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    title: "View & Print Official PDF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    size: "small",
    sx: {
      color: '#0284c7'
    },
    onClick: () => navigate("/InspectionReportPrintView/".concat(row._id))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A, {
    fontSize: "small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    title: "Edit Report"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    size: "small",
    sx: {
      color: '#d97706'
    },
    onClick: () => navigate("/InspectionReportForm/".concat(row._id))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, {
    fontSize: "small"
  }))), row.status !== 'CONVERTED TO QUOTE' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    title: "Convert to Quotation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    size: "small",
    sx: {
      color: '#16a34a'
    },
    onClick: () => handleConvertToQuote(row)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_RequestQuote__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, {
    fontSize: "small"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    title: row.linkedQuotationNumber ? "Quotation: ".concat(row.linkedQuotationNumber) : 'View Quotations'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    size: "small",
    sx: {
      color: '#0284c7'
    },
    onClick: () => navigate('/EstimateViewAdmin')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_RequestQuote__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, {
    fontSize: "small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    title: "Delete Report"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    size: "small",
    sx: {
      color: '#dc2626'
    },
    onClick: () => handleOpenDelete(row._id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A, {
    fontSize: "small"
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, {
    anchorEl: statusMenuAnchor,
    open: Boolean(statusMenuAnchor),
    onClose: handleCloseStatusMenu,
    PaperProps: {
      sx: {
        borderRadius: 2,
        minWidth: 230,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    onClick: () => handleUpdateStatus('DRAFT'),
    sx: {
      fontSize: '0.85rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    label: "DRAFT",
    size: "small",
    sx: {
      mr: 1.5,
      backgroundColor: '#f1f5f9',
      color: '#64748b',
      fontWeight: 'bold'
    }
  }), "In Progress / Survey Draft"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    onClick: () => handleUpdateStatus('COMPLETED'),
    sx: {
      fontSize: '0.85rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    label: "COMPLETED",
    size: "small",
    sx: {
      mr: 1.5,
      backgroundColor: '#e0f2fe',
      color: '#0369a1',
      fontWeight: 'bold'
    }
  }), "Inspection Completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    onClick: () => handleUpdateStatus('SENT TO CLIENT'),
    sx: {
      fontSize: '0.85rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    label: "SENT TO CLIENT",
    size: "small",
    sx: {
      mr: 1.5,
      backgroundColor: '#dcfce7',
      color: '#15803d',
      fontWeight: 'bold'
    }
  }), "Sent to Client"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    onClick: () => handleUpdateStatus('CONVERTED TO QUOTE'),
    sx: {
      fontSize: '0.85rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    label: "CONVERTED TO QUOTE",
    size: "small",
    sx: {
      mr: 1.5,
      backgroundColor: '#fef3c7',
      color: '#b45309',
      fontWeight: 'bold'
    }
  }), "Converted to Quotation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, {
    open: deleteOpen,
    onClose: () => setDeleteOpen(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700
    }
  }, "Confirm Deletion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "body2",
    sx: {
      color: '#475569'
    }
  }, "Are you sure you want to permanently delete this inspection report? This action cannot be undone.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {
    sx: {
      p: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    onClick: () => setDeleteOpen(false),
    sx: {
      textTransform: 'none',
      color: '#64748b'
    }
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    onClick: handleConfirmDelete,
    variant: "contained",
    disabled: deleting,
    sx: {
      backgroundColor: '#dc2626',
      '&:hover': {
        backgroundColor: '#b91c1c'
      },
      textTransform: 'none'
    }
  }, deleting ? 'Deleting...' : 'Delete'))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InspectionReportView);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);