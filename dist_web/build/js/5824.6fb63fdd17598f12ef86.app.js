"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[5824],{

/***/ 44379
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
  d: "M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7"
}), 'VisibilityOutlined');

/***/ },

/***/ 15542
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
var _default = exports.A = (0, _createSvgIcon.default)([/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12 5.99 19.53 19H4.47zM12 2 1 21h22z"
}, "0"), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M13 16h-2v2h2zm0-6h-2v5h2z"
}, "1")], 'WarningAmber');

/***/ },

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

/***/ 69279
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Pagination_Pagination)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(15607);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/Pagination/paginationClasses.js


function getPaginationUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiPagination', slot);
}
const paginationClasses = (0,generateUtilityClasses/* default */.A)('MuiPagination', ['root', 'ul', 'outlined', 'text']);
/* harmony default export */ const Pagination_paginationClasses = ((/* unused pure expression or super */ null && (paginationClasses)));
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useControlled/useControlled.js
var useControlled = __webpack_require__(2501);
;// ./node_modules/@mui/material/usePagination/usePagination.js
'use client';



const _excluded = ["boundaryCount", "componentName", "count", "defaultPage", "disabled", "hideNextButton", "hidePrevButton", "onChange", "page", "showFirstButton", "showLastButton", "siblingCount"];

function usePagination(props = {}) {
  // keep default values in sync with @default tags in Pagination.propTypes
  const {
      boundaryCount = 1,
      componentName = 'usePagination',
      count = 1,
      defaultPage = 1,
      disabled = false,
      hideNextButton = false,
      hidePrevButton = false,
      onChange: handleChange,
      page: pageProp,
      showFirstButton = false,
      showLastButton = false,
      siblingCount = 1
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const [page, setPageState] = (0,useControlled/* default */.A)({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: 'page'
  });
  const handleClick = (event, value) => {
    if (!pageProp) {
      setPageState(value);
    }
    if (handleChange) {
      handleChange(event, value);
    }
  };

  // https://dev.to/namirsab/comment/2050
  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({
      length
    }, (_, i) => start + i);
  };
  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  const siblingsStart = Math.max(Math.min(
  // Natural start
  page - siblingCount,
  // Lower boundary when page is high
  count - boundaryCount - siblingCount * 2 - 1),
  // Greater than startPages
  boundaryCount + 2);
  const siblingsEnd = Math.min(Math.max(
  // Natural end
  page + siblingCount,
  // Upper boundary when page is low
  boundaryCount + siblingCount * 2 + 2),
  // Less than endPages
  endPages.length > 0 ? endPages[0] - 2 : count - 1);

  // Basic list of items to render
  // for example itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList = [...(showFirstButton ? ['first'] : []), ...(hidePrevButton ? [] : ['previous']), ...startPages,
  // Start ellipsis
  // eslint-disable-next-line no-nested-ternary
  ...(siblingsStart > boundaryCount + 2 ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []),
  // Sibling pages
  ...range(siblingsStart, siblingsEnd),
  // End ellipsis
  // eslint-disable-next-line no-nested-ternary
  ...(siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis'] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []), ...endPages, ...(hideNextButton ? [] : ['next']), ...(showLastButton ? ['last'] : [])];

  // Map the button type to its page number
  const buttonPage = type => {
    switch (type) {
      case 'first':
        return 1;
      case 'previous':
        return page - 1;
      case 'next':
        return page + 1;
      case 'last':
        return count;
      default:
        return null;
    }
  };

  // Convert the basic item list to PaginationItem props objects
  const items = itemList.map(item => {
    return typeof item === 'number' ? {
      onClick: event => {
        handleClick(event, item);
      },
      type: 'page',
      page: item,
      selected: item === page,
      disabled,
      'aria-current': item === page ? 'true' : undefined
    } : {
      onClick: event => {
        handleClick(event, buttonPage(item));
      },
      type: item,
      page: buttonPage(item),
      selected: false,
      disabled: disabled || item.indexOf('ellipsis') === -1 && (item === 'next' || item === 'last' ? page >= count : page <= 1)
    };
  });
  return (0,esm_extends/* default */.A)({
    items
  }, other);
}
// EXTERNAL MODULE: ./node_modules/@mui/system/colorManipulator.js
var colorManipulator = __webpack_require__(771);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(73788);
;// ./node_modules/@mui/material/PaginationItem/paginationItemClasses.js


function getPaginationItemUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiPaginationItem', slot);
}
const paginationItemClasses = (0,generateUtilityClasses/* default */.A)('MuiPaginationItem', ['root', 'page', 'sizeSmall', 'sizeLarge', 'text', 'textPrimary', 'textSecondary', 'outlined', 'outlinedPrimary', 'outlinedSecondary', 'rounded', 'ellipsis', 'firstLast', 'previousNext', 'focusVisible', 'disabled', 'selected', 'icon', 'colorPrimary', 'colorSecondary']);
/* harmony default export */ const PaginationItem_paginationItemClasses = (paginationItemClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(18850);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(28466);
// EXTERNAL MODULE: ./node_modules/@mui/material/internal/svg-icons/FirstPage.js
var FirstPage = __webpack_require__(28775);
// EXTERNAL MODULE: ./node_modules/@mui/material/internal/svg-icons/LastPage.js
var LastPage = __webpack_require__(35067);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(20561);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/internal/svg-icons/NavigateBefore.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const NavigateBefore = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'NavigateBefore'));
;// ./node_modules/@mui/material/internal/svg-icons/NavigateNext.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const NavigateNext = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'NavigateNext'));
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
;// ./node_modules/@mui/material/PaginationItem/PaginationItem.js
'use client';



const PaginationItem_excluded = ["className", "color", "component", "components", "disabled", "page", "selected", "shape", "size", "slots", "type", "variant"];

















