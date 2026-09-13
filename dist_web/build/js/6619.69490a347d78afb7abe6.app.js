(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[2153,6619,8520],{

/***/ 29719
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20561);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M7 11v2h10v-2zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}), 'RemoveCircleOutline'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 53215
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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

"use strict";

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

"use strict";
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

"use strict";
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

/***/ 88520
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _component_SideMaintenance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69610);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68525);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55746);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69307);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29428);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68864);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53215);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86531);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(25239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(58331);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(71510);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(47767);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(32005);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(82299);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(65821);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(40301);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(33829);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(39781);
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





















var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
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
var ItemFormView2 = _ref3 => {
  var onCreateOption = _ref3.onCreateOption,
    onClose = _ref3.onClose;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_29__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_29__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_30__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_30__/* .setUser */ .gV)({
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
          var resItemUnit = yield axios__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/itemUnit"));
          setUnitInfo(resItemUnit.data.data);
          var resCode = yield axios__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/itemCode"));
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
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_36___default()(Date.now()).format('DD/MM/YYYY');
  var Creates = {
    person: user.data.userName + ' CREATED ',
    dateComment
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* () {
        if (newCode) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/get-last-saved-item/").concat(newCode));
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
  var handleDecision = decision => {
    //Navigate Based on th Decision
    if (decision === 'previous') {
      window.history.back();
    } else if (decision === 'stay') {
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
        var res = yield axios__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/create-itemUnit"), data);
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
        yield axios__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/create-notification"), data);
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
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A)(),
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
        var res = yield axios__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/create-item"), {
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
    required: true,
    row: true,
    name: "typeItem",
    value: typeItem,
    onChange: e => setTypeItem(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    value: "Goods",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null),
    label: "Goods"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    value: "Services",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null),
    label: "Services"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, typeItem))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "itemBrand",
    name: "itemBrand",
    value: itemBrand,
    label: "Brand",
    onChange: e => setItemBrand(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, _extends({}, other, {
        sx: {
          backgroundColor: 'white',
          left: '0',
          marginTop: '10px'
        }
      }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        onClick: e => handleOpenOpenAutocomplete2(e),
        disabled: user.data.role === 'User',
        onMouseDown: e => e.preventDefault(),
        className: "btnCustomer7",
        style: {
          width: '100%'
        }
      }, "ADD NEW Unit")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, _extends({}, params, {
      label: "Unit",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    htmlFor: "itemDimension"
  }, "Dimension"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    id: "itemDimension",
    name: "itemDimension",
    value: itemDimension,
    type: "number",
    label: "Dimension",
    onChange: e => setItemDimension(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      position: "start"
    }, "M")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    htmlFor: "itemWeight"
  }, "Weight"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    id: "itemWeight",
    name: "itemWeight",
    value: itemWeight,
    type: "number",
    label: "Weight",
    onChange: e => setItemWeight(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      position: "start"
    }, "Kg")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    id: "unit"
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    required: true,
    id: "itemCategory",
    value: itemCategory,
    onChange: e => setItemCategory(e.target.value),
    name: "itemCategory",
    label: "Category"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    value: "HA"
  }, "HA (HA)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    value: "ELECTRICITY"
  }, "ELECTRICITY (EL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    value: "SOLAR SYSTEM"
  }, "SOLAR SYSTEM (SS)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    value: "IT"
  }, "IT (IT)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    value: "PLUMBING"
  }, "PLUMBING (PL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    value: "ELECTRONIC"
  }, "ELECTRONIC (ELN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    value: "FENCE ELECTRIC"
  }, "FENCE ELECTRIC (FE)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    value: "ACCESSORY"
  }, "ACCESSORY (ACC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    value: "WELDING"
  }, "WELDING (WLN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    value: "GENERATOR"
  }, "GENERATOR (GA)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    value: "TOOLS"
  }, "TOOLS (TL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    value: "CONSTRUCTION"
  }, "CONSTRUCTION (CTN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    value: "OTHERS"
  }, "OTHERS (OT)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    htmlFor: "itemNumber"
  }, "Item Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    required: true,
    disabled: true,
    type: "number",
    id: "itemNumber",
    value: String(itemNumber).padStart(6, '0'),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      position: "start"
    }, newCode, "-"),
    label: "Item Number"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "itemStore",
    name: "itemStore",
    value: itemStore,
    label: "Store Name",
    onChange: e => setItemStore(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "itemManufacturer",
    name: "itemManufacturer",
    value: itemManufacturer,
    label: "Manufacturer",
    onChange: e => setItemManufacturer(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    htmlFor: "itemCostPrice"
  }, "Cost Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    id: "itemCostPrice",
    name: "itemCostPrice",
    label: "Cost Unit Price",
    onChange: e => setItemCostPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    htmlFor: "itemSellingPrice"
  }, "Selling Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    id: "itemSellingPrice",
    name: "itemSellingPrice",
    label: "Selling Unit Price",
    onChange: e => setItemSellingPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "stockOnHand",
    name: "stockOnHand",
    value: stockOnHand,
    label: "Stock Hand",
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
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: onClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {
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
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: openAutocomplete2,
    onClose: handleCloseOpenAutocomplete2,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    onClick: handleCloseOpenAutocomplete2,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Create Expenses Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmitCategory
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "itemUnit",
    name: "itemUnit",
    value: itemUnit,
    label: "Unit",
    onChange: e => setItemUnit(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: modalOpenLoading,
    onClose: handleCloseOpenAutocomplete2,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Data successfully Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleCloseOpenAutocomplete2,
    className: "btnCustomer"
  }, "Close")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemFormView2);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 32153
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86531);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(25239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(11848);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(71510);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(58331);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(47767);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(32005);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(65821);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(82299);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(40301);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(17809);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(29719);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_37__);
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





















