"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[3426],{

/***/ 92659
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
var _default = exports.A = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
}), 'ArrowBack');

/***/ },

/***/ 9483
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
var _default = exports.A = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
}), 'KeyboardArrowDown');

/***/ },

/***/ 13426
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77438);
/* harmony import */ var _component_PrintFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61296);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4640);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68525);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55746);
/* harmony import */ var _InvoiceView_AdminView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78448);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52848);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71543);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27558);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17532);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(94405);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(20973);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(58331);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(14519);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(97834);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(8451);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(99380);
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(46986);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(84976);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(47767);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(71510);
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(72761);
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_img_images_png__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(28597);
/* harmony import */ var _mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(8659);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(40301);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(57240);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(65821);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(39781);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(82299);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(92659);
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(19873);
/* harmony import */ var _mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(67415);
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(41845);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(9483);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(3100);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(95236);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(24974);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(4213);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(85781);
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
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
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;






















































var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var PrintTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay, {
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
var cleanStr = str => String(str || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
var isItemMatch = (item1, item2) => {
  var _item1$itemName, _item2$itemName, _item1$itemName2, _item2$itemName2;
  if (!item1 || !item2) return false;
  var id1 = String(((_item1$itemName = item1.itemName) === null || _item1$itemName === void 0 ? void 0 : _item1$itemName._id) || (typeof item1.itemName === 'string' && item1.itemName !== 'empty' && item1.itemName.length === 24 ? item1.itemName : '') || '');
  var id2 = String(((_item2$itemName = item2.itemName) === null || _item2$itemName === void 0 ? void 0 : _item2$itemName._id) || (typeof item2.itemName === 'string' && item2.itemName !== 'empty' && item2.itemName.length === 24 ? item2.itemName : '') || '');
  if (id1 && id2 && id1 !== 'empty' && id2 !== 'empty') {
    return id1 === id2;
  }
  var desc1 = cleanStr(item1.itemDescription || (typeof item1.itemName === 'string' ? item1.itemName : (_item1$itemName2 = item1.itemName) === null || _item1$itemName2 === void 0 ? void 0 : _item1$itemName2.itemName) || item1.newDescription || '');
  var desc2 = cleanStr(item2.itemDescription || (typeof item2.itemName === 'string' ? item2.itemName : (_item2$itemName2 = item2.itemName) === null || _item2$itemName2 === void 0 ? void 0 : _item2$itemName2.itemName) || item2.newDescription || '');
  if (desc1 && desc2) {
    if (desc1 === desc2) return true;
    if (desc1.length >= 5 && desc2.length >= 5) {
      if (desc1.includes(desc2) || desc2.includes(desc1)) return true;
    }
  }
  return false;
};
function PurchaseItemRow(_ref9) {
  var _Item$itemName, _Item$itemName2;
  var Item = _ref9.Item,
    i = _ref9.i,
    relatedUnit = _ref9.relatedUnit,
    formatDate2 = _ref9.formatDate2,
    itemPurchase = _ref9.itemPurchase,
    itemOut = _ref9.itemOut,
    itemReturn = _ref9.itemReturn;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var matchingMovements = (formatDate2 === null || formatDate2 === void 0 ? void 0 : formatDate2.filter(row1 => {
    var _row1$itemsQtyArray;
    return (_row1$itemsQtyArray = row1.itemsQtyArray) === null || _row1$itemsQtyArray === void 0 ? void 0 : _row1$itemsQtyArray.some(it => isItemMatch(it, Item));
  })) || [];
  if (Item.newDescription !== undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", {
      key: Item.idRow || i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      },
      colSpan: 8
    }, Item.newDescription));
  }

  // Dynamic calculations for bought quantity and total cost
  var matchedPurchases = (itemPurchase || []).flatMap(ip => (ip.itemsQtyArray || ip.items || []).filter(it => isItemMatch(it, Item)).map(it => ({
    qty: parseFloat(it.newItemOut || it.itemQty || 0),
    total: parseFloat(it.totalAmount || it.totalAmountUSD || parseFloat(it.newItemOut || it.itemQty || 0) * parseFloat(it.itemRate || it.cost || 0) || 0)
  })));
  var totalBoughtQty = matchedPurchases.reduce((sum, p) => sum + p.qty, 0);
  var totalBoughtCost = matchedPurchases.reduce((sum, p) => sum + p.total, 0);
  var buyQty = totalBoughtQty > 0 ? totalBoughtQty : parseFloat(Item.itemBuy) || 0;
  var totalBuyCost = totalBoughtCost > 0 ? totalBoughtCost : parseFloat(Item.totalGenerale) || buyQty * (parseFloat(Item.itemCost) || 0);
  var matchedOutQty = (itemOut || []).flatMap(io => (io.itemsQtyArray || []).filter(it => isItemMatch(it, Item))).reduce((sum, it) => sum + parseFloat(it.newItemOut || 0), 0);
  var matchedReturnQty = (itemReturn || []).flatMap(ir => (ir.itemsQtyArray || []).filter(it => isItemMatch(it, Item))).reduce((sum, it) => sum + parseFloat(it.newItemOut || 0), 0);
  var netOutQty = matchedOutQty > 0 || matchedReturnQty > 0 ? Math.max(0, matchedOutQty - matchedReturnQty) : parseFloat(Item.itemOut) || 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", {
    key: Item.idRow || i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
    style: {
      width: '10px',
      textAlign: 'center',
      border: '1px solid #DDD',
      cursor: 'pointer'
    },
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
    style: {
      width: '300px',
      textAlign: 'left',
      border: '1px solid #DDD'
    },
    align: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    hidden: (typeof Item.itemName === 'string' ? Item.itemName : (_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName.itemName) === 'empty'
  }, typeof Item.itemName === 'string' ? Item.itemName.toUpperCase() : ((_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 || (_Item$itemName2 = _Item$itemName2.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2.toUpperCase()) || ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, Item.itemDescription ? Item.itemDescription.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, Item.itemQty, " ", relatedUnit !== null && relatedUnit !== void 0 && relatedUnit.unit ? String(relatedUnit.unit).toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, Item.itemCost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, Number(Item.totalCost || parseFloat(Item.itemQty || 0) * parseFloat(Item.itemCost || 0) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, buyQty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, Number(totalBuyCost || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, netOutQty, " ", relatedUnit !== null && relatedUnit !== void 0 && relatedUnit.unit ? String(relatedUnit.unit).toUpperCase() : ''))), matchingMovements.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
    style: {
      textAlign: 'left',
      border: '1px solid #DDD',
      paddingBottom: 0,
      paddingTop: 0
    },
    colSpan: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      margin: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    gutterBottom: true,
    component: "div",
    sx: {
      fontWeight: 'bold',
      fontSize: '13px',
      color: '#202a5a'
    }
  }, "Item Movement Info (Purchase, Out & Return)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("table", {
    className: "secondTable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Qty"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tbody", null, matchingMovements.map((row1, index1) => {
    var matchingItem = row1.itemsQtyArray.find(Item1 => isItemMatch(Item1, Item));
    var isReturn = (row1.type || '').toLowerCase().includes('return');
    var isPurchase = (row1.type || '').toLowerCase().includes('purchase') || (row1.type || '').toLowerCase().includes('buy');
    var badgeColor = isReturn ? {
      bg: '#ffebee',
      text: '#c62828',
      sign: '-'
    } : isPurchase ? {
      bg: '#e8f5e9',
      text: '#2e7d32',
      sign: '+'
    } : {
      bg: '#e3f2fd',
      text: '#1565c0',
      sign: '+'
    };
    var badgeLabel = isReturn ? 'Item Return' : isPurchase ? 'Item Purchase' : 'Item Out';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", {
      key: index1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, row1.outNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row1.itemOutDate || row1.date).format('DD/MM/YYYY-HH:mm')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      style: {
        padding: '2px 8px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 'bold',
        backgroundColor: badgeColor.bg,
        color: badgeColor.text
      }
    }, badgeLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        border: '1px solid #DDD',
        fontWeight: 'bold',
        color: badgeColor.text
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, badgeColor.sign, (matchingItem === null || matchingItem === void 0 ? void 0 : matchingItem.newItemOut) || 0)));
  }))))))));
}
function PurchasesViewAdminAll() {
  var _purchase$filter;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__/* .useParams */ .g)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__/* .setUser */ .gV)({
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
        return _ref0.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__/* .logOut */ .je)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_35__/* .cachedGet */ .Fe)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__/* .ENDPOINT_URL */ .m, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var PurchaseInfoU = grantAccess.filter(row => row.moduleName === "Purchase" && row.access.editM === true);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    purchase = _useState4[0],
    setPurchase = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    purchase2 = _useState6[0],
    setPurchase2 = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingData = _useState8[0],
    setLoadingData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    item = _useState0[0],
    SetItems = _useState0[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__/* .ENDPOINT_URL */ .m, "/purchase");
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var res = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_35__/* .cachedGet */ .Fe)(apiUrl);
          setPurchase(res.data.data);
          var resItem = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_35__/* .cachedGet */ .Fe)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__/* .ENDPOINT_URL */ .m, "/item"));
          SetItems(resItem.data.data);
          setLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchData() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    estimate = _useState10[0],
    setEstimate = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    invoice = _useState12[0],
    setInvoice = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    customerName = _useState14[0],
    setCustomerName = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    purchaseNumber = _useState16[0],
    setPurchaseNumber = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    items = _useState18[0],
    setItems = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    purchaseAmount1 = _useState20[0],
    setPurchaseAmount1 = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    purchaseAmount2 = _useState22[0],
    setPurchaseAmount2 = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    itemOut = _useState24[0],
    setItemOut = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    itemReturn = _useState26[0],
    setItemReturn = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    itemPurchase = _useState28[0],
    setItemPurchase = _useState28[1];
  var newMovements = [...itemPurchase, ...itemOut, ...itemReturn];
  var formatDate2 = newMovements.map(row => _objectSpread(_objectSpread({}, row), {}, {
    itemsQtyArray: (row.itemsQtyArray || []).filter(Item => parseFloat(Item.newItemOut) > 0)
  })).filter(row => row.itemsQtyArray.length > 0);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchDataRelated = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var _resEstimate$data, _resInvoice$data, _currentPurchase$cust, _currentPurchase$proj, _currentPurchase$proj2, _resOut$data, _resReturn$data, _resPrec$data;
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__/* .ENDPOINT_URL */ .m, "/estimation?summary=true")), axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__/* .ENDPOINT_URL */ .m, "/invoice?summary=true")), axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__/* .ENDPOINT_URL */ .m, "/itemOut")), axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__/* .ENDPOINT_URL */ .m, "/itemReturn")), axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__/* .ENDPOINT_URL */ .m, "/itemPurchase"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 5),
            resEstimate = _yield$Promise$all2[0],
            resInvoice = _yield$Promise$all2[1],
            resOut = _yield$Promise$all2[2],
            resReturn = _yield$Promise$all2[3],
            resPrec = _yield$Promise$all2[4];
          var filteredEstimate = (_resEstimate$data = resEstimate.data) === null || _resEstimate$data === void 0 || (_resEstimate$data = _resEstimate$data.data) === null || _resEstimate$data === void 0 ? void 0 : _resEstimate$data.filter(row => row.ReferenceName === id);
          setEstimate(filteredEstimate);
          var filteredInvoice = (_resInvoice$data = resInvoice.data) === null || _resInvoice$data === void 0 || (_resInvoice$data = _resInvoice$data.data) === null || _resInvoice$data === void 0 ? void 0 : _resInvoice$data.filter(row => row.ReferenceName2 === id);
          setInvoice(filteredInvoice);
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__/* .ENDPOINT_URL */ .m, "/get-purchase/").concat(id));
          var currentPurchase = res.data.data;
          setItems(currentPurchase.items || []);
          setCustomerName((_currentPurchase$cust = currentPurchase.customerName) !== null && _currentPurchase$cust !== void 0 && _currentPurchase$cust.customerName ? currentPurchase.customerName.customerName.replace(/\s+/g, '_').replace(/\./g, '') : '');
          var currentPurchaseNo = Number(currentPurchase.purchaseNumber || 0);
          setPurchaseNumber(currentPurchaseNo);

          // Store amounts from the full fetch — the summary list may omit these fields
          setPurchaseAmount1(parseFloat(currentPurchase.purchaseAmount1 || 0));
          setPurchaseAmount2(parseFloat(currentPurchase.purchaseAmount2 || 0));
          var projectIdStr = String(((_currentPurchase$proj = currentPurchase.projectName) === null || _currentPurchase$proj === void 0 ? void 0 : _currentPurchase$proj._id) || currentPurchase.projectName || '');
          var projectNameStr = ((_currentPurchase$proj2 = currentPurchase.projectName) === null || _currentPurchase$proj2 === void 0 ? void 0 : _currentPurchase$proj2.projectName) || '';
          var isMatchingProjectOrPurchase = row => {
            var _row$reference, _row$projectName, _row$projectName2;
            if (!row) return false;
            var refId = String(((_row$reference = row.reference) === null || _row$reference === void 0 ? void 0 : _row$reference._id) || row.reference || row.POID || ((_row$projectName = row.projectName) === null || _row$projectName === void 0 ? void 0 : _row$projectName._id) || row.projectName || '');
            if (refId && String(id) && refId === String(id)) return true;
            if (projectIdStr && refId && refId === projectIdStr) return true;
            var rowPOID = String(row.POID || '').trim();
            if (currentPurchaseNo > 0) {
              if (rowPOID === String(currentPurchaseNo) || rowPOID === "PUR-".concat(String(currentPurchaseNo).padStart(6, '0')) || rowPOID === "P-".concat(String(currentPurchaseNo).padStart(6, '0')) || rowPOID === "PUR-".concat(currentPurchaseNo) || rowPOID === "P-".concat(currentPurchaseNo)) {
                return true;
              }
            }
            var desc = cleanStr(row.description || (typeof row.projectName === 'string' ? row.projectName : (_row$projectName2 = row.projectName) === null || _row$projectName2 === void 0 ? void 0 : _row$projectName2.projectName) || '');
            if (projectNameStr && cleanStr(projectNameStr).length >= 4 && desc.includes(cleanStr(projectNameStr))) {
              return true;
            }
            if (currentPurchaseNo > 0 && (desc.includes("pur".concat(currentPurchaseNo)) || desc.includes("pur-".concat(currentPurchaseNo)))) {
              return true;
            }
            return false;
          };
          var matchedOut = (((_resOut$data = resOut.data) === null || _resOut$data === void 0 ? void 0 : _resOut$data.data) || []).filter(isMatchingProjectOrPurchase).map(row => _objectSpread(_objectSpread({}, row), {}, {
            outNumber: "O-" + String(row.outNumber).padStart(6, '0'),
            type: 'Item Out'
          }));
          var matchedReturn = (((_resReturn$data = resReturn.data) === null || _resReturn$data === void 0 ? void 0 : _resReturn$data.data) || []).filter(isMatchingProjectOrPurchase).map(row => _objectSpread(_objectSpread({}, row), {}, {
            outNumber: "R-" + String(row.outNumber).padStart(6, '0'),
            type: 'Item return'
          }));
          var matchedPurchase = (((_resPrec$data = resPrec.data) === null || _resPrec$data === void 0 ? void 0 : _resPrec$data.data) || []).filter(isMatchingProjectOrPurchase).map(row => _objectSpread(_objectSpread({}, row), {}, {
            outNumber: "IP-" + String(row.itemPurchaseNumber || '').padStart(6, '0'),
            type: 'Item Purchase',
            itemOutDate: row.itemPurchaseDate,
            itemsQtyArray: (row.items || []).map(it => _objectSpread(_objectSpread({}, it), {}, {
              newItemOut: parseFloat(it.itemQty || 0),
              totalAmount: parseFloat(it.totalAmountUSD || it.totalAmount || parseFloat(it.itemQty || 0) * parseFloat(it.itemRate || it.cost || 0))
            }))
          }));
          setItemOut(matchedOut);
          setItemReturn(matchedReturn);
          setItemPurchase(matchedPurchase);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchDataRelated() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchDataRelated();
  }, [id]);
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    anchorEl = _React$useState4[0],
    setAnchorEl = _React$useState4[1];
  var open = Boolean(anchorEl);
  var handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  var handleCloseMenu = () => {
    setAnchorEl(null);
  };
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_46__.useReactToPrint)({
    content: () => componentRef.current,
    documentTitle: 'PUR-' + String(purchaseNumber).padStart(6, '0') + ' For ' + customerName,
    onBeforeGetContent: () => {
      var PAGE_HEIGHT = 1045;
      var printElement = componentRef.current;
      if (printElement) {
        printElement.classList.add("temp-class-for-height");
        var height = printElement.clientHeight;
        var numberOfPage = Math.ceil(height / PAGE_HEIGHT);
        if (numberOfPage > 1) {
          var _printElement$getElem, _printElement$getElem2;
          var heightWithSingleHeader = numberOfPage * PAGE_HEIGHT;
          var requiredHeight = heightWithSingleHeader;
          var headerHeight = (_printElement$getElem = printElement.getElementsByTagName("thead")) === null || _printElement$getElem === void 0 || (_printElement$getElem = _printElement$getElem[0]) === null || _printElement$getElem === void 0 ? void 0 : _printElement$getElem.clientHeight;
          var footerHeight = (_printElement$getElem2 = printElement.getElementsByTagName("tfoot")) === null || _printElement$getElem2 === void 0 || (_printElement$getElem2 = _printElement$getElem2[0]) === null || _printElement$getElem2 === void 0 ? void 0 : _printElement$getElem2.clientHeight;
          requiredHeight -= (numberOfPage - 1) * (headerHeight + footerHeight);
          printElement.style.height = "".concat(requiredHeight, "px");
        }
        printElement.classList.remove("temp-class-for-height");
      }
    },
    onAfterPrint: () => {
      var printElement = componentRef.current;
      if (printElement) {
        printElement.style.height = "auto";
      }
    }
  });
  var handleOpenPrint = () => {
    handlePrint();
    setAnchorEl(null);
  };
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState30 = _slicedToArray(_useState29, 2),
    show = _useState30[0],
    setShow = _useState30[1];
  var handleShow = e => {
    setShow(e);
  };
  {/** Comments starts */}
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState32 = _slicedToArray(_useState31, 2),
    show1 = _useState32[0],
    setShow1 = _useState32[1];
  var handleShow1 = e => {
    setShow1(e);
    setAnchorEl(null);
  };
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState34 = _slicedToArray(_useState33, 2),
    reason = _useState34[0],
    setReason = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState36 = _slicedToArray(_useState35, 2),
    Comments1 = _useState36[0],
    setComments = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    notification = _useState38[0],
    setNotification = _useState38[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchComment = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        try {
          var _res$data2, _resNotification$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__/* .ENDPOINT_URL */ .m, "/comment"));
          var resp = (_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.filter(row => row.CommentInfo.idInfo === id);
          setComments(resp);
          var resNotification = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__/* .ENDPOINT_URL */ .m, "/notification"));
          setNotification((_resNotification$data = resNotification.data) === null || _resNotification$data === void 0 || (_resNotification$data = _resNotification$data.data) === null || _resNotification$data === void 0 ? void 0 : _resNotification$data.filter(row => row.idInfo === id));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchComment() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchComment();
  }, [id]);
  var CommentInfo = {
    idInfo: id,
    person: user.data.userName,
    reason
  };
  {/** Loading Start */}
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    loading = _useState40[0],
    setLoading = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    loadingOpenModal = _useState42[0],
    setLoadingOpenModal = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    ErrorOpenModal = _useState44[0],
    setErrorOpenModal = _useState44[1];
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
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_42___default()(Date.now());
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo,
        dateComment
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__/* .ENDPOINT_URL */ .m, "/create-comment/"), data);
        if (res) {
          setReason("");
          handleOpen();
          var newData = res.data.data;
          setComments([newData, ...Comments1]);
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmitEdit(_x) {
      return _ref13.apply(this, arguments);
    };
  }();
  {/** Comments end */}
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState46 = _slicedToArray(_useState45, 2),
    showRef = _useState46[0],
    setShowRef = _useState46[1];
  var handleShowRef = e => {
    setShowRef(e);
    setAnchorEl(null);
  };
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState48 = _slicedToArray(_useState47, 2),
    value = _useState48[0],
    setValue = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState50 = _slicedToArray(_useState49, 2),
    value2 = _useState50[0],
    setValue2 = _useState50[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var selectedIndex = purchase.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [purchase, id]);
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState52 = _slicedToArray(_useState51, 2),
    search = _useState52[0],
    setSearch = _useState52[1];
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
  };
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState54 = _slicedToArray(_useState53, 2),
    search2 = _useState54[0],
    setSearch2 = _useState54[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray = search !== '' ? purchase.filter(row => {
    var _row$customerName, _row$projectName3;
    return row.purchaseName.toLowerCase().includes(search.toLowerCase()) || row.description && row.description.toLowerCase().includes(search.toLowerCase()) || ((_row$customerName = row.customerName) === null || _row$customerName === void 0 ? void 0 : _row$customerName.customerName) && row.customerName.customerName.toLowerCase().includes(search.toLowerCase()) || ((_row$projectName3 = row.projectName) === null || _row$projectName3 === void 0 ? void 0 : _row$projectName3.projectName) && row.projectName.projectName.toLowerCase().includes(search.toLowerCase()) || row.items && row.items.some(Item => {
      var _Item$itemName3;
      var nameToCheck = typeof Item.itemName === 'string' ? Item.itemName : ((_Item$itemName3 = Item.itemName) === null || _Item$itemName3 === void 0 ? void 0 : _Item$itemName3.itemName) || '';
      return nameToCheck.toLowerCase().includes(search.toLowerCase());
    }) || row.items && row.items.some(Item => Item.itemDescription && Item.itemDescription.toLowerCase().includes(search.toLowerCase()));
  }) : purchase;
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState56 = _slicedToArray(_useState55, 2),
    filteredPurchase = _useState56[0],
    setFilteredPurchase = _useState56[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fecthItemPurchase = /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__/* .ENDPOINT_URL */ .m, "/get-purchase/").concat(id));
          setFilteredPurchase(res.data.data.items);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fecthItemPurchase() {
        return _ref14.apply(this, arguments);
      };
    }();
    fecthItemPurchase();
  }, [id]);
  var newArray2 = search2 !== '' ? filteredPurchase.filter(Item => {
    var _Item$itemName4;
    var nameToCheck = typeof Item.itemName === 'string' ? Item.itemName : ((_Item$itemName4 = Item.itemName) === null || _Item$itemName4 === void 0 ? void 0 : _Item$itemName4.itemName) || '';
    return nameToCheck.toLowerCase().includes(search2.toLowerCase()) || Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) || Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase());
  }) : filteredPurchase;
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2__.useState(true),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    sideBar = _React$useState6[0],
    setSideBar = _React$useState6[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var data1 = purchase.filter(row => row._id === id).map(row => ({
    number: 'PUR-' + String(row.purchaseNumber).padStart(6, '0'),
    customer: row.customerName.customerName,
    projectName: row.projectName.projectName,
    purchaseDate: dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.purchaseDate).format('DD/MM/YYYY')
  }));
  var data5 = items.map((Item, i) => {
    var _Item$itemName5;
    return {
      no: i + 1,
      item: (typeof Item.itemName === 'string' ? Item.itemName : (_Item$itemName5 = Item.itemName) === null || _Item$itemName5 === void 0 ? void 0 : _Item$itemName5.itemName) || Item.newDescription || '',
      itemDescription: Item.itemDescription,
      itemQty: Item.itemQty,
      itemCost: '$' + Item.itemCost,
      totalCost: '$' + Item.totalCost,
      itemBuy: Item.itemBuy,
      totalGenerale: '$' + Item.totalGenerale,
      itemOut: Item.itemOut
    };
  });
  var data7 = purchase.filter(row => row._id === id).map(row => ({
    no: '',
    no1: 'SubTotal',
    description: '',
    laborQty: '',
    adjustmentNumber: '',
    purchaseAmount1: '$' + row.purchaseAmount1,
    purchaseAmount2: '$' + row.purchaseAmount2
  }));
  var exportToExcel = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* () {
      var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_58___default().Workbook)();
      var workSheet = workbook.addWorksheet('Sheet1');
      var columns1 = [{
        header: "#",
        key: 'number',
        width: 20
      }, {
        header: "Customer Name",
        key: 'customer',
        width: 20
      }, {
        header: "Project Name",
        key: 'projectName',
        width: 20
      }, {
        header: "Date",
        key: 'purchaseDate',
        width: 20
      }];
      var columns5 = [{
        header: "#",
        key: 'no',
        width: 20
      }, {
        header: "Item",
        key: 'item',
        width: 20
      }, {
        header: "Item Description",
        key: 'itemDescription',
        width: 20
      }, {
        header: "Qty",
        key: 'itemQty',
        width: 20
      }, {
        header: "Rate",
        key: 'itemCost',
        width: 20
      }, {
        header: "Total Cost",
        key: 'totalCost',
        width: 20
      }, {
        header: "Buy",
        key: 'itemBuy',
        width: 20
      }, {
        header: "Total Buy",
        key: 'totalGenerale',
        width: 20
      }, {
        header: "Qty Out",
        key: 'itemOut',
        width: 20
      }];
      workSheet.addRow([]);
      workSheet.addRow(columns1.map(col => col.header));
      data1.forEach(item => {
        workSheet.addRow([item.number, item.customer, item.projectName, item.purchaseDate]);
      });
      workSheet.addRow([]);
      workSheet.addRow(['Item']);
      workSheet.addRow(columns5.map(col => col.header));
      data5.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemCost, item.totalCost, item.itemBuy, item.totalGenerale, item.itemOut]);
      });
      data7.forEach(item => {
        workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.purchaseAmount1, item.purchaseAmount2]);
      });
      var buffer = yield workbook.xlsx.writeBuffer();
      var bold = new Blob([buffer], {
        type: 'application/octet-stream'
      });
      (0,file_saver__WEBPACK_IMPORTED_MODULE_59__.saveAs)(bold, "".concat('PUR-' + String(purchaseNumber).padStart(6, '0') + ' for ' + customerName, ".xlsx"));
    });
    return function exportToExcel() {
      return _ref15.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Purchase Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    onClick: () => navigate(-1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_57__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_56__/* ["default"] */ .A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2
  }, show1 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, show === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      display: 'flex',
      padding: '5px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "h6"
  }, "All Purchase")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow(2)
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, purchase === null || purchase === void 0 ? void 0 : purchase.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    key: index,
    label: row.customerName.customerName + ' | ' + row.purchaseName,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_36__/* .Link */ .N_,
    to: "/PurchasesViewAdminAll/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay, {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A, {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      height: 'calc(100vh - 125px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    key: index,
    label: row.customerName.customerName + ' | ' + row.purchaseName,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_36__/* .Link */ .N_,
    to: "/PurchasesViewAdminAll/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : '') : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay, {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      width: '100%',
      background: 'white'
    }
  }, purchase === null || purchase === void 0 || (_purchase$filter = purchase.filter(row => row._id === id)) === null || _purchase$filter === void 0 ? void 0 : _purchase$filter.map(row => {
    var _ref16, _data, _data2, _ref17;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("header", {
      style: {
        display: 'block',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
      sx: {
        fontWeight: 'bold',
        fontSize: '20px',
        width: '100%'
      }
    }, "PUR-", String(row.purchaseNumber).padStart(6, '0'), " | ", row.projectName.projectName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
      color: row.statusInfo !== undefined && row.statusInfo === "Pending" ? "gray" : row.statusInfo !== undefined && row.statusInfo === "On-Going" ? "blue" : row.statusInfo !== undefined && row.statusInfo === "Stopped" ? "red" : row.statusInfo !== undefined && row.statusInfo === "Pending" ? "Orange" : row.statusInfo !== undefined && row.statusInfo === "Completed" ? "green" : "black"
    }, row.statusInfo !== undefined ? row.statusInfo : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
      "aria-controls": open ? 'demo-customized-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open ? 'true' : undefined,
      variant: "contained",
      disableElevation: true,
      onClick: handleClick,
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_55__/* ["default"] */ .A, null),
      sx: {
        bgcolor: 'gray',
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray'
        }
      }
    }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
      id: "demo-customized-menu",
      MenuListProps: {
        'aria-labelledby': 'demo-customized-button'
      },
      anchorEl: anchorEl,
      open: open,
      onClose: handleCloseMenu,
      TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
      disabled: row.statusInfo !== undefined && row.statusInfo === "Completed"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_36__/* .NavLink */ .k2, {
      to: "/PurchaseFormUpdate/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
      onClick: handleOpenPrint,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "Print")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
      onClick: exportToExcel,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_60__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "Export to Excel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
      onClick: () => handleShow1(2)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      style: {
        color: 'gray'
      }
    }, "Comments"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
      onClick: () => handleShow1(3)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      style: {
        color: 'gray'
      }
    }, "History")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, row.ReferenceName || row.ReferenceName2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      style: {
        color: 'gray'
      },
      onClick: () => handleShowRef(2)
    }, "Reference") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      onClick: handleCloseMenu,
      style: {
        color: 'gray'
      }
    }, "No Related Reference"))))), showRef === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      style: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h4", null, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, invoice ? invoice.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      key: row._id
    }, row.invoiceName)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, estimate ? estimate.map(row => {
      var _row$estimateName;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
        key: row._id
      }, " | ", (_row$estimateName = row.estimateName) === null || _row$estimateName === void 0 ? void 0 : _row$estimateName.replace('EST-', 'QUO-'));
    }) : null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("section", {
      style: {
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center'
      }
    }, showRef === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '80%',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tbody", null, estimate ? estimate.map(row => {
      var _row$estimateName2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", {
        key: row._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.estimateDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Quotation # ", (_row$estimateName2 = row.estimateName) === null || _row$estimateName2 === void 0 ? void 0 : _row$estimateName2.replace('EST-', 'QUO-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Amount  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "$"), " ", row.totalInvoice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_36__/* .NavLink */ .k2, {
        to: "/EstimateViewAdminAll/".concat(row._id),
        className: "LinkName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
        style: {
          fontSize: '12px'
        }
      }, "View")))))));
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tbody", null, invoice ? invoice.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Invoice # ", row.invoiceName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Amount  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "$"), " ", row.totalInvoice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Paid  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "$"), " ", row.total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Balance  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "$"), " ", row.balanceDue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_36__/* .NavLink */ .k2, {
      to: "/InvoiceViewAdminAll/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      style: {
        fontSize: '12px'
      }
    }, "View")))))))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ViewTooltip, {
      title: "Close",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      onClick: () => handleShowRef(1),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A, {
      style: {
        color: '#202a5a'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      style: {
        height: 'calc(100vh - 230px)',
        overflow: 'hidden',
        overflowY: 'auto',
        width: '100%',
        background: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      hidden: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("table", {
      ref: componentRef,
      className: "invoicedetails"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "invoiceTest"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : ""
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
      className: "invoicehr"
    }, "Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "content",
      style: {
        marginBottom: '20px',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("section", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("address", {
      style: {
        position: 'relative',
        lineHeight: 1.35,
        width: '60%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, row.projectName.projectName.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '70%',
        left: '83px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "Pur #")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "PUR-", String(row.purchaseNumber).padStart(6, '0')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.purchaseDate).format('DD/MM/YYYY'))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("section", {
      style: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '70%',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        width: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "N"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        width: '300px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Brand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "I-Out"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tbody", null, (_ref16 = search2 !== '' ? filteredPurchase.filter(Item => {
      var _Item$itemName6;
      var nameToCheck = typeof Item.itemName === 'string' ? Item.itemName : ((_Item$itemName6 = Item.itemName) === null || _Item$itemName6 === void 0 ? void 0 : _Item$itemName6.itemName) || '';
      return nameToCheck.toLowerCase().includes(search2.toLowerCase()) || Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) || Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase());
    }) : filteredPurchase) === null || _ref16 === void 0 ? void 0 : _ref16.map((Item, i) => {
      var _Item$itemName8, _Item$itemName9;
      var relatedUnit = item.find(Item1 => {
        var _Item$itemName7;
        return String(Item1._id) === String(((_Item$itemName7 = Item.itemName) === null || _Item$itemName7 === void 0 ? void 0 : _Item$itemName7._id) || Item.itemName);
      });
      var matchedPurchases = (itemPurchase || []).flatMap(ip => (ip.itemsQtyArray || ip.items || []).filter(it => isItemMatch(it, Item)).map(it => ({
        qty: parseFloat(it.newItemOut || it.itemQty || 0),
        total: parseFloat(it.totalAmount || it.totalAmountUSD || parseFloat(it.newItemOut || it.itemQty || 0) * parseFloat(it.itemRate || it.cost || 0) || 0)
      })));
      var totalBoughtQty = matchedPurchases.reduce((sum, p) => sum + p.qty, 0);
      var totalBoughtCost = matchedPurchases.reduce((sum, p) => sum + p.total, 0);
      var buyQty = totalBoughtQty > 0 ? totalBoughtQty : parseFloat(Item.itemBuy) || 0;
      var totalBuyCost = totalBoughtCost > 0 ? totalBoughtCost : parseFloat(Item.totalGenerale) || buyQty * (parseFloat(Item.itemCost) || 0);
      var matchedOutQty = (itemOut || []).flatMap(io => (io.itemsQtyArray || []).filter(it => isItemMatch(it, Item))).reduce((sum, it) => sum + parseFloat(it.newItemOut || 0), 0);
      var matchedReturnQty = (itemReturn || []).flatMap(ir => (ir.itemsQtyArray || []).filter(it => isItemMatch(it, Item))).reduce((sum, it) => sum + parseFloat(it.newItemOut || 0), 0);
      var netOutQty = matchedOutQty > 0 || matchedReturnQty > 0 ? Math.max(0, matchedOutQty - matchedReturnQty) : parseFloat(Item.itemOut) || 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", {
        key: Item.idRow || i
      }, Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        },
        colSpan: 6
      }, Item.newDescription)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          width: '10px',
          border: '1px solid #DDD'
        }
      }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          width: '300px',
          textAlign: 'left',
          border: '1px solid #DDD'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
        hidden: (typeof Item.itemName === 'string' ? Item.itemName : (_Item$itemName8 = Item.itemName) === null || _Item$itemName8 === void 0 ? void 0 : _Item$itemName8.itemName) === 'empty'
      }, typeof Item.itemName === 'string' ? Item.itemName.toUpperCase() : ((_Item$itemName9 = Item.itemName) === null || _Item$itemName9 === void 0 || (_Item$itemName9 = _Item$itemName9.itemName) === null || _Item$itemName9 === void 0 ? void 0 : _Item$itemName9.toUpperCase()) || ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, Item.itemDescription ? Item.itemDescription.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, Item.itemQty, " ", relatedUnit !== null && relatedUnit !== void 0 && relatedUnit.unit ? String(relatedUnit.unit).toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, Item.itemCost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, Number(Item.totalCost || parseFloat(Item.itemQty || 0) * parseFloat(Item.itemCost || 0) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, buyQty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, Number(totalBuyCost || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, netOutQty, " ", relatedUnit !== null && relatedUnit !== void 0 && relatedUnit.unit ? String(relatedUnit.unit).toUpperCase() : ''))));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      colSpan: 3,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, "SubTotal "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      colSpan: 2,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, purchaseAmount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      colSpan: 2,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, (items.reduce((sum, Item) => {
      var matchedPurchases = (itemPurchase || []).flatMap(ip => (ip.itemsQtyArray || ip.items || []).filter(it => isItemMatch(it, Item)).map(it => ({
        total: parseFloat(it.totalAmount || it.totalAmountUSD || parseFloat(it.newItemOut || it.itemQty || 0) * parseFloat(it.itemRate || it.cost || 0) || 0)
      })));
      var totalBoughtCost = matchedPurchases.reduce((s, p) => s + p.total, 0);
      var buyQty = matchedPurchases.reduce((s, p) => s + (p.qty || 0), 0) || parseFloat(Item.itemBuy) || 0;
      return sum + (totalBoughtCost > 0 ? totalBoughtCost : parseFloat(Item.totalGenerale) || buyQty * (parseFloat(Item.itemCost) || 0));
    }, 0) || purchaseAmount2).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("address", {
      style: {
        float: 'left',
        fontSize: '70%',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
      style: {
        lineHeight: '14px',
        fontWeight: 'bold'
      }
    }, "Bank: SOFIBANQUE SA ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null), "Entitled: GLOBAL GATE SARL", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null), "Bank Account: 00023233330214247020073", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null), "Code Swift: SFBXCDKIXXX"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
      style: {
        fontWeight: 'bold'
      }
    }, "Terms & Conditions "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "     ESTIMATES ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED PARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL.")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      style: {
        position: 'relative',
        marginTop: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_component_PrintFooter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data = data) === null || _data === void 0 ? void 0 : _data.branchId : ""
    }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      sx: {
        padding: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      style: {
        padding: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.branchId : ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
      className: "invoicehr"
    }, "Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("section", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '25px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("address", {
      style: {
        position: 'relative',
        lineHeight: 1.35,
        width: '60%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
      style: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '18px'
      }
    }, row.projectName.projectName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      style: {
        fontSize: '13px'
      }
    }, row.description !== undefined ? row.description.toUpperCase() : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '80%',
        left: '83px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "Pur #")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "PUR-", String(row.purchaseNumber).padStart(6, '0')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.purchaseDate).format('DD/MM/YYYY'))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("section", {
      style: {
        position: 'relative',
        float: 'right',
        padding: '10px',
        marginTop: '-60px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      label: "Search",
      id: "search2",
      value: search2,
      variant: "standard",
      onChange: handleSearch2
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '90%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        width: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "N"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        width: '300px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Brand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "I-Out"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tbody", null, (_ref17 = search2 !== '' ? filteredPurchase.filter(Item => {
      var _Item$itemName0;
      var nameToCheck = typeof Item.itemName === 'string' ? Item.itemName : ((_Item$itemName0 = Item.itemName) === null || _Item$itemName0 === void 0 ? void 0 : _Item$itemName0.itemName) || '';
      return nameToCheck.toLowerCase().includes(search2.toLowerCase()) || Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) || Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase());
    }) : filteredPurchase) === null || _ref17 === void 0 ? void 0 : _ref17.map((Item, i) => {
      var relatedUnit = item.find(Item1 => {
        var _Item$itemName1;
        return String(Item1._id) === String(((_Item$itemName1 = Item.itemName) === null || _Item$itemName1 === void 0 ? void 0 : _Item$itemName1._id) || Item.itemName);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PurchaseItemRow, {
        key: Item.idRow || i,
        Item: Item,
        i: i,
        relatedUnit: relatedUnit,
        formatDate2: formatDate2,
        itemPurchase: itemPurchase,
        itemOut: itemOut,
        itemReturn: itemReturn
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      colSpan: 3,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, "SubTotal "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      colSpan: 2,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, purchaseAmount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
      colSpan: 2,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, (items.reduce((sum, Item) => {
      var matchedPurchases = (itemPurchase || []).flatMap(ip => (ip.itemsQtyArray || ip.items || []).filter(it => isItemMatch(it, Item)).map(it => ({
        total: parseFloat(it.totalAmount || it.totalAmountUSD || parseFloat(it.newItemOut || it.itemQty || 0) * parseFloat(it.itemRate || it.cost || 0) || 0)
      })));
      var totalBoughtCost = matchedPurchases.reduce((s, p) => s + p.total, 0);
      var buyQty = matchedPurchases.reduce((s, p) => s + (p.qty || 0), 0) || parseFloat(Item.itemBuy) || 0;
      return sum + (totalBoughtCost > 0 ? totalBoughtCost : parseFloat(Item.totalGenerale) || buyQty * (parseFloat(Item.itemCost) || 0));
    }, 0) || purchaseAmount2).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "footerinvoice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_54__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "Contact@GlobalGate.Sarl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "+243 827 722 222")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "www.GlobalGate.sarl")))))));
  })))), show1 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "COMMENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    required: true,
    id: "comments",
    name: "comments",
    multiline: true,
    rows: 4,
    value: reason,
    onChange: e => setReason(e.target.value.toUpperCase()),
    label: "Comments",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    type: "submit",
    style: {
      width: '100%'
    },
    className: "btnCustomer6"
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      height: '355px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("table", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tbody", null, Comments1.map(Item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr", {
    key: Item._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("td", {
    style: {
      width: '100%',
      borderBottom: '1px solid black'
    }
  }, Item.dateComment ? dayjs__WEBPACK_IMPORTED_MODULE_42___default()(Item.dateComment).format('DD/MM') : '', " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "", show1 === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "HISTORY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      height: '518px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      padding: '10px'
    }
  }, purchase.filter(row => row._id === id).map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
    key: row._id
  }, row.Create ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, row.Create.dateComment, " ", row.Create.person, " ", row.Create.purchaseNumber) : '')), notification.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, row.person + ' on ' + dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.dateNotification).format('DD/MMMM'), ": ", row.reason))))))) : ""))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .A, {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    type: "button",
    onClick: handleClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchasesViewAdminAll);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 92887
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.invoiceTest{margin:0 0 3em;height:75px}h1{font:bold 100% sans-serif;letter-spacing:.5em;text-align:center;text-transform:uppercase}.invoiceTest address{float:right;font-size:75%;font-style:normal;line-height:1.25;margin:0 0 1em 1em}address{float:right;font-size:75%;font-style:normal;margin:0 0 1em 1em}.invoiceTest h1{background-color:#000;border-color:#999;border-bottom-style:solid;border-bottom-width:10%;font:bold 100% sans-serif;letter-spacing:.5em;text-align:center;text-transform:uppercase}.invoiceTest address p{margin:0 0 .25em}.invoiceTest span,.invoiceTest img{display:block;float:left}.invoiceTest span{margin:0 1em 1em 0;max-height:25%;max-width:90%;position:absolute}.invoiceTest img{max-height:80px;max-width:var(--header-logo-width, 240px);object-fit:contain;margin-top:10px}.invoiceTest:after{clear:both;content:"";display:table}article,article address,table{margin:0 0 3em}article h1{clip:rect(0 0 0 0);position:absolute}article address{float:left;font-size:90%;float:left;line-height:10px}article:after{clear:both;content:"";display:table}table{table-layout:auto;width:100%}table{border-collapse:collapse}table.firstTable{float:right;width:50%;height:50%}table.firstTable:after{clear:both;content:"";display:table}table.firstTable th{width:40%}table.firstTable td{width:60%}aside h1#notes{border:none;border-width:0 0 1px;margin:0 0 1em}aside h1#notes{border-color:#999;border-bottom-style:solid;border-bottom-width:10%;font:bold 100% sans-serif;letter-spacing:.5em;text-align:center;text-transform:uppercase}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 78448
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85072);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55056);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92887);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ }

}]);