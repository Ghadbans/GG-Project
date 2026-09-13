(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[7120],{

/***/ 18470
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: () => (/* binding */ DateTimeField)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField_TextField = __webpack_require__(844);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(3541);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
var useSlotProps = __webpack_require__(79329);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/internals/utils/valueManagers.js
var valueManagers = __webpack_require__(16566);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/internals/hooks/useField/useField.js + 2 modules
var useField = __webpack_require__(61890);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/internals/utils/validation/validateDate.js
var validateDate = __webpack_require__(64741);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/internals/utils/time-utils.js
var time_utils = __webpack_require__(95878);
;// ./node_modules/@mui/x-date-pickers/internals/utils/validation/validateTime.js

const validateTime = ({
  adapter,
  value,
  props
}) => {
  if (value === null) {
    return null;
  }
  const {
    minTime,
    maxTime,
    minutesStep,
    shouldDisableClock,
    shouldDisableTime,
    disableIgnoringDatePartForTimeValidation = false,
    disablePast,
    disableFuture,
    timezone
  } = props;
  const now = adapter.utils.dateWithTimezone(undefined, timezone);
  const isAfter = (0,time_utils/* createIsAfterIgnoreDatePart */.iF)(disableIgnoringDatePartForTimeValidation, adapter.utils);
  switch (true) {
    case !adapter.utils.isValid(value):
      return 'invalidDate';
    case Boolean(minTime && isAfter(minTime, value)):
      return 'minTime';
    case Boolean(maxTime && isAfter(value, maxTime)):
      return 'maxTime';
    case Boolean(disableFuture && adapter.utils.isAfter(value, now)):
      return 'disableFuture';
    case Boolean(disablePast && adapter.utils.isBefore(value, now)):
      return 'disablePast';
    case Boolean(shouldDisableTime && shouldDisableTime(value, 'hours')):
      return 'shouldDisableTime-hours';
    case Boolean(shouldDisableTime && shouldDisableTime(value, 'minutes')):
      return 'shouldDisableTime-minutes';
    case Boolean(shouldDisableTime && shouldDisableTime(value, 'seconds')):
      return 'shouldDisableTime-seconds';
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getHours(value), 'hours')):
      return 'shouldDisableClock-hours';
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getMinutes(value), 'minutes')):
      return 'shouldDisableClock-minutes';
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getSeconds(value), 'seconds')):
      return 'shouldDisableClock-seconds';
    case Boolean(minutesStep && adapter.utils.getMinutes(value) % minutesStep !== 0):
      return 'minutesStep';
    default:
      return null;
  }
};
;// ./node_modules/@mui/x-date-pickers/internals/utils/validation/validateDateTime.js


const validateDateTime = ({
  props,
  value,
  adapter
}) => {
  const dateValidationResult = (0,validateDate/* validateDate */.Z)({
    adapter,
    value,
    props
  });
  if (dateValidationResult !== null) {
    return dateValidationResult;
  }
  return validateTime({
    adapter,
    value,
    props
  });
};
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/internals/utils/date-utils.js
var date_utils = __webpack_require__(23887);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/internals/hooks/useUtils.js + 2 modules
var useUtils = __webpack_require__(69490);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/internals/utils/fields.js
var fields = __webpack_require__(54274);
;// ./node_modules/@mui/x-date-pickers/DateTimeField/useDateTimeField.js







