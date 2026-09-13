"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[7897],{

/***/ 12092
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
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Clear');

/***/ },

/***/ 53225
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
  d: "M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2m-1 18H5V9h14zm1-13H4V4h16z"
}, "0"), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M9 12h6v2H9z"
}, "1")], 'Inventory2Outlined');

/***/ },

/***/ 64745
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
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), 'Search');

/***/ },

/***/ 27305
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
  d: "M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6z"
}), 'Transform');

/***/ },

/***/ 87393
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ CardMedia_CardMedia)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(15607);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/CardMedia/cardMediaClasses.js


function getCardMediaUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiCardMedia', slot);
}
const cardMediaClasses = (0,generateUtilityClasses/* default */.A)('MuiCardMedia', ['root', 'media', 'img']);
/* harmony default export */ const CardMedia_cardMediaClasses = ((/* unused pure expression or super */ null && (cardMediaClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/CardMedia/CardMedia.js
'use client';



const _excluded = ["children", "className", "component", "image", "src", "style"];









const useUtilityClasses = ownerState => {
  const {
    classes,
    isMediaComponent,
    isImageComponent
  } = ownerState;
  const slots = {
    root: ['root', isMediaComponent && 'media', isImageComponent && 'img']
  };
  return (0,composeClasses/* default */.A)(slots, getCardMediaUtilityClass, classes);
};
const CardMediaRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiCardMedia',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      isMediaComponent,
      isImageComponent
    } = ownerState;
    return [styles.root, isMediaComponent && styles.media, isImageComponent && styles.img];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  display: 'block',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}, ownerState.isMediaComponent && {
  width: '100%'
}, ownerState.isImageComponent && {
  // ⚠️ object-fit is not supported by IE11.
  objectFit: 'cover'
}));
const MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
const IMAGE_COMPONENTS = ['picture', 'img'];
const CardMedia = /*#__PURE__*/react.forwardRef(function CardMedia(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiCardMedia'
  });
  const {
      children,
      className,
      component = 'div',
      image,
      src,
      style
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const isMediaComponent = MEDIA_COMPONENTS.indexOf(component) !== -1;
  const composedStyle = !isMediaComponent && image ? (0,esm_extends/* default */.A)({
    backgroundImage: `url("${image}")`
  }, style) : style;
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    component,
    isMediaComponent,
    isImageComponent: IMAGE_COMPONENTS.indexOf(component) !== -1
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardMediaRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    as: component,
    role: !isMediaComponent && image ? 'img' : undefined,
    ref: ref,
    style: composedStyle,
    ownerState: ownerState,
    src: isMediaComponent ? image || src : undefined
  }, other, {
    children: children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const CardMedia_CardMedia = (CardMedia);

/***/ },

/***/ 46831
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34164);
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75659);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14073);
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11848);
/* harmony import */ var _DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15607);
/* harmony import */ var _dialogTitleClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61435);
/* harmony import */ var _Dialog_DialogContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28102);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74848);
'use client';



const _excluded = ["className", "id"];










const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(slots, _dialogTitleClasses__WEBPACK_IMPORTED_MODULE_8__/* .getDialogTitleUtilityClass */ .t, classes);
};
const DialogTitleRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay)(_Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
  name: 'MuiDialogTitle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  padding: '16px 24px',
  flex: '0 0 auto'
});
const DialogTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogTitle(inProps, ref) {
  const props = (0,_DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_7__/* .useDefaultProps */ .b)({
    props: inProps,
    name: 'MuiDialogTitle'
  });
  const {
      className,
      id: idProp
    } = props,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const {
    titleId = idProp
  } = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_Dialog_DialogContext__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DialogTitleRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    component: "h2",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    variant: "h6",
    id: idProp != null ? idProp : titleId
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogTitle);
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

/***/ 97897
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68525);
/* harmony import */ var _component_SideMaintenanceMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14097);
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55746);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47767);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87393);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37636);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69279);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77037);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(46831);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(22477);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(58763);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(58331);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(14519);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(71543);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(97834);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(8451);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(99380);
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(46986);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(71510);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(32005);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(65821);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(40301);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(3100);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(95236);
/* harmony import */ var _utils_isMobile__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(2650);
/* harmony import */ var _component_MobileCardList__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(32297);
var _excluded = ["className"],
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







































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Ay)(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var style = (/* unused pure expression or super */ null && ({
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
}));
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Ay, {
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
function PointOfSale() {
  var _ref11, _selectedItem$itemSel;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .useNavigate */ .Zp)();
  var isMobile = (0,_utils_isMobile__WEBPACK_IMPORTED_MODULE_41__/* .useIsMobile */ .al)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__/* .setUser */ .gV)({
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
          var res = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_33__/* .cachedGet */ .Fe)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__/* .ENDPOINT_URL */ .m, "/grantAccess"));
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
  var customerInfoC = grantAccess.filter(row => row.moduleName === "Customer" && row.access.createM === true);
  var customerInfoV = grantAccess.filter(row => row.moduleName === "Customer" && row.access.viewM === true);
  var customerInfoU = grantAccess.filter(row => row.moduleName === "Customer" && row.access.editM === true);
  var customerInfoD = grantAccess.filter(row => row.moduleName === "Customer" && row.access.deleteM === true);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__/* .logOut */ .je)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open1 = _React$useState2[0],
    setOpen1 = _React$useState2[1];
  var toggleDrawer = () => {
    setOpen1(!open1);
  };
  var category = [{
    name: "HA"
  }, {
    name: "ELECTRICITY"
  }, {
    name: "SOLAR SYSTEM"
  }, {
    name: "IT"
  }, {
    name: "PLUMBING"
  }, {
    name: "ELECTRONIC"
  }, {
    name: "FENCE ELECTRIC"
  }, {
    name: "ACCESSORY"
  }, {
    name: "WELDING"
  }, {
    name: "GENERATOR"
  }, {
    name: "TOOLS"
  }, {
    name: "WELDING"
  }, {
    name: "CONSTRUCTION"
  }, {
    name: "OTHERS"
  }];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    item = _useState4[0],
    SetItems = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    page = _useState6[0],
    setPage = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    search = _useState8[0],
    setSearch = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    debouncedSearch = _useState0[0],
    setDebouncedSearch = _useState0[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [search]);
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    totalPages = _useState10[0],
    setTotalPages = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState12 = _slicedToArray(_useState11, 2),
    loadingData = _useState12[0],
    setLoadingData = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    rate = _useState14[0],
    setRate = _useState14[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__/* .ENDPOINT_URL */ .m, "/item");
  var fetchItem = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      try {
        var resRate = yield axios__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__/* .ENDPOINT_URL */ .m, "/rate"));
        resRate.data.data.map(row => setRate(row.rate));
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__/* .ENDPOINT_URL */ .m, "/item-shop?page=").concat(page, "&limit=60&search=").concat(encodeURIComponent(debouncedSearch)));
        setTotalPages(res.data.totalPages);
        SetItems(res.data.items.filter(row => row.typeItem === "Goods").reverse());
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    });
    return function fetchItem() {
      return _ref1.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchItem();
  }, [page, debouncedSearch]);
  var handleRefreshSearch = () => {
    fetchItem();
  };
  var handlePageChange = (e, newPage) => {
    setPage(newPage);
  };
  var handleSearchChange = e => {
    setSearch(e.target.value);
    setPage(1);
  };
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    categoryValue = _useState16[0],
    setCategoryValue = _useState16[1];
  var handleCategory = category => {
    setCategoryValue(category);
  };
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    selectedItem = _useState18[0],
    setSelectedItem = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    openModal = _useState20[0],
    setOpenModal = _useState20[1];
  var handleOpenModal = idInfo => {
    setSelectedItem(item.filter(row => row._id === idInfo)[0]);
    setOpenModal(true);
  };
  var handleCloseModal = () => {
    setOpenModal(false);
    setSelectedItem(null);
  };
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    cart = _useState22[0],
    setCart = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    openCart = _useState24[0],
    setOpenCart = _useState24[1];
  var handleAddToCart = item => {
    setCart([...cart, item]);
  };
  var handleOpenCart = () => {
    setOpenCart(true);
  };
  var handleCloseCart = () => {
    setOpenCart(false);
  };
  var handleRemoveFromCart = itemId => {
    setCart(cart.filter(item => item._id !== itemId));
  };
  var handleCheckout = () => {
    navigate('/ShopPosForm', {
      state: {
        cart
      }
    });
    setOpenCart(false);
  };
  if (isMobile) {
    return loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        position: 'relative',
        top: '120px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      sx: {
        width: '100%',
        py: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_MobileCardList__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, {
      type: "tech_store",
      data: item,
      searchPlaceholder: "Search technician catalog..."
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
    position: "absolute",
    open: open1,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
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
    }, open1 && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Store Item Display"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer, {
    variant: "permanent",
    open: open1,
    onMouseEnter: () => setOpen1(true),
    onMouseLeave: () => setOpen1(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SideMaintenanceMenu__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, null)) : (0,_utils_isMobile__WEBPACK_IMPORTED_MODULE_41__/* .isNativeMobile */ .g1)() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_MobileCardList__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, {
    type: "tech_store",
    data: item
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,
    sx: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    label: "Search",
    variant: "outlined",
    value: search,
    onChange: handleSearchChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleRefreshSearch,
    className: "btnCustomer2"
  }, "Refresh Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: '540px',
      overflow: 'hidden',
      overflowY: 'scroll',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2
  }, item === null || item === void 0 ? void 0 : item.map(row => {
    var _ref10, _row$itemSellingPrice;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
      item: true,
      xs: 4,
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      component: "img",
      image: "data:".concat(row.contentType !== undefined ? row.contentType : '', "; base64,").concat(row.data !== undefined ? row.data : ''),
      sx: {
        height: '200px',
        cursor: 'pointer'
      },
      onClick: () => handleOpenModal(row._id)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      variant: "h6",
      component: "div",
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "data-prefix": true
    }, "FC "), (_ref10 = row.itemSellingPrice * rate) === null || _ref10 === void 0 ? void 0 : _ref10.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (_row$itemSellingPrice = row.itemSellingPrice) === null || _row$itemSellingPrice === void 0 ? void 0 : _row$itemSellingPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.itemUpc.newCode + '-0' + row.itemUpc.itemNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      variant: "h6",
      component: "div",
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, row.itemName.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      variant: "body2",
      color: "text.secondary"
    }, "Brand: ", row.itemBrand.toUpperCase(), " | Dimension: ", row.itemDimension, " | weight: ", row.weight), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      variant: "body2",
      color: "text.secondary"
    }, "Description:", row.itemDescription.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px'
      }
    }, row.itemQuantity > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      variant: "body2",
      color: "text.secondary"
    }, "Stock: ", row.itemQuantity)))));
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: '100%',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    count: totalPages,
    page: page,
    onChange: (e, value) => setPage(value - 1),
    color: "primary"
  })))))))), selectedItem && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    open: openModal,
    onClose: handleCloseModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, selectedItem.itemName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    component: "img",
    image: "data:".concat(selectedItem.contentType !== undefined ? selectedItem.contentType : '', "; base64,").concat(selectedItem.data !== undefined ? selectedItem.data : ''),
    sx: {
      height: '100%',
      width: '80%',
      marginBottom: '20px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    variant: "h6"
  }, "Price: FC ", (_ref11 = selectedItem.itemSellingPrice * rate) === null || _ref11 === void 0 ? void 0 : _ref11.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (_selectedItem$itemSel = selectedItem.itemSellingPrice) === null || _selectedItem$itemSel === void 0 ? void 0 : _selectedItem$itemSel.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    variant: "body2",
    color: "text.secondary"
  }, "Brand: ", selectedItem.itemBrand.toUpperCase(), " | Dimension: ", selectedItem.itemDimension, " | weight: ", selectedItem.weight), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    variant: "body2",
    color: "text.secondary"
  }, "Description: ", selectedItem.itemDescription.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    onClick: handleCloseModal,
    color: "primary"
  }, "Close"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    open: openCart,
    onClose: handleCloseCart
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, "Shopping Cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, null, cart.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    variant: "body2",
    color: "text.secondary"
  }, "Your cart is empty.") : cart.map(item => {
    var _ref12, _item$itemSellingPric;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      key: item._id,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      variant: "body2",
      color: "text.secondary"
    }, item.itemName.toUpperCase(), " - FC ", (_ref12 = item.itemSellingPrice * rate) === null || _ref12 === void 0 ? void 0 : _ref12.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (_item$itemSellingPric = item.itemSellingPrice) === null || _item$itemSellingPric === void 0 ? void 0 : _item$itemSellingPric.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
      variant: "contained",
      color: "secondary",
      onClick: () => handleRemoveFromCart(item._id)
    }, "Remove"));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    onClick: handleCloseCart,
    color: "primary"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    onClick: handleCheckout,
    color: "primary",
    disabled: cart.length === 0
  }, "Checkout"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PointOfSale);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 32297
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ component_MobileCardList)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(47767);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(82022);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(69067);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(844);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(25239);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(11641);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(14977);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(14073);
// EXTERNAL MODULE: ./node_modules/@mui/material/Fab/Fab.js + 1 modules
var Fab = __webpack_require__(87992);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Search.js
var Search = __webpack_require__(64745);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Clear.js
var Clear = __webpack_require__(12092);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ArrowForwardIos.js
var ArrowForwardIos = __webpack_require__(61566);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(16718);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Inventory2Outlined.js
var Inventory2Outlined = __webpack_require__(53225);
// EXTERNAL MODULE: ./node_modules/@mui/material/Drawer/Drawer.js + 1 modules
var Drawer = __webpack_require__(88248);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(86990);
// EXTERNAL MODULE: ./node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(71543);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ArrowBack.js
var ArrowBack = __webpack_require__(92659);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Edit.js
var Edit = __webpack_require__(28597);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Transform.js
var Transform = __webpack_require__(27305);
;// ./src/js/component/MobileDetailSheet.js







