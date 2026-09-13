"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[2517,6934],{

/***/ 9483
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
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
}), 'KeyboardArrowDown');

/***/ },

/***/ 39118
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
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), 'KeyboardArrowUp');

/***/ },

/***/ 72517
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProjectView_ProjectPhase)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(69067);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(75659);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(15607);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/Stepper/stepperClasses.js


function getStepperUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiStepper', slot);
}
const stepperClasses = (0,generateUtilityClasses/* default */.A)('MuiStepper', ['root', 'horizontal', 'vertical', 'nonLinear', 'alternativeLabel']);
/* harmony default export */ const Stepper_stepperClasses = ((/* unused pure expression or super */ null && (stepperClasses)));
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(28466);
;// ./node_modules/@mui/material/Stepper/StepperContext.js
/* unused harmony import specifier */ var React;

/**
 * Provides information about the current step in Stepper.
 */
const StepperContext = /*#__PURE__*/react.createContext({});
if (false) // removed by dead control flow
{}

/**
 * Returns the current StepperContext or an empty object if no StepperContext
 * has been defined in the component tree.
 */
function useStepperContext() {
  return React.useContext(StepperContext);
}
/* harmony default export */ const Stepper_StepperContext = (StepperContext);
;// ./node_modules/@mui/material/Step/StepContext.js
/* unused harmony import specifier */ var StepContext_React;

/**
 * Provides information about the current step in Stepper.
 */
const StepContext = /*#__PURE__*/react.createContext({});
if (false) // removed by dead control flow
{}

/**
 * Returns the current StepContext or an empty object if no StepContext
 * has been defined in the component tree.
 */
function useStepContext() {
  return StepContext_React.useContext(StepContext);
}
/* harmony default export */ const Step_StepContext = (StepContext);
;// ./node_modules/@mui/material/StepConnector/stepConnectorClasses.js


function getStepConnectorUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiStepConnector', slot);
}
const stepConnectorClasses = (0,generateUtilityClasses/* default */.A)('MuiStepConnector', ['root', 'horizontal', 'vertical', 'alternativeLabel', 'active', 'completed', 'disabled', 'line', 'lineHorizontal', 'lineVertical']);
/* harmony default export */ const StepConnector_stepConnectorClasses = ((/* unused pure expression or super */ null && (stepConnectorClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/StepConnector/StepConnector.js
'use client';



const _excluded = ["className"];











const useUtilityClasses = ownerState => {
  const {
    classes,
    orientation,
    alternativeLabel,
    active,
    completed,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', orientation, alternativeLabel && 'alternativeLabel', active && 'active', completed && 'completed', disabled && 'disabled'],
    line: ['line', `line${(0,capitalize/* default */.A)(orientation)}`]
  };
  return (0,composeClasses/* default */.A)(slots, getStepConnectorUtilityClass, classes);
};
const StepConnectorRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiStepConnector',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.alternativeLabel && styles.alternativeLabel, ownerState.completed && styles.completed];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  flex: '1 1 auto'
}, ownerState.orientation === 'vertical' && {
  marginLeft: 12 // half icon
}, ownerState.alternativeLabel && {
  position: 'absolute',
  top: 8 + 4,
  left: 'calc(-50% + 20px)',
  right: 'calc(50% + 20px)'
}));
const StepConnectorLine = (0,styled/* default */.Ay)('span', {
  name: 'MuiStepConnector',
  slot: 'Line',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.line, styles[`line${(0,capitalize/* default */.A)(ownerState.orientation)}`]];
  }
})(({
  ownerState,
  theme
}) => {
  const borderColor = theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[600];
  return (0,esm_extends/* default */.A)({
    display: 'block',
    borderColor: theme.vars ? theme.vars.palette.StepConnector.border : borderColor
  }, ownerState.orientation === 'horizontal' && {
    borderTopStyle: 'solid',
    borderTopWidth: 1
  }, ownerState.orientation === 'vertical' && {
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
    minHeight: 24
  });
});
const StepConnector = /*#__PURE__*/react.forwardRef(function StepConnector(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiStepConnector'
  });
  const {
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const {
    alternativeLabel,
    orientation = 'horizontal'
  } = react.useContext(Stepper_StepperContext);
  const {
    active,
    disabled,
    completed
  } = react.useContext(Step_StepContext);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    alternativeLabel,
    orientation,
    active,
    completed,
    disabled
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StepConnectorRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StepConnectorLine, {
      className: classes.line,
      ownerState: ownerState
    })
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const StepConnector_StepConnector = (StepConnector);
;// ./node_modules/@mui/material/Stepper/Stepper.js
'use client';



const Stepper_excluded = ["activeStep", "alternativeLabel", "children", "className", "component", "connector", "nonLinear", "orientation"];











const Stepper_useUtilityClasses = ownerState => {
  const {
    orientation,
    nonLinear,
    alternativeLabel,
    classes
  } = ownerState;
  const slots = {
    root: ['root', orientation, nonLinear && 'nonLinear', alternativeLabel && 'alternativeLabel']
  };
  return (0,composeClasses/* default */.A)(slots, getStepperUtilityClass, classes);
};
const StepperRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiStepper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.alternativeLabel && styles.alternativeLabel, ownerState.nonLinear && styles.nonLinear];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  display: 'flex'
}, ownerState.orientation === 'horizontal' && {
  flexDirection: 'row',
  alignItems: 'center'
}, ownerState.orientation === 'vertical' && {
  flexDirection: 'column'
}, ownerState.alternativeLabel && {
  alignItems: 'flex-start'
}));
const defaultConnector = /*#__PURE__*/(0,jsx_runtime.jsx)(StepConnector_StepConnector, {});
const Stepper = /*#__PURE__*/react.forwardRef(function Stepper(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiStepper'
  });
  const {
      activeStep = 0,
      alternativeLabel = false,
      children,
      className,
      component = 'div',
      connector = defaultConnector,
      nonLinear = false,
      orientation = 'horizontal'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Stepper_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    nonLinear,
    alternativeLabel,
    orientation,
    component
  });
  const classes = Stepper_useUtilityClasses(ownerState);
  const childrenArray = react.Children.toArray(children).filter(Boolean);
  const steps = childrenArray.map((step, index) => {
    return /*#__PURE__*/react.cloneElement(step, (0,esm_extends/* default */.A)({
      index,
      last: index + 1 === childrenArray.length
    }, step.props));
  });
  const contextValue = react.useMemo(() => ({
    activeStep,
    alternativeLabel,
    connector,
    nonLinear,
    orientation
  }), [activeStep, alternativeLabel, connector, nonLinear, orientation]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Stepper_StepperContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StepperRoot, (0,esm_extends/* default */.A)({
      as: component,
      ownerState: ownerState,
      className: (0,clsx/* default */.A)(classes.root, className),
      ref: ref
    }, other, {
      children: steps
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Stepper_Stepper = (Stepper);
;// ./node_modules/@mui/material/Step/stepClasses.js


function getStepUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiStep', slot);
}
const stepClasses = (0,generateUtilityClasses/* default */.A)('MuiStep', ['root', 'horizontal', 'vertical', 'alternativeLabel', 'completed']);
/* harmony default export */ const Step_stepClasses = ((/* unused pure expression or super */ null && (stepClasses)));
;// ./node_modules/@mui/material/Step/Step.js
'use client';



const Step_excluded = ["active", "children", "className", "component", "completed", "disabled", "expanded", "index", "last"];












const Step_useUtilityClasses = ownerState => {
  const {
    classes,
    orientation,
    alternativeLabel,
    completed
  } = ownerState;
  const slots = {
    root: ['root', orientation, alternativeLabel && 'alternativeLabel', completed && 'completed']
  };
  return (0,composeClasses/* default */.A)(slots, getStepUtilityClass, classes);
};
const StepRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiStep',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.alternativeLabel && styles.alternativeLabel, ownerState.completed && styles.completed];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({}, ownerState.orientation === 'horizontal' && {
  paddingLeft: 8,
  paddingRight: 8
}, ownerState.alternativeLabel && {
  flex: 1,
  position: 'relative'
}));
const Step = /*#__PURE__*/react.forwardRef(function Step(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiStep'
  });
  const {
      active: activeProp,
      children,
      className,
      component = 'div',
      completed: completedProp,
      disabled: disabledProp,
      expanded = false,
      index,
      last
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Step_excluded);
  const {
    activeStep,
    connector,
    alternativeLabel,
    orientation,
    nonLinear
  } = react.useContext(Stepper_StepperContext);
  let [active = false, completed = false, disabled = false] = [activeProp, completedProp, disabledProp];
  if (activeStep === index) {
    active = activeProp !== undefined ? activeProp : true;
  } else if (!nonLinear && activeStep > index) {
    completed = completedProp !== undefined ? completedProp : true;
  } else if (!nonLinear && activeStep < index) {
    disabled = disabledProp !== undefined ? disabledProp : true;
  }
  const contextValue = react.useMemo(() => ({
    index,
    last,
    expanded,
    icon: index + 1,
    active,
    completed,
    disabled
  }), [index, last, expanded, active, completed, disabled]);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    active,
    orientation,
    alternativeLabel,
    completed,
    disabled,
    expanded,
    component
  });
  const classes = Step_useUtilityClasses(ownerState);
  const newChildren = /*#__PURE__*/(0,jsx_runtime.jsxs)(StepRoot, (0,esm_extends/* default */.A)({
    as: component,
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: [connector && alternativeLabel && index !== 0 ? connector : null, children]
  }));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Step_StepContext.Provider, {
    value: contextValue,
    children: connector && !alternativeLabel && index !== 0 ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [connector, newChildren]
    }) : newChildren
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Step_Step = (Step);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(18850);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(20561);
;// ./node_modules/@mui/material/internal/svg-icons/CheckCircle.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const CheckCircle = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"
}), 'CheckCircle'));
;// ./node_modules/@mui/material/internal/svg-icons/Warning.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const Warning = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning'));
// EXTERNAL MODULE: ./node_modules/@mui/material/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(75765);
;// ./node_modules/@mui/material/StepIcon/stepIconClasses.js


function getStepIconUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiStepIcon', slot);
}
const stepIconClasses = (0,generateUtilityClasses/* default */.A)('MuiStepIcon', ['root', 'active', 'completed', 'error', 'text']);
/* harmony default export */ const StepIcon_stepIconClasses = (stepIconClasses);
;// ./node_modules/@mui/material/StepIcon/StepIcon.js
'use client';



var _circle;
const StepIcon_excluded = ["active", "className", "completed", "error", "icon"];












const StepIcon_useUtilityClasses = ownerState => {
  const {
    classes,
    active,
    completed,
    error
  } = ownerState;
  const slots = {
    root: ['root', active && 'active', completed && 'completed', error && 'error'],
    text: ['text']
  };
  return (0,composeClasses/* default */.A)(slots, getStepIconUtilityClass, classes);
};
const StepIconRoot = (0,styled/* default */.Ay)(SvgIcon/* default */.A, {
  name: 'MuiStepIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  display: 'block',
  transition: theme.transitions.create('color', {
    duration: theme.transitions.duration.shortest
  }),
  color: (theme.vars || theme).palette.text.disabled,
  [`&.${StepIcon_stepIconClasses.completed}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${StepIcon_stepIconClasses.active}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${StepIcon_stepIconClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
const StepIconText = (0,styled/* default */.Ay)('text', {
  name: 'MuiStepIcon',
  slot: 'Text',
  overridesResolver: (props, styles) => styles.text
})(({
  theme
}) => ({
  fill: (theme.vars || theme).palette.primary.contrastText,
  fontSize: theme.typography.caption.fontSize,
  fontFamily: theme.typography.fontFamily
}));
const StepIcon = /*#__PURE__*/react.forwardRef(function StepIcon(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiStepIcon'
  });
  const {
      active = false,
      className: classNameProp,
      completed = false,
      error = false,
      icon
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, StepIcon_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    active,
    completed,
    error
  });
  const classes = StepIcon_useUtilityClasses(ownerState);
  if (typeof icon === 'number' || typeof icon === 'string') {
    const className = (0,clsx/* default */.A)(classNameProp, classes.root);
    if (error) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(StepIconRoot, (0,esm_extends/* default */.A)({
        as: Warning,
        className: className,
        ref: ref,
        ownerState: ownerState
      }, other));
    }
    if (completed) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(StepIconRoot, (0,esm_extends/* default */.A)({
        as: CheckCircle,
        className: className,
        ref: ref,
        ownerState: ownerState
      }, other));
    }
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(StepIconRoot, (0,esm_extends/* default */.A)({
      className: className,
      ref: ref,
      ownerState: ownerState
    }, other, {
      children: [_circle || (_circle = /*#__PURE__*/(0,jsx_runtime.jsx)("circle", {
        cx: "12",
        cy: "12",
        r: "12"
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(StepIconText, {
        className: classes.text,
        x: "12",
        y: "12",
        textAnchor: "middle",
        dominantBaseline: "central",
        ownerState: ownerState,
        children: icon
      })]
    }));
  }
  return icon;
});
 false ? 0 : void 0;
/* harmony default export */ const StepIcon_StepIcon = (StepIcon);
;// ./node_modules/@mui/material/StepLabel/stepLabelClasses.js


function getStepLabelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiStepLabel', slot);
}
const stepLabelClasses = (0,generateUtilityClasses/* default */.A)('MuiStepLabel', ['root', 'horizontal', 'vertical', 'label', 'active', 'completed', 'error', 'disabled', 'iconContainer', 'alternativeLabel', 'labelContainer']);
/* harmony default export */ const StepLabel_stepLabelClasses = (stepLabelClasses);
;// ./node_modules/@mui/material/StepLabel/StepLabel.js
'use client';



const StepLabel_excluded = ["children", "className", "componentsProps", "error", "icon", "optional", "slotProps", "StepIconComponent", "StepIconProps"];












const StepLabel_useUtilityClasses = ownerState => {
  const {
    classes,
    orientation,
    active,
    completed,
    error,
    disabled,
    alternativeLabel
  } = ownerState;
  const slots = {
    root: ['root', orientation, error && 'error', disabled && 'disabled', alternativeLabel && 'alternativeLabel'],
    label: ['label', active && 'active', completed && 'completed', error && 'error', disabled && 'disabled', alternativeLabel && 'alternativeLabel'],
    iconContainer: ['iconContainer', active && 'active', completed && 'completed', error && 'error', disabled && 'disabled', alternativeLabel && 'alternativeLabel'],
    labelContainer: ['labelContainer', alternativeLabel && 'alternativeLabel']
  };
  return (0,composeClasses/* default */.A)(slots, getStepLabelUtilityClass, classes);
};
const StepLabelRoot = (0,styled/* default */.Ay)('span', {
  name: 'MuiStepLabel',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation]];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  display: 'flex',
  alignItems: 'center',
  [`&.${StepLabel_stepLabelClasses.alternativeLabel}`]: {
    flexDirection: 'column'
  },
  [`&.${StepLabel_stepLabelClasses.disabled}`]: {
    cursor: 'default'
  }
}, ownerState.orientation === 'vertical' && {
  textAlign: 'left',
  padding: '8px 0'
}));
const StepLabelLabel = (0,styled/* default */.Ay)('span', {
  name: 'MuiStepLabel',
  slot: 'Label',
  overridesResolver: (props, styles) => styles.label
})(({
  theme
}) => (0,esm_extends/* default */.A)({}, theme.typography.body2, {
  display: 'block',
  transition: theme.transitions.create('color', {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${StepLabel_stepLabelClasses.active}`]: {
    color: (theme.vars || theme).palette.text.primary,
    fontWeight: 500
  },
  [`&.${StepLabel_stepLabelClasses.completed}`]: {
    color: (theme.vars || theme).palette.text.primary,
    fontWeight: 500
  },
  [`&.${StepLabel_stepLabelClasses.alternativeLabel}`]: {
    marginTop: 16
  },
  [`&.${StepLabel_stepLabelClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
const StepLabelIconContainer = (0,styled/* default */.Ay)('span', {
  name: 'MuiStepLabel',
  slot: 'IconContainer',
  overridesResolver: (props, styles) => styles.iconContainer
})(() => ({
  flexShrink: 0,
  // Fix IE11 issue
  display: 'flex',
  paddingRight: 8,
  [`&.${StepLabel_stepLabelClasses.alternativeLabel}`]: {
    paddingRight: 0
  }
}));
const StepLabelLabelContainer = (0,styled/* default */.Ay)('span', {
  name: 'MuiStepLabel',
  slot: 'LabelContainer',
  overridesResolver: (props, styles) => styles.labelContainer
})(({
  theme
}) => ({
  width: '100%',
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${StepLabel_stepLabelClasses.alternativeLabel}`]: {
    textAlign: 'center'
  }
}));
const StepLabel = /*#__PURE__*/react.forwardRef(function StepLabel(inProps, ref) {
  var _slotProps$label;
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiStepLabel'
  });
  const {
      children,
      className,
      componentsProps = {},
      error = false,
      icon: iconProp,
      optional,
      slotProps = {},
      StepIconComponent: StepIconComponentProp,
      StepIconProps
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, StepLabel_excluded);
  const {
    alternativeLabel,
    orientation
  } = react.useContext(Stepper_StepperContext);
  const {
    active,
    disabled,
    completed,
    icon: iconContext
  } = react.useContext(Step_StepContext);
  const icon = iconProp || iconContext;
  let StepIconComponent = StepIconComponentProp;
  if (icon && !StepIconComponent) {
    StepIconComponent = StepIcon_StepIcon;
  }
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    active,
    alternativeLabel,
    completed,
    disabled,
    error,
    orientation
  });
  const classes = StepLabel_useUtilityClasses(ownerState);
  const labelSlotProps = (_slotProps$label = slotProps.label) != null ? _slotProps$label : componentsProps.label;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StepLabelRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: [icon || StepIconComponent ? /*#__PURE__*/(0,jsx_runtime.jsx)(StepLabelIconContainer, {
      className: classes.iconContainer,
      ownerState: ownerState,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StepIconComponent, (0,esm_extends/* default */.A)({
        completed: completed,
        active: active,
        error: error,
        icon: icon
      }, StepIconProps))
    }) : null, /*#__PURE__*/(0,jsx_runtime.jsxs)(StepLabelLabelContainer, {
      className: classes.labelContainer,
      ownerState: ownerState,
      children: [children ? /*#__PURE__*/(0,jsx_runtime.jsx)(StepLabelLabel, (0,esm_extends/* default */.A)({
        ownerState: ownerState
      }, labelSlotProps, {
        className: (0,clsx/* default */.A)(classes.label, labelSlotProps == null ? void 0 : labelSlotProps.className),
        children: children
      })) : null, optional]
    })]
  }));
});
 false ? 0 : void 0;
