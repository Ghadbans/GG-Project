"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[5646],{

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

/***/ 53215
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Radio_Radio)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(75659);
// EXTERNAL MODULE: ./node_modules/@mui/system/colorManipulator.js
var colorManipulator = __webpack_require__(771);
// EXTERNAL MODULE: ./node_modules/@mui/material/internal/SwitchBase.js + 1 modules
var SwitchBase = __webpack_require__(55860);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(15607);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(20561);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/internal/svg-icons/RadioButtonUnchecked.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const RadioButtonUnchecked = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'RadioButtonUnchecked'));
;// ./node_modules/@mui/material/internal/svg-icons/RadioButtonChecked.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const RadioButtonChecked = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), 'RadioButtonChecked'));
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(39770);
;// ./node_modules/@mui/material/Radio/RadioButtonIcon.js
'use client';









const RadioButtonIconRoot = (0,styled/* default */.Ay)('span', {
  name: 'MuiRadioButtonIcon',
  shouldForwardProp: rootShouldForwardProp/* default */.A
})({
  position: 'relative',
  display: 'flex'
});
const RadioButtonIconBackground = (0,styled/* default */.Ay)(RadioButtonUnchecked, {
  name: 'MuiRadioButtonIcon'
})({
  // Scale applied to prevent dot misalignment in Safari
  transform: 'scale(1)'
});
const RadioButtonIconDot = (0,styled/* default */.Ay)(RadioButtonChecked, {
  name: 'MuiRadioButtonIcon'
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  left: 0,
  position: 'absolute',
  transform: 'scale(0)',
  transition: theme.transitions.create('transform', {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.shortest
  })
}, ownerState.checked && {
  transform: 'scale(1)',
  transition: theme.transitions.create('transform', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.shortest
  })
}));

/**
 * @ignore - internal component.
 */
function RadioButtonIcon(props) {
  const {
    checked = false,
    classes = {},
    fontSize
  } = props;
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    checked
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(RadioButtonIconRoot, {
    className: classes.root,
    ownerState: ownerState,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(RadioButtonIconBackground, {
      fontSize: fontSize,
      className: classes.background,
      ownerState: ownerState
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(RadioButtonIconDot, {
      fontSize: fontSize,
      className: classes.dot,
      ownerState: ownerState
    })]
  });
}
 false ? 0 : void 0;
/* harmony default export */ const Radio_RadioButtonIcon = (RadioButtonIcon);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(28466);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createChainedFunction.js
var createChainedFunction = __webpack_require__(50862);
// EXTERNAL MODULE: ./node_modules/@mui/material/RadioGroup/RadioGroupContext.js
var RadioGroupContext = __webpack_require__(14054);
;// ./node_modules/@mui/material/RadioGroup/useRadioGroup.js
'use client';



function useRadioGroup() {
  return react.useContext(RadioGroupContext/* default */.A);
}
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/Radio/radioClasses.js


function getRadioUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiRadio', slot);
}
const radioClasses = (0,generateUtilityClasses/* default */.A)('MuiRadio', ['root', 'checked', 'disabled', 'colorPrimary', 'colorSecondary', 'sizeSmall']);
/* harmony default export */ const Radio_radioClasses = (radioClasses);
;// ./node_modules/@mui/material/Radio/Radio.js
'use client';



const _excluded = ["checked", "checkedIcon", "color", "icon", "name", "onChange", "size", "className"];