var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A.tooltip)]: {
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
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_29__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_29__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_30__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_30__/* .setUser */ .gV)({
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
          var resItemUnit = yield axios__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__/* .ENDPOINT_URL */ .m, "/itemUnit"));
          setUnitInfo(resItemUnit.data.data);
          var resCode = yield axios__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__/* .ENDPOINT_URL */ .m, "/itemCode"));
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__/* .ENDPOINT_URL */ .m, "/get-item/").concat(id));
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
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_37___default()(Date.now());
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
            var res = yield axios__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__/* .ENDPOINT_URL */ .m, "/get-last-saved-item/").concat(newCode));
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
    setLoadingOpenModal(false);
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
        var res = yield axios__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__/* .ENDPOINT_URL */ .m, "/create-itemUnit"), data);
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
        var res = yield axios__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__/* .ENDPOINT_URL */ .m, "/create-notification/"), data);
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
        var res = yield axios__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__/* .ENDPOINT_URL */ .m, "/update-item/").concat(id), data);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleOpenUpdate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '20px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    row: true,
    name: "typeItem",
    value: typeItem,
    onChange: e => setTypeItem(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    value: "Goods",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null),
    label: "Goods"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    value: "Services",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null),
    label: "Services"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, null, typeItem)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    id: "itemName",
    name: "itemName",
    value: itemName,
    label: "Item Name",
    onChange: e => setItemName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    id: "itemBrand",
    name: "itemBrand",
    value: itemBrand,
    label: "Brand",
    onChange: e => setItemBrand(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, unit !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    label: "Unit",
    value: unit,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Clear",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    onClick: handleClearUnits
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, _extends({}, other, {
        sx: {
          backgroundColor: 'white',
          left: '0',
          marginTop: '10px'
        }
      }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        onClick: e => handleOpenOpenAutocomplete2(e),
        disabled: user.data.role === 'User',
        onMouseDown: e => e.preventDefault(),
        className: "btnCustomer7",
        style: {
          width: '100%'
        }
      }, "ADD NEW Unit")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, _extends({}, params, {
      label: "Unit",
      required: true
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Clear",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    onClick: handleGiveUnits
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    htmlFor: "itemDimension"
  }, "Dimension"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    id: "itemDimension",
    name: "itemDimension",
    value: itemDimension,
    type: "number",
    label: "Dimension",
    onChange: e => setItemDimension(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
      position: "start"
    }, "M")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    htmlFor: "itemWeight"
  }, "Weight"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    id: "itemWeight",
    name: "itemWeight",
    value: itemWeight,
    type: "number",
    label: "Weight",
    onChange: e => setItemWeight(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
      position: "start"
    }, "Kg")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    id: "unit"
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    disabled: user.data.role !== 'CEO',
    id: "itemCategory",
    value: itemCategory,
    onChange: e => setItemCategory(e.target.value),
    name: "itemCategory",
    label: "Category"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "HA"
  }, "HA (HA)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "ELECTRICITY"
  }, "ELECTRICITY (EL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "SOLAR SYSTEM"
  }, "SOLAR SYSTEM (SS)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "IT"
  }, "IT (IT)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "PLUMBING"
  }, "PLUMBING (PL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "ELECTRONIC"
  }, "ELECTRONIC (ELN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "FENCE ELECTRIC"
  }, "FENCE ELECTRIC (FE)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "ACCESSORY"
  }, "ACCESSORY (ACC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "WELDING"
  }, "WELDING (WLN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "GENERATOR"
  }, "GENERATOR (GA)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "TOOLS"
  }, "TOOLS (TL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "CONSTRUCTION"
  }, "CONSTRUCTION (CTN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "OTHERS"
  }, "OTHERS (OT)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Clear",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    onClick: handleClear
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    htmlFor: "itemNumber"
  }, "Item Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    required: true,
    disabled: true,
    type: "number",
    id: "itemNumber",
    value: String(itemNumber).padStart(6, '0'),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
      position: "start"
    }, newCode, "-"),
    label: "Item Number"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    id: "itemStore",
    name: "itemStore",
    value: itemStore,
    label: "Store Name",
    onChange: e => setItemStore(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    id: "itemManufacturer",
    name: "itemManufacturer",
    value: itemManufacturer,
    label: "Manufacturer",
    onChange: e => setItemManufacturer(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    htmlFor: "itemCostPrice"
  }, "Cost Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    id: "itemCostPrice",
    name: "itemCostPrice",
    type: "number",
    value: itemCostPrice,
    label: "Cost Unit Price",
    onChange: e => setItemCostPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
      position: "start"
    }, "$")
  })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    htmlFor: "itemSellingPrice"
  }, "Selling Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    id: "itemSellingPrice",
    name: "itemSellingPrice",
    type: "number",
    value: itemSellingPrice,
    label: "Selling Unit Price",
    onChange: e => setItemSellingPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
      position: "start"
    }, "$")
  })) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    id: "qtyBuy",
    name: "qtyBuy",
    type: "number",
    label: "Quantity Buy",
    onChange: e => setQtyBuy(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '20px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    id: "total",
    name: "total",
    value: total,
    label: "Total Quantity In Store",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Reason Of Updating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: onClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: openAutocomplete2,
    onClose: handleCloseOpenAutocomplete2,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    onClick: handleCloseOpenAutocomplete2,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Create Unit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmitCategory
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    id: "itemUnit",
    name: "itemUnit",
    value: itemUnit,
    label: "Unit",
    onChange: e => setItemUnit(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: modalOpenLoading,
    onClose: handleCloseOpenAutocomplete2,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Data successfully Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleCloseOpenAutocomplete2,
    className: "btnCustomer"
  }, "Close")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemUpdateView2);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 86619
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42600);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68525);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55746);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71543);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86531);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(58331);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14519);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(97834);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(8451);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(71510);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(33829);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(47767);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(99571);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(12717);
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(61087);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(75737);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(601);
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(48484);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(37872);
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(90445);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(92659);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(82299);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(65821);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(40301);
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(17330);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(39781);
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(88520);
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(32153);
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(15381);
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(3100);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(95236);
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


































dayjs__WEBPACK_IMPORTED_MODULE_35___default().extend((dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_36___default()));
dayjs__WEBPACK_IMPORTED_MODULE_35___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_37___default()));

