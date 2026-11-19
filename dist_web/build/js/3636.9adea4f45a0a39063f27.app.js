"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[3636],{

/***/ 93636
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68525);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55746);
/* harmony import */ var _component_SidebarDash1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49377);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71543);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86531);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(82022);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(27558);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(14519);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(97834);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(8451);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(92659);
/* harmony import */ var _mui_icons_material_LocalShipping__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(37856);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(75737);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(601);
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(48484);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(99380);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(33829);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(47767);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(13561);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(99571);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(71510);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(40301);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(95236);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(83818);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay, {
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
function isDividerItem(item) {
  return Boolean((item === null || item === void 0 ? void 0 : item.newDescription) && String(item.newDescription).trim() !== '' && (!item.itemName || (typeof item.itemName === 'string' ? item.itemName.trim() === '' : !item.itemName._id && !item.itemName.itemName)));
}
function getItemDisplayTitle(item) {
  var _item$itemName;
  var rawName = typeof (item === null || item === void 0 ? void 0 : item.itemName) === 'string' ? item.itemName : (item === null || item === void 0 || (_item$itemName = item.itemName) === null || _item$itemName === void 0 ? void 0 : _item$itemName.itemName) || '';
  if (String(rawName).trim().toLowerCase() === 'empty') {
    return (item === null || item === void 0 ? void 0 : item.itemDescription) || 'Custom Item';
  }
  return rawName || (item === null || item === void 0 ? void 0 : item.itemDescription) || 'Item';
}
function DeliveryNoteForm() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_36__/* .useNavigate */ .Zp)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_36__/* .useLocation */ .zy)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_37__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_37__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__/* .selectCurrentUser */ .xu);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    sideBar = _useState2[0],
    setSideBar = _useState2[1];
  var toggleDrawer = () => setSideBar(!sideBar);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(function* () {
        if (storesUserId && storesUserId !== 'null') {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__/* .setUser */ .gV)({
              userName: res.data.data.employeeName,
              role: res.data.data.role,
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
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__/* .logOut */ .je)());
    navigate('/');
  };
  var prefillState = location.state || {};
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_34___default()()),
    _useState4 = _slicedToArray(_useState3, 2),
    deliveryDate = _useState4[0],
    setDeliveryDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    deliveryNumber = _useState6[0],
    setDeliveryNumber = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(prefillState.reason || ''),
    _useState8 = _slicedToArray(_useState7, 2),
    reason = _useState8[0],
    setReason = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    invoices = _useState0[0],
    setInvoices = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    projects = _useState10[0],
    setProjects = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    purchases = _useState12[0],
    setPurchases = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    customers = _useState14[0],
    setCustomers = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    selectedRef = _useState16[0],
    setSelectedRef = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      _id: '',
      customerName: '',
      phone: '',
      address: ''
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    customerInfo = _useState18[0],
    setCustomerInfo = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    driverName = _useState20[0],
    setDriverName = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    vehicleNumber = _useState22[0],
    setVehicleNumber = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState24 = _slicedToArray(_useState23, 2),
    deliveryAddress = _useState24[0],
    setDeliveryAddress = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState26 = _slicedToArray(_useState25, 2),
    description = _useState26[0],
    setDescription = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    rows = _useState28[0],
    setRows = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    saving = _useState30[0],
    setSaving = _useState30[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchBase = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* () {
        try {
          var _resLast$data, _resInv$data, _resProj$data, _resPur$data, _resCust$data;
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__/* .ENDPOINT_URL */ .m, "/get-last-saved-deliveryNote")), axios__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__/* .ENDPOINT_URL */ .m, "/invoice?summary=true")), axios__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__/* .ENDPOINT_URL */ .m, "/projects")), axios__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__/* .ENDPOINT_URL */ .m, "/purchase?summary=true")), axios__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__/* .ENDPOINT_URL */ .m, "/customer?summary=true"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 5),
            resLast = _yield$Promise$all2[0],
            resInv = _yield$Promise$all2[1],
            resProj = _yield$Promise$all2[2],
            resPur = _yield$Promise$all2[3],
            resCust = _yield$Promise$all2[4];
          var lastNum = Number(((_resLast$data = resLast.data) === null || _resLast$data === void 0 ? void 0 : _resLast$data.deliveryNumber) || 0);
          setDeliveryNumber(lastNum + 1);
          setInvoices((((_resInv$data = resInv.data) === null || _resInv$data === void 0 ? void 0 : _resInv$data.data) || []).slice());
          setProjects((((_resProj$data = resProj.data) === null || _resProj$data === void 0 ? void 0 : _resProj$data.data) || []).slice().reverse());
          setPurchases(((_resPur$data = resPur.data) === null || _resPur$data === void 0 ? void 0 : _resPur$data.data) || []);
          setCustomers(((_resCust$data = resCust.data) === null || _resCust$data === void 0 ? void 0 : _resCust$data.data) || []);
        } catch (err) {
          console.error('Error loading base data for Delivery Note:', err);
        }
      });
      return function fetchBase() {
        return _ref4.apply(this, arguments);
      };
    }();
    fetchBase();
  }, []);
  var loadReferenceItems = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(function* (refType, refObj) {
      if (!refObj) {
        setRows([]);
        setCustomerInfo({
          _id: '',
          customerName: '',
          phone: '',
          address: ''
        });
        return;
      }
      var custRaw = refObj.customerName;
      var custId = typeof custRaw === 'object' && custRaw !== null ? custRaw._id || '' : '';
      var custNameStr = typeof custRaw === 'string' ? custRaw : (custRaw === null || custRaw === void 0 ? void 0 : custRaw.customerName) || (custRaw === null || custRaw === void 0 ? void 0 : custRaw.Customer) || (custRaw === null || custRaw === void 0 ? void 0 : custRaw.companyName) || '';
      var custRecord = customers.find(c => custId && String(c._id) === String(custId) || c.Customer === custNameStr);
      var addr = (custRecord === null || custRecord === void 0 ? void 0 : custRecord.billingAddress) || (custRecord === null || custRecord === void 0 ? void 0 : custRecord.shippingAddress) || '';
      var phone = (custRecord === null || custRecord === void 0 ? void 0 : custRecord.customerPhone) || (custRecord === null || custRecord === void 0 ? void 0 : custRecord.customerPhone1) || '';
      setCustomerInfo({
        _id: custId || (custRecord === null || custRecord === void 0 ? void 0 : custRecord._id) || '',
        customerName: custNameStr,
        phone,
        address: addr
      });
      if (addr && !deliveryAddress) {
        setDeliveryAddress(addr);
      }
      var sourceItems = [];
      if (refType === 'Invoice') {
        try {
          var _fullInv$data;
          var fullInv = yield axios__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__/* .ENDPOINT_URL */ .m, "/get-invoice/").concat(refObj._id));
          sourceItems = ((_fullInv$data = fullInv.data) === null || _fullInv$data === void 0 || (_fullInv$data = _fullInv$data.data) === null || _fullInv$data === void 0 ? void 0 : _fullInv$data.items) || refObj.items || [];
        } catch (_) {
          sourceItems = refObj.items || [];
        }
      } else if (refType === 'Project') {
        var linkedPurchases = purchases.filter(p => {
          var _p$projectName, _p$projectName2;
          return String(((_p$projectName = p.projectName) === null || _p$projectName === void 0 ? void 0 : _p$projectName._id) || p.projectName || '') === String(refObj._id) || ((_p$projectName2 = p.projectName) === null || _p$projectName2 === void 0 ? void 0 : _p$projectName2.projectName) && p.projectName.projectName === refObj.projectName;
        });
        if (linkedPurchases.length > 0) {
          sourceItems = linkedPurchases.flatMap(p => p.items || []);
        } else {
          var linkedInvs = invoices.filter(inv => {
            var _inv$Ref;
            return String(inv.projectId || ((_inv$Ref = inv.Ref) === null || _inv$Ref === void 0 ? void 0 : _inv$Ref._id) || '') === String(refObj._id) || inv.invoiceSubject && inv.invoiceSubject === refObj.projectName;
          });
          sourceItems = linkedInvs.flatMap(inv => inv.items || []);
        }
      }

      // Load prior Delivery Notes for this reference to compute Prev. Delivered
      var prevDeliveredMap = {};
      try {
        var _resPrev$data;
        var resPrev = yield axios__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__/* .ENDPOINT_URL */ .m, "/deliveryNote?referenceId=").concat(encodeURIComponent(refObj._id)));
        (((_resPrev$data = resPrev.data) === null || _resPrev$data === void 0 ? void 0 : _resPrev$data.data) || []).filter(dn => String(dn.status || '').toLowerCase() !== 'cancelled').forEach(dn => {
          (dn.itemsQtyArray || []).forEach(it => {
            var _it$itemName, _ref6, _it$deliverQty;
            var key = String(it.idRow || ((_it$itemName = it.itemName) === null || _it$itemName === void 0 ? void 0 : _it$itemName._id) || it.itemDescription || '');
            if (!key) return;
            prevDeliveredMap[key] = (prevDeliveredMap[key] || 0) + Number((_ref6 = (_it$deliverQty = it.deliverQty) !== null && _it$deliverQty !== void 0 ? _it$deliverQty : it.newItemOut) !== null && _ref6 !== void 0 ? _ref6 : 0);
          });
        });
      } catch (_) {}
      var mappedRows = sourceItems.filter(it => !isDividerItem(it)).map(it => {
        var _it$itemName2, _it$itemName3;
        var rowId = it.idRow || (0,uuid__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A)();
        var key = String(it.idRow || ((_it$itemName2 = it.itemName) === null || _it$itemName2 === void 0 ? void 0 : _it$itemName2._id) || it.itemDescription || '');
        var totalQty = Number(it.itemQty || 0);
        var prevDelivered = Number(prevDeliveredMap[key] || 0);
        var remaining = Math.max(0, totalQty - prevDelivered);
        return {
          idRow: rowId,
          itemName: it.itemName || {},
          itemDescription: it.itemDescription || '',
          unit: it.unit || ((_it$itemName3 = it.itemName) === null || _it$itemName3 === void 0 ? void 0 : _it$itemName3.unit) || 'PCS',
          orderedQty: totalQty,
          previouslyDeliveredQty: prevDelivered,
          deliverQty: remaining > 0 ? remaining : totalQty,
          checked: remaining > 0
        };
      });
      setRows(mappedRows);
    });
    return function loadReferenceItems(_x, _x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  // Auto-select if navigated from Invoice or Project OPTIONS menu
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!prefillState.reason || !prefillState.referenceId) return;
    if (prefillState.reason === 'Invoice' && invoices.length > 0 && !selectedRef) {
      var found = invoices.find(i => String(i._id) === String(prefillState.referenceId));
      if (found) {
        setReason('Invoice');
        setSelectedRef(found);
        loadReferenceItems('Invoice', found);
      }
    } else if (prefillState.reason === 'Project' && projects.length > 0 && !selectedRef) {
      var _found = projects.find(p => String(p._id) === String(prefillState.referenceId));
      if (_found) {
        setReason('Project');
        setSelectedRef(_found);
        loadReferenceItems('Project', _found);
      }
    }
  }, [invoices, projects]);
  var handleReasonChange = e => {
    setReason(e.target.value);
    setSelectedRef(null);
    setRows([]);
    setCustomerInfo({
      _id: '',
      customerName: '',
      phone: '',
      address: ''
    });
  };
  var handleSelectReference = newVal => {
    setSelectedRef(newVal);
    loadReferenceItems(reason, newVal);
  };
  var allChecked = rows.length > 0 && rows.every(r => r.checked);
  var handleToggleAll = checked => {
    setRows(prev => prev.map(r => _objectSpread(_objectSpread({}, r), {}, {
      checked
    })));
  };
  var handleRowChange = (idRow, field, value) => {
    setRows(prev => prev.map(r => {
      if (r.idRow !== idRow) return r;
      if (field === 'orderedQty') {
        var nextTotal = value === '' ? '' : Math.max(0, Number(value) || 0);
        return _objectSpread(_objectSpread({}, r), {}, {
          orderedQty: nextTotal
        });
      }
      if (field === 'deliverQty') {
        var nextDeliv = value === '' ? '' : Math.max(0, Number(value) || 0);
        return _objectSpread(_objectSpread({}, r), {}, {
          deliverQty: nextDeliv,
          checked: Number(nextDeliv) > 0
        });
      }
      return _objectSpread(_objectSpread({}, r), {}, {
        [field]: value
      });
    }));
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(function* (e) {
      var _user$data;
      e.preventDefault();
      if (!reason || !selectedRef) {
        react_toastify__WEBPACK_IMPORTED_MODULE_38__/* .toast */ .oR.error('Please select a Reason and Reference (Invoice or Project).');
        return;
      }
      var checkedRows = rows.filter(r => r.checked && Number(r.deliverQty) > 0);
      if (checkedRows.length === 0) {
        react_toastify__WEBPACK_IMPORTED_MODULE_38__/* .toast */ .oR.error('Please check at least one item with Deliver Qty > 0.');
        return;
      }
      var refNumber = reason === 'Invoice' ? selectedRef.invoiceName || "INV-".concat(String(selectedRef.invoiceNumber || 0).padStart(6, '0')) : "P-".concat(String(selectedRef.projectNumber || 0).padStart(6, '0'));
      var refSubject = reason === 'Invoice' ? selectedRef.invoiceSubject || '' : selectedRef.projectName || '';
      var payload = {
        deliveryNumber,
        deliveryDate: deliveryDate ? deliveryDate.toDate() : new Date(),
        reason,
        reference: {
          _id: String(selectedRef._id),
          referenceName: "".concat(refNumber, " | ").concat(customerInfo.customerName || refSubject),
          referenceNumber: refNumber,
          subject: refSubject
        },
        customerName: customerInfo,
        itemsQtyArray: checkedRows.map(r => ({
          idRow: r.idRow,
          itemName: r.itemName,
          itemDescription: r.itemDescription,
          unit: r.unit,
          orderedQty: Number(r.orderedQty || 0),
          previouslyDeliveredQty: Number(r.previouslyDeliveredQty || 0),
          deliverQty: Number(r.deliverQty || 0),
          checked: true
        })),
        driverName: driverName.trim().toUpperCase(),
        vehicleNumber: vehicleNumber.trim().toUpperCase(),
        deliveryAddress: deliveryAddress.trim().toUpperCase(),
        description: description.trim().toUpperCase(),
        status: 'Dispatched',
        Create: {
          person: (user === null || user === void 0 || (_user$data = user.data) === null || _user$data === void 0 ? void 0 : _user$data.userName) || 'System',
          dateComment: dayjs__WEBPACK_IMPORTED_MODULE_34___default()(new Date()).format('DD/MM/YYYY-HH:mm')
        }
      };
      try {
        var _res$data;
        setSaving(true);
        var res = yield axios__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__/* .ENDPOINT_URL */ .m, "/create-deliveryNote"), payload);
        react_toastify__WEBPACK_IMPORTED_MODULE_38__/* .toast */ .oR.success('Delivery Note created successfully!');
        var createdId = (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data._id;
        if (createdId) {
          navigate("/DeliveryNoteViewInformation/".concat(createdId));
        } else {
          navigate('/DeliveryNoteViewAdmin');
        }
      } catch (error) {
        console.error('Error creating delivery note:', error);
        react_toastify__WEBPACK_IMPORTED_MODULE_38__/* .toast */ .oR.error('Failed to create Delivery Note.');
      } finally {
        setSaving(false);
      }
    });
    return function handleSubmit(_x3) {
      return _ref7.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    color: "inherit",
    onClick: () => navigate(-1),
    sx: {
      mr: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Create Delivery Note (DN-", String(deliveryNumber).padStart(6, '0'), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    component: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDash1__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: '#f5f5f5',
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    maxWidth: "lg",
    sx: {
      mt: 3,
      mb: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      p: 3,
      borderRadius: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2,
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    label: "Delivery Note #",
    value: "DN-".concat(String(deliveryNumber).padStart(6, '0')),
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_30__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_31__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_32__/* .DatePicker */ .l, {
    label: "Delivery Date",
    value: deliveryDate,
    onChange: val => setDeliveryDate(val),
    format: "DD/MM/YYYY",
    slotProps: {
      textField: {
        fullWidth: true,
        size: 'small'
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: reason,
    label: "Reason",
    onChange: handleReasonChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    value: "Invoice"
  }, "Invoice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    value: "Project"
  }, "Project")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    label: "Customer",
    value: customerInfo.customerName || '',
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, reason === 'Invoice' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    options: invoices,
    value: selectedRef,
    onChange: (_, val) => handleSelectReference(val),
    getOptionLabel: opt => {
      var _opt$customerName;
      if (!opt) return '';
      var num = opt.invoiceName || "INV-".concat(String(opt.invoiceNumber || 0).padStart(6, '0'));
      var cust = ((_opt$customerName = opt.customerName) === null || _opt$customerName === void 0 ? void 0 : _opt$customerName.customerName) || (typeof opt.customerName === 'string' ? opt.customerName : '');
      return "".concat(num, " | ").concat(cust).concat(opt.invoiceSubject ? " | ".concat(opt.invoiceSubject) : '');
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, _extends({}, params, {
      label: "Select Invoice",
      size: "small",
      required: true
    }))
  }), reason === 'Project' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    options: projects,
    value: selectedRef,
    onChange: (_, val) => handleSelectReference(val),
    getOptionLabel: opt => {
      var _opt$customerName2;
      if (!opt) return '';
      var num = "P-".concat(String(opt.projectNumber || 0).padStart(6, '0'));
      var cust = ((_opt$customerName2 = opt.customerName) === null || _opt$customerName2 === void 0 ? void 0 : _opt$customerName2.customerName) || (typeof opt.customerName === 'string' ? opt.customerName : '');
      return "".concat(num, " | ").concat(opt.projectName || '').concat(cust ? " (".concat(cust, ")") : '');
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, _extends({}, params, {
      label: "Select Project",
      size: "small",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    label: "Driver Name",
    value: driverName,
    onChange: e => setDriverName(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    label: "Vehicle / Plate",
    value: vehicleNumber,
    onChange: e => setVehicleNumber(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    label: "Delivery Address",
    value: deliveryAddress,
    onChange: e => setDeliveryAddress(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    label: "Notes / Remarks",
    value: description,
    onChange: e => setDescription(e.target.value)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      mt: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "subtitle1",
    sx: {
      fontWeight: 700,
      color: '#202a5a'
    }
  }, "Select Items to Include in Delivery Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    label: "".concat(rows.filter(r => r.checked).length, " of ").concat(rows.length, " selected"),
    color: "primary",
    size: "small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    style: {
      backgroundColor: '#202a5a',
      color: '#ffffff'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      padding: '8px',
      width: '44px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    checked: allChecked,
    onChange: e => handleToggleAll(e.target.checked),
    sx: {
      color: '#fff',
      '&.Mui-checked': {
        color: '#fff'
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      padding: '8px',
      textAlign: 'left'
    }
  }, "Item & Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      padding: '8px',
      width: '120px',
      textAlign: 'center'
    }
  }, "Total Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      padding: '8px',
      width: '120px',
      textAlign: 'center'
    }
  }, "Prev. Delivered"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      padding: '8px',
      width: '130px',
      textAlign: 'center'
    }
  }, "Deliver Qty"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, rows.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    colSpan: 5,
    style: {
      padding: '24px',
      textAlign: 'center',
      color: '#64748b'
    }
  }, selectedRef ? 'No items found on this Invoice/Project.' : 'Select Reason and Invoice/Project above to load items.')) : rows.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    key: row.idRow,
    style: {
      borderBottom: '1px solid #e2e8f0',
      backgroundColor: row.checked ? '#f0f7ff' : '#ffffff'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      textAlign: 'center',
      padding: '6px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    checked: Boolean(row.checked),
    onChange: e => handleRowChange(row.idRow, 'checked', e.target.checked)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '8px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      fontSize: '14px'
    }
  }, getItemDisplayTitle(row)), row.itemDescription && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      fontSize: '12px',
      color: '#475569'
    }
  }, row.itemDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '6px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    label: row.orderedQty,
    size: "small",
    variant: "outlined",
    sx: {
      minWidth: '56px',
      fontWeight: 700
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '6px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    label: row.previouslyDeliveredQty,
    size: "small",
    variant: "outlined"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '6px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    type: "number",
    size: "small",
    value: row.deliverQty,
    onChange: e => handleRowChange(row.idRow, 'deliverQty', e.target.value),
    inputProps: {
      min: 0,
      step: 'any',
      style: {
        textAlign: 'center'
      }
    },
    sx: {
      width: '105px',
      backgroundColor: '#fff'
    }
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      mt: 3,
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    variant: "outlined",
    onClick: () => navigate('/DeliveryNoteViewAdmin')
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    type: "submit",
    variant: "contained",
    disabled: saving,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_LocalShipping__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, null),
    sx: {
      backgroundColor: '#202a5a',
      '&:hover': {
        backgroundColor: '#161d40'
      }
    }
  }, saving ? 'Saving...' : 'Save & View / Print'))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeliveryNoteForm);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 49377
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _SidebarDash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4640);


function SidebarDash1(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SidebarDash__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarDash1);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 33829
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_browser_v4)
});

;// ./node_modules/uuid/dist/esm-browser/native.js
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const esm_browser_native = ({
  randomUUID
});
;// ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
;// ./node_modules/uuid/dist/esm-browser/stringify.js
/* unused harmony import specifier */ var validate;

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_browser_stringify = ((/* unused pure expression or super */ null && (stringify)));
;// ./node_modules/uuid/dist/esm-browser/v4.js




function v4(options, buf, offset) {
  if (esm_browser_native.randomUUID && !buf && !options) {
    return esm_browser_native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

/* harmony default export */ const esm_browser_v4 = (v4);

/***/ }

}]);