"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[2611],{

/***/ 22611
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FleetFormView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68525);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4640);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47767);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97834);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(71543);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8451);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(71510);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(40301);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(3100);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(95236);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(14519);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(99571);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(12717);
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay, {
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
function FleetFormView() {
  var _user$data, _user$data2;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    sideBar = _useState2[0],
    setSideBar = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    carMake = _useState4[0],
    setCarMake = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    carModel = _useState6[0],
    setCarModel = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    plateNumber = _useState8[0],
    setPlateNumber = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    chassisNumber = _useState0[0],
    setChassisNumber = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Running'),
    _useState10 = _slicedToArray(_useState1, 2),
    status = _useState10[0],
    setStatus = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    branchId = _useState12[0],
    setBranchId = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    branches = _useState14[0],
    setBranches = _useState14[1];
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_24__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_25__/* .selectCurrentUser */ .xu);
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useNavigate */ .Zp)();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    var fetchBranches = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_23__/* .ENDPOINT_URL */ .m, "/companyProfile"));
          if ((_res$data = res.data) !== null && _res$data !== void 0 && (_res$data = _res$data.data) !== null && _res$data !== void 0 && (_res$data = _res$data[0]) !== null && _res$data !== void 0 && _res$data.branches) {
            setBranches(res.data.data[0].branches);
            if (res.data.data[0].branches.length > 0) {
              setBranchId(localStorage.getItem('selectedBranch') || 'HQ');
            }
          }
        } catch (error) {
          console.error('Error fetching branches:', error);
        }
      });
      return function fetchBranches() {
        return _ref3.apply(this, arguments);
      };
    }();
    fetchBranches();
  }, []);
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    navigate('/LoginSystem');
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      if (!carMake || !carModel || !plateNumber) {
        react_toastify__WEBPACK_IMPORTED_MODULE_30__/* .toast */ .oR.error('Make, Model, and Plate Number are required');
        return;
      }
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_23__/* .ENDPOINT_URL */ .m, "/fleet"), {
          carMake,
          carModel,
          plateNumber,
          chassisNumber,
          status,
          branchId: branchId || 'HQ'
        });
        react_toastify__WEBPACK_IMPORTED_MODULE_30__/* .toast */ .oR.success('Vehicle added successfully!');
        setTimeout(() => {
          navigate('/FleetViewAdmin');
        }, 1500);
      } catch (error) {
        var _error$response;
        react_toastify__WEBPACK_IMPORTED_MODULE_30__/* .toast */ .oR.error(((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || 'Error adding car');
      }
    });
    return function handleSubmit(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      backgroundColor: '#f9f9f9',
      height: '100vh',
      width: '100%',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_30__/* .ToastContainer */ .N9, {
    position: "top-center",
    autoClose: 3000
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    style: {
      backgroundColor: '#202a5a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: {
      pr: '24px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Add New Vehicle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    name: user === null || user === void 0 || (_user$data = user.data) === null || _user$data === void 0 ? void 0 : _user$data.userName,
    role: user === null || user === void 0 || (_user$data2 = user.data) === null || _user$data2 === void 0 ? void 0 : _user$data2.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    maxWidth: "lg",
    sx: {
      mt: 4,
      mb: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    component: "form",
    onSubmit: handleSubmit,
    sx: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "h5",
    sx: {
      mb: 3
    }
  }, "Vehicle Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    label: "Vehicle Make",
    variant: "outlined",
    value: carMake,
    onChange: e => setCarMake(e.target.value),
    required: true,
    sx: {
      flex: '1 1 45%'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    label: "Vehicle Model",
    variant: "outlined",
    value: carModel,
    onChange: e => setCarModel(e.target.value),
    required: true,
    sx: {
      flex: '1 1 45%'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    label: "Plate Number",
    variant: "outlined",
    value: plateNumber,
    onChange: e => setPlateNumber(e.target.value),
    required: true,
    sx: {
      flex: '1 1 45%'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    label: "Chassis Number",
    variant: "outlined",
    value: chassisNumber,
    onChange: e => setChassisNumber(e.target.value),
    sx: {
      flex: '1 1 45%'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      flex: '1 1 45%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    value: status,
    label: "Status",
    onChange: e => setStatus(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "Running"
  }, "Running"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "Stopped"
  }, "Stopped"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "Sold"
  }, "Sold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "Damaged"
  }, "Damaged"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      flex: '1 1 45%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null, "Branch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    value: branchId,
    label: "Branch",
    onChange: e => setBranchId(e.target.value)
  }, branches.map(b => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    key: b.branchId,
    value: b.branchId
  }, b.branchName, " (", b.branchId, ")"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      mt: 4,
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    variant: "outlined",
    color: "secondary",
    onClick: () => navigate('/FleetViewAdmin')
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    variant: "contained",
    type: "submit",
    style: {
      backgroundColor: '#202a5a'
    }
  }, "Save Vehicle")))))));
}

/***/ }

}]);