StepLabel.muiName = 'StepLabel';
/* harmony default export */ const StepLabel_StepLabel = (StepLabel);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/isMuiElement.js + 1 modules
var isMuiElement = __webpack_require__(18593);
;// ./node_modules/@mui/material/StepButton/stepButtonClasses.js


function getStepButtonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiStepButton', slot);
}
const stepButtonClasses = (0,generateUtilityClasses/* default */.A)('MuiStepButton', ['root', 'horizontal', 'vertical', 'touchRipple']);
/* harmony default export */ const StepButton_stepButtonClasses = (stepButtonClasses);
;// ./node_modules/@mui/material/StepButton/StepButton.js
'use client';



const StepButton_excluded = ["children", "className", "icon", "optional"];













const StepButton_useUtilityClasses = ownerState => {
  const {
    classes,
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation],
    touchRipple: ['touchRipple']
  };
  return (0,composeClasses/* default */.A)(slots, getStepButtonUtilityClass, classes);
};
const StepButtonRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
  name: 'MuiStepButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${StepButton_stepButtonClasses.touchRipple}`]: styles.touchRipple
    }, styles.root, styles[ownerState.orientation]];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  width: '100%',
  padding: '24px 16px',
  margin: '-24px -16px',
  boxSizing: 'content-box'
}, ownerState.orientation === 'vertical' && {
  justifyContent: 'flex-start',
  padding: '8px',
  margin: '-8px'
}, {
  [`& .${StepButton_stepButtonClasses.touchRipple}`]: {
    color: 'rgba(0, 0, 0, 0.3)'
  }
}));
const StepButton = /*#__PURE__*/react.forwardRef(function StepButton(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiStepButton'
  });
  const {
      children,
      className,
      icon,
      optional
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, StepButton_excluded);
  const {
    disabled,
    active
  } = react.useContext(Step_StepContext);
  const {
    orientation
  } = react.useContext(Stepper_StepperContext);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    orientation
  });
  const classes = StepButton_useUtilityClasses(ownerState);
  const childProps = {
    icon,
    optional
  };
  const child = (0,isMuiElement/* default */.A)(children, ['StepLabel']) ? ( /*#__PURE__*/react.cloneElement(children, childProps)) : /*#__PURE__*/(0,jsx_runtime.jsx)(StepLabel_StepLabel, (0,esm_extends/* default */.A)({}, childProps, {
    children: children
  }));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StepButtonRoot, (0,esm_extends/* default */.A)({
    focusRipple: true,
    disabled: disabled,
    TouchRippleProps: {
      className: classes.touchRipple
    },
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: ref,
    ownerState: ownerState,
    "aria-current": active ? 'step' : undefined
  }, other, {
    children: child
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const StepButton_StepButton = (StepButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(86990);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(14073);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(47767);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(99380);
// EXTERNAL MODULE: ./src/js/apiConfig.js
var apiConfig = __webpack_require__(71510);
;// ./src/js/AdminView1/PageView/ProjectView/ProjectPhase.js
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;









function ProjectPhase() {
  var _useParams = (0,dist/* useParams */.g)(),
    id = _useParams.id;
  var _useState = (0,react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    steps = _useState2[0],
    setSteps = _useState2[1];
  var _React$useState = react.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activeStep = _React$useState2[0],
    setActiveStep = _React$useState2[1];
  var _React$useState3 = react.useState({}),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    completed = _React$useState4[0],
    setCompleted = _React$useState4[1];
  (0,react.useEffect)(() => {
    axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/get-projects/").concat(id)).then(res => {
      // Handle the response data here
      var formatDate = res.data.data.phase;
      setSteps(formatDate);
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  }, []);
  var totalSteps = () => {
    return steps.length;
  };
  var completedSteps = () => {
    return Object.keys(completed).length;
  };
  var isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  var allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  var handleNext = () => {
    var newActiveStep = isLastStep() && !allStepsCompleted() ?
    // It's the last step, but not all steps have been completed,
    // find the first step that has been completed
    steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  var handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  var handleStep = step => () => {
    setActiveStep(step);
  };
  var handleComplete = () => {
    var newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement(Stepper_Stepper, {
    nonLinear: true,
    activeStep: activeStep
  }, steps.map((label, index) => /*#__PURE__*/react.createElement(Step_Step, {
    key: label,
    completed: completed[index]
  }, /*#__PURE__*/react.createElement(StepButton_StepButton, {
    color: "inherit",
    onClick: handleStep(index)
  }, label)))), /*#__PURE__*/react.createElement("div", null, allStepsCompleted() ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    sx: {
      mt: 2,
      mb: 1
    }
  }, "Completed")) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    sx: {
      mt: 2,
      mb: 1,
      py: 1
    }
  }, "Phase ", activeStep + 1), /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      pt: 2
    }
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    color: "inherit",
    disabled: activeStep === 0,
    onClick: handleBack,
    sx: {
      mr: 1
    }
  }, "Back"), /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      flex: '1 1 auto'
    }
  }), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: handleNext,
    sx: {
      mr: 1
    }
  }, "Next"), activeStep !== steps.length && (completed[activeStep] ? /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "caption",
    sx: {
      display: 'inline-block'
    }
  }, "Phase ", activeStep + 1, " already completed") : /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: handleComplete
  }, completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Phase'))))));
}
/* harmony default export */ const ProjectView_ProjectPhase = (ProjectPhase);

/***/ },

/***/ 86934
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProjectView_ProjectViewInformation)
});

// EXTERNAL MODULE: ./src/js/component/PrintHeader.js
var PrintHeader = __webpack_require__(77438);
// EXTERNAL MODULE: ./src/js/component/PrintFooter.js
var PrintFooter = __webpack_require__(61296);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./src/js/component/SidebarDash.js
var SidebarDash = __webpack_require__(4640);
// EXTERNAL MODULE: ./src/js/AdminView1/view.css
var view = __webpack_require__(68525);
// EXTERNAL MODULE: ./src/js/AdminView1/PageView/Chartview.css
var Chartview = __webpack_require__(55746);
// EXTERNAL MODULE: ./src/js/AdminView1/PageView/InvoiceView/AdminView.css
var AdminView = __webpack_require__(78448);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(52848);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(69067);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(14073);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(11641);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(8239);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(86990);
// EXTERNAL MODULE: ./node_modules/@mui/material/Menu/Menu.js + 1 modules
var Menu = __webpack_require__(94405);
// EXTERNAL MODULE: ./node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(20973);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(73896);
// EXTERNAL MODULE: ./node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(71543);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(10423);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(75659);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(17437);
// EXTERNAL MODULE: ./node_modules/@mui/system/colorManipulator.js
var colorManipulator = __webpack_require__(771);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(73788);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(28466);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(15607);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/LinearProgress/linearProgressClasses.js


function getLinearProgressUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiLinearProgress', slot);
}
const linearProgressClasses = (0,generateUtilityClasses/* default */.A)('MuiLinearProgress', ['root', 'colorPrimary', 'colorSecondary', 'determinate', 'indeterminate', 'buffer', 'query', 'dashed', 'dashedColorPrimary', 'dashedColorSecondary', 'bar', 'barColorPrimary', 'barColorSecondary', 'bar1Indeterminate', 'bar1Determinate', 'bar1Buffer', 'bar2Indeterminate', 'bar2Buffer']);
/* harmony default export */ const LinearProgress_linearProgressClasses = ((/* unused pure expression or super */ null && (linearProgressClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/LinearProgress/LinearProgress.js
'use client';



const _excluded = ["className", "color", "value", "valueBuffer", "variant"];
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6;













const TRANSITION_DURATION = 4; // seconds
const indeterminate1Keyframe = (0,emotion_react_browser_esm/* keyframes */.i7)(_t || (_t = _`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`));
const indeterminate2Keyframe = (0,emotion_react_browser_esm/* keyframes */.i7)(_t2 || (_t2 = _`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`));
const bufferKeyframe = (0,emotion_react_browser_esm/* keyframes */.i7)(_t3 || (_t3 = _`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`));
const useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    color
  } = ownerState;
  const slots = {
    root: ['root', `color${(0,capitalize/* default */.A)(color)}`, variant],
    dashed: ['dashed', `dashedColor${(0,capitalize/* default */.A)(color)}`],
    bar1: ['bar', `barColor${(0,capitalize/* default */.A)(color)}`, (variant === 'indeterminate' || variant === 'query') && 'bar1Indeterminate', variant === 'determinate' && 'bar1Determinate', variant === 'buffer' && 'bar1Buffer'],
    bar2: ['bar', variant !== 'buffer' && `barColor${(0,capitalize/* default */.A)(color)}`, variant === 'buffer' && `color${(0,capitalize/* default */.A)(color)}`, (variant === 'indeterminate' || variant === 'query') && 'bar2Indeterminate', variant === 'buffer' && 'bar2Buffer']
  };
  return (0,composeClasses/* default */.A)(slots, getLinearProgressUtilityClass, classes);
};
const getColorShade = (theme, color) => {
  if (color === 'inherit') {
    return 'currentColor';
  }
  if (theme.vars) {
    return theme.vars.palette.LinearProgress[`${color}Bg`];
  }
  return theme.palette.mode === 'light' ? (0,colorManipulator/* lighten */.a)(theme.palette[color].main, 0.62) : (0,colorManipulator/* darken */.e$)(theme.palette[color].main, 0.5);
};
const LinearProgressRoot = (0,styled/* default */.Ay)('span', {
  name: 'MuiLinearProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`color${(0,capitalize/* default */.A)(ownerState.color)}`], styles[ownerState.variant]];
  }
})(({
  ownerState,
  theme
}) => (0,esm_extends/* default */.A)({
  position: 'relative',
  overflow: 'hidden',
  display: 'block',
  height: 4,
  zIndex: 0,
  // Fix Safari's bug during composition of different paint.
  '@media print': {
    colorAdjust: 'exact'
  },
  backgroundColor: getColorShade(theme, ownerState.color)
}, ownerState.color === 'inherit' && ownerState.variant !== 'buffer' && {
  backgroundColor: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'currentColor',
    opacity: 0.3
  }
}, ownerState.variant === 'buffer' && {
  backgroundColor: 'transparent'
}, ownerState.variant === 'query' && {
  transform: 'rotate(180deg)'
}));
const LinearProgressDashed = (0,styled/* default */.Ay)('span', {
  name: 'MuiLinearProgress',
  slot: 'Dashed',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.dashed, styles[`dashedColor${(0,capitalize/* default */.A)(ownerState.color)}`]];
  }
})(({
  ownerState,
  theme
}) => {
  const backgroundColor = getColorShade(theme, ownerState.color);
  return (0,esm_extends/* default */.A)({
    position: 'absolute',
    marginTop: 0,
    height: '100%',
    width: '100%'
  }, ownerState.color === 'inherit' && {
    opacity: 0.3
  }, {
    backgroundImage: `radial-gradient(${backgroundColor} 0%, ${backgroundColor} 16%, transparent 42%)`,
    backgroundSize: '10px 10px',
    backgroundPosition: '0 -23px'
  });
}, (0,emotion_react_browser_esm/* css */.AH)(_t4 || (_t4 = _`
    animation: ${0} 3s infinite linear;
  `), bufferKeyframe));
