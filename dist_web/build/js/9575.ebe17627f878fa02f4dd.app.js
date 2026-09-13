"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[9575],{

/***/ 84767
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
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"
}), 'NotificationsNone');

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

/***/ 79575
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68525);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4640);
/* harmony import */ var _mui_icons_material_NotificationsNone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84767);
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55746);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5673);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84976);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47767);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(58331);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71510);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(40301);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1835);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(53071);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(65821);
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;

















var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay)(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
function ExpensesViewAdmin() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_17__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_17__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_18__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          if (navigator.onLine) {
            try {
              var res = yield axios__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_15__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
              var Name = res.data.data.employeeName;
              var Role = res.data.data.role;
              dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_18__/* .setUser */ .gV)({
                userName: Name,
                role: Role,
                id: res.data.data._id
              }));
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          } else {
            var resLocalInfo = yield db.employeeUserSchema.get({
              _id: storesUserId
            });
            var _Name = resLocalInfo.employeeName;
            var _Role = resLocalInfo.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_18__/* .setUser */ .gV)({
              userName: _Name,
              role: _Role,
              id: resLocalInfo._id
            }));
          }
        } else {
          navigate('/');
        }
      });
      return function fetchUser() {
        return _ref7.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_18__/* .logOut */ .je)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    expenses = _useState2[0],
    setExpenses = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    invoice = _useState4[0],
    setInvoice = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    hidden = _useState6[0],
    setHidden = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingData = _useState8[0],
    setLoadingData = _useState8[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_15__/* .ENDPOINT_URL */ .m, "/dailyexpense");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A.get(apiUrl).then(res => {
      // Handle the response data here
      setExpenses(res.data.data.reverse());
      setLoadingData(false);
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
      setLoadingData(false);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_15__/* .ENDPOINT_URL */ .m, "/invoice")).then(res => {
      var _res$data;
      // Handle the response data here
      var result = (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.filter(row => row.Ref && row);
      setInvoice(result);
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
      setLoadingData(false);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_15__/* .ENDPOINT_URL */ .m, "/hidden")).then(res => {
      // Handle the response data here
      setHidden(res.data.data);
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
      setLoadingData(false);
    });
  }, []);
  var newExpense = expenses.filter(row => !invoice.some(item => row.referenceNumber === item.invoiceNumber)).map(row => _objectSpread(_objectSpread({}, row), {}, {
    id: row._id,
    dateField: dayjs__WEBPACK_IMPORTED_MODULE_16___default()(row.expenseDate).format('DD/MM/YYYY')
  }));
  var filteredRows = newExpense.filter(row => !hidden.some(row2 => row2.idRow === row._id));
  {/** search start */}
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    searchInvExpenses = _useState0[0],
    setSearchInvExpenses = _useState0[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    var storedValue = localStorage.getItem('QuickFilterInvExpenses');
    if (storedValue) {
      setSearchInvExpenses(storedValue);
    }
  });
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filterModel = _React$useState2[0],
    setFilterModel = _React$useState2[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState10 = _slicedToArray(_useState1, 2),
    columnVisibilityModel = _useState10[0],
    setColumnVisibilityModel = _useState10[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsInvExpenses', JSON.stringify(newHidden));
  };
  //    localStorage.setItem('QuickFilterInvExpenses',filterModel.quickFilterValues[0] || '')
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (searchInvExpenses !== undefined) {
      setFilterModel(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        quickFilterValues: [searchInvExpenses]
      }));
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsInvExpenses'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchInvExpenses]);
  {/** search end */}
  var columns = [{
    field: 'dateField',
    headerName: 'Date',
    width: 200
  }, {
    field: 'referenceNumber',
    headerName: 'Reference#',
    width: 150,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "INV-", String(params.row.referenceNumber).padStart(6, '0')), " ")
  }, {
    field: 'customer',
    headerName: 'Customer Name',
    width: 250,
    valueGetter: params => params.row.customerName !== undefined ? params.row.customerName.customerName.toUpperCase() : ''
  }, {
    field: 'expenseType',
    headerName: 'Category',
    width: 250
  }, {
    field: 'view',
    headerName: 'View',
    width: 80,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      disabled: user.data.role === 'User'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .k2, {
      to: "/ExpensesViewAdminAll/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      style: {
        color: '#202a5a'
      }
    })))))
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidemnuandcontent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "headername"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "h5"
  }, "Expenses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rightcontent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_NotificationsNone__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    className: "iconesize"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Logout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "invoice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "invoice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    sx: {
      height: 600,
      width: '100%'
    }
  }, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_20__/* .DataGrid */ .zh, {
    rows: newExpense,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_21__/* .GridToolbar */ .O
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
    disableDensitySelector: true,
    filterModel: filterModel,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_20__/* .DataGrid */ .zh, {
    rows: filteredRows,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_21__/* .GridToolbar */ .O
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
    disableColumnFilter: true,
    disableDensitySelector: true,
    filterModel: filterModel,
    onFilterModelChange: newModel => setFilterModel(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpensesViewAdmin);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);