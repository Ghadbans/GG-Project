"use strict";
exports.id = "src_js_AdminView1_PointOfSale_js";
exports.ids = ["src_js_AdminView1_PointOfSale_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/ShoppingCart.js"
/*!**********************************************************!*\
  !*** ./node_modules/@mui/icons-material/ShoppingCart.js ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


"use client";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));
var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _default = exports["default"] = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"
}), 'ShoppingCart');

/***/ },

/***/ "./node_modules/@mui/material/CardMedia/CardMedia.js"
/*!***********************************************************!*\
  !*** ./node_modules/@mui/material/CardMedia/CardMedia.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _mui_utils_chainPropTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/utils/chainPropTypes */ "./node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js");
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/utils/composeClasses */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DefaultPropsProvider */ "./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _cardMediaClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cardMediaClasses */ "./node_modules/@mui/material/CardMedia/cardMediaClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_6__["default"])(slots, _cardMediaClasses__WEBPACK_IMPORTED_MODULE_9__.getCardMediaUtilityClass, classes);
};
const CardMediaRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])('div', {
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
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
const CardMedia = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CardMedia(inProps, ref) {
  const props = (0,_DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_7__.useDefaultProps)({
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
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);
  const isMediaComponent = MEDIA_COMPONENTS.indexOf(component) !== -1;
  const composedStyle = !isMediaComponent && image ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    backgroundImage: `url("${image}")`
  }, style) : style;
  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    component,
    isMediaComponent,
    isImageComponent: IMAGE_COMPONENTS.indexOf(component) !== -1
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(CardMediaRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
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
 true ? CardMedia.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: (0,_mui_utils_chainPropTypes__WEBPACK_IMPORTED_MODULE_5__["default"])((prop_types__WEBPACK_IMPORTED_MODULE_3___default().node), props => {
    if (!props.children && !props.image && !props.src && !props.component) {
      return new Error('MUI: Either `children`, `image`, `src` or `component` prop must be specified.');
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),
  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardMedia);

/***/ },

/***/ "./node_modules/@mui/material/CardMedia/cardMediaClasses.js"
/*!******************************************************************!*\
  !*** ./node_modules/@mui/material/CardMedia/cardMediaClasses.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getCardMediaUtilityClass: () => (/* binding */ getCardMediaUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils/generateUtilityClasses */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils/generateUtilityClass */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");


function getCardMediaUtilityClass(slot) {
  return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiCardMedia', slot);
}
const cardMediaClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiCardMedia', ['root', 'media', 'img']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardMediaClasses);

/***/ },

/***/ "./node_modules/@mui/material/DialogTitle/DialogTitle.js"
/*!***************************************************************!*\
  !*** ./node_modules/@mui/material/DialogTitle/DialogTitle.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/utils/composeClasses */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DefaultPropsProvider */ "./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js");
/* harmony import */ var _dialogTitleClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialogTitleClasses */ "./node_modules/@mui/material/DialogTitle/dialogTitleClasses.js");
/* harmony import */ var _Dialog_DialogContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Dialog/DialogContext */ "./node_modules/@mui/material/Dialog/DialogContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client';



const _excluded = ["className", "id"];










const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _dialogTitleClasses__WEBPACK_IMPORTED_MODULE_9__.getDialogTitleUtilityClass, classes);
};
const DialogTitleRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])(_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
  name: 'MuiDialogTitle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  padding: '16px 24px',
  flex: '0 0 auto'
});
const DialogTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogTitle(inProps, ref) {
  const props = (0,_DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_8__.useDefaultProps)({
    props: inProps,
    name: 'MuiDialogTitle'
  });
  const {
      className,
      id: idProp
    } = props,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const {
    titleId = idProp
  } = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_Dialog_DialogContext__WEBPACK_IMPORTED_MODULE_10__["default"]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(DialogTitleRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "h2",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    variant: "h6",
    id: idProp != null ? idProp : titleId
  }, other));
});
 true ? DialogTitle.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  /**
   * @ignore
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogTitle);

/***/ },

