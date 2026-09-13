"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[8849],{

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

/***/ 58849
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47767);
/* harmony import */ var _component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42600);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68525);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55746);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71543);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69307);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29428);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(68864);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(53215);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(86531);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2071);
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
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(71510);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(29719);
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(61087);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(75737);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(601);
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(48484);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(92659);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(32005);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(65821);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(82299);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(40301);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(39781);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(3100);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(95236);
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["children"];
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








































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)(_ref => {
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
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, _extends({}, props, {
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
function EmployeeUpdateView() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .useParams */ .g)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
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
        return _ref9.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__/* .logOut */ .je)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    joinDate = _useState2[0],
    setJoinDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    employeeName = _useState4[0],
    setEmployeeName = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    employeeAddress = _useState6[0],
    setEmployeeAddress = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    employeeEmail = _useState8[0],
    setEmployeeEmail = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    employeePhone = _useState0[0],
    setEmployeePhone = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    employeeRole = _useState10[0],
    setEmployeeRole = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    department = _useState12[0],
    setDepartment = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    dateOfBirth = _useState14[0],
    setDateOfBirth = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    Gender = _useState16[0],
    setGender = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    statusMarital = _useState18[0],
    setStatusMarital = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    identifier = _useState20[0],
    setIdentifier = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    identifierNumber = _useState22[0],
    setIdentifierNumber = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState24 = _slicedToArray(_useState23, 2),
    expireDate = _useState24[0],
    setExpireDate = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState26 = _slicedToArray(_useState25, 2),
    salary = _useState26[0],
    setSalary = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState28 = _slicedToArray(_useState27, 2),
    description = _useState28[0],
    setDescription = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState30 = _slicedToArray(_useState29, 2),
    bankName = _useState30[0],
    setBankName = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState32 = _slicedToArray(_useState31, 2),
    bankAccountNumber = _useState32[0],
    setBankAccountNumber = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    other = _useState34[0],
    setOther = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    bounceAllowances = _useState36[0],
    setBounceAllowances = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState38 = _slicedToArray(_useState37, 2),
    foodBasic = _useState38[0],
    setFoodBasic = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState40 = _slicedToArray(_useState39, 2),
    basicTransport = _useState40[0],
    setBasicTransport = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState42 = _slicedToArray(_useState41, 2),
    employeeId = _useState42[0],
    setEmployeeId = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState44 = _slicedToArray(_useState43, 2),
    status = _useState44[0],
    setStatus = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState46 = _slicedToArray(_useState45, 2),
    reason1 = _useState46[0],
    setReason1 = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState48 = _slicedToArray(_useState47, 2),
    reason = _useState48[0],
    setReason = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState50 = _slicedToArray(_useState49, 2),
    unitInfo = _useState50[0],
    setUnitInfo = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState52 = _slicedToArray(_useState51, 2),
    departmentInfo = _useState52[0],
    setDepartmentInfo = _useState52[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _resItemUnit$data;
          var resItemUnit = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__/* .ENDPOINT_URL */ .m, "/department"));
          var currentBranch = localStorage.getItem('selectedBranch') || 'HQ';
          var filteredUnits = (((_resItemUnit$data = resItemUnit.data) === null || _resItemUnit$data === void 0 ? void 0 : _resItemUnit$data.data) || []).filter(d => !d.branchId || d.branchId === currentBranch);
          setUnitInfo(filteredUnits);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetch() {
        return _ref0.apply(this, arguments);
      };
    }();
    handleFetch();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2, _res$data3, _res$data4;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__/* .ENDPOINT_URL */ .m, "/get-employee/").concat(id));
          setJoinDate(res.data.data.joinDate);
          setEmployeeName(res.data.data.employeeName);
          setEmployeeId(res.data.data.employeeId);
          setEmployeeAddress(res.data.data.employeeAddress);
          setEmployeeEmail(res.data.data.employeeEmail);
          setEmployeePhone(res.data.data.employeePhone);
          setEmployeeRole(res.data.data.employeeRole);
          setDepartment(res.data.data.department);
          setDateOfBirth(res.data.data.dateOfBirth);
          setGender(res.data.data.Gender);
          setStatusMarital(res.data.data.statusMarital);
          setIdentifier(res.data.data.identifier);
          setIdentifierNumber(Number(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.identifierNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.identifierNumber) || 0));
          setExpireDate(res.data.data.expireDate);
          setSalary(res.data.data.salary);
          setDescription(res.data.data.description);
          setBankName(res.data.data.bankName);
          setBankAccountNumber(Number(((_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.bankAccountNumber) || ((_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.bankAccountNumber) || 0));
          setOther(res.data.data.other);
          setBounceAllowances(res.data.data.bounceAllowances);
          setFoodBasic(res.data.data.foodBasic);
          setBasicTransport(res.data.data.basicTransport);
          setStatus(res.data.data.status);
          setReason1(res.data.data.reason1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var handleClearUnits = e => {
    e.preventDefault();
    setDepartment('');
  };
  {/** Reason Modal start */}
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState54 = _slicedToArray(_useState53, 2),
    open2 = _useState54[0],
    setOpen2 = _useState54[1];
  var handleOpenUpdateReason = e => {
    e.preventDefault();
    setOpen2(true);
  };
  var handleCloseUpdateReason = () => {
    setOpen2(false);
  };
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_41___default()(Date.now());
  {/** Reason Modal end */}
  {/** Loading Start */}
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState56 = _slicedToArray(_useState55, 2),
    openBack = _useState56[0],
    setOpenBack = _useState56[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    loading = _useState58[0],
    setLoading = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState60 = _slicedToArray(_useState59, 2),
    loadingOpenModal = _useState60[0],
    setLoadingOpenModal = _useState60[1];
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState62 = _slicedToArray(_useState61, 2),
    ErrorOpenModal = _useState62[0],
    setErrorOpenModal = _useState62[1];
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState64 = _slicedToArray(_useState63, 2),
    openAutocomplete2 = _useState64[0],
    setOpenAutocomplete2 = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    modalOpenLoading = _useState66[0],
    setModalOpenLoading = _useState66[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
    setModalOpenLoading(false);
  };
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setOpen2(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setOpen2(false);
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
  };
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleSubmitCategory = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        department: departmentInfo,
        branchId: localStorage.getItem('selectedBranch') || 'HQ'
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__/* .ENDPOINT_URL */ .m, "/create-department"), data);
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
      return _ref10.apply(this, arguments);
    };
  }();
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      var data = {
        idInfo: id,
        person: user.data.userName + ' Modify EMPLOYEE EMP-' + String(employeeId).padStart(6, '0'),
        reason,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__/* .ENDPOINT_URL */ .m, "/create-notification/"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateComment() {
      return _ref11.apply(this, arguments);
    };
  }();
  {/** Loading End */}
  var handleSubmit = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        joinDate,
        employeeName,
        employeeAddress,
        employeeEmail,
        employeePhone,
        employeeRole,
        department,
        dateOfBirth,
        Gender,
        statusMarital,
        identifier,
        identifierNumber,
        expireDate,
        status,
        reason1,
        salary,
        description,
        bankAccountNumber,
        bankName,
        employeeId,
        other,
        bounceAllowances,
        foodBasic,
        basicTransport,
        updateS: false,
        branchId: localStorage.getItem('selectedBranch') || 'HQ'
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__/* .ENDPOINT_URL */ .m, "/update-employee/").concat(id), data);
        if (res) {
          handleOpen();
          handleCreateComment();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmit(_x2) {
      return _ref12.apply(this, arguments);
    };
  }();
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "update Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleOpenUpdateReason
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    variant: "h6"
  }, "Employee Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_38__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_39__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_37__/* .DemoContainer */ .j, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__/* .DatePicker */ .l, {
    required: true,
    name: "joinDate",
    label: "Join Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_41___default()(joinDate),
    onChange: date => setJoinDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    required: true,
    id: "employeeId",
    label: "Employee Id",
    value: employeeId !== undefined ? employeeId : '',
    onChange: e => setEmployeeId(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    id: "Gender"
  }, "Gender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    id: "Gender",
    row: true,
    value: Gender,
    onChange: e => setGender(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "Female",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null),
    label: "Female"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "Male",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null),
    label: "Male"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "employeeName",
    label: "Employee Name",
    value: employeeName,
    onChange: e => setEmployeeName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_38__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_39__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_37__/* .DemoContainer */ .j, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__/* .DatePicker */ .l, {
    required: true,
    name: "dateOfBirth",
    label: "Birth Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_41___default()(dateOfBirth),
    onChange: date => setDateOfBirth(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "employeeAddress",
    label: "Employee Address",
    value: employeeAddress,
    onChange: e => setEmployeeAddress(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "employeeEmail",
    label: "Email",
    value: employeeEmail,
    onChange: e => setEmployeeEmail(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "employeePhone",
    label: "Phone Number",
    value: employeePhone,
    onChange: e => setEmployeePhone(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    required: true,
    id: "employeeRole",
    label: "Grade",
    value: employeeRole,
    onChange: e => setEmployeeRole(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, department !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    label: "Department",
    value: department,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Clear",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    id: "department",
    options: unitInfo,
    getOptionLabel: Option => Option.department.toUpperCase(),
    onChange: (e, newValue) => setDepartment(newValue.department),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    PaperComponent: _ref13 => {
      var children = _ref13.children,
        other = _objectWithoutProperties(_ref13, _excluded4);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, _extends({}, other, {
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
      }, "Add New Department")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, _extends({}, params, {
      label: "Department",
      required: true
    }))
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    htmlFor: "status"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    required: true,
    id: "status",
    value: status !== undefined ? status : 'undefined',
    onChange: e => setStatus(e.target.value),
    label: "Status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "Employed"
  }, "Employed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "Suspended"
  }, "Suspended"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "Fired"
  }, "Fired"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "Resign"
  }, "Resign")))), status !== undefined && status !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    required: status === 'Suspended' || status === 'Fired' || status === 'Resign',
    id: "reason1",
    name: "reason1",
    value: reason1 !== undefined ? reason1 : '',
    label: "Reason",
    multiline: true,
    rows: 2,
    onChange: e => setReason1(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "secondTable",
    style: {
      fontSize: '15px',
      marginBottom: '0px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    colSpan: 5,
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      backgroundColor: '#316FF6',
      color: 'white'
    }
  }, " Salary Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Basic wage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Transport allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Food allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Bounce allowances 3%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Other"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    required: true,
    size: "small",
    id: "salary",
    value: salary !== undefined ? salary : '',
    onChange: e => setSalary(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    required: true,
    size: "small",
    id: "basicTransport",
    value: basicTransport !== undefined ? basicTransport : '',
    onChange: e => setBasicTransport(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    required: true,
    size: "small",
    id: "foodBasic",
    value: foodBasic !== undefined ? foodBasic : '',
    onChange: e => setFoodBasic(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    required: true,
    size: "small",
    id: "bounceAllowances",
    value: bounceAllowances !== undefined ? bounceAllowances : '',
    onChange: e => setBounceAllowances(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    required: true,
    size: "small",
    id: "other",
    value: other !== undefined ? other : '',
    onChange: e => setOther(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "bankName",
    label: "Bank Name",
    value: bankName ? bankName : '',
    onChange: e => setBankName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "bankAccountNumber",
    label: "Bank Account Number",
    value: bankAccountNumber ? bankAccountNumber : '',
    onChange: e => setBankAccountNumber(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    htmlFor: "identifier"
  }, "Identifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    id: "identifier",
    value: identifier,
    onChange: e => setIdentifier(e.target.value),
    label: "Identifier"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "Passport"
  }, "Passport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "National-ID"
  }, "National-ID")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "identifierNumber",
    label: "Identifier Number",
    value: identifierNumber,
    onChange: e => setIdentifierNumber(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_38__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_39__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_37__/* .DemoContainer */ .j, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__/* .DatePicker */ .l, {
    required: true,
    name: "expireDate",
    label: "Identifier Expire Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_41___default()(expireDate),
    onChange: date => setExpireDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    id: "statusMarital"
  }, "Status Marital"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    id: "statusMarital",
    row: true,
    value: statusMarital,
    onChange: e => setStatusMarital(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "Single",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null),
    label: "Single"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "Married",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null),
    label: "Married"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "description",
    name: "description",
    value: description,
    label: "Description",
    multiline: true,
    rows: 4,
    onChange: e => setDescription(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, "Do you want to stop updating employee ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "txt2"
  }, " If you stop updating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
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
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: open2,
    onClose: handleCloseUpdateReason,
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
    onClick: handleCloseUpdateReason,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Reason Of Updating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
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
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .A, {
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
    type: "button",
    onClick: handleClose,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: handleCloseOpenAutocomplete2,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Create Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmitCategory
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    id: "department",
    name: "department",
    value: departmentInfo,
    label: "Department",
    onChange: e => setDepartmentInfo(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .A, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeUpdateView);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 42600
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ }

}]);