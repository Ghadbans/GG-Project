"use strict";
exports.id = "src_js_AdminView1_PageView_ItemView_ItemUpdateView2_js";
exports.ids = ["src_js_AdminView1_PageView_ItemView_ItemUpdateView2_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js"
/*!****************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js ***!
  \****************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormLabel/FormLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/RadioGroup/RadioGroup.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Radio/Radio.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_36__);
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["children"];
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





















var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"].tooltip)]: {
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
function ItemUpdateView2(_ref5) {
  var id = _ref5.id,
    onClose = _ref5.onClose;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_29__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_29__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_30__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_30__.setUser)({
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
        return _ref6.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    unitInfo = _useState2[0],
    setUnitInfo = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    unit1 = _useState4[0],
    setUnit1 = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    itemUnit = _useState6[0],
    setItemUnit = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    typeItem = _useState8[0],
    setTypeItem = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    itemName = _useState0[0],
    setItemName = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    itemStore = _useState10[0],
    setItemStore = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    unit = _useState12[0],
    setUnit = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    unit2 = _useState14[0],
    setUnit2 = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    itemDimension = _useState16[0],
    setItemDimension = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    itemWeight = _useState18[0],
    setItemWeight = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    itemBox = _useState20[0],
    setItemBox = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    itemCategory = _useState22[0],
    setItemCategory = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    itemCategory1 = _useState24[0],
    setItemCategory1 = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    itemNumber = _useState26[0],
    setItemNumber = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    itemNumber1 = _useState28[0],
    setItemNumber1 = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    itemBrand = _useState30[0],
    setItemBrand = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    itemManufacturer = _useState32[0],
    setItemManufacturer = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    itemCostPrice = _useState34[0],
    setItemCostPrice = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    itemSellingPrice = _useState36[0],
    setItemSellingPrice = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState38 = _slicedToArray(_useState37, 2),
    itemDescription = _useState38[0],
    setItemDescription = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState40 = _slicedToArray(_useState39, 2),
    qtyBuy = _useState40[0],
    setQtyBuy = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState42 = _slicedToArray(_useState41, 2),
    itemQuantity = _useState42[0],
    setItemQuantity = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState44 = _slicedToArray(_useState43, 2),
    stockOnHand = _useState44[0],
    setStockOnHand = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState46 = _slicedToArray(_useState45, 2),
    newCode = _useState46[0],
    setNewCode = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState48 = _slicedToArray(_useState47, 2),
    newCode1 = _useState48[0],
    setNewCode1 = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState50 = _slicedToArray(_useState49, 2),
    reason = _useState50[0],
    setReason = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState52 = _slicedToArray(_useState51, 2),
    itemCode = _useState52[0],
    setItemCode = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState54 = _slicedToArray(_useState53, 2),
    indexId = _useState54[0],
    setIndexID = _useState54[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        try {
          var resItemUnit = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/itemUnit"));
          setUnitInfo(resItemUnit.data.data);
          var resCode = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/itemCode"));
          setItemCode(resCode.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetch() {
        return _ref7.apply(this, arguments);
      };
    }();
    handleFetch();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchAll = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/get-item/").concat(id));
          setTypeItem(res.data.data.typeItem);
          setItemName(res.data.data.itemName);
          setItemStore(res.data.data.itemStore);
          setUnit(res.data.data.unit);
          setUnit2(res.data.data.unit);
          setItemDimension(res.data.data.itemDimension);
          setItemWeight(res.data.data.itemWeight);
          setItemBox(res.data.data.itemBox);
          setItemCategory(res.data.data.itemCategory);
          setItemCategory1(res.data.data.itemCategory);
          setItemNumber(res.data.data.itemUpc.itemNumber);
          setItemNumber1(res.data.data.itemUpc.itemNumber);
          setNewCode(res.data.data.itemUpc.newCode);
          setNewCode1(res.data.data.itemUpc.newCode);
          setItemBrand(res.data.data.itemBrand);
          setItemManufacturer(res.data.data.itemManufacturer);
          setItemCostPrice(res.data.data.itemCostPrice);
          setItemSellingPrice(res.data.data.itemSellingPrice);
          setItemDescription(res.data.data.itemDescription);
          setItemQuantity(res.data.data.itemQuantity);
          setStockOnHand(res.data.data.stockOnHand);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchAll() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchAll();
  }, [id]);
  var CommentInfo = {
    idInfo: id,
    person: user.data.userName + ' Modified',
    reason
  };
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_36___default()(Date.now());
  var total = Number(itemQuantity) + Number(qtyBuy);
  var total1 = Number(stockOnHand) + Number(qtyBuy);
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState56 = _slicedToArray(_useState55, 2),
    open1 = _useState56[0],
    setOpen1 = _useState56[1];
  var handleOpenUpdate = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
  };
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    openAutocomplete2 = _useState58[0],
    setOpenAutocomplete2 = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState60 = _slicedToArray(_useState59, 2),
    modalOpenLoading = _useState60[0],
    setModalOpenLoading = _useState60[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
    setModalOpenLoading(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    itemCode.filter(row => row.itemCategory === itemCategory).map(row => setNewCode(row.itemCode));
  }, [itemCategory]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (newCode !== newCode1) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/get-last-saved-item/").concat(newCode));
            setItemNumber(res.data.itemUpc.itemNumber + 1);
          } catch (error) {
            console.error('Error fetching data:', error);
            setItemNumber(1);
          }
        }
      });
      return function fetchNumber() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [newCode]);
  {/** Loading Start */}
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState62 = _slicedToArray(_useState61, 2),
    loading = _useState62[0],
    setLoading = _useState62[1];
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState64 = _slicedToArray(_useState63, 2),
    loadingOpenModal = _useState64[0],
    setLoadingOpenModal = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    ErrorOpenModal = _useState66[0],
    setErrorOpenModal = _useState66[1];
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setOpenAutocomplete2(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setOpen1(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setOpen1(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    navigate(-1);
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
    setOpen1(false);
  };
  {/** Loading End */}
  var handleSubmitCategory = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        itemUnit
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/create-itemUnit"), data);
        if (res) {
          handleOpenModal();
          setUnitInfo([...unitInfo, res.data.data]);
        }
      } catch (error) {
        if (error) {
          alert('An error as Occur');
        }
      }
    });
    return function handleSubmitCategory(_x) {
      return _ref0.apply(this, arguments);
    };
  }();
  var handleClear = e => {
    e.preventDefault();
    setItemNumber(itemNumber1);
    setNewCode(newCode1);
    setItemCategory(itemCategory1);
  };
  var handleClearUnits = e => {
    e.preventDefault();
    setUnit('');
  };
  var handleGiveUnits = e => {
    e.preventDefault();
    setUnit(unit2);
  };
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState68 = _slicedToArray(_useState67, 2),
    hideBack = _useState68[0],
    setHideBack = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState70 = _slicedToArray(_useState69, 2),
    numberInfo = _useState70[0],
    setNumberInfo = _useState70[1];
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (ReferenceInfoCode, ReferenceInfoNumber) {
      var data = {
        idInfo: id,
        person: user.data.userName + ' Modify Item ' + ReferenceInfoCode + '-' + ReferenceInfoNumber,
        reason,
        dateNotification: new Date()
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/create-notification/"), data);
        if (res) {
          setReason("");
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleCreateComment(_x2, _x3) {
      return _ref1.apply(this, arguments);
    };
  }();
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        typeItem,
        itemName,
        itemStore,
        unit: unit1.itemUnit,
        itemDimension,
        itemWeight,
        itemBox,
        itemManufacturer,
        itemCategory,
        itemUpc: {
          itemNumber,
          newCode
        },
        itemBrand,
        itemCostPrice,
        itemQuantity: total,
        itemSellingPrice,
        itemDescription,
        stockOnHand: total1,
        updateS: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/update-item/").concat(id), data);
        if (res) {
          var ReferenceInfoCode = res.data.data.itemUpc.newCode;
          var ReferenceInfoNumber = res.data.data.itemUpc.itemNumber;
          handleCreateComment(ReferenceInfoCode, ReferenceInfoNumber);
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmitEdit(_x4) {
      return _ref10.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleOpenUpdate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '20px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    row: true,
    name: "typeItem",
    value: typeItem,
    onChange: e => setTypeItem(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: "Goods",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null),
    label: "Goods"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: "Services",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null),
    label: "Services"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, typeItem)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "itemName",
    name: "itemName",
    value: itemName,
    label: "Item Name",
    onChange: e => setItemName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "itemBrand",
    name: "itemBrand",
    value: itemBrand,
    label: "Brand",
    onChange: e => setItemBrand(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, unit !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "Unit",
    value: unit,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Clear",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleClearUnits
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "unit",
    options: unitInfo,
    getOptionLabel: Option => Option.itemUnit.toUpperCase(),
    onChange: (e, newValue) => setUnit1(newValue),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    PaperComponent: _ref11 => {
      var children = _ref11.children,
        other = _objectWithoutProperties(_ref11, _excluded3);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, other, {
        sx: {
          backgroundColor: 'white',
          left: '0',
          marginTop: '10px'
        }
      }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: e => handleOpenOpenAutocomplete2(e),
        disabled: user.data.role === 'User',
        onMouseDown: e => e.preventDefault(),
        className: "btnCustomer7",
        style: {
          width: '100%'
        }
      }, "ADD NEW Unit")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, params, {
      label: "Unit",
      required: true
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Clear",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleGiveUnits
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    htmlFor: "itemDimension"
  }, "Dimension"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "itemDimension",
    name: "itemDimension",
    value: itemDimension,
    type: "number",
    label: "Dimension",
    onChange: e => setItemDimension(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, "M")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    htmlFor: "itemWeight"
  }, "Weight"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "itemWeight",
    name: "itemWeight",
    value: itemWeight,
    type: "number",
    label: "Weight",
    onChange: e => setItemWeight(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, "Kg")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "unit"
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    disabled: user.data.role !== 'CEO',
    id: "itemCategory",
    value: itemCategory,
    onChange: e => setItemCategory(e.target.value),
    name: "itemCategory",
    label: "Category"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "HA"
  }, "HA (HA)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "ELECTRICITY"
  }, "ELECTRICITY (EL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "SOLAR SYSTEM"
  }, "SOLAR SYSTEM (SS)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "IT"
  }, "IT (IT)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "PLUMBING"
  }, "PLUMBING (PL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "ELECTRONIC"
  }, "ELECTRONIC (ELN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "FENCE ELECTRIC"
  }, "FENCE ELECTRIC (FE)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "ACCESSORY"
  }, "ACCESSORY (ACC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "WELDING"
  }, "WELDING (WLN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "GENERATOR"
  }, "GENERATOR (GA)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "TOOLS"
  }, "TOOLS (TL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "CONSTRUCTION"
  }, "CONSTRUCTION (CTN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "OTHERS"
  }, "OTHERS (OT)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Clear",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleClear
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    htmlFor: "itemNumber"
  }, "Item Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    required: true,
    disabled: true,
    type: "number",
    id: "itemNumber",
    value: String(itemNumber).padStart(6, '0'),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, newCode, "-"),
    label: "Item Number"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "itemStore",
    name: "itemStore",
    value: itemStore,
    label: "Store Name",
    onChange: e => setItemStore(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "itemManufacturer",
    name: "itemManufacturer",
    value: itemManufacturer,
    label: "Manufacturer",
    onChange: e => setItemManufacturer(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6
  }, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    htmlFor: "itemCostPrice"
  }, "Cost Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "itemCostPrice",
    name: "itemCostPrice",
    type: "number",
    value: itemCostPrice,
    label: "Cost Unit Price",
    onChange: e => setItemCostPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, "$")
  })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6
  }, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    htmlFor: "itemSellingPrice"
  }, "Selling Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "itemSellingPrice",
    name: "itemSellingPrice",
    type: "number",
    value: itemSellingPrice,
    label: "Selling Unit Price",
    onChange: e => setItemSellingPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, "$")
  })) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "itemDescription",
    name: "itemDescription",
    multiline: true,
    value: itemDescription,
    rows: 4,
    label: "Item Description",
    onChange: e => setItemDescription(e.target.value),
    sx: {
      width: '50%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "qtyBuy",
    name: "qtyBuy",
    type: "number",
    label: "Quantity Buy",
    onChange: e => setQtyBuy(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '20px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disabled: true,
    id: "itemQuantity",
    name: "itemQuantity",
    value: itemQuantity,
    label: "Quantity",
    onChange: e => setItemQuantity(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "total",
    name: "total",
    value: total,
    label: "Total Quantity In Store",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Reason Of Updating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    required: true,
    id: "reason",
    name: "reason",
    multiline: true,
    rows: 4,
    value: reason,
    onChange: e => setReason(e.target.value),
    label: "Comments",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: loadingOpenModal,
    onClose: onClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_31__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_32__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_31__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: openAutocomplete2,
    onClose: handleCloseOpenAutocomplete2,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleCloseOpenAutocomplete2,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Create Unit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitCategory
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "itemUnit",
    name: "itemUnit",
    value: itemUnit,
    label: "Unit",
    onChange: e => setItemUnit(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: modalOpenLoading,
    onClose: handleCloseOpenAutocomplete2,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_31__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_32__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data successfully Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseOpenAutocomplete2,
    className: "btnCustomer"
  }, "Close")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemUpdateView2);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfSXRlbVZpZXdfSXRlbVVwZGF0ZVZpZXcyX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBa0Q7QUFDTztBQUNsQztBQUNFO0FBQzJCO0FBQ3NCO0FBQ1I7QUFDK0w7QUFDdk87QUFDd0I7QUFDYztBQUNOO0FBQ0o7QUFDQztBQUMrQjtBQUN2QztBQUNlO0FBQ1Y7QUFDSjtBQUNpQjtBQUN2QztBQUNBO0FBSTFCLElBQU1pRCxZQUFZLEdBQUdoQywwREFBTSxDQUFDaUMsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2hEdEQsMERBQUEsQ0FBQytCLDhEQUFPLEVBQUF5QixRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU83Qiw4REFBYyxDQUFDOEIsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsU0FBUztNQUMxQkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDM0JDLFFBQVEsRUFBRTtJQUNaO0VBQ0YsQ0FBQztBQUFBLENBQUMsQ0FBQztBQUNILElBQU1DLFdBQVcsR0FBR25ELDBEQUFNLENBQUNvRCxLQUFBO0VBQUEsSUFBR2xCLFNBQVMsR0FBQWtCLEtBQUEsQ0FBVGxCLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFB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QUV5Syw0QkFBNkI7SUFDdENxRyxpQkFBaUIsRUFBRXpVLHNEQUFTO0lBQzVCMFUsYUFBYSxFQUFFO01BQ2JDLE9BQU8sRUFBRTtJQUNYLENBQUU7SUFDRixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUNyVywwREFBQSxDQUFDNEIsc0RBQUc7SUFBQ3NTLEVBQUUsRUFBQTZCLGFBQUEsQ0FBQUEsYUFBQSxLQUFPdlIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLGdCQUNoQzdFLDBEQUFBLGNBQ0dzUSxPQUFPLGdCQUFJdFEsMERBQUEsQ0FBQ3lDLDBEQUFNLE1BQUUsQ0FBQyxnQkFHbEJ6QywwREFBQTtJQUFLd0UsS0FBSyxFQUFFO01BQUU2TyxjQUFjLEVBQUUsUUFBUTtNQUFFaUQsU0FBUyxFQUFFO0lBQVM7RUFBRSxnQkFDNUR0VywwREFBQSx5QkFBR0EsMERBQUEsQ0FBQzBDLHdFQUFlO0lBQUM4QixLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFLE9BQU87TUFBRXVTLE1BQU0sRUFBRSxNQUFNO01BQUUxUixLQUFLLEVBQUU7SUFBTztFQUFFLENBQUUsQ0FBSSxDQUFDLGVBQ3BGN0UsMERBQUEsYUFBSSwwQkFBNEIsQ0FBQyxlQUNqQ0EsMERBQUE7SUFBS3dFLEtBQUssRUFBRTtNQUFFMk8sT0FBTyxFQUFFLE1BQU07TUFBRWdCLEdBQUcsRUFBRSxNQUFNO01BQUVkLGNBQWMsRUFBRTtJQUFTO0VBQUUsZ0JBQ3JFclQsMERBQUE7SUFBUXNVLE9BQU8sRUFBRXhFLDRCQUE2QjtJQUFDM00sU0FBUyxFQUFDO0VBQWEsR0FBQyxPQUUvRCxDQUNMLENBQ0YsQ0FFTixDQUNGLENBQ0EsQ0FDSixDQUFDO0FBRVY7QUFFQSxpRUFBZStCLGVBQWUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9JdGVtVmlldy9JdGVtVXBkYXRlVmlldzIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNpZGViYXJEYXNoIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaCc7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnXHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcydcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlLCBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgUGFwZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgc3R5bGVkLCBGb3JtTGFiZWwsIFJhZGlvR3JvdXAsIEZvcm1Db250cm9sTGFiZWwsIFJhZGlvLCBJbnB1dCwgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIE1vZGFsLCBCYWNrZHJvcCwgRmFkZSwgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCB7IENsb3NlLCBSZW1vdmVDaXJjbGVPdXRsaW5lIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBJdGVtVXBkYXRlVmlldzIoeyBpZCwgb25DbG9zZSB9KSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgY29uc3QgW3VuaXRJbmZvLCBzZXRVbml0SW5mb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VuaXQxLCBzZXRVbml0MV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2l0ZW1Vbml0LCBzZXRJdGVtVW5pdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3R5cGVJdGVtLCBzZXRUeXBlSXRlbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXRlbU5hbWUsIHNldEl0ZW1OYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtU3RvcmUsIHNldEl0ZW1TdG9yZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdW5pdCwgc2V0VW5pdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdW5pdDIsIHNldFVuaXQyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtRGltZW5zaW9uLCBzZXRJdGVtRGltZW5zaW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtV2VpZ2h0LCBzZXRJdGVtV2VpZ2h0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtQm94LCBzZXRJdGVtQm94XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtQ2F0ZWdvcnksIHNldEl0ZW1DYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXRlbUNhdGVnb3J5MSwgc2V0SXRlbUNhdGVnb3J5MV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXRlbU51bWJlciwgc2V0SXRlbU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXRlbU51bWJlcjEsIHNldEl0ZW1OdW1iZXIxXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpdGVtQnJhbmQsIHNldEl0ZW1CcmFuZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXRlbU1hbnVmYWN0dXJlciwgc2V0SXRlbU1hbnVmYWN0dXJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXRlbUNvc3RQcmljZSwgc2V0SXRlbUNvc3RQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXRlbVNlbGxpbmdQcmljZSwgc2V0SXRlbVNlbGxpbmdQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXRlbURlc2NyaXB0aW9uLCBzZXRJdGVtRGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3F0eUJ1eSwgc2V0UXR5QnV5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpdGVtUXVhbnRpdHksIHNldEl0ZW1RdWFudGl0eV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc3RvY2tPbkhhbmQsIHNldFN0b2NrT25IYW5kXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtuZXdDb2RlLCBzZXROZXdDb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuZXdDb2RlMSwgc2V0TmV3Q29kZTFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtQ29kZSwgc2V0SXRlbUNvZGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbmRleElkLCBzZXRJbmRleElEXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVGZXRjaCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNJdGVtVW5pdCA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1Vbml0YClcclxuICAgICAgICBzZXRVbml0SW5mbyhyZXNJdGVtVW5pdC5kYXRhLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc0NvZGUgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtQ29kZWApXHJcbiAgICAgICAgc2V0SXRlbUNvZGUocmVzQ29kZS5kYXRhLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVGZXRjaCgpXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoQWxsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtLyR7aWR9YClcclxuICAgICAgICBzZXRUeXBlSXRlbShyZXMuZGF0YS5kYXRhLnR5cGVJdGVtKTtcclxuICAgICAgICBzZXRJdGVtTmFtZShyZXMuZGF0YS5kYXRhLml0ZW1OYW1lKTtcclxuICAgICAgICBzZXRJdGVtU3RvcmUocmVzLmRhdGEuZGF0YS5pdGVtU3RvcmUpO1xyXG4gICAgICAgIHNldFVuaXQocmVzLmRhdGEuZGF0YS51bml0KTtcclxuICAgICAgICBzZXRVbml0MihyZXMuZGF0YS5kYXRhLnVuaXQpO1xyXG4gICAgICAgIHNldEl0ZW1EaW1lbnNpb24ocmVzLmRhdGEuZGF0YS5pdGVtRGltZW5zaW9uKTtcclxuICAgICAgICBzZXRJdGVtV2VpZ2h0KHJlcy5kYXRhLmRhdGEuaXRlbVdlaWdodCk7XHJcbiAgICAgICAgc2V0SXRlbUJveChyZXMuZGF0YS5kYXRhLml0ZW1Cb3gpO1xyXG4gICAgICAgIHNldEl0ZW1DYXRlZ29yeShyZXMuZGF0YS5kYXRhLml0ZW1DYXRlZ29yeSk7XHJcbiAgICAgICAgc2V0SXRlbUNhdGVnb3J5MShyZXMuZGF0YS5kYXRhLml0ZW1DYXRlZ29yeSk7XHJcbiAgICAgICAgc2V0SXRlbU51bWJlcihyZXMuZGF0YS5kYXRhLml0ZW1VcGMuaXRlbU51bWJlcik7XHJcbiAgICAgICAgc2V0SXRlbU51bWJlcjEocmVzLmRhdGEuZGF0YS5pdGVtVXBjLml0ZW1OdW1iZXIpO1xyXG4gICAgICAgIHNldE5ld0NvZGUocmVzLmRhdGEuZGF0YS5pdGVtVXBjLm5ld0NvZGUpO1xyXG4gICAgICAgIHNldE5ld0NvZGUxKHJlcy5kYXRhLmRhdGEuaXRlbVVwYy5uZXdDb2RlKTtcclxuICAgICAgICBzZXRJdGVtQnJhbmQocmVzLmRhdGEuZGF0YS5pdGVtQnJhbmQpO1xyXG4gICAgICAgIHNldEl0ZW1NYW51ZmFjdHVyZXIocmVzLmRhdGEuZGF0YS5pdGVtTWFudWZhY3R1cmVyKTtcclxuICAgICAgICBzZXRJdGVtQ29zdFByaWNlKHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSk7XHJcbiAgICAgICAgc2V0SXRlbVNlbGxpbmdQcmljZShyZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpO1xyXG4gICAgICAgIHNldEl0ZW1EZXNjcmlwdGlvbihyZXMuZGF0YS5kYXRhLml0ZW1EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgc2V0SXRlbVF1YW50aXR5KHJlcy5kYXRhLmRhdGEuaXRlbVF1YW50aXR5KTtcclxuICAgICAgICBzZXRTdG9ja09uSGFuZChyZXMuZGF0YS5kYXRhLnN0b2NrT25IYW5kKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hBbGwoKVxyXG4gIH0sIFtpZF0pXHJcbiAgY29uc3QgQ29tbWVudEluZm8gPVxyXG4gIHtcclxuICAgIGlkSW5mbzogaWQsXHJcbiAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgTW9kaWZpZWQnLFxyXG4gICAgcmVhc29uXHJcbiAgfVxyXG4gIGNvbnN0IGRhdGVDb21tZW50ID0gZGF5anMoRGF0ZS5ub3coKSk7XHJcblxyXG4gIGNvbnN0IHRvdGFsID0gTnVtYmVyKGl0ZW1RdWFudGl0eSkgKyBOdW1iZXIocXR5QnV5KTtcclxuICBjb25zdCB0b3RhbDEgPSBOdW1iZXIoc3RvY2tPbkhhbmQpICsgTnVtYmVyKHF0eUJ1eSk7XHJcblxyXG4gIGNvbnN0IFtvcGVuMSwgc2V0T3BlbjFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuVXBkYXRlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbjEodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IFtvcGVuQXV0b2NvbXBsZXRlMiwgc2V0T3BlbkF1dG9jb21wbGV0ZTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbE9wZW5Mb2FkaW5nLCBzZXRNb2RhbE9wZW5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIoZmFsc2UpO1xyXG4gICAgc2V0TW9kYWxPcGVuTG9hZGluZyhmYWxzZSlcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpdGVtQ29kZS5maWx0ZXIoKHJvdykgPT4gcm93Lml0ZW1DYXRlZ29yeSA9PT0gaXRlbUNhdGVnb3J5KVxyXG4gICAgICAubWFwKChyb3cpID0+IHNldE5ld0NvZGUocm93Lml0ZW1Db2RlKSlcclxuICB9LCBbaXRlbUNhdGVnb3J5XSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hOdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChuZXdDb2RlICE9PSBuZXdDb2RlMSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbGFzdC1zYXZlZC1pdGVtLyR7bmV3Q29kZX1gKVxyXG4gICAgICAgICAgc2V0SXRlbU51bWJlcihyZXMuZGF0YS5pdGVtVXBjLml0ZW1OdW1iZXIgKyAxKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgIHNldEl0ZW1OdW1iZXIoMSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoTnVtYmVyKClcclxuICB9LCBbbmV3Q29kZV0pXHJcbiAgey8qKiBMb2FkaW5nIFN0YXJ0ICovIH1cclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbE9wZW5Mb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIoZmFsc2UpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG5cclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIG5hdmlnYXRlKC0xKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICB9XHJcbiAgey8qKiBMb2FkaW5nIEVuZCAqLyB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdENhdGVnb3J5ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGl0ZW1Vbml0XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLWl0ZW1Vbml0YCwgZGF0YSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBoYW5kbGVPcGVuTW9kYWwoKTtcclxuICAgICAgICBzZXRVbml0SW5mbyhbLi4udW5pdEluZm8sIHJlcy5kYXRhLmRhdGFdKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydCgnQW4gZXJyb3IgYXMgT2NjdXInKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbGVhciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldEl0ZW1OdW1iZXIoaXRlbU51bWJlcjEpO1xyXG4gICAgc2V0TmV3Q29kZShuZXdDb2RlMSk7XHJcbiAgICBzZXRJdGVtQ2F0ZWdvcnkoaXRlbUNhdGVnb3J5MSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyVW5pdHMgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRVbml0KCcnKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlR2l2ZVVuaXRzID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0VW5pdCh1bml0Mik7XHJcbiAgfVxyXG4gIGNvbnN0IFtoaWRlQmFjaywgc2V0SGlkZUJhY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtudW1iZXJJbmZvLCBzZXROdW1iZXJJbmZvXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQ29tbWVudCA9IGFzeW5jIChSZWZlcmVuY2VJbmZvQ29kZSwgUmVmZXJlbmNlSW5mb051bWJlcikgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBpZCxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIE1vZGlmeSBJdGVtICcgKyBSZWZlcmVuY2VJbmZvQ29kZSArICctJyArIFJlZmVyZW5jZUluZm9OdW1iZXIsXHJcbiAgICAgIHJlYXNvbixcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uL2AsIGRhdGEpXHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBzZXRSZWFzb24oXCJcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0RWRpdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICB0eXBlSXRlbSwgaXRlbU5hbWUsIGl0ZW1TdG9yZSwgdW5pdDogdW5pdDEuaXRlbVVuaXQsIGl0ZW1EaW1lbnNpb24sXHJcbiAgICAgIGl0ZW1XZWlnaHQsIGl0ZW1Cb3gsIGl0ZW1NYW51ZmFjdHVyZXIsIGl0ZW1DYXRlZ29yeSwgaXRlbVVwYzoge1xyXG4gICAgICAgIGl0ZW1OdW1iZXIsXHJcbiAgICAgICAgbmV3Q29kZVxyXG4gICAgICB9XHJcbiAgICAgICwgaXRlbUJyYW5kLCBpdGVtQ29zdFByaWNlLFxyXG4gICAgICBpdGVtUXVhbnRpdHk6IHRvdGFsLCBpdGVtU2VsbGluZ1ByaWNlLCBpdGVtRGVzY3JpcHRpb24sIHN0b2NrT25IYW5kOiB0b3RhbDEsIHVwZGF0ZVM6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLWl0ZW0vJHtpZH1gLCBkYXRhKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mb0NvZGUgPSByZXMuZGF0YS5kYXRhLml0ZW1VcGMubmV3Q29kZVxyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm9OdW1iZXIgPSByZXMuZGF0YS5kYXRhLml0ZW1VcGMuaXRlbU51bWJlclxyXG4gICAgICAgIGhhbmRsZUNyZWF0ZUNvbW1lbnQoUmVmZXJlbmNlSW5mb0NvZGUsIFJlZmVyZW5jZUluZm9OdW1iZXIpXHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT3BlblVwZGF0ZX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzIwcHgnIH19IHNwYWNpbmc9ezJ9IGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5UeXBlPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgIHJvd1xyXG4gICAgICAgICAgICAgICAgbmFtZT1cInR5cGVJdGVtXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0eXBlSXRlbX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFR5cGVJdGVtKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT0nR29vZHMnIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJHb29kc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT0nU2VydmljZXMnIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJTZXJ2aWNlc1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT57dHlwZUl0ZW19PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9J2l0ZW1OYW1lJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J2l0ZW1OYW1lJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPXtpdGVtTmFtZX1cclxuICAgICAgICAgICAgICBsYWJlbD0nSXRlbSBOYW1lJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbU5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD0naXRlbUJyYW5kJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J2l0ZW1CcmFuZCdcclxuICAgICAgICAgICAgICB2YWx1ZT17aXRlbUJyYW5kfVxyXG4gICAgICAgICAgICAgIGxhYmVsPSdCcmFuZCdcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1CcmFuZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVuaXQgIT09ICcnID9cclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdVbml0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VuaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJVbml0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1bml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3VuaXRJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhPcHRpb24pID0+IE9wdGlvbi5pdGVtVW5pdC50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gc2V0VW5pdDEobmV3VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHsgY2hpbGRyZW4sIC4uLm90aGVyIH0pID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERCBORVcgVW5pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiVW5pdFwiIHJlcXVpcmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlR2l2ZVVuaXRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XHJcbiAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0naXRlbURpbWVuc2lvbic+RGltZW5zaW9uPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICBpZD0naXRlbURpbWVuc2lvbidcclxuICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EaW1lbnNpb24nXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbURpbWVuc2lvbn1cclxuICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdEaW1lbnNpb24nXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1EaW1lbnNpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj0nc3RhcnQnPk08L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gPlxyXG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9J2l0ZW1XZWlnaHQnPldlaWdodDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9J2l0ZW1XZWlnaHQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdpdGVtV2VpZ2h0J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1XZWlnaHR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nV2VpZ2h0J1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtV2VpZ2h0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249J3N0YXJ0Jz5LZzwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInVuaXRcIj5DYXRlZ29yeTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJpdGVtQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1DYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbUNhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJpdGVtQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiSEFcIj5IQSAoSEEpPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkVMRUNUUklDSVRZXCI+RUxFQ1RSSUNJVFkgKEVMKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJTT0xBUiBTWVNURU1cIj5TT0xBUiBTWVNURU0gKFNTKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJJVFwiPklUIChJVCk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUExVTUJJTkdcIj5QTFVNQklORyAoUEwpPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkVMRUNUUk9OSUNcIj5FTEVDVFJPTklDIChFTE4pPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkZFTkNFIEVMRUNUUklDXCI+RkVOQ0UgRUxFQ1RSSUMgKEZFKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJBQ0NFU1NPUllcIj5BQ0NFU1NPUlkgKEFDQyk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiV0VMRElOR1wiPldFTERJTkcgKFdMTik8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiR0VORVJBVE9SXCI+R0VORVJBVE9SIChHQSk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiVE9PTFNcIj5UT09MUyAoVEwpPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkNPTlNUUlVDVElPTlwiPkNPTlNUUlVDVElPTiAoQ1ROKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJPVEhFUlNcIj5PVEhFUlMgKE9UKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsZWFyfT5cclxuICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdpdGVtTnVtYmVyJz5JdGVtIE51bWJlcjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICBpZD0naXRlbU51bWJlcidcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtTdHJpbmcoaXRlbU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1cclxuICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPntuZXdDb2RlfS08L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSXRlbSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPSdpdGVtU3RvcmUnXHJcbiAgICAgICAgICAgICAgbmFtZT0naXRlbVN0b3JlJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPXtpdGVtU3RvcmV9XHJcbiAgICAgICAgICAgICAgbGFiZWw9J1N0b3JlIE5hbWUnXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtU3RvcmUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9J2l0ZW1NYW51ZmFjdHVyZXInXHJcbiAgICAgICAgICAgICAgbmFtZT0naXRlbU1hbnVmYWN0dXJlcidcclxuICAgICAgICAgICAgICB2YWx1ZT17aXRlbU1hbnVmYWN0dXJlcn1cclxuICAgICAgICAgICAgICBsYWJlbD0nTWFudWZhY3R1cmVyJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbU1hbnVmYWN0dXJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJyA/XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19ID5cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0naXRlbUNvc3RQcmljZSc+Q29zdCBVbml0IFByaWNlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPSdpdGVtQ29zdFByaWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1Db3N0UHJpY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtQ29zdFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb3N0IFVuaXQgUHJpY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtQ29zdFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPSdzdGFydCc+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD4gOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJyA/XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19ID5cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0naXRlbVNlbGxpbmdQcmljZSc+U2VsbGluZyBVbml0IFByaWNlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPSdpdGVtU2VsbGluZ1ByaWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1TZWxsaW5nUHJpY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtU2VsbGluZ1ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTZWxsaW5nIFVuaXQgUHJpY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtU2VsbGluZ1ByaWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPSdzdGFydCc+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD4gOiAnJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9J2l0ZW1EZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICBuYW1lPSdpdGVtRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgIGxhYmVsPSdJdGVtIERlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbURlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzUwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdxdHlCdXknXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3F0eUJ1eSdcclxuICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nUXVhbnRpdHkgQnV5J1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF0eUJ1eShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMjBweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9J2l0ZW1RdWFudGl0eSdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUXVhbnRpdHknXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1RdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUXVhbnRpdHknXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtUXVhbnRpdHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD0ndG90YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ndG90YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdUb3RhbCBRdWFudGl0eSBJbiBTdG9yZSdcclxuICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuMX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVwZGF0ZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICBSZWFzb24gT2YgVXBkYXRpbmdcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRFZGl0fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBpZD0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlYXNvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e0Vycm9yT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENhbmNlbEljb24gc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgRmFpbGVkIHRvIFNhdmVkPC9oMj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgVHJ5IEFnYWluXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgQ3JlYXRlIFVuaXRcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRDYXRlZ29yeX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgaWQ9J2l0ZW1Vbml0J1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtVW5pdCdcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1Vbml0fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nVW5pdCdcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtVW5pdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e21vZGFsT3BlbkxvYWRpbmd9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj4gRGF0YSBzdWNjZXNzZnVsbHkgU2F2ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1VcGRhdGVWaWV3MlxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiQXV0b2NvbXBsZXRlIiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlBhcGVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkZvcm1MYWJlbCIsIlJhZGlvR3JvdXAiLCJGb3JtQ29udHJvbExhYmVsIiwiUmFkaW8iLCJJbnB1dCIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJGYWRlIiwiQm94IiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsIkFycm93QmFjayIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2FkZXIiLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiTG9nb3V0IiwiQ2xvc2UiLCJSZW1vdmVDaXJjbGVPdXRsaW5lIiwidjQiLCJkYXlqcyIsIkJsYWNrVG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiVmlld1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiSXRlbVVwZGF0ZVZpZXcyIiwiX3JlZjUiLCJpZCIsIm9uQ2xvc2UiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmNiIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1bml0SW5mbyIsInNldFVuaXRJbmZvIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJ1bml0MSIsInNldFVuaXQxIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJpdGVtVW5pdCIsInNldEl0ZW1Vbml0IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJ0eXBlSXRlbSIsInNldFR5cGVJdGVtIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJpdGVtTmFtZSIsInNldEl0ZW1OYW1lIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwiaXRlbVN0b3JlIiwic2V0SXRlbVN0b3JlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInVuaXQiLCJzZXRVbml0IiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInVuaXQyIiwic2V0VW5pdDIiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiaXRlbURpbWVuc2lvbiIsInNldEl0ZW1EaW1lbnNpb24iLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwiaXRlbVdlaWdodCIsInNldEl0ZW1XZWlnaHQiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiaXRlbUJveCIsInNldEl0ZW1Cb3giLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwiaXRlbUNhdGVnb3J5Iiwic2V0SXRlbUNhdGVnb3J5IiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsIml0ZW1DYXRlZ29yeTEiLCJzZXRJdGVtQ2F0ZWdvcnkxIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsIml0ZW1OdW1iZXIiLCJzZXRJdGVtTnVtYmVyIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsIml0ZW1OdW1iZXIxIiwic2V0SXRlbU51bWJlcjEiLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwiaXRlbUJyYW5kIiwic2V0SXRlbUJyYW5kIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsIml0ZW1NYW51ZmFjdHVyZXIiLCJzZXRJdGVtTWFudWZhY3R1cmVyIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsIml0ZW1Db3N0UHJpY2UiLCJzZXRJdGVtQ29zdFByaWNlIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsIml0ZW1TZWxsaW5nUHJpY2UiLCJzZXRJdGVtU2VsbGluZ1ByaWNlIiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsIml0ZW1EZXNjcmlwdGlvbiIsInNldEl0ZW1EZXNjcmlwdGlvbiIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJxdHlCdXkiLCJzZXRRdHlCdXkiLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwiaXRlbVF1YW50aXR5Iiwic2V0SXRlbVF1YW50aXR5IiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsInN0b2NrT25IYW5kIiwic2V0U3RvY2tPbkhhbmQiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2IiwibmV3Q29kZSIsInNldE5ld0NvZGUiLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4IiwibmV3Q29kZTEiLCJzZXROZXdDb2RlMSIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwiaXRlbUNvZGUiLCJzZXRJdGVtQ29kZSIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJpbmRleElkIiwic2V0SW5kZXhJRCIsImhhbmRsZUZldGNoIiwiX3JlZjciLCJyZXNJdGVtVW5pdCIsInJlc0NvZGUiLCJmZXRjaEFsbCIsIl9yZWY4IiwiaXRlbVVwYyIsIkNvbW1lbnRJbmZvIiwiaWRJbmZvIiwicGVyc29uIiwiZGF0ZUNvbW1lbnQiLCJEYXRlIiwibm93IiwidG90YWwiLCJOdW1iZXIiLCJ0b3RhbDEiLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2Iiwib3BlbjEiLCJzZXRPcGVuMSIsImhhbmRsZU9wZW5VcGRhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZVVwZGF0ZSIsIl91c2VTdGF0ZTU3IiwiX3VzZVN0YXRlNTgiLCJvcGVuQXV0b2NvbXBsZXRlMiIsInNldE9wZW5BdXRvY29tcGxldGUyIiwiX3VzZVN0YXRlNTkiLCJfdXNlU3RhdGU2MCIsIm1vZGFsT3BlbkxvYWRpbmciLCJzZXRNb2RhbE9wZW5Mb2FkaW5nIiwiaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMiIsImZpbHRlciIsInJvdyIsIm1hcCIsImZldGNoTnVtYmVyIiwiX3JlZjkiLCJfdXNlU3RhdGU2MSIsIl91c2VTdGF0ZTYyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGU2MyIsIl91c2VTdGF0ZTY0IiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU2NSIsIl91c2VTdGF0ZTY2IiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW5Nb2RhbCIsInNldFRpbWVvdXQiLCJoYW5kbGVPcGVuIiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVTdWJtaXRDYXRlZ29yeSIsIl9yZWYwIiwicG9zdCIsImFsZXJ0IiwiX3giLCJoYW5kbGVDbGVhciIsImhhbmRsZUNsZWFyVW5pdHMiLCJoYW5kbGVHaXZlVW5pdHMiLCJfdXNlU3RhdGU2NyIsIl91c2VTdGF0ZTY4IiwiaGlkZUJhY2siLCJzZXRIaWRlQmFjayIsIl91c2VTdGF0ZTY5IiwiX3VzZVN0YXRlNzAiLCJudW1iZXJJbmZvIiwic2V0TnVtYmVySW5mbyIsImhhbmRsZUNyZWF0ZUNvbW1lbnQiLCJfcmVmMSIsIlJlZmVyZW5jZUluZm9Db2RlIiwiUmVmZXJlbmNlSW5mb051bWJlciIsImRhdGVOb3RpZmljYXRpb24iLCJfeDIiLCJfeDMiLCJoYW5kbGVTdWJtaXRFZGl0IiwiX3JlZjEwIiwidXBkYXRlUyIsInB1dCIsIl94NCIsIm9uU3VibWl0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJzcGFjaW5nIiwiY29tcG9uZW50IiwiaXRlbSIsInhzIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJjb250cm9sIiwibGFiZWwiLCJzeCIsImdhcCIsInRpdGxlIiwicGxhY2VtZW50Iiwib25DbGljayIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIk9wdGlvbiIsInRvVXBwZXJDYXNlIiwibmV3VmFsdWUiLCJQYXBlckNvbXBvbmVudCIsIl9yZWYxMSIsImNoaWxkcmVuIiwib3RoZXIiLCJfZXhjbHVkZWQzIiwibWFyZ2luVG9wIiwiZGlzYWJsZWQiLCJvbk1vdXNlRG93biIsInJlbmRlcklucHV0IiwicGFyYW1zIiwicmVxdWlyZWQiLCJodG1sRm9yIiwidHlwZSIsInN0YXJ0QWRvcm5tZW50IiwiU3RyaW5nIiwicGFkU3RhcnQiLCJtdWx0aWxpbmUiLCJyb3dzIiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJmbG9hdCIsInZhcmlhbnQiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJ0ZXh0QWxpZ24iLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9