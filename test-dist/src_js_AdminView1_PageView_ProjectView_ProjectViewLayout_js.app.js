"use strict";
exports.id = "src_js_AdminView1_PageView_ProjectView_ProjectViewLayout_js";
exports.ids = ["src_js_AdminView1_PageView_ProjectView_ProjectViewLayout_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/ArrowBack.js"
/*!*******************************************************!*\
  !*** ./node_modules/@mui/icons-material/ArrowBack.js ***!
  \*******************************************************/
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
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
}), 'ArrowBack');

/***/ },

/***/ "./src/js/AdminView1/PageView/ProjectView/ProjectViewLayout.js"
/*!*********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ProjectView/ProjectViewLayout.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _ProjectNameInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectNameInfo */ "./src/js/AdminView1/PageView/ProjectView/ProjectNameInfo.js");
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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
var AppBar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
var Drawer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
function ProjectViewLayout() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_19__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_19__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_20__.selectCurrentUser);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    sideBar = _useState2[0],
    setSideBar = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    show1 = _useState4[0],
    setShow1 = _useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_20__.logOut)());
    navigate('/');
  };
  var handleShow1 = val => {
    setShow1(val);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      pr: '24px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_16__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Project Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: () => navigate('/ProjectViewAdmin')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_18__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_23__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_22__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_21__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_17__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_8__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 2
  }, show1 === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectNameInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onId: id
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: show1 === 1 ? 9 : 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Outlet, {
    context: {
      handleShow1
    }
  }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectViewLayout);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUHJvamVjdFZpZXdfUHJvamVjdFZpZXdMYXlvdXRfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pELENBQXdDO0FBQ21DO0FBQ3RCO0FBQ0w7QUFDUztBQUNaO0FBQ0E7QUFDQztBQUMrQjtBQUM3QjtBQUNjO0FBQ1I7QUFDUDtBQUNRO0FBQ3NCO0FBQzdCO0FBQ007QUFDUTtBQUU5RCxJQUFNOEIsV0FBVyxHQUFHLEdBQUc7QUFFdkIsSUFBTUMsTUFBTSxHQUFHbEIsaUVBQU0sQ0FBQ0YsNERBQVMsRUFBRTtFQUM3QnFCLGlCQUFpQixFQUFHQyxJQUFJLElBQUtBLElBQUksS0FBSztBQUMxQyxDQUFDLENBQUMsQ0FBQ0MsSUFBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsSUFBQSxDQUFMQyxLQUFLO0lBQUVDLElBQUksR0FBQUYsSUFBQSxDQUFKRSxJQUFJO0VBQUEsT0FBQUMsYUFBQTtJQUNiQyxNQUFNLEVBQUVILEtBQUssQ0FBQ0csTUFBTSxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUMvQkMsVUFBVSxFQUFFTCxLQUFLLENBQUNNLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO01BQ3REQyxNQUFNLEVBQUVSLEtBQUssQ0FBQ00sV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7TUFDdENDLFFBQVEsRUFBRVYsS0FBSyxDQUFDTSxXQUFX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QUM0RyxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNiakgsMERBQUEsQ0FBQ1Msd0RBQWU7SUFBQ3lHLElBQUksRUFBRXBEO0VBQUcsQ0FBRSxDQUMxQixDQUNULGVBQ0Q5RCwwREFBQSxDQUFDSSxxREFBSTtJQUFDNEcsSUFBSTtJQUFDQyxFQUFFLEVBQUV4QyxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRztFQUFHLGdCQUNoQ3pFLDBEQUFBLENBQUNPLG9EQUFNO0lBQUM0RyxPQUFPLEVBQUU7TUFBRXBDO0lBQVk7RUFBRSxDQUFFLENBQ2pDLENBQ0osQ0FDQyxDQUNWLENBQ0osQ0FBQztBQUVkO0FBRUEsaUVBQWVuQixpQkFBaUIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2suanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L1Byb2plY3RWaWV3L1Byb2plY3RWaWV3TGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwelwiXG59KSwgJ0Fycm93QmFjaycpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBDc3NCYXNlbGluZSwgR3JpZCwgVG9vbGJhciwgQ29udGFpbmVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE91dGxldCwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBQcm9qZWN0TmFtZUluZm8gZnJvbSAnLi9Qcm9qZWN0TmFtZUluZm8nO1xyXG5pbXBvcnQgU2lkZWJhckRhc2ggZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCB7IEljb25CdXR0b24sIFR5cG9ncmFwaHksIERpdmlkZXIsIExpc3QsIEJhZGdlIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuXHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICAgIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICAgIC4uLihvcGVuICYmIHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSksXHJcbn0pKTtcclxuXHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICAgICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KSxcclxuKTtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RWaWV3TGF5b3V0KCkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gICAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbc2hvdzEsIHNldFNob3cxXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNob3cxID0gKHZhbCkgPT4ge1xyXG4gICAgICAgIHNldFNob3cxKHZhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyIHN4PXt7IHByOiAnMjRweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgbm9XcmFwIHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0IEluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvUHJvamVjdFZpZXdBZG1pbicpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaWRlQmFyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNpZGVCYXIoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyIHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLCBweDogWzFdIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyRGFzaCAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93MSA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdE5hbWVJbmZvIG9uSWQ9e2lkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtzaG93MSA9PT0gMSA/IDkgOiAxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGV0IGNvbnRleHQ9e3sgaGFuZGxlU2hvdzEgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RWaWV3TGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIkNzc0Jhc2VsaW5lIiwiR3JpZCIsIlRvb2xiYXIiLCJDb250YWluZXIiLCJPdXRsZXQiLCJ1c2VQYXJhbXMiLCJQcm9qZWN0TmFtZUluZm8iLCJTaWRlYmFyRGFzaCIsIk11aUFwcEJhciIsIk11aURyYXdlciIsInN0eWxlZCIsIkljb25CdXR0b24iLCJUeXBvZ3JhcGh5IiwiRGl2aWRlciIsIkxpc3QiLCJCYWRnZSIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiQXJyb3dCYWNrIiwidXNlTmF2aWdhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJMb2dvdXQiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWYiLCJ0aGVtZSIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJjb25jYXQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWYyIiwicG9zaXRpb24iLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJQcm9qZWN0Vmlld0xheW91dCIsIl91c2VQYXJhbXMiLCJpZCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInNob3cxIiwic2V0U2hvdzEiLCJ0b2dnbGVEcmF3ZXIiLCJoYW5kbGVMb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiaGFuZGxlU2hvdzEiLCJ2YWwiLCJjcmVhdGVFbGVtZW50Iiwic3giLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwicHIiLCJlZGdlIiwiY29sb3IiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJzdHlsZSIsIm5hbWUiLCJkYXRhIiwidXNlck5hbWUiLCJyb2xlIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicHgiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJjb250YWluZXIiLCJpdGVtIiwieHMiLCJvbklkIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=