const useDefaultizedDateTimeField = props => {
  var _props$ampm, _props$disablePast, _props$disableFuture, _props$format, _props$minDateTime, _props$maxDateTime, _props$minDateTime2, _props$maxDateTime2;
  const utils = (0,useUtils/* useUtils */.hc)();
  const defaultDates = (0,useUtils/* useDefaultDates */.Yg)();
  const ampm = (_props$ampm = props.ampm) != null ? _props$ampm : utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.keyboardDateTime12h : utils.formats.keyboardDateTime24h;
  return (0,esm_extends/* default */.A)({}, props, {
    disablePast: (_props$disablePast = props.disablePast) != null ? _props$disablePast : false,
    disableFuture: (_props$disableFuture = props.disableFuture) != null ? _props$disableFuture : false,
    format: (_props$format = props.format) != null ? _props$format : defaultFormat,
    disableIgnoringDatePartForTimeValidation: Boolean(props.minDateTime || props.maxDateTime),
    minDate: (0,date_utils/* applyDefaultDate */.IP)(utils, (_props$minDateTime = props.minDateTime) != null ? _props$minDateTime : props.minDate, defaultDates.minDate),
    maxDate: (0,date_utils/* applyDefaultDate */.IP)(utils, (_props$maxDateTime = props.maxDateTime) != null ? _props$maxDateTime : props.maxDate, defaultDates.maxDate),
    minTime: (_props$minDateTime2 = props.minDateTime) != null ? _props$minDateTime2 : props.minTime,
    maxTime: (_props$maxDateTime2 = props.maxDateTime) != null ? _props$maxDateTime2 : props.maxTime
  });
};
const useDateTimeField = ({
  props: inProps,
  inputRef
}) => {
  const props = useDefaultizedDateTimeField(inProps);
  const {
    forwardedProps,
    internalProps
  } = (0,fields/* splitFieldInternalAndForwardedProps */.D)(props, 'date-time');
  return (0,useField/* useField */.M)({
    inputRef,
    forwardedProps,
    internalProps,
    valueManager: valueManagers/* singleItemValueManager */.W,
    fieldValueManager: valueManagers/* singleItemFieldValueManager */.o,
    validator: validateDateTime,
    valueType: 'date-time'
  });
};
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/hooks/useClearableField.js
var useClearableField = __webpack_require__(57655);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/x-date-pickers/DateTimeField/DateTimeField.js


const _excluded = ["components", "componentsProps", "slots", "slotProps", "InputProps", "inputProps"],
  _excluded2 = ["inputRef"],
  _excluded3 = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly", "clearable", "onClear"];









/**
 * Demos:
 *
 * - [DateTimeField](http://mui.com/x/react-date-pickers/date-time-field/)
 * - [Fields](https://mui.com/x/react-date-pickers/fields/)
 *
 * API:
 *
 * - [DateTimeField API](https://mui.com/x/api/date-pickers/date-time-field/)
 */
const DateTimeField = /*#__PURE__*/react.forwardRef(function DateTimeField(inProps, ref) {
  var _ref, _slots$textField, _slotProps$textField;
  const themeProps = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiDateTimeField'
  });
  const {
      components,
      componentsProps,
      slots,
      slotProps,
      InputProps,
      inputProps
    } = themeProps,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(themeProps, _excluded);
  const ownerState = themeProps;
  const TextField = (_ref = (_slots$textField = slots == null ? void 0 : slots.textField) != null ? _slots$textField : components == null ? void 0 : components.TextField) != null ? _ref : TextField_TextField/* default */.A;
  const _useSlotProps = (0,useSlotProps/* default */.A)({
      elementType: TextField,
      externalSlotProps: (_slotProps$textField = slotProps == null ? void 0 : slotProps.textField) != null ? _slotProps$textField : componentsProps == null ? void 0 : componentsProps.textField,
      externalForwardedProps: other,
      ownerState
    }),
    {
      inputRef: externalInputRef
    } = _useSlotProps,
    textFieldProps = (0,objectWithoutPropertiesLoose/* default */.A)(_useSlotProps, _excluded2);

  // TODO: Remove when mui/material-ui#35088 will be merged
  textFieldProps.inputProps = (0,esm_extends/* default */.A)({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = (0,esm_extends/* default */.A)({}, InputProps, textFieldProps.InputProps);
  const _useDateTimeField = useDateTimeField({
      props: textFieldProps,
      inputRef: externalInputRef
    }),
    {
      ref: inputRef,
      onPaste,
      onKeyDown,
      inputMode,
      readOnly,
      clearable,
      onClear
    } = _useDateTimeField,
    fieldProps = (0,objectWithoutPropertiesLoose/* default */.A)(_useDateTimeField, _excluded3);
  const {
    InputProps: ProcessedInputProps,
    fieldProps: processedFieldProps
  } = (0,useClearableField/* useClearableField */.Z)({
    onClear,
    clearable,
    fieldProps,
    InputProps: fieldProps.InputProps,
    slots,
    slotProps,
    components,
    componentsProps
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TextField, (0,esm_extends/* default */.A)({
    ref: ref
  }, processedFieldProps, {
    InputProps: (0,esm_extends/* default */.A)({}, ProcessedInputProps, {
      readOnly
    }),
    inputProps: (0,esm_extends/* default */.A)({}, fieldProps.inputProps, {
      inputMode,
      onPaste,
      onKeyDown,
      ref: inputRef
    })
  }));
});
 false ? 0 : void 0;


/***/ },

