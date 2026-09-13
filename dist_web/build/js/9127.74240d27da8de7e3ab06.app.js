"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[9127],{

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

/***/ 67110
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20561);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), 'Delete'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 72297
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20561);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
}), 'Edit'));
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

/***/ 69127
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FleetFormUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68525);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4640);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47767);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97834);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86531);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(71543);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(8451);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(99380);
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(46986);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(71510);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(99682);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(11735);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(67110);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(72297);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(42758);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(40301);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(3100);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(95236);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(14519);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(99571);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(12717);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(1835);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(53071);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_43__);
var _excluded = ["_id"],
  _excluded2 = ["_id"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;

























var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref => {
  var theme = _ref.theme,
    open = _ref.open;
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Ay, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref2 => {
  var theme = _ref2.theme,
    open = _ref2.open;
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
var modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px'
};
function FleetFormUpdate() {
  var _user$data4, _user$data5;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useParams */ .g)(),
    id = _useParams.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    sideBar = _useState2[0],
    setSideBar = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    fleet = _useState4[0],
    setFleet = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    status = _useState6[0],
    setStatus = _useState6[1];

  // Grant Access
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    grantAccess = _useState8[0],
    setGrantAccess = _useState8[1];

  // Edit Vehicle Modal
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    carModal = _useState0[0],
    setCarModal = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      carMake: '',
      carModel: '',
      plateNumber: '',
      chassisNumber: '',
      branchId: ''
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    carData = _useState10[0],
    setCarData = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    branches = _useState12[0],
    setBranches = _useState12[1];

  // Document Modal state
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    docModal = _useState14[0],
    setDocModal = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isEditDoc = _useState16[0],
    setIsEditDoc = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      _id: '',
      documentName: '',
      year: dayjs__WEBPACK_IMPORTED_MODULE_43___default()().format('YYYY'),
      startDate: '',
      expiryDate: '',
      amountPaid: 0,
      isPaid: false,
      notes: ''
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    docData = _useState18[0],
    setDocData = _useState18[1];

  // Oil Change Modal state
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    oilModal = _useState20[0],
    setOilModal = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    isEditOil = _useState22[0],
    setIsEditOil = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      _id: '',
      date: '',
      kilometers: '',
      notes: ''
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    oilData = _useState24[0],
    setOilData = _useState24[1];

  // Year Filter
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All'),
    _useState26 = _slicedToArray(_useState25, 2),
    yearFilter = _useState26[0],
    setYearFilter = _useState26[1];
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_33__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__/* .selectCurrentUser */ .xu);
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useNavigate */ .Zp)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchFleet();
    fetchAccess();
  }, [id, user]);
  var fetchAccess = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      try {
        var _user$data;
        var res = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__/* .cachedGet */ .Fe)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/grantAccess"));
        if (user !== null && user !== void 0 && (_user$data = user.data) !== null && _user$data !== void 0 && _user$data.id) {
          var _res$data;
          var userAccess = (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.filter(row => row.userID === user.data.id);
          if (userAccess.length > 0) {
            setGrantAccess(userAccess[0].modules);
          }
        }
      } catch (error) {
        console.error('Error fetching access:', error);
      }
    });
    return function fetchAccess() {
      return _ref3.apply(this, arguments);
    };
  }();
  var fetchBranches = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* () {
      try {
        var _res$data2;
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/companyProfile"));
        if ((_res$data2 = res.data) !== null && _res$data2 !== void 0 && (_res$data2 = _res$data2.data) !== null && _res$data2 !== void 0 && (_res$data2 = _res$data2[0]) !== null && _res$data2 !== void 0 && _res$data2.branches) {
          setBranches(res.data.data[0].branches);
        }
      } catch (error) {
        console.error('Error fetching branches:', error);
      }
    });
    return function fetchBranches() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchBranches();
  }, []);
  var FleetInfoC = grantAccess.filter(row => row.moduleName === "Fleet Management" && row.access.createM === true);
  var FleetInfoU = grantAccess.filter(row => row.moduleName === "Fleet Management" && row.access.editM === true);
  var FleetInfoD = grantAccess.filter(row => row.moduleName === "Fleet Management" && row.access.deleteM === true);
  var canAdd = FleetInfoC.length > 0;
  var canEdit = FleetInfoU.length > 0;
  var canDelete = FleetInfoD.length > 0;
  var fetchFleet = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/fleet/").concat(id));
        setFleet(res.data);
        setStatus(res.data.status);
      } catch (err) {
        react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.error('Failed to load fleet data');
      }
    });
    return function fetchFleet() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleStatusChange = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(function* (e) {
      var newStatus = e.target.value;
      setStatus(newStatus);
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/fleet/").concat(id), {
          status: newStatus
        });
        react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.success('Status updated');
        fetchFleet();
      } catch (err) {
        react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.error('Failed to update status');
      }
    });
    return function handleStatusChange(_x) {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleUpdateCar = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(function* () {
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/fleet/").concat(id), carData);
        react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.success('Vehicle details updated');
        setCarModal(false);
        fetchFleet();
      } catch (err) {
        react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.error('Failed to update vehicle details');
      }
    });
    return function handleUpdateCar() {
      return _ref7.apply(this, arguments);
    };
  }();
  var handleDeleteCar = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(function* () {
      if (window.confirm("Are you sure you want to delete this vehicle and all its records?")) {
        try {
          yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/fleet/").concat(id));
          react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.success('Vehicle deleted successfully');
          navigate('/FleetViewAdmin');
        } catch (err) {
          react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.error('Failed to delete vehicle');
        }
      }
    });
    return function handleDeleteCar() {
      return _ref8.apply(this, arguments);
    };
  }();
  var handleAddDocument = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(function* () {
      try {
        if (isEditDoc) {
          yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/fleet/").concat(id, "/documents/").concat(docData._id), docData);
          react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.success('Document log updated');
        } else {
          var _id = docData._id,
            postData = _objectWithoutProperties(docData, _excluded);
          yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/fleet/").concat(id, "/documents"), postData);
          react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.success('Document log added');
        }
        setDocModal(false);
        fetchFleet();
      } catch (err) {
        react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.error('Failed to save document');
      }
    });
    return function handleAddDocument() {
      return _ref9.apply(this, arguments);
    };
  }();
  var handleDeleteDocument = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* (docId) {
      if (window.confirm("Are you sure you want to delete this document?")) {
        try {
          yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/fleet/").concat(id, "/documents/").concat(docId));
          react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.success('Document deleted');
          fetchFleet();
        } catch (err) {
          react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.error('Failed to delete document');
        }
      }
    });
    return function handleDeleteDocument(_x2) {
      return _ref0.apply(this, arguments);
    };
  }();
  var handleAddOilChange = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      try {
        if (isEditOil) {
          yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/fleet/").concat(id, "/oilChanges/").concat(oilData._id), oilData);
          react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.success('Oil change log updated');
        } else {
          var _id = oilData._id,
            postData = _objectWithoutProperties(oilData, _excluded2);
          yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/fleet/").concat(id, "/oilChanges"), postData);
          react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.success('Oil change log added');
        }
        setOilModal(false);
        fetchFleet();
      } catch (err) {
        react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.error('Failed to save oil change');
      }
    });
    return function handleAddOilChange() {
      return _ref1.apply(this, arguments);
    };
  }();
  var handleDeleteOilChange = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (oilId) {
      if (window.confirm("Are you sure you want to delete this oil change log?")) {
        try {
          yield axios__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__/* .ENDPOINT_URL */ .m, "/fleet/").concat(id, "/oilChanges/").concat(oilId));
          react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.success('Oil change deleted');
          fetchFleet();
        } catch (err) {
          react_toastify__WEBPACK_IMPORTED_MODULE_39__/* .toast */ .oR.error('Failed to delete oil change');
        }
      }
    });
    return function handleDeleteOilChange(_x3) {
      return _ref10.apply(this, arguments);
    };
  }();
  if (!fleet) {
    var _user$data2, _user$data3;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        backgroundColor: '#f9f9f9',
        height: '100vh',
        width: '100%',
        overflowX: 'hidden'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      sx: {
        display: 'flex'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
      position: "absolute",
      open: sideBar,
      style: {
        backgroundColor: '#202a5a'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
      sx: {
        pr: '24px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      edge: "start",
      color: "inherit",
      onClick: () => setSideBar(!sideBar),
      sx: _objectSpread({
        marginRight: '36px'
      }, sideBar && {
        display: 'none'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      component: "h1",
      variant: "h6",
      color: "inherit",
      noWrap: true,
      sx: {
        flexGrow: 1
      }
    }, "Loading Vehicle..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {
      name: user === null || user === void 0 || (_user$data2 = user.data) === null || _user$data2 === void 0 ? void 0 : _user$data2.userName,
      role: user === null || user === void 0 || (_user$data3 = user.data) === null || _user$data3 === void 0 ? void 0 : _user$data3.role
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      color: "inherit",
      onClick: () => {
        localStorage.removeItem('token');
        navigate('/LoginSystem');
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {
      style: {
        color: 'white'
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer, {
      variant: "permanent",
      open: sideBar,
      onMouseEnter: () => setSideBar(true),
      onMouseLeave: () => setSideBar(false)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1]
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      onClick: () => setSideBar(!sideBar)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
      sx: {
        height: '700px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      component: "main",
      sx: {
        backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      maxWidth: "lg",
      sx: {
        mt: 4,
        mb: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      variant: "h5",
      align: "center",
      style: {
        marginTop: '100px',
        color: '#666'
      }
    }, "Loading Vehicle Data...")))));
  }
  var filteredDocuments = fleet.documents.filter(doc => yearFilter === 'All' || String(doc.year) === String(yearFilter));
  var availableYears = ['All', ...new Set(fleet.documents.map(d => d.year))].sort();
  var handlePrintDocuments = () => {
    document.body.classList.add('printing-document-history');
    window.print();
    setTimeout(() => {
      document.body.classList.remove('printing-document-history');
    }, 1000);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      backgroundColor: '#f9f9f9',
      height: '100vh',
      width: '100%',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    style: {
      backgroundColor: '#202a5a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    sx: {
      pr: '24px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    onClick: () => setSideBar(!sideBar),
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Vehicle Details: ", fleet.plateNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {
    name: user === null || user === void 0 || (_user$data4 = user.data) === null || _user$data4 === void 0 ? void 0 : _user$data4.userName,
    role: user === null || user === void 0 || (_user$data5 = user.data) === null || _user$data5 === void 0 ? void 0 : _user$data5.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    color: "inherit",
    onClick: () => {
      localStorage.removeItem('token');
      navigate('/LoginSystem');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    onClick: () => setSideBar(!sideBar)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    maxWidth: "lg",
    sx: {
      mt: 4,
      mb: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      mb: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    variant: "outlined",
    style: {
      borderColor: '#202a5a',
      color: '#202a5a'
    },
    onClick: () => navigate('/FleetViewAdmin'),
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, null)
  }, "Back to List")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      mb: 3,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "h6"
  }, "Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    variant: "outlined",
    size: "small",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, null),
    sx: {
      mr: 1
    },
    disabled: !canEdit,
    onClick: () => {
      setCarData(fleet);
      setCarModal(true);
    }
  }, "Edit Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    variant: "outlined",
    color: "error",
    size: "small",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, null),
    disabled: !canDelete,
    onClick: handleDeleteCar
  }, "Delete Vehicle"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    container: true,
    spacing: 3,
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    color: "textSecondary"
  }, "Make/Model"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, fleet.carMake, " ", fleet.carModel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    color: "textSecondary"
  }, "Plate #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, fleet.plateNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    color: "textSecondary"
  }, "Chassis #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, fleet.chassisNumber || 'N/A')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    color: "textSecondary"
  }, "Branch ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, fleet.branchId || 'HQ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: status,
    label: "Status",
    onChange: handleStatusChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "Running"
  }, "Running"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "Stopped"
  }, "Stopped"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "Sold"
  }, "Sold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: "Damaged"
  }, "Damaged")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      mb: 3,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      mb: 2,
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "h6"
  }, "Document History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      gap: 2,
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    size: "small",
    sx: {
      minWidth: 120
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, null, "Filter Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: yearFilter,
    label: "Filter Year",
    onChange: e => setYearFilter(e.target.value)
  }, availableYears.map(yr => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    key: yr,
    value: yr
  }, yr)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    variant: "outlined",
    size: "small",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, null),
    onClick: handlePrintDocuments
  }, "Print"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    variant: "contained",
    size: "small",
    disabled: !canAdd,
    style: {
      backgroundColor: '#202a5a'
    },
    onClick: () => {
      setIsEditDoc(false);
      setDocData({
        _id: '',
        documentName: '',
        year: dayjs__WEBPACK_IMPORTED_MODULE_43___default()().format('YYYY'),
        startDate: '',
        expiryDate: '',
        amountPaid: 0,
        isPaid: false,
        notes: ''
      });
      setDocModal(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, null), " Add Document"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    id: "printable-document-history",
    sx: {
      height: 800,
      width: '100%',
      '& .row-expiring-soon': {
        backgroundColor: '#fff3e0',
        '&:hover': {
          backgroundColor: '#ffe0b2'
        }
      },
      '& .row-expired': {
        backgroundColor: '#ffebee',
        '&:hover': {
          backgroundColor: '#ffcdd2'
        }
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    className: "print-header",
    sx: {
      display: 'none',
      '@media print': {
        display: 'block',
        mb: 2,
        pb: 1,
        borderBottom: '1px solid #ccc'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "h5"
  }, "Vehicle Details: ", fleet.plateNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "subtitle1"
  }, "Make/Model: ", fleet.carMake, " ", fleet.carModel, " | Chassis: ", fleet.chassisNumber || 'N/A', " | Branch: ", fleet.branchId || 'HQ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__/* .DataGrid */ .zh, {
    rows: filteredDocuments,
    getRowId: row => row._id,
    columns: [{
      field: 'documentName',
      headerName: 'Document',
      flex: 1
    }, {
      field: 'year',
      headerName: 'Year',
      width: 100
    }, {
      field: 'startDate',
      headerName: 'Valid From',
      flex: 1,
      valueFormatter: params => dayjs__WEBPACK_IMPORTED_MODULE_43___default()(params.value).format('DD/MM/YYYY')
    }, {
      field: 'expiryDate',
      headerName: 'Expires',
      flex: 1,
      valueFormatter: params => dayjs__WEBPACK_IMPORTED_MODULE_43___default()(params.value).format('DD/MM/YYYY')
    }, {
      field: 'amountPaid',
      headerName: 'Cost',
      width: 120,
      valueFormatter: params => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(params.value || 0)
    }, {
      field: 'isPaid',
      headerName: 'Paid?',
      width: 100,
      type: 'boolean'
    }, {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        size: "small",
        color: "primary",
        disabled: !canEdit,
        onClick: () => {
          setIsEditDoc(true);
          setDocData(params.row);
          setDocModal(true);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, {
        fontSize: "small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        size: "small",
        color: "error",
        disabled: !canDelete,
        onClick: () => handleDeleteDocument(params.row._id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, {
        fontSize: "small"
      })))
    }],
    getRowClassName: params => {
      var latestDocs = {};
      fleet.documents.forEach(doc => {
        var exp = dayjs__WEBPACK_IMPORTED_MODULE_43___default()(doc.expiryDate);
        if (!latestDocs[doc.documentName] || exp.isAfter(latestDocs[doc.documentName])) {
          latestDocs[doc.documentName] = exp;
        }
      });
      var isLatest = dayjs__WEBPACK_IMPORTED_MODULE_43___default()(params.row.expiryDate).isSame(latestDocs[params.row.documentName]);
      if (isLatest) {
        var diff = dayjs__WEBPACK_IMPORTED_MODULE_43___default()(params.row.expiryDate).diff(dayjs__WEBPACK_IMPORTED_MODULE_43___default()(), 'day');
        if (diff < 0 && !params.row.isPaid) {
          return 'row-expired';
        } else if (diff <= 7 && !params.row.isPaid) {
          return 'row-expiring-soon';
        }
      }
      return '';
    },
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_42__/* .GridToolbar */ .O
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        quickFilterProps: {
          debounceMs: 500
        }
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      mb: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "h6"
  }, "Oil Changes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    variant: "contained",
    size: "small",
    disabled: !canAdd,
    style: {
      backgroundColor: '#202a5a'
    },
    onClick: () => {
      setIsEditOil(false);
      setOilData({
        _id: '',
        date: '',
        kilometers: '',
        notes: ''
      });
      setOilModal(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, null), " Log Oil Change")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: 500,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__/* .DataGrid */ .zh, {
    rows: fleet.oilChanges,
    getRowId: row => row._id,
    columns: [{
      field: 'date',
      headerName: 'Date',
      flex: 1,
      valueFormatter: params => dayjs__WEBPACK_IMPORTED_MODULE_43___default()(params.value).format('DD/MM/YYYY')
    }, {
      field: 'kilometers',
      headerName: 'Kilometers (KM)',
      flex: 1
    }, {
      field: 'notes',
      headerName: 'Notes',
      flex: 2
    }, {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        size: "small",
        color: "primary",
        disabled: !canEdit,
        onClick: () => {
          setIsEditOil(true);
          setOilData(params.row);
          setOilModal(true);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, {
        fontSize: "small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        size: "small",
        color: "error",
        disabled: !canDelete,
        onClick: () => handleDeleteOilChange(params.row._id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, {
        fontSize: "small"
      })))
    }],
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_42__/* .GridToolbar */ .O
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        quickFilterProps: {
          debounceMs: 500
        }
      }
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    open: carModal,
    onClose: () => setCarModal(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: modalStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "h6",
    mb: 2
  }, "Edit Vehicle Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Make",
    size: "small",
    sx: {
      mb: 2
    },
    value: carData.carMake,
    onChange: e => setCarData(_objectSpread(_objectSpread({}, carData), {}, {
      carMake: e.target.value
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Model",
    size: "small",
    sx: {
      mb: 2
    },
    value: carData.carModel,
    onChange: e => setCarData(_objectSpread(_objectSpread({}, carData), {}, {
      carModel: e.target.value
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Plate Number",
    size: "small",
    sx: {
      mb: 2
    },
    value: carData.plateNumber,
    onChange: e => setCarData(_objectSpread(_objectSpread({}, carData), {}, {
      plateNumber: e.target.value
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Chassis Number",
    size: "small",
    sx: {
      mb: 2
    },
    value: carData.chassisNumber,
    onChange: e => setCarData(_objectSpread(_objectSpread({}, carData), {}, {
      chassisNumber: e.target.value
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, null, "Branch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: carData.branchId || 'HQ',
    label: "Branch",
    onChange: e => setCarData(_objectSpread(_objectSpread({}, carData), {}, {
      branchId: e.target.value
    }))
  }, branches.map(b => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    key: b.branchId,
    value: b.branchId
  }, b.branchName, " (", b.branchId, ")")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    variant: "contained",
    fullWidth: true,
    style: {
      backgroundColor: '#202a5a'
    },
    onClick: handleUpdateCar
  }, "Update Vehicle Details"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    open: docModal,
    onClose: () => setDocModal(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: modalStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "h6",
    mb: 2
  }, isEditDoc ? 'Edit Document Payment Log' : 'Add Document Payment Log'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    freeSolo: true,
    options: ["CARTE ROSE (VEHICLE REGISTRATION CARD)", "CONTRÔLE TECHNIQUE (ROADWORTHINESS CERTIFICATE)", "STATIONNEMENT", "VIGNETTE", "ATTESTATION D'ASSURANCE (INSURANCE CERTIFICATE)", "AUTORISATION TRANSPORT (ONLY FOR TRUCKS)"],
    value: docData.documentName || '',
    onChange: (event, newValue) => {
      setDocData(_objectSpread(_objectSpread({}, docData), {}, {
        documentName: newValue || ''
      }));
    },
    onInputChange: (event, newInputValue) => {
      setDocData(_objectSpread(_objectSpread({}, docData), {}, {
        documentName: newInputValue || ''
      }));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, _extends({}, params, {
      label: "Document Name",
      size: "small",
      sx: {
        mb: 2
      },
      fullWidth: true
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Year",
    size: "small",
    sx: {
      mb: 2
    },
    value: docData.year,
    onChange: e => setDocData(_objectSpread(_objectSpread({}, docData), {}, {
      year: e.target.value
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    fullWidth: true,
    type: "date",
    label: "Start Date",
    size: "small",
    InputLabelProps: {
      shrink: true
    },
    sx: {
      mb: 2
    },
    value: docData.startDate,
    onChange: e => setDocData(_objectSpread(_objectSpread({}, docData), {}, {
      startDate: e.target.value
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    fullWidth: true,
    type: "date",
    label: "Expiry Date",
    size: "small",
    InputLabelProps: {
      shrink: true
    },
    sx: {
      mb: 2
    },
    value: docData.expiryDate,
    onChange: e => setDocData(_objectSpread(_objectSpread({}, docData), {}, {
      expiryDate: e.target.value
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    fullWidth: true,
    type: "number",
    label: "Amount Paid",
    size: "small",
    sx: {
      mb: 2
    },
    value: docData.amountPaid,
    onChange: e => setDocData(_objectSpread(_objectSpread({}, docData), {}, {
      amountPaid: e.target.value
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    sx: {
      mb: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, null, "Is Paid?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: docData.isPaid,
    label: "Is Paid?",
    onChange: e => setDocData(_objectSpread(_objectSpread({}, docData), {}, {
      isPaid: e.target.value
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: true
  }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    value: false
  }, "No"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    variant: "contained",
    fullWidth: true,
    style: {
      backgroundColor: '#202a5a'
    },
    onClick: handleAddDocument
  }, "Save Document"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    open: oilModal,
    onClose: () => setOilModal(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: modalStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "h6",
    mb: 2
  }, "Log Oil Change"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    fullWidth: true,
    type: "date",
    label: "Date",
    size: "small",
    InputLabelProps: {
      shrink: true
    },
    sx: {
      mb: 2
    },
    value: oilData.date,
    onChange: e => setOilData(_objectSpread(_objectSpread({}, oilData), {}, {
      date: e.target.value
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    fullWidth: true,
    type: "number",
    label: "Kilometers (KM)",
    size: "small",
    sx: {
      mb: 2
    },
    value: oilData.kilometers,
    onChange: e => setOilData(_objectSpread(_objectSpread({}, oilData), {}, {
      kilometers: e.target.value
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    fullWidth: true,
    label: "Notes",
    size: "small",
    multiline: true,
    rows: 3,
    sx: {
      mb: 2
    },
    value: oilData.notes,
    onChange: e => setOilData(_objectSpread(_objectSpread({}, oilData), {}, {
      notes: e.target.value
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    variant: "contained",
    fullWidth: true,
    style: {
      backgroundColor: '#202a5a'
    },
    onClick: handleAddOilChange
  }, "Save Log"))));
}

/***/ }

}]);