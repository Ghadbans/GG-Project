"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[1096],{

/***/ 2775
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
  d: "m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"
}), 'AutoAwesome');

/***/ },

/***/ 29719
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(25669);
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
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(25669);
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

/***/ 51096
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73068);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _component_SideMaintenance2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44954);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68525);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55746);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68864);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27558);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71543);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(69307);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(29428);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(53215);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(86531);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(25239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(11848);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(71510);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(58331);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(14519);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(97834);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(8451);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(47767);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(92659);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(32005);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(65821);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(82299);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(40301);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(17809);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(29719);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(83818);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(95236);
/* harmony import */ var _utils_isMobile__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(2650);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(14977);
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["children"];
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




































var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A.tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay, {
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
function ItemFormUpdate() {
  var isMobile = (0,_utils_isMobile__WEBPACK_IMPORTED_MODULE_52__/* .useIsMobile */ .al)();
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_39__/* .useParams */ .g)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_39__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_28__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__/* .setUser */ .gV)({
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    unitInfo = _useState2[0],
    setUnitInfo = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    unit1 = _useState4[0],
    setUnit1 = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    itemUnit = _useState6[0],
    setItemUnit = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    typeItem = _useState8[0],
    setTypeItem = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isUsed = _useState0[0],
    setIsUsed = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    itemName = _useState10[0],
    setItemName = _useState10[1];
  var handleToggleUsed = e => {
    var checked = e.target.checked;
    setIsUsed(checked);
    if (checked) {
      var clean = itemName.replace(/Ⓤ/g, '').trim();
      setItemName(clean ? "".concat(clean, " \u24CA") : 'Ⓤ');
    } else {
      setItemName(itemName.replace(/\s*Ⓤ\s*/g, ' ').trim());
    }
  };
  var handleItemNameChange = e => {
    var val = e.target.value;
    if (isUsed) {
      var clean = val.replace(/Ⓤ/g, '').replace(/\s+$/, '');
      if (clean.length > 0) {
        setItemName("".concat(clean, " \u24CA"));
      } else {
        setItemName('Ⓤ');
      }
    } else {
      setItemName(val);
    }
  };
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    itemStore = _useState12[0],
    setItemStore = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    unit = _useState14[0],
    setUnit = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    unit2 = _useState16[0],
    setUnit2 = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    itemDimension = _useState18[0],
    setItemDimension = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    itemWeight = _useState20[0],
    setItemWeight = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    itemBox = _useState22[0],
    setItemBox = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    itemCategory = _useState24[0],
    setItemCategory = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    itemCategory1 = _useState26[0],
    setItemCategory1 = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    itemNumber = _useState28[0],
    setItemNumber = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    itemNumber1 = _useState30[0],
    setItemNumber1 = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    itemBrand = _useState32[0],
    setItemBrand = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState34 = _slicedToArray(_useState33, 2),
    itemManufacturer = _useState34[0],
    setItemManufacturer = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    itemCostPrice = _useState36[0],
    setItemCostPrice = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState38 = _slicedToArray(_useState37, 2),
    itemSellingPrice = _useState38[0],
    setItemSellingPrice = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState40 = _slicedToArray(_useState39, 2),
    itemDescription = _useState40[0],
    setItemDescription = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState42 = _slicedToArray(_useState41, 2),
    qtyBuy = _useState42[0],
    setQtyBuy = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState44 = _slicedToArray(_useState43, 2),
    itemQuantity = _useState44[0],
    setItemQuantity = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState46 = _slicedToArray(_useState45, 2),
    stockOnHand = _useState46[0],
    setStockOnHand = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState48 = _slicedToArray(_useState47, 2),
    newCode = _useState48[0],
    setNewCode = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState50 = _slicedToArray(_useState49, 2),
    indexId = _useState50[0],
    setIndexID = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState52 = _slicedToArray(_useState51, 2),
    newCode1 = _useState52[0],
    setNewCode1 = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState54 = _slicedToArray(_useState53, 2),
    reason = _useState54[0],
    setReason = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState56 = _slicedToArray(_useState55, 2),
    itemCode = _useState56[0],
    setItemCode = _useState56[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var handleFetchInitialData = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_28__/* .ENDPOINT_URL */ .m, "/itemUnit")), axios__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_28__/* .ENDPOINT_URL */ .m, "/itemCode")), axios__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_28__/* .ENDPOINT_URL */ .m, "/get-item/").concat(id))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3),
            resItemUnit = _yield$Promise$all2[0],
            resCode = _yield$Promise$all2[1],
            resSingleItem = _yield$Promise$all2[2];
          setUnitInfo(resItemUnit.data.data || []);
          setItemCode(resCode.data.data || []);
          var itemData = resSingleItem.data.data;
          if (itemData) {
            setTypeItem(itemData.typeItem || "");
            var itName = itemData.itemName || "";
            setItemName(itName);
            setIsUsed(Boolean(itemData.isUsed || itName.includes('Ⓤ') || itemData.condition === 'Used'));
            setItemStore(itemData.itemStore || "");
            setUnit(itemData.unit || "");
            setUnit2(itemData.unit || "");
            setItemDimension(itemData.itemDimension || "");
            setItemWeight(itemData.itemWeight || "");
            setItemBox(itemData.itemBox || "");
            setItemCategory(itemData.itemCategory || "");
            setItemCategory1(itemData.itemCategory || "");
            if (itemData.itemUpc) {
              setItemNumber(itemData.itemUpc.itemNumber || 0);
              setItemNumber1(itemData.itemUpc.itemNumber || 0);
              setNewCode(itemData.itemUpc.newCode || "");
              setNewCode1(itemData.itemUpc.newCode || "");
            }
            setItemBrand(itemData.itemBrand || "");
            setItemManufacturer(itemData.itemManufacturer || "");
            setItemCostPrice(itemData.itemCostPrice || 0);
            setItemSellingPrice(itemData.itemSellingPrice || 0);
            setItemDescription(itemData.itemDescription || "");
            setItemQuantity(itemData.itemQuantity || 0);
            setStockOnHand(itemData.stockOnHand || 0);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetchInitialData() {
        return _ref8.apply(this, arguments);
      };
    }();
    handleFetchInitialData();
  }, [id]);
  // Merged with initial fetch above.
  var total = Number(itemQuantity) + Number(qtyBuy);
  var total1 = Number(stockOnHand) + Number(qtyBuy);
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    open1 = _useState58[0],
    setOpen1 = _useState58[1];
  var handleOpenUpdate = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
  };
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState60 = _slicedToArray(_useState59, 2),
    openAutocomplete2 = _useState60[0],
    setOpenAutocomplete2 = _useState60[1];
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState62 = _slicedToArray(_useState61, 2),
    modalOpenLoading = _useState62[0],
    setModalOpenLoading = _useState62[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
    setModalOpenLoading(false);
  };
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState64 = _slicedToArray(_useState63, 2),
    openBack = _useState64[0],
    setOpenBack = _useState64[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    itemCode.filter(row => row.itemCategory === itemCategory).map(row => setNewCode(row.itemCode));
  }, [itemCategory]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (newCode !== newCode1) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_28__/* .ENDPOINT_URL */ .m, "/get-last-saved-item/").concat(newCode));
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
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    loading = _useState66[0],
    setLoading = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    loadingOpenModal = _useState68[0],
    setLoadingOpenModal = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState70 = _slicedToArray(_useState69, 2),
    ErrorOpenModal = _useState70[0],
    setErrorOpenModal = _useState70[1];
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
    }, 1000);
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
    if ((0,_utils_isMobile__WEBPACK_IMPORTED_MODULE_52__/* .isNativeMobile */ .g1)()) {
      navigate('/ItemViewAdmin');
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/ItemViewAdmin');
    }
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
        var res = yield axios__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_28__/* .ENDPOINT_URL */ .m, "/create-itemUnit"), data);
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
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState72 = _slicedToArray(_useState71, 2),
    hideBack = _useState72[0],
    setHideBack = _useState72[1];
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
    _useState74 = _slicedToArray(_useState73, 2),
    numberInfo = _useState74[0],
    setNumberInfo = _useState74[1];
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (ReferenceInfoCode, ReferenceInfoNumber) {
      var data = {
        idInfo: id,
        person: user.data.userName + ' Modify ' + ReferenceInfoCode + '-' + ReferenceInfoNumber,
        reason,
        dateNotification: new Date()
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_28__/* .ENDPOINT_URL */ .m, "/create-notification/"), data);
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
      var finalItemName = itemName.trim();
      if (isUsed) {
        var clean = finalItemName.replace(/Ⓤ/g, '').trim();
        finalItemName = clean ? "".concat(clean, " \u24CA") : 'Ⓤ';
      }
      var itemIsUsed = isUsed || finalItemName.includes('Ⓤ');
      var data = {
        typeItem,
        itemName: finalItemName,
        itemStore,
        unit: unit1.itemUnit || unit,
        itemDimension,
        itemWeight,
        itemBox,
        itemManufacturer,
        itemCategory,
        updateS: false,
        itemBrand,
        itemCostPrice,
        itemUpc: {
          itemNumber,
          newCode
        },
        itemQuantity: total,
        itemSellingPrice,
        itemDescription,
        stockOnHand: total1,
        isUsed: itemIsUsed,
        condition: itemIsUsed ? 'Used' : 'New'
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_28__/* .ENDPOINT_URL */ .m, "/update-item/").concat(id), data);
        if (res) {
          var ReferenceInfoCode = res.data.data.itemUpc.newCode;
          var ReferenceInfoNumber = res.data.data.itemUpc.itemNumber;
          handleCreateComment(ReferenceInfoCode, ReferenceInfoNumber);
          handleOpen();
          // await db.itemSchema.update(indexId, { ...data, updateS: true })
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
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__/* .logOut */ .je)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  if (isMobile) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      sx: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#F8FAFC',
        pb: 'calc(90px + env(safe-area-inset-bottom, 0px))'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      sx: {
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#30368a',
        color: '#ffffff',
        px: 2,
        pt: 'calc(10px + env(safe-area-inset-top, 0px))',
        pb: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      onClick: () => navigate(-1),
      sx: {
        color: '#ffffff',
        p: 0.5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      variant: "subtitle1",
      sx: {
        fontWeight: 800,
        lineHeight: 1.2,
        color: '#ffffff'
      }
    }, "Edit Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      variant: "caption",
      sx: {
        color: '#E0E7FF'
      }
    }, itemName || 'Update Item'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .A, {
      variant: "contained",
      size: "small",
      onClick: handleSubmitEdit,
      disabled: loading,
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
    }, loading ? 'Saving...' : 'Save')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      sx: {
        p: 2
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_54__/* ["default"] */ .A, {
      sx: {
        borderRadius: 3.5,
        p: 2.5,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase',
        mb: 1.5,
        display: 'block'
      }
    }, "Item Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
      container: true,
      spacing: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
      item: true,
      xs: 12,
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
        size: "small",
        checked: isUsed,
        onChange: handleToggleUsed,
        sx: {
          color: '#e65100',
          '&.Mui-checked': {
            color: '#e65100'
          }
        }
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
        style: {
          fontWeight: 700,
          fontSize: '13px',
          color: isUsed ? '#e65100' : '#475569',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Used Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
        style: {
          backgroundColor: '#fff3e0',
          color: '#e65100',
          border: '1px solid #ffe0b2',
          borderRadius: '4px',
          padding: '0 4px',
          fontSize: '11px'
        }
      }, "\u24CA"))
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      fullWidth: true,
      required: true,
      size: "small",
      label: "Item Name *",
      value: itemName,
      onChange: handleItemNameChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      value: itemCategory || '',
      label: "Category",
      onChange: e => setItemCategory(e.target.value)
    }, itemCode.map(c => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
      key: c._id || c.itemCategory,
      value: c.itemCategory
    }, c.itemCategory))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Item Code / Suffix",
      value: newCode ? "".concat(newCode, "-").concat(itemNumber) : '',
      InputProps: {
        readOnly: true
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Brand",
      value: itemBrand,
      onChange: val => setItemBrand(val),
      mode: "upper"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Manufacturer",
      value: itemManufacturer,
      onChange: val => setItemManufacturer(val),
      mode: "upper"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_54__/* ["default"] */ .A, {
      sx: {
        borderRadius: 3.5,
        p: 2.5,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase',
        mb: 1.5,
        display: 'block'
      }
    }, "Pricing & Stock"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
      container: true,
      spacing: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Cost Price ($)",
      type: "number",
      value: itemCostPrice || '',
      onChange: e => setItemCostPrice(Number(e.target.value))
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Selling Price ($)",
      type: "number",
      value: itemSellingPrice || '',
      onChange: e => setItemSellingPrice(Number(e.target.value))
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Current Stock Qty",
      type: "number",
      value: itemQuantity || '',
      onChange: e => setItemQuantity(Number(e.target.value))
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, "Unit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      value: unit || '',
      label: "Unit",
      onChange: e => setUnit(e.target.value)
    }, unitInfo.map(u => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
      key: u._id || u.itemUnit,
      value: u.itemUnit
    }, u.itemUnit))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      fullWidth: true,
      multiline: true,
      rows: 3,
      size: "small",
      label: "Description / Specifications",
      value: itemDescription,
      onChange: e => setItemDescription(e.target.value)
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .A, {
      fullWidth: true,
      variant: "contained",
      size: "large",
      onClick: handleSubmitEdit,
      disabled: loading,
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
    }, loading ? 'Saving Changes...' : 'Save Changes')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
      open: loadingOpenModal,
      onClose: handleClose
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      sx: _objectSpread(_objectSpread({}, style), {}, {
        width: '90%',
        maxWidth: 400,
        borderRadius: 4,
        textAlign: 'center',
        p: 3
      })
    }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .A, {
      sx: {
        color: 'green',
        fontSize: 48,
        mb: 1
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      variant: "h6",
      sx: {
        fontWeight: 800
      }
    }, "Item Updated Successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .A, {
      fullWidth: true,
      variant: "contained",
      onClick: () => navigate('/ItemViewAdmin'),
      sx: {
        mt: 2,
        backgroundColor: '#30368a',
        borderRadius: 2
      }
    }, "Go to Store & Items")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
      open: ErrorOpenModal,
      onClose: handleCloseError
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      sx: _objectSpread(_objectSpread({}, style), {}, {
        width: '90%',
        maxWidth: 400,
        borderRadius: 4,
        textAlign: 'center',
        p: 3
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .A, {
      sx: {
        color: 'red',
        fontSize: 48,
        mb: 1
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      variant: "h6",
      sx: {
        fontWeight: 800
      }
    }, "Error Occurred"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      variant: "body2",
      sx: {
        color: '#64748B',
        mt: 1
      }
    }, "Please check required fields."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .A, {
      fullWidth: true,
      variant: "outlined",
      onClick: handleCloseError,
      sx: {
        mt: 2,
        borderRadius: 2
      }
    }, "Close"))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "update Item"), hideBack === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SideMaintenance2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    onSubmit: handleOpenUpdate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '20px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    row: true,
    name: "typeItem",
    value: typeItem,
    onChange: e => setTypeItem(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    value: "Goods",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null),
    label: "Goods"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    value: "Services",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null),
    label: "Services"
  })), typeItem === 'Goods' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      checked: isUsed,
      onChange: handleToggleUsed,
      sx: {
        color: '#e65100',
        '&.Mui-checked': {
          color: '#e65100'
        }
      }
    }),
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      style: {
        fontWeight: 'bold',
        color: isUsed ? '#e65100' : '#475569',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Used Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      style: {
        backgroundColor: '#fff3e0',
        color: '#e65100',
        border: '1px solid #ffe0b2',
        borderRadius: '4px',
        padding: '1px 6px',
        fontSize: '13px'
      }
    }, "\u24CA"))
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "itemName",
    name: "itemName",
    value: itemName,
    label: "Item Name",
    onChange: handleItemNameChange,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
    id: "itemBrand",
    name: "itemBrand",
    value: itemBrand,
    label: "Item Brand",
    onChange: val => setItemBrand(val),
    sx: {
      width: "100%",
      backgroundColor: "white"
    },
    mode: "upper"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, unit !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    label: "Unit",
    value: unit,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ViewTooltip, {
    title: "Clear",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: handleClearUnits
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, _extends({}, other, {
        sx: {
          backgroundColor: 'white',
          left: '0',
          marginTop: '10px'
        }
      }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
        onClick: e => handleOpenOpenAutocomplete2(e),
        disabled: user.data.role === 'User',
        onMouseDown: e => e.preventDefault(),
        className: "btnCustomer7",
        style: {
          width: '100%'
        }
      }, "ADD NEW Unit")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, _extends({}, params, {
      label: "Unit",
      required: true
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ViewTooltip, {
    title: "Clear",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: handleGiveUnits
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    htmlFor: "itemDimension"
  }, "Dimension"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    id: "itemDimension",
    name: "itemDimension",
    value: itemDimension,
    type: "number",
    label: "Dimension",
    onChange: e => setItemDimension(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
      position: "start"
    }, "M")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    htmlFor: "itemWeight"
  }, "Weight"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    id: "itemWeight",
    name: "itemWeight",
    value: itemWeight,
    type: "number",
    label: "Weight",
    onChange: e => setItemWeight(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
      position: "start"
    }, "Kg")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 4,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    id: "unit"
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    id: "itemCategory",
    value: itemCategory,
    onChange: e => setItemCategory(e.target.value),
    name: "itemCategory",
    label: "Category"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "HA"
  }, "HA (HA)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "ELECTRICITY"
  }, "ELECTRICITY (EL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "SOLAR SYSTEM"
  }, "SOLAR SYSTEM (SS)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "IT"
  }, "IT (IT)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "PLUMBING"
  }, "PLUMBING (PL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "ELECTRONIC"
  }, "ELECTRONIC (ELN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "FENCE ELECTRIC"
  }, "FENCE ELECTRIC (FE)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "ACCESSORY"
  }, "ACCESSORY (ACC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "WELDING"
  }, "WELDING (WLN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "GENERATOR"
  }, "GENERATOR (GA)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "TOOLS"
  }, "TOOLS (TL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "CONSTRUCTION"
  }, "CONSTRUCTION (CTN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "OTHERS"
  }, "OTHERS (OT)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ViewTooltip, {
    title: "Clear",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: handleClear
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    htmlFor: "itemNumber"
  }, "Item Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    type: "number",
    id: "itemNumber",
    value: String(itemNumber).padStart(6, '0'),
    onChange: e => setItemNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
      position: "start"
    }, newCode + '-'),
    label: "Item Number"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "itemStore",
    name: "itemStore",
    value: itemStore,
    label: "Store Name",
    onChange: e => setItemStore(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
    id: "itemManufacturer",
    name: "itemManufacturer",
    value: itemManufacturer,
    label: "Manufacturer",
    onChange: val => setItemManufacturer(val),
    sx: {
      width: "100%",
      backgroundColor: "white"
    },
    mode: "upper"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    htmlFor: "itemCostPrice"
  }, "Cost Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    id: "itemCostPrice",
    name: "itemCostPrice",
    type: "number",
    value: itemCostPrice,
    label: "Cost Unit Price",
    onChange: e => setItemCostPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
      position: "start"
    }, "$")
  })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    htmlFor: "itemSellingPrice"
  }, "Selling Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    id: "itemSellingPrice",
    name: "itemSellingPrice",
    type: "number",
    value: itemSellingPrice,
    label: "Selling Unit Price",
    onChange: e => setItemSellingPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
      position: "start"
    }, "$")
  })) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    open: openBack,
    onClose: handleCloseBack,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, "Do you want to stop updating Item ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "txt2"
  }, " If you stop updating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "submit",
    onClick: () => navigate('/ItemViewAdmin'),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "submit",
    onClick: handleCloseBack,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Reason Of Updating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .A, {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "button",
    onClick: handleClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .A, {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    open: openAutocomplete2,
    onClose: handleCloseOpenAutocomplete2,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: handleCloseOpenAutocomplete2,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Create Unit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    onSubmit: handleSubmitCategory
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "itemUnit",
    name: "itemUnit",
    value: itemUnit,
    label: "Unit",
    onChange: e => setItemUnit(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    open: modalOpenLoading,
    onClose: handleCloseOpenAutocomplete2,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .A, {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, " Data successfully Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    onClick: handleCloseOpenAutocomplete2,
    className: "btnCustomer"
  }, "Close")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemFormUpdate);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 51254
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ component_LanguageFixerButton)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(56655);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__(80851);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js
var getReactElementRef = __webpack_require__(57223);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(44675);
// EXTERNAL MODULE: ./node_modules/@mui/material/transitions/utils.js
var utils = __webpack_require__(35186);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(96852);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/Zoom/Zoom.js
'use client';



