"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[1919],{

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

/***/ 41919
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73068);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99571);
/* harmony import */ var _component_SidebarDash1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49377);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68525);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55746);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29428);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68864);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53215);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71543);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(69307);
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(47767);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(92659);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(82299);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(65821);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(40301);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(39781);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(83818);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(95236);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(33829);
/* harmony import */ var _utils_isMobile__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(2650);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(14977);
var _excluded = ["className"];
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





































var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, _extends({}, props, {
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
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay, {
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
function CustomerForm() {
  var isMobile = (0,_utils_isMobile__WEBPACK_IMPORTED_MODULE_49__/* .useIsMobile */ .al)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_36__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
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
        return _ref5.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__/* .ENDPOINT_URL */ .m, "/create-customer");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    customerType = _useState2[0],
    setCustomerType = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    designation = _useState4[0],
    setDesignation = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    customerFirstName = _useState6[0],
    setCustomerFirstName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    customerLastName = _useState8[0],
    setCustomerLastName = _useState8[1];
  var customerFullName = customerFirstName !== '' ? designation + '. ' + customerFirstName + " " + customerLastName : '';
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    companyName = _useState0[0],
    setCompanyName = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    customerEmail = _useState10[0],
    setCustomerEmail = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    customerCompanyPhone = _useState12[0],
    setCustomerCompanyPhone = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    customerPhone = _useState14[0],
    setCustomerPhone = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    currency = _useState16[0],
    setCurrency = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    paymentTerms = _useState18[0],
    setPaymentTerms = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    Customer = _useState20[0],
    setCustomer = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    billingAddress = _useState22[0],
    setBillingAddress = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    billingCity = _useState24[0],
    setBillingCity = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    shippingAddress = _useState26[0],
    setShippingAddress = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    shippingCity = _useState28[0],
    setShippingCity = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    customerDescription = _useState30[0],
    setCustomerDescription = _useState30[1];
  var dateComment = new Date();
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    openBack = _useState32[0],
    setOpenBack = _useState32[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    loading = _useState34[0],
    setLoading = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    loadingOpenModal = _useState36[0],
    setLoadingOpenModal = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    ErrorOpenModal = _useState38[0],
    setErrorOpenModal = _useState38[1];
  var handleRadioChange = e => {
    setCustomerType(e.target.value);
  };
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
    // Reset form fields
    setCustomerType("");
    setDesignation("");
    setCustomerFirstName("");
    setCustomerLastName("");
    setCompanyName("");
    setCustomerEmail("");
    setCustomerCompanyPhone("");
    setCustomerPhone("");
    setCurrency("");
    setPaymentTerms("");
    setCustomer("");
    setBillingAddress("");
    setBillingCity("");
    setShippingAddress("");
    setShippingCity("");
    setCustomerDescription("");
    setSaving('');
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
    var _ref6 = _asyncToGenerator(function* (ReferenceInfo) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: Customer,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__/* .ENDPOINT_URL */ .m, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x) {
      return _ref6.apply(this, arguments);
    };
  }();
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState40 = _slicedToArray(_useState39, 2),
    saving = _useState40[0],
    setSaving = _useState40[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      if (!customerType || !Customer) {
        react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .oR.error("Please select a Customer Type and a Name for Billing before saving.");
        return;
      }
      setSaving('true');
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A)(),
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
        Customer,
        credit: 0,
        synced: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.post(apiUrl, {
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
          Customer,
          credit: 0,
          synced: false
        });
        if (res) {
          var ReferenceInfo = res.data.data._id;
          handleCreateNotification(ReferenceInfo);
          handleOpen();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x2) {
      return _ref7.apply(this, arguments);
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      sx: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#F8FAFC',
        pb: 'calc(90px + env(safe-area-inset-bottom, 0px))'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      onClick: () => navigate(-1),
      sx: {
        color: '#ffffff',
        p: 0.5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      variant: "subtitle1",
      sx: {
        fontWeight: 800,
        lineHeight: 1.2,
        color: '#ffffff'
      }
    }, "New Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      variant: "caption",
      sx: {
        color: '#E0E7FF'
      }
    }, Customer || 'Fill Details'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, {
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
    }, saving === 'true' ? 'Saving...' : 'Save')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      sx: {
        p: 2
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, {
      sx: {
        borderRadius: 3.5,
        p: 2.5,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase',
        mb: 1.5,
        display: 'block'
      }
    }, "Customer Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
      component: "fieldset",
      sx: {
        mb: 2
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      row: true,
      value: customerType,
      onChange: handleRadioChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      value: "Business",
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
        size: "small"
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        variant: "body2",
        sx: {
          fontWeight: 600
        }
      }, "Business")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      value: "Individual",
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
        size: "small"
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        variant: "body2",
        sx: {
          fontWeight: 600
        }
      }, "Individual")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
      container: true,
      spacing: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
      fullWidth: true,
      required: true,
      size: "small",
      label: "Display Name / Billing Name *",
      value: Customer,
      onChange: val => setCustomer(val),
      mode: "upper"
    })), customerType === 'Business' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Company Name",
      value: companyName,
      onChange: val => setCompanyName(val),
      mode: "upper"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "First Name",
      value: customerFirstName,
      onChange: val => setCustomerFirstName(val),
      mode: "upper"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Last Name",
      value: customerLastName,
      onChange: val => setCustomerLastName(val),
      mode: "upper"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, {
      sx: {
        borderRadius: 3.5,
        p: 2.5,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase',
        mb: 1.5,
        display: 'block'
      }
    }, "Contact Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
      container: true,
      spacing: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Email Address",
      type: "email",
      value: customerEmail,
      onChange: e => setCustomerEmail(e.target.value)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Company Phone",
      value: customerCompanyPhone,
      onChange: e => setCustomerCompanyPhone(e.target.value)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
      item: true,
      xs: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Mobile Phone",
      value: customerPhone,
      onChange: e => setCustomerPhone(e.target.value)
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, {
      sx: {
        borderRadius: 3.5,
        p: 2.5,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase',
        mb: 1.5,
        display: 'block'
      }
    }, "Address & Notes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
      container: true,
      spacing: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "Billing Address",
      value: billingAddress,
      onChange: val => setBillingAddress(val),
      mode: "upper"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
      fullWidth: true,
      size: "small",
      label: "City / Location",
      value: billingCity,
      onChange: val => setBillingCity(val),
      mode: "upper"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
      fullWidth: true,
      multiline: true,
      rows: 3,
      size: "small",
      label: "Remarks / Notes",
      value: customerDescription,
      onChange: val => setCustomerDescription(val),
      mode: "upper"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, {
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
    }, saving === 'true' ? 'Saving Customer...' : 'Save Customer')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
      open: loadingOpenModal,
      onClose: handleClose
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      sx: _objectSpread(_objectSpread({}, style), {}, {
        width: '90%',
        maxWidth: 400,
        borderRadius: 4,
        textAlign: 'center',
        p: 3
      })
    }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
      sx: {
        color: 'green',
        fontSize: 48,
        mb: 1
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      variant: "h6",
      sx: {
        fontWeight: 800
      }
    }, "Saved Successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, {
      fullWidth: true,
      variant: "contained",
      onClick: () => navigate('/CustomerViewAdmin'),
      sx: {
        mt: 2,
        backgroundColor: '#30368a',
        borderRadius: 2
      }
    }, "Go to Customers")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
      open: ErrorOpenModal,
      onClose: handleCloseError
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      sx: _objectSpread(_objectSpread({}, style), {}, {
        width: '90%',
        maxWidth: 400,
        borderRadius: 4,
        textAlign: 'center',
        p: 3
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A, {
      sx: {
        color: 'red',
        fontSize: 48,
        mb: 1
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      variant: "h6",
      sx: {
        fontWeight: 800
      }
    }, "Error Occurred"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      variant: "body2",
      sx: {
        color: '#64748B',
        mt: 1
      }
    }, "Please verify all required fields."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, {
      fullWidth: true,
      variant: "outlined",
      onClick: handleCloseError,
      sx: {
        mt: 2,
        borderRadius: 2
      }
    }, "Close"))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Add new customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SidebarDash1__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '20px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    row: true,
    required: true,
    name: "customerType",
    value: customerType,
    onChange: handleRadioChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    value: "Individual",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null),
    label: "Individual"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    value: "Business",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null),
    label: "Business"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, " ", customerType, " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    id: "designation"
  }, "Designation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    required: customerType === 'Individual',
    id: "designation",
    value: designation,
    onChange: e => setDesignation(e.target.value),
    name: "designation",
    label: "Designation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "Mr"
  }, "Mr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "Ms"
  }, "Ms")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
    required: customerType === "Individual",
    id: "customerFirstName",
    name: "customerFirstName",
    value: customerFirstName,
    label: "First Name",
    onChange: val => setCustomerFirstName(val),
    sx: {
      width: "100%",
      backgroundColor: "white"
    },
    mode: "upper"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
    required: customerType === "Individual",
    id: "customerLastName",
    name: "customerLastName",
    value: customerLastName,
    label: "Last Name",
    onChange: val => setCustomerLastName(val),
    sx: {
      width: "100%",
      backgroundColor: "white"
    },
    mode: "upper"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
    required: customerType === "Individual",
    id: "customerFullName",
    name: "customerFullName",
    value: customerFullName,
    label: "Full Name",
    sx: {
      width: "100%",
      backgroundColor: "white"
    },
    mode: "upper"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
    required: customerType === "Business",
    id: "companyName",
    name: "companyName",
    value: companyName,
    label: "Company Name",
    onChange: val => setCompanyName(val),
    sx: {
      width: "100%",
      backgroundColor: "white"
    },
    mode: "upper"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      minWidth: "97%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    id: "Customer"
  }, "Select Name for Billing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    required: true,
    id: "Customer",
    value: Customer,
    onChange: e => setCustomer(e.target.value),
    name: "Customer",
    label: "Select Name for Billing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: companyName
  }, companyName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: designation + '. ' + customerFirstName + ' ' + customerLastName
  }, designation + '. ' + customerFirstName + ' ' + customerLastName)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      minWidth: "97%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    id: "currency"
  }, "Currency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    id: "currency",
    value: currency,
    onChange: e => setCurrency(e.target.value),
    name: "currency",
    label: "currency"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "USD Dollar"
  }, "USD Dollar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "FC Congolais"
  }, "FC Congolais")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    sx: {
      minWidth: "97%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    id: "paymentTerms"
  }, "Payment Terms"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    id: "paymentTerms",
    value: paymentTerms,
    onChange: e => setPaymentTerms(e.target.value),
    name: "paymentTerms",
    label: "Payment Terms"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "Net 3"
  }, "Net 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "Net 10"
  }, "Net 10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "Net 15"
  }, "Net 15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "Net 20"
  }, "Net 20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "Net 25"
  }, "Net 25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "Due end of the month"
  }, "Due end of the month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    value: "Due on Receipt"
  }, "Due on Receipt")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
    required: true,
    id: "billingAddress",
    name: "billingAddress",
    value: billingAddress,
    label: "Billing Address",
    onChange: val => setBillingAddress(val),
    sx: {
      width: "100%",
      backgroundColor: "white"
    },
    mode: "upper"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
    required: true,
    id: "billingCity",
    name: "billingCity",
    value: billingCity,
    label: "Billing City",
    onChange: val => setBillingCity(val),
    sx: {
      width: "100%",
      backgroundColor: "white"
    },
    mode: "upper"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
    id: "shippingAddress",
    name: "shippingAddress",
    value: shippingAddress,
    label: "Shipping Address",
    onChange: val => setShippingAddress(val),
    sx: {
      width: "100%",
      backgroundColor: "white"
    },
    mode: "upper"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
    id: "shippingCity",
    name: "shippingCity",
    value: shippingCity,
    label: "Shipping City",
    onChange: val => setShippingCity(val),
    sx: {
      width: "100%",
      backgroundColor: "white"
    },
    mode: "upper"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_SmartTextInput__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
    id: "customerDescription",
    name: "customerDescription",
    value: customerDescription,
    label: "Description",
    multiline: true,
    rows: 4,
    onChange: val => setCustomerDescription(val),
    sx: {
      width: "100%",
      backgroundColor: "white"
    },
    mode: "upper"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, saving !== 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "btnCustomer6",
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: openBack,
    onClose: handleCloseBack,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null, "Do you want to stop creating customer ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "submit",
    onClick: () => navigate('/CustomerViewAdmin'),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "submit",
    onClick: handleCloseBack,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
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
    onClick: () => handleDecision('stay'),
    className: "btnCustomer"
  }, "Add New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    onClick: () => handleDecision('previous'),
    className: "btnCustomer"
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A, {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerForm);
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