const LinearProgressBar1 = (0,styled/* default */.Ay)('span', {
  name: 'MuiLinearProgress',
  slot: 'Bar1',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.bar, styles[`barColor${(0,capitalize/* default */.A)(ownerState.color)}`], (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar1Indeterminate, ownerState.variant === 'determinate' && styles.bar1Determinate, ownerState.variant === 'buffer' && styles.bar1Buffer];
  }
})(({
  ownerState,
  theme
}) => (0,esm_extends/* default */.A)({
  width: '100%',
  position: 'absolute',
  left: 0,
  bottom: 0,
  top: 0,
  transition: 'transform 0.2s linear',
  transformOrigin: 'left',
  backgroundColor: ownerState.color === 'inherit' ? 'currentColor' : (theme.vars || theme).palette[ownerState.color].main
}, ownerState.variant === 'determinate' && {
  transition: `transform .${TRANSITION_DURATION}s linear`
}, ownerState.variant === 'buffer' && {
  zIndex: 1,
  transition: `transform .${TRANSITION_DURATION}s linear`
}), ({
  ownerState
}) => (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && (0,emotion_react_browser_esm/* css */.AH)(_t5 || (_t5 = _`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `), indeterminate1Keyframe));
const LinearProgressBar2 = (0,styled/* default */.Ay)('span', {
  name: 'MuiLinearProgress',
  slot: 'Bar2',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.bar, styles[`barColor${(0,capitalize/* default */.A)(ownerState.color)}`], (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar2Indeterminate, ownerState.variant === 'buffer' && styles.bar2Buffer];
  }
})(({
  ownerState,
  theme
}) => (0,esm_extends/* default */.A)({
  width: '100%',
  position: 'absolute',
  left: 0,
  bottom: 0,
  top: 0,
  transition: 'transform 0.2s linear',
  transformOrigin: 'left'
}, ownerState.variant !== 'buffer' && {
  backgroundColor: ownerState.color === 'inherit' ? 'currentColor' : (theme.vars || theme).palette[ownerState.color].main
}, ownerState.color === 'inherit' && {
  opacity: 0.3
}, ownerState.variant === 'buffer' && {
  backgroundColor: getColorShade(theme, ownerState.color),
  transition: `transform .${TRANSITION_DURATION}s linear`
}), ({
  ownerState
}) => (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && (0,emotion_react_browser_esm/* css */.AH)(_t6 || (_t6 = _`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `), indeterminate2Keyframe));

/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */
const LinearProgress = /*#__PURE__*/react.forwardRef(function LinearProgress(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiLinearProgress'
  });
  const {
      className,
      color = 'primary',
      value,
      valueBuffer,
      variant = 'indeterminate'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const rootProps = {};
  const inlineStyles = {
    bar1: {},
    bar2: {}
  };
  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      rootProps['aria-valuenow'] = Math.round(value);
      rootProps['aria-valuemin'] = 0;
      rootProps['aria-valuemax'] = 100;
      let transform = value - 100;
      if (isRtl) {
        transform = -transform;
      }
      inlineStyles.bar1.transform = `translateX(${transform}%)`;
    } else if (false) // removed by dead control flow
{}
  }
  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      let transform = (valueBuffer || 0) - 100;
      if (isRtl) {
        transform = -transform;
      }
      inlineStyles.bar2.transform = `translateX(${transform}%)`;
    } else if (false) // removed by dead control flow
{}
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(LinearProgressRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState,
    role: "progressbar"
  }, rootProps, {
    ref: ref
  }, other, {
    children: [variant === 'buffer' ? /*#__PURE__*/(0,jsx_runtime.jsx)(LinearProgressDashed, {
      className: classes.dashed,
      ownerState: ownerState
    }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(LinearProgressBar1, {
      className: classes.bar1,
      ownerState: ownerState,
      style: inlineStyles.bar1
    }), variant === 'determinate' ? null : /*#__PURE__*/(0,jsx_runtime.jsx)(LinearProgressBar2, {
      className: classes.bar2,
      ownerState: ownerState,
      style: inlineStyles.bar2
    })]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const LinearProgress_LinearProgress = (LinearProgress);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(14977);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(37636);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(33198);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 2 modules
var Paper = __webpack_require__(60538);
// EXTERNAL MODULE: ./node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(64137);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(96627);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(86798);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableCell/TableCell.js
var TableCell = __webpack_require__(70691);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(43884);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(844);
// EXTERNAL MODULE: ./node_modules/@mui/material/Modal/Modal.js + 3 modules
var Modal = __webpack_require__(35406);
// EXTERNAL MODULE: ./node_modules/@mui/material/Backdrop/Backdrop.js + 1 modules
var Backdrop = __webpack_require__(47419);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(99380);
// EXTERNAL MODULE: ./src/js/apiConfig.js
var apiConfig = __webpack_require__(71510);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(47767);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(84976);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(74353);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(56655);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/tooltipClasses.js
var tooltipClasses = __webpack_require__(58331);
// EXTERNAL MODULE: ./node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar = __webpack_require__(89828);
// EXTERNAL MODULE: ./node_modules/@mui/material/Drawer/Drawer.js + 1 modules
var Drawer = __webpack_require__(88248);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__(13561);
// EXTERNAL MODULE: ./src/js/features/auth/authSlice.js
var authSlice = __webpack_require__(32005);
// EXTERNAL MODULE: ./src/js/component/NetworkLogoutIcon.js
var NetworkLogoutIcon = __webpack_require__(40301);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Edit.js
var Edit = __webpack_require__(28597);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/LocalPrintshop.js
var LocalPrintshop = __webpack_require__(8659);
// EXTERNAL MODULE: ./src/js/AdminView1/PageView/ProjectView/ProjectPhase.js + 16 modules
var ProjectPhase = __webpack_require__(72517);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/KeyboardArrowDown.js
var KeyboardArrowDown = __webpack_require__(9483);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/KeyboardArrowUp.js
var KeyboardArrowUp = __webpack_require__(39118);
// EXTERNAL MODULE: ./node_modules/react-to-print/lib/index.js
var lib = __webpack_require__(57240);
// EXTERNAL MODULE: ./src/js/component/Loader.js + 1 modules
var Loader = __webpack_require__(65821);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Email.js
var Email = __webpack_require__(41845);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Phone.js
var Phone = __webpack_require__(19873);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Web.js
var Web = __webpack_require__(67415);
// EXTERNAL MODULE: ./src/js/img/images.png
var img_images = __webpack_require__(72761);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(39781);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/CheckCircle.js
var CheckCircle = __webpack_require__(20889);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Cancel.js
var Cancel = __webpack_require__(82299);
// EXTERNAL MODULE: ./node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(5733);
// EXTERNAL MODULE: ./node_modules/@mui/lab/TabList/TabList.js
var TabList = __webpack_require__(38339);
// EXTERNAL MODULE: ./node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(38354);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Visibility.js
var Visibility = __webpack_require__(5673);
// EXTERNAL MODULE: ./src/js/AdminView1/MessageAdminView.js + 1 modules
var MessageAdminView = __webpack_require__(3100);
// EXTERNAL MODULE: ./src/js/AdminView1/NotificationVIewInfo.js
var NotificationVIewInfo = __webpack_require__(95236);
// EXTERNAL MODULE: ./node_modules/exceljs/dist/exceljs.min.js
var exceljs_min = __webpack_require__(24974);
var exceljs_min_default = /*#__PURE__*/__webpack_require__.n(exceljs_min);
// EXTERNAL MODULE: ./node_modules/file-saver/dist/FileSaver.min.js
var FileSaver_min = __webpack_require__(4213);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Explicit.js
var Explicit = __webpack_require__(85781);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(33829);
;// ./src/js/AdminView1/PageView/ProjectView/ProjectViewInformation.js
var ProjectViewInformation_excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
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























































var EditTooltip = (0,styled/* default */.Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, ProjectViewInformation_excluded);
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(tooltipClasses/* default */.A.tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var PrintTooltip = (0,styled/* default */.Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(tooltipClasses/* default */.A.tooltip)]: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,styled/* default */.Ay)(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(tooltipClasses/* default */.A.tooltip)]: {
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
var ProjectViewInformation_AppBar = (0,styled/* default */.Ay)(AppBar/* default */.A, {
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
var ProjectViewInformation_Drawer = (0,styled/* default */.Ay)(Drawer/* default */.Ay, {
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
function ProjectViewInformation() {
  var _Object$keys, _row, _printData$projectNam, _printData$projectNam2, _printData$items, _Object$keys3, _row2, _data3;
  var _useParams = (0,dist/* useParams */.g)(),
    id = _useParams.id;
  var navigate = (0,dist/* useNavigate */.Zp)();
  var dispatch = (0,es/* useDispatch */.wA)();
  var user = (0,es/* useSelector */.d4)(authSlice/* selectCurrentUser */.xu);
  (0,react.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,authSlice/* setUser */.gV)({
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
  var _useState = (0,react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var handleShow = e => {
    setShow(e);
  };
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,authSlice/* logOut */.je)());
    navigate('/');
  };
  var _useState3 = (0,react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    project = _useState4[0],
    setProject = _useState4[1];
  var _useState5 = (0,react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    project2 = _useState6[0],
    setProject2 = _useState6[1];
  var _useState7 = (0,react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  var _useState9 = (0,react.useState)(true),
    _useState0 = _slicedToArray(_useState9, 2),
    loadingData = _useState0[0],
    setLoadingData = _useState0[1];
  var _useState1 = (0,react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    loadingTab = _useState10[0],
    setLoadingTab = _useState10[1];
  var _useState11 = (0,react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    item = _useState12[0],
    SetItems = _useState12[1];

  // Priority Data (Initial Load)
  var _useState13 = (0,react.useState)(true),
    _useState14 = _slicedToArray(_useState13, 2),
    loadingBase = _useState14[0],
    setLoadingBase = _useState14[1];

  // Priority Data (Initial Load)
  var fetchPriorityData = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* () {
      try {
        setLoadingBase(true);
        var _yield$Promise$all = yield Promise.all([axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/projects")), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/get-projects/").concat(id)), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/hidden"))]),
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3),
          resProjects = _yield$Promise$all2[0],
          resProjectSpec = _yield$Promise$all2[1],
          resHidden = _yield$Promise$all2[2];
        var formatDate = resProjects.data.data.map(p => _objectSpread(_objectSpread({}, p), {}, {
          id: p._id,
          visitField: dayjs_min_default()(p.visitDate).format('DD/MM/YYYY'),
          startField: dayjs_min_default()(p.startDate).format('DD/MM/YYYY')
        }));
        setProject(formatDate.reverse());
        setProjectNumber(resProjectSpec.data.data.projectNumber || 0);
        setProjectName(resProjectSpec.data.data.projectName);
        setCustomerName1(resProjectSpec.data.data.customerName.customerName.replace(/\s+/g, '_').replace(/\./g, ''));
        setHidden(resHidden.data.data);
        setLoadingBase(false);
        setLoadingData(true); // Still true until details are loaded if we want to wait, or false to show UI.
        // Let's set it to false so header shows up.
        setLoadingData(false);

        // Load all other data in background
        fetchDetailedData();
      } catch (error) {
        console.error('Error fetching priority data:', error);
        setLoadingBase(false);
        setLoadingData(false);
      }
    });
    return function fetchPriorityData() {
      return _ref0.apply(this, arguments);
    };
  }();
  var fetchDetailedData = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      try {
        var _resAllItems$data;
        var _yield$Promise$all3 = yield Promise.all([axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/item?summary=true"))]),
          _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 1),
          resAllItems = _yield$Promise$all4[0];
        SetItems(((_resAllItems$data = resAllItems.data) === null || _resAllItems$data === void 0 ? void 0 : _resAllItems$data.data) || []);
        yield Promise.all([fetchInvoicesAndPurchases(), fetchExpenses(), fetchPayments(), fetchTimelineAndStaff(), fetchItemsMovement()]);
      } catch (error) {
        console.error('Error fetching detailed data:', error);
      }
    });
    return function fetchDetailedData() {
      return _ref1.apply(this, arguments);
    };
  }();

  // Tab-Specific Loaders
  var fetchInvoicesAndPurchases = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      try {
        var _resPurchases$data, _resInvoices$data;
        var resPurchases = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/purchase?summary=true&projectId=").concat(id));
        var relatedPurchases = ((_resPurchases$data = resPurchases.data) === null || _resPurchases$data === void 0 ? void 0 : _resPurchases$data.data) || [];
        var projectPurchaseIds = relatedPurchases.map(p => p._id);

        // Filter Invoices: linked either via Purchase ID or directly via Project ID
        var pIdsQuery = projectPurchaseIds.length > 0 ? "&purchaseIds=".concat(projectPurchaseIds.join(',')) : '';
        var resInvoices = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/invoice?summary=true&projectId=").concat(id).concat(pIdsQuery));
        var relatedInvoices = ((_resInvoices$data = resInvoices.data) === null || _resInvoices$data === void 0 ? void 0 : _resInvoices$data.data) || [];
        var allProjectItems = relatedPurchases.flatMap(row => (row.items || []).map(Item => {
          var _Item$itemName, _Item$itemName2;
          return _objectSpread(_objectSpread({}, Item), {}, {
            totalCostOut: (((_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName._id) === undefined || ((_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2._id) === "") && (Number(Item.itemOut) || 0) === 0 ? Number(Item.totalGenerale) || 0 : (Number(Item.itemOut) || 0) * (Number(Item.itemCost) || 0)
          });
        }));
        setItem(allProjectItems);
        setPurchase(relatedPurchases);
        setInvoice(relatedInvoices.map(row => _objectSpread(_objectSpread({}, row), {}, {
          id: row._id
        })));
      } catch (error) {
        console.error('Error fetching Invoices/Purchases:', error);
      }
    });
    return function fetchInvoicesAndPurchases() {
      return _ref10.apply(this, arguments);
    };
  }();
  var fetchExpenses = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      try {
        var _resExpCat$data, _resExpenses$data;
        var _yield$Promise$all5 = yield Promise.all([axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/expensesCategory")), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/expense?summary=true&projectId=").concat(id))]),
          _yield$Promise$all6 = _slicedToArray(_yield$Promise$all5, 2),
          resExpCat = _yield$Promise$all6[0],
          resExpenses = _yield$Promise$all6[1];
        setCategories(((_resExpCat$data = resExpCat.data) === null || _resExpCat$data === void 0 ? void 0 : _resExpCat$data.data) || []);
        setExpensesInfo((((_resExpenses$data = resExpenses.data) === null || _resExpenses$data === void 0 ? void 0 : _resExpenses$data.data) || []).map(row => {
          var _row$expenseCategory;
          return {
            _id: row._id,
            category: (_row$expenseCategory = row.expenseCategory) === null || _row$expenseCategory === void 0 ? void 0 : _row$expenseCategory.expensesCategory,
            total: row.total,
            date: row.expenseDate,
            expenseNumber: row.expenseNumber,
            description: row.description
          };
        }));
      } catch (error) {
        console.error('Error fetching Expenses:', error);
      }
    });
    return function fetchExpenses() {
      return _ref11.apply(this, arguments);
    };
  }();
  var fetchPayments = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      try {
        var _res$data;
        var res = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/payment?projectId=").concat(id));
        setAdvances(((_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data) || []);
      } catch (error) {
        console.error('Error fetching Payments:', error);
      }
    });
    return function fetchPayments() {
      return _ref12.apply(this, arguments);
    };
  }();
  var cleanStr = str => String(str || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  var isItemMatch = (item1, item2) => {
    var _item1$itemName, _item2$itemName, _item1$itemName2, _item2$itemName2;
    if (!item1 || !item2) return false;
    var id1 = String(((_item1$itemName = item1.itemName) === null || _item1$itemName === void 0 ? void 0 : _item1$itemName._id) || (typeof item1.itemName === 'string' && item1.itemName !== 'empty' && item1.itemName.length === 24 ? item1.itemName : '') || '');
    var id2 = String(((_item2$itemName = item2.itemName) === null || _item2$itemName === void 0 ? void 0 : _item2$itemName._id) || (typeof item2.itemName === 'string' && item2.itemName !== 'empty' && item2.itemName.length === 24 ? item2.itemName : '') || '');
    if (id1 && id2 && id1 !== 'empty' && id2 !== 'empty') {
      return id1 === id2;
    }
    var desc1 = cleanStr(item1.itemDescription || (typeof item1.itemName === 'string' ? item1.itemName : (_item1$itemName2 = item1.itemName) === null || _item1$itemName2 === void 0 ? void 0 : _item1$itemName2.itemName) || item1.newDescription || '');
    var desc2 = cleanStr(item2.itemDescription || (typeof item2.itemName === 'string' ? item2.itemName : (_item2$itemName2 = item2.itemName) === null || _item2$itemName2 === void 0 ? void 0 : _item2$itemName2.itemName) || item2.newDescription || '');
    if (desc1 && desc2) {
      if (desc1 === desc2) return true;
      if (desc1.length >= 5 && desc2.length >= 5) {
        if (desc1.includes(desc2) || desc2.includes(desc1)) return true;
      }
    }
    return false;
  };
  var fetchItemsMovement = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* () {
      try {
        var _resOut$data, _resReturn$data, _resPrec$data;
        var _yield$Promise$all7 = yield Promise.all([axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/itemOut?projectId=").concat(id)), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/itemReturn?projectId=").concat(id)), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/itemPurchase?projectId=").concat(id))]),
          _yield$Promise$all8 = _slicedToArray(_yield$Promise$all7, 3),
          resOut = _yield$Promise$all8[0],
          resReturn = _yield$Promise$all8[1],
          resPrec = _yield$Promise$all8[2];
        var isMatchingProjectOrPurchase = row => {
          var _row$reference, _row$projectName, _row$projectName2, _row$projectName3;
          if (!row) return false;
          var refId = String(((_row$reference = row.reference) === null || _row$reference === void 0 ? void 0 : _row$reference._id) || row.reference || row.POID || ((_row$projectName = row.projectName) === null || _row$projectName === void 0 ? void 0 : _row$projectName._id) || row.projectName || '');
          if (refId && String(id) && refId === String(id)) return true;
          var pName = projectName || '';
          var pNum = projectNumber || 0;
          var rowPName = String(((_row$projectName2 = row.projectName) === null || _row$projectName2 === void 0 ? void 0 : _row$projectName2.projectName) || ((_row$projectName3 = row.projectName) === null || _row$projectName3 === void 0 ? void 0 : _row$projectName3.name) || (typeof row.projectName === 'string' ? row.projectName : '') || '');
          if (pName && rowPName && cleanStr(rowPName) === cleanStr(pName)) return true;
          var desc = cleanStr(row.description || rowPName || '');
          if (pName && cleanStr(pName).length >= 4 && desc.includes(cleanStr(pName))) return true;
          if (pNum && (desc.includes("p".concat(pNum)) || desc.includes("p-".concat(pNum)))) return true;
          return false;
        };
        var matchedOut = (((_resOut$data = resOut.data) === null || _resOut$data === void 0 ? void 0 : _resOut$data.data) || []).filter(isMatchingProjectOrPurchase).map(row => _objectSpread(_objectSpread({}, row), {}, {
          outNumber: "O-" + String(row.outNumber).padStart(6, '0'),
          type: 'Item Out'
        }));
        var matchedReturn = (((_resReturn$data = resReturn.data) === null || _resReturn$data === void 0 ? void 0 : _resReturn$data.data) || []).filter(isMatchingProjectOrPurchase).map(row => _objectSpread(_objectSpread({}, row), {}, {
          outNumber: "R-" + String(row.outNumber).padStart(6, '0'),
          type: 'Item return'
        }));
        var matchedPurchase = (((_resPrec$data = resPrec.data) === null || _resPrec$data === void 0 ? void 0 : _resPrec$data.data) || []).filter(isMatchingProjectOrPurchase).map(row => _objectSpread(_objectSpread({}, row), {}, {
          outNumber: "IP-" + String(row.itemPurchaseNumber || '').padStart(6, '0'),
          type: 'Item Purchase',
          itemOutDate: row.itemPurchaseDate,
          itemsQtyArray: (row.items || []).map(it => _objectSpread(_objectSpread({}, it), {}, {
            newItemOut: parseFloat(it.itemQty || 0),
            totalAmount: parseFloat(it.totalAmountUSD || it.totalAmount || parseFloat(it.itemQty || 0) * parseFloat(it.itemRate || it.cost || 0))
          }))
        }));
        setItemOut(matchedOut);
        setItemReturn(matchedReturn);
        setItemPurchase(matchedPurchase);
      } catch (error) {
        console.error('Error fetching Item Movement:', error);
      }
    });
    return function fetchItemsMovement() {
      return _ref13.apply(this, arguments);
    };
  }();
  var fetchTimelineAndStaff = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* () {
      try {
        var _resNotif$data, _resPlaning$data;
        var _yield$Promise$all9 = yield Promise.all([axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/notification?idInfo=").concat(id)), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/planing?projectId=").concat(id))]),
          _yield$Promise$all0 = _slicedToArray(_yield$Promise$all9, 2),
          resNotif = _yield$Promise$all0[0],
          resPlaning = _yield$Promise$all0[1];
        setNotification(((_resNotif$data = resNotif.data) === null || _resNotif$data === void 0 ? void 0 : _resNotif$data.data) || []);
        setPlaningInfo((((_resPlaning$data = resPlaning.data) === null || _resPlaning$data === void 0 ? void 0 : _resPlaning$data.data) || []).map(row => _objectSpread(_objectSpread({}, row), {}, {
          totalWorkDay: parseFloat(Number(row.dayPayUSd || 0) * Number(row.workNumber || 0)).toFixed(2)
        })));
      } catch (error) {
        console.error('Error fetching Timeline/Staff:', error);
      }
    });
    return function fetchTimelineAndStaff() {
      return _ref14.apply(this, arguments);
    };
  }();

  // Maps for optimized lookups
  var itemMap = react.useMemo(() => {
    var map = {};
    item.forEach(i => {
      map[i._id] = i;
    });
    return map;
  }, [item]);
  (0,react.useEffect)(() => {
    fetchPriorityData();
  }, [id]);
  var _useState15 = (0,react.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    projectNumber = _useState16[0],
    setProjectNumber = _useState16[1];
  var _useState17 = (0,react.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    projectName = _useState18[0],
    setProjectName = _useState18[1];
  var _useState19 = (0,react.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    customerName1 = _useState20[0],
    setCustomerName1 = _useState20[1];
  var _useState21 = (0,react.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    purchase = _useState22[0],
    setPurchase = _useState22[1];
  var _useState23 = (0,react.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    items = _useState24[0],
    setItem = _useState24[1];
  var _useState25 = (0,react.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    itemOut = _useState26[0],
    setItemOut = _useState26[1];
  var _useState27 = (0,react.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    itemReturn = _useState28[0],
    setItemReturn = _useState28[1];
  var _useState29 = (0,react.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    expenses = _useState30[0],
    setExpenses = _useState30[1];
  var _useState31 = (0,react.useState)([]),
    _useState32 = _slicedToArray(_useState31, 2),
    invoice = _useState32[0],
    setInvoice = _useState32[1];
  var _useState33 = (0,react.useState)([]),
    _useState34 = _slicedToArray(_useState33, 2),
    expensesInfo = _useState34[0],
    setExpensesInfo = _useState34[1];
  var _useState35 = (0,react.useState)([]),
    _useState36 = _slicedToArray(_useState35, 2),
    itemPurchase = _useState36[0],
    setItemPurchase = _useState36[1];
  var _useState37 = (0,react.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    planingInfo = _useState38[0],
    setPlaningInfo = _useState38[1];
  var _useState39 = (0,react.useState)([]),
    _useState40 = _slicedToArray(_useState39, 2),
    categories = _useState40[0],
    setCategories = _useState40[1];
  var _useState41 = (0,react.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    notification = _useState42[0],
    setNotification = _useState42[1];
  var _useState43 = (0,react.useState)([]),
    _useState44 = _slicedToArray(_useState43, 2),
    advances = _useState44[0],
    setAdvances = _useState44[1];
  var totalGeneralOutCost = items.length > 0 ? items.reduce((sum, row) => {
    var _row$itemName, _row$itemName2;
    var matchedPurchases = (itemPurchase || []).flatMap(ip => (ip.itemsQtyArray || ip.items || []).filter(it => isItemMatch(it, row)).map(it => ({
      qty: parseFloat(it.newItemOut || it.itemQty || 0),
      total: parseFloat(it.totalAmount || it.totalAmountUSD || parseFloat(it.newItemOut || it.itemQty || 0) * parseFloat(it.itemRate || it.cost || 0) || 0)
    })));
    var totalBoughtQty = matchedPurchases.reduce((s, p) => s + p.qty, 0);
    var totalBoughtCost = matchedPurchases.reduce((s, p) => s + p.total, 0);
    var buyQty = totalBoughtQty > 0 ? totalBoughtQty : parseFloat(row.itemBuy) || 0;
    var totalBuy = totalBoughtCost > 0 ? totalBoughtCost : parseFloat(row.totalGenerale) || buyQty * (parseFloat(row.itemCost) || 0);
    var matchedOutQty = (itemOut || []).flatMap(io => (io.itemsQtyArray || []).filter(it => isItemMatch(it, row))).reduce((s, it) => s + parseFloat(it.newItemOut || 0), 0);
    var matchedReturnQty = (itemReturn || []).flatMap(ir => (ir.itemsQtyArray || []).filter(it => isItemMatch(it, row))).reduce((s, it) => s + parseFloat(it.newItemOut || 0), 0);
    var netOutQty = matchedOutQty > 0 || matchedReturnQty > 0 ? Math.max(0, matchedOutQty - matchedReturnQty) : parseFloat(row.itemOut) || 0;
    var unitCost = parseFloat(row.itemCost) || (buyQty > 0 ? totalBuy / buyQty : 0);
    var costOut = (((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName._id) === undefined || ((_row$itemName2 = row.itemName) === null || _row$itemName2 === void 0 ? void 0 : _row$itemName2._id) === "") && netOutQty === 0 && totalBuy > 0 ? totalBuy : netOutQty * unitCost;
    return sum + (costOut || 0);
  }, 0) : 0;
  var newOutR = [...itemPurchase, ...itemOut, ...itemReturn];
  var formatDate2 = newOutR.map(row => _objectSpread(_objectSpread({}, row), {}, {
    itemsQtyArray: (row.itemsQtyArray || []).filter(Item => parseFloat(Item.newItemOut) > 0)
  })).filter(row => row.itemsQtyArray.length > 0);
  var relatedItemPurchases = itemPurchase.length > 0 ? itemPurchase.reduce((acc, row) => {
    row.items.filter(item => parseFloat(item.itemQty) >= 0 && item.itemName._id !== undefined).forEach(item => {
      var ItemName = item.itemName.itemName;
      var Id = item.itemName._id;
      var description = item.itemDescription;
      if (!acc[Id]) {
        acc[Id] = {
          ItemName,
          Id,
          description,
          total: 0
        };
      }
      acc[Id].total += parseFloat(item.itemQty);
    });
    return acc;
  }, {}) : null;
  var relatedItemPurchases2 = itemPurchase.length > 0 ? itemPurchase.reduce((acc, row) => {
    row.items.filter(item => parseFloat(item.itemQty) >= 0 && item.itemName._id === undefined).forEach(item => {
      var ItemName = item.itemName.itemName;
      var Id = item.itemName._id;
      var description = item.itemDescription;
      // Capture price from the item purchase - fix property names and fallback
      var rate = parseFloat(item.itemRate) || 0;
      var cost = parseFloat(item.cost) || parseFloat(item.itemRate) || 0;
      if (!acc[description]) {
        acc[description] = {
          ItemName,
          Id,
          description,
          total: 0,
          rate: rate,
          cost: cost
        };
      } else {
        // Simple update to latest price
        acc[description].rate = rate;
        acc[description].cost = cost;
      }
      acc[description].total += parseFloat(item.itemQty);
    });
    return acc;
  }, {}) : null;
  var relatedItemPurchasesArray = relatedItemPurchases !== null ? Object.keys(relatedItemPurchases).map(row => relatedItemPurchases[row]) : [];
  var relatedItemPurchasesArray2 = relatedItemPurchases2 !== null ? Object.keys(relatedItemPurchases2).map(row => relatedItemPurchases2[row]) : [];
  var allItemPurchase = [...relatedItemPurchasesArray, ...relatedItemPurchasesArray2];
  //console.log(allItemPurchase)

  var purchaseInfo = purchase.map(PreviewPurchase => {
    var _updatedPurchase$item2, _updatedPurchase$item3;
    var updatedPurchase = _objectSpread({}, PreviewPurchase);
    // Fix: Filter itemPurchase to only include records that match the current purchase number
    var currentItemPurchases = itemPurchase.filter(ip => ip.itemPurchaseNumber === PreviewPurchase.purchaseNumber);
    var localRelated = currentItemPurchases.reduce((acc, row) => {
      row.items.filter(item => parseFloat(item.itemQty) >= 0 && item.itemName._id !== undefined).forEach(item => {
        var ItemName = item.itemName.itemName;
        var Id = item.itemName._id;
        var description = item.itemDescription;
        if (!acc[Id]) {
          acc[Id] = {
            ItemName,
            Id,
            description,
            total: 0
          };
        }
        acc[Id].total += parseFloat(item.itemQty);
      });
      return acc;
    }, {});
    var localRelated2 = currentItemPurchases.reduce((acc, row) => {
      row.items.filter(item => parseFloat(item.itemQty) >= 0 && item.itemName._id === undefined).forEach(item => {
        var ItemName = item.itemName.itemName;
        var Id = item.itemName._id;
        var description = item.itemDescription;
        var rate = parseFloat(item.itemRate) || 0;
        var cost = parseFloat(item.cost) || parseFloat(item.itemRate) || 0;
        if (!acc[description]) {
          acc[description] = {
            ItemName,
            Id,
            description,
            total: 0,
            rate: rate,
            cost: cost
          };
        } else {
          acc[description].rate = rate;
          acc[description].cost = cost;
        }
        acc[description].total += parseFloat(item.itemQty);
      });
      return acc;
    }, {});
    var localAll = [...Object.values(localRelated), ...Object.values(localRelated2)];
    localAll === null || localAll === void 0 || localAll.forEach(row2 => {
      var _updatedPurchase$item;
      var existingItem = (_updatedPurchase$item = updatedPurchase.items) === null || _updatedPurchase$item === void 0 ? void 0 : _updatedPurchase$item.findIndex(itemI => row2.Id ? itemI.itemName._id === row2.Id : itemI.itemDescription === row2.description);
      if (existingItem > -1) {
        updatedPurchase.items[existingItem].itemBuy = row2.total;
        // Update costs and rates for manual items if available from actual purchases
        if (!row2.Id) {
          updatedPurchase.items[existingItem].itemCost = row2.cost;
          updatedPurchase.items[existingItem].itemRate = row2.rate;
          updatedPurchase.items[existingItem].totalAmount = Math.round(row2.rate * updatedPurchase.items[existingItem].itemQty * 100) / 100;
          updatedPurchase.items[existingItem].itemAmount = updatedPurchase.items[existingItem].totalAmount; // Simplified, assuming no discount change
          updatedPurchase.items[existingItem].totalGenerale = Math.round(row2.cost * row2.total * 100) / 100;
        }
      } else {
        var itemDetails = itemMap[row2.Id];
        var rate = row2.Id ? (itemDetails === null || itemDetails === void 0 ? void 0 : itemDetails.itemSellingPrice) || 0 : row2.rate;
        var cost = row2.Id ? (itemDetails === null || itemDetails === void 0 ? void 0 : itemDetails.itemCostPrice) || 0 : row2.cost;
        updatedPurchase.items.push({
          idRow: (0,v4/* default */.A)(),
          itemName: {
            _id: row2.Id || "",
            itemName: row2.ItemName
          },
          itemDescription: row2.description,
          itemDiscount: 0,
          itemQty: row2.total,
          itemRate: rate,
          itemCost: cost,
          totalAmount: Math.round(row2.total * rate * 100) / 100,
          discount: 0,
          percentage: 0,
          itemAmount: Math.round(row2.total * rate * 100) / 100,
          totalCost: Math.round(row2.total * cost * 100) / 100,
          totalGenerale: Math.round(cost * row2.total * 100) / 100,
          itemBuy: row2.total,
          itemWeight: "",
          stock: (itemDetails === null || itemDetails === void 0 ? void 0 : itemDetails.itemQuantity) || 0,
          itemOut: 0,
          newItemOut: 0
        });
      }
    });
    // Recalculate purchase amounts after all items are updated
    updatedPurchase.purchaseAmount1 = ((_updatedPurchase$item2 = updatedPurchase.items) === null || _updatedPurchase$item2 === void 0 ? void 0 : _updatedPurchase$item2.reduce((sum, item) => sum + (parseFloat(item.totalCost) || 0), 0)) || 0;
    updatedPurchase.purchaseAmount2 = ((_updatedPurchase$item3 = updatedPurchase.items) === null || _updatedPurchase$item3 === void 0 ? void 0 : _updatedPurchase$item3.reduce((sum, item) => sum + (parseFloat(item.totalGenerale) || 0), 0)) || 0;
    return updatedPurchase;
  });
  var related = itemOut.length > 0 ? itemOut.reduce((acc, row) => {
    (row.itemsQtyArray || []).filter(item => parseFloat(item.newItemOut) > 0).forEach(item => {
      var _item$itemName, _item$itemName2;
      var ItemName = ((_item$itemName = item.itemName) === null || _item$itemName === void 0 ? void 0 : _item$itemName.itemName) || item.itemName;
      var Id = String(((_item$itemName2 = item.itemName) === null || _item$itemName2 === void 0 ? void 0 : _item$itemName2._id) || item.itemName || '');
      if (!acc[Id]) {
        acc[Id] = {
          ItemName,
          Id,
          total: 0
        };
      }
      acc[Id].total += parseFloat(item.newItemOut);
    });
    return acc;
  }, {}) : null;
  var relatedReturn = itemReturn.length > 0 ? itemReturn.reduce((acc, row) => {
    (row.itemsQtyArray || []).filter(item => parseFloat(item.newItemOut) > 0).forEach(item => {
      var _item$itemName3, _item$itemName4;
      var ItemName1 = ((_item$itemName3 = item.itemName) === null || _item$itemName3 === void 0 ? void 0 : _item$itemName3.itemName) || item.itemName;
      var Id1 = String(((_item$itemName4 = item.itemName) === null || _item$itemName4 === void 0 ? void 0 : _item$itemName4._id) || item.itemName || '');
      if (!acc[Id1]) {
        acc[Id1] = {
          ItemName1,
          Id1,
          total1: 0
        };
      }
      acc[Id1].total1 += parseFloat(item.newItemOut);
    });
    return acc;
  }, {}) : null;
  var newAllOutReturn = related !== null ? Object.values(related).map(_ref15 => {
    var ItemName = _ref15.ItemName,
      Id = _ref15.Id,
      total = _ref15.total;
    var related1 = relatedReturn !== null ? Object.values(relatedReturn).find(_ref16 => {
      var Id1 = _ref16.Id1;
      return String(Id1) === String(Id);
    }) : null;
    return {
      ItemName,
      Id,
      total: related1 ? total - related1.total1 : total
    };
  }) : null;
  var relatedPurchase = purchase.map(row => _objectSpread(_objectSpread({}, row), {}, {
    items: (row.items || []).map(Item => {
      var _Item$itemName3;
      var itemIdStr = String(((_Item$itemName3 = Item.itemName) === null || _Item$itemName3 === void 0 ? void 0 : _Item$itemName3._id) || Item.itemName || '');
      var newAllOutReturnInfo = newAllOutReturn !== null ? newAllOutReturn.find(Item1 => String(Item1.Id) === itemIdStr) : null;
      return _objectSpread(_objectSpread({}, Item), {}, {
        itemOut: newAllOutReturnInfo ? newAllOutReturnInfo.total : Item.itemOut || 0
      });
    })
  }));
  (0,react.useEffect)(() => {
    var totalPerDay = {};
    expensesInfo.forEach(item => {
      var category = item.category,
        total = item.total;
      if (totalPerDay[category]) {
        totalPerDay[category] += parseFloat(total);
      } else {
        totalPerDay[category] = parseFloat(total);
      }
    });
    setExpenses(totalPerDay);
  }, [categories, expensesInfo]);
  var planingObject = planingInfo === null || planingInfo === void 0 ? void 0 : planingInfo.reduce((acc, item) => {
    var id = item.employeeID;
    var name = item.employeeName;
    var dayPay = item.dayPayUSd;
    if (!acc[id]) {
      acc[id] = {
        id,
        name,
        dayPay,
        workD: 0,
        total: 0
      };
    }
    acc[id].total += parseFloat(item.totalWorkDay);
    acc[id].workD += parseFloat(item.workNumber);
    return acc;
  }, {});
  var totalAmount2 = Object.keys(planingObject).map(row => planingObject[row]);
  var _useState45 = (0,react.useState)(0),
    _useState46 = _slicedToArray(_useState45, 2),
    totalAmount = _useState46[0],
    setTotalAmount = _useState46[1];
  var _useState47 = (0,react.useState)(0),
    _useState48 = _slicedToArray(_useState47, 2),
    totalAmountPlaning = _useState48[0],
    setTotalAmountPlaning = _useState48[1];
  (0,react.useEffect)(() => {
    var totalAmount1 = Object.keys(expenses).reduce((sum, row) => sum + parseFloat(expenses[row]), 0);
    setTotalAmount(totalAmount1);
    var totalPayRoll = totalAmount2 === null || totalAmount2 === void 0 ? void 0 : totalAmount2.reduce((sum, row) => sum + row.total, 0);
    setTotalAmountPlaning(totalPayRoll);
  }, [expenses, totalAmount2]);
  var totalAdvances = advances.reduce((sum, pay) => {
    var _pay$TotalAmount;
    var projectAmt = ((_pay$TotalAmount = pay.TotalAmount) === null || _pay$TotalAmount === void 0 ? void 0 : _pay$TotalAmount.filter(item => item.id === id).reduce((s, i) => s + parseFloat(i.total), 0)) || 0;
    return sum + projectAmt;
  }, 0);
  var _useState49 = (0,react.useState)(1),
    _useState50 = _slicedToArray(_useState49, 2),
    show2 = _useState50[0],
    setShow2 = _useState50[1];
  var handleShow2 = e => {
    setShow2(e);
  };
  var filteredRows = project.filter(row => !hidden.some(row2 => row2.idRow === row._id));
  {/** Search start */}
  var _useState51 = (0,react.useState)(0),
    _useState52 = _slicedToArray(_useState51, 2),
    value = _useState52[0],
    setValue = _useState52[1];
  var _useState53 = (0,react.useState)(0),
    _useState54 = _slicedToArray(_useState53, 2),
    value2 = _useState54[0],
    setValue2 = _useState54[1];
  (0,react.useEffect)(() => {
    var selectedIndex = project.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [project, id]);
  (0,react.useEffect)(() => {
    var selectedIndex = filteredRows.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [filteredRows, id]);
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
  var _useState55 = (0,react.useState)(''),
    _useState56 = _slicedToArray(_useState55, 2),
    search = _useState56[0],
    setSearch = _useState56[1];
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
  };
  var newArray = search !== '' ? project.filter(row => row.projectName.toLowerCase().includes(search.toLowerCase()) || row.projectNumber.toString().includes(search) || row.description.toLowerCase().includes(search.toLowerCase()) || row.customerName && row.customerName.customerName.toLowerCase().includes(search.toLowerCase())) : project;
  var newArray2 = search !== '' ? filteredRows.filter(row => row.projectName.toLowerCase().includes(search.toLowerCase()) || row.description.toLowerCase().includes(search.toLowerCase()) || row.projectNumber.toString().includes(search) || row.customerName && row.customerName.customerName.toLowerCase().includes(search.toLowerCase())) : filteredRows;
  {/** Search end */}
  {/** Comments starts */}
  var _React$useState = react.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    anchorEl = _React$useState2[0],
    setAnchorEl = _React$useState2[1];
  var open = Boolean(anchorEl);
  var handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  var handleCloseMenu = () => {
    setAnchorEl(null);
  };
  var _React$useState3 = react.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    anchorEl1 = _React$useState4[0],
    setAnchorEl1 = _React$useState4[1];
  var open1 = Boolean(anchorEl1);
  var handleClick2 = event => {
    setAnchorEl1(event.currentTarget);
  };
  var handleCloseMenu2 = () => {
    setAnchorEl1(null);
  };
  var _useState57 = (0,react.useState)(1),
    _useState58 = _slicedToArray(_useState57, 2),
    show1 = _useState58[0],
    setShow1 = _useState58[1];
  var handleShow1 = e => {
    setShow1(e);
    setAnchorEl(null);
  };
  var _useState59 = (0,react.useState)(""),
    _useState60 = _slicedToArray(_useState59, 2),
    reason = _useState60[0],
    setReason = _useState60[1];
  var _useState61 = (0,react.useState)([]),
    _useState62 = _slicedToArray(_useState61, 2),
    Comments1 = _useState62[0],
    setComments = _useState62[1];
  (0,react.useEffect)(() => {
    var fetchComment = /*#__PURE__*/function () {
      var _ref17 = _asyncToGenerator(function* () {
        try {
          var _res$data2;
          var res = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/comment?idInfo=").concat(id));
          var resp = ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.data) || [];
          setComments(resp.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchComment() {
        return _ref17.apply(this, arguments);
      };
    }();
    fetchComment();
  }, [id]);
  var CommentInfo = {
    idInfo: id,
    person: user.data.userName,
    reason
  };
  {/** Loading Start */}
  var _useState63 = (0,react.useState)(false),
    _useState64 = _slicedToArray(_useState63, 2),
    loading = _useState64[0],
    setLoading = _useState64[1];
  var _useState65 = (0,react.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    loadingOpenModal = _useState66[0],
    setLoadingOpenModal = _useState66[1];
  var _useState67 = (0,react.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    ErrorOpenModal = _useState68[0],
    setErrorOpenModal = _useState68[1];
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
  {/** Loading End */}
  var dateComment = dayjs_min_default()(Date.now());
  var _useState69 = (0,react.useState)('false'),
    _useState70 = _slicedToArray(_useState69, 2),
    synchro = _useState70[0],
    setSynchro = _useState70[1];
  var handleSynced = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var updatePurchase = relatedPurchase.map(row => {
        return axios/* default */.A.put("".concat(apiConfig/* ENDPOINT_URL */.m, "/update-purchase/").concat(row._id), {
          items: row.items
        });
      });
      try {
        yield Promise.all(updatePurchase);
        setSynchro('true');
        handleOpen();
      } catch (error) {
        console.log('An error as occur');
      }
    });
    return function handleSynced(_x) {
      return _ref18.apply(this, arguments);
    };
  }();
  var updateForItemBuy = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var saveAttendance = purchaseInfo.map(row => {
        return axios/* default */.A.put("".concat(apiConfig/* ENDPOINT_URL */.m, "/update-purchase/").concat(row._id), row);
      });
      try {
        yield Promise.all(saveAttendance);
        setSynchro('true');
        handleOpen();
      } catch (error) {
        console.log('An error as occur');
      }
    });
    return function updateForItemBuy(_x2) {
      return _ref19.apply(this, arguments);
    };
  }();
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo,
        dateComment
      };
      try {
        var res = yield axios/* default */.A.post("".concat(apiConfig/* ENDPOINT_URL */.m, "/create-comment/"), data);
        if (res) {
          setReason("");
          handleOpen();
          var newData = res.data.data;
          setComments([newData, ...Comments1]);
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmitEdit(_x3) {
      return _ref20.apply(this, arguments);
    };
  }();
  {/** Comments end */}
  var componentRef = (0,react.useRef)();
  var handlePrint = (0,lib.useReactToPrint)({
    content: () => componentRef.current,
    documentTitle: 'P-' + String(projectNumber).padStart(6, '0') + ' For ' + customerName1 + ' (' + projectName + ')',
    onBeforeGetContent: () => {
      var PAGE_HEIGHT = 1045;
      var printElement = componentRef.current;
      if (printElement) {
        printElement.classList.add("temp-class-for-height");
        var height = printElement.clientHeight;
        var numberOfPage = Math.ceil(height / PAGE_HEIGHT);
        if (numberOfPage > 1) {
          var _printElement$getElem, _printElement$getElem2;
          var heightWithSingleHeader = numberOfPage * PAGE_HEIGHT;
          var requiredHeight = heightWithSingleHeader;
          var headerHeight = (_printElement$getElem = printElement.getElementsByTagName("thead")) === null || _printElement$getElem === void 0 || (_printElement$getElem = _printElement$getElem[0]) === null || _printElement$getElem === void 0 ? void 0 : _printElement$getElem.clientHeight;
          var footerHeight = (_printElement$getElem2 = printElement.getElementsByTagName("tfoot")) === null || _printElement$getElem2 === void 0 || (_printElement$getElem2 = _printElement$getElem2[0]) === null || _printElement$getElem2 === void 0 ? void 0 : _printElement$getElem2.clientHeight;
          requiredHeight -= (numberOfPage - 1) * (headerHeight + footerHeight);
          printElement.style.height = "".concat(requiredHeight, "px");
        }
        printElement.classList.remove("temp-class-for-height");
      }
    },
    onAfterPrint: () => {
      var printElement = componentRef.current;
      if (printElement) {
        printElement.style.height = "auto";
      }
    }
  });
  var _useState71 = (0,react.useState)(null),
    _useState72 = _slicedToArray(_useState71, 2),
    printData = _useState72[0],
    setPrintData = _useState72[1];
  (0,react.useEffect)(() => {
    if (printData) {
      handlePrint();
    }
  }, [printData]);
  var handleOpenPrint = data => {
    setPrintData(data);
    setAnchorEl1(null);
  };
  var _React$useState5 = react.useState('1'),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    value3 = _React$useState6[0],
    setValue3 = _React$useState6[1];
  (0,react.useEffect)(() => {
    var result = localStorage.getItem('TabProjectView');
    if (result) {
      setValue3(result);
    }
  });
  var handleChange3 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('TabProjectView', changeValue);
  };
  var _React$useState7 = react.useState(true),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    sideBar = _React$useState8[0],
    setSideBar = _React$useState8[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var data1 = purchase.map(row => ({
    number: 'PUR-' + String(row.purchaseNumber).padStart(6, '0'),
    customer: row.customerName.customerName,
    projectName: row.projectName.projectName,
    purchaseDate: dayjs_min_default()(row.purchaseDate).format('DD/MM/YYYY')
  }));
  var data5 = items.map((Item, i) => {
    return {
      no: i + 1,
      item: Item.itemName.itemName,
      itemDescription: Item.itemDescription,
      itemQty: Item.itemQty,
      itemCost: '$' + Item.itemCost,
      totalCost: '$' + Item.totalCost,
      itemBuy: Item.itemBuy,
      totalGenerale: '$' + Item.totalGenerale,
      itemOut: Item.itemOut,
      totalCost1: '$' + parseFloat(Item.itemOut * Item.itemCost).toFixed(2)
    };
  });
  var data7 = purchase.map(row => ({
    no: '',
    no1: 'SubTotal',
    description: '',
    laborQty: '',
    adjustmentNumber: '',
    purchaseAmount1: '$' + row.purchaseAmount1,
    purchaseAmount2: '$' + row.purchaseAmount2,
    purchaseAmount3: '$' + totalGeneralOutCost
  }));
  var data8 = expensesInfo.map((Item, i) => {
    return {
      no: 'D-' + String(Item.expenseNumber).padStart(6, '0'),
      date: dayjs_min_default()(Item.date).format('DD-MMMM-YYYY'),
      category: Item.category,
      description: Item.description,
      itemCost: "",
      totalCost: "",
      itemBuy: "",
      totalGenerale: "",
      itemOut: "",
      totalCost1: '$' + Item.total
    };
  });
  var data9 = (_Object$keys = Object.keys(expenses)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map(row => ({
    no: '',
    no1: "".concat(row, " Total"),
    description: '',
    laborQty: '',
    adjustmentNumber: '',
    purchaseAmount1: '',
    purchaseAmount2: '',
    purchaseAmount3: '$' + expenses[row].toFixed(2)
  }));
  var data10 = [{
    no: '',
    no1: 'sub Total',
    description: '',
    laborQty: '',
    adjustmentNumber: '',
    purchaseAmount1: '',
    purchaseAmount2: '',
    purchaseAmount3: '$' + totalAmount.toFixed(2)
  }];
  var data11 = [{
    no: '',
    no1: 'Total General',
    description: '',
    laborQty: '',
    adjustmentNumber: '',
    purchaseAmount1: '',
    purchaseAmount2: '',
    purchaseAmount3: '$' + parseFloat(totalAmount + totalGeneralOutCost + totalAmountPlaning).toFixed(2)
  }];
  var exportToExcel = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(function* () {
      var workbook = new (exceljs_min_default()).Workbook();
      var workSheet = workbook.addWorksheet('Sheet1');
      var columns1 = [{
        header: "#",
        key: 'number',
        width: 20
      }, {
        header: "Customer Name",
        key: 'customer',
        width: 20
      }, {
        header: "Project Name",
        key: 'projectName',
        width: 20
      }, {
        header: "Date",
        key: 'purchaseDate',
        width: 20
      }];
      var columns5 = [{
        header: "#",
        key: 'no',
        width: 20
      }, {
        header: "Item",
        key: 'item',
        width: 20
      }, {
        header: "Item Description",
        key: 'itemDescription',
        width: 20
      }, {
        header: "Qty",
        key: 'itemQty',
        width: 20
      }, {
        header: "Rate",
        key: 'itemCost',
        width: 20
      }, {
        header: "Total Cost",
        key: 'totalCost',
        width: 20
      }, {
        header: "Buy",
        key: 'itemBuy',
        width: 20
      }, {
        header: "Total Buy",
        key: 'totalGenerale',
        width: 20
      }, {
        header: "Qty Out",
        key: 'itemOut',
        width: 20
      }, {
        header: "Total Cost",
        key: 'totalCost1',
        width: 20
      }];
      var columns6 = [{
        header: "#",
        key: 'no',
        width: 20
      }, {
        header: "Date",
        key: 'date',
        width: 20
      }, {
        header: "Category",
        key: 'category',
        width: 20
      }, {
        header: "Description",
        key: 'description',
        width: 20
      }, {
        header: "",
        key: 'itemCost',
        width: 20
      }, {
        header: "",
        key: 'totalCost',
        width: 20
      }, {
        header: "",
        key: 'itemBuy',
        width: 20
      }, {
        header: "",
        key: 'totalGenerale',
        width: 20
      }, {
        header: "",
        key: 'itemOut',
        width: 20
      }, {
        header: "Total Cost",
        key: 'totalCost1',
        width: 20
      }];
      workSheet.addRow([]);
      workSheet.addRow(columns1.map(col => col.header));
      data1.forEach(item => {
        workSheet.addRow([item.number, item.customer, item.projectName, item.purchaseDate]);
      });
      workSheet.addRow([]);
      workSheet.addRow(['Item']);
      workSheet.addRow(columns5.map(col => col.header));
      data5.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemCost, item.totalCost, item.itemBuy, item.totalGenerale, item.itemOut, item.totalCost]);
      });
      workSheet.addRow([]);
      data7.forEach(item => {
        workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.purchaseAmount1, item.purchaseAmount2, item.purchaseAmount3]);
      });
      workSheet.addRow([]);
      workSheet.addRow(['Expenses']);
      workSheet.addRow(columns6.map(col => col.header));
      data8.forEach(item => {
        workSheet.addRow([item.no, item.date, item.category, item.description, item.itemCost, item.totalCost, item.itemBuy, item.totalGenerale, item.itemOut, item.totalCost1]);
      });
      workSheet.addRow([]);
      data9.forEach(item => {
        workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.purchaseAmount1, item.purchaseAmount2, item.purchaseAmount3]);
      });
      data10.forEach(item => {
        workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.purchaseAmount1, item.purchaseAmount2, item.purchaseAmount3]);
      });
      workSheet.addRow([]);
      data11.forEach(item => {
        workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.purchaseAmount1, item.purchaseAmount2, item.purchaseAmount3]);
      });
      var buffer = yield workbook.xlsx.writeBuffer();
      var bold = new Blob([buffer], {
        type: 'application/octet-stream'
      });
      (0,FileSaver_min.saveAs)(bold, "".concat('P-' + String(projectNumber).padStart(6, '0') + ' For ' + customerName1 + ' (' + projectName + ')', ".xlsx"));
    });
    return function exportToExcel() {
      return _ref21.apply(this, arguments);
    };
  }();
  var handleExportCategoryExcel = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(function* (category, list, projectName) {
      var workbook = new (exceljs_min_default()).Workbook();
      var workSheet = workbook.addWorksheet('Sheet1');
      var columns = [{
        header: "#",
        key: 'no',
        width: 20
      }, {
        header: "Date",
        key: 'date',
        width: 20
      }, {
        header: "Category",
        key: 'category',
        width: 20
      }, {
        header: "Description",
        key: 'description',
        width: 60
      }, {
        header: "Total",
        key: 'total',
        width: 20
      }];
      workSheet.addRow([]);
      workSheet.addRow(["Category: ".concat(category)]);
      workSheet.addRow(["Project: ".concat(projectName)]);
      workSheet.addRow([]);
      workSheet.addRow(columns.map(col => col.header));
      list.forEach((item, i) => {
        workSheet.addRow([item.expenseNumber ? "D-".concat(String(item.expenseNumber).padStart(6, '0')) : i + 1, dayjs_min_default()(item.date).format('DD-MMMM-YYYY'), item.category, item.description, item.total.toFixed(2)]);
      });
      workSheet.addRow([]);
      var total = list.reduce((sum, item) => sum + parseFloat(item.total), 0);
      workSheet.addRow(['', '', '', 'Total', total.toFixed(2)]);
      var buffer = yield workbook.xlsx.writeBuffer();
      var bold = new Blob([buffer], {
        type: 'application/octet-stream'
      });
      (0,FileSaver_min.saveAs)(bold, "".concat(category, "_Expenses_").concat(projectName.replace(/\s+/g, '_'), ".xlsx"));
    });
    return function handleExportCategoryExcel(_x4, _x5, _x6) {
      return _ref22.apply(this, arguments);
    };
  }();
  var handleExportEmployeeExcel = /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator(function* (list, projectName) {
      var workbook = new (exceljs_min_default()).Workbook();
      var workSheet = workbook.addWorksheet('Sheet1');
      var columns = [{
        header: "Name",
        key: 'name',
        width: 30
      }, {
        header: "Days Works",
        key: 'workD',
        width: 20
      }, {
        header: "Total Pay Day",
        key: 'dayPay',
        width: 20
      }, {
        header: "Total Pay",
        key: 'total',
        width: 20
      }];
      workSheet.addRow([]);
      workSheet.addRow(["Category: Employee Expenses"]);
      workSheet.addRow(["Project: ".concat(projectName)]);
      workSheet.addRow([]);
      workSheet.addRow(columns.map(col => col.header));
      list.forEach(item => {
        workSheet.addRow([item.name, "".concat(item.workD, " days"), item.dayPay.toFixed(2), item.total.toFixed(2)]);
      });
      workSheet.addRow([]);
      var grandTotal = list.reduce((sum, item) => sum + parseFloat(item.total), 0);
      workSheet.addRow(['', '', 'Total', grandTotal.toFixed(2)]);
      var buffer = yield workbook.xlsx.writeBuffer();
      var bold = new Blob([buffer], {
        type: 'application/octet-stream'
      });
      (0,FileSaver_min.saveAs)(bold, "Employee_Expenses_".concat(projectName.replace(/\s+/g, '_'), ".xlsx"));
    });
    return function handleExportEmployeeExcel(_x7, _x8) {
      return _ref23.apply(this, arguments);
    };
  }();
  function Row3(props) {
    var _row$itemName3, _row$itemName4, _row$itemName5;
    var row = props.row;
    var index = props.index;
    var relatedUnit = props.relatedUnit;
    var _React$useState9 = react.useState(false),
      _React$useState0 = _slicedToArray(_React$useState9, 2),
      open = _React$useState0[0],
      setOpen = _React$useState0[1];
    var matchingMovements = (formatDate2 === null || formatDate2 === void 0 ? void 0 : formatDate2.filter(row1 => {
      var _row1$itemsQtyArray;
      return (_row1$itemsQtyArray = row1.itemsQtyArray) === null || _row1$itemsQtyArray === void 0 ? void 0 : _row1$itemsQtyArray.some(Item => isItemMatch(Item, row));
    })) || [];
    if (row.newDescription !== undefined) {
      return /*#__PURE__*/react.createElement("tr", {
        style: {
          '& > *': {
            borderBottom: 'unset'
          }
        }
      }, /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react.createElement("span", null, index + 1)), /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        },
        colSpan: 8
      }, row.newDescription));
    }
    var matchedPurchases = (itemPurchase || []).flatMap(ip => (ip.itemsQtyArray || ip.items || []).filter(it => isItemMatch(it, row)).map(it => ({
      qty: parseFloat(it.newItemOut || it.itemQty || 0),
      total: parseFloat(it.totalAmount || it.totalAmountUSD || parseFloat(it.newItemOut || it.itemQty || 0) * parseFloat(it.itemRate || it.cost || 0) || 0)
    })));
    var totalBoughtQty = matchedPurchases.reduce((sum, p) => sum + p.qty, 0);
    var totalBoughtCost = matchedPurchases.reduce((sum, p) => sum + p.total, 0);
    var buyQty = totalBoughtQty > 0 ? totalBoughtQty : parseFloat(row.itemBuy) || 0;
    var totalBuy = totalBoughtCost > 0 ? totalBoughtCost : parseFloat(row.totalGenerale) || buyQty * (parseFloat(row.itemCost) || 0);
    var matchedOutQty = (itemOut || []).flatMap(io => (io.itemsQtyArray || []).filter(it => isItemMatch(it, row))).reduce((sum, it) => sum + parseFloat(it.newItemOut || 0), 0);
    var matchedReturnQty = (itemReturn || []).flatMap(ir => (ir.itemsQtyArray || []).filter(it => isItemMatch(it, row))).reduce((sum, it) => sum + parseFloat(it.newItemOut || 0), 0);
    var netOutQty = matchedOutQty > 0 || matchedReturnQty > 0 ? Math.max(0, matchedOutQty - matchedReturnQty) : parseFloat(row.itemOut) || 0;
    var unitCost = parseFloat(row.itemCost) || (buyQty > 0 ? totalBuy / buyQty : 0);
    var totalCostOut = (((_row$itemName3 = row.itemName) === null || _row$itemName3 === void 0 ? void 0 : _row$itemName3._id) === undefined || ((_row$itemName4 = row.itemName) === null || _row$itemName4 === void 0 ? void 0 : _row$itemName4._id) === "") && netOutQty === 0 && totalBuy > 0 ? totalBuy : netOutQty * unitCost;
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("tr", {
      style: {
        '& > *': {
          borderBottom: 'unset'
        }
      }
    }, /*#__PURE__*/react.createElement("td", {
      style: {
        width: '10px',
        textAlign: 'center',
        border: '1px solid #DDD',
        cursor: 'pointer'
      },
      onClick: () => setOpen(!open)
    }, /*#__PURE__*/react.createElement("span", null, index + 1)), /*#__PURE__*/react.createElement("td", {
      style: {
        width: '300px',
        textAlign: 'left',
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", {
      hidden: row.itemName ? row.itemName.itemName === 'empty' : ''
    }, ((_row$itemName5 = row.itemName) === null || _row$itemName5 === void 0 ? void 0 : _row$itemName5.itemName) || (typeof row.itemName === 'string' && row.itemName !== 'empty' ? row.itemName : '')), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", null, row.itemDescription, " ", relatedUnit !== null && relatedUnit !== void 0 && relatedUnit.itemBrand ? "( ".concat(String(relatedUnit.itemBrand).toUpperCase(), " )") : '', " ")), /*#__PURE__*/react.createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, row.itemQty, " ", relatedUnit !== null && relatedUnit !== void 0 && relatedUnit.unit ? String(relatedUnit.unit).toUpperCase() : ''), /*#__PURE__*/react.createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, row.itemCost), /*#__PURE__*/react.createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, Number(row.totalCost || parseFloat(row.itemQty || 0) * parseFloat(row.itemCost || 0) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react.createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, buyQty), /*#__PURE__*/react.createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, Number(totalBuy || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react.createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", null, netOutQty, " ", relatedUnit !== null && relatedUnit !== void 0 && relatedUnit.unit ? String(relatedUnit.unit).toUpperCase() : '')), /*#__PURE__*/react.createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", null, Number(totalCostOut || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), matchingMovements.length > 0 && /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD',
        paddingBottom: 0,
        paddingTop: 0
      },
      colSpan: 9
    }, /*#__PURE__*/react.createElement(Collapse/* default */.A, {
      in: open,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        margin: 1
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      gutterBottom: true,
      component: "div",
      sx: {
        fontWeight: 'bold',
        fontSize: '13px',
        color: '#202a5a'
      }
    }, "Item Movement Info (Purchase, Out & Return)"), /*#__PURE__*/react.createElement("table", {
      className: "secondTable"
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "#"), /*#__PURE__*/react.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Date"), /*#__PURE__*/react.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Type"), /*#__PURE__*/react.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Qty"))), /*#__PURE__*/react.createElement("tbody", null, matchingMovements.map((row1, index1) => {
      var matchingItem = row1.itemsQtyArray.find(Item1 => isItemMatch(Item1, row));
      var isReturn = (row1.type || '').toLowerCase().includes('return');
      var isPurchase = (row1.type || '').toLowerCase().includes('purchase') || (row1.type || '').toLowerCase().includes('buy');
      var badgeColor = isReturn ? {
        bg: '#ffebee',
        text: '#c62828',
        sign: '-'
      } : isPurchase ? {
        bg: '#e8f5e9',
        text: '#2e7d32',
        sign: '+'
      } : {
        bg: '#e3f2fd',
        text: '#1565c0',
        sign: '+'
      };
      var badgeLabel = isReturn ? 'Item Return' : isPurchase ? 'Item Purchase' : 'Item Out';
      return /*#__PURE__*/react.createElement("tr", {
        key: index1
      }, /*#__PURE__*/react.createElement("td", {
        style: {
          border: '1px solid #DDD'
        }
      }, row1.outNumber), /*#__PURE__*/react.createElement("td", {
        style: {
          border: '1px solid #DDD'
        }
      }, dayjs_min_default()(row1.itemOutDate || row1.date).format('DD/MM/YYYY-HH:mm')), /*#__PURE__*/react.createElement("td", {
        style: {
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react.createElement("span", {
        style: {
          padding: '2px 8px',
          borderRadius: '4px',
          fontSize: '11px',
          fontWeight: 'bold',
          backgroundColor: badgeColor.bg,
          color: badgeColor.text
        }
      }, badgeLabel)), /*#__PURE__*/react.createElement("td", {
        style: {
          border: '1px solid #DDD',
          fontWeight: 'bold',
          color: badgeColor.text
        }
      }, /*#__PURE__*/react.createElement("span", null, badgeColor.sign, (matchingItem === null || matchingItem === void 0 ? void 0 : matchingItem.newItemOut) || 0)));
    }))))))));
  }
  function Row(props) {
    var row = props.row;
    var index = props.index;
    var _React$useState1 = react.useState(false),
      _React$useState10 = _slicedToArray(_React$useState1, 2),
      open = _React$useState10[0],
      setOpen = _React$useState10[1];
    var componentRef = (0,react.useRef)();
    var handlePrintLocal = (0,lib.useReactToPrint)({
      content: () => componentRef.current
    });
    var categoryList = expensesInfo.filter(row1 => row1.category === row);
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("tr", {
      style: {
        '& > *': {
          borderBottom: 'unset'
        }
      }
    }, /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD',
        cursor: 'pointer'
      },
      onClick: () => setOpen(!open)
    }, open ? /*#__PURE__*/react.createElement(KeyboardArrowUp/* default */.A, null) : /*#__PURE__*/react.createElement("span", null, index + 1)), /*#__PURE__*/react.createElement("td", {
      colSpan: 4,
      align: "left",
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, row), /*#__PURE__*/react.createElement("td", {
      colSpan: 4,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, expenses[row].toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD',
        paddingBottom: 0,
        paddingTop: 0
      },
      colSpan: 9
    }, /*#__PURE__*/react.createElement(Collapse/* default */.A, {
      in: open,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        margin: 1
      }
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      gutterBottom: true,
      component: "div"
    }, "Expenses Info"), /*#__PURE__*/react.createElement("div", {
      style: {
        display: 'flex',
        gap: '10px'
      }
    }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      size: "small",
      onClick: () => handleExportCategoryExcel(row, categoryList, projectName),
      title: "Export to Excel"
    }, /*#__PURE__*/react.createElement(Explicit/* default */.A, {
      sx: {
        color: 'green'
      }
    })), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      size: "small",
      onClick: handlePrintLocal,
      title: "Print PDF"
    }, /*#__PURE__*/react.createElement(LocalPrintshop/* default */.A, {
      sx: {
        color: 'gray'
      }
    })))), /*#__PURE__*/react.createElement("table", {
      style: {
        marginBottom: '5px'
      },
      ref: componentRef
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, "#"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Date"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Category"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Description"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD'
      }
    }, "Total"))), /*#__PURE__*/react.createElement("tbody", null, expensesInfo.filter(row1 => row1.category === row).map(row1 => /*#__PURE__*/react.createElement("tr", {
      key: row1._id
    }, /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, "D-", String(row1.expenseNumber).padStart(6, '0')), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, dayjs_min_default()(row1.date).format('DD-MMMM-YYYY')), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, row1.category), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, row1.description), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD'
      }
    }, row1.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD'
      },
      colSpan: 4
    }, "Total"), /*#__PURE__*/react.createElement("td", {
      colSpan: 2,
      style: {
        textAlign: 'right',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, expenses[row].toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))))))));
  }
  function Row2(props) {
    var _React$useState11 = react.useState(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      open = _React$useState12[0],
      setOpen = _React$useState12[1];
    var componentRef = (0,react.useRef)();
    var handlePrintLocal = (0,lib.useReactToPrint)({
      content: () => componentRef.current
    });
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("tr", {
      style: {
        '& > *': {
          borderBottom: 'unset'
        }
      }
    }, /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD',
        cursor: 'pointer'
      },
      onClick: () => setOpen(!open)
    }, open ? /*#__PURE__*/react.createElement(KeyboardArrowUp/* default */.A, null) : /*#__PURE__*/react.createElement("span", null, "1")), /*#__PURE__*/react.createElement("td", {
      colSpan: 4,
      align: "left",
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Employee"), /*#__PURE__*/react.createElement("td", {
      colSpan: 4,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, totalAmountPlaning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD',
        paddingBottom: 0,
        paddingTop: 0
      },
      colSpan: 9
    }, /*#__PURE__*/react.createElement(Collapse/* default */.A, {
      in: open,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        margin: 1
      }
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      gutterBottom: true,
      component: "div"
    }, "Expenses Info"), /*#__PURE__*/react.createElement("div", {
      style: {
        display: 'flex',
        gap: '10px'
      }
    }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      size: "small",
      onClick: () => handleExportEmployeeExcel(totalAmount2, projectName),
      title: "Export to Excel"
    }, /*#__PURE__*/react.createElement(Explicit/* default */.A, {
      sx: {
        color: 'green'
      }
    })), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      size: "small",
      onClick: handlePrintLocal,
      title: "Print PDF"
    }, /*#__PURE__*/react.createElement(LocalPrintshop/* default */.A, {
      sx: {
        color: 'gray'
      }
    })))), /*#__PURE__*/react.createElement("table", {
      style: {
        marginBottom: '5px'
      },
      ref: componentRef
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Name"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Days Works"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Total Pay Day"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Total Pay"))), /*#__PURE__*/react.createElement("tbody", null, totalAmount2 === null || totalAmount2 === void 0 ? void 0 : totalAmount2.map((row, i) => /*#__PURE__*/react.createElement("tr", {
      key: i
    }, /*#__PURE__*/react.createElement("td", {
      align: "left",
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, row.name), /*#__PURE__*/react.createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null, row.workD, " days")), /*#__PURE__*/react.createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, row.dayPay.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react.createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))))))));
  }
  var _useOutletContext = (0,dist/* useOutletContext */.KC)(),
    layoutHandleShow1 = _useOutletContext.handleShow1;
  return /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: show1 === 1 ? 12 : 9
  }, /*#__PURE__*/react.createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      width: '100%',
      background: 'white'
    }
  }, loadingBase ? /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react.createElement(Loader/* default */.A, null)) : /*#__PURE__*/react.createElement("div", null, project.filter(i => i._id === id).map(row => /*#__PURE__*/react.createElement("div", {
    key: row._id
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    sx: {
      fontWeight: 'bold',
      fontSize: '20px'
    }
  }, " ", 'P-' + String(row.projectNumber).padStart(6, '0'), " | ", row.projectName)), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    "aria-controls": open ? 'demo-customized-menu' : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? 'true' : undefined,
    variant: "contained",
    disableElevation: true,
    onClick: handleClick,
    endIcon: /*#__PURE__*/react.createElement(KeyboardArrowDown/* default */.A, null),
    sx: {
      bgcolor: 'gray',
      '&:hover': {
        color: 'gray',
        bgcolor: 'white',
        border: '1px solid gray'
      }
    }
  }, "Options"), /*#__PURE__*/react.createElement(Menu/* default */.A, {
    id: "demo-customized-menu",
    MenuListProps: {
      'aria-labelledby': 'demo-customized-button'
    },
    anchorEl: anchorEl,
    open: open,
    onClose: handleCloseMenu,
    TransitionComponent: Fade/* default */.A
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
    to: "/ProjectUpdateView/".concat(row._id),
    className: "LinkName",
    style: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      color: 'gray'
    }
  }, /*#__PURE__*/react.createElement(Edit/* default */.A, null), /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Edit"))), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    onClick: () => handleShow1(2)
  }, " ", /*#__PURE__*/react.createElement("span", {
    style: {
      color: 'gray'
    }
  }, "Comments"), " "), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    onClick: () => handleShow1(3)
  }, " ", /*#__PURE__*/react.createElement("span", {
    style: {
      color: 'gray'
    }
  }, "History"))))), /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement(TabContext/* default */.Ay, {
    value: value3
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      borderBottom: 1,
      borderColor: 'divider'
    }
  }, /*#__PURE__*/react.createElement(TabList/* default */.A, {
    onChange: handleChange3,
    "aria-label": "lab API tabs example",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, /*#__PURE__*/react.createElement(Tab/* default */.A, {
    label: "Overview",
    value: "1",
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: '10px'
      },
      '&:hover': {
        color: 'gray',
        bgcolor: 'white',
        border: '1px solid gray',
        borderRadius: '10px'
      }
    }
  }), /*#__PURE__*/react.createElement(Tab/* default */.A, {
    label: "Invoice",
    value: "2",
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: '10px'
      },
      '&:hover': {
        color: 'gray',
        bgcolor: 'white',
        border: '1px solid gray',
        borderRadius: '10px'
      }
    }
  }), /*#__PURE__*/react.createElement(Tab/* default */.A, {
    label: "Purchase",
    value: "3",
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: '10px'
      },
      '&:hover': {
        color: 'gray',
        bgcolor: 'white',
        border: '1px solid gray',
        borderRadius: '10px'
      }
    }
  }), /*#__PURE__*/react.createElement(Tab/* default */.A, {
    label: "Advances",
    value: "4",
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: '10px'
      },
      '&:hover': {
        color: 'gray',
        bgcolor: 'white',
        border: '1px solid gray',
        borderRadius: '10px'
      }
    }
  }))), /*#__PURE__*/react.createElement(TabPanel/* default */.A, {
    value: "1",
    sx: {
      height: 'calc(100vh - 230px)',
      overflow: 'hidden',
      overflowY: 'auto'
    }
  }, loadingTab && /*#__PURE__*/react.createElement(LinearProgress_LinearProgress, {
    sx: {
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Card/* default */.A, null, /*#__PURE__*/react.createElement(CardContent/* default */.A, {
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    sx: {
      fontSize: '20px'
    }
  }, row.projectName)), /*#__PURE__*/react.createElement(CardContent/* default */.A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react.createElement("table", {
    style: {
      fontSize: '20px'
    }
  }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    align: "left"
  }, "Visit Date"), /*#__PURE__*/react.createElement("td", null, dayjs_min_default()(row.visitDate).format('DD/MM/YYYY'))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    align: "left"
  }, "Start Date"), /*#__PURE__*/react.createElement("td", null, dayjs_min_default()(row.startDate).format('DD/MM/YYYY')))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    align: "left"
  }, "Project Number"), /*#__PURE__*/react.createElement("td", null, "P-", String(row.projectNumber).padStart(6, '0'))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    align: "left"
  }, "Status"), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: row.status === "Pending" ? "gray" : row.status === "On-Going" ? "blue" : row.status === "Stopped" ? "red" : row.status === "Pending" ? "Orange" : row.status === "Completed" ? "green" : "black"
  }, row.status))))), /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      width: '450px',
      minHeight: '190px'
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, {
    style: {
      position: 'relative',
      justifyContent: 'center',
      top: '20px'
    }
  }, /*#__PURE__*/react.createElement("table", {
    style: {
      width: '100%',
      color: 'gray',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Budget"), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react.createElement("span", null, parseFloat(row.budget || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Material Expense"), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react.createElement("span", null, parseFloat(totalGeneralOutCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Labour Expense"), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react.createElement("span", null, parseFloat(totalAmountPlaning).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Overhead Expense"), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react.createElement("span", null, parseFloat(totalAmount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react.createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react.createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Total Expense"), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react.createElement("span", {
    className: "InvoiceTotal "
  }, parseFloat(totalAmount + totalGeneralOutCost + totalAmountPlaning).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), invoice && invoice.length > 0 ? invoice.map(row1 => /*#__PURE__*/react.createElement("tr", {
    key: row1._id
  }, /*#__PURE__*/react.createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Invoiced Profit (", row1.invoiceNumber, ")"), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react.createElement("span", {
    className: "InvoiceTotal "
  }, parseFloat(row1.totalInvoice - (totalAmount + totalGeneralOutCost + totalAmountPlaning)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))) : '', /*#__PURE__*/react.createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react.createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Advances Received"), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react.createElement("span", {
    className: "InvoiceTotal "
  }, parseFloat(totalAdvances).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react.createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react.createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Balance Remaining"), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react.createElement("span", {
    className: "InvoiceTotal "
  }, parseFloat(row.budget !== undefined ? row.budget - (totalAmount + totalGeneralOutCost + totalAmountPlaning) : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))))), /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement("table", {
    style: {
      fontSize: '20px'
    }
  }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Customer Name"), /*#__PURE__*/react.createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, row.customerName.customerName))))), /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement("table", {
    style: {
      fontSize: '20px'
    }
  }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Description"), /*#__PURE__*/react.createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, row.description)))))))))), /*#__PURE__*/react.createElement(TabPanel/* default */.A, {
    value: "2",
    sx: {
      height: 'calc(100vh - 230px)',
      overflow: 'hidden',
      overflowY: 'auto'
    }
  }, loadingTab && /*#__PURE__*/react.createElement(LinearProgress_LinearProgress, {
    sx: {
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }), /*#__PURE__*/react.createElement("div", null, invoice ? invoice.map(row => {
    var _data, _row$items;
    return /*#__PURE__*/react.createElement("div", {
      key: row._id,
      className: "invoicedetails"
    }, /*#__PURE__*/react.createElement(PrintHeader/* default */.A, {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data = data) === null || _data === void 0 ? void 0 : _data.branchId : ""
    }), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("p", {
      className: "invoicehr"
    }, "Invoice"), /*#__PURE__*/react.createElement("article", null, /*#__PURE__*/react.createElement("section", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '25px'
      }
    }, /*#__PURE__*/react.createElement("address", {
      style: {
        lineHeight: 1.35,
        width: '60%'
      }
    }, /*#__PURE__*/react.createElement("p", null, "Bill To", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, row.customerName.customerName), /*#__PURE__*/react.createElement("br", null), row.customerName.billingAddress, ",", row.customerName.billingCity)), /*#__PURE__*/react.createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '80%',
        left: '83px'
      }
    }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Invoice #")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react.createElement("span", null, "INV-", String(row.invoiceNumber).padStart(6, '0')))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Date")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react.createElement("span", null, dayjs_min_default()(row.invoiceDate).format('DD/MM/YYYY')))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Subject")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react.createElement("span", null, row.invoiceSubject))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Defect")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react.createElement("span", null, row.invoiceDefect)))))), /*#__PURE__*/react.createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '80%'
      }
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "#"), /*#__PURE__*/react.createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Item"), /*#__PURE__*/react.createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Description"), /*#__PURE__*/react.createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Quantity"), /*#__PURE__*/react.createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Rate"), /*#__PURE__*/react.createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Discount"), /*#__PURE__*/react.createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Total"))), /*#__PURE__*/react.createElement("tbody", null, (_row$items = row.items) === null || _row$items === void 0 ? void 0 : _row$items.map((Item, i) => {
      var _Item$itemName5;
      if (Item.newDescription !== undefined) {
        return /*#__PURE__*/react.createElement("tr", {
          key: Item.idRow
        }, /*#__PURE__*/react.createElement("td", {
          style: {
            padding: '10px',
            textAlign: 'center',
            border: '1px solid #DDD'
          }
        }, /*#__PURE__*/react.createElement("span", null, i + 1)), /*#__PURE__*/react.createElement("td", {
          colSpan: 6,
          style: {
            padding: '10px',
            textAlign: 'center',
            border: '1px solid #DDD'
          }
        }, /*#__PURE__*/react.createElement("span", null, Item.newDescription)));
      }
      var relatedUnit = item.find(Item1 => {
        var _Item$itemName4;
        return Item1._id === ((_Item$itemName4 = Item.itemName) === null || _Item$itemName4 === void 0 ? void 0 : _Item$itemName4._id) || Item1._id === Item.itemName;
      });
      return /*#__PURE__*/react.createElement("tr", {
        key: Item.idRow
      }, /*#__PURE__*/react.createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'center',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react.createElement("span", null, i + 1)), /*#__PURE__*/react.createElement("td", {
        style: {
          padding: '10px',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react.createElement("span", null, ((_Item$itemName5 = Item.itemName) === null || _Item$itemName5 === void 0 ? void 0 : _Item$itemName5.itemName) || (typeof Item.itemName === 'string' ? Item.itemName : ''))), /*#__PURE__*/react.createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react.createElement("span", null, Item.itemDescription)), /*#__PURE__*/react.createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react.createElement("span", null, Item.itemQty, " ", relatedUnit !== null && relatedUnit !== void 0 && relatedUnit.unit ? String(relatedUnit.unit).toUpperCase() : '')), /*#__PURE__*/react.createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react.createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react.createElement("span", null, Item.itemRate)), /*#__PURE__*/react.createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react.createElement("span", {
        "data-prefix": true
      }, "%"), /*#__PURE__*/react.createElement("span", null, Item.itemDiscount)), /*#__PURE__*/react.createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react.createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react.createElement("span", null, Item.itemAmount)));
    }))), /*#__PURE__*/react.createElement("span", {
      style: {
        float: 'left'
      }
    }, /*#__PURE__*/react.createElement("p", null, row.note)), /*#__PURE__*/react.createElement("table", {
      className: "firstTable",
      style: {
        fontSize: '80%'
      }
    }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react.createElement("span", null, " Sub Total"), row.CheckTvA ? '' : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
      className: "txt1"
    }, "(Tax Inclusive)"))), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react.createElement("span", null, row.subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), row.shipping ? /*#__PURE__*/react.createElement("tr", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Shipping")), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react.createElement("span", null, row.shipping.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.adjustmentNumber ? /*#__PURE__*/react.createElement("tr", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'center'
      }
    }, row.adjustment), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react.createElement("span", null, row.adjustmentNumber.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', /*#__PURE__*/react.createElement("tr", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Total")), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react.createElement("span", null, row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), row.total ? /*#__PURE__*/react.createElement("tr", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Amount Paid")), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react.createElement("span", null, row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', /*#__PURE__*/react.createElement("tr", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'center',
        color: '#2f81b7'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Balance Due")), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'right',
        color: '#2f81b7'
      }
    }, /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react.createElement("span", null, row.balanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Total In Words")), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, row.totalW))))), /*#__PURE__*/react.createElement("section", {
      style: {
        float: 'left',
        marginTop: '50px'
      }
    }, /*#__PURE__*/react.createElement("table", {
      style: {
        fontSize: '80%'
      }
    }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Bank")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold'
      }
    }, /*#__PURE__*/react.createElement("span", null, "SOFIBANQUE SA")))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Entitled")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold'
      }
    }, /*#__PURE__*/react.createElement("span", null, "GLOBAL GATE SARL")))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, " Bank Account")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold'
      }
    }, /*#__PURE__*/react.createElement("span", null, "00023233330214247020073")))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Code Swift")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold'
      }
    }, /*#__PURE__*/react.createElement("span", null, "SFBXCDKIXXX")))))), /*#__PURE__*/react.createElement("span", {
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("address", {
      style: {
        lineHeight: 1.30
      }
    }, /*#__PURE__*/react.createElement("p", {
      style: {
        fontWeight: 'bold'
      }
    }, "Terms & Conditions"), /*#__PURE__*/react.createElement("p", {
      style: {
        fontSize: '12px'
      }
    }, row.terms)))), /*#__PURE__*/react.createElement("span", {
      className: "footerinvoice"
    }, /*#__PURE__*/react.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Email/* default */.A, null)), /*#__PURE__*/react.createElement("span", null, "Global@gmail.com")), /*#__PURE__*/react.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Phone/* default */.A, null)), /*#__PURE__*/react.createElement("span", null, "+243 827 722 222")), /*#__PURE__*/react.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Web/* default */.A, null)), /*#__PURE__*/react.createElement("span", null, "www.GlobalGate.sarl"))));
  }) : '')), /*#__PURE__*/react.createElement(TabPanel/* default */.A, {
    value: "3",
    sx: {
      height: 'calc(100vh - 230px)',
      overflow: 'hidden',
      overflowY: 'auto'
    }
  }, loadingTab && /*#__PURE__*/react.createElement(LinearProgress_LinearProgress, {
    sx: {
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }), /*#__PURE__*/react.createElement("div", null, purchaseInfo === null || purchaseInfo === void 0 ? void 0 : purchaseInfo.map(row => {
    var _data2, _row$projectName4, _row$projectName5, _row$items2, _Object$keys2;
    return /*#__PURE__*/react.createElement("div", {
      key: row._id
    }, /*#__PURE__*/react.createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Typography/* default */.A, null, /*#__PURE__*/react.createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, "REFERENCE: "), "PUR-", String(row.purchaseNumber).padStart(6, '0'))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Button/* default */.A, {
      "aria-controls": open1 ? 'demo-customized-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open1 ? 'true' : undefined,
      variant: "contained",
      disableElevation: true,
      onClick: handleClick2,
      endIcon: /*#__PURE__*/react.createElement(KeyboardArrowDown/* default */.A, null),
      sx: {
        bgcolor: 'gray',
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray'
        }
      }
    }, "More..."), /*#__PURE__*/react.createElement(Menu/* default */.A, {
      id: "demo-customized-menu",
      MenuListProps: {
        'aria-labelledby': 'demo-customized-button'
      },
      anchorEl: anchorEl1,
      open: open1,
      onClose: handleCloseMenu2,
      TransitionComponent: Fade/* default */.A
    }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      onClick: handleCloseMenu2
    }, /*#__PURE__*/react.createElement("span", {
      style: {
        color: 'gray'
      }
    }, "Purchase Reference")), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/PurchaseFormUpdate/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react.createElement(Edit/* default */.A, null), /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Edit"))), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/PurchasesViewAdminAll/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react.createElement(Visibility/* default */.A, null), /*#__PURE__*/react.createElement(Typography/* default */.A, null, "View"))), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      onClick: () => handleOpenPrint(row),
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react.createElement(LocalPrintshop/* default */.A, null), /*#__PURE__*/react.createElement("span", null, "Print")), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      onClick: exportToExcel,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react.createElement(Explicit/* default */.A, null), /*#__PURE__*/react.createElement("span", null, "Export to Excel")), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, (row.status === 'Draft' || row.status === 'Estimated') && /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/ConvertToInvoice/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Convert To Invoice")), (row.status === 'Invoiced' || row.status === 'Make') && /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/ConvertToInvoice/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Convert To Invoice (Again)")))))), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        padding: '20px'
      }
    }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(PrintHeader/* default */.A, {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.branchId : ""
    }), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("p", {
      className: "invoicehr"
    }, "Purchase"), /*#__PURE__*/react.createElement("article", null, /*#__PURE__*/react.createElement("section", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '25px'
      }
    }, /*#__PURE__*/react.createElement("address", {
      style: {
        position: 'relative',
        lineHeight: 1.35,
        width: '60%'
      }
    }, /*#__PURE__*/react.createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, String(((_row$projectName4 = row.projectName) === null || _row$projectName4 === void 0 ? void 0 : _row$projectName4.projectName) || ((_row$projectName5 = row.projectName) === null || _row$projectName5 === void 0 ? void 0 : _row$projectName5.name) || (typeof row.projectName === "string" ? row.projectName : "") || "").toUpperCase())), /*#__PURE__*/react.createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '80%',
        left: '83px'
      }
    }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      colSpan: 2,
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, newAllOutReturn && newAllOutReturn.length > 0 && /*#__PURE__*/react.createElement("button", {
      onClick: handleSynced,
      className: "btnCustomer"
    }, "sync")), /*#__PURE__*/react.createElement("th", {
      colSpan: 2,
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, allItemPurchase && allItemPurchase.length > 0 && /*#__PURE__*/react.createElement("button", {
      onClick: updateForItemBuy,
      className: "btnCustomer"
    }, "IPU"))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Pur #")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react.createElement("span", null, "PUR-", String(row.purchaseNumber).padStart(6, '0')))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Date")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react.createElement("span", null, dayjs_min_default()(row.purchaseDate).format('DD/MM/YYYY'))))))), /*#__PURE__*/react.createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '100%'
      }
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 9,
      style: {
        border: '1px solid #DDD',
        textAlign: 'center'
      }
    }, "Items")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        width: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "N"), /*#__PURE__*/react.createElement("th", {
      style: {
        width: '300px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Item"), /*#__PURE__*/react.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Qty"), /*#__PURE__*/react.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Unit Price"), /*#__PURE__*/react.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total-Need"), /*#__PURE__*/react.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Buy"), /*#__PURE__*/react.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total-Buy"), /*#__PURE__*/react.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "I-Out"), /*#__PURE__*/react.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total-Cost"))), /*#__PURE__*/react.createElement("tbody", null, (_row$items2 = row.items) === null || _row$items2 === void 0 ? void 0 : _row$items2.filter(Item => parseFloat(Item.itemQty) >= 0 || parseFloat(Item.itemBuy) > 0 || parseFloat(Item.itemOut) > 0 || Item.newDescription !== undefined).map((Item, i) => {
      var _Item$itemName6;
      var relatedUnit = itemMap[(_Item$itemName6 = Item.itemName) === null || _Item$itemName6 === void 0 ? void 0 : _Item$itemName6._id];
      return /*#__PURE__*/react.createElement(Row3, {
        key: i,
        row: Item,
        index: i,
        relatedUnit: relatedUnit
      });
    })), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 3,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, "SubTotal "), /*#__PURE__*/react.createElement("td", {
      colSpan: 2,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, (row.purchaseAmount1 || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react.createElement("td", {
      colSpan: 2,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, ((row.items || []).reduce((sum, Item) => {
      var matchedPurchases = (itemPurchase || []).flatMap(ip => (ip.itemsQtyArray || ip.items || []).filter(it => isItemMatch(it, Item)).map(it => ({
        total: parseFloat(it.totalAmount || it.totalAmountUSD || parseFloat(it.newItemOut || it.itemQty || 0) * parseFloat(it.itemRate || it.cost || 0) || 0)
      })));
      var totalBoughtCost = matchedPurchases.reduce((s, p) => s + p.total, 0);
      var buyQty = matchedPurchases.reduce((s, p) => s + (p.qty || 0), 0) || parseFloat(Item.itemBuy) || 0;
      return sum + (totalBoughtCost > 0 ? totalBoughtCost : parseFloat(Item.totalGenerale) || buyQty * (parseFloat(Item.itemCost) || 0));
    }, 0) || row.purchaseAmount2 || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react.createElement("td", {
      colSpan: 2,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, totalGeneralOutCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), (_Object$keys2 = Object.keys(expenses)) === null || _Object$keys2 === void 0 ? void 0 : _Object$keys2.map((Item, i) => /*#__PURE__*/react.createElement(Row, {
      key: Item,
      row: Item,
      index: i
    })), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 5,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, "SubTotal 2"), /*#__PURE__*/react.createElement("td", {
      colSpan: 4,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, totalAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), user.data.role === 'CEO' ? /*#__PURE__*/react.createElement(Row2, null) : /*#__PURE__*/react.createElement("tr", null), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 5,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, "Total Generale"), /*#__PURE__*/react.createElement("td", {
      colSpan: 4,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, parseFloat(totalAmount + totalGeneralOutCost + totalAmountPlaning).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))), /*#__PURE__*/react.createElement("div", {
      className: "footerinvoice"
    }, /*#__PURE__*/react.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Email/* default */.A, null)), /*#__PURE__*/react.createElement("span", null, "Global@gmail.com")), /*#__PURE__*/react.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Phone/* default */.A, null)), /*#__PURE__*/react.createElement("span", null, "+243 827 722 222")), /*#__PURE__*/react.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Web/* default */.A, null)), /*#__PURE__*/react.createElement("span", null, "www.GlobalGate.sarl"))))));
  }))), /*#__PURE__*/react.createElement(TabPanel/* default */.A, {
    value: "4",
    sx: {
      height: 'calc(100vh - 230px)',
      overflow: 'hidden',
      overflowY: 'auto'
    }
  }, loadingTab && /*#__PURE__*/react.createElement(LinearProgress_LinearProgress, {
    sx: {
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }), /*#__PURE__*/react.createElement("div", {
    style: {
      padding: '20px',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h6",
    gutterBottom: true
  }, "Project Advances / Payments"), /*#__PURE__*/react.createElement(TableContainer/* default */.A, {
    component: Paper/* default */.A
  }, /*#__PURE__*/react.createElement(Table/* default */.A, null, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, {
    sx: {
      backgroundColor: '#e8f7fe'
    }
  }, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, "Date"), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, "PAY #"), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, "Mode"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right"
  }, "Amount"), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, "Status"), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, "Description"), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, "Action"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, advances.map(pay => {
    var _pay$TotalAmount2;
    return /*#__PURE__*/react.createElement(TableRow/* default */.A, {
      key: pay._id
    }, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, dayjs_min_default()(pay.paymentDate).format('DD/MM/YYYY')), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, "PAY-", String(pay.paymentNumber).padStart(6, '0')), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, pay.modes), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "right"
    }, "$", (_pay$TotalAmount2 = pay.TotalAmount) === null || _pay$TotalAmount2 === void 0 || (_pay$TotalAmount2 = _pay$TotalAmount2.find(i => i.id === id)) === null || _pay$TotalAmount2 === void 0 ? void 0 : _pay$TotalAmount2.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, pay.status || 'Cleared'), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, pay.description), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/PaymentInformationView/".concat(pay._id),
      className: "LinkName"
    }, "View")));
  }), advances.length === 0 && /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    colSpan: 7,
    align: "center"
  }, "No advances found for this project.")), /*#__PURE__*/react.createElement(TableRow/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f5f5f5'
    }
  }, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    colSpan: 3,
    align: "right"
  }, "Total Advances:"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right"
  }, "$", totalAdvances.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    colSpan: 3
  }))))))))))))))), show1 === 2 ? /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement("p", null, "COMMENTS"), /*#__PURE__*/react.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react.createElement(Close/* default */.A, {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.A, {
    required: true,
    id: "comments",
    name: "comments",
    multiline: true,
    rows: 4,
    value: reason,
    onChange: e => setReason(e.target.value.toUpperCase()),
    label: "Comments",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement("button", {
    type: "submit",
    style: {
      width: '100%'
    },
    className: "btnCustomer6"
  }, "Save")))), /*#__PURE__*/react.createElement("hr", null)), /*#__PURE__*/react.createElement("div", {
    style: {
      height: '355px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react.createElement("table", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement("tbody", null, Comments1.map(Item => /*#__PURE__*/react.createElement("tr", {
    key: Item._id
  }, /*#__PURE__*/react.createElement("td", {
    style: {
      width: '100%',
      borderBottom: '1px solid black'
    }
  }, Item.dateComment ? dayjs_min_default()(Item.dateComment).format('DD/MM') : '', " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "", show1 === 3 ? /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement("p", null, "HISTORY"), /*#__PURE__*/react.createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react.createElement(Close/* default */.A, {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
    style: {
      height: '510px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      padding: '10px'
    }
  }, project.filter(row => row._id === id).map(row => /*#__PURE__*/react.createElement("p", {
    key: row._id
  }, row.Create ? /*#__PURE__*/react.createElement("span", null, row.Create.dateComment, " ", row.Create.person, " ", row.Create.projectName) : '')), notification.map(row => /*#__PURE__*/react.createElement("p", {
    key: row._id
  }, /*#__PURE__*/react.createElement("span", null, row.person + ' on ' + dayjs_min_default()(row.dateNotification).format('DD/MMMM'), ": ", row.reason))))))) : "", /*#__PURE__*/react.createElement(Modal/* default */.A, {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: Backdrop/* default */.A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react.createElement(Loader/* default */.A, null) : /*#__PURE__*/react.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(CheckCircle/* default */.A, {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), synchro === 'true' ? /*#__PURE__*/react.createElement("h2", null, " Item Out Sync successfully") : /*#__PURE__*/react.createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: handleClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react.createElement(Modal/* default */.A, {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: Backdrop/* default */.A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react.createElement(Loader/* default */.A, null) : /*#__PURE__*/react.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(Cancel/* default */.A, {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react.createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'none'
    }
  }, printData && /*#__PURE__*/react.createElement("table", {
    ref: componentRef,
    className: "invoicedetails",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "invoiceTest"
  }, /*#__PURE__*/react.createElement(PrintHeader/* default */.A, {
    branchId: typeof row !== "undefined" ? (_row = row) === null || _row === void 0 ? void 0 : _row.branchId : ""
  }))))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", {
    className: "invoicehr"
  }, "Purchase"), /*#__PURE__*/react.createElement("div", {
    className: "content",
    style: {
      marginBottom: '20px',
      position: 'relative'
    }
  }, /*#__PURE__*/react.createElement("section", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react.createElement("address", {
    style: {
      position: 'relative',
      lineHeight: 1.35,
      width: '60%'
    }
  }, /*#__PURE__*/react.createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, String(((_printData$projectNam = printData.projectName) === null || _printData$projectNam === void 0 ? void 0 : _printData$projectNam.projectName) || ((_printData$projectNam2 = printData.projectName) === null || _printData$projectNam2 === void 0 ? void 0 : _printData$projectNam2.name) || (typeof printData.projectName === "string" ? printData.projectName : "") || "").toUpperCase())), /*#__PURE__*/react.createElement("table", {
    className: "firstTable",
    style: {
      position: 'relative',
      fontSize: '80%',
      left: '83px'
    }
  }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    style: {
      backgroundColor: 'white',
      border: 'none',
      textAlign: 'left'
    }
  }, /*#__PURE__*/react.createElement("span", null, "Pur #")), /*#__PURE__*/react.createElement("td", {
    style: {
      backgroundColor: 'white',
      border: 'none'
    }
  }, /*#__PURE__*/react.createElement("span", null, "PUR-", String(printData.purchaseNumber).padStart(6, '0')))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    style: {
      backgroundColor: 'white',
      border: 'none',
      textAlign: 'left'
    }
  }, /*#__PURE__*/react.createElement("span", null, "Date")), /*#__PURE__*/react.createElement("td", {
    style: {
      backgroundColor: 'white',
      border: 'none'
    }
  }, /*#__PURE__*/react.createElement("span", null, dayjs_min_default()(printData.purchaseDate).format('DD/MM/YYYY'))))))), /*#__PURE__*/react.createElement("section", {
    style: {}
  }, /*#__PURE__*/react.createElement("table", {
    className: "secondTable",
    style: {
      fontSize: '70%'
    }
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    style: {
      width: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "N"), /*#__PURE__*/react.createElement("th", {
    style: {
      width: '250px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Item"), /*#__PURE__*/react.createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Qty"), /*#__PURE__*/react.createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Unit Price"), /*#__PURE__*/react.createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Total-Need"), /*#__PURE__*/react.createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Buy"), /*#__PURE__*/react.createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Total-Buy"), /*#__PURE__*/react.createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "I-Out"), /*#__PURE__*/react.createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Total-Cost"))), /*#__PURE__*/react.createElement("tbody", null, (_printData$items = printData.items) === null || _printData$items === void 0 ? void 0 : _printData$items.filter(Item => parseFloat(Item.itemQty) >= 0 || parseFloat(Item.itemBuy) > 0 || parseFloat(Item.itemOut) > 0).map((Item, i) => {
    var _Item$itemName7;
    var relatedUnit = itemMap[(_Item$itemName7 = Item.itemName) === null || _Item$itemName7 === void 0 ? void 0 : _Item$itemName7._id];
    return /*#__PURE__*/react.createElement(Row3, {
      key: i,
      row: Item,
      index: i,
      relatedUnit: relatedUnit
    });
  })), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    colSpan: 3,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, "SubTotal "), /*#__PURE__*/react.createElement("td", {
    colSpan: 2,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, (printData.purchaseAmount1 || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react.createElement("td", {
    colSpan: 2,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, ((printData.items || []).reduce((sum, Item) => {
    var matchedPurchases = (itemPurchase || []).flatMap(ip => (ip.itemsQtyArray || ip.items || []).filter(it => isItemMatch(it, Item)).map(it => ({
      total: parseFloat(it.totalAmount || it.totalAmountUSD || parseFloat(it.newItemOut || it.itemQty || 0) * parseFloat(it.itemRate || it.cost || 0) || 0)
    })));
    var totalBoughtCost = matchedPurchases.reduce((s, p) => s + p.total, 0);
    var buyQty = matchedPurchases.reduce((s, p) => s + (p.qty || 0), 0) || parseFloat(Item.itemBuy) || 0;
    return sum + (totalBoughtCost > 0 ? totalBoughtCost : parseFloat(Item.totalGenerale) || buyQty * (parseFloat(Item.itemCost) || 0));
  }, 0) || printData.purchaseAmount2 || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react.createElement("td", {
    colSpan: 2,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, totalGeneralOutCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), (_Object$keys3 = Object.keys(expenses)) === null || _Object$keys3 === void 0 ? void 0 : _Object$keys3.map((Item, i) => /*#__PURE__*/react.createElement(Row, {
    key: Item,
    row: Item,
    index: i
  })), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    colSpan: 5,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, "SubTotal 2"), /*#__PURE__*/react.createElement("td", {
    colSpan: 4,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, totalAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react.createElement(Row2, null), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    colSpan: 5,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, "Total Generale"), /*#__PURE__*/react.createElement("td", {
    colSpan: 4,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, /*#__PURE__*/react.createElement("span", null, "$"), /*#__PURE__*/react.createElement("span", null, parseFloat(totalAmount + totalGeneralOutCost + totalAmountPlaning).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))), /*#__PURE__*/react.createElement("address", {
    style: {
      float: 'left',
      fontSize: '70%',
      textAlign: 'left'
    }
  }, /*#__PURE__*/react.createElement("p", {
    style: {
      lineHeight: '14px',
      fontWeight: 'bold'
    }
  }, "Bank: SOFIBANQUE SA ", /*#__PURE__*/react.createElement("br", null), "Entitled: GLOBAL GATE SARL", /*#__PURE__*/react.createElement("br", null), "Bank Account: 00023233330214247020073", /*#__PURE__*/react.createElement("br", null), "Code Swift: SFBXCDKIXXX"), /*#__PURE__*/react.createElement("p", {
    style: {
      fontWeight: 'bold'
    }
  }, "Terms & Conditions "), /*#__PURE__*/react.createElement("p", null, "     ESTIMATES ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED PARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL.")))))))), /*#__PURE__*/react.createElement("tfoot", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative',
      marginTop: '20px'
    }
  }, /*#__PURE__*/react.createElement("p", {
    hidden: true
  }, "..."), /*#__PURE__*/react.createElement("p", {
    hidden: true
  }, "..."), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(PrintFooter/* default */.A, {
    branchId: typeof row !== "undefined" ? (_row2 = row) === null || _row2 === void 0 ? void 0 : _row2.branchId : typeof data !== "undefined" ? (_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.branchId : ""
  }))))))));
}
/* harmony default export */ const ProjectView_ProjectViewInformation = (ProjectViewInformation);

