"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[3741],{

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

/***/ 67110
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20561);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), 'Delete'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 13741
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55746);
/* harmony import */ var _component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34687);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27558);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17532);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33198);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64137);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(96627);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(70691);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(43884);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(11848);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(99380);
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(46986);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(71510);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(99682);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(67110);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(84976);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(47767);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(58331);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(14519);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(71543);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(97834);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(8451);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(40301);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(20889);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(65821);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(39781);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(28597);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(3100);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(95236);
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
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








































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A.tooltip)]: {
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
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref7 => {
  var theme = _ref7.theme,
    open = _ref7.open;
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Ay, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref8 => {
  var theme = _ref8.theme,
    open = _ref8.open;
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
function RolePermission() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_26__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_38__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_38__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_39__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_22__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_39__/* .setUser */ .gV)({
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
        return _ref9.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_39__/* .logOut */ .je)());
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
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCategory = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var res = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_21__/* .cachedGet */ .Fe)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_22__/* .ENDPOINT_URL */ .m, "/grantAccess"));
          var data = res.data.data;

          // Patch each access record to ensure Block-Factory is present for the UI list
          data = data.map(item => {
            var modules = item.modules || [];
            if (!modules.find(m => m.moduleName === 'Reports')) {
              modules.push({
                id: 19,
                moduleName: 'Reports',
                access: {
                  readM: false,
                  createM: false,
                  viewM: false,
                  editM: false,
                  deleteM: false
                }
              });
            }
            if (!modules.find(m => m.moduleName === 'Block-Factory')) {
              modules.push({
                id: 20,
                moduleName: 'Block-Factory',
                access: {
                  readM: false,
                  createM: false,
                  viewM: false,
                  editM: false,
                  deleteM: false
                }
              });
            }
            if (!modules.find(m => m.moduleName === 'Block-Mixer')) {
              modules.push({
                id: 21,
                moduleName: 'Block-Mixer',
                access: {
                  readM: false,
                  createM: false,
                  viewM: false,
                  editM: false,
                  deleteM: false
                }
              });
            }
            return _objectSpread(_objectSpread({}, item), {}, {
              modules
            });
          });
          setGrantAccess(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchCategory() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchCategory();
  }, []);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    reason = _useState4[0],
    setReason = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    open = _useState6[0],
    setOpen = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    DeleteId = _useState8[0],
    setDeleteId = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    modalOpenLoading = _useState10[0],
    setModalOpenLoading = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loadingOpenModal = _useState12[0],
    setLoadingOpenModal = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loadingOpenModalError = _useState14[0],
    setLoadingOpenModalError = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    openReasonDelete = _useState16[0],
    setOpenReasonDelete = _useState16[1];
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
    setDeleteId(null);
  };
  {/** Loading Update View Start */}
  var handleOpen = id => {
    setOpenReasonDelete(true);
    setDeleteId(id);
  };
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleCloseModal = () => {
    window.location.reload();
  };
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    nameDelete = _useState18[0],
    setNameDelete = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (DeleteId !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_22__/* .ENDPOINT_URL */ .m, "/get-grantAccess/").concat(DeleteId));
            setNameDelete(res.data.data.employeeName);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchData2() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [DeleteId]);
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + nameDelete,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_22__/* .ENDPOINT_URL */ .m, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A.delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_22__/* .ENDPOINT_URL */ .m, "/delete-grantAccess/").concat(DeleteId));
        if (res) {
          handleCreateNotification();
          handleOpenModal();
        }
      } catch (error) {
        alert('try again');
      }
    });
    return function handleDelete(_x) {
      return _ref11.apply(this, arguments);
    };
  }();
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    grantID = _useState20[0],
    setGrantID = _useState20[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result = localStorage.getItem('GrantAccessTabId');
    if (result) {
      setGrantID(result);
    }
  });
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState22 = _slicedToArray(_useState21, 2),
    show3 = _useState22[0],
    setShow3 = _useState22[1];
  var handleShow3 = e => {
    setShow3(e);
  };
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var result = localStorage.getItem('GrantAccessTab');
      return result !== null ? parseInt(result) : 0;
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    value = _useState24[0],
    setValue = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    value2 = _useState26[0],
    setValue2 = _useState26[1];
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
  var handleChangeIdIndex = (index, id) => {
    var newIndex = index;
    var newIndexId = id;
    setValue(newIndex);
    setGrantID(id);
    localStorage.setItem('GrantAccessTab', newIndex);
    localStorage.setItem('GrantAccessTabId', newIndexId);
  };
  var handleChangeIdIndex2 = (index, id) => {
    var newIndex = index;
    var newIndexId = id;
    var result = categories.findIndex(row => row._id === id);
    setValue(result);
    setValue2(newIndex);
    setGrantID(id);
    localStorage.setItem('GrantAccessTab', result);
    localStorage.setItem('GrantAccessTabId', newIndexId);
  };
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState28 = _slicedToArray(_useState27, 2),
    search2 = _useState28[0],
    setSearch2 = _useState28[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray2 = search2 !== '' ? grantAccess.filter(Item => Item.employeeName.toLowerCase().includes(search2.toLowerCase())) : grantAccess;
  var filterGrant = grantAccess.filter(item => item._id === grantID);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Grant Access"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
    container: true,
    item: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, show3 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      padding: '5px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    variant: "h6"
  }, "All User")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_25__/* .NavLink */ .k2, {
    disabled: user.data.role !== 'CEO',
    to: "/GrantAccessFormView",
    className: "ItemsName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
    className: "btnCustomer",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, grantAccess === null || grantAccess === void 0 ? void 0 : grantAccess.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    key: index,
    label: row.employeeName,
    onClick: () => handleChangeIdIndex(index, row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show3 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    label: "search",
    id: "search",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    onClick: () => handleShow3(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'auto',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray2 === null || newArray2 === void 0 ? void 0 : newArray2.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    key: index,
    label: row.employeeName,
    onClick: () => handleChangeIdIndex2(index, row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemInfoContainer2Head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    variant: "h5"
  }, "Modules"), filterGrant.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: item._id,
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_25__/* .NavLink */ .k2, {
    disabled: user.data.role !== 'CEO',
    to: "/GrantAccessUpdateView/".concat(item._id),
    className: "ItemsName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .A, {
    className: "btnCustomer1",
    style: {
      fontSize: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DeleteTooltip, {
    title: "Delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "                                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    onClick: () => handleOpen(item._id),
    hidden: user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: {
      maxHeight: '580px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    "aria-label": "collapsible table",
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    align: "center"
  }, "Modules Permissions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    align: "center"
  }, "Read"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    align: "center"
  }, "Create"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    align: "center"
  }, "View"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    align: "center"
  }, "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    align: "center"
  }, "Delete"))), filterGrant.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    key: item._id
  }, item.modules.map((row, i) => {
    var hiddenModules = ['Admin', 'User', 'Role', 'Item-Category', 'Stock', 'Asset', 'Account'];
    if (hiddenModules.includes(row.moduleName)) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      key: row.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null, row.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
      style: {
        width: '300px'
      }
    }, row.moduleName === 'Estimate' ? 'Quotation' : row.moduleName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      checked: row.access.readM
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      checked: row.access.createM
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      checked: row.access.viewM
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      checked: row.access.editM
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      checked: row.access.deleteM
    })));
  })))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    onClick: handleCloseReasonDelete,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete Access Of ", nameDelete, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    required: true,
    id: "reason",
    name: "reason",
    multiline: true,
    rows: 4,
    value: reason,
    placeholder: "Reason",
    onChange: e => setReason(e.target.value),
    label: "Reason",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    open: modalOpenLoading,
    onClose: handleCloseModal,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RolePermission);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);