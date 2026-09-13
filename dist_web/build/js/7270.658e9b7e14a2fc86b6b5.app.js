"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[7270],{

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

/***/ 40921
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Accordion_Accordion)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(52848);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 2 modules
var Paper = __webpack_require__(60538);
// EXTERNAL MODULE: ./node_modules/@mui/material/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(55120);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useControlled.js
var useControlled = __webpack_require__(41159);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/Accordion/accordionClasses.js


function getAccordionUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiAccordion', slot);
}
const accordionClasses = (0,generateUtilityClasses/* default */.A)('MuiAccordion', ['root', 'rounded', 'expanded', 'disabled', 'gutters', 'region']);
/* harmony default export */ const Accordion_accordionClasses = (accordionClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/Accordion/Accordion.js
'use client';



const _excluded = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "slots", "slotProps", "TransitionComponent", "TransitionProps"];
















const useUtilityClasses = ownerState => {
  const {
    classes,
    square,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  const slots = {
    root: ['root', !square && 'rounded', expanded && 'expanded', disabled && 'disabled', !disableGutters && 'gutters'],
    region: ['region']
  };
  return (0,composeClasses/* default */.A)(slots, getAccordionUtilityClass, classes);
};
const AccordionRoot = (0,styled/* default */.Ay)(Paper/* default */.A, {
  name: 'MuiAccordion',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${Accordion_accordionClasses.region}`]: styles.region
    }, styles.root, !ownerState.square && styles.rounded, !ownerState.disableGutters && styles.gutters];
  }
})(({
  theme
}) => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    position: 'relative',
    transition: theme.transitions.create(['margin'], transition),
    overflowAnchor: 'none',
    // Keep the same scrolling position
    '&::before': {
      position: 'absolute',
      left: 0,
      top: -1,
      right: 0,
      height: 1,
      content: '""',
      opacity: 1,
      backgroundColor: (theme.vars || theme).palette.divider,
      transition: theme.transitions.create(['opacity', 'background-color'], transition)
    },
    '&:first-of-type': {
      '&::before': {
        display: 'none'
      }
    },
    [`&.${Accordion_accordionClasses.expanded}`]: {
      '&::before': {
        opacity: 0
      },
      '&:first-of-type': {
        marginTop: 0
      },
      '&:last-of-type': {
        marginBottom: 0
      },
      '& + &': {
        '&::before': {
          display: 'none'
        }
      }
    },
    [`&.${Accordion_accordionClasses.disabled}`]: {
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    }
  };
}, ({
  theme
}) => ({
  variants: [{
    props: props => !props.square,
    style: {
      borderRadius: 0,
      '&:first-of-type': {
        borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
        borderTopRightRadius: (theme.vars || theme).shape.borderRadius
      },
      '&:last-of-type': {
        borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
        borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
        // Fix a rendering issue on Edge
        '@supports (-ms-ime-align: auto)': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    }
  }, {
    props: props => !props.disableGutters,
    style: {
      [`&.${Accordion_accordionClasses.expanded}`]: {
        margin: '16px 0'
      }
    }
  }]
}));
const Accordion = /*#__PURE__*/react.forwardRef(function Accordion(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiAccordion'
  });
  const {
      children: childrenProp,
      className,
      defaultExpanded = false,
      disabled = false,
      disableGutters = false,
      expanded: expandedProp,
      onChange,
      square = false,
      slots = {},
      slotProps = {},
      TransitionComponent: TransitionComponentProp,
      TransitionProps: TransitionPropsProp
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const [expanded, setExpandedState] = (0,useControlled/* default */.A)({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'Accordion',
    state: 'expanded'
  });
  const handleChange = react.useCallback(event => {
    setExpandedState(!expanded);
    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);
  const [summary, ...children] = react.Children.toArray(childrenProp);
  const contextValue = react.useMemo(() => ({
    expanded,
    disabled,
    disableGutters,
    toggle: handleChange
  }), [expanded, disabled, disableGutters, handleChange]);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    square,
    disabled,
    disableGutters,
    expanded
  });
  const classes = useUtilityClasses(ownerState);
  const backwardCompatibleSlots = (0,esm_extends/* default */.A)({
    transition: TransitionComponentProp
  }, slots);
  const backwardCompatibleSlotProps = (0,esm_extends/* default */.A)({
    transition: TransitionPropsProp
  }, slotProps);
  const [TransitionSlot, transitionProps] = (0,useSlot/* default */.A)('transition', {
    elementType: Collapse/* default */.A,
    externalForwardedProps: {
      slots: backwardCompatibleSlots,
      slotProps: backwardCompatibleSlotProps
    },
    ownerState
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(AccordionRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: ref,
    ownerState: ownerState,
    square: square
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionContext/* default */.A.Provider, {
      value: contextValue,
      children: summary
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionSlot, (0,esm_extends/* default */.A)({
      in: expanded,
      timeout: "auto"
    }, transitionProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        "aria-labelledby": summary.props.id,
        id: summary.props['aria-controls'],
        role: "region",
        className: classes.region,
        children: children
      })
    }))]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Accordion_Accordion = (Accordion);

/***/ },

/***/ 55120
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
'use client';



/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */
const AccordionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
if (false) // removed by dead control flow
{}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccordionContext);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 16576
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccordionDetails_AccordionDetails)
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
;// ./node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js


function getAccordionDetailsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiAccordionDetails', slot);
}
const accordionDetailsClasses = (0,generateUtilityClasses/* default */.A)('MuiAccordionDetails', ['root']);
/* harmony default export */ const AccordionDetails_accordionDetailsClasses = ((/* unused pure expression or super */ null && (accordionDetailsClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/AccordionDetails/AccordionDetails.js
'use client';



const _excluded = ["className"];








const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.A)(slots, getAccordionDetailsUtilityClass, classes);
};
const AccordionDetailsRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiAccordionDetails',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(1, 2, 2)
}));
const AccordionDetails = /*#__PURE__*/react.forwardRef(function AccordionDetails(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiAccordionDetails'
  });
  const {
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AccordionDetailsRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const AccordionDetails_AccordionDetails = (AccordionDetails);

/***/ },

/***/ 48719
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccordionSummary_AccordionSummary)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(18850);
// EXTERNAL MODULE: ./node_modules/@mui/material/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(55120);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.js


function getAccordionSummaryUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiAccordionSummary', slot);
}
const accordionSummaryClasses = (0,generateUtilityClasses/* default */.A)('MuiAccordionSummary', ['root', 'expanded', 'focusVisible', 'disabled', 'gutters', 'contentGutters', 'content', 'expandIconWrapper']);
/* harmony default export */ const AccordionSummary_accordionSummaryClasses = (accordionSummaryClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/AccordionSummary/AccordionSummary.js
'use client';



const _excluded = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"];











const useUtilityClasses = ownerState => {
  const {
    classes,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  const slots = {
    root: ['root', expanded && 'expanded', disabled && 'disabled', !disableGutters && 'gutters'],
    focusVisible: ['focusVisible'],
    content: ['content', expanded && 'expanded', !disableGutters && 'contentGutters'],
    expandIconWrapper: ['expandIconWrapper', expanded && 'expanded']
  };
  return (0,composeClasses/* default */.A)(slots, getAccordionSummaryUtilityClass, classes);
};
const AccordionSummaryRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
  name: 'MuiAccordionSummary',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    display: 'flex',
    minHeight: 48,
    padding: theme.spacing(0, 2),
    transition: theme.transitions.create(['min-height', 'background-color'], transition),
    [`&.${AccordionSummary_accordionSummaryClasses.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    [`&.${AccordionSummary_accordionSummaryClasses.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity
    },
    [`&:hover:not(.${AccordionSummary_accordionSummaryClasses.disabled})`]: {
      cursor: 'pointer'
    },
    variants: [{
      props: props => !props.disableGutters,
      style: {
        [`&.${AccordionSummary_accordionSummaryClasses.expanded}`]: {
          minHeight: 64
        }
      }
    }]
  };
});
const AccordionSummaryContent = (0,styled/* default */.Ay)('div', {
  name: 'MuiAccordionSummary',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})(({
  theme
}) => ({
  display: 'flex',
  flexGrow: 1,
  margin: '12px 0',
  variants: [{
    props: props => !props.disableGutters,
    style: {
      transition: theme.transitions.create(['margin'], {
        duration: theme.transitions.duration.shortest
      }),
      [`&.${AccordionSummary_accordionSummaryClasses.expanded}`]: {
        margin: '20px 0'
      }
    }
  }]
}));
const AccordionSummaryExpandIconWrapper = (0,styled/* default */.Ay)('div', {
  name: 'MuiAccordionSummary',
  slot: 'ExpandIconWrapper',
  overridesResolver: (props, styles) => styles.expandIconWrapper
})(({
  theme
}) => ({
  display: 'flex',
  color: (theme.vars || theme).palette.action.active,
  transform: 'rotate(0deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${AccordionSummary_accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(180deg)'
  }
}));
const AccordionSummary = /*#__PURE__*/react.forwardRef(function AccordionSummary(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiAccordionSummary'
  });
  const {
      children,
      className,
      expandIcon,
      focusVisibleClassName,
      onClick
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const {
    disabled = false,
    disableGutters,
    expanded,
    toggle
  } = react.useContext(AccordionContext/* default */.A);
  const handleChange = event => {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    expanded,
    disabled,
    disableGutters
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(AccordionSummaryRoot, (0,esm_extends/* default */.A)({
    focusRipple: false,
    disableRipple: true,
    disabled: disabled,
    component: "div",
    "aria-expanded": expanded,
    className: (0,clsx/* default */.A)(classes.root, className),
    focusVisibleClassName: (0,clsx/* default */.A)(classes.focusVisible, focusVisibleClassName),
    onClick: handleChange,
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionSummaryContent, {
      className: classes.content,
      ownerState: ownerState,
      children: children
    }), expandIcon && /*#__PURE__*/(0,jsx_runtime.jsx)(AccordionSummaryExpandIconWrapper, {
      className: classes.expandIconWrapper,
      ownerState: ownerState,
      children: expandIcon
    })]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const AccordionSummary_AccordionSummary = (AccordionSummary);

/***/ },

/***/ 57270
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CustomerVIew_CustomerInformationView)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(69067);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(11641);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(14073);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(8239);
// EXTERNAL MODULE: ./node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(27558);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tabs/Tabs.js + 6 modules
var Tabs = __webpack_require__(17532);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(10423);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(844);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(86990);
// EXTERNAL MODULE: ./node_modules/@mui/material/Menu/Menu.js + 1 modules
var Menu = __webpack_require__(94405);
// EXTERNAL MODULE: ./node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(20973);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(73896);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(14977);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(37636);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(33198);
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
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(50779);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(29571);
// EXTERNAL MODULE: ./node_modules/@mui/material/Select/Select.js + 4 modules
var Select = __webpack_require__(2071);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 2 modules
var Paper = __webpack_require__(60538);
// EXTERNAL MODULE: ./node_modules/@mui/material/Modal/Modal.js + 3 modules
var Modal = __webpack_require__(35406);
// EXTERNAL MODULE: ./node_modules/@mui/material/Backdrop/Backdrop.js + 1 modules
var Backdrop = __webpack_require__(47419);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Edit.js
var Edit = __webpack_require__(28597);
// EXTERNAL MODULE: ./node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(40921);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(48719);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(16576);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(72048);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(47767);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(99380);
// EXTERNAL MODULE: ./src/js/utils/apiCache.js
var apiCache = __webpack_require__(46986);
// EXTERNAL MODULE: ./src/js/apiConfig.js
var apiConfig = __webpack_require__(71510);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(84976);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(56655);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/tooltipClasses.js
var tooltipClasses = __webpack_require__(58331);
// EXTERNAL MODULE: ./node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar = __webpack_require__(89828);
// EXTERNAL MODULE: ./node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(8532);
// EXTERNAL MODULE: ./node_modules/@mui/material/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(14519);
// EXTERNAL MODULE: ./node_modules/@mui/material/Drawer/Drawer.js + 1 modules
var Drawer = __webpack_require__(88248);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(49799);
// EXTERNAL MODULE: ./node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(71543);
// EXTERNAL MODULE: ./node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(97834);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Menu.js
var icons_material_Menu = __webpack_require__(62274);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ChevronLeft.js
var ChevronLeft = __webpack_require__(8451);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(74353);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/react-to-print/lib/index.js
var lib = __webpack_require__(57240);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Visibility.js
var Visibility = __webpack_require__(5673);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__(13561);
// EXTERNAL MODULE: ./src/js/features/auth/authSlice.js
var authSlice = __webpack_require__(32005);
// EXTERNAL MODULE: ./src/js/component/NetworkLogoutIcon.js
var NetworkLogoutIcon = __webpack_require__(40301);
// EXTERNAL MODULE: ./src/js/component/Loader.js + 1 modules
var Loader = __webpack_require__(65821);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/CheckCircle.js
var CheckCircle = __webpack_require__(20889);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Cancel.js
var Cancel = __webpack_require__(82299);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(39781);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ArrowBack.js
var ArrowBack = __webpack_require__(92659);
// EXTERNAL MODULE: ./src/js/AdminView1/MessageAdminView.js + 1 modules
var MessageAdminView = __webpack_require__(3100);
// EXTERNAL MODULE: ./src/js/AdminView1/NotificationVIewInfo.js
var NotificationVIewInfo = __webpack_require__(95236);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Phone.js
var Phone = __webpack_require__(19873);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Web.js
var Web = __webpack_require__(67415);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Email.js
var Email = __webpack_require__(41845);
// EXTERNAL MODULE: ./src/js/img/images.png
var img_images = __webpack_require__(72761);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/KeyboardArrowDown.js
var KeyboardArrowDown = __webpack_require__(9483);
// EXTERNAL MODULE: ./node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(5733);
// EXTERNAL MODULE: ./node_modules/@mui/lab/TabList/TabList.js
var TabList = __webpack_require__(38339);
// EXTERNAL MODULE: ./node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(38354);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js
var LocalizationProvider = __webpack_require__(75737);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js + 61 modules
var DatePicker = __webpack_require__(48484);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js
var AdapterDayjs = __webpack_require__(601);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js
var DemoContainer = __webpack_require__(61087);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/LocalPrintshop.js
var LocalPrintshop = __webpack_require__(8659);
// EXTERNAL MODULE: ./node_modules/exceljs/dist/exceljs.min.js
var exceljs_min = __webpack_require__(24974);
// EXTERNAL MODULE: ./node_modules/file-saver/dist/FileSaver.min.js
var FileSaver_min = __webpack_require__(4213);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(20561);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/icons-material/esm/Cached.js
"use client";



/* harmony default export */ const Cached = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z"
}), 'Cached'));
;// ./src/js/AdminView1/PageView/CustomerVIew/CustomerInformationView.js
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"];
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



























































var DeleteTooltip = (0,styled/* default */.Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(tooltipClasses/* default */.A.tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,styled/* default */.Ay)(_ref3 => {
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
      backgroundColor: 'gray',
      color: 'white',
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
var BlackTooltip = (0,styled/* default */.Ay)(_ref7 => {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded4);
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref8 => {
  var theme = _ref8.theme;
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
var CustomerInformationView_AppBar = (0,styled/* default */.Ay)(AppBar/* default */.A, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref9 => {
  var theme = _ref9.theme,
    open = _ref9.open;
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
var CustomerInformationView_Drawer = (0,styled/* default */.Ay)(Drawer/* default */.Ay, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref0 => {
  var theme = _ref0.theme,
    open = _ref0.open;
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
function CustomerInformationView() {
  var _customer$filter;
  var _useParams = (0,dist/* useParams */.g)(),
    id = _useParams.id;
  var navigate = (0,dist/* useNavigate */.Zp)();
  var dispatch = (0,es/* useDispatch */.wA)();
  var user = (0,es/* useSelector */.d4)(authSlice/* selectCurrentUser */.xu);
  (0,react.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
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
        return _ref1.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var _useState = (0,react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield (0,apiCache/* cachedGet */.Fe)("".concat(apiConfig/* ENDPOINT_URL */.m, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var customerInfoU = grantAccess.filter(row => row.moduleName === "Customer" && row.access.editM === true);
  var _useState3 = (0,react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    customer = _useState4[0],
    setCustomer = _useState4[1];
  var _useState5 = (0,react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loadingData = _useState6[0],
    setLoadingData = _useState6[1];
  var _useState7 = (0,react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    selectOptions = _useState8[0],
    setSelectOptions = _useState8[1];
  var apiUrl = "".concat(apiConfig/* ENDPOINT_URL */.m, "/customer");
  (0,react.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var res = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/customer"));
          setCustomer(res.data.data.reverse());
          setLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchData() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var _useState9 = (0,react.useState)(1),
    _useState0 = _slicedToArray(_useState9, 2),
    show = _useState0[0],
    setShow = _useState0[1];
  var handleShow = e => {
    setShow(e);
  };
  var _React$useState = react.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    expanded = _React$useState2[0],
    setExpanded = _React$useState2[1];
  var handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  {/** search && Tab */}
  var _useState1 = (0,react.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    value = _useState10[0],
    setValue = _useState10[1];
  var _useState11 = (0,react.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    value2 = _useState12[0],
    setValue2 = _useState12[1];
  (0,react.useEffect)(() => {
    var selectedIndex = customer.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [customer, id]);
  var handleChange3 = (e, newValue) => {
    setValue(newValue);
    setSelectOptions('');
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
    setSelectOptions('');
  };
  var _useState13 = (0,react.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    search = _useState14[0],
    setSearch = _useState14[1];
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
  };
  var newArray = search !== '' ? customer.filter(row => row.customerType.toLowerCase().includes(search.toLowerCase()) || row.Customer && row.Customer.toLowerCase().includes(search.toLowerCase()) || row.customerEmail && row.customerEmail.toLowerCase().includes(search.toLowerCase()) || row.customerDescription && row.customerDescription.toLowerCase().includes(search.toLowerCase())) : customer;
  {/** search && Tab End */}
  {/* Start Estimate Transaction Information */}
  var _useState15 = (0,react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    estimate = _useState16[0],
    setEstimate = _useState16[1];
  var _useState17 = (0,react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    purchase = _useState18[0],
    setPurchase = _useState18[1];
  var _useState19 = (0,react.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    invoice = _useState20[0],
    setInvoice = _useState20[1];
  var _useState21 = (0,react.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    invoice1 = _useState22[0],
    setInvoice1 = _useState22[1];
  var _useState23 = (0,react.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    maintenance = _useState24[0],
    setMaintenance = _useState24[1];
  var _useState25 = (0,react.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    payment = _useState26[0],
    setPayment = _useState26[1];
  var _useState27 = (0,react.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    posHistory = _useState28[0],
    setPosHistory = _useState28[1];
  var _useState29 = (0,react.useState)(''),
    _useState30 = _slicedToArray(_useState29, 2),
    CustomerInfo = _useState30[0],
    setCustomerInfo = _useState30[1];
  (0,react.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        try {
          var _estimateResponse$dat, _invoiceResponse$data, _invoiceResponse$data2, _purChaseResponse$dat, _maintenanceResponse$, _resPayment$data;
          var res = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/get-customer/").concat(id));
          setCustomerInfo(res.data.data.Customer);
          var estimateResponse = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/estimation?summary=true&customerId=").concat(id));
          setEstimate((_estimateResponse$dat = estimateResponse.data) === null || _estimateResponse$dat === void 0 || (_estimateResponse$dat = _estimateResponse$dat.data) === null || _estimateResponse$dat === void 0 ? void 0 : _estimateResponse$dat.reverse());
          var invoiceResponse = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/invoice?summary=true&customerId=").concat(id));
          setInvoice((_invoiceResponse$data = invoiceResponse.data) === null || _invoiceResponse$data === void 0 || (_invoiceResponse$data = _invoiceResponse$data.data) === null || _invoiceResponse$data === void 0 ? void 0 : _invoiceResponse$data.reverse());
          setInvoice1((_invoiceResponse$data2 = invoiceResponse.data) === null || _invoiceResponse$data2 === void 0 || (_invoiceResponse$data2 = _invoiceResponse$data2.data) === null || _invoiceResponse$data2 === void 0 ? void 0 : _invoiceResponse$data2.filter(row => row.status === 'Sent' || row.status === 'Paid' || row.status === 'Partially-Paid'));
          var purChaseResponse = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/purchase?summary=true&customerId=").concat(id));
          setPurchase((_purChaseResponse$dat = purChaseResponse.data) === null || _purChaseResponse$dat === void 0 || (_purChaseResponse$dat = _purChaseResponse$dat.data) === null || _purChaseResponse$dat === void 0 ? void 0 : _purChaseResponse$dat.reverse());
          var maintenanceResponse = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/maintenance?summary=true&customerId=").concat(id));
          setMaintenance((_maintenanceResponse$ = maintenanceResponse.data) === null || _maintenanceResponse$ === void 0 || (_maintenanceResponse$ = _maintenanceResponse$.data) === null || _maintenanceResponse$ === void 0 ? void 0 : _maintenanceResponse$.reverse());
          var resPayment = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/payment?customerId=").concat(id));
          var allPayments = ((_resPayment$data = resPayment.data) === null || _resPayment$data === void 0 ? void 0 : _resPayment$data.data) || [];
          setPayment(allPayments.filter(p => p.customerName && String(p.customerName._id) === String(id) || String(p.customerName) === String(id)));
          // Fetch POS
          var resPos = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/pos?summary=true&customerId=").concat(id));
          if (resPos.data && resPos.data.data) {
            var _resPos$data;
            setPosHistory((_resPos$data = resPos.data) === null || _resPos$data === void 0 || (_resPos$data = _resPos$data.data) === null || _resPos$data === void 0 ? void 0 : _resPos$data.reverse());
          }
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchData() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchData();
  }, [id]);
  var _useState31 = (0,react.useState)(() => {
      var storedQuick = JSON.parse(localStorage.getItem('StartDateStatement'));
      return new Date(storedQuick);
    }),
    _useState32 = _slicedToArray(_useState31, 2),
    startDate = _useState32[0],
    setStartDate = _useState32[1];
  var _useState33 = (0,react.useState)(() => {
      var storedQuickFrom = JSON.parse(localStorage.getItem('FromDateStatement'));
      return new Date(storedQuickFrom);
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    fromDate = _useState34[0],
    setFromDate = _useState34[1];
  var _useState35 = (0,react.useState)(() => {
      var storedQuickEnd = JSON.parse(localStorage.getItem('EndDateStatement'));
      return new Date(storedQuickEnd);
    }),
    _useState36 = _slicedToArray(_useState35, 2),
    endDate = _useState36[0],
    setEndDate = _useState36[1];
  var handleChangeDate = date => {
    setStartDate(date);
    localStorage.setItem('StartDateStatement', JSON.stringify(date));
  };
  var handleChangeDateFrom = date => {
    setFromDate(date);
    localStorage.setItem('FromDateStatement', JSON.stringify(date));
  };
  var handleChangeDateEnd = date => {
    setEndDate(date);
    localStorage.setItem('EndDateStatement', JSON.stringify(date));
  };
  {/** Year Statement start */}
  var statement = [];
  invoice1.forEach(row => {
    statement.push({
      type: 'Invoice',
      date: row.invoiceDate,
      number: row.invoiceNumber,
      defect: row.invoiceDefect + ' / ' + row.invoiceSubject,
      amount: row.totalInvoice,
      balance: row.balanceDue,
      paidAmount: row.total,
      due: row.invoiceDueDate,
      status: row.status
    });
  });
  payment.forEach(row => {
    statement.push({
      type: 'Payment',
      date: row.paymentDate,
      number: row.paymentNumber,
      numberArray: row.TotalAmount,
      defect: row.modes,
      payment: row.amount - row.remaining,
      status: '',
      credit: row.remaining
    });
  });
  posHistory.forEach(row => {
    var usdAmount = row.rate > 0 ? row.totalInvoice / row.rate : 0;
    statement.push({
      type: 'POS',
      date: row.invoiceDate || row.paymentDate,
      number: row.factureNumber,
      defect: 'POS Sale',
      amount: usdAmount,
      payment: row.status === 'Paid' ? usdAmount : row.TotalAmountPaid / row.rate,
      status: row.status
    });
  });
  var balanceDue = 0;
  var filteredStatement = statement.filter(row => {
    var transactionYear = dayjs_min_default()(row.date).format('YYYY');
    return transactionYear === dayjs_min_default()(startDate).format('YYYY');
  });
  var _useState37 = (0,react.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    filteredData = _useState38[0],
    setFilteredData = _useState38[1];
  (0,react.useEffect)(() => {
    var headers = [];
    var currentDate = new Date(fromDate);
    while (currentDate <= endDate) {
      headers.push(currentDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setFilteredData(headers);
  }, [fromDate, endDate]);
  var previousYear = new Date(startDate).getFullYear() - 1;
  var prevBalance = 0;
  statement.forEach(row => {
    var credit = 0;
    var transaction = new Date(row.date).getFullYear();
    if (transaction <= previousYear) {
      if (row.type === 'Invoice') {
        prevBalance += parseFloat(row.amount);
      } else if (row.type === 'Payment') {
        prevBalance -= parseFloat(row.payment);
        credit = prevBalance;
        prevBalance = Math.max(prevBalance, 0);
      } else if (row.type === 'POS') {
        prevBalance += parseFloat(row.amount);
        prevBalance -= parseFloat(row.payment || 0);
      }
    }
  });
  var transactionYears = new Date(startDate).getFullYear();
  var lastYearInfo = {
    type: '***Opening Balance***',
    date: new Date(transactionYears, 0, 1),
    number: '',
    numberArray: [],
    defect: '',
    amount: prevBalance,
    status: ''
  };
  var newStatementInfo = [lastYearInfo, ...filteredStatement];
  var credit1 = 0;
  payment === null || payment === void 0 || payment.forEach(row => {
    if (row.modes === 'Credit' || row.modes === 'Cash' && row.remaining > 0 || row.modes === 'Bank Transfer' && row.remaining > 0) {
      credit1 += parseFloat(row.remaining !== undefined && row.remaining !== null ? row.remaining : row.amount || 0);
    } else if (row.modes === 'Credit-Account') {
      credit1 -= parseFloat(row.amount || 0);
    }
  });
  credit1 = Math.max(0, credit1);
  var credit2 = credit1.toFixed(2);
  var _useState39 = (0,react.useState)(''),
    _useState40 = _slicedToArray(_useState39, 2),
    isCredit = _useState40[0],
    setIsCredit = _useState40[1];
  var handleUpdateCredit = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (e) {
      if (e && e.preventDefault) e.preventDefault();
      var data = {
        credit: credit2
      };
      try {
        var res = yield axios/* default */.A.put("".concat(apiConfig/* ENDPOINT_URL */.m, "/update-customer/").concat(id), data);
        if (res) {
          setIsCredit('true');
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleUpdateCredit(_x) {
      return _ref13.apply(this, arguments);
    };
  }();
  {/** Year Statement end */}
  var _useState41 = (0,react.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    newStatement = _useState42[0],
    setNewStatement = _useState42[1];
  var _useState43 = (0,react.useState)([]),
    _useState44 = _slicedToArray(_useState43, 2),
    AllStatement = _useState44[0],
    AllNewStatement = _useState44[1];
  var _useState45 = (0,react.useState)([]),
    _useState46 = _slicedToArray(_useState45, 2),
    OutStandStatement = _useState46[0],
    setOutStandNewStatement = _useState46[1];
  var _useState47 = (0,react.useState)([]),
    _useState48 = _slicedToArray(_useState47, 2),
    customStatement = _useState48[0],
    setCustomNewStatement = _useState48[1];
  (0,react.useEffect)(() => {
    if (selectOptions === 'Year') {
      AllNewStatement([]);
      setOutStandNewStatement([]);
      setCustomNewStatement([]);
      setNewStatement(newStatementInfo === null || newStatementInfo === void 0 ? void 0 : newStatementInfo.sort((a, b) => new Date(a.date) - new Date(b.date)));
    } else if (selectOptions === 'All') {
      setNewStatement([]);
      setOutStandNewStatement([]);
      setCustomNewStatement([]);
      AllNewStatement(statement === null || statement === void 0 ? void 0 : statement.sort((a, b) => new Date(a.date) - new Date(b.date)));
    } else if (selectOptions === 'All Outstanding') {
      setNewStatement([]);
      AllNewStatement([]);
      setCustomNewStatement([]);
      setOutStandNewStatement(statement.filter(row => row.status === 'Sent' || row.status === 'Partially-Paid').sort((a, b) => new Date(a.date) - new Date(b.date)));
    } else if (selectOptions === 'Custom') {
      setNewStatement([]);
      AllNewStatement([]);
      setOutStandNewStatement([]);
      setCustomNewStatement(statement.filter(row => filteredData.find(Item => dayjs_min_default()(Item).format('DD/MM/YYYY') === dayjs_min_default()(row.date).format('DD/MM/YYYY'))).sort((a, b) => new Date(a.date) - new Date(b.date)));
    } else {
      setNewStatement([]);
      AllNewStatement([]);
      setOutStandNewStatement([]);
      setCustomNewStatement([]);
    }
  }, [selectOptions, filteredData]);
  {/** total year Start */}
  var _useState49 = (0,react.useState)(0),
    _useState50 = _slicedToArray(_useState49, 2),
    openingBalanceTotal = _useState50[0],
    setOpeningBalanceTotal = _useState50[1];
  var _useState51 = (0,react.useState)(0),
    _useState52 = _slicedToArray(_useState51, 2),
    InvoiceTotal = _useState52[0],
    setInvoiceTotal = _useState52[1];
  var _useState53 = (0,react.useState)(0),
    _useState54 = _slicedToArray(_useState53, 2),
    PaymentTotal = _useState54[0],
    setPaymentTotal = _useState54[1];
  var _useState55 = (0,react.useState)(0),
    _useState56 = _slicedToArray(_useState55, 2),
    totalBalance = _useState56[0],
    setTotalBalance = _useState56[1];
  (0,react.useEffect)(() => {
    if (selectOptions === 'Year') {
      var openingBalanceTotal1 = newStatement.length > 0 ? newStatement.filter(row => row.type === '***Opening Balance***').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0;
      setOpeningBalanceTotal(openingBalanceTotal1);
      var InvoiceTotal1 = newStatement.length > 0 ? newStatement.filter(row => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0;
      setInvoiceTotal(InvoiceTotal1);
      var PaymentTotal1 = newStatement.length > 0 ? newStatement.filter(row => row.type === 'Payment').reduce((sum, row) => sum + parseFloat(row.payment), 0) : 0;
      setPaymentTotal(PaymentTotal1);
      var totalBalance1 = openingBalanceTotal1 + InvoiceTotal1 - PaymentTotal1;
      setTotalBalance(totalBalance1);
    } else if (selectOptions === 'All') {
      setOpeningBalanceTotal(0);
      var _InvoiceTotal = AllStatement.length > 0 ? AllStatement.filter(row => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0;
      setInvoiceTotal(_InvoiceTotal);
      var _PaymentTotal = AllStatement.length > 0 ? AllStatement.filter(row => row.type === 'Payment').reduce((sum, row) => sum + parseFloat(row.payment), 0) : 0;
      setPaymentTotal(_PaymentTotal);
      var _totalBalance = _InvoiceTotal - _PaymentTotal - parseFloat(credit2);
      setTotalBalance(_totalBalance);
    } else if (selectOptions === 'All Outstanding') {
      setOpeningBalanceTotal(0);
      var _InvoiceTotal2 = OutStandStatement.length > 0 ? OutStandStatement.filter(row => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0;
      var InvoiceTotal2 = OutStandStatement.length > 0 ? OutStandStatement.filter(row => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.balance), 0) : 0;
      var InvoiceTotal3 = OutStandStatement.length > 0 ? OutStandStatement.filter(row => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.paidAmount), 0) : 0;
      setInvoiceTotal(_InvoiceTotal2);
      setPaymentTotal(InvoiceTotal3);
      setTotalBalance(InvoiceTotal2);
    } else if (selectOptions === 'Custom') {
      setOpeningBalanceTotal(0);
      var _InvoiceTotal3 = customStatement.length > 0 ? customStatement.filter(row => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0;
      setInvoiceTotal(_InvoiceTotal3);
      var _PaymentTotal2 = customStatement.length > 0 ? customStatement.filter(row => row.type === 'Payment').reduce((sum, row) => sum + parseFloat(row.payment), 0) : 0;
      setPaymentTotal(_PaymentTotal2);
      var _totalBalance2 = _InvoiceTotal3 - _PaymentTotal2;
      setTotalBalance(_totalBalance2);
    }
  }, [selectOptions, newStatement, AllStatement, OutStandStatement, customStatement]);
  {/** total year end */}
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,authSlice/* logOut */.je)());
    navigate('/');
  };
  var _React$useState3 = react.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    anchorEl = _React$useState4[0],
    setAnchorEl = _React$useState4[1];
  var open = Boolean(anchorEl);
  var handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  var handleCloseMenu = () => {
    setAnchorEl(null);
  };
  var componentRef = (0,react.useRef)();
  var handlePrint = (0,lib.useReactToPrint)({
    content: () => componentRef.current,
    documentTitle: 'Statement For ' + CustomerInfo,
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
  var componentRef1 = (0,react.useRef)();
  var handlePrint1 = (0,lib.useReactToPrint)({
    content: () => componentRef1.current,
    documentTitle: 'Statement For ' + CustomerInfo,
    onBeforeGetContent: () => {
      var PAGE_HEIGHT = 1045;
      var printElement = componentRef1.current;
      if (printElement) {
        printElement.classList.add("temp-class-for-height");
        var height = printElement.clientHeight;
        var numberOfPage = Math.ceil(height / PAGE_HEIGHT);
        if (numberOfPage > 1) {
          var _printElement$getElem3, _printElement$getElem4;
          var heightWithSingleHeader = numberOfPage * PAGE_HEIGHT;
          var requiredHeight = heightWithSingleHeader;
          var headerHeight = (_printElement$getElem3 = printElement.getElementsByTagName("thead")) === null || _printElement$getElem3 === void 0 || (_printElement$getElem3 = _printElement$getElem3[0]) === null || _printElement$getElem3 === void 0 ? void 0 : _printElement$getElem3.clientHeight;
          var footerHeight = (_printElement$getElem4 = printElement.getElementsByTagName("tfoot")) === null || _printElement$getElem4 === void 0 || (_printElement$getElem4 = _printElement$getElem4[0]) === null || _printElement$getElem4 === void 0 ? void 0 : _printElement$getElem4.clientHeight;
          requiredHeight -= (numberOfPage - 1) * (headerHeight + footerHeight);
          printElement.style.height = "".concat(requiredHeight, "px");
        }
        printElement.classList.remove("temp-class-for-height");
      }
    },
    onAfterPrint: () => {
      var printElement = componentRef1.current;
      if (printElement) {
        printElement.style.height = "auto";
      }
    }
  });
  var handleOpenPrint = () => {
    handlePrint();
    setAnchorEl(null);
  };
  var handleOpenPrint1 = () => {
    handlePrint1();
    setAnchorEl(null);
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
  var _useState63 = (0,react.useState)([]),
    _useState64 = _slicedToArray(_useState63, 2),
    notification = _useState64[0],
    setNotification = _useState64[1];
  (0,react.useEffect)(() => {
    var fetchComment = /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator(function* () {
        try {
          var _res$data2, _resNotification$data;
          var res = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/comment"));
          var resp = (_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.filter(row => row.CommentInfo.idInfo === id);
          setComments(resp.reverse());
          var resNotification = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/notification"));
          setNotification((_resNotification$data = resNotification.data) === null || _resNotification$data === void 0 || (_resNotification$data = _resNotification$data.data) === null || _resNotification$data === void 0 ? void 0 : _resNotification$data.filter(row => row.idInfo === id));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchComment() {
        return _ref14.apply(this, arguments);
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
  var _useState65 = (0,react.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    loading = _useState66[0],
    setLoading = _useState66[1];
  var _useState67 = (0,react.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    loadingOpenModal = _useState68[0],
    setLoadingOpenModal = _useState68[1];
  var _useState69 = (0,react.useState)(false),
    _useState70 = _slicedToArray(_useState69, 2),
    ErrorOpenModal = _useState70[0],
    setErrorOpenModal = _useState70[1];
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
    if (isCredit === 'true') {
      window.location.reload();
    } else {
      setLoadingOpenModal(false);
    }
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  {/** Loading End */}
  var dateComment = dayjs_min_default()(Date.now());
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (e) {
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
    return function handleSubmitEdit(_x2) {
      return _ref15.apply(this, arguments);
    };
  }();
  var _useState71 = (0,react.useState)({}),
    _useState72 = _slicedToArray(_useState71, 2),
    customer2 = _useState72[0],
    SetCustomer2 = _useState72[1];
  var _useState73 = (0,react.useState)(1),
    _useState74 = _slicedToArray(_useState73, 2),
    show2 = _useState74[0],
    setShow2 = _useState74[1];
  var handleShow2 = e => {
    setShow2(e);
  };
  var _React$useState5 = react.useState('1'),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    value3 = _React$useState6[0],
    setValue3 = _React$useState6[1];
  (0,react.useEffect)(() => {
    var result = localStorage.getItem('TabPanelCustomerView');
    if (result) {
      setValue3(result);
    }
  });
  var handleChange4 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('TabPanelCustomerView', changeValue);
  };
  var _React$useState7 = react.useState(true),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    sideBar = _React$useState8[0],
    setSideBar = _React$useState8[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var amount1 = 0;
  var customRow = customStatement === null || customStatement === void 0 ? void 0 : customStatement.map((row, i) => {
    var _row$numberArray;
    var credit = 0;
    if (row.type === 'Invoice' || row.type === '***Opening Balance***') {
      amount1 += parseFloat(row.amount);
    } else if (row.type === 'Payment') {
      amount1 -= parseFloat(row.payment);
    } else if (row.type === 'POS') {
      amount1 += parseFloat(row.amount);
      amount1 -= parseFloat(row.payment || 0);
    }
    return /*#__PURE__*/react.createElement("tr", {
      key: i
    }, /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, dayjs_min_default()(row.date).format('DD/MM/YYYY')), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, /*#__PURE__*/react.createElement("span", null, row.type === 'Invoice' && 'Ref ' + row.defect + ' INV-' + String(row.number).padStart(6, '0') + ' - due on ' + dayjs_min_default()(row.due).format('DD MMMM YYYY')), /*#__PURE__*/react.createElement("span", null, row.type === 'Payment' && row.numberArray.length === 0 && row.credit > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.credit + ' In Advanced Payment (Credit) '), /*#__PURE__*/react.createElement("span", null, row.type === 'Payment' && row.numberArray.length > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.payment + ' for payment of ' + ((_row$numberArray = row.numberArray) === null || _row$numberArray === void 0 ? void 0 : _row$numberArray.map(row2 => 'INV-' + String(row2.Ref).padStart(6, '0'))) + ' / Mode: ' + row.defect), /*#__PURE__*/react.createElement("span", null, row.type === 'POS' && 'POS-' + String(row.number).padStart(6, '0') + ' - ' + row.defect)), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Invoice' || row.type === '***Opening Balance***' || row.type === 'POS' ? "$".concat((row.amount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ''), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Payment' || row.type === 'POS' ? "$".concat((row.payment || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ''), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, "$".concat(amount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))));
  });
  var amount2 = 0;
  var allStandingRow = OutStandStatement === null || OutStandStatement === void 0 ? void 0 : OutStandStatement.map((row, i) => {
    var _row$numberArray2, _row$numberArray3;
    if (row.type === 'Invoice' || row.type === '***Opening Balance***') {
      amount2 += parseFloat(row.balance);
    } else if (row.type === 'Payment') {
      amount2 -= parseFloat(row.payment);
    } else if (row.type === 'POS') {
      // For outstanding, POS is usually fully paid, so amount - payment = 0 if status is Paid.
      // If partially paid, balance should be row.amount - row.payment
      var posBalance = (row.amount || 0) - (row.payment || 0);
      amount2 += posBalance;
    }
    return /*#__PURE__*/react.createElement("tr", {
      key: i
    }, /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, dayjs_min_default()(row.date).format('DD/MM/YYYY')), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, /*#__PURE__*/react.createElement("span", null, row.type === 'Invoice' && 'Ref ' + row.defect + ' INV-' + String(row.number).padStart(6, '0') + ' - due on ' + dayjs_min_default()(row.due).format('DD MMMM YYYY')), /*#__PURE__*/react.createElement("span", null, row.type === 'Payment' && row.credit > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.credit + ' In Advanced Payment (Credit) '), /*#__PURE__*/react.createElement("span", null, row.type === 'Payment' && ((_row$numberArray2 = row.numberArray) === null || _row$numberArray2 === void 0 ? void 0 : _row$numberArray2.length) > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.payment + ' for payment of ' + ((_row$numberArray3 = row.numberArray) === null || _row$numberArray3 === void 0 ? void 0 : _row$numberArray3.map(row2 => 'INV-' + String(row2.Ref).padStart(6, '0'))) + ' / Mode: ' + row.defect), /*#__PURE__*/react.createElement("span", null, row.type === 'POS' && 'POS-' + String(row.number).padStart(6, '0') + ' - ' + row.defect)), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Invoice' || row.type === '***Opening Balance***' || row.type === 'POS' ? "$".concat((row.amount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ''), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Payment' || row.type === 'POS' ? "$".concat((row.payment || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : "$".concat((row.paidAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, "$".concat(amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))));
  });
  var amount3 = 0;
  var allRow = AllStatement === null || AllStatement === void 0 ? void 0 : AllStatement.map((row, i) => {
    var _row$numberArray4, _row$numberArray5;
    if (row.type === 'Invoice' || row.type === '***Opening Balance***') {
      amount3 += parseFloat(row.amount);
    } else if (row.type === 'Payment') {
      amount3 -= parseFloat(row.payment);
    } else if (row.type === 'POS') {
      amount3 += parseFloat(row.amount);
      amount3 -= parseFloat(row.payment || 0);
    }
    return /*#__PURE__*/react.createElement("tr", {
      key: i
    }, /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, dayjs_min_default()(row.date).format('DD/MM/YYYY')), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, /*#__PURE__*/react.createElement("span", null, row.type === 'Invoice' && 'Ref ' + row.defect + ' INV-' + String(row.number).padStart(6, '0') + ' - due on ' + dayjs_min_default()(row.due).format('DD MMMM YYYY')), /*#__PURE__*/react.createElement("span", null, row.type === 'Payment' && row.credit > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.credit + ' In Advanced Payment (Credit) '), /*#__PURE__*/react.createElement("span", null, row.type === 'Payment' && ((_row$numberArray4 = row.numberArray) === null || _row$numberArray4 === void 0 ? void 0 : _row$numberArray4.length) > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.payment + ' for payment of ' + ((_row$numberArray5 = row.numberArray) === null || _row$numberArray5 === void 0 ? void 0 : _row$numberArray5.map(row2 => 'INV-' + String(row2.Ref).padStart(6, '0'))) + ' / Mode: ' + row.defect), /*#__PURE__*/react.createElement("span", null, row.type === 'POS' && 'POS-' + String(row.number).padStart(6, '0') + ' - ' + row.defect)), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Invoice' || row.type === '***Opening Balance***' || row.type === 'POS' ? "$".concat((row.amount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ''), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Payment' || row.type === 'POS' ? "$".concat((row.payment || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ''), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, "$".concat(amount3.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))));
  });
  var amount4 = 0;
  var yearRow = newStatement === null || newStatement === void 0 ? void 0 : newStatement.map((row, i) => {
    var _row$numberArray6;
    var credit = 0;
    if (row.type === 'Invoice' || row.type === '***Opening Balance***') {
      amount4 += parseFloat(row.amount);
    } else if (row.type === 'Payment') {
      amount4 -= parseFloat(row.payment);
    } else if (row.type === 'POS') {
      amount4 += parseFloat(row.amount);
      amount4 -= parseFloat(row.payment || 0);
    }
    return /*#__PURE__*/react.createElement("tr", {
      key: i
    }, /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, dayjs_min_default()(row.date).format('DD/MM/YYYY')), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, /*#__PURE__*/react.createElement("span", null, row.type === 'Invoice' && 'Ref ' + row.defect + ' INV-' + String(row.number).padStart(6, '0') + ' - due on ' + dayjs_min_default()(row.due).format('DD MMMM YYYY')), /*#__PURE__*/react.createElement("span", null, row.type === 'Payment' && row.numberArray.length === 0 && row.credit > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.credit + ' In Advanced Payment (Credit) '), /*#__PURE__*/react.createElement("span", null, row.type === 'Payment' && row.numberArray.length > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.payment + ' for payment of ' + ((_row$numberArray6 = row.numberArray) === null || _row$numberArray6 === void 0 ? void 0 : _row$numberArray6.map(row2 => 'INV-' + String(row2.Ref).padStart(6, '0'))) + ' / Mode: ' + row.defect), /*#__PURE__*/react.createElement("span", null, row.type === 'POS' && 'POS-' + String(row.number).padStart(6, '0') + ' - ' + row.defect)), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Invoice' || row.type === '***Opening Balance***' || row.type === 'POS' ? "$".concat((row.amount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ''), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Payment' || row.type === 'POS' ? "$".concat((row.payment || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ''), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, "$".concat(amount4.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))));
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react.createElement(CssBaseline/* default */.Ay, null), /*#__PURE__*/react.createElement(CustomerInformationView_AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react.createElement(Toolbar/* default */.A, {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react.createElement(icons_material_Menu/* default */.A, null)), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Customer View"), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: () => navigate('/CustomerViewAdmin')
  }, /*#__PURE__*/react.createElement(ArrowBack/* default */.A, {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react.createElement(NotificationVIewInfo/* default */.A, null), /*#__PURE__*/react.createElement(MessageAdminView/* default */.A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react.createElement(NetworkLogoutIcon/* default */.A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react.createElement(CustomerInformationView_Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react.createElement(Toolbar/* default */.A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react.createElement(ChevronLeft/* default */.A, null))), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(List/* default */.A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react.createElement(SidebarDash/* default */.A, null))), /*#__PURE__*/react.createElement(Box/* default */.A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react.createElement(Toolbar/* default */.A, null), /*#__PURE__*/react.createElement(Container/* default */.A, {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react.createElement(Loader/* default */.A, null))) : /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    spacing: 2
  }, show1 === 1 ? /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 3
  }, show2 === 1 ? /*#__PURE__*/react.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      padding: '5px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement(Checkbox/* default */.A, null), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h6"
  }, "All Customer")), /*#__PURE__*/react.createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react.createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow2(2)
  }, "Filter"))), /*#__PURE__*/react.createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'auto',
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement(Tabs/* default */.A, {
    value: value,
    onChange: handleChange3,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, customer === null || customer === void 0 ? void 0 : customer.map((row, index) => /*#__PURE__*/react.createElement(Tab/* default */.A, {
    key: index,
    label: row.Customer ? row.Customer : '',
    component: react_router_dom_dist/* Link */.N_,
    to: "/CustomerInformationView/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show2 === 2 ? /*#__PURE__*/react.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 10
  }, /*#__PURE__*/react.createElement(TextField/* default */.A, {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react.createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: () => handleShow2(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react.createElement(Close/* default */.A, {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react.createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'auto',
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement(Tabs/* default */.A, {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, index) => /*#__PURE__*/react.createElement(Tab/* default */.A, {
    key: index,
    label: row.Customer ? row.Customer : '',
    component: react_router_dom_dist/* Link */.N_,
    to: "/CustomerInformationView/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : '') : "", /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 9
  }, /*#__PURE__*/react.createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      width: '100%',
      background: 'white'
    }
  }, customer === null || customer === void 0 || (_customer$filter = customer.filter(i => i._id === id)) === null || _customer$filter === void 0 ? void 0 : _customer$filter.map(i => {
    var _row, _row2, _data, _row3, _row4, _data2, _row5, _data3;
    return /*#__PURE__*/react.createElement("div", {
      key: i._id
    }, /*#__PURE__*/react.createElement("div", {
      className: "itemInfoContainer2Head"
    }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      sx: {
        fontWeight: 'bold'
      }
    }, i.customerFullName ? i.customerFullName.toUpperCase() : i.companyName.toUpperCase())), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Button/* default */.A, {
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
    }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      disabled: customerInfoU.length === 0
    }, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/CustomerFormUpdate/".concat(i._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react.createElement(Edit/* default */.A, null), /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Edit"))), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      onClick: handleOpenPrint,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react.createElement(LocalPrintshop/* default */.A, null), /*#__PURE__*/react.createElement("span", null, "Print")), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      onClick: handleOpenPrint1,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react.createElement(LocalPrintshop/* default */.A, null), /*#__PURE__*/react.createElement("span", null, "Print Payment")), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
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
      onChange: handleChange4,
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
      label: "Transaction",
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
      label: "Payment",
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
      label: "Statement",
      value: "5",
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
      label: "POS History",
      value: "6"
    }))), /*#__PURE__*/react.createElement(TabPanel/* default */.A, {
      value: "1",
      sx: {
        height: 'calc(100vh - 230px)',
        overflow: 'hidden',
        overflowY: 'auto'
      }
    }, /*#__PURE__*/react.createElement(Card/* default */.A, null, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement("table", null, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 2,
      style: {
        textAlign: 'center'
      }
    }, "Customer Contact")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, "Customer"), /*#__PURE__*/react.createElement("td", null, i.customerFullName)), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, "Company Name"), /*#__PURE__*/react.createElement("td", null, i.companyName)), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, "Email"), /*#__PURE__*/react.createElement("td", null, i.customerEmail)), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, "Phone"), /*#__PURE__*/react.createElement("td", null, i.customerCompanyPhone)), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, "Phone2"), /*#__PURE__*/react.createElement("td", null, i.customerPhone)), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, "Billing Address"), /*#__PURE__*/react.createElement("td", null, i.billingAddress.toUpperCase(), ", ", /*#__PURE__*/react.createElement("span", null, i.billingCity.toUpperCase()))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, "Shipping Address"), /*#__PURE__*/react.createElement("td", null, i.shippingAddress.toUpperCase(), ", ", /*#__PURE__*/react.createElement("span", null, i.shippingCity.toUpperCase())))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 2,
      style: {
        textAlign: 'center'
      }
    }, "Currency & Terms")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, "Currency"), /*#__PURE__*/react.createElement("td", null, i.currency)), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, "Terms"), /*#__PURE__*/react.createElement("td", null, i.paymentTerms)))), /*#__PURE__*/react.createElement("table", {
      style: {
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'center'
      }
    }, "Description")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("pre", {
      style: {
        fontFamily: 'system-ui',
        color: 'black',
        fontSize: '15px'
      }
    }, i.customerDescription.toUpperCase()))))))))), /*#__PURE__*/react.createElement(TabPanel/* default */.A, {
      value: "2",
      sx: {
        height: 'calc(100vh - 230px)',
        overflow: 'hidden',
        overflowY: 'auto'
      }
    }, /*#__PURE__*/react.createElement(Accordion/* default */.A, {
      expanded: expanded === 'panel1',
      onChange: handleChange('panel1'),
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/react.createElement(AccordionSummary/* default */.A, {
      expandIcon: /*#__PURE__*/react.createElement(ExpandMore/* default */.A, null)
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Quotation")), /*#__PURE__*/react.createElement(AccordionDetails/* default */.A, null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(TableContainer/* default */.A, null, /*#__PURE__*/react.createElement(Table/* default */.A, null, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, /*#__PURE__*/react.createElement(Checkbox/* default */.A, null)), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Date"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Quotation#"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Customer"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Status"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Quotation Amount"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "left"
    }, "Action"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, estimate === null || estimate === void 0 ? void 0 : estimate.map(row => /*#__PURE__*/react.createElement(TableRow/* default */.A, {
      key: row._id
    }, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, /*#__PURE__*/react.createElement(Checkbox/* default */.A, null)), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, dayjs_min_default()(row.estimateDate).format('DD/MM/YYYY')), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Q-", String(row.estimateNumber).padStart(6, '0')), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, row.customerName.customerName.toUpperCase()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      color: row.status === "Draft" ? "gray" : row.status === "Sent" ? "blue" : row.status === "Decline" ? "red" : row.status === "Approved" ? "#339ba5" : row.status === "Invoiced" ? "#6a1b9a" : "black"
    }, row.status)), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, " ", /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), " ", row.subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/EstimateViewAdminAll/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react.createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react.createElement(IconButton/* default */.A, null, /*#__PURE__*/react.createElement(Visibility/* default */.A, {
      style: {
        color: '#202a5a'
      }
    })))), /*#__PURE__*/react.createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      disabled: row.status !== 'Draft'
    }, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/EstimateInvoiceFormUpdate/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react.createElement(Edit/* default */.A, {
      style: {
        color: 'gray'
      }
    })))))))))))))), /*#__PURE__*/react.createElement(Accordion/* default */.A, {
      expanded: expanded === 'panel2',
      onChange: handleChange('panel2'),
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/react.createElement(AccordionSummary/* default */.A, {
      expandIcon: /*#__PURE__*/react.createElement(ExpandMore/* default */.A, null)
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Purchase Request")), /*#__PURE__*/react.createElement(AccordionDetails/* default */.A, null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(TableContainer/* default */.A, null, /*#__PURE__*/react.createElement(Table/* default */.A, null, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, /*#__PURE__*/react.createElement(Checkbox/* default */.A, null)), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Date"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Purchase#"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Customer"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Status"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Purchase Amount"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "left"
    }, "Action"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, purchase === null || purchase === void 0 ? void 0 : purchase.map(row => /*#__PURE__*/react.createElement(TableRow/* default */.A, {
      key: row._id
    }, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, /*#__PURE__*/react.createElement(Checkbox/* default */.A, null)), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, dayjs_min_default()(row.purchaseDate).format('DD/MM/YYYY')), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "PUR-", String(row.purchaseNumber).padStart(6, '0')), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, row.customerName.customerName.toUpperCase()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      color: row.statusInfo !== undefined && row.statusInfo === "Pending" ? "gray" : row.statusInfo !== undefined && row.statusInfo === "On-Going" ? "blue" : row.statusInfo !== undefined && row.statusInfo === "Stopped" ? "red" : row.statusInfo !== undefined && row.statusInfo === "Pending" ? "Orange" : row.statusInfo !== undefined && row.statusInfo === "Completed" ? "green" : "black"
    }, row.statusInfo !== undefined ? row.statusInfo : '')), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, " ", /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), " ", row.purchaseAmount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/PurchasesViewAdminAll/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react.createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react.createElement(IconButton/* default */.A, null, /*#__PURE__*/react.createElement(Visibility/* default */.A, {
      style: {
        color: '#202a5a'
      }
    })))), /*#__PURE__*/react.createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      disabled: row.status !== 'On-Going'
    }, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/PurchaseFormUpdate/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react.createElement(Edit/* default */.A, {
      style: {
        color: 'gray'
      }
    })))))))))))))), /*#__PURE__*/react.createElement(Accordion/* default */.A, {
      expanded: expanded === 'panel3',
      onChange: handleChange('panel3'),
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/react.createElement(AccordionSummary/* default */.A, {
      expandIcon: /*#__PURE__*/react.createElement(ExpandMore/* default */.A, null)
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Maintenance")), /*#__PURE__*/react.createElement(AccordionDetails/* default */.A, null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(TableContainer/* default */.A, null, /*#__PURE__*/react.createElement(Table/* default */.A, null, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, /*#__PURE__*/react.createElement(Checkbox/* default */.A, null)), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Date"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Maintenance#"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Customer"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Status"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Maintenance Amount"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "left"
    }, "Action"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, maintenance === null || maintenance === void 0 ? void 0 : maintenance.map(row => /*#__PURE__*/react.createElement(TableRow/* default */.A, {
      key: row._id
    }, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, /*#__PURE__*/react.createElement(Checkbox/* default */.A, null)), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, dayjs_min_default()(row.serviceDate).format('DD/MM/YYYY')), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "M-", String(row.serviceNumber).padStart(6, '0')), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, row.customerName.customerName.toUpperCase()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      color: row.status === "Open" ? "blue" : row.status === "Pending" ? "#801313" : row.status === "Reschedule" ? "Orange" : row.status === "Cancel" ? "red" : row.status === "Close" ? "green" : "black"
    }, row.status)), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, " ", /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), " ", row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/MaintenanceViewInformation/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react.createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react.createElement(IconButton/* default */.A, null, /*#__PURE__*/react.createElement(Visibility/* default */.A, {
      style: {
        color: '#202a5a'
      }
    })))), /*#__PURE__*/react.createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      disabled: row.status !== 'On-Going'
    }, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/MaintenanceUpdateView/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react.createElement(Edit/* default */.A, {
      style: {
        color: 'gray'
      }
    })))))))))))))), /*#__PURE__*/react.createElement(Accordion/* default */.A, {
      expanded: expanded === 'panel4',
      onChange: handleChange('panel4'),
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/react.createElement(AccordionSummary/* default */.A, {
      expandIcon: /*#__PURE__*/react.createElement(ExpandMore/* default */.A, null)
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Invoice")), /*#__PURE__*/react.createElement(AccordionDetails/* default */.A, null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(TableContainer/* default */.A, null, /*#__PURE__*/react.createElement(Table/* default */.A, null, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, /*#__PURE__*/react.createElement(Checkbox/* default */.A, null)), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Date"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Invoice #"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Customer"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Status"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "Invoice Amount"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "left"
    }, "Action"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, invoice === null || invoice === void 0 ? void 0 : invoice.map(row => /*#__PURE__*/react.createElement(TableRow/* default */.A, {
      key: row._id
    }, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, /*#__PURE__*/react.createElement(Checkbox/* default */.A, null)), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, dayjs_min_default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, "INV-", String(row.invoiceNumber).padStart(6, '0')), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, row.customerName.customerName.toUpperCase()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, " ", /*#__PURE__*/react.createElement(Typography/* default */.A, {
      color: row.status === "Draft" ? "gray" : row.status === "Sent" ? "blue" : row.status === "Decline" ? "red" : row.status === "Pending" ? "#801313" : row.status === "Paid" ? "#4caf50" : row.status === "Partially-Paid" ? "#fb8c00" : "black"
    }, row.status)), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, " ", /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), " ", row.subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/InvoiceViewAdminAll/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react.createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react.createElement(IconButton/* default */.A, null, /*#__PURE__*/react.createElement(Visibility/* default */.A, {
      style: {
        color: '#202a5a'
      }
    })))), /*#__PURE__*/react.createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      disabled: row.status !== 'Draft'
    }, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/InvoiceFormUpdate/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react.createElement(Edit/* default */.A, {
      style: {
        color: 'gray'
      }
    }))))))))))))))), /*#__PURE__*/react.createElement(TabPanel/* default */.A, {
      value: "3",
      sx: {
        height: 'calc(100vh - 230px)',
        overflow: 'hidden',
        overflowY: 'auto'
      }
    }, /*#__PURE__*/react.createElement(Box/* default */.A, {
      hidden: true
    }, /*#__PURE__*/react.createElement("table", {
      ref: componentRef1,
      className: "invoicedetails"
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
    }), /*#__PURE__*/react.createElement("div", {
      className: "content",
      style: {
        marginBottom: '20px',
        position: 'relative'
      }
    }, /*#__PURE__*/react.createElement("table", {
      className: "secondTable",
      style: {
        width: '100%',
        fontSize: '70%',
        marginBottom: '5px',
        border: '1px solid #DDD',
        maxHeight: '400px',
        overflow: 'auto',
        pageBreakInside: 'auto'
      }
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      colSpan: 3,
      style: {
        border: 'none',
        backgroundColor: 'white',
        verticalAlign: 'top',
        textAlign: 'left',
        paddingTop: '10px'
      }
    }, /*#__PURE__*/react.createElement("address", {
      style: {
        position: 'relative',
        lineHeight: 1.35,
        width: '40%'
      }
    }, /*#__PURE__*/react.createElement("p", {
      style: {
        margin: 0,
        padding: 0
      }
    }, /*#__PURE__*/react.createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '11px'
      }
    }, "TO"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '15px'
      }
    }, i.Customer.toUpperCase()), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
      style: {
        fontSize: '11px',
        fontStyle: 'italic',
        fontWeight: 'normal'
      }
    }, i.billingAddress.toUpperCase(), ", ", i.billingCity.toUpperCase())))), /*#__PURE__*/react.createElement("th", {
      colSpan: 3,
      style: {
        border: 'none',
        backgroundColor: 'white',
        padding: 0,
        verticalAlign: 'top',
        paddingTop: '10px'
      }
    }, /*#__PURE__*/react.createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '11px',
        width: '100%',
        right: '0',
        marginBottom: '10px',
        pageBreakInside: 'auto',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      colSpan: 2,
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'left'
      }
    }, "Payment Summary"))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 2,
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react.createElement("span", null, "All Transaction"))))))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
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
    }, "Mode"), /*#__PURE__*/react.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, " Amount Received"), /*#__PURE__*/react.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, " Amount Paid"), /*#__PURE__*/react.createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Credit"))), /*#__PURE__*/react.createElement("tbody", null, payment.map(row => {
      var _row$modes, _row$TotalAmount;
      return /*#__PURE__*/react.createElement("tr", {
        key: row._id
      }, /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'left'
        }
      }, "PAY-", String(row.paymentNumber).padStart(6, '0')), /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'left',
          borderLeft: '1px solid #DDD'
        }
      }, dayjs_min_default()(row.paymentDate).format('DD/MM/YYYY')), /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'left',
          borderLeft: '1px solid #DDD'
        }
      }, row.modes === 'Credit-Account' ? /*#__PURE__*/react.createElement("span", {
        style: {
          backgroundColor: '#e0e7ff',
          color: '#3730a3',
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '10px',
          fontWeight: 'bold',
          display: 'inline-block',
          whiteSpace: 'nowrap'
        }
      }, "CREDIT APPLIED") : row.modes === 'Credit' ? /*#__PURE__*/react.createElement("span", {
        style: {
          backgroundColor: '#dcfce7',
          color: '#166534',
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '10px',
          fontWeight: 'bold',
          display: 'inline-block',
          whiteSpace: 'nowrap'
        }
      }, "CREDIT DEPOSIT") : row.modes === 'Cash' ? /*#__PURE__*/react.createElement("span", {
        style: {
          backgroundColor: '#fef3c7',
          color: '#92400e',
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '10px',
          fontWeight: 'bold',
          display: 'inline-block',
          whiteSpace: 'nowrap'
        }
      }, "CASH") : row.modes === 'Bank Transfer' ? /*#__PURE__*/react.createElement("span", {
        style: {
          backgroundColor: '#e0f2fe',
          color: '#0369a1',
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '10px',
          fontWeight: 'bold',
          display: 'inline-block',
          whiteSpace: 'nowrap'
        }
      }, "BANK TRANSFER") : /*#__PURE__*/react.createElement("span", {
        style: {
          backgroundColor: '#f1f5f9',
          color: '#334155',
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '10px',
          fontWeight: 'bold',
          display: 'inline-block',
          whiteSpace: 'nowrap'
        }
      }, (_row$modes = row.modes) === null || _row$modes === void 0 ? void 0 : _row$modes.toUpperCase())), /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'left',
          borderLeft: '1px solid #DDD'
        }
      }, row.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'left',
          borderLeft: '1px solid #DDD'
        }
      }, (_row$TotalAmount = row.TotalAmount) === null || _row$TotalAmount === void 0 ? void 0 : _row$TotalAmount.map((Item, i) => {
        var _relatedInvoice$invoi;
        var relatedInvoice = invoice === null || invoice === void 0 ? void 0 : invoice.find(row1 => row1._id === Item.id);
        return /*#__PURE__*/react.createElement("p", {
          key: i
        }, /*#__PURE__*/react.createElement("span", null, row.reason === "Project" ? "P-" : "INV-", String(Item.Ref).padStart(6, '0'), " / ", relatedInvoice === null || relatedInvoice === void 0 || (_relatedInvoice$invoi = relatedInvoice.invoiceSubject) === null || _relatedInvoice$invoi === void 0 ? void 0 : _relatedInvoice$invoi.toUpperCase(), ":  $", Item.total));
      })), /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'left',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, row.remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    })), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 4
    }), /*#__PURE__*/react.createElement("td", null, "Total Credit"), /*#__PURE__*/react.createElement("td", null, "$", i.credit !== undefined ? i.credit : 0))))))))), /*#__PURE__*/react.createElement("tfoot", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("div", {
      style: {
        position: 'relative',
        marginTop: '20px'
      }
    }, /*#__PURE__*/react.createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react.createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(PrintFooter/* default */.A, {
      branchId: typeof row !== "undefined" ? (_row2 = row) === null || _row2 === void 0 ? void 0 : _row2.branchId : typeof data !== "undefined" ? (_data = data) === null || _data === void 0 ? void 0 : _data.branchId : ""
    }))))))), /*#__PURE__*/react.createElement(Card/* default */.A, null, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Card/* default */.A, {
      sx: {
        position: 'relative',
        float: 'right',
        width: '170px',
        height: '55px',
        backgroundColor: '#202a5a',
        color: 'white',
        marginBottom: '10px',
        textAlign: 'center',
        width: '300px'
      }
    }, /*#__PURE__*/react.createElement(CardContent/* default */.A, {
      sx: {
        display: 'flex',
        gap: '40px'
      }
    }, /*#__PURE__*/react.createElement(Cached, {
      sx: {
        cursor: 'pointer'
      },
      onClick: handleUpdateCredit
    }), /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Credit: $", credit2 !== undefined ? credit2 : i.credit !== undefined ? i.credit : 0))), /*#__PURE__*/react.createElement("table", {
      className: "secondTable",
      style: {
        width: '100%',
        fontSize: '80%',
        marginBottom: '5px',
        border: '1px solid #DDD'
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
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Date"), /*#__PURE__*/react.createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Mode"), /*#__PURE__*/react.createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, " Amount Received"), /*#__PURE__*/react.createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, " Amount Paid"), /*#__PURE__*/react.createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Credit Balance"), /*#__PURE__*/react.createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, " Action"))), /*#__PURE__*/react.createElement("tbody", null, payment.map(row => {
      var _row$modes2, _row$TotalAmount2;
      return /*#__PURE__*/react.createElement("tr", {
        key: row._id
      }, /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'left',
          width: '50px'
        }
      }, "PAY-", String(row.paymentNumber).padStart(6, '0')), /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'left',
          width: '30px',
          borderLeft: '1px solid #DDD'
        }
      }, dayjs_min_default()(row.paymentDate).format('DD/MM/YYYY')), /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'left',
          width: '90px',
          borderLeft: '1px solid #DDD'
        }
      }, row.modes === 'Credit-Account' ? /*#__PURE__*/react.createElement("span", {
        style: {
          backgroundColor: '#e0e7ff',
          color: '#3730a3',
          padding: '3px 8px',
          borderRadius: '4px',
          fontSize: '11px',
          fontWeight: 'bold',
          display: 'inline-block',
          whiteSpace: 'nowrap'
        }
      }, "CREDIT APPLIED") : row.modes === 'Credit' ? /*#__PURE__*/react.createElement("span", {
        style: {
          backgroundColor: '#dcfce7',
          color: '#166534',
          padding: '3px 8px',
          borderRadius: '4px',
          fontSize: '11px',
          fontWeight: 'bold',
          display: 'inline-block',
          whiteSpace: 'nowrap'
        }
      }, "CREDIT DEPOSIT") : row.modes === 'Cash' ? /*#__PURE__*/react.createElement("span", {
        style: {
          backgroundColor: '#fef3c7',
          color: '#92400e',
          padding: '3px 8px',
          borderRadius: '4px',
          fontSize: '11px',
          fontWeight: 'bold',
          display: 'inline-block',
          whiteSpace: 'nowrap'
        }
      }, "CASH") : row.modes === 'Bank Transfer' ? /*#__PURE__*/react.createElement("span", {
        style: {
          backgroundColor: '#e0f2fe',
          color: '#0369a1',
          padding: '3px 8px',
          borderRadius: '4px',
          fontSize: '11px',
          fontWeight: 'bold',
          display: 'inline-block',
          whiteSpace: 'nowrap'
        }
      }, "BANK TRANSFER") : /*#__PURE__*/react.createElement("span", {
        style: {
          backgroundColor: '#f1f5f9',
          color: '#334155',
          padding: '3px 8px',
          borderRadius: '4px',
          fontSize: '11px',
          fontWeight: 'bold',
          display: 'inline-block',
          whiteSpace: 'nowrap'
        }
      }, (_row$modes2 = row.modes) === null || _row$modes2 === void 0 ? void 0 : _row$modes2.toUpperCase())), /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'left',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, row.modes === 'Credit-Account' ? /*#__PURE__*/react.createElement("span", {
        style: {
          color: '#9ca3af',
          fontStyle: 'italic'
        }
      }, "- (From Credit)") : "$".concat((row.amount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'left',
          width: '120px',
          borderLeft: '1px solid #DDD'
        }
      }, row.modes === 'Credit' && (!row.TotalAmount || row.TotalAmount.length === 0) ? /*#__PURE__*/react.createElement("span", {
        style: {
          color: '#9ca3af',
          fontStyle: 'italic'
        }
      }, "- (Unallocated)") : (_row$TotalAmount2 = row.TotalAmount) === null || _row$TotalAmount2 === void 0 ? void 0 : _row$TotalAmount2.map((Item, i) => {
        var _relatedInvoice$invoi2;
        var relatedInvoice = invoice === null || invoice === void 0 ? void 0 : invoice.find(row1 => row1._id === Item.id);
        return /*#__PURE__*/react.createElement("p", {
          key: i,
          style: {
            margin: '2px 0'
          }
        }, /*#__PURE__*/react.createElement("span", null, Item.prefix || (relatedInvoice !== null && relatedInvoice !== void 0 && relatedInvoice.ReferenceName2 || (relatedInvoice === null || relatedInvoice === void 0 ? void 0 : relatedInvoice.invoicePurchase) === 'Purchased' ? "P-" : row.reason === "Project" ? "P-" : "INV-"), String(Item.Ref).padStart(6, '0'), " / ", relatedInvoice === null || relatedInvoice === void 0 || (_relatedInvoice$invoi2 = relatedInvoice.invoiceSubject) === null || _relatedInvoice$invoi2 === void 0 ? void 0 : _relatedInvoice$invoi2.toUpperCase(), ":  $", Item.total));
      })), /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'left',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, row.modes === 'Credit-Account' ? '$0.00' : "$".concat((row.remaining !== undefined && row.remaining !== null ? row.remaining : row.modes === 'Credit' ? row.amount : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react.createElement("td", {
        style: {
          textAlign: 'left',
          width: '40px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react.createElement(ViewTooltip, {
        title: "View"
      }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
        disabled: user.data.role === 'User'
      }, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
        to: "/PaymentInformationView/".concat(row._id),
        className: "LinkName"
      }, /*#__PURE__*/react.createElement(Visibility/* default */.A, {
        style: {
          color: '#202a5a'
        }
      })))))));
    })))))), /*#__PURE__*/react.createElement(TabPanel/* default */.A, {
      value: "5",
      sx: {
        height: 'calc(100vh - 230px)',
        overflow: 'hidden',
        overflowY: 'auto'
      }
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        marginBottom: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0px'
      }
    }, /*#__PURE__*/react.createElement(FormControl/* default */.A, null, /*#__PURE__*/react.createElement(InputLabel/* default */.A, {
      id: "select"
    }, "select"), /*#__PURE__*/react.createElement(Select/* default */.A, {
      id: "selectOptions",
      value: selectOptions,
      onChange: e => setSelectOptions(e.target.value),
      name: "selectOptions",
      label: "select"
    }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "Year"
    }, "Year"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "Custom"
    }, "Custom"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "All Outstanding"
    }, "All Outstanding"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
      value: "All"
    }, "All"))), selectOptions === 'Year' && /*#__PURE__*/react.createElement(LocalizationProvider/* LocalizationProvider */.$, {
      dateAdapter: AdapterDayjs/* AdapterDayjs */.R
    }, /*#__PURE__*/react.createElement(DemoContainer/* DemoContainer */.j, {
      components: ['DatePicker', 'DatePicker']
    }, /*#__PURE__*/react.createElement(DatePicker/* DatePicker */.l, {
      required: true,
      name: "startDate",
      value: dayjs_min_default()(startDate),
      onChange: date => handleChangeDate(date),
      format: "YYYY",
      label: '"year"',
      views: ['year']
    }))), selectOptions === 'Custom' && /*#__PURE__*/react.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }
    }, /*#__PURE__*/react.createElement(LocalizationProvider/* LocalizationProvider */.$, {
      dateAdapter: AdapterDayjs/* AdapterDayjs */.R
    }, /*#__PURE__*/react.createElement(DemoContainer/* DemoContainer */.j, {
      components: ['DatePicker', 'DatePicker']
    }, /*#__PURE__*/react.createElement(DatePicker/* DatePicker */.l, {
      required: true,
      name: "fromDate",
      label: "From Date",
      value: dayjs_min_default()(fromDate),
      onChange: date => handleChangeDateFrom(date),
      format: "DD/MM/YYYY"
    }))), /*#__PURE__*/react.createElement(LocalizationProvider/* LocalizationProvider */.$, {
      dateAdapter: AdapterDayjs/* AdapterDayjs */.R
    }, /*#__PURE__*/react.createElement(DemoContainer/* DemoContainer */.j, {
      components: ['DatePicker', 'DatePicker']
    }, /*#__PURE__*/react.createElement(DatePicker/* DatePicker */.l, {
      required: true,
      name: "endDate",
      label: "To Date",
      value: dayjs_min_default()(endDate),
      onChange: date => handleChangeDateEnd(date),
      format: "DD/MM/YYYY"
    }))))), /*#__PURE__*/react.createElement(Box/* default */.A, {
      hidden: true
    }, /*#__PURE__*/react.createElement("table", {
      ref: componentRef,
      className: "invoicedetails"
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "invoiceTest"
    }, /*#__PURE__*/react.createElement(PrintHeader/* default */.A, {
      branchId: typeof row !== "undefined" ? (_row3 = row) === null || _row3 === void 0 ? void 0 : _row3.branchId : ""
    }))))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", {
      className: "invoicehr"
    }), /*#__PURE__*/react.createElement("div", {
      className: "content",
      style: {
        marginBottom: '20px',
        position: 'relative'
      }
    }, /*#__PURE__*/react.createElement("table", {
      className: "secondTable",
      style: {
        width: '100%',
        fontSize: '70%',
        marginBottom: '5px',
        border: '1px solid #DDD',
        maxHeight: '400px',
        overflow: 'auto',
        pageBreakInside: 'auto'
      }
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      colSpan: 3,
      style: {
        border: 'none',
        backgroundColor: 'white',
        verticalAlign: 'top',
        textAlign: 'left',
        paddingTop: '10px'
      }
    }, /*#__PURE__*/react.createElement("address", {
      style: {
        position: 'relative',
        lineHeight: 1.35,
        width: '40%'
      }
    }, /*#__PURE__*/react.createElement("p", {
      style: {
        margin: 0,
        padding: 0
      }
    }, /*#__PURE__*/react.createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '11px'
      }
    }, "TO"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '15px'
      }
    }, i.Customer.toUpperCase()), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
      style: {
        fontSize: '11px',
        fontStyle: 'italic',
        fontWeight: 'normal'
      }
    }, i.billingAddress.toUpperCase(), ", ", i.billingCity.toUpperCase())))), /*#__PURE__*/react.createElement("th", {
      colSpan: 3,
      style: {
        border: 'none',
        backgroundColor: 'white',
        padding: 0,
        verticalAlign: 'top',
        paddingTop: '10px'
      }
    }, /*#__PURE__*/react.createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '11px',
        width: '100%',
        right: '0',
        marginBottom: '10px',
        pageBreakInside: 'auto',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      colSpan: 2,
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'left'
      }
    }, "Statement of Accounts"))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 2,
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'right'
      }
    }, selectOptions === 'Year' && /*#__PURE__*/react.createElement("span", null, dayjs_min_default()(new Date(transactionYears, 0, 1)).format('DD/MM/YYYY'), " To ", dayjs_min_default()(new Date(transactionYears, 11, 31)).format('DD/MM/YYYY')), selectOptions === 'Custom' && /*#__PURE__*/react.createElement("span", null, dayjs_min_default()(fromDate).format('DD/MM/YYYY'), " To ", dayjs_min_default()(endDate).format('DD/MM/YYYY')), selectOptions === 'All' && /*#__PURE__*/react.createElement("span", null, "All Transaction"), selectOptions === 'All Outstanding' && /*#__PURE__*/react.createElement("span", null, "All Outstanding Invoice")))), /*#__PURE__*/react.createElement("tbody", {
      style: {
        fontWeight: 'normal'
      }
    }, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 2,
      style: {
        backgroundColor: '#e8f7fe',
        border: 'none',
        textAlign: 'left'
      }
    }, "Account Summary")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Opening Balance")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react.createElement("span", null, "$".concat(openingBalanceTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Invoiced Amount")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react.createElement("span", null, "$".concat(InvoiceTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Amount Paid")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react.createElement("span", null, "$".concat(PaymentTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Balance Due")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react.createElement("span", null, "$".concat(totalBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Date"), /*#__PURE__*/react.createElement("th", {
      style: {
        width: '150px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Transaction"), /*#__PURE__*/react.createElement("th", {
      style: {
        width: '400px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Details"), /*#__PURE__*/react.createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Amount"), /*#__PURE__*/react.createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Payments"), /*#__PURE__*/react.createElement("th", {
      style: {
        width: '150px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Balance"))), selectOptions === 'Year' && /*#__PURE__*/react.createElement("tbody", null, yearRow, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react.createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react.createElement("td", null, "$".concat(amount4.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), selectOptions === 'All' && /*#__PURE__*/react.createElement("tbody", null, allRow, parseFloat(credit2) > 0 && /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react.createElement("td", {
      colSpan: 2
    }, "Available Credit"), /*#__PURE__*/react.createElement("td", null, "-$".concat(parseFloat(credit2).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react.createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react.createElement("td", null, "$".concat((amount3 - parseFloat(credit2)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), selectOptions === 'All Outstanding' && /*#__PURE__*/react.createElement("tbody", null, allStandingRow, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react.createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react.createElement("td", null, "$".concat(amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), selectOptions === 'Custom' && /*#__PURE__*/react.createElement("tbody", null, customRow, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react.createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react.createElement("td", null, "$".concat(amount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))))))), /*#__PURE__*/react.createElement("tfoot", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("div", {
      style: {
        position: 'relative',
        marginTop: '20px'
      }
    }, /*#__PURE__*/react.createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react.createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(PrintFooter/* default */.A, {
      branchId: typeof row !== "undefined" ? (_row4 = row) === null || _row4 === void 0 ? void 0 : _row4.branchId : typeof data !== "undefined" ? (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.branchId : ""
    }))))))), /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        padding: '20px'
      }
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        padding: '20px'
      }
    }, /*#__PURE__*/react.createElement(PrintHeader/* default */.A, {
      branchId: typeof row !== "undefined" ? (_row5 = row) === null || _row5 === void 0 ? void 0 : _row5.branchId : typeof data !== "undefined" ? (_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.branchId : ""
    }), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("p", {
      className: "invoicehr"
    }), /*#__PURE__*/react.createElement("article", null, /*#__PURE__*/react.createElement("table", {
      className: "secondTable",
      style: {
        width: '100%',
        fontSize: '70%',
        marginBottom: '5px',
        border: '1px solid #DDD',
        maxHeight: '400px',
        overflow: 'auto',
        pageBreakInside: 'auto'
      }
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      colSpan: 3,
      style: {
        border: 'none',
        backgroundColor: 'white',
        verticalAlign: 'top',
        textAlign: 'left',
        paddingTop: '10px'
      }
    }, /*#__PURE__*/react.createElement("address", {
      style: {
        position: 'relative',
        lineHeight: 1.35,
        width: '40%'
      }
    }, /*#__PURE__*/react.createElement("p", {
      style: {
        margin: 0,
        padding: 0
      }
    }, /*#__PURE__*/react.createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '11px'
      }
    }, "TO"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '15px'
      }
    }, i.Customer.toUpperCase()), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
      style: {
        fontSize: '11px',
        fontStyle: 'italic',
        fontWeight: 'normal'
      }
    }, i.billingAddress.toUpperCase(), ", ", i.billingCity.toUpperCase())))), /*#__PURE__*/react.createElement("th", {
      colSpan: 3,
      style: {
        border: 'none',
        backgroundColor: 'white',
        padding: 0,
        verticalAlign: 'top',
        paddingTop: '10px'
      }
    }, /*#__PURE__*/react.createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '11px',
        width: '100%',
        right: '0',
        marginBottom: '10px',
        pageBreakInside: 'auto',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      colSpan: 2,
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'left'
      }
    }, "Statement of Accounts"))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 2,
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'right'
      }
    }, selectOptions === 'Year' && /*#__PURE__*/react.createElement("span", null, dayjs_min_default()(new Date(transactionYears, 0, 1)).format('DD/MM/YYYY'), " To ", dayjs_min_default()(new Date(transactionYears, 11, 31)).format('DD/MM/YYYY')), selectOptions === 'Custom' && /*#__PURE__*/react.createElement("span", null, dayjs_min_default()(fromDate).format('DD/MM/YYYY'), " To ", dayjs_min_default()(endDate).format('DD/MM/YYYY')), selectOptions === 'All' && /*#__PURE__*/react.createElement("span", null, "All Transaction"), selectOptions === 'All Outstanding' && /*#__PURE__*/react.createElement("span", null, "All Outstanding Invoice")))), /*#__PURE__*/react.createElement("tbody", {
      style: {
        fontWeight: 'normal'
      }
    }, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 2,
      style: {
        backgroundColor: '#e8f7fe',
        border: 'none',
        textAlign: 'left'
      }
    }, "Account Summary")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Opening Balance")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react.createElement("span", null, "$".concat(openingBalanceTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Invoiced Amount")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react.createElement("span", null, "$".concat(InvoiceTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Amount Paid")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react.createElement("span", null, "$".concat(PaymentTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Balance Due")), /*#__PURE__*/react.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react.createElement("span", null, "$".concat(totalBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Date"), /*#__PURE__*/react.createElement("th", {
      style: {
        width: '150px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Transaction"), /*#__PURE__*/react.createElement("th", {
      style: {
        width: '400px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Details"), /*#__PURE__*/react.createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Amount"), /*#__PURE__*/react.createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Payments"), /*#__PURE__*/react.createElement("th", {
      style: {
        width: '150px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Balance"))), selectOptions === 'Year' && /*#__PURE__*/react.createElement("tbody", null, yearRow, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react.createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react.createElement("td", null, "$".concat(amount4.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), selectOptions === 'All' && /*#__PURE__*/react.createElement("tbody", null, allRow, parseFloat(credit2) > 0 && /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react.createElement("td", {
      colSpan: 2
    }, "Available Credit"), /*#__PURE__*/react.createElement("td", null, "-$".concat(parseFloat(credit2).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react.createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react.createElement("td", null, "$".concat((amount3 - parseFloat(credit2)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), selectOptions === 'All Outstanding' && /*#__PURE__*/react.createElement("tbody", null, allStandingRow, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react.createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react.createElement("td", null, "$".concat(amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), selectOptions === 'Custom' && /*#__PURE__*/react.createElement("tbody", null, customRow, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react.createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react.createElement("td", null, "$".concat(amount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))), /*#__PURE__*/react.createElement("div", {
      className: "footerinvoice"
    }, /*#__PURE__*/react.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Email/* default */.A, null)), /*#__PURE__*/react.createElement("span", null, "Contact@GlobalGate.Sarl")), /*#__PURE__*/react.createElement("p", {
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
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Web/* default */.A, null)), /*#__PURE__*/react.createElement("span", null, "www.GlobalGate.sarl")))))), /*#__PURE__*/react.createElement(TabPanel/* default */.A, {
      value: "6"
    }, (() => {
      var grandTotal = posHistory.reduce((sum, row) => {
        var usdAmount = row.rate > 0 ? row.totalInvoice / row.rate : 0;
        return sum + usdAmount;
      }, 0);
      return /*#__PURE__*/react.createElement("div", {
        style: {
          padding: '10px',
          textAlign: 'right',
          backgroundColor: '#f5f5f5',
          borderRadius: '5px',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "h6",
        style: {
          color: '#202a5a',
          fontWeight: 'bold'
        }
      }, "Grand Total: $", grandTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    })(), /*#__PURE__*/react.createElement(TableContainer/* default */.A, {
      component: Paper/* default */.A,
      style: {
        boxShadow: 'none'
      }
    }, /*#__PURE__*/react.createElement(Table/* default */.A, null, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, "Date"), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, "Invoice #"), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, "Status"), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, "Total (USD)"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, posHistory.length > 0 ? posHistory.map(row => {
      var usdAmount = row.rate > 0 ? row.totalInvoice / row.rate : 0;
      return /*#__PURE__*/react.createElement(TableRow/* default */.A, {
        key: row._id
      }, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, dayjs_min_default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, row.factureNumber), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, /*#__PURE__*/react.createElement("span", {
        style: {
          padding: '5px',
          borderRadius: '5px',
          backgroundColor: row.status === 'Paid' ? 'green' : row.status === 'Partially-Paid' ? 'orange' : 'red',
          color: 'white'
        }
      }, row.status)), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, "$", usdAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    }) : /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      colSpan: 4,
      align: "center"
    }, "No POS History Found")))))))));
  })))), show1 === 2 ? /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
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
      height: '518px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      padding: '10px'
    }
  }, notification.map(row => /*#__PURE__*/react.createElement("p", {
    key: row._id
  }, /*#__PURE__*/react.createElement("span", null, row.person + ' on ' + dayjs_min_default()(row.dateNotification).format('DD/MMMM'), ": ", row.reason))))))) : ""))))), /*#__PURE__*/react.createElement(Modal/* default */.A, {
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
  })), isCredit === 'true' ? /*#__PURE__*/react.createElement("h2", null, " Data Updated successfully") : /*#__PURE__*/react.createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react.createElement("div", {
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
  }, "Try Again")))));
}
/* harmony default export */ const CustomerVIew_CustomerInformationView = (CustomerInformationView);

/***/ }

}]);