/***/ },

/***/ 92887
(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.invoiceTest{margin:0 0 3em;height:75px}h1{font:bold 100% sans-serif;letter-spacing:.5em;text-align:center;text-transform:uppercase}.invoiceTest address{float:right;font-size:75%;font-style:normal;line-height:1.25;margin:0 0 1em 1em}address{float:right;font-size:75%;font-style:normal;margin:0 0 1em 1em}.invoiceTest h1{background-color:#000;border-color:#999;border-bottom-style:solid;border-bottom-width:10%;font:bold 100% sans-serif;letter-spacing:.5em;text-align:center;text-transform:uppercase}.invoiceTest address p{margin:0 0 .25em}.invoiceTest span,.invoiceTest img{display:block;float:left}.invoiceTest span{margin:0 1em 1em 0;max-height:25%;max-width:90%;position:absolute}.invoiceTest img{max-height:80px;max-width:var(--header-logo-width, 240px);object-fit:contain;margin-top:10px}.invoiceTest:after{clear:both;content:"";display:table}article,article address,table{margin:0 0 3em}article h1{clip:rect(0 0 0 0);position:absolute}article address{float:left;font-size:90%;float:left;line-height:10px}article:after{clear:both;content:"";display:table}table{table-layout:auto;width:100%}table{border-collapse:collapse}table.firstTable{float:right;width:50%;height:50%}table.firstTable:after{clear:both;content:"";display:table}table.firstTable th{width:40%}table.firstTable td{width:60%}aside h1#notes{border:none;border-width:0 0 1px;margin:0 0 1em}aside h1#notes{border-color:#999;border-bottom-style:solid;border-bottom-width:10%;font:bold 100% sans-serif;letter-spacing:.5em;text-align:center;text-transform:uppercase}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 78448
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85072);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55056);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92887);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


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