"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[3094],{

/***/ 29726
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
  d: "M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2m-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9"
}), 'SettingsBackupRestore');

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

/***/ 17332
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20561);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
}), 'Assignment'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 81757
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20561);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71-5.3 5.3V21h2.12l5.3-5.3z"
}), 'EditNote'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


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

/***/ 33094
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdminView1_SellShopInvoiceView)
});

// EXTERNAL MODULE: ./src/js/component/PrintHeader.js
var PrintHeader = __webpack_require__(77438);
// EXTERNAL MODULE: ./src/js/component/PrintFooter.js
var PrintFooter = __webpack_require__(61296);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./src/js/AdminView1/view.css
var view = __webpack_require__(68525);
// EXTERNAL MODULE: ./src/js/AdminView1/PageView/Chartview.css
var Chartview = __webpack_require__(55746);
// EXTERNAL MODULE: ./src/js/component/SideShop.js + 1 modules
var SideShop = __webpack_require__(70632);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Visibility.js
var Visibility = __webpack_require__(5673);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Edit.js
var Edit = __webpack_require__(28597);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Delete.js
var Delete = __webpack_require__(67034);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(47767);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(84976);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(14073);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(11641);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(69067);
// EXTERNAL MODULE: ./node_modules/@mui/material/Modal/Modal.js + 3 modules
var Modal = __webpack_require__(35406);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(8239);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(50779);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(29571);
// EXTERNAL MODULE: ./node_modules/@mui/material/Select/Select.js + 4 modules
var Select = __webpack_require__(2071);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(73896);
// EXTERNAL MODULE: ./node_modules/@mui/material/Backdrop/Backdrop.js + 1 modules
var Backdrop = __webpack_require__(47419);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(844);
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
var Menu = __webpack_require__(62274);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ChevronLeft.js
var ChevronLeft = __webpack_require__(8451);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(99380);
// EXTERNAL MODULE: ./src/js/utils/apiCache.js
var apiCache = __webpack_require__(46986);
// EXTERNAL MODULE: ./src/js/apiConfig.js
var apiConfig = __webpack_require__(71510);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Assignment.js
var Assignment = __webpack_require__(17332);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(20561);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/icons-material/esm/PendingActions.js
"use client";