// Global helper to parse dates robustly across formats
var parseDate = d => {
  if (!d) return dayjs__WEBPACK_IMPORTED_MODULE_35___default()(null);
  if (typeof d === 'string') {
    var formats = ['YYYY-MM-DD', 'DD/MM/YYYY', 'D/M/YYYY', 'DD-MM-YYYY', 'DD/MM/YY', 'D/M/YY', 'YYYY-MM-DDTHH:mm:ss.SSSZ'];
    var parsed = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(d, formats, true);
    if (!parsed.isValid()) parsed = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(d); // Fallback to native
    return parsed;
  }
  return dayjs__WEBPACK_IMPORTED_MODULE_35___default()(d);
};
var uniqueById = arr => {
  var seen = new Set();
  return arr.filter(it => {
    if (!it) return false;
    var id = it._id || it.id || (it.payNumber ? "PAY_".concat(it.payNumber) : null) || (it.expenseNumber ? "EXP_".concat(it.expenseNumber) : null) || (it.idInfo ? "INF_".concat(it.idInfo) : null) || (it.projectNumber ? "PRJ_".concat(it.projectNumber) : null) || (it.invoiceNumber ? "INV_".concat(it.invoiceNumber) : null) || (it.factureNumber ? "FAC_".concat(it.factureNumber) : null) || (it.paymentNumber ? "PMT_".concat(it.paymentNumber) : null) || (it.employeeId ? "EMP_".concat(it.employeeId) : null) || "".concat(it.date, "_").concat(it.machineNo, "_").concat(it.blockType, "_").concat(it.workerName || it.operatorName || '');
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
};














var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A.tooltip)]: {
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
var style2 = (/* unused pure expression or super */ null && ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
}));
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Ay, {
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
function PayRollFormView() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_42__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_42__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__/* .setUser */ .gV)({
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__/* .logOut */ .je)());
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
    open1 = _useState2[0],
    setOpen1 = _useState2[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseBack = () => {
    setOpen1(false);
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    payNumber = _useState4[0],
    setPayNumber = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    payDate = _useState6[0],
    setPayDate = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    month = _useState8[0],
    setMonth = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    employeeId = _useState0[0],
    setEmployeeId = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    daysW = _useState10[0],
    setDaysW = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    daysOpen = _useState12[0],
    setDaysOpen = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    Lops = _useState14[0],
    setLops = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    employee = _useState16[0],
    setEmployee = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    employeeName = _useState18[0],
    setEmployeeName = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    employeeRole = _useState20[0],
    setEmployeeRole = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    bankName = _useState22[0],
    setBankName = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    bankNo = _useState24[0],
    setBankNo = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    basicSalary = _useState26[0],
    setBasicSalary = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    earningSalary = _useState28[0],
    setEarningSalary = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    advancedSalary = _useState30[0],
    setAdvancedSalary = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState32 = _slicedToArray(_useState31, 2),
    basicTransport = _useState32[0],
    setBasicTransport = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    transportEarning = _useState34[0],
    setTransportEarning = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    transportDeduction = _useState36[0],
    setTransportDeduction = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState38 = _slicedToArray(_useState37, 2),
    foodBasic = _useState38[0],
    setFoodBasic = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState40 = _slicedToArray(_useState39, 2),
    foodEarning = _useState40[0],
    setFoodEarning = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState42 = _slicedToArray(_useState41, 2),
    itemLost = _useState42[0],
    setItemLost = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState44 = _slicedToArray(_useState43, 2),
    foodDeduction = _useState44[0],
    setFoodDeduction = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState46 = _slicedToArray(_useState45, 2),
    bounceAllowances = _useState46[0],
    setBounceAllowances = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState48 = _slicedToArray(_useState47, 2),
    bounceAllowancesEarning = _useState48[0],
    setBounceAllowancesEarning = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState50 = _slicedToArray(_useState49, 2),
    other = _useState50[0],
    setOther = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState52 = _slicedToArray(_useState51, 2),
    otherEarning = _useState52[0],
    setOtherEarning = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState54 = _slicedToArray(_useState53, 2),
    loan = _useState54[0],
    setLoan = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState56 = _slicedToArray(_useState55, 2),
    bonus = _useState56[0],
    setBonus = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState58 = _slicedToArray(_useState57, 2),
    rate = _useState58[0],
    setRate = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState60 = _slicedToArray(_useState59, 2),
    amountPayUSD = _useState60[0],
    setAmountPayUSD = _useState60[1];
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState62 = _slicedToArray(_useState61, 2),
    amountPayFC = _useState62[0],
    setAmountPayFC = _useState62[1];
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState64 = _slicedToArray(_useState63, 2),
    employeeDepartment = _useState64[0],
    setEmployeeDepartment = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState66 = _slicedToArray(_useState65, 2),
    employeePhone = _useState66[0],
    setEmployeePhone = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState68 = _slicedToArray(_useState67, 2),
    words = _useState68[0],
    setTotalW = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState70 = _slicedToArray(_useState69, 2),
    factoryEarned = _useState70[0],
    setFactoryEarned = _useState70[1];
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState72 = _slicedToArray(_useState71, 2),
    factoryDamage = _useState72[0],
    setFactoryDamage = _useState72[1];
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState74 = _slicedToArray(_useState73, 2),
    weekFrom = _useState74[0],
    setWeekFrom = _useState74[1];
  var _useState75 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState76 = _slicedToArray(_useState75, 2),
    weekTo = _useState76[0],
    setWeekTo = _useState76[1];
  var _useState77 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState78 = _slicedToArray(_useState77, 2),
    serverErrorMsg = _useState78[0],
    setServerErrorMsg = _useState78[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/get-last-saved-payRoll"));
          var num = res.data && res.data.payNumber ? parseInt(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.payNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.payNumber) || 0) : 0;
          setPayNumber(num + 1);
          setPayDate(res.data.payDate);
          setMonth(res.data.month);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchlastNumber() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchlastNumber();
  }, []);
  // Add Other And Bonus.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var _resEmployee$data, _resPRate$data;
          var resEmployee = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/employee"));
          setEmployee((_resEmployee$data = resEmployee.data) === null || _resEmployee$data === void 0 || (_resEmployee$data = _resEmployee$data.data) === null || _resEmployee$data === void 0 ? void 0 : _resEmployee$data.filter(row => row.status === 'Employed' || row.status === 'Resign'));
          var resPRate = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/paymentRate"));
          (((_resPRate$data = resPRate.data) === null || _resPRate$data === void 0 ? void 0 : _resPRate$data.data) || []).map(row => setRate(row.paymentRate));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetch() {
        return _ref9.apply(this, arguments);
      };
    }();
    handleFetch();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchExpense = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        if (!employeeName.id) return;
        try {
          var _resExpense$data, _resAttendance$data;
          setLoading(true);
          // Step 1: Fetch Shared Data (Expenses and Attendance) once per change
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/expense?summary=true")), axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/employeeattendance"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2),
            resExpense = _yield$Promise$all2[0],
            resAttendance = _yield$Promise$all2[1];
          var allExpenses = ((_resExpense$data = resExpense.data) === null || _resExpense$data === void 0 ? void 0 : _resExpense$data.data) || [];
          var allAttendance = ((_resAttendance$data = resAttendance.data) === null || _resAttendance$data === void 0 ? void 0 : _resAttendance$data.data) || [];
          var isFactory = employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY');
          var fromD = weekFrom ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).startOf('day') : null;
          var toD = weekTo ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).endOf('day') : null;
          var inRange = dateStr => {
            var d = parseDate(dateStr);
            if (!d.isValid()) return false;

            // Prioritize range if both dates are selected
            if (fromD && toD) {
              return (d.isSame(fromD, 'day') || d.isAfter(fromD)) && (d.isSame(toD, 'day') || d.isBefore(toD));
            }

            // Fallback to monthly filter
            return d.format('MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_35___default()(month).format('MM/YYYY');
          };

          // Standard Filter Helper - Robust Matching for Deductions
          var getSum = categories => {
            var searchTerms = Array.isArray(categories) ? categories.map(c => c.toUpperCase()) : [categories.toUpperCase()];
            return allExpenses.filter(row => {
              var _row$expenseCategory;
              var cat = ((_row$expenseCategory = row.expenseCategory) === null || _row$expenseCategory === void 0 || (_row$expenseCategory = _row$expenseCategory.expensesCategory) === null || _row$expenseCategory === void 0 ? void 0 : _row$expenseCategory.toUpperCase()) || "";
              var matchCat = searchTerms.some(term => cat.includes(term));
              return row.accountName === 'Employee' && matchCat && inRange(row.expenseDate);
            }).map(row => ({
              emp: row.employeeName.filter(item => item.idRow === employeeName.id)
            })).filter(item => item.emp.length > 0).reduce((acc, row) => acc + row.emp.reduce((s, it) => s + parseFloat(it.amount || 0), 0), 0);
          };

          // Apply Deductions (Respects Range & Variations)
          setTransportDeduction(getSum(['TRANSPORT']));
          setFoodDeduction(getSum(['FOOD']));
          setAdvancedSalary(getSum(['ADVANCED', 'ACCOMPTE', 'AVANCE']));
          setLoan(getSum(['LOAN', 'PRET']));
          setItemLost(getSum(['ITEM LOST', 'PERDU', 'DEDUCTION']));
          setBonus(getSum(['BONUS']));

          // Attendance Filtering
          var attArray = allAttendance.filter(row => row.id === employeeName.id && inRange(row.timeIn));
          var nbreOfDay = attArray.filter(item => item.observation === 'P' || item.observation === 'H').reduce((sum, item) => sum + (item.daysWN || 0), 0);
          setDaysW(nbreOfDay);

          // Determine calculation mode: Prioritize range if both dates are chosen
          var isRangeMode = fromD && toD && fromD.isBefore(toD.add(1, 'day'));

          // FACTORY/RANGE SPECIFIC COMPUTATIONS (Earnings & Damages)
          if (isRangeMode) {
            var _resRuns$data, _resDamages$data, _resConfig$data, _resMixer$data;
            var _yield$Promise$all3 = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/block-production")), axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/block-damage")), axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/block-config"))]),
              _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 3),
              resRuns = _yield$Promise$all4[0],
              resDamages = _yield$Promise$all4[1],
              resConfig = _yield$Promise$all4[2];
            var allRuns = ((_resRuns$data = resRuns.data) === null || _resRuns$data === void 0 ? void 0 : _resRuns$data.data) || [];
            var allDamages = ((_resDamages$data = resDamages.data) === null || _resDamages$data === void 0 ? void 0 : _resDamages$data.data) || [];
            var config = (_resConfig$data = resConfig.data) === null || _resConfig$data === void 0 || (_resConfig$data = _resConfig$data.data) === null || _resConfig$data === void 0 ? void 0 : _resConfig$data[0];
            var rates = (config === null || config === void 0 ? void 0 : config.laborRates) || {
              rate50_33: {
                perSack: 10000
              },
              rate20: {
                t1_sacks: 6,
                t1_rate: 9000,
                t2_sacks: 7,
                t2_rate: 16500,
                t3_sacks: 8,
                t3_rate: 19000,
                t4_sacks: 12,
                t4_rate: 21500,
                t5_rate: 24500
              },
              rate15: {
                t1_sacks: 5,
                t1_rate: 9000,
                t2_sacks: 6,
                t2_rate: 16500,
                t3_sacks: 7,
                t3_rate: 19000,
                t4_sacks: 10,
                t4_rate: 21500,
                t5_rate: 24500
              },
              rate10_14_12: {
                t1_sacks: 6,
                t1_rate: 9000,
                t2_sacks: 7,
                t2_rate: 17000,
                t3_sacks: 8,
                t3_rate: 19500,
                t4_sacks: 9,
                t4_rate: 22000,
                t5_rate: 24500
              }
            };
            var runs = uniqueById(allRuns).filter(r => inRange(r.date));
            var damages = uniqueById(allDamages).filter(d => inRange(d.productionDate || d.date));
            var normalize = n => {
              if (!n) return "";
              var s = n.toString().trim().toUpperCase();
              if (s.endsWith(" FC")) s = s.substring(0, s.length - 3).trim();
              return s.replace(/\s+/g, " ");
            };
            var targetName = normalize(employeeName.name);
            var calculateWorkerShare = (typeStr, s, e, half) => {
              if (typeStr.includes("50") || typeStr.includes("33")) {
                var r50 = rates.rate50_33 || {
                  perSack: 10000
                };
                return half ? s * r50.perSack / 2 : s * r50.perSack / e;
              }
              var r = null;
              if (typeStr.includes("20")) r = rates.rate20;else if (typeStr.includes("15")) r = rates.rate15;else r = rates.rate10_14_12 || rates.rate14 || rates.rate12 || rates.rate10;
              if (!r) return 0;
              var sacks = parseInt(s) || 0;
              var rate = 0;
              if (half) {
                var effectiveSacks = Math.min(sacks, r.t2_sacks || 0);
                if (effectiveSacks <= (r.t1_sacks || 0)) rate = (r.t1_rate || 0) * sacks / 2;else rate = (r.t2_rate || 0) / 2;
              } else {
                if (sacks <= (r.t1_sacks || 0)) rate = (r.t1_rate || 0) * sacks;else if (sacks <= (r.t2_sacks || 0)) rate = r.t2_rate || 0;else if (sacks === (r.t3_sacks || 0)) rate = r.t3_rate || 0;else if (sacks <= (r.t4_sacks || 0)) rate = r.t4_rate || 0;else rate = r.t5_rate || 0;
              }
              return rate;
            };
            var resMixer = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/block-mixer"));
            var mixerRecords = ((_resMixer$data = resMixer.data) === null || _resMixer$data === void 0 ? void 0 : _resMixer$data.data) || [];
            var standardSpots = 3;
            var myEarned = 0;

            // Calculate direct machine earnings and populate mixer pool
            runs.forEach(run => {
              var workersList = [{
                name: run.operatorName,
                half: run.halfDayOperator || false
              }, {
                name: run.helper1,
                half: run.halfDayHelper1 || false
              }, {
                name: run.helper2,
                half: run.halfDayHelper2 || false
              }, {
                name: run.helper3,
                half: run.halfDayHelper3 || false
              }].filter(w => w.name);
              var calculatedUnit = calculateWorkerShare(run.blockType, run.sacksUsed, standardSpots, false);
              var unitShare = calculatedUnit;
              if (run.laborPot) {
                var weightedCrewCount = workersList.reduce((sum, w) => sum + (w.half ? 0.5 : 1), 0);
                var oldSchemaDiff = Math.abs(run.laborPot - (weightedCrewCount + 1) * calculatedUnit);
                var newSchemaDiff = Math.abs(run.laborPot - weightedCrewCount * calculatedUnit);
                if (newSchemaDiff < oldSchemaDiff) {
                  unitShare = run.laborPot / Math.max(weightedCrewCount, 0.5);
                } else {
                  unitShare = run.laborPot / (weightedCrewCount + 1);
                }
              }

              // Direct machine work
              var myMatch = workersList.find(w => normalize(w.name) === targetName);
              if (myMatch) {
                myEarned += myMatch.half ? unitShare / 2 : unitShare;
              }
            });

            // Calculate and Distribute Mixer Shares
            var mixerDays = [...new Set(mixerRecords.filter(m => inRange(m.date)).map(m => m.date))];
            var mixerRate = (config === null || config === void 0 ? void 0 : config.mixerRatePerSack) !== undefined ? config.mixerRatePerSack : 300;
            mixerDays.forEach(dateStr => {
              var dateFormatted = parseDate(dateStr).format('YYYY-MM-DD');
              var runsOnDate = allRuns.filter(r => parseDate(r.date).format('YYYY-MM-DD') === dateFormatted);
              var totalSacksOnDate = runsOnDate.reduce((sum, r) => sum + (parseInt(r.sacksUsed) || 0), 0);
              var mixersOnDate = mixerRecords.filter(m => m.date === dateStr);
              if (mixersOnDate.length === 0) return;
              mixersOnDate.forEach(w => {
                if (w.workerName && normalize(w.workerName) === targetName) {
                  var basePayout = totalSacksOnDate * mixerRate;
                  var share = w.halfDay ? basePayout * 0.5 : basePayout;
                  myEarned += share;
                }
              });
            });
            var myDamageDeduction = 0;
            damages.forEach(d => {
              var matchRun = allRuns.find(r => r.machineNo.toString().trim() === d.machineNo.toString().trim() && r.blockType.toString().trim().toUpperCase() === d.blockType.toString().trim().toUpperCase() && parseDate(r.date).isSame(parseDate(d.productionDate || d.date), 'day'));
              if (matchRun) {
                var workers = [matchRun.operatorName, matchRun.helper1, matchRun.helper2, matchRun.helper3].filter(n => n);
                if (workers.map(n => normalize(n)).includes(targetName)) {
                  myDamageDeduction += d.damagedBlocks * (d.damageRate || 3000) / workers.length;
                }
              }
            });
            setFactoryEarned(myEarned);
            setFactoryDamage(myDamageDeduction);
          } else {
            setFactoryEarned(0);
            setFactoryDamage(0);
          }
        } catch (error) {
          react_toastify__WEBPACK_IMPORTED_MODULE_29__/* .toast */ .oR.error('Error fetching expenses or factory data.');
        } finally {
          setLoading(false);
        }
      });
      return function fetchExpense() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchExpense();
  }, [month, employeeName, weekFrom, weekTo, employeeDepartment]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (totalNet) {
      var wholePart = Math.floor(totalNet);
      var fractionalPart = (totalNet % 1).toFixed(2).split('.')[1];
      var wholeWords = number_to_words__WEBPACK_IMPORTED_MODULE_49___default().toWords(wholePart);
      var fractionalWords = number_to_words__WEBPACK_IMPORTED_MODULE_49___default().toWords(fractionalPart);
      setTotalW("".concat(wholeWords, " and ").concat(fractionalWords, " cents"));
    }
  }, [totalNet]);
  var handleChange = newValue => {
    var selectedOptions = employee.find(option => option === newValue);
    setEmployeeName({
      id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      name: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeeName
    });
    setEmployeeId(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeeId);
    setEmployeeRole(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeeRole);
    setEmployeeDepartment(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.department);
    setEmployeePhone(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeePhone);
    setBasicSalary(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.salary);
    setBasicTransport(selectedOptions.basicTransport !== undefined ? selectedOptions.basicTransport : 0);
    setFoodBasic(selectedOptions.foodBasic !== undefined ? selectedOptions.foodBasic : 0);
    setBounceAllowances(selectedOptions.bounceAllowances !== undefined ? selectedOptions.bounceAllowances : 0);
    setOther(selectedOptions.other !== undefined ? selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.other : 0);
    setBankName(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.bankName);
    setBankNo(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.bankAccountNumber);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var DayO = 26;
    var LO = 4;
    setDaysOpen(DayO);
    setLops(LO);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var hasRange = weekFrom && weekTo;
    if (hasRange || employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY')) {
      setEarningSalary(0); // Ignore basic wage for anyone with a period range or factory dept
    } else {
      var dividedSalary = basicSalary / daysOpen;
      var totalEarningSalary = isNaN(daysW * dividedSalary) ? 0 : parseFloat(daysW * dividedSalary);
      setEarningSalary(totalEarningSalary);
    }
    var dividedTransport = basicTransport / daysOpen;
    var totalEarningTransport = isNaN(daysW * dividedTransport) ? 0 : parseFloat(daysW * dividedTransport);
    setTransportEarning(totalEarningTransport);
    var dividedFood = foodBasic / daysOpen;
    var totalEarningFood = isNaN(daysW * dividedFood) ? 0 : parseFloat(daysW * dividedFood);
    setFoodEarning(totalEarningFood);
    var dividedBounce = bounceAllowances / daysOpen;
    var totalEarningBOunce = isNaN(daysW * dividedBounce) ? 0 : parseFloat(daysW * dividedBounce);
    setBounceAllowancesEarning(totalEarningBOunce);
    var dividedOther = other / daysOpen;
    var totalEarningOther = isNaN(daysW * dividedOther) ? 0 : parseFloat(daysW * dividedOther);
    setOtherEarning(totalEarningOther);
  }, [basicSalary, daysW, basicTransport, foodBasic, bounceAllowances, other, daysOpen, employeeDepartment]);
  var totalActualSalary = parseFloat(basicSalary) + parseFloat(basicTransport) + parseFloat(foodBasic) + parseFloat(bounceAllowances) + parseFloat(other) + parseFloat(factoryEarned);
  var totalActualEarning = parseFloat(earningSalary) + parseFloat(transportEarning) + parseFloat(foodEarning) + parseFloat(bounceAllowancesEarning) + parseFloat(otherEarning) + parseFloat(factoryEarned);
  var totalActualDeduction = parseFloat(advancedSalary) + parseFloat(transportDeduction) + parseFloat(foodDeduction) + parseFloat(loan) + parseFloat(itemLost) + parseFloat(factoryDamage);
  var totalNet = totalActualEarning !== 0 ? totalActualEarning - totalActualDeduction : 0;
  var totalPaid = totalNet + bonus + totalActualDeduction;
  var totalPaidDollars = rate !== 0 ? Math.min(totalNet / rate * 100) / 100 : 0;
  var dividedAmountPaidFc = parseFloat(amountPayFC / rate).toFixed(2);
  var totalPaidUsd = parseFloat(Number(amountPayUSD) + Number(dividedAmountPaidFc)).toFixed(2);
  var CreditUSD = Math.round((totalPaidDollars - totalPaidUsd) * 100) / 100;
  var CreditFC = rate !== 0 ? Math.round(CreditUSD * rate * 100) / 100 : 0;
  var basicSalaryDollar = isNaN(basicSalary / rate) ? 0 : parseFloat(basicSalary / rate);
  var basicEarningDollar = isNaN(earningSalary / rate) ? 0 : parseFloat(earningSalary / rate);
  var basicAdvancedDollar = isNaN(advancedSalary / rate) ? 0 : parseFloat(advancedSalary / rate);
  var basicTransportDollar = isNaN(basicTransport / rate) ? 0 : parseFloat(basicTransport / rate);
  var basicTransportEarningDollar = isNaN(transportEarning / rate) ? 0 : parseFloat(transportEarning / rate);
  var basicTransportDeductionDollar = isNaN(transportDeduction / rate) ? 0 : parseFloat(transportDeduction / rate);
  var basicFoodDollar = isNaN(foodBasic / rate) ? 0 : parseFloat(foodBasic / rate);
  var basicFoodEarningDollar = isNaN(foodEarning / rate) ? 0 : parseFloat(foodEarning / rate);
  var basicFoodDeductionDollar = isNaN(foodDeduction / rate) ? 0 : parseFloat(foodDeduction / rate);
  var basicBounceDollar = isNaN(bounceAllowances / rate) ? 0 : parseFloat(bounceAllowances / rate);
  var basicBounceEarningDollar = isNaN(bounceAllowancesEarning / rate) ? 0 : parseFloat(bounceAllowancesEarning / rate);
  var basicLoanDeductionDollar = isNaN(loan / rate) ? 0 : parseFloat(loan / rate);
  var basicOtherDollar = isNaN(other / rate) ? 0 : parseFloat(other / rate);
  var basicOtherEarningDollar = isNaN(otherEarning / rate) ? 0 : parseFloat(otherEarning / rate);
  var basicItemDeductionDollar = isNaN(itemLost / rate) ? 0 : parseFloat(itemLost / rate);
  var TotalBasicDollar = isNaN(totalActualSalary / rate) ? 0 : parseFloat(totalActualSalary / rate);
  var TotalEarningDollar = isNaN(totalActualEarning / rate) ? 0 : parseFloat(totalActualEarning / rate);
  var TotalDEductionDollar = isNaN(totalActualDeduction / rate) ? 0 : parseFloat(totalActualDeduction / rate);
  var TotalBonusDollar = isNaN(bonus / rate) ? 0 : parseFloat(bonus / rate);
  var TotalPAidDollar = isNaN(totalPaid / rate) ? 0 : parseFloat(totalPaid / rate);
  {/** loading Start */}
  var _useState79 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState80 = _slicedToArray(_useState79, 2),
    loading = _useState80[0],
    setLoading = _useState80[1];
  var _useState81 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState82 = _slicedToArray(_useState81, 2),
    loadingOpenModal = _useState82[0],
    setLoadingOpenModal = _useState82[1];
  var _useState83 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState84 = _slicedToArray(_useState83, 2),
    loadingOpenModalUpdate = _useState84[0],
    setLoadingOpenModalUpdate = _useState84[1];
  var _useState85 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState86 = _slicedToArray(_useState85, 2),
    ErrorOpenModal = _useState86[0],
    setErrorOpenModal = _useState86[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleOpenUpdate = () => {
    setLoadingOpenModalUpdate(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleError = msg => {
    setServerErrorMsg(msg || "");
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
    setPayNumber(prev => (prev || 0) + 1); // Increment pay number for next
    setPayDate(new Date());
    setEmployeeId('');
    setDaysW(0);
    // setDaysOpen(0); // Keep daysOpen as it usually stays the same for the month
    // setLops(0); // Keep Lops as it usually stays the same for the month
    setEmployeeName({
      id: '',
      name: ''
    });
    setEmployeeRole('');
    setEmployeeDepartment('');
    setEmployeePhone('');
    setBankName('');
    setBankNo('');
    setBasicSalary(0);
    setEarningSalary(0);
    setAdvancedSalary(0);
    setBasicTransport(0);
    setTransportEarning(0);
    setTransportDeduction(0);
    setFoodBasic(0);
    setFoodEarning(0);
    setItemLost(0);
    setFoodDeduction(0);
    setBounceAllowances(0);
    setBounceAllowancesEarning(0);
    setOther(0);
    setOtherEarning(0);
    setLoan(0);
    setBonus(0);
    setFactoryEarned(0);
    setFactoryDamage(0);
    setSaving('');
    // fetchData(); // fetchData doesn't seem to exist in this scope, removed
  };
  var handleCloseUpdate = () => {
    setLoadingOpenModalUpdate(false);
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
  {/** loading End */}
  var relatedMonth = employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY') && weekFrom && weekTo ? "".concat(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).format('DD/MM/YY'), " to ").concat(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).format('DD/MM/YY')) : dayjs__WEBPACK_IMPORTED_MODULE_35___default()(month).format('MMMM/YYYY');
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created PAYROLL ',
        reason: relatedMonth + ' PaySlip For ' + employeeName.name + ' / PR-' + String(ReferenceInfoNumber).padStart(6, '0'),
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/create-notification"), data);
      } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_29__/* .toast */ .oR.error('Error creating notification.');
      }
    });
    return function handleCreateNotification(_x, _x2) {
      return _ref1.apply(this, arguments);
    };
  }();
  var _useState87 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState88 = _slicedToArray(_useState87, 2),
    saving = _useState88[0],
    setSaving = _useState88[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      if (employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY')) {
        if (!weekFrom || !weekTo) {
          alert("Please select the Work Period (From/To) for this Factory employee.");
          setSaving('');
          return;
        }

        // Check for overlapping periods
        try {
          var _resPayrolls$data;
          var resPayrolls = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/payRoll"));
          var existingPayrolls = (_resPayrolls$data = resPayrolls.data) === null || _resPayrolls$data === void 0 || (_resPayrolls$data = _resPayrolls$data.data) === null || _resPayrolls$data === void 0 ? void 0 : _resPayrolls$data.filter(p => p.employeeName.id === employeeName.id);
          var newFrom = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom);
          var newTo = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo);
          var overlap = existingPayrolls.find(p => {
            if (!p.weekFrom || !p.weekTo) return false;
            var exFrom = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(p.weekFrom);
            var exTo = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(p.weekTo);

            // Overlap logic: (StartA <= EndB) and (EndA >= StartB)
            return (newFrom.isSame(exTo) || newFrom.isBefore(exTo)) && (newTo.isSame(exFrom) || newTo.isAfter(exFrom));
          });
          if (overlap) {
            alert("This employee has already been paid for the period: ".concat(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(overlap.weekFrom).format('DD/MM/YYYY'), " to ").concat(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(overlap.weekTo).format('DD/MM/YYYY'), ". Please choose a different range."));
            setSaving('');
            return;
          }
        } catch (err) {
          react_toastify__WEBPACK_IMPORTED_MODULE_29__/* .toast */ .oR.error('Error checking for overlapping payroll periods.');
        }
      }
      var status = '';
      if (parseInt(amountPayUSD) === 0 && parseInt(amountPayFC) === 0) {
        status = 'UnPaid';
      } else if (parseInt(CreditFC) === 0 && parseInt(CreditUSD) === 0) {
        status = 'Paid';
      } else {
        status = 'Partially-Paid';
      }
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A)(),
        payNumber,
        payDate,
        month,
        daysW,
        status,
        daysOpen,
        Lops,
        basicSalary,
        earningSalary,
        advancedSalary,
        basicTransport,
        transportEarning,
        transportDeduction,
        foodBasic,
        foodEarning,
        itemLost,
        foodDeduction,
        bounceAllowances,
        bounceAllowancesEarning,
        other,
        otherEarning,
        loan,
        bonus,
        totalActualSalary,
        totalActualEarning,
        totalActualDeduction,
        totalNet,
        totalPaid,
        rate,
        totalPaidDollars,
        words,
        employeeName,
        amountPayUSD,
        amountPayFC,
        CreditFC,
        CreditUSD,
        synced: false,
        // Metadata
        factoryEarned,
        factoryDamage,
        weekFrom: weekFrom && dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).isValid() ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).format('YYYY-MM-DD') : null,
        weekTo: weekTo && dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).isValid() ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).format('YYYY-MM-DD') : null
      };
      try {
        var finalMonth = employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY') && weekFrom ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).toISOString() : month;
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__/* .ENDPOINT_URL */ .m, "/create-payRoll"), {
          payNumber,
          payDate,
          month: finalMonth,
          daysW,
          status,
          daysOpen,
          Lops,
          basicSalary,
          earningSalary,
          advancedSalary,
          basicTransport,
          transportEarning,
          transportDeduction,
          foodBasic,
          foodEarning,
          itemLost,
          foodDeduction,
          bounceAllowances,
          bounceAllowancesEarning,
          other,
          otherEarning,
          loan,
          bonus,
          totalActualSalary,
          totalActualEarning,
          totalActualDeduction,
          totalNet,
          totalPaid,
          rate,
          totalPaidDollars,
          words,
          employeeName,
          amountPayUSD,
          amountPayFC,
          CreditFC,
          CreditUSD,
          employeeDepartment,
          // Explicitly send department for server logic
          // FACTORY METADATA
          factoryEarned,
          factoryDamage,
          weekFrom: weekFrom && dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).isValid() ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).format('YYYY-MM-DD') : null,
          weekTo: weekTo && dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).isValid() ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).format('YYYY-MM-DD') : null
        });
        if (res) {
          // Open Loading View
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.payNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
          handleOpen();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          var msg = error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message;
          handleError(msg);
        }
      }
    });
    return function handleSubmit(_x3) {
      return _ref10.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Make new Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_32__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_33__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_31__/* .DemoContainer */ .j, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_34__/* .DatePicker */ .l, {
    required: true,
    name: "payDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_35___default()(payDate),
    onChange: date => setPayDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_32__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_33__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_31__/* .DemoContainer */ .j, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_34__/* .DatePicker */ .l, {
    required: true,
    name: "month",
    label: "Month of Payment",
    value: dayjs__WEBPACK_IMPORTED_MODULE_35___default()(month),
    views: ['month', 'year'],
    onChange: date => setMonth(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    disableClearable: true,
    options: employee,
    getOptionLabel: option => option.employeeName || "",
    value: employee.find(e => e._id === employeeName.id) || null,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, props, option.employeeName),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, _extends({}, params, {
      label: "Employee Name",
      required: true
    })),
    onChange: (e, newValue) => handleChange(newValue ? newValue : ''),
    size: "small",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_32__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_33__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_34__/* .DatePicker */ .l, {
    label: "Pay Period \u2014 From",
    value: weekFrom ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom) : null,
    onChange: newValue => setWeekFrom(newValue && newValue.isValid() ? newValue.format('YYYY-MM-DD') : null),
    format: "DD/MM/YYYY",
    slotProps: {
      textField: {
        fullWidth: true,
        helperText: "Start date of this factory pay week"
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_32__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_33__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_34__/* .DatePicker */ .l, {
    label: "Pay Period \u2014 To",
    value: weekTo ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo) : null,
    onChange: newValue => setWeekTo(newValue && newValue.isValid() ? newValue.format('YYYY-MM-DD') : null),
    format: "DD/MM/YYYY",
    slotProps: {
      textField: {
        fullWidth: true,
        helperText: "End date of this factory pay week"
      }
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sx: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "secondTable",
    style: {
      width: '100%',
      maxWidth: '950px',
      margin: '0 auto',
      fontSize: '14px',
      marginBottom: '0px',
      border: '1px solid #DDD',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    colSpan: 5,
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      backgroundColor: '#316FF6',
      color: 'white'
    }
  }, "Global Gate")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    colSpan: 5
  }, weekFrom && weekTo ? "Salary Slip for Period: ".concat(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).format('DD/MM/YYYY'), " to ").concat(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).format('DD/MM/YYYY')) : "Salary Slip for the month Of: ".concat(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(month).format('MMMM-YYYY'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Employee Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, employeeName.name ? employeeName.name : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Total Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    size: "small",
    id: "daysOpen",
    name: "daysOpen",
    value: daysOpen,
    onChange: e => setDaysOpen(e.target.value),
    style: {
      width: '100px',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Employee Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, employeePhone ? employeePhone : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "LOPs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    size: "small",
    id: "Lops",
    name: "Lops",
    value: Lops,
    onChange: e => setLops(e.target.value),
    style: {
      width: '100px',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Employee Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, employeeId ? employeeId : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Paid Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    size: "small",
    required: true,
    id: "daysW",
    name: "daysW",
    value: daysW !== 0 ? daysW : '',
    onChange: e => setDaysW(e.target.value),
    style: {
      width: '100px',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Grade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, employeeRole ? employeeRole : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Bank Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, bankName !== undefined ? bankName : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, dayjs__WEBPACK_IMPORTED_MODULE_35___default()(payDate).format('DD-MMMM-YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "A/C No."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, bankNo !== undefined ? bankNo : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '400px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, "Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '400px',
      border: '1px solid #DDD'
    },
    colSpan: 3
  }, employeeDepartment ? employeeDepartment : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Earning (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Actual Salary (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Earnings (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    colSpan: 2
  }, "Deductions (FC)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, "Basic wage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", basicSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicSalaryDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", earningSalary ? earningSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, "In advanced allowances "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", advancedSalary !== undefined ? advancedSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicAdvancedDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, "Transport allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", basicTransport.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicTransportDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", transportEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicTransportEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, "Transport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", transportDeduction !== undefined ? transportDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicTransportDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, "Food allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", foodBasic.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicFoodDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", foodEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicFoodEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, "Food"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", foodDeduction !== undefined ? foodDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicFoodDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, "Bounce allowances 3%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", bounceAllowances.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicBounceDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", bounceAllowancesEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicBounceEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, "Loan recovery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", loan !== undefined ? loan.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicLoanDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, "Other"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", other.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicOtherDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", otherEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicOtherEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, "Item lost recovery / Deduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", itemLost !== undefined ? itemLost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", basicItemDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, "Factory Pot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", factoryEarned.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", (isNaN(factoryEarned / rate) ? 0 : parseFloat(factoryEarned / rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", factoryEarned.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", (isNaN(factoryEarned / rate) ? 0 : parseFloat(factoryEarned / rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, "Damage Penalty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "FC ", factoryDamage !== undefined ? factoryDamage.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "$ ", (isNaN(factoryDamage / rate) ? 0 : parseFloat(factoryDamage / rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "secondTable",
    style: {
      width: '100%',
      maxWidth: '950px',
      margin: '0 auto',
      fontSize: '14px',
      marginBottom: '5px',
      border: '1px solid #DDD',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    },
    colSpan: 6
  }, "Total(FC)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      borderBottom: 'none'
    },
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Basic:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " Fc ", totalActualSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      borderBottom: 'none'
    },
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Earning:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " Fc ", totalActualEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      borderBottom: 'none'
    },
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Deduction:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " Fc ", totalActualDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      borderTop: 'none'
    },
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Basic:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " $ ", TotalBasicDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      borderTop: 'none'
    },
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Earning:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " $ ", TotalEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      borderTop: 'none'
    },
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Deduction:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " $ ", TotalDEductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, "Net payable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    },
    colSpan: 4
  }, "FC ", totalNet.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", totalPaidDollars.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, "Total Deduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 4
  }, "FC ", totalActualDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", TotalDEductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, "Overtime & Bonus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 4
  }, "FC ", bonus.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", TotalBonusDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, "Total Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 4
  }, "FC ", totalPaid.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", TotalPAidDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    },
    colSpan: 6
  }, "Total net")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "Net payable(FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, "FC ", totalNet.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    required: true,
    size: "small",
    id: "rate",
    value: rate !== 0 ? rate : '',
    placeholder: "Rate",
    onChange: e => setRate(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "Net payable($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "$ ", totalPaidDollars.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "Amount Paid(FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    size: "small",
    placeholder: "Paying Amount FC",
    name: "amountPayFC",
    onChange: e => setAmountPayFC(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    required: true,
    size: "small",
    id: "rate",
    value: rate !== 0 ? rate : '',
    placeholder: "Rate",
    onChange: e => setRate(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "Amount Paid($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    size: "small",
    name: "amountPayUSD",
    placeholder: "Paying Amount USD",
    onChange: e => setAmountPayUSD(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "Credit(FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, "FC ", CreditFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    required: true,
    size: "small",
    id: "rate",
    value: rate !== 0 ? rate : '',
    placeholder: "Rate",
    onChange: e => setRate(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "Credit($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "$ ", CreditUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    colSpan: 1
  }, "Net Words"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 5
  }, words, " Franc Congolais."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
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
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    open: open1,
    onClose: handleCloseBack,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, "Do you want to stop creating Invoice ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost")), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    onClick: () => navigate('/PayRollViewAdmin'),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    onClick: handleCloseBack,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A, {
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
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    style: {
      color: 'red'
    }
  }, "Saving Failed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      color: '#666',
      marginBottom: '20px'
    }
  }, serverErrorMsg || "Something went wrong. Please check your connection and try again."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayRollFormView);
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

