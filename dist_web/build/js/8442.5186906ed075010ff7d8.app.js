"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[8442],{

/***/ 76768
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
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
}), 'VisibilityOff');

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

/***/ 78442
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55746);
/* harmony import */ var _component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34687);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77623);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11848);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(67034);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(99380);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(99571);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(71510);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(99682);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(84976);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(47767);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(58331);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(14519);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(71543);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(97834);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(8451);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(40301);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(82299);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(65821);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(1835);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(53071);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(28597);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(39781);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(5673);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(76768);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(3100);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(95236);
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







































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_ref => {
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
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_ref3 => {
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
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_ref5 => {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay, {
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
function UserAccount() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_20__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__/* .setUser */ .gV)({
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__/* .logOut */ .je)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    account = _useState2[0],
    setAccount = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_20__/* .ENDPOINT_URL */ .m, "/employeeuser"));
          var formatDate = res.data.data.map(item => _objectSpread(_objectSpread({}, item), {}, {
            id: item._id
          }));
          setAccount(formatDate.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    reason = _useState4[0],
    setReason = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    open = _useState6[0],
    setOpen = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    DeleteId = _useState8[0],
    setDeleteId = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    modalOpenLoading = _useState10[0],
    setModalOpenLoading = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loadingOpenModal = _useState12[0],
    setLoadingOpenModal = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loadingOpenModalError = _useState14[0],
    setLoadingOpenModalError = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    openReasonDelete = _useState16[0],
    setOpenReasonDelete = _useState16[1];
  var handleOpenReasonDelete = e => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  {/** Loading Update View Start */}
  var handleOpenLoading = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setOpen1(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleOpenLoadingError = () => {
    setLoadingOpenModalError(true);
    setLoading(true);
    setOpen1(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleCloseLoading = () => {
    window.location.reload();
  };
  var handleCloseLoadingError = () => {
    setLoadingOpenModalError(false);
  };
  {/** Loading Update View End */}
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    setLoadingOpenModal(false);
    setOpen(false);
  };
  var handleCloseModal = () => {
    window.location.reload();
  };
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    nameDelete = _useState18[0],
    setNameDelete = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (DeleteId !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_20__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(DeleteId));
            setNameDelete(res.data.data.employeeName);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchData2() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [DeleteId]);
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + nameDelete,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_20__/* .ENDPOINT_URL */ .m, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_20__/* .ENDPOINT_URL */ .m, "/delete-employeeuser/").concat(DeleteId));
        if (res) {
          handleCreateNotification();
          handleOpenModal();
        }
      } catch (error) {
        alert('try again');
      }
    });
    return function handleDelete(_x) {
      return _ref11.apply(this, arguments);
    };
  }();
  {/** Update Start */}
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    employeeName = _useState20[0],
    setUserAccountName = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    userAccountRole = _useState22[0],
    setUserAccountRole = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState24 = _slicedToArray(_useState23, 2),
    employeeEmail = _useState24[0],
    setUserAccountMail = _useState24[1];
  {/** Change Password Open start */}
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    open1 = _useState26[0],
    setOpen1 = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState28 = _slicedToArray(_useState27, 2),
    updateId = _useState28[0],
    setUpdateId = _useState28[1];
  var handleOpenUpdate = id => {
    setOpen1(true);
    setUpdateId(id);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
    setUpdateId(null);
  };
  {/** Change Password Open end */}
  {/** Change Password Open start */}
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    open2 = _useState30[0],
    setOpen2 = _useState30[1];
  var handleOpenUpdateName = id => {
    setOpen2(true);
    setUpdateId(id);
  };
  var handleCloseUpdateName = () => {
    setOpen2(false);
    setUpdateId(null);
  };
  {/** Change Password Open end */}
  ;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchRelated = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        if (updateId !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_20__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(updateId));
            setUserAccountName(res.data.data.employeeName);
            setUserAccountRole(res.data.data.role);
            setUserAccountMail(res.data.data.employeeEmail);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchRelated() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchRelated();
  }, [updateId]);
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    showPassword = _useState32[0],
    setShowPassword = _useState32[1];
  var handleClickShowPassword = () => setShowPassword(show => !show);
  var handleMouseDownPassword = event => {
    event.preventDefault();
  };
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    showPassword1 = _useState34[0],
    setShowPassword1 = _useState34[1];
  var handleClickShowPassword1 = () => setShowPassword1(show => !show);
  var handleMouseDownPassword1 = event => {
    event.preventDefault();
  };
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState36 = _slicedToArray(_useState35, 2),
    oldPassword = _useState36[0],
    setOldPassword = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState38 = _slicedToArray(_useState37, 2),
    newPassword = _useState38[0],
    setNewPassword = _useState38[1];
  var handleResetPassword = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        var response = yield axios__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_20__/* .API_BASE_URL */ .J, "/auth/passwordreset/"), {
          employeeEmail,
          role: userAccountRole,
          employeeName,
          oldPassword,
          newPassword
        });
        if (response) {
          handleOpenLoading();
        }
      } catch (error) {
        var _error$response;
        react_toastify__WEBPACK_IMPORTED_MODULE_19__/* .toast */ .oR.error(((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || "Invalid old password");
      }
    });
    return function handleResetPassword(_x2) {
      return _ref13.apply(this, arguments);
    };
  }();
  {/** Update End */}
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var columns = [{
    field: 'employeeName',
    headerName: 'User Name',
    width: sideBar ? 320 : 450
  }, {
    field: 'employeeEmail',
    headerName: 'Email',
    width: sideBar ? 320 : 450
  }, {
    field: 'role',
    headerName: 'Role',
    width: 200
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 100,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      onClick: () => handleOpenUpdate(params.row._id),
      disabled: user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__/* .NavLink */ .k2, {
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, {
      style: {
        color: 'gray'
      }
    })))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 100,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "                                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      onClick: () => handleOpen(params.row._id),
      disabled: user.data.role === 'User'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__/* .NavLink */ .k2, {
    disabled: user.data.role !== 'CEO',
    to: "/UserAccountForm",
    className: "ItemsName",
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
    className: "btnCustomer",
    style: {
      fontSize: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      height: 520,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__/* .DataGrid */ .zh, {
    rows: account,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_42__/* .GridToolbar */ .O
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
    checkboxSelection: true,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Do you want to Delete ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer2",
    onClick: handleOpenReasonDelete
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer",
    onClick: handleClose
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    open: modalOpenLoading,
    onClose: handleCloseModal,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Data successfully deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleCloseModal,
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Change Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleResetPassword
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    name: "userName",
    label: "User Name",
    size: "small",
    value: employeeName,
    onChange: e => setUserAccountName(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    size: "small",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    id: "role"
  }, "Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    required: true,
    id: "role",
    value: userAccountRole,
    onChange: e => setUserAccountRole(e.target.value),
    name: "role",
    label: "Role"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "CEO"
  }, "CEO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "Admin"
  }, "Admin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    value: "User"
  }, "User")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null, "Old Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    size: "small",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    id: "outlined-adornment-password",
    type: showPassword ? 'text' : 'password',
    endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      position: "end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      "aria-label": "toggle password visibility",
      onClick: handleClickShowPassword,
      onMouseDown: handleMouseDownPassword,
      edge: "end"
    }, showPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .A, null))),
    onChange: e => setOldPassword(e.target.value)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null, "New Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    size: "small",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    id: "outlined-adornment-password",
    type: showPassword1 ? 'text' : 'password',
    endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      position: "end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      "aria-label": "toggle password visibility",
      onClick: handleClickShowPassword1,
      onMouseDown: handleMouseDownPassword1,
      edge: "end"
    }, showPassword1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .A, null))),
    onChange: e => setNewPassword(e.target.value)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Update")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: handleCloseLoading,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A, {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Password Changed successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleCloseLoading,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    open: loadingOpenModalError,
    onClose: handleCloseLoadingError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A, {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Invalid old password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleCloseLoadingError,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    onClick: handleCloseReasonDelete,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: ", nameDelete, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAccount);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);