/***/ 37120
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42600);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68525);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55746);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67034);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71543);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33198);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64137);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96627);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(70691);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(43884);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(58331);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(14519);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(97834);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(8451);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(71510);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(47767);
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(61087);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(75737);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(601);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(92659);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(82299);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(65821);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(40301);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(39781);
/* harmony import */ var style__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(4267);
/* harmony import */ var style__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(style__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(3100);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(95236);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(18470);
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









































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A.tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Ay, {
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
function EmployeeAttendanceForm() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_46__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_46__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__/* .setUser */ .gV)({
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
        return _ref7.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__/* .logOut */ .je)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openBack = _useState2[0],
    setOpenBack = _useState2[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var dateAttendance = new Date();
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    employee = _useState4[0],
    setEmployee = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchEmployee = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/employee"));
          setEmployee((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.filter(row => {
            var _row$department;
            return row.status !== 'Fired' && row.status !== 'Resign' && ((_row$department = row.department) === null || _row$department === void 0 ? void 0 : _row$department.toUpperCase()) !== 'FACTORY';
          }).map(row2 => ({
            id: row2._id,
            name: row2.employeeName,
            timeIn: new Date(),
            timeOut: new Date(),
            observation: '',
            note: '',
            daysWN: 0
          })));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchEmployee() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchEmployee();
  }, []);
  var handleChange = (idRow, key, value) => {
    var list = [...employee];
    var i = employee.findIndex(Item => Item.id === idRow);
    list[i][key] = value;
    if (list[i]['observation'] === 'P') {
      list[i]['daysWN'] = 1;
    } else if (list[i]['observation'] === 'H') {
      list[i]['daysWN'] = 0.5;
    }
    setEmployee(list);
  };
  var deleteItem = idRow => {
    setEmployee(employee => employee.filter(Item => Item.id !== idRow));
  };
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    search2 = _useState6[0],
    setSearch2 = _useState6[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray2 = search2 !== '' ? employee.filter(Item => Item.name && Item.name.toLowerCase().includes(search2.toLowerCase())) : employee;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    loadingOpenModal = _useState0[0],
    setLoadingOpenModal = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    ErrorOpenModal = _useState10[0],
    setErrorOpenModal = _useState10[1];
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
    window.location.reload();
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  var handleDecision = decision => {
    //Navigate Based on th Decision
    if (decision === 'previous') {
      window.history.back();
    } else if (decision === 'stay') {
      handleClose();
    }
  };
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(function* (ReferenceInfo) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created Attendance',
        reason: 'For ' + dayjs__WEBPACK_IMPORTED_MODULE_41___default()(dateAttendance).format('DD/MM/YYYY'),
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x) {
      return _ref9.apply(this, arguments);
    };
  }();
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    saving = _useState12[0],
    setSaving = _useState12[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var saveAttendance = employee.map(row => {
        return axios__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/create-employeeattendance"), row);
      });
      try {
        var res = yield Promise.all(saveAttendance);
        if (res) {
          // await Promise.all(employee.map(async (item) => {
          //   await db.employeeAttendanceSchema.add({ ...item, synced: true })
          // }))
          handleOpen();
          handleCreateNotification();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x2) {
      return _ref0.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Employee Attendance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    label: "Search",
    id: "search2",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, "Employee Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, "Time IN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, "Time Out"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, "Observation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, "Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, null, newArray2 === null || newArray2 === void 0 ? void 0 : newArray2.map((row, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    key: row.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__/* .DemoContainer */ .j, {
    components: ['DateTimeField']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_53__/* .DateTimeField */ .I, {
    name: "timeIn",
    id: "timeIn",
    format: "DD/MM/YYYY-HH:mm",
    value: dayjs__WEBPACK_IMPORTED_MODULE_41___default()(row.timeIn),
    onChange: time => handleChange(row.id, 'timeIn', time)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__/* .DemoContainer */ .j, {
    components: ['DateTimeField']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_53__/* .DateTimeField */ .I, {
    name: "timeOut",
    id: "timeOut",
    value: dayjs__WEBPACK_IMPORTED_MODULE_41___default()(row.timeOut),
    format: "DD/MM/YYYY-HH:mm",
    onChange: time => handleChange(row.id, 'timeOut', time)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    sx: {
      width: '180px',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    htmlFor: "observation"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    required: true,
    name: "observation",
    id: "observation",
    value: row.observation,
    onChange: e => handleChange(row.id, 'observation', e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    value: "P"
  }, "Present(P)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    value: "A"
  }, "Absent(A)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    value: "S"
  }, "Suspended(S)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    value: "H"
  }, "Half Day(H)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    value: "PH"
  }, "Public-Holiday(PH)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    value: "Stopped"
  }, "Stopped"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    value: "#"
  }, "#")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    name: "note",
    id: "note",
    value: row.note,
    onChange: e => handleChange(row.id, 'note', e.target.value),
    sx: {
      width: '280px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightTooltip, {
    title: "Delete",
    sx: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: () => deleteItem(row.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  })))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, saving !== 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "btnCustomer6",
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "Saving..."))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
    open: openBack,
    onClose: handleCloseBack,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, "Do you want to stop creating Attendance ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    onClick: () => navigate('/TewmViewAdmin'),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    onClick: handleCloseBack,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, {
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
    onClick: () => handleDecision('stay'),
    className: "btnCustomer"
  }, "Add New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: () => handleDecision('previous'),
    className: "btnCustomer"
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .A, {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeAttendanceForm);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 42600
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _css_SidebarNew_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15419);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79725);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78527);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56707);
/* harmony import */ var _mui_icons_material_Groups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77649);
/* harmony import */ var _mui_icons_material_Payment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2291);
/* harmony import */ var _mui_icons_material_Contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97484);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37211);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57873);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82241);