/***/ "./src/js/AdminView1/PointOfSale.js"
/*!******************************************!*\
  !*** ./src/js/AdminView1/PointOfSale.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _component_SideShop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/SideShop */ "./src/js/component/SideShop.js");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogActions/DialogActions.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Badge */ "./node_modules/@mui/material/Badge/Badge.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/ShoppingCart */ "./node_modules/@mui/icons-material/ShoppingCart.js");
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





































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_26__["default"], {
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
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__.setUser)({
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/grantAccess"));
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__.logOut)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
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
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/item");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchItem = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var resRate = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/rate"));
          resRate.data.data.map(row => setRate(row.rate));
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/item-shop?page=").concat(page, "&limit=60&search=").concat(encodeURIComponent(debouncedSearch)));
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
    fetchItem();
  }, [page, debouncedSearch]);
  var handleRefreshSearch = () => {
    fetchItem(page, search);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: open1,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, open1 && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "POS Display"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "inherit",
    onClick: handleOpenCart
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_28__["default"], {
    badgeContent: cart.length,
    color: "secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_42__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_41__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_40__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: open1,
    onMouseEnter: () => setOpen1(true),
    onMouseLeave: () => setOpen1(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_29__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_27__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SideShop__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_30__["default"], {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_37__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_9__["default"],
    sx: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Search",
    variant: "outlined",
    value: search,
    onChange: handleSearchChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleRefreshSearch,
    className: "btnCustomer2"
  }, "Refresh Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '540px',
      overflow: 'hidden',
      overflowY: 'scroll',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    spacing: 2
  }, item === null || item === void 0 ? void 0 : item.map(row => {
    var _ref10, _row$itemSellingPrice;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      item: true,
      xs: 4,
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      component: "img",
      image: "data:".concat(row.contentType !== undefined ? row.contentType : '', "; base64,").concat(row.data !== undefined ? row.data : ''),
      sx: {
        height: '200px',
        cursor: 'pointer'
      },
      onClick: () => handleOpenModal(row._id)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "h6",
      component: "div",
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "FC "), (_ref10 = row.itemSellingPrice * rate) === null || _ref10 === void 0 ? void 0 : _ref10.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (_row$itemSellingPrice = row.itemSellingPrice) === null || _row$itemSellingPrice === void 0 ? void 0 : _row$itemSellingPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.itemUpc.newCode + '-0' + row.itemUpc.itemNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "h6",
      component: "div",
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.itemName.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "body2",
      color: "text.secondary"
    }, "Brand: ", row.itemBrand.toUpperCase(), " | Dimension: ", row.itemDimension, " | weight: ", row.weight), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "body2",
      color: "text.secondary"
    }, "Description:", row.itemDescription.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px'
      }
    }, row.itemQuantity > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      variant: "contained",
      color: "primary",
      onClick: () => handleAddToCart(row)
    }, "Add to Cart") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "body2",
      color: "text.secondary"
    }, "Stock: ", row.itemQuantity)))));
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    count: totalPages,
    page: page,
    onChange: handlePageChange,
    color: "primary"
  })))))))), selectedItem && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    open: openModal,
    onClose: handleCloseModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, selectedItem.itemName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "img",
    image: "data:".concat(selectedItem.contentType !== undefined ? selectedItem.contentType : '', "; base64,").concat(selectedItem.data !== undefined ? selectedItem.data : ''),
    sx: {
      height: '100%',
      width: '80%',
      marginBottom: '20px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6"
  }, "Price: FC ", (_ref11 = selectedItem.itemSellingPrice * rate) === null || _ref11 === void 0 ? void 0 : _ref11.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (_selectedItem$itemSel = selectedItem.itemSellingPrice) === null || _selectedItem$itemSel === void 0 ? void 0 : _selectedItem$itemSel.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "Brand: ", selectedItem.itemBrand.toUpperCase(), " | Dimension: ", selectedItem.itemDimension, " | weight: ", selectedItem.weight), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "Description: ", selectedItem.itemDescription.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: handleCloseModal,
    color: "primary"
  }, "Close"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    open: openCart,
    onClose: handleCloseCart
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, "Shopping Cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, cart.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "Your cart is empty.") : cart.map(item => {
    var _ref12, _item$itemSellingPric;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: item._id,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "body2",
      color: "text.secondary"
    }, item.itemName.toUpperCase(), " - FC ", (_ref12 = item.itemSellingPrice * rate) === null || _ref12 === void 0 ? void 0 : _ref12.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (_item$itemSellingPric = item.itemSellingPrice) === null || _item$itemSellingPric === void 0 ? void 0 : _item$itemSellingPric.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      variant: "contained",
      color: "secondary",
      onClick: () => handleRemoveFromCart(item._id)
    }, "Remove"));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: handleCloseCart,
    color: "primary"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: handleCheckout,
    color: "primary",
    disabled: cart.length === 0
  }, "Checkout"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PointOfSale);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUG9pbnRPZlNhbGVfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDs7QUFFb0c7QUFDMUM7QUFDMUQ7QUFDK0I7QUFDSTtBQUNYO0FBQytCO0FBQ0E7QUFDRztBQUNwQjtBQUN3QjtBQUNkO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxRUFBYyxRQUFRLHVFQUF3QjtBQUN2RDtBQUNBLHNCQUFzQiwwREFBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQyxLQUFLLDhFQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsK0JBQStCLDZDQUFnQjtBQUMvQyxnQkFBZ0Isc0VBQWU7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixZQUFZLG1HQUE2QjtBQUN6QztBQUNBLHFEQUFxRCw4RUFBUTtBQUM3RCw2QkFBNkIsTUFBTTtBQUNuQyxHQUFHO0FBQ0gscUJBQXFCLDhFQUFRLEdBQUc7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0JBQXNCLHVEQUFJLGdC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LENBQUM7QUFFVjtBQUVBLGlFQUFlbEosV0FBVyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL1Nob3BwaW5nQ2FydC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhL0NhcmRNZWRpYS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhL2NhcmRNZWRpYUNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL0RpYWxvZ1RpdGxlL0RpYWxvZ1RpdGxlLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9Qb2ludE9mU2FsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNNyAxOGMtMS4xIDAtMS45OS45LTEuOTkgMlM1LjkgMjIgNyAyMnMyLS45IDItMi0uOS0yLTItMk0xIDJ2MmgybDMuNiA3LjU5LTEuMzUgMi40NWMtLjE2LjI4LS4yNS42MS0uMjUuOTYgMCAxLjEuOSAyIDIgMmgxMnYtMkg3LjQyYy0uMTQgMC0uMjUtLjExLS4yNS0uMjVsLjAzLS4xMi45LTEuNjNoNy40NWMuNzUgMCAxLjQxLS40MSAxLjc1LTEuMDNsMy41OC02LjQ5Yy4wOC0uMTQuMTItLjMxLjEyLS40OCAwLS41NS0uNDUtMS0xLTFINS4yMWwtLjk0LTJ6bTE2IDE2Yy0xLjEgMC0xLjk5LjktMS45OSAycy44OSAyIDEuOTkgMiAyLS45IDItMi0uOS0yLTItMlwiXG59KSwgJ1Nob3BwaW5nQ2FydCcpOyIsIid1c2UgY2xpZW50JztcblxuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmNvbnN0IF9leGNsdWRlZCA9IFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwiaW1hZ2VcIiwgXCJzcmNcIiwgXCJzdHlsZVwiXTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBjaGFpblByb3BUeXBlcyBmcm9tICdAbXVpL3V0aWxzL2NoYWluUHJvcFR5cGVzJztcbmltcG9ydCBjb21wb3NlQ2xhc3NlcyBmcm9tICdAbXVpL3V0aWxzL2NvbXBvc2VDbGFzc2VzJztcbmltcG9ydCB7IHVzZURlZmF1bHRQcm9wcyB9IGZyb20gJy4uL0RlZmF1bHRQcm9wc1Byb3ZpZGVyJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVzL3N0eWxlZCc7XG5pbXBvcnQgeyBnZXRDYXJkTWVkaWFVdGlsaXR5Q2xhc3MgfSBmcm9tICcuL2NhcmRNZWRpYUNsYXNzZXMnO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmNvbnN0IHVzZVV0aWxpdHlDbGFzc2VzID0gb3duZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc2VzLFxuICAgIGlzTWVkaWFDb21wb25lbnQsXG4gICAgaXNJbWFnZUNvbXBvbmVudFxuICB9ID0gb3duZXJTdGF0ZTtcbiAgY29uc3Qgc2xvdHMgPSB7XG4gICAgcm9vdDogWydyb290JywgaXNNZWRpYUNvbXBvbmVudCAmJiAnbWVkaWEnLCBpc0ltYWdlQ29tcG9uZW50ICYmICdpbWcnXVxuICB9O1xuICByZXR1cm4gY29tcG9zZUNsYXNzZXMoc2xvdHMsIGdldENhcmRNZWRpYVV0aWxpdHlDbGFzcywgY2xhc3Nlcyk7XG59O1xuY29uc3QgQ2FyZE1lZGlhUm9vdCA9IHN0eWxlZCgnZGl2Jywge1xuICBuYW1lOiAnTXVpQ2FyZE1lZGlhJyxcbiAgc2xvdDogJ1Jvb3QnLFxuICBvdmVycmlkZXNSZXNvbHZlcjogKHByb3BzLCBzdHlsZXMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvd25lclN0YXRlXG4gICAgfSA9IHByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGlzTWVkaWFDb21wb25lbnQsXG4gICAgICBpc0ltYWdlQ29tcG9uZW50XG4gICAgfSA9IG93bmVyU3RhdGU7XG4gICAgcmV0dXJuIFtzdHlsZXMucm9vdCwgaXNNZWRpYUNvbXBvbmVudCAmJiBzdHlsZXMubWVkaWEsIGlzSW1hZ2VDb21wb25lbnQgJiYgc3R5bGVzLmltZ107XG4gIH1cbn0pKCh7XG4gIG93bmVyU3RhdGVcbn0pID0+IF9leHRlbmRzKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInXG59LCBvd25lclN0YXRlLmlzTWVkaWFDb21wb25lbnQgJiYge1xuICB3aWR0aDogJzEwMCUnXG59LCBvd25lclN0YXRlLmlzSW1hZ2VDb21wb25lbnQgJiYge1xuICAvLyDimqDvuI8gb2JqZWN0LWZpdCBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFMTEuXG4gIG9iamVjdEZpdDogJ2NvdmVyJ1xufSkpO1xuY29uc3QgTUVESUFfQ09NUE9ORU5UUyA9IFsndmlkZW8nLCAnYXVkaW8nLCAncGljdHVyZScsICdpZnJhbWUnLCAnaW1nJ107XG5jb25zdCBJTUFHRV9DT01QT05FTlRTID0gWydwaWN0dXJlJywgJ2ltZyddO1xuY29uc3QgQ2FyZE1lZGlhID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQ2FyZE1lZGlhKGluUHJvcHMsIHJlZikge1xuICBjb25zdCBwcm9wcyA9IHVzZURlZmF1bHRQcm9wcyh7XG4gICAgcHJvcHM6IGluUHJvcHMsXG4gICAgbmFtZTogJ011aUNhcmRNZWRpYSdcbiAgfSk7XG4gIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29tcG9uZW50ID0gJ2RpdicsXG4gICAgICBpbWFnZSxcbiAgICAgIHNyYyxcbiAgICAgIHN0eWxlXG4gICAgfSA9IHByb3BzLFxuICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCk7XG4gIGNvbnN0IGlzTWVkaWFDb21wb25lbnQgPSBNRURJQV9DT01QT05FTlRTLmluZGV4T2YoY29tcG9uZW50KSAhPT0gLTE7XG4gIGNvbnN0IGNvbXBvc2VkU3R5bGUgPSAhaXNNZWRpYUNvbXBvbmVudCAmJiBpbWFnZSA/IF9leHRlbmRzKHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2ltYWdlfVwiKWBcbiAgfSwgc3R5bGUpIDogc3R5bGU7XG4gIGNvbnN0IG93bmVyU3RhdGUgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBjb21wb25lbnQsXG4gICAgaXNNZWRpYUNvbXBvbmVudCxcbiAgICBpc0ltYWdlQ29tcG9uZW50OiBJTUFHRV9DT01QT05FTlRTLmluZGV4T2YoY29tcG9uZW50KSAhPT0gLTFcbiAgfSk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VVdGlsaXR5Q2xhc3Nlcyhvd25lclN0YXRlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KENhcmRNZWRpYVJvb3QsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgIGFzOiBjb21wb25lbnQsXG4gICAgcm9sZTogIWlzTWVkaWFDb21wb25lbnQgJiYgaW1hZ2UgPyAnaW1nJyA6IHVuZGVmaW5lZCxcbiAgICByZWY6IHJlZixcbiAgICBzdHlsZTogY29tcG9zZWRTdHlsZSxcbiAgICBvd25lclN0YXRlOiBvd25lclN0YXRlLFxuICAgIHNyYzogaXNNZWRpYUNvbXBvbmVudCA/IGltYWdlIHx8IHNyYyA6IHVuZGVmaW5lZFxuICB9LCBvdGhlciwge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9KSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENhcmRNZWRpYS5wcm9wVHlwZXMgLyogcmVtb3ZlLXByb3B0eXBlcyAqLyA9IHtcbiAgLy8g4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAIFdhcm5pbmcg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4gIC8vIOKUgiBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMuIOKUglxuICAvLyDilIIgICAgVG8gdXBkYXRlIHRoZW0sIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIGBwbnBtIHByb3B0eXBlc2AuICAgICDilIJcbiAgLy8g4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5ub2RlLCBwcm9wcyA9PiB7XG4gICAgaWYgKCFwcm9wcy5jaGlsZHJlbiAmJiAhcHJvcHMuaW1hZ2UgJiYgIXByb3BzLnNyYyAmJiAhcHJvcHMuY29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdNVUk6IEVpdGhlciBgY2hpbGRyZW5gLCBgaW1hZ2VgLCBgc3JjYCBvciBgY29tcG9uZW50YCBwcm9wIG11c3QgYmUgc3BlY2lmaWVkLicpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSksXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gIC8qKlxuICAgKiBJbWFnZSB0byBiZSBkaXNwbGF5ZWQgYXMgYSBiYWNrZ3JvdW5kIGltYWdlLlxuICAgKiBFaXRoZXIgYGltYWdlYCBvciBgc3JjYCBwcm9wIG11c3QgYmUgc3BlY2lmaWVkLlxuICAgKiBOb3RlIHRoYXQgY2FsbGVyIG11c3Qgc3BlY2lmeSBoZWlnaHQgb3RoZXJ3aXNlIHRoZSBpbWFnZSB3aWxsIG5vdCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBBbiBhbGlhcyBmb3IgYGltYWdlYCBwcm9wZXJ0eS5cbiAgICogQXZhaWxhYmxlIG9ubHkgd2l0aCBtZWRpYSBjb21wb25lbnRzLlxuICAgKiBNZWRpYSBjb21wb25lbnRzOiBgdmlkZW9gLCBgYXVkaW9gLCBgcGljdHVyZWAsIGBpZnJhbWVgLCBgaW1nYC5cbiAgICovXG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogVGhlIHN5c3RlbSBwcm9wIHRoYXQgYWxsb3dzIGRlZmluaW5nIHN5c3RlbSBvdmVycmlkZXMgYXMgd2VsbCBhcyBhZGRpdGlvbmFsIENTUyBzdHlsZXMuXG4gICAqL1xuICBzeDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5ib29sXSkpLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZE1lZGlhOyIsImltcG9ydCBnZW5lcmF0ZVV0aWxpdHlDbGFzc2VzIGZyb20gJ0BtdWkvdXRpbHMvZ2VuZXJhdGVVdGlsaXR5Q2xhc3Nlcyc7XG5pbXBvcnQgZ2VuZXJhdGVVdGlsaXR5Q2xhc3MgZnJvbSAnQG11aS91dGlscy9nZW5lcmF0ZVV0aWxpdHlDbGFzcyc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZE1lZGlhVXRpbGl0eUNsYXNzKHNsb3QpIHtcbiAgcmV0dXJuIGdlbmVyYXRlVXRpbGl0eUNsYXNzKCdNdWlDYXJkTWVkaWEnLCBzbG90KTtcbn1cbmNvbnN0IGNhcmRNZWRpYUNsYXNzZXMgPSBnZW5lcmF0ZVV0aWxpdHlDbGFzc2VzKCdNdWlDYXJkTWVkaWEnLCBbJ3Jvb3QnLCAnbWVkaWEnLCAnaW1nJ10pO1xuZXhwb3J0IGRlZmF1bHQgY2FyZE1lZGlhQ2xhc3NlczsiLCIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5jb25zdCBfZXhjbHVkZWQgPSBbXCJjbGFzc05hbWVcIiwgXCJpZFwiXTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBjb21wb3NlQ2xhc3NlcyBmcm9tICdAbXVpL3V0aWxzL2NvbXBvc2VDbGFzc2VzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL1R5cG9ncmFwaHknO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZXMvc3R5bGVkJztcbmltcG9ydCB7IHVzZURlZmF1bHRQcm9wcyB9IGZyb20gJy4uL0RlZmF1bHRQcm9wc1Byb3ZpZGVyJztcbmltcG9ydCB7IGdldERpYWxvZ1RpdGxlVXRpbGl0eUNsYXNzIH0gZnJvbSAnLi9kaWFsb2dUaXRsZUNsYXNzZXMnO1xuaW1wb3J0IERpYWxvZ0NvbnRleHQgZnJvbSAnLi4vRGlhbG9nL0RpYWxvZ0NvbnRleHQnO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmNvbnN0IHVzZVV0aWxpdHlDbGFzc2VzID0gb3duZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc2VzXG4gIH0gPSBvd25lclN0YXRlO1xuICBjb25zdCBzbG90cyA9IHtcbiAgICByb290OiBbJ3Jvb3QnXVxuICB9O1xuICByZXR1cm4gY29tcG9zZUNsYXNzZXMoc2xvdHMsIGdldERpYWxvZ1RpdGxlVXRpbGl0eUNsYXNzLCBjbGFzc2VzKTtcbn07XG5jb25zdCBEaWFsb2dUaXRsZVJvb3QgPSBzdHlsZWQoVHlwb2dyYXBoeSwge1xuICBuYW1lOiAnTXVpRGlhbG9nVGl0bGUnLFxuICBzbG90OiAnUm9vdCcsXG4gIG92ZXJyaWRlc1Jlc29sdmVyOiAocHJvcHMsIHN0eWxlcykgPT4gc3R5bGVzLnJvb3Rcbn0pKHtcbiAgcGFkZGluZzogJzE2cHggMjRweCcsXG4gIGZsZXg6ICcwIDAgYXV0bydcbn0pO1xuY29uc3QgRGlhbG9nVGl0bGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBEaWFsb2dUaXRsZShpblByb3BzLCByZWYpIHtcbiAgY29uc3QgcHJvcHMgPSB1c2VEZWZhdWx0UHJvcHMoe1xuICAgIHByb3BzOiBpblByb3BzLFxuICAgIG5hbWU6ICdNdWlEaWFsb2dUaXRsZSdcbiAgfSk7XG4gIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGlkOiBpZFByb3BcbiAgICB9ID0gcHJvcHMsXG4gICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkKTtcbiAgY29uc3Qgb3duZXJTdGF0ZSA9IHByb3BzO1xuICBjb25zdCBjbGFzc2VzID0gdXNlVXRpbGl0eUNsYXNzZXMob3duZXJTdGF0ZSk7XG4gIGNvbnN0IHtcbiAgICB0aXRsZUlkID0gaWRQcm9wXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KERpYWxvZ0NvbnRleHQpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goRGlhbG9nVGl0bGVSb290LCBfZXh0ZW5kcyh7XG4gICAgY29tcG9uZW50OiBcImgyXCIsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICBvd25lclN0YXRlOiBvd25lclN0YXRlLFxuICAgIHJlZjogcmVmLFxuICAgIHZhcmlhbnQ6IFwiaDZcIixcbiAgICBpZDogaWRQcm9wICE9IG51bGwgPyBpZFByb3AgOiB0aXRsZUlkXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IERpYWxvZ1RpdGxlLnByb3BUeXBlcyAvKiByZW1vdmUtcHJvcHR5cGVzICovID0ge1xuICAvLyDilIzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgV2FybmluZyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJBcbiAgLy8g4pSCIFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucy4g4pSCXG4gIC8vIOKUgiAgICBUbyB1cGRhdGUgdGhlbSwgZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gYHBucG0gcHJvcHR5cGVzYC4gICAgIOKUglxuICAvLyDilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJhcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgc3lzdGVtIHByb3AgdGhhdCBhbGxvd3MgZGVmaW5pbmcgc3lzdGVtIG92ZXJyaWRlcyBhcyB3ZWxsIGFzIGFkZGl0aW9uYWwgQ1NTIHN0eWxlcy5cbiAgICovXG4gIHN4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmJvb2xdKSksIFByb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCBEaWFsb2dUaXRsZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL3ZpZXcuY3NzJztcclxuaW1wb3J0IFNpZGVTaG9wIGZyb20gJy4uL2NvbXBvbmVudC9TaWRlU2hvcCc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0ICcuL1BhZ2VWaWV3L0NoYXJ0dmlldy5jc3MnXHJcbmltcG9ydCBWaXNpYmlsaXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHknO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0JztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBqc29uLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBUYWJsZSwgTW9kYWwsIEljb25CdXR0b24sIHN0eWxlZCwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlSGVhZCwgVGFibGVSb3csIENoZWNrYm94LCBUYWJsZUNvbnRhaW5lciwgUGFwZXIsIFR5cG9ncmFwaHksIEJveCwgQXV0b2NvbXBsZXRlLCBUZXh0RmllbGQsIEJhY2tkcm9wLCBHcmlkLCBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZE1lZGlhLCBQYWdpbmF0aW9uLCBEaWFsb2csIERpYWxvZ1RpdGxlLCBEaWFsb2dDb250ZW50LCBEaWFsb2dBY3Rpb25zLCBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXInO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBDbG9zZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBBZGQsIE1haWxPdXRsaW5lIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vaW1nL25vLWRhdGEucG5nJztcclxuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRUb29sYmFyIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcbmltcG9ydCBTaG9wcGluZ0NhcnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0JztcclxuXHJcbmNvbnN0IERlbGV0ZVRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBFZGl0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gUG9pbnRPZlNhbGUoKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlLCBpZDogcmVzLmRhdGEuZGF0YS5faWQgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgW2dyYW50QWNjZXNzLCBzZXRHcmFudEFjY2Vzc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dyYW50QWNjZXNzYCk7XHJcbiAgICAgICAgcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cudXNlcklEID09PSB1c2VyLmRhdGEuaWQpXHJcbiAgICAgICAgICAubWFwKChyb3cpID0+IHNldEdyYW50QWNjZXNzKHJvdy5tb2R1bGVzKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hOdW1iZXIoKVxyXG4gIH0sIFt1c2VyXSlcclxuICBjb25zdCBjdXN0b21lckluZm9DID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkN1c3RvbWVyXCIgJiYgcm93LmFjY2Vzcy5jcmVhdGVNID09PSB0cnVlKTtcclxuICBjb25zdCBjdXN0b21lckluZm9WID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkN1c3RvbWVyXCIgJiYgcm93LmFjY2Vzcy52aWV3TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgY3VzdG9tZXJJbmZvVSA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJDdXN0b21lclwiICYmIHJvdy5hY2Nlc3MuZWRpdE0gPT09IHRydWUpO1xyXG4gIGNvbnN0IGN1c3RvbWVySW5mb0QgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiQ3VzdG9tZXJcIiAmJiByb3cuYWNjZXNzLmRlbGV0ZU0gPT09IHRydWUpO1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtvcGVuMSwgc2V0T3BlbjFdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbjEoIW9wZW4xKTtcclxuICB9O1xyXG4gIGNvbnN0IGNhdGVnb3J5ID0gW1xyXG4gICAgeyBuYW1lOiBcIkhBXCIgfSxcclxuICAgIHsgbmFtZTogXCJFTEVDVFJJQ0lUWVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU09MQVIgU1lTVEVNXCIgfSxcclxuICAgIHsgbmFtZTogXCJJVFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUExVTUJJTkdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVMRUNUUk9OSUNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZFTkNFIEVMRUNUUklDXCIgfSxcclxuICAgIHsgbmFtZTogXCJBQ0NFU1NPUllcIiB9LFxyXG4gICAgeyBuYW1lOiBcIldFTERJTkdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdFTkVSQVRPUlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVE9PTFNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIldFTERJTkdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNPTlNUUlVDVElPTlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiT1RIRVJTXCIgfSxcclxuICBdXHJcbiAgY29uc3QgW2l0ZW0sIFNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkZWJvdW5jZWRTZWFyY2gsIHNldERlYm91bmNlZFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldERlYm91bmNlZFNlYXJjaChzZWFyY2gpO1xyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQoaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gIH0sIFtzZWFyY2hdKTtcclxuICBjb25zdCBbdG90YWxQYWdlcywgc2V0VG90YWxQYWdlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBhcGlVcmwgPSBgJHtFTkRQT0lOVF9VUkx9L2l0ZW1gO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hJdGVtID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc1JhdGUgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9yYXRlYClcclxuICAgICAgICByZXNSYXRlLmRhdGEuZGF0YS5tYXAoKHJvdykgPT4gc2V0UmF0ZShyb3cucmF0ZSkpXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbS1zaG9wP3BhZ2U9JHtwYWdlfSZsaW1pdD02MCZzZWFyY2g9JHtlbmNvZGVVUklDb21wb25lbnQoZGVib3VuY2VkU2VhcmNoKX1gKVxyXG4gICAgICAgIHNldFRvdGFsUGFnZXMocmVzLmRhdGEudG90YWxQYWdlcylcclxuICAgICAgICBTZXRJdGVtcyhyZXMuZGF0YS5pdGVtcy5maWx0ZXIoKHJvdykgPT4gcm93LnR5cGVJdGVtID09PSBcIkdvb2RzXCIpLnJldmVyc2UoKSlcclxuICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hJdGVtKClcclxuICB9LCBbcGFnZSwgZGVib3VuY2VkU2VhcmNoXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVmcmVzaFNlYXJjaCA9ICgpID0+IHtcclxuICAgIGZldGNoSXRlbShwYWdlLCBzZWFyY2gpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAoZSwgbmV3UGFnZSkgPT4ge1xyXG4gICAgc2V0UGFnZShuZXdQYWdlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRQYWdlKDEpXHJcbiAgfVxyXG4gIGNvbnN0IFtjYXRlZ29yeVZhbHVlLCBzZXRDYXRlZ29yeVZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgIHNldENhdGVnb3J5VmFsdWUoY2F0ZWdvcnkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbc2VsZWN0ZWRJdGVtLCBzZXRTZWxlY3RlZEl0ZW1dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk1vZGFsID0gKGlkSW5mbykgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRJdGVtKGl0ZW0uZmlsdGVyKChyb3cpID0+IHJvdy5faWQgPT09IGlkSW5mbylbMF0pO1xyXG4gICAgc2V0T3Blbk1vZGFsKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgc2V0U2VsZWN0ZWRJdGVtKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3BlbkNhcnQsIHNldE9wZW5DYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVBZGRUb0NhcnQgPSAoaXRlbSkgPT4ge1xyXG4gICAgc2V0Q2FydChbLi4uY2FydCwgaXRlbV0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5DYXJ0ID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkNhcnQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VDYXJ0ID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkNhcnQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZyb21DYXJ0ID0gKGl0ZW1JZCkgPT4ge1xyXG4gICAgc2V0Q2FydChjYXJ0LmZpbHRlcihpdGVtID0+IGl0ZW0uX2lkICE9PSBpdGVtSWQpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGVja291dCA9ICgpID0+IHtcclxuICAgIG5hdmlnYXRlKCcvU2hvcFBvc0Zvcm0nLCB7IHN0YXRlOiB7IGNhcnQgfSB9KTtcclxuICAgIHNldE9wZW5DYXJ0KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17b3BlbjF9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKG9wZW4xICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFBPUyBEaXNwbGF5XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlT3BlbkNhcnR9PlxyXG4gICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9e2NhcnQubGVuZ3RofSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPFNob3BwaW5nQ2FydEljb24gLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtvcGVuMX0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRPcGVuMSh0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRPcGVuMShmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlU2hvcCAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogMiB9fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxvYWRpbmdEYXRhID9cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJzEyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IDpcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfSBzeD17eyBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZWZyZXNoU2VhcmNofSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+UmVmcmVzaCBTZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc1NDBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/Lm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2BkYXRhOiR7cm93LmNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQgPyByb3cuY29udGVudFR5cGUgOiAnJ307IGJhc2U2NCwke3Jvdy5kYXRhICE9PSB1bmRlZmluZWQgPyByb3cuZGF0YSA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBoZWlnaHQ6ICcyMDBweCcsIGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuTW9kYWwocm93Ll9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+PHNwYW4+PHNwYW4gZGF0YS1wcmVmaXggPkZDIDwvc3Bhbj57KHJvdy5pdGVtU2VsbGluZ1ByaWNlICogcmF0ZSk/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gKCQge3Jvdy5pdGVtU2VsbGluZ1ByaWNlPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9KTwvc3Bhbj4gPHNwYW4+e3Jvdy5pdGVtVXBjLm5ld0NvZGUgKyAnLTAnICsgcm93Lml0ZW1VcGMuaXRlbU51bWJlcn08L3NwYW4+PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PjxzcGFuPntyb3cuaXRlbU5hbWUudG9VcHBlckNhc2UoKX08L3NwYW4+PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPkJyYW5kOiB7cm93Lml0ZW1CcmFuZC50b1VwcGVyQ2FzZSgpfSB8IERpbWVuc2lvbjoge3Jvdy5pdGVtRGltZW5zaW9ufSB8IHdlaWdodDoge3Jvdy53ZWlnaHR9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPkRlc2NyaXB0aW9uOntyb3cuaXRlbURlc2NyaXB0aW9uLnRvVXBwZXJDYXNlKCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pdGVtUXVhbnRpdHkgPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvQ2FydChyb3cpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0byBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiA8ZGl2PjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlN0b2NrOiB7cm93Lml0ZW1RdWFudGl0eX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudD17dG90YWxQYWdlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICB7c2VsZWN0ZWRJdGVtICYmIChcclxuICAgICAgICA8RGlhbG9nIG9wZW49e29wZW5Nb2RhbH0gb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICA8RGlhbG9nVGl0bGU+e3NlbGVjdGVkSXRlbS5pdGVtTmFtZS50b1VwcGVyQ2FzZSgpfTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICBpbWFnZT17YGRhdGE6JHtzZWxlY3RlZEl0ZW0uY29udGVudFR5cGUgIT09IHVuZGVmaW5lZCA/IHNlbGVjdGVkSXRlbS5jb250ZW50VHlwZSA6ICcnfTsgYmFzZTY0LCR7c2VsZWN0ZWRJdGVtLmRhdGEgIT09IHVuZGVmaW5lZCA/IHNlbGVjdGVkSXRlbS5kYXRhIDogJyd9YH1cclxuICAgICAgICAgICAgICAgIHN4PXt7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzgwJScsIG1hcmdpbkJvdHRvbTogJzIwcHgnIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgIFByaWNlOiBGQyB7KHNlbGVjdGVkSXRlbS5pdGVtU2VsbGluZ1ByaWNlICogcmF0ZSk/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gKCQge3NlbGVjdGVkSXRlbS5pdGVtU2VsbGluZ1ByaWNlPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9KVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICBCcmFuZDoge3NlbGVjdGVkSXRlbS5pdGVtQnJhbmQudG9VcHBlckNhc2UoKX0gfCBEaW1lbnNpb246IHtzZWxlY3RlZEl0ZW0uaXRlbURpbWVuc2lvbn0gfCB3ZWlnaHQ6IHtzZWxlY3RlZEl0ZW0ud2VpZ2h0fVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICBEZXNjcmlwdGlvbjoge3NlbGVjdGVkSXRlbS5pdGVtRGVzY3JpcHRpb24udG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICl9XHJcbiAgICAgIDxEaWFsb2cgb3Blbj17b3BlbkNhcnR9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlQ2FydH0+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlPlNob3BwaW5nIENhcnQ8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAge2NhcnQubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgWW91ciBjYXJ0IGlzIGVtcHR5LlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBjYXJ0Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3gga2V5PXtpdGVtLl9pZH0gZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWI9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5pdGVtTmFtZS50b1VwcGVyQ2FzZSgpfSAtIEZDIHsoaXRlbS5pdGVtU2VsbGluZ1ByaWNlICogcmF0ZSk/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gKCQge2l0ZW0uaXRlbVNlbGxpbmdQcmljZT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSlcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlRnJvbUNhcnQoaXRlbS5faWQpfT5cclxuICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUNhcnR9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNoZWNrb3V0fSBjb2xvcj1cInByaW1hcnlcIiBkaXNhYmxlZD17Y2FydC5sZW5ndGggPT09IDB9PlxyXG4gICAgICAgICAgICBDaGVja291dFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICA8L0RpYWxvZz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9pbnRPZlNhbGVcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiU2lkZVNob3AiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiVmlzaWJpbGl0eUljb24iLCJFZGl0SWNvbiIsIkRlbGV0ZUljb24iLCJOYXZMaW5rIiwianNvbiIsInVzZU5hdmlnYXRlIiwiVGFibGUiLCJNb2RhbCIsIkljb25CdXR0b24iLCJzdHlsZWQiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIkNoZWNrYm94IiwiVGFibGVDb250YWluZXIiLCJQYXBlciIsIlR5cG9ncmFwaHkiLCJCb3giLCJBdXRvY29tcGxldGUiLCJUZXh0RmllbGQiLCJCYWNrZHJvcCIsIkdyaWQiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkTWVkaWEiLCJQYWdpbmF0aW9uIiwiRGlhbG9nIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nQWN0aW9ucyIsIkJ1dHRvbiIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkRpdmlkZXIiLCJDb250YWluZXIiLCJMaW5rIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiQ2xvc2UiLCJBZGQiLCJNYWlsT3V0bGluZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2FkZXIiLCJDaGVja0NpcmNsZUljb24iLCJMb2dvdXQiLCJJbWFnZSIsIkRhdGFHcmlkIiwiR3JpZFRvb2xiYXIiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJTaG9wcGluZ0NhcnRJY29uIiwiRGVsZXRlVG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiRWRpdFRvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIlZpZXdUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjciLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjgiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJQb2ludE9mU2FsZSIsIl9yZWYxMSIsIl9zZWxlY3RlZEl0ZW0kaXRlbVNlbCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY5IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJpZCIsIl9pZCIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZ3JhbnRBY2Nlc3MiLCJzZXRHcmFudEFjY2VzcyIsImZldGNoTnVtYmVyIiwiX3JlZjAiLCJfcmVzJGRhdGEiLCJmaWx0ZXIiLCJyb3ciLCJ1c2VySUQiLCJtYXAiLCJtb2R1bGVzIiwiY3VzdG9tZXJJbmZvQyIsIm1vZHVsZU5hbWUiLCJhY2Nlc3MiLCJjcmVhdGVNIiwiY3VzdG9tZXJJbmZvViIsInZpZXdNIiwiY3VzdG9tZXJJbmZvVSIsImVkaXRNIiwiY3VzdG9tZXJJbmZvRCIsImRlbGV0ZU0iLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsIm9wZW4xIiwic2V0T3BlbjEiLCJ0b2dnbGVEcmF3ZXIiLCJjYXRlZ29yeSIsIm5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIml0ZW0iLCJTZXRJdGVtcyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwicGFnZSIsInNldFBhZ2UiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInNlYXJjaCIsInNldFNlYXJjaCIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwiZGVib3VuY2VkU2VhcmNoIiwic2V0RGVib3VuY2VkU2VhcmNoIiwiaGFuZGxlciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJ0b3RhbFBhZ2VzIiwic2V0VG90YWxQYWdlcyIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJsb2FkaW5nRGF0YSIsInNldExvYWRpbmdEYXRhIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInJhdGUiLCJzZXRSYXRlIiwiYXBpVXJsIiwiZmV0Y2hJdGVtIiwiX3JlZjEiLCJyZXNSYXRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaXRlbXMiLCJ0eXBlSXRlbSIsInJldmVyc2UiLCJoYW5kbGVSZWZyZXNoU2VhcmNoIiwiaGFuZGxlUGFnZUNoYW5nZSIsImUiLCJuZXdQYWdlIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiY2F0ZWdvcnlWYWx1ZSIsInNldENhdGVnb3J5VmFsdWUiLCJoYW5kbGVDYXRlZ29yeSIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiaGFuZGxlT3Blbk1vZGFsIiwiaWRJbmZvIiwiaGFuZGxlQ2xvc2VNb2RhbCIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJjYXJ0Iiwic2V0Q2FydCIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJvcGVuQ2FydCIsInNldE9wZW5DYXJ0IiwiaGFuZGxlQWRkVG9DYXJ0IiwiaGFuZGxlT3BlbkNhcnQiLCJoYW5kbGVDbG9zZUNhcnQiLCJoYW5kbGVSZW1vdmVGcm9tQ2FydCIsIml0ZW1JZCIsImhhbmRsZUNoZWNrb3V0Iiwic3RhdGUiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJiYWRnZUNvbnRlbnQiLCJsZW5ndGgiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJjb250YWluZXIiLCJtYXJnaW5Ub3AiLCJ4cyIsImxhYmVsIiwib25DaGFuZ2UiLCJvdmVyZmxvd1kiLCJwYWRkaW5nIiwiX3JlZjEwIiwiX3JvdyRpdGVtU2VsbGluZ1ByaWNlIiwia2V5IiwiaW1hZ2UiLCJjb250ZW50VHlwZSIsInVuZGVmaW5lZCIsImN1cnNvciIsIml0ZW1TZWxsaW5nUHJpY2UiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsIml0ZW1VcGMiLCJuZXdDb2RlIiwiaXRlbU51bWJlciIsIml0ZW1OYW1lIiwidG9VcHBlckNhc2UiLCJpdGVtQnJhbmQiLCJpdGVtRGltZW5zaW9uIiwid2VpZ2h0IiwiaXRlbURlc2NyaXB0aW9uIiwiaXRlbVF1YW50aXR5IiwidGV4dEFsaWduIiwiY291bnQiLCJvbkNsb3NlIiwibWFyZ2luQm90dG9tIiwiX3JlZjEyIiwiX2l0ZW0kaXRlbVNlbGxpbmdQcmljIiwibWIiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=