const _excluded = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];









const styles = {
  entering: {
    transform: 'none'
  },
  entered: {
    transform: 'none'
  }
};

/**
 * The Zoom transition can be used for the floating variant of the
 * [Button](/material-ui/react-button/#floating-action-buttons) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Zoom = /*#__PURE__*/react.forwardRef(function Zoom(props, ref) {
  const theme = (0,useTheme/* default */.A)();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
      addEndListener,
      appear = true,
      children,
      easing,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style,
      timeout = defaultTimeout,
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition/* default */.Ay
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const nodeRef = react.useRef(null);
  const handleRef = (0,useForkRef/* default */.A)(nodeRef, (0,getReactElementRef/* default */.A)(children), ref);
  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    (0,utils/* reflow */.q)(node); // So the animation always start from the start.

    const transitionProps = (0,utils/* getTransitionProps */.c)({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('transform', transitionProps);
    node.style.transition = theme.transitions.create('transform', transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const transitionProps = (0,utils/* getTransitionProps */.c)({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('transform', transitionProps);
    node.style.transition = theme.transitions.create('transform', transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = next => {
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends/* default */.A)({
    appear: appear,
    in: inProp,
    nodeRef: nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/react.cloneElement(children, (0,esm_extends/* default */.A)({
        style: (0,esm_extends/* default */.A)({
          transform: 'scale(0)',
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Zoom_Zoom = (Zoom);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(11641);
// EXTERNAL MODULE: ./node_modules/@mui/material/Badge/Badge.js + 2 modules
var Badge = __webpack_require__(11154);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/AutoAwesome.js
var AutoAwesome = __webpack_require__(2775);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(99571);
// EXTERNAL MODULE: ./src/js/utils/textAssistUtils.js
var textAssistUtils = __webpack_require__(68427);
;// ./src/js/component/LanguageFixerButton.js
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;





/**
 * LanguageFixerButton
 * Smart language & spelling assistant button.
 * Cleans whitespace, corrects technical & bilingual typos, and standardizes to CAPITAL LETTERS.
 * Shows an active alert badge when typos or uncapitalized text are detected.
 */
function LanguageFixerButton(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    onFixed = _ref.onFixed,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'upper' : _ref$mode,
    tooltip = _ref.tooltip,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'small' : _ref$size,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx;
  var isTypo = (0,textAssistUtils/* hasTypo */.rp)(value, mode);
  var activeTooltip = tooltip || (isTypo ? '⚠️ Typo or lowercase detected! Click ✨ to auto-correct & format in CAPITAL LETTERS' : '✨ Standardize text & format in CAPITAL LETTERS');
  var handleFix = e => {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();
    if (!value || typeof value !== 'string' || !value.trim()) {
      react_toastify_esm/* toast */.oR.info('Please enter some text first to polish.');
      return;
    }
    var polished = (0,textAssistUtils/* polishText */.LQ)(value, mode);
    if (polished === value.trim()) {
      react_toastify_esm/* toast */.oR.info('Text is already clean and correctly formatted in CAPITAL LETTERS!');
    } else {
      if (typeof onFixed === 'function') {
        onFixed(polished);
      }
      react_toastify_esm/* toast */.oR.success('✨ Polished & formatted in CAPITAL LETTERS!');
    }
  };
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    title: activeTooltip,
    arrow: true,
    TransitionComponent: Zoom_Zoom
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    size: size,
    onClick: handleFix,
    sx: _objectSpread({
      color: isTypo ? '#d97706' : '#30368a',
      backgroundColor: isTypo ? 'rgba(217, 119, 6, 0.12)' : 'rgba(48, 54, 138, 0.08)',
      p: 0.6,
      ml: 0.5,
      border: isTypo ? '1px dashed #f59e0b' : '1px solid transparent',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: isTypo ? '#d97706' : '#30368a',
        color: '#ffffff',
        transform: 'scale(1.08)'
      }
    }, sx)
  }, /*#__PURE__*/react.createElement(Badge/* default */.A, {
    badgeContent: isTypo ? '!' : null,
    color: "error",
    sx: {
      '& .MuiBadge-badge': {
        fontSize: '10px',
        height: '14px',
        minWidth: '14px',
        fontWeight: 800,
        padding: '0 2px',
        top: 2,
        right: 2
      }
    }
  }, /*#__PURE__*/react.createElement(AutoAwesome/* default */.A, {
    sx: {
      fontSize: size === 'small' ? 17 : 20
    }
  }))));
}
/* harmony default export */ const component_LanguageFixerButton = (LanguageFixerButton);

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

/***/ 73068
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86531);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25239);
/* harmony import */ var _LanguageFixerButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51254);
/* harmony import */ var _utils_textAssistUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68427);
var _excluded = ["label", "value", "onChange", "onBlur", "presetKey", "options", "mode", "multiline", "rows", "id", "name", "required", "fullWidth", "size", "sx", "disabled", "placeholder", "passEvent", "inputProps"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;




/**
 * SmartTextInput
 * Drop-in intelligent text input with:
 * 1. Free-solo searchable dropdown (user can type freely OR pick from presets)
 * 2. Embedded Click Sparkle ✨ Language & Typo Fixer button (ALL CAPS default)
 * 3. Real-time typo detection badge & visual warning
 * 4. Automatic self-healing onBlur
 */
function SmartTextInput(_ref) {
  var label = _ref.label,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    presetKey = _ref.presetKey,
    options = _ref.options,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'upper' : _ref$mode,
    _ref$multiline = _ref.multiline,
    multiline = _ref$multiline === void 0 ? false : _ref$multiline,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 1 : _ref$rows,
    id = _ref.id,
    name = _ref.name,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? true : _ref$fullWidth,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    placeholder = _ref.placeholder,
    _ref$passEvent = _ref.passEvent,
    passEvent = _ref$passEvent === void 0 ? false : _ref$passEvent,
    _ref$inputProps = _ref.inputProps,
    inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  var dropdownOptions = Array.isArray(options) && options.length > 0 ? options : presetKey && _utils_textAssistUtils__WEBPACK_IMPORTED_MODULE_5__/* .COMMON_PRESETS */ .dr[presetKey] ? _utils_textAssistUtils__WEBPACK_IMPORTED_MODULE_5__/* .COMMON_PRESETS */ .dr[presetKey] : null;
  var isTypo = (0,_utils_textAssistUtils__WEBPACK_IMPORTED_MODULE_5__/* .hasTypo */ .rp)(value, mode);
  var notifyChange = newVal => {
    if (typeof onChange !== 'function') return;
    var finalVal = mode === 'upper' && typeof newVal === 'string' ? newVal.toUpperCase() : newVal;
    if (passEvent) {
      onChange({
        target: {
          name: name || id || '',
          value: finalVal
        }
      });
    } else {
      onChange(finalVal);
    }
  };
  var handleBlur = e => {
    // Note: Do NOT automatically mutate or change user text on blur.
    // User text is only polished when explicitly clicking the Sparkle ✨ button or right-clicking.
    if (typeof onBlur === 'function') {
      onBlur(e);
    }
  };
  var textTransformStyle = mode === 'upper' ? 'uppercase' : 'none';

  // If dropdown options exist and it's not multiline, use freeSolo Autocomplete
  if (dropdownOptions && !multiline) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      freeSolo: true,
      disabled: disabled,
      options: dropdownOptions,
      value: value || '',
      onInputChange: (event, newInputValue) => {
        notifyChange(newInputValue);
      },
      onChange: (event, newValue) => {
        notifyChange(newValue || '');
      },
      renderInput: params => {
        var _params$inputProps;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _extends({}, params, rest, {
          id: id,
          name: name,
          label: label,
          required: required,
          size: size,
          placeholder: placeholder,
          onBlur: handleBlur,
          inputProps: _objectSpread(_objectSpread(_objectSpread({}, params.inputProps), {}, {
            spellCheck: 'true'
          }, inputProps), {}, {
            style: _objectSpread(_objectSpread({
              textTransform: textTransformStyle
            }, (inputProps === null || inputProps === void 0 ? void 0 : inputProps.style) || {}), ((_params$inputProps = params.inputProps) === null || _params$inputProps === void 0 ? void 0 : _params$inputProps.style) || {})
          }),
          InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
            endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
              position: "end",
              sx: {
                gap: 0.5
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LanguageFixerButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
              value: value,
              onFixed: fixed => notifyChange(fixed),
              mode: mode,
              size: size === 'small' ? 'small' : 'medium'
            }), params.InputProps.endAdornment)
          }),
          sx: _objectSpread(_objectSpread({
            width: fullWidth ? '100%' : 'auto',
            backgroundColor: 'white'
          }, isTypo ? {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f59e0b'
            }
          } : {}), sx)
        }));
      }
    });
  }

  // Standard or multiline TextField with Sparkle Button
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _extends({}, rest, {
    id: id,
    name: name,
    label: label,
    value: value !== undefined && value !== null ? value : '',
    onChange: e => {
      var val = e && e.target ? e.target.value : e;
      notifyChange(val);
    },
    onBlur: handleBlur,
    multiline: multiline,
    rows: rows,
    required: required,
    size: size,
    disabled: disabled,
    placeholder: placeholder,
    inputProps: _objectSpread(_objectSpread({
      spellCheck: 'true'
    }, inputProps), {}, {
      style: _objectSpread({
        textTransform: textTransformStyle
      }, (inputProps === null || inputProps === void 0 ? void 0 : inputProps.style) || {})
    }),
    InputProps: {
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        position: "end",
        sx: multiline ? {
          alignSelf: 'flex-start',
          mt: 1
        } : {}
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LanguageFixerButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        value: value,
        onFixed: fixed => notifyChange(fixed),
        mode: mode,
        size: size === 'small' ? 'small' : 'medium'
      }))
    },
    sx: _objectSpread(_objectSpread({
      width: fullWidth ? '100%' : 'auto',
      backgroundColor: 'white'
    }, isTypo ? {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#f59e0b'
      }
    } : {}), sx)
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartTextInput);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 68427
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LQ: () => (/* binding */ polishText),
/* harmony export */   V2: () => (/* binding */ toUpperCaseCode),
/* harmony export */   dr: () => (/* binding */ COMMON_PRESETS),
/* harmony export */   rp: () => (/* binding */ hasTypo)
/* harmony export */ });
/* unused harmony exports TYPO_DICTIONARY, ENGLISH_FRENCH_VOCABULARY, damerauLevenshtein, correctWord, normalizeSpaces, correctTypos, toSentenceCase, toTitleCase */
/**
 * GG Management - Intelligent Language & Text Assistance Utility
 * Provides typo auto-correction, technical terminology standardization,
 * whitespace cleaning, Damerau-Levenshtein word-by-word spellchecking,
 * and universal CAPITAL LETTERS formatting.
 */