/* harmony default export */ const PendingActions = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85zM18 3h-3.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H6c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h6.11c-.59-.57-1.07-1.25-1.42-2H6V5h2v3h8V5h2v5.08c.71.1 1.38.31 2 .6V5c0-1.1-.9-2-2-2m-6 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
}), 'PendingActions'));
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/EditNote.js
var EditNote = __webpack_require__(81757);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Add.js
var Add = __webpack_require__(99682);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(17809);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Print.js
var Print = __webpack_require__(42758);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(74353);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./src/js/component/Loader.js + 1 modules
var Loader = __webpack_require__(65821);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/CheckCircle.js
var CheckCircle = __webpack_require__(20889);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/SettingsBackupRestore.js
var SettingsBackupRestore = __webpack_require__(29726);
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
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(86990);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Close.js
var icons_material_Close = __webpack_require__(39781);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(99571);
;// ./src/js/AdminView1/PageView/ShopPos/PosRefundModal.js
var _excluded = ["refundInput"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
  width: '85%',
  maxWidth: '900px',
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px'
};
function PosRefundModal(_ref) {
  var _posData$customerName;
  var open = _ref.open,
    handleClose = _ref.handleClose,
    posId = _ref.posId;
  var _useState = (0,react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    posData = _useState4[0],
    setPosData = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    cashRefundUSD = _useState8[0],
    setCashRefundUSD = _useState8[1];
  var _useState9 = (0,react.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    cashRefundFC = _useState0[0],
    setCashRefundFC = _useState0[1];
  (0,react.useEffect)(() => {
    if (open && posId) {
      fetchData();
    }
  }, [open, posId]);
  var fetchData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* () {
      setLoading(true);
      try {
        var res = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/get-pos/").concat(posId));
        if (res.data && res.data.data) {
          setPosData(res.data.data);
          var fetchedItems = res.data.data.items.map(item => _objectSpread(_objectSpread({}, item), {}, {
            refundInput: 0,
            refundedQty: parseFloat(item.refundedQty) || 0,
            itemQty: parseFloat(item.itemQty) || 0,
            itemRate: parseFloat(item.itemRate) || parseFloat(item.itemAmount) / (parseFloat(item.itemQty) || 1) || 0
          }));
          setItems(fetchedItems);
          setCashRefundUSD(0);
          setCashRefundFC(0);
        }
      } catch (error) {
        console.error(error);
        react_toastify_esm/* toast */.oR.error('Failed to fetch POS details');
      }
      setLoading(false);
    });
    return function fetchData() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleRefundInputChange = (index, value) => {
    var newItems = [...items];
    var val = parseFloat(value) || 0;
    var maxAllowed = newItems[index].itemQty - newItems[index].refundedQty;
    if (val < 0) {
      newItems[index].refundInput = 0;
    } else if (val > maxAllowed) {
      newItems[index].refundInput = maxAllowed;
    } else {
      newItems[index].refundInput = val;
    }
    setItems(newItems);

    // Auto-update default cash refund in FC
    var newTotalFC = newItems.reduce((total, item) => {
      var unitPrice = parseFloat(item.itemRate) || 0;
      return total + unitPrice * (parseFloat(item.refundInput) || 0);
    }, 0);
    setCashRefundFC(newTotalFC);
    setCashRefundUSD(0);
  };
  var getItemName = item => {
    if (item.itemName && typeof item.itemName === 'object') {
      return item.itemName.itemName || item.itemName.itemDescription || 'Item';
    }
    return item.itemName || item.itemDescription || 'Item';
  };
  var calculateTotalRefundAmountFC = () => {
    return items.reduce((total, item) => {
      var unitPrice = parseFloat(item.itemRate) || 0;
      return total + unitPrice * (parseFloat(item.refundInput) || 0);
    }, 0);
  };
  var rate = posData ? parseFloat(posData.rate) || 1 : 1;
  var totalRefundFC = calculateTotalRefundAmountFC();
  var totalRefundUSD = (totalRefundFC / rate).toFixed(2);
  var setAllFC = () => {
    setCashRefundFC(totalRefundFC);
    setCashRefundUSD(0);
  };
  var setAllUSD = () => {
    setCashRefundUSD(parseFloat(totalRefundUSD));
    setCashRefundFC(0);
  };
  var setProportional = () => {
    if (!posData) return;
    var origPaidFC = parseFloat(posData.totalFC) || 0;
    var origPaidUSD = parseFloat(posData.totalUSD) || 0;
    var totalPaidFCVal = origPaidUSD * rate + origPaidFC;
    if (totalPaidFCVal > 0) {
      var fcRatio = origPaidFC / totalPaidFCVal;
      var refFC = Math.round(totalRefundFC * fcRatio);
      var remainingForUSD = totalRefundFC - refFC;
      var refUSD = parseFloat((remainingForUSD / rate).toFixed(2));
      setCashRefundFC(refFC);
      setCashRefundUSD(refUSD);
    } else {
      setAllFC();
    }
  };
  var givenCashFC = parseFloat(cashRefundFC) || 0;
  var givenCashUSD = parseFloat(cashRefundUSD) || 0;
  var totalGivenInFC = givenCashUSD * rate + givenCashFC;
  var cashDifferenceFC = totalGivenInFC - totalRefundFC;
  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      if (!posData) return;
      var totalRefundInput = items.reduce((sum, i) => sum + (parseFloat(i.refundInput) || 0), 0);
      if (totalRefundInput === 0) {
        react_toastify_esm/* toast */.oR.warning('Please specify at least 1 quantity to refund.');
        return;
      }
      if (givenCashFC === 0 && givenCashUSD === 0 && totalRefundFC > 0) {
        react_toastify_esm/* toast */.oR.warning('Please specify the cash refund amount in USD ($) or FC.');
        return;
      }
      setLoading(true);
      var newItems = items.map(item => _objectSpread(_objectSpread({}, item), {}, {
        refundedQty: (parseFloat(item.refundedQty) || 0) + (parseFloat(item.refundInput) || 0)
      }));
      var refundFC = totalRefundFC;
      var newSubTotal = Math.max(0, parseFloat(posData.subTotal || 0) - refundFC);
      var newTotalInvoice = Math.max(0, parseFloat(posData.totalInvoice || 0) - refundFC);

      // Check if fully refunded
      var totalQtyPurchased = newItems.reduce((sum, i) => sum + (parseFloat(i.itemQty) || 0), 0);
      var totalQtyRefunded = newItems.reduce((sum, i) => sum + (parseFloat(i.refundedQty) || 0), 0);
      var newStatus = posData.status;
      if (totalQtyRefunded >= totalQtyPurchased) {
        newStatus = 'Refunded';
      } else if (totalQtyRefunded > 0) {
        newStatus = 'Partially-Refunded';
      }

      // Keep original sale cash received intact so sales row stays positive
      var origTotalFC = parseFloat(posData.totalFC || 0) < 0 ? parseFloat(posData.totalFC || 0) + parseFloat(posData.refundedCashFC || 0) + givenCashFC : parseFloat(posData.totalFC || 0);
      var origTotalUSD = parseFloat(posData.totalUSD || 0) < 0 ? parseFloat(posData.totalUSD || 0) + parseFloat(posData.refundedCashUSD || 0) + givenCashUSD : parseFloat(posData.totalUSD || 0);
      var payload = {
        items: newItems.map(_ref4 => {
          var refundInput = _ref4.refundInput,
            rest = _objectWithoutProperties(_ref4, _excluded);
          return rest;
        }),
        TotalAmountPaid: Math.max(0, parseFloat(posData.TotalAmountPaid || 0) - refundFC),
        subTotal: newSubTotal,
        totalInvoice: newTotalInvoice,
        totalFC: origTotalFC,
        totalUSD: origTotalUSD,
        remaining: 0,
        balanceDue: 0,
        status: newStatus,
        tax: posData.tax,
        refundedAmountFC: (parseFloat(posData.refundedAmountFC) || 0) + refundFC,
        refundedAmountUSD: (parseFloat(posData.refundedAmountUSD) || 0) + parseFloat(totalRefundUSD),
        refundedCashFC: (parseFloat(posData.refundedCashFC) || 0) + givenCashFC,
        refundedCashUSD: (parseFloat(posData.refundedCashUSD) || 0) + givenCashUSD
      };
      try {
        yield axios/* default */.A.post("".concat(apiConfig/* ENDPOINT_URL */.m, "/refund-pos/").concat(posId), payload);
        react_toastify_esm/* toast */.oR.success('Refund processed successfully!');
        (0,apiCache/* invalidateCache */.gm)('/pos');
        handleClose(true);
      } catch (error) {
        console.error(error);
        react_toastify_esm/* toast */.oR.error('Failed to process refund');
      }
      setLoading(false);
    });
    return function handleSubmit() {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement(Modal/* default */.A, {
    open: open,
    onClose: () => handleClose(false)
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: style
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: () => handleClose(false),
    sx: {
      position: 'absolute',
      right: 8,
      top: 8
    }
  }, /*#__PURE__*/react.createElement(icons_material_Close/* default */.A, null)), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h6",
    sx: {
      mb: 1,
      fontWeight: 'bold'
    }
  }, "Process Refund (POS Invoice #", posData === null || posData === void 0 ? void 0 : posData.factureNumber, ")"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "body2",
    sx: {
      mb: 2,
      color: 'text.secondary'
    }
  }, "Customer: ", /*#__PURE__*/react.createElement("strong", null, (posData === null || posData === void 0 || (_posData$customerName = posData.customerName) === null || _posData$customerName === void 0 ? void 0 : _posData$customerName.customerName) || 'Walk-in'), " | Rate: ", /*#__PURE__*/react.createElement("strong", null, "1 USD = ", rate.toLocaleString(), " FC"), " | Originally Paid: ", /*#__PURE__*/react.createElement("strong", null, "FC ", (parseFloat(posData === null || posData === void 0 ? void 0 : posData.totalFC) || 0).toLocaleString(), " + $", (parseFloat(posData === null || posData === void 0 ? void 0 : posData.totalUSD) || 0).toFixed(2))), /*#__PURE__*/react.createElement(TableContainer/* default */.A, {
    component: Paper/* default */.A,
    sx: {
      mb: 2
    }
  }, /*#__PURE__*/react.createElement(Table/* default */.A, {
    size: "small"
  }, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, {
    sx: {
      backgroundColor: '#f5f5f5'
    }
  }, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, /*#__PURE__*/react.createElement("strong", null, "Item")), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, /*#__PURE__*/react.createElement("strong", null, "Unit Price (FC)")), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "center"
  }, /*#__PURE__*/react.createElement("strong", null, "Qty Bought")), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "center"
  }, /*#__PURE__*/react.createElement("strong", null, "Already Refunded")), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "center"
  }, /*#__PURE__*/react.createElement("strong", null, "Refund Qty")), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right"
  }, /*#__PURE__*/react.createElement("strong", null, "Refund Value (FC)")))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, items.map((item, index) => {
    var unitPrice = parseFloat(item.itemRate) || 0;
    var maxAllowed = item.itemQty - item.refundedQty;
    var refundValue = unitPrice * (parseFloat(item.refundInput) || 0);
    return /*#__PURE__*/react.createElement(TableRow/* default */.A, {
      key: index
    }, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, getItemName(item)), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, "FC ", unitPrice.toLocaleString()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, item.itemQty, " ", item.unit || ''), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, item.refundedQty, " ", item.unit || ''), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, /*#__PURE__*/react.createElement(TextField/* default */.A, {
      type: "number",
      size: "small",
      value: item.refundInput,
      onChange: e => handleRefundInputChange(index, e.target.value),
      inputProps: {
        min: 0,
        max: maxAllowed,
        step: 'any'
      },
      sx: {
        width: '85px'
      },
      disabled: loading || maxAllowed <= 0
    })), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "right"
    }, "FC ", refundValue.toLocaleString()));
  })))), /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      p: 2,
      mb: 2,
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      border: '1px solid #e0e0e0'
    }
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "subtitle2",
    sx: {
      fontWeight: 'bold',
      mb: 1,
      color: '#333'
    }
  }, "Cash Returned to Customer (USD $ and FC Frank):"), /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      gap: 2,
      alignItems: 'center',
      mb: 1
    }
  }, /*#__PURE__*/react.createElement(TextField/* default */.A, {
    label: "Refund in USD ($)",
    type: "number",
    size: "small",
    value: cashRefundUSD,
    onChange: e => setCashRefundUSD(e.target.value),
    inputProps: {
      min: 0,
      step: 'any'
    },
    sx: {
      width: '160px',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react.createElement(TextField/* default */.A, {
    label: "Refund in FC (Francs)",
    type: "number",
    size: "small",
    value: cashRefundFC,
    onChange: e => setCashRefundFC(e.target.value),
    inputProps: {
      min: 0,
      step: 'any'
    },
    sx: {
      width: '180px',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      gap: 1
    }
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "small",
    variant: "outlined",
    onClick: setAllFC
  }, "All in FC"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "small",
    variant: "outlined",
    onClick: setAllUSD
  }, "All in USD"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "small",
    variant: "outlined",
    onClick: setProportional
  }, "Proportional"))), /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      gap: 2,
      alignItems: 'center',
      fontSize: '13px'
    }
  }, /*#__PURE__*/react.createElement("span", null, "Required Refund: ", /*#__PURE__*/react.createElement("strong", null, "FC ", totalRefundFC.toLocaleString(), " ($", totalRefundUSD, ")")), /*#__PURE__*/react.createElement("span", null, "|"), /*#__PURE__*/react.createElement("span", null, "Cash Given: ", /*#__PURE__*/react.createElement("strong", null, "FC ", givenCashFC.toLocaleString(), " + $", givenCashUSD, " (= FC ", totalGivenInFC.toLocaleString(), ")")), Math.abs(cashDifferenceFC) < 1 ? /*#__PURE__*/react.createElement("span", {
    style: {
      color: 'green',
      fontWeight: 'bold'
    }
  }, "\u2713 Exact Match") : cashDifferenceFC > 0 ? /*#__PURE__*/react.createElement("span", {
    style: {
      color: 'orange',
      fontWeight: 'bold'
    }
  }, "Overpaying by FC ", cashDifferenceFC.toLocaleString()) : /*#__PURE__*/react.createElement("span", {
    style: {
      color: 'red',
      fontWeight: 'bold'
    }
  }, "Remaining to return: FC ", Math.abs(cashDifferenceFC).toLocaleString()))), /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      p: 1,
      backgroundColor: '#fff3e0',
      borderRadius: '6px'
    }
  }, /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "subtitle1",
    sx: {
      fontWeight: 'bold',
      color: '#d32f2f'
    }
  }, "Total Refund Value: FC ", totalRefundFC.toLocaleString(), " ($", totalRefundUSD, ")"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "caption",
    sx: {
      color: 'text.secondary'
    }
  }, "This will update the physical cash in hand in POS Report & Daily Expenses Summary, and return physical inventory to stock.")), /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "contained",
    color: "error",
    onClick: handleSubmit,
    disabled: loading || totalRefundFC <= 0,
    sx: {
      px: 3,
      py: 1
    }
  }, loading ? 'Processing...' : 'Confirm Refund'))));
}
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__(13561);
// EXTERNAL MODULE: ./src/js/features/auth/authSlice.js
var authSlice = __webpack_require__(32005);
// EXTERNAL MODULE: ./src/js/component/NetworkLogoutIcon.js
var NetworkLogoutIcon = __webpack_require__(40301);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js + 185 modules
var DataGrid = __webpack_require__(1835);
// EXTERNAL MODULE: ./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js + 5 modules
var GridToolbar = __webpack_require__(53071);
// EXTERNAL MODULE: ./src/js/AdminView1/MessageAdminView.js + 1 modules
var MessageAdminView = __webpack_require__(3100);
// EXTERNAL MODULE: ./src/js/AdminView1/NotificationVIewInfo.js
var NotificationVIewInfo = __webpack_require__(95236);
// EXTERNAL MODULE: ./src/js/utils/isMobile.js
var isMobile = __webpack_require__(2650);
// EXTERNAL MODULE: ./node_modules/react-to-print/lib/index.js
var lib = __webpack_require__(57240);
;// ./src/js/AdminView1/SellShopInvoiceView.js
var SellShopInvoiceView_excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"];
function SellShopInvoiceView_slicedToArray(r, e) { return SellShopInvoiceView_arrayWithHoles(r) || SellShopInvoiceView_iterableToArrayLimit(r, e) || SellShopInvoiceView_unsupportedIterableToArray(r, e) || SellShopInvoiceView_nonIterableRest(); }
function SellShopInvoiceView_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function SellShopInvoiceView_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return SellShopInvoiceView_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? SellShopInvoiceView_arrayLikeToArray(r, a) : void 0; } }
function SellShopInvoiceView_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function SellShopInvoiceView_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function SellShopInvoiceView_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function SellShopInvoiceView_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function SellShopInvoiceView_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { SellShopInvoiceView_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { SellShopInvoiceView_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function SellShopInvoiceView_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function SellShopInvoiceView_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? SellShopInvoiceView_ownKeys(Object(t), !0).forEach(function (r) { SellShopInvoiceView_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : SellShopInvoiceView_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function SellShopInvoiceView_defineProperty(e, r, t) { return (r = SellShopInvoiceView_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function SellShopInvoiceView_toPropertyKey(t) { var i = SellShopInvoiceView_toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function SellShopInvoiceView_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SellShopInvoiceView_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = SellShopInvoiceView_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function SellShopInvoiceView_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;










































var RefundTooltip = (0,styled/* default */.Ay)(_ref => {
  var className = _ref.className,
    props = SellShopInvoiceView_objectWithoutProperties(_ref, SellShopInvoiceView_excluded);
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(tooltipClasses/* default */.A.tooltip)]: {
      backgroundColor: 'orange',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var DeleteTooltip = (0,styled/* default */.Ay)(_ref3 => {
  var className = _ref3.className,
    props = SellShopInvoiceView_objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(tooltipClasses/* default */.A.tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,styled/* default */.Ay)(_ref5 => {
  var className = _ref5.className,
    props = SellShopInvoiceView_objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(tooltipClasses/* default */.A.tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,styled/* default */.Ay)(_ref7 => {
  var className = _ref7.className,
    props = SellShopInvoiceView_objectWithoutProperties(_ref7, _excluded4);
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
var SellShopInvoiceView_style = {
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
var SellShopInvoiceView_AppBar = (0,styled/* default */.Ay)(AppBar/* default */.A, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref9 => {
  var theme = _ref9.theme,
    open = _ref9.open;
  return SellShopInvoiceView_objectSpread({
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
var SellShopInvoiceView_Drawer = (0,styled/* default */.Ay)(Drawer/* default */.Ay, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref0 => {
  var theme = _ref0.theme,
    open = _ref0.open;
  return {
    '& .MuiDrawer-paper': SellShopInvoiceView_objectSpread({
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
function SellShopInvoiceView() {
  var _posInvoice$customerN, _posInvoice$items, _posInvoice$tax, _posInvoice$totalInvo, _posInvoice$refundedC, _posInvoice$refundedC2, _posInvoice$totalFC, _posInvoice$totalUSD, _posInvoice$TotalAmou, _posInvoice$creditFC, _posInvoice$creditUsd;
  var navigate = (0,dist/* useNavigate */.Zp)();
  var dispatch = (0,es/* useDispatch */.wA)();
  var user = (0,es/* useSelector */.d4)(authSlice/* selectCurrentUser */.xu);
  (0,react.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref1 = SellShopInvoiceView_asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,authSlice/* setUser */.gV)({
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
        return _ref1.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,authSlice/* logOut */.je)());
    navigate('/');
  };
  var _useState = (0,react.useState)([]),
    _useState2 = SellShopInvoiceView_slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref10 = SellShopInvoiceView_asyncToGenerator(function* () {
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
  var InvoiceInfoC = grantAccess.filter(row => row.moduleName === "Point-Of-Sell" && row.access.createM === true);
  var InvoiceInfoV = grantAccess.filter(row => row.moduleName === "Point-Of-Sell" && row.access.viewM === true);
  var InvoiceInfoU = grantAccess.filter(row => row.moduleName === "Point-Of-Sell" && row.access.editM === true);
  var InvoiceInfoD = grantAccess.filter(row => row.moduleName === "Point-Of-Sell" && row.access.deleteM === true);
  {/** Get Invoice */}
  var _useState3 = (0,react.useState)([]),
    _useState4 = SellShopInvoiceView_slicedToArray(_useState3, 2),
    invoice = _useState4[0],
    setInvoice = _useState4[1];
  var _useState5 = (0,react.useState)([]),
    _useState6 = SellShopInvoiceView_slicedToArray(_useState5, 2),
    hiddenRow = _useState6[0],
    setHiddenRow = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = SellShopInvoiceView_slicedToArray(_useState7, 2),
    openRefundModal = _useState8[0],
    setOpenRefundModal = _useState8[1];
  var _useState9 = (0,react.useState)(null),
    _useState0 = SellShopInvoiceView_slicedToArray(_useState9, 2),
    refundPosId = _useState0[0],
    setRefundPosId = _useState0[1];
  var handleOpenRefund = id => {
    setRefundPosId(id);
    setOpenRefundModal(true);
  };
  var handleCloseRefund = success => {
    setOpenRefundModal(false);
    setRefundPosId(null);
    if (success) {
      fetchData(); // refresh table
    }
  };
  var _useState1 = (0,react.useState)([]),
    _useState10 = SellShopInvoiceView_slicedToArray(_useState1, 2),
    hidden = _useState10[0],
    setHidden = _useState10[1];
  var _useState11 = (0,react.useState)([]),
    _useState12 = SellShopInvoiceView_slicedToArray(_useState11, 2),
    selectedRows = _useState12[0],
    setSelectedRows = _useState12[1];
  var _useState13 = (0,react.useState)(true),
    _useState14 = SellShopInvoiceView_slicedToArray(_useState13, 2),
    loadingData = _useState14[0],
    setLoadingData = _useState14[1];
  var _useState15 = (0,react.useState)(""),
    _useState16 = SellShopInvoiceView_slicedToArray(_useState15, 2),
    reason = _useState16[0],
    setReason = _useState16[1];
  var _useState17 = (0,react.useState)('ALL'),
    _useState18 = SellShopInvoiceView_slicedToArray(_useState17, 2),
    statusFilter = _useState18[0],
    setStatusFilter = _useState18[1];
  var statusCounts = (0,react.useMemo)(() => {
    var counts = {
      all: 0,
      paid: 0,
      partiallyPaid: 0,
      draft: 0
    };
    (invoice || []).forEach(item => {
      counts.all += 1;
      var st = (item.status || '').toLowerCase().trim();
      if (st === 'paid') counts.paid += 1;else if (st === 'partially-paid' || st === 'partially paid') counts.partiallyPaid += 1;else if (st === 'draft') counts.draft += 1;
    });
    return counts;
  }, [invoice]);
  var displayedInvoice = (0,react.useMemo)(() => {
    if (!statusFilter || statusFilter === 'ALL') return invoice;
    return (invoice || []).filter(item => {
      var st = (item.status || '').toLowerCase().trim();
      if (statusFilter === 'Paid') return st === 'paid';
      if (statusFilter === 'Partially-Paid') return st === 'partially-paid' || st === 'partially paid';
      if (statusFilter === 'Draft') return st === 'draft';
      return true;
    });
  }, [invoice, statusFilter]);
  var handleStatusClick = statusKey => {
    if (statusFilter.toLowerCase() === statusKey.toLowerCase() && statusKey !== 'ALL') {
      setStatusFilter('ALL');
    } else {
      setStatusFilter(statusKey);
    }
  };
  var handleRefreshSearch = () => {
    setStatusFilter('ALL');
    fetchData();
  };
  var fetchData = /*#__PURE__*/function () {
    var _ref11 = SellShopInvoiceView_asyncToGenerator(function* () {
      try {
        var res = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/pos?summary=true"));
        var formatDate = res.data.data.map(item => SellShopInvoiceView_objectSpread(SellShopInvoiceView_objectSpread({}, item), {}, {
          id: item._id,
          dateField: dayjs_min_default()(item.invoiceDate).format('DD/MM/YYYY'),
          time: dayjs_min_default()(item.time).format('HH:mm')
        }));
        setInvoice(formatDate);
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
  var _useState19 = (0,react.useState)(false),
    _useState20 = SellShopInvoiceView_slicedToArray(_useState19, 2),
    loading = _useState20[0],
    setLoading = _useState20[1];
  var _useState21 = (0,react.useState)(false),
    _useState22 = SellShopInvoiceView_slicedToArray(_useState21, 2),
    ErrorOpenModal = _useState22[0],
    setErrorOpenModal = _useState22[1];
  var _useState23 = (0,react.useState)(false),
    _useState24 = SellShopInvoiceView_slicedToArray(_useState23, 2),
    loadingOpenModal = _useState24[0],
    setLoadingOpenModal = _useState24[1];
  var _useState25 = (0,react.useState)(false),
    _useState26 = SellShopInvoiceView_slicedToArray(_useState25, 2),
    modalDeleteOpenLoading = _useState26[0],
    setModalDeleteOpenLoading = _useState26[1];
  {/** Loading Update View Start */}
  var handleOpenLoading = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    handleCloseUpdate();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleCloseLoading = () => {
    window.location.reload();
  };
  {/** Loading Update View End */}
  {/** Loading Delete View Start */}
  var handleDeleteOpenLoading = () => {
    setModalDeleteOpenLoading(true);
    setLoading(true);
    handleClose();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleDeleteCloseLoading = () => {
    window.location.reload();
  };
  var handleOpenOffline = () => {
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
  var handleCreateNotificationOffline = /*#__PURE__*/function () {
    var _ref12 = SellShopInvoiceView_asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber, ReferenceInfoCustomer) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: 'S-' + ReferenceInfoNumber + ' For ' + ReferenceInfoCustomer,
        dateNotification: new Date()
      };
      try {
        yield axios/* default */.A.post("".concat(apiConfig/* ENDPOINT_URL */.m, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotificationOffline(_x, _x2, _x3) {
      return _ref12.apply(this, arguments);
    };
  }();
  var syncOff = /*#__PURE__*/function () {
    var _ref13 = SellShopInvoiceView_asyncToGenerator(function* () {
      // Online-only: syncOff logic removed
    });
    return function syncOff() {
      return _ref13.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(() => {
    fetchData();
  }, []);
  (0,react.useEffect)(() => {
    var fetchDataHidden = /*#__PURE__*/function () {
      var _ref14 = SellShopInvoiceView_asyncToGenerator(function* () {
        try {
          var res = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/hidden"));
          setHiddenRow(res.data.data.map(row => row.idRow));
          setHidden(res.data.data);
          localStorage.removeItem('Hidden');
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchDataHidden() {
        return _ref14.apply(this, arguments);
      };
    }();
    fetchDataHidden();
  }, []);
  var _useState27 = (0,react.useState)(false),
    _useState28 = SellShopInvoiceView_slicedToArray(_useState27, 2),
    openReasonDelete = _useState28[0],
    setOpenReasonDelete = _useState28[1];
  var handleOpenReasonDelete = e => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  {/** End Get Invoice */}
  var _useState29 = (0,react.useState)(false),
    _useState30 = SellShopInvoiceView_slicedToArray(_useState29, 2),
    open = _useState30[0],
    setOpen = _useState30[1];
  var _useState31 = (0,react.useState)(null),
    _useState32 = SellShopInvoiceView_slicedToArray(_useState31, 2),
    DeleteId = _useState32[0],
    setDeleteId = _useState32[1];
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleClose = () => {
    setLoadingOpenModal(false);
    setOpen(false);
  };
  var _useState33 = (0,react.useState)(false),
    _useState34 = SellShopInvoiceView_slicedToArray(_useState33, 2),
    open1 = _useState34[0],
    setOpen1 = _useState34[1];
  var _useState35 = (0,react.useState)(null),
    _useState36 = SellShopInvoiceView_slicedToArray(_useState35, 2),
    updateId = _useState36[0],
    setUpdateId = _useState36[1];
  var _useState37 = (0,react.useState)(""),
    _useState38 = SellShopInvoiceView_slicedToArray(_useState37, 2),
    status = _useState38[0],
    setStatus = _useState38[1];
  var handleOpenUpdate = id => {
    setOpen1(true);
    setUpdateId(id);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
    setUpdateId(null);
  };
  var componentRef = (0,react.useRef)();
  var handlePrint = (0,lib.useReactToPrint)({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      var PAGE_HEIGHT = 560; // Adjusted for POS printer roll paper size
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
  {/** delete multiple && all modal start */}
  var _useState39 = (0,react.useState)(false),
    _useState40 = SellShopInvoiceView_slicedToArray(_useState39, 2),
    openDeleteMultiple = _useState40[0],
    setOpenDeleteMultiple = _useState40[1];
  var handleOpenMultiple = () => {
    setOpenDeleteMultiple(true);
  };
  var handleCloseMultiple = () => {
    setOpenDeleteMultiple(false);
  };
  var _useState41 = (0,react.useState)(false),
    _useState42 = SellShopInvoiceView_slicedToArray(_useState41, 2),
    openDeleteAll = _useState42[0],
    setOpenDeleteAll = _useState42[1];
  var handleOpenAll = () => {
    setOpenDeleteAll(true);
  };
  var handleCloseAll = () => {
    setOpenDeleteAll(false);
  };
  {/** Delete Function */}
  var handleDelete = /*#__PURE__*/function () {
    var _ref15 = SellShopInvoiceView_asyncToGenerator(function* () {
      try {
        var res = yield axios/* default */.A.delete("".concat(apiConfig/* ENDPOINT_URL */.m, "/delete-pos/").concat(DeleteId));
        if (res) {
          handleDeleteOpenLoading();
        }
      } catch (error) {
        console.error(error);
      }
    });
    return function handleDelete() {
      return _ref15.apply(this, arguments);
    };
  }();
  var _useState43 = (0,react.useState)([]),
    _useState44 = SellShopInvoiceView_slicedToArray(_useState43, 2),
    InvoiceDeleted = _useState44[0],
    setInvoiceDeleted = _useState44[1];
  (0,react.useEffect)(() => {
    var fetchFunction = /*#__PURE__*/function () {
      var _ref16 = SellShopInvoiceView_asyncToGenerator(function* () {
        var deletePromises = selectedRows.map(/*#__PURE__*/function () {
          var _ref17 = SellShopInvoiceView_asyncToGenerator(function* (idToDelete) {
            return axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/get-pos/").concat(idToDelete));
          });
          return function (_x4) {
            return _ref17.apply(this, arguments);
          };
        }());
        try {
          var res = yield Promise.all(deletePromises);
          setInvoiceDeleted(res.map(row => 'S-00' + row.data.data.factureNumber));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchFunction() {
        return _ref16.apply(this, arguments);
      };
    }();
    fetchFunction();
  }, [selectedRows]);
  var _useState45 = (0,react.useState)(false),
    _useState46 = SellShopInvoiceView_slicedToArray(_useState45, 2),
    openView = _useState46[0],
    setOpenView = _useState46[1];
  var _useState47 = (0,react.useState)(null),
    _useState48 = SellShopInvoiceView_slicedToArray(_useState47, 2),
    idView = _useState48[0],
    setIdView = _useState48[1];
  var _useState49 = (0,react.useState)(null),
    _useState50 = SellShopInvoiceView_slicedToArray(_useState49, 2),
    posInvoice = _useState50[0],
    setPosInvoice = _useState50[1];
  var handleOpenView = id => {
    setOpenView(true);
    setIdView(id);
  };
  var handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
    setPosInvoice(null);
    setSelectedRows([]);
  };
  (0,react.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref18 = SellShopInvoiceView_asyncToGenerator(function* () {
        if (idView !== null) {
          try {
            var res = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/get-pos/").concat(idView));
            setPosInvoice(res.data.data);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchData2() {
        return _ref18.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [idView]);
  var related = InvoiceDeleted.map(row => row);
  var info = related.toString();
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref19 = SellShopInvoiceView_asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + info,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios/* default */.A.post("".concat(apiConfig/* ENDPOINT_URL */.m, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref19.apply(this, arguments);
    };
  }();
  var handleDeleteMany = /*#__PURE__*/function () {
    var _ref20 = SellShopInvoiceView_asyncToGenerator(function* (e) {
      e.preventDefault();
      var deletePromises = selectedRows.map(/*#__PURE__*/function () {
        var _ref21 = SellShopInvoiceView_asyncToGenerator(function* (idToDelete) {
          return axios/* default */.A.delete("".concat(apiConfig/* ENDPOINT_URL */.m, "/delete-pos/").concat(idToDelete));
        });
        return function (_x6) {
          return _ref21.apply(this, arguments);
        };
      }());
      try {
        var res = yield Promise.all(deletePromises);
        if (res) {
          handleCreateNotification();
          handleDeleteOpenLoading();
        }
      } catch (error) {
        console.log(error);
      }
    });
    return function handleDeleteMany(_x5) {
      return _ref20.apply(this, arguments);
    };
  }();
  {/** End Delete Function */}
  {/** Update Invoice Status start */}
  var _useState51 = (0,react.useState)(0),
    _useState52 = SellShopInvoiceView_slicedToArray(_useState51, 2),
    invoiceN = _useState52[0],
    setInvoiceN = _useState52[1];
  (0,react.useEffect)(() => {
    var fetchId = /*#__PURE__*/function () {
      var _ref22 = SellShopInvoiceView_asyncToGenerator(function* () {
        if (updateId !== null) {
          try {
            var res = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/get-pos/").concat(updateId));
            setStatus(res.data.data.status);
            setInvoiceN(res.data.data.factureNumber);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchId() {
        return _ref22.apply(this, arguments);
      };
    }();
    fetchId();
  }, [updateId]);
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref23 = SellShopInvoiceView_asyncToGenerator(function* () {
      var data = {
        idInfo: updateId,
        person: user.data.userName,
        reason: status + ' INV-' + invoiceN,
        dateNotification: new Date()
      };
      try {
        yield axios/* default */.A.post("".concat(apiConfig/* ENDPOINT_URL */.m, "/create-notification/"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateComment() {
      return _ref23.apply(this, arguments);
    };
  }();
  var handleSubmitUpdateStatus = /*#__PURE__*/function () {
    var _ref24 = SellShopInvoiceView_asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        status
      };
      try {
        var res = yield axios/* default */.A.put("".concat(apiConfig/* ENDPOINT_URL */.m, "/update-pos/").concat(updateId), data);
        if (res) {
          handleCreateComment();
          handleOpenLoading();
        }
      } catch (error) {
        console.error('Error making POST request:', error);
      }
    });
    return function handleSubmitUpdateStatus(_x7) {
      return _ref24.apply(this, arguments);
    };
  }();
  {/** Update Invoice Status End */}
  var handleHideRow = /*#__PURE__*/function () {
    var _ref25 = SellShopInvoiceView_asyncToGenerator(function* (id) {
      if (user.data.role === 'CEO') {
        try {
          if (hiddenRow.includes(id)) {
            setHiddenRow(hiddenRow.filter(row => row !== id));
            var result = hidden.filter(row => row.idRow === id).map(row => row._id);
            var hiddenId = result.toString();
            yield axios/* default */.A.delete("".concat(apiConfig/* ENDPOINT_URL */.m, "/delete-hidden/").concat(hiddenId));
          } else {
            setHiddenRow([...hiddenRow, id]);
            yield axios/* default */.A.post("".concat(apiConfig/* ENDPOINT_URL */.m, "/create-hidden"), {
              idRow: id,
              hiddenByCEO: true
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
    return function handleHideRow(_x8) {
      return _ref25.apply(this, arguments);
    };
  }();
  var rowRenderer = params => {
    if (hiddenRow.includes(params.row._id)) {
      return null;
    }
    return /*#__PURE__*/react.createElement("div", null, params.row[params.field]);
  };
  var _useState53 = (0,react.useState)([]),
    _useState54 = SellShopInvoiceView_slicedToArray(_useState53, 2),
    filteredRows = _useState54[0],
    setFilteredRows = _useState54[1];
  (0,react.useEffect)(() => {
    var Inv = (displayedInvoice || []).filter(row => !hiddenRow.includes(row._id));
    setFilteredRows(Inv);
  }, [displayedInvoice, hiddenRow]);
  {/** search start */}
  var _useState55 = (0,react.useState)(""),
    _useState56 = SellShopInvoiceView_slicedToArray(_useState55, 2),
    searchInvoice = _useState56[0],
    setSearchInvoice = _useState56[1];
  (0,react.useState)(() => {
    var storedValue = localStorage.getItem('QuickFilterInvoice');
    if (storedValue) {
      setSearchInvoice(storedValue);
    }
  });
  var _React$useState = react.useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState2 = SellShopInvoiceView_slicedToArray(_React$useState, 2),
    filterModel = _React$useState2[0],
    setFilterModel = _React$useState2[1];
  var _useState57 = (0,react.useState)({}),
    _useState58 = SellShopInvoiceView_slicedToArray(_useState57, 2),
    columnVisibilityModel = _useState58[0],
    setColumnVisibilityModel = _useState58[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsInvoice', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    setFilterModel(newModel);
  };
  (0,react.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterInvoiceTst'));
    if (storedQuick) {
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsInvoice'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchInvoice]);
  var _React$useState3 = react.useState(true),
    _React$useState4 = SellShopInvoiceView_slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  {/** search end */}
  var columns = [{
    field: 'factureNumber',
    headerName: 'Invoice#',
    width: 100,
    renderCell: params => /*#__PURE__*/react.createElement("div", null, " ", /*#__PURE__*/react.createElement("span", null, "S-00"), /*#__PURE__*/react.createElement("span", null, params.row.factureNumber), " ")
  }, {
    field: 'customer',
    headerName: 'Customer Name',
    width: sideBar ? 180 : 300,
    valueGetter: params => params.row.customerName.customerName.toUpperCase()
  }, {
    field: 'status',
    headerName: 'Status',
    width: sideBar ? 100 : 150,
    renderCell: params => /*#__PURE__*/react.createElement(Typography/* default */.A, {
      color: params.row.status === "Draft" ? "gray" : params.row.status === "Sent" ? "blue" : params.row.status === "Decline" ? "red" : params.row.status === "Pending" ? "#801313" : params.row.status === "Paid" ? "#4caf50" : params.row.status === "Partially-Paid" ? "#fb8c00" : params.row.status === "Refunded" ? "#795548" : params.row.status === "Partially-Refunded" ? "#ff9800" : params.row.status === "Void" ? "red" : "black"
    }, params.row.status)
  }, {
    field: 'dateField',
    headerName: 'Date',
    width: 150
  }, {
    field: 'totalInvoice',
    headerName: 'I-Amount',
    width: sideBar ? 150 : 200,
    renderCell: params => "FC".concat(params.row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))
  }, {
    field: 'TotalAmountPaid',
    headerName: 'Total Paid',
    width: sideBar ? 220 : 230,
    renderCell: params => {
      var _params$row$TotalAmou;
      return "FC".concat((_params$row$TotalAmou = params.row.TotalAmountPaid) === null || _params$row$TotalAmou === void 0 ? void 0 : _params$row$TotalAmou.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($").concat((params.row.TotalAmountPaid / params.row.rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")");
    }
  }, {
    field: 'balanceDue',
    headerName: 'B-Due',
    width: sideBar ? 100 : 120,
    renderCell: params => "FC".concat((params.row.balanceDue + (params.row.creditFC + params.row.creditUsd * params.row.rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))
  }, {
    field: 'view',
    headerName: 'View',
    width: 50,
    renderCell: params => /*#__PURE__*/react.createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      onClick: () => handleOpenView(params.row._id),
      hidden: InvoiceInfoV.length === 0
    }, /*#__PURE__*/react.createElement(Visibility/* default */.A, {
      style: {
        color: '#202a5a'
      }
    }))))
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 50,
    renderCell: params => /*#__PURE__*/react.createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      disabled: InvoiceInfoU.length === 0
    }, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
      to: "/ShopPosUpdateForm/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react.createElement(Edit/* default */.A, {
      style: {
        color: 'gray'
      }
    })))))
  }, {
    field: 'Refund',
    headerName: 'Refund',
    width: 60,
    renderCell: params => {
      var _user$data;
      var isGG = (user === null || user === void 0 || (_user$data = user.data) === null || _user$data === void 0 ? void 0 : _user$data.userName) === 'GG' || (user === null || user === void 0 ? void 0 : user.userName) === 'GG';
      var isNotAllowed = InvoiceInfoU.length === 0 && !isGG;
      var isInvalidStatus = params.row.status === 'Draft' || params.row.status === 'Void' || params.row.status === 'Refunded';
      var isDisabled = isNotAllowed || isInvalidStatus;
      return /*#__PURE__*/react.createElement(RefundTooltip, {
        title: isNotAllowed ? "No Permission to Refund" : "Refund"
      }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
        onClick: () => handleOpenRefund(params.row._id),
        disabled: isDisabled
      }, /*#__PURE__*/react.createElement(SettingsBackupRestore/* default */.A, {
        style: {
          cursor: isDisabled ? 'default' : 'pointer',
          color: isDisabled ? 'lightgray' : 'orange'
        }
      }))));
    }
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 50,
    renderCell: params => /*#__PURE__*/react.createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react.createElement("span", null, "                                ", /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      onClick: () => handleOpen(params.row._id),
      disabled: InvoiceInfoD.length === 0
    }, /*#__PURE__*/react.createElement(Delete/* default */.A, {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react.createElement(CssBaseline/* default */.Ay, null), /*#__PURE__*/react.createElement(SellShopInvoiceView_AppBar, {
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
    sx: SellShopInvoiceView_objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react.createElement(Menu/* default */.A, null)), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Invoicing"), /*#__PURE__*/react.createElement(NotificationVIewInfo/* default */.A, null), /*#__PURE__*/react.createElement(MessageAdminView/* default */.A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react.createElement(NetworkLogoutIcon/* default */.A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react.createElement(SellShopInvoiceView_Drawer, {
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
  }, /*#__PURE__*/react.createElement(SideShop/* default */.A, null))), /*#__PURE__*/react.createElement(Box/* default */.A, {
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
      mt: 0.5,
      px: {
        xs: 1,
        sm: 2
      }
    }
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'grid',
      gridTemplateColumns: {
        xs: 'repeat(2, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(4, 1fr)'
      },
      gap: 1,
      mb: 0.75,
      mt: 0.25
    }
  }, [{
    key: 'ALL',
    label: 'ALL INVOICES',
    count: statusCounts.all,
    color: '#30368a',
    bgLight: '#eef2ff',
    icon: /*#__PURE__*/react.createElement(Assignment/* default */.A, {
      sx: {
        fontSize: 15,
        color: '#30368a'
      }
    })
  }, {
    key: 'Paid',
    label: 'PAID',
    count: statusCounts.paid,
    color: '#2e7d32',
    bgLight: '#e8f5e9',
    icon: /*#__PURE__*/react.createElement(CheckCircle/* default */.A, {
      sx: {
        fontSize: 15,
        color: '#2e7d32'
      }
    })
  }, {
    key: 'Partially-Paid',
    label: 'PARTIALLY-PAID',
    count: statusCounts.partiallyPaid,
    color: '#fb8c00',
    bgLight: '#fff3e0',
    icon: /*#__PURE__*/react.createElement(PendingActions, {
      sx: {
        fontSize: 15,
        color: '#fb8c00'
      }
    })
  }, {
    key: 'Draft',
    label: 'DRAFT',
    count: statusCounts.draft,
    color: '#78909c',
    bgLight: '#eceff1',
    icon: /*#__PURE__*/react.createElement(EditNote/* default */.A, {
      sx: {
        fontSize: 15,
        color: '#78909c'
      }
    })
  }].map(card => {
    var isSelected = statusFilter.toLowerCase() === card.key.toLowerCase();
    return /*#__PURE__*/react.createElement(Box/* default */.A, {
      key: card.key,
      onClick: () => handleStatusClick(card.key),
      sx: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        p: '6px 10px',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: isSelected ? "2px solid ".concat(card.color) : '1px solid #e2e8f0',
        boxShadow: isSelected ? "0 4px 12px -2px ".concat(card.color, "33, 0 2px 4px -1px rgba(0, 0, 0, 0.06)") : '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        transform: isSelected ? 'translateY(-1px)' : 'none',
        transition: 'all 0.15s ease-in-out',
        '&:hover': {
          boxShadow: "0 4px 10px -2px ".concat(card.color, "25, 0 2px 4px -1px rgba(0, 0, 0, 0.06)"),
          transform: 'translateY(-1px)',
          borderColor: card.color
        }
      }
    }, isSelected && /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        backgroundColor: card.color
      }
    }), /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 0.25
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      sx: {
        fontSize: '9.5px',
        fontWeight: 700,
        letterSpacing: '0.4px',
        color: isSelected ? card.color : '#64748b',
        textTransform: 'uppercase'
      }
    }, card.label), /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        backgroundColor: card.bgLight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, card.icon)), /*#__PURE__*/react.createElement(Box/* default */.A, {
      sx: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 1
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      sx: {
        fontSize: '16px',
        fontWeight: 800,
        color: isSelected ? card.color : '#1e293b',
        lineHeight: 1.1
      }
    }, (card.count || 0).toLocaleString())));
  })), loadingData ? /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react.createElement(Loader/* default */.A, null))) : /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 0.5,
      mt: 0.25
    }
  }, /*#__PURE__*/react.createElement(Box/* default */.A, null, invoice.length > 0 && selectedRows.length > 1 && selectedRows.length < invoice.length && /*#__PURE__*/react.createElement("button", {
    hidden: user.data.role !== 'CEO',
    onClick: handleOpenAll,
    className: "btnCustomer2"
  }, "Delete multiple"), invoice.length > 0 && selectedRows.length === invoice.length && /*#__PURE__*/react.createElement("button", {
    onClick: handleOpenAll,
    hidden: user.data.role !== 'CEO',
    className: "btnCustomer2"
  }, "Delete all")), !(0,isMobile/* isNativeMobile */.g1)() && /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1
    }
  }, /*#__PURE__*/react.createElement(ViewTooltip, null, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    disabled: InvoiceInfoC.length === 0,
    size: "small"
  }, /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
    to: '/ShopPosForm',
    className: "LinkName"
  }, /*#__PURE__*/react.createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react.createElement(Add/* default */.A, {
    sx: {
      fontSize: 18
    }
  })))))), /*#__PURE__*/react.createElement("button", {
    onClick: handleRefreshSearch,
    className: "btnCustomer2",
    style: {
      height: '32px',
      lineHeight: '32px',
      padding: '0 12px'
    }
  }, "Refresh Search"))), /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      height: (0,isMobile/* isNativeMobile */.g1)() ? 'auto' : 'calc(100vh - 200px)',
      minHeight: 380,
      width: '100%'
    }
  }, user.data.role === 'CEO' ? /*#__PURE__*/react.createElement(DataGrid/* DataGrid */.zh, {
    rows: displayedInvoice,
    columns: columns,
    slots: {
      toolbar: GridToolbar/* GridToolbar */.O
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        quickFilterProps: {
          debounceMs: 500
        },
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    rowRenderer: rowRenderer,
    checkboxSelection: true,
    disableColumnFilter: true,
    disableDensitySelector: true,
    rowSelectionModel: selectedRows,
    filterModel: filterModel,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  }) : /*#__PURE__*/react.createElement(DataGrid/* DataGrid */.zh, {
    rows: filteredRows,
    columns: columns,
    slots: {
      toolbar: GridToolbar/* GridToolbar */.O
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        quickFilterProps: {
          debounceMs: 500
        },
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    rowRenderer: rowRenderer,
    checkboxSelection: true,
    disableDensitySelector: true,
    rowSelectionModel: selectedRows,
    filterModel: filterModel,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  })))))), /*#__PURE__*/react.createElement(Modal/* default */.A, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: SellShopInvoiceView_objectSpread(SellShopInvoiceView_objectSpread({}, SellShopInvoiceView_style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Do you Want to delete?")), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: handleClose,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Cancel")), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react.createElement("button", {
    onClick: handleDelete,
    className: "btnCustomer2",
    style: {
      width: '100%'
    }
  }, "Delete"))))), /*#__PURE__*/react.createElement(Modal/* default */.A, {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: SellShopInvoiceView_objectSpread(SellShopInvoiceView_objectSpread({}, SellShopInvoiceView_style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react.createElement(Close/* default */.A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Update Estimate Status"), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleSubmitUpdateStatus
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(FormControl/* default */.A, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement(InputLabel/* default */.A, {
    id: "status"
  }, "Status"), /*#__PURE__*/react.createElement(Select/* default */.A, {
    required: true,
    id: "status",
    value: status,
    onChange: e => setStatus(e.target.value),
    name: "status",
    label: "status",
    defaultValue: "Draft"
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Draft"
  }, "Draft"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Sent"
  }, "Sent"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Decline"
  }, "Decline"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Void"
  }, "Void"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Pending"
  }, "Pending"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    disabled: true,
    value: "Partially-Paid"
  }, "Partially-Paid"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Free of Charge"
  }, "Free of Charge"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    disabled: true,
    value: "Paid"
  }, "Paid")))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement("button", {
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Update")))))), /*#__PURE__*/react.createElement(Modal/* default */.A, {
    open: loadingOpenModal,
    onClose: handleCloseLoading,
    closeAfterTransition: true,
    BackdropComponent: Backdrop/* default */.A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: SellShopInvoiceView_objectSpread(SellShopInvoiceView_objectSpread({}, SellShopInvoiceView_style), {}, {
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
  })), /*#__PURE__*/react.createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react.createElement("button", {
    onClick: handleCloseLoading,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react.createElement(Modal/* default */.A, {
    open: openDeleteMultiple,
    onClose: handleCloseMultiple,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: SellShopInvoiceView_objectSpread(SellShopInvoiceView_objectSpread({}, SellShopInvoiceView_style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement("h2", null, "Do you want to Delete ?"), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react.createElement("button", {
    className: "btnCustomer2",
    onClick: handleDeleteMany
  }, "Delete"), /*#__PURE__*/react.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseMultiple
  }, "Cancel"))))), /*#__PURE__*/react.createElement(Modal/* default */.A, {
    open: openDeleteAll,
    onClose: handleCloseAll,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: SellShopInvoiceView_objectSpread(SellShopInvoiceView_objectSpread({}, SellShopInvoiceView_style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement("h2", null, "Do you want to Delete ?"), selectedRows.length === 1 && /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " Selected rows will be deleted"), selectedRows.length > 1 && selectedRows.length < invoice.length && /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), selectedRows.length === invoice.length && /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All rows will be deleted"), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react.createElement("button", {
    className: "btnCustomer2",
    onClick: handleOpenReasonDelete
  }, "Delete"), /*#__PURE__*/react.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseAll
  }, "Cancel"))))), /*#__PURE__*/react.createElement(Modal/* default */.A, {
    open: modalDeleteOpenLoading,
    onClose: handleDeleteCloseLoading,
    BackdropComponent: Backdrop/* default */.A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: SellShopInvoiceView_objectSpread(SellShopInvoiceView_objectSpread({}, SellShopInvoiceView_style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react.createElement("div", null, loading ? /*#__PURE__*/react.createElement(Loader/* default */.A, null) : /*#__PURE__*/react.createElement("div", {
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
  })), /*#__PURE__*/react.createElement("h2", null, " Data successfully deleted"), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react.createElement("button", {
    onClick: handleDeleteCloseLoading,
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react.createElement(Modal/* default */.A, {
    open: openView,
    onClose: handleCloseView,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: SellShopInvoiceView_objectSpread(SellShopInvoiceView_objectSpread({}, SellShopInvoiceView_style), {}, {
      width: 500,
      maxHeight: 700,
      overflow: 'hidden',
      overflowY: 'scroll'
    })
  }, /*#__PURE__*/react.createElement(ViewTooltip, {
    title: "Print",
    placement: "left"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: handlePrint,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react.createElement(Print/* default */.A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: handleCloseView,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react.createElement(Close/* default */.A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, posInvoice && /*#__PURE__*/react.createElement("table", {
    style: {
      width: '100%',
      marginTop: '-10px',
      fontSize: '12px',
      color: 'black',
      marginTop: '0'
    },
    ref: componentRef
  }, /*#__PURE__*/react.createElement("thead", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    colSpan: 6,
    style: {
      fontWeight: 'bold',
      textAlign: 'center'
    }
  }, "GLOBAL GATE SARL")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    colSpan: 6,
    style: {
      fontWeight: 'normal',
      textAlign: 'center'
    }
  }, "RCM CD/KWZ/RCCM/22-B-00317 ", /*#__PURE__*/react.createElement("br", null), "ID NAT 14-H5300N11179P ", /*#__PURE__*/react.createElement("br", null), "AVENUE SALONGO Q/INDUSTRIEL C/MANIKA ", /*#__PURE__*/react.createElement("br", null), "KOLWEZI LUALABA ", /*#__PURE__*/react.createElement("br", null), "DR CONGO ", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, "Invoice"), (posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.status) === 'Refunded' && /*#__PURE__*/react.createElement("div", {
    style: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: '13px',
      marginTop: '3px'
    }
  }, "*** REFUNDED ***"), (posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.status) === 'Partially-Refunded' && /*#__PURE__*/react.createElement("div", {
    style: {
      color: 'orange',
      fontWeight: 'bold',
      fontSize: '13px',
      marginTop: '3px'
    }
  }, "*** PARTIALLY REFUNDED ***"))), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    colSpan: 1
  }, "Client:"), /*#__PURE__*/react.createElement("th", {
    colSpan: 3
  }, posInvoice === null || posInvoice === void 0 || (_posInvoice$customerN = posInvoice.customerName) === null || _posInvoice$customerN === void 0 ? void 0 : _posInvoice$customerN.customerName))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, "Invoice:"), /*#__PURE__*/react.createElement("td", null, posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.factureNumber), /*#__PURE__*/react.createElement("td", null, "Time:"), /*#__PURE__*/react.createElement("td", null, dayjs_min_default()(posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.time).format('HH:mm'), " H")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null, "Date:"), /*#__PURE__*/react.createElement("td", null, dayjs_min_default()(posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.invoiceDate).format('DD-MM-YYYY')), /*#__PURE__*/react.createElement("td", null, "User:"), /*#__PURE__*/react.createElement("td", null, posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.Create)), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, "#"), /*#__PURE__*/react.createElement("th", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, "Item"), /*#__PURE__*/react.createElement("th", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, "Qty"), /*#__PURE__*/react.createElement("th", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, "Rate"), /*#__PURE__*/react.createElement("th", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, "Total")), posInvoice === null || posInvoice === void 0 || (_posInvoice$items = posInvoice.items) === null || _posInvoice$items === void 0 ? void 0 : _posInvoice$items.map((row, i) => {
    var _row$itemName, _row$itemName2;
    return /*#__PURE__*/react.createElement("tr", {
      key: row.idRow || i
    }, /*#__PURE__*/react.createElement("td", {
      style: {
        borderTop: '1px solid #DDD',
        borderBottom: '1px solid #DDD'
      }
    }, i + 1), /*#__PURE__*/react.createElement("td", {
      style: {
        borderTop: '1px solid #DDD',
        borderBottom: '1px solid #DDD'
      }
    }, (((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName.itemName) || ((_row$itemName2 = row.itemName) === null || _row$itemName2 === void 0 ? void 0 : _row$itemName2.itemDescription) || (typeof row.itemName === 'string' ? row.itemName : 'Item')).toUpperCase(), row.refundedQty > 0 && /*#__PURE__*/react.createElement("div", {
      style: {
        color: 'red',
        fontSize: '10px',
        fontStyle: 'italic'
      }
    }, "(Refunded: ", row.refundedQty, " ", row.unit || '', ")")), /*#__PURE__*/react.createElement("td", {
      style: {
        borderTop: '1px solid #DDD',
        borderBottom: '1px solid #DDD'
      }
    }, row.itemQty, " ", row.unit), /*#__PURE__*/react.createElement("td", {
      style: {
        borderTop: '1px solid #DDD',
        borderBottom: '1px solid #DDD'
      }
    }, "FC", parseFloat(row.itemRate || row.itemAmount / (row.itemQty || 1) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react.createElement("td", {
      style: {
        borderTop: '1px solid #DDD',
        borderBottom: '1px solid #DDD'
      }
    }, "FC", parseFloat(row.itemAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
  }), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }), /*#__PURE__*/react.createElement("td", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, "Total"), /*#__PURE__*/react.createElement("td", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD',
      textAlign: 'right'
    },
    colSpan: 3
  }, "FC", posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($", ((posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.subTotal) / (posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", null), /*#__PURE__*/react.createElement("td", null), /*#__PURE__*/react.createElement("td", null), /*#__PURE__*/react.createElement("th", {
    colSpan: 2,
    style: {
      borderBottom: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "Tax Details")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'right'
    }
  }, "Gross Amount"), /*#__PURE__*/react.createElement("th", {
    colSpan: 3,
    style: {
      textAlign: 'right'
    }
  }, "FC", posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($", ((posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.subTotal) / (posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'right'
    }
  }, "TVA @ 16%"), /*#__PURE__*/react.createElement("th", {
    colSpan: 3,
    style: {
      borderBottom: '1px solid #DDD',
      textAlign: 'right'
    }
  }, "FC", posInvoice === null || posInvoice === void 0 || (_posInvoice$tax = posInvoice.tax) === null || _posInvoice$tax === void 0 ? void 0 : _posInvoice$tax.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($", (posInvoice.tax !== undefined ? posInvoice.tax / (posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.rate) : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'right'
    }
  }, "Total General"), /*#__PURE__*/react.createElement("th", {
    colSpan: 3,
    style: {
      borderBottom: '1px solid #DDD',
      textAlign: 'right'
    }
  }, "FC", posInvoice === null || posInvoice === void 0 || (_posInvoice$totalInvo = posInvoice.totalInvoice) === null || _posInvoice$totalInvo === void 0 ? void 0 : _posInvoice$totalInvo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($", (posInvoice.totalInvoice !== undefined ? posInvoice.totalInvoice / (posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.rate) : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), (posInvoice.status === 'Refunded' || posInvoice.status === 'Partially-Refunded' || posInvoice.refundedAmountFC > 0) && /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'right',
      color: 'red'
    }
  }, "Total Refunded"), /*#__PURE__*/react.createElement("th", {
    colSpan: 3,
    style: {
      borderBottom: '1px solid #DDD',
      textAlign: 'right',
      color: 'red'
    }
  }, (() => {
    var refFC = parseFloat(posInvoice.refundedAmountFC) || (posInvoice.items || []).reduce((acc, it) => acc + (parseFloat(it.itemRate) || parseFloat(it.itemAmount) / (parseFloat(it.itemQty) || 1) || 0) * (parseFloat(it.refundedQty) || 0), 0);
    var refUSD = (refFC / (posInvoice.rate || 1)).toFixed(2);
    return "FC ".concat(refFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ").concat(refUSD.replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")");
  })())), (posInvoice.refundedCashFC > 0 || posInvoice.refundedCashUSD > 0) && /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'right',
      color: 'red'
    }
  }, "Cash Refunded"), /*#__PURE__*/react.createElement("th", {
    colSpan: 3,
    style: {
      borderBottom: '1px solid #DDD',
      textAlign: 'right',
      color: 'red'
    }
  }, posInvoice.refundedCashFC > 0 ? 'FC ' + ((_posInvoice$refundedC = posInvoice.refundedCashFC) === null || _posInvoice$refundedC === void 0 ? void 0 : _posInvoice$refundedC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : '', " ", posInvoice.refundedCashFC > 0 && posInvoice.refundedCashUSD > 0 ? ' & ' : '', " ", posInvoice.refundedCashUSD > 0 ? '$ ' + ((_posInvoice$refundedC2 = posInvoice.refundedCashUSD) === null || _posInvoice$refundedC2 === void 0 ? void 0 : _posInvoice$refundedC2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : '')), (posInvoice.totalFC > 0 || posInvoice.totalUSD > 0) && /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'right'
    }
  }, "Amount Received"), /*#__PURE__*/react.createElement("th", {
    colSpan: 3,
    style: {
      borderBottom: '1px solid #DDD',
      textAlign: 'right'
    }
  }, posInvoice.totalFC > 0 ? 'FC ' + ((_posInvoice$totalFC = posInvoice.totalFC) === null || _posInvoice$totalFC === void 0 ? void 0 : _posInvoice$totalFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : '', " ", posInvoice.totalFC > 0 && posInvoice.totalUSD > 0 ? ' & ' : '', " ", posInvoice.totalUSD > 0 ? '$ ' + ((_posInvoice$totalUSD = posInvoice.totalUSD) === null || _posInvoice$totalUSD === void 0 ? void 0 : _posInvoice$totalUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : '')), posInvoice.TotalAmountPaid !== 0 && /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'right'
    }
  }, "Amount Paid"), /*#__PURE__*/react.createElement("th", {
    colSpan: 3,
    style: {
      borderBottom: '1px solid #DDD',
      textAlign: 'right'
    }
  }, "FC", posInvoice === null || posInvoice === void 0 || (_posInvoice$TotalAmou = posInvoice.TotalAmountPaid) === null || _posInvoice$TotalAmou === void 0 ? void 0 : _posInvoice$TotalAmou.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($", (posInvoice.TotalAmountPaid !== undefined ? posInvoice.TotalAmountPaid / (posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.rate) : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), (posInvoice.creditUsd > 0 || posInvoice.creditFC > 0) && /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'right'
    }
  }, "Amount Return"), /*#__PURE__*/react.createElement("th", {
    colSpan: 3,
    style: {
      borderBottom: '1px solid #DDD',
      textAlign: 'right'
    }
  }, posInvoice.creditFC > 0 ? 'FC ' + ((_posInvoice$creditFC = posInvoice.creditFC) === null || _posInvoice$creditFC === void 0 ? void 0 : _posInvoice$creditFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : '', " ", posInvoice.creditUsd > 0 && posInvoice.creditFC > 0 ? ' & ' : '', " ", posInvoice.creditUsd > 0 ? '$ ' + ((_posInvoice$creditUsd = posInvoice.creditUsd) === null || _posInvoice$creditUsd === void 0 ? void 0 : _posInvoice$creditUsd.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : '')), /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    colSpan: 5,
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.note))))))), /*#__PURE__*/react.createElement(Modal/* default */.A, {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: SellShopInvoiceView_objectSpread(SellShopInvoiceView_objectSpread({}, SellShopInvoiceView_style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: handleCloseReasonDelete,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react.createElement(Close/* default */.A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: ", info, "?"), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleDeleteMany
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.A, {
    required: true,
    id: "reason",
    name: "reason",
    multiline: true,
    rows: 4,
    value: reason,
    placeholder: "Reason",
    onChange: e => setReason(e.target.value),
    label: "Reason",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react.createElement(PosRefundModal, {
    open: openRefundModal,
    handleClose: handleCloseRefund,
    posId: refundPosId
  }));
}
/* harmony default export */ const AdminView1_SellShopInvoiceView = (SellShopInvoiceView);

/***/ }

}]);