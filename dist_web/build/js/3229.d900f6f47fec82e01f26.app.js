"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[3229],{

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

/***/ 3229
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _component_SideMaintenance2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44954);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68525);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55746);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71543);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69307);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29428);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(68864);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(53215);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(86531);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(25239);
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
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(92659);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(32005);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(82299);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(65821);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(40301);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(33829);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(39781);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(95236);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(3100);
/* harmony import */ var _utils_isMobile__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(2650);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(14977);
var _excluded = ["className"],
  _excluded2 = ["children"];
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

































var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Ay)(_ref => {
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
})(_ref3 => {
  var theme = _ref3.theme,
    open = _ref3.open;
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
})(_ref4 => {
  var theme = _ref4.theme,
    open = _ref4.open;
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


function ItemForm() {
  var isMobile = (0,_utils_isMobile__WEBPACK_IMPORTED_MODULE_50__/* .useIsMobile */ .al)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_39__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_39__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__/* .setUser */ .gV)({
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
        return _ref5.apply(this, arguments);
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
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState40 = _slicedToArray(_useState39, 2),
    message = _useState40[0],
    setMessage = _useState40[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetchInitialData = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* () {
        try {
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/itemUnit")), axios__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/itemCode"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2),
            resItemUnit = _yield$Promise$all2[0],
            resCode = _yield$Promise$all2[1];
          setUnitInfo(resItemUnit.data.data || []);
          setItemCode(resCode.data.data || []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetchInitialData() {
        return _ref6.apply(this, arguments);
      };
    }();
    handleFetchInitialData();
  }, []);
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState42 = _slicedToArray(_useState41, 2),
    newCode = _useState42[0],
    setNewCode = _useState42[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    itemCode.filter(row => row.itemCategory === itemCategory).map(row => setNewCode(row.itemCode));
  }, [itemCategory]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (newCode) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/get-last-saved-item/").concat(newCode));
            setItemNumber(res.data.itemUpc.itemNumber + 1);
          } catch (error) {
            console.error('Error fetching data:', error);
            setItemNumber(1);
          }
        }
      });
      return function fetchNumber() {
        return _ref7.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [newCode]);
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    openAutocomplete2 = _useState44[0],
    setOpenAutocomplete2 = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    modalOpenLoading = _useState46[0],
    setModalOpenLoading = _useState46[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
    setModalOpenLoading(false);
  };
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    openBack = _useState48[0],
    setOpenBack = _useState48[1];
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
    window.location.reload(); // REMOVED: Full reload
    // Reset form or navigate as needed
    if (typeof setItemName === 'function') {
      setItemName("");
      setItemNumber(prev => prev + 1);
      // Reset other fields if necessary or just let the user add another
    }
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
    var _ref8 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        itemUnit
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/create-itemUnit"), data);
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
      return _ref8.apply(this, arguments);
    };
  }();
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoCode, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: ReferenceInfoCode + '-' + ReferenceInfoNumber + ' / ' + itemName,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2, _x3, _x4) {
      return _ref9.apply(this, arguments);
    };
  }();
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState50 = _slicedToArray(_useState49, 2),
    saving = _useState50[0],
    setSaving = _useState50[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .A)(),
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
        var res = yield axios__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/create-item"), data);
        if (res) {
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoCode = res.data.data.itemUpc.newCode;
          var ReferenceInfoNumber = res.data.data.itemUpc.itemNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoCode, ReferenceInfoNumber);
          // await db.itemSchema.add({ ...res.data.data, _id: res.data.data._id, synced: true })
          handleOpen();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x5) {
      return _ref0.apply(this, arguments);
    };
  }();
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__/* .logOut */ .je)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  if (isMobile) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      sx: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#F8FAFC',
        pb: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      sx: {
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#30368a',
        color: '#ffffff',
        px: 2,
        py: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      onClick: () => navigate(-1),
      sx: {
        color: '#ffffff',
        p: 0.5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      variant: "subtitle1",
      sx: {
        fontWeight: 800,
        lineHeight: 1.2,
        color: '#ffffff'
      }
    }, "New Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      variant: "caption",
      sx: {
        color: '#E0E7FF'
      }
    }, itemName || 'Add Inventory Item'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, {
      variant: "contained",
      size: "small",
      onClick: handleSubmit,
      disabled: loading || saving === 'true',
      sx: {
        backgroundColor: '#10B981',
        color: '#ffffff',
        fontWeight: 700,
        textTransform: 'none',
        borderRadius: 2,
        px: 2,
        '&:hover': {
          backgroundColor: '#059669'
        }
      }
    }, saving === 'true' ? 'Saving...' : 'Save')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      sx: {
        p: 2
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .A, {
      sx: {
        borderRadius: 3.5,
        p: 2.5,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase',
        mb: 1.5,
        display: 'block'
      }
    }, "Item Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
      container: true,
      spacing: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      fullWidth: true,
      required: true,
      size: "small",
      label: "Item Name *",
      value: itemName,
      onChange: e => setItemName(e.target.value)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      value: itemCategory || '',
      label: "Category",
      onChange: e => setItemCategory(e.target.value)
    }, itemCode.map(c => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      key: c._id || c.itemCategory,
      value: c.itemCategory
    }, c.itemCategory))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Item Code / Suffix",
      value: newCode ? "".concat(newCode, "-").concat(itemNumber) : '',
      InputProps: {
        readOnly: true
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Brand",
      value: itemBrand,
      onChange: e => setItemBrand(e.target.value)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Manufacturer",
      value: itemManufacturer,
      onChange: e => setItemManufacturer(e.target.value)
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .A, {
      sx: {
        borderRadius: 3.5,
        p: 2.5,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase',
        mb: 1.5,
        display: 'block'
      }
    }, "Pricing & Stock"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
      container: true,
      spacing: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Cost Price ($)",
      type: "number",
      value: itemCostPrice || '',
      onChange: e => setItemCostPrice(Number(e.target.value))
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Selling Price ($)",
      type: "number",
      value: itemSellingPrice || '',
      onChange: e => setItemSellingPrice(Number(e.target.value))
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Initial Stock Qty",
      type: "number",
      value: itemQuantity || '',
      onChange: e => setItemQuantity(Number(e.target.value))
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null, "Unit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      value: (unit === null || unit === void 0 ? void 0 : unit.itemUnit) || '',
      label: "Unit",
      onChange: e => {
        var sel = unitInfo.find(u => u.itemUnit === e.target.value);
        setUnit(sel || {
          itemUnit: e.target.value
        });
      }
    }, unitInfo.map(u => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      key: u._id || u.itemUnit,
      value: u.itemUnit
    }, u.itemUnit))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      fullWidth: true,
      multiline: true,
      rows: 3,
      size: "small",
      label: "Description / Specifications",
      value: itemDescription,
      onChange: e => setItemDescription(e.target.value)
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, {
      fullWidth: true,
      variant: "contained",
      size: "large",
      onClick: handleSubmit,
      disabled: loading || saving === 'true',
      sx: {
        backgroundColor: '#30368a',
        color: '#ffffff',
        fontWeight: 800,
        py: 1.5,
        borderRadius: 3,
        boxShadow: '0 4px 14px rgba(48, 54, 138, 0.3)',
        textTransform: 'none',
        fontSize: '1rem',
        '&:hover': {
          backgroundColor: '#202a5a'
        }
      }
    }, saving === 'true' ? 'Saving Item...' : 'Save Item')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
      open: loadingOpenModal,
      onClose: handleClose
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      sx: _objectSpread(_objectSpread({}, style), {}, {
        width: '90%',
        maxWidth: 400,
        borderRadius: 4,
        textAlign: 'center',
        p: 3
      })
    }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A, {
      sx: {
        color: 'green',
        fontSize: 48,
        mb: 1
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      variant: "h6",
      sx: {
        fontWeight: 800
      }
    }, "Item Saved Successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, {
      fullWidth: true,
      variant: "contained",
      onClick: () => navigate('/ItemViewAdmin'),
      sx: {
        mt: 2,
        backgroundColor: '#30368a',
        borderRadius: 2
      }
    }, "Go to Store & Items")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
      open: ErrorOpenModal,
      onClose: handleCloseError
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      sx: _objectSpread(_objectSpread({}, style), {}, {
        width: '90%',
        maxWidth: 400,
        borderRadius: 4,
        textAlign: 'center',
        p: 3
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, {
      sx: {
        color: 'red',
        fontSize: 48,
        mb: 1
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      variant: "h6",
      sx: {
        fontWeight: 800
      }
    }, "Error Occurred"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      variant: "body2",
      sx: {
        color: '#64748B',
        mt: 1
      }
    }, "Please check required fields."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, {
      fullWidth: true,
      variant: "outlined",
      onClick: handleCloseError,
      sx: {
        mt: 2,
        borderRadius: 2
      }
    }, "Close"))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Add new Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .A, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SideMaintenance2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '20px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    required: true,
    row: true,
    name: "typeItem",
    value: typeItem,
    onChange: e => setTypeItem(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    value: "Goods",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, null),
    label: "Goods"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    value: "Services",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, null),
    label: "Services"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, typeItem))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    id: "itemBrand",
    name: "itemBrand",
    value: itemBrand,
    label: "Brand",
    onChange: e => setItemBrand(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    id: "unit",
    options: unitInfo,
    getOptionLabel: Option => Option.itemUnit.toUpperCase(),
    onChange: (e, newValue) => setUnit(newValue),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    PaperComponent: _ref1 => {
      var children = _ref1.children,
        other = _objectWithoutProperties(_ref1, _excluded2);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, _extends({}, other, {
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
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, _extends({}, params, {
      label: "Unit",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    htmlFor: "itemDimension"
  }, "Dimension"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    id: "itemDimension",
    name: "itemDimension",
    value: itemDimension,
    type: "number",
    label: "Dimension",
    onChange: e => setItemDimension(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
      position: "start"
    }, "M")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    htmlFor: "itemWeight"
  }, "Weight"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    id: "itemWeight",
    name: "itemWeight",
    value: itemWeight,
    type: "number",
    label: "Weight",
    onChange: e => setItemWeight(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
      position: "start"
    }, "Kg")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    id: "unit"
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    required: true,
    id: "itemCategory",
    value: itemCategory,
    onChange: e => setItemCategory(e.target.value),
    name: "itemCategory",
    label: "Category"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "HA"
  }, "HA (HA)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "ELECTRICITY"
  }, "ELECTRICITY (EL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "SOLAR SYSTEM"
  }, "SOLAR SYSTEM (SS)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "IT"
  }, "IT (IT)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "PLUMBING"
  }, "PLUMBING (PL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "ELECTRONIC"
  }, "ELECTRONIC (ELN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "FENCE ELECTRIC"
  }, "FENCE ELECTRIC (FE)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "ACCESSORY"
  }, "ACCESSORY (ACC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "WELDING"
  }, "WELDING (WLN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "GENERATOR"
  }, "GENERATOR (GA)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "TOOLS"
  }, "TOOLS (TL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "CONSTRUCTION"
  }, "CONSTRUCTION (CTN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "OTHERS"
  }, "OTHERS (OT)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    htmlFor: "itemNumber"
  }, "Item Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    required: true,
    type: "number",
    id: "itemNumber",
    value: String(itemNumber).padStart(6, '0'),
    onChange: e => setItemNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
      position: "start"
    }, newCode, "-"),
    label: "Item Number"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    id: "itemStore",
    name: "itemStore",
    value: itemStore,
    label: "Store Name",
    onChange: e => setItemStore(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    id: "itemManufacturer",
    name: "itemManufacturer",
    value: itemManufacturer,
    label: "Manufacturer",
    onChange: e => setItemManufacturer(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    htmlFor: "itemCostPrice"
  }, "Cost Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    id: "itemCostPrice",
    name: "itemCostPrice",
    label: "Cost Unit Price",
    onChange: e => setItemCostPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    htmlFor: "itemSellingPrice"
  }, "Selling Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    id: "itemSellingPrice",
    name: "itemSellingPrice",
    label: "Selling Unit Price",
    onChange: e => setItemSellingPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    id: "stockOnHand",
    name: "stockOnHand",
    value: stockOnHand,
    label: "Stock Hand",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
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
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
    open: openBack,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, "Do you want to stop creating Item ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    onClick: () => navigate('/ItemViewAdmin'),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
    open: openAutocomplete2,
    onClose: handleCloseOpenAutocomplete2,
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
    onClick: handleCloseOpenAutocomplete2,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Create Unit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmitCategory
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    id: "itemUnit",
    name: "itemUnit",
    value: itemUnit,
    label: "Unit",
    onChange: e => setItemUnit(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
    open: modalOpenLoading,
    onClose: handleCloseOpenAutocomplete2,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemForm);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 44954
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _css_SidebarNew_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15419);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47767);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45395);
/* harmony import */ var _mui_icons_material_Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10420);
/* harmony import */ var _mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60450);
/* harmony import */ var _mui_icons_material_PostAdd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312);
/* harmony import */ var _mui_icons_material_ContentPasteGo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20807);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37211);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57873);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82241);














function SideMaintenance2() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    primary: "Item"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ContentPasteGo__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    primary: "Item Out"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_PostAdd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    primary: "Item Return"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Store__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    primary: "Item Purchase"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    primary: "Purchase Order"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .Outlet */ .sv, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideMaintenance2);
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