var COMMON_PRESETS = {
  defects: ['NO POWER', 'NOT CHARGING', 'OVERHEATING', 'MOTOR BLOCKED', 'SHORT CIRCUIT', 'ABNORMAL NOISE', 'WATER LEAK', 'GAS LEAK', 'PERIODIC MAINTENANCE', 'DISPLAY FAULT', 'BURNT COIL', 'MECHANICAL BREAKDOWN', 'LOW PRESSURE', 'TRIPPING BREAKER', 'INTERMITTENT ON/OFF FAULT', 'VIDEO SIGNAL LOST / FLICKERING', 'SENSOR / THERMOSTAT ERROR', 'BLOWN FUSE'],
  appliances: ['AIR CONDITIONER', 'GENERATOR', 'CCTV SECURITY CAMERAS', 'BAKERY DOUGH MIXER', 'ELECTRIC OVEN', 'WATER PUMP', 'COLD ROOM / CHILLER', 'ELECTRIC MOTOR', 'INVERTER / UPS', 'TRANSFORMER', 'ICE MACHINE', 'AIR COMPRESSOR', 'DEEP FRYER', 'REFRIGERATOR / FREEZER', 'ELECTRICAL CONTROL PANEL'],
  actions: ['DIAGNOSTIC & INSPECTION OK', 'REPLACED CAPACITOR', 'CLEANED & SERVICED', 'REWIRED ELECTRICAL CONNECTIONS', 'MOTOR REWOUND & TESTED', 'REFRIGERANT GAS REFILLED', 'REPLACED BEARINGS & BELTS', 'TESTED & FULLY OPERATIONAL', 'CALIBRATED & ADJUSTED', 'REPLACED BURNT COIL', 'FIRMWARE UPDATED & SYSTEM RESET'],
  subjects: ['MAINTENANCE & REPAIR SERVICES', 'SUPPLY OF ELECTRICAL EQUIPMENT', 'TROUBLESHOOTING & EMERGENCY REPAIR', 'PREVENTIVE MAINTENANCE CONTRACT', 'INSTALLATION & COMMISSIONING', 'TECHNICAL INSPECTION & AUDIT', 'SECURITY & SURVEILLANCE SYSTEM SERVICE']
};

