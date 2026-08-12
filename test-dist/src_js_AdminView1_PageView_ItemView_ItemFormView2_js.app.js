"use strict";
exports.id = "src_js_AdminView1_PageView_ItemView_ItemFormView2_js";
exports.ids = ["src_js_AdminView1_PageView_ItemView_ItemFormView2_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js"
/*!**************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ItemView/ItemFormView2.js ***!
  \**************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormLabel/FormLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/RadioGroup/RadioGroup.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Radio/Radio.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
var _excluded = ["className"],
  _excluded2 = ["children"];
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"].tooltip)]: {
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
var ItemFormView2 = _ref3 => {
  var onCreateOption = _ref3.onCreateOption,
    onClose = _ref3.onClose;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_29__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_29__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_30__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
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
        return _ref4.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    unitInfo = _useState2[0],
    setUnitInfo = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    typeItem = _useState4[0],
    setTypeItem = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    itemName = _useState6[0],
    setItemName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    itemStore = _useState8[0],
    setItemStore = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState0 = _slicedToArray(_useState9, 2),
    unit = _useState0[0],
    setUnit = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    itemUnit = _useState10[0],
    setItemUnit = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    itemDimension = _useState12[0],
    setItemDimension = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    itemWeight = _useState14[0],
    setItemWeight = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    itemCategory = _useState16[0],
    setItemCategory = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    itemNumber = _useState18[0],
    setItemNumber = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    itemBrand = _useState20[0],
    setItemBrand = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    itemManufacturer = _useState22[0],
    setItemManufacturer = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    itemCostPrice = _useState24[0],
    setItemCostPrice = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    itemSellingPrice = _useState26[0],
    setItemSellingPrice = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    itemDescription = _useState28[0],
    setItemDescription = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    itemQuantity = _useState30[0],
    setItemQuantity = _useState30[1];
  var stockOnHand = itemQuantity;
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    loading = _useState32[0],
    setLoading = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    loadingOpenModal = _useState34[0],
    setLoadingOpenModal = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    ErrorOpenModal = _useState36[0],
    setErrorOpenModal = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    itemCode = _useState38[0],
    setItemCode = _useState38[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* () {
        try {
          var resItemUnit = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/itemUnit"));
          setUnitInfo(resItemUnit.data.data);
          var resCode = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/itemCode"));
          setItemCode(resCode.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetch() {
        return _ref5.apply(this, arguments);
      };
    }();
    handleFetch();
  }, []);
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState40 = _slicedToArray(_useState39, 2),
    newCode = _useState40[0],
    setNewCode = _useState40[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    itemCode.filter(row => row.itemCategory === itemCategory).map(row => setNewCode(row.itemCode));
  }, [itemCategory]);
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(Date.now()).format('DD/MM/YYYY');
  var Creates = {
    person: user.data.userName + ' CREATED ',
    dateComment
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* () {
        if (newCode) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/get-last-saved-item/").concat(newCode));
            setItemNumber(res.data.itemUpc.itemNumber + 1);
          } catch (error) {
            console.error('Error fetching data:', error);
            setItemNumber(1);
          }
        }
      });
      return function fetchNumber() {
        return _ref6.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [newCode]);
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    openAutocomplete2 = _useState42[0],
    setOpenAutocomplete2 = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    modalOpenLoading = _useState44[0],
    setModalOpenLoading = _useState44[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
    setModalOpenLoading(false);
  };
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    openBack = _useState46[0],
    setOpenBack = _useState46[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  //open loading modal when submit is true
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  //open loading modal when error
  var handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  //close loading modal
  var handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
    if (onClose) onClose();
  };
  var handleCloseAdd = () => {
    setLoadingOpenModal(false);
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  //Decision When loading finish
  var handleDecision = navigate => {
    //Navigate Based on th Decision
    if (navigate === 'previous') {
      window.history.back();
    } else if (navigate === 'stay') {
      handleClose();
    }
  };
  var handleSubmitCategory = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        itemUnit
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/create-itemUnit"), data);
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
      return _ref7.apply(this, arguments);
    };
  }();
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoCode, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: ReferenceInfoCode + '-' + ReferenceInfoNumber + ' / ' + itemName,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2, _x3, _x4) {
      return _ref8.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_34__["default"])(),
        typeItem,
        itemName,
        itemStore,
        unit: unit.itemUnit,
        itemDimension,
        itemWeight,
        itemCategory,
        itemUpc: {
          itemNumber,
          newCode
        },
        itemManufacturer,
        itemBrand,
        itemCostPrice,
        itemQuantity,
        itemSellingPrice,
        itemDescription,
        stockOnHand,
        synced: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/create-item"), {
          typeItem,
          itemName,
          itemStore,
          unit: unit.itemUnit,
          itemDimension,
          itemWeight,
          itemCategory,
          itemUpc: {
            itemNumber,
            newCode
          },
          itemManufacturer,
          itemBrand,
          itemCostPrice,
          itemQuantity,
          itemSellingPrice,
          itemDescription,
          stockOnHand,
          synced: false
        });
        if (res) {
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoCode = res.data.data.itemUpc.newCode;
          var ReferenceInfoNumber = res.data.data.itemUpc.itemNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoCode, ReferenceInfoNumber);
          handleOpen();
          onCreateOption(res.data.data);
        } else {
          alert('Failed To Save Form Data');
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmit(_x5) {
      return _ref9.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '20px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    required: true,
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, typeItem))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "unit",
    options: unitInfo,
    getOptionLabel: Option => Option.itemUnit.toUpperCase(),
    onChange: (e, newValue) => setUnit(newValue),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    PaperComponent: _ref0 => {
      var children = _ref0.children,
        other = _objectWithoutProperties(_ref0, _excluded2);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, other, {
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
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, params, {
      label: "Unit",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "itemDimension"
  }, "Dimension"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "itemDimension",
    name: "itemDimension",
    value: itemDimension,
    type: "number",
    label: "Dimension",
    onChange: e => setItemDimension(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "itemWeight"
  }, "Weight"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "itemWeight",
    name: "itemWeight",
    value: itemWeight,
    type: "number",
    label: "Weight",
    onChange: e => setItemWeight(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "Kg")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "unit"
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    required: true,
    id: "itemCategory",
    value: itemCategory,
    onChange: e => setItemCategory(e.target.value),
    name: "itemCategory",
    label: "Category"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "HA"
  }, "HA (HA)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "ELECTRICITY"
  }, "ELECTRICITY (EL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "SOLAR SYSTEM"
  }, "SOLAR SYSTEM (SS)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "IT"
  }, "IT (IT)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "PLUMBING"
  }, "PLUMBING (PL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "ELECTRONIC"
  }, "ELECTRONIC (ELN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "FENCE ELECTRIC"
  }, "FENCE ELECTRIC (FE)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "ACCESSORY"
  }, "ACCESSORY (ACC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "WELDING"
  }, "WELDING (WLN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "GENERATOR"
  }, "GENERATOR (GA)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "TOOLS"
  }, "TOOLS (TL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "CONSTRUCTION"
  }, "CONSTRUCTION (CTN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "OTHERS"
  }, "OTHERS (OT)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "itemNumber"
  }, "Item Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    required: true,
    disabled: true,
    type: "number",
    id: "itemNumber",
    value: String(itemNumber).padStart(6, '0'),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, newCode, "-"),
    label: "Item Number"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "itemCostPrice"
  }, "Cost Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "itemCostPrice",
    name: "itemCostPrice",
    label: "Cost Unit Price",
    onChange: e => setItemCostPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "itemSellingPrice"
  }, "Selling Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "itemSellingPrice",
    name: "itemSellingPrice",
    label: "Selling Unit Price",
    onChange: e => setItemSellingPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "itemDescription",
    name: "itemDescription",
    multiline: true,
    rows: 4,
    value: itemDescription,
    label: "Item Description",
    onChange: e => setItemDescription(e.target.value),
    sx: {
      width: '50%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "number",
    id: "itemQuantity",
    name: "itemQuantity",
    label: "Quantity",
    disabled: true,
    onChange: e => setItemQuantity(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "stockOnHand",
    name: "stockOnHand",
    value: stockOnHand,
    label: "Stock Hand",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: loadingOpenModal,
    onClose: onClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_33__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    onClick: onClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_33__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: 'red'
    }
  }, "Saving Failed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: openAutocomplete2,
    onClose: handleCloseOpenAutocomplete2,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    onClick: handleCloseOpenAutocomplete2,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_36__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Create Expenses Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_33__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemFormView2);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfSXRlbVZpZXdfSXRlbUZvcm1WaWV3Ml9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBbUQ7QUFDYztBQUN6QztBQUNFO0FBQzBCO0FBQ3NCO0FBQ1I7QUFDK0w7QUFDak07QUFDdEM7QUFDd0I7QUFDSDtBQUNPO0FBQ0M7QUFDK0I7QUFDeEI7QUFDVjtBQUNMO0FBQ0M7QUFDdEI7QUFDQTtBQUNvQjtBQUc5QyxJQUFNK0MsWUFBWSxHQUFHOUIsMERBQU0sQ0FBQytCLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNoRHBELDBEQUFBLENBQUM2Qiw4REFBTyxFQUFBeUIsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPN0IsOERBQWMsQ0FBQzhCLE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLFNBQVM7TUFDMUJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzNCQyxRQUFRLEVBQUU7SUFDWjtFQUNGLENBQUM7QUFBQSxDQUFDLENBQUM7QUFDSCxJQUFNQyxLQUFLLEdBQUc7RUFDWkMsUUFBUSxFQUFFLFVBQVU7RUFDcEJDLEdBQUcsRUFBRSxLQUFLO0VBQ1ZDLElBQUksRUFBRSxLQUFLO0VBQ1hDLFNBQVMsRUFBRSx1QkFBdUI7RUFD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O0FBRUQsaUVBQWUyQixhQUFhLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvSXRlbVZpZXcvSXRlbUZvcm1WaWV3Mi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGVNYWludGVuYW5jZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZU1haW50ZW5hbmNlJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcyc7XHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudENpcmNsZSc7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSwgTWVudUl0ZW0sIEdyaWQsIEljb25CdXR0b24sIFBhcGVyLCBUZXh0RmllbGQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIFR5cG9ncmFwaHksIHN0eWxlZCwgRm9ybUxhYmVsLCBSYWRpb0dyb3VwLCBGb3JtQ29udHJvbExhYmVsLCBSYWRpbywgSW5wdXQsIE91dGxpbmVkSW5wdXQsIElucHV0QWRvcm5tZW50LCBNb2RhbCwgQmFja2Ryb3AsIEZhZGUsIEJveCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5cclxuXHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5cclxuY29uc3QgSXRlbUZvcm1WaWV3MiA9ICh7IG9uQ3JlYXRlT3B0aW9uLCBvbkNsb3NlIH0pID0+IHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuICBjb25zdCBbdW5pdEluZm8sIHNldFVuaXRJbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdHlwZUl0ZW0sIHNldFR5cGVJdGVtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtTmFtZSwgc2V0SXRlbU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2l0ZW1TdG9yZSwgc2V0SXRlbVN0b3JlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1bml0LCBzZXRVbml0XSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbaXRlbVVuaXQsIHNldEl0ZW1Vbml0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXRlbURpbWVuc2lvbiwgc2V0SXRlbURpbWVuc2lvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXRlbVdlaWdodCwgc2V0SXRlbVdlaWdodF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXRlbUNhdGVnb3J5LCBzZXRJdGVtQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2l0ZW1OdW1iZXIsIHNldEl0ZW1OdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2l0ZW1CcmFuZCwgc2V0SXRlbUJyYW5kXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtTWFudWZhY3R1cmVyLCBzZXRJdGVtTWFudWZhY3R1cmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtQ29zdFByaWNlLCBzZXRJdGVtQ29zdFByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpdGVtU2VsbGluZ1ByaWNlLCBzZXRJdGVtU2VsbGluZ1ByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpdGVtRGVzY3JpcHRpb24sIHNldEl0ZW1EZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXRlbVF1YW50aXR5LCBzZXRJdGVtUXVhbnRpdHldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgc3RvY2tPbkhhbmQgPSBpdGVtUXVhbnRpdHk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXRlbUNvZGUsIHNldEl0ZW1Db2RlXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlRmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzSXRlbVVuaXQgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtVW5pdGApXHJcbiAgICAgICAgc2V0VW5pdEluZm8ocmVzSXRlbVVuaXQuZGF0YS5kYXRhKTtcclxuICAgICAgICBjb25zdCByZXNDb2RlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbUNvZGVgKVxyXG4gICAgICAgIHNldEl0ZW1Db2RlKHJlc0NvZGUuZGF0YS5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlRmV0Y2goKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IFtuZXdDb2RlLCBzZXROZXdDb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpdGVtQ29kZS5maWx0ZXIoKHJvdykgPT4gcm93Lml0ZW1DYXRlZ29yeSA9PT0gaXRlbUNhdGVnb3J5KVxyXG4gICAgICAubWFwKChyb3cpID0+IHNldE5ld0NvZGUocm93Lml0ZW1Db2RlKSlcclxuICB9LCBbaXRlbUNhdGVnb3J5XSlcclxuICBjb25zdCBkYXRlQ29tbWVudCA9IGRheWpzKERhdGUubm93KCkpLmZvcm1hdCgnREQvTU0vWVlZWScpXHJcblxyXG4gIGNvbnN0IENyZWF0ZXMgPSB7XHJcbiAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgQ1JFQVRFRCAnLFxyXG4gICAgZGF0ZUNvbW1lbnRcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAobmV3Q29kZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbGFzdC1zYXZlZC1pdGVtLyR7bmV3Q29kZX1gKVxyXG4gICAgICAgICAgc2V0SXRlbU51bWJlcihyZXMuZGF0YS5pdGVtVXBjLml0ZW1OdW1iZXIgKyAxKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgIHNldEl0ZW1OdW1iZXIoMSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoTnVtYmVyKClcclxuICB9LCBbbmV3Q29kZV0pXHJcbiAgY29uc3QgW29wZW5BdXRvY29tcGxldGUyLCBzZXRPcGVuQXV0b2NvbXBsZXRlMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsT3BlbkxvYWRpbmcsIHNldE1vZGFsT3BlbkxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMihmYWxzZSk7XHJcbiAgICBzZXRNb2RhbE9wZW5Mb2FkaW5nKGZhbHNlKVxyXG4gIH07XHJcbiAgY29uc3QgW29wZW5CYWNrLCBzZXRPcGVuQmFja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbkJhY2sodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQmFjayhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxPcGVuTG9hZGluZyh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH07XHJcbiAgLy9vcGVuIGxvYWRpbmcgbW9kYWwgd2hlbiBzdWJtaXQgaXMgdHJ1ZVxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgLy9vcGVuIGxvYWRpbmcgbW9kYWwgd2hlbiBlcnJvclxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICAvL2Nsb3NlIGxvYWRpbmcgbW9kYWxcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgaWYgKG9uQ2xvc2UpIG9uQ2xvc2UoKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VBZGQgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgLy9EZWNpc2lvbiBXaGVuIGxvYWRpbmcgZmluaXNoXHJcbiAgY29uc3QgaGFuZGxlRGVjaXNpb24gPSAobmF2aWdhdGUpID0+IHtcclxuICAgIC8vTmF2aWdhdGUgQmFzZWQgb24gdGggRGVjaXNpb25cclxuICAgIGlmIChuYXZpZ2F0ZSA9PT0gJ3ByZXZpb3VzJykge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRlID09PSAnc3RheScpIHtcclxuICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0Q2F0ZWdvcnkgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaXRlbVVuaXRcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtaXRlbVVuaXRgLCBkYXRhKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZU9wZW5Nb2RhbCgpO1xyXG4gICAgICAgIHNldFVuaXRJbmZvKFsuLi51bml0SW5mbywgcmVzLmRhdGEuZGF0YV0pXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KCdBbiBlcnJvciBhcyBPY2N1cicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvQ29kZSwgUmVmZXJlbmNlSW5mb051bWJlcikgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBSZWZlcmVuY2VJbmZvLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgQ3JlYXRlZCAnLFxyXG4gICAgICByZWFzb246IFJlZmVyZW5jZUluZm9Db2RlICsgJy0nICsgUmVmZXJlbmNlSW5mb051bWJlciArICcgLyAnICsgaXRlbU5hbWUsXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgX2lkOiB2NCgpLFxyXG4gICAgICB0eXBlSXRlbSwgaXRlbU5hbWUsIGl0ZW1TdG9yZSwgdW5pdDogdW5pdC5pdGVtVW5pdFxyXG4gICAgICAsIGl0ZW1EaW1lbnNpb24sXHJcbiAgICAgIGl0ZW1XZWlnaHQsIGl0ZW1DYXRlZ29yeSwgaXRlbVVwYzoge1xyXG4gICAgICAgIGl0ZW1OdW1iZXIsXHJcbiAgICAgICAgbmV3Q29kZVxyXG4gICAgICB9LCBpdGVtTWFudWZhY3R1cmVyLFxyXG4gICAgICBpdGVtQnJhbmQsIGl0ZW1Db3N0UHJpY2UsXHJcbiAgICAgIGl0ZW1RdWFudGl0eSwgaXRlbVNlbGxpbmdQcmljZSwgaXRlbURlc2NyaXB0aW9uLFxyXG4gICAgICBzdG9ja09uSGFuZCwgc3luY2VkOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1pdGVtYCwge1xyXG4gICAgICAgIHR5cGVJdGVtLCBpdGVtTmFtZSwgaXRlbVN0b3JlLCB1bml0OiB1bml0Lml0ZW1Vbml0XHJcbiAgICAgICAgLCBpdGVtRGltZW5zaW9uLFxyXG4gICAgICAgIGl0ZW1XZWlnaHQsIGl0ZW1DYXRlZ29yeSwgaXRlbVVwYzoge1xyXG4gICAgICAgICAgaXRlbU51bWJlcixcclxuICAgICAgICAgIG5ld0NvZGVcclxuICAgICAgICB9LCBpdGVtTWFudWZhY3R1cmVyLFxyXG4gICAgICAgIGl0ZW1CcmFuZCwgaXRlbUNvc3RQcmljZSxcclxuICAgICAgICBpdGVtUXVhbnRpdHksIGl0ZW1TZWxsaW5nUHJpY2UsIGl0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgICBzdG9ja09uSGFuZCwgc3luY2VkOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm8gPSByZXMuZGF0YS5kYXRhLl9pZFxyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm9Db2RlID0gcmVzLmRhdGEuZGF0YS5pdGVtVXBjLm5ld0NvZGVcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvTnVtYmVyID0gcmVzLmRhdGEuZGF0YS5pdGVtVXBjLml0ZW1OdW1iZXJcclxuICAgICAgICBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oUmVmZXJlbmNlSW5mbywgUmVmZXJlbmNlSW5mb0NvZGUsIFJlZmVyZW5jZUluZm9OdW1iZXIpXHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICAgIG9uQ3JlYXRlT3B0aW9uKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ0ZhaWxlZCBUbyBTYXZlIEZvcm0gRGF0YScpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMjBweCcgfX0gc3BhY2luZz17Mn0gY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5UeXBlPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICByb3dcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlSXRlbVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dHlwZUl0ZW19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUeXBlSXRlbShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9J0dvb2RzJyBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiR29vZHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9J1NlcnZpY2VzJyBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiU2VydmljZXNcIiAvPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDI+e3R5cGVJdGVtfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGlkPSdpdGVtTmFtZSdcclxuICAgICAgICAgICAgICBuYW1lPSdpdGVtTmFtZSdcclxuICAgICAgICAgICAgICB2YWx1ZT17aXRlbU5hbWV9XHJcbiAgICAgICAgICAgICAgbGFiZWw9J0l0ZW0gTmFtZSdcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1OYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9J2l0ZW1CcmFuZCdcclxuICAgICAgICAgICAgICBuYW1lPSdpdGVtQnJhbmQnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1CcmFuZH1cclxuICAgICAgICAgICAgICBsYWJlbD0nQnJhbmQnXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtQnJhbmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICBpZD1cInVuaXRcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3VuaXRJbmZvfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsoT3B0aW9uKSA9PiBPcHRpb24uaXRlbVVuaXQudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBzZXRVbml0KG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHsgY2hpbGRyZW4sIC4uLm90aGVyIH0pID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICA8Qm94IHsuLi5vdGhlcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBsZWZ0OiAnMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyKGUpfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30gb25Nb3VzZURvd249eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI3JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgQUREIE5FVyBVbml0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIlVuaXRcIiByZXF1aXJlZCAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19ID5cclxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdpdGVtRGltZW5zaW9uJz5EaW1lbnNpb248L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPSdpdGVtRGltZW5zaW9uJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0naXRlbURpbWVuc2lvbidcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtRGltZW5zaW9ufVxyXG4gICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9J0RpbWVuc2lvbidcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbURpbWVuc2lvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPSdzdGFydCc+TTwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XHJcbiAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0naXRlbVdlaWdodCc+V2VpZ2h0PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICBpZD0naXRlbVdlaWdodCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1XZWlnaHQnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbVdlaWdodH1cclxuICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdXZWlnaHQnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1XZWlnaHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj0nc3RhcnQnPktnPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInVuaXRcIj5DYXRlZ29yeTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJpdGVtQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1DYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbUNhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJpdGVtQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiSEFcIj5IQSAoSEEpPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkVMRUNUUklDSVRZXCI+RUxFQ1RSSUNJVFkgKEVMKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJTT0xBUiBTWVNURU1cIj5TT0xBUiBTWVNURU0gKFNTKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJJVFwiPklUIChJVCk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUExVTUJJTkdcIj5QTFVNQklORyAoUEwpPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkVMRUNUUk9OSUNcIj5FTEVDVFJPTklDIChFTE4pPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkZFTkNFIEVMRUNUUklDXCI+RkVOQ0UgRUxFQ1RSSUMgKEZFKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJBQ0NFU1NPUllcIj5BQ0NFU1NPUlkgKEFDQyk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiV0VMRElOR1wiPldFTERJTkcgKFdMTik8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiR0VORVJBVE9SXCI+R0VORVJBVE9SIChHQSk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiVE9PTFNcIj5UT09MUyAoVEwpPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkNPTlNUUlVDVElPTlwiPkNPTlNUUlVDVElPTiAoQ1ROKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJPVEhFUlNcIj5PVEhFUlMgKE9UKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdpdGVtTnVtYmVyJz5JdGVtIE51bWJlcjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICBpZD0naXRlbU51bWJlcidcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtTdHJpbmcoaXRlbU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1cclxuICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPntuZXdDb2RlfS08L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSXRlbSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPSdpdGVtU3RvcmUnXHJcbiAgICAgICAgICAgICAgbmFtZT0naXRlbVN0b3JlJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPXtpdGVtU3RvcmV9XHJcbiAgICAgICAgICAgICAgbGFiZWw9J1N0b3JlIE5hbWUnXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtU3RvcmUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9J2l0ZW1NYW51ZmFjdHVyZXInXHJcbiAgICAgICAgICAgICAgbmFtZT0naXRlbU1hbnVmYWN0dXJlcidcclxuICAgICAgICAgICAgICB2YWx1ZT17aXRlbU1hbnVmYWN0dXJlcn1cclxuICAgICAgICAgICAgICBsYWJlbD0nTWFudWZhY3R1cmVyJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbU1hbnVmYWN0dXJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XHJcbiAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0naXRlbUNvc3RQcmljZSc+Q29zdCBVbml0IFByaWNlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICBpZD0naXRlbUNvc3RQcmljZSdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1Db3N0UHJpY2UnXHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nQ29zdCBVbml0IFByaWNlJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtQ29zdFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249J3N0YXJ0Jz4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19ID5cclxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdpdGVtU2VsbGluZ1ByaWNlJz5TZWxsaW5nIFVuaXQgUHJpY2U8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPSdpdGVtU2VsbGluZ1ByaWNlJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0naXRlbVNlbGxpbmdQcmljZSdcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdTZWxsaW5nIFVuaXQgUHJpY2UnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1TZWxsaW5nUHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj0nc3RhcnQnPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9J2l0ZW1EZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICBuYW1lPSdpdGVtRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICB2YWx1ZT17aXRlbURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIGxhYmVsPSdJdGVtIERlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbURlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzUwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgaWQ9J2l0ZW1RdWFudGl0eSdcclxuICAgICAgICAgICAgICBuYW1lPSdpdGVtUXVhbnRpdHknXHJcbiAgICAgICAgICAgICAgbGFiZWw9J1F1YW50aXR5J1xyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtUXVhbnRpdHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD0nc3RvY2tPbkhhbmQnXHJcbiAgICAgICAgICAgICAgbmFtZT0nc3RvY2tPbkhhbmQnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0b2NrT25IYW5kfVxyXG4gICAgICAgICAgICAgIGxhYmVsPSdTdG9jayBIYW5kJ1xyXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+U2F2aW5nIEZhaWxlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIENyZWF0ZSBFeHBlbnNlcyBDYXRlZ29yeVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdENhdGVnb3J5fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBpZD0naXRlbVVuaXQnXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1Vbml0J1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbVVuaXR9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdVbml0J1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1Vbml0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bW9kYWxPcGVuTG9hZGluZ31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGgyPiBEYXRhIHN1Y2Nlc3NmdWxseSBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUZvcm1WaWV3MlxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNpZGVNYWludGVuYW5jZSIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJBY2NvdW50Q2lyY2xlSWNvbiIsIkF1dG9jb21wbGV0ZSIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJQYXBlciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJzdHlsZWQiLCJGb3JtTGFiZWwiLCJSYWRpb0dyb3VwIiwiRm9ybUNvbnRyb2xMYWJlbCIsIlJhZGlvIiwiSW5wdXQiLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJNb2RhbCIsIkJhY2tkcm9wIiwiRmFkZSIsIkJveCIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwidXNlTmF2aWdhdGUiLCJBcnJvd0JhY2siLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkxvYWRlciIsIkxvZ291dCIsInY0IiwiZGF5anMiLCJDbG9zZSIsIkJsYWNrVG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJJdGVtRm9ybVZpZXcyIiwiX3JlZjMiLCJvbkNyZWF0ZU9wdGlvbiIsIm9uQ2xvc2UiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmNCIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1bml0SW5mbyIsInNldFVuaXRJbmZvIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJ0eXBlSXRlbSIsInNldFR5cGVJdGVtIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJpdGVtTmFtZSIsInNldEl0ZW1OYW1lIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJpdGVtU3RvcmUiLCJzZXRJdGVtU3RvcmUiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsInVuaXQiLCJzZXRVbml0IiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwiaXRlbVVuaXQiLCJzZXRJdGVtVW5pdCIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJpdGVtRGltZW5zaW9uIiwic2V0SXRlbURpbWVuc2lvbiIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJpdGVtV2VpZ2h0Iiwic2V0SXRlbVdlaWdodCIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJpdGVtQ2F0ZWdvcnkiLCJzZXRJdGVtQ2F0ZWdvcnkiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwiaXRlbU51bWJlciIsInNldEl0ZW1OdW1iZXIiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiaXRlbUJyYW5kIiwic2V0SXRlbUJyYW5kIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsIml0ZW1NYW51ZmFjdHVyZXIiLCJzZXRJdGVtTWFudWZhY3R1cmVyIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsIml0ZW1Db3N0UHJpY2UiLCJzZXRJdGVtQ29zdFByaWNlIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsIml0ZW1TZWxsaW5nUHJpY2UiLCJzZXRJdGVtU2VsbGluZ1ByaWNlIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsIml0ZW1EZXNjcmlwdGlvbiIsInNldEl0ZW1EZXNjcmlwdGlvbiIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJpdGVtUXVhbnRpdHkiLCJzZXRJdGVtUXVhbnRpdHkiLCJzdG9ja09uSGFuZCIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsIml0ZW1Db2RlIiwic2V0SXRlbUNvZGUiLCJoYW5kbGVGZXRjaCIsIl9yZWY1IiwicmVzSXRlbVVuaXQiLCJyZXNDb2RlIiwiX3VzZVN0YXRlMzkiLCJfdXNlU3RhdGU0MCIsIm5ld0NvZGUiLCJzZXROZXdDb2RlIiwiZmlsdGVyIiwicm93IiwibWFwIiwiZGF0ZUNvbW1lbnQiLCJEYXRlIiwibm93IiwiZm9ybWF0IiwiQ3JlYXRlcyIsInBlcnNvbiIsImZldGNoTnVtYmVyIiwiX3JlZjYiLCJpdGVtVXBjIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsIm9wZW5BdXRvY29tcGxldGUyIiwic2V0T3BlbkF1dG9jb21wbGV0ZTIiLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0IiwibW9kYWxPcGVuTG9hZGluZyIsInNldE1vZGFsT3BlbkxvYWRpbmciLCJoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMiIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJvcGVuQmFjayIsInNldE9wZW5CYWNrIiwiaGFuZGxlT3BlbkJhY2siLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlQmFjayIsImhhbmRsZU9wZW5Nb2RhbCIsInNldFRpbWVvdXQiLCJoYW5kbGVPcGVuIiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlQ2xvc2VBZGQiLCJoYW5kbGVDbG9zZUVycm9yIiwiaGFuZGxlRGVjaXNpb24iLCJoaXN0b3J5IiwiYmFjayIsImhhbmRsZVN1Ym1pdENhdGVnb3J5IiwiX3JlZjciLCJwb3N0IiwiYWxlcnQiLCJfeCIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWY4IiwiUmVmZXJlbmNlSW5mbyIsIlJlZmVyZW5jZUluZm9Db2RlIiwiUmVmZXJlbmNlSW5mb051bWJlciIsImlkSW5mbyIsInJlYXNvbiIsImRhdGVOb3RpZmljYXRpb24iLCJsb2ciLCJfeDIiLCJfeDMiLCJfeDQiLCJoYW5kbGVTdWJtaXQiLCJfcmVmOSIsIl9pZCIsInN5bmNlZCIsIl94NSIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJzcGFjaW5nIiwiY29tcG9uZW50IiwiaXRlbSIsInhzIiwiZGlzcGxheSIsInJlcXVpcmVkIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJjb250cm9sIiwibGFiZWwiLCJpZCIsInN4Iiwib3B0aW9ucyIsImdldE9wdGlvbkxhYmVsIiwiT3B0aW9uIiwidG9VcHBlckNhc2UiLCJuZXdWYWx1ZSIsIlBhcGVyQ29tcG9uZW50IiwiX3JlZjAiLCJjaGlsZHJlbiIsIm90aGVyIiwiX2V4Y2x1ZGVkMiIsIm1hcmdpblRvcCIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIm9uTW91c2VEb3duIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJodG1sRm9yIiwidHlwZSIsInN0YXJ0QWRvcm5tZW50IiwiU3RyaW5nIiwicGFkU3RhcnQiLCJtdWx0aWxpbmUiLCJyb3dzIiwib3BlbiIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsIl9vYmplY3RTcHJlYWQiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImhlaWdodCIsImdhcCIsInRpdGxlIiwicGxhY2VtZW50IiwiZmxvYXQiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==