/***/ 49377
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _SidebarDash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4640);


function SidebarDash1(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SidebarDash__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarDash1);
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
    if (value && typeof value === 'string' && value.trim()) {
      var polished = (0,_utils_textAssistUtils__WEBPACK_IMPORTED_MODULE_5__/* .polishText */ .LQ)(value, mode);
      if (polished !== value) {
        notifyChange(polished);
      }
    }
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
}];

// Curated vocabulary for word-by-word Damerau-Levenshtein spellchecking
var ENGLISH_FRENCH_VOCABULARY = new Set([
// Numbers (English & French)
'ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'TWENTY', 'THIRTY', 'FORTY', 'FIFTY', 'HUNDRED', 'THOUSAND', 'UN', 'DEUX', 'TROIS', 'QUATRE', 'CINQ', 'SIX', 'SEPT', 'HUIT', 'NEUF', 'DIX', 'ONZE', 'DOUZE', 'TREIZE', 'QUATORZE', 'QUINZE', 'SEIZE', 'VINGT', 'TRENTE', 'QUARANTE', 'CINQUANTE', 'CENT', 'MILLE',
// Common English Core Words & Prepositions
'THE', 'BE', 'TO', 'OF', 'OFF', 'ON', 'UP', 'DOWN', 'AND', 'A', 'IN', 'THAT', 'HAVE', 'I', 'IT', 'FOR', 'NOT', 'WITH', 'HE', 'AS', 'YOU', 'DO', 'AT', 'THIS', 'BUT', 'HIS', 'BY', 'FROM', 'THEY', 'WE', 'SAY', 'HER', 'SHE', 'OR', 'AN', 'WILL', 'MY', 'ALL', 'WOULD', 'THERE', 'THEIR', 'WHAT', 'SO', 'OUT', 'IF', 'ABOUT', 'WHO', 'GET', 'WHICH', 'GO', 'ME', 'WHEN', 'MAKE', 'CAN', 'LIKE', 'TIME', 'NO', 'JUST', 'HIM', 'KNOW', 'TAKE', 'PEOPLE', 'INTO', 'YEAR', 'YOUR', 'GOOD', 'SOME', 'COULD', 'THEM', 'SEE', 'OTHER', 'THAN', 'THEN', 'NOW', 'LOOK', 'ONLY', 'COME', 'ITS', 'OVER', 'UNDER', 'THINK', 'ALSO', 'BACK', 'AFTER', 'USE', 'HOW', 'OUR', 'WORK', 'FIRST', 'WELL', 'WAY', 'EVEN', 'NEW', 'OLD', 'WANT', 'BECAUSE', 'ANY', 'THESE', 'GIVE', 'DAY', 'MOST', 'US', 'IS', 'ARE', 'WAS', 'WERE', 'BEEN', 'DONE', 'DID', 'DOES', 'DOING', 'TEST', 'TESTS', 'TESTED', 'TESTING', 'WRONG', 'LIFE', 'ORDER', 'ORDERS', 'CHECK', 'CHECKS', 'FOLLOW', 'FOLLOWS', 'FOLLOWED', 'FOLLOWING', 'BROKEN', 'BURNT', 'BLOCKED', 'LEAK', 'LEAKS', 'CLEAN', 'CLEANED', 'SERVICE', 'SERVICES', 'REPAIR', 'REPAIRS', 'REPAIRED', 'REPLACED', 'INSPECT', 'INSPECTED', 'INSPECTION', 'DIAGNOSTIC', 'OPERATIONAL', 'MAINTENANCE', 'LEFT', 'RIGHT', 'TOP', 'BOTTOM', 'FRONT', 'REAR', 'FAST', 'SLOW', 'SAFE', 'OPEN', 'CLOSE', 'CLOSED', 'BAD', 'TRUE', 'FALSE',
// Common French Core Words
'LE', 'LA', 'LES', 'UN', 'UNE', 'DES', 'DU', 'DE', 'AU', 'AUX', 'EN', 'DANS', 'SUR', 'SOUS', 'PAR', 'POUR', 'AVEC', 'SANS', 'VERS', 'CHEZ', 'CE', 'CET', 'CETTE', 'CES', 'MON', 'MA', 'MES', 'TON', 'TA', 'TES', 'SON', 'SA', 'SES', 'NOTRE', 'NOS', 'VOTRE', 'VOS', 'LEUR', 'LEURS', 'JE', 'TU', 'IL', 'ELLE', 'ON', 'NOUS', 'VOUS', 'ILS', 'ELLES', 'ME', 'TE', 'SE', 'LUI', 'MOI', 'TOI', 'SOI', 'EUX', 'QUI', 'QUE', 'QUOI', 'DONT', 'OU', 'FAIT', 'FAIRE', 'ETRE', 'AVOIR', 'PAS', 'PLUS', 'BIEN', 'BON', 'BONNE', 'MAUVAIS', 'JOUR', 'JOURS', 'MOIS', 'ANNEE', 'TEMPS', 'CHANGER', 'CHANGE', 'CHANGEMENT', 'REMPLACER', 'REMPLACEMENT', 'NETTOYER', 'NETTOYAGE', 'VERIFIER', 'VERIFICATION', 'REGLER', 'REGLAGE',
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

  // 3. For short words (length <= 3), do NOT fuzzy match to prevent accidental collapse
  if (upper.length <= 3) {
    return upper;
  }

  // 4. Find closest match in vocabulary via Damerau-Levenshtein distance (for words length >= 4)
  var bestMatch = null;
  var bestDist = 999;
  for (var vocabWord of ENGLISH_FRENCH_VOCABULARY) {
    // Only test words of similar length (within 2 characters)
    if (Math.abs(vocabWord.length - upper.length) > 2) continue;
    var dist = damerauLevenshtein(upper, vocabWord);
    // Allow edit distance 1 for short words (<=5 chars), distance 2 for words >=6 chars
    var maxAllowed = vocabWord.length <= 5 ? 1 : 2;
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