// Common bilingual & technical typos encountered during shop/technician data entry
var TYPO_DICTIONARY = [
// Multi-word phrases with actual typos (evaluated first)
{
  pattern: /\b(ari|air)\s+(contoner|condoner|condishioner|conditionner)\b/gi,
  replacement: 'AIR CONDITIONER'
}, {
  pattern: /\b(uot\s+of\s+(ordder|ordr|order)|out\s+of\s+(ordder|ordr))\b/gi,
  replacement: 'OUT OF ORDER'
}, {
  pattern: /\b(not\s+charch(ing)?|not\s+charg(ing)?|ne\s+charge\s+pas)\b/gi,
  replacement: 'NOT CHARGING'
}, {
  pattern: /\b(no\s+powr(e)?|no\s+pwer|pas\s+de\s+courant|pas\s+de\s+tension|coupe\s+courant|ne\s+s['\s]?allume\s+pas)\b/gi,
  replacement: 'NO POWER'
}, {
  pattern: /\b(court[\s\-_]circuit|court[\s\-_]circui)\b/gi,
  replacement: 'SHORT CIRCUIT'
}, {
  pattern: /\b(four\s+elec(trique)?)\b/gi,
  replacement: 'ELECTRIC OVEN'
}, {
  pattern: /\b(pompe\s+a\s+eau|pompe\s+d['\s]?eau)\b/gi,
  replacement: 'WATER PUMP'
}, {
  pattern: /\b(groupe\s+electro(gene)?)\b/gi,
  replacement: 'GENERATOR'
}, {
  pattern: /\b(chambre\s+froide)\b/gi,
  replacement: 'COLD ROOM'
}, {
  pattern: /\b(fuite\s+d['\s]?eau)\b/gi,
  replacement: 'WATER LEAK'
}, {
  pattern: /\b(fuite\s+de\s+gaz)\b/gi,
  replacement: 'GAS LEAK'
}, {
  pattern: /\b(bruit\s+anormal|bruyant)\b/gi,
  replacement: 'ABNORMAL NOISE'
}, {
  pattern: /\b(moteur\s+bloqu[eé])\b/gi,
  replacement: 'MOTOR BLOCKED'
}, {
  pattern: /\b(entretien\s+periodique)\b/gi,
  replacement: 'PERIODIC MAINTENANCE'
}, {
  pattern: /\b(ne\s+marche\s+pas|marche\s+pas|not\s+work(ing)?)\b/gi,
  replacement: 'NOT WORKING'
}, {
  pattern: /\b(tset\s+wronge?|test\s+wronge?|tste\s+wronge?)\b/gi,
  replacement: 'TEST WRONG'
}, {
  pattern: /\b(lfie\s+ihis\s+good|life\s+ihis\s+good|lfie\s+is\s+good)\b/gi,
  replacement: 'LIFE IS GOOD'
}, {
  pattern: /\b(fait\s+on[\s\-_/]*off)\b/gi,
  replacement: 'DOING ON/OFF'
}, {
  pattern: /\b(en\s+panne|hors\s+service)\b/gi,
  replacement: 'OUT OF ORDER'
},
// Single word typos and colloquialisms
{
  pattern: /\b(ari)\b/gi,
  replacement: 'AIR'
}, {
  pattern: /\b(contoner|condoner|condishioner|conditionner)\b/gi,
  replacement: 'CONDITIONER'
}, {
  pattern: /\b(uot)\b/gi,
  replacement: 'OUT'
}, {
  pattern: /\b(ordder|ordr)\b/gi,
  replacement: 'ORDER'
}, {
  pattern: /\b(fullow|fllow)\b/gi,
  replacement: 'FOLLOW'
}, {
  pattern: /\b(tste|tset|tesst|tst)\b/gi,
  replacement: 'TEST'
}, {
  pattern: /\b(lfie|lyfe)\b/gi,
  replacement: 'LIFE'
}, {
  pattern: /\b(ihis|isi)\b/gi,
  replacement: 'IS'
}, {
  pattern: /\b(machin|mashin|machiene|machne|mchine)\b/gi,
  replacement: 'MACHINE'
}, {
  pattern: /\b(camra|camer|kamra)\b/gi,
  replacement: 'CAMERA'
}, {
  pattern: /\b(cc\s+tv)\b/gi,
  replacement: 'CCTV'
}, {
  pattern: /\b(wronge|rong|wrog|wrng)\b/gi,
  replacement: 'WRONG'
}, {
  pattern: /\b(powre|powr|pwer|poer)\b/gi,
  replacement: 'POWER'
}, {
  pattern: /\b(probl[eèé]me?|problm|prob)\b/gi,
  replacement: 'PROBLEM'
}, {
  pattern: /\b(elec|electrique|eletrique)\b/gi,
  replacement: 'ELECTRICAL'
}, {
  pattern: /\b(maint|maintenace|mientenace|maintenence|mantenance)\b/gi,
  replacement: 'MAINTENANCE'
}, {
  pattern: /\b(reparation|reparer|reparartion|repar)\b/gi,
  replacement: 'REPAIR'
}, {
  pattern: /\b(moteur|motuer|motteur)\b/gi,
  replacement: 'MOTOR'
}, {
  pattern: /\b(batteri|batterie|baterie)\b/gi,
  replacement: 'BATTERY'
}, {
  pattern: /\b(climatiseur|clim)\b/gi,
  replacement: 'AIR CONDITIONER'
}, {
  pattern: /\b(generateur|groupe)\b/gi,
  replacement: 'GENERATOR'
}, {
  pattern: /\b(boulangerie)\b/gi,
  replacement: 'BAKERY'
}, {
  pattern: /\b(petrin)\b/gi,
  replacement: 'DOUGH MIXER'
}, {
  pattern: /\b(compresseur|compresor)\b/gi,
  replacement: 'COMPRESSOR'
}, {
  pattern: /\b(disjoncteur|disjonctuer)\b/gi,
  replacement: 'CIRCUIT BREAKER'
}, {
  pattern: /\b(transformateur|transfo)\b/gi,
  replacement: 'TRANSFORMER'
}, {
  pattern: /\b(bobinage|bobinne)\b/gi,
  replacement: 'COIL WINDING'
}, {
  pattern: /\b(condensateur|condo|capaciter)\b/gi,
  replacement: 'CAPACITOR'
}, {
  pattern: /\b(roulement|roulements)\b/gi,
  replacement: 'BEARINGS'
}, {
  pattern: /\b(ventilateur|ventillo|ventilo)\b/gi,
  replacement: 'VENTILATOR / FAN'
}, {
  pattern: /\b(surchauffe|overheat|overheating)\b/gi,
  replacement: 'OVERHEATING'
}, {
  pattern: /\b(ecran|ecrant)\b/gi,
  replacement: 'SCREEN / DISPLAY'
}, {
  pattern: /\b(cablage|cablagge)\b/gi,
  replacement: 'WIRING'
}, {
  pattern: /\b(nettoy[eé]|netoyage|nettoyage|clean|cleand)\b/gi,
  replacement: 'CLEANED'
}, {
  pattern: /\b(remplac[eé]|remplacment|remplacement|chnge)\b/gi,
  replacement: 'REPLACED'
}, {
  pattern: /\b(diagnostique)\b/gi,
  replacement: 'DIAGNOSTIC'
}, {
  pattern: /\b(operationnel|operationel)\b/gi,
  replacement: 'OPERATIONAL'
}, {
  pattern: /\b(technicien|technition)\b/gi,
  replacement: 'TECHNICIAN'
}, {
  pattern: /\b(servis|servce)\b/gi,
  replacement: 'SERVICE'
}, {
  pattern: /\b(coup|coupe|coupure)\b/gi,
  replacement: 'CUT'
}, {
  pattern: /\b(casse|casser|casses|brokn|borken)\b/gi,
  replacement: 'BROKEN'
}, {
  pattern: /\b(brule|brulee|bruler|burnd)\b/gi,
  replacement: 'BURNT'
}, {
  pattern: /\b(bloque|bloquer|bloq)\b/gi,
  replacement: 'BLOCKED'
}, {
  pattern: /\b(fuite|fuit)\b/gi,
  replacement: 'LEAK'
}, {
  pattern: /\b(charch|chargeur)\b/gi,
  replacement: 'CHARGING'
}, {
  pattern: /\b(costomer|custmer|customr|cleint|clien)\b/gi,
  replacement: 'CUSTOMER'
}, {
  pattern: /\b(suplier|suppliar|fourniseur|fournissur)\b/gi,
  replacement: 'SUPPLIER'
}, {
  pattern: /\b(invocie|invoce|factur)\b/gi,
  replacement: 'INVOICE'
}, {
  pattern: /\b(quattion|quotatn|devis)\b/gi,
  replacement: 'QUOTATION'
}, {
  pattern: /\b(payemnt|paymnt|peymnt)\b/gi,
  replacement: 'PAYMENT'
}, {
  pattern: /\b(expens|expeses|depense)\b/gi,
  replacement: 'EXPENSE'
}, {
  pattern: /\b(projct|progect|porject)\b/gi,
  replacement: 'PROJECT'
}, {
  pattern: /\b(employe|emploe|personel)\b/gi,
  replacement: 'EMPLOYEE'
}, {
  pattern: /\b(discripton|descrip|descriptoin|descreption)\b/gi,
  replacement: 'DESCRIPTION'
}, {
  pattern: /\b(addres|adres|adress)\b/gi,
  replacement: 'ADDRESS'
}, {
  pattern: /\b(waranty|warenty|woranty|garanti|garantie)\b/gi,
  replacement: 'WARRANTY'
}, {
  pattern: /\b(seriel|serail|seral)\b/gi,
  replacement: 'SERIAL'
}, {
  pattern: /\b(recived|recieve|recu)\b/gi,
  replacement: 'RECEIVED'
}, {
  pattern: /\b(deliverd|delivry|livraison)\b/gi,
  replacement: 'DELIVERED'
}, {
  pattern: /\b(compleat|complet|termnated)\b/gi,
  replacement: 'COMPLETED'
}, {
  pattern: /\b(canceld|cancelld|annule)\b/gi,
  replacement: 'CANCELLED'
}, {
  pattern: /\b(urgent|urgant)\b/gi,
  replacement: 'URGENT'
}, {
  pattern: /\b(approvd|aprovd|aprouved)\b/gi,
  replacement: 'APPROVED'
}, {
  pattern: /\b(requst|reqest|demande)\b/gi,
  replacement: 'REQUEST'
}, {
  pattern: /\b(quantite|qantity|qte|qty)\b/gi,
  replacement: 'QUANTITY'
}, {
  pattern: /\b(balanc|balnce|solde)\b/gi,
  replacement: 'BALANCE'
}, {
  pattern: /\b(disscount|discont|remise)\b/gi,
  replacement: 'DISCOUNT'
}, {
  pattern: /\b(shiping|shiped)\b/gi,
  replacement: 'SHIPPING'
}, {
  pattern: /\b(swtch|swicth|swich)\b/gi,
  replacement: 'SWITCH'
}, {
  pattern: /\b(plase|plese)\b/gi,
  replacement: 'PLEASE'
}, {
  pattern: /\b(chck|chek)\b/gi,
  replacement: 'CHECK'
}, {
  pattern: /\b(wokr|wrk)\b/gi,
  replacement: 'WORK'
}, {
  pattern: /\b(payd|payed)\b/gi,
  replacement: 'PAID'
}, {
  pattern: /\b(wrkrs|workrs|wrokers)\b/gi,
  replacement: 'WORKERS'
}];

// Curated vocabulary for word-by-word Damerau-Levenshtein spellchecking
var ENGLISH_FRENCH_VOCABULARY = new Set([
// Numbers (English & French)
'ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'TWENTY', 'THIRTY', 'FORTY', 'FIFTY', 'HUNDRED', 'THOUSAND', 'UN', 'DEUX', 'TROIS', 'QUATRE', 'CINQ', 'SIX', 'SEPT', 'HUIT', 'NEUF', 'DIX', 'ONZE', 'DOUZE', 'TREIZE', 'QUATORZE', 'QUINZE', 'SEIZE', 'VINGT', 'TRENTE', 'QUARANTE', 'CINQUANTE', 'CENT', 'MILLE',
// Common English Core Words & Prepositions
'THE', 'BE', 'TO', 'OF', 'OFF', 'ON', 'UP', 'DOWN', 'AND', 'A', 'IN', 'THAT', 'HAVE', 'I', 'IT', 'FOR', 'NOT', 'WITH', 'HE', 'AS', 'YOU', 'DO', 'AT', 'THIS', 'BUT', 'HIS', 'BY', 'FROM', 'THEY', 'WE', 'SAY', 'HER', 'SHE', 'OR', 'AN', 'WILL', 'MY', 'ALL', 'WOULD', 'THERE', 'THEIR', 'WHAT', 'SO', 'OUT', 'IF', 'ABOUT', 'WHO', 'GET', 'WHICH', 'GO', 'ME', 'WHEN', 'MAKE', 'CAN', 'LIKE', 'TIME', 'NO', 'JUST', 'HIM', 'KNOW', 'TAKE', 'PEOPLE', 'INTO', 'YEAR', 'YOUR', 'GOOD', 'SOME', 'COULD', 'THEM', 'SEE', 'OTHER', 'THAN', 'THEN', 'NOW', 'LOOK', 'ONLY', 'COME', 'ITS', 'OVER', 'UNDER', 'THINK', 'ALSO', 'BACK', 'AFTER', 'USE', 'HOW', 'OUR', 'WORK', 'WORKS', 'WORKED', 'WORKING', 'FIRST', 'WELL', 'WAY', 'EVEN', 'NEW', 'OLD', 'WANT', 'BECAUSE', 'ANY', 'THESE', 'GIVE', 'DAY', 'MOST', 'US', 'IS', 'ARE', 'WAS', 'WERE', 'BEEN', 'DONE', 'DID', 'DOES', 'DOING', 'TEST', 'TESTS', 'TESTED', 'TESTING', 'WRONG', 'LIFE', 'ORDER', 'ORDERS', 'CHECK', 'CHECKS', 'FOLLOW', 'FOLLOWS', 'FOLLOWED', 'FOLLOWING', 'BROKEN', 'BURNT', 'BLOCKED', 'LEAK', 'LEAKS', 'CLEAN', 'CLEANED', 'SERVICE', 'SERVICES', 'REPAIR', 'REPAIRS', 'REPAIRED', 'REPLACED', 'INSPECT', 'INSPECTED', 'INSPECTION', 'DIAGNOSTIC', 'OPERATIONAL', 'MAINTENANCE', 'LEFT', 'RIGHT', 'TOP', 'BOTTOM', 'FRONT', 'REAR', 'FAST', 'SLOW', 'SAFE', 'OPEN', 'CLOSE', 'CLOSED', 'BAD', 'TRUE', 'FALSE',
// Food, Meals, Expenses & Staff (English)
'FOOD', 'FOODS', 'MEAL', 'MEALS', 'LUNCH', 'DINNER', 'BREAKFAST', 'DRINK', 'DRINKS', 'WATER', 'TEA', 'COFFEE', 'SUGAR', 'BREAD', 'MILK', 'RICE', 'MEAT', 'CHICKEN', 'FISH', 'FRUIT', 'FRUITS', 'VEGETABLE', 'VEGETABLES', 'SNACK', 'SNACKS', 'KITCHEN', 'COOK', 'COOKING', 'RESTAURANT', 'CATERING', 'REFRESHMENT', 'REFRESHMENTS', 'WORKER', 'WORKERS', 'STAFF', 'TEAM', 'CREW', 'LABOR', 'LABOUR', 'LABORER', 'LABORERS', 'DRIVER', 'DRIVERS', 'GUARD', 'GUARDS', 'OFFICER', 'CLEANER', 'CLEANERS', 'OPERATOR', 'OPERATORS', 'SUPERVISOR', 'SUPERVISORS', 'MANAGER', 'MANAGERS', 'DIRECTOR', 'DIRECTORS', 'ASSISTANT', 'ASSISTANTS', 'HELPER', 'HELPERS', 'CASHIER', 'CASHIERS', 'ACCOUNTANT', 'ACCOUNTANTS', 'MECHANIC', 'MECHANICS', 'ELECTRICIAN', 'ELECTRICIANS', 'PLUMBER', 'PLUMBERS', 'TRANSPORT', 'TRANSPORTATION', 'TAXI', 'BUS', 'FUEL', 'PETROL', 'DIESEL', 'OIL', 'TIRE', 'TIRES', 'TYRE', 'TYRES', 'PARKING', 'TOLL', 'FARE', 'RENT', 'HOTEL', 'TRAVEL', 'TICKET', 'FLIGHT', 'VISA', 'PASSPORT', 'ALLOWANCE', 'PERDIEM', 'SALARY', 'SALARIES', 'ADVANCE', 'LOAN', 'BONUS', 'COMMISSION', 'FEE', 'FEES', 'CHARGE', 'CHARGES', 'TAX', 'TAXES', 'TVA', 'VAT', 'CUSTOMS', 'DUTY', 'CLEARANCE', 'FINE', 'PENALTY', 'PRINTING', 'COURIER', 'POSTAGE', 'DELIVERY', 'SHIPPING', 'FREIGHT', 'TONER', 'PAPER', 'STATIONERY', 'SUPPLIES', 'TOOL', 'TOOLS', 'MATERIAL', 'MATERIALS', 'EQUIPMENT', 'INTERNET', 'WIFI', 'PHONE', 'TELEPHONE', 'AIRTIME', 'CREDIT', 'CARD', 'ELECTRICITY', 'POWER', 'INSURANCE', 'MEDICAL', 'MEDICINE', 'HEALTH', 'HOSPITAL', 'CLINIC', 'UNIFORM', 'UNIFORMS', 'SAFETY', 'BOOTS', 'HELMET', 'GLOVES', 'VEST', 'GIFT', 'DONATION', 'CHARITY', 'MISCELLANEOUS', 'OTHER', 'OTHERS',
// Common French Core & Expense Words
'LE', 'LA', 'LES', 'UN', 'UNE', 'DES', 'DU', 'DE', 'AU', 'AUX', 'EN', 'DANS', 'SUR', 'SOUS', 'PAR', 'POUR', 'AVEC', 'SANS', 'VERS', 'CHEZ', 'CE', 'CET', 'CETTE', 'CES', 'MON', 'MA', 'MES', 'TON', 'TA', 'TES', 'SON', 'SA', 'SES', 'NOTRE', 'NOS', 'VOTRE', 'VOS', 'LEUR', 'LEURS', 'JE', 'TU', 'IL', 'ELLE', 'ON', 'NOUS', 'VOUS', 'ILS', 'ELLES', 'ME', 'TE', 'SE', 'LUI', 'MOI', 'TOI', 'SOI', 'EUX', 'QUI', 'QUE', 'QUOI', 'DONT', 'OU', 'FAIT', 'FAIRE', 'ETRE', 'AVOIR', 'PAS', 'PLUS', 'BIEN', 'BON', 'BONNE', 'MAUVAIS', 'JOUR', 'JOURS', 'MOIS', 'ANNEE', 'TEMPS', 'CHANGER', 'CHANGE', 'CHANGEMENT', 'REMPLACER', 'REMPLACEMENT', 'NETTOYER', 'NETTOYAGE', 'VERIFIER', 'VERIFICATION', 'REGLER', 'REGLAGE', 'NOURRITURE', 'REPAS', 'DEJEUNER', 'DINER', 'PETIT-DEJEUNER', 'BOISSON', 'BOISSONS', 'EAU', 'PAIN', 'CAFE', 'THE', 'SUCRE', 'LAIT', 'RIZ', 'VIANDE', 'POULET', 'POISSON', 'TRAVAILLEUR', 'TRAVAILLEURS', 'OUVRIER', 'OUVRIERS', 'EMPLOYE', 'EMPLOYES', 'PERSONNEL', 'EQUIPE', 'CHAUFFEUR', 'CHAUFFEURS', 'GARDE', 'GARDES', 'TECHNICIEN', 'TECHNICIENS', 'INGENIEUR', 'INGENIEURS', 'MECANICIEN', 'ELECTRICIEN', 'CARBURANT', 'ESSENCE', 'GASOIL', 'DIESEL', 'TRANSPORT', 'FRAIS', 'DEPENSE', 'DEPENSES', 'LOYER', 'ELECTRICITE', 'INTERNET', 'FOURNITURES', 'PAPIER', 'SALAIRE', 'SALAIRES', 'AVANCE', 'PRIME',
// Appliances & Equipment
'AIR', 'CONDITIONER', 'APPLIANCE', 'APPLIANCES', 'OVEN', 'MIXER', 'DOUGH', 'WATER', 'PUMP', 'GENERATOR', 'CHILLER', 'COLD', 'ROOM', 'COMPRESSOR', 'MOTOR', 'INVERTER', 'TRANSFORMER', 'CAPACITOR', 'BREAKER', 'CIRCUIT', 'SWITCH', 'BOARD', 'WIRING', 'CABLE', 'SCREEN', 'DISPLAY', 'CAMERA', 'CAMERAS', 'CCTV', 'SECURITY', 'SENSOR', 'THERMOSTAT', 'FUSE', 'VALVE', 'PIPE', 'FILTER', 'BELT', 'BEARING', 'BEARINGS', 'COIL', 'WINDING', 'REFRIGERANT', 'GAS', 'FREON', 'PRESSURE', 'TEMPERATURE', 'VOLTAGE', 'CURRENT', 'POWER', 'ELECTRIC', 'ELECTRICAL', 'MECHANICAL', 'ELECTRONIC', 'HEATING', 'COOLING', 'VENTILATION', 'PANEL', 'RELAY', 'BATTERY', 'CHARGER', 'FREEZER', 'REFRIGERATOR', 'FRIDGE', 'FRYER', 'MACHINE', 'MACHINES', 'HEATER', 'FAN', 'BLOWER', 'PLUG', 'SOCKET', 'CONNECTOR', 'ADAPTER', 'GENERATOR', 'STABILIZER', 'UPS', 'AVR',
// Commercial & ERP Terms
'CUSTOMER', 'CLIENT', 'SUPPLIER', 'VENDOR', 'INVOICE', 'QUOTATION', 'ESTIMATE', 'RECEIPT', 'PAYMENT', 'EXPENSE', 'EXPENSES', 'PURCHASE', 'PURCHASES', 'ORDER', 'ORDERS', 'PROJECT', 'PROJECTS', 'EMPLOYEE', 'EMPLOYEES', 'TECHNICIAN', 'SALARY', 'PAYROLL', 'ADVANCE', 'LOAN', 'CASH', 'BANK', 'ACCOUNT', 'BALANCE', 'TOTAL', 'SUBTOTAL', 'TAX', 'VAT', 'TVA', 'DISCOUNT', 'AMOUNT', 'PRICE', 'COST', 'RATE', 'QTY', 'QUANTITY', 'UNIT', 'UNITS', 'DESCRIPTION', 'REMARKS', 'NOTES', 'SERIAL', 'NUMBER', 'BRAND', 'MODEL', 'WARRANTY', 'STATUS', 'DATE', 'TIME', 'CODE', 'STORE', 'STOCK', 'INVENTORY', 'WAREHOUSE', 'TRANSFER', 'CATEGORY', 'DEPARTMENT', 'BRANCH', 'OFFICE', 'FACTORY', 'POS', 'SALES', 'RETAIL', 'WHOLESALE', 'DELIVERY', 'SHIPPING', 'TRANSPORT',
// Actions & Verbs
'CLEANED', 'SERVICED', 'REPLACED', 'FIXED', 'REPAIRED', 'TESTED', 'CHECKED', 'INSTALLED', 'CONFIGURED', 'CALIBRATED', 'ADJUSTED', 'TIGHTENED', 'REWIRED', 'SOLDED', 'WELDED', 'LUBRICATED', 'OVERHAULED', 'ASSEMBLED', 'DISASSEMBLED', 'DELIVERED', 'RECEIVED', 'APPROVED', 'CANCELLED', 'PENDING', 'COMPLETED', 'INSPECTION', 'DIAGNOSTIC', 'OK', 'FAILED', 'ERROR', 'FAULT', 'DEFECT', 'SHORT', 'BURNT', 'OVERHEATING', 'BLOCKED', 'LEAK', 'NOISE', 'CHARGING', 'CONNECTED', 'OFFLINE', 'ONLINE', 'ACTIVE', 'INACTIVE', 'OPEN', 'CLOSED', 'NEW', 'USED', 'URGENT', 'NORMAL', 'HIGH', 'LOW',
// Technical Acronyms & Units
'USD', 'CDF', 'FC', 'EUR', 'GBP', 'V', 'A', 'W', 'KW', 'KVA', 'HP', 'HZ', 'RPM', 'PSI', 'BAR', 'KG', 'G', 'L', 'ML', 'MM', 'CM', 'M', 'KM', 'PCS', 'SET', 'BOX', 'ROLL', 'MTR', 'PKT', 'PAIR', 'AC', 'DC', 'LED', 'LCD', 'CPU', 'RAM', 'SSD', 'HDD', 'USB', 'HDMI', 'VGA', 'LAN', 'WIFI', 'DVR', 'NVR', 'IP', 'HD', 'FHD', 'UHD', 'TV', 'PC', 'DVD', 'CD']);

/**
 * Calculates Damerau-Levenshtein distance (insertions, deletions, substitutions, transpositions).
 */
function damerauLevenshtein(a, b) {
  if (a === b) return 0;
  var al = a.length;
  var bl = b.length;
  if (al === 0) return bl;
  if (bl === 0) return al;
  var matrix = [];
  for (var i = 0; i <= al; i++) {
    matrix[i] = [i];
  }
  for (var j = 0; j <= bl; j++) {
    matrix[0][j] = j;
  }
  for (var _i = 1; _i <= al; _i++) {
    for (var _j = 1; _j <= bl; _j++) {
      var cost = a[_i - 1] === b[_j - 1] ? 0 : 1;
      matrix[_i][_j] = Math.min(matrix[_i - 1][_j] + 1,
      // deletion
      matrix[_i][_j - 1] + 1,
      // insertion
      matrix[_i - 1][_j - 1] + cost // substitution
      );
      if (_i > 1 && _j > 1 && a[_i - 1] === b[_j - 2] && a[_i - 2] === b[_j - 1]) {
        matrix[_i][_j] = Math.min(matrix[_i][_j], matrix[_i - 2][_j - 2] + cost); // transposition
      }
    }
  }
  return matrix[al][bl];
}

/**
 * Corrects an individual word using vocabulary and Damerau-Levenshtein distance.
 */
function correctWord(word) {
  if (!word || typeof word !== 'string') return word;
  var upper = word.toUpperCase();

  // 1. Skip codes, numbers, single letters, or words already in vocabulary
  if (ENGLISH_FRENCH_VOCABULARY.has(upper)) return upper;
  if (/^\d+$/.test(word) || /^[A-Z]-\d+$/i.test(upper)) {
    return upper;
  }

  // 2. Check exact matches in single-word typo dictionary (evaluated first for all lengths)
  for (var _ref2 of TYPO_DICTIONARY) {
    var pattern = _ref2.pattern;
    var replacement = _ref2.replacement;
    if (new RegExp(pattern.source, 'i').test(upper) && !pattern.source.includes('\\s+')) {
      return replacement.toUpperCase();
    }
  }

  // 3. For short words (length <= 4), do NOT fuzzy match!
  // Single-word typos for short words (1 to 4 chars) are handled strictly by TYPO_DICTIONARY
  // (e.g. ARI -> AIR, UOT -> OUT, TSET -> TEST, LFIE -> LIFE, WOKR -> WORK).
  // This prevents valid 4-letter words (like FOOD, WOOD, GOOD, BOOK, LOOK, CARS, WORK, SHOP)
  // from ever being mutated or collapsed into other words.
  if (upper.length <= 4) {
    return upper;
  }

  // 4. Find closest match in vocabulary via Damerau-Levenshtein distance (for words length >= 5)
  var bestMatch = null;
  var bestDist = 999;
  for (var vocabWord of ENGLISH_FRENCH_VOCABULARY) {
    // Only test words of similar length (within 2 characters)
    if (Math.abs(vocabWord.length - upper.length) > 2) continue;
    var dist = damerauLevenshtein(upper, vocabWord);
    // Allow edit distance 1 for 5-6 char words, distance 2 for words >=7 chars
    var maxAllowed = vocabWord.length <= 6 ? 1 : 2;
    if (dist <= maxAllowed && dist < bestDist) {
      bestDist = dist;
      bestMatch = vocabWord;
      if (dist === 1 && Math.abs(vocabWord.length - upper.length) <= 1) {
        break; // Fast exit on high-confidence match
      }
    }
  }
  return bestMatch || upper;
}

/**
 * Normalizes multi-spaces and trims leading/trailing whitespace.
 */
var normalizeSpaces = text => {
  if (!text || typeof text !== 'string') return '';
  return text.replace(/\s+/g, ' ').trim();
};

/**
 * Replaces known typos and standardizes terminology word by word.
 */
var correctTypos = function correctTypos(text) {
  var forceUpper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!text || typeof text !== 'string') return '';
  var cleaned = text;

  // 1. Run multi-word phrase patterns first
  var _loop = function _loop() {
    var pattern = _ref4.pattern;
    var replacement = _ref4.replacement;
    cleaned = cleaned.replace(pattern, match => {
      if (forceUpper || match === match.toUpperCase()) {
        return replacement.toUpperCase();
      }
      return replacement;
    });
  };
  for (var _ref4 of TYPO_DICTIONARY) {
    _loop();
  }

  // 2. Run word-by-word spelling correction on all individual words
  cleaned = cleaned.replace(/[A-Za-z\u00C0-\u017F]+/g, word => {
    return correctWord(word);
  });
  return cleaned;
};

/**
 * Formats string to Sentence case.
 */
var toSentenceCase = text => {
  if (!text || typeof text !== 'string') return '';
  return text.replace(/(^\s*|\.\s+)([a-z\u00E0-\u00FC])/g, (m, sep, char) => {
    return sep + char.toUpperCase();
  });
};

/**
 * Formats string to Title Case.
 */
var toTitleCase = text => {
  if (!text || typeof text !== 'string') return '';
  var minorWords = /^(a|an|the|and|but|or|for|nor|on|at|to|from|by|over|in|of|de|du|des|la|le|les|et|en|ou|par|pour|sur)$/i;
  return text.toLowerCase().split(' ').map((word, index) => {
    if (index === 0 || !minorWords.test(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word.toLowerCase();
  }).join(' ');
};

/**
 * Standardizes model numbers, serials, and codes to UPPERCASE with single spaces.
 */
var toUpperCaseCode = text => {
  if (!text || typeof text !== 'string') return '';
  return normalizeSpaces(text).toUpperCase();
};

/**
 * Master polishing function that cleans whitespace, fixes typos word-by-word,
 * and standardizes to universal CAPITAL LETTERS.
 * @param {string} text - Raw input text
 * @param {'upper'|'sentence'|'title'|'none'} mode - Desired casing mode (defaults to 'upper')
 */
var polishText = function polishText(text) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'upper';
  if (!text || typeof text !== 'string') return '';
  var result = normalizeSpaces(text);
  if (!result) return '';

  // 1. Correct technical and language typos (multi-word and word-by-word)
  result = correctTypos(result, mode === 'upper');

  // 2. Apply requested casing mode (default is universal 'upper' CAPITAL LETTERS)
  if (mode === 'upper') {
    result = result.toUpperCase();
  } else if (mode === 'sentence') {
    result = toSentenceCase(result);
  } else if (mode === 'title') {
    result = toTitleCase(result);
  }
  return result;
};

/**
 * Checks if a string contains any recognized typo, unnormalized spacing,
 * lowercase letters, or any misspelled words that need auto-correction.
 * Guaranteed 100% consistent with polishText.
 */
var hasTypo = function hasTypo(text) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'upper';
  if (!text || typeof text !== 'string' || !text.trim()) return false;
  var polished = polishText(text, mode);
  return polished !== text.trim();
};

/***/ }

}]);