const useUtilityClasses = ownerState => {
  const {
    classes,
    color,
    size
  } = ownerState;
  const slots = {
    root: ['root', `color${(0,capitalize/* default */.A)(color)}`, size !== 'medium' && `size${(0,capitalize/* default */.A)(size)}`]
  };
  return (0,esm_extends/* default */.A)({}, classes, (0,composeClasses/* default */.A)(slots, getRadioUtilityClass, classes));
};
const RadioRoot = (0,styled/* default */.Ay)(SwitchBase/* default */.A, {
  shouldForwardProp: prop => (0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
  name: 'MuiRadio',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.size !== 'medium' && styles[`size${(0,capitalize/* default */.A)(ownerState.size)}`], styles[`color${(0,capitalize/* default */.A)(ownerState.color)}`]];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  color: (theme.vars || theme).palette.text.secondary
}, !ownerState.disableRipple && {
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${ownerState.color === 'default' ? theme.vars.palette.action.activeChannel : theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.X4)(ownerState.color === 'default' ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.color !== 'default' && {
  [`&.${Radio_radioClasses.checked}`]: {
    color: (theme.vars || theme).palette[ownerState.color].main
  }
}, {
  [`&.${Radio_radioClasses.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  }
}));
function areEqualValues(a, b) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }

  // The value could be a number, the DOM will stringify it anyway.
  return String(a) === String(b);
}
const defaultCheckedIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(Radio_RadioButtonIcon, {
  checked: true
});
const defaultIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(Radio_RadioButtonIcon, {});
const Radio = /*#__PURE__*/react.forwardRef(function Radio(inProps, ref) {
  var _defaultIcon$props$fo, _defaultCheckedIcon$p;
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiRadio'
  });
  const {
      checked: checkedProp,
      checkedIcon = defaultCheckedIcon,
      color = 'primary',
      icon = defaultIcon,
      name: nameProp,
      onChange: onChangeProp,
      size = 'medium',
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color,
    size
  });
  const classes = useUtilityClasses(ownerState);
  const radioGroup = useRadioGroup();
  let checked = checkedProp;
  const onChange = (0,createChainedFunction/* default */.A)(onChangeProp, radioGroup && radioGroup.onChange);
  let name = nameProp;
  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = areEqualValues(radioGroup.value, props.value);
    }
    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(RadioRoot, (0,esm_extends/* default */.A)({
    type: "radio",
    icon: /*#__PURE__*/react.cloneElement(icon, {
      fontSize: (_defaultIcon$props$fo = defaultIcon.props.fontSize) != null ? _defaultIcon$props$fo : size
    }),
    checkedIcon: /*#__PURE__*/react.cloneElement(checkedIcon, {
      fontSize: (_defaultCheckedIcon$p = defaultCheckedIcon.props.fontSize) != null ? _defaultCheckedIcon$p : size
    }),
    ownerState: ownerState,
    classes: classes,
    name: name,
    checked: checked,
    onChange: onChange,
    ref: ref,
    className: (0,clsx/* default */.A)(classes.root, className)
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const Radio_Radio = (Radio);

/***/ },

/***/ 29428
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ RadioGroup_RadioGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(75659);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(15607);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/FormGroup/formGroupClasses.js


function getFormGroupUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiFormGroup', slot);
}
const formGroupClasses = (0,generateUtilityClasses/* default */.A)('MuiFormGroup', ['root', 'row', 'error']);
/* harmony default export */ const FormGroup_formGroupClasses = ((/* unused pure expression or super */ null && (formGroupClasses)));
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(79716);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/formControlState.js
var formControlState = __webpack_require__(38086);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/FormGroup/FormGroup.js
'use client';



const _excluded = ["className", "row"];










const useUtilityClasses = ownerState => {
  const {
    classes,
    row,
    error
  } = ownerState;
  const slots = {
    root: ['root', row && 'row', error && 'error']
  };
  return (0,composeClasses/* default */.A)(slots, getFormGroupUtilityClass, classes);
};
const FormGroupRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiFormGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.row && styles.row];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap'
}, ownerState.row && {
  flexDirection: 'row'
}));

/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */
const FormGroup = /*#__PURE__*/react.forwardRef(function FormGroup(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiFormGroup'
  });
  const {
      className,
      row = false
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const muiFormControl = (0,useFormControl/* default */.A)();
  const fcs = (0,formControlState/* default */.A)({
    props,
    muiFormControl,
    states: ['error']
  });
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    row,
    error: fcs.error
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroupRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const FormGroup_FormGroup = (FormGroup);
;// ./node_modules/@mui/material/RadioGroup/radioGroupClasses.js


function getRadioGroupUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiRadioGroup', slot);
}
const radioGroupClasses = (0,generateUtilityClasses/* default */.A)('MuiRadioGroup', ['root', 'row', 'error']);
/* harmony default export */ const RadioGroup_radioGroupClasses = ((/* unused pure expression or super */ null && (radioGroupClasses)));
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(96852);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useControlled.js
var useControlled = __webpack_require__(41159);
// EXTERNAL MODULE: ./node_modules/@mui/material/RadioGroup/RadioGroupContext.js
var RadioGroupContext = __webpack_require__(14054);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useId.js
var useId = __webpack_require__(1668);
;// ./node_modules/@mui/material/RadioGroup/RadioGroup.js
'use client';



const RadioGroup_excluded = ["actions", "children", "className", "defaultValue", "name", "onChange", "value"];











const RadioGroup_useUtilityClasses = props => {
  const {
    classes,
    row,
    error
  } = props;
  const slots = {
    root: ['root', row && 'row', error && 'error']
  };
  return (0,composeClasses/* default */.A)(slots, getRadioGroupUtilityClass, classes);
};
const RadioGroup = /*#__PURE__*/react.forwardRef(function RadioGroup(props, ref) {
  const {
      // private
      // eslint-disable-next-line react/prop-types
      actions,
      children,
      className,
      defaultValue,
      name: nameProp,
      onChange,
      value: valueProp
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, RadioGroup_excluded);
  const rootRef = react.useRef(null);
  const classes = RadioGroup_useUtilityClasses(props);
  const [value, setValueState] = (0,useControlled/* default */.A)({
    controlled: valueProp,
    default: defaultValue,
    name: 'RadioGroup'
  });
  react.useImperativeHandle(actions, () => ({
    focus: () => {
      let input = rootRef.current.querySelector('input:not(:disabled):checked');
      if (!input) {
        input = rootRef.current.querySelector('input:not(:disabled)');
      }
      if (input) {
        input.focus();
      }
    }
  }), []);
  const handleRef = (0,useForkRef/* default */.A)(ref, rootRef);
  const name = (0,useId/* default */.A)(nameProp);
  const contextValue = react.useMemo(() => ({
    name,
    onChange(event) {
      setValueState(event.target.value);
      if (onChange) {
        onChange(event, event.target.value);
      }
    },
    value
  }), [name, onChange, setValueState, value]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(RadioGroupContext/* default */.A.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroup_FormGroup, (0,esm_extends/* default */.A)({
      role: "radiogroup",
      ref: handleRef,
      className: (0,clsx/* default */.A)(classes.root, className)
    }, other, {
      children: children
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ const RadioGroup_RadioGroup = (RadioGroup);

/***/ },

/***/ 14054
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

/**
 * @ignore - internal component.
 */
const RadioGroupContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
if (false) // removed by dead control flow
{}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioGroupContext);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 17330
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4640);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68525);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55746);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69307);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29428);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68864);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53215);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(58331);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(71510);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(47767);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(82299);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(65821);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(40301);
var _excluded = ["className"];
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



















var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A.tooltip)]: {
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
var CustomerFormView2 = _ref3 => {
  var onCreateOption = _ref3.onCreateOption,
    onClose = _ref3.onClose;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_28__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_28__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_29__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_22__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_29__/* .setUser */ .gV)({
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
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_22__/* .ENDPOINT_URL */ .m, "/create-customer");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    customerType = _useState2[0],
    setCustomerType = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    designation = _useState4[0],
    setDesignation = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    customerFirstName = _useState6[0],
    setCustomerFirstName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    customerLastName = _useState8[0],
    setCustomerLastName = _useState8[1];
  var customerFullName = customerFirstName !== '' ? designation + '. ' + customerFirstName + " " + customerLastName : '';
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    companyName = _useState0[0],
    setCompanyName = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    customerEmail = _useState10[0],
    setCustomerEmail = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    customerCompanyPhone = _useState12[0],
    setCustomerCompanyPhone = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    customerPhone = _useState14[0],
    setCustomerPhone = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    currency = _useState16[0],
    setCurrency = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    paymentTerms = _useState18[0],
    setPaymentTerms = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    billingAddress = _useState20[0],
    setBillingAddress = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    billingCity = _useState22[0],
    setBillingCity = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    shippingAddress = _useState24[0],
    setShippingAddress = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    shippingCity = _useState26[0],
    setShippingCity = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    Customer = _useState28[0],
    setCustomer = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    customerDescription = _useState30[0],
    setCustomerDescription = _useState30[1];
  var dateComment = new Date();
  var handleRadioChange = e => {
    setCustomerType(e.target.value);
  };
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
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(function* (ReferenceInfo) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: Customer,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_22__/* .ENDPOINT_URL */ .m, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x) {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        customerType,
        designation,
        customerFirstName,
        customerLastName,
        customerFullName,
        companyName,
        customerEmail,
        customerCompanyPhone,
        customerPhone,
        currency,
        paymentTerms,
        billingAddress,
        billingCity,
        shippingAddress,
        shippingCity,
        customerDescription,
        Customer
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.post(apiUrl, data);
        if (res) {
          handleOpen();
          onCreateOption(res.data.data);
          var ReferenceInfo = res.data.data._id;
          handleCreateNotification(ReferenceInfo);
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmit(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '20px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    row: true,
    required: true,
    name: "customerType",
    value: customerType,
    onChange: handleRadioChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    value: "Individual",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null),
    label: "Individual"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    value: "Business",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null),
    label: "Business"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " ", customerType, " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "designation"
  }, "Designation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    required: customerType === 'Individual',
    id: "designation",
    value: designation,
    onChange: e => setDesignation(e.target.value),
    name: "designation",
    label: "Designation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "Mr"
  }, "Mr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "Ms"
  }, "Ms")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    required: customerType === 'Individual',
    id: "customerFirstName",
    name: "customerFirstName",
    value: customerFirstName,
    label: "First Name",
    onChange: e => setCustomerFirstName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    required: customerType === 'Individual',
    id: "customerLastName",
    name: "customerLastName",
    value: customerLastName,
    label: "Last Name",
    onChange: e => setCustomerLastName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    required: customerType === 'Individual',
    id: "customerFullName",
    name: "customerFullName",
    value: customerFullName,
    label: "Full Name",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    required: customerType === 'Business',
    id: "companyName",
    name: "companyName",
    value: companyName,
    label: "Company Name",
    onChange: e => setCompanyName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      minWidth: "97%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "Customer"
  }, "Select Name for Billing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    required: true,
    id: "Customer",
    value: Customer,
    onChange: e => setCustomer(e.target.value),
    name: "Customer",
    label: "Select Name for Billing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: companyName
  }, companyName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: designation + '. ' + customerFirstName + ' ' + customerLastName
  }, designation + '. ' + customerFirstName + ' ' + customerLastName)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    required: true,
    id: "customerEmail",
    name: "customerEmail",
    value: customerEmail,
    placeholder: "Example: example@gmail.com",
    label: "Email",
    onChange: e => setCustomerEmail(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    id: "customerCompanyPhone",
    name: "customerCompanyPhone",
    label: "Phone Number 1",
    type: "number",
    value: customerCompanyPhone,
    onChange: e => setCustomerCompanyPhone(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    id: "customerPhone",
    name: "customerPhone",
    label: "Phone Number 2",
    value: customerPhone,
    type: "number",
    onChange: e => setCustomerPhone(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      minWidth: "97%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "currency"
  }, "Currency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    required: true,
    id: "currency",
    value: currency,
    onChange: e => setCurrency(e.target.value),
    name: "currency",
    label: "currency"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "USD Dollar"
  }, "USD Dollar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "FC Congolais"
  }, "FC Congolais")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      minWidth: "97%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "paymentTerms"
  }, "Payment Terms"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    required: true,
    id: "paymentTerms",
    value: paymentTerms,
    onChange: e => setPaymentTerms(e.target.value),
    name: "paymentTerms",
    label: "Payment Terms"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "Net 3"
  }, "Net 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "Net 10"
  }, "Net 10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "Net 15"
  }, "Net 15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "Net 20"
  }, "Net 20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "Net 25"
  }, "Net 25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "Due end of the month"
  }, "Due end of the month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "Due on Receipt"
  }, "Due on Receipt")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    required: true,
    id: "billingAddress",
    name: "billingAddress",
    value: billingAddress,
    label: "Billing Address",
    onChange: e => setBillingAddress(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    required: true,
    id: "billingCity",
    name: "billingCity",
    value: billingCity,
    label: "Billing City",
    onChange: e => setBillingCity(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    required: true,
    id: "shippingAddress",
    name: "shippingAddress",
    value: shippingAddress,
    label: "Shipping Address",
    onChange: e => setShippingAddress(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    required: true,
    id: "shippingCity",
    name: "shippingCity",
    value: shippingCity,
    label: "Shipping City",
    onChange: e => setShippingCity(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    id: "customerDescription",
    name: "customerDescription",
    value: customerDescription,
    label: "Description",
    multiline: true,
    rows: 4,
    onChange: e => setCustomerDescription(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: onClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
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
    onClick: onClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    style: {
      color: 'red'
    }
  }, "Saving Failed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerFormView2);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 85646
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _component_SideMaintenance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69610);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68525);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55746);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(58331);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(99380);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(99682);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(71510);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(33829);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(47767);
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(61087);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(75737);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(601);
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(48484);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(82299);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(65821);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(40301);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(67034);
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(17330);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(99571);
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
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





























var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.tooltip)]: {
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
var ProjectFormView2 = _ref7 => {
  var onCreateOption = _ref7.onCreateOption,
    onClose = _ref7.onClose,
    onId = _ref7.onId,
    onEstimate = _ref7.onEstimate;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_31__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_31__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_32__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_32__/* .setUser */ .gV)({
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
        return _ref8.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    customerName = _useState2[0],
    setCustomerName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    projectName = _useState4[0],
    setProjectName = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    status = _useState6[0],
    setStatus = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    phase = _useState8[0],
    setPhase = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    description = _useState0[0],
    setDescription = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    startDate = _useState10[0],
    setStartDate = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    projectNumber = _useState12[0],
    setProjectNumber = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__/* .ENDPOINT_URL */ .m, "/get-last-saved-project"));
          var num = res.data && res.data.projectNumber ? parseInt(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.projectNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.projectNumber) || 0) : 0;
          setProjectNumber(num + 1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchlastNumber() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchlastNumber();
  }, []);
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    CustomerNameInfo = _useState14[0],
    setCustomerNameInfo = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    invoiceDate = _useState16[0],
    setInvoiceDate = _useState16[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchRelated = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        if (onId) {
          try {
            var resInvoice = yield axios__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__/* .ENDPOINT_URL */ .m, "/get-invoice/").concat(onId));
            setCustomerNameInfo(resInvoice.data.data.customerName.customerName);
            setCustomerName(resInvoice.data.data.customerName);
            setInvoiceDate(dayjs__WEBPACK_IMPORTED_MODULE_36___default()(resInvoice.data.data.invoiceDate));
          } catch (error) {
            console.log('no related');
          }
        } else if (onEstimate) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__/* .ENDPOINT_URL */ .m, "/get-estimation/").concat(onEstimate));
            setCustomerNameInfo(res.data.data.customerName.customerName);
            setCustomerName(res.data.data.customerName);
            setInvoiceDate(dayjs__WEBPACK_IMPORTED_MODULE_36___default()(res.data.data.estimateDate));
          } catch (error) {
            console.log('no related');
          }
        }
      });
      return function fetchRelated() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchRelated();
  }, []);
  var handleAdd = () => {
    var abc = [...phase, []];
    setPhase(abc);
  };
  var handleChange = (onChangeValue, i) => {
    var inputData = [...phase];
    inputData[i] = onChangeValue.target.value.toUpperCase();
    setPhase(inputData);
  };
  var handleDelete = i => {
    var deletePhase = [...phase];
    deletePhase.splice(i, 1);
    setPhase(deletePhase);
  };
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    loading = _useState18[0],
    setLoading = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    loadingOpenModal = _useState20[0],
    setLoadingOpenModal = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    ErrorOpenModal = _useState22[0],
    setErrorOpenModal = _useState22[1];
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
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_36___default()(Date.now()).format('DD/MM/YYYY');
  var Create = {
    person: user.data.userName + ' CREATED ',
    projectName,
    dateComment
  };
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState24 = _slicedToArray(_useState23, 2),
    saving = _useState24[0],
    setSaving = _useState24[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var custName = (customerName === null || customerName === void 0 ? void 0 : customerName.customerName) || (typeof customerName === 'string' ? customerName : '');
      if (!custName || custName.trim() === '' || custName === 'undefined' || custName === 'null') {
        react_toastify__WEBPACK_IMPORTED_MODULE_37__/* .toast */ .oR.error('Please select a valid Customer Name before saving.');
        setSaving('');
        return;
      }
      setSaving('true');
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(),
        customerName,
        projectName,
        status,
        phase,
        description,
        startDate,
        visitDate: invoiceDate,
        projectNumber,
        synced: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__/* .ENDPOINT_URL */ .m, "/create-projects"), data);
        if (res) {
          // Open Loading View
          handleOpen();
          // await db.projectSchema.add({ ...res.data.data, synced: true })
          onCreateOption(res.data.data);
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x) {
      return _ref1.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    disabled: true,
    id: "customerName",
    name: "customerName",
    label: "Customer Name",
    value: CustomerNameInfo,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_25__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_26__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_24__/* .DemoContainer */ .j, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_27__/* .DatePicker */ .l, {
    required: true,
    name: "visitDate",
    label: "Visit Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_36___default()(invoiceDate),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_25__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_26__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_24__/* .DemoContainer */ .j, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_27__/* .DatePicker */ .l, {
    required: true,
    name: "startDate",
    label: "Start Date",
    onChange: date => setStartDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    required: true,
    id: "ProjectName",
    name: "ProjectName",
    value: projectName,
    label: "Project Name",
    onChange: e => setProjectName(e.target.value.toUpperCase()),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    htmlFor: "projectNumber"
  }, "Project Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    type: "number",
    id: "projectNumber",
    name: "projectNumber",
    label: "Project Number",
    value: projectNumber,
    onChange: e => setProjectNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      position: "start"
    }, "P-")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Phase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    className: "btnCustomer",
    onClick: handleAdd
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, phase.map((data, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    name: "phase",
    id: "phase",
    label: "Phase",
    value: data,
    onChange: e => handleChange(e, i),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, {
    className: "btnCustomer",
    onClick: () => handleDelete(i)
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    id: "status"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    required: true,
    id: "status",
    value: status,
    onChange: e => setStatus(e.target.value),
    name: "status",
    label: "status",
    defaultValue: "Pending"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "Pending"
  }, "Pending"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "On-Going"
  }, "On-Going"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "Stopped"
  }, "Stopped"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "Completed"
  }, "Completed")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    id: "description",
    name: "description",
    value: description,
    label: "Description",
    multiline: true,
    rows: 4,
    onChange: e => setDescription(e.target.value.toUpperCase()),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
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
  }, "Saving...")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: onClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, {
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
    onClick: onClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    style: {
      color: 'red'
    }
  }, "Saving Failed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectFormView2);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
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