const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, styles[ownerState.variant], styles[`size${(0,capitalize/* default */.A)(ownerState.size)}`], ownerState.variant === 'text' && styles[`text${(0,capitalize/* default */.A)(ownerState.color)}`], ownerState.variant === 'outlined' && styles[`outlined${(0,capitalize/* default */.A)(ownerState.color)}`], ownerState.shape === 'rounded' && styles.rounded, ownerState.type === 'page' && styles.page, (ownerState.type === 'start-ellipsis' || ownerState.type === 'end-ellipsis') && styles.ellipsis, (ownerState.type === 'previous' || ownerState.type === 'next') && styles.previousNext, (ownerState.type === 'first' || ownerState.type === 'last') && styles.firstLast];
};
const useUtilityClasses = ownerState => {
  const {
    classes,
    color,
    disabled,
    selected,
    size,
    shape,
    type,
    variant
  } = ownerState;
  const slots = {
    root: ['root', `size${(0,capitalize/* default */.A)(size)}`, variant, shape, color !== 'standard' && `color${(0,capitalize/* default */.A)(color)}`, color !== 'standard' && `${variant}${(0,capitalize/* default */.A)(color)}`, disabled && 'disabled', selected && 'selected', {
      page: 'page',
      first: 'firstLast',
      last: 'firstLast',
      'start-ellipsis': 'ellipsis',
      'end-ellipsis': 'ellipsis',
      previous: 'previousNext',
      next: 'previousNext'
    }[type]],
    icon: ['icon']
  };
  return (0,composeClasses/* default */.A)(slots, getPaginationItemUtilityClass, classes);
};
const PaginationItemEllipsis = (0,styled/* default */.Ay)('div', {
  name: 'MuiPaginationItem',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({}, theme.typography.body2, {
  borderRadius: 32 / 2,
  textAlign: 'center',
  boxSizing: 'border-box',
  minWidth: 32,
  padding: '0 6px',
  margin: '0 3px',
  color: (theme.vars || theme).palette.text.primary,
  height: 'auto',
  [`&.${PaginationItem_paginationItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.size === 'small' && {
  minWidth: 26,
  borderRadius: 26 / 2,
  margin: '0 1px',
  padding: '0 4px'
}, ownerState.size === 'large' && {
  minWidth: 40,
  borderRadius: 40 / 2,
  padding: '0 10px',
  fontSize: theme.typography.pxToRem(15)
}));
const PaginationItemPage = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
  name: 'MuiPaginationItem',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({}, theme.typography.body2, {
  borderRadius: 32 / 2,
  textAlign: 'center',
  boxSizing: 'border-box',
  minWidth: 32,
  height: 32,
  padding: '0 6px',
  margin: '0 3px',
  color: (theme.vars || theme).palette.text.primary,
  [`&.${PaginationItem_paginationItemClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${PaginationItem_paginationItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  transition: theme.transitions.create(['color', 'background-color'], {
    duration: theme.transitions.duration.short
  }),
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${PaginationItem_paginationItemClasses.selected}`]: {
    backgroundColor: (theme.vars || theme).palette.action.selected,
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: (theme.vars || theme).palette.action.selected
      }
    },
    [`&.${PaginationItem_paginationItemClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    },
    [`&.${PaginationItem_paginationItemClasses.disabled}`]: {
      opacity: 1,
      color: (theme.vars || theme).palette.action.disabled,
      backgroundColor: (theme.vars || theme).palette.action.selected
    }
  }
}, ownerState.size === 'small' && {
  minWidth: 26,
  height: 26,
  borderRadius: 26 / 2,
  margin: '0 1px',
  padding: '0 4px'
}, ownerState.size === 'large' && {
  minWidth: 40,
  height: 40,
  borderRadius: 40 / 2,
  padding: '0 10px',
  fontSize: theme.typography.pxToRem(15)
}, ownerState.shape === 'rounded' && {
  borderRadius: (theme.vars || theme).shape.borderRadius
}), ({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({}, ownerState.variant === 'text' && {
  [`&.${PaginationItem_paginationItemClasses.selected}`]: (0,esm_extends/* default */.A)({}, ownerState.color !== 'standard' && {
    color: (theme.vars || theme).palette[ownerState.color].contrastText,
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
    '&:hover': {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
      }
    },
    [`&.${PaginationItem_paginationItemClasses.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
    }
  }, {
    [`&.${PaginationItem_paginationItemClasses.disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled
    }
  })
}, ownerState.variant === 'outlined' && {
  border: theme.vars ? `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`,
  [`&.${PaginationItem_paginationItemClasses.selected}`]: (0,esm_extends/* default */.A)({}, ownerState.color !== 'standard' && {
    color: (theme.vars || theme).palette[ownerState.color].main,
    border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, 0.5)}`,
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.activatedOpacity})` : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, theme.palette.action.activatedOpacity),
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    [`&.${PaginationItem_paginationItemClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity)
    }
  }, {
    [`&.${PaginationItem_paginationItemClasses.disabled}`]: {
      borderColor: (theme.vars || theme).palette.action.disabledBackground,
      color: (theme.vars || theme).palette.action.disabled
    }
  })
}));
const PaginationItemPageIcon = (0,styled/* default */.Ay)('div', {
  name: 'MuiPaginationItem',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  fontSize: theme.typography.pxToRem(20),
  margin: '0 -8px'
}, ownerState.size === 'small' && {
  fontSize: theme.typography.pxToRem(18)
}, ownerState.size === 'large' && {
  fontSize: theme.typography.pxToRem(22)
}));
const PaginationItem = /*#__PURE__*/react.forwardRef(function PaginationItem(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiPaginationItem'
  });
  const {
      className,
      color = 'standard',
      component,
      components = {},
      disabled = false,
      page,
      selected = false,
      shape = 'circular',
      size = 'medium',
      slots = {},
      type = 'page',
      variant = 'text'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PaginationItem_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color,
    disabled,
    selected,
    shape,
    size,
    type,
    variant
  });
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const classes = useUtilityClasses(ownerState);
  const normalizedIcons = isRtl ? {
    previous: slots.next || components.next || NavigateNext,
    next: slots.previous || components.previous || NavigateBefore,
    last: slots.first || components.first || FirstPage/* default */.A,
    first: slots.last || components.last || LastPage/* default */.A
  } : {
    previous: slots.previous || components.previous || NavigateBefore,
    next: slots.next || components.next || NavigateNext,
    first: slots.first || components.first || FirstPage/* default */.A,
    last: slots.last || components.last || LastPage/* default */.A
  };
  const Icon = normalizedIcons[type];
  return type === 'start-ellipsis' || type === 'end-ellipsis' ? /*#__PURE__*/(0,jsx_runtime.jsx)(PaginationItemEllipsis, {
    ref: ref,
    ownerState: ownerState,
    className: (0,clsx/* default */.A)(classes.root, className),
    children: "\u2026"
  }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(PaginationItemPage, (0,esm_extends/* default */.A)({
    ref: ref,
    ownerState: ownerState,
    component: component,
    disabled: disabled,
    className: (0,clsx/* default */.A)(classes.root, className)
  }, other, {
    children: [type === 'page' && page, Icon ? /*#__PURE__*/(0,jsx_runtime.jsx)(PaginationItemPageIcon, {
      as: Icon,
      ownerState: ownerState,
      className: classes.icon
    }) : null]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const PaginationItem_PaginationItem = (PaginationItem);
;// ./node_modules/@mui/material/Pagination/Pagination.js
'use client';



const Pagination_excluded = ["boundaryCount", "className", "color", "count", "defaultPage", "disabled", "getItemAriaLabel", "hideNextButton", "hidePrevButton", "onChange", "page", "renderItem", "shape", "showFirstButton", "showLastButton", "siblingCount", "size", "variant"];











const Pagination_useUtilityClasses = ownerState => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ['root', variant],
    ul: ['ul']
  };
  return (0,composeClasses/* default */.A)(slots, getPaginationUtilityClass, classes);
};
const PaginationRoot = (0,styled/* default */.Ay)('nav', {
  name: 'MuiPagination',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant]];
  }
})({});
const PaginationUl = (0,styled/* default */.Ay)('ul', {
  name: 'MuiPagination',
  slot: 'Ul',
  overridesResolver: (props, styles) => styles.ul
})({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  listStyle: 'none'
});
function defaultGetAriaLabel(type, page, selected) {
  if (type === 'page') {
    return `${selected ? '' : 'Go to '}page ${page}`;
  }
  return `Go to ${type} page`;
}
const Pagination = /*#__PURE__*/react.forwardRef(function Pagination(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiPagination'
  });
  const {
      boundaryCount = 1,
      className,
      color = 'standard',
      count = 1,
      defaultPage = 1,
      disabled = false,
      getItemAriaLabel = defaultGetAriaLabel,
      hideNextButton = false,
      hidePrevButton = false,
      renderItem = item => /*#__PURE__*/(0,jsx_runtime.jsx)(PaginationItem_PaginationItem, (0,esm_extends/* default */.A)({}, item)),
      shape = 'circular',
      showFirstButton = false,
      showLastButton = false,
      siblingCount = 1,
      size = 'medium',
      variant = 'text'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Pagination_excluded);
  const {
    items
  } = usePagination((0,esm_extends/* default */.A)({}, props, {
    componentName: 'Pagination'
  }));
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    boundaryCount,
    color,
    count,
    defaultPage,
    disabled,
    getItemAriaLabel,
    hideNextButton,
    hidePrevButton,
    renderItem,
    shape,
    showFirstButton,
    showLastButton,
    siblingCount,
    size,
    variant
  });
  const classes = Pagination_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PaginationRoot, (0,esm_extends/* default */.A)({
    "aria-label": "pagination navigation",
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(PaginationUl, {
      className: classes.ul,
      ownerState: ownerState,
      children: items.map((item, index) => /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        children: renderItem((0,esm_extends/* default */.A)({}, item, {
          color,
          'aria-label': getItemAriaLabel(item.type, item.page, item.selected),
          shape,
          size,
          variant
        }))
      }, index))
    })
  }));
});

// @default tags synced with default values from usePagination

 false ? 0 : void 0;
/* harmony default export */ const Pagination_Pagination = (Pagination);

/***/ },

/***/ 53071
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ GridToolbar)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(69067);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styled.js
var styled = __webpack_require__(81825);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(75659);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/constants/gridClasses.js
var gridClasses = __webpack_require__(74787);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/hooks/utils/useGridRootProps.js
var useGridRootProps = __webpack_require__(90441);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/x-data-grid/components/containers/GridToolbarContainer.js


const _excluded = ["className", "children"];








const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['toolbarContainer']
  };
  return (0,composeClasses/* default */.A)(slots, gridClasses/* getDataGridUtilityClass */.B, classes);
};
const GridToolbarContainerRoot = (0,styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'ToolbarContainer',
  overridesResolver: (_, styles) => styles.toolbarContainer
})(({
  theme
}) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  padding: theme.spacing(0.5, 0.5, 0)
}));
const GridToolbarContainer = /*#__PURE__*/react.forwardRef(function GridToolbarContainer(props, ref) {
  const {
      className,
      children
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const rootProps = (0,useGridRootProps/* useGridRootProps */.A)();
  const classes = useUtilityClasses(rootProps);
  if (!children) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridToolbarContainerRoot, (0,esm_extends/* default */.A)({
    ref: ref,
    className: (0,clsx/* default */.A)(className, classes.root),
    ownerState: rootProps
  }, other, {
    children: children
  }));
});
 false ? 0 : void 0;

// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useId.js
var useId = __webpack_require__(1668);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/hooks/utils/useGridSelector.js
var useGridSelector = __webpack_require__(10118);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/hooks/features/preferencesPanel/gridPreferencePanelSelector.js
var gridPreferencePanelSelector = __webpack_require__(15101);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/hooks/features/preferencesPanel/gridPreferencePanelsValue.js
var gridPreferencePanelsValue = __webpack_require__(86074);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/hooks/utils/useGridApiContext.js
var useGridApiContext = __webpack_require__(34536);
;// ./node_modules/@mui/x-data-grid/components/toolbar/GridToolbarColumnsButton.js


const GridToolbarColumnsButton_excluded = ["onClick"];








const GridToolbarColumnsButton = /*#__PURE__*/react.forwardRef(function GridToolbarColumnsButton(props, ref) {
  var _rootProps$slotProps;
  const {
      onClick
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridToolbarColumnsButton_excluded);
  const columnButtonId = (0,useId/* default */.A)();
  const columnPanelId = (0,useId/* default */.A)();
  const apiRef = (0,useGridApiContext/* useGridApiContext */.h)();
  const rootProps = (0,useGridRootProps/* useGridRootProps */.A)();
  const preferencePanel = (0,useGridSelector/* useGridSelector */.N)(apiRef, gridPreferencePanelSelector/* gridPreferencePanelStateSelector */._);
  const showColumns = event => {
    if (preferencePanel.open && preferencePanel.openedPanelValue === gridPreferencePanelsValue/* GridPreferencePanelsValue */.y.columns) {
      apiRef.current.hidePreferences();
    } else {
      apiRef.current.showPreferences(gridPreferencePanelsValue/* GridPreferencePanelsValue */.y.columns, columnPanelId, columnButtonId);
    }
    onClick == null || onClick(event);
  };

  // Disable the button if the corresponding is disabled
  if (rootProps.disableColumnSelector) {
    return null;
  }
  const isOpen = preferencePanel.open && preferencePanel.panelId === columnPanelId;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseButton, (0,esm_extends/* default */.A)({
    ref: ref,
    id: columnButtonId,
    size: "small",
    "aria-label": apiRef.current.getLocaleText('toolbarColumnsLabel'),
    "aria-haspopup": "menu",
    "aria-expanded": isOpen,
    "aria-controls": isOpen ? columnPanelId : undefined,
    startIcon: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.columnSelectorIcon, {})
  }, other, {
    onClick: showColumns
  }, (_rootProps$slotProps = rootProps.slotProps) == null ? void 0 : _rootProps$slotProps.baseButton, {
    children: apiRef.current.getLocaleText('toolbarColumns')
  }));
});
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useId/useId.js
var useId_useId = __webpack_require__(34661);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var useForkRef = __webpack_require__(31523);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuList/MenuList.js + 1 modules
var MenuList = __webpack_require__(88116);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(73896);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(57873);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/hooks/features/density/densitySelector.js
var densitySelector = __webpack_require__(76686);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/utils/keyboardUtils.js
var keyboardUtils = __webpack_require__(54445);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/components/menu/GridMenu.js
var GridMenu = __webpack_require__(4425);
;// ./node_modules/@mui/x-data-grid/components/toolbar/GridToolbarDensitySelector.js


const GridToolbarDensitySelector_excluded = ["onClick"];














const GridToolbarDensitySelector = /*#__PURE__*/react.forwardRef(function GridToolbarDensitySelector(props, ref) {
  var _rootProps$slotProps;
  const {
      onClick
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridToolbarDensitySelector_excluded);
  const apiRef = (0,useGridApiContext/* useGridApiContext */.h)();
  const rootProps = (0,useGridRootProps/* useGridRootProps */.A)();
  const densityValue = (0,useGridSelector/* useGridSelector */.N)(apiRef, densitySelector/* gridDensityValueSelector */.BC);
  const densityButtonId = (0,useId_useId/* default */.A)();
  const densityMenuId = (0,useId_useId/* default */.A)();
  const [open, setOpen] = react.useState(false);
  const buttonRef = react.useRef(null);
  const handleRef = (0,useForkRef/* default */.A)(ref, buttonRef);
  const densityOptions = [{
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.densityCompactIcon, {}),
    label: apiRef.current.getLocaleText('toolbarDensityCompact'),
    value: 'compact'
  }, {
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.densityStandardIcon, {}),
    label: apiRef.current.getLocaleText('toolbarDensityStandard'),
    value: 'standard'
  }, {
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.densityComfortableIcon, {}),
    label: apiRef.current.getLocaleText('toolbarDensityComfortable'),
    value: 'comfortable'
  }];
  const startIcon = react.useMemo(() => {
    switch (densityValue) {
      case 'compact':
        return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.densityCompactIcon, {});
      case 'comfortable':
        return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.densityComfortableIcon, {});
      default:
        return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.densityStandardIcon, {});
    }
  }, [densityValue, rootProps]);
  const handleDensitySelectorOpen = event => {
    setOpen(prevOpen => !prevOpen);
    onClick == null || onClick(event);
  };
  const handleDensitySelectorClose = () => {
    setOpen(false);
  };
  const handleDensityUpdate = newDensity => {
    apiRef.current.setDensity(newDensity);
    setOpen(false);
  };
  const handleListKeyDown = event => {
    if ((0,keyboardUtils/* isTabKey */.vY)(event.key)) {
      event.preventDefault();
    }
    if ((0,keyboardUtils/* isHideMenuKey */.HF)(event.key)) {
      setOpen(false);
    }
  };

  // Disable the button if the corresponding is disabled
  if (rootProps.disableDensitySelector) {
    return null;
  }
  const densityElements = densityOptions.map((option, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem/* default */.A, {
    onClick: () => handleDensityUpdate(option.value),
    selected: option.value === densityValue,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItemIcon/* default */.A, {
      children: option.icon
    }), option.label]
  }, index));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseButton, (0,esm_extends/* default */.A)({
      ref: handleRef,
      size: "small",
      startIcon: startIcon,
      "aria-label": apiRef.current.getLocaleText('toolbarDensityLabel'),
      "aria-haspopup": "menu",
      "aria-expanded": open,
      "aria-controls": open ? densityMenuId : undefined,
      id: densityButtonId
    }, other, {
      onClick: handleDensitySelectorOpen
    }, (_rootProps$slotProps = rootProps.slotProps) == null ? void 0 : _rootProps$slotProps.baseButton, {
      children: apiRef.current.getLocaleText('toolbarDensity')
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(GridMenu/* GridMenu */.U, {
      open: open,
      target: buttonRef.current,
      onClose: handleDensitySelectorClose,
      position: "bottom-start",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(MenuList/* default */.A, {
        id: densityMenuId,
        className: gridClasses/* gridClasses */.x.menuList,
        "aria-labelledby": densityButtonId,
        onKeyDown: handleListKeyDown,
        autoFocusItem: open,
        children: densityElements
      })
    })]
  });
});
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styles_styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/capitalize/capitalize.js
var capitalize = __webpack_require__(13967);
// EXTERNAL MODULE: ./node_modules/@mui/material/Badge/Badge.js + 2 modules
var Badge = __webpack_require__(11154);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsSelector.js
var gridColumnsSelector = __webpack_require__(68454);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/hooks/features/filter/gridFilterSelector.js
var gridFilterSelector = __webpack_require__(4352);
;// ./node_modules/@mui/x-data-grid/components/toolbar/GridToolbarFilterButton.js


const GridToolbarFilterButton_excluded = ["componentsProps"];















const GridToolbarFilterButton_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['toolbarFilterList']
  };
  return (0,composeClasses/* default */.A)(slots, gridClasses/* getDataGridUtilityClass */.B, classes);
};
const GridToolbarFilterListRoot = (0,styles_styled/* default */.Ay)('ul', {
  name: 'MuiDataGrid',
  slot: 'ToolbarFilterList',
  overridesResolver: (_props, styles) => styles.toolbarFilterList
})(({
  theme
}) => ({
  margin: theme.spacing(1, 1, 0.5),
  padding: theme.spacing(0, 1)
}));
const GridToolbarFilterButton = /*#__PURE__*/react.forwardRef(function GridToolbarFilterButton(props, ref) {
  var _rootProps$slotProps, _rootProps$slotProps2;
  const {
      componentsProps = {}
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridToolbarFilterButton_excluded);
  const buttonProps = componentsProps.button || {};
  const apiRef = (0,useGridApiContext/* useGridApiContext */.h)();
  const rootProps = (0,useGridRootProps/* useGridRootProps */.A)();
  const activeFilters = (0,useGridSelector/* useGridSelector */.N)(apiRef, gridFilterSelector/* gridFilterActiveItemsSelector */.Ai);
  const lookup = (0,useGridSelector/* useGridSelector */.N)(apiRef, gridColumnsSelector/* gridColumnLookupSelector */.gv);
  const preferencePanel = (0,useGridSelector/* useGridSelector */.N)(apiRef, gridPreferencePanelSelector/* gridPreferencePanelStateSelector */._);
  const classes = GridToolbarFilterButton_useUtilityClasses(rootProps);
  const filterButtonId = (0,useId_useId/* default */.A)();
  const filterPanelId = (0,useId_useId/* default */.A)();
  const tooltipContentNode = react.useMemo(() => {
    if (preferencePanel.open) {
      return apiRef.current.getLocaleText('toolbarFiltersTooltipHide');
    }
    if (activeFilters.length === 0) {
      return apiRef.current.getLocaleText('toolbarFiltersTooltipShow');
    }
    const getOperatorLabel = item => lookup[item.field].filterOperators.find(operator => operator.value === item.operator).label || apiRef.current.getLocaleText(`filterOperator${(0,capitalize/* default */.A)(item.operator)}`).toString();
    const getFilterItemValue = item => {
      const {
        getValueAsString
      } = lookup[item.field].filterOperators.find(operator => operator.value === item.operator);
      return getValueAsString ? getValueAsString(item.value) : item.value;
    };
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [apiRef.current.getLocaleText('toolbarFiltersTooltipActive')(activeFilters.length), /*#__PURE__*/(0,jsx_runtime.jsx)(GridToolbarFilterListRoot, {
        className: classes.root,
        ownerState: rootProps,
        children: activeFilters.map((item, index) => (0,esm_extends/* default */.A)({}, lookup[item.field] && /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          children: `${lookup[item.field].headerName || item.field}
                  ${getOperatorLabel(item)}
                  ${
          // implicit check for null and undefined
          item.value != null ? getFilterItemValue(item) : ''}`
        }, index)))
      })]
    });
  }, [apiRef, rootProps, preferencePanel.open, activeFilters, lookup, classes]);
  const toggleFilter = event => {
    var _buttonProps$onClick;
    const {
      open,
      openedPanelValue
    } = preferencePanel;
    if (open && openedPanelValue === gridPreferencePanelsValue/* GridPreferencePanelsValue */.y.filters) {
      apiRef.current.hidePreferences();
    } else {
      apiRef.current.showPreferences(gridPreferencePanelsValue/* GridPreferencePanelsValue */.y.filters, filterPanelId, filterButtonId);
    }
    (_buttonProps$onClick = buttonProps.onClick) == null || _buttonProps$onClick.call(buttonProps, event);
  };

  // Disable the button if the corresponding is disabled
  if (rootProps.disableColumnFilter) {
    return null;
  }
  const isOpen = preferencePanel.open && preferencePanel.panelId === filterPanelId;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseTooltip, (0,esm_extends/* default */.A)({
    title: tooltipContentNode,
    enterDelay: 1000
  }, other, (_rootProps$slotProps = rootProps.slotProps) == null ? void 0 : _rootProps$slotProps.baseTooltip, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseButton, (0,esm_extends/* default */.A)({
      ref: ref,
      id: filterButtonId,
      size: "small",
      "aria-label": apiRef.current.getLocaleText('toolbarFiltersLabel'),
      "aria-controls": isOpen ? filterPanelId : undefined,
      "aria-expanded": isOpen,
      "aria-haspopup": true,
      startIcon: /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.A, {
        badgeContent: activeFilters.length,
        color: "primary",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.openFilterButtonIcon, {})
      })
    }, buttonProps, {
      onClick: toggleFilter
    }, (_rootProps$slotProps2 = rootProps.slotProps) == null ? void 0 : _rootProps$slotProps2.baseButton, {
      children: apiRef.current.getLocaleText('toolbarFilters')
    }))
  }));
});
 false ? 0 : void 0;

// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/components/toolbar/GridToolbarExport.js + 1 modules
var GridToolbarExport = __webpack_require__(82869);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(844);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/debounce/debounce.js
var debounce = __webpack_require__(74705);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/utils/utils.js
var utils = __webpack_require__(14058);
;// ./node_modules/@mui/x-data-grid/components/toolbar/GridToolbarQuickFilter.js


const GridToolbarQuickFilter_excluded = ["quickFilterParser", "quickFilterFormatter", "debounceMs"];











const GridToolbarQuickFilterRoot = (0,styles_styled/* default */.Ay)(TextField/* default */.A, {
  name: 'MuiDataGrid',
  slot: 'ToolbarQuickFilter',
  overridesResolver: (props, styles) => styles.toolbarQuickFilter
})(({
  theme
}) => ({
  width: 'auto',
  paddingBottom: theme.spacing(0.5),
  '& input': {
    marginLeft: theme.spacing(0.5)
  },
  '& .MuiInput-underline:before': {
    borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
  },
  [`& input[type=search]::-ms-clear,
& input[type=search]::-ms-reveal`]: {
    /* clears the 'X' icon from IE */
    display: 'none',
    width: 0,
    height: 0
  },
  [`& input[type="search"]::-webkit-search-decoration,
  & input[type="search"]::-webkit-search-cancel-button,
  & input[type="search"]::-webkit-search-results-button,
  & input[type="search"]::-webkit-search-results-decoration`]: {
    /* clears the 'X' icon from Chrome */
    display: 'none'
  }
}));
const defaultSearchValueParser = searchText => searchText.split(' ').filter(word => word !== '');
const defaultSearchValueFormatter = values => values.join(' ');
function GridToolbarQuickFilter(props) {
  var _rootProps$slotProps, _rootProps$slotProps2;
  const apiRef = (0,useGridApiContext/* useGridApiContext */.h)();
  const rootProps = (0,useGridRootProps/* useGridRootProps */.A)();
  const quickFilterValues = (0,useGridSelector/* useGridSelector */.N)(apiRef, gridFilterSelector/* gridQuickFilterValuesSelector */.q6);
  const {
      quickFilterParser = defaultSearchValueParser,
      quickFilterFormatter = defaultSearchValueFormatter,
      debounceMs = rootProps.filterDebounceMs
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridToolbarQuickFilter_excluded);
  const [searchValue, setSearchValue] = react.useState(() => quickFilterFormatter(quickFilterValues != null ? quickFilterValues : []));
  const prevQuickFilterValuesRef = react.useRef(quickFilterValues);
  react.useEffect(() => {
    if (!(0,utils/* isDeepEqual */.Hv)(prevQuickFilterValuesRef.current, quickFilterValues)) {
      // The model of quick filter value has been updated
      prevQuickFilterValuesRef.current = quickFilterValues;

      // Update the input value if needed to match the new model
      setSearchValue(prevSearchValue => (0,utils/* isDeepEqual */.Hv)(quickFilterParser(prevSearchValue), quickFilterValues) ? prevSearchValue : quickFilterFormatter(quickFilterValues != null ? quickFilterValues : []));
    }
  }, [quickFilterValues, quickFilterFormatter, quickFilterParser]);
  const updateSearchValue = react.useCallback(newSearchValue => {
    const newQuickFilterValues = quickFilterParser(newSearchValue);
    prevQuickFilterValuesRef.current = newQuickFilterValues;
    apiRef.current.setQuickFilterValues(newQuickFilterValues);
  }, [apiRef, quickFilterParser]);
  const debouncedUpdateSearchValue = react.useMemo(() => (0,debounce/* default */.A)(updateSearchValue, debounceMs), [updateSearchValue, debounceMs]);
  const handleSearchValueChange = react.useCallback(event => {
    const newSearchValue = event.target.value;
    setSearchValue(newSearchValue);
    debouncedUpdateSearchValue(newSearchValue);
  }, [debouncedUpdateSearchValue]);
  const handleSearchReset = react.useCallback(() => {
    setSearchValue('');
    updateSearchValue('');
  }, [updateSearchValue]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridToolbarQuickFilterRoot, (0,esm_extends/* default */.A)({
    as: rootProps.slots.baseTextField,
    ownerState: rootProps,
    variant: "standard",
    value: searchValue,
    onChange: handleSearchValueChange,
    placeholder: apiRef.current.getLocaleText('toolbarQuickFilterPlaceholder'),
    "aria-label": apiRef.current.getLocaleText('toolbarQuickFilterLabel'),
    type: "search"
  }, other, {
    InputProps: (0,esm_extends/* default */.A)({
      startAdornment: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.quickFilterIcon, {
        fontSize: "small"
      }),
      endAdornment: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseIconButton, (0,esm_extends/* default */.A)({
        "aria-label": apiRef.current.getLocaleText('toolbarQuickFilterDeleteIconLabel'),
        size: "small",
        sx: {
          visibility: searchValue ? 'visible' : 'hidden'
        },
        onClick: handleSearchReset
      }, (_rootProps$slotProps = rootProps.slotProps) == null ? void 0 : _rootProps$slotProps.baseIconButton, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.quickFilterClearIcon, {
          fontSize: "small"
        })
      }))
    }, other.InputProps)
  }, (_rootProps$slotProps2 = rootProps.slotProps) == null ? void 0 : _rootProps$slotProps2.baseTextField));
}
 false ? 0 : void 0;

/**
 * Demos:
 * - [Filtering - overview](https://mui.com/x/react-data-grid/filtering/)
 * - [Filtering - quick filter](https://mui.com/x/react-data-grid/filtering/quick-filter/)
 *
 * API:
 * - [GridToolbarQuickFilter API](https://mui.com/x/api/data-grid/grid-toolbar-quick-filter/)
 */

;// ./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js


const GridToolbar_excluded = ["className", "csvOptions", "printOptions", "excelOptions", "showQuickFilter", "quickFilterProps"];












const GridToolbar = /*#__PURE__*/react.forwardRef(function GridToolbar(props, ref) {
  // TODO v7: think about where export option should be passed.
  // from slotProps={{ toolbarExport: { ...exportOption } }} seems to be more appropriate
  const {
      csvOptions,
      printOptions,
      excelOptions,
      showQuickFilter = false,
      quickFilterProps = {}
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridToolbar_excluded);
  const rootProps = (0,useGridRootProps/* useGridRootProps */.A)();
  if (rootProps.disableColumnFilter && rootProps.disableColumnSelector && rootProps.disableDensitySelector && !showQuickFilter) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(GridToolbarContainer, (0,esm_extends/* default */.A)({
    ref: ref
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GridToolbarColumnsButton, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(GridToolbarFilterButton, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(GridToolbarDensitySelector, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(GridToolbarExport/* GridToolbarExport */.qn, {
      csvOptions: csvOptions,
      printOptions: printOptions
      // TODO: remove the reference to excelOptions in community package
      ,
      excelOptions: excelOptions
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.A, {
      sx: {
        flex: 1
      }
    }), showQuickFilter && /*#__PURE__*/(0,jsx_runtime.jsx)(GridToolbarQuickFilter, (0,esm_extends/* default */.A)({}, quickFilterProps))]
  }));
});
 false ? 0 : void 0;


/***/ },

/***/ 25824
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _component_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80542);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33829);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68525);
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55746);
/* harmony import */ var _component_SideMaintenance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69610);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28597);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67034);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84976);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47767);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69279);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33198);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64137);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(96627);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(86798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(70691);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(43884);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(58331);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(14519);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(71543);
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(46986);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(97834);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(1835);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(53071);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(8451);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(71510);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(99682);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(17809);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(65821);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(20889);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(40301);
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(72761);
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_img_images_png__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(3100);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(95236);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(57240);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _component_PrintHeader__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(77438);
/* harmony import */ var _component_PrintFooter__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(61296);
/* harmony import */ var _mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(8659);
/* harmony import */ var _mui_icons_material_VisibilityOutlined__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(44379);
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["_id"],
  _excluded5 = ["_id"];
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










































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Ay)(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Ay, {
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
function ItemPurchaseViewAdmin() {
  var _user$data, _itemPurchase$find;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_50__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_50__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__/* .selectCurrentUser */ .xu);
  var hasTvaValue = item => {
    return !!(item.CheckTvA || item.checkTvA || item.CheckTva || item.hasTVA || item.tva || item.TVA);
  };
  var getTaxValue = item => {
    var tax = item.tax || item.taxAmount || item.vatAmount || item.TvaAmount || item.taxUSD || 0;
    if (tax > 0) return tax;
    if (hasTvaValue(item)) {
      return Number(item.totalUSD || item.total || item.amount || 0) * 0.16;
    }
    return 0;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__/* .setUser */ .gV)({
              userName: Name,
              role: Role,
              id: res.data.data._id
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_37__/* .cachedGet */ .Fe)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var PurchaseInfoC = grantAccess.filter(row => row.moduleName === "Item-Purchase" && row.access.createM === true);
  var PurchaseInfoV = grantAccess.filter(row => row.moduleName === "Item-Purchase" && row.access.viewM === true);
  var PurchaseInfoU = grantAccess.filter(row => row.moduleName === "Item-Purchase" && row.access.editM === true);
  var PurchaseInfoD = grantAccess.filter(row => row.moduleName === "Item-Purchase" && row.access.deleteM === true);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__/* .logOut */ .je)());
    navigate('/');
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    itemPurchase = _useState4[0],
    setItemPurchase = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    newPurchase = _useState6[0],
    setNewPurchase = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingData = _useState8[0],
    setLoadingData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedRows = _useState0[0],
    setSelectedRows = _useState0[1];

  // --- Partial Payment States ---
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    openAddPayment = _useState10[0],
    setOpenAddPayment = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    openPaymentHistory = _useState12[0],
    setOpenPaymentHistory = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedPurchase = _useState14[0],
    setSelectedPurchase = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      amount: '',
      amountFC: '',
      rate: '',
      date: dayjs__WEBPACK_IMPORTED_MODULE_47___default()().format('YYYY-MM-DD'),
      mode: 'Cash',
      reference: '',
      note: ''
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    paymentForm = _useState16[0],
    setPaymentForm = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    expenseNumber = _useState18[0],
    setExpenseNumber = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    categories = _useState20[0],
    setCategories = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    systemRate = _useState22[0],
    setSystemRate = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    page = _useState24[0],
    setPage = _useState24[1];
  var limit = 100;
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState26 = _slicedToArray(_useState25, 2),
    searchTerm = _useState26[0],
    setSearchTerm = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState28 = _slicedToArray(_useState27, 2),
    filterField = _useState28[0],
    setFilterField = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState30 = _slicedToArray(_useState29, 2),
    filterValue = _useState30[0],
    setFilterValue = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState32 = _slicedToArray(_useState31, 2),
    totalPage = _useState32[0],
    SetTotalPage = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    totalItemCount = _useState34[0],
    setTotalItemCount = _useState34[1];
  var fetchItems = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (page, searchTerm, filterField, filterValue) {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/itemPurchase-Information?page=").concat(page + 1, "&limit=").concat(limit, "&search=").concat(encodeURIComponent(searchTerm.trim()), "&filterField=").concat(encodeURIComponent(filterField.trim()), "&filterValue=").concat(encodeURIComponent(filterValue.trim())));
        var formatDate = res.data.itemI.map(item => _objectSpread(_objectSpread({}, item), {}, {
          id: item._id,
          dataField: dayjs__WEBPACK_IMPORTED_MODULE_47___default()(item.itemPurchaseDate).format('DD/MM/YYYY'),
          Account: item.projectName !== undefined ? item.projectName.name : item.description,
          referenceInfo: item.manufacturer + ' / ' + item.manufacturerNumber,
          itemInfo: (item.items || []).filter(row => parseFloat(row.itemQty) > 0 || row.newDescription !== undefined).map(row => {
            var _row$itemName;
            return ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName.itemName) || row.newDescription || '';
          }),
          itemDescriptionInfo: (item.items || []).filter(row => parseFloat(row.itemQty) > 0 || row.newDescription !== undefined).map(row => row.itemDescription || '')
        }));
        SetTotalPage(Math.ceil(res.data.totalItem / limit));
        setTotalItemCount(res.data.totalItem || 0);
        setItemPurchase(formatDate);
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    });
    return function fetchItems(_x, _x2, _x3, _x4) {
      return _ref1.apply(this, arguments);
    };
  }();
  var handleRefreshSearch = () => {
    fetchItems(page, searchTerm, filterField, filterValue);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchItems(page, searchTerm, filterField, filterValue);
  }, [page, searchTerm, filterField, filterValue]);

  // Fetch expense categories and last expense number for integration
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchExpenseInfo = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var _lastExpRes$data, _rateRes$data;
          var catRes = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/expensesCategory"));
          setCategories(catRes.data.data);
          var lastExpRes = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/get-last-saved-expense"));
          setExpenseNumber(parseInt(((_lastExpRes$data = lastExpRes.data) === null || _lastExpRes$data === void 0 ? void 0 : _lastExpRes$data.expenseNumber) || 0) + 1);

          // Fetch current exchange rate
          var rateRes = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/rate"));
          if (Array.isArray(rateRes === null || rateRes === void 0 || (_rateRes$data = rateRes.data) === null || _rateRes$data === void 0 ? void 0 : _rateRes$data.data) && rateRes.data.data.length > 0) {
            var _rateRes$data2;
            setSystemRate((_rateRes$data2 = rateRes.data) === null || _rateRes$data2 === void 0 || (_rateRes$data2 = _rateRes$data2.data) === null || _rateRes$data2 === void 0 || (_rateRes$data2 = _rateRes$data2[0]) === null || _rateRes$data2 === void 0 ? void 0 : _rateRes$data2.rate);
          }
        } catch (error) {
          console.error('Error fetching additional info:', error);
        }
      });
      return function fetchExpenseInfo() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchExpenseInfo();
  }, []);
  var handlePageChange = newPage => {
    setPage(newPage);
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filterModel = _React$useState2[0],
    setFilterModel = _React$useState2[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState36 = _slicedToArray(_useState35, 2),
    columnVisibilityModel = _useState36[0],
    setColumnVisibilityModel = _useState36[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsItemPurchase', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    var _newModel$quickFilter;
    var searchTerm = ((_newModel$quickFilter = newModel.quickFilterValues) === null || _newModel$quickFilter === void 0 ? void 0 : _newModel$quickFilter.join(' ')) || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterItemPurchaseTst'));
    if (storedQuick) {
      var _storedQuick$quickFil;
      var _searchTerm = ((_storedQuick$quickFil = storedQuick.quickFilterValues) === null || _storedQuick$quickFil === void 0 ? void 0 : _storedQuick$quickFil.join(' ')) || '';
      setSearchTerm(_searchTerm);
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsItemPurchase'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, []);
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    openView = _useState38[0],
    setOpenView = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState40 = _slicedToArray(_useState39, 2),
    idView = _useState40[0],
    setIdView = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState42 = _slicedToArray(_useState41, 2),
    itemPurchaseView = _useState42[0],
    setItemPurchaseView = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState44 = _slicedToArray(_useState43, 2),
    item = _useState44[0],
    SetItems = _useState44[1];
  var handleOpenView = id => {
    setOpenView(true);
    setIdView(id);
  };
  var handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
    setItemPurchaseView(null);
    setSelectedRows([]);
  };
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    openReasonDelete = _useState46[0],
    setOpenReasonDelete = _useState46[1];
  var handleOpenReasonDelete = e => {
    if (e && e.preventDefault) e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        if (idView !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/get-itemPurchase/").concat(idView));
            setItemPurchaseView(res.data.data);
            var resItem = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/item-Information?summary=true&limit=1000"));
            SetItems(resItem.data.itemI);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchData2() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [idView]);
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    open = _useState48[0],
    setOpen = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState50 = _slicedToArray(_useState49, 2),
    DeleteId = _useState50[0],
    setDeleteId = _useState50[1];
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleClose = () => {
    setOpen(false);
    setSelectedRows([]);
  };
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState52 = _slicedToArray(_useState51, 2),
    projectName = _useState52[0],
    setProjectName = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState54 = _slicedToArray(_useState53, 2),
    items = _useState54[0],
    setItems = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState56 = _slicedToArray(_useState55, 2),
    reason = _useState56[0],
    setReason = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState58 = _slicedToArray(_useState57, 2),
    reason1 = _useState58[0],
    setReason1 = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState60 = _slicedToArray(_useState59, 2),
    relatedNumber = _useState60[0],
    setRelatedNumber = _useState60[1];
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState62 = _slicedToArray(_useState61, 2),
    purChaseOrderId = _useState62[0],
    setPurchaseOrderId = _useState62[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchId = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        if (DeleteId) {
          try {
            var _res$data2;
            var res = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/get-itemPurchase/").concat(DeleteId));
            if (res !== null && res !== void 0 && (_res$data2 = res.data) !== null && _res$data2 !== void 0 && _res$data2.data) {
              var _res$data3, _res$data4;
              setProjectName(res.data.data.projectName);
              setItems(res.data.data.items);
              setReason(res.data.data.reason);
              setRelatedNumber(Number(((_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.itemPurchaseNumber) || ((_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.itemPurchaseNumber) || 0));
              setPurchaseOrderId(res.data.data.POID);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchId() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchId();
  }, [DeleteId]);
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState64 = _slicedToArray(_useState63, 2),
    purchase = _useState64[0],
    setPurchase = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState66 = _slicedToArray(_useState65, 2),
    maintenance = _useState66[0],
    setMaintenance = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState68 = _slicedToArray(_useState67, 2),
    invoice = _useState68[0],
    setInvoice = _useState68[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        try {
          if (projectName && projectName._id) {
            var _res$data5, _resMaintenance$data, _resInvoice$data;
            var res = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/purchase?summary=true"));
            setPurchase((_res$data5 = res.data) === null || _res$data5 === void 0 || (_res$data5 = _res$data5.data) === null || _res$data5 === void 0 ? void 0 : _res$data5.filter(row => {
              var _row$projectName;
              return ((_row$projectName = row.projectName) === null || _row$projectName === void 0 ? void 0 : _row$projectName._id) === projectName._id;
            }));
            var resMaintenance = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/maintenance?summary=true"));
            setMaintenance((_resMaintenance$data = resMaintenance.data) === null || _resMaintenance$data === void 0 || (_resMaintenance$data = _resMaintenance$data.data) === null || _resMaintenance$data === void 0 ? void 0 : _resMaintenance$data.filter(row => row._id === projectName._id));
            var resInvoice = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/invoice?summary=true"));
            setInvoice((_resInvoice$data = resInvoice.data) === null || _resInvoice$data === void 0 || (_resInvoice$data = _resInvoice$data.data) === null || _resInvoice$data === void 0 ? void 0 : _resInvoice$data.filter(row => row._id === projectName._id));
          }
        } catch (error) {
          console.error('Error fetching related modules');
        }
      });
      return function fetchData2() {
        return _ref13.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [projectName]);
  var handleUpdatePurchase = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* () {
      if (!(projectName !== null && projectName !== void 0 && projectName._id)) return;
      try {
        if (reason === 'Project') {
          var _resPur$data;
          var resPur = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/purchase?summary=true"));
          var relevantPurchases = (_resPur$data = resPur.data) === null || _resPur$data === void 0 || (_resPur$data = _resPur$data.data) === null || _resPur$data === void 0 ? void 0 : _resPur$data.filter(row => {
            var _row$projectName2;
            return ((_row$projectName2 = row.projectName) === null || _row$projectName2 === void 0 ? void 0 : _row$projectName2._id) === projectName._id;
          });
          for (var purchaseRow of relevantPurchases) {
            var currentRes = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/get-purchase/").concat(purchaseRow._id));
            var currentData = currentRes.data.data;
            var updatedItems = currentData.items.map(Item => {
              var RelatedItem = items.find(Item2 => {
                var _Item$itemName, _Item$itemName2, _Item2$itemName;
                return ((_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName._id) !== undefined && ((_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2._id) === ((_Item2$itemName = Item2.itemName) === null || _Item2$itemName === void 0 ? void 0 : _Item2$itemName._id) || Item2.itemDescription === Item.itemDescription;
              });
              if (RelatedItem) {
                var itemBuy = parseFloat(Item.itemBuy || 0) - parseFloat(RelatedItem.itemQty || 0);
                var totalGenerale = (parseFloat(Item.itemCost) || 0) * itemBuy;
                return _objectSpread(_objectSpread({}, Item), {}, {
                  itemBuy,
                  totalGenerale
                });
              }
              return Item;
            });
            var purchaseAmount2 = updatedItems.reduce((sum, row) => sum + (parseFloat(row.totalGenerale) || 0), 0);
            yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/update-purchase/").concat(purchaseRow._id), {
              items: updatedItems,
              purchaseAmount2
            });
          }
        } else if (reason === 'Maintenance') {
          var _resM$data;
          var resM = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/maintenance?summary=true"));
          var relevantMaintenance = (_resM$data = resM.data) === null || _resM$data === void 0 || (_resM$data = _resM$data.data) === null || _resM$data === void 0 ? void 0 : _resM$data.filter(row => row._id === projectName._id);
          for (var maintenanceRow of relevantMaintenance) {
            var _currentRes = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/get-maintenance/").concat(maintenanceRow._id));
            var _currentData = _currentRes.data.data;
            var _updatedItems = _currentData.items.map(Item => {
              var RelatedItem = items.find(Item2 => {
                var _Item$itemName3, _Item$itemName4, _Item2$itemName2;
                return ((_Item$itemName3 = Item.itemName) === null || _Item$itemName3 === void 0 ? void 0 : _Item$itemName3._id) !== undefined && ((_Item$itemName4 = Item.itemName) === null || _Item$itemName4 === void 0 ? void 0 : _Item$itemName4._id) === ((_Item2$itemName2 = Item2.itemName) === null || _Item2$itemName2 === void 0 ? void 0 : _Item2$itemName2._id) || Item2.itemDescription === Item.itemDescription;
              });
              if (RelatedItem) {
                var itemBuy = parseFloat(Item.itemBuy || 0) - parseFloat(RelatedItem.itemQty || 0);
                var totalGenerale = (parseFloat(Item.itemCost) || 0) * itemBuy;
                return _objectSpread(_objectSpread({}, Item), {}, {
                  itemBuy,
                  totalGenerale
                });
              }
              return Item;
            });
            yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/update-maintenance/").concat(maintenanceRow._id), {
              items: _updatedItems
            });
          }
        } else if (reason === 'Invoice') {
          var _resI$data;
          var resI = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/invoice?summary=true"));
          var relevantInvoices = (_resI$data = resI.data) === null || _resI$data === void 0 || (_resI$data = _resI$data.data) === null || _resI$data === void 0 ? void 0 : _resI$data.filter(row => row._id === projectName._id);
          for (var invoiceRow of relevantInvoices) {
            var _currentRes2 = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/get-invoice/").concat(invoiceRow._id));
            var _currentData2 = _currentRes2.data.data;
            var _updatedItems2 = _currentData2.items.map(Item => {
              var RelatedItem = items.find(Item2 => {
                var _Item$itemName5, _Item$itemName6, _Item2$itemName3;
                return ((_Item$itemName5 = Item.itemName) === null || _Item$itemName5 === void 0 ? void 0 : _Item$itemName5._id) !== undefined && ((_Item$itemName6 = Item.itemName) === null || _Item$itemName6 === void 0 ? void 0 : _Item$itemName6._id) === ((_Item2$itemName3 = Item2.itemName) === null || _Item2$itemName3 === void 0 ? void 0 : _Item2$itemName3._id) || Item2.itemDescription === Item.itemDescription;
              });
              if (RelatedItem) {
                var itemBuy = parseFloat(Item.itemBuy || 0) - parseFloat(RelatedItem.itemQty || 0);
                var totalGenerale = (parseFloat(Item.itemCost) || 0) * itemBuy;
                return _objectSpread(_objectSpread({}, Item), {}, {
                  itemBuy,
                  totalGenerale
                });
              }
              return Item;
            });
            yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/update-invoice/").concat(invoiceRow._id), {
              items: _updatedItems2
            });
          }
        }
      } catch (error) {
        console.error('Error in handleUpdatePurchase (Deletion Safe Merge):', error);
      }
    });
    return function handleUpdatePurchase() {
      return _ref14.apply(this, arguments);
    };
  }();
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState70 = _slicedToArray(_useState69, 2),
    loading = _useState70[0],
    setLoading = _useState70[1];
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState72 = _slicedToArray(_useState71, 2),
    modalDeleteOpenLoading = _useState72[0],
    setModalDeleteOpenLoading = _useState72[1];
  var handleDeleteOpenLoading = () => {
    setModalDeleteOpenLoading(true);
    setLoading(true);
    handleClose();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleDeleteCloseLoading = () => {
    setModalDeleteOpenLoading(false);
    setLoading(false);
    fetchItems(page, searchTerm, filterField, filterValue);
  };
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* () {
      var data = {
        person: user.data.userName + ' Deleted IP-' + relatedNumber,
        reason: reason1,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref15.apply(this, arguments);
    };
  }();
  var onStatusUpdate = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* () {
      if (purChaseOrderId && purChaseOrderId !== "undefined") {
        try {
          yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/update-purchaseOrder/").concat(purChaseOrderId), {
            Converted: false,
            IpRelated: {}
          });
        } catch (error) {}
      }
    });
    return function onStatusUpdate() {
      return _ref16.apply(this, arguments);
    };
  }();
  var handleQty = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(function* () {
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/CalculateTotal"));
      } catch (error) {}
    });
    return function handleQty() {
      return _ref17.apply(this, arguments);
    };
  }();
  var handleDeleteUpdate = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        // Switched to POST and sending ID in body to match new backend pattern
        var res = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/delete-itemPurchase"), {
          id: DeleteId
        });
        if (res) {
          // Optimistic UI: Remove the deleted row from state instantly (BEFORE long-running background tasks)
          setItemPurchase(prev => prev.filter(item => item._id !== DeleteId));
          setSelectedRows(prev => prev.filter(id => id !== DeleteId));
          handleDeleteOpenLoading();

          // These tasks update secondary state or trigger calculations in background
          yield onStatusUpdate();
          yield handleQty();
          yield handleUpdatePurchase();
          yield handleCreateNotification();
        }
      } catch (error) {
        console.error('Error deleting item purchase:', error);
        alert('Failed to delete item purchase. Please check the console for details.');
      } finally {
        handleCloseReasonDelete();
      }
    });
    return function handleDeleteUpdate(_x5) {
      return _ref18.apply(this, arguments);
    };
  }();
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState74 = _slicedToArray(_useState73, 2),
    updateS = _useState74[0],
    setUpdateS = _useState74[1];
  var handleOpenAddPayment = purchase => {
    setSelectedPurchase(purchase);
    var totalWithTax = parseFloat(purchase.totalUSD || purchase.total || 0);

    // Calculate current total paid in USD (including converted FC payments)
    var currentPaidUSD = (purchase.payments || []).reduce((sum, p) => {
      var pUSD = parseFloat(p.amount || 0);
      var pFC = parseFloat(p.amountFC || 0);
      var pRate = parseFloat(p.rate || systemRate || 1);
      return sum + pUSD + pFC / pRate;
    }, 0);
    var remaining = Math.max(0, totalWithTax - currentPaidUSD);
    setPaymentForm({
      amount: remaining.toFixed(2),
      amountFC: '0',
      rate: systemRate.toString(),
      date: dayjs__WEBPACK_IMPORTED_MODULE_47___default()().format('YYYY-MM-DD'),
      mode: 'Cash',
      reference: "Payment for IP-".concat(purchase.itemPurchaseNumber),
      note: ''
    });
    setOpenAddPayment(true);
  };
  var handleOpenPaymentHistory = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(function* (purchase) {
      setSelectedPurchase(purchase);
      setOpenPaymentHistory(true);
      // Fetch full record to get payments[] which paginated endpoint may omit
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/get-itemPurchase/").concat(purchase._id));
        var fullData = res.data.data;
        setSelectedPurchase(prev => _objectSpread(_objectSpread(_objectSpread({}, prev), fullData), {}, {
          id: prev.id
        }));
      } catch (e) {
        // keep original data if fetch fails
      }
    });
    return function handleOpenPaymentHistory(_x6) {
      return _ref19.apply(this, arguments);
    };
  }();
  var handleSavePayment = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      if (!selectedPurchase) return;
      setLoading(true);
      var amountUSD = parseFloat(paymentForm.amount || 0);
      var amountFC = parseFloat(paymentForm.amountFC || 0);
      var rate = parseFloat(paymentForm.rate || systemRate || 1);

      // Total value of THIS payment in USD
      var thisPaymentTotalUSD = amountUSD + amountFC / rate;
      var newPayment = _objectSpread(_objectSpread({}, paymentForm), {}, {
        reference: paymentForm.note ? paymentForm.reference ? "".concat(paymentForm.reference, " | Note: ").concat(paymentForm.note) : "Note: ".concat(paymentForm.note) : paymentForm.reference,
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(),
        amount: amountUSD,
        amountFC: amountFC,
        rate: rate,
        totalUSD: thisPaymentTotalUSD // Store the converted total for easy calculation
      });
      try {
        // Fetch latest Item Purchase to avoid overwriting concurrent payments
        var currentIPRes = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/get-itemPurchase/").concat(selectedPurchase._id));
        var latestIPData = currentIPRes.data.data;
        var updatedPayments = [...(latestIPData.payments || []), newPayment];
        var totalWithTax = parseFloat(latestIPData.totalUSD || latestIPData.total || 0);

        // Calculate current total paid BEFORE this new payment
        var currentPaidUSD = (latestIPData.payments || []).reduce((sum, p) => {
          if (p.totalUSD !== undefined) return sum + p.totalUSD;
          return sum + (parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1));
        }, 0);

        // VALIDATION: Prevent payment from exceeding total amount (allow $0.05 float tolerance)
        if (currentPaidUSD + thisPaymentTotalUSD > totalWithTax + 0.05) {
          alert("Error: Payment amount cannot exceed the remaining balance of this Item Purchase.");
          setLoading(false);
          return;
        }

        // Recalculate total paid across ALL payments using latest data
        var totalPaidUSD = updatedPayments.reduce((sum, p) => {
          if (p.totalUSD !== undefined) return sum + p.totalUSD;
          return sum + (parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1));
        }, 0);
        var newStatus = 'UnPaid';
        if (totalPaidUSD >= totalWithTax - 0.01) newStatus = 'Paid';else if (totalPaidUSD > 0) newStatus = 'Partially-Paid';

        // 1. Update Item Purchase
        var _id = latestIPData._id,
          restData = _objectWithoutProperties(latestIPData, _excluded4);
        yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/update-itemPurchase/").concat(selectedPurchase._id), _objectSpread(_objectSpread({}, restData), {}, {
          payments: updatedPayments,
          status: newStatus
        }));

        // Clear cache so Expenses Daily Information will fetch fresh data
        (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_37__/* .invalidateCache */ .gm)('/itemPurchase');

        // 2. Update Local State
        setItemPurchase(prev => prev.map(item => item._id === selectedPurchase._id ? _objectSpread(_objectSpread({}, item), {}, {
          status: newStatus,
          payments: updatedPayments
        }) : item));
        setOpenAddPayment(false);
        setUpdateS(true);
        handleDeleteOpenLoading();
      } catch (error) {
        console.error('Error saving payment:', error);
        alert('Failed to save payment.');
      } finally {
        setLoading(false);
      }
    });
    return function handleSavePayment(_x7) {
      return _ref20.apply(this, arguments);
    };
  }();
  var handleDeletePayment = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(function* (paymentId) {
      if (!window.confirm('Are you sure you want to delete this payment record?')) return;
      setLoading(true);
      try {
        // Fetch latest Item Purchase
        var currentIPRes = yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/get-itemPurchase/").concat(selectedPurchase._id));
        var latestIPData = currentIPRes.data.data;
        var updatedPayments = (latestIPData.payments || []).filter(p => p.id !== paymentId);
        var totalWithTax = parseFloat(latestIPData.totalUSD || latestIPData.total || 0);
        var totalPaidUSD = updatedPayments.reduce((sum, p) => {
          return sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1));
        }, 0);
        var newStatus = 'UnPaid';
        if (totalPaidUSD >= totalWithTax - 0.01) newStatus = 'Paid';else if (totalPaidUSD > 0) newStatus = 'Partially-Paid';
        var _id = latestIPData._id,
          restData = _objectWithoutProperties(latestIPData, _excluded5);
        yield axios__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__/* .ENDPOINT_URL */ .m, "/update-itemPurchase/").concat(selectedPurchase._id), _objectSpread(_objectSpread({}, restData), {}, {
          payments: updatedPayments,
          status: newStatus
        }));
        setItemPurchase(prev => prev.map(item => item._id === selectedPurchase._id ? _objectSpread(_objectSpread({}, item), {}, {
          status: newStatus,
          payments: updatedPayments
        }) : item));
        setSelectedPurchase(_objectSpread(_objectSpread({}, selectedPurchase), {}, {
          payments: updatedPayments,
          status: newStatus
        }));
        setUpdateS(true);
        handleDeleteOpenLoading();
      } catch (error) {
        console.error('Error deleting payment:', error);
      } finally {
        setLoading(false);
      }
    });
    return function handleDeletePayment(_x8) {
      return _ref21.apply(this, arguments);
    };
  }();
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    open1 = _React$useState4[0],
    setOpen1 = _React$useState4[1];
  var toggleDrawer = () => {
    setOpen1(!open1);
  };
  var columns = [{
    field: 'itemPurchaseNumber',
    headerName: '#',
    minWidth: 90,
    flex: 0.8,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "IP-0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, params.row.itemPurchaseNumber), " ")
  }, {
    field: 'itemPurchaseDate',
    headerName: 'Date',
    minWidth: 100,
    flex: 1,
    type: 'date',
    valueGetter: params => new Date(params.row.itemPurchaseDate),
    renderCell: params => dayjs__WEBPACK_IMPORTED_MODULE_47___default()(params.row.itemPurchaseDate).format('DD/MM/YYYY')
  }, {
    field: 'Account',
    headerName: 'Description',
    minWidth: 200,
    flex: 2
  }, {
    field: 'referenceInfo',
    headerName: 'Account',
    minWidth: 150,
    flex: 1.5
  }, {
    field: 'status',
    headerName: 'Action',
    minWidth: 200,
    flex: 1.5,
    renderCell: params => {
      var totalWithTax = parseFloat(params.row.totalUSD || params.row.total || 0);
      // Robust calculation of total paid in USD equivalent
      var totalPaid = (params.row.payments || []).reduce((sum, p) => {
        return sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1));
      }, 0);
      var isFullyPaid = totalPaid >= totalWithTax - 0.01;
      // Also treat status='Paid' as fully paid — covers case where payments[] is stale or missing
      var statusIsPaid = (params.row.status || '').toLowerCase() === 'paid';
      var effectivelyPaid = isFullyPaid || statusIsPaid;
      // hasPayments: true if payments array has items OR status indicates payment was made
      // (paginated endpoint may not return payments[] — use status as reliable fallback)
      var hasPayments = (params.row.payments || []).length > 0 || params.row.status === 'Paid' || params.row.status === 'Partially-Paid';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          display: 'flex',
          gap: '5px',
          alignItems: 'center'
        }
      }, !effectivelyPaid && totalWithTax > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        onClick: () => handleOpenAddPayment(params.row),
        className: "btnCustomer2"
      }, "Click To Pay"), hasPayments && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        onClick: () => handleOpenPaymentHistory(params.row),
        className: "btnCustomer",
        style: {
          backgroundColor: '#202a5a'
        }
      }, "History"), (totalWithTax === 0 || effectivelyPaid) && !hasPayments && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: {
          color: 'blue',
          fontWeight: 'bold',
          fontSize: '0.85rem'
        }
      }, "PAID"), isFullyPaid && hasPayments && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: {
          color: 'blue',
          fontWeight: 'bold',
          fontSize: '0.85rem'
        }
      }, "FULL PAID"));
    }
  }, {
    field: 'paymentStatusText',
    headerName: 'Status',
    minWidth: 120,
    flex: 1,
    renderCell: params => {
      var totalWithTax = parseFloat(params.row.totalUSD || params.row.total || 0);
      var status = params.row.status || 'UnPaid';

      // Auto-detect Paid status for zero-balance items if not explicitly set
      if (totalWithTax === 0 && status === 'UnPaid') {
        status = 'Paid';
      }
      var color = 'red';
      if (status === 'Paid') color = 'blue';else if (status === 'Partially-Paid') color = 'orange';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: {
          color,
          fontWeight: 'bold'
        }
      }, status.toUpperCase());
    }
  }, {
    field: 'itemDescriptionInfo',
    headerName: 'I-Description',
    minWidth: 120,
    flex: 1.2
  }, {
    field: 'totalFC',
    headerName: 'TotalFC',
    minWidth: 120,
    flex: 1,
    renderCell: params => {
      var _params$row$totalFC;
      return "FC".concat((_params$row$totalFC = params.row.totalFC) === null || _params$row$totalFC === void 0 ? void 0 : _params$row$totalFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, {
    field: 'total',
    headerName: 'Total',
    minWidth: 100,
    flex: 1,
    renderCell: params => {
      var total = parseFloat(params.row.totalUSD || params.row.total || 0);
      var totalPaid = (params.row.payments || []).reduce((sum, p) => sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)), 0);
      var rest = total - totalPaid;
      return "$".concat(rest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, {
    field: 'view',
    headerName: 'View',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      onClick: () => handleOpenView(params.row._id),
      disabled: PurchaseInfoV.length === 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_VisibilityOutlined__WEBPACK_IMPORTED_MODULE_60__/* ["default"] */ .A, {
      style: {
        color: '#202a5a'
      }
    }))))
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      disabled: PurchaseInfoU.length === 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .NavLink */ .k2, {
      to: "/ItemPurchaseUpdateForm/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      style: {
        color: 'gray'
      }
    })))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      onClick: () => handleOpen(params.row._id),
      disabled: PurchaseInfoD.length === 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_56__.useReactToPrint)({
    content: () => componentRef.current
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
    position: "absolute",
    open: open1,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {
    sx: {
      pr: '24px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, open1 && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Item Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_55__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_54__/* ["default"] */ .A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer, {
    variant: "permanent",
    open: open1,
    onMouseEnter: () => setOpen1(true),
    onMouseLeave: () => setOpen1(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SideMaintenance__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    disabled: ((PurchaseInfoC === null || PurchaseInfoC === void 0 ? void 0 : PurchaseInfoC.length) === 0 || 0) && (user === null || user === void 0 || (_user$data = user.data) === null || _user$data === void 0 ? void 0 : _user$data.role) !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .NavLink */ .k2, {
    to: '/ItemPurchaseViewForm',
    title: "Add Item Purchase"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .A, null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleRefreshSearch,
    className: "btnCustomer2"
  }, "Refresh Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_39__/* .DataGrid */ .zh, {
    paginationMode: "server",
    filterMode: "server",
    rowCount: totalItemCount,
    paginationModel: {
      page: page,
      pageSize: limit
    },
    onPaginationModelChange: newModel => handlePageChange(newModel.page),
    rows: itemPurchase,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__/* .GridToolbar */ .O
    },
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        quickFilterProps: {
          debounceMs: 500
        },
        quickFilterProps: {
          debounceMs: 700
        },
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    getRowClassName: params => newPurchase.includes(params.row._id) ? 'new-Purchase' : '',
    checkboxSelection: true,
    disableDensitySelector: true,
    filterModel: filterModel,
    rowSelectionModel: selectedRows,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    count: totalPage,
    page: page + 1,
    onChange: (e, value) => setPage(value - 1),
    color: "primary",
    sx: {
      position: 'relative',
      top: '-52px',
      display: 'flex',
      justifyContent: 'center',
      width: 'fit-content',
      margin: '0 auto'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    open: open,
    handleClose: handleClose,
    handleDelete: handleOpenReasonDelete,
    itemName: (_itemPurchase$find = itemPurchase.find(i => i._id === DeleteId)) !== null && _itemPurchase$find !== void 0 && _itemPurchase$find.itemPurchaseNumber ? "IP-0".concat(itemPurchase.find(i => i._id === DeleteId).itemPurchaseNumber) : "this item purchase"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    open: modalDeleteOpenLoading,
    onClose: handleDeleteCloseLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .A, {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Data successfully ", updateS ? 'Updated' : 'deleted'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleDeleteCloseLoading,
    className: "btnCustomer"
  }, "Close")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    open: openView,
    onClose: handleCloseView,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: {
        xs: '100%',
        md: 950
      },
      maxHeight: '90vh',
      overflowY: 'auto',
      '@media print': {
        width: '100%',
        height: 'auto',
        maxHeight: 'none',
        overflow: 'visible',
        boxShadow: 'none',
        border: 'none'
      }
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      mb: 1,
      position: 'relative',
      zIndex: 1000,
      '@media print': {
        display: 'none'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Print",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    onClick: handlePrint,
    style: {
      zIndex: 1000
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_59__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    onClick: handleCloseView,
    style: {
      zIndex: 1000
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  })))), itemPurchaseView !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: componentRef,
    style: {
      padding: '0px 20px 0px 20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: {
      display: 'none',
      '@media print': {
        display: 'block',
        marginBottom: '20px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_57__/* ["default"] */ .A, {
    branchId: itemPurchaseView.branchId || ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2",
    sx: {
      fontWeight: 'bold'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontSize: '13px'
    }
  }, "IP-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, itemPurchaseView.itemPurchaseNumber), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, "Date: "), "  ", dayjs__WEBPACK_IMPORTED_MODULE_47___default()(itemPurchaseView.itemPurchaseDate).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, "Supplier: "), " ", itemPurchaseView.manufacturer !== undefined ? itemPurchaseView.manufacturer : null), itemPurchaseView.manufacturerNumber !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, "REFERENCE: "), " ", itemPurchaseView.manufacturerNumber) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
  }, "Description: "), " ", itemPurchaseView.projectName !== undefined ? itemPurchaseView.projectName.name : itemPurchaseView.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: {
      height: '',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,
    sx: {
      overflowX: 'visible',
      '@media print': {
        overflow: 'visible'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    sx: {
      minWidth: 650
    },
    size: "small",
    "aria-label": "a dense table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, "Information Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, "Item Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, "Rate(USD)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, "Taux(Exchange Rate)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, "Total(USD)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, "Total(FC)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, null, itemPurchaseView.items.map((row, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, row.itemDescription !== undefined ? row.itemDescription : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, row.itemName !== undefined ? row.itemName.itemName : row.newDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, row.itemQty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, "$", row.itemRate != null ? parseFloat(row.itemRate).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) : '0.00'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, row.Taux != null ? parseFloat(row.Taux).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) : '0.00'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, "$", row.totalAmount != null ? parseFloat(row.totalAmount).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) : row.totalAmountUSD != null ? parseFloat(row.totalAmountUSD).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) : '0.00'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, itemPurchaseView.currency === 'FC' && row.fcConvertToUsdTotal != null && !isNaN(row.fcConvertToUsdTotal) ? parseFloat(row.fcConvertToUsdTotal).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) : '0.00'));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    colSpan: 2
  }, "TVA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, hasTvaValue(itemPurchaseView) ? 'Yes' : 'No'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "Tax Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "$", getTaxValue(itemPurchaseView).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    colSpan: 2
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "FC", itemPurchaseView.totalFC !== undefined && itemPurchaseView.totalFC !== null ? parseFloat(itemPurchaseView.totalFC).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "$", itemPurchaseView.total !== undefined && itemPurchaseView.total !== null ? itemPurchaseView.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "$", itemPurchaseView.totalUSD !== undefined && itemPurchaseView.totalUSD !== null ? parseFloat(itemPurchaseView.totalUSD).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    variant: "h6",
    sx: {
      fontWeight: 'normal',
      mb: 1,
      color: '#30368a'
    }
  }, "Payment History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,
    variant: "outlined",
    sx: {
      overflowX: 'visible',
      '@media print': {
        overflow: 'visible'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    sx: {
      backgroundColor: '#f5f5f5'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    sx: {
      fontWeight: 'normal'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    sx: {
      fontWeight: 'normal'
    }
  }, "Amount (USD)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    sx: {
      fontWeight: 'normal'
    }
  }, "Amount (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    sx: {
      fontWeight: 'normal'
    }
  }, "Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    sx: {
      fontWeight: 'normal'
    }
  }, "Note / Ref"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, null, (itemPurchaseView.payments || []).map((p, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    key: idx
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, dayjs__WEBPACK_IMPORTED_MODULE_47___default()(p.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, "$", parseFloat(p.amount || 0).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, "FC ", parseFloat(p.amountFC || 0).toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, p.mode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, p.note || p.reference))), (!itemPurchaseView.payments || itemPurchaseView.payments.length === 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    colSpan: 5,
    align: "center"
  }, "No payments recorded"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: {
      mt: 2,
      p: 2,
      backgroundColor: '#f9f9f9',
      borderRadius: '4px',
      border: '1px solid #ddd'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "Total Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    variant: "h6",
    sx: {
      fontWeight: 'normal'
    }
  }, "$", parseFloat(itemPurchaseView.totalUSD || itemPurchaseView.total || 0).toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "Total Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    variant: "h6",
    sx: {
      fontWeight: 'normal'
    }
  }, "$", (itemPurchaseView.payments || []).reduce((sum, p) => sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)), 0).toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "Rest Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    variant: "h6",
    sx: {
      fontWeight: 'normal'
    }
  }, "$", (parseFloat(itemPurchaseView.totalUSD || itemPurchaseView.total || 0) - (itemPurchaseView.payments || []).reduce((sum, p) => sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)), 0)).toFixed(2)))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: {
      display: 'none',
      '@media print': {
        display: 'block',
        marginTop: '20px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_PrintFooter__WEBPACK_IMPORTED_MODULE_58__/* ["default"] */ .A, {
    branchId: itemPurchaseView.branchId || ""
  }))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    onClick: handleCloseReasonDelete,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2",
    sx: {
      textAlign: 'center'
    }
  }, "Why do you want to delete IP-", relatedNumber, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleDeleteUpdate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    required: true,
    id: "reason1",
    name: "reason1",
    multiline: true,
    rows: 2,
    value: reason1,
    placeholder: "Reason",
    onChange: e => setReason1(e.target.value),
    label: "Reason",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    variant: "body2",
    sx: {
      mb: 1,
      mt: 1
    }
  }, "Type ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: 'red',
      fontWeight: 'bold'
    }
  }, "DELETE"), " to confirm final action:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    placeholder: "Type DELETE here",
    id: "confirmDeleteIP",
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    },
    onClick: e => {
      var input = document.getElementById('confirmDeleteIP');
      if (input && input.value !== 'DELETE') {
        e.preventDefault();
        alert('Please type DELETE to confirm');
      }
    }
  }, "Confirm Delete Irreversibly")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    open: openAddPayment,
    onClose: () => setOpenAddPayment(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    variant: "h6",
    sx: {
      mb: 2,
      fontWeight: 'bold'
    }
  }, "Record Payment for IP-", selectedPurchase === null || selectedPurchase === void 0 ? void 0 : selectedPurchase.itemPurchaseNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSavePayment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Amount (USD)",
    type: "number",
    value: paymentForm.amount,
    onChange: e => setPaymentForm(_objectSpread(_objectSpread({}, paymentForm), {}, {
      amount: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Amount (FC)",
    type: "number",
    value: paymentForm.amountFC,
    onChange: e => setPaymentForm(_objectSpread(_objectSpread({}, paymentForm), {}, {
      amountFC: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Rate (Taux)",
    type: "number",
    value: paymentForm.rate,
    onChange: e => setPaymentForm(_objectSpread(_objectSpread({}, paymentForm), {}, {
      rate: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: {
      p: 1,
      backgroundColor: '#f0f4ff',
      borderRadius: '4px',
      border: '1px dashed #30368a',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    variant: "body2",
    sx: {
      fontWeight: 'bold',
      color: '#30368a'
    }
  }, "Total This Payment: $", (parseFloat(paymentForm.amount || 0) + parseFloat(paymentForm.amountFC || 0) / parseFloat(paymentForm.rate || 1)).toFixed(2), " USD"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Date",
    type: "date",
    required: true,
    value: paymentForm.date,
    onChange: e => setPaymentForm(_objectSpread(_objectSpread({}, paymentForm), {}, {
      date: e.target.value
    })),
    InputLabelProps: {
      shrink: true
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, null, "Payment Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    value: paymentForm.mode,
    label: "Payment Mode",
    onChange: e => setPaymentForm(_objectSpread(_objectSpread({}, paymentForm), {}, {
      mode: e.target.value
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
    value: "Cash"
  }, "Cash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
    value: "Bank Transfer"
  }, "Bank Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
    value: "Check"
  }, "Check")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Reference / Check #",
    value: paymentForm.reference,
    onChange: e => setPaymentForm(_objectSpread(_objectSpread({}, paymentForm), {}, {
      reference: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Note",
    multiline: true,
    rows: 2,
    value: paymentForm.note,
    onChange: e => setPaymentForm(_objectSpread(_objectSpread({}, paymentForm), {}, {
      note: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btnCustomer2",
    style: {
      width: '100%'
    }
  }, "Save Payment")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    open: openPaymentHistory,
    onClose: () => setOpenPaymentHistory(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 700,
      maxHeight: '80vh',
      overflowY: 'auto'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    variant: "h6",
    sx: {
      mb: 2,
      fontWeight: 'normal'
    }
  }, "Payment History - IP-", selectedPurchase === null || selectedPurchase === void 0 ? void 0 : selectedPurchase.itemPurchaseNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    sx: {
      backgroundColor: '#f5f5f5'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    sx: {
      fontWeight: 'normal'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    sx: {
      fontWeight: 'normal'
    }
  }, "Amount (USD)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    sx: {
      fontWeight: 'normal'
    }
  }, "Amount (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    sx: {
      fontWeight: 'normal'
    }
  }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    sx: {
      fontWeight: 'normal'
    }
  }, "Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    align: "right",
    sx: {
      fontWeight: 'normal'
    }
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, null, ((selectedPurchase === null || selectedPurchase === void 0 ? void 0 : selectedPurchase.payments) || []).map(p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    key: p.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, dayjs__WEBPACK_IMPORTED_MODULE_47___default()(p.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, "$", parseFloat(p.amount || 0).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, "FC ", parseFloat(p.amountFC || 0).toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, p.rate || '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null, p.mode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    align: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    size: "small",
    onClick: () => handleDeletePayment(p.id),
    color: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    fontSize: "small"
  }))))), (!(selectedPurchase !== null && selectedPurchase !== void 0 && selectedPurchase.payments) || selectedPurchase.payments.length === 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    colSpan: 6,
    align: "center"
  }, "No payments recorded"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    sx: {
      mt: 2,
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 'normal',
      backgroundColor: '#f0f4ff',
      p: 1.5,
      borderRadius: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      fontWeight: 'normal'
    }
  }, "Total Paid: $", ((selectedPurchase === null || selectedPurchase === void 0 ? void 0 : selectedPurchase.payments) || []).reduce((sum, p) => sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)), 0).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      fontWeight: 'normal'
    }
  }, "Rest: $", (parseFloat((selectedPurchase === null || selectedPurchase === void 0 ? void 0 : selectedPurchase.totalUSD) || (selectedPurchase === null || selectedPurchase === void 0 ? void 0 : selectedPurchase.total) || 0) - ((selectedPurchase === null || selectedPurchase === void 0 ? void 0 : selectedPurchase.payments) || []).reduce((sum, p) => sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)), 0)).toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: () => setOpenPaymentHistory(false),
    className: "btnCustomer",
    style: {
      width: '100%',
      marginTop: '16px'
    }
  }, "Close"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemPurchaseViewAdmin);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 80542
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35406);
/* harmony import */ var _mui_icons_material_WarningAmber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15542);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39781);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;



var style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
  borderTop: '8px solid #d32f2f' // Red warning border
};
var ConfirmDeleteModal = _ref => {
  var open = _ref.open,
    handleClose = _ref.handleClose,
    handleDelete = _ref.handleDelete,
    itemName = _ref.itemName;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    confirmText = _useState2[0],
    setConfirmText = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isDisabled = _useState4[0],
    setIsDisabled = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (confirmText === 'DELETE') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [confirmText]);
  var onConfirm = () => {
    handleDelete();
    setConfirmText('');
    handleClose();
  };
  var onClose = () => {
    setConfirmText('');
    handleClose();
    handleClose();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    open: open,
    onClose: onClose,
    "aria-labelledby": "confirm-delete-title",
    "aria-describedby": "confirm-delete-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    sx: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    id: "confirm-delete-title",
    variant: "h5",
    component: "h2",
    sx: {
      display: 'flex',
      alignItems: 'center',
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_WarningAmber__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      mr: 1
    }
  }), " Confirm Deletion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 2,
    sx: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    onClick: onClose,
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    variant: "body1",
    sx: {
      mt: 2,
      mb: 1
    }
  }, "Are you sure you want to delete ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, itemName || 'this record'), "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    variant: "body2",
    color: "text.secondary",
    sx: {
      mb: 3
    }
  }, "This action is irreversible and may affect linked data.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    variant: "body2",
    sx: {
      mb: 1,
      fontWeight: 'medium'
    }
  }, "Please type ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, "DELETE"), " to confirm:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    variant: "outlined",
    placeholder: "Type DELETE here",
    value: confirmText,
    onChange: e => setConfirmText(e.target.value),
    autoFocus: true,
    error: confirmText !== '' && confirmText !== 'DELETE'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sx: {
      mt: 3,
      display: 'flex',
      gap: 2,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: onClose,
    variant: "outlined",
    sx: {
      color: 'gray',
      borderColor: 'gray',
      '&:hover': {
        borderColor: '#202a5a',
        color: '#202a5a'
      }
    }
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: onConfirm,
    variant: "contained",
    disabled: isDisabled,
    sx: {
      bgcolor: '#d32f2f',
      '&:hover': {
        bgcolor: '#b71c1c'
      },
      '&:disabled': {
        bgcolor: '#ef9a9a',
        color: 'white'
      }
    }
  }, "Delete Irreversibly")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmDeleteModal);
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