/***/ 15381
(module, exports) {

/*!
 * Number-To-Words util
 * @version v1.2.4
 * @link https://github.com/marlun78/number-to-words
 * @author Martin Eneqvist (https://github.com/marlun78)
 * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)
 * @license MIT
 */
!function(){"use strict";var e="object"==typeof self&&self.self===self&&self||"object"==typeof globalThis&&globalThis.global===globalThis&&globalThis||this,t=9007199254740991;function f(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function l(e){return"number"==typeof e&&Math.abs(e)<=t}var n=/(hundred|thousand|(m|b|tr|quadr)illion)$/,r=/teen$/,o=/y$/,i=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,s={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function h(e){return n.test(e)||r.test(e)?e+"th":o.test(e)?e.replace(o,"ieth"):i.test(e)?e.replace(i,a):e}function a(e,t){return s[t]}var u=10,d=100,p=1e3,v=1e6,b=1e9,y=1e12,c=1e15,g=9007199254740992,m=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],w=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function x(e,t){var n,r=parseInt(e,10);if(!f(r))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(r))throw new RangeError("Input is not a safe number, it’s either too large or too small.");return n=function e(t){var n,r,o=arguments[1];if(0===t)return o?o.join(" ").replace(/,$/,""):"zero";o||(o=[]);t<0&&(o.push("minus"),t=Math.abs(t));t<20?(n=0,r=m[t]):t<d?(n=t%u,r=w[Math.floor(t/u)],n&&(r+="-"+m[n],n=0)):t<p?(n=t%d,r=e(Math.floor(t/d))+" hundred"):t<v?(n=t%p,r=e(Math.floor(t/p))+" thousand,"):t<b?(n=t%v,r=e(Math.floor(t/v))+" million,"):t<y?(n=t%b,r=e(Math.floor(t/b))+" billion,"):t<c?(n=t%y,r=e(Math.floor(t/y))+" trillion,"):t<=g&&(n=t%c,r=e(Math.floor(t/c))+" quadrillion,");o.push(r);return e(n,o)}(r),t?h(n):n}var M={toOrdinal:function(e){var t=parseInt(e,10);if(!f(t))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(t))throw new RangeError("Input is not a safe number, it’s either too large or too small.");var n=String(t),r=Math.abs(t%100),o=11<=r&&r<=13,i=n.charAt(n.length-1);return n+(o?"th":"1"===i?"st":"2"===i?"nd":"3"===i?"rd":"th")},toWords:x,toWordsOrdinal:function(e){return h(x(e))}}; true?( true&&module.exports&&(exports=module.exports=M),exports.numberToWords=M):0}();

/***/ },

/***/ 33829
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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