function safeText(val) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'string' || typeof val === 'number') return String(val);
  if (typeof val === 'object') {
    if (val.itemName) return safeText(val.itemName, fallback);
    if (val.customerName) return safeText(val.customerName, fallback);
    if (val.Customer) return safeText(val.Customer, fallback);
    if (val.employeeName) return safeText(val.employeeName, fallback);
    if (val.technicianAssign) return safeText(val.technicianAssign, fallback);
    if (val.name) return safeText(val.name, fallback);
    if (val.expensesCategory) return safeText(val.expensesCategory, fallback);
    if (val.category) return safeText(val.category, fallback);
    if (val.projectName) return safeText(val.projectName, fallback);
    if (val.newCode) return safeText(val.newCode, fallback);
    if (val.code) return safeText(val.code, fallback);
    if (val.defectDescription) return safeText(val.defectDescription, fallback);
    if (val.description) return safeText(val.description, fallback);
    if (val.label) return safeText(val.label, fallback);
    if (val.title) return safeText(val.title, fallback);
    return fallback;
  }
  return String(val);
}
function formatMoney(val) {
  if (val === undefined || val === null || isNaN(val)) return '$ 0.00';
  return '$ ' + Number(val).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function getStatusChip(status, balanceDue, totalAmount) {
  var isPaid = parseFloat(balanceDue || 0) <= 0 && parseFloat(totalAmount || 0) > 0;
  var rawStat = safeText(isPaid ? 'Paid' : status || 'Draft', 'Draft');
  var stat = rawStat.toLowerCase();
  var bg = '#F1F5F9';
  var color = '#475569';
  switch (stat) {
    case 'paid':
    case 'close':
    case 'converted':
      bg = '#DCFCE7';
      color = '#15803D';
      break;
    case 'open':
    case 'sent':
    case 'active':
      bg = '#DBEAFE';
      color = '#1D4ED8';
      break;
    case 'pending':
    case 'in progress':
      bg = '#FEF3C7';
      color = '#B45309';
      break;
    case 'reschedule':
      bg = '#F3E8FF';
      color = '#7E22CE';
      break;
    case 'cancel':
    case 'overdue':
    case 'decline':
    case 'fired':
      bg = '#FEE2E2';
      color = '#B91C1C';
      break;
    case 'partially-paid':
      bg = '#FFEDD5';
      color = '#C2410C';
      break;
    default:
      bg = '#F1F5F9';
      color = '#475569';
  }
  return /*#__PURE__*/react.createElement(Chip/* default */.A, {
    label: rawStat.toUpperCase(),
    size: "small",
    sx: {
      backgroundColor: bg,
      color: color,
      fontWeight: 700,
      fontSize: '0.68rem',
      height: 24,
      borderRadius: 2
    }
  });
}
function MobileDetailSheet(_ref) {
  var open = _ref.open,
    onClose = _ref.onClose,
    record = _ref.record,
    type = _ref.type;
  var navigate = (0,dist/* useNavigate */.Zp)();
  if (!record) return null;
  try {
    var _record$customerName, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _record$totalAmount, _record$balanceDue, _record$createdAt, _record$customerName2, _record$customerName3, _record$customerName4, _record$customerName5, _record$customerName6, _record$customerName7, _record$assetControlR, _record$assetControlR2, _record$assetControlR3, _record$assetControlR4, _record$assetControlR5, _record$assetControlR6, _record$assetControlR7, _record$assetControlR8, _record$createdAt2, _record$customerName8, _record$customerName9, _record$customerName0, _record$customerName1, _ref12, _record$subTotal, _record$discount, _ref13, _record$shippingFee, _record$shippingFee2;
    var id = (record === null || record === void 0 ? void 0 : record._id) || (record === null || record === void 0 ? void 0 : record.id);

    // Safe title extraction
    var title = 'Record Detail';
    var refNum = '';
    var customerName = safeText((record === null || record === void 0 || (_record$customerName = record.customerName) === null || _record$customerName === void 0 ? void 0 : _record$customerName.customerName) || (record === null || record === void 0 ? void 0 : record.customerName) || (record === null || record === void 0 ? void 0 : record.customer) || (record === null || record === void 0 ? void 0 : record.Customer) || (record === null || record === void 0 ? void 0 : record.clientName));
    var totalAmount = Number((_ref2 = (_ref3 = (_ref4 = (_ref5 = (_ref6 = (_ref7 = (_ref8 = (_record$totalAmount = record === null || record === void 0 ? void 0 : record.totalAmount) !== null && _record$totalAmount !== void 0 ? _record$totalAmount : record === null || record === void 0 ? void 0 : record.totalInvoice) !== null && _ref8 !== void 0 ? _ref8 : record === null || record === void 0 ? void 0 : record.totalEstimate) !== null && _ref7 !== void 0 ? _ref7 : record === null || record === void 0 ? void 0 : record.total) !== null && _ref6 !== void 0 ? _ref6 : record === null || record === void 0 ? void 0 : record.amount) !== null && _ref5 !== void 0 ? _ref5 : record === null || record === void 0 ? void 0 : record.Sell) !== null && _ref4 !== void 0 ? _ref4 : record === null || record === void 0 ? void 0 : record.itemSellingPrice) !== null && _ref3 !== void 0 ? _ref3 : record === null || record === void 0 ? void 0 : record.infoSell) !== null && _ref2 !== void 0 ? _ref2 : 0);
    var balanceDue = Number((_record$balanceDue = record === null || record === void 0 ? void 0 : record.balanceDue) !== null && _record$balanceDue !== void 0 ? _record$balanceDue : 0);
    if (type === 'invoices') {
      refNum = typeof (record === null || record === void 0 ? void 0 : record.invoiceNumber) === 'number' ? "INV-".concat(String(record.invoiceNumber).padStart(6, '0')) : safeText(record === null || record === void 0 ? void 0 : record.invoiceNumber, 'INV');
      title = refNum;
    } else if (type === 'quotations' || type === 'estimates') {
      refNum = typeof (record === null || record === void 0 ? void 0 : record.estimateNumber) === 'number' ? "EST-".concat(String(record.estimateNumber).padStart(6, '0')) : safeText(record === null || record === void 0 ? void 0 : record.estimateNumber, 'EST');
      title = refNum;
    } else if (type === 'customers') {
      title = customerName || 'Customer';
    } else if (type === 'items' || type === 'tech_store') {
      title = safeText((record === null || record === void 0 ? void 0 : record.itemName) || (record === null || record === void 0 ? void 0 : record.name), 'Store Item');
    } else if (type === 'maintenance') {
      refNum = record !== null && record !== void 0 && record.serviceNumber ? String(record.serviceNumber).startsWith('M-') ? record.serviceNumber : "M-".concat(String(record.serviceNumber).padStart(6, '0')) : 'Job Card';
      title = refNum;
    } else if (type === 'maintenance_orders') {
      title = safeText((record === null || record === void 0 ? void 0 : record.serviceNumber) || (record === null || record === void 0 ? void 0 : record.orderNumber) || (record === null || record === void 0 ? void 0 : record.maintenanceNumber), 'Maintenance Order');
    } else if (type === 'payments') {
      title = "PAY-".concat(safeText((record === null || record === void 0 ? void 0 : record.paymentNumber) || (id === null || id === void 0 ? void 0 : id.substring(0, 6)) || '001'));
    } else if (type === 'expenses') {
      var _record$expenseCatego;
      title = safeText((record === null || record === void 0 || (_record$expenseCatego = record.expenseCategory) === null || _record$expenseCatego === void 0 ? void 0 : _record$expenseCatego.expensesCategory) || (record === null || record === void 0 ? void 0 : record.expenseCategory) || (record === null || record === void 0 ? void 0 : record.category), 'Daily Expense');
    } else if (type === 'projects') {
      title = safeText((record === null || record === void 0 ? void 0 : record.projectName) || (record === null || record === void 0 ? void 0 : record.project), 'Project');
    } else if (type === 'employees') {
      title = safeText((record === null || record === void 0 ? void 0 : record.employeeName) || (record === null || record === void 0 ? void 0 : record.name), 'Employee');
    } else if (type === 'suppliers') {
      title = safeText((record === null || record === void 0 ? void 0 : record.supplierName) || (record === null || record === void 0 ? void 0 : record.name), 'Supplier');
    }

    // Handle Edit Navigation
    var handleEdit = () => {
      onClose();
      if (type === 'invoices') navigate("/InvoiceFormUpdate/".concat(id));else if (type === 'quotations' || type === 'estimates') navigate("/EstimateInvoiceFormUpdate/".concat(id));else if (type === 'customers') navigate("/CustomerFormUpdate/".concat(id));else if (type === 'items') navigate("/ItemFormUpdate/".concat(id));else if (type === 'maintenance') navigate("/MaintenanceUpdateView/".concat(id));else if (type === 'maintenance_orders') navigate("/MaintenanceOrderUpdate/".concat(id));else if (type === 'payments') navigate("/PaymentInformationUpdate/".concat(id));else if (type === 'expenses') navigate("/DailyExpenseUpdate/".concat(id));else if (type === 'employees') navigate("/EmployeeUpdateView/".concat(id));else if (type === 'suppliers') navigate("/SupplierFormUpdate/".concat(id));
    };

    // Handle Convert Action (Estimates -> Invoice, Invoice -> Payment)
    var handleConvert = () => {
      onClose();
      if (type === 'quotations' || type === 'estimates') navigate("/EstimateViewConvertToInvoice/".concat(id));else if (type === 'invoices') navigate("/PaymentInformationForm/".concat(id));else if (type === 'maintenance') navigate("/EstimateInvoiceForm");
    };
    var lineItems = Array.isArray(record === null || record === void 0 ? void 0 : record.itemInfo) ? record.itemInfo : Array.isArray(record === null || record === void 0 ? void 0 : record.items) ? record.items : [];
    return /*#__PURE__*/react.createElement(Drawer/* default */.Ay, {
      anchor: "right",
      open: open,
      onClose: onClose,
      PaperProps: {
        sx: {
          width: '100%',
          maxWidth: '100vw',
          backgroundColor: '#F8FAFC',
          boxSizing: 'border-box'
        }
      }
    }, /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        backgroundColor: '#30368a',
        color: '#ffffff',
        px: 1.5,
        py: 1.2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
      }
    }, /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        minWidth: 0,
        gap: 1
      }
    }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      onClick: onClose,
      size: "small",
      sx: {
        color: '#ffffff'
      }
    }, /*#__PURE__*/react.createElement(ArrowBack/* default */.A, null)), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "subtitle1",
      sx: {
        fontWeight: 800,
        color: '#ffffff'
      },
      noWrap: true
    }, title)), /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }
    }, /*#__PURE__*/react.createElement(Button/* default */.A, {
      size: "small",
      variant: "contained",
      onClick: handleEdit,
      startIcon: /*#__PURE__*/react.createElement(Edit/* default */.A, {
        sx: {
          fontSize: '15px !important'
        }
      }),
      sx: {
        backgroundColor: 'rgba(255,255,255,0.22)',
        color: '#ffffff',
        fontSize: '0.8rem',
        fontWeight: 700,
        textTransform: 'none',
        px: 1.5,
        py: 0.5,
        borderRadius: 2,
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.35)'
        }
      }
    }, "Edit"), (type === 'quotations' || type === 'estimates' || type === 'invoices' || type === 'maintenance') && /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      size: "small",
      onClick: handleConvert,
      sx: {
        color: '#ffffff',
        backgroundColor: 'rgba(255,255,255,0.18)',
        p: 0.8,
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.3)'
        }
      }
    }, /*#__PURE__*/react.createElement(Transform/* default */.A, {
      sx: {
        fontSize: 18
      }
    })))), type === 'maintenance_orders' || type === 'maintenance' ? /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        p: 2,
        pb: 8
      }
    }, /*#__PURE__*/react.createElement(Card/* default */.A, {
      sx: {
        borderRadius: 3.5,
        p: 2.5,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        mb: 1.5
      }
    }, /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase'
      }
    }, "Service Order"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "h5",
      sx: {
        fontWeight: 800,
        color: '#1E293B',
        mt: 0.3
      }
    }, title)), getStatusChip((record === null || record === void 0 ? void 0 : record.status) || 'Open', 0, 0)), /*#__PURE__*/react.createElement(Divider/* default */.A, {
      sx: {
        my: 1.5
      }
    }), /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 1.5
      }
    }, /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#94A3B8'
      }
    }, "Service Date"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 700,
        color: '#334155'
      }
    }, safeText((record === null || record === void 0 ? void 0 : record.dateField) || (record === null || record === void 0 ? void 0 : record.serviceDate) || (record === null || record === void 0 ? void 0 : record.date) || (record === null || record === void 0 || (_record$createdAt = record.createdAt) === null || _record$createdAt === void 0 ? void 0 : _record$createdAt.substring(0, 10)), 'N/A'))), /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#94A3B8'
      }
    }, "Assigned Tech"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 700,
        color: '#334155'
      }
    }, safeText((record === null || record === void 0 ? void 0 : record.technicianAssign) || (record === null || record === void 0 ? void 0 : record.technicianName) || (record === null || record === void 0 ? void 0 : record.technician), 'Unassigned'))))), Boolean(customerName || (record === null || record === void 0 ? void 0 : record.phone) || (record === null || record === void 0 || (_record$customerName2 = record.customerName) === null || _record$customerName2 === void 0 ? void 0 : _record$customerName2.phone) || (record === null || record === void 0 ? void 0 : record.address) || (record === null || record === void 0 || (_record$customerName3 = record.customerName) === null || _record$customerName3 === void 0 ? void 0 : _record$customerName3.address)) && /*#__PURE__*/react.createElement(Card/* default */.A, {
      sx: {
        borderRadius: 3.5,
        p: 2,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase'
      }
    }, "Client / Site Details"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "subtitle2",
      sx: {
        fontWeight: 800,
        color: '#1E293B',
        mt: 0.5
      }
    }, safeText(customerName, 'N/A')), ((record === null || record === void 0 ? void 0 : record.phone) || (record === null || record === void 0 ? void 0 : record.phone1) || (record === null || record === void 0 || (_record$customerName4 = record.customerName) === null || _record$customerName4 === void 0 ? void 0 : _record$customerName4.phone) || (record === null || record === void 0 ? void 0 : record.contact)) && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        display: 'block',
        mt: 0.3
      }
    }, "Phone: ", safeText((record === null || record === void 0 ? void 0 : record.phone) || (record === null || record === void 0 ? void 0 : record.phone1) || (record === null || record === void 0 || (_record$customerName5 = record.customerName) === null || _record$customerName5 === void 0 ? void 0 : _record$customerName5.phone) || (record === null || record === void 0 ? void 0 : record.contact))), ((record === null || record === void 0 ? void 0 : record.address) || (record === null || record === void 0 || (_record$customerName6 = record.customerName) === null || _record$customerName6 === void 0 ? void 0 : _record$customerName6.address)) && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        display: 'block',
        mt: 0.2
      }
    }, "Address: ", safeText((record === null || record === void 0 ? void 0 : record.address) || (record === null || record === void 0 || (_record$customerName7 = record.customerName) === null || _record$customerName7 === void 0 ? void 0 : _record$customerName7.address)))), /*#__PURE__*/react.createElement(Card/* default */.A, {
      sx: {
        borderRadius: 3.5,
        p: 2,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase',
        mb: 1,
        display: 'block'
      }
    }, "Appliance & Defect Info"), Boolean((record === null || record === void 0 ? void 0 : record.itemDescriptionInfo) || (record === null || record === void 0 ? void 0 : record.itemName)) && /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        mb: 1
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#94A3B8'
      }
    }, "Item Description"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 700,
        color: '#1E293B'
      }
    }, safeText((record === null || record === void 0 ? void 0 : record.itemDescriptionInfo) || (record === null || record === void 0 ? void 0 : record.itemName)))), /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 1.5,
        mb: 1
      }
    }, (record === null || record === void 0 ? void 0 : record.brand) && /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#94A3B8'
      }
    }, "Brand"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 600,
        color: '#334155'
      }
    }, safeText(record.brand))), (record === null || record === void 0 ? void 0 : record.model) && /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#94A3B8'
      }
    }, "Model"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 600,
        color: '#334155'
      }
    }, safeText(record.model))), (record === null || record === void 0 ? void 0 : record.serialNo) && /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#94A3B8'
      }
    }, "Serial No"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 600,
        color: '#334155'
      }
    }, safeText(record.serialNo))), (record === null || record === void 0 ? void 0 : record.warranty) && /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#94A3B8'
      }
    }, "Warranty"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 600,
        color: '#334155'
      }
    }, safeText(record.warranty)))), Boolean((record === null || record === void 0 ? void 0 : record.defectDescription) || (record === null || record === void 0 ? void 0 : record.defect)) && /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        mt: 1,
        p: 1.5,
        backgroundColor: '#FFFBEB',
        borderRadius: 2,
        border: '1px solid #FEF3C7'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#B45309',
        fontWeight: 700,
        display: 'block'
      }
    }, "Defect Description"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        color: '#92400E',
        fontWeight: 600,
        mt: 0.3
      }
    }, safeText(record.defectDescription || record.defect)))), Boolean((record === null || record === void 0 ? void 0 : record.action) || (record === null || record === void 0 ? void 0 : record.actionTaken) || (record === null || record === void 0 ? void 0 : record.note)) && /*#__PURE__*/react.createElement(Card/* default */.A, {
      sx: {
        borderRadius: 3.5,
        p: 2,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase',
        mb: 1,
        display: 'block'
      }
    }, "Repair Details"), (record === null || record === void 0 ? void 0 : record.action) && /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        mb: 1
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#94A3B8'
      }
    }, "Action"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 700,
        color: '#1E293B'
      }
    }, safeText(record.action))), (record === null || record === void 0 ? void 0 : record.actionTaken) && /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        mb: 1
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#94A3B8'
      }
    }, "Action Taken"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 600,
        color: '#334155'
      }
    }, safeText(record.actionTaken))), (record === null || record === void 0 ? void 0 : record.note) && /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        mt: 1
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#94A3B8'
      }
    }, "Note"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        color: '#475569'
      }
    }, safeText(record.note)))), (type === 'maintenance' || type === 'maintenance_orders' || (record === null || record === void 0 ? void 0 : record.includeAssetControl) || (record === null || record === void 0 || (_record$assetControlR = record.assetControlReport) === null || _record$assetControlR === void 0 ? void 0 : _record$assetControlR.units) && record.assetControlReport.units.length > 0) && /*#__PURE__*/react.createElement(Card/* default */.A, {
      sx: {
        borderRadius: 3.5,
        p: 2,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
        border: '1.5px solid #EEF2FF'
      }
    }, /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 1.5
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#30368a',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontSize: '0.85rem'
      }
    }, "\uD83D\uDCCB Asset Control Schedule (", (record === null || record === void 0 || (_record$assetControlR2 = record.assetControlReport) === null || _record$assetControlR2 === void 0 || (_record$assetControlR2 = _record$assetControlR2.units) === null || _record$assetControlR2 === void 0 ? void 0 : _record$assetControlR2.length) || 0, ")"), (record === null || record === void 0 || (_record$assetControlR3 = record.assetControlReport) === null || _record$assetControlR3 === void 0 ? void 0 : _record$assetControlR3.subject) && /*#__PURE__*/react.createElement(Chip/* default */.A, {
      label: record.assetControlReport.subject,
      size: "small",
      sx: {
        backgroundColor: '#EEF2FF',
        color: '#30368a',
        fontWeight: 700,
        fontSize: '0.7rem'
      }
    })), ((record === null || record === void 0 || (_record$assetControlR4 = record.assetControlReport) === null || _record$assetControlR4 === void 0 ? void 0 : _record$assetControlR4.technicianName) || (record === null || record === void 0 || (_record$assetControlR5 = record.assetControlReport) === null || _record$assetControlR5 === void 0 ? void 0 : _record$assetControlR5.preparedBy)) && /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        mb: 1.5,
        p: 1.2,
        backgroundColor: '#F8FAFC',
        borderRadius: 2
      }
    }, (record === null || record === void 0 || (_record$assetControlR6 = record.assetControlReport) === null || _record$assetControlR6 === void 0 ? void 0 : _record$assetControlR6.technicianName) && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        display: 'block'
      }
    }, /*#__PURE__*/react.createElement("strong", null, "Technician:"), " ", safeText(record.assetControlReport.technicianName)), (record === null || record === void 0 || (_record$assetControlR7 = record.assetControlReport) === null || _record$assetControlR7 === void 0 ? void 0 : _record$assetControlR7.preparedBy) && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        display: 'block'
      }
    }, /*#__PURE__*/react.createElement("strong", null, "Prepared By:"), " ", safeText(record.assetControlReport.preparedBy))), record !== null && record !== void 0 && (_record$assetControlR8 = record.assetControlReport) !== null && _record$assetControlR8 !== void 0 && _record$assetControlR8.units && record.assetControlReport.units.length > 0 ? record.assetControlReport.units.map((unit, uIdx) => /*#__PURE__*/react.createElement(Box/* default */.A, {
      key: unit.idRow || uIdx,
      sx: {
        p: 1.5,
        mb: 1.2,
        backgroundColor: '#FAFAFA',
        borderRadius: 2.5,
        border: '1px solid #F1F5F9'
      }
    }, /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "subtitle2",
      sx: {
        fontWeight: 800,
        color: '#1E293B'
      }
    }, "#", uIdx + 1, " ", safeText(unit.itemType, 'EQUIPMENT'), " ", unit.brand ? "\u2022 ".concat(unit.brand) : ''), unit.modelNo && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        fontWeight: 700,
        color: '#64748B'
      }
    }, "Mod: ", unit.modelNo)), /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 1,
        mt: 0.8
      }
    }, unit.serialNo && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#475569'
      }
    }, /*#__PURE__*/react.createElement("strong", null, "S/N:"), " ", unit.serialNo), unit.location && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#475569'
      }
    }, /*#__PURE__*/react.createElement("strong", null, "Loc:"), " ", unit.location), unit.dateOfVisit && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#475569'
      }
    }, /*#__PURE__*/react.createElement("strong", null, "Visit:"), " ", unit.dateOfVisit)), /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 0.6,
        mt: 1
      }
    }, unit.deepCleaning && /*#__PURE__*/react.createElement(Chip/* default */.A, {
      label: "Deep Cleaning",
      size: "small",
      sx: {
        backgroundColor: '#DCFCE7',
        color: '#15803D',
        fontWeight: 700,
        fontSize: '0.7rem',
        height: 20
      }
    }), unit.softCleaning && /*#__PURE__*/react.createElement(Chip/* default */.A, {
      label: "Soft Cleaning",
      size: "small",
      sx: {
        backgroundColor: '#E0F2FE',
        color: '#0369A1',
        fontWeight: 700,
        fontSize: '0.7rem',
        height: 20
      }
    }), unit.correctiveMaintenance && /*#__PURE__*/react.createElement(Chip/* default */.A, {
      label: "Corrective",
      size: "small",
      sx: {
        backgroundColor: '#FEF3C7',
        color: '#B45309',
        fontWeight: 700,
        fontSize: '0.7rem',
        height: 20
      }
    }), unit.reactiveMaintenance && /*#__PURE__*/react.createElement(Chip/* default */.A, {
      label: "Reactive",
      size: "small",
      sx: {
        backgroundColor: '#F3E8FF',
        color: '#7E22CE',
        fontWeight: 700,
        fontSize: '0.7rem',
        height: 20
      }
    })), (unit.repairHistory || unit.cleaningHistory) && /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        mt: 0.8,
        pt: 0.8,
        borderTop: '1px dashed #E2E8F0'
      }
    }, unit.repairHistory && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        display: 'block'
      }
    }, /*#__PURE__*/react.createElement("strong", null, "Repair:"), " ", unit.repairHistory), unit.cleaningHistory && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        display: 'block'
      }
    }, /*#__PURE__*/react.createElement("strong", null, "Notes:"), " ", unit.cleaningHistory)))) : /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        p: 1.5,
        textAlign: 'center',
        backgroundColor: '#F8FAFC',
        borderRadius: 2
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#94a3b8',
        display: 'block',
        mb: 1
      }
    }, "No equipment units attached yet."), /*#__PURE__*/react.createElement(Button/* default */.A, {
      size: "small",
      variant: "outlined",
      onClick: () => {
        onClose();
        navigate(type === 'maintenance_orders' ? "/MaintenanceOrderUpdate/".concat(record._id) : "/MaintenanceUpdateView/".concat(record._id));
      },
      sx: {
        textTransform: 'none',
        fontSize: '0.75rem',
        borderRadius: 2
      }
    }, "+ Add Equipment Units in Edit"))), lineItems.length > 0 && /*#__PURE__*/react.createElement(Card/* default */.A, {
      sx: {
        borderRadius: 3.5,
        p: 2,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase',
        mb: 1,
        display: 'block'
      }
    }, "Parts / Items Used (", lineItems.length, ")"), lineItems.map((it, idx) => {
      var _ref9, _ref0, _it$itemQty;
      var itName = safeText((it === null || it === void 0 ? void 0 : it.itemName) || (it === null || it === void 0 ? void 0 : it.description), "Item #".concat(idx + 1));
      var itDesc = safeText((it === null || it === void 0 ? void 0 : it.itemDescription) || (it === null || it === void 0 ? void 0 : it.newDescription));
      var qty = Number((_ref9 = (_ref0 = (_it$itemQty = it === null || it === void 0 ? void 0 : it.itemQty) !== null && _it$itemQty !== void 0 ? _it$itemQty : it === null || it === void 0 ? void 0 : it.itemQuantity) !== null && _ref0 !== void 0 ? _ref0 : it === null || it === void 0 ? void 0 : it.quantity) !== null && _ref9 !== void 0 ? _ref9 : 1);
      return /*#__PURE__*/react.createElement(Box/* default */.A, {
        key: idx,
        sx: {
          py: 1.2,
          borderBottom: idx < lineItems.length - 1 ? '1px solid #F1F5F9' : 'none'
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          pr: 1,
          flex: 1
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "body2",
        sx: {
          fontWeight: 700,
          color: '#1E293B'
        }
      }, itName), itDesc && /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#64748B',
          display: 'block'
        }
      }, itDesc)), /*#__PURE__*/react.createElement(Chip/* default */.A, {
        label: "Qty: ".concat(qty),
        size: "small",
        sx: {
          backgroundColor: '#EEF2FF',
          color: '#30368a',
          fontWeight: 700,
          fontSize: '0.75rem',
          height: 24,
          borderRadius: 1.5
        }
      })));
    }))) : /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        p: 2,
        pb: 8
      }
    }, /*#__PURE__*/react.createElement(Card/* default */.A, {
      sx: {
        borderRadius: 3.5,
        p: 2.5,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase'
      }
    }, "Total Amount"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "h5",
      sx: {
        fontWeight: 800,
        color: '#1E293B',
        mt: 0.3
      }
    }, formatMoney(totalAmount)), balanceDue > 0 && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#EF4444',
        fontWeight: 700,
        display: 'block',
        mt: 0.2
      }
    }, "Balance Due: ", formatMoney(balanceDue))), getStatusChip(record === null || record === void 0 ? void 0 : record.status, balanceDue, totalAmount)), /*#__PURE__*/react.createElement(Divider/* default */.A, {
      sx: {
        my: 1.5
      }
    }), /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 1.5
      }
    }, /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#94A3B8'
      }
    }, "Issue Date"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 700,
        color: '#334155'
      }
    }, (record === null || record === void 0 ? void 0 : record.dateField) || (record === null || record === void 0 ? void 0 : record.date) || (record === null || record === void 0 ? void 0 : record.expenseDate) || (record === null || record === void 0 || (_record$createdAt2 = record.createdAt) === null || _record$createdAt2 === void 0 ? void 0 : _record$createdAt2.substring(0, 10)) || 'N/A')), /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#94A3B8'
      }
    }, "Due Date"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 700,
        color: '#334155'
      }
    }, (record === null || record === void 0 ? void 0 : record.dueDate) || 'Upon Receipt')))), Boolean(customerName || (record === null || record === void 0 ? void 0 : record.phone) || (record === null || record === void 0 ? void 0 : record.email)) && /*#__PURE__*/react.createElement(Card/* default */.A, {
      sx: {
        borderRadius: 3.5,
        p: 2,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase'
      }
    }, "Client / Contact Details"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "subtitle2",
      sx: {
        fontWeight: 800,
        color: '#1E293B',
        mt: 0.5
      }
    }, safeText(customerName, 'N/A')), ((record === null || record === void 0 ? void 0 : record.phone) || (record === null || record === void 0 ? void 0 : record.phone1) || (record === null || record === void 0 || (_record$customerName8 = record.customerName) === null || _record$customerName8 === void 0 ? void 0 : _record$customerName8.phone) || (record === null || record === void 0 ? void 0 : record.contact)) && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        display: 'block',
        mt: 0.3
      }
    }, "Phone: ", safeText((record === null || record === void 0 ? void 0 : record.phone) || (record === null || record === void 0 ? void 0 : record.phone1) || (record === null || record === void 0 || (_record$customerName9 = record.customerName) === null || _record$customerName9 === void 0 ? void 0 : _record$customerName9.phone) || (record === null || record === void 0 ? void 0 : record.contact))), ((record === null || record === void 0 ? void 0 : record.email) || (record === null || record === void 0 || (_record$customerName0 = record.customerName) === null || _record$customerName0 === void 0 ? void 0 : _record$customerName0.email)) && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        display: 'block'
      }
    }, "Email: ", safeText((record === null || record === void 0 ? void 0 : record.email) || (record === null || record === void 0 || (_record$customerName1 = record.customerName) === null || _record$customerName1 === void 0 ? void 0 : _record$customerName1.email))), (record === null || record === void 0 ? void 0 : record.address) && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        display: 'block'
      }
    }, "Address: ", safeText(record === null || record === void 0 ? void 0 : record.address))), lineItems.length > 0 && /*#__PURE__*/react.createElement(Card/* default */.A, {
      sx: {
        borderRadius: 3.5,
        p: 2,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase',
        mb: 1,
        display: 'block'
      }
    }, "Items & Services (", lineItems.length, ")"), lineItems.map((it, idx) => {
      var _ref1, _it$itemQuantity, _ref10, _ref11, _it$itemSellingPrice, _it$itemTotal;
      var itName = safeText((it === null || it === void 0 ? void 0 : it.itemName) || (it === null || it === void 0 ? void 0 : it.description), "Item #".concat(idx + 1));
      var qty = Number((_ref1 = (_it$itemQuantity = it === null || it === void 0 ? void 0 : it.itemQuantity) !== null && _it$itemQuantity !== void 0 ? _it$itemQuantity : it === null || it === void 0 ? void 0 : it.quantity) !== null && _ref1 !== void 0 ? _ref1 : 1);
      var rate = Number((_ref10 = (_ref11 = (_it$itemSellingPrice = it === null || it === void 0 ? void 0 : it.itemSellingPrice) !== null && _it$itemSellingPrice !== void 0 ? _it$itemSellingPrice : it === null || it === void 0 ? void 0 : it.rate) !== null && _ref11 !== void 0 ? _ref11 : it === null || it === void 0 ? void 0 : it.price) !== null && _ref10 !== void 0 ? _ref10 : 0);
      var itTotal = Number((_it$itemTotal = it === null || it === void 0 ? void 0 : it.itemTotal) !== null && _it$itemTotal !== void 0 ? _it$itemTotal : qty * rate);
      return /*#__PURE__*/react.createElement(Box/* default */.A, {
        key: idx,
        sx: {
          py: 1,
          borderBottom: idx < lineItems.length - 1 ? '1px solid #F1F5F9' : 'none'
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          pr: 1
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "body2",
        sx: {
          fontWeight: 700,
          color: '#1E293B'
        }
      }, itName), /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#64748B'
        }
      }, "Qty: ", qty, " \xD7 ", formatMoney(rate))), /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle2",
        sx: {
          fontWeight: 800,
          color: '#1E293B'
        }
      }, formatMoney(itTotal))));
    })), /*#__PURE__*/react.createElement(Card/* default */.A, {
      sx: {
        borderRadius: 3.5,
        p: 2,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase',
        mb: 1,
        display: 'block'
      }
    }, "Financial Breakdown"), /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        py: 0.5
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        color: '#64748B'
      }
    }, "Sub-Total"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 700,
        color: '#1E293B'
      }
    }, formatMoney((_ref12 = (_record$subTotal = record === null || record === void 0 ? void 0 : record.subTotal) !== null && _record$subTotal !== void 0 ? _record$subTotal : record === null || record === void 0 ? void 0 : record.subtotal) !== null && _ref12 !== void 0 ? _ref12 : totalAmount))), Number((_record$discount = record === null || record === void 0 ? void 0 : record.discount) !== null && _record$discount !== void 0 ? _record$discount : 0) > 0 && /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        py: 0.5
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        color: '#64748B'
      }
    }, "Discount"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 700,
        color: '#EF4444'
      }
    }, "-", formatMoney(record === null || record === void 0 ? void 0 : record.discount))), Number((_ref13 = (_record$shippingFee = record === null || record === void 0 ? void 0 : record.shippingFee) !== null && _record$shippingFee !== void 0 ? _record$shippingFee : record === null || record === void 0 ? void 0 : record.shipping) !== null && _ref13 !== void 0 ? _ref13 : 0) > 0 && /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        py: 0.5
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        color: '#64748B'
      }
    }, "Shipping"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 700,
        color: '#1E293B'
      }
    }, formatMoney((_record$shippingFee2 = record === null || record === void 0 ? void 0 : record.shippingFee) !== null && _record$shippingFee2 !== void 0 ? _record$shippingFee2 : record === null || record === void 0 ? void 0 : record.shipping))), /*#__PURE__*/react.createElement(Divider/* default */.A, {
      sx: {
        my: 1
      }
    }), /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        py: 0.5
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "subtitle2",
      sx: {
        fontWeight: 800,
        color: '#1E293B'
      }
    }, "Total"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "subtitle2",
      sx: {
        fontWeight: 800,
        color: '#30368a'
      }
    }, formatMoney(totalAmount)))), Boolean((record === null || record === void 0 ? void 0 : record.invoiceSubject) || (record === null || record === void 0 ? void 0 : record.defectDescription) || (record === null || record === void 0 ? void 0 : record.description) || (record === null || record === void 0 ? void 0 : record.note) || (record === null || record === void 0 ? void 0 : record.notes)) && /*#__PURE__*/react.createElement(Card/* default */.A, {
      sx: {
        borderRadius: 3.5,
        p: 2,
        mb: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase'
      }
    }, "Notes & Description"), (record === null || record === void 0 ? void 0 : record.invoiceSubject) && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 600,
        color: '#1E293B',
        mt: 0.5
      }
    }, "Subject: ", safeText(record.invoiceSubject)), (record === null || record === void 0 ? void 0 : record.defectDescription) && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 600,
        color: '#1E293B',
        mt: 0.5
      }
    }, "Defect: ", safeText(record.defectDescription)), (record === null || record === void 0 ? void 0 : record.description) && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "body2",
      sx: {
        fontWeight: 600,
        color: '#1E293B',
        mt: 0.5
      }
    }, safeText(record.description)), ((record === null || record === void 0 ? void 0 : record.note) || (record === null || record === void 0 ? void 0 : record.notes)) && /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "caption",
      sx: {
        color: '#64748B',
        display: 'block',
        mt: 0.5
      }
    }, safeText(record.note || record.notes)))));
  } catch (err) {
    console.error('Error rendering MobileDetailSheet:', err);
    return null;
  }
}
/* harmony default export */ const component_MobileDetailSheet = (MobileDetailSheet);
;// ./src/js/component/MobileCardList.js
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;









