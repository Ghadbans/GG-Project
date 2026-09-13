"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[7997],{

/***/ 50790
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"
}), 'AccountCircle');

/***/ },

/***/ 84767
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
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"
}), 'NotificationsNone');

/***/ },

/***/ 64745
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
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), 'Search');

/***/ },

/***/ 46831
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34164);
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75659);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14073);
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11848);
/* harmony import */ var _DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15607);
/* harmony import */ var _dialogTitleClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61435);
/* harmony import */ var _Dialog_DialogContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28102);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74848);
'use client';



const _excluded = ["className", "id"];










const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(slots, _dialogTitleClasses__WEBPACK_IMPORTED_MODULE_8__/* .getDialogTitleUtilityClass */ .t, classes);
};
const DialogTitleRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay)(_Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
  name: 'MuiDialogTitle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  padding: '16px 24px',
  flex: '0 0 auto'
});
const DialogTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogTitle(inProps, ref) {
  const props = (0,_DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_7__/* .useDefaultProps */ .b)({
    props: inProps,
    name: 'MuiDialogTitle'
  });
  const {
      className,
      id: idProp
    } = props,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const {
    titleId = idProp
  } = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_Dialog_DialogContext__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DialogTitleRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    component: "h2",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    variant: "h6",
    id: idProp != null ? idProp : titleId
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogTitle);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 17997
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55746);
/* harmony import */ var _component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34687);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64745);
/* harmony import */ var _mui_icons_material_NotificationsNone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84767);
/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50790);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88248);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33198);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(64137);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(96627);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(86798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(70691);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(43884);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(77037);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(46831);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(22477);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(58763);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(73896);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(67034);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(28597);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(71510);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(99571);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;











function BranchManagement() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      branchId: 'HQ',
      branchName: 'HeadQuarters'
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    branches = _useState2[0],
    setBranches = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    profileId = _useState4[0],
    setProfileId = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    fullProfile = _useState6[0],
    setFullProfile = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    newBranchName = _useState8[0],
    setNewBranchName = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    newBranchId = _useState0[0],
    setNewBranchId = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    newCompanyName = _useState10[0],
    setNewCompanyName = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    newLogo = _useState12[0],
    setNewLogo = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    newAddress = _useState14[0],
    setNewAddress = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    newProvince = _useState16[0],
    setNewProvince = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    newCountry = _useState18[0],
    setNewCountry = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    newPhone = _useState20[0],
    setNewPhone = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    newEmail = _useState22[0],
    setNewEmail = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState24 = _slicedToArray(_useState23, 2),
    newWebsite = _useState24[0],
    setNewWebsite = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState26 = _slicedToArray(_useState25, 2),
    newRccm = _useState26[0],
    setNewRccm = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState28 = _slicedToArray(_useState27, 2),
    newNatId = _useState28[0],
    setNewNatId = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    editDialogOpen = _useState30[0],
    setEditDialogOpen = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState32 = _slicedToArray(_useState31, 2),
    editingBranch = _useState32[0],
    setEditingBranch = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState34 = _slicedToArray(_useState33, 2),
    editBranchName = _useState34[0],
    setEditBranchName = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState36 = _slicedToArray(_useState35, 2),
    editBranchId = _useState36[0],
    setEditBranchId = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState38 = _slicedToArray(_useState37, 2),
    editCompanyName = _useState38[0],
    setEditCompanyName = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState40 = _slicedToArray(_useState39, 2),
    editLogo = _useState40[0],
    setEditLogo = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState42 = _slicedToArray(_useState41, 2),
    editAddress = _useState42[0],
    setEditAddress = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState44 = _slicedToArray(_useState43, 2),
    editProvince = _useState44[0],
    setEditProvince = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState46 = _slicedToArray(_useState45, 2),
    editCountry = _useState46[0],
    setEditCountry = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState48 = _slicedToArray(_useState47, 2),
    editPhone = _useState48[0],
    setEditPhone = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState50 = _slicedToArray(_useState49, 2),
    editEmail = _useState50[0],
    setEditEmail = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState52 = _slicedToArray(_useState51, 2),
    editWebsite = _useState52[0],
    setEditWebsite = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState54 = _slicedToArray(_useState53, 2),
    editRccm = _useState54[0],
    setEditRccm = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState56 = _slicedToArray(_useState55, 2),
    editNatId = _useState56[0],
    setEditNatId = _useState56[1];
  var handleLogoUpload = (e, isEdit) => {
    var file = e.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onloadend = () => {
        if (isEdit) setEditLogo(reader.result);else setNewLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    deleteDialogOpen = _useState58[0],
    setDeleteDialogOpen = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState60 = _slicedToArray(_useState59, 2),
    branchToDelete = _useState60[0],
    setBranchToDelete = _useState60[1];
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState62 = _slicedToArray(_useState61, 2),
    transferBranchId = _useState62[0],
    setTransferBranchId = _useState62[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchBranches();
  }, []);
  var fetchBranches = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__/* .ENDPOINT_URL */ .m, "/companyProfile"));
        if (res.data && res.data.data && res.data.data.length > 0) {
          var _res$data;
          var profile = (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data[0];
          setProfileId(profile._id);
          setFullProfile(profile);
          if (profile.branches && profile.branches.length > 0) {
            setBranches(profile.branches);
          }
        }
      } catch (error) {
        console.error('Error fetching branches:', error);
      }
    });
    return function fetchBranches() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleAddBranch = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* () {
      if (!newBranchName || !newBranchId) {
        react_toastify__WEBPACK_IMPORTED_MODULE_32__/* .toast */ .oR.error("Please provide both Branch Name and ID.");
        return;
      }
      var cleanId = newBranchId.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
      var newBranch = {
        branchId: cleanId,
        branchName: newBranchName,
        companyName: newCompanyName,
        logo: newLogo,
        address: newAddress,
        province: newProvince,
        country: newCountry,
        phone: newPhone,
        email: newEmail,
        website: newWebsite,
        rccm: newRccm,
        natId: newNatId
      };
      var updatedBranches = [...branches, newBranch];
      setBranches(updatedBranches);
      setNewBranchName('');
      setNewBranchId('');
      setNewCompanyName('');
      setNewLogo('');
      setNewAddress('');
      setNewProvince('');
      setNewCountry('');
      setNewPhone('');
      setNewEmail('');
      setNewWebsite('');
      setNewRccm('');
      setNewNatId('');
      yield saveBranchesToProfile(updatedBranches);
    });
    return function handleAddBranch() {
      return _ref2.apply(this, arguments);
    };
  }();
  var saveBranchesToProfile = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* (updatedBranches) {
      if (fullProfile) {
        var updatedProfile = _objectSpread(_objectSpread({}, fullProfile), {}, {
          branches: updatedBranches
        });
        try {
          yield axios__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__/* .ENDPOINT_URL */ .m, "/update-companyProfile/").concat(fullProfile._id), _objectSpread(_objectSpread({}, updatedProfile), {}, {
            branchId: localStorage.getItem("selectedBranch") || "HQ"
          }));
          react_toastify__WEBPACK_IMPORTED_MODULE_32__/* .toast */ .oR.success("Branches updated successfully!");
        } catch (error) {
          console.error('Error updating branches:', error);
          react_toastify__WEBPACK_IMPORTED_MODULE_32__/* .toast */ .oR.error("Failed to update branches. Backend route missing.");
        }
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_32__/* .toast */ .oR.error("No company profile found to attach branches to. Please create a Company Profile first.");
      }
    });
    return function saveBranchesToProfile(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleEditClick = branch => {
    setEditingBranch(branch);
    setEditBranchName(branch.branchName || '');
    setEditBranchId(branch.branchId || '');
    setEditCompanyName(branch.companyName || '');
    setEditLogo(branch.logo || '');
    setEditAddress(branch.address || '');
    setEditProvince(branch.province || '');
    setEditCountry(branch.country || '');
    setEditPhone(branch.phone || '');
    setEditEmail(branch.email || '');
    setEditWebsite(branch.website || '');
    setEditRccm(branch.rccm || '');
    setEditNatId(branch.natId || '');
    setEditDialogOpen(true);
  };
  var handleSaveEdit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* () {
      var cleanId = editBranchId.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
      var updatedBranches = branches.map(b => b.branchId === editingBranch.branchId ? {
        branchId: cleanId,
        branchName: editBranchName,
        companyName: editCompanyName,
        logo: editLogo,
        address: editAddress,
        province: editProvince,
        country: editCountry,
        phone: editPhone,
        email: editEmail,
        website: editWebsite,
        rccm: editRccm,
        natId: editNatId
      } : b);
      if (editingBranch.branchId !== cleanId) {
        // Call backend to update all documents if ID changed
        try {
          yield axios__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__/* .ENDPOINT_URL */ .m, "/rename-branch"), {
            oldBranchId: editingBranch.branchId,
            newBranchId: cleanId
          });
          react_toastify__WEBPACK_IMPORTED_MODULE_32__/* .toast */ .oR.info("Branch ID updated across all documents.");
        } catch (err) {
          console.warn("Rename endpoint not yet implemented by backend AI.");
        }
      }
      setBranches(updatedBranches);
      yield saveBranchesToProfile(updatedBranches);
      setEditDialogOpen(false);
    });
    return function handleSaveEdit() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleDeleteClick = branchId => {
    setBranchToDelete(branchId);
    setTransferBranchId('');
    setDeleteDialogOpen(true);
  };
  var confirmDelete = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(function* () {
      try {
        // Call delete-branch endpoint to check for data and transfer
        var payload = {
          branchIdToDelete: branchToDelete
        };
        if (transferBranchId) {
          payload.transferToBranchId = transferBranchId;
        }
        yield axios__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__/* .ENDPOINT_URL */ .m, "/delete-branch"), payload);
        var updatedBranches = branches.filter(b => b.branchId !== branchToDelete);
        setBranches(updatedBranches);
        yield saveBranchesToProfile(updatedBranches);
        setDeleteDialogOpen(false);
      } catch (err) {
        if (err.response && err.response.data && err.response.data.error === 'Data exists') {
          react_toastify__WEBPACK_IMPORTED_MODULE_32__/* .toast */ .oR.error(err.response.data.message);
        } else {
          react_toastify__WEBPACK_IMPORTED_MODULE_32__/* .toast */ .oR.error("Error communicating with delete endpoint.");
        }
      }
    });
    return function confirmDelete() {
      return _ref5.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_32__/* .ToastContainer */ .N9, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      flexShrink: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    variant: "permanent",
    sx: {
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        position: 'relative',
        height: '100vh',
        backgroundColor: '#202a5a',
        overflowY: 'auto'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    className: "header",
    sx: {
      margin: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#202a5a',
      color: 'white',
      px: 2,
      py: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    variant: "h5"
  }, "Branch Management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 1,
      px: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    placeholder: "Type here...",
    style: {
      border: 'none',
      outline: 'none',
      padding: '4px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_NotificationsNone__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null, "User Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "invoice",
    style: {
      marginLeft: '20px',
      marginRight: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      p: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      p: 3,
      mb: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    variant: "h6",
    gutterBottom: true
  }, "Add New Branch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2,
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Branch Name (e.g. Downtown Store)",
    value: newBranchName,
    onChange: e => setNewBranchName(e.target.value),
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Branch Short ID (e.g. BR01)",
    value: newBranchId,
    onChange: e => setNewBranchId(e.target.value),
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Company Name (For print headers)",
    value: newCompanyName,
    onChange: e => setNewCompanyName(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    shrink: true
  }, "Branch Logo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: e => handleLogoUpload(e, false)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Phone Number",
    value: newPhone,
    onChange: e => setNewPhone(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Email",
    value: newEmail,
    onChange: e => setNewEmail(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Website",
    value: newWebsite,
    onChange: e => setNewWebsite(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Address (Street, PO Box)",
    value: newAddress,
    onChange: e => setNewAddress(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Province/State",
    value: newProvince,
    onChange: e => setNewProvince(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Country",
    value: newCountry,
    onChange: e => setNewCountry(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "RCCM",
    value: newRccm,
    onChange: e => setNewRccm(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "ID NAT",
    value: newNatId,
    onChange: e => setNewNatId(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    variant: "contained",
    color: "primary",
    onClick: handleAddBranch,
    fullWidth: true,
    sx: {
      height: '56px',
      backgroundColor: '#30368a'
    }
  }, "Add Branch")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    sx: {
      backgroundColor: '#f5f5f5'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Branch ID")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Branch Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    align: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Actions")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, null, branches.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    key: row.branchId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, null, row.branchId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, null, row.branchName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    align: "right"
  }, row.branchId !== 'HQ' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    color: "primary",
    onClick: () => handleEditClick(row)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    color: "error",
    onClick: () => handleDeleteClick(row.branchId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, null))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    open: editDialogOpen,
    onClose: () => setEditDialogOpen(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, null, "Edit Branch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
    sx: {
      minWidth: 600,
      pt: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2,
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Branch Name",
    value: editBranchName,
    onChange: e => setEditBranchName(e.target.value),
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Branch Short ID",
    value: editBranchId,
    onChange: e => setEditBranchId(e.target.value),
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Company Name",
    value: editCompanyName,
    onChange: e => setEditCompanyName(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    shrink: true
  }, "Branch Logo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: e => handleLogoUpload(e, true)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Phone",
    value: editPhone,
    onChange: e => setEditPhone(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Email",
    value: editEmail,
    onChange: e => setEditEmail(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Website",
    value: editWebsite,
    onChange: e => setEditWebsite(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Address",
    value: editAddress,
    onChange: e => setEditAddress(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Province",
    value: editProvince,
    onChange: e => setEditProvince(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Country",
    value: editCountry,
    onChange: e => setEditCountry(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "RCCM",
    value: editRccm,
    onChange: e => setEditRccm(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    fullWidth: true,
    label: "ID NAT",
    value: editNatId,
    onChange: e => setEditNatId(e.target.value)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    onClick: () => setEditDialogOpen(false)
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    variant: "contained",
    onClick: handleSaveEdit
  }, "Save"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    open: deleteDialogOpen,
    onClose: () => setDeleteDialogOpen(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, null, "Delete Branch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
    sx: {
      minWidth: 400
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    gutterBottom: true
  }, "Are you sure you want to delete this branch? If this branch contains data, you must select another branch to transfer the data to."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    fullWidth: true,
    sx: {
      mt: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, "Transfer Data To (Optional)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
    value: transferBranchId,
    label: "Transfer Data To (Optional)",
    onChange: e => setTransferBranchId(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    value: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", null, "None (Delete only if empty)")), branches.filter(b => b.branchId !== branchToDelete).map(b => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    key: b.branchId,
    value: b.branchId
  }, b.branchName, " (", b.branchId, ")"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    onClick: () => setDeleteDialogOpen(false)
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    variant: "contained",
    color: "error",
    onClick: confirmDelete
  }, "Delete & Transfer")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BranchManagement);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);