function SidebarDashE3() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    primary: "Rate"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Groups__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    primary: "Employee"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Payment__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    primary: "PayRoll"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    primary: "User Account"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    primary: "Grant Access"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Contacts__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    primary: "Profile"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarDashE3);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 90856
(__unused_webpack_module, exports, __webpack_require__) {

var style = __webpack_require__(4267);

exports.printError = printError
function printError(error){
  colourError(error,false)
}

exports.parseStackLine = parseStackLine
function parseStackLine (row){
  var regex = /^\s*?at\s+([\w\.\-\_\<\>]*)?\s*\(?([\[\ \]\/\-\_\w\.]+)/g //
      lines = /.*?\:(\d+)\:(\d+)/
    , m = regex.exec(row)
    , ln = lines.exec(row)
    , line = {}
  if (m){
   line = { function: m[1]
    , file: m[2]
    , line: (ln ? 1 * ln[1] : undefined)
    , column:  (ln ? 1 * ln[2] : undefined) } } 
    
  line.unmatched = row
  return line    
}

exports.parseError = parseError
function parseError(error){
  var obj

/*  if(!error)
    return style('' + error).red
*/
  obj = 
    { name: ('object' == typeof error && error != null) ? (error.name || error.constructor.name) : 'thrown'
    }
    if(error && error.stack){
      var stack = stackStr = error.stack.split("\n")
      obj.stack = stack.map(parseStackLine)
    } else {
      obj.message = (error && error.message) || '' + error 
      obj.stack = [{unmatched: '[no stack trace]'}] // same format as a propper error, so printing is easy
    }
  return obj
}

exports.styleError = colourError
function colourError(error,enable){
  
  style = style.enable(enable === false ? false : true)
  var s = parsed = parseError(error)
  
  s = style(parsed.name).red.bold + ": " + (parsed.message ? style(parsed.message).yellow.bold : "")
  s += "\n"
  s += parsed.stack.map(function (row){
    if(row.file){
      var file = row.file.replace(process.env.NODE_PATH,'$')

      return style(style(" " + row.function).yellow.rpad(30,style('.').grey)
          + " "
          + style(file).white.bold).rpad(70,style('.').grey)
        + style(row.line || '?').lpad(3,style('.').grey).cyan
        + ":"
        + style(row.column || '?').lpad(3,style('.').grey).magenta
    }
    return (row.unmatched)
  }).join("\n") + "\n" //+ end
  
  //console.log(s)
  return s
}


/***/ },

/***/ 4267
(module, exports, __webpack_require__) {

/*
style.js 

Copyright (c) 2010 Alexis Sellier (cloudhead) , Marak Squires, Dominic Tarr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

this is based on colors.js by Alexis Sellier (cloudhead) & Marak Squires

*/

exports = module.exports = style
exports.error = __webpack_require__(90856)

function style(string){
  return new Styled(string)
}
function unstyled(string){
  var styled = new Styled(string)
  styled.enable = false
  return styled 
}
unstyled.enable = style.enable = function (on){
  return on ? style : unstyled
}

exports.stylize = stylize
function stylize(str, style) {
  if(style == 'rainbow'){
    var rainbowcolors = ['red','yellow','green','blue','magenta']; //RoY G BiV
    var exploded = str.split("");
    var i=0;
    exploded = exploded.map(function(letter) {
      if (letter==" ") {
        return letter;
      } 
      else {
        return stylize(letter,rainbowcolors[i++ % rainbowcolors.length]);
      }
    });
    return exploded.join("");

  }

  return '\033[' + styles[style][0] + 'm' + str +
         '\033[' + styles[style][1] + 'm';
};

function Styled (_string){
  var string = _string
    , _lpad = 0
    , _rpad = 0
    , _rc = ' '
    , _lc = ' '
  this.styles = []
  this.enable = true
  this.__defineGetter__('length',function (){
    return _lpad + (destyle("" + string).length) + _rpad
  })
  this.__defineSetter__('_string',function (s){
    return string = s
  })
  this.__defineGetter__('_string',function (s){
    return string
  })
  this.__defineGetter__('to_s',function (){
    return this.toString()
  })
  this.__defineGetter__('styler',function (){
    var self = this
    return function (x,off){
      var _string = string
        , _enable = self.enable
        self.enable = !off
      string = x
      var toReturn = self.toString()
      string = _string
      this.enable = _enable
      return toReturn
    }
  })
  this.toString = toString
  function pad(l,c){
    var pad = ''
      , _c = c
    if(_c instanceof Styled) // make pad aware of style, and not duplicate the characters too much!
      c = _c._string
    for(var i = 0; i < l; i ++) { pad += c }
    if(_c instanceof Styled){
      _c._string = pad
      return _c
      }
    
    return pad
  }
  function toString(){
    var newString = string
  
    if(this.enable)
    this.styles.forEach(function (style){
      newString = stylize(newString,style)
    })
  
    return pad(_lpad,_lc) + newString + pad(_rpad,_rc)
  }
  this.lpad = lpad
  this.rpad = rpad
  
  function lpad (pad,c){
    _lpad = this.length < pad ? _lpad = pad - this.length : 0
    _lc = c || _lc
    return this
  }
  function rpad (pad,c){
    _rpad = this.length < pad ? _rpad = pad - this.length : 0
    _rc = c || _rc 
    return this
  }
}

var styles = {
  //styles
  'bold'      : [1,  22],
  'italic'    : [3,  23],
  'underline' : [4,  24],
  'inverse'   : [7,  27],
  //grayscale
  'white'     : [37, 39],
  'grey'      : [90, 39],
  'black'     : [90, 39],
  //colors
  'blue'      : [34, 39],
  'cyan'      : [36, 39],
  'green'     : [32, 39],
  'magenta'   : [35, 39],
  'red'       : [31, 39],
  'yellow'    : [33, 39],
  };

exports.styles = Object.keys(styles).concat(['rainbow'])
exports.styles.forEach(function (style) {
  Object.defineProperty(Styled.prototype, style, {
    get: function () {
    this.styles.push(style)
    return this
    }
  });
});
var code = /\u001b\[\d+m/g

exports.destyle = destyle 
function destyle (s){
  return ("" + s).replace(code,'')
}


/***/ }

}]);