function MobileCardList_safeText(val) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'string' || typeof val === 'number') return String(val);
  if (typeof val === 'object') {
    if (val.itemName) return MobileCardList_safeText(val.itemName, fallback);
    if (val.customerName) return MobileCardList_safeText(val.customerName, fallback);
    if (val.Customer) return MobileCardList_safeText(val.Customer, fallback);
    if (val.employeeName) return MobileCardList_safeText(val.employeeName, fallback);
    if (val.technicianAssign) return MobileCardList_safeText(val.technicianAssign, fallback);
    if (val.name) return MobileCardList_safeText(val.name, fallback);
    if (val.expensesCategory) return MobileCardList_safeText(val.expensesCategory, fallback);
    if (val.category) return MobileCardList_safeText(val.category, fallback);
    if (val.projectName) return MobileCardList_safeText(val.projectName, fallback);
    if (val.newCode) return MobileCardList_safeText(val.newCode, fallback);
    if (val.code) return MobileCardList_safeText(val.code, fallback);
    if (val.defectDescription) return MobileCardList_safeText(val.defectDescription, fallback);
    if (val.description) return MobileCardList_safeText(val.description, fallback);
    if (val.label) return MobileCardList_safeText(val.label, fallback);
    if (val.title) return MobileCardList_safeText(val.title, fallback);
    return fallback;
  }
  return String(val);
}
function MobileCardList_formatMoney(val) {
  if (val === undefined || val === null || isNaN(val)) return '$ 0.00';
  return '$ ' + Number(val).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function MobileCardList_getStatusChip(status, balanceDue, totalAmount) {
  var isPaid = parseFloat(balanceDue || 0) <= 0 && parseFloat(totalAmount || 0) > 0;
  var rawStat = MobileCardList_safeText(isPaid ? 'Paid' : status || 'Draft', 'Draft');
  var stat = rawStat.toLowerCase();
  var bg = '#F1F5F9';
  var color = '#475569';
  switch (stat) {
    case 'paid':
    case 'close':
    case 'converted':
      bg = '#DCFCE7';
      color = '#15803D';
      break;
    case 'open':
    case 'sent':
    case 'active':
      bg = '#DBEAFE';
      color = '#1D4ED8';
      break;
    case 'pending':
    case 'in progress':
      bg = '#FEF3C7';
      color = '#B45309';
      break;
    case 'reschedule':
      bg = '#F3E8FF';
      color = '#7E22CE';
      break;
    case 'cancel':
    case 'overdue':
    case 'decline':
    case 'fired':
      bg = '#FEE2E2';
      color = '#B91C1C';
      break;
    case 'partially-paid':
      bg = '#FFEDD5';
      color = '#C2410C';
      break;
    default:
      bg = '#F1F5F9';
      color = '#475569';
  }
  return /*#__PURE__*/react.createElement(Chip/* default */.A, {
    label: rawStat.toUpperCase(),
    size: "small",
    sx: {
      backgroundColor: bg,
      color: color,
      fontWeight: 700,
      fontSize: '0.65rem',
      height: 22,
      borderRadius: 1.5
    }
  });
}
function MobileCardList(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'invoices' : _ref$type,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    _ref$searchPlaceholde = _ref.searchPlaceholder,
    searchPlaceholder = _ref$searchPlaceholde === void 0 ? 'Search records...' : _ref$searchPlaceholde;
  var navigate = (0,dist/* useNavigate */.Zp)();
  var _useState = (0,react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedRecord = _useState4[0],
    setSelectedRecord = _useState4[1];
  var safeData = Array.isArray(data) ? data : [];
  var filtered = safeData.filter(item => {
    if (!item) return false;
    if (!search.trim()) return true;
    var q = search.trim().toLowerCase();
    if (type === 'invoices') {
      var _item$customerName;
      var cust = MobileCardList_safeText(((_item$customerName = item.customerName) === null || _item$customerName === void 0 ? void 0 : _item$customerName.customerName) || item.customerName || item.customer).toLowerCase();
      var num = MobileCardList_safeText(item.invoiceNumber).toLowerCase();
      var numFmt = "inv-".concat(String(item.invoiceNumber || '').padStart(6, '0')).toLowerCase();
      var subj = MobileCardList_safeText(item.invoiceSubject).toLowerCase();
      return cust.includes(q) || num.includes(q) || numFmt.includes(q) || subj.includes(q);
    }
    if (type === 'quotations' || type === 'estimates') {
      var _item$customerName2;
      var _cust = MobileCardList_safeText(((_item$customerName2 = item.customerName) === null || _item$customerName2 === void 0 ? void 0 : _item$customerName2.customerName) || item.customerName || item.customer).toLowerCase();
      var _num = MobileCardList_safeText(item.estimateNumber).toLowerCase();
      var _numFmt = "est-".concat(String(item.estimateNumber || '').padStart(6, '0')).toLowerCase();
      return _cust.includes(q) || _num.includes(q) || _numFmt.includes(q);
    }
    if (type === 'customers') {
      var name = MobileCardList_safeText(item.customerName || item.Customer).toLowerCase();
      var phone = MobileCardList_safeText(item.phone || item.phone1 || item.contact || item.customerCompanyPhone).toLowerCase();
      var email = MobileCardList_safeText(item.email).toLowerCase();
      return name.includes(q) || phone.includes(q) || email.includes(q);
    }
    if (type === 'maintenance') {
      var _item$customerName3;
      var defect = MobileCardList_safeText(item.defectDescription || item.defect || item.itemDescriptionInfo).toLowerCase();
      var _cust2 = MobileCardList_safeText(((_item$customerName3 = item.customerName) === null || _item$customerName3 === void 0 ? void 0 : _item$customerName3.customerName) || item.customerName || item.customer).toLowerCase();
      var _num2 = MobileCardList_safeText(item.serviceNumber).toLowerCase();
      var _numFmt2 = "m-".concat(String(item.serviceNumber || '').padStart(6, '0')).toLowerCase();
      var tech = MobileCardList_safeText(item.technicianAssign || item.technicianName || item.technician).toLowerCase();
      var brand = MobileCardList_safeText(item.brand).toLowerCase();
      var model = MobileCardList_safeText(item.model).toLowerCase();
      var serial = MobileCardList_safeText(item.serialNo).toLowerCase();
      return defect.includes(q) || _cust2.includes(q) || _num2.includes(q) || _numFmt2.includes(q) || tech.includes(q) || brand.includes(q) || model.includes(q) || serial.includes(q);
    }
    if (type === 'maintenance_orders') {
      var _item$customerName4;
      var _num3 = MobileCardList_safeText(item.serviceNumber || item.orderNumber || item.maintenanceNumber).toLowerCase();
      var _numFmt3 = "m-".concat(String(item.serviceNumber || item.orderNumber || '').padStart(6, '0')).toLowerCase();
      var _tech = MobileCardList_safeText(item.technicianAssign || item.technicianName || item.technician).toLowerCase();
      var _cust3 = MobileCardList_safeText(((_item$customerName4 = item.customerName) === null || _item$customerName4 === void 0 ? void 0 : _item$customerName4.customerName) || item.customerName || item.customer).toLowerCase();
      var _defect = MobileCardList_safeText(item.defectDescription || item.itemDescriptionInfo || item.defect || item.brand).toLowerCase();
      var _brand = MobileCardList_safeText(item.brand).toLowerCase();
      var _serial = MobileCardList_safeText(item.serialNo).toLowerCase();
      return _num3.includes(q) || _numFmt3.includes(q) || _tech.includes(q) || _cust3.includes(q) || _defect.includes(q) || _brand.includes(q) || _serial.includes(q);
    }
    if (type === 'items' || type === 'tech_store') {
      var _item$itemUpc;
      var _name = MobileCardList_safeText(item.itemName || item.name).toLowerCase();
      var code = MobileCardList_safeText(item.itemCode || item.code || ((_item$itemUpc = item.itemUpc) === null || _item$itemUpc === void 0 ? void 0 : _item$itemUpc.newCode) || item.itemUpc).toLowerCase();
      return _name.includes(q) || code.includes(q);
    }
    if (type === 'payments') {
      var _item$customerName5;
      var _cust4 = MobileCardList_safeText(((_item$customerName5 = item.customerName) === null || _item$customerName5 === void 0 ? void 0 : _item$customerName5.customerName) || item.customerName || item.customer).toLowerCase();
      var _num4 = MobileCardList_safeText(item.paymentNumber).toLowerCase();
      return _cust4.includes(q) || _num4.includes(q);
    }
    if (type === 'expenses') {
      var _item$expenseCategory;
      var cat = MobileCardList_safeText(((_item$expenseCategory = item.expenseCategory) === null || _item$expenseCategory === void 0 ? void 0 : _item$expenseCategory.expensesCategory) || item.expenseCategory || item.category).toLowerCase();
      var note = MobileCardList_safeText(item.description || item.expenseDescription).toLowerCase();
      return cat.includes(q) || note.includes(q);
    }
    if (type === 'projects') {
      var _item$customerName6;
      var proj = MobileCardList_safeText(item.projectName || item.project).toLowerCase();
      var _cust5 = MobileCardList_safeText(((_item$customerName6 = item.customerName) === null || _item$customerName6 === void 0 ? void 0 : _item$customerName6.customerName) || item.customerName || item.customer).toLowerCase();
      return proj.includes(q) || _cust5.includes(q);
    }
    if (type === 'employees') {
      var emp = MobileCardList_safeText(item.employeeName || item.name).toLowerCase();
      var pos = MobileCardList_safeText(item.position || item.role || item.status).toLowerCase();
      return emp.includes(q) || pos.includes(q);
    }
    if (type === 'suppliers') {
      var sup = MobileCardList_safeText(item.supplierName || item.name).toLowerCase();
      var _phone = MobileCardList_safeText(item.phone || item.contact).toLowerCase();
      return sup.includes(q) || _phone.includes(q);
    }
    return true;
  });

  // FAB Click Navigation
  var handleFabAdd = () => {
    if (type === 'invoices') navigate('/InvoiceForm');else if (type === 'quotations' || type === 'estimates') navigate('/EstimateInvoiceForm');else if (type === 'customers') navigate('/CustomerForm');else if (type === 'items') navigate('/ItemForm');else if (type === 'maintenance') navigate('/MaintenanceFormView');else if (type === 'payments') navigate('/PaymentInformationForm');else if (type === 'expenses') navigate('/DailyExpenseForm');else if (type === 'projects') navigate('/ProjectFormView');else if (type === 'employees') navigate('/EmployeeFormView');else if (type === 'suppliers') navigate('/SupplierForm');else if (type === 'maintenance_orders') navigate('/MaintenanceOrderAdmin');
  };
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      width: '100%',
      pb: 8,
      boxSizing: 'border-box',
      position: 'relative',
      minHeight: '80vh'
    }
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: '#F8FAFC',
      pt: 0.5,
      pb: 1.5,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 1
    }
  }, /*#__PURE__*/react.createElement(TextField/* default */.A, {
    fullWidth: true,
    size: "small",
    placeholder: searchPlaceholder,
    value: search,
    onChange: e => setSearch(e.target.value),
    InputProps: {
      startAdornment: /*#__PURE__*/react.createElement(InputAdornment/* default */.A, {
        position: "start"
      }, /*#__PURE__*/react.createElement(Search/* default */.A, {
        sx: {
          color: '#30368a',
          fontSize: 22
        }
      })),
      endAdornment: search ? /*#__PURE__*/react.createElement(InputAdornment/* default */.A, {
        position: "end"
      }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
        size: "small",
        onClick: () => setSearch('')
      }, /*#__PURE__*/react.createElement(Clear/* default */.A, {
        sx: {
          fontSize: 18
        }
      }))) : null,
      sx: {
        backgroundColor: '#ffffff',
        borderRadius: 3,
        height: 44,
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        '& fieldset': {
          borderColor: '#cbd5e1'
        },
        '&:hover fieldset': {
          borderColor: '#30368a'
        },
        '&.Mui-focused fieldset': {
          borderColor: '#30368a'
        }
      }
    }
  })), filtered.length > 0 ? filtered.map((item, idx) => {
    var id = item._id || item.id || idx;

    // 1. Invoices
    if (type === 'invoices') {
      var _item$customerName7, _item$createdAt, _ref2, _ref3, _item$totalInvoice, _item$balanceDue;
      var customer = MobileCardList_safeText(((_item$customerName7 = item.customerName) === null || _item$customerName7 === void 0 ? void 0 : _item$customerName7.customerName) || item.customerName || item.customer, 'Global Gate Client');
      var invNum = typeof item.invoiceNumber === 'number' ? "INV-".concat(String(item.invoiceNumber).padStart(6, '0')) : MobileCardList_safeText(item.invoiceNumber, "INV-00".concat(idx + 1));
      var date = MobileCardList_safeText(item.dateField || item.date || ((_item$createdAt = item.createdAt) === null || _item$createdAt === void 0 ? void 0 : _item$createdAt.substring(0, 10)), '2026');
      var total = Number((_ref2 = (_ref3 = (_item$totalInvoice = item.totalInvoice) !== null && _item$totalInvoice !== void 0 ? _item$totalInvoice : item.totalAmount) !== null && _ref3 !== void 0 ? _ref3 : item.total) !== null && _ref2 !== void 0 ? _ref2 : 0);
      var balanceDue = Number((_item$balanceDue = item.balanceDue) !== null && _item$balanceDue !== void 0 ? _item$balanceDue : 0);
      return /*#__PURE__*/react.createElement(Card/* default */.A, {
        key: id,
        onClick: () => setSelectedRecord(item),
        sx: {
          borderRadius: 3.5,
          p: 2,
          mb: 1.5,
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '&:active': {
            transform: 'scale(0.99)'
          }
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          minWidth: 0,
          flex: 1,
          pr: 1.5
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle2",
        sx: {
          fontWeight: 800,
          color: '#1E293B',
          fontSize: '0.95rem'
        },
        noWrap: true
      }, customer), /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#64748B',
          display: 'block',
          mt: 0.3
        }
      }, invNum, " \u2022 ", date), /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          mt: 0.8
        }
      }, MobileCardList_getStatusChip(item.status, balanceDue, total))), /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          textAlign: 'right',
          flexShrink: 0
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle1",
        sx: {
          fontWeight: 800,
          color: '#1E293B',
          fontSize: '1rem'
        }
      }, MobileCardList_formatMoney(total)), balanceDue > 0 && /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#EF4444',
          fontWeight: 600,
          display: 'block'
        }
      }, "Due: ", MobileCardList_formatMoney(balanceDue)), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
        size: "small",
        sx: {
          p: 0,
          mt: 0.5
        }
      }, /*#__PURE__*/react.createElement(ArrowForwardIos/* default */.A, {
        sx: {
          fontSize: 12,
          color: '#CBD5E1'
        }
      }))));
    }

    // 2. Quotations / Estimates
    if (type === 'quotations' || type === 'estimates') {
      var _item$customerName8, _ref4, _item$totalEstimate;
      var _customer = MobileCardList_safeText(((_item$customerName8 = item.customerName) === null || _item$customerName8 === void 0 ? void 0 : _item$customerName8.customerName) || item.customerName || item.customer, 'Quotation Client');
      var estNum = typeof item.estimateNumber === 'number' ? "EST-".concat(String(item.estimateNumber).padStart(6, '0')) : MobileCardList_safeText(item.estimateNumber, 'EST');
      var _date = MobileCardList_safeText(item.dateField || item.date, '2026');
      var _total = Number((_ref4 = (_item$totalEstimate = item.totalEstimate) !== null && _item$totalEstimate !== void 0 ? _item$totalEstimate : item.total) !== null && _ref4 !== void 0 ? _ref4 : 0);
      return /*#__PURE__*/react.createElement(Card/* default */.A, {
        key: id,
        onClick: () => setSelectedRecord(item),
        sx: {
          borderRadius: 3.5,
          p: 2,
          mb: 1.5,
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '&:active': {
            transform: 'scale(0.99)'
          }
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          minWidth: 0,
          flex: 1,
          pr: 1.5
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle2",
        sx: {
          fontWeight: 800,
          color: '#1E293B',
          fontSize: '0.95rem'
        },
        noWrap: true
      }, _customer), /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#64748B',
          display: 'block',
          mt: 0.3
        }
      }, estNum, " \u2022 ", _date), /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          mt: 0.8
        }
      }, MobileCardList_getStatusChip(item.status || 'Draft', 0, _total))), /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          textAlign: 'right',
          flexShrink: 0
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle1",
        sx: {
          fontWeight: 800,
          color: '#1E293B',
          fontSize: '1rem'
        }
      }, MobileCardList_formatMoney(_total)), /*#__PURE__*/react.createElement(ArrowForwardIos/* default */.A, {
        sx: {
          fontSize: 12,
          color: '#CBD5E1',
          mt: 0.5
        }
      })));
    }

    // 3. Customers
    if (type === 'customers') {
      var name = MobileCardList_safeText(item.customerName || item.Customer, 'Customer');
      var phone = MobileCardList_safeText(item.phone || item.phone1 || item.contact, 'No Phone');
      var email = MobileCardList_safeText(item.email);
      var typePill = MobileCardList_safeText(item.customerType, 'Individual');
      return /*#__PURE__*/react.createElement(Card/* default */.A, {
        key: id,
        onClick: () => setSelectedRecord(item),
        sx: {
          borderRadius: 3.5,
          p: 2,
          mb: 1.5,
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '&:active': {
            transform: 'scale(0.99)'
          }
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          minWidth: 0,
          flex: 1,
          pr: 1.5
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle2",
        sx: {
          fontWeight: 800,
          color: '#1E293B',
          fontSize: '0.95rem'
        },
        noWrap: true
      }, name), /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#64748B',
          display: 'block',
          mt: 0.3
        }
      }, phone, " ", email ? "\u2022 ".concat(email) : ''), /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          mt: 0.8
        }
      }, /*#__PURE__*/react.createElement(Chip/* default */.A, {
        label: typePill.toUpperCase(),
        size: "small",
        sx: {
          height: 20,
          fontSize: '0.65rem',
          fontWeight: 700,
          backgroundColor: '#F1F5F9',
          color: '#475569'
        }
      }))), /*#__PURE__*/react.createElement(ArrowForwardIos/* default */.A, {
        sx: {
          fontSize: 14,
          color: '#CBD5E1'
        }
      }));
    }

    // 4. Items / Store & Technician Store (WITH 48x48 THUMBNAIL)
    if (type === 'items' || type === 'tech_store') {
      var _item$itemUpc2, _ref5, _ref6, _item$itemQuantity, _ref7, _ref8, _item$itemSellingPric;
      var _name2 = MobileCardList_safeText(item.itemName || item.name, 'Store Item');
      var code = MobileCardList_safeText(item.itemCode || item.code || ((_item$itemUpc2 = item.itemUpc) === null || _item$itemUpc2 === void 0 ? void 0 : _item$itemUpc2.newCode) || item.itemUpc, 'N/A');
      var qty = Number((_ref5 = (_ref6 = (_item$itemQuantity = item.itemQuantity) !== null && _item$itemQuantity !== void 0 ? _item$itemQuantity : item.balanceQty) !== null && _ref6 !== void 0 ? _ref6 : item.quantity) !== null && _ref5 !== void 0 ? _ref5 : 0);
      var sell = Number((_ref7 = (_ref8 = (_item$itemSellingPric = item.itemSellingPrice) !== null && _item$itemSellingPric !== void 0 ? _item$itemSellingPric : item.Sell) !== null && _ref8 !== void 0 ? _ref8 : item.sellPrice) !== null && _ref7 !== void 0 ? _ref7 : 0);
      var hasImg = Boolean((item === null || item === void 0 ? void 0 : item.data) && (item === null || item === void 0 ? void 0 : item.contentType));
      var imgSrc = hasImg ? "data:".concat(item.contentType, ";base64,").concat(item.data) : (item === null || item === void 0 ? void 0 : item.image) || null;
      return /*#__PURE__*/react.createElement(Card/* default */.A, {
        key: id,
        onClick: () => setSelectedRecord(item),
        sx: {
          borderRadius: 3.5,
          p: 1.8,
          mb: 1.5,
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          '&:active': {
            transform: 'scale(0.99)'
          }
        }
      }, imgSrc ? /*#__PURE__*/react.createElement(Box/* default */.A, {
        component: "img",
        src: imgSrc,
        alt: _name2,
        sx: {
          width: 48,
          height: 48,
          borderRadius: 2,
          objectFit: 'cover',
          border: '1px solid #E2E8F0',
          flexShrink: 0
        }
      }) : /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          width: 48,
          height: 48,
          borderRadius: 2,
          backgroundColor: '#EEF2FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }
      }, /*#__PURE__*/react.createElement(Inventory2Outlined/* default */.A, {
        sx: {
          fontSize: 24,
          color: '#30368a'
        }
      })), /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          minWidth: 0,
          flex: 1
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle2",
        sx: {
          fontWeight: 800,
          color: '#1E293B',
          fontSize: '0.92rem'
        },
        noWrap: true
      }, _name2), /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#64748B',
          display: 'block',
          mt: 0.2
        }
      }, "Code: ", code, " \u2022 Stock: ", qty)), /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          textAlign: 'right',
          flexShrink: 0
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle1",
        sx: {
          fontWeight: 800,
          color: '#10B981',
          fontSize: '0.95rem'
        }
      }, MobileCardList_formatMoney(sell)), /*#__PURE__*/react.createElement(ArrowForwardIos/* default */.A, {
        sx: {
          fontSize: 12,
          color: '#CBD5E1',
          mt: 0.5
        }
      })));
    }

    // 5. Maintenance / Job Cards
    if (type === 'maintenance') {
      var _item$customerName9;
      var defect = MobileCardList_safeText(item.defectDescription || item.defect || item.itemDescriptionInfo, 'Maintenance Job');
      var _customer2 = MobileCardList_safeText(((_item$customerName9 = item.customerName) === null || _item$customerName9 === void 0 ? void 0 : _item$customerName9.customerName) || item.customerName || item.customer, 'Client');
      var servNum = item.serviceNumber ? String(item.serviceNumber).startsWith('M-') ? item.serviceNumber : "M-".concat(String(item.serviceNumber).padStart(6, '0')) : "M-00".concat(idx + 1);
      var _date2 = MobileCardList_safeText(item.dateField || item.date, '2026');
      return /*#__PURE__*/react.createElement(Card/* default */.A, {
        key: id,
        onClick: () => setSelectedRecord(item),
        sx: {
          borderRadius: 3.5,
          p: 2,
          mb: 1.5,
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '&:active': {
            transform: 'scale(0.99)'
          }
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          minWidth: 0,
          flex: 1,
          pr: 1.5
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle2",
        sx: {
          fontWeight: 800,
          color: '#1E293B',
          fontSize: '0.95rem'
        },
        noWrap: true
      }, defect), /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#64748B',
          display: 'block',
          mt: 0.3
        }
      }, servNum, " \u2022 ", _customer2, " \u2022 ", _date2), /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          mt: 0.8
        }
      }, MobileCardList_getStatusChip(item.status || 'Open', 0, 0))), /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          textAlign: 'right',
          flexShrink: 0
        }
      }, /*#__PURE__*/react.createElement(ArrowForwardIos/* default */.A, {
        sx: {
          fontSize: 14,
          color: '#CBD5E1'
        }
      })));
    }

    // 6. Maintenance Orders
    if (type === 'maintenance_orders') {
      var _item$customerName0;
      var _servNum = MobileCardList_safeText(item.serviceNumber || item.orderNumber || item.maintenanceNumber, "MO-".concat(idx + 1));
      var tech = MobileCardList_safeText(item.technicianAssign || item.technicianName || item.technician, 'Unassigned');
      var _customer3 = MobileCardList_safeText(((_item$customerName0 = item.customerName) === null || _item$customerName0 === void 0 ? void 0 : _item$customerName0.customerName) || item.customerName || item.customer, '');
      var _defect2 = MobileCardList_safeText(item.defectDescription || item.itemDescriptionInfo || item.defect || item.brand, 'Service Order');
      var _date3 = MobileCardList_safeText(item.dateField || item.date || item.visit, '2026');
      return /*#__PURE__*/react.createElement(Card/* default */.A, {
        key: id,
        onClick: () => setSelectedRecord(item),
        sx: {
          borderRadius: 3.5,
          p: 2,
          mb: 1.5,
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '&:active': {
            transform: 'scale(0.99)'
          }
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          minWidth: 0,
          flex: 1,
          pr: 1.5
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle2",
        sx: {
          fontWeight: 800,
          color: '#1E293B',
          fontSize: '0.95rem'
        },
        noWrap: true
      }, _servNum), _customer3 && /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#64748B',
          fontWeight: 600
        },
        noWrap: true
      }, "\u2022 ", _customer3)), /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "body2",
        sx: {
          color: '#334155',
          fontWeight: 600,
          mt: 0.3
        },
        noWrap: true
      }, _defect2), /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#64748B',
          display: 'block',
          mt: 0.2
        }
      }, "Tech: ", tech, " \u2022 ", _date3), /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          mt: 0.8
        }
      }, MobileCardList_getStatusChip(item.status || 'Open', 0, 0))), /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          textAlign: 'right',
          flexShrink: 0
        }
      }, /*#__PURE__*/react.createElement(ArrowForwardIos/* default */.A, {
        sx: {
          fontSize: 14,
          color: '#CBD5E1'
        }
      })));
    }

    // 7. Payments
    if (type === 'payments') {
      var _item$customerName1, _ref9, _item$amount;
      var _customer4 = MobileCardList_safeText(((_item$customerName1 = item.customerName) === null || _item$customerName1 === void 0 ? void 0 : _item$customerName1.customerName) || item.customerName || item.customer, 'Client');
      var payNum = item.paymentNumber ? "PAY-".concat(item.paymentNumber) : 'Payment';
      var _date4 = MobileCardList_safeText(item.dateField || item.date, '2026');
      var amount = Number((_ref9 = (_item$amount = item.amount) !== null && _item$amount !== void 0 ? _item$amount : item.total) !== null && _ref9 !== void 0 ? _ref9 : 0);
      return /*#__PURE__*/react.createElement(Card/* default */.A, {
        key: id,
        onClick: () => setSelectedRecord(item),
        sx: {
          borderRadius: 3.5,
          p: 2,
          mb: 1.5,
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '&:active': {
            transform: 'scale(0.99)'
          }
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          minWidth: 0,
          flex: 1,
          pr: 1.5
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle2",
        sx: {
          fontWeight: 800,
          color: '#1E293B',
          fontSize: '0.95rem'
        },
        noWrap: true
      }, _customer4), /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#64748B',
          display: 'block',
          mt: 0.3
        }
      }, payNum, " \u2022 ", _date4)), /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          textAlign: 'right'
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle1",
        sx: {
          fontWeight: 800,
          color: '#10B981'
        }
      }, MobileCardList_formatMoney(amount)), /*#__PURE__*/react.createElement(ArrowForwardIos/* default */.A, {
        sx: {
          fontSize: 12,
          color: '#CBD5E1',
          mt: 0.5
        }
      })));
    }

    // 8. Daily Expenses
    if (type === 'expenses') {
      var _item$expenseCategory2, _ref0, _item$amount2;
      var cat = MobileCardList_safeText(((_item$expenseCategory2 = item.expenseCategory) === null || _item$expenseCategory2 === void 0 ? void 0 : _item$expenseCategory2.expensesCategory) || item.expenseCategory || item.category, 'Expense');
      var note = MobileCardList_safeText(item.description || item.expenseDescription, 'Daily Expense');
      var _date5 = MobileCardList_safeText(item.expenseDate || item.dateField || item.date, '2026');
      var _amount = Number((_ref0 = (_item$amount2 = item.amount) !== null && _item$amount2 !== void 0 ? _item$amount2 : item.total) !== null && _ref0 !== void 0 ? _ref0 : 0);
      return /*#__PURE__*/react.createElement(Card/* default */.A, {
        key: id,
        onClick: () => setSelectedRecord(item),
        sx: {
          borderRadius: 3.5,
          p: 2,
          mb: 1.5,
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '&:active': {
            transform: 'scale(0.99)'
          }
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          minWidth: 0,
          flex: 1,
          pr: 1.5
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle2",
        sx: {
          fontWeight: 800,
          color: '#1E293B',
          fontSize: '0.95rem'
        },
        noWrap: true
      }, cat), /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#64748B',
          display: 'block',
          mt: 0.3
        }
      }, note, " \u2022 ", _date5)), /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          textAlign: 'right'
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle1",
        sx: {
          fontWeight: 800,
          color: '#EF4444'
        }
      }, MobileCardList_formatMoney(_amount)), /*#__PURE__*/react.createElement(ArrowForwardIos/* default */.A, {
        sx: {
          fontSize: 12,
          color: '#CBD5E1',
          mt: 0.5
        }
      })));
    }

    // 9. Projects
    if (type === 'projects') {
      var _item$customerName10;
      var projName = MobileCardList_safeText(item.projectName || item.project, 'Project');
      var _customer5 = MobileCardList_safeText(((_item$customerName10 = item.customerName) === null || _item$customerName10 === void 0 ? void 0 : _item$customerName10.customerName) || item.customerName || item.customer, 'Client');
      var desc = MobileCardList_safeText(item.description);
      return /*#__PURE__*/react.createElement(Card/* default */.A, {
        key: id,
        onClick: () => setSelectedRecord(item),
        sx: {
          borderRadius: 3.5,
          p: 2,
          mb: 1.5,
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '&:active': {
            transform: 'scale(0.99)'
          }
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          minWidth: 0,
          flex: 1,
          pr: 1.5
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle2",
        sx: {
          fontWeight: 800,
          color: '#1E293B',
          fontSize: '0.95rem'
        },
        noWrap: true
      }, projName), /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#64748B',
          display: 'block',
          mt: 0.3
        }
      }, _customer5, " ", desc ? "\u2022 ".concat(desc) : '')), /*#__PURE__*/react.createElement(ArrowForwardIos/* default */.A, {
        sx: {
          fontSize: 14,
          color: '#CBD5E1'
        }
      }));
    }

    // 10. Employees
    if (type === 'employees') {
      var empName = MobileCardList_safeText(item.employeeName || item.name, 'Employee');
      var role = MobileCardList_safeText(item.position || item.role || item.status, 'Staff');
      var _phone2 = MobileCardList_safeText(item.phone);
      return /*#__PURE__*/react.createElement(Card/* default */.A, {
        key: id,
        onClick: () => setSelectedRecord(item),
        sx: {
          borderRadius: 3.5,
          p: 2,
          mb: 1.5,
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '&:active': {
            transform: 'scale(0.99)'
          }
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          minWidth: 0,
          flex: 1,
          pr: 1.5
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle2",
        sx: {
          fontWeight: 800,
          color: '#1E293B',
          fontSize: '0.95rem'
        },
        noWrap: true
      }, empName), /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#64748B',
          display: 'block',
          mt: 0.3
        }
      }, "Role: ", role, " ", _phone2 ? "\u2022 ".concat(_phone2) : '')), /*#__PURE__*/react.createElement(ArrowForwardIos/* default */.A, {
        sx: {
          fontSize: 14,
          color: '#CBD5E1'
        }
      }));
    }

    // 11. Suppliers
    if (type === 'suppliers') {
      var supName = MobileCardList_safeText(item.supplierName || item.name, 'Supplier');
      var _phone3 = MobileCardList_safeText(item.phone || item.contact);
      var _email = MobileCardList_safeText(item.email);
      return /*#__PURE__*/react.createElement(Card/* default */.A, {
        key: id,
        onClick: () => setSelectedRecord(item),
        sx: {
          borderRadius: 3.5,
          p: 2,
          mb: 1.5,
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '&:active': {
            transform: 'scale(0.99)'
          }
        }
      }, /*#__PURE__*/react.createElement(Box/* default */.A, {
        sx: {
          minWidth: 0,
          flex: 1,
          pr: 1.5
        }
      }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "subtitle2",
        sx: {
          fontWeight: 800,
          color: '#1E293B',
          fontSize: '0.95rem'
        },
        noWrap: true
      }, supName), /*#__PURE__*/react.createElement(Typography/* default */.A, {
        variant: "caption",
        sx: {
          color: '#64748B',
          display: 'block',
          mt: 0.3
        }
      }, _phone3, " ", _email ? "\u2022 ".concat(_email) : '')), /*#__PURE__*/react.createElement(ArrowForwardIos/* default */.A, {
        sx: {
          fontSize: 14,
          color: '#CBD5E1'
        }
      }));
    }
    return null;
  }) : /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      p: 4,
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "body2",
    sx: {
      color: '#94a3b8'
    }
  }, "No records found.")), /*#__PURE__*/react.createElement(Fab/* default */.A, {
    color: "primary",
    "aria-label": "add",
    onClick: handleFabAdd,
    sx: {
      position: 'fixed',
      bottom: 74,
      right: 20,
      backgroundColor: '#30368a',
      color: '#ffffff',
      boxShadow: '0 4px 14px rgba(48, 54, 138, 0.4)',
      zIndex: 1000,
      '&:hover': {
        backgroundColor: '#202a5a'
      }
    }
  }, /*#__PURE__*/react.createElement(Add/* default */.A, {
    sx: {
      fontSize: 28
    }
  })), /*#__PURE__*/react.createElement(component_MobileDetailSheet, {
    open: Boolean(selectedRecord),
    onClose: () => setSelectedRecord(null),
    record: selectedRecord,
    type: type
  }));
}
/* harmony default export */ const component_MobileCardList = (MobileCardList);

/***/ }

}]);