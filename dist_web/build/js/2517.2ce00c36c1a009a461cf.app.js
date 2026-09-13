"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[2517],{

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

/***/ }

}]);