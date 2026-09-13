(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[1251],{

/***/ 84767
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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

/***/ 1251
(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ExpensesView_ExpensesViewAdminAll)
});

// NAMESPACE OBJECT (decoupled): ./node_modules/victory-vendor/es/d3-scale.js
var d3_scale_namespaceObject = {};
__webpack_require__.r(d3_scale_namespaceObject);
__webpack_require__.d(d3_scale_namespaceObject, {
  scaleBand: () => (band/* default */.A),
  scaleDiverging: () => (diverging),
  scaleDivergingLog: () => (divergingLog),
  scaleDivergingPow: () => (divergingPow),
  scaleDivergingSqrt: () => (divergingSqrt),
  scaleDivergingSymlog: () => (divergingSymlog),
  scaleIdentity: () => (identity_identity),
  scaleImplicit: () => (ordinal/* implicit */.h),
  scaleLinear: () => (linear/* default */.A),
  scaleLog: () => (src_log/* default */.A),
  scaleOrdinal: () => (ordinal/* default */.A),
  scalePoint: () => (band/* point */.z),
  scalePow: () => (pow/* default */.Ay),
  scaleQuantile: () => (quantile_quantile),
  scaleQuantize: () => (quantize),
  scaleRadial: () => (radial),
  scaleSequential: () => (sequential/* default */.Ay),
  scaleSequentialLog: () => (sequential/* sequentialLog */.a6),
  scaleSequentialPow: () => (sequential/* sequentialPow */.iG),
  scaleSequentialQuantile: () => (sequentialQuantile),
  scaleSequentialSqrt: () => (sequential/* sequentialSqrt */.ao),
  scaleSequentialSymlog: () => (sequential/* sequentialSymlog */.bZ),
  scaleSqrt: () => (pow/* sqrt */.RZ),
  scaleSymlog: () => (symlog/* default */.A),
  scaleThreshold: () => (threshold/* default */.A),
  scaleTime: () => (time/* default */.A),
  scaleUtc: () => (utcTime/* default */.A),
  tickFormat: () => (tickFormat/* default */.A)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./src/js/component/SidebarDash.js
var SidebarDash = __webpack_require__(4640);
// EXTERNAL MODULE: ./src/js/AdminView1/view.css
var view = __webpack_require__(68525);
// EXTERNAL MODULE: ./src/js/AdminView1/PageView/Chartview.css
var Chartview = __webpack_require__(55746);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/NotificationsNone.js
var NotificationsNone = __webpack_require__(84767);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(14073);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(11641);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(8239);
// EXTERNAL MODULE: ./node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(27558);
// EXTERNAL MODULE: ./node_modules/@mui/material/Autocomplete/Autocomplete.js + 1 modules
var Autocomplete = __webpack_require__(86531);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(69067);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(844);
// EXTERNAL MODULE: ./node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(64137);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(43884);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(86798);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableCell/TableCell.js
var TableCell = __webpack_require__(70691);
// EXTERNAL MODULE: ./node_modules/@mui/material/Modal/Modal.js + 3 modules
var Modal = __webpack_require__(35406);
// EXTERNAL MODULE: ./node_modules/@mui/material/Backdrop/Backdrop.js + 1 modules
var Backdrop = __webpack_require__(47419);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(56655);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/tooltipClasses.js
var tooltipClasses = __webpack_require__(58331);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(47767);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(99380);
// EXTERNAL MODULE: ./src/js/apiConfig.js
var apiConfig = __webpack_require__(71510);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(84976);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(7350);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(85015);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
// EXTERNAL MODULE: ./node_modules/lodash/isNaN.js
var lodash_isNaN = __webpack_require__(11741);
var isNaN_default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(58156);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/isNumber.js
var lodash_isNumber = __webpack_require__(98023);
var isNumber_default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber);
// EXTERNAL MODULE: ./node_modules/lodash/isNil.js
var isNil = __webpack_require__(69843);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);
;// ./node_modules/recharts/es6/util/DataUtils.js
/* unused harmony import specifier */ var DataUtils_isString;
/* unused harmony import specifier */ var DataUtils_isNil;





var mathSign = function mathSign(value) {
  if (value === 0) {
    return 0;
  }
  if (value > 0) {
    return 1;
  }
  return -1;
};
var isPercent = function isPercent(value) {
  return isString_default()(value) && value.indexOf('%') === value.length - 1;
};
var isNumber = function isNumber(value) {
  return isNumber_default()(value) && !isNaN_default()(value);
};
var isNullish = function isNullish(value) {
  return DataUtils_isNil(value);
};
var isNumOrStr = function isNumOrStr(value) {
  return isNumber(value) || isString_default()(value);
};
var idCounter = 0;
var uniqueId = function uniqueId(prefix) {
  var id = ++idCounter;
  return "".concat(prefix || '').concat(id);
};

/**
 * Get percent value of a total value
 * @param {number|string} percent A percent
 * @param {number} totalValue     Total value
 * @param {number} defaultValue   The value returned when percent is undefined or invalid
 * @param {boolean} validate      If set to be true, the result will be validated
 * @return {number} value
 */
var getPercentValue = function getPercentValue(percent, totalValue) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var validate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (!isNumber(percent) && !isString_default()(percent)) {
    return defaultValue;
  }
  var value;
  if (isPercent(percent)) {
    var index = percent.indexOf('%');
    value = totalValue * parseFloat(percent.slice(0, index)) / 100;
  } else {
    value = +percent;
  }
  if (isNaN_default()(value)) {
    value = defaultValue;
  }
  if (validate && value > totalValue) {
    value = totalValue;
  }
  return value;
};
var getAnyElementOfObject = function getAnyElementOfObject(obj) {
  if (!obj) {
    return null;
  }
  var keys = Object.keys(obj);
  if (keys && keys.length) {
    return obj[keys[0]];
  }
  return null;
};
var hasDuplicate = function hasDuplicate(ary) {
  if (!Array.isArray(ary)) {
    return false;
  }
  var len = ary.length;
  var cache = {};
  for (var i = 0; i < len; i++) {
    if (!cache[ary[i]]) {
      cache[ary[i]] = true;
    } else {
      return true;
    }
  }
  return false;
};

/* @todo consider to rename this function into `getInterpolator` */
var interpolateNumber = function interpolateNumber(numberA, numberB) {
  if (isNumber(numberA) && isNumber(numberB)) {
    return function (t) {
      return numberA + t * (numberB - numberA);
    };
  }
  return function () {
    return numberB;
  };
};
function findEntryInArray(ary, specifiedKey, specifiedValue) {
  if (!ary || !ary.length) {
    return null;
  }
  return ary.find(function (entry) {
    return entry && (typeof specifiedKey === 'function' ? specifiedKey(entry) : get_default()(entry, specifiedKey)) === specifiedValue;
  });
}

/**
 * The least square linear regression
 * @param {Array} data The array of points
 * @returns {Object} The domain of x, and the parameter of linear function
 */
var getLinearRegression = function getLinearRegression(data) {
  if (!data || !data.length) {
    return null;
  }
  var len = data.length;
  var xsum = 0;
  var ysum = 0;
  var xysum = 0;
  var xxsum = 0;
  var xmin = Infinity;
  var xmax = -Infinity;
  var xcurrent = 0;
  var ycurrent = 0;
  for (var i = 0; i < len; i++) {
    xcurrent = data[i].cx || 0;
    ycurrent = data[i].cy || 0;
    xsum += xcurrent;
    ysum += ycurrent;
    xysum += xcurrent * ycurrent;
    xxsum += xcurrent * xcurrent;
    xmin = Math.min(xmin, xcurrent);
    xmax = Math.max(xmax, xcurrent);
  }
  var a = len * xxsum !== xsum * xsum ? (len * xysum - xsum * ysum) / (len * xxsum - xsum * xsum) : 0;
  return {
    xmin: xmin,
    xmax: xmax,
    a: a,
    b: (ysum - a * xsum) / len
  };
};

/**
 * Compare values.
 *
 * This function is intended to be passed to `Array.prototype.sort()`. It properly compares generic homogeneous arrays that are either `string[]`,
 * `number[]`, or `Date[]`. When comparing heterogeneous arrays or homogeneous arrays of other types, it will attempt to compare items properly but
 * will fall back to string comparison for mismatched or unsupported types.
 *
 * For some background, `Array.prototype.sort()`'s default comparator coerces each of the array's items into a string and compares the strings. This
 * often leads to undesirable behavior, especially with numerical items.
 *
 * @param {unknown} a The first item to compare
 * @param {unknown} b The second item to compare
 * @return {number} A negative number if a < b, a positive number if a > b, 0 if equal
 */
var compareValues = function compareValues(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a - b;
  }
  if (DataUtils_isString(a) && DataUtils_isString(b)) {
    return a.localeCompare(b);
  }
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() - b.getTime();
  }
  return String(a).localeCompare(String(b));
};
;// ./node_modules/recharts/es6/util/LogUtils.js
/* eslint no-console: 0 */
var isDev = "production" !== 'production';
var warn = function warn(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (isDev && typeof console !== 'undefined' && console.warn) {
    if (format === undefined) {
      console.warn('LogUtils requires an error message argument');
    }
    if (!condition) {
      if (format === undefined) {
        console.warn('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var argIndex = 0;
        console.warn(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
      }
    }
  }
};
// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(1882);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: ./node_modules/lodash/isObject.js
var isObject = __webpack_require__(23805);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject);
// EXTERNAL MODULE: ./node_modules/recharts/node_modules/react-is/index.js
var react_is = __webpack_require__(52199);
;// ./node_modules/recharts/es6/util/ShallowEqual.js
function shallowEqual(a, b) {
  /* eslint-disable no-restricted-syntax */
  for (var key in a) {
    if ({}.hasOwnProperty.call(a, key) && (!{}.hasOwnProperty.call(b, key) || a[key] !== b[key])) {
      return false;
    }
  }
  for (var _key in b) {
    if ({}.hasOwnProperty.call(b, _key) && !{}.hasOwnProperty.call(a, _key)) {
      return false;
    }
  }
  return true;
}
;// ./node_modules/recharts/es6/util/types.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
;


/**
 * Determines how values are stacked:
 *
 * - `none` is the default, it adds values on top of each other. No smarts. Negative values will overlap.
 * - `expand` make it so that the values always add up to 1 - so the chart will look like a rectangle.
 * - `wiggle` and `silhouette` tries to keep the chart centered.
 * - `sign` stacks positive values above zero and negative values below zero. Similar to `none` but handles negatives.
 * - `positive` ignores all negative values, and then behaves like \`none\`.
 *
 * Also see https://d3js.org/d3-shape/stack#stack-offsets
 * (note that the `diverging` offset in d3 is named `sign` in recharts)
 */

//
// Event Handler Types -- Copied from @types/react/index.d.ts and adapted for Props.
//

var SVGContainerPropKeys = ['viewBox', 'children'];
var SVGElementPropKeys = ['aria-activedescendant', 'aria-atomic', 'aria-autocomplete', 'aria-busy', 'aria-checked', 'aria-colcount', 'aria-colindex', 'aria-colspan', 'aria-controls', 'aria-current', 'aria-describedby', 'aria-details', 'aria-disabled', 'aria-errormessage', 'aria-expanded', 'aria-flowto', 'aria-haspopup', 'aria-hidden', 'aria-invalid', 'aria-keyshortcuts', 'aria-label', 'aria-labelledby', 'aria-level', 'aria-live', 'aria-modal', 'aria-multiline', 'aria-multiselectable', 'aria-orientation', 'aria-owns', 'aria-placeholder', 'aria-posinset', 'aria-pressed', 'aria-readonly', 'aria-relevant', 'aria-required', 'aria-roledescription', 'aria-rowcount', 'aria-rowindex', 'aria-rowspan', 'aria-selected', 'aria-setsize', 'aria-sort', 'aria-valuemax', 'aria-valuemin', 'aria-valuenow', 'aria-valuetext', 'className', 'color', 'height', 'id', 'lang', 'max', 'media', 'method', 'min', 'name', 'style',
/*
 * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
 * that can use it and it conflicts with the recharts prop 'type'
 * https://github.com/recharts/recharts/pull/3327
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
 */
// 'type',
'target', 'width', 'role', 'tabIndex', 'accentHeight', 'accumulate', 'additive', 'alignmentBaseline', 'allowReorder', 'alphabetic', 'amplitude', 'arabicForm', 'ascent', 'attributeName', 'attributeType', 'autoReverse', 'azimuth', 'baseFrequency', 'baselineShift', 'baseProfile', 'bbox', 'begin', 'bias', 'by', 'calcMode', 'capHeight', 'clip', 'clipPath', 'clipPathUnits', 'clipRule', 'colorInterpolation', 'colorInterpolationFilters', 'colorProfile', 'colorRendering', 'contentScriptType', 'contentStyleType', 'cursor', 'cx', 'cy', 'd', 'decelerate', 'descent', 'diffuseConstant', 'direction', 'display', 'divisor', 'dominantBaseline', 'dur', 'dx', 'dy', 'edgeMode', 'elevation', 'enableBackground', 'end', 'exponent', 'externalResourcesRequired', 'fill', 'fillOpacity', 'fillRule', 'filter', 'filterRes', 'filterUnits', 'floodColor', 'floodOpacity', 'focusable', 'fontFamily', 'fontSize', 'fontSizeAdjust', 'fontStretch', 'fontStyle', 'fontVariant', 'fontWeight', 'format', 'from', 'fx', 'fy', 'g1', 'g2', 'glyphName', 'glyphOrientationHorizontal', 'glyphOrientationVertical', 'glyphRef', 'gradientTransform', 'gradientUnits', 'hanging', 'horizAdvX', 'horizOriginX', 'href', 'ideographic', 'imageRendering', 'in2', 'in', 'intercept', 'k1', 'k2', 'k3', 'k4', 'k', 'kernelMatrix', 'kernelUnitLength', 'kerning', 'keyPoints', 'keySplines', 'keyTimes', 'lengthAdjust', 'letterSpacing', 'lightingColor', 'limitingConeAngle', 'local', 'markerEnd', 'markerHeight', 'markerMid', 'markerStart', 'markerUnits', 'markerWidth', 'mask', 'maskContentUnits', 'maskUnits', 'mathematical', 'mode', 'numOctaves', 'offset', 'opacity', 'operator', 'order', 'orient', 'orientation', 'origin', 'overflow', 'overlinePosition', 'overlineThickness', 'paintOrder', 'panose1', 'pathLength', 'patternContentUnits', 'patternTransform', 'patternUnits', 'pointerEvents', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'preserveAlpha', 'preserveAspectRatio', 'primitiveUnits', 'r', 'radius', 'refX', 'refY', 'renderingIntent', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'result', 'rotate', 'rx', 'ry', 'seed', 'shapeRendering', 'slope', 'spacing', 'specularConstant', 'specularExponent', 'speed', 'spreadMethod', 'startOffset', 'stdDeviation', 'stemh', 'stemv', 'stitchTiles', 'stopColor', 'stopOpacity', 'strikethroughPosition', 'strikethroughThickness', 'string', 'stroke', 'strokeDasharray', 'strokeDashoffset', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth', 'surfaceScale', 'systemLanguage', 'tableValues', 'targetX', 'targetY', 'textAnchor', 'textDecoration', 'textLength', 'textRendering', 'to', 'transform', 'u1', 'u2', 'underlinePosition', 'underlineThickness', 'unicode', 'unicodeBidi', 'unicodeRange', 'unitsPerEm', 'vAlphabetic', 'values', 'vectorEffect', 'version', 'vertAdvY', 'vertOriginX', 'vertOriginY', 'vHanging', 'vIdeographic', 'viewTarget', 'visibility', 'vMathematical', 'widths', 'wordSpacing', 'writingMode', 'x1', 'x2', 'x', 'xChannelSelector', 'xHeight', 'xlinkActuate', 'xlinkArcrole', 'xlinkHref', 'xlinkRole', 'xlinkShow', 'xlinkTitle', 'xlinkType', 'xmlBase', 'xmlLang', 'xmlns', 'xmlnsXlink', 'xmlSpace', 'y1', 'y2', 'y', 'yChannelSelector', 'z', 'zoomAndPan', 'ref', 'key', 'angle'];
var PolyElementKeys = ['points', 'pathLength'];

/** svg element types that have specific attribute filtration requirements */

/** map of svg element types to unique svg attributes that belong to that element */
var FilteredElementKeyMap = {
  svg: SVGContainerPropKeys,
  polygon: PolyElementKeys,
  polyline: PolyElementKeys
};
var EventKeys = ['dangerouslySetInnerHTML', 'onCopy', 'onCopyCapture', 'onCut', 'onCutCapture', 'onPaste', 'onPasteCapture', 'onCompositionEnd', 'onCompositionEndCapture', 'onCompositionStart', 'onCompositionStartCapture', 'onCompositionUpdate', 'onCompositionUpdateCapture', 'onFocus', 'onFocusCapture', 'onBlur', 'onBlurCapture', 'onChange', 'onChangeCapture', 'onBeforeInput', 'onBeforeInputCapture', 'onInput', 'onInputCapture', 'onReset', 'onResetCapture', 'onSubmit', 'onSubmitCapture', 'onInvalid', 'onInvalidCapture', 'onLoad', 'onLoadCapture', 'onError', 'onErrorCapture', 'onKeyDown', 'onKeyDownCapture', 'onKeyPress', 'onKeyPressCapture', 'onKeyUp', 'onKeyUpCapture', 'onAbort', 'onAbortCapture', 'onCanPlay', 'onCanPlayCapture', 'onCanPlayThrough', 'onCanPlayThroughCapture', 'onDurationChange', 'onDurationChangeCapture', 'onEmptied', 'onEmptiedCapture', 'onEncrypted', 'onEncryptedCapture', 'onEnded', 'onEndedCapture', 'onLoadedData', 'onLoadedDataCapture', 'onLoadedMetadata', 'onLoadedMetadataCapture', 'onLoadStart', 'onLoadStartCapture', 'onPause', 'onPauseCapture', 'onPlay', 'onPlayCapture', 'onPlaying', 'onPlayingCapture', 'onProgress', 'onProgressCapture', 'onRateChange', 'onRateChangeCapture', 'onSeeked', 'onSeekedCapture', 'onSeeking', 'onSeekingCapture', 'onStalled', 'onStalledCapture', 'onSuspend', 'onSuspendCapture', 'onTimeUpdate', 'onTimeUpdateCapture', 'onVolumeChange', 'onVolumeChangeCapture', 'onWaiting', 'onWaitingCapture', 'onAuxClick', 'onAuxClickCapture', 'onClick', 'onClickCapture', 'onContextMenu', 'onContextMenuCapture', 'onDoubleClick', 'onDoubleClickCapture', 'onDrag', 'onDragCapture', 'onDragEnd', 'onDragEndCapture', 'onDragEnter', 'onDragEnterCapture', 'onDragExit', 'onDragExitCapture', 'onDragLeave', 'onDragLeaveCapture', 'onDragOver', 'onDragOverCapture', 'onDragStart', 'onDragStartCapture', 'onDrop', 'onDropCapture', 'onMouseDown', 'onMouseDownCapture', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseMoveCapture', 'onMouseOut', 'onMouseOutCapture', 'onMouseOver', 'onMouseOverCapture', 'onMouseUp', 'onMouseUpCapture', 'onSelect', 'onSelectCapture', 'onTouchCancel', 'onTouchCancelCapture', 'onTouchEnd', 'onTouchEndCapture', 'onTouchMove', 'onTouchMoveCapture', 'onTouchStart', 'onTouchStartCapture', 'onPointerDown', 'onPointerDownCapture', 'onPointerMove', 'onPointerMoveCapture', 'onPointerUp', 'onPointerUpCapture', 'onPointerCancel', 'onPointerCancelCapture', 'onPointerEnter', 'onPointerEnterCapture', 'onPointerLeave', 'onPointerLeaveCapture', 'onPointerOver', 'onPointerOverCapture', 'onPointerOut', 'onPointerOutCapture', 'onGotPointerCapture', 'onGotPointerCaptureCapture', 'onLostPointerCapture', 'onLostPointerCaptureCapture', 'onScroll', 'onScrollCapture', 'onWheel', 'onWheelCapture', 'onAnimationStart', 'onAnimationStartCapture', 'onAnimationEnd', 'onAnimationEndCapture', 'onAnimationIteration', 'onAnimationIterationCapture', 'onTransitionEnd', 'onTransitionEndCapture'];

/** The type of easing function to use for animations */

/** Specifies the duration of animation, the unit of this option is ms. */

/** the offset of a chart, which define the blank space all around */

/**
 * The domain of axis.
 * This is the definition
 *
 * Numeric domain is always defined by an array of exactly two values, for the min and the max of the axis.
 * Categorical domain is defined as array of all possible values.
 *
 * Can be specified in many ways:
 * - array of numbers
 * - with special strings like 'dataMin' and 'dataMax'
 * - with special string math like 'dataMin - 100'
 * - with keyword 'auto'
 * - or a function
 * - array of functions
 * - or a combination of the above
 */

/**
 * NumberDomain is an evaluated {@link AxisDomain}.
 * Unlike {@link AxisDomain}, it has no variety - it's a tuple of two number.
 * This is after all the keywords and functions were evaluated and what is left is [min, max].
 *
 * Know that the min, max values are not guaranteed to be nice numbers - values like -Infinity or NaN are possible.
 *
 * There are also `category` axes that have different things than numbers in their domain.
 */

/** The props definition of base axis */

/** Defines how ticks are placed and whether / how tick collisions are handled.
 * 'preserveStart' keeps the left tick on collision and ensures that the first tick is always shown.
 * 'preserveEnd' keeps the right tick on collision and ensures that the last tick is always shown.
 * 'preserveStartEnd' keeps the left tick on collision and ensures that the first and last ticks are always shown.
 * 'equidistantPreserveStart' selects a number N such that every nTh tick will be shown without collision.
 */

var adaptEventHandlers = function adaptEventHandlers(props, newHandler) {
  if (!props || typeof props === 'function' || typeof props === 'boolean') {
    return null;
  }
  var inputProps = props;
  if ( /*#__PURE__*/(0,react.isValidElement)(props)) {
    inputProps = props.props;
  }
  if (!isObject_default()(inputProps)) {
    return null;
  }
  var out = {};
  Object.keys(inputProps).forEach(function (key) {
    if (EventKeys.includes(key)) {
      out[key] = newHandler || function (e) {
        return inputProps[key](inputProps, e);
      };
    }
  });
  return out;
};
var getEventHandlerOfChild = function getEventHandlerOfChild(originalHandler, data, index) {
  return function (e) {
    originalHandler(data, index, e);
    return null;
  };
};
var adaptEventsOfChild = function adaptEventsOfChild(props, data, index) {
  if (!isObject_default()(props) || _typeof(props) !== 'object') {
    return null;
  }
  var out = null;
  Object.keys(props).forEach(function (key) {
    var item = props[key];
    if (EventKeys.includes(key) && typeof item === 'function') {
      if (!out) out = {};
      out[key] = getEventHandlerOfChild(item, data, index);
    }
  });
  return out;
};
;// ./node_modules/recharts/es6/util/ReactUtils.js
/* unused harmony import specifier */ var ReactUtils_get;
var _excluded = ["children"],
  _excluded2 = ["children"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function ReactUtils_typeof(o) { "@babel/helpers - typeof"; return ReactUtils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ReactUtils_typeof(o); }
;









var REACT_BROWSER_EVENT_MAP = {
  click: 'onClick',
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp',
  mouseover: 'onMouseOver',
  mousemove: 'onMouseMove',
  mouseout: 'onMouseOut',
  mouseenter: 'onMouseEnter',
  mouseleave: 'onMouseLeave',
  touchcancel: 'onTouchCancel',
  touchend: 'onTouchEnd',
  touchmove: 'onTouchMove',
  touchstart: 'onTouchStart',
  contextmenu: 'onContextMenu',
  dblclick: 'onDoubleClick'
};
var SCALE_TYPES = (/* unused pure expression or super */ null && (['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time', 'band', 'point', 'ordinal', 'quantile', 'quantize', 'utc', 'sequential', 'threshold']));
var LEGEND_TYPES = (/* unused pure expression or super */ null && (['plainline', 'line', 'square', 'rect', 'circle', 'cross', 'diamond', 'star', 'triangle', 'wye', 'none']));
var TOOLTIP_TYPES = (/* unused pure expression or super */ null && (['none']));

/**
 * Get the display name of a component
 * @param  {Object} Comp Specified Component
 * @return {String}      Display name of Component
 */
var getDisplayName = function getDisplayName(Comp) {
  if (typeof Comp === 'string') {
    return Comp;
  }
  if (!Comp) {
    return '';
  }
  return Comp.displayName || Comp.name || 'Component';
};

// `toArray` gets called multiple times during the render
// so we can memoize last invocation (since reference to `children` is the same)
var lastChildren = null;
var lastResult = null;
var toArray = function toArray(children) {
  if (children === lastChildren && Array.isArray(lastResult)) {
    return lastResult;
  }
  var result = [];
  react.Children.forEach(children, function (child) {
    if (isNil_default()(child)) return;
    if ((0,react_is.isFragment)(child)) {
      result = result.concat(toArray(child.props.children));
    } else {
      // @ts-expect-error this could still be Iterable<ReactNode> and TS does not like that
      result.push(child);
    }
  });
  lastResult = result;
  lastChildren = children;
  return result;
};

/*
 * Find and return all matched children by type.
 * `type` must be a React.ComponentType
 */
function findAllByType(children, type) {
  var result = [];
  var types = [];
  if (Array.isArray(type)) {
    types = type.map(function (t) {
      return getDisplayName(t);
    });
  } else {
    types = [getDisplayName(type)];
  }
  toArray(children).forEach(function (child) {
    var childType = get_default()(child, 'type.displayName') || get_default()(child, 'type.name');
    if (types.indexOf(childType) !== -1) {
      result.push(child);
    }
  });
  return result;
}

/*
 * Return the first matched child by type, return null otherwise.
 * `type` must be a React.ComponentType
 */
function findChildByType(children, type) {
  var result = findAllByType(children, type);
  return result && result[0];
}

/*
 * Create a new array of children excluding the ones matched the type
 */
var withoutType = function withoutType(children, type) {
  var newChildren = [];
  var types;
  if (Array.isArray(type)) {
    types = type.map(function (t) {
      return getDisplayName(t);
    });
  } else {
    types = [getDisplayName(type)];
  }
  toArray(children).forEach(function (child) {
    var displayName = ReactUtils_get(child, 'type.displayName');
    if (displayName && types.indexOf(displayName) !== -1) {
      return;
    }
    newChildren.push(child);
  });
  return newChildren;
};

/**
 * validate the width and height props of a chart element
 * @param  {Object} el A chart element
 * @return {Boolean}   true If the props width and height are number, and greater than 0
 */
var validateWidthHeight = function validateWidthHeight(el) {
  if (!el || !el.props) {
    return false;
  }
  var _el$props = el.props,
    width = _el$props.width,
    height = _el$props.height;
  if (!isNumber(width) || width <= 0 || !isNumber(height) || height <= 0) {
    return false;
  }
  return true;
};
var SVG_TAGS = ['a', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColormatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-url', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'lineGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'script', 'set', 'stop', 'style', 'svg', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref', 'tspan', 'use', 'view', 'vkern'];
var isSvgElement = function isSvgElement(child) {
  return child && child.type && isString_default()(child.type) && SVG_TAGS.indexOf(child.type) >= 0;
};
var hasClipDot = function hasClipDot(dot) {
  return dot && ReactUtils_typeof(dot) === 'object' && 'clipDot' in dot;
};

/**
 * Checks if the property is valid to spread onto an SVG element or onto a specific component
 * @param {unknown} property property value currently being compared
 * @param {string} key property key currently being compared
 * @param {boolean} includeEvents if events are included in spreadable props
 * @param {boolean} svgElementType checks against map of SVG element types to attributes
 * @returns {boolean} is prop valid
 */
var isValidSpreadableProp = function isValidSpreadableProp(property, key, includeEvents, svgElementType) {
  var _FilteredElementKeyMa;
  /**
   * If the svg element type is explicitly included, check against the filtered element key map
   * to determine if there are attributes that should only exist on that element type.
   * @todo Add an internal cjs version of https://github.com/wooorm/svg-element-attributes for full coverage.
   */
  var matchingElementTypeKeys = (_FilteredElementKeyMa = FilteredElementKeyMap === null || FilteredElementKeyMap === void 0 ? void 0 : FilteredElementKeyMap[svgElementType]) !== null && _FilteredElementKeyMa !== void 0 ? _FilteredElementKeyMa : [];
  return key.startsWith('data-') || !isFunction_default()(property) && (svgElementType && matchingElementTypeKeys.includes(key) || SVGElementPropKeys.includes(key)) || includeEvents && EventKeys.includes(key);
};

/**
 * Filter all the svg elements of children
 * @param  {Array} children The children of a react element
 * @return {Array}          All the svg elements
 */
var filterSvgElements = function filterSvgElements(children) {
  var svgElements = [];
  toArray(children).forEach(function (entry) {
    if (isSvgElement(entry)) {
      svgElements.push(entry);
    }
  });
  return svgElements;
};
var filterProps = function filterProps(props, includeEvents, svgElementType) {
  if (!props || typeof props === 'function' || typeof props === 'boolean') {
    return null;
  }
  var inputProps = props;
  if ( /*#__PURE__*/(0,react.isValidElement)(props)) {
    inputProps = props.props;
  }
  if (!isObject_default()(inputProps)) {
    return null;
  }
  var out = {};

  /**
   * Props are blindly spread onto SVG elements. This loop filters out properties that we don't want to spread.
   * Items filtered out are as follows:
   *   - functions in properties that are SVG attributes (functions are included when includeEvents is true)
   *   - props that are SVG attributes but don't matched the passed svgElementType
   *   - any prop that is not in SVGElementPropKeys (or in EventKeys if includeEvents is true)
   */
  Object.keys(inputProps).forEach(function (key) {
    var _inputProps;
    if (isValidSpreadableProp((_inputProps = inputProps) === null || _inputProps === void 0 ? void 0 : _inputProps[key], key, includeEvents, svgElementType)) {
      out[key] = inputProps[key];
    }
  });
  return out;
};

/**
 * Wether props of children changed
 * @param  {Object} nextChildren The latest children
 * @param  {Object} prevChildren The prev children
 * @return {Boolean}             equal or not
 */
var isChildrenEqual = function isChildrenEqual(nextChildren, prevChildren) {
  if (nextChildren === prevChildren) {
    return true;
  }
  var count = react.Children.count(nextChildren);
  if (count !== react.Children.count(prevChildren)) {
    return false;
  }
  if (count === 0) {
    return true;
  }
  if (count === 1) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return isSingleChildEqual(Array.isArray(nextChildren) ? nextChildren[0] : nextChildren, Array.isArray(prevChildren) ? prevChildren[0] : prevChildren);
  }
  for (var i = 0; i < count; i++) {
    var nextChild = nextChildren[i];
    var prevChild = prevChildren[i];
    if (Array.isArray(nextChild) || Array.isArray(prevChild)) {
      if (!isChildrenEqual(nextChild, prevChild)) {
        return false;
      }
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
    } else if (!isSingleChildEqual(nextChild, prevChild)) {
      return false;
    }
  }
  return true;
};
var isSingleChildEqual = function isSingleChildEqual(nextChild, prevChild) {
  if (isNil_default()(nextChild) && isNil_default()(prevChild)) {
    return true;
  }
  if (!isNil_default()(nextChild) && !isNil_default()(prevChild)) {
    var _ref = nextChild.props || {},
      nextChildren = _ref.children,
      nextProps = _objectWithoutProperties(_ref, _excluded);
    var _ref2 = prevChild.props || {},
      prevChildren = _ref2.children,
      prevProps = _objectWithoutProperties(_ref2, _excluded2);
    if (nextChildren && prevChildren) {
      return shallowEqual(nextProps, prevProps) && isChildrenEqual(nextChildren, prevChildren);
    }
    if (!nextChildren && !prevChildren) {
      return shallowEqual(nextProps, prevProps);
    }
    return false;
  }
  return false;
};
var renderByOrder = function renderByOrder(children, renderMap) {
  var elements = [];
  var record = {};
  toArray(children).forEach(function (child, index) {
    if (isSvgElement(child)) {
      elements.push(child);
    } else if (child) {
      var displayName = getDisplayName(child.type);
      var _ref3 = renderMap[displayName] || {},
        handler = _ref3.handler,
        once = _ref3.once;
      if (handler && (!once || !record[displayName])) {
        var results = handler(child, displayName, index);
        elements.push(results);
        record[displayName] = true;
      }
    }
  });
  return elements;
};
var getReactEventByType = function getReactEventByType(e) {
  var type = e && e.type;
  if (type && REACT_BROWSER_EVENT_MAP[type]) {
    return REACT_BROWSER_EVENT_MAP[type];
  }
  return null;
};
var parseChildIndex = function parseChildIndex(child, children) {
  return toArray(children).indexOf(child);
};
;// ./node_modules/recharts/es6/component/ResponsiveContainer.js
function ResponsiveContainer_typeof(o) { "@babel/helpers - typeof"; return ResponsiveContainer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ResponsiveContainer_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == ResponsiveContainer_typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != ResponsiveContainer_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ResponsiveContainer_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
 */
;





var ResponsiveContainer = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var aspect = _ref.aspect,
    _ref$initialDimension = _ref.initialDimension,
    initialDimension = _ref$initialDimension === void 0 ? {
      width: -1,
      height: -1
    } : _ref$initialDimension,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '100%' : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? '100%' : _ref$height,
    _ref$minWidth = _ref.minWidth,
    minWidth = _ref$minWidth === void 0 ? 0 : _ref$minWidth,
    minHeight = _ref.minHeight,
    maxHeight = _ref.maxHeight,
    children = _ref.children,
    _ref$debounce = _ref.debounce,
    debounce = _ref$debounce === void 0 ? 0 : _ref$debounce,
    id = _ref.id,
    className = _ref.className,
    onResize = _ref.onResize,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  var containerRef = (0,react.useRef)(null);
  var onResizeRef = (0,react.useRef)();
  onResizeRef.current = onResize;
  (0,react.useImperativeHandle)(ref, function () {
    return Object.defineProperty(containerRef.current, 'current', {
      get: function get() {
        // eslint-disable-next-line no-console
        console.warn('The usage of ref.current.current is deprecated and will no longer be supported.');
        return containerRef.current;
      },
      configurable: true
    });
  });
  var _useState = (0,react.useState)({
      containerWidth: initialDimension.width,
      containerHeight: initialDimension.height
    }),
    _useState2 = _slicedToArray(_useState, 2),
    sizes = _useState2[0],
    setSizes = _useState2[1];
  var setContainerSize = (0,react.useCallback)(function (newWidth, newHeight) {
    setSizes(function (prevState) {
      var roundedWidth = Math.round(newWidth);
      var roundedHeight = Math.round(newHeight);
      if (prevState.containerWidth === roundedWidth && prevState.containerHeight === roundedHeight) {
        return prevState;
      }
      return {
        containerWidth: roundedWidth,
        containerHeight: roundedHeight
      };
    });
  }, []);
  (0,react.useEffect)(function () {
    var callback = function callback(entries) {
      var _onResizeRef$current;
      var _entries$0$contentRec = entries[0].contentRect,
        containerWidth = _entries$0$contentRec.width,
        containerHeight = _entries$0$contentRec.height;
      setContainerSize(containerWidth, containerHeight);
      (_onResizeRef$current = onResizeRef.current) === null || _onResizeRef$current === void 0 || _onResizeRef$current.call(onResizeRef, containerWidth, containerHeight);
    };
    if (debounce > 0) {
      callback = throttle_default()(callback, debounce, {
        trailing: true,
        leading: false
      });
    }
    var observer = new ResizeObserver(callback);
    var _containerRef$current = containerRef.current.getBoundingClientRect(),
      containerWidth = _containerRef$current.width,
      containerHeight = _containerRef$current.height;
    setContainerSize(containerWidth, containerHeight);
    observer.observe(containerRef.current);
    return function () {
      observer.disconnect();
    };
  }, [setContainerSize, debounce]);
  var chartContent = (0,react.useMemo)(function () {
    var containerWidth = sizes.containerWidth,
      containerHeight = sizes.containerHeight;
    if (containerWidth < 0 || containerHeight < 0) {
      return null;
    }
    warn(isPercent(width) || isPercent(height), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", width, height);
    warn(!aspect || aspect > 0, 'The aspect(%s) must be greater than zero.', aspect);
    var calculatedWidth = isPercent(width) ? containerWidth : width;
    var calculatedHeight = isPercent(height) ? containerHeight : height;
    if (aspect && aspect > 0) {
      // Preserve the desired aspect ratio
      if (calculatedWidth) {
        // Will default to using width for aspect ratio
        calculatedHeight = calculatedWidth / aspect;
      } else if (calculatedHeight) {
        // But we should also take height into consideration
        calculatedWidth = calculatedHeight * aspect;
      }

      // if maxHeight is set, overwrite if calculatedHeight is greater than maxHeight
      if (maxHeight && calculatedHeight > maxHeight) {
        calculatedHeight = maxHeight;
      }
    }
    warn(calculatedWidth > 0 || calculatedHeight > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);
    var isCharts = !Array.isArray(children) && getDisplayName(children.type).endsWith('Chart');
    return react.Children.map(children, function (child) {
      if ( /*#__PURE__*/react.isValidElement(child)) {
        return /*#__PURE__*/(0,react.cloneElement)(child, _objectSpread({
          width: calculatedWidth,
          height: calculatedHeight
        }, isCharts ? {
          style: _objectSpread({
            height: '100%',
            width: '100%',
            maxHeight: calculatedHeight,
            maxWidth: calculatedWidth
          }, child.props.style)
        } : {}));
      }
      return child;
    });
  }, [aspect, children, height, maxHeight, minHeight, minWidth, sizes, width]);
  return /*#__PURE__*/react.createElement("div", {
    id: id ? "".concat(id) : undefined,
    className: (0,clsx/* default */.A)('recharts-responsive-container', className),
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: width,
      height: height,
      minWidth: minWidth,
      minHeight: minHeight,
      maxHeight: maxHeight
    }),
    ref: containerRef
  }, chartContent);
});
// EXTERNAL MODULE: ./node_modules/lodash/range.js
var range = __webpack_require__(23181);
var range_default = /*#__PURE__*/__webpack_require__.n(range);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(33031);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var tiny_invariant = __webpack_require__(11561);
;// ./node_modules/recharts/es6/container/Surface.js
var Surface_excluded = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Surface_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Surface_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Surface_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
/**
 * @fileOverview Surface
 */
;


function Surface(props) {
  var children = props.children,
    width = props.width,
    height = props.height,
    viewBox = props.viewBox,
    className = props.className,
    style = props.style,
    title = props.title,
    desc = props.desc,
    others = Surface_objectWithoutProperties(props, Surface_excluded);
  var svgView = viewBox || {
    width: width,
    height: height,
    x: 0,
    y: 0
  };
  var layerClass = (0,clsx/* default */.A)('recharts-surface', className);
  return /*#__PURE__*/react.createElement("svg", _extends({}, filterProps(others, true, 'svg'), {
    className: layerClass,
    width: width,
    height: height,
    style: style,
    viewBox: "".concat(svgView.x, " ").concat(svgView.y, " ").concat(svgView.width, " ").concat(svgView.height)
  }), /*#__PURE__*/react.createElement("title", null, title), /*#__PURE__*/react.createElement("desc", null, desc), children);
}
;// ./node_modules/recharts/es6/container/Layer.js
var Layer_excluded = ["children", "className"];
function Layer_extends() { Layer_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Layer_extends.apply(this, arguments); }
function Layer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Layer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Layer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
;


var Layer = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var children = props.children,
    className = props.className,
    others = Layer_objectWithoutProperties(props, Layer_excluded);
  var layerClass = (0,clsx/* default */.A)('recharts-layer', className);
  return /*#__PURE__*/react.createElement("g", Layer_extends({
    className: layerClass
  }, filterProps(others, true), {
    ref: ref
  }), children);
});
;// ./node_modules/recharts/es6/component/DefaultTooltipContent.js
function DefaultTooltipContent_typeof(o) { "@babel/helpers - typeof"; return DefaultTooltipContent_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, DefaultTooltipContent_typeof(o); }
function DefaultTooltipContent_extends() { DefaultTooltipContent_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DefaultTooltipContent_extends.apply(this, arguments); }
function DefaultTooltipContent_slicedToArray(arr, i) { return DefaultTooltipContent_arrayWithHoles(arr) || DefaultTooltipContent_iterableToArrayLimit(arr, i) || DefaultTooltipContent_unsupportedIterableToArray(arr, i) || DefaultTooltipContent_nonIterableRest(); }
function DefaultTooltipContent_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function DefaultTooltipContent_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DefaultTooltipContent_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DefaultTooltipContent_arrayLikeToArray(o, minLen); }
function DefaultTooltipContent_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function DefaultTooltipContent_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function DefaultTooltipContent_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function DefaultTooltipContent_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function DefaultTooltipContent_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? DefaultTooltipContent_ownKeys(Object(t), !0).forEach(function (r) { DefaultTooltipContent_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : DefaultTooltipContent_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function DefaultTooltipContent_defineProperty(obj, key, value) { key = DefaultTooltipContent_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function DefaultTooltipContent_toPropertyKey(t) { var i = DefaultTooltipContent_toPrimitive(t, "string"); return "symbol" == DefaultTooltipContent_typeof(i) ? i : i + ""; }
function DefaultTooltipContent_toPrimitive(t, r) { if ("object" != DefaultTooltipContent_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != DefaultTooltipContent_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview Default Tooltip Content
 */

;




function defaultFormatter(value) {
  return Array.isArray(value) && isNumOrStr(value[0]) && isNumOrStr(value[1]) ? value.join(' ~ ') : value;
}
var DefaultTooltipContent = function DefaultTooltipContent(props) {
  var _props$separator = props.separator,
    separator = _props$separator === void 0 ? ' : ' : _props$separator,
    _props$contentStyle = props.contentStyle,
    contentStyle = _props$contentStyle === void 0 ? {} : _props$contentStyle,
    _props$itemStyle = props.itemStyle,
    itemStyle = _props$itemStyle === void 0 ? {} : _props$itemStyle,
    _props$labelStyle = props.labelStyle,
    labelStyle = _props$labelStyle === void 0 ? {} : _props$labelStyle,
    payload = props.payload,
    formatter = props.formatter,
    itemSorter = props.itemSorter,
    wrapperClassName = props.wrapperClassName,
    labelClassName = props.labelClassName,
    label = props.label,
    labelFormatter = props.labelFormatter,
    _props$accessibilityL = props.accessibilityLayer,
    accessibilityLayer = _props$accessibilityL === void 0 ? false : _props$accessibilityL;
  var renderContent = function renderContent() {
    if (payload && payload.length) {
      var listStyle = {
        padding: 0,
        margin: 0
      };
      var items = (itemSorter ? sortBy_default()(payload, itemSorter) : payload).map(function (entry, i) {
        if (entry.type === 'none') {
          return null;
        }
        var finalItemStyle = DefaultTooltipContent_objectSpread({
          display: 'block',
          paddingTop: 4,
          paddingBottom: 4,
          color: entry.color || '#000'
        }, itemStyle);
        var finalFormatter = entry.formatter || formatter || defaultFormatter;
        var value = entry.value,
          name = entry.name;
        var finalValue = value;
        var finalName = name;
        if (finalFormatter && finalValue != null && finalName != null) {
          var formatted = finalFormatter(value, name, entry, i, payload);
          if (Array.isArray(formatted)) {
            var _formatted = DefaultTooltipContent_slicedToArray(formatted, 2);
            finalValue = _formatted[0];
            finalName = _formatted[1];
          } else {
            finalValue = formatted;
          }
        }
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          react.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(i),
            style: finalItemStyle
          }, isNumOrStr(finalName) ? /*#__PURE__*/react.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, finalName) : null, isNumOrStr(finalName) ? /*#__PURE__*/react.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, separator) : null, /*#__PURE__*/react.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, finalValue), /*#__PURE__*/react.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, entry.unit || ''))
        );
      });
      return /*#__PURE__*/react.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: listStyle
      }, items);
    }
    return null;
  };
  var finalStyle = DefaultTooltipContent_objectSpread({
    margin: 0,
    padding: 10,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    whiteSpace: 'nowrap'
  }, contentStyle);
  var finalLabelStyle = DefaultTooltipContent_objectSpread({
    margin: 0
  }, labelStyle);
  var hasLabel = !isNil_default()(label);
  var finalLabel = hasLabel ? label : '';
  var wrapperCN = (0,clsx/* default */.A)('recharts-default-tooltip', wrapperClassName);
  var labelCN = (0,clsx/* default */.A)('recharts-tooltip-label', labelClassName);
  if (hasLabel && labelFormatter && payload !== undefined && payload !== null) {
    finalLabel = labelFormatter(label, payload);
  }
  var accessibilityAttributes = accessibilityLayer ? {
    role: 'status',
    'aria-live': 'assertive'
  } : {};
  return /*#__PURE__*/react.createElement("div", DefaultTooltipContent_extends({
    className: wrapperCN,
    style: finalStyle
  }, accessibilityAttributes), /*#__PURE__*/react.createElement("p", {
    className: labelCN,
    style: finalLabelStyle
  }, /*#__PURE__*/react.isValidElement(finalLabel) ? finalLabel : "".concat(finalLabel)), renderContent());
};
;// ./node_modules/recharts/es6/util/tooltip/translate.js
function translate_typeof(o) { "@babel/helpers - typeof"; return translate_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, translate_typeof(o); }
function translate_defineProperty(obj, key, value) { key = translate_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function translate_toPropertyKey(t) { var i = translate_toPrimitive(t, "string"); return "symbol" == translate_typeof(i) ? i : i + ""; }
function translate_toPrimitive(t, r) { if ("object" != translate_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != translate_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;

var CSS_CLASS_PREFIX = 'recharts-tooltip-wrapper';
var TOOLTIP_HIDDEN = {
  visibility: 'hidden'
};
function getTooltipCSSClassName(_ref) {
  var coordinate = _ref.coordinate,
    translateX = _ref.translateX,
    translateY = _ref.translateY;
  return (0,clsx/* default */.A)(CSS_CLASS_PREFIX, translate_defineProperty(translate_defineProperty(translate_defineProperty(translate_defineProperty({}, "".concat(CSS_CLASS_PREFIX, "-right"), isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX >= coordinate.x), "".concat(CSS_CLASS_PREFIX, "-left"), isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX < coordinate.x), "".concat(CSS_CLASS_PREFIX, "-bottom"), isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY >= coordinate.y), "".concat(CSS_CLASS_PREFIX, "-top"), isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY < coordinate.y));
}
function getTooltipTranslateXY(_ref2) {
  var allowEscapeViewBox = _ref2.allowEscapeViewBox,
    coordinate = _ref2.coordinate,
    key = _ref2.key,
    offsetTopLeft = _ref2.offsetTopLeft,
    position = _ref2.position,
    reverseDirection = _ref2.reverseDirection,
    tooltipDimension = _ref2.tooltipDimension,
    viewBox = _ref2.viewBox,
    viewBoxDimension = _ref2.viewBoxDimension;
  if (position && isNumber(position[key])) {
    return position[key];
  }
  var negative = coordinate[key] - tooltipDimension - offsetTopLeft;
  var positive = coordinate[key] + offsetTopLeft;
  if (allowEscapeViewBox[key]) {
    return reverseDirection[key] ? negative : positive;
  }
  if (reverseDirection[key]) {
    var _tooltipBoundary = negative;
    var _viewBoxBoundary = viewBox[key];
    if (_tooltipBoundary < _viewBoxBoundary) {
      return Math.max(positive, viewBox[key]);
    }
    return Math.max(negative, viewBox[key]);
  }
  var tooltipBoundary = positive + tooltipDimension;
  var viewBoxBoundary = viewBox[key] + viewBoxDimension;
  if (tooltipBoundary > viewBoxBoundary) {
    return Math.max(negative, viewBox[key]);
  }
  return Math.max(positive, viewBox[key]);
}
function getTransformStyle(_ref3) {
  var translateX = _ref3.translateX,
    translateY = _ref3.translateY,
    useTranslate3d = _ref3.useTranslate3d;
  return {
    transform: useTranslate3d ? "translate3d(".concat(translateX, "px, ").concat(translateY, "px, 0)") : "translate(".concat(translateX, "px, ").concat(translateY, "px)")
  };
}
function getTooltipTranslate(_ref4) {
  var allowEscapeViewBox = _ref4.allowEscapeViewBox,
    coordinate = _ref4.coordinate,
    offsetTopLeft = _ref4.offsetTopLeft,
    position = _ref4.position,
    reverseDirection = _ref4.reverseDirection,
    tooltipBox = _ref4.tooltipBox,
    useTranslate3d = _ref4.useTranslate3d,
    viewBox = _ref4.viewBox;
  var cssProperties, translateX, translateY;
  if (tooltipBox.height > 0 && tooltipBox.width > 0 && coordinate) {
    translateX = getTooltipTranslateXY({
      allowEscapeViewBox: allowEscapeViewBox,
      coordinate: coordinate,
      key: 'x',
      offsetTopLeft: offsetTopLeft,
      position: position,
      reverseDirection: reverseDirection,
      tooltipDimension: tooltipBox.width,
      viewBox: viewBox,
      viewBoxDimension: viewBox.width
    });
    translateY = getTooltipTranslateXY({
      allowEscapeViewBox: allowEscapeViewBox,
      coordinate: coordinate,
      key: 'y',
      offsetTopLeft: offsetTopLeft,
      position: position,
      reverseDirection: reverseDirection,
      tooltipDimension: tooltipBox.height,
      viewBox: viewBox,
      viewBoxDimension: viewBox.height
    });
    cssProperties = getTransformStyle({
      translateX: translateX,
      translateY: translateY,
      useTranslate3d: useTranslate3d
    });
  } else {
    cssProperties = TOOLTIP_HIDDEN;
  }
  return {
    cssProperties: cssProperties,
    cssClasses: getTooltipCSSClassName({
      translateX: translateX,
      translateY: translateY,
      coordinate: coordinate
    })
  };
}
;// ./node_modules/recharts/es6/component/TooltipBoundingBox.js
function TooltipBoundingBox_typeof(o) { "@babel/helpers - typeof"; return TooltipBoundingBox_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TooltipBoundingBox_typeof(o); }
function TooltipBoundingBox_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function TooltipBoundingBox_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? TooltipBoundingBox_ownKeys(Object(t), !0).forEach(function (r) { TooltipBoundingBox_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TooltipBoundingBox_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, TooltipBoundingBox_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (TooltipBoundingBox_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function TooltipBoundingBox_defineProperty(obj, key, value) { key = TooltipBoundingBox_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function TooltipBoundingBox_toPropertyKey(t) { var i = TooltipBoundingBox_toPrimitive(t, "string"); return "symbol" == TooltipBoundingBox_typeof(i) ? i : i + ""; }
function TooltipBoundingBox_toPrimitive(t, r) { if ("object" != TooltipBoundingBox_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TooltipBoundingBox_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;

var EPSILON = 1;
var TooltipBoundingBox = /*#__PURE__*/function (_PureComponent) {
  function TooltipBoundingBox() {
    var _this;
    _classCallCheck(this, TooltipBoundingBox);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, TooltipBoundingBox, [].concat(args));
    TooltipBoundingBox_defineProperty(_this, "state", {
      dismissed: false,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    });
    TooltipBoundingBox_defineProperty(_this, "handleKeyDown", function (event) {
      if (event.key === 'Escape') {
        var _this$props$coordinat, _this$props$coordinat2, _this$props$coordinat3, _this$props$coordinat4;
        _this.setState({
          dismissed: true,
          dismissedAtCoordinate: {
            x: (_this$props$coordinat = (_this$props$coordinat2 = _this.props.coordinate) === null || _this$props$coordinat2 === void 0 ? void 0 : _this$props$coordinat2.x) !== null && _this$props$coordinat !== void 0 ? _this$props$coordinat : 0,
            y: (_this$props$coordinat3 = (_this$props$coordinat4 = _this.props.coordinate) === null || _this$props$coordinat4 === void 0 ? void 0 : _this$props$coordinat4.y) !== null && _this$props$coordinat3 !== void 0 ? _this$props$coordinat3 : 0
          }
        });
      }
    });
    return _this;
  }
  _inherits(TooltipBoundingBox, _PureComponent);
  return _createClass(TooltipBoundingBox, [{
    key: "updateBBox",
    value: function updateBBox() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var box = this.wrapperNode.getBoundingClientRect();
        if (Math.abs(box.width - this.state.lastBoundingBox.width) > EPSILON || Math.abs(box.height - this.state.lastBoundingBox.height) > EPSILON) {
          this.setState({
            lastBoundingBox: {
              width: box.width,
              height: box.height
            }
          });
        }
      } else if (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) {
        this.setState({
          lastBoundingBox: {
            width: -1,
            height: -1
          }
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown);
      this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props$coordinat5, _this$props$coordinat6;
      if (this.props.active) {
        this.updateBBox();
      }
      if (!this.state.dismissed) {
        return;
      }
      if (((_this$props$coordinat5 = this.props.coordinate) === null || _this$props$coordinat5 === void 0 ? void 0 : _this$props$coordinat5.x) !== this.state.dismissedAtCoordinate.x || ((_this$props$coordinat6 = this.props.coordinate) === null || _this$props$coordinat6 === void 0 ? void 0 : _this$props$coordinat6.y) !== this.state.dismissedAtCoordinate.y) {
        this.state.dismissed = false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        active = _this$props.active,
        allowEscapeViewBox = _this$props.allowEscapeViewBox,
        animationDuration = _this$props.animationDuration,
        animationEasing = _this$props.animationEasing,
        children = _this$props.children,
        coordinate = _this$props.coordinate,
        hasPayload = _this$props.hasPayload,
        isAnimationActive = _this$props.isAnimationActive,
        offset = _this$props.offset,
        position = _this$props.position,
        reverseDirection = _this$props.reverseDirection,
        useTranslate3d = _this$props.useTranslate3d,
        viewBox = _this$props.viewBox,
        wrapperStyle = _this$props.wrapperStyle;
      var _getTooltipTranslate = getTooltipTranslate({
          allowEscapeViewBox: allowEscapeViewBox,
          coordinate: coordinate,
          offsetTopLeft: offset,
          position: position,
          reverseDirection: reverseDirection,
          tooltipBox: this.state.lastBoundingBox,
          useTranslate3d: useTranslate3d,
          viewBox: viewBox
        }),
        cssClasses = _getTooltipTranslate.cssClasses,
        cssProperties = _getTooltipTranslate.cssProperties;
      var outerStyle = TooltipBoundingBox_objectSpread(TooltipBoundingBox_objectSpread({
        transition: isAnimationActive && active ? "transform ".concat(animationDuration, "ms ").concat(animationEasing) : undefined
      }, cssProperties), {}, {
        pointerEvents: 'none',
        visibility: !this.state.dismissed && active && hasPayload ? 'visible' : 'hidden',
        position: 'absolute',
        top: 0,
        left: 0
      }, wrapperStyle);
      return (
        /*#__PURE__*/
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        react.createElement("div", {
          tabIndex: -1,
          className: cssClasses,
          style: outerStyle,
          ref: function ref(node) {
            _this2.wrapperNode = node;
          }
        }, children)
      );
    }
  }]);
}(react.PureComponent);
;// ./node_modules/recharts/es6/util/Global.js
var parseIsSsrByDefault = function parseIsSsrByDefault() {
  return !(typeof window !== 'undefined' && window.document && window.document.createElement && window.setTimeout);
};
var Global = {
  isSsr: parseIsSsrByDefault(),
  get: function get(key) {
    return Global[key];
  },
  set: function set(key, value) {
    if (typeof key === 'string') {
      Global[key] = value;
    } else {
      var keys = Object.keys(key);
      if (keys && keys.length) {
        keys.forEach(function (k) {
          Global[k] = key[k];
        });
      }
    }
  }
};
// EXTERNAL MODULE: ./node_modules/lodash/uniqBy.js
var uniqBy = __webpack_require__(50014);
var uniqBy_default = /*#__PURE__*/__webpack_require__.n(uniqBy);
;// ./node_modules/recharts/es6/util/payload/getUniqPayload.js



/**
 * This is configuration option that decides how to filter for unique values only:
 *
 * - `false` means "no filter"
 * - `true` means "use recharts default filter"
 * - function means "use return of this function as the default key"
 */

function getUniqPayload(payload, option, defaultUniqBy) {
  if (option === true) {
    return uniqBy_default()(payload, defaultUniqBy);
  }
  if (isFunction_default()(option)) {
    return uniqBy_default()(payload, option);
  }
  return payload;
}
;// ./node_modules/recharts/es6/component/Tooltip.js
function Tooltip_typeof(o) { "@babel/helpers - typeof"; return Tooltip_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Tooltip_typeof(o); }
function Tooltip_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Tooltip_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Tooltip_ownKeys(Object(t), !0).forEach(function (r) { Tooltip_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Tooltip_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Tooltip_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Tooltip_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Tooltip_toPropertyKey(descriptor.key), descriptor); } }
function Tooltip_createClass(Constructor, protoProps, staticProps) { if (protoProps) Tooltip_defineProperties(Constructor.prototype, protoProps); if (staticProps) Tooltip_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Tooltip_callSuper(t, o, e) { return o = Tooltip_getPrototypeOf(o), Tooltip_possibleConstructorReturn(t, Tooltip_isNativeReflectConstruct() ? Reflect.construct(o, e || [], Tooltip_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Tooltip_possibleConstructorReturn(self, call) { if (call && (Tooltip_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Tooltip_assertThisInitialized(self); }
function Tooltip_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function Tooltip_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Tooltip_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function Tooltip_getPrototypeOf(o) { Tooltip_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Tooltip_getPrototypeOf(o); }
function Tooltip_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Tooltip_setPrototypeOf(subClass, superClass); }
function Tooltip_setPrototypeOf(o, p) { Tooltip_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Tooltip_setPrototypeOf(o, p); }
function Tooltip_defineProperty(obj, key, value) { key = Tooltip_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Tooltip_toPropertyKey(t) { var i = Tooltip_toPrimitive(t, "string"); return "symbol" == Tooltip_typeof(i) ? i : i + ""; }
function Tooltip_toPrimitive(t, r) { if ("object" != Tooltip_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Tooltip_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview Tooltip
 */
;




function defaultUniqBy(entry) {
  return entry.dataKey;
}
function renderContent(content, props) {
  if ( /*#__PURE__*/react.isValidElement(content)) {
    return /*#__PURE__*/react.cloneElement(content, props);
  }
  if (typeof content === 'function') {
    return /*#__PURE__*/react.createElement(content, props);
  }
  return /*#__PURE__*/react.createElement(DefaultTooltipContent, props);
}
var Tooltip_Tooltip = /*#__PURE__*/function (_PureComponent) {
  function Tooltip() {
    Tooltip_classCallCheck(this, Tooltip);
    return Tooltip_callSuper(this, Tooltip, arguments);
  }
  Tooltip_inherits(Tooltip, _PureComponent);
  return Tooltip_createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        active = _this$props.active,
        allowEscapeViewBox = _this$props.allowEscapeViewBox,
        animationDuration = _this$props.animationDuration,
        animationEasing = _this$props.animationEasing,
        content = _this$props.content,
        coordinate = _this$props.coordinate,
        filterNull = _this$props.filterNull,
        isAnimationActive = _this$props.isAnimationActive,
        offset = _this$props.offset,
        payload = _this$props.payload,
        payloadUniqBy = _this$props.payloadUniqBy,
        position = _this$props.position,
        reverseDirection = _this$props.reverseDirection,
        useTranslate3d = _this$props.useTranslate3d,
        viewBox = _this$props.viewBox,
        wrapperStyle = _this$props.wrapperStyle;
      var finalPayload = payload !== null && payload !== void 0 ? payload : [];
      if (filterNull && finalPayload.length) {
        finalPayload = getUniqPayload(payload.filter(function (entry) {
          return entry.value != null && (entry.hide !== true || _this.props.includeHidden);
        }), payloadUniqBy, defaultUniqBy);
      }
      var hasPayload = finalPayload.length > 0;
      return /*#__PURE__*/react.createElement(TooltipBoundingBox, {
        allowEscapeViewBox: allowEscapeViewBox,
        animationDuration: animationDuration,
        animationEasing: animationEasing,
        isAnimationActive: isAnimationActive,
        active: active,
        coordinate: coordinate,
        hasPayload: hasPayload,
        offset: offset,
        position: position,
        reverseDirection: reverseDirection,
        useTranslate3d: useTranslate3d,
        viewBox: viewBox,
        wrapperStyle: wrapperStyle
      }, renderContent(content, Tooltip_objectSpread(Tooltip_objectSpread({}, this.props), {}, {
        payload: finalPayload
      })));
    }
  }]);
}(react.PureComponent);
Tooltip_defineProperty(Tooltip_Tooltip, "displayName", 'Tooltip');
Tooltip_defineProperty(Tooltip_Tooltip, "defaultProps", {
  accessibilityLayer: false,
  allowEscapeViewBox: {
    x: false,
    y: false
  },
  animationDuration: 400,
  animationEasing: 'ease',
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: true,
  cursorStyle: {},
  filterNull: true,
  isAnimationActive: !Global.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: false,
    y: false
  },
  separator: ' : ',
  trigger: 'hover',
  useTranslate3d: false,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(55808);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/symbol/circle.js
var circle = __webpack_require__(9185);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/symbol/cross.js
var cross = __webpack_require__(48233);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/symbol/diamond.js
var diamond = __webpack_require__(18361);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/symbol/square.js
var square = __webpack_require__(1838);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/symbol/star.js
var star = __webpack_require__(56657);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/symbol/triangle.js
var triangle = __webpack_require__(47233);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/symbol/wye.js
var wye = __webpack_require__(57002);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/symbol.js
var src_symbol = __webpack_require__(90902);
;// ./node_modules/recharts/es6/shape/Symbols.js
function Symbols_typeof(o) { "@babel/helpers - typeof"; return Symbols_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Symbols_typeof(o); }
var Symbols_excluded = ["type", "size", "sizeType"];
function Symbols_extends() { Symbols_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Symbols_extends.apply(this, arguments); }
function Symbols_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Symbols_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Symbols_ownKeys(Object(t), !0).forEach(function (r) { Symbols_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Symbols_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Symbols_defineProperty(obj, key, value) { key = Symbols_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Symbols_toPropertyKey(t) { var i = Symbols_toPrimitive(t, "string"); return "symbol" == Symbols_typeof(i) ? i : i + ""; }
function Symbols_toPrimitive(t, r) { if ("object" != Symbols_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Symbols_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Symbols_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Symbols_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Symbols_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
/**
 * @fileOverview Curve
 */
;




var symbolFactories = {
  symbolCircle: circle/* default */.A,
  symbolCross: cross/* default */.A,
  symbolDiamond: diamond/* default */.A,
  symbolSquare: square/* default */.A,
  symbolStar: star/* default */.A,
  symbolTriangle: triangle/* default */.A,
  symbolWye: wye/* default */.A
};
var RADIAN = Math.PI / 180;
var getSymbolFactory = function getSymbolFactory(type) {
  var name = "symbol".concat(upperFirst_default()(type));
  return symbolFactories[name] || circle/* default */.A;
};
var calculateAreaSize = function calculateAreaSize(size, sizeType, type) {
  if (sizeType === 'area') {
    return size;
  }
  switch (type) {
    case 'cross':
      return 5 * size * size / 9;
    case 'diamond':
      return 0.5 * size * size / Math.sqrt(3);
    case 'square':
      return size * size;
    case 'star':
      {
        var angle = 18 * RADIAN;
        return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.pow(Math.tan(angle), 2));
      }
    case 'triangle':
      return Math.sqrt(3) * size * size / 4;
    case 'wye':
      return (21 - 10 * Math.sqrt(3)) * size * size / 8;
    default:
      return Math.PI * size * size / 4;
  }
};
var registerSymbol = function registerSymbol(key, factory) {
  symbolFactories["symbol".concat(upperFirst_default()(key))] = factory;
};
var Symbols = function Symbols(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'circle' : _ref$type,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 64 : _ref$size,
    _ref$sizeType = _ref.sizeType,
    sizeType = _ref$sizeType === void 0 ? 'area' : _ref$sizeType,
    rest = Symbols_objectWithoutProperties(_ref, Symbols_excluded);
  var props = Symbols_objectSpread(Symbols_objectSpread({}, rest), {}, {
    type: type,
    size: size,
    sizeType: sizeType
  });

  /**
   * Calculate the path of curve
   * @return {String} path
   */
  var getPath = function getPath() {
    var symbolFactory = getSymbolFactory(type);
    var symbol = (0,src_symbol/* default */.Ay)().type(symbolFactory).size(calculateAreaSize(size, sizeType, type));
    return symbol();
  };
  var className = props.className,
    cx = props.cx,
    cy = props.cy;
  var filteredProps = filterProps(props, true);
  if (cx === +cx && cy === +cy && size === +size) {
    return /*#__PURE__*/react.createElement("path", Symbols_extends({}, filteredProps, {
      className: (0,clsx/* default */.A)('recharts-symbols', className),
      transform: "translate(".concat(cx, ", ").concat(cy, ")"),
      d: getPath()
    }));
  }
  return null;
};
Symbols.registerSymbol = registerSymbol;
;// ./node_modules/recharts/es6/component/DefaultLegendContent.js
function DefaultLegendContent_typeof(o) { "@babel/helpers - typeof"; return DefaultLegendContent_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, DefaultLegendContent_typeof(o); }
function DefaultLegendContent_extends() { DefaultLegendContent_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DefaultLegendContent_extends.apply(this, arguments); }
function DefaultLegendContent_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function DefaultLegendContent_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? DefaultLegendContent_ownKeys(Object(t), !0).forEach(function (r) { DefaultLegendContent_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : DefaultLegendContent_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function DefaultLegendContent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function DefaultLegendContent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, DefaultLegendContent_toPropertyKey(descriptor.key), descriptor); } }
function DefaultLegendContent_createClass(Constructor, protoProps, staticProps) { if (protoProps) DefaultLegendContent_defineProperties(Constructor.prototype, protoProps); if (staticProps) DefaultLegendContent_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function DefaultLegendContent_callSuper(t, o, e) { return o = DefaultLegendContent_getPrototypeOf(o), DefaultLegendContent_possibleConstructorReturn(t, DefaultLegendContent_isNativeReflectConstruct() ? Reflect.construct(o, e || [], DefaultLegendContent_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function DefaultLegendContent_possibleConstructorReturn(self, call) { if (call && (DefaultLegendContent_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return DefaultLegendContent_assertThisInitialized(self); }
function DefaultLegendContent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function DefaultLegendContent_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (DefaultLegendContent_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function DefaultLegendContent_getPrototypeOf(o) { DefaultLegendContent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DefaultLegendContent_getPrototypeOf(o); }
function DefaultLegendContent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) DefaultLegendContent_setPrototypeOf(subClass, superClass); }
function DefaultLegendContent_setPrototypeOf(o, p) { DefaultLegendContent_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DefaultLegendContent_setPrototypeOf(o, p); }
function DefaultLegendContent_defineProperty(obj, key, value) { key = DefaultLegendContent_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function DefaultLegendContent_toPropertyKey(t) { var i = DefaultLegendContent_toPrimitive(t, "string"); return "symbol" == DefaultLegendContent_typeof(i) ? i : i + ""; }
function DefaultLegendContent_toPrimitive(t, r) { if ("object" != DefaultLegendContent_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != DefaultLegendContent_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview Default Legend Content
 */
;






var SIZE = 32;
var DefaultLegendContent = /*#__PURE__*/function (_PureComponent) {
  function DefaultLegendContent() {
    DefaultLegendContent_classCallCheck(this, DefaultLegendContent);
    return DefaultLegendContent_callSuper(this, DefaultLegendContent, arguments);
  }
  DefaultLegendContent_inherits(DefaultLegendContent, _PureComponent);
  return DefaultLegendContent_createClass(DefaultLegendContent, [{
    key: "renderIcon",
    value:
    /**
     * Render the path of icon
     * @param {Object} data Data of each legend item
     * @return {String} Path element
     */
    function renderIcon(data) {
      var inactiveColor = this.props.inactiveColor;
      var halfSize = SIZE / 2;
      var sixthSize = SIZE / 6;
      var thirdSize = SIZE / 3;
      var color = data.inactive ? inactiveColor : data.color;
      if (data.type === 'plainline') {
        return /*#__PURE__*/react.createElement("line", {
          strokeWidth: 4,
          fill: "none",
          stroke: color,
          strokeDasharray: data.payload.strokeDasharray,
          x1: 0,
          y1: halfSize,
          x2: SIZE,
          y2: halfSize,
          className: "recharts-legend-icon"
        });
      }
      if (data.type === 'line') {
        return /*#__PURE__*/react.createElement("path", {
          strokeWidth: 4,
          fill: "none",
          stroke: color,
          d: "M0,".concat(halfSize, "h").concat(thirdSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(2 * thirdSize, ",").concat(halfSize, "\n            H").concat(SIZE, "M").concat(2 * thirdSize, ",").concat(halfSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(thirdSize, ",").concat(halfSize),
          className: "recharts-legend-icon"
        });
      }
      if (data.type === 'rect') {
        return /*#__PURE__*/react.createElement("path", {
          stroke: "none",
          fill: color,
          d: "M0,".concat(SIZE / 8, "h").concat(SIZE, "v").concat(SIZE * 3 / 4, "h").concat(-SIZE, "z"),
          className: "recharts-legend-icon"
        });
      }
      if ( /*#__PURE__*/react.isValidElement(data.legendIcon)) {
        var iconProps = DefaultLegendContent_objectSpread({}, data);
        delete iconProps.legendIcon;
        return /*#__PURE__*/react.cloneElement(data.legendIcon, iconProps);
      }
      return /*#__PURE__*/react.createElement(Symbols, {
        fill: color,
        cx: halfSize,
        cy: halfSize,
        size: SIZE,
        sizeType: "diameter",
        type: data.type
      });
    }

    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;
      var _this$props = this.props,
        payload = _this$props.payload,
        iconSize = _this$props.iconSize,
        layout = _this$props.layout,
        formatter = _this$props.formatter,
        inactiveColor = _this$props.inactiveColor;
      var viewBox = {
        x: 0,
        y: 0,
        width: SIZE,
        height: SIZE
      };
      var itemStyle = {
        display: layout === 'horizontal' ? 'inline-block' : 'block',
        marginRight: 10
      };
      var svgStyle = {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: 4
      };
      return payload.map(function (entry, i) {
        var finalFormatter = entry.formatter || formatter;
        var className = (0,clsx/* default */.A)(DefaultLegendContent_defineProperty(DefaultLegendContent_defineProperty({
          'recharts-legend-item': true
        }, "legend-item-".concat(i), true), "inactive", entry.inactive));
        if (entry.type === 'none') {
          return null;
        }

        // Do not render entry.value as functions. Always require static string properties.
        var entryValue = !isFunction_default()(entry.value) ? entry.value : null;
        warn(!isFunction_default()(entry.value), "The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name=\"Name of my Data\"/>" // eslint-disable-line max-len
        );
        var color = entry.inactive ? inactiveColor : entry.color;
        return /*#__PURE__*/react.createElement("li", DefaultLegendContent_extends({
          className: className,
          style: itemStyle
          // eslint-disable-next-line react/no-array-index-key
          ,
          key: "legend-item-".concat(i)
        }, adaptEventsOfChild(_this.props, entry, i)), /*#__PURE__*/react.createElement(Surface, {
          width: iconSize,
          height: iconSize,
          viewBox: viewBox,
          style: svgStyle
        }, _this.renderIcon(entry)), /*#__PURE__*/react.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: color
          }
        }, finalFormatter ? finalFormatter(entryValue, entry, i) : entryValue));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        payload = _this$props2.payload,
        layout = _this$props2.layout,
        align = _this$props2.align;
      if (!payload || !payload.length) {
        return null;
      }
      var finalStyle = {
        padding: 0,
        margin: 0,
        textAlign: layout === 'horizontal' ? align : 'left'
      };
      return /*#__PURE__*/react.createElement("ul", {
        className: "recharts-default-legend",
        style: finalStyle
      }, this.renderItems());
    }
  }]);
}(react.PureComponent);
DefaultLegendContent_defineProperty(DefaultLegendContent, "displayName", 'Legend');
DefaultLegendContent_defineProperty(DefaultLegendContent, "defaultProps", {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'middle',
  inactiveColor: '#ccc'
});
;// ./node_modules/recharts/es6/component/Legend.js
function Legend_typeof(o) { "@babel/helpers - typeof"; return Legend_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Legend_typeof(o); }
var Legend_excluded = ["ref"];
function Legend_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Legend_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Legend_ownKeys(Object(t), !0).forEach(function (r) { Legend_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Legend_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Legend_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Legend_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Legend_toPropertyKey(descriptor.key), descriptor); } }
function Legend_createClass(Constructor, protoProps, staticProps) { if (protoProps) Legend_defineProperties(Constructor.prototype, protoProps); if (staticProps) Legend_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Legend_callSuper(t, o, e) { return o = Legend_getPrototypeOf(o), Legend_possibleConstructorReturn(t, Legend_isNativeReflectConstruct() ? Reflect.construct(o, e || [], Legend_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Legend_possibleConstructorReturn(self, call) { if (call && (Legend_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Legend_assertThisInitialized(self); }
function Legend_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function Legend_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Legend_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function Legend_getPrototypeOf(o) { Legend_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Legend_getPrototypeOf(o); }
function Legend_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Legend_setPrototypeOf(subClass, superClass); }
function Legend_setPrototypeOf(o, p) { Legend_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Legend_setPrototypeOf(o, p); }
function Legend_defineProperty(obj, key, value) { key = Legend_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Legend_toPropertyKey(t) { var i = Legend_toPrimitive(t, "string"); return "symbol" == Legend_typeof(i) ? i : i + ""; }
function Legend_toPrimitive(t, r) { if ("object" != Legend_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Legend_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Legend_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Legend_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Legend_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
/**
 * @fileOverview Legend
 */
;



function Legend_defaultUniqBy(entry) {
  return entry.value;
}
function Legend_renderContent(content, props) {
  if ( /*#__PURE__*/react.isValidElement(content)) {
    return /*#__PURE__*/react.cloneElement(content, props);
  }
  if (typeof content === 'function') {
    return /*#__PURE__*/react.createElement(content, props);
  }
  var ref = props.ref,
    otherProps = Legend_objectWithoutProperties(props, Legend_excluded);
  return /*#__PURE__*/react.createElement(DefaultLegendContent, otherProps);
}
var EPS = 1;
var Legend = /*#__PURE__*/function (_PureComponent) {
  function Legend() {
    var _this;
    Legend_classCallCheck(this, Legend);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = Legend_callSuper(this, Legend, [].concat(args));
    Legend_defineProperty(_this, "lastBoundingBox", {
      width: -1,
      height: -1
    });
    return _this;
  }
  Legend_inherits(Legend, _PureComponent);
  return Legend_createClass(Legend, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function getBBox() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var box = this.wrapperNode.getBoundingClientRect();
        box.height = this.wrapperNode.offsetHeight;
        box.width = this.wrapperNode.offsetWidth;
        return box;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function updateBBox() {
      var onBBoxUpdate = this.props.onBBoxUpdate;
      var box = this.getBBox();
      if (box) {
        if (Math.abs(box.width - this.lastBoundingBox.width) > EPS || Math.abs(box.height - this.lastBoundingBox.height) > EPS) {
          this.lastBoundingBox.width = box.width;
          this.lastBoundingBox.height = box.height;
          if (onBBoxUpdate) {
            onBBoxUpdate(box);
          }
        }
      } else if (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) {
        this.lastBoundingBox.width = -1;
        this.lastBoundingBox.height = -1;
        if (onBBoxUpdate) {
          onBBoxUpdate(null);
        }
      }
    }
  }, {
    key: "getBBoxSnapshot",
    value: function getBBoxSnapshot() {
      if (this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0) {
        return Legend_objectSpread({}, this.lastBoundingBox);
      }
      return {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function getDefaultPosition(style) {
      var _this$props = this.props,
        layout = _this$props.layout,
        align = _this$props.align,
        verticalAlign = _this$props.verticalAlign,
        margin = _this$props.margin,
        chartWidth = _this$props.chartWidth,
        chartHeight = _this$props.chartHeight;
      var hPos, vPos;
      if (!style || (style.left === undefined || style.left === null) && (style.right === undefined || style.right === null)) {
        if (align === 'center' && layout === 'vertical') {
          var box = this.getBBoxSnapshot();
          hPos = {
            left: ((chartWidth || 0) - box.width) / 2
          };
        } else {
          hPos = align === 'right' ? {
            right: margin && margin.right || 0
          } : {
            left: margin && margin.left || 0
          };
        }
      }
      if (!style || (style.top === undefined || style.top === null) && (style.bottom === undefined || style.bottom === null)) {
        if (verticalAlign === 'middle') {
          var _box = this.getBBoxSnapshot();
          vPos = {
            top: ((chartHeight || 0) - _box.height) / 2
          };
        } else {
          vPos = verticalAlign === 'bottom' ? {
            bottom: margin && margin.bottom || 0
          } : {
            top: margin && margin.top || 0
          };
        }
      }
      return Legend_objectSpread(Legend_objectSpread({}, hPos), vPos);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        content = _this$props2.content,
        width = _this$props2.width,
        height = _this$props2.height,
        wrapperStyle = _this$props2.wrapperStyle,
        payloadUniqBy = _this$props2.payloadUniqBy,
        payload = _this$props2.payload;
      var outerStyle = Legend_objectSpread(Legend_objectSpread({
        position: 'absolute',
        width: width || 'auto',
        height: height || 'auto'
      }, this.getDefaultPosition(wrapperStyle)), wrapperStyle);
      return /*#__PURE__*/react.createElement("div", {
        className: "recharts-legend-wrapper",
        style: outerStyle,
        ref: function ref(node) {
          _this2.wrapperNode = node;
        }
      }, Legend_renderContent(content, Legend_objectSpread(Legend_objectSpread({}, this.props), {}, {
        payload: getUniqPayload(payload, payloadUniqBy, Legend_defaultUniqBy)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function getWithHeight(item, chartWidth) {
      var _this$defaultProps$it = Legend_objectSpread(Legend_objectSpread({}, this.defaultProps), item.props),
        layout = _this$defaultProps$it.layout;
      if (layout === 'vertical' && isNumber(item.props.height)) {
        return {
          height: item.props.height
        };
      }
      if (layout === 'horizontal') {
        return {
          width: item.props.width || chartWidth
        };
      }
      return null;
    }
  }]);
}(react.PureComponent);
Legend_defineProperty(Legend, "displayName", 'Legend');
Legend_defineProperty(Legend, "defaultProps", {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'bottom'
});
;// ./node_modules/recharts/es6/shape/Dot.js
function Dot_extends() { Dot_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Dot_extends.apply(this, arguments); }
/**
 * @fileOverview Dot
 */
;



var Dot = function Dot(props) {
  var cx = props.cx,
    cy = props.cy,
    r = props.r,
    className = props.className;
  var layerClass = (0,clsx/* default */.A)('recharts-dot', className);
  if (cx === +cx && cy === +cy && r === +r) {
    return /*#__PURE__*/react.createElement("circle", Dot_extends({}, filterProps(props, false), adaptEventHandlers(props), {
      className: layerClass,
      cx: cx,
      cy: cy,
      r: r
    }));
  }
  return null;
};
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// ./node_modules/fast-equals/dist/es/index.mjs
const { getOwnPropertyNames, getOwnPropertySymbols } = Object;
// eslint-disable-next-line @typescript-eslint/unbound-method
const { hasOwnProperty: es_hasOwnProperty } = Object.prototype;
/**
 * Combine two comparators into a single comparators.
 */
function combineComparators(comparatorA, comparatorB) {
    return function isEqual(a, b, state) {
        return comparatorA(a, b, state) && comparatorB(a, b, state);
    };
}
/**
 * Wrap the provided `areItemsEqual` method to manage the circular state, allowing
 * for circular references to be safely included in the comparison without creating
 * stack overflows.
 */
function createIsCircular(areItemsEqual) {
    return function isCircular(a, b, state) {
        if (!a || !b || typeof a !== 'object' || typeof b !== 'object') {
            return areItemsEqual(a, b, state);
        }
        const { cache } = state;
        const cachedA = cache.get(a);
        const cachedB = cache.get(b);
        if (cachedA && cachedB) {
            return cachedA === b && cachedB === a;
        }
        cache.set(a, b);
        cache.set(b, a);
        const result = areItemsEqual(a, b, state);
        cache.delete(a);
        cache.delete(b);
        return result;
    };
}
/**
 * Get the `@@toStringTag` of the value, if it exists.
 */
function getShortTag(value) {
    return value != null ? value[Symbol.toStringTag] : undefined;
}
/**
 * Get the properties to strictly examine, which include both own properties that are
 * not enumerable and symbol properties.
 */
function getStrictProperties(object) {
    return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
}
/**
 * Whether the object contains the property passed as an own property.
 */
const hasOwn = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
Object.hasOwn || ((object, property) => es_hasOwnProperty.call(object, property));
/**
 * Whether the values passed are strictly equal or both NaN.
 */
function sameValueZeroEqual(a, b) {
    return a === b || (!a && !b && a !== a && b !== b);
}

const PREACT_VNODE = '__v';
const PREACT_OWNER = '__o';
const REACT_OWNER = '_owner';
const { getOwnPropertyDescriptor, keys } = Object;
/**
 * Whether the array buffers are equal in value.
 */
function areArrayBuffersEqual(a, b) {
    return a.byteLength === b.byteLength && areTypedArraysEqual(new Uint8Array(a), new Uint8Array(b));
}
/**
 * Whether the arrays are equal in value.
 */
function areArraysEqual(a, b, state) {
    let index = a.length;
    if (b.length !== index) {
        return false;
    }
    while (index-- > 0) {
        if (!state.equals(a[index], b[index], index, index, a, b, state)) {
            return false;
        }
    }
    return true;
}
/**
 * Whether the dataviews are equal in value.
 */
function areDataViewsEqual(a, b) {
    return (a.byteLength === b.byteLength
        && areTypedArraysEqual(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)));
}
/**
 * Whether the dates passed are equal in value.
 */
function areDatesEqual(a, b) {
    return sameValueZeroEqual(a.getTime(), b.getTime());
}
/**
 * Whether the errors passed are equal in value.
 */
function areErrorsEqual(a, b) {
    return a.name === b.name && a.message === b.message && a.cause === b.cause && a.stack === b.stack;
}
/**
 * Whether the functions passed are equal in value.
 */
function areFunctionsEqual(a, b) {
    return a === b;
}
/**
 * Whether the `Map`s are equal in value.
 */
function areMapsEqual(a, b, state) {
    const size = a.size;
    if (size !== b.size) {
        return false;
    }
    if (!size) {
        return true;
    }
    const matchedIndices = new Array(size);
    const aIterable = a.entries();
    let aResult;
    let bResult;
    let index = 0;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while ((aResult = aIterable.next())) {
        if (aResult.done) {
            break;
        }
        const bIterable = b.entries();
        let hasMatch = false;
        let matchIndex = 0;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while ((bResult = bIterable.next())) {
            if (bResult.done) {
                break;
            }
            if (matchedIndices[matchIndex]) {
                matchIndex++;
                continue;
            }
            const aEntry = aResult.value;
            const bEntry = bResult.value;
            if (state.equals(aEntry[0], bEntry[0], index, matchIndex, a, b, state)
                && state.equals(aEntry[1], bEntry[1], aEntry[0], bEntry[0], a, b, state)) {
                hasMatch = matchedIndices[matchIndex] = true;
                break;
            }
            matchIndex++;
        }
        if (!hasMatch) {
            return false;
        }
        index++;
    }
    return true;
}
/**
 * Whether the numbers are equal in value.
 */
const areNumbersEqual = sameValueZeroEqual;
/**
 * Whether the objects are equal in value.
 */
function areObjectsEqual(a, b, state) {
    const properties = keys(a);
    let index = properties.length;
    if (keys(b).length !== index) {
        return false;
    }
    // Decrementing `while` showed faster results than either incrementing or
    // decrementing `for` loop and than an incrementing `while` loop. Declarative
    // methods like `some` / `every` were not used to avoid incurring the garbage
    // cost of anonymous callbacks.
    while (index-- > 0) {
        if (!isPropertyEqual(a, b, state, properties[index])) {
            return false;
        }
    }
    return true;
}
/**
 * Whether the objects are equal in value with strict property checking.
 */
function areObjectsEqualStrict(a, b, state) {
    const properties = getStrictProperties(a);
    let index = properties.length;
    if (getStrictProperties(b).length !== index) {
        return false;
    }
    let property;
    let descriptorA;
    let descriptorB;
    // Decrementing `while` showed faster results than either incrementing or
    // decrementing `for` loop and than an incrementing `while` loop. Declarative
    // methods like `some` / `every` were not used to avoid incurring the garbage
    // cost of anonymous callbacks.
    while (index-- > 0) {
        property = properties[index];
        if (!isPropertyEqual(a, b, state, property)) {
            return false;
        }
        descriptorA = getOwnPropertyDescriptor(a, property);
        descriptorB = getOwnPropertyDescriptor(b, property);
        if ((descriptorA || descriptorB)
            && (!descriptorA
                || !descriptorB
                || descriptorA.configurable !== descriptorB.configurable
                || descriptorA.enumerable !== descriptorB.enumerable
                || descriptorA.writable !== descriptorB.writable)) {
            return false;
        }
    }
    return true;
}
/**
 * Whether the primitive wrappers passed are equal in value.
 */
function arePrimitiveWrappersEqual(a, b) {
    return sameValueZeroEqual(a.valueOf(), b.valueOf());
}
/**
 * Whether the regexps passed are equal in value.
 */
function areRegExpsEqual(a, b) {
    return a.source === b.source && a.flags === b.flags;
}
/**
 * Whether the `Set`s are equal in value.
 */
function areSetsEqual(a, b, state) {
    const size = a.size;
    if (size !== b.size) {
        return false;
    }
    if (!size) {
        return true;
    }
    const matchedIndices = new Array(size);
    const aIterable = a.values();
    let aResult;
    let bResult;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while ((aResult = aIterable.next())) {
        if (aResult.done) {
            break;
        }
        const bIterable = b.values();
        let hasMatch = false;
        let matchIndex = 0;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while ((bResult = bIterable.next())) {
            if (bResult.done) {
                break;
            }
            if (!matchedIndices[matchIndex]
                && state.equals(aResult.value, bResult.value, aResult.value, bResult.value, a, b, state)) {
                hasMatch = matchedIndices[matchIndex] = true;
                break;
            }
            matchIndex++;
        }
        if (!hasMatch) {
            return false;
        }
    }
    return true;
}
/**
 * Whether the TypedArray instances are equal in value.
 */
function areTypedArraysEqual(a, b) {
    let index = a.byteLength;
    if (b.byteLength !== index || a.byteOffset !== b.byteOffset) {
        return false;
    }
    while (index-- > 0) {
        if (a[index] !== b[index]) {
            return false;
        }
    }
    return true;
}
/**
 * Whether the URL instances are equal in value.
 */
function areUrlsEqual(a, b) {
    return (a.hostname === b.hostname
        && a.pathname === b.pathname
        && a.protocol === b.protocol
        && a.port === b.port
        && a.hash === b.hash
        && a.username === b.username
        && a.password === b.password);
}
function isPropertyEqual(a, b, state, property) {
    if ((property === REACT_OWNER || property === PREACT_OWNER || property === PREACT_VNODE)
        && (a.$$typeof || b.$$typeof)) {
        return true;
    }
    return hasOwn(b, property) && state.equals(a[property], b[property], property, property, a, b, state);
}

const ARRAY_BUFFER_TAG = '[object ArrayBuffer]';
const ARGUMENTS_TAG = '[object Arguments]';
const BOOLEAN_TAG = '[object Boolean]';
const DATA_VIEW_TAG = '[object DataView]';
const DATE_TAG = '[object Date]';
const ERROR_TAG = '[object Error]';
const MAP_TAG = '[object Map]';
const NUMBER_TAG = '[object Number]';
const OBJECT_TAG = '[object Object]';
const REG_EXP_TAG = '[object RegExp]';
const SET_TAG = '[object Set]';
const STRING_TAG = '[object String]';
const TYPED_ARRAY_TAGS = {
    '[object Int8Array]': true,
    '[object Uint8Array]': true,
    '[object Uint8ClampedArray]': true,
    '[object Int16Array]': true,
    '[object Uint16Array]': true,
    '[object Int32Array]': true,
    '[object Uint32Array]': true,
    '[object Float16Array]': true,
    '[object Float32Array]': true,
    '[object Float64Array]': true,
    '[object BigInt64Array]': true,
    '[object BigUint64Array]': true,
};
const URL_TAG = '[object URL]';
// eslint-disable-next-line @typescript-eslint/unbound-method
const es_toString = Object.prototype.toString;
/**
 * Create a comparator method based on the type-specific equality comparators passed.
 */
function createEqualityComparator({ areArrayBuffersEqual, areArraysEqual, areDataViewsEqual, areDatesEqual, areErrorsEqual, areFunctionsEqual, areMapsEqual, areNumbersEqual, areObjectsEqual, arePrimitiveWrappersEqual, areRegExpsEqual, areSetsEqual, areTypedArraysEqual, areUrlsEqual, unknownTagComparators, }) {
    /**
     * compare the value of the two objects and return true if they are equivalent in values
     */
    return function comparator(a, b, state) {
        // If the items are strictly equal, no need to do a value comparison.
        if (a === b) {
            return true;
        }
        // If either of the items are nullish and fail the strictly equal check
        // above, then they must be unequal.
        if (a == null || b == null) {
            return false;
        }
        const type = typeof a;
        if (type !== typeof b) {
            return false;
        }
        if (type !== 'object') {
            if (type === 'number') {
                return areNumbersEqual(a, b, state);
            }
            if (type === 'function') {
                return areFunctionsEqual(a, b, state);
            }
            // If a primitive value that is not strictly equal, it must be unequal.
            return false;
        }
        const constructor = a.constructor;
        // Checks are listed in order of commonality of use-case:
        //   1. Common complex object types (plain object, array)
        //   2. Common data values (date, regexp)
        //   3. Less-common complex object types (map, set)
        //   4. Less-common data values (promise, primitive wrappers)
        // Inherently this is both subjective and assumptive, however
        // when reviewing comparable libraries in the wild this order
        // appears to be generally consistent.
        // Constructors should match, otherwise there is potential for false positives
        // between class and subclass or custom object and POJO.
        if (constructor !== b.constructor) {
            return false;
        }
        // `isPlainObject` only checks against the object's own realm. Cross-realm
        // comparisons are rare, and will be handled in the ultimate fallback, so
        // we can avoid capturing the string tag.
        if (constructor === Object) {
            return areObjectsEqual(a, b, state);
        }
        // `isArray()` works on subclasses and is cross-realm, so we can avoid capturing
        // the string tag or doing an `instanceof` check.
        if (Array.isArray(a)) {
            return areArraysEqual(a, b, state);
        }
        // Try to fast-path equality checks for other complex object types in the
        // same realm to avoid capturing the string tag. Strict equality is used
        // instead of `instanceof` because it is more performant for the common
        // use-case. If someone is subclassing a native class, it will be handled
        // with the string tag comparison.
        if (constructor === Date) {
            return areDatesEqual(a, b, state);
        }
        if (constructor === RegExp) {
            return areRegExpsEqual(a, b, state);
        }
        if (constructor === Map) {
            return areMapsEqual(a, b, state);
        }
        if (constructor === Set) {
            return areSetsEqual(a, b, state);
        }
        // Since this is a custom object, capture the string tag to determing its type.
        // This is reasonably performant in modern environments like v8 and SpiderMonkey.
        const tag = es_toString.call(a);
        if (tag === DATE_TAG) {
            return areDatesEqual(a, b, state);
        }
        // For RegExp, the properties are not enumerable, and therefore will give false positives if
        // tested like a standard object.
        if (tag === REG_EXP_TAG) {
            return areRegExpsEqual(a, b, state);
        }
        if (tag === MAP_TAG) {
            return areMapsEqual(a, b, state);
        }
        if (tag === SET_TAG) {
            return areSetsEqual(a, b, state);
        }
        if (tag === OBJECT_TAG) {
            // The exception for value comparison is custom `Promise`-like class instances. These should
            // be treated the same as standard `Promise` objects, which means strict equality, and if
            // it reaches this point then that strict equality comparison has already failed.
            return typeof a.then !== 'function' && typeof b.then !== 'function' && areObjectsEqual(a, b, state);
        }
        // If a URL tag, it should be tested explicitly. Like RegExp, the properties are not
        // enumerable, and therefore will give false positives if tested like a standard object.
        if (tag === URL_TAG) {
            return areUrlsEqual(a, b, state);
        }
        // If an error tag, it should be tested explicitly. Like RegExp, the properties are not
        // enumerable, and therefore will give false positives if tested like a standard object.
        if (tag === ERROR_TAG) {
            return areErrorsEqual(a, b, state);
        }
        // If an arguments tag, it should be treated as a standard object.
        if (tag === ARGUMENTS_TAG) {
            return areObjectsEqual(a, b, state);
        }
        if (TYPED_ARRAY_TAGS[tag]) {
            return areTypedArraysEqual(a, b, state);
        }
        if (tag === ARRAY_BUFFER_TAG) {
            return areArrayBuffersEqual(a, b, state);
        }
        if (tag === DATA_VIEW_TAG) {
            return areDataViewsEqual(a, b, state);
        }
        // As the penultimate fallback, check if the values passed are primitive wrappers. This
        // is very rare in modern JS, which is why it is deprioritized compared to all other object
        // types.
        if (tag === BOOLEAN_TAG || tag === NUMBER_TAG || tag === STRING_TAG) {
            return arePrimitiveWrappersEqual(a, b, state);
        }
        if (unknownTagComparators) {
            let unknownTagComparator = unknownTagComparators[tag];
            if (!unknownTagComparator) {
                const shortTag = getShortTag(a);
                if (shortTag) {
                    unknownTagComparator = unknownTagComparators[shortTag];
                }
            }
            // If the custom config has an unknown tag comparator that matches the captured tag or the
            // @@toStringTag, it is the source of truth for whether the values are equal.
            if (unknownTagComparator) {
                return unknownTagComparator(a, b, state);
            }
        }
        // If not matching any tags that require a specific type of comparison, then we hard-code false because
        // the only thing remaining is strict equality, which has already been compared. This is for a few reasons:
        //   - Certain types that cannot be introspected (e.g., `WeakMap`). For these types, this is the only
        //     comparison that can be made.
        //   - For types that can be introspected, but rarely have requirements to be compared
        //     (`ArrayBuffer`, `DataView`, etc.), the cost is avoided to prioritize the common
        //     use-cases (may be included in a future release, if requested enough).
        //   - For types that can be introspected but do not have an objective definition of what
        //     equality is (`Error`, etc.), the subjective decision is to be conservative and strictly compare.
        // In all cases, these decisions should be reevaluated based on changes to the language and
        // common development practices.
        return false;
    };
}
/**
 * Create the configuration object used for building comparators.
 */
function createEqualityComparatorConfig({ circular, createCustomConfig, strict, }) {
    let config = {
        areArrayBuffersEqual,
        areArraysEqual: strict ? areObjectsEqualStrict : areArraysEqual,
        areDataViewsEqual,
        areDatesEqual: areDatesEqual,
        areErrorsEqual: areErrorsEqual,
        areFunctionsEqual: areFunctionsEqual,
        areMapsEqual: strict ? combineComparators(areMapsEqual, areObjectsEqualStrict) : areMapsEqual,
        areNumbersEqual: areNumbersEqual,
        areObjectsEqual: strict ? areObjectsEqualStrict : areObjectsEqual,
        arePrimitiveWrappersEqual: arePrimitiveWrappersEqual,
        areRegExpsEqual: areRegExpsEqual,
        areSetsEqual: strict ? combineComparators(areSetsEqual, areObjectsEqualStrict) : areSetsEqual,
        areTypedArraysEqual: strict
            ? combineComparators(areTypedArraysEqual, areObjectsEqualStrict)
            : areTypedArraysEqual,
        areUrlsEqual: areUrlsEqual,
        unknownTagComparators: undefined,
    };
    if (createCustomConfig) {
        config = Object.assign({}, config, createCustomConfig(config));
    }
    if (circular) {
        const areArraysEqual = createIsCircular(config.areArraysEqual);
        const areMapsEqual = createIsCircular(config.areMapsEqual);
        const areObjectsEqual = createIsCircular(config.areObjectsEqual);
        const areSetsEqual = createIsCircular(config.areSetsEqual);
        config = Object.assign({}, config, {
            areArraysEqual,
            areMapsEqual,
            areObjectsEqual,
            areSetsEqual,
        });
    }
    return config;
}
/**
 * Default equality comparator pass-through, used as the standard `isEqual` creator for
 * use inside the built comparator.
 */
function createInternalEqualityComparator(compare) {
    return function (a, b, _indexOrKeyA, _indexOrKeyB, _parentA, _parentB, state) {
        return compare(a, b, state);
    };
}
/**
 * Create the `isEqual` function used by the consuming application.
 */
function createIsEqual({ circular, comparator, createState, equals, strict }) {
    if (createState) {
        return function isEqual(a, b) {
            const { cache = circular ? new WeakMap() : undefined, meta } = createState();
            return comparator(a, b, {
                cache,
                equals,
                meta,
                strict,
            });
        };
    }
    if (circular) {
        return function isEqual(a, b) {
            return comparator(a, b, {
                cache: new WeakMap(),
                equals,
                meta: undefined,
                strict,
            });
        };
    }
    const state = {
        cache: undefined,
        equals,
        meta: undefined,
        strict,
    };
    return function isEqual(a, b) {
        return comparator(a, b, state);
    };
}

/**
 * Whether the items passed are deeply-equal in value.
 */
const deepEqual = createCustomEqual();
/**
 * Whether the items passed are deeply-equal in value based on strict comparison.
 */
const strictDeepEqual = createCustomEqual({ strict: true });
/**
 * Whether the items passed are deeply-equal in value, including circular references.
 */
const circularDeepEqual = createCustomEqual({ circular: true });
/**
 * Whether the items passed are deeply-equal in value, including circular references,
 * based on strict comparison.
 */
const strictCircularDeepEqual = createCustomEqual({
    circular: true,
    strict: true,
});
/**
 * Whether the items passed are shallowly-equal in value.
 */
const es_shallowEqual = createCustomEqual({
    createInternalComparator: () => sameValueZeroEqual,
});
/**
 * Whether the items passed are shallowly-equal in value based on strict comparison
 */
const strictShallowEqual = createCustomEqual({
    strict: true,
    createInternalComparator: () => sameValueZeroEqual,
});
/**
 * Whether the items passed are shallowly-equal in value, including circular references.
 */
const circularShallowEqual = createCustomEqual({
    circular: true,
    createInternalComparator: () => sameValueZeroEqual,
});
/**
 * Whether the items passed are shallowly-equal in value, including circular references,
 * based on strict comparison.
 */
const strictCircularShallowEqual = createCustomEqual({
    circular: true,
    createInternalComparator: () => sameValueZeroEqual,
    strict: true,
});
/**
 * Create a custom equality comparison method.
 *
 * This can be done to create very targeted comparisons in extreme hot-path scenarios
 * where the standard methods are not performant enough, but can also be used to provide
 * support for legacy environments that do not support expected features like
 * `RegExp.prototype.flags` out of the box.
 */
function createCustomEqual(options = {}) {
    const { circular = false, createInternalComparator: createCustomInternalComparator, createState, strict = false, } = options;
    const config = createEqualityComparatorConfig(options);
    const comparator = createEqualityComparator(config);
    const equals = createCustomInternalComparator
        ? createCustomInternalComparator(comparator)
        : createInternalEqualityComparator(comparator);
    return createIsEqual({ circular, comparator, createState, equals, strict });
}


//# sourceMappingURL=index.mjs.map

;// ./node_modules/react-smooth/es6/setRafTimeout.js
function safeRequestAnimationFrame(callback) {
  if (typeof requestAnimationFrame !== 'undefined') requestAnimationFrame(callback);
}
function setRafTimeout(callback) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var currTime = -1;
  var shouldUpdate = function shouldUpdate(now) {
    if (currTime < 0) {
      currTime = now;
    }
    if (now - currTime > timeout) {
      callback(now);
      currTime = -1;
    } else {
      safeRequestAnimationFrame(shouldUpdate);
    }
  };
  requestAnimationFrame(shouldUpdate);
}
;// ./node_modules/react-smooth/es6/AnimateManager.js
function AnimateManager_typeof(o) { "@babel/helpers - typeof"; return AnimateManager_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, AnimateManager_typeof(o); }
function _toArray(arr) { return AnimateManager_arrayWithHoles(arr) || _iterableToArray(arr) || AnimateManager_unsupportedIterableToArray(arr) || AnimateManager_nonIterableRest(); }
function AnimateManager_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AnimateManager_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AnimateManager_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AnimateManager_arrayLikeToArray(o, minLen); }
function AnimateManager_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function AnimateManager_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
;
function createAnimateManager() {
  var currStyle = {};
  var handleChange = function handleChange() {
    return null;
  };
  var shouldStop = false;
  var setStyle = function setStyle(_style) {
    if (shouldStop) {
      return;
    }
    if (Array.isArray(_style)) {
      if (!_style.length) {
        return;
      }
      var styles = _style;
      var _styles = _toArray(styles),
        curr = _styles[0],
        restStyles = _styles.slice(1);
      if (typeof curr === 'number') {
        setRafTimeout(setStyle.bind(null, restStyles), curr);
        return;
      }
      setStyle(curr);
      setRafTimeout(setStyle.bind(null, restStyles));
      return;
    }
    if (AnimateManager_typeof(_style) === 'object') {
      currStyle = _style;
      handleChange(currStyle);
    }
    if (typeof _style === 'function') {
      _style();
    }
  };
  return {
    stop: function stop() {
      shouldStop = true;
    },
    start: function start(style) {
      shouldStop = false;
      setStyle(style);
    },
    subscribe: function subscribe(_handleChange) {
      handleChange = _handleChange;
      return function () {
        handleChange = function handleChange() {
          return null;
        };
      };
    }
  };
}
;// ./node_modules/react-smooth/es6/util.js
function util_typeof(o) { "@babel/helpers - typeof"; return util_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, util_typeof(o); }
function util_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function util_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? util_ownKeys(Object(t), !0).forEach(function (r) { util_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : util_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function util_defineProperty(obj, key, value) { key = util_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function util_toPropertyKey(arg) { var key = util_toPrimitive(arg, "string"); return util_typeof(key) === "symbol" ? key : String(key); }
function util_toPrimitive(input, hint) { if (util_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (util_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint no-console: 0 */

var getIntersectionKeys = function getIntersectionKeys(preObj, nextObj) {
  return [Object.keys(preObj), Object.keys(nextObj)].reduce(function (a, b) {
    return a.filter(function (c) {
      return b.includes(c);
    });
  });
};
var identity = function identity(param) {
  return param;
};

/*
 * @description: convert camel case to dash case
 * string => string
 */
var getDashCase = function getDashCase(name) {
  return name.replace(/([A-Z])/g, function (v) {
    return "-".concat(v.toLowerCase());
  });
};
var log = function log() {
  var _console;
  (_console = console).log.apply(_console, arguments);
};

/*
 * @description: log the value of a varible
 * string => any => any
 */
var debug = function debug(name) {
  return function (item) {
    log(name, item);
    return item;
  };
};

/*
 * @description: log name, args, return value of a function
 * function => function
 */
var debugf = function debugf(tag, f) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var res = f.apply(void 0, args);
    var name = tag || f.name || 'anonymous function';
    var argNames = "(".concat(args.map(JSON.stringify).join(', '), ")");
    log("".concat(name, ": ").concat(argNames, " => ").concat(JSON.stringify(res)));
    return res;
  };
};

/*
 * @description: map object on every element in this object.
 * (function, object) => object
 */
var mapObject = function mapObject(fn, obj) {
  return Object.keys(obj).reduce(function (res, key) {
    return util_objectSpread(util_objectSpread({}, res), {}, util_defineProperty({}, key, fn(key, obj[key])));
  }, {});
};
var getTransitionVal = function getTransitionVal(props, duration, easing) {
  return props.map(function (prop) {
    return "".concat(getDashCase(prop), " ").concat(duration, "ms ").concat(easing);
  }).join(',');
};
var util_isDev = "production" !== 'production';
var util_warn = function warn(condition, format, a, b, c, d, e, f) {
  if (util_isDev && typeof console !== 'undefined' && console.warn) {
    if (format === undefined) {
      console.warn('LogUtils requires an error message argument');
    }
    if (!condition) {
      if (format === undefined) {
        console.warn('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        console.warn(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
      }
    }
  }
};
;// ./node_modules/react-smooth/es6/easing.js
function easing_slicedToArray(arr, i) { return easing_arrayWithHoles(arr) || easing_iterableToArrayLimit(arr, i) || easing_unsupportedIterableToArray(arr, i) || easing_nonIterableRest(); }
function easing_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function easing_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function easing_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || easing_iterableToArray(arr) || easing_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function easing_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return easing_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return easing_arrayLikeToArray(o, minLen); }
function easing_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return easing_arrayLikeToArray(arr); }
function easing_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
;
var ACCURACY = 1e-4;
var cubicBezierFactor = function cubicBezierFactor(c1, c2) {
  return [0, 3 * c1, 3 * c2 - 6 * c1, 3 * c1 - 3 * c2 + 1];
};
var multyTime = function multyTime(params, t) {
  return params.map(function (param, i) {
    return param * Math.pow(t, i);
  }).reduce(function (pre, curr) {
    return pre + curr;
  });
};
var cubicBezier = function cubicBezier(c1, c2) {
  return function (t) {
    var params = cubicBezierFactor(c1, c2);
    return multyTime(params, t);
  };
};
var derivativeCubicBezier = function derivativeCubicBezier(c1, c2) {
  return function (t) {
    var params = cubicBezierFactor(c1, c2);
    var newParams = [].concat(_toConsumableArray(params.map(function (param, i) {
      return param * i;
    }).slice(1)), [0]);
    return multyTime(newParams, t);
  };
};

// calculate cubic-bezier using Newton's method
var configBezier = function configBezier() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var x1 = args[0],
    y1 = args[1],
    x2 = args[2],
    y2 = args[3];
  if (args.length === 1) {
    switch (args[0]) {
      case 'linear':
        x1 = 0.0;
        y1 = 0.0;
        x2 = 1.0;
        y2 = 1.0;
        break;
      case 'ease':
        x1 = 0.25;
        y1 = 0.1;
        x2 = 0.25;
        y2 = 1.0;
        break;
      case 'ease-in':
        x1 = 0.42;
        y1 = 0.0;
        x2 = 1.0;
        y2 = 1.0;
        break;
      case 'ease-out':
        x1 = 0.42;
        y1 = 0.0;
        x2 = 0.58;
        y2 = 1.0;
        break;
      case 'ease-in-out':
        x1 = 0.0;
        y1 = 0.0;
        x2 = 0.58;
        y2 = 1.0;
        break;
      default:
        {
          var easing = args[0].split('(');
          if (easing[0] === 'cubic-bezier' && easing[1].split(')')[0].split(',').length === 4) {
            var _easing$1$split$0$spl = easing[1].split(')')[0].split(',').map(function (x) {
              return parseFloat(x);
            });
            var _easing$1$split$0$spl2 = easing_slicedToArray(_easing$1$split$0$spl, 4);
            x1 = _easing$1$split$0$spl2[0];
            y1 = _easing$1$split$0$spl2[1];
            x2 = _easing$1$split$0$spl2[2];
            y2 = _easing$1$split$0$spl2[3];
          } else {
            util_warn(false, '[configBezier]: arguments should be one of ' + "oneOf 'linear', 'ease', 'ease-in', 'ease-out', " + "'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", args);
          }
        }
    }
  }
  util_warn([x1, x2, y1, y2].every(function (num) {
    return typeof num === 'number' && num >= 0 && num <= 1;
  }), '[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s', args);
  var curveX = cubicBezier(x1, x2);
  var curveY = cubicBezier(y1, y2);
  var derCurveX = derivativeCubicBezier(x1, x2);
  var rangeValue = function rangeValue(value) {
    if (value > 1) {
      return 1;
    }
    if (value < 0) {
      return 0;
    }
    return value;
  };
  var bezier = function bezier(_t) {
    var t = _t > 1 ? 1 : _t;
    var x = t;
    for (var i = 0; i < 8; ++i) {
      var evalT = curveX(x) - t;
      var derVal = derCurveX(x);
      if (Math.abs(evalT - t) < ACCURACY || derVal < ACCURACY) {
        return curveY(x);
      }
      x = rangeValue(x - evalT / derVal);
    }
    return curveY(x);
  };
  bezier.isStepper = false;
  return bezier;
};
var configSpring = function configSpring() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$stiff = config.stiff,
    stiff = _config$stiff === void 0 ? 100 : _config$stiff,
    _config$damping = config.damping,
    damping = _config$damping === void 0 ? 8 : _config$damping,
    _config$dt = config.dt,
    dt = _config$dt === void 0 ? 17 : _config$dt;
  var stepper = function stepper(currX, destX, currV) {
    var FSpring = -(currX - destX) * stiff;
    var FDamping = currV * damping;
    var newV = currV + (FSpring - FDamping) * dt / 1000;
    var newX = currV * dt / 1000 + currX;
    if (Math.abs(newX - destX) < ACCURACY && Math.abs(newV) < ACCURACY) {
      return [destX, 0];
    }
    return [newX, newV];
  };
  stepper.isStepper = true;
  stepper.dt = dt;
  return stepper;
};
var configEasing = function configEasing() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var easing = args[0];
  if (typeof easing === 'string') {
    switch (easing) {
      case 'ease':
      case 'ease-in-out':
      case 'ease-out':
      case 'ease-in':
      case 'linear':
        return configBezier(easing);
      case 'spring':
        return configSpring();
      default:
        if (easing.split('(')[0] === 'cubic-bezier') {
          return configBezier(easing);
        }
        util_warn(false, "[configEasing]: first argument should be one of 'ease', 'ease-in', " + "'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", args);
    }
  }
  if (typeof easing === 'function') {
    return easing;
  }
  util_warn(false, '[configEasing]: first argument type should be function or string, instead received %s', args);
  return null;
};
;// ./node_modules/react-smooth/es6/configUpdate.js
function configUpdate_typeof(o) { "@babel/helpers - typeof"; return configUpdate_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, configUpdate_typeof(o); }
function configUpdate_toConsumableArray(arr) { return configUpdate_arrayWithoutHoles(arr) || configUpdate_iterableToArray(arr) || configUpdate_unsupportedIterableToArray(arr) || configUpdate_nonIterableSpread(); }
function configUpdate_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function configUpdate_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function configUpdate_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return configUpdate_arrayLikeToArray(arr); }
function configUpdate_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function configUpdate_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? configUpdate_ownKeys(Object(t), !0).forEach(function (r) { configUpdate_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : configUpdate_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function configUpdate_defineProperty(obj, key, value) { key = configUpdate_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function configUpdate_toPropertyKey(arg) { var key = configUpdate_toPrimitive(arg, "string"); return configUpdate_typeof(key) === "symbol" ? key : String(key); }
function configUpdate_toPrimitive(input, hint) { if (configUpdate_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (configUpdate_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function configUpdate_slicedToArray(arr, i) { return configUpdate_arrayWithHoles(arr) || configUpdate_iterableToArrayLimit(arr, i) || configUpdate_unsupportedIterableToArray(arr, i) || configUpdate_nonIterableRest(); }
function configUpdate_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function configUpdate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return configUpdate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return configUpdate_arrayLikeToArray(o, minLen); }
function configUpdate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function configUpdate_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function configUpdate_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
;
var alpha = function alpha(begin, end, k) {
  return begin + (end - begin) * k;
};
var needContinue = function needContinue(_ref) {
  var from = _ref.from,
    to = _ref.to;
  return from !== to;
};

/*
 * @description: cal new from value and velocity in each stepper
 * @return: { [styleProperty]: { from, to, velocity } }
 */
var calStepperVals = function calStepperVals(easing, preVals, steps) {
  var nextStepVals = mapObject(function (key, val) {
    if (needContinue(val)) {
      var _easing = easing(val.from, val.to, val.velocity),
        _easing2 = configUpdate_slicedToArray(_easing, 2),
        newX = _easing2[0],
        newV = _easing2[1];
      return configUpdate_objectSpread(configUpdate_objectSpread({}, val), {}, {
        from: newX,
        velocity: newV
      });
    }
    return val;
  }, preVals);
  if (steps < 1) {
    return mapObject(function (key, val) {
      if (needContinue(val)) {
        return configUpdate_objectSpread(configUpdate_objectSpread({}, val), {}, {
          velocity: alpha(val.velocity, nextStepVals[key].velocity, steps),
          from: alpha(val.from, nextStepVals[key].from, steps)
        });
      }
      return val;
    }, preVals);
  }
  return calStepperVals(easing, nextStepVals, steps - 1);
};

// configure update function
/* harmony default export */ const configUpdate = (function (from, to, easing, duration, render) {
  var interKeys = getIntersectionKeys(from, to);
  var timingStyle = interKeys.reduce(function (res, key) {
    return configUpdate_objectSpread(configUpdate_objectSpread({}, res), {}, configUpdate_defineProperty({}, key, [from[key], to[key]]));
  }, {});
  var stepperStyle = interKeys.reduce(function (res, key) {
    return configUpdate_objectSpread(configUpdate_objectSpread({}, res), {}, configUpdate_defineProperty({}, key, {
      from: from[key],
      velocity: 0,
      to: to[key]
    }));
  }, {});
  var cafId = -1;
  var preTime;
  var beginTime;
  var update = function update() {
    return null;
  };
  var getCurrStyle = function getCurrStyle() {
    return mapObject(function (key, val) {
      return val.from;
    }, stepperStyle);
  };
  var shouldStopAnimation = function shouldStopAnimation() {
    return !Object.values(stepperStyle).filter(needContinue).length;
  };

  // stepper timing function like spring
  var stepperUpdate = function stepperUpdate(now) {
    if (!preTime) {
      preTime = now;
    }
    var deltaTime = now - preTime;
    var steps = deltaTime / easing.dt;
    stepperStyle = calStepperVals(easing, stepperStyle, steps);
    // get union set and add compatible prefix
    render(configUpdate_objectSpread(configUpdate_objectSpread(configUpdate_objectSpread({}, from), to), getCurrStyle(stepperStyle)));
    preTime = now;
    if (!shouldStopAnimation()) {
      cafId = requestAnimationFrame(update);
    }
  };

  // t => val timing function like cubic-bezier
  var timingUpdate = function timingUpdate(now) {
    if (!beginTime) {
      beginTime = now;
    }
    var t = (now - beginTime) / duration;
    var currStyle = mapObject(function (key, val) {
      return alpha.apply(void 0, configUpdate_toConsumableArray(val).concat([easing(t)]));
    }, timingStyle);

    // get union set and add compatible prefix
    render(configUpdate_objectSpread(configUpdate_objectSpread(configUpdate_objectSpread({}, from), to), currStyle));
    if (t < 1) {
      cafId = requestAnimationFrame(update);
    } else {
      var finalStyle = mapObject(function (key, val) {
        return alpha.apply(void 0, configUpdate_toConsumableArray(val).concat([easing(1)]));
      }, timingStyle);
      render(configUpdate_objectSpread(configUpdate_objectSpread(configUpdate_objectSpread({}, from), to), finalStyle));
    }
  };
  update = easing.isStepper ? stepperUpdate : timingUpdate;

  // return start animation method
  return function () {
    requestAnimationFrame(update);

    // return stop animation method
    return function () {
      cancelAnimationFrame(cafId);
    };
  };
});
__webpack_require__.dn(configUpdate);
;// ./node_modules/react-smooth/es6/Animate.js
function Animate_typeof(o) { "@babel/helpers - typeof"; return Animate_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Animate_typeof(o); }
var Animate_excluded = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function Animate_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Animate_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Animate_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Animate_toConsumableArray(arr) { return Animate_arrayWithoutHoles(arr) || Animate_iterableToArray(arr) || Animate_unsupportedIterableToArray(arr) || Animate_nonIterableSpread(); }
function Animate_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Animate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Animate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Animate_arrayLikeToArray(o, minLen); }
function Animate_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Animate_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Animate_arrayLikeToArray(arr); }
function Animate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Animate_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Animate_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Animate_ownKeys(Object(t), !0).forEach(function (r) { Animate_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Animate_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Animate_defineProperty(obj, key, value) { key = Animate_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Animate_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Animate_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Animate_toPropertyKey(descriptor.key), descriptor); } }
function Animate_createClass(Constructor, protoProps, staticProps) { if (protoProps) Animate_defineProperties(Constructor.prototype, protoProps); if (staticProps) Animate_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Animate_toPropertyKey(arg) { var key = Animate_toPrimitive(arg, "string"); return Animate_typeof(key) === "symbol" ? key : String(key); }
function Animate_toPrimitive(input, hint) { if (Animate_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Animate_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Animate_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Animate_setPrototypeOf(subClass, superClass); }
function Animate_setPrototypeOf(o, p) { Animate_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Animate_setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = Animate_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Animate_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Animate_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Animate_possibleConstructorReturn(this, result); }; }
function Animate_possibleConstructorReturn(self, call) { if (call && (Animate_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Animate_assertThisInitialized(self); }
function Animate_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function Animate_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function Animate_getPrototypeOf(o) { Animate_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Animate_getPrototypeOf(o); }
;






var Animate = /*#__PURE__*/function (_PureComponent) {
  Animate_inherits(Animate, _PureComponent);
  var _super = _createSuper(Animate);
  function Animate(props, context) {
    var _this;
    Animate_classCallCheck(this, Animate);
    _this = _super.call(this, props, context);
    var _this$props = _this.props,
      isActive = _this$props.isActive,
      attributeName = _this$props.attributeName,
      from = _this$props.from,
      to = _this$props.to,
      steps = _this$props.steps,
      children = _this$props.children,
      duration = _this$props.duration;
    _this.handleStyleChange = _this.handleStyleChange.bind(Animate_assertThisInitialized(_this));
    _this.changeStyle = _this.changeStyle.bind(Animate_assertThisInitialized(_this));
    if (!isActive || duration <= 0) {
      _this.state = {
        style: {}
      };

      // if children is a function and animation is not active, set style to 'to'
      if (typeof children === 'function') {
        _this.state = {
          style: to
        };
      }
      return Animate_possibleConstructorReturn(_this);
    }
    if (steps && steps.length) {
      _this.state = {
        style: steps[0].style
      };
    } else if (from) {
      if (typeof children === 'function') {
        _this.state = {
          style: from
        };
        return Animate_possibleConstructorReturn(_this);
      }
      _this.state = {
        style: attributeName ? Animate_defineProperty({}, attributeName, from) : from
      };
    } else {
      _this.state = {
        style: {}
      };
    }
    return _this;
  }
  Animate_createClass(Animate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
        isActive = _this$props2.isActive,
        canBegin = _this$props2.canBegin;
      this.mounted = true;
      if (!isActive || !canBegin) {
        return;
      }
      this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
        isActive = _this$props3.isActive,
        canBegin = _this$props3.canBegin,
        attributeName = _this$props3.attributeName,
        shouldReAnimate = _this$props3.shouldReAnimate,
        to = _this$props3.to,
        currentFrom = _this$props3.from;
      var style = this.state.style;
      if (!canBegin) {
        return;
      }
      if (!isActive) {
        var newState = {
          style: attributeName ? Animate_defineProperty({}, attributeName, to) : to
        };
        if (this.state && style) {
          if (attributeName && style[attributeName] !== to || !attributeName && style !== to) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState(newState);
          }
        }
        return;
      }
      if (deepEqual(prevProps.to, to) && prevProps.canBegin && prevProps.isActive) {
        return;
      }
      var isTriggered = !prevProps.canBegin || !prevProps.isActive;
      if (this.manager) {
        this.manager.stop();
      }
      if (this.stopJSAnimation) {
        this.stopJSAnimation();
      }
      var from = isTriggered || shouldReAnimate ? currentFrom : prevProps.to;
      if (this.state && style) {
        var _newState = {
          style: attributeName ? Animate_defineProperty({}, attributeName, from) : from
        };
        if (attributeName && style[attributeName] !== from || !attributeName && style !== from) {
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState(_newState);
        }
      }
      this.runAnimation(Animate_objectSpread(Animate_objectSpread({}, this.props), {}, {
        from: from,
        begin: 0
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
      var onAnimationEnd = this.props.onAnimationEnd;
      if (this.unSubscribe) {
        this.unSubscribe();
      }
      if (this.manager) {
        this.manager.stop();
        this.manager = null;
      }
      if (this.stopJSAnimation) {
        this.stopJSAnimation();
      }
      if (onAnimationEnd) {
        onAnimationEnd();
      }
    }
  }, {
    key: "handleStyleChange",
    value: function handleStyleChange(style) {
      this.changeStyle(style);
    }
  }, {
    key: "changeStyle",
    value: function changeStyle(style) {
      if (this.mounted) {
        this.setState({
          style: style
        });
      }
    }
  }, {
    key: "runJSAnimation",
    value: function runJSAnimation(props) {
      var _this2 = this;
      var from = props.from,
        to = props.to,
        duration = props.duration,
        easing = props.easing,
        begin = props.begin,
        onAnimationEnd = props.onAnimationEnd,
        onAnimationStart = props.onAnimationStart;
      var startAnimation = configUpdate(from, to, configEasing(easing), duration, this.changeStyle);
      var finalStartAnimation = function finalStartAnimation() {
        _this2.stopJSAnimation = startAnimation();
      };
      this.manager.start([onAnimationStart, begin, finalStartAnimation, duration, onAnimationEnd]);
    }
  }, {
    key: "runStepAnimation",
    value: function runStepAnimation(props) {
      var _this3 = this;
      var steps = props.steps,
        begin = props.begin,
        onAnimationStart = props.onAnimationStart;
      var _steps$ = steps[0],
        initialStyle = _steps$.style,
        _steps$$duration = _steps$.duration,
        initialTime = _steps$$duration === void 0 ? 0 : _steps$$duration;
      var addStyle = function addStyle(sequence, nextItem, index) {
        if (index === 0) {
          return sequence;
        }
        var duration = nextItem.duration,
          _nextItem$easing = nextItem.easing,
          easing = _nextItem$easing === void 0 ? 'ease' : _nextItem$easing,
          style = nextItem.style,
          nextProperties = nextItem.properties,
          onAnimationEnd = nextItem.onAnimationEnd;
        var preItem = index > 0 ? steps[index - 1] : nextItem;
        var properties = nextProperties || Object.keys(style);
        if (typeof easing === 'function' || easing === 'spring') {
          return [].concat(Animate_toConsumableArray(sequence), [_this3.runJSAnimation.bind(_this3, {
            from: preItem.style,
            to: style,
            duration: duration,
            easing: easing
          }), duration]);
        }
        var transition = getTransitionVal(properties, duration, easing);
        var newStyle = Animate_objectSpread(Animate_objectSpread(Animate_objectSpread({}, preItem.style), style), {}, {
          transition: transition
        });
        return [].concat(Animate_toConsumableArray(sequence), [newStyle, duration, onAnimationEnd]).filter(identity);
      };
      return this.manager.start([onAnimationStart].concat(Animate_toConsumableArray(steps.reduce(addStyle, [initialStyle, Math.max(initialTime, begin)])), [props.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function runAnimation(props) {
      if (!this.manager) {
        this.manager = createAnimateManager();
      }
      var begin = props.begin,
        duration = props.duration,
        attributeName = props.attributeName,
        propsTo = props.to,
        easing = props.easing,
        onAnimationStart = props.onAnimationStart,
        onAnimationEnd = props.onAnimationEnd,
        steps = props.steps,
        children = props.children;
      var manager = this.manager;
      this.unSubscribe = manager.subscribe(this.handleStyleChange);
      if (typeof easing === 'function' || typeof children === 'function' || easing === 'spring') {
        this.runJSAnimation(props);
        return;
      }
      if (steps.length > 1) {
        this.runStepAnimation(props);
        return;
      }
      var to = attributeName ? Animate_defineProperty({}, attributeName, propsTo) : propsTo;
      var transition = getTransitionVal(Object.keys(to), duration, easing);
      manager.start([onAnimationStart, begin, Animate_objectSpread(Animate_objectSpread({}, to), {}, {
        transition: transition
      }), duration, onAnimationEnd]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        children = _this$props4.children,
        begin = _this$props4.begin,
        duration = _this$props4.duration,
        attributeName = _this$props4.attributeName,
        easing = _this$props4.easing,
        isActive = _this$props4.isActive,
        steps = _this$props4.steps,
        from = _this$props4.from,
        to = _this$props4.to,
        canBegin = _this$props4.canBegin,
        onAnimationEnd = _this$props4.onAnimationEnd,
        shouldReAnimate = _this$props4.shouldReAnimate,
        onAnimationReStart = _this$props4.onAnimationReStart,
        others = Animate_objectWithoutProperties(_this$props4, Animate_excluded);
      var count = react.Children.count(children);
      // eslint-disable-next-line react/destructuring-assignment
      var stateStyle = this.state.style;
      if (typeof children === 'function') {
        return children(stateStyle);
      }
      if (!isActive || count === 0 || duration <= 0) {
        return children;
      }
      var cloneContainer = function cloneContainer(container) {
        var _container$props = container.props,
          _container$props$styl = _container$props.style,
          style = _container$props$styl === void 0 ? {} : _container$props$styl,
          className = _container$props.className;
        var res = /*#__PURE__*/(0,react.cloneElement)(container, Animate_objectSpread(Animate_objectSpread({}, others), {}, {
          style: Animate_objectSpread(Animate_objectSpread({}, style), stateStyle),
          className: className
        }));
        return res;
      };
      if (count === 1) {
        return cloneContainer(react.Children.only(children));
      }
      return /*#__PURE__*/react.createElement("div", null, react.Children.map(children, function (child) {
        return cloneContainer(child);
      }));
    }
  }]);
  return Animate;
}(react.PureComponent);
Animate.displayName = 'Animate';
Animate.defaultProps = {
  begin: 0,
  duration: 1000,
  from: '',
  to: '',
  attributeName: '',
  easing: 'ease',
  isActive: true,
  canBegin: true,
  steps: [],
  onAnimationEnd: function onAnimationEnd() {},
  onAnimationStart: function onAnimationStart() {}
};
Animate.propTypes = {
  from: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).string]),
  to: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).string]),
  attributeName: (prop_types_default()).string,
  // animation duration
  duration: (prop_types_default()).number,
  begin: (prop_types_default()).number,
  easing: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func]),
  steps: prop_types_default().arrayOf(prop_types_default().shape({
    duration: (prop_types_default()).number.isRequired,
    style: (prop_types_default()).object.isRequired,
    easing: prop_types_default().oneOfType([prop_types_default().oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']), (prop_types_default()).func]),
    // transition css properties(dash case), optional
    properties: prop_types_default().arrayOf('string'),
    onAnimationEnd: (prop_types_default()).func
  })),
  children: prop_types_default().oneOfType([(prop_types_default()).node, (prop_types_default()).func]),
  isActive: (prop_types_default()).bool,
  canBegin: (prop_types_default()).bool,
  onAnimationEnd: (prop_types_default()).func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: (prop_types_default()).bool,
  onAnimationStart: (prop_types_default()).func,
  onAnimationReStart: (prop_types_default()).func
};
/* harmony default export */ const es6_Animate = (Animate);
;// ./node_modules/react-smooth/es6/index.js




/* harmony default export */ const es6 = (es6_Animate);
;// ./node_modules/recharts/es6/shape/Rectangle.js
function Rectangle_typeof(o) { "@babel/helpers - typeof"; return Rectangle_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Rectangle_typeof(o); }
function Rectangle_extends() { Rectangle_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Rectangle_extends.apply(this, arguments); }
function Rectangle_slicedToArray(arr, i) { return Rectangle_arrayWithHoles(arr) || Rectangle_iterableToArrayLimit(arr, i) || Rectangle_unsupportedIterableToArray(arr, i) || Rectangle_nonIterableRest(); }
function Rectangle_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Rectangle_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Rectangle_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Rectangle_arrayLikeToArray(o, minLen); }
function Rectangle_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Rectangle_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function Rectangle_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Rectangle_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Rectangle_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Rectangle_ownKeys(Object(t), !0).forEach(function (r) { Rectangle_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Rectangle_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Rectangle_defineProperty(obj, key, value) { key = Rectangle_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Rectangle_toPropertyKey(t) { var i = Rectangle_toPrimitive(t, "string"); return "symbol" == Rectangle_typeof(i) ? i : i + ""; }
function Rectangle_toPrimitive(t, r) { if ("object" != Rectangle_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Rectangle_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview Rectangle
 */
;



var getRectanglePath = function getRectanglePath(x, y, width, height, radius) {
  var maxRadius = Math.min(Math.abs(width) / 2, Math.abs(height) / 2);
  var ySign = height >= 0 ? 1 : -1;
  var xSign = width >= 0 ? 1 : -1;
  var clockWise = height >= 0 && width >= 0 || height < 0 && width < 0 ? 1 : 0;
  var path;
  if (maxRadius > 0 && radius instanceof Array) {
    var newRadius = [0, 0, 0, 0];
    for (var i = 0, len = 4; i < len; i++) {
      newRadius[i] = radius[i] > maxRadius ? maxRadius : radius[i];
    }
    path = "M".concat(x, ",").concat(y + ySign * newRadius[0]);
    if (newRadius[0] > 0) {
      path += "A ".concat(newRadius[0], ",").concat(newRadius[0], ",0,0,").concat(clockWise, ",").concat(x + xSign * newRadius[0], ",").concat(y);
    }
    path += "L ".concat(x + width - xSign * newRadius[1], ",").concat(y);
    if (newRadius[1] > 0) {
      path += "A ".concat(newRadius[1], ",").concat(newRadius[1], ",0,0,").concat(clockWise, ",\n        ").concat(x + width, ",").concat(y + ySign * newRadius[1]);
    }
    path += "L ".concat(x + width, ",").concat(y + height - ySign * newRadius[2]);
    if (newRadius[2] > 0) {
      path += "A ".concat(newRadius[2], ",").concat(newRadius[2], ",0,0,").concat(clockWise, ",\n        ").concat(x + width - xSign * newRadius[2], ",").concat(y + height);
    }
    path += "L ".concat(x + xSign * newRadius[3], ",").concat(y + height);
    if (newRadius[3] > 0) {
      path += "A ".concat(newRadius[3], ",").concat(newRadius[3], ",0,0,").concat(clockWise, ",\n        ").concat(x, ",").concat(y + height - ySign * newRadius[3]);
    }
    path += 'Z';
  } else if (maxRadius > 0 && radius === +radius && radius > 0) {
    var _newRadius = Math.min(maxRadius, radius);
    path = "M ".concat(x, ",").concat(y + ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + xSign * _newRadius, ",").concat(y, "\n            L ").concat(x + width - xSign * _newRadius, ",").concat(y, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + width, ",").concat(y + ySign * _newRadius, "\n            L ").concat(x + width, ",").concat(y + height - ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + width - xSign * _newRadius, ",").concat(y + height, "\n            L ").concat(x + xSign * _newRadius, ",").concat(y + height, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x, ",").concat(y + height - ySign * _newRadius, " Z");
  } else {
    path = "M ".concat(x, ",").concat(y, " h ").concat(width, " v ").concat(height, " h ").concat(-width, " Z");
  }
  return path;
};
var isInRectangle = function isInRectangle(point, rect) {
  if (!point || !rect) {
    return false;
  }
  var px = point.x,
    py = point.y;
  var x = rect.x,
    y = rect.y,
    width = rect.width,
    height = rect.height;
  if (Math.abs(width) > 0 && Math.abs(height) > 0) {
    var minX = Math.min(x, x + width);
    var maxX = Math.max(x, x + width);
    var minY = Math.min(y, y + height);
    var maxY = Math.max(y, y + height);
    return px >= minX && px <= maxX && py >= minY && py <= maxY;
  }
  return false;
};
var defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: false,
  isUpdateAnimationActive: false,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
};
var Rectangle = function Rectangle(rectangleProps) {
  var props = Rectangle_objectSpread(Rectangle_objectSpread({}, defaultProps), rectangleProps);
  var pathRef = (0,react.useRef)();
  var _useState = (0,react.useState)(-1),
    _useState2 = Rectangle_slicedToArray(_useState, 2),
    totalLength = _useState2[0],
    setTotalLength = _useState2[1];
  (0,react.useEffect)(function () {
    if (pathRef.current && pathRef.current.getTotalLength) {
      try {
        var pathTotalLength = pathRef.current.getTotalLength();
        if (pathTotalLength) {
          setTotalLength(pathTotalLength);
        }
      } catch (err) {
        // calculate total length error
      }
    }
  }, []);
  var x = props.x,
    y = props.y,
    width = props.width,
    height = props.height,
    radius = props.radius,
    className = props.className;
  var animationEasing = props.animationEasing,
    animationDuration = props.animationDuration,
    animationBegin = props.animationBegin,
    isAnimationActive = props.isAnimationActive,
    isUpdateAnimationActive = props.isUpdateAnimationActive;
  if (x !== +x || y !== +y || width !== +width || height !== +height || width === 0 || height === 0) {
    return null;
  }
  var layerClass = (0,clsx/* default */.A)('recharts-rectangle', className);
  if (!isUpdateAnimationActive) {
    return /*#__PURE__*/react.createElement("path", Rectangle_extends({}, filterProps(props, true), {
      className: layerClass,
      d: getRectanglePath(x, y, width, height, radius)
    }));
  }
  return /*#__PURE__*/react.createElement(es6, {
    canBegin: totalLength > 0,
    from: {
      width: width,
      height: height,
      x: x,
      y: y
    },
    to: {
      width: width,
      height: height,
      x: x,
      y: y
    },
    duration: animationDuration,
    animationEasing: animationEasing,
    isActive: isUpdateAnimationActive
  }, function (_ref) {
    var currWidth = _ref.width,
      currHeight = _ref.height,
      currX = _ref.x,
      currY = _ref.y;
    return /*#__PURE__*/react.createElement(es6, {
      canBegin: totalLength > 0,
      from: "0px ".concat(totalLength === -1 ? 1 : totalLength, "px"),
      to: "".concat(totalLength, "px 0px"),
      attributeName: "strokeDasharray",
      begin: animationBegin,
      duration: animationDuration,
      isActive: isAnimationActive,
      easing: animationEasing
    }, /*#__PURE__*/react.createElement("path", Rectangle_extends({}, filterProps(props, true), {
      className: layerClass,
      d: getRectanglePath(currX, currY, currWidth, currHeight, radius),
      ref: pathRef
    })));
  });
};
// EXTERNAL MODULE: ./node_modules/d3-scale/src/band.js + 1 modules
var band = __webpack_require__(39072);
;// ./node_modules/recharts/es6/util/DOMUtils.js
function DOMUtils_typeof(o) { "@babel/helpers - typeof"; return DOMUtils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, DOMUtils_typeof(o); }
function DOMUtils_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function DOMUtils_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? DOMUtils_ownKeys(Object(t), !0).forEach(function (r) { DOMUtils_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : DOMUtils_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function DOMUtils_defineProperty(obj, key, value) { key = DOMUtils_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function DOMUtils_toPropertyKey(t) { var i = DOMUtils_toPrimitive(t, "string"); return "symbol" == DOMUtils_typeof(i) ? i : i + ""; }
function DOMUtils_toPrimitive(t, r) { if ("object" != DOMUtils_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != DOMUtils_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function DOMUtils_toConsumableArray(arr) { return DOMUtils_arrayWithoutHoles(arr) || DOMUtils_iterableToArray(arr) || DOMUtils_unsupportedIterableToArray(arr) || DOMUtils_nonIterableSpread(); }
function DOMUtils_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function DOMUtils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DOMUtils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DOMUtils_arrayLikeToArray(o, minLen); }
function DOMUtils_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function DOMUtils_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return DOMUtils_arrayLikeToArray(arr); }
function DOMUtils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
;
var stringCache = {
  widthCache: {},
  cacheCount: 0
};
var MAX_CACHE_NUM = 2000;
var SPAN_STYLE = {
  position: 'absolute',
  top: '-20000px',
  left: 0,
  padding: 0,
  margin: 0,
  border: 'none',
  whiteSpace: 'pre'
};
var STYLE_LIST = (/* unused pure expression or super */ null && (['minWidth', 'maxWidth', 'width', 'minHeight', 'maxHeight', 'height', 'top', 'left', 'fontSize', 'lineHeight', 'padding', 'margin', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom']));
var MEASUREMENT_SPAN_ID = 'recharts_measurement_span';
function autoCompleteStyle(name, value) {
  if (STYLE_LIST.indexOf(name) >= 0 && value === +value) {
    return "".concat(value, "px");
  }
  return value;
}
function camelToMiddleLine(text) {
  var strs = text.split('');
  var formatStrs = strs.reduce(function (result, entry) {
    if (entry === entry.toUpperCase()) {
      return [].concat(DOMUtils_toConsumableArray(result), ['-', entry.toLowerCase()]);
    }
    return [].concat(DOMUtils_toConsumableArray(result), [entry]);
  }, []);
  return formatStrs.join('');
}
var getStyleString = function getStyleString(style) {
  return Object.keys(style).reduce(function (result, s) {
    return "".concat(result).concat(camelToMiddleLine(s), ":").concat(autoCompleteStyle(s, style[s]), ";");
  }, '');
};
function removeInvalidKeys(obj) {
  var copyObj = DOMUtils_objectSpread({}, obj);
  Object.keys(copyObj).forEach(function (key) {
    if (!copyObj[key]) {
      delete copyObj[key];
    }
  });
  return copyObj;
}
var getStringSize = function getStringSize(text) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (text === undefined || text === null || Global.isSsr) {
    return {
      width: 0,
      height: 0
    };
  }
  var copyStyle = removeInvalidKeys(style);
  var cacheKey = JSON.stringify({
    text: text,
    copyStyle: copyStyle
  });
  if (stringCache.widthCache[cacheKey]) {
    return stringCache.widthCache[cacheKey];
  }
  try {
    var measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
    if (!measurementSpan) {
      measurementSpan = document.createElement('span');
      measurementSpan.setAttribute('id', MEASUREMENT_SPAN_ID);
      measurementSpan.setAttribute('aria-hidden', 'true');
      document.body.appendChild(measurementSpan);
    }
    // Need to use CSS Object Model (CSSOM) to be able to comply with Content Security Policy (CSP)
    // https://en.wikipedia.org/wiki/Content_Security_Policy
    var measurementSpanStyle = DOMUtils_objectSpread(DOMUtils_objectSpread({}, SPAN_STYLE), copyStyle);
    Object.assign(measurementSpan.style, measurementSpanStyle);
    measurementSpan.textContent = "".concat(text);
    var rect = measurementSpan.getBoundingClientRect();
    var result = {
      width: rect.width,
      height: rect.height
    };
    stringCache.widthCache[cacheKey] = result;
    if (++stringCache.cacheCount > MAX_CACHE_NUM) {
      stringCache.cacheCount = 0;
      stringCache.widthCache = {};
    }
    return result;
  } catch (e) {
    return {
      width: 0,
      height: 0
    };
  }
};
var getOffset = function getOffset(rect) {
  return {
    top: rect.top + window.scrollY - document.documentElement.clientTop,
    left: rect.left + window.scrollX - document.documentElement.clientLeft
  };
};
;// ./node_modules/recharts/es6/util/ReduceCSSCalc.js
function ReduceCSSCalc_typeof(o) { "@babel/helpers - typeof"; return ReduceCSSCalc_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ReduceCSSCalc_typeof(o); }
function ReduceCSSCalc_slicedToArray(arr, i) { return ReduceCSSCalc_arrayWithHoles(arr) || ReduceCSSCalc_iterableToArrayLimit(arr, i) || ReduceCSSCalc_unsupportedIterableToArray(arr, i) || ReduceCSSCalc_nonIterableRest(); }
function ReduceCSSCalc_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ReduceCSSCalc_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ReduceCSSCalc_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ReduceCSSCalc_arrayLikeToArray(o, minLen); }
function ReduceCSSCalc_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ReduceCSSCalc_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function ReduceCSSCalc_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ReduceCSSCalc_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ReduceCSSCalc_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ReduceCSSCalc_toPropertyKey(descriptor.key), descriptor); } }
function ReduceCSSCalc_createClass(Constructor, protoProps, staticProps) { if (protoProps) ReduceCSSCalc_defineProperties(Constructor.prototype, protoProps); if (staticProps) ReduceCSSCalc_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ReduceCSSCalc_toPropertyKey(t) { var i = ReduceCSSCalc_toPrimitive(t, "string"); return "symbol" == ReduceCSSCalc_typeof(i) ? i : i + ""; }
function ReduceCSSCalc_toPrimitive(t, r) { if ("object" != ReduceCSSCalc_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ReduceCSSCalc_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var MULTIPLY_OR_DIVIDE_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var ADD_OR_SUBTRACT_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var CSS_LENGTH_UNIT_REGEX = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/;
var NUM_SPLIT_REGEX = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/;
var CONVERSION_RATES = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  "in": 96,
  Q: 96 / (2.54 * 40),
  px: 1
};
var FIXED_CSS_LENGTH_UNITS = Object.keys(CONVERSION_RATES);
var STR_NAN = 'NaN';
function convertToPx(value, unit) {
  return value * CONVERSION_RATES[unit];
}
var DecimalCSS = /*#__PURE__*/function () {
  function DecimalCSS(num, unit) {
    ReduceCSSCalc_classCallCheck(this, DecimalCSS);
    this.num = num;
    this.unit = unit;
    this.num = num;
    this.unit = unit;
    if (Number.isNaN(num)) {
      this.unit = '';
    }
    if (unit !== '' && !CSS_LENGTH_UNIT_REGEX.test(unit)) {
      this.num = NaN;
      this.unit = '';
    }
    if (FIXED_CSS_LENGTH_UNITS.includes(unit)) {
      this.num = convertToPx(num, unit);
      this.unit = 'px';
    }
  }
  return ReduceCSSCalc_createClass(DecimalCSS, [{
    key: "add",
    value: function add(other) {
      if (this.unit !== other.unit) {
        return new DecimalCSS(NaN, '');
      }
      return new DecimalCSS(this.num + other.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function subtract(other) {
      if (this.unit !== other.unit) {
        return new DecimalCSS(NaN, '');
      }
      return new DecimalCSS(this.num - other.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function multiply(other) {
      if (this.unit !== '' && other.unit !== '' && this.unit !== other.unit) {
        return new DecimalCSS(NaN, '');
      }
      return new DecimalCSS(this.num * other.num, this.unit || other.unit);
    }
  }, {
    key: "divide",
    value: function divide(other) {
      if (this.unit !== '' && other.unit !== '' && this.unit !== other.unit) {
        return new DecimalCSS(NaN, '');
      }
      return new DecimalCSS(this.num / other.num, this.unit || other.unit);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function isNaN() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function parse(str) {
      var _NUM_SPLIT_REGEX$exec;
      var _ref = (_NUM_SPLIT_REGEX$exec = NUM_SPLIT_REGEX.exec(str)) !== null && _NUM_SPLIT_REGEX$exec !== void 0 ? _NUM_SPLIT_REGEX$exec : [],
        _ref2 = ReduceCSSCalc_slicedToArray(_ref, 3),
        numStr = _ref2[1],
        unit = _ref2[2];
      return new DecimalCSS(parseFloat(numStr), unit !== null && unit !== void 0 ? unit : '');
    }
  }]);
}();
function calculateArithmetic(expr) {
  if (expr.includes(STR_NAN)) {
    return STR_NAN;
  }
  var newExpr = expr;
  while (newExpr.includes('*') || newExpr.includes('/')) {
    var _MULTIPLY_OR_DIVIDE_R;
    var _ref3 = (_MULTIPLY_OR_DIVIDE_R = MULTIPLY_OR_DIVIDE_REGEX.exec(newExpr)) !== null && _MULTIPLY_OR_DIVIDE_R !== void 0 ? _MULTIPLY_OR_DIVIDE_R : [],
      _ref4 = ReduceCSSCalc_slicedToArray(_ref3, 4),
      leftOperand = _ref4[1],
      operator = _ref4[2],
      rightOperand = _ref4[3];
    var lTs = DecimalCSS.parse(leftOperand !== null && leftOperand !== void 0 ? leftOperand : '');
    var rTs = DecimalCSS.parse(rightOperand !== null && rightOperand !== void 0 ? rightOperand : '');
    var result = operator === '*' ? lTs.multiply(rTs) : lTs.divide(rTs);
    if (result.isNaN()) {
      return STR_NAN;
    }
    newExpr = newExpr.replace(MULTIPLY_OR_DIVIDE_REGEX, result.toString());
  }
  while (newExpr.includes('+') || /.-\d+(?:\.\d+)?/.test(newExpr)) {
    var _ADD_OR_SUBTRACT_REGE;
    var _ref5 = (_ADD_OR_SUBTRACT_REGE = ADD_OR_SUBTRACT_REGEX.exec(newExpr)) !== null && _ADD_OR_SUBTRACT_REGE !== void 0 ? _ADD_OR_SUBTRACT_REGE : [],
      _ref6 = ReduceCSSCalc_slicedToArray(_ref5, 4),
      _leftOperand = _ref6[1],
      _operator = _ref6[2],
      _rightOperand = _ref6[3];
    var _lTs = DecimalCSS.parse(_leftOperand !== null && _leftOperand !== void 0 ? _leftOperand : '');
    var _rTs = DecimalCSS.parse(_rightOperand !== null && _rightOperand !== void 0 ? _rightOperand : '');
    var _result = _operator === '+' ? _lTs.add(_rTs) : _lTs.subtract(_rTs);
    if (_result.isNaN()) {
      return STR_NAN;
    }
    newExpr = newExpr.replace(ADD_OR_SUBTRACT_REGEX, _result.toString());
  }
  return newExpr;
}
var PARENTHESES_REGEX = /\(([^()]*)\)/;
function calculateParentheses(expr) {
  var newExpr = expr;
  while (newExpr.includes('(')) {
    var _PARENTHESES_REGEX$ex = PARENTHESES_REGEX.exec(newExpr),
      _PARENTHESES_REGEX$ex2 = ReduceCSSCalc_slicedToArray(_PARENTHESES_REGEX$ex, 2),
      parentheticalExpression = _PARENTHESES_REGEX$ex2[1];
    newExpr = newExpr.replace(PARENTHESES_REGEX, calculateArithmetic(parentheticalExpression));
  }
  return newExpr;
}
function evaluateExpression(expression) {
  var newExpr = expression.replace(/\s+/g, '');
  newExpr = calculateParentheses(newExpr);
  newExpr = calculateArithmetic(newExpr);
  return newExpr;
}
function safeEvaluateExpression(expression) {
  try {
    return evaluateExpression(expression);
  } catch (e) {
    /* istanbul ignore next */
    return STR_NAN;
  }
}
function reduceCSSCalc(expression) {
  var result = safeEvaluateExpression(expression.slice(5, -1));
  if (result === STR_NAN) {
    // notify the user
    return '';
  }
  return result;
}
;// ./node_modules/recharts/es6/component/Text.js
var Text_excluded = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
  Text_excluded2 = ["dx", "dy", "angle", "className", "breakAll"];
function Text_extends() { Text_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Text_extends.apply(this, arguments); }
function Text_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Text_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Text_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function Text_slicedToArray(arr, i) { return Text_arrayWithHoles(arr) || Text_iterableToArrayLimit(arr, i) || Text_unsupportedIterableToArray(arr, i) || Text_nonIterableRest(); }
function Text_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Text_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Text_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Text_arrayLikeToArray(o, minLen); }
function Text_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Text_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function Text_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
;







var BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;
var calculateWordWidths = function calculateWordWidths(_ref) {
  var children = _ref.children,
    breakAll = _ref.breakAll,
    style = _ref.style;
  try {
    var words = [];
    if (!isNil_default()(children)) {
      if (breakAll) {
        words = children.toString().split('');
      } else {
        words = children.toString().split(BREAKING_SPACES);
      }
    }
    var wordsWithComputedWidth = words.map(function (word) {
      return {
        word: word,
        width: getStringSize(word, style).width
      };
    });
    var spaceWidth = breakAll ? 0 : getStringSize("\xA0", style).width;
    return {
      wordsWithComputedWidth: wordsWithComputedWidth,
      spaceWidth: spaceWidth
    };
  } catch (e) {
    return null;
  }
};
var calculateWordsByLines = function calculateWordsByLines(_ref2, initialWordsWithComputedWith, spaceWidth, lineWidth, scaleToFit) {
  var maxLines = _ref2.maxLines,
    children = _ref2.children,
    style = _ref2.style,
    breakAll = _ref2.breakAll;
  var shouldLimitLines = isNumber(maxLines);
  var text = children;
  var calculate = function calculate() {
    var words = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return words.reduce(function (result, _ref3) {
      var word = _ref3.word,
        width = _ref3.width;
      var currentLine = result[result.length - 1];
      if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < Number(lineWidth))) {
        // Word can be added to an existing line
        currentLine.words.push(word);
        currentLine.width += width + spaceWidth;
      } else {
        // Add first word to line or word is too long to scaleToFit on existing line
        var newLine = {
          words: [word],
          width: width
        };
        result.push(newLine);
      }
      return result;
    }, []);
  };
  var originalResult = calculate(initialWordsWithComputedWith);
  var findLongestLine = function findLongestLine(words) {
    return words.reduce(function (a, b) {
      return a.width > b.width ? a : b;
    });
  };
  if (!shouldLimitLines) {
    return originalResult;
  }
  var suffix = '…';
  var checkOverflow = function checkOverflow(index) {
    var tempText = text.slice(0, index);
    var words = calculateWordWidths({
      breakAll: breakAll,
      style: style,
      children: tempText + suffix
    }).wordsWithComputedWidth;
    var result = calculate(words);
    var doesOverflow = result.length > maxLines || findLongestLine(result).width > Number(lineWidth);
    return [doesOverflow, result];
  };
  var start = 0;
  var end = text.length - 1;
  var iterations = 0;
  var trimmedResult;
  while (start <= end && iterations <= text.length - 1) {
    var middle = Math.floor((start + end) / 2);
    var prev = middle - 1;
    var _checkOverflow = checkOverflow(prev),
      _checkOverflow2 = Text_slicedToArray(_checkOverflow, 2),
      doesPrevOverflow = _checkOverflow2[0],
      result = _checkOverflow2[1];
    var _checkOverflow3 = checkOverflow(middle),
      _checkOverflow4 = Text_slicedToArray(_checkOverflow3, 1),
      doesMiddleOverflow = _checkOverflow4[0];
    if (!doesPrevOverflow && !doesMiddleOverflow) {
      start = middle + 1;
    }
    if (doesPrevOverflow && doesMiddleOverflow) {
      end = middle - 1;
    }
    if (!doesPrevOverflow && doesMiddleOverflow) {
      trimmedResult = result;
      break;
    }
    iterations++;
  }

  // Fallback to originalResult (result without trimming) if we cannot find the
  // where to trim.  This should not happen :tm:
  return trimmedResult || originalResult;
};
var getWordsWithoutCalculate = function getWordsWithoutCalculate(children) {
  var words = !isNil_default()(children) ? children.toString().split(BREAKING_SPACES) : [];
  return [{
    words: words
  }];
};
var getWordsByLines = function getWordsByLines(_ref4) {
  var width = _ref4.width,
    scaleToFit = _ref4.scaleToFit,
    children = _ref4.children,
    style = _ref4.style,
    breakAll = _ref4.breakAll,
    maxLines = _ref4.maxLines;
  // Only perform calculations if using features that require them (multiline, scaleToFit)
  if ((width || scaleToFit) && !Global.isSsr) {
    var wordsWithComputedWidth, spaceWidth;
    var wordWidths = calculateWordWidths({
      breakAll: breakAll,
      children: children,
      style: style
    });
    if (wordWidths) {
      var wcw = wordWidths.wordsWithComputedWidth,
        sw = wordWidths.spaceWidth;
      wordsWithComputedWidth = wcw;
      spaceWidth = sw;
    } else {
      return getWordsWithoutCalculate(children);
    }
    return calculateWordsByLines({
      breakAll: breakAll,
      children: children,
      maxLines: maxLines,
      style: style
    }, wordsWithComputedWidth, spaceWidth, width, scaleToFit);
  }
  return getWordsWithoutCalculate(children);
};
var DEFAULT_FILL = '#808080';
var Text = function Text(_ref5) {
  var _ref5$x = _ref5.x,
    propsX = _ref5$x === void 0 ? 0 : _ref5$x,
    _ref5$y = _ref5.y,
    propsY = _ref5$y === void 0 ? 0 : _ref5$y,
    _ref5$lineHeight = _ref5.lineHeight,
    lineHeight = _ref5$lineHeight === void 0 ? '1em' : _ref5$lineHeight,
    _ref5$capHeight = _ref5.capHeight,
    capHeight = _ref5$capHeight === void 0 ? '0.71em' : _ref5$capHeight,
    _ref5$scaleToFit = _ref5.scaleToFit,
    scaleToFit = _ref5$scaleToFit === void 0 ? false : _ref5$scaleToFit,
    _ref5$textAnchor = _ref5.textAnchor,
    textAnchor = _ref5$textAnchor === void 0 ? 'start' : _ref5$textAnchor,
    _ref5$verticalAnchor = _ref5.verticalAnchor,
    verticalAnchor = _ref5$verticalAnchor === void 0 ? 'end' : _ref5$verticalAnchor,
    _ref5$fill = _ref5.fill,
    fill = _ref5$fill === void 0 ? DEFAULT_FILL : _ref5$fill,
    props = Text_objectWithoutProperties(_ref5, Text_excluded);
  var wordsByLines = (0,react.useMemo)(function () {
    return getWordsByLines({
      breakAll: props.breakAll,
      children: props.children,
      maxLines: props.maxLines,
      scaleToFit: scaleToFit,
      style: props.style,
      width: props.width
    });
  }, [props.breakAll, props.children, props.maxLines, scaleToFit, props.style, props.width]);
  var dx = props.dx,
    dy = props.dy,
    angle = props.angle,
    className = props.className,
    breakAll = props.breakAll,
    textProps = Text_objectWithoutProperties(props, Text_excluded2);
  if (!isNumOrStr(propsX) || !isNumOrStr(propsY)) {
    return null;
  }
  var x = propsX + (isNumber(dx) ? dx : 0);
  var y = propsY + (isNumber(dy) ? dy : 0);
  var startDy;
  switch (verticalAnchor) {
    case 'start':
      startDy = reduceCSSCalc("calc(".concat(capHeight, ")"));
      break;
    case 'middle':
      startDy = reduceCSSCalc("calc(".concat((wordsByLines.length - 1) / 2, " * -").concat(lineHeight, " + (").concat(capHeight, " / 2))"));
      break;
    default:
      startDy = reduceCSSCalc("calc(".concat(wordsByLines.length - 1, " * -").concat(lineHeight, ")"));
      break;
  }
  var transforms = [];
  if (scaleToFit) {
    var lineWidth = wordsByLines[0].width;
    var width = props.width;
    transforms.push("scale(".concat((isNumber(width) ? width / lineWidth : 1) / lineWidth, ")"));
  }
  if (angle) {
    transforms.push("rotate(".concat(angle, ", ").concat(x, ", ").concat(y, ")"));
  }
  if (transforms.length) {
    textProps.transform = transforms.join(' ');
  }
  return /*#__PURE__*/react.createElement("text", Text_extends({}, filterProps(textProps, true), {
    x: x,
    y: y,
    className: (0,clsx/* default */.A)('recharts-text', className),
    textAnchor: textAnchor,
    fill: fill.includes('url') ? DEFAULT_FILL : fill
  }), wordsByLines.map(function (line, index) {
    var words = line.words.join(breakAll ? '' : ' ');
    return (
      /*#__PURE__*/
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      react.createElement("tspan", {
        x: x,
        dy: index === 0 ? startDy : lineHeight,
        key: "".concat(words, "-").concat(index)
      }, words)
    );
  }));
};
// EXTERNAL MODULE: ./node_modules/d3-scale/src/linear.js
var linear = __webpack_require__(76502);
// EXTERNAL MODULE: ./node_modules/d3-scale/src/number.js
var number = __webpack_require__(70414);
;// ./node_modules/d3-scale/src/identity.js



function identity_identity(domain) {
  var unknown;

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = Array.from(_, number/* default */.A), scale) : domain.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return identity_identity(domain).unknown(unknown);
  };

  domain = arguments.length ? Array.from(domain, number/* default */.A) : [0, 1];

  return (0,linear/* linearish */.C)(scale);
}

// EXTERNAL MODULE: ./node_modules/d3-scale/src/log.js
var src_log = __webpack_require__(21721);
// EXTERNAL MODULE: ./node_modules/d3-scale/src/symlog.js
var symlog = __webpack_require__(7304);
// EXTERNAL MODULE: ./node_modules/d3-scale/src/ordinal.js + 1 modules
var ordinal = __webpack_require__(34598);
// EXTERNAL MODULE: ./node_modules/d3-scale/src/pow.js
var pow = __webpack_require__(43837);
// EXTERNAL MODULE: ./node_modules/d3-scale/src/continuous.js + 1 modules
var continuous = __webpack_require__(25664);
// EXTERNAL MODULE: ./node_modules/d3-scale/src/init.js
var init = __webpack_require__(99065);
;// ./node_modules/d3-scale/src/radial.js





function radial_square(x) {
  return Math.sign(x) * x * x;
}

function unsquare(x) {
  return Math.sign(x) * Math.sqrt(Math.abs(x));
}

function radial() {
  var squared = (0,continuous/* default */.Ay)(),
      range = [0, 1],
      round = false,
      unknown;

  function scale(x) {
    var y = unsquare(squared(x));
    return isNaN(y) ? unknown : round ? Math.round(y) : y;
  }

  scale.invert = function(y) {
    return squared.invert(radial_square(y));
  };

  scale.domain = function(_) {
    return arguments.length ? (squared.domain(_), scale) : squared.domain();
  };

  scale.range = function(_) {
    return arguments.length ? (squared.range((range = Array.from(_, number/* default */.A)).map(radial_square)), scale) : range.slice();
  };

  scale.rangeRound = function(_) {
    return scale.range(_).round(true);
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, scale) : round;
  };

  scale.clamp = function(_) {
    return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return radial(squared.domain(), range)
        .round(round)
        .clamp(squared.clamp())
        .unknown(unknown);
  };

  init/* initRange */.C.apply(scale, arguments);

  return (0,linear/* linearish */.C)(scale);
}

;// ./node_modules/d3-array/src/max.js
function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}

;// ./node_modules/d3-array/src/min.js
function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}

// EXTERNAL MODULE: ./node_modules/d3-array/src/ascending.js
var ascending = __webpack_require__(12902);
;// ./node_modules/d3-array/src/sort.js
/* unused harmony import specifier */ var permute;



function sort(values, ...F) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  values = Array.from(values);
  let [f] = F;
  if ((f && f.length !== 2) || F.length > 1) {
    const index = Uint32Array.from(values, (d, i) => i);
    if (F.length > 1) {
      F = F.map(f => values.map(f));
      index.sort((i, j) => {
        for (const f of F) {
          const c = ascendingDefined(f[i], f[j]);
          if (c) return c;
        }
      });
    } else {
      f = values.map(f);
      index.sort((i, j) => ascendingDefined(f[i], f[j]));
    }
    return permute(values, index);
  }
  return values.sort(compareDefined(f));
}

function compareDefined(compare = ascending/* default */.A) {
  if (compare === ascending/* default */.A) return ascendingDefined;
  if (typeof compare !== "function") throw new TypeError("compare is not a function");
  return (a, b) => {
    const x = compare(a, b);
    if (x || x === 0) return x;
    return (compare(b, b) === 0) - (compare(a, a) === 0);
  };
}

function ascendingDefined(a, b) {
  return (a == null || !(a >= a)) - (b == null || !(b >= b)) || (a < b ? -1 : a > b ? 1 : 0);
}

;// ./node_modules/d3-array/src/quickselect.js


// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function quickselect(array, k, left = 0, right = Infinity, compare) {
  k = Math.floor(k);
  left = Math.floor(Math.max(0, left));
  right = Math.floor(Math.min(array.length - 1, right));

  if (!(left <= k && k <= right)) return array;

  compare = compare === undefined ? ascendingDefined : compareDefined(compare);

  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array, k, newLeft, newRight, compare);
    }

    const t = array[k];
    let i = left;
    let j = right;

    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);

    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0) ++i;
      while (compare(array[j], t) > 0) --j;
    }

    if (compare(array[left], t) === 0) swap(array, left, j);
    else ++j, swap(array, j, right);

    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }

  return array;
}

function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}

// EXTERNAL MODULE: ./node_modules/d3-array/src/number.js
var src_number = __webpack_require__(83131);
;// ./node_modules/d3-array/src/quantile.js
/* unused harmony import specifier */ var maxIndex;
/* unused harmony import specifier */ var minIndex;
/* unused harmony import specifier */ var quantile_quickselect;
/* unused harmony import specifier */ var quantile_number;
/* unused harmony import specifier */ var quantile_ascendingDefined;
/* unused harmony import specifier */ var greatest;









function quantile(values, p, valueof) {
  values = Float64Array.from((0,src_number/* numbers */.n)(values, valueof));
  if (!(n = values.length) || isNaN(p = +p)) return;
  if (p <= 0 || n < 2) return min(values);
  if (p >= 1) return max(values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = max(quickselect(values, i0).subarray(0, i0 + 1)),
      value1 = min(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}

function quantileSorted(values, p, valueof = src_number/* default */.A) {
  if (!(n = values.length) || isNaN(p = +p)) return;
  if (p <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}

function quantileIndex(values, p, valueof = quantile_number) {
  if (isNaN(p = +p)) return;
  numbers = Float64Array.from(values, (_, i) => quantile_number(valueof(values[i], i, values)));
  if (p <= 0) return minIndex(numbers);
  if (p >= 1) return maxIndex(numbers);
  var numbers,
      index = Uint32Array.from(values, (_, i) => i),
      j = numbers.length - 1,
      i = Math.floor(j * p);
  quantile_quickselect(index, i, 0, j, (i, j) => quantile_ascendingDefined(numbers[i], numbers[j]));
  i = greatest(index.subarray(0, i + 1), (i) => numbers[i]);
  return i >= 0 ? i : -1;
}

// EXTERNAL MODULE: ./node_modules/d3-array/src/bisect.js
var bisect = __webpack_require__(52016);
;// ./node_modules/d3-scale/src/quantile.js



function quantile_quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = quantileSorted(domain, i / n);
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : range[(0,bisect/* default */.Ay)(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending/* default */.A);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile_quantile()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return init/* initRange */.C.apply(scale, arguments);
}

;// ./node_modules/d3-scale/src/quantize.js




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x != null && x <= x ? range[(0,bisect/* default */.Ay)(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function() {
    return domain.slice();
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range)
        .unknown(unknown);
  };

  return init/* initRange */.C.apply((0,linear/* linearish */.C)(scale), arguments);
}

// EXTERNAL MODULE: ./node_modules/d3-scale/src/threshold.js
var threshold = __webpack_require__(51004);
// EXTERNAL MODULE: ./node_modules/d3-scale/src/time.js
var time = __webpack_require__(97910);
// EXTERNAL MODULE: ./node_modules/d3-scale/src/utcTime.js
var utcTime = __webpack_require__(1232);
// EXTERNAL MODULE: ./node_modules/d3-scale/src/sequential.js
var sequential = __webpack_require__(18980);
;// ./node_modules/d3-scale/src/sequentialQuantile.js




function sequentialQuantile() {
  var domain = [],
      interpolator = continuous/* identity */.D_;

  function scale(x) {
    if (x != null && !isNaN(x = +x)) return interpolator(((0,bisect/* default */.Ay)(domain, x, 1) - 1) / (domain.length - 1));
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending/* default */.A);
    return scale;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.range = function() {
    return domain.map((d, i) => interpolator(i / (domain.length - 1)));
  };

  scale.quantiles = function(n) {
    return Array.from({length: n + 1}, (_, i) => quantile(domain, i / n));
  };

  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return init/* initInterpolator */.K.apply(scale, arguments);
}

// EXTERNAL MODULE: ./node_modules/d3-interpolate/src/value.js + 8 modules
var value = __webpack_require__(204);
;// ./node_modules/d3-interpolate/src/piecewise.js


function piecewise(interpolate, values) {
  if (values === undefined) values = interpolate, interpolate = value/* default */.A;
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}

// EXTERNAL MODULE: ./node_modules/d3-interpolate/src/round.js
var round = __webpack_require__(49770);
;// ./node_modules/d3-scale/src/diverging.js









function transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      s = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = continuous/* identity */.D_,
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function(_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = piecewise(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }

  scale.range = range(value/* default */.A);

  scale.rangeRound = range(round/* default */.A);

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;
    return scale;
  };
}

function diverging() {
  var scale = (0,linear/* linearish */.C)(transformer()(continuous/* identity */.D_));

  scale.copy = function() {
    return (0,sequential/* copy */.C)(scale, diverging());
  };

  return init/* initInterpolator */.K.apply(scale, arguments);
}

function divergingLog() {
  var scale = (0,src_log/* loggish */.g)(transformer()).domain([0.1, 1, 10]);

  scale.copy = function() {
    return (0,sequential/* copy */.C)(scale, divergingLog()).base(scale.base());
  };

  return init/* initInterpolator */.K.apply(scale, arguments);
}

function divergingSymlog() {
  var scale = (0,symlog/* symlogish */.s)(transformer());

  scale.copy = function() {
    return (0,sequential/* copy */.C)(scale, divergingSymlog()).constant(scale.constant());
  };

  return init/* initInterpolator */.K.apply(scale, arguments);
}

function divergingPow() {
  var scale = (0,pow/* powish */.DS)(transformer());

  scale.copy = function() {
    return (0,sequential/* copy */.C)(scale, divergingPow()).exponent(scale.exponent());
  };

  return init/* initInterpolator */.K.apply(scale, arguments);
}

function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}

// EXTERNAL MODULE: ./node_modules/d3-scale/src/tickFormat.js + 3 modules
var tickFormat = __webpack_require__(41275);
;// ./node_modules/d3-scale/src/index.js


































;// ./node_modules/victory-vendor/es/d3-scale.js

// `victory-vendor/d3-scale` (ESM)
// See upstream license: https://github.com/d3/d3-scale/blob/main/LICENSE
//
// Our ESM package uses the underlying installed dependencies of `node_modules/d3-scale`


// EXTERNAL MODULE: ./node_modules/d3-shape/src/offset/expand.js
var expand = __webpack_require__(96488);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/offset/none.js
var none = __webpack_require__(93414);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/offset/silhouette.js
var silhouette = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/offset/wiggle.js
var wiggle = __webpack_require__(93629);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/stack.js
var src_stack = __webpack_require__(8872);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/order/none.js
var order_none = __webpack_require__(34873);
// EXTERNAL MODULE: ./node_modules/lodash/max.js
var lodash_max = __webpack_require__(94506);
var max_default = /*#__PURE__*/__webpack_require__.n(lodash_max);
// EXTERNAL MODULE: ./node_modules/lodash/min.js
var lodash_min = __webpack_require__(31684);
var min_default = /*#__PURE__*/__webpack_require__.n(lodash_min);
// EXTERNAL MODULE: ./node_modules/lodash/flatMap.js
var flatMap = __webpack_require__(47307);
var flatMap_default = /*#__PURE__*/__webpack_require__.n(flatMap);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(2404);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/decimal.js-light/decimal.js
var decimal = __webpack_require__(38351);
var decimal_default = /*#__PURE__*/__webpack_require__.n(decimal);
;// ./node_modules/recharts-scale/es6/util/utils.js
function utils_toConsumableArray(arr) { return utils_arrayWithoutHoles(arr) || utils_iterableToArray(arr) || utils_unsupportedIterableToArray(arr) || utils_nonIterableSpread(); }

function utils_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function utils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return utils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return utils_arrayLikeToArray(o, minLen); }

function utils_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function utils_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return utils_arrayLikeToArray(arr); }

function utils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var utils_identity = function identity(i) {
  return i;
};

var PLACE_HOLDER = {
  '@@functional/placeholder': true
};

var isPlaceHolder = function isPlaceHolder(val) {
  return val === PLACE_HOLDER;
};

var curry0 = function curry0(fn) {
  return function _curried() {
    if (arguments.length === 0 || arguments.length === 1 && isPlaceHolder(arguments.length <= 0 ? undefined : arguments[0])) {
      return _curried;
    }

    return fn.apply(void 0, arguments);
  };
};

var curryN = function curryN(n, fn) {
  if (n === 1) {
    return fn;
  }

  return curry0(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsLength = args.filter(function (arg) {
      return arg !== PLACE_HOLDER;
    }).length;

    if (argsLength >= n) {
      return fn.apply(void 0, args);
    }

    return curryN(n - argsLength, curry0(function () {
      for (var _len2 = arguments.length, restArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        restArgs[_key2] = arguments[_key2];
      }

      var newArgs = args.map(function (arg) {
        return isPlaceHolder(arg) ? restArgs.shift() : arg;
      });
      return fn.apply(void 0, utils_toConsumableArray(newArgs).concat(restArgs));
    }));
  });
};

var curry = function curry(fn) {
  return curryN(fn.length, fn);
};
var utils_range = function range(begin, end) {
  var arr = [];

  for (var i = begin; i < end; ++i) {
    arr[i - begin] = i;
  }

  return arr;
};
var map = curry(function (fn, arr) {
  if (Array.isArray(arr)) {
    return arr.map(fn);
  }

  return Object.keys(arr).map(function (key) {
    return arr[key];
  }).map(fn);
});
var compose = function compose() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (!args.length) {
    return utils_identity;
  }

  var fns = args.reverse(); // first function can receive multiply arguments

  var firstFn = fns[0];
  var tailsFn = fns.slice(1);
  return function () {
    return tailsFn.reduce(function (res, fn) {
      return fn(res);
    }, firstFn.apply(void 0, arguments));
  };
};
var reverse = function reverse(arr) {
  if (Array.isArray(arr)) {
    return arr.reverse();
  } // can be string


  return arr.split('').reverse.join('');
};
var memoize = function memoize(fn) {
  var lastArgs = null;
  var lastResult = null;
  return function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    if (lastArgs && args.every(function (val, i) {
      return val === lastArgs[i];
    })) {
      return lastResult;
    }

    lastArgs = args;
    lastResult = fn.apply(void 0, args);
    return lastResult;
  };
};
;// ./node_modules/recharts-scale/es6/util/arithmetic.js
/**
 * @fileOverview 一些公用的运算方法
 * @author xile611
 * @date 2015-09-17
 */


/**
 * 获取数值的位数
 * 其中绝对值属于区间[0.1, 1)， 得到的值为0
 * 绝对值属于区间[0.01, 0.1)，得到的位数为 -1
 * 绝对值属于区间[0.001, 0.01)，得到的位数为 -2
 *
 * @param  {Number} value 数值
 * @return {Integer} 位数
 */

function getDigitCount(value) {
  var result;

  if (value === 0) {
    result = 1;
  } else {
    result = Math.floor(new (decimal_default())(value).abs().log(10).toNumber()) + 1;
  }

  return result;
}
/**
 * 按照固定的步长获取[start, end)这个区间的数据
 * 并且需要处理js计算精度的问题
 *
 * @param  {Decimal} start 起点
 * @param  {Decimal} end   终点，不包含该值
 * @param  {Decimal} step  步长
 * @return {Array}         若干数值
 */


function rangeStep(start, end, step) {
  var num = new (decimal_default())(start);
  var i = 0;
  var result = []; // magic number to prevent infinite loop

  while (num.lt(end) && i < 100000) {
    result.push(num.toNumber());
    num = num.add(step);
    i++;
  }

  return result;
}
/**
 * 对数值进行线性插值
 *
 * @param  {Number} a  定义域的极点
 * @param  {Number} b  定义域的极点
 * @param  {Number} t  [0, 1]内的某个值
 * @return {Number}    定义域内的某个值
 */


var arithmetic_interpolateNumber = curry(function (a, b, t) {
  var newA = +a;
  var newB = +b;
  return newA + t * (newB - newA);
});
/**
 * 线性插值的逆运算
 *
 * @param  {Number} a 定义域的极点
 * @param  {Number} b 定义域的极点
 * @param  {Number} x 可以认为是插值后的一个输出值
 * @return {Number}   当x在 a ~ b这个范围内时，返回值属于[0, 1]
 */

var uninterpolateNumber = curry(function (a, b, x) {
  var diff = b - +a;
  diff = diff || Infinity;
  return (x - a) / diff;
});
/**
 * 线性插值的逆运算，并且有截断的操作
 *
 * @param  {Number} a 定义域的极点
 * @param  {Number} b 定义域的极点
 * @param  {Number} x 可以认为是插值后的一个输出值
 * @return {Number}   当x在 a ~ b这个区间内时，返回值属于[0, 1]，
 * 当x不在 a ~ b这个区间时，会截断到 a ~ b 这个区间
 */

var uninterpolateTruncation = curry(function (a, b, x) {
  var diff = b - +a;
  diff = diff || Infinity;
  return Math.max(0, Math.min(1, (x - a) / diff));
});
/* harmony default export */ const arithmetic = ({
  rangeStep: rangeStep,
  getDigitCount: getDigitCount,
  interpolateNumber: arithmetic_interpolateNumber,
  uninterpolateNumber: uninterpolateNumber,
  uninterpolateTruncation: uninterpolateTruncation
});
;// ./node_modules/recharts-scale/es6/getNiceTickValues.js
function getNiceTickValues_toConsumableArray(arr) { return getNiceTickValues_arrayWithoutHoles(arr) || getNiceTickValues_iterableToArray(arr) || getNiceTickValues_unsupportedIterableToArray(arr) || getNiceTickValues_nonIterableSpread(); }

function getNiceTickValues_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function getNiceTickValues_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function getNiceTickValues_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return getNiceTickValues_arrayLikeToArray(arr); }

function getNiceTickValues_slicedToArray(arr, i) { return getNiceTickValues_arrayWithHoles(arr) || getNiceTickValues_iterableToArrayLimit(arr, i) || getNiceTickValues_unsupportedIterableToArray(arr, i) || getNiceTickValues_nonIterableRest(); }

function getNiceTickValues_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function getNiceTickValues_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return getNiceTickValues_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return getNiceTickValues_arrayLikeToArray(o, minLen); }

function getNiceTickValues_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function getNiceTickValues_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function getNiceTickValues_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @fileOverview calculate tick values of scale
 * @author xile611, arcthur
 * @date 2015-09-17
 */
;


/**
 * Calculate a interval of a minimum value and a maximum value
 *
 * @param  {Number} min       The minimum value
 * @param  {Number} max       The maximum value
 * @return {Array} An interval
 */

function getValidInterval(_ref) {
  var _ref2 = getNiceTickValues_slicedToArray(_ref, 2),
      min = _ref2[0],
      max = _ref2[1];

  var validMin = min,
      validMax = max; // exchange

  if (min > max) {
    validMin = max;
    validMax = min;
  }

  return [validMin, validMax];
}
/**
 * Calculate the step which is easy to understand between ticks, like 10, 20, 25
 *
 * @param  {Decimal} roughStep        The rough step calculated by deviding the
 * difference by the tickCount
 * @param  {Boolean} allowDecimals    Allow the ticks to be decimals or not
 * @param  {Integer} correctionFactor A correction factor
 * @return {Decimal} The step which is easy to understand between two ticks
 */


function getFormatStep(roughStep, allowDecimals, correctionFactor) {
  if (roughStep.lte(0)) {
    return new (decimal_default())(0);
  }

  var digitCount = arithmetic.getDigitCount(roughStep.toNumber()); // The ratio between the rough step and the smallest number which has a bigger
  // order of magnitudes than the rough step

  var digitCountValue = new (decimal_default())(10).pow(digitCount);
  var stepRatio = roughStep.div(digitCountValue); // When an integer and a float multiplied, the accuracy of result may be wrong

  var stepRatioScale = digitCount !== 1 ? 0.05 : 0.1;
  var amendStepRatio = new (decimal_default())(Math.ceil(stepRatio.div(stepRatioScale).toNumber())).add(correctionFactor).mul(stepRatioScale);
  var formatStep = amendStepRatio.mul(digitCountValue);
  return allowDecimals ? formatStep : new (decimal_default())(Math.ceil(formatStep));
}
/**
 * calculate the ticks when the minimum value equals to the maximum value
 *
 * @param  {Number}  value         The minimum valuue which is also the maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}                 ticks
 */


function getTickOfSingleValue(value, tickCount, allowDecimals) {
  var step = 1; // calculate the middle value of ticks

  var middle = new (decimal_default())(value);

  if (!middle.isint() && allowDecimals) {
    var absVal = Math.abs(value);

    if (absVal < 1) {
      // The step should be a float number when the difference is smaller than 1
      step = new (decimal_default())(10).pow(arithmetic.getDigitCount(value) - 1);
      middle = new (decimal_default())(Math.floor(middle.div(step).toNumber())).mul(step);
    } else if (absVal > 1) {
      // Return the maximum integer which is smaller than 'value' when 'value' is greater than 1
      middle = new (decimal_default())(Math.floor(value));
    }
  } else if (value === 0) {
    middle = new (decimal_default())(Math.floor((tickCount - 1) / 2));
  } else if (!allowDecimals) {
    middle = new (decimal_default())(Math.floor(value));
  }

  var middleIndex = Math.floor((tickCount - 1) / 2);
  var fn = compose(map(function (n) {
    return middle.add(new (decimal_default())(n - middleIndex).mul(step)).toNumber();
  }), utils_range);
  return fn(0, tickCount);
}
/**
 * Calculate the step
 *
 * @param  {Number}  min              The minimum value of an interval
 * @param  {Number}  max              The maximum value of an interval
 * @param  {Integer} tickCount        The count of ticks
 * @param  {Boolean} allowDecimals    Allow the ticks to be decimals or not
 * @param  {Number}  correctionFactor A correction factor
 * @return {Object}  The step, minimum value of ticks, maximum value of ticks
 */


function calculateStep(min, max, tickCount, allowDecimals) {
  var correctionFactor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  // dirty hack (for recharts' test)
  if (!Number.isFinite((max - min) / (tickCount - 1))) {
    return {
      step: new (decimal_default())(0),
      tickMin: new (decimal_default())(0),
      tickMax: new (decimal_default())(0)
    };
  } // The step which is easy to understand between two ticks


  var step = getFormatStep(new (decimal_default())(max).sub(min).div(tickCount - 1), allowDecimals, correctionFactor); // A medial value of ticks

  var middle; // When 0 is inside the interval, 0 should be a tick

  if (min <= 0 && max >= 0) {
    middle = new (decimal_default())(0);
  } else {
    // calculate the middle value
    middle = new (decimal_default())(min).add(max).div(2); // minus modulo value

    middle = middle.sub(new (decimal_default())(middle).mod(step));
  }

  var belowCount = Math.ceil(middle.sub(min).div(step).toNumber());
  var upCount = Math.ceil(new (decimal_default())(max).sub(middle).div(step).toNumber());
  var scaleCount = belowCount + upCount + 1;

  if (scaleCount > tickCount) {
    // When more ticks need to cover the interval, step should be bigger.
    return calculateStep(min, max, tickCount, allowDecimals, correctionFactor + 1);
  }

  if (scaleCount < tickCount) {
    // When less ticks can cover the interval, we should add some additional ticks
    upCount = max > 0 ? upCount + (tickCount - scaleCount) : upCount;
    belowCount = max > 0 ? belowCount : belowCount + (tickCount - scaleCount);
  }

  return {
    step: step,
    tickMin: middle.sub(new (decimal_default())(belowCount).mul(step)),
    tickMax: middle.add(new (decimal_default())(upCount).mul(step))
  };
}
/**
 * Calculate the ticks of an interval, the count of ticks will be guraranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */


function getNiceTickValuesFn(_ref3) {
  var _ref4 = getNiceTickValues_slicedToArray(_ref3, 2),
      min = _ref4[0],
      max = _ref4[1];

  var tickCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  var allowDecimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  // More than two ticks should be return
  var count = Math.max(tickCount, 2);

  var _getValidInterval = getValidInterval([min, max]),
      _getValidInterval2 = getNiceTickValues_slicedToArray(_getValidInterval, 2),
      cormin = _getValidInterval2[0],
      cormax = _getValidInterval2[1];

  if (cormin === -Infinity || cormax === Infinity) {
    var _values = cormax === Infinity ? [cormin].concat(getNiceTickValues_toConsumableArray(utils_range(0, tickCount - 1).map(function () {
      return Infinity;
    }))) : [].concat(getNiceTickValues_toConsumableArray(utils_range(0, tickCount - 1).map(function () {
      return -Infinity;
    })), [cormax]);

    return min > max ? reverse(_values) : _values;
  }

  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount, allowDecimals);
  } // Get the step between two ticks


  var _calculateStep = calculateStep(cormin, cormax, count, allowDecimals),
      step = _calculateStep.step,
      tickMin = _calculateStep.tickMin,
      tickMax = _calculateStep.tickMax;

  var values = arithmetic.rangeStep(tickMin, tickMax.add(new (decimal_default())(0.1).mul(step)), step);
  return min > max ? reverse(values) : values;
}
/**
 * Calculate the ticks of an interval, the count of ticks won't be guraranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */


function getTickValuesFn(_ref5) {
  var _ref6 = getNiceTickValues_slicedToArray(_ref5, 2),
      min = _ref6[0],
      max = _ref6[1];

  var tickCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  var allowDecimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  // More than two ticks should be return
  var count = Math.max(tickCount, 2);

  var _getValidInterval3 = getValidInterval([min, max]),
      _getValidInterval4 = getNiceTickValues_slicedToArray(_getValidInterval3, 2),
      cormin = _getValidInterval4[0],
      cormax = _getValidInterval4[1];

  if (cormin === -Infinity || cormax === Infinity) {
    return [min, max];
  }

  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount, allowDecimals);
  }

  var step = getFormatStep(new (decimal_default())(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
  var fn = compose(map(function (n) {
    return new (decimal_default())(cormin).add(new (decimal_default())(n).mul(step)).toNumber();
  }), utils_range);
  var values = fn(0, count).filter(function (entry) {
    return entry >= cormin && entry <= cormax;
  });
  return min > max ? reverse(values) : values;
}
/**
 * Calculate the ticks of an interval, the count of ticks won't be guraranteed,
 * but the domain will be guaranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */


function getTickValuesFixedDomainFn(_ref7, tickCount) {
  var _ref8 = getNiceTickValues_slicedToArray(_ref7, 2),
      min = _ref8[0],
      max = _ref8[1];

  var allowDecimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // More than two ticks should be return
  var _getValidInterval5 = getValidInterval([min, max]),
      _getValidInterval6 = getNiceTickValues_slicedToArray(_getValidInterval5, 2),
      cormin = _getValidInterval6[0],
      cormax = _getValidInterval6[1];

  if (cormin === -Infinity || cormax === Infinity) {
    return [min, max];
  }

  if (cormin === cormax) {
    return [cormin];
  }

  var count = Math.max(tickCount, 2);
  var step = getFormatStep(new (decimal_default())(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
  var values = [].concat(getNiceTickValues_toConsumableArray(arithmetic.rangeStep(new (decimal_default())(cormin), new (decimal_default())(cormax).sub(new (decimal_default())(0.99).mul(step)), step)), [cormax]);
  return min > max ? reverse(values) : values;
}

var getNiceTickValues = memoize(getNiceTickValuesFn);
var getTickValues = memoize(getTickValuesFn);
var getTickValuesFixedDomain = memoize(getTickValuesFixedDomainFn);
;// ./node_modules/recharts-scale/es6/index.js

;// ./node_modules/recharts/es6/cartesian/ErrorBar.js
var ErrorBar_excluded = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function ErrorBar_typeof(o) { "@babel/helpers - typeof"; return ErrorBar_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ErrorBar_typeof(o); }
function ErrorBar_extends() { ErrorBar_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ErrorBar_extends.apply(this, arguments); }
function ErrorBar_slicedToArray(arr, i) { return ErrorBar_arrayWithHoles(arr) || ErrorBar_iterableToArrayLimit(arr, i) || ErrorBar_unsupportedIterableToArray(arr, i) || ErrorBar_nonIterableRest(); }
function ErrorBar_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ErrorBar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ErrorBar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ErrorBar_arrayLikeToArray(o, minLen); }
function ErrorBar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ErrorBar_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function ErrorBar_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ErrorBar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ErrorBar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function ErrorBar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function ErrorBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ErrorBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ErrorBar_toPropertyKey(descriptor.key), descriptor); } }
function ErrorBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) ErrorBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) ErrorBar_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ErrorBar_callSuper(t, o, e) { return o = ErrorBar_getPrototypeOf(o), ErrorBar_possibleConstructorReturn(t, ErrorBar_isNativeReflectConstruct() ? Reflect.construct(o, e || [], ErrorBar_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ErrorBar_possibleConstructorReturn(self, call) { if (call && (ErrorBar_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ErrorBar_assertThisInitialized(self); }
function ErrorBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function ErrorBar_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ErrorBar_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ErrorBar_getPrototypeOf(o) { ErrorBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ErrorBar_getPrototypeOf(o); }
function ErrorBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ErrorBar_setPrototypeOf(subClass, superClass); }
function ErrorBar_setPrototypeOf(o, p) { ErrorBar_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ErrorBar_setPrototypeOf(o, p); }
function ErrorBar_defineProperty(obj, key, value) { key = ErrorBar_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ErrorBar_toPropertyKey(t) { var i = ErrorBar_toPrimitive(t, "string"); return "symbol" == ErrorBar_typeof(i) ? i : i + ""; }
function ErrorBar_toPrimitive(t, r) { if ("object" != ErrorBar_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ErrorBar_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview Render a group of error bar
 */
;



// eslint-disable-next-line react/prefer-stateless-function -- requires static defaultProps
var ErrorBar = /*#__PURE__*/function (_React$Component) {
  function ErrorBar() {
    ErrorBar_classCallCheck(this, ErrorBar);
    return ErrorBar_callSuper(this, ErrorBar, arguments);
  }
  ErrorBar_inherits(ErrorBar, _React$Component);
  return ErrorBar_createClass(ErrorBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        offset = _this$props.offset,
        layout = _this$props.layout,
        width = _this$props.width,
        dataKey = _this$props.dataKey,
        data = _this$props.data,
        dataPointFormatter = _this$props.dataPointFormatter,
        xAxis = _this$props.xAxis,
        yAxis = _this$props.yAxis,
        others = ErrorBar_objectWithoutProperties(_this$props, ErrorBar_excluded);
      var svgProps = filterProps(others, false);
      !!(this.props.direction === 'x' && xAxis.type !== 'number') ?  false ? 0 : (0,tiny_invariant/* default */.A)(false) : void 0;
      var errorBars = data.map(function (entry) {
        var _dataPointFormatter = dataPointFormatter(entry, dataKey),
          x = _dataPointFormatter.x,
          y = _dataPointFormatter.y,
          value = _dataPointFormatter.value,
          errorVal = _dataPointFormatter.errorVal;
        if (!errorVal) {
          return null;
        }
        var lineCoordinates = [];
        var lowBound, highBound;
        if (Array.isArray(errorVal)) {
          var _errorVal = ErrorBar_slicedToArray(errorVal, 2);
          lowBound = _errorVal[0];
          highBound = _errorVal[1];
        } else {
          lowBound = highBound = errorVal;
        }
        if (layout === 'vertical') {
          // error bar for horizontal charts, the y is fixed, x is a range value
          var scale = xAxis.scale;
          var yMid = y + offset;
          var yMin = yMid + width;
          var yMax = yMid - width;
          var xMin = scale(value - lowBound);
          var xMax = scale(value + highBound);

          // the right line of |--|
          lineCoordinates.push({
            x1: xMax,
            y1: yMin,
            x2: xMax,
            y2: yMax
          });
          // the middle line of |--|
          lineCoordinates.push({
            x1: xMin,
            y1: yMid,
            x2: xMax,
            y2: yMid
          });
          // the left line of |--|
          lineCoordinates.push({
            x1: xMin,
            y1: yMin,
            x2: xMin,
            y2: yMax
          });
        } else if (layout === 'horizontal') {
          // error bar for horizontal charts, the x is fixed, y is a range value
          var _scale = yAxis.scale;
          var xMid = x + offset;
          var _xMin = xMid - width;
          var _xMax = xMid + width;
          var _yMin = _scale(value - lowBound);
          var _yMax = _scale(value + highBound);

          // the top line
          lineCoordinates.push({
            x1: _xMin,
            y1: _yMax,
            x2: _xMax,
            y2: _yMax
          });
          // the middle line
          lineCoordinates.push({
            x1: xMid,
            y1: _yMin,
            x2: xMid,
            y2: _yMax
          });
          // the bottom line
          lineCoordinates.push({
            x1: _xMin,
            y1: _yMin,
            x2: _xMax,
            y2: _yMin
          });
        }
        return /*#__PURE__*/react.createElement(Layer, ErrorBar_extends({
          className: "recharts-errorBar",
          key: "bar-".concat(lineCoordinates.map(function (c) {
            return "".concat(c.x1, "-").concat(c.x2, "-").concat(c.y1, "-").concat(c.y2);
          }))
        }, svgProps), lineCoordinates.map(function (coordinates) {
          return /*#__PURE__*/react.createElement("line", ErrorBar_extends({}, coordinates, {
            key: "line-".concat(coordinates.x1, "-").concat(coordinates.x2, "-").concat(coordinates.y1, "-").concat(coordinates.y2)
          }));
        }));
      });
      return /*#__PURE__*/react.createElement(Layer, {
        className: "recharts-errorBars"
      }, errorBars);
    }
  }]);
}(react.Component);
ErrorBar_defineProperty(ErrorBar, "defaultProps", {
  stroke: 'black',
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: 'horizontal'
});
ErrorBar_defineProperty(ErrorBar, "displayName", 'ErrorBar');
;// ./node_modules/recharts/es6/util/getLegendProps.js
function getLegendProps_typeof(o) { "@babel/helpers - typeof"; return getLegendProps_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, getLegendProps_typeof(o); }
function getLegendProps_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function getLegendProps_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? getLegendProps_ownKeys(Object(t), !0).forEach(function (r) { getLegendProps_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : getLegendProps_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function getLegendProps_defineProperty(obj, key, value) { key = getLegendProps_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function getLegendProps_toPropertyKey(t) { var i = getLegendProps_toPrimitive(t, "string"); return "symbol" == getLegendProps_typeof(i) ? i : i + ""; }
function getLegendProps_toPrimitive(t, r) { if ("object" != getLegendProps_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != getLegendProps_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;


var getLegendProps = function getLegendProps(_ref) {
  var children = _ref.children,
    formattedGraphicalItems = _ref.formattedGraphicalItems,
    legendWidth = _ref.legendWidth,
    legendContent = _ref.legendContent;
  var legendItem = findChildByType(children, Legend);
  if (!legendItem) {
    return null;
  }
  var legendDefaultProps = Legend.defaultProps;
  var legendProps = legendDefaultProps !== undefined ? getLegendProps_objectSpread(getLegendProps_objectSpread({}, legendDefaultProps), legendItem.props) : {};
  var legendData;
  if (legendItem.props && legendItem.props.payload) {
    legendData = legendItem.props && legendItem.props.payload;
  } else if (legendContent === 'children') {
    legendData = (formattedGraphicalItems || []).reduce(function (result, _ref2) {
      var item = _ref2.item,
        props = _ref2.props;
      var data = props.sectors || props.data || [];
      return result.concat(data.map(function (entry) {
        return {
          type: legendItem.props.iconType || item.props.legendType,
          value: entry.name,
          color: entry.fill,
          payload: entry
        };
      }));
    }, []);
  } else {
    legendData = (formattedGraphicalItems || []).map(function (_ref3) {
      var item = _ref3.item;
      var itemDefaultProps = item.type.defaultProps;
      var itemProps = itemDefaultProps !== undefined ? getLegendProps_objectSpread(getLegendProps_objectSpread({}, itemDefaultProps), item.props) : {};
      var dataKey = itemProps.dataKey,
        name = itemProps.name,
        legendType = itemProps.legendType,
        hide = itemProps.hide;
      return {
        inactive: hide,
        dataKey: dataKey,
        type: legendProps.iconType || legendType || 'square',
        color: getMainColorOfGraphicItem(item),
        value: name || dataKey,
        // @ts-expect-error property strokeDasharray is required in Payload but optional in props
        payload: itemProps
      };
    });
  }
  return getLegendProps_objectSpread(getLegendProps_objectSpread(getLegendProps_objectSpread({}, legendProps), Legend.getWithHeight(legendItem, legendWidth)), {}, {
    payload: legendData,
    item: legendItem
  });
};
;// ./node_modules/recharts/es6/util/ChartUtils.js
/* unused harmony import specifier */ var ChartUtils_isNil;
/* unused harmony import specifier */ var ChartUtils_isNumber;
/* unused harmony import specifier */ var ChartUtils_findEntryInArray;
function ChartUtils_typeof(o) { "@babel/helpers - typeof"; return ChartUtils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ChartUtils_typeof(o); }
function ChartUtils_toConsumableArray(arr) { return ChartUtils_arrayWithoutHoles(arr) || ChartUtils_iterableToArray(arr) || ChartUtils_unsupportedIterableToArray(arr) || ChartUtils_nonIterableSpread(); }
function ChartUtils_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ChartUtils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ChartUtils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ChartUtils_arrayLikeToArray(o, minLen); }
function ChartUtils_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function ChartUtils_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return ChartUtils_arrayLikeToArray(arr); }
function ChartUtils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ChartUtils_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ChartUtils_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ChartUtils_ownKeys(Object(t), !0).forEach(function (r) { ChartUtils_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ChartUtils_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ChartUtils_defineProperty(obj, key, value) { key = ChartUtils_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ChartUtils_toPropertyKey(t) { var i = ChartUtils_toPrimitive(t, "string"); return "symbol" == ChartUtils_typeof(i) ? i : i + ""; }
function ChartUtils_toPrimitive(t, r) { if ("object" != ChartUtils_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ChartUtils_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;
















// TODO: Cause of circular dependency. Needs refactor.
// import { RadiusAxisProps, AngleAxisProps } from '../polar/types';



// Exported for backwards compatibility

function getValueByDataKey(obj, dataKey, defaultValue) {
  if (isNil_default()(obj) || isNil_default()(dataKey)) {
    return defaultValue;
  }
  if (isNumOrStr(dataKey)) {
    return get_default()(obj, dataKey, defaultValue);
  }
  if (isFunction_default()(dataKey)) {
    return dataKey(obj);
  }
  return defaultValue;
}
/**
 * Get domain of data by key.
 * @param  {Array}   data      The data displayed in the chart
 * @param  {String}  key       The unique key of a group of data
 * @param  {String}  type      The type of axis
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array} Domain of data
 */
function getDomainOfDataByKey(data, key, type, filterNil) {
  var flattenData = flatMap_default()(data, function (entry) {
    return getValueByDataKey(entry, key);
  });
  if (type === 'number') {
    // @ts-expect-error parseFloat type only accepts strings
    var domain = flattenData.filter(function (entry) {
      return isNumber(entry) || parseFloat(entry);
    });
    return domain.length ? [min_default()(domain), max_default()(domain)] : [Infinity, -Infinity];
  }
  var validateData = filterNil ? flattenData.filter(function (entry) {
    return !isNil_default()(entry);
  }) : flattenData;

  // Supports x-axis of Date type
  return validateData.map(function (entry) {
    return isNumOrStr(entry) || entry instanceof Date ? entry : '';
  });
}
var calculateActiveTickIndex = function calculateActiveTickIndex(coordinate) {
  var _ticks$length;
  var ticks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var unsortedTicks = arguments.length > 2 ? arguments[2] : undefined;
  var axis = arguments.length > 3 ? arguments[3] : undefined;
  var index = -1;
  var len = (_ticks$length = ticks === null || ticks === void 0 ? void 0 : ticks.length) !== null && _ticks$length !== void 0 ? _ticks$length : 0;

  // if there are 1 or less ticks ticks then the active tick is at index 0
  if (len <= 1) {
    return 0;
  }
  if (axis && axis.axisType === 'angleAxis' && Math.abs(Math.abs(axis.range[1] - axis.range[0]) - 360) <= 1e-6) {
    var range = axis.range;
    // ticks are distributed in a circle
    for (var i = 0; i < len; i++) {
      var before = i > 0 ? unsortedTicks[i - 1].coordinate : unsortedTicks[len - 1].coordinate;
      var cur = unsortedTicks[i].coordinate;
      var after = i >= len - 1 ? unsortedTicks[0].coordinate : unsortedTicks[i + 1].coordinate;
      var sameDirectionCoord = void 0;
      if (mathSign(cur - before) !== mathSign(after - cur)) {
        var diffInterval = [];
        if (mathSign(after - cur) === mathSign(range[1] - range[0])) {
          sameDirectionCoord = after;
          var curInRange = cur + range[1] - range[0];
          diffInterval[0] = Math.min(curInRange, (curInRange + before) / 2);
          diffInterval[1] = Math.max(curInRange, (curInRange + before) / 2);
        } else {
          sameDirectionCoord = before;
          var afterInRange = after + range[1] - range[0];
          diffInterval[0] = Math.min(cur, (afterInRange + cur) / 2);
          diffInterval[1] = Math.max(cur, (afterInRange + cur) / 2);
        }
        var sameInterval = [Math.min(cur, (sameDirectionCoord + cur) / 2), Math.max(cur, (sameDirectionCoord + cur) / 2)];
        if (coordinate > sameInterval[0] && coordinate <= sameInterval[1] || coordinate >= diffInterval[0] && coordinate <= diffInterval[1]) {
          index = unsortedTicks[i].index;
          break;
        }
      } else {
        var minValue = Math.min(before, after);
        var maxValue = Math.max(before, after);
        if (coordinate > (minValue + cur) / 2 && coordinate <= (maxValue + cur) / 2) {
          index = unsortedTicks[i].index;
          break;
        }
      }
    }
  } else {
    // ticks are distributed in a single direction
    for (var _i = 0; _i < len; _i++) {
      if (_i === 0 && coordinate <= (ticks[_i].coordinate + ticks[_i + 1].coordinate) / 2 || _i > 0 && _i < len - 1 && coordinate > (ticks[_i].coordinate + ticks[_i - 1].coordinate) / 2 && coordinate <= (ticks[_i].coordinate + ticks[_i + 1].coordinate) / 2 || _i === len - 1 && coordinate > (ticks[_i].coordinate + ticks[_i - 1].coordinate) / 2) {
        index = ticks[_i].index;
        break;
      }
    }
  }
  return index;
};

/**
 * Get the main color of each graphic item
 * @param  {ReactElement} item A graphic item
 * @return {String}            Color
 */
var getMainColorOfGraphicItem = function getMainColorOfGraphicItem(item) {
  var _item$type;
  var _ref = item,
    displayName = _ref.type.displayName; // TODO: check if displayName is valid.
  var defaultedProps = (_item$type = item.type) !== null && _item$type !== void 0 && _item$type.defaultProps ? ChartUtils_objectSpread(ChartUtils_objectSpread({}, item.type.defaultProps), item.props) : item.props;
  var stroke = defaultedProps.stroke,
    fill = defaultedProps.fill;
  var result;
  switch (displayName) {
    case 'Line':
      result = stroke;
      break;
    case 'Area':
    case 'Radar':
      result = stroke && stroke !== 'none' ? stroke : fill;
      break;
    default:
      result = fill;
      break;
  }
  return result;
};
/**
 * Calculate the size of all groups for stacked bar graph
 * @param  {Object} stackGroups The items grouped by axisId and stackId
 * @return {Object} The size of all groups
 */
var getBarSizeList = function getBarSizeList(_ref2) {
  var globalSize = _ref2.barSize,
    totalSize = _ref2.totalSize,
    _ref2$stackGroups = _ref2.stackGroups,
    stackGroups = _ref2$stackGroups === void 0 ? {} : _ref2$stackGroups;
  if (!stackGroups) {
    return {};
  }
  var result = {};
  var numericAxisIds = Object.keys(stackGroups);
  for (var i = 0, len = numericAxisIds.length; i < len; i++) {
    var sgs = stackGroups[numericAxisIds[i]].stackGroups;
    var stackIds = Object.keys(sgs);
    for (var j = 0, sLen = stackIds.length; j < sLen; j++) {
      var _sgs$stackIds$j = sgs[stackIds[j]],
        items = _sgs$stackIds$j.items,
        cateAxisId = _sgs$stackIds$j.cateAxisId;
      var barItems = items.filter(function (item) {
        return getDisplayName(item.type).indexOf('Bar') >= 0;
      });
      if (barItems && barItems.length) {
        var barItemDefaultProps = barItems[0].type.defaultProps;
        var barItemProps = barItemDefaultProps !== undefined ? ChartUtils_objectSpread(ChartUtils_objectSpread({}, barItemDefaultProps), barItems[0].props) : barItems[0].props;
        var selfSize = barItemProps.barSize;
        var cateId = barItemProps[cateAxisId];
        if (!result[cateId]) {
          result[cateId] = [];
        }
        var barSize = isNil_default()(selfSize) ? globalSize : selfSize;
        result[cateId].push({
          item: barItems[0],
          stackList: barItems.slice(1),
          barSize: isNil_default()(barSize) ? undefined : getPercentValue(barSize, totalSize, 0)
        });
      }
    }
  }
  return result;
};
/**
 * Calculate the size of each bar and offset between start of band and the bar
 *
 * @param  {number} bandSize is the size of area where bars can render
 * @param  {number | string} barGap is the gap size, as a percentage of `bandSize`.
 *                                  Can be defined as number or percent string
 * @param  {number | string} barCategoryGap is the gap size, as a percentage of `bandSize`.
 *                                  Can be defined as number or percent string
 * @param  {Array<object>} sizeList Sizes of all groups
 * @param  {number} maxBarSize The maximum size of each bar
 * @return {Array<object>} The size and offset of each bar
 */
var getBarPosition = function getBarPosition(_ref3) {
  var barGap = _ref3.barGap,
    barCategoryGap = _ref3.barCategoryGap,
    bandSize = _ref3.bandSize,
    _ref3$sizeList = _ref3.sizeList,
    sizeList = _ref3$sizeList === void 0 ? [] : _ref3$sizeList,
    maxBarSize = _ref3.maxBarSize;
  var len = sizeList.length;
  if (len < 1) return null;
  var realBarGap = getPercentValue(barGap, bandSize, 0, true);
  var result;
  var initialValue = [];

  // whether or not is barSize setted by user
  if (sizeList[0].barSize === +sizeList[0].barSize) {
    var useFull = false;
    var fullBarSize = bandSize / len;
    // @ts-expect-error the type check above does not check for type number explicitly
    var sum = sizeList.reduce(function (res, entry) {
      return res + entry.barSize || 0;
    }, 0);
    sum += (len - 1) * realBarGap;
    if (sum >= bandSize) {
      sum -= (len - 1) * realBarGap;
      realBarGap = 0;
    }
    if (sum >= bandSize && fullBarSize > 0) {
      useFull = true;
      fullBarSize *= 0.9;
      sum = len * fullBarSize;
    }
    var offset = (bandSize - sum) / 2 >> 0;
    var prev = {
      offset: offset - realBarGap,
      size: 0
    };
    result = sizeList.reduce(function (res, entry) {
      var newPosition = {
        item: entry.item,
        position: {
          offset: prev.offset + prev.size + realBarGap,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: useFull ? fullBarSize : entry.barSize
        }
      };
      var newRes = [].concat(ChartUtils_toConsumableArray(res), [newPosition]);
      prev = newRes[newRes.length - 1].position;
      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach(function (item) {
          newRes.push({
            item: item,
            position: prev
          });
        });
      }
      return newRes;
    }, initialValue);
  } else {
    var _offset = getPercentValue(barCategoryGap, bandSize, 0, true);
    if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) {
      realBarGap = 0;
    }
    var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;
    if (originalSize > 1) {
      originalSize >>= 0;
    }
    var size = maxBarSize === +maxBarSize ? Math.min(originalSize, maxBarSize) : originalSize;
    result = sizeList.reduce(function (res, entry, i) {
      var newRes = [].concat(ChartUtils_toConsumableArray(res), [{
        item: entry.item,
        position: {
          offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
          size: size
        }
      }]);
      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach(function (item) {
          newRes.push({
            item: item,
            position: newRes[newRes.length - 1].position
          });
        });
      }
      return newRes;
    }, initialValue);
  }
  return result;
};
var appendOffsetOfLegend = function appendOffsetOfLegend(offset, _unused, props, legendBox) {
  var children = props.children,
    width = props.width,
    margin = props.margin;
  var legendWidth = width - (margin.left || 0) - (margin.right || 0);
  var legendProps = getLegendProps({
    children: children,
    legendWidth: legendWidth
  });
  if (legendProps) {
    var _ref4 = legendBox || {},
      boxWidth = _ref4.width,
      boxHeight = _ref4.height;
    var align = legendProps.align,
      verticalAlign = legendProps.verticalAlign,
      layout = legendProps.layout;
    if ((layout === 'vertical' || layout === 'horizontal' && verticalAlign === 'middle') && align !== 'center' && isNumber(offset[align])) {
      return ChartUtils_objectSpread(ChartUtils_objectSpread({}, offset), {}, ChartUtils_defineProperty({}, align, offset[align] + (boxWidth || 0)));
    }
    if ((layout === 'horizontal' || layout === 'vertical' && align === 'center') && verticalAlign !== 'middle' && isNumber(offset[verticalAlign])) {
      return ChartUtils_objectSpread(ChartUtils_objectSpread({}, offset), {}, ChartUtils_defineProperty({}, verticalAlign, offset[verticalAlign] + (boxHeight || 0)));
    }
  }
  return offset;
};
var isErrorBarRelevantForAxis = function isErrorBarRelevantForAxis(layout, axisType, direction) {
  if (isNil_default()(axisType)) {
    return true;
  }
  if (layout === 'horizontal') {
    return axisType === 'yAxis';
  }
  if (layout === 'vertical') {
    return axisType === 'xAxis';
  }
  if (direction === 'x') {
    return axisType === 'xAxis';
  }
  if (direction === 'y') {
    return axisType === 'yAxis';
  }
  return true;
};
var getDomainOfErrorBars = function getDomainOfErrorBars(data, item, dataKey, layout, axisType) {
  var children = item.props.children;
  var errorBars = findAllByType(children, ErrorBar).filter(function (errorBarChild) {
    return isErrorBarRelevantForAxis(layout, axisType, errorBarChild.props.direction);
  });
  if (errorBars && errorBars.length) {
    var keys = errorBars.map(function (errorBarChild) {
      return errorBarChild.props.dataKey;
    });
    return data.reduce(function (result, entry) {
      var entryValue = getValueByDataKey(entry, dataKey);
      if (isNil_default()(entryValue)) return result;
      var mainValue = Array.isArray(entryValue) ? [min_default()(entryValue), max_default()(entryValue)] : [entryValue, entryValue];
      var errorDomain = keys.reduce(function (prevErrorArr, k) {
        var errorValue = getValueByDataKey(entry, k, 0);
        var lowerValue = mainValue[0] - Math.abs(Array.isArray(errorValue) ? errorValue[0] : errorValue);
        var upperValue = mainValue[1] + Math.abs(Array.isArray(errorValue) ? errorValue[1] : errorValue);
        return [Math.min(lowerValue, prevErrorArr[0]), Math.max(upperValue, prevErrorArr[1])];
      }, [Infinity, -Infinity]);
      return [Math.min(errorDomain[0], result[0]), Math.max(errorDomain[1], result[1])];
    }, [Infinity, -Infinity]);
  }
  return null;
};
var parseErrorBarsOfAxis = function parseErrorBarsOfAxis(data, items, dataKey, axisType, layout) {
  var domains = items.map(function (item) {
    return getDomainOfErrorBars(data, item, dataKey, layout, axisType);
  }).filter(function (entry) {
    return !isNil_default()(entry);
  });
  if (domains && domains.length) {
    return domains.reduce(function (result, entry) {
      return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
    }, [Infinity, -Infinity]);
  }
  return null;
};

/**
 * Get domain of data by the configuration of item element
 * @param  {Array}   data      The data displayed in the chart
 * @param  {Array}   items     The instances of item
 * @param  {String}  type      The type of axis, number - Number Axis, category - Category Axis
 * @param  {LayoutType} layout The type of layout
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array}        Domain
 */
var getDomainOfItemsWithSameAxis = function getDomainOfItemsWithSameAxis(data, items, type, layout, filterNil) {
  var domains = items.map(function (item) {
    var dataKey = item.props.dataKey;
    if (type === 'number' && dataKey) {
      return getDomainOfErrorBars(data, item, dataKey, layout) || getDomainOfDataByKey(data, dataKey, type, filterNil);
    }
    return getDomainOfDataByKey(data, dataKey, type, filterNil);
  });
  if (type === 'number') {
    // Calculate the domain of number axis
    return domains.reduce(
    // @ts-expect-error if (type === number) means that the domain is numerical type
    // - but this link is missing in the type definition
    function (result, entry) {
      return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
    }, [Infinity, -Infinity]);
  }
  var tag = {};
  // Get the union set of category axis
  return domains.reduce(function (result, entry) {
    for (var i = 0, len = entry.length; i < len; i++) {
      // @ts-expect-error Date cannot index an object
      if (!tag[entry[i]]) {
        // @ts-expect-error Date cannot index an object
        tag[entry[i]] = true;

        // @ts-expect-error Date cannot index an object
        result.push(entry[i]);
      }
    }
    return result;
  }, []);
};
var isCategoricalAxis = function isCategoricalAxis(layout, axisType) {
  return layout === 'horizontal' && axisType === 'xAxis' || layout === 'vertical' && axisType === 'yAxis' || layout === 'centric' && axisType === 'angleAxis' || layout === 'radial' && axisType === 'radiusAxis';
};

/**
 * Calculate the Coordinates of grid
 * @param  {Array} ticks           The ticks in axis
 * @param {Number} minValue        The minimun value of axis
 * @param {Number} maxValue        The maximun value of axis
 * @param {boolean} syncWithTicks  Synchronize grid lines with ticks or not
 * @return {Array}                 Coordinates
 */
var getCoordinatesOfGrid = function getCoordinatesOfGrid(ticks, minValue, maxValue, syncWithTicks) {
  if (syncWithTicks) {
    return ticks.map(function (entry) {
      return entry.coordinate;
    });
  }
  var hasMin, hasMax;
  var values = ticks.map(function (entry) {
    if (entry.coordinate === minValue) {
      hasMin = true;
    }
    if (entry.coordinate === maxValue) {
      hasMax = true;
    }
    return entry.coordinate;
  });
  if (!hasMin) {
    values.push(minValue);
  }
  if (!hasMax) {
    values.push(maxValue);
  }
  return values;
};

/**
 * Get the ticks of an axis
 * @param  {Object}  axis The configuration of an axis
 * @param {Boolean} isGrid Whether or not are the ticks in grid
 * @param {Boolean} isAll Return the ticks of all the points or not
 * @return {Array}  Ticks
 */
var getTicksOfAxis = function getTicksOfAxis(axis, isGrid, isAll) {
  if (!axis) return null;
  var scale = axis.scale;
  var duplicateDomain = axis.duplicateDomain,
    type = axis.type,
    range = axis.range;
  var offsetForBand = axis.realScaleType === 'scaleBand' ? scale.bandwidth() / 2 : 2;
  var offset = (isGrid || isAll) && type === 'category' && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
  offset = axis.axisType === 'angleAxis' && (range === null || range === void 0 ? void 0 : range.length) >= 2 ? mathSign(range[0] - range[1]) * 2 * offset : offset;

  // The ticks set by user should only affect the ticks adjacent to axis line
  if (isGrid && (axis.ticks || axis.niceTicks)) {
    var result = (axis.ticks || axis.niceTicks).map(function (entry) {
      var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: scale(scaleContent) + offset,
        value: entry,
        offset: offset
      };
    });
    return result.filter(function (row) {
      return !isNaN_default()(row.coordinate);
    });
  }

  // When axis is a categorial axis, but the type of axis is number or the scale of axis is not "auto"
  if (axis.isCategorical && axis.categoricalDomain) {
    return axis.categoricalDomain.map(function (entry, index) {
      return {
        coordinate: scale(entry) + offset,
        value: entry,
        index: index,
        offset: offset
      };
    });
  }
  if (scale.ticks && !isAll) {
    return scale.ticks(axis.tickCount).map(function (entry) {
      return {
        coordinate: scale(entry) + offset,
        value: entry,
        offset: offset
      };
    });
  }

  // When axis has duplicated text, serial numbers are used to generate scale
  return scale.domain().map(function (entry, index) {
    return {
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
      index: index,
      offset: offset
    };
  });
};

/**
 * combine the handlers
 * @param  {Function} defaultHandler Internal private handler
 * @param  {Function} childHandler Handler function specified in child component
 * @return {Function}                The combined handler
 */

var handlerWeakMap = new WeakMap();
var combineEventHandlers = function combineEventHandlers(defaultHandler, childHandler) {
  if (typeof childHandler !== 'function') {
    return defaultHandler;
  }
  if (!handlerWeakMap.has(defaultHandler)) {
    handlerWeakMap.set(defaultHandler, new WeakMap());
  }
  var childWeakMap = handlerWeakMap.get(defaultHandler);
  if (childWeakMap.has(childHandler)) {
    return childWeakMap.get(childHandler);
  }
  var combineHandler = function combineHandler() {
    defaultHandler.apply(void 0, arguments);
    childHandler.apply(void 0, arguments);
  };
  childWeakMap.set(childHandler, combineHandler);
  return combineHandler;
};

/**
 * Parse the scale function of axis
 * @param  {Object}   axis          The option of axis
 * @param  {String}   chartType     The displayName of chart
 * @param  {Boolean}  hasBar        if it has a bar
 * @return {object}               The scale function and resolved name
 */
var parseScale = function parseScale(axis, chartType, hasBar) {
  var scale = axis.scale,
    type = axis.type,
    layout = axis.layout,
    axisType = axis.axisType;
  if (scale === 'auto') {
    if (layout === 'radial' && axisType === 'radiusAxis') {
      return {
        scale: band/* default */.A(),
        realScaleType: 'band'
      };
    }
    if (layout === 'radial' && axisType === 'angleAxis') {
      return {
        scale: linear/* default */.A(),
        realScaleType: 'linear'
      };
    }
    if (type === 'category' && chartType && (chartType.indexOf('LineChart') >= 0 || chartType.indexOf('AreaChart') >= 0 || chartType.indexOf('ComposedChart') >= 0 && !hasBar)) {
      return {
        scale: band/* point */.z(),
        realScaleType: 'point'
      };
    }
    if (type === 'category') {
      return {
        scale: band/* default */.A(),
        realScaleType: 'band'
      };
    }
    return {
      scale: linear/* default */.A(),
      realScaleType: 'linear'
    };
  }
  if (isString_default()(scale)) {
    var name = "scale".concat(upperFirst_default()(scale));
    return {
      scale: (d3_scale_namespaceObject[name] || band/* point */.z)(),
      realScaleType: d3_scale_namespaceObject[name] ? name : 'point'
    };
  }
  return isFunction_default()(scale) ? {
    scale: scale
  } : {
    scale: band/* point */.z(),
    realScaleType: 'point'
  };
};
var ChartUtils_EPS = 1e-4;
var checkDomainOfScale = function checkDomainOfScale(scale) {
  var domain = scale.domain();
  if (!domain || domain.length <= 2) {
    return;
  }
  var len = domain.length;
  var range = scale.range();
  var minValue = Math.min(range[0], range[1]) - ChartUtils_EPS;
  var maxValue = Math.max(range[0], range[1]) + ChartUtils_EPS;
  var first = scale(domain[0]);
  var last = scale(domain[len - 1]);
  if (first < minValue || first > maxValue || last < minValue || last > maxValue) {
    scale.domain([domain[0], domain[len - 1]]);
  }
};
var findPositionOfBar = function findPositionOfBar(barPosition, child) {
  if (!barPosition) {
    return null;
  }
  for (var i = 0, len = barPosition.length; i < len; i++) {
    if (barPosition[i].item === child) {
      return barPosition[i].position;
    }
  }
  return null;
};

/**
 * Both value and domain are tuples of two numbers
 * - but the type stays as array of numbers until we have better support in rest of the app
 * @param {Array} value input that will be truncated
 * @param {Array} domain boundaries
 * @returns {Array} tuple of two numbers
 */
var truncateByDomain = function truncateByDomain(value, domain) {
  if (!domain || domain.length !== 2 || !ChartUtils_isNumber(domain[0]) || !ChartUtils_isNumber(domain[1])) {
    return value;
  }
  var minValue = Math.min(domain[0], domain[1]);
  var maxValue = Math.max(domain[0], domain[1]);
  var result = [value[0], value[1]];
  if (!ChartUtils_isNumber(value[0]) || value[0] < minValue) {
    result[0] = minValue;
  }
  if (!ChartUtils_isNumber(value[1]) || value[1] > maxValue) {
    result[1] = maxValue;
  }
  if (result[0] > maxValue) {
    result[0] = maxValue;
  }
  if (result[1] < minValue) {
    result[1] = minValue;
  }
  return result;
};

/**
 * Stacks all positive numbers above zero and all negative numbers below zero.
 *
 * If all values in the series are positive then this behaves the same as 'none' stacker.
 *
 * @param {Array} series from d3-shape Stack
 * @return {Array} series with applied offset
 */
var offsetSign = function offsetSign(series) {
  var n = series.length;
  if (n <= 0) {
    return;
  }
  for (var j = 0, m = series[0].length; j < m; ++j) {
    var positive = 0;
    var negative = 0;
    for (var i = 0; i < n; ++i) {
      var value = isNaN_default()(series[i][j][1]) ? series[i][j][0] : series[i][j][1];

      /* eslint-disable prefer-destructuring, no-param-reassign */
      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = negative;
        series[i][j][1] = negative + value;
        negative = series[i][j][1];
      }
      /* eslint-enable prefer-destructuring, no-param-reassign */
    }
  }
};

/**
 * Replaces all negative values with zero when stacking data.
 *
 * If all values in the series are positive then this behaves the same as 'none' stacker.
 *
 * @param {Array} series from d3-shape Stack
 * @return {Array} series with applied offset
 */
var offsetPositive = function offsetPositive(series) {
  var n = series.length;
  if (n <= 0) {
    return;
  }
  for (var j = 0, m = series[0].length; j < m; ++j) {
    var positive = 0;
    for (var i = 0; i < n; ++i) {
      var value = isNaN_default()(series[i][j][1]) ? series[i][j][0] : series[i][j][1];

      /* eslint-disable prefer-destructuring, no-param-reassign */
      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = 0;
        series[i][j][1] = 0;
      }
      /* eslint-enable prefer-destructuring, no-param-reassign */
    }
  }
};

/**
 * Function type to compute offset for stacked data.
 *
 * d3-shape has something fishy going on with its types.
 * In @definitelytyped/d3-shape, this function (the offset accessor) is typed as Series<> => void.
 * However! When I actually open the storybook I can see that the offset accessor actually receives Array<Series<>>.
 * The same I can see in the source code itself:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/66042
 * That one unfortunately has no types but we can tell it passes three-dimensional array.
 *
 * Which leads me to believe that definitelytyped is wrong on this one.
 * There's open discussion on this topic without much attention:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/66042
 */

var STACK_OFFSET_MAP = {
  sign: offsetSign,
  // @ts-expect-error definitelytyped types are incorrect
  expand: expand/* default */.A,
  // @ts-expect-error definitelytyped types are incorrect
  none: none/* default */.A,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: silhouette/* default */.A,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: wiggle/* default */.A,
  positive: offsetPositive
};
var getStackedData = function getStackedData(data, stackItems, offsetType) {
  var dataKeys = stackItems.map(function (item) {
    return item.props.dataKey;
  });
  var offsetAccessor = STACK_OFFSET_MAP[offsetType];
  var stack = (0,src_stack/* default */.A)()
  // @ts-expect-error stack.keys type wants an array of strings, but we provide array of DataKeys
  .keys(dataKeys).value(function (d, key) {
    return +getValueByDataKey(d, key, 0);
  }).order(order_none/* default */.A)
  // @ts-expect-error definitelytyped types are incorrect
  .offset(offsetAccessor);
  return stack(data);
};
var getStackGroupsByAxisId = function getStackGroupsByAxisId(data, _items, numericAxisId, cateAxisId, offsetType, reverseStackOrder) {
  if (!data) {
    return null;
  }

  // reversing items to affect render order (for layering)
  var items = reverseStackOrder ? _items.reverse() : _items;
  var parentStackGroupsInitialValue = {};
  var stackGroups = items.reduce(function (result, item) {
    var _item$type2;
    var defaultedProps = (_item$type2 = item.type) !== null && _item$type2 !== void 0 && _item$type2.defaultProps ? ChartUtils_objectSpread(ChartUtils_objectSpread({}, item.type.defaultProps), item.props) : item.props;
    var stackId = defaultedProps.stackId,
      hide = defaultedProps.hide;
    if (hide) {
      return result;
    }
    var axisId = defaultedProps[numericAxisId];
    var parentGroup = result[axisId] || {
      hasStack: false,
      stackGroups: {}
    };
    if (isNumOrStr(stackId)) {
      var childGroup = parentGroup.stackGroups[stackId] || {
        numericAxisId: numericAxisId,
        cateAxisId: cateAxisId,
        items: []
      };
      childGroup.items.push(item);
      parentGroup.hasStack = true;
      parentGroup.stackGroups[stackId] = childGroup;
    } else {
      parentGroup.stackGroups[uniqueId('_stackId_')] = {
        numericAxisId: numericAxisId,
        cateAxisId: cateAxisId,
        items: [item]
      };
    }
    return ChartUtils_objectSpread(ChartUtils_objectSpread({}, result), {}, ChartUtils_defineProperty({}, axisId, parentGroup));
  }, parentStackGroupsInitialValue);
  var axisStackGroupsInitialValue = {};
  return Object.keys(stackGroups).reduce(function (result, axisId) {
    var group = stackGroups[axisId];
    if (group.hasStack) {
      var stackGroupsInitialValue = {};
      group.stackGroups = Object.keys(group.stackGroups).reduce(function (res, stackId) {
        var g = group.stackGroups[stackId];
        return ChartUtils_objectSpread(ChartUtils_objectSpread({}, res), {}, ChartUtils_defineProperty({}, stackId, {
          numericAxisId: numericAxisId,
          cateAxisId: cateAxisId,
          items: g.items,
          stackedData: getStackedData(data, g.items, offsetType)
        }));
      }, stackGroupsInitialValue);
    }
    return ChartUtils_objectSpread(ChartUtils_objectSpread({}, result), {}, ChartUtils_defineProperty({}, axisId, group));
  }, axisStackGroupsInitialValue);
};

/**
 * Configure the scale function of axis
 * @param {Object} scale The scale function
 * @param {Object} opts  The configuration of axis
 * @return {Object}      null
 */
var getTicksOfScale = function getTicksOfScale(scale, opts) {
  var realScaleType = opts.realScaleType,
    type = opts.type,
    tickCount = opts.tickCount,
    originalDomain = opts.originalDomain,
    allowDecimals = opts.allowDecimals;
  var scaleType = realScaleType || opts.scale;
  if (scaleType !== 'auto' && scaleType !== 'linear') {
    return null;
  }
  if (tickCount && type === 'number' && originalDomain && (originalDomain[0] === 'auto' || originalDomain[1] === 'auto')) {
    // Calculate the ticks by the number of grid when the axis is a number axis
    var domain = scale.domain();
    if (!domain.length) {
      return null;
    }
    var tickValues = getNiceTickValues(domain, tickCount, allowDecimals);
    scale.domain([min_default()(tickValues), max_default()(tickValues)]);
    return {
      niceTicks: tickValues
    };
  }
  if (tickCount && type === 'number') {
    var _domain = scale.domain();
    var _tickValues = getTickValuesFixedDomain(_domain, tickCount, allowDecimals);
    return {
      niceTicks: _tickValues
    };
  }
  return null;
};
function getCateCoordinateOfLine(_ref5) {
  var axis = _ref5.axis,
    ticks = _ref5.ticks,
    bandSize = _ref5.bandSize,
    entry = _ref5.entry,
    index = _ref5.index,
    dataKey = _ref5.dataKey;
  if (axis.type === 'category') {
    // find coordinate of category axis by the value of category
    // @ts-expect-error why does this use direct object access instead of getValueByDataKey?
    if (!axis.allowDuplicatedCategory && axis.dataKey && !ChartUtils_isNil(entry[axis.dataKey])) {
      // @ts-expect-error why does this use direct object access instead of getValueByDataKey?
      var matchedTick = ChartUtils_findEntryInArray(ticks, 'value', entry[axis.dataKey]);
      if (matchedTick) {
        return matchedTick.coordinate + bandSize / 2;
      }
    }
    return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
  }
  var value = getValueByDataKey(entry, !ChartUtils_isNil(dataKey) ? dataKey : axis.dataKey);
  return !ChartUtils_isNil(value) ? axis.scale(value) : null;
}
var getCateCoordinateOfBar = function getCateCoordinateOfBar(_ref6) {
  var axis = _ref6.axis,
    ticks = _ref6.ticks,
    offset = _ref6.offset,
    bandSize = _ref6.bandSize,
    entry = _ref6.entry,
    index = _ref6.index;
  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + offset : null;
  }
  var value = getValueByDataKey(entry, axis.dataKey, axis.domain[index]);
  return !ChartUtils_isNil(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};
var getBaseValueOfBar = function getBaseValueOfBar(_ref7) {
  var numericAxis = _ref7.numericAxis;
  var domain = numericAxis.scale.domain();
  if (numericAxis.type === 'number') {
    var minValue = Math.min(domain[0], domain[1]);
    var maxValue = Math.max(domain[0], domain[1]);
    if (minValue <= 0 && maxValue >= 0) {
      return 0;
    }
    if (maxValue < 0) {
      return maxValue;
    }
    return minValue;
  }
  return domain[0];
};
var getStackedDataOfItem = function getStackedDataOfItem(item, stackGroups) {
  var _item$type3;
  var defaultedProps = (_item$type3 = item.type) !== null && _item$type3 !== void 0 && _item$type3.defaultProps ? ChartUtils_objectSpread(ChartUtils_objectSpread({}, item.type.defaultProps), item.props) : item.props;
  var stackId = defaultedProps.stackId;
  if (isNumOrStr(stackId)) {
    var group = stackGroups[stackId];
    if (group) {
      var itemIndex = group.items.indexOf(item);
      return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
    }
  }
  return null;
};
var getDomainOfSingle = function getDomainOfSingle(data) {
  return data.reduce(function (result, entry) {
    return [min_default()(entry.concat([result[0]]).filter(isNumber)), max_default()(entry.concat([result[1]]).filter(isNumber))];
  }, [Infinity, -Infinity]);
};
var getDomainOfStackGroups = function getDomainOfStackGroups(stackGroups, startIndex, endIndex) {
  return Object.keys(stackGroups).reduce(function (result, stackId) {
    var group = stackGroups[stackId];
    var stackedData = group.stackedData;
    var domain = stackedData.reduce(function (res, entry) {
      var s = getDomainOfSingle(entry.slice(startIndex, endIndex + 1));
      return [Math.min(res[0], s[0]), Math.max(res[1], s[1])];
    }, [Infinity, -Infinity]);
    return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
  }, [Infinity, -Infinity]).map(function (result) {
    return result === Infinity || result === -Infinity ? 0 : result;
  });
};
var MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var parseSpecifiedDomain = function parseSpecifiedDomain(specifiedDomain, dataDomain, allowDataOverflow) {
  if (isFunction_default()(specifiedDomain)) {
    return specifiedDomain(dataDomain, allowDataOverflow);
  }
  if (!Array.isArray(specifiedDomain)) {
    return dataDomain;
  }
  var domain = [];

  /* eslint-disable prefer-destructuring */
  if (isNumber(specifiedDomain[0])) {
    domain[0] = allowDataOverflow ? specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
  } else if (MIN_VALUE_REG.test(specifiedDomain[0])) {
    var value = +MIN_VALUE_REG.exec(specifiedDomain[0])[1];
    domain[0] = dataDomain[0] - value;
  } else if (isFunction_default()(specifiedDomain[0])) {
    domain[0] = specifiedDomain[0](dataDomain[0]);
  } else {
    domain[0] = dataDomain[0];
  }
  if (isNumber(specifiedDomain[1])) {
    domain[1] = allowDataOverflow ? specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
  } else if (MAX_VALUE_REG.test(specifiedDomain[1])) {
    var _value = +MAX_VALUE_REG.exec(specifiedDomain[1])[1];
    domain[1] = dataDomain[1] + _value;
  } else if (isFunction_default()(specifiedDomain[1])) {
    domain[1] = specifiedDomain[1](dataDomain[1]);
  } else {
    domain[1] = dataDomain[1];
  }
  /* eslint-enable prefer-destructuring */

  return domain;
};

/**
 * Calculate the size between two category
 * @param  {Object} axis  The options of axis
 * @param  {Array}  ticks The ticks of axis
 * @param  {Boolean} isBar if items in axis are bars
 * @return {Number} Size
 */
var getBandSizeOfAxis = function getBandSizeOfAxis(axis, ticks, isBar) {
  // @ts-expect-error we need to rethink scale type
  if (axis && axis.scale && axis.scale.bandwidth) {
    // @ts-expect-error we need to rethink scale type
    var bandWidth = axis.scale.bandwidth();
    if (!isBar || bandWidth > 0) {
      return bandWidth;
    }
  }
  if (axis && ticks && ticks.length >= 2) {
    var orderedTicks = sortBy_default()(ticks, function (o) {
      return o.coordinate;
    });
    var bandSize = Infinity;
    for (var i = 1, len = orderedTicks.length; i < len; i++) {
      var cur = orderedTicks[i];
      var prev = orderedTicks[i - 1];
      bandSize = Math.min((cur.coordinate || 0) - (prev.coordinate || 0), bandSize);
    }
    return bandSize === Infinity ? 0 : bandSize;
  }
  return isBar ? undefined : 0;
};
/**
 * parse the domain of a category axis when a domain is specified
 * @param   {Array}        specifiedDomain  The domain specified by users
 * @param   {Array}        calculatedDomain The domain calculated by dateKey
 * @param   {ReactElement} axisChild        The axis ReactElement
 * @returns {Array}        domains
 */
var parseDomainOfCategoryAxis = function parseDomainOfCategoryAxis(specifiedDomain, calculatedDomain, axisChild) {
  if (!specifiedDomain || !specifiedDomain.length) {
    return calculatedDomain;
  }
  if (isEqual_default()(specifiedDomain, get_default()(axisChild, 'type.defaultProps.domain'))) {
    return calculatedDomain;
  }
  return specifiedDomain;
};
var getTooltipItem = function getTooltipItem(graphicalItem, payload) {
  var defaultedProps = graphicalItem.type.defaultProps ? ChartUtils_objectSpread(ChartUtils_objectSpread({}, graphicalItem.type.defaultProps), graphicalItem.props) : graphicalItem.props;
  var dataKey = defaultedProps.dataKey,
    name = defaultedProps.name,
    unit = defaultedProps.unit,
    formatter = defaultedProps.formatter,
    tooltipType = defaultedProps.tooltipType,
    chartType = defaultedProps.chartType,
    hide = defaultedProps.hide;
  return ChartUtils_objectSpread(ChartUtils_objectSpread({}, filterProps(graphicalItem, false)), {}, {
    dataKey: dataKey,
    unit: unit,
    formatter: formatter,
    name: name || dataKey,
    color: getMainColorOfGraphicItem(graphicalItem),
    value: getValueByDataKey(payload, dataKey),
    type: tooltipType,
    payload: payload,
    chartType: chartType,
    hide: hide
  });
};
;// ./node_modules/recharts/es6/util/CssPrefixUtils.js
function CssPrefixUtils_typeof(o) { "@babel/helpers - typeof"; return CssPrefixUtils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CssPrefixUtils_typeof(o); }
function CssPrefixUtils_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function CssPrefixUtils_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? CssPrefixUtils_ownKeys(Object(t), !0).forEach(function (r) { CssPrefixUtils_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : CssPrefixUtils_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function CssPrefixUtils_defineProperty(obj, key, value) { key = CssPrefixUtils_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function CssPrefixUtils_toPropertyKey(t) { var i = CssPrefixUtils_toPrimitive(t, "string"); return "symbol" == CssPrefixUtils_typeof(i) ? i : i + ""; }
function CssPrefixUtils_toPrimitive(t, r) { if ("object" != CssPrefixUtils_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != CssPrefixUtils_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PREFIX_LIST = ['Webkit', 'Moz', 'O', 'ms'];
var generatePrefixStyle = function generatePrefixStyle(name, value) {
  if (!name) {
    return null;
  }
  var camelName = name.replace(/(\w)/, function (v) {
    return v.toUpperCase();
  });
  var result = PREFIX_LIST.reduce(function (res, entry) {
    return CssPrefixUtils_objectSpread(CssPrefixUtils_objectSpread({}, res), {}, CssPrefixUtils_defineProperty({}, entry + camelName, value));
  }, {});
  result[name] = value;
  return result;
};
;// ./node_modules/recharts/es6/cartesian/Brush.js
function Brush_typeof(o) { "@babel/helpers - typeof"; return Brush_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Brush_typeof(o); }
function Brush_extends() { Brush_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Brush_extends.apply(this, arguments); }
function Brush_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Brush_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Brush_ownKeys(Object(t), !0).forEach(function (r) { Brush_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Brush_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Brush_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Brush_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Brush_toPropertyKey(descriptor.key), descriptor); } }
function Brush_createClass(Constructor, protoProps, staticProps) { if (protoProps) Brush_defineProperties(Constructor.prototype, protoProps); if (staticProps) Brush_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Brush_callSuper(t, o, e) { return o = Brush_getPrototypeOf(o), Brush_possibleConstructorReturn(t, Brush_isNativeReflectConstruct() ? Reflect.construct(o, e || [], Brush_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Brush_possibleConstructorReturn(self, call) { if (call && (Brush_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Brush_assertThisInitialized(self); }
function Brush_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function Brush_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Brush_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function Brush_getPrototypeOf(o) { Brush_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Brush_getPrototypeOf(o); }
function Brush_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Brush_setPrototypeOf(subClass, superClass); }
function Brush_setPrototypeOf(o, p) { Brush_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Brush_setPrototypeOf(o, p); }
function Brush_defineProperty(obj, key, value) { key = Brush_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Brush_toPropertyKey(t) { var i = Brush_toPrimitive(t, "string"); return "symbol" == Brush_typeof(i) ? i : i + ""; }
function Brush_toPrimitive(t, r) { if ("object" != Brush_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Brush_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview Brush
 */
;










var createScale = function createScale(_ref) {
  var data = _ref.data,
    startIndex = _ref.startIndex,
    endIndex = _ref.endIndex,
    x = _ref.x,
    width = _ref.width,
    travellerWidth = _ref.travellerWidth;
  if (!data || !data.length) {
    return {};
  }
  var len = data.length;
  var scale = (0,band/* point */.z)().domain(range_default()(0, len)).range([x, x + width - travellerWidth]);
  var scaleValues = scale.domain().map(function (entry) {
    return scale(entry);
  });
  return {
    isTextActive: false,
    isSlideMoving: false,
    isTravellerMoving: false,
    isTravellerFocused: false,
    startX: scale(startIndex),
    endX: scale(endIndex),
    scale: scale,
    scaleValues: scaleValues
  };
};
var isTouch = function isTouch(e) {
  return e.changedTouches && !!e.changedTouches.length;
};
var Brush = /*#__PURE__*/function (_PureComponent) {
  function Brush(props) {
    var _this;
    Brush_classCallCheck(this, Brush);
    _this = Brush_callSuper(this, Brush, [props]);
    Brush_defineProperty(_this, "handleDrag", function (e) {
      if (_this.leaveTimer) {
        clearTimeout(_this.leaveTimer);
        _this.leaveTimer = null;
      }
      if (_this.state.isTravellerMoving) {
        _this.handleTravellerMove(e);
      } else if (_this.state.isSlideMoving) {
        _this.handleSlideDrag(e);
      }
    });
    Brush_defineProperty(_this, "handleTouchMove", function (e) {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        _this.handleDrag(e.changedTouches[0]);
      }
    });
    Brush_defineProperty(_this, "handleDragEnd", function () {
      _this.setState({
        isTravellerMoving: false,
        isSlideMoving: false
      }, function () {
        var _this$props = _this.props,
          endIndex = _this$props.endIndex,
          onDragEnd = _this$props.onDragEnd,
          startIndex = _this$props.startIndex;
        onDragEnd === null || onDragEnd === void 0 || onDragEnd({
          endIndex: endIndex,
          startIndex: startIndex
        });
      });
      _this.detachDragEndListener();
    });
    Brush_defineProperty(_this, "handleLeaveWrapper", function () {
      if (_this.state.isTravellerMoving || _this.state.isSlideMoving) {
        _this.leaveTimer = window.setTimeout(_this.handleDragEnd, _this.props.leaveTimeOut);
      }
    });
    Brush_defineProperty(_this, "handleEnterSlideOrTraveller", function () {
      _this.setState({
        isTextActive: true
      });
    });
    Brush_defineProperty(_this, "handleLeaveSlideOrTraveller", function () {
      _this.setState({
        isTextActive: false
      });
    });
    Brush_defineProperty(_this, "handleSlideDragStart", function (e) {
      var event = isTouch(e) ? e.changedTouches[0] : e;
      _this.setState({
        isTravellerMoving: false,
        isSlideMoving: true,
        slideMoveStartX: event.pageX
      });
      _this.attachDragEndListener();
    });
    _this.travellerDragStartHandlers = {
      startX: _this.handleTravellerDragStart.bind(_this, 'startX'),
      endX: _this.handleTravellerDragStart.bind(_this, 'endX')
    };
    _this.state = {};
    return _this;
  }
  Brush_inherits(Brush, _PureComponent);
  return Brush_createClass(Brush, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.leaveTimer) {
        clearTimeout(this.leaveTimer);
        this.leaveTimer = null;
      }
      this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function getIndex(_ref2) {
      var startX = _ref2.startX,
        endX = _ref2.endX;
      var scaleValues = this.state.scaleValues;
      var _this$props2 = this.props,
        gap = _this$props2.gap,
        data = _this$props2.data;
      var lastIndex = data.length - 1;
      var min = Math.min(startX, endX);
      var max = Math.max(startX, endX);
      var minIndex = Brush.getIndexInRange(scaleValues, min);
      var maxIndex = Brush.getIndexInRange(scaleValues, max);
      return {
        startIndex: minIndex - minIndex % gap,
        endIndex: maxIndex === lastIndex ? lastIndex : maxIndex - maxIndex % gap
      };
    }
  }, {
    key: "getTextOfTick",
    value: function getTextOfTick(index) {
      var _this$props3 = this.props,
        data = _this$props3.data,
        tickFormatter = _this$props3.tickFormatter,
        dataKey = _this$props3.dataKey;
      var text = getValueByDataKey(data[index], dataKey, index);
      return isFunction_default()(tickFormatter) ? tickFormatter(text, index) : text;
    }
  }, {
    key: "attachDragEndListener",
    value: function attachDragEndListener() {
      window.addEventListener('mouseup', this.handleDragEnd, true);
      window.addEventListener('touchend', this.handleDragEnd, true);
      window.addEventListener('mousemove', this.handleDrag, true);
    }
  }, {
    key: "detachDragEndListener",
    value: function detachDragEndListener() {
      window.removeEventListener('mouseup', this.handleDragEnd, true);
      window.removeEventListener('touchend', this.handleDragEnd, true);
      window.removeEventListener('mousemove', this.handleDrag, true);
    }
  }, {
    key: "handleSlideDrag",
    value: function handleSlideDrag(e) {
      var _this$state = this.state,
        slideMoveStartX = _this$state.slideMoveStartX,
        startX = _this$state.startX,
        endX = _this$state.endX;
      var _this$props4 = this.props,
        x = _this$props4.x,
        width = _this$props4.width,
        travellerWidth = _this$props4.travellerWidth,
        startIndex = _this$props4.startIndex,
        endIndex = _this$props4.endIndex,
        onChange = _this$props4.onChange;
      var delta = e.pageX - slideMoveStartX;
      if (delta > 0) {
        delta = Math.min(delta, x + width - travellerWidth - endX, x + width - travellerWidth - startX);
      } else if (delta < 0) {
        delta = Math.max(delta, x - startX, x - endX);
      }
      var newIndex = this.getIndex({
        startX: startX + delta,
        endX: endX + delta
      });
      if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
        onChange(newIndex);
      }
      this.setState({
        startX: startX + delta,
        endX: endX + delta,
        slideMoveStartX: e.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function handleTravellerDragStart(id, e) {
      var event = isTouch(e) ? e.changedTouches[0] : e;
      this.setState({
        isSlideMoving: false,
        isTravellerMoving: true,
        movingTravellerId: id,
        brushMoveStartX: event.pageX
      });
      this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function handleTravellerMove(e) {
      var _this$state2 = this.state,
        brushMoveStartX = _this$state2.brushMoveStartX,
        movingTravellerId = _this$state2.movingTravellerId,
        endX = _this$state2.endX,
        startX = _this$state2.startX;
      var prevValue = this.state[movingTravellerId];
      var _this$props5 = this.props,
        x = _this$props5.x,
        width = _this$props5.width,
        travellerWidth = _this$props5.travellerWidth,
        onChange = _this$props5.onChange,
        gap = _this$props5.gap,
        data = _this$props5.data;
      var params = {
        startX: this.state.startX,
        endX: this.state.endX
      };
      var delta = e.pageX - brushMoveStartX;
      if (delta > 0) {
        delta = Math.min(delta, x + width - travellerWidth - prevValue);
      } else if (delta < 0) {
        delta = Math.max(delta, x - prevValue);
      }
      params[movingTravellerId] = prevValue + delta;
      var newIndex = this.getIndex(params);
      var startIndex = newIndex.startIndex,
        endIndex = newIndex.endIndex;
      var isFullGap = function isFullGap() {
        var lastIndex = data.length - 1;
        if (movingTravellerId === 'startX' && (endX > startX ? startIndex % gap === 0 : endIndex % gap === 0) || endX < startX && endIndex === lastIndex || movingTravellerId === 'endX' && (endX > startX ? endIndex % gap === 0 : startIndex % gap === 0) || endX > startX && endIndex === lastIndex) {
          return true;
        }
        return false;
      };
      this.setState(Brush_defineProperty(Brush_defineProperty({}, movingTravellerId, prevValue + delta), "brushMoveStartX", e.pageX), function () {
        if (onChange) {
          if (isFullGap()) {
            onChange(newIndex);
          }
        }
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function handleTravellerMoveKeyboard(direction, id) {
      var _this2 = this;
      // scaleValues are a list of coordinates. For example: [65, 250, 435, 620, 805, 990].
      var _this$state3 = this.state,
        scaleValues = _this$state3.scaleValues,
        startX = _this$state3.startX,
        endX = _this$state3.endX;
      // currentScaleValue refers to which coordinate the current traveller should be placed at.
      var currentScaleValue = this.state[id];
      var currentIndex = scaleValues.indexOf(currentScaleValue);
      if (currentIndex === -1) {
        return;
      }
      var newIndex = currentIndex + direction;
      if (newIndex === -1 || newIndex >= scaleValues.length) {
        return;
      }
      var newScaleValue = scaleValues[newIndex];

      // Prevent travellers from being on top of each other or overlapping
      if (id === 'startX' && newScaleValue >= endX || id === 'endX' && newScaleValue <= startX) {
        return;
      }
      this.setState(Brush_defineProperty({}, id, newScaleValue), function () {
        _this2.props.onChange(_this2.getIndex({
          startX: _this2.state.startX,
          endX: _this2.state.endX
        }));
      });
    }
  }, {
    key: "renderBackground",
    value: function renderBackground() {
      var _this$props6 = this.props,
        x = _this$props6.x,
        y = _this$props6.y,
        width = _this$props6.width,
        height = _this$props6.height,
        fill = _this$props6.fill,
        stroke = _this$props6.stroke;
      return /*#__PURE__*/react.createElement("rect", {
        stroke: stroke,
        fill: fill,
        x: x,
        y: y,
        width: width,
        height: height
      });
    }
  }, {
    key: "renderPanorama",
    value: function renderPanorama() {
      var _this$props7 = this.props,
        x = _this$props7.x,
        y = _this$props7.y,
        width = _this$props7.width,
        height = _this$props7.height,
        data = _this$props7.data,
        children = _this$props7.children,
        padding = _this$props7.padding;
      var chartElement = react.Children.only(children);
      if (!chartElement) {
        return null;
      }
      return /*#__PURE__*/react.cloneElement(chartElement, {
        x: x,
        y: y,
        width: width,
        height: height,
        margin: padding,
        compact: true,
        data: data
      });
    }
  }, {
    key: "renderTravellerLayer",
    value: function renderTravellerLayer(travellerX, id) {
      var _data$startIndex,
        _data$endIndex,
        _this3 = this;
      var _this$props8 = this.props,
        y = _this$props8.y,
        travellerWidth = _this$props8.travellerWidth,
        height = _this$props8.height,
        traveller = _this$props8.traveller,
        ariaLabel = _this$props8.ariaLabel,
        data = _this$props8.data,
        startIndex = _this$props8.startIndex,
        endIndex = _this$props8.endIndex;
      var x = Math.max(travellerX, this.props.x);
      var travellerProps = Brush_objectSpread(Brush_objectSpread({}, filterProps(this.props, false)), {}, {
        x: x,
        y: y,
        width: travellerWidth,
        height: height
      });
      var ariaLabelBrush = ariaLabel || "Min value: ".concat((_data$startIndex = data[startIndex]) === null || _data$startIndex === void 0 ? void 0 : _data$startIndex.name, ", Max value: ").concat((_data$endIndex = data[endIndex]) === null || _data$endIndex === void 0 ? void 0 : _data$endIndex.name);
      return /*#__PURE__*/react.createElement(Layer, {
        tabIndex: 0,
        role: "slider",
        "aria-label": ariaLabelBrush,
        "aria-valuenow": travellerX,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[id],
        onTouchStart: this.travellerDragStartHandlers[id],
        onKeyDown: function onKeyDown(e) {
          if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) {
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          _this3.handleTravellerMoveKeyboard(e.key === 'ArrowRight' ? 1 : -1, id);
        },
        onFocus: function onFocus() {
          _this3.setState({
            isTravellerFocused: true
          });
        },
        onBlur: function onBlur() {
          _this3.setState({
            isTravellerFocused: false
          });
        },
        style: {
          cursor: 'col-resize'
        }
      }, Brush.renderTraveller(traveller, travellerProps));
    }
  }, {
    key: "renderSlide",
    value: function renderSlide(startX, endX) {
      var _this$props9 = this.props,
        y = _this$props9.y,
        height = _this$props9.height,
        stroke = _this$props9.stroke,
        travellerWidth = _this$props9.travellerWidth;
      var x = Math.min(startX, endX) + travellerWidth;
      var width = Math.max(Math.abs(endX - startX) - travellerWidth, 0);
      return /*#__PURE__*/react.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: 'move'
        },
        stroke: "none",
        fill: stroke,
        fillOpacity: 0.2,
        x: x,
        y: y,
        width: width,
        height: height
      });
    }
  }, {
    key: "renderText",
    value: function renderText() {
      var _this$props10 = this.props,
        startIndex = _this$props10.startIndex,
        endIndex = _this$props10.endIndex,
        y = _this$props10.y,
        height = _this$props10.height,
        travellerWidth = _this$props10.travellerWidth,
        stroke = _this$props10.stroke;
      var _this$state4 = this.state,
        startX = _this$state4.startX,
        endX = _this$state4.endX;
      var offset = 5;
      var attrs = {
        pointerEvents: 'none',
        fill: stroke
      };
      return /*#__PURE__*/react.createElement(Layer, {
        className: "recharts-brush-texts"
      }, /*#__PURE__*/react.createElement(Text, Brush_extends({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(startX, endX) - offset,
        y: y + height / 2
      }, attrs), this.getTextOfTick(startIndex)), /*#__PURE__*/react.createElement(Text, Brush_extends({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(startX, endX) + travellerWidth + offset,
        y: y + height / 2
      }, attrs), this.getTextOfTick(endIndex)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props11 = this.props,
        data = _this$props11.data,
        className = _this$props11.className,
        children = _this$props11.children,
        x = _this$props11.x,
        y = _this$props11.y,
        width = _this$props11.width,
        height = _this$props11.height,
        alwaysShowText = _this$props11.alwaysShowText;
      var _this$state5 = this.state,
        startX = _this$state5.startX,
        endX = _this$state5.endX,
        isTextActive = _this$state5.isTextActive,
        isSlideMoving = _this$state5.isSlideMoving,
        isTravellerMoving = _this$state5.isTravellerMoving,
        isTravellerFocused = _this$state5.isTravellerFocused;
      if (!data || !data.length || !isNumber(x) || !isNumber(y) || !isNumber(width) || !isNumber(height) || width <= 0 || height <= 0) {
        return null;
      }
      var layerClass = (0,clsx/* default */.A)('recharts-brush', className);
      var isPanoramic = react.Children.count(children) === 1;
      var style = generatePrefixStyle('userSelect', 'none');
      return /*#__PURE__*/react.createElement(Layer, {
        className: layerClass,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: style
      }, this.renderBackground(), isPanoramic && this.renderPanorama(), this.renderSlide(startX, endX), this.renderTravellerLayer(startX, 'startX'), this.renderTravellerLayer(endX, 'endX'), (isTextActive || isSlideMoving || isTravellerMoving || isTravellerFocused || alwaysShowText) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function renderDefaultTraveller(props) {
      var x = props.x,
        y = props.y,
        width = props.width,
        height = props.height,
        stroke = props.stroke;
      var lineY = Math.floor(y + height / 2) - 1;
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", {
        x: x,
        y: y,
        width: width,
        height: height,
        fill: stroke,
        stroke: "none"
      }), /*#__PURE__*/react.createElement("line", {
        x1: x + 1,
        y1: lineY,
        x2: x + width - 1,
        y2: lineY,
        fill: "none",
        stroke: "#fff"
      }), /*#__PURE__*/react.createElement("line", {
        x1: x + 1,
        y1: lineY + 2,
        x2: x + width - 1,
        y2: lineY + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function renderTraveller(option, props) {
      var rectangle;
      if ( /*#__PURE__*/react.isValidElement(option)) {
        rectangle = /*#__PURE__*/react.cloneElement(option, props);
      } else if (isFunction_default()(option)) {
        rectangle = option(props);
      } else {
        rectangle = Brush.renderDefaultTraveller(props);
      }
      return rectangle;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var data = nextProps.data,
        width = nextProps.width,
        x = nextProps.x,
        travellerWidth = nextProps.travellerWidth,
        updateId = nextProps.updateId,
        startIndex = nextProps.startIndex,
        endIndex = nextProps.endIndex;
      if (data !== prevState.prevData || updateId !== prevState.prevUpdateId) {
        return Brush_objectSpread({
          prevData: data,
          prevTravellerWidth: travellerWidth,
          prevUpdateId: updateId,
          prevX: x,
          prevWidth: width
        }, data && data.length ? createScale({
          data: data,
          width: width,
          x: x,
          travellerWidth: travellerWidth,
          startIndex: startIndex,
          endIndex: endIndex
        }) : {
          scale: null,
          scaleValues: null
        });
      }
      if (prevState.scale && (width !== prevState.prevWidth || x !== prevState.prevX || travellerWidth !== prevState.prevTravellerWidth)) {
        prevState.scale.range([x, x + width - travellerWidth]);
        var scaleValues = prevState.scale.domain().map(function (entry) {
          return prevState.scale(entry);
        });
        return {
          prevData: data,
          prevTravellerWidth: travellerWidth,
          prevUpdateId: updateId,
          prevX: x,
          prevWidth: width,
          startX: prevState.scale(nextProps.startIndex),
          endX: prevState.scale(nextProps.endIndex),
          scaleValues: scaleValues
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function getIndexInRange(valueRange, x) {
      var len = valueRange.length;
      var start = 0;
      var end = len - 1;
      while (end - start > 1) {
        var middle = Math.floor((start + end) / 2);
        if (valueRange[middle] > x) {
          end = middle;
        } else {
          start = middle;
        }
      }
      return x >= valueRange[end] ? end : start;
    }
  }]);
}(react.PureComponent);
Brush_defineProperty(Brush, "displayName", 'Brush');
Brush_defineProperty(Brush, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: '#fff',
  stroke: '#666',
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1000,
  alwaysShowText: false
});
;// ./node_modules/recharts/es6/util/PolarUtils.js
function PolarUtils_typeof(o) { "@babel/helpers - typeof"; return PolarUtils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, PolarUtils_typeof(o); }
function PolarUtils_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function PolarUtils_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? PolarUtils_ownKeys(Object(t), !0).forEach(function (r) { PolarUtils_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : PolarUtils_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function PolarUtils_defineProperty(obj, key, value) { key = PolarUtils_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function PolarUtils_toPropertyKey(t) { var i = PolarUtils_toPrimitive(t, "string"); return "symbol" == PolarUtils_typeof(i) ? i : i + ""; }
function PolarUtils_toPrimitive(t, r) { if ("object" != PolarUtils_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != PolarUtils_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function PolarUtils_slicedToArray(arr, i) { return PolarUtils_arrayWithHoles(arr) || PolarUtils_iterableToArrayLimit(arr, i) || PolarUtils_unsupportedIterableToArray(arr, i) || PolarUtils_nonIterableRest(); }
function PolarUtils_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function PolarUtils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PolarUtils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PolarUtils_arrayLikeToArray(o, minLen); }
function PolarUtils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function PolarUtils_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function PolarUtils_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
;




var PolarUtils_RADIAN = Math.PI / 180;
var degreeToRadian = function degreeToRadian(angle) {
  return angle * Math.PI / 180;
};
var radianToDegree = function radianToDegree(angleInRadian) {
  return angleInRadian * 180 / Math.PI;
};
var polarToCartesian = function polarToCartesian(cx, cy, radius, angle) {
  return {
    x: cx + Math.cos(-PolarUtils_RADIAN * angle) * radius,
    y: cy + Math.sin(-PolarUtils_RADIAN * angle) * radius
  };
};
var getMaxRadius = function getMaxRadius(width, height) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(width - (offset.left || 0) - (offset.right || 0)), Math.abs(height - (offset.top || 0) - (offset.bottom || 0))) / 2;
};

/**
 * Calculate the scale function, position, width, height of axes
 * @param  {Object} props     Latest props
 * @param  {Object} axisMap   The configuration of axes
 * @param  {Object} offset    The offset of main part in the svg element
 * @param  {Object} axisType  The type of axes, radius-axis or angle-axis
 * @param  {String} chartName The name of chart
 * @return {Object} Configuration
 */
var formatAxisMap = function formatAxisMap(props, axisMap, offset, axisType, chartName) {
  var width = props.width,
    height = props.height;
  var startAngle = props.startAngle,
    endAngle = props.endAngle;
  var cx = getPercentValue(props.cx, width, width / 2);
  var cy = getPercentValue(props.cy, height, height / 2);
  var maxRadius = getMaxRadius(width, height, offset);
  var innerRadius = getPercentValue(props.innerRadius, maxRadius, 0);
  var outerRadius = getPercentValue(props.outerRadius, maxRadius, maxRadius * 0.8);
  var ids = Object.keys(axisMap);
  return ids.reduce(function (result, id) {
    var axis = axisMap[id];
    var domain = axis.domain,
      reversed = axis.reversed;
    var range;
    if (isNil_default()(axis.range)) {
      if (axisType === 'angleAxis') {
        range = [startAngle, endAngle];
      } else if (axisType === 'radiusAxis') {
        range = [innerRadius, outerRadius];
      }
      if (reversed) {
        range = [range[1], range[0]];
      }
    } else {
      range = axis.range;
      var _range = range;
      var _range2 = PolarUtils_slicedToArray(_range, 2);
      startAngle = _range2[0];
      endAngle = _range2[1];
    }
    var _parseScale = parseScale(axis, chartName),
      realScaleType = _parseScale.realScaleType,
      scale = _parseScale.scale;
    scale.domain(domain).range(range);
    checkDomainOfScale(scale);
    var ticks = getTicksOfScale(scale, PolarUtils_objectSpread(PolarUtils_objectSpread({}, axis), {}, {
      realScaleType: realScaleType
    }));
    var finalAxis = PolarUtils_objectSpread(PolarUtils_objectSpread(PolarUtils_objectSpread({}, axis), ticks), {}, {
      range: range,
      radius: outerRadius,
      realScaleType: realScaleType,
      scale: scale,
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      startAngle: startAngle,
      endAngle: endAngle
    });
    return PolarUtils_objectSpread(PolarUtils_objectSpread({}, result), {}, PolarUtils_defineProperty({}, id, finalAxis));
  }, {});
};
var distanceBetweenPoints = function distanceBetweenPoints(point, anotherPoint) {
  var x1 = point.x,
    y1 = point.y;
  var x2 = anotherPoint.x,
    y2 = anotherPoint.y;
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};
var getAngleOfPoint = function getAngleOfPoint(_ref, _ref2) {
  var x = _ref.x,
    y = _ref.y;
  var cx = _ref2.cx,
    cy = _ref2.cy;
  var radius = distanceBetweenPoints({
    x: x,
    y: y
  }, {
    x: cx,
    y: cy
  });
  if (radius <= 0) {
    return {
      radius: radius
    };
  }
  var cos = (x - cx) / radius;
  var angleInRadian = Math.acos(cos);
  if (y > cy) {
    angleInRadian = 2 * Math.PI - angleInRadian;
  }
  return {
    radius: radius,
    angle: radianToDegree(angleInRadian),
    angleInRadian: angleInRadian
  };
};
var formatAngleOfSector = function formatAngleOfSector(_ref3) {
  var startAngle = _ref3.startAngle,
    endAngle = _ref3.endAngle;
  var startCnt = Math.floor(startAngle / 360);
  var endCnt = Math.floor(endAngle / 360);
  var min = Math.min(startCnt, endCnt);
  return {
    startAngle: startAngle - min * 360,
    endAngle: endAngle - min * 360
  };
};
var reverseFormatAngleOfSetor = function reverseFormatAngleOfSetor(angle, _ref4) {
  var startAngle = _ref4.startAngle,
    endAngle = _ref4.endAngle;
  var startCnt = Math.floor(startAngle / 360);
  var endCnt = Math.floor(endAngle / 360);
  var min = Math.min(startCnt, endCnt);
  return angle + min * 360;
};
var inRangeOfSector = function inRangeOfSector(_ref5, sector) {
  var x = _ref5.x,
    y = _ref5.y;
  var _getAngleOfPoint = getAngleOfPoint({
      x: x,
      y: y
    }, sector),
    radius = _getAngleOfPoint.radius,
    angle = _getAngleOfPoint.angle;
  var innerRadius = sector.innerRadius,
    outerRadius = sector.outerRadius;
  if (radius < innerRadius || radius > outerRadius) {
    return false;
  }
  if (radius === 0) {
    return true;
  }
  var _formatAngleOfSector = formatAngleOfSector(sector),
    startAngle = _formatAngleOfSector.startAngle,
    endAngle = _formatAngleOfSector.endAngle;
  var formatAngle = angle;
  var inRange;
  if (startAngle <= endAngle) {
    while (formatAngle > endAngle) {
      formatAngle -= 360;
    }
    while (formatAngle < startAngle) {
      formatAngle += 360;
    }
    inRange = formatAngle >= startAngle && formatAngle <= endAngle;
  } else {
    while (formatAngle > startAngle) {
      formatAngle -= 360;
    }
    while (formatAngle < endAngle) {
      formatAngle += 360;
    }
    inRange = formatAngle >= endAngle && formatAngle <= startAngle;
  }
  if (inRange) {
    return PolarUtils_objectSpread(PolarUtils_objectSpread({}, sector), {}, {
      radius: radius,
      angle: reverseFormatAngleOfSetor(formatAngle, sector)
    });
  }
  return null;
};
var getTickClassName = function getTickClassName(tick) {
  return ! /*#__PURE__*/(0,react.isValidElement)(tick) && !isFunction_default()(tick) && typeof tick !== 'boolean' ? tick.className : '';
};
;// ./node_modules/recharts/es6/component/Label.js
function Label_typeof(o) { "@babel/helpers - typeof"; return Label_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Label_typeof(o); }
var Label_excluded = ["offset"];
function Label_toConsumableArray(arr) { return Label_arrayWithoutHoles(arr) || Label_iterableToArray(arr) || Label_unsupportedIterableToArray(arr) || Label_nonIterableSpread(); }
function Label_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Label_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Label_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Label_arrayLikeToArray(o, minLen); }
function Label_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Label_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Label_arrayLikeToArray(arr); }
function Label_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Label_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Label_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Label_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function Label_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Label_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Label_ownKeys(Object(t), !0).forEach(function (r) { Label_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Label_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Label_defineProperty(obj, key, value) { key = Label_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Label_toPropertyKey(t) { var i = Label_toPrimitive(t, "string"); return "symbol" == Label_typeof(i) ? i : i + ""; }
function Label_toPrimitive(t, r) { if ("object" != Label_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Label_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Label_extends() { Label_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Label_extends.apply(this, arguments); }
;








var getLabel = function getLabel(props) {
  var value = props.value,
    formatter = props.formatter;
  var label = isNil_default()(props.children) ? value : props.children;
  if (isFunction_default()(formatter)) {
    return formatter(label);
  }
  return label;
};
var getDeltaAngle = function getDeltaAngle(startAngle, endAngle) {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  return sign * deltaAngle;
};
var renderRadialLabel = function renderRadialLabel(labelProps, label, attrs) {
  var position = labelProps.position,
    viewBox = labelProps.viewBox,
    offset = labelProps.offset,
    className = labelProps.className;
  var _ref = viewBox,
    cx = _ref.cx,
    cy = _ref.cy,
    innerRadius = _ref.innerRadius,
    outerRadius = _ref.outerRadius,
    startAngle = _ref.startAngle,
    endAngle = _ref.endAngle,
    clockWise = _ref.clockWise;
  var radius = (innerRadius + outerRadius) / 2;
  var deltaAngle = getDeltaAngle(startAngle, endAngle);
  var sign = deltaAngle >= 0 ? 1 : -1;
  var labelAngle, direction;
  if (position === 'insideStart') {
    labelAngle = startAngle + sign * offset;
    direction = clockWise;
  } else if (position === 'insideEnd') {
    labelAngle = endAngle - sign * offset;
    direction = !clockWise;
  } else if (position === 'end') {
    labelAngle = endAngle + sign * offset;
    direction = clockWise;
  }
  direction = deltaAngle <= 0 ? direction : !direction;
  var startPoint = polarToCartesian(cx, cy, radius, labelAngle);
  var endPoint = polarToCartesian(cx, cy, radius, labelAngle + (direction ? 1 : -1) * 359);
  var path = "M".concat(startPoint.x, ",").concat(startPoint.y, "\n    A").concat(radius, ",").concat(radius, ",0,1,").concat(direction ? 0 : 1, ",\n    ").concat(endPoint.x, ",").concat(endPoint.y);
  var id = isNil_default()(labelProps.id) ? uniqueId('recharts-radial-line-') : labelProps.id;
  return /*#__PURE__*/react.createElement("text", Label_extends({}, attrs, {
    dominantBaseline: "central",
    className: (0,clsx/* default */.A)('recharts-radial-bar-label', className)
  }), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: id,
    d: path
  })), /*#__PURE__*/react.createElement("textPath", {
    xlinkHref: "#".concat(id)
  }, label));
};
var getAttrsOfPolarLabel = function getAttrsOfPolarLabel(props) {
  var viewBox = props.viewBox,
    offset = props.offset,
    position = props.position;
  var _ref2 = viewBox,
    cx = _ref2.cx,
    cy = _ref2.cy,
    innerRadius = _ref2.innerRadius,
    outerRadius = _ref2.outerRadius,
    startAngle = _ref2.startAngle,
    endAngle = _ref2.endAngle;
  var midAngle = (startAngle + endAngle) / 2;
  if (position === 'outside') {
    var _polarToCartesian = polarToCartesian(cx, cy, outerRadius + offset, midAngle),
      _x = _polarToCartesian.x,
      _y = _polarToCartesian.y;
    return {
      x: _x,
      y: _y,
      textAnchor: _x >= cx ? 'start' : 'end',
      verticalAnchor: 'middle'
    };
  }
  if (position === 'center') {
    return {
      x: cx,
      y: cy,
      textAnchor: 'middle',
      verticalAnchor: 'middle'
    };
  }
  if (position === 'centerTop') {
    return {
      x: cx,
      y: cy,
      textAnchor: 'middle',
      verticalAnchor: 'start'
    };
  }
  if (position === 'centerBottom') {
    return {
      x: cx,
      y: cy,
      textAnchor: 'middle',
      verticalAnchor: 'end'
    };
  }
  var r = (innerRadius + outerRadius) / 2;
  var _polarToCartesian2 = polarToCartesian(cx, cy, r, midAngle),
    x = _polarToCartesian2.x,
    y = _polarToCartesian2.y;
  return {
    x: x,
    y: y,
    textAnchor: 'middle',
    verticalAnchor: 'middle'
  };
};
var getAttrsOfCartesianLabel = function getAttrsOfCartesianLabel(props) {
  var viewBox = props.viewBox,
    parentViewBox = props.parentViewBox,
    offset = props.offset,
    position = props.position;
  var _ref3 = viewBox,
    x = _ref3.x,
    y = _ref3.y,
    width = _ref3.width,
    height = _ref3.height;

  // Define vertical offsets and position inverts based on the value being positive or negative
  var verticalSign = height >= 0 ? 1 : -1;
  var verticalOffset = verticalSign * offset;
  var verticalEnd = verticalSign > 0 ? 'end' : 'start';
  var verticalStart = verticalSign > 0 ? 'start' : 'end';

  // Define horizontal offsets and position inverts based on the value being positive or negative
  var horizontalSign = width >= 0 ? 1 : -1;
  var horizontalOffset = horizontalSign * offset;
  var horizontalEnd = horizontalSign > 0 ? 'end' : 'start';
  var horizontalStart = horizontalSign > 0 ? 'start' : 'end';
  if (position === 'top') {
    var attrs = {
      x: x + width / 2,
      y: y - verticalSign * offset,
      textAnchor: 'middle',
      verticalAnchor: verticalEnd
    };
    return Label_objectSpread(Label_objectSpread({}, attrs), parentViewBox ? {
      height: Math.max(y - parentViewBox.y, 0),
      width: width
    } : {});
  }
  if (position === 'bottom') {
    var _attrs = {
      x: x + width / 2,
      y: y + height + verticalOffset,
      textAnchor: 'middle',
      verticalAnchor: verticalStart
    };
    return Label_objectSpread(Label_objectSpread({}, _attrs), parentViewBox ? {
      height: Math.max(parentViewBox.y + parentViewBox.height - (y + height), 0),
      width: width
    } : {});
  }
  if (position === 'left') {
    var _attrs2 = {
      x: x - horizontalOffset,
      y: y + height / 2,
      textAnchor: horizontalEnd,
      verticalAnchor: 'middle'
    };
    return Label_objectSpread(Label_objectSpread({}, _attrs2), parentViewBox ? {
      width: Math.max(_attrs2.x - parentViewBox.x, 0),
      height: height
    } : {});
  }
  if (position === 'right') {
    var _attrs3 = {
      x: x + width + horizontalOffset,
      y: y + height / 2,
      textAnchor: horizontalStart,
      verticalAnchor: 'middle'
    };
    return Label_objectSpread(Label_objectSpread({}, _attrs3), parentViewBox ? {
      width: Math.max(parentViewBox.x + parentViewBox.width - _attrs3.x, 0),
      height: height
    } : {});
  }
  var sizeAttrs = parentViewBox ? {
    width: width,
    height: height
  } : {};
  if (position === 'insideLeft') {
    return Label_objectSpread({
      x: x + horizontalOffset,
      y: y + height / 2,
      textAnchor: horizontalStart,
      verticalAnchor: 'middle'
    }, sizeAttrs);
  }
  if (position === 'insideRight') {
    return Label_objectSpread({
      x: x + width - horizontalOffset,
      y: y + height / 2,
      textAnchor: horizontalEnd,
      verticalAnchor: 'middle'
    }, sizeAttrs);
  }
  if (position === 'insideTop') {
    return Label_objectSpread({
      x: x + width / 2,
      y: y + verticalOffset,
      textAnchor: 'middle',
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }
  if (position === 'insideBottom') {
    return Label_objectSpread({
      x: x + width / 2,
      y: y + height - verticalOffset,
      textAnchor: 'middle',
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }
  if (position === 'insideTopLeft') {
    return Label_objectSpread({
      x: x + horizontalOffset,
      y: y + verticalOffset,
      textAnchor: horizontalStart,
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }
  if (position === 'insideTopRight') {
    return Label_objectSpread({
      x: x + width - horizontalOffset,
      y: y + verticalOffset,
      textAnchor: horizontalEnd,
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }
  if (position === 'insideBottomLeft') {
    return Label_objectSpread({
      x: x + horizontalOffset,
      y: y + height - verticalOffset,
      textAnchor: horizontalStart,
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }
  if (position === 'insideBottomRight') {
    return Label_objectSpread({
      x: x + width - horizontalOffset,
      y: y + height - verticalOffset,
      textAnchor: horizontalEnd,
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }
  if (isObject_default()(position) && (isNumber(position.x) || isPercent(position.x)) && (isNumber(position.y) || isPercent(position.y))) {
    return Label_objectSpread({
      x: x + getPercentValue(position.x, width),
      y: y + getPercentValue(position.y, height),
      textAnchor: 'end',
      verticalAnchor: 'end'
    }, sizeAttrs);
  }
  return Label_objectSpread({
    x: x + width / 2,
    y: y + height / 2,
    textAnchor: 'middle',
    verticalAnchor: 'middle'
  }, sizeAttrs);
};
var isPolar = function isPolar(viewBox) {
  return 'cx' in viewBox && isNumber(viewBox.cx);
};
function Label(_ref4) {
  var _ref4$offset = _ref4.offset,
    offset = _ref4$offset === void 0 ? 5 : _ref4$offset,
    restProps = Label_objectWithoutProperties(_ref4, Label_excluded);
  var props = Label_objectSpread({
    offset: offset
  }, restProps);
  var viewBox = props.viewBox,
    position = props.position,
    value = props.value,
    children = props.children,
    content = props.content,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    textBreakAll = props.textBreakAll;
  if (!viewBox || isNil_default()(value) && isNil_default()(children) && ! /*#__PURE__*/(0,react.isValidElement)(content) && !isFunction_default()(content)) {
    return null;
  }
  if ( /*#__PURE__*/(0,react.isValidElement)(content)) {
    return /*#__PURE__*/(0,react.cloneElement)(content, props);
  }
  var label;
  if (isFunction_default()(content)) {
    label = /*#__PURE__*/(0,react.createElement)(content, props);
    if ( /*#__PURE__*/(0,react.isValidElement)(label)) {
      return label;
    }
  } else {
    label = getLabel(props);
  }
  var isPolarLabel = isPolar(viewBox);
  var attrs = filterProps(props, true);
  if (isPolarLabel && (position === 'insideStart' || position === 'insideEnd' || position === 'end')) {
    return renderRadialLabel(props, label, attrs);
  }
  var positionAttrs = isPolarLabel ? getAttrsOfPolarLabel(props) : getAttrsOfCartesianLabel(props);
  return /*#__PURE__*/react.createElement(Text, Label_extends({
    className: (0,clsx/* default */.A)('recharts-label', className)
  }, attrs, positionAttrs, {
    breakAll: textBreakAll
  }), label);
}
Label.displayName = 'Label';
var parseViewBox = function parseViewBox(props) {
  var cx = props.cx,
    cy = props.cy,
    angle = props.angle,
    startAngle = props.startAngle,
    endAngle = props.endAngle,
    r = props.r,
    radius = props.radius,
    innerRadius = props.innerRadius,
    outerRadius = props.outerRadius,
    x = props.x,
    y = props.y,
    top = props.top,
    left = props.left,
    width = props.width,
    height = props.height,
    clockWise = props.clockWise,
    labelViewBox = props.labelViewBox;
  if (labelViewBox) {
    return labelViewBox;
  }
  if (isNumber(width) && isNumber(height)) {
    if (isNumber(x) && isNumber(y)) {
      return {
        x: x,
        y: y,
        width: width,
        height: height
      };
    }
    if (isNumber(top) && isNumber(left)) {
      return {
        x: top,
        y: left,
        width: width,
        height: height
      };
    }
  }
  if (isNumber(x) && isNumber(y)) {
    return {
      x: x,
      y: y,
      width: 0,
      height: 0
    };
  }
  if (isNumber(cx) && isNumber(cy)) {
    return {
      cx: cx,
      cy: cy,
      startAngle: startAngle || angle || 0,
      endAngle: endAngle || angle || 0,
      innerRadius: innerRadius || 0,
      outerRadius: outerRadius || radius || r || 0,
      clockWise: clockWise
    };
  }
  if (props.viewBox) {
    return props.viewBox;
  }
  return {};
};
var parseLabel = function parseLabel(label, viewBox) {
  if (!label) {
    return null;
  }
  if (label === true) {
    return /*#__PURE__*/react.createElement(Label, {
      key: "label-implicit",
      viewBox: viewBox
    });
  }
  if (isNumOrStr(label)) {
    return /*#__PURE__*/react.createElement(Label, {
      key: "label-implicit",
      viewBox: viewBox,
      value: label
    });
  }
  if ( /*#__PURE__*/(0,react.isValidElement)(label)) {
    if (label.type === Label) {
      return /*#__PURE__*/(0,react.cloneElement)(label, {
        key: 'label-implicit',
        viewBox: viewBox
      });
    }
    return /*#__PURE__*/react.createElement(Label, {
      key: "label-implicit",
      content: label,
      viewBox: viewBox
    });
  }
  if (isFunction_default()(label)) {
    return /*#__PURE__*/react.createElement(Label, {
      key: "label-implicit",
      content: label,
      viewBox: viewBox
    });
  }
  if (isObject_default()(label)) {
    return /*#__PURE__*/react.createElement(Label, Label_extends({
      viewBox: viewBox
    }, label, {
      key: "label-implicit"
    }));
  }
  return null;
};
var renderCallByParent = function renderCallByParent(parentProps, viewBox) {
  var checkPropsLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!parentProps || !parentProps.children && checkPropsLabel && !parentProps.label) {
    return null;
  }
  var children = parentProps.children;
  var parentViewBox = parseViewBox(parentProps);
  var explicitChildren = findAllByType(children, Label).map(function (child, index) {
    return /*#__PURE__*/(0,react.cloneElement)(child, {
      viewBox: viewBox || parentViewBox,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(index)
    });
  });
  if (!checkPropsLabel) {
    return explicitChildren;
  }
  var implicitLabel = parseLabel(parentProps.label, viewBox || parentViewBox);
  return [implicitLabel].concat(Label_toConsumableArray(explicitChildren));
};
Label.parseViewBox = parseViewBox;
Label.renderCallByParent = renderCallByParent;
;// ./node_modules/recharts/es6/util/IfOverflowMatches.js
var ifOverflowMatches = function ifOverflowMatches(props, value) {
  var alwaysShow = props.alwaysShow;
  var ifOverflow = props.ifOverflow;
  if (alwaysShow) {
    ifOverflow = 'extendDomain';
  }
  return ifOverflow === value;
};
// EXTERNAL MODULE: ./node_modules/lodash/mapValues.js
var mapValues = __webpack_require__(73916);
var mapValues_default = /*#__PURE__*/__webpack_require__.n(mapValues);
// EXTERNAL MODULE: ./node_modules/lodash/every.js
var every = __webpack_require__(19747);
var every_default = /*#__PURE__*/__webpack_require__.n(every);
;// ./node_modules/recharts/es6/util/CartesianUtils.js
/* unused harmony import specifier */ var CartesianUtils_parseScale;
/* unused harmony import specifier */ var CartesianUtils_checkDomainOfScale;
/* unused harmony import specifier */ var CartesianUtils_getTicksOfScale;
/* unused harmony import specifier */ var CartesianUtils_getBandSizeOfAxis;
/* unused harmony import specifier */ var CartesianUtils_findChildByType;
/* unused harmony import specifier */ var CartesianUtils_compareValues;
/* unused harmony import specifier */ var CartesianUtils_getPercentValue;
/* unused harmony import specifier */ var Bar;
function CartesianUtils_typeof(o) { "@babel/helpers - typeof"; return CartesianUtils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CartesianUtils_typeof(o); }
function CartesianUtils_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function CartesianUtils_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, CartesianUtils_toPropertyKey(descriptor.key), descriptor); } }
function CartesianUtils_createClass(Constructor, protoProps, staticProps) { if (protoProps) CartesianUtils_defineProperties(Constructor.prototype, protoProps); if (staticProps) CartesianUtils_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function CartesianUtils_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function CartesianUtils_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? CartesianUtils_ownKeys(Object(t), !0).forEach(function (r) { CartesianUtils_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : CartesianUtils_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function CartesianUtils_defineProperty(obj, key, value) { key = CartesianUtils_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function CartesianUtils_toPropertyKey(t) { var i = CartesianUtils_toPrimitive(t, "string"); return "symbol" == CartesianUtils_typeof(i) ? i : i + ""; }
function CartesianUtils_toPrimitive(t, r) { if ("object" != CartesianUtils_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != CartesianUtils_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;






/**
 * Calculate the scale function, position, width, height of axes
 * @param  {Object} props     Latest props
 * @param  {Object} axisMap   The configuration of axes
 * @param  {Object} offset    The offset of main part in the svg element
 * @param  {String} axisType  The type of axes, x-axis or y-axis
 * @param  {String} chartName The name of chart
 * @return {Object} Configuration
 */
var CartesianUtils_formatAxisMap = function formatAxisMap(props, axisMap, offset, axisType, chartName) {
  var width = props.width,
    height = props.height,
    layout = props.layout,
    children = props.children;
  var ids = Object.keys(axisMap);
  var steps = {
    left: offset.left,
    leftMirror: offset.left,
    right: width - offset.right,
    rightMirror: width - offset.right,
    top: offset.top,
    topMirror: offset.top,
    bottom: height - offset.bottom,
    bottomMirror: height - offset.bottom
  };
  var hasBar = !!CartesianUtils_findChildByType(children, Bar);
  return ids.reduce(function (result, id) {
    var axis = axisMap[id];
    var orientation = axis.orientation,
      domain = axis.domain,
      _axis$padding = axis.padding,
      padding = _axis$padding === void 0 ? {} : _axis$padding,
      mirror = axis.mirror,
      reversed = axis.reversed;
    var offsetKey = "".concat(orientation).concat(mirror ? 'Mirror' : '');
    var calculatedPadding, range, x, y, needSpace;
    if (axis.type === 'number' && (axis.padding === 'gap' || axis.padding === 'no-gap')) {
      var diff = domain[1] - domain[0];
      var smallestDistanceBetweenValues = Infinity;
      var sortedValues = axis.categoricalDomain.sort(CartesianUtils_compareValues);
      sortedValues.forEach(function (value, index) {
        if (index > 0) {
          smallestDistanceBetweenValues = Math.min((value || 0) - (sortedValues[index - 1] || 0), smallestDistanceBetweenValues);
        }
      });
      if (Number.isFinite(smallestDistanceBetweenValues)) {
        var smallestDistanceInPercent = smallestDistanceBetweenValues / diff;
        var rangeWidth = axis.layout === 'vertical' ? offset.height : offset.width;
        if (axis.padding === 'gap') {
          calculatedPadding = smallestDistanceInPercent * rangeWidth / 2;
        }
        if (axis.padding === 'no-gap') {
          var gap = CartesianUtils_getPercentValue(props.barCategoryGap, smallestDistanceInPercent * rangeWidth);
          var halfBand = smallestDistanceInPercent * rangeWidth / 2;
          calculatedPadding = halfBand - gap - (halfBand - gap) / rangeWidth * gap;
        }
      }
    }
    if (axisType === 'xAxis') {
      range = [offset.left + (padding.left || 0) + (calculatedPadding || 0), offset.left + offset.width - (padding.right || 0) - (calculatedPadding || 0)];
    } else if (axisType === 'yAxis') {
      range = layout === 'horizontal' ? [offset.top + offset.height - (padding.bottom || 0), offset.top + (padding.top || 0)] : [offset.top + (padding.top || 0) + (calculatedPadding || 0), offset.top + offset.height - (padding.bottom || 0) - (calculatedPadding || 0)];
    } else {
      range = axis.range;
    }
    if (reversed) {
      range = [range[1], range[0]];
    }
    var _parseScale = CartesianUtils_parseScale(axis, chartName, hasBar),
      scale = _parseScale.scale,
      realScaleType = _parseScale.realScaleType;
    scale.domain(domain).range(range);
    CartesianUtils_checkDomainOfScale(scale);
    var ticks = CartesianUtils_getTicksOfScale(scale, CartesianUtils_objectSpread(CartesianUtils_objectSpread({}, axis), {}, {
      realScaleType: realScaleType
    }));
    if (axisType === 'xAxis') {
      needSpace = orientation === 'top' && !mirror || orientation === 'bottom' && mirror;
      x = offset.left;
      y = steps[offsetKey] - needSpace * axis.height;
    } else if (axisType === 'yAxis') {
      needSpace = orientation === 'left' && !mirror || orientation === 'right' && mirror;
      x = steps[offsetKey] - needSpace * axis.width;
      y = offset.top;
    }
    var finalAxis = CartesianUtils_objectSpread(CartesianUtils_objectSpread(CartesianUtils_objectSpread({}, axis), ticks), {}, {
      realScaleType: realScaleType,
      x: x,
      y: y,
      scale: scale,
      width: axisType === 'xAxis' ? offset.width : axis.width,
      height: axisType === 'yAxis' ? offset.height : axis.height
    });
    finalAxis.bandSize = CartesianUtils_getBandSizeOfAxis(finalAxis, ticks);
    if (!axis.hide && axisType === 'xAxis') {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.height;
    } else if (!axis.hide) {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.width;
    }
    return CartesianUtils_objectSpread(CartesianUtils_objectSpread({}, result), {}, CartesianUtils_defineProperty({}, id, finalAxis));
  }, {});
};
var rectWithPoints = function rectWithPoints(_ref, _ref2) {
  var x1 = _ref.x,
    y1 = _ref.y;
  var x2 = _ref2.x,
    y2 = _ref2.y;
  return {
    x: Math.min(x1, x2),
    y: Math.min(y1, y2),
    width: Math.abs(x2 - x1),
    height: Math.abs(y2 - y1)
  };
};

/**
 * Compute the x, y, width, and height of a box from two reference points.
 * @param  {Object} coords     x1, x2, y1, and y2
 * @return {Object} object
 */
var rectWithCoords = function rectWithCoords(_ref3) {
  var x1 = _ref3.x1,
    y1 = _ref3.y1,
    x2 = _ref3.x2,
    y2 = _ref3.y2;
  return rectWithPoints({
    x: x1,
    y: y1
  }, {
    x: x2,
    y: y2
  });
};
var ScaleHelper = /*#__PURE__*/function () {
  function ScaleHelper(scale) {
    CartesianUtils_classCallCheck(this, ScaleHelper);
    this.scale = scale;
  }
  return CartesianUtils_createClass(ScaleHelper, [{
    key: "domain",
    get: function get() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function get() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function get() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function get() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function get() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function apply(value) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        bandAware = _ref4.bandAware,
        position = _ref4.position;
      if (value === undefined) {
        return undefined;
      }
      if (position) {
        switch (position) {
          case 'start':
            {
              return this.scale(value);
            }
          case 'middle':
            {
              var offset = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(value) + offset;
            }
          case 'end':
            {
              var _offset = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(value) + _offset;
            }
          default:
            {
              return this.scale(value);
            }
        }
      }
      if (bandAware) {
        var _offset2 = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(value) + _offset2;
      }
      return this.scale(value);
    }
  }, {
    key: "isInRange",
    value: function isInRange(value) {
      var range = this.range();
      var first = range[0];
      var last = range[range.length - 1];
      return first <= last ? value >= first && value <= last : value >= last && value <= first;
    }
  }], [{
    key: "create",
    value: function create(obj) {
      return new ScaleHelper(obj);
    }
  }]);
}();
CartesianUtils_defineProperty(ScaleHelper, "EPS", 1e-4);
var createLabeledScales = function createLabeledScales(options) {
  var scales = Object.keys(options).reduce(function (res, key) {
    return CartesianUtils_objectSpread(CartesianUtils_objectSpread({}, res), {}, CartesianUtils_defineProperty({}, key, ScaleHelper.create(options[key])));
  }, {});
  return CartesianUtils_objectSpread(CartesianUtils_objectSpread({}, scales), {}, {
    apply: function apply(coord) {
      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        bandAware = _ref5.bandAware,
        position = _ref5.position;
      return mapValues_default()(coord, function (value, label) {
        return scales[label].apply(value, {
          bandAware: bandAware,
          position: position
        });
      });
    },
    isInRange: function isInRange(coord) {
      return every_default()(coord, function (value, label) {
        return scales[label].isInRange(value);
      });
    }
  });
};

/** Normalizes the angle so that 0 <= angle < 180.
 * @param {number} angle Angle in degrees.
 * @return {number} the normalized angle with a value of at least 0 and never greater or equal to 180. */
function normalizeAngle(angle) {
  return (angle % 180 + 180) % 180;
}

/** Calculates the width of the largest horizontal line that fits inside a rectangle that is displayed at an angle.
 * @param {Object} size Width and height of the text in a horizontal position.
 * @param {number} angle Angle in degrees in which the text is displayed.
 * @return {number} The width of the largest horizontal line that fits inside a rectangle that is displayed at an angle.
 */
var getAngledRectangleWidth = function getAngledRectangleWidth(_ref6) {
  var width = _ref6.width,
    height = _ref6.height;
  var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Ensure angle is >= 0 && < 180
  var normalizedAngle = normalizeAngle(angle);
  var angleRadians = normalizedAngle * Math.PI / 180;

  /* Depending on the height and width of the rectangle, we may need to use different formulas to calculate the angled
   * width. This threshold defines when each formula should kick in. */
  var angleThreshold = Math.atan(height / width);
  var angledWidth = angleRadians > angleThreshold && angleRadians < Math.PI - angleThreshold ? height / Math.sin(angleRadians) : width / Math.cos(angleRadians);
  return Math.abs(angledWidth);
};
;// ./node_modules/recharts/es6/cartesian/ReferenceDot.js
function ReferenceDot_extends() { ReferenceDot_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ReferenceDot_extends.apply(this, arguments); }
function ReferenceDot_typeof(o) { "@babel/helpers - typeof"; return ReferenceDot_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ReferenceDot_typeof(o); }
function ReferenceDot_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ReferenceDot_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ReferenceDot_ownKeys(Object(t), !0).forEach(function (r) { ReferenceDot_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ReferenceDot_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ReferenceDot_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ReferenceDot_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ReferenceDot_toPropertyKey(descriptor.key), descriptor); } }
function ReferenceDot_createClass(Constructor, protoProps, staticProps) { if (protoProps) ReferenceDot_defineProperties(Constructor.prototype, protoProps); if (staticProps) ReferenceDot_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ReferenceDot_callSuper(t, o, e) { return o = ReferenceDot_getPrototypeOf(o), ReferenceDot_possibleConstructorReturn(t, ReferenceDot_isNativeReflectConstruct() ? Reflect.construct(o, e || [], ReferenceDot_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ReferenceDot_possibleConstructorReturn(self, call) { if (call && (ReferenceDot_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ReferenceDot_assertThisInitialized(self); }
function ReferenceDot_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function ReferenceDot_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ReferenceDot_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ReferenceDot_getPrototypeOf(o) { ReferenceDot_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ReferenceDot_getPrototypeOf(o); }
function ReferenceDot_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ReferenceDot_setPrototypeOf(subClass, superClass); }
function ReferenceDot_setPrototypeOf(o, p) { ReferenceDot_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ReferenceDot_setPrototypeOf(o, p); }
function ReferenceDot_defineProperty(obj, key, value) { key = ReferenceDot_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ReferenceDot_toPropertyKey(t) { var i = ReferenceDot_toPrimitive(t, "string"); return "symbol" == ReferenceDot_typeof(i) ? i : i + ""; }
function ReferenceDot_toPrimitive(t, r) { if ("object" != ReferenceDot_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ReferenceDot_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview Reference Dot
 */
;










var getCoordinate = function getCoordinate(props) {
  var x = props.x,
    y = props.y,
    xAxis = props.xAxis,
    yAxis = props.yAxis;
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var result = scales.apply({
    x: x,
    y: y
  }, {
    bandAware: true
  });
  if (ifOverflowMatches(props, 'discard') && !scales.isInRange(result)) {
    return null;
  }
  return result;
};

// eslint-disable-next-line react/prefer-stateless-function -- requires static defaultProps
var ReferenceDot = /*#__PURE__*/function (_React$Component) {
  function ReferenceDot() {
    ReferenceDot_classCallCheck(this, ReferenceDot);
    return ReferenceDot_callSuper(this, ReferenceDot, arguments);
  }
  ReferenceDot_inherits(ReferenceDot, _React$Component);
  return ReferenceDot_createClass(ReferenceDot, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        x = _this$props.x,
        y = _this$props.y,
        r = _this$props.r,
        alwaysShow = _this$props.alwaysShow,
        clipPathId = _this$props.clipPathId;
      var isX = isNumOrStr(x);
      var isY = isNumOrStr(y);
      warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      if (!isX || !isY) {
        return null;
      }
      var coordinate = getCoordinate(this.props);
      if (!coordinate) {
        return null;
      }
      var cx = coordinate.x,
        cy = coordinate.y;
      var _this$props2 = this.props,
        shape = _this$props2.shape,
        className = _this$props2.className;
      var clipPath = ifOverflowMatches(this.props, 'hidden') ? "url(#".concat(clipPathId, ")") : undefined;
      var dotProps = ReferenceDot_objectSpread(ReferenceDot_objectSpread({
        clipPath: clipPath
      }, filterProps(this.props, true)), {}, {
        cx: cx,
        cy: cy
      });
      return /*#__PURE__*/react.createElement(Layer, {
        className: (0,clsx/* default */.A)('recharts-reference-dot', className)
      }, ReferenceDot.renderDot(shape, dotProps), Label.renderCallByParent(this.props, {
        x: cx - r,
        y: cy - r,
        width: 2 * r,
        height: 2 * r
      }));
    }
  }]);
}(react.Component);
ReferenceDot_defineProperty(ReferenceDot, "displayName", 'ReferenceDot');
ReferenceDot_defineProperty(ReferenceDot, "defaultProps", {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#fff',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1
});
ReferenceDot_defineProperty(ReferenceDot, "renderDot", function (option, props) {
  var dot;
  if ( /*#__PURE__*/react.isValidElement(option)) {
    dot = /*#__PURE__*/react.cloneElement(option, props);
  } else if (isFunction_default()(option)) {
    dot = option(props);
  } else {
    dot = /*#__PURE__*/react.createElement(Dot, ReferenceDot_extends({}, props, {
      cx: props.cx,
      cy: props.cy,
      className: "recharts-reference-dot-dot"
    }));
  }
  return dot;
});
// EXTERNAL MODULE: ./node_modules/lodash/some.js
var some = __webpack_require__(42426);
var some_default = /*#__PURE__*/__webpack_require__.n(some);
// EXTERNAL MODULE: ./node_modules/lodash/find.js
var find = __webpack_require__(7309);
// EXTERNAL MODULE: ./node_modules/lodash/memoize.js
var lodash_memoize = __webpack_require__(50104);
var memoize_default = /*#__PURE__*/__webpack_require__.n(lodash_memoize);
;// ./node_modules/recharts/es6/util/calculateViewBox.js

/**
 * This is memoized because the viewBox is unlikely to change often
 * - but because it is computed from offset, any change to it would re-render all children.
 *
 * And because we have many readers of the viewBox, and update it only rarely,
 * then let's optimize with memoization.
 */
var calculateViewBox = memoize_default()(function (offset) {
  return {
    x: offset.left,
    y: offset.top,
    width: offset.width,
    height: offset.height
  };
}, function (offset) {
  return ['l', offset.left, 't', offset.top, 'w', offset.width, 'h', offset.height].join('');
});
;// ./node_modules/recharts/es6/context/chartLayoutContext.js
/* unused harmony import specifier */ var useContext;
/* unused harmony import specifier */ var chartLayoutContext_find;
/* unused harmony import specifier */ var chartLayoutContext_every;
/* unused harmony import specifier */ var chartLayoutContext_getAnyElementOfObject;
function chartLayoutContext_typeof(o) { "@babel/helpers - typeof"; return chartLayoutContext_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, chartLayoutContext_typeof(o); }
;





var XAxisContext = /*#__PURE__*/(0,react.createContext)(undefined);
var YAxisContext = /*#__PURE__*/(0,react.createContext)(undefined);
var ViewBoxContext = /*#__PURE__*/(0,react.createContext)(undefined);
var OffsetContext = /*#__PURE__*/(0,react.createContext)({});
var ClipPathIdContext = /*#__PURE__*/(0,react.createContext)(undefined);
var ChartHeightContext = /*#__PURE__*/(0,react.createContext)(0);
var ChartWidthContext = /*#__PURE__*/(0,react.createContext)(0);

/**
 * Will add all the properties required to render all individual Recharts components into a React Context.
 *
 * If you want to read these properties, see the collection of hooks exported from this file.
 *
 * @param {object} props CategoricalChartState, plus children
 * @returns {ReactElement} React Context Provider
 */
var ChartLayoutContextProvider = function ChartLayoutContextProvider(props) {
  var _props$state = props.state,
    xAxisMap = _props$state.xAxisMap,
    yAxisMap = _props$state.yAxisMap,
    offset = _props$state.offset,
    clipPathId = props.clipPathId,
    children = props.children,
    width = props.width,
    height = props.height;

  /**
   * Perhaps we should compute this property when reading? Let's see what is more often used
   */
  var viewBox = calculateViewBox(offset);

  /*
   * This pretends to be a single context but actually is split into multiple smaller ones.
   * Why?
   * Because one React Context only allows to set one value.
   * But we need to set multiple values.
   * If we do that with one context, then we force re-render on components that might not even be interested
   * in the part of the state that has changed.
   *
   * By splitting into smaller contexts, we allow each components to be optimized and only re-render when its dependencies change.
   *
   * To actually achieve the optimal re-render, it is necessary to use React.memo().
   * See the test file for details.
   */
  return /*#__PURE__*/react.createElement(XAxisContext.Provider, {
    value: xAxisMap
  }, /*#__PURE__*/react.createElement(YAxisContext.Provider, {
    value: yAxisMap
  }, /*#__PURE__*/react.createElement(OffsetContext.Provider, {
    value: offset
  }, /*#__PURE__*/react.createElement(ViewBoxContext.Provider, {
    value: viewBox
  }, /*#__PURE__*/react.createElement(ClipPathIdContext.Provider, {
    value: clipPathId
  }, /*#__PURE__*/react.createElement(ChartHeightContext.Provider, {
    value: height
  }, /*#__PURE__*/react.createElement(ChartWidthContext.Provider, {
    value: width
  }, children)))))));
};
var useClipPathId = function useClipPathId() {
  return (0,react.useContext)(ClipPathIdContext);
};
function getKeysForDebug(object) {
  var keys = Object.keys(object);
  if (keys.length === 0) {
    return 'There are no available ids.';
  }
  return "Available ids are: ".concat(keys, ".");
}

/**
 * This either finds and returns Axis by the specified ID, or throws an exception if an axis with this ID does not exist.
 *
 * @param xAxisId identifier of the axis - it's either autogenerated ('0'), or passed via `id` prop as <XAxis id='foo' />
 * @returns axis configuration object
 * @throws Error if no axis with this ID exists
 */
var useXAxisOrThrow = function useXAxisOrThrow(xAxisId) {
  var xAxisMap = (0,react.useContext)(XAxisContext);
  !(xAxisMap != null) ?  false ? 0 : (0,tiny_invariant/* default */.A)(false) : void 0;
  var xAxis = xAxisMap[xAxisId];
  !(xAxis != null) ?  false ? 0 : (0,tiny_invariant/* default */.A)(false) : void 0;
  return xAxis;
};

/**
 * This will find an arbitrary first XAxis. If there's exactly one it always returns that one
 * - but if there are multiple then it can return any of those.
 *
 * If you want specific XAxis out of multiple then prefer using useXAxisOrThrow
 *
 * @returns X axisOptions, or undefined - if there are no X axes
 */
var useArbitraryXAxis = function useArbitraryXAxis() {
  var xAxisMap = useContext(XAxisContext);
  return chartLayoutContext_getAnyElementOfObject(xAxisMap);
};

/**
 * This will find an arbitrary first YAxis. If there's exactly one it always returns that one
 * - but if there are multiple then it can return any of those.
 *
 * If you want specific YAxis out of multiple then prefer using useXAxisOrThrow
 *
 * @returns Y axisOptions, or undefined - if there are no Y axes
 */
var useArbitraryYAxis = function useArbitraryYAxis() {
  var yAxisMap = useContext(YAxisContext);
  return chartLayoutContext_getAnyElementOfObject(yAxisMap);
};

/**
 * This hooks will:
 * 1st attempt to find an YAxis that has all elements in its domain finite
 * If no such axis exists, it will return an arbitrary YAxis
 * if there are no Y axes then it returns undefined
 *
 * @returns Either Y axisOptions, or undefined if there are no Y axes
 */
var useYAxisWithFiniteDomainOrRandom = function useYAxisWithFiniteDomainOrRandom() {
  var yAxisMap = useContext(YAxisContext);
  var yAxisWithFiniteDomain = chartLayoutContext_find(yAxisMap, function (axis) {
    return chartLayoutContext_every(axis.domain, Number.isFinite);
  });
  return yAxisWithFiniteDomain || chartLayoutContext_getAnyElementOfObject(yAxisMap);
};

/**
 * This either finds and returns Axis by the specified ID, or throws an exception if an axis with this ID does not exist.
 *
 * @param yAxisId identifier of the axis - it's either autogenerated ('0'), or passed via `id` prop as <YAxis id='foo' />
 * @returns axis configuration object
 * @throws Error if no axis with this ID exists
 */
var useYAxisOrThrow = function useYAxisOrThrow(yAxisId) {
  var yAxisMap = (0,react.useContext)(YAxisContext);
  !(yAxisMap != null) ?  false ? 0 : (0,tiny_invariant/* default */.A)(false) : void 0;
  var yAxis = yAxisMap[yAxisId];
  !(yAxis != null) ?  false ? 0 : (0,tiny_invariant/* default */.A)(false) : void 0;
  return yAxis;
};
var useViewBox = function useViewBox() {
  var viewBox = (0,react.useContext)(ViewBoxContext);
  return viewBox;
};
var useOffset = function useOffset() {
  return useContext(OffsetContext);
};
var useChartWidth = function useChartWidth() {
  return useContext(ChartWidthContext);
};
var useChartHeight = function useChartHeight() {
  return useContext(ChartHeightContext);
};
;// ./node_modules/recharts/es6/cartesian/ReferenceLine.js
function ReferenceLine_typeof(o) { "@babel/helpers - typeof"; return ReferenceLine_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ReferenceLine_typeof(o); }
function ReferenceLine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ReferenceLine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ReferenceLine_toPropertyKey(descriptor.key), descriptor); } }
function ReferenceLine_createClass(Constructor, protoProps, staticProps) { if (protoProps) ReferenceLine_defineProperties(Constructor.prototype, protoProps); if (staticProps) ReferenceLine_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ReferenceLine_callSuper(t, o, e) { return o = ReferenceLine_getPrototypeOf(o), ReferenceLine_possibleConstructorReturn(t, ReferenceLine_isNativeReflectConstruct() ? Reflect.construct(o, e || [], ReferenceLine_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ReferenceLine_possibleConstructorReturn(self, call) { if (call && (ReferenceLine_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ReferenceLine_assertThisInitialized(self); }
function ReferenceLine_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function ReferenceLine_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ReferenceLine_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ReferenceLine_getPrototypeOf(o) { ReferenceLine_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ReferenceLine_getPrototypeOf(o); }
function ReferenceLine_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ReferenceLine_setPrototypeOf(subClass, superClass); }
function ReferenceLine_setPrototypeOf(o, p) { ReferenceLine_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ReferenceLine_setPrototypeOf(o, p); }
function ReferenceLine_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ReferenceLine_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ReferenceLine_ownKeys(Object(t), !0).forEach(function (r) { ReferenceLine_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ReferenceLine_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ReferenceLine_defineProperty(obj, key, value) { key = ReferenceLine_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ReferenceLine_toPropertyKey(t) { var i = ReferenceLine_toPrimitive(t, "string"); return "symbol" == ReferenceLine_typeof(i) ? i : i + ""; }
function ReferenceLine_toPrimitive(t, r) { if ("object" != ReferenceLine_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ReferenceLine_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function ReferenceLine_slicedToArray(arr, i) { return ReferenceLine_arrayWithHoles(arr) || ReferenceLine_iterableToArrayLimit(arr, i) || ReferenceLine_unsupportedIterableToArray(arr, i) || ReferenceLine_nonIterableRest(); }
function ReferenceLine_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ReferenceLine_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ReferenceLine_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ReferenceLine_arrayLikeToArray(o, minLen); }
function ReferenceLine_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ReferenceLine_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function ReferenceLine_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ReferenceLine_extends() { ReferenceLine_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ReferenceLine_extends.apply(this, arguments); }
/**
 * @fileOverview Reference Line
 */
;












/**
 * This excludes `viewBox` prop from svg for two reasons:
 * 1. The components wants viewBox of object type, and svg wants string
 *    - so there's a conflict, and the component will throw if it gets string
 * 2. Internally the component calls `filterProps` which filters the viewBox away anyway
 */

var renderLine = function renderLine(option, props) {
  var line;
  if ( /*#__PURE__*/react.isValidElement(option)) {
    line = /*#__PURE__*/react.cloneElement(option, props);
  } else if (isFunction_default()(option)) {
    line = option(props);
  } else {
    line = /*#__PURE__*/react.createElement("line", ReferenceLine_extends({}, props, {
      className: "recharts-reference-line-line"
    }));
  }
  return line;
};
// TODO: ScaleHelper
var getEndPoints = function getEndPoints(scales, isFixedX, isFixedY, isSegment, viewBox, position, xAxisOrientation, yAxisOrientation, props) {
  var x = viewBox.x,
    y = viewBox.y,
    width = viewBox.width,
    height = viewBox.height;
  if (isFixedY) {
    var yCoord = props.y;
    var coord = scales.y.apply(yCoord, {
      position: position
    });
    if (ifOverflowMatches(props, 'discard') && !scales.y.isInRange(coord)) {
      return null;
    }
    var points = [{
      x: x + width,
      y: coord
    }, {
      x: x,
      y: coord
    }];
    return yAxisOrientation === 'left' ? points.reverse() : points;
  }
  if (isFixedX) {
    var xCoord = props.x;
    var _coord = scales.x.apply(xCoord, {
      position: position
    });
    if (ifOverflowMatches(props, 'discard') && !scales.x.isInRange(_coord)) {
      return null;
    }
    var _points = [{
      x: _coord,
      y: y + height
    }, {
      x: _coord,
      y: y
    }];
    return xAxisOrientation === 'top' ? _points.reverse() : _points;
  }
  if (isSegment) {
    var segment = props.segment;
    var _points2 = segment.map(function (p) {
      return scales.apply(p, {
        position: position
      });
    });
    if (ifOverflowMatches(props, 'discard') && some_default()(_points2, function (p) {
      return !scales.isInRange(p);
    })) {
      return null;
    }
    return _points2;
  }
  return null;
};
function ReferenceLineImpl(props) {
  var fixedX = props.x,
    fixedY = props.y,
    segment = props.segment,
    xAxisId = props.xAxisId,
    yAxisId = props.yAxisId,
    shape = props.shape,
    className = props.className,
    alwaysShow = props.alwaysShow;
  var clipPathId = useClipPathId();
  var xAxis = useXAxisOrThrow(xAxisId);
  var yAxis = useYAxisOrThrow(yAxisId);
  var viewBox = useViewBox();
  if (!clipPathId || !viewBox) {
    return null;
  }
  warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var isX = isNumOrStr(fixedX);
  var isY = isNumOrStr(fixedY);
  var isSegment = segment && segment.length === 2;
  var endPoints = getEndPoints(scales, isX, isY, isSegment, viewBox, props.position, xAxis.orientation, yAxis.orientation, props);
  if (!endPoints) {
    return null;
  }
  var _endPoints = ReferenceLine_slicedToArray(endPoints, 2),
    _endPoints$ = _endPoints[0],
    x1 = _endPoints$.x,
    y1 = _endPoints$.y,
    _endPoints$2 = _endPoints[1],
    x2 = _endPoints$2.x,
    y2 = _endPoints$2.y;
  var clipPath = ifOverflowMatches(props, 'hidden') ? "url(#".concat(clipPathId, ")") : undefined;
  var lineProps = ReferenceLine_objectSpread(ReferenceLine_objectSpread({
    clipPath: clipPath
  }, filterProps(props, true)), {}, {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  });
  return /*#__PURE__*/react.createElement(Layer, {
    className: (0,clsx/* default */.A)('recharts-reference-line', className)
  }, renderLine(shape, lineProps), Label.renderCallByParent(props, rectWithCoords({
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  })));
}

// eslint-disable-next-line react/prefer-stateless-function -- requires static defaultProps
var ReferenceLine = /*#__PURE__*/function (_React$Component) {
  function ReferenceLine() {
    ReferenceLine_classCallCheck(this, ReferenceLine);
    return ReferenceLine_callSuper(this, ReferenceLine, arguments);
  }
  ReferenceLine_inherits(ReferenceLine, _React$Component);
  return ReferenceLine_createClass(ReferenceLine, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(ReferenceLineImpl, this.props);
    }
  }]);
}(react.Component);
ReferenceLine_defineProperty(ReferenceLine, "displayName", 'ReferenceLine');
ReferenceLine_defineProperty(ReferenceLine, "defaultProps", {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  fill: 'none',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
  position: 'middle'
});
;// ./node_modules/recharts/es6/cartesian/ReferenceArea.js
function ReferenceArea_extends() { ReferenceArea_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ReferenceArea_extends.apply(this, arguments); }
function ReferenceArea_typeof(o) { "@babel/helpers - typeof"; return ReferenceArea_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ReferenceArea_typeof(o); }
function ReferenceArea_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ReferenceArea_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ReferenceArea_ownKeys(Object(t), !0).forEach(function (r) { ReferenceArea_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ReferenceArea_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ReferenceArea_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ReferenceArea_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ReferenceArea_toPropertyKey(descriptor.key), descriptor); } }
function ReferenceArea_createClass(Constructor, protoProps, staticProps) { if (protoProps) ReferenceArea_defineProperties(Constructor.prototype, protoProps); if (staticProps) ReferenceArea_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ReferenceArea_callSuper(t, o, e) { return o = ReferenceArea_getPrototypeOf(o), ReferenceArea_possibleConstructorReturn(t, ReferenceArea_isNativeReflectConstruct() ? Reflect.construct(o, e || [], ReferenceArea_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ReferenceArea_possibleConstructorReturn(self, call) { if (call && (ReferenceArea_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ReferenceArea_assertThisInitialized(self); }
function ReferenceArea_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function ReferenceArea_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ReferenceArea_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ReferenceArea_getPrototypeOf(o) { ReferenceArea_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ReferenceArea_getPrototypeOf(o); }
function ReferenceArea_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ReferenceArea_setPrototypeOf(subClass, superClass); }
function ReferenceArea_setPrototypeOf(o, p) { ReferenceArea_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ReferenceArea_setPrototypeOf(o, p); }
function ReferenceArea_defineProperty(obj, key, value) { key = ReferenceArea_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ReferenceArea_toPropertyKey(t) { var i = ReferenceArea_toPrimitive(t, "string"); return "symbol" == ReferenceArea_typeof(i) ? i : i + ""; }
function ReferenceArea_toPrimitive(t, r) { if ("object" != ReferenceArea_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ReferenceArea_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview Reference Line
 */
;










var getRect = function getRect(hasX1, hasX2, hasY1, hasY2, props) {
  var xValue1 = props.x1,
    xValue2 = props.x2,
    yValue1 = props.y1,
    yValue2 = props.y2,
    xAxis = props.xAxis,
    yAxis = props.yAxis;
  if (!xAxis || !yAxis) return null;
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var p1 = {
    x: hasX1 ? scales.x.apply(xValue1, {
      position: 'start'
    }) : scales.x.rangeMin,
    y: hasY1 ? scales.y.apply(yValue1, {
      position: 'start'
    }) : scales.y.rangeMin
  };
  var p2 = {
    x: hasX2 ? scales.x.apply(xValue2, {
      position: 'end'
    }) : scales.x.rangeMax,
    y: hasY2 ? scales.y.apply(yValue2, {
      position: 'end'
    }) : scales.y.rangeMax
  };
  if (ifOverflowMatches(props, 'discard') && (!scales.isInRange(p1) || !scales.isInRange(p2))) {
    return null;
  }
  return rectWithPoints(p1, p2);
};

// eslint-disable-next-line react/prefer-stateless-function -- requires static defaultProps
var ReferenceArea = /*#__PURE__*/function (_React$Component) {
  function ReferenceArea() {
    ReferenceArea_classCallCheck(this, ReferenceArea);
    return ReferenceArea_callSuper(this, ReferenceArea, arguments);
  }
  ReferenceArea_inherits(ReferenceArea, _React$Component);
  return ReferenceArea_createClass(ReferenceArea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        x1 = _this$props.x1,
        x2 = _this$props.x2,
        y1 = _this$props.y1,
        y2 = _this$props.y2,
        className = _this$props.className,
        alwaysShow = _this$props.alwaysShow,
        clipPathId = _this$props.clipPathId;
      warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var hasX1 = isNumOrStr(x1);
      var hasX2 = isNumOrStr(x2);
      var hasY1 = isNumOrStr(y1);
      var hasY2 = isNumOrStr(y2);
      var shape = this.props.shape;
      if (!hasX1 && !hasX2 && !hasY1 && !hasY2 && !shape) {
        return null;
      }
      var rect = getRect(hasX1, hasX2, hasY1, hasY2, this.props);
      if (!rect && !shape) {
        return null;
      }
      var clipPath = ifOverflowMatches(this.props, 'hidden') ? "url(#".concat(clipPathId, ")") : undefined;
      return /*#__PURE__*/react.createElement(Layer, {
        className: (0,clsx/* default */.A)('recharts-reference-area', className)
      }, ReferenceArea.renderRect(shape, ReferenceArea_objectSpread(ReferenceArea_objectSpread({
        clipPath: clipPath
      }, filterProps(this.props, true)), rect)), Label.renderCallByParent(this.props, rect));
    }
  }]);
}(react.Component);
ReferenceArea_defineProperty(ReferenceArea, "displayName", 'ReferenceArea');
ReferenceArea_defineProperty(ReferenceArea, "defaultProps", {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#ccc',
  fillOpacity: 0.5,
  stroke: 'none',
  strokeWidth: 1
});
ReferenceArea_defineProperty(ReferenceArea, "renderRect", function (option, props) {
  var rect;
  if ( /*#__PURE__*/react.isValidElement(option)) {
    rect = /*#__PURE__*/react.cloneElement(option, props);
  } else if (isFunction_default()(option)) {
    rect = option(props);
  } else {
    rect = /*#__PURE__*/react.createElement(Rectangle, ReferenceArea_extends({}, props, {
      className: "recharts-reference-area-rect"
    }));
  }
  return rect;
});
;// ./node_modules/recharts/es6/util/DetectReferenceElementsDomain.js
function DetectReferenceElementsDomain_toConsumableArray(arr) { return DetectReferenceElementsDomain_arrayWithoutHoles(arr) || DetectReferenceElementsDomain_iterableToArray(arr) || DetectReferenceElementsDomain_unsupportedIterableToArray(arr) || DetectReferenceElementsDomain_nonIterableSpread(); }
function DetectReferenceElementsDomain_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function DetectReferenceElementsDomain_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DetectReferenceElementsDomain_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DetectReferenceElementsDomain_arrayLikeToArray(o, minLen); }
function DetectReferenceElementsDomain_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function DetectReferenceElementsDomain_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return DetectReferenceElementsDomain_arrayLikeToArray(arr); }
function DetectReferenceElementsDomain_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
;





var detectReferenceElementsDomain = function detectReferenceElementsDomain(children, domain, axisId, axisType, specifiedTicks) {
  var lines = findAllByType(children, ReferenceLine);
  var dots = findAllByType(children, ReferenceDot);
  var elements = [].concat(DetectReferenceElementsDomain_toConsumableArray(lines), DetectReferenceElementsDomain_toConsumableArray(dots));
  var areas = findAllByType(children, ReferenceArea);
  var idKey = "".concat(axisType, "Id");
  var valueKey = axisType[0];
  var finalDomain = domain;
  if (elements.length) {
    finalDomain = elements.reduce(function (result, el) {
      if (el.props[idKey] === axisId && ifOverflowMatches(el.props, 'extendDomain') && isNumber(el.props[valueKey])) {
        var value = el.props[valueKey];
        return [Math.min(result[0], value), Math.max(result[1], value)];
      }
      return result;
    }, finalDomain);
  }
  if (areas.length) {
    var key1 = "".concat(valueKey, "1");
    var key2 = "".concat(valueKey, "2");
    finalDomain = areas.reduce(function (result, el) {
      if (el.props[idKey] === axisId && ifOverflowMatches(el.props, 'extendDomain') && isNumber(el.props[key1]) && isNumber(el.props[key2])) {
        var value1 = el.props[key1];
        var value2 = el.props[key2];
        return [Math.min(result[0], value1, value2), Math.max(result[1], value1, value2)];
      }
      return result;
    }, finalDomain);
  }
  if (specifiedTicks && specifiedTicks.length) {
    finalDomain = specifiedTicks.reduce(function (result, tick) {
      if (isNumber(tick)) {
        return [Math.min(result[0], tick), Math.max(result[1], tick)];
      }
      return result;
    }, finalDomain);
  }
  return finalDomain;
};
;// ./node_modules/eventemitter3/index.js
var eventemitter3_namespaceObject = /*#__PURE__*/__webpack_require__.cjs(function(module, exports) {


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}

});

var eventemitter3_default = /*#__PURE__*/__webpack_require__.n(eventemitter3_namespaceObject);
;// ./node_modules/recharts/es6/util/Events.js

var eventCenter = new (eventemitter3_default())();

var SYNC_EVENT = 'recharts.syncMouseEvents';
;// ./node_modules/recharts/es6/chart/AccessibilityManager.js
function AccessibilityManager_typeof(o) { "@babel/helpers - typeof"; return AccessibilityManager_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, AccessibilityManager_typeof(o); }
function AccessibilityManager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function AccessibilityManager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, AccessibilityManager_toPropertyKey(descriptor.key), descriptor); } }
function AccessibilityManager_createClass(Constructor, protoProps, staticProps) { if (protoProps) AccessibilityManager_defineProperties(Constructor.prototype, protoProps); if (staticProps) AccessibilityManager_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function AccessibilityManager_defineProperty(obj, key, value) { key = AccessibilityManager_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function AccessibilityManager_toPropertyKey(t) { var i = AccessibilityManager_toPrimitive(t, "string"); return "symbol" == AccessibilityManager_typeof(i) ? i : i + ""; }
function AccessibilityManager_toPrimitive(t, r) { if ("object" != AccessibilityManager_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != AccessibilityManager_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AccessibilityManager = /*#__PURE__*/function () {
  function AccessibilityManager() {
    AccessibilityManager_classCallCheck(this, AccessibilityManager);
    AccessibilityManager_defineProperty(this, "activeIndex", 0);
    AccessibilityManager_defineProperty(this, "coordinateList", []);
    AccessibilityManager_defineProperty(this, "layout", 'horizontal');
  }
  return AccessibilityManager_createClass(AccessibilityManager, [{
    key: "setDetails",
    value: function setDetails(_ref) {
      var _ref2;
      var _ref$coordinateList = _ref.coordinateList,
        coordinateList = _ref$coordinateList === void 0 ? null : _ref$coordinateList,
        _ref$container = _ref.container,
        container = _ref$container === void 0 ? null : _ref$container,
        _ref$layout = _ref.layout,
        layout = _ref$layout === void 0 ? null : _ref$layout,
        _ref$offset = _ref.offset,
        offset = _ref$offset === void 0 ? null : _ref$offset,
        _ref$mouseHandlerCall = _ref.mouseHandlerCallback,
        mouseHandlerCallback = _ref$mouseHandlerCall === void 0 ? null : _ref$mouseHandlerCall;
      this.coordinateList = (_ref2 = coordinateList !== null && coordinateList !== void 0 ? coordinateList : this.coordinateList) !== null && _ref2 !== void 0 ? _ref2 : [];
      this.container = container !== null && container !== void 0 ? container : this.container;
      this.layout = layout !== null && layout !== void 0 ? layout : this.layout;
      this.offset = offset !== null && offset !== void 0 ? offset : this.offset;
      this.mouseHandlerCallback = mouseHandlerCallback !== null && mouseHandlerCallback !== void 0 ? mouseHandlerCallback : this.mouseHandlerCallback;

      // Keep activeIndex in the bounds between 0 and the last coordinate index
      this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function keyboardEvent(e) {
      // The AccessibilityManager relies on the Tooltip component. When tooltips suddenly stop existing,
      // it can cause errors. We use this function to check. We don't want arrow keys to be processed
      // if there are no tooltips, since that will cause unexpected behavior of users.
      if (this.coordinateList.length === 0) {
        return;
      }
      switch (e.key) {
        case 'ArrowRight':
          {
            if (this.layout !== 'horizontal') {
              return;
            }
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1);
            this.spoofMouse();
            break;
          }
        case 'ArrowLeft':
          {
            if (this.layout !== 'horizontal') {
              return;
            }
            this.activeIndex = Math.max(this.activeIndex - 1, 0);
            this.spoofMouse();
            break;
          }
        default:
          {
            break;
          }
      }
    }
  }, {
    key: "setIndex",
    value: function setIndex(newIndex) {
      this.activeIndex = newIndex;
    }
  }, {
    key: "spoofMouse",
    value: function spoofMouse() {
      var _window, _window2;
      if (this.layout !== 'horizontal') {
        return;
      }

      // This can happen when the tooltips suddenly stop existing as children of the component
      // That update doesn't otherwise fire events, so we have to double check here.
      if (this.coordinateList.length === 0) {
        return;
      }
      var _this$container$getBo = this.container.getBoundingClientRect(),
        x = _this$container$getBo.x,
        y = _this$container$getBo.y,
        height = _this$container$getBo.height;
      var coordinate = this.coordinateList[this.activeIndex].coordinate;
      var scrollOffsetX = ((_window = window) === null || _window === void 0 ? void 0 : _window.scrollX) || 0;
      var scrollOffsetY = ((_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.scrollY) || 0;
      var pageX = x + coordinate + scrollOffsetX;
      var pageY = y + this.offset.top + height / 2 + scrollOffsetY;
      this.mouseHandlerCallback({
        pageX: pageX,
        pageY: pageY
      });
    }
  }]);
}();
;// ./node_modules/recharts/es6/util/isDomainSpecifiedByUser.js

/**
 * Takes a domain and user props to determine whether he provided the domain via props or if we need to calculate it.
 * @param   {AxisDomain}  domain              The potential domain from props
 * @param   {Boolean}     allowDataOverflow   from props
 * @param   {String}      axisType            from props
 * @returns {Boolean}                         `true` if domain is specified by user
 */
function isDomainSpecifiedByUser(domain, allowDataOverflow, axisType) {
  if (axisType === 'number' && allowDataOverflow === true && Array.isArray(domain)) {
    var domainStart = domain === null || domain === void 0 ? void 0 : domain[0];
    var domainEnd = domain === null || domain === void 0 ? void 0 : domain[1];

    /*
     * The `isNumber` check is needed because the user could also provide strings like "dataMin" via the domain props.
     * In such case, we have to compute the domain from the data.
     */
    if (!!domainStart && !!domainEnd && isNumber(domainStart) && isNumber(domainEnd)) {
      return true;
    }
  }
  return false;
}
// EXTERNAL MODULE: ./node_modules/lodash/isPlainObject.js
var isPlainObject = __webpack_require__(11331);
var isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject);
// EXTERNAL MODULE: ./node_modules/lodash/isBoolean.js
var isBoolean = __webpack_require__(53812);
var isBoolean_default = /*#__PURE__*/__webpack_require__.n(isBoolean);
;// ./node_modules/recharts/es6/shape/Trapezoid.js
function Trapezoid_typeof(o) { "@babel/helpers - typeof"; return Trapezoid_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Trapezoid_typeof(o); }
function Trapezoid_extends() { Trapezoid_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Trapezoid_extends.apply(this, arguments); }
function Trapezoid_slicedToArray(arr, i) { return Trapezoid_arrayWithHoles(arr) || Trapezoid_iterableToArrayLimit(arr, i) || Trapezoid_unsupportedIterableToArray(arr, i) || Trapezoid_nonIterableRest(); }
function Trapezoid_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Trapezoid_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Trapezoid_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Trapezoid_arrayLikeToArray(o, minLen); }
function Trapezoid_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Trapezoid_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function Trapezoid_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Trapezoid_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Trapezoid_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Trapezoid_ownKeys(Object(t), !0).forEach(function (r) { Trapezoid_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Trapezoid_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Trapezoid_defineProperty(obj, key, value) { key = Trapezoid_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Trapezoid_toPropertyKey(t) { var i = Trapezoid_toPrimitive(t, "string"); return "symbol" == Trapezoid_typeof(i) ? i : i + ""; }
function Trapezoid_toPrimitive(t, r) { if ("object" != Trapezoid_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Trapezoid_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview Rectangle
 */
;



var getTrapezoidPath = function getTrapezoidPath(x, y, upperWidth, lowerWidth, height) {
  var widthGap = upperWidth - lowerWidth;
  var path;
  path = "M ".concat(x, ",").concat(y);
  path += "L ".concat(x + upperWidth, ",").concat(y);
  path += "L ".concat(x + upperWidth - widthGap / 2, ",").concat(y + height);
  path += "L ".concat(x + upperWidth - widthGap / 2 - lowerWidth, ",").concat(y + height);
  path += "L ".concat(x, ",").concat(y, " Z");
  return path;
};
var Trapezoid_defaultProps = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: false,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
};
var Trapezoid = function Trapezoid(props) {
  var trapezoidProps = Trapezoid_objectSpread(Trapezoid_objectSpread({}, Trapezoid_defaultProps), props);
  var pathRef = (0,react.useRef)();
  var _useState = (0,react.useState)(-1),
    _useState2 = Trapezoid_slicedToArray(_useState, 2),
    totalLength = _useState2[0],
    setTotalLength = _useState2[1];
  (0,react.useEffect)(function () {
    if (pathRef.current && pathRef.current.getTotalLength) {
      try {
        var pathTotalLength = pathRef.current.getTotalLength();
        if (pathTotalLength) {
          setTotalLength(pathTotalLength);
        }
      } catch (err) {
        // calculate total length error
      }
    }
  }, []);
  var x = trapezoidProps.x,
    y = trapezoidProps.y,
    upperWidth = trapezoidProps.upperWidth,
    lowerWidth = trapezoidProps.lowerWidth,
    height = trapezoidProps.height,
    className = trapezoidProps.className;
  var animationEasing = trapezoidProps.animationEasing,
    animationDuration = trapezoidProps.animationDuration,
    animationBegin = trapezoidProps.animationBegin,
    isUpdateAnimationActive = trapezoidProps.isUpdateAnimationActive;
  if (x !== +x || y !== +y || upperWidth !== +upperWidth || lowerWidth !== +lowerWidth || height !== +height || upperWidth === 0 && lowerWidth === 0 || height === 0) {
    return null;
  }
  var layerClass = (0,clsx/* default */.A)('recharts-trapezoid', className);
  if (!isUpdateAnimationActive) {
    return /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", Trapezoid_extends({}, filterProps(trapezoidProps, true), {
      className: layerClass,
      d: getTrapezoidPath(x, y, upperWidth, lowerWidth, height)
    })));
  }
  return /*#__PURE__*/react.createElement(es6, {
    canBegin: totalLength > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: height,
      x: x,
      y: y
    },
    to: {
      upperWidth: upperWidth,
      lowerWidth: lowerWidth,
      height: height,
      x: x,
      y: y
    },
    duration: animationDuration,
    animationEasing: animationEasing,
    isActive: isUpdateAnimationActive
  }, function (_ref) {
    var currUpperWidth = _ref.upperWidth,
      currLowerWidth = _ref.lowerWidth,
      currHeight = _ref.height,
      currX = _ref.x,
      currY = _ref.y;
    return /*#__PURE__*/react.createElement(es6, {
      canBegin: totalLength > 0,
      from: "0px ".concat(totalLength === -1 ? 1 : totalLength, "px"),
      to: "".concat(totalLength, "px 0px"),
      attributeName: "strokeDasharray",
      begin: animationBegin,
      duration: animationDuration,
      easing: animationEasing
    }, /*#__PURE__*/react.createElement("path", Trapezoid_extends({}, filterProps(trapezoidProps, true), {
      className: layerClass,
      d: getTrapezoidPath(currX, currY, currUpperWidth, currLowerWidth, currHeight),
      ref: pathRef
    })));
  });
};
;// ./node_modules/recharts/es6/shape/Sector.js
function Sector_typeof(o) { "@babel/helpers - typeof"; return Sector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Sector_typeof(o); }
function Sector_extends() { Sector_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Sector_extends.apply(this, arguments); }
function Sector_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Sector_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Sector_ownKeys(Object(t), !0).forEach(function (r) { Sector_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Sector_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Sector_defineProperty(obj, key, value) { key = Sector_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Sector_toPropertyKey(t) { var i = Sector_toPrimitive(t, "string"); return "symbol" == Sector_typeof(i) ? i : i + ""; }
function Sector_toPrimitive(t, r) { if ("object" != Sector_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Sector_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview Sector
 */
;




var Sector_getDeltaAngle = function getDeltaAngle(startAngle, endAngle) {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);
  return sign * deltaAngle;
};
var getTangentCircle = function getTangentCircle(_ref) {
  var cx = _ref.cx,
    cy = _ref.cy,
    radius = _ref.radius,
    angle = _ref.angle,
    sign = _ref.sign,
    isExternal = _ref.isExternal,
    cornerRadius = _ref.cornerRadius,
    cornerIsExternal = _ref.cornerIsExternal;
  var centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
  var theta = Math.asin(cornerRadius / centerRadius) / PolarUtils_RADIAN;
  var centerAngle = cornerIsExternal ? angle : angle + sign * theta;
  var center = polarToCartesian(cx, cy, centerRadius, centerAngle);
  // The coordinate of point which is tangent to the circle
  var circleTangency = polarToCartesian(cx, cy, radius, centerAngle);
  // The coordinate of point which is tangent to the radius line
  var lineTangencyAngle = cornerIsExternal ? angle - sign * theta : angle;
  var lineTangency = polarToCartesian(cx, cy, centerRadius * Math.cos(theta * PolarUtils_RADIAN), lineTangencyAngle);
  return {
    center: center,
    circleTangency: circleTangency,
    lineTangency: lineTangency,
    theta: theta
  };
};
var getSectorPath = function getSectorPath(_ref2) {
  var cx = _ref2.cx,
    cy = _ref2.cy,
    innerRadius = _ref2.innerRadius,
    outerRadius = _ref2.outerRadius,
    startAngle = _ref2.startAngle,
    endAngle = _ref2.endAngle;
  var angle = Sector_getDeltaAngle(startAngle, endAngle);

  // When the angle of sector equals to 360, star point and end point coincide
  var tempEndAngle = startAngle + angle;
  var outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
  var outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);
  var path = "M ".concat(outerStartPoint.x, ",").concat(outerStartPoint.y, "\n    A ").concat(outerRadius, ",").concat(outerRadius, ",0,\n    ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle > tempEndAngle), ",\n    ").concat(outerEndPoint.x, ",").concat(outerEndPoint.y, "\n  ");
  if (innerRadius > 0) {
    var innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
    var innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
    path += "L ".concat(innerEndPoint.x, ",").concat(innerEndPoint.y, "\n            A ").concat(innerRadius, ",").concat(innerRadius, ",0,\n            ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle <= tempEndAngle), ",\n            ").concat(innerStartPoint.x, ",").concat(innerStartPoint.y, " Z");
  } else {
    path += "L ".concat(cx, ",").concat(cy, " Z");
  }
  return path;
};
var getSectorWithCorner = function getSectorWithCorner(_ref3) {
  var cx = _ref3.cx,
    cy = _ref3.cy,
    innerRadius = _ref3.innerRadius,
    outerRadius = _ref3.outerRadius,
    cornerRadius = _ref3.cornerRadius,
    forceCornerRadius = _ref3.forceCornerRadius,
    cornerIsExternal = _ref3.cornerIsExternal,
    startAngle = _ref3.startAngle,
    endAngle = _ref3.endAngle;
  var sign = mathSign(endAngle - startAngle);
  var _getTangentCircle = getTangentCircle({
      cx: cx,
      cy: cy,
      radius: outerRadius,
      angle: startAngle,
      sign: sign,
      cornerRadius: cornerRadius,
      cornerIsExternal: cornerIsExternal
    }),
    soct = _getTangentCircle.circleTangency,
    solt = _getTangentCircle.lineTangency,
    sot = _getTangentCircle.theta;
  var _getTangentCircle2 = getTangentCircle({
      cx: cx,
      cy: cy,
      radius: outerRadius,
      angle: endAngle,
      sign: -sign,
      cornerRadius: cornerRadius,
      cornerIsExternal: cornerIsExternal
    }),
    eoct = _getTangentCircle2.circleTangency,
    eolt = _getTangentCircle2.lineTangency,
    eot = _getTangentCircle2.theta;
  var outerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sot - eot;
  if (outerArcAngle < 0) {
    if (forceCornerRadius) {
      return "M ".concat(solt.x, ",").concat(solt.y, "\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(cornerRadius * 2, ",0\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(-cornerRadius * 2, ",0\n      ");
    }
    return getSectorPath({
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      startAngle: startAngle,
      endAngle: endAngle
    });
  }
  var path = "M ".concat(solt.x, ",").concat(solt.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(soct.x, ",").concat(soct.y, "\n    A").concat(outerRadius, ",").concat(outerRadius, ",0,").concat(+(outerArcAngle > 180), ",").concat(+(sign < 0), ",").concat(eoct.x, ",").concat(eoct.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(eolt.x, ",").concat(eolt.y, "\n  ");
  if (innerRadius > 0) {
    var _getTangentCircle3 = getTangentCircle({
        cx: cx,
        cy: cy,
        radius: innerRadius,
        angle: startAngle,
        sign: sign,
        isExternal: true,
        cornerRadius: cornerRadius,
        cornerIsExternal: cornerIsExternal
      }),
      sict = _getTangentCircle3.circleTangency,
      silt = _getTangentCircle3.lineTangency,
      sit = _getTangentCircle3.theta;
    var _getTangentCircle4 = getTangentCircle({
        cx: cx,
        cy: cy,
        radius: innerRadius,
        angle: endAngle,
        sign: -sign,
        isExternal: true,
        cornerRadius: cornerRadius,
        cornerIsExternal: cornerIsExternal
      }),
      eict = _getTangentCircle4.circleTangency,
      eilt = _getTangentCircle4.lineTangency,
      eit = _getTangentCircle4.theta;
    var innerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sit - eit;
    if (innerArcAngle < 0 && cornerRadius === 0) {
      return "".concat(path, "L").concat(cx, ",").concat(cy, "Z");
    }
    path += "L".concat(eilt.x, ",").concat(eilt.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(eict.x, ",").concat(eict.y, "\n      A").concat(innerRadius, ",").concat(innerRadius, ",0,").concat(+(innerArcAngle > 180), ",").concat(+(sign > 0), ",").concat(sict.x, ",").concat(sict.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(silt.x, ",").concat(silt.y, "Z");
  } else {
    path += "L".concat(cx, ",").concat(cy, "Z");
  }
  return path;
};
var Sector_defaultProps = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: false,
  cornerIsExternal: false
};
var Sector = function Sector(sectorProps) {
  var props = Sector_objectSpread(Sector_objectSpread({}, Sector_defaultProps), sectorProps);
  var cx = props.cx,
    cy = props.cy,
    innerRadius = props.innerRadius,
    outerRadius = props.outerRadius,
    cornerRadius = props.cornerRadius,
    forceCornerRadius = props.forceCornerRadius,
    cornerIsExternal = props.cornerIsExternal,
    startAngle = props.startAngle,
    endAngle = props.endAngle,
    className = props.className;
  if (outerRadius < innerRadius || startAngle === endAngle) {
    return null;
  }
  var layerClass = (0,clsx/* default */.A)('recharts-sector', className);
  var deltaRadius = outerRadius - innerRadius;
  var cr = getPercentValue(cornerRadius, deltaRadius, 0, true);
  var path;
  if (cr > 0 && Math.abs(startAngle - endAngle) < 360) {
    path = getSectorWithCorner({
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      cornerRadius: Math.min(cr, deltaRadius / 2),
      forceCornerRadius: forceCornerRadius,
      cornerIsExternal: cornerIsExternal,
      startAngle: startAngle,
      endAngle: endAngle
    });
  } else {
    path = getSectorPath({
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      startAngle: startAngle,
      endAngle: endAngle
    });
  }
  return /*#__PURE__*/react.createElement("path", Sector_extends({}, filterProps(props, true), {
    className: layerClass,
    d: path,
    role: "img"
  }));
};
;// ./node_modules/recharts/es6/util/ActiveShapeUtils.js
var ActiveShapeUtils_excluded = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function ActiveShapeUtils_typeof(o) { "@babel/helpers - typeof"; return ActiveShapeUtils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ActiveShapeUtils_typeof(o); }
function ActiveShapeUtils_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ActiveShapeUtils_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function ActiveShapeUtils_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function ActiveShapeUtils_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ActiveShapeUtils_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ActiveShapeUtils_ownKeys(Object(t), !0).forEach(function (r) { ActiveShapeUtils_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ActiveShapeUtils_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ActiveShapeUtils_defineProperty(obj, key, value) { key = ActiveShapeUtils_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ActiveShapeUtils_toPropertyKey(t) { var i = ActiveShapeUtils_toPrimitive(t, "string"); return "symbol" == ActiveShapeUtils_typeof(i) ? i : i + ""; }
function ActiveShapeUtils_toPrimitive(t, r) { if ("object" != ActiveShapeUtils_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ActiveShapeUtils_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;










/**
 * This is an abstraction for rendering a user defined prop for a customized shape in several forms.
 *
 * <Shape /> is the root and will handle taking in:
 *  - an object of svg properties
 *  - a boolean
 *  - a render prop(inline function that returns jsx)
 *  - a react element
 *
 * <ShapeSelector /> is a subcomponent of <Shape /> and used to match a component
 * to the value of props.shapeType that is passed to the root.
 *
 */

function defaultPropTransformer(option, props) {
  return ActiveShapeUtils_objectSpread(ActiveShapeUtils_objectSpread({}, props), option);
}
function isSymbolsProps(shapeType, _elementProps) {
  return shapeType === 'symbols';
}
function ShapeSelector(_ref) {
  var shapeType = _ref.shapeType,
    elementProps = _ref.elementProps;
  switch (shapeType) {
    case 'rectangle':
      return /*#__PURE__*/react.createElement(Rectangle, elementProps);
    case 'trapezoid':
      return /*#__PURE__*/react.createElement(Trapezoid, elementProps);
    case 'sector':
      return /*#__PURE__*/react.createElement(Sector, elementProps);
    case 'symbols':
      if (isSymbolsProps(shapeType, elementProps)) {
        return /*#__PURE__*/react.createElement(Symbols, elementProps);
      }
      break;
    default:
      return null;
  }
}
function getPropsFromShapeOption(option) {
  if ( /*#__PURE__*/(0,react.isValidElement)(option)) {
    return option.props;
  }
  return option;
}
function Shape(_ref2) {
  var option = _ref2.option,
    shapeType = _ref2.shapeType,
    _ref2$propTransformer = _ref2.propTransformer,
    propTransformer = _ref2$propTransformer === void 0 ? defaultPropTransformer : _ref2$propTransformer,
    _ref2$activeClassName = _ref2.activeClassName,
    activeClassName = _ref2$activeClassName === void 0 ? 'recharts-active-shape' : _ref2$activeClassName,
    isActive = _ref2.isActive,
    props = ActiveShapeUtils_objectWithoutProperties(_ref2, ActiveShapeUtils_excluded);
  var shape;
  if ( /*#__PURE__*/(0,react.isValidElement)(option)) {
    shape = /*#__PURE__*/(0,react.cloneElement)(option, ActiveShapeUtils_objectSpread(ActiveShapeUtils_objectSpread({}, props), getPropsFromShapeOption(option)));
  } else if (isFunction_default()(option)) {
    shape = option(props);
  } else if (isPlainObject_default()(option) && !isBoolean_default()(option)) {
    var nextProps = propTransformer(option, props);
    shape = /*#__PURE__*/react.createElement(ShapeSelector, {
      shapeType: shapeType,
      elementProps: nextProps
    });
  } else {
    var elementProps = props;
    shape = /*#__PURE__*/react.createElement(ShapeSelector, {
      shapeType: shapeType,
      elementProps: elementProps
    });
  }
  if (isActive) {
    return /*#__PURE__*/react.createElement(Layer, {
      className: activeClassName
    }, shape);
  }
  return shape;
}

/**
 * This is an abstraction to handle identifying the active index from a tooltip mouse interaction
 */

function isFunnel(graphicalItem, _item) {
  return _item != null && 'trapezoids' in graphicalItem.props;
}
function isPie(graphicalItem, _item) {
  return _item != null && 'sectors' in graphicalItem.props;
}
function isScatter(graphicalItem, _item) {
  return _item != null && 'points' in graphicalItem.props;
}
function compareFunnel(shapeData, activeTooltipItem) {
  var _activeTooltipItem$la, _activeTooltipItem$la2;
  var xMatches = shapeData.x === (activeTooltipItem === null || activeTooltipItem === void 0 || (_activeTooltipItem$la = activeTooltipItem.labelViewBox) === null || _activeTooltipItem$la === void 0 ? void 0 : _activeTooltipItem$la.x) || shapeData.x === activeTooltipItem.x;
  var yMatches = shapeData.y === (activeTooltipItem === null || activeTooltipItem === void 0 || (_activeTooltipItem$la2 = activeTooltipItem.labelViewBox) === null || _activeTooltipItem$la2 === void 0 ? void 0 : _activeTooltipItem$la2.y) || shapeData.y === activeTooltipItem.y;
  return xMatches && yMatches;
}
function comparePie(shapeData, activeTooltipItem) {
  var startAngleMatches = shapeData.endAngle === activeTooltipItem.endAngle;
  var endAngleMatches = shapeData.startAngle === activeTooltipItem.startAngle;
  return startAngleMatches && endAngleMatches;
}
function compareScatter(shapeData, activeTooltipItem) {
  var xMatches = shapeData.x === activeTooltipItem.x;
  var yMatches = shapeData.y === activeTooltipItem.y;
  var zMatches = shapeData.z === activeTooltipItem.z;
  return xMatches && yMatches && zMatches;
}
function getComparisonFn(graphicalItem, activeItem) {
  var comparison;
  if (isFunnel(graphicalItem, activeItem)) {
    comparison = compareFunnel;
  } else if (isPie(graphicalItem, activeItem)) {
    comparison = comparePie;
  } else if (isScatter(graphicalItem, activeItem)) {
    comparison = compareScatter;
  }
  return comparison;
}
function getShapeDataKey(graphicalItem, activeItem) {
  var shapeKey;
  if (isFunnel(graphicalItem, activeItem)) {
    shapeKey = 'trapezoids';
  } else if (isPie(graphicalItem, activeItem)) {
    shapeKey = 'sectors';
  } else if (isScatter(graphicalItem, activeItem)) {
    shapeKey = 'points';
  }
  return shapeKey;
}
function getActiveShapeTooltipPayload(graphicalItem, activeItem) {
  if (isFunnel(graphicalItem, activeItem)) {
    var _activeItem$tooltipPa;
    return (_activeItem$tooltipPa = activeItem.tooltipPayload) === null || _activeItem$tooltipPa === void 0 || (_activeItem$tooltipPa = _activeItem$tooltipPa[0]) === null || _activeItem$tooltipPa === void 0 || (_activeItem$tooltipPa = _activeItem$tooltipPa.payload) === null || _activeItem$tooltipPa === void 0 ? void 0 : _activeItem$tooltipPa.payload;
  }
  if (isPie(graphicalItem, activeItem)) {
    var _activeItem$tooltipPa2;
    return (_activeItem$tooltipPa2 = activeItem.tooltipPayload) === null || _activeItem$tooltipPa2 === void 0 || (_activeItem$tooltipPa2 = _activeItem$tooltipPa2[0]) === null || _activeItem$tooltipPa2 === void 0 || (_activeItem$tooltipPa2 = _activeItem$tooltipPa2.payload) === null || _activeItem$tooltipPa2 === void 0 ? void 0 : _activeItem$tooltipPa2.payload;
  }
  if (isScatter(graphicalItem, activeItem)) {
    return activeItem.payload;
  }
  return {};
}
/**
 *
 * @param {GetActiveShapeIndexForTooltip} arg an object of incoming attributes from Tooltip
 * @returns {number}
 *
 * To handle possible duplicates in the data set,
 * match both the data value of the active item to a data value on a graph item,
 * and match the mouse coordinates of the active item to the coordinates of in a particular components shape data.
 * This assumes equal lengths of shape objects to data items.
 */
function getActiveShapeIndexForTooltip(_ref3) {
  var activeTooltipItem = _ref3.activeTooltipItem,
    graphicalItem = _ref3.graphicalItem,
    itemData = _ref3.itemData;
  var shapeKey = getShapeDataKey(graphicalItem, activeTooltipItem);
  var tooltipPayload = getActiveShapeTooltipPayload(graphicalItem, activeTooltipItem);
  var activeItemMatches = itemData.filter(function (datum, dataIndex) {
    var valuesMatch = isEqual_default()(tooltipPayload, datum);
    var mouseCoordinateMatches = graphicalItem.props[shapeKey].filter(function (shapeData) {
      var comparison = getComparisonFn(graphicalItem, activeTooltipItem);
      return comparison(shapeData, activeTooltipItem);
    });

    // get the last index in case of multiple matches
    var indexOfMouseCoordinates = graphicalItem.props[shapeKey].indexOf(mouseCoordinateMatches[mouseCoordinateMatches.length - 1]);
    var coordinatesMatch = dataIndex === indexOfMouseCoordinates;
    return valuesMatch && coordinatesMatch;
  });

  // get the last index in case of multiple matches
  var activeIndex = itemData.indexOf(activeItemMatches[activeItemMatches.length - 1]);
  return activeIndex;
}
;// ./node_modules/d3-shape/src/noop.js
__webpack_require__.dn(noop);
/* harmony default export */ function noop() {}

;// ./node_modules/d3-shape/src/curve/basis.js
__webpack_require__.dn(basis);
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // falls through
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // falls through
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ function basis(context) {
  return new Basis(context);
}

;// ./node_modules/d3-shape/src/curve/basisClosed.js
__webpack_require__.dn(basisClosed);



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ function basisClosed(context) {
  return new BasisClosed(context);
}

;// ./node_modules/d3-shape/src/curve/basisOpen.js
__webpack_require__.dn(basisOpen);


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // falls through
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ function basisOpen(context) {
  return new BasisOpen(context);
}

;// ./node_modules/d3-shape/src/curve/bump.js
/* unused harmony import specifier */ var pointRadial;


class Bump {
  constructor(context, x) {
    this._context = context;
    this._x = x;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: {
        this._point = 1;
        if (this._line) this._context.lineTo(x, y);
        else this._context.moveTo(x, y);
        break;
      }
      case 1: this._point = 2; // falls through
      default: {
        if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
        else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
        break;
      }
    }
    this._x0 = x, this._y0 = y;
  }
}

class BumpRadial {
  constructor(context) {
    this._context = context;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {}
  point(x, y) {
    x = +x, y = +y;
    if (this._point === 0) {
      this._point = 1;
    } else {
      const p0 = pointRadial(this._x0, this._y0);
      const p1 = pointRadial(this._x0, this._y0 = (this._y0 + y) / 2);
      const p2 = pointRadial(x, this._y0);
      const p3 = pointRadial(x, y);
      this._context.moveTo(...p0);
      this._context.bezierCurveTo(...p1, ...p2, ...p3);
    }
    this._x0 = x, this._y0 = y;
  }
}

function bumpX(context) {
  return new Bump(context, true);
}

function bumpY(context) {
  return new Bump(context, false);
}

function bumpRadial(context) {
  return new BumpRadial(context);
}

;// ./node_modules/d3-shape/src/curve/linearClosed.js
__webpack_require__.dn(linearClosed);


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ function linearClosed(context) {
  return new LinearClosed(context);
}

// EXTERNAL MODULE: ./node_modules/d3-shape/src/curve/linear.js
var curve_linear = __webpack_require__(26343);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/curve/monotone.js
var monotone = __webpack_require__(31253);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/curve/natural.js
var natural = __webpack_require__(74537);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/curve/step.js
var step = __webpack_require__(45836);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/area.js
var src_area = __webpack_require__(64439);
// EXTERNAL MODULE: ./node_modules/d3-shape/src/line.js
var line = __webpack_require__(18640);
;// ./node_modules/recharts/es6/shape/Curve.js
function Curve_typeof(o) { "@babel/helpers - typeof"; return Curve_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Curve_typeof(o); }
function Curve_extends() { Curve_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Curve_extends.apply(this, arguments); }
function Curve_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Curve_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Curve_ownKeys(Object(t), !0).forEach(function (r) { Curve_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Curve_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Curve_defineProperty(obj, key, value) { key = Curve_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Curve_toPropertyKey(t) { var i = Curve_toPrimitive(t, "string"); return "symbol" == Curve_typeof(i) ? i : i + ""; }
function Curve_toPrimitive(t, r) { if ("object" != Curve_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Curve_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview Curve
 */
;







var CURVE_FACTORIES = {
  curveBasisClosed: basisClosed,
  curveBasisOpen: basisOpen,
  curveBasis: basis,
  curveBumpX: bumpX,
  curveBumpY: bumpY,
  curveLinearClosed: linearClosed,
  curveLinear: curve_linear/* default */.A,
  curveMonotoneX: monotone/* monotoneX */.G,
  curveMonotoneY: monotone/* monotoneY */.N,
  curveNatural: natural/* default */.A,
  curveStep: step/* default */.Ay,
  curveStepAfter: step/* stepAfter */.Ps,
  curveStepBefore: step/* stepBefore */.Ko
};
var defined = function defined(p) {
  return p.x === +p.x && p.y === +p.y;
};
var getX = function getX(p) {
  return p.x;
};
var getY = function getY(p) {
  return p.y;
};
var getCurveFactory = function getCurveFactory(type, layout) {
  if (isFunction_default()(type)) {
    return type;
  }
  var name = "curve".concat(upperFirst_default()(type));
  if ((name === 'curveMonotone' || name === 'curveBump') && layout) {
    return CURVE_FACTORIES["".concat(name).concat(layout === 'vertical' ? 'Y' : 'X')];
  }
  return CURVE_FACTORIES[name] || curve_linear/* default */.A;
};
/**
 * Calculate the path of curve. Returns null if points is an empty array.
 * @return path or null
 */
var getPath = function getPath(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'linear' : _ref$type,
    _ref$points = _ref.points,
    points = _ref$points === void 0 ? [] : _ref$points,
    baseLine = _ref.baseLine,
    layout = _ref.layout,
    _ref$connectNulls = _ref.connectNulls,
    connectNulls = _ref$connectNulls === void 0 ? false : _ref$connectNulls;
  var curveFactory = getCurveFactory(type, layout);
  var formatPoints = connectNulls ? points.filter(function (entry) {
    return defined(entry);
  }) : points;
  var lineFunction;
  if (Array.isArray(baseLine)) {
    var formatBaseLine = connectNulls ? baseLine.filter(function (base) {
      return defined(base);
    }) : baseLine;
    var areaPoints = formatPoints.map(function (entry, index) {
      return Curve_objectSpread(Curve_objectSpread({}, entry), {}, {
        base: formatBaseLine[index]
      });
    });
    if (layout === 'vertical') {
      lineFunction = (0,src_area/* default */.A)().y(getY).x1(getX).x0(function (d) {
        return d.base.x;
      });
    } else {
      lineFunction = (0,src_area/* default */.A)().x(getX).y1(getY).y0(function (d) {
        return d.base.y;
      });
    }
    lineFunction.defined(defined).curve(curveFactory);
    return lineFunction(areaPoints);
  }
  if (layout === 'vertical' && isNumber(baseLine)) {
    lineFunction = (0,src_area/* default */.A)().y(getY).x1(getX).x0(baseLine);
  } else if (isNumber(baseLine)) {
    lineFunction = (0,src_area/* default */.A)().x(getX).y1(getY).y0(baseLine);
  } else {
    lineFunction = (0,line/* default */.A)().x(getX).y(getY);
  }
  lineFunction.defined(defined).curve(curveFactory);
  return lineFunction(formatPoints);
};
var Curve = function Curve(props) {
  var className = props.className,
    points = props.points,
    path = props.path,
    pathRef = props.pathRef;
  if ((!points || !points.length) && !path) {
    return null;
  }
  var realPath = points && points.length ? getPath(props) : path;
  return /*#__PURE__*/react.createElement("path", Curve_extends({}, filterProps(props, false), adaptEventHandlers(props), {
    className: (0,clsx/* default */.A)('recharts-curve', className),
    d: realPath,
    ref: pathRef
  }));
};
;// ./node_modules/recharts/es6/shape/Cross.js
function Cross_typeof(o) { "@babel/helpers - typeof"; return Cross_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Cross_typeof(o); }
var Cross_excluded = ["x", "y", "top", "left", "width", "height", "className"];
function Cross_extends() { Cross_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Cross_extends.apply(this, arguments); }
function Cross_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Cross_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Cross_ownKeys(Object(t), !0).forEach(function (r) { Cross_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Cross_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Cross_defineProperty(obj, key, value) { key = Cross_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Cross_toPropertyKey(t) { var i = Cross_toPrimitive(t, "string"); return "symbol" == Cross_typeof(i) ? i : i + ""; }
function Cross_toPrimitive(t, r) { if ("object" != Cross_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Cross_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Cross_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Cross_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Cross_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
/**
 * @fileOverview Cross
 */
;



var Cross_getPath = function getPath(x, y, width, height, top, left) {
  return "M".concat(x, ",").concat(top, "v").concat(height, "M").concat(left, ",").concat(y, "h").concat(width);
};
var Cross = function Cross(_ref) {
  var _ref$x = _ref.x,
    x = _ref$x === void 0 ? 0 : _ref$x,
    _ref$y = _ref.y,
    y = _ref$y === void 0 ? 0 : _ref$y,
    _ref$top = _ref.top,
    top = _ref$top === void 0 ? 0 : _ref$top,
    _ref$left = _ref.left,
    left = _ref$left === void 0 ? 0 : _ref$left,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 0 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 0 : _ref$height,
    className = _ref.className,
    rest = Cross_objectWithoutProperties(_ref, Cross_excluded);
  var props = Cross_objectSpread({
    x: x,
    y: y,
    top: top,
    left: left,
    width: width,
    height: height
  }, rest);
  if (!isNumber(x) || !isNumber(y) || !isNumber(width) || !isNumber(height) || !isNumber(top) || !isNumber(left)) {
    return null;
  }
  return /*#__PURE__*/react.createElement("path", Cross_extends({}, filterProps(props, true), {
    className: (0,clsx/* default */.A)('recharts-cross', className),
    d: Cross_getPath(x, y, width, height, top, left)
  }));
};
;// ./node_modules/recharts/es6/util/cursor/getCursorRectangle.js
function getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize) {
  var halfSize = tooltipAxisBandSize / 2;
  return {
    stroke: 'none',
    fill: '#ccc',
    x: layout === 'horizontal' ? activeCoordinate.x - halfSize : offset.left + 0.5,
    y: layout === 'horizontal' ? offset.top + 0.5 : activeCoordinate.y - halfSize,
    width: layout === 'horizontal' ? tooltipAxisBandSize : offset.width - 1,
    height: layout === 'horizontal' ? offset.height - 1 : tooltipAxisBandSize
  };
}
;// ./node_modules/recharts/es6/util/cursor/getRadialCursorPoints.js

/**
 * Only applicable for radial layouts
 * @param {Object} activeCoordinate ChartCoordinate
 * @returns {Object} RadialCursorPoints
 */
function getRadialCursorPoints(activeCoordinate) {
  var cx = activeCoordinate.cx,
    cy = activeCoordinate.cy,
    radius = activeCoordinate.radius,
    startAngle = activeCoordinate.startAngle,
    endAngle = activeCoordinate.endAngle;
  var startPoint = polarToCartesian(cx, cy, radius, startAngle);
  var endPoint = polarToCartesian(cx, cy, radius, endAngle);
  return {
    points: [startPoint, endPoint],
    cx: cx,
    cy: cy,
    radius: radius,
    startAngle: startAngle,
    endAngle: endAngle
  };
}
;// ./node_modules/recharts/es6/util/cursor/getCursorPoints.js


function getCursorPoints(layout, activeCoordinate, offset) {
  var x1, y1, x2, y2;
  if (layout === 'horizontal') {
    x1 = activeCoordinate.x;
    x2 = x1;
    y1 = offset.top;
    y2 = offset.top + offset.height;
  } else if (layout === 'vertical') {
    y1 = activeCoordinate.y;
    y2 = y1;
    x1 = offset.left;
    x2 = offset.left + offset.width;
  } else if (activeCoordinate.cx != null && activeCoordinate.cy != null) {
    if (layout === 'centric') {
      var cx = activeCoordinate.cx,
        cy = activeCoordinate.cy,
        innerRadius = activeCoordinate.innerRadius,
        outerRadius = activeCoordinate.outerRadius,
        angle = activeCoordinate.angle;
      var innerPoint = polarToCartesian(cx, cy, innerRadius, angle);
      var outerPoint = polarToCartesian(cx, cy, outerRadius, angle);
      x1 = innerPoint.x;
      y1 = innerPoint.y;
      x2 = outerPoint.x;
      y2 = outerPoint.y;
    } else {
      return getRadialCursorPoints(activeCoordinate);
    }
  }
  return [{
    x: x1,
    y: y1
  }, {
    x: x2,
    y: y2
  }];
}
;// ./node_modules/recharts/es6/component/Cursor.js
function Cursor_typeof(o) { "@babel/helpers - typeof"; return Cursor_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Cursor_typeof(o); }
function Cursor_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Cursor_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Cursor_ownKeys(Object(t), !0).forEach(function (r) { Cursor_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Cursor_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Cursor_defineProperty(obj, key, value) { key = Cursor_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Cursor_toPropertyKey(t) { var i = Cursor_toPrimitive(t, "string"); return "symbol" == Cursor_typeof(i) ? i : i + ""; }
function Cursor_toPrimitive(t, r) { if ("object" != Cursor_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Cursor_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;









/*
 * Cursor is the background, or a highlight,
 * that shows when user mouses over or activates
 * an area.
 *
 * It usually shows together with a tooltip
 * to emphasise which part of the chart does the tooltip refer to.
 */
function Cursor(props) {
  var _element$props$cursor, _defaultProps;
  var element = props.element,
    tooltipEventType = props.tooltipEventType,
    isActive = props.isActive,
    activeCoordinate = props.activeCoordinate,
    activePayload = props.activePayload,
    offset = props.offset,
    activeTooltipIndex = props.activeTooltipIndex,
    tooltipAxisBandSize = props.tooltipAxisBandSize,
    layout = props.layout,
    chartName = props.chartName;
  var elementPropsCursor = (_element$props$cursor = element.props.cursor) !== null && _element$props$cursor !== void 0 ? _element$props$cursor : (_defaultProps = element.type.defaultProps) === null || _defaultProps === void 0 ? void 0 : _defaultProps.cursor;
  if (!element || !elementPropsCursor || !isActive || !activeCoordinate || chartName !== 'ScatterChart' && tooltipEventType !== 'axis') {
    return null;
  }
  var restProps;
  var cursorComp = Curve;
  if (chartName === 'ScatterChart') {
    restProps = activeCoordinate;
    cursorComp = Cross;
  } else if (chartName === 'BarChart') {
    restProps = getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize);
    cursorComp = Rectangle;
  } else if (layout === 'radial') {
    var _getRadialCursorPoint = getRadialCursorPoints(activeCoordinate),
      cx = _getRadialCursorPoint.cx,
      cy = _getRadialCursorPoint.cy,
      radius = _getRadialCursorPoint.radius,
      startAngle = _getRadialCursorPoint.startAngle,
      endAngle = _getRadialCursorPoint.endAngle;
    restProps = {
      cx: cx,
      cy: cy,
      startAngle: startAngle,
      endAngle: endAngle,
      innerRadius: radius,
      outerRadius: radius
    };
    cursorComp = Sector;
  } else {
    restProps = {
      points: getCursorPoints(layout, activeCoordinate, offset)
    };
    cursorComp = Curve;
  }
  var cursorProps = Cursor_objectSpread(Cursor_objectSpread(Cursor_objectSpread(Cursor_objectSpread({
    stroke: '#ccc',
    pointerEvents: 'none'
  }, offset), restProps), filterProps(elementPropsCursor, false)), {}, {
    payload: activePayload,
    payloadIndex: activeTooltipIndex,
    className: (0,clsx/* default */.A)('recharts-tooltip-cursor', elementPropsCursor.className)
  });
  return /*#__PURE__*/(0,react.isValidElement)(elementPropsCursor) ? /*#__PURE__*/(0,react.cloneElement)(elementPropsCursor, cursorProps) : /*#__PURE__*/(0,react.createElement)(cursorComp, cursorProps);
}
;// ./node_modules/recharts/es6/chart/generateCategoricalChart.js
var generateCategoricalChart_excluded = ["item"],
  generateCategoricalChart_excluded2 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function generateCategoricalChart_typeof(o) { "@babel/helpers - typeof"; return generateCategoricalChart_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, generateCategoricalChart_typeof(o); }
function generateCategoricalChart_extends() { generateCategoricalChart_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return generateCategoricalChart_extends.apply(this, arguments); }
function generateCategoricalChart_slicedToArray(arr, i) { return generateCategoricalChart_arrayWithHoles(arr) || generateCategoricalChart_iterableToArrayLimit(arr, i) || generateCategoricalChart_unsupportedIterableToArray(arr, i) || generateCategoricalChart_nonIterableRest(); }
function generateCategoricalChart_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function generateCategoricalChart_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function generateCategoricalChart_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function generateCategoricalChart_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = generateCategoricalChart_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function generateCategoricalChart_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function generateCategoricalChart_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function generateCategoricalChart_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, generateCategoricalChart_toPropertyKey(descriptor.key), descriptor); } }
function generateCategoricalChart_createClass(Constructor, protoProps, staticProps) { if (protoProps) generateCategoricalChart_defineProperties(Constructor.prototype, protoProps); if (staticProps) generateCategoricalChart_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function generateCategoricalChart_callSuper(t, o, e) { return o = generateCategoricalChart_getPrototypeOf(o), generateCategoricalChart_possibleConstructorReturn(t, generateCategoricalChart_isNativeReflectConstruct() ? Reflect.construct(o, e || [], generateCategoricalChart_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function generateCategoricalChart_possibleConstructorReturn(self, call) { if (call && (generateCategoricalChart_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return generateCategoricalChart_assertThisInitialized(self); }
function generateCategoricalChart_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function generateCategoricalChart_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (generateCategoricalChart_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function generateCategoricalChart_getPrototypeOf(o) { generateCategoricalChart_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return generateCategoricalChart_getPrototypeOf(o); }
function generateCategoricalChart_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) generateCategoricalChart_setPrototypeOf(subClass, superClass); }
function generateCategoricalChart_setPrototypeOf(o, p) { generateCategoricalChart_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return generateCategoricalChart_setPrototypeOf(o, p); }
function generateCategoricalChart_toConsumableArray(arr) { return generateCategoricalChart_arrayWithoutHoles(arr) || generateCategoricalChart_iterableToArray(arr) || generateCategoricalChart_unsupportedIterableToArray(arr) || generateCategoricalChart_nonIterableSpread(); }
function generateCategoricalChart_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function generateCategoricalChart_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return generateCategoricalChart_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return generateCategoricalChart_arrayLikeToArray(o, minLen); }
function generateCategoricalChart_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function generateCategoricalChart_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return generateCategoricalChart_arrayLikeToArray(arr); }
function generateCategoricalChart_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function generateCategoricalChart_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function generateCategoricalChart_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? generateCategoricalChart_ownKeys(Object(t), !0).forEach(function (r) { generateCategoricalChart_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : generateCategoricalChart_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function generateCategoricalChart_defineProperty(obj, key, value) { key = generateCategoricalChart_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function generateCategoricalChart_toPropertyKey(t) { var i = generateCategoricalChart_toPrimitive(t, "string"); return "symbol" == generateCategoricalChart_typeof(i) ? i : i + ""; }
function generateCategoricalChart_toPrimitive(t, r) { if ("object" != generateCategoricalChart_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != generateCategoricalChart_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;







// eslint-disable-next-line no-restricted-imports























var ORIENT_MAP = {
  xAxis: ['bottom', 'top'],
  yAxis: ['left', 'right']
};
var FULL_WIDTH_AND_HEIGHT = {
  width: '100%',
  height: '100%'
};
var originCoordinate = {
  x: 0,
  y: 0
};

/**
 * This function exists as a temporary workaround.
 *
 * Why? generateCategoricalChart does not render `{children}` directly;
 * instead it passes them through `renderByOrder` function which reads their handlers.
 *
 * So, this is a handler that does nothing.
 * Once we get rid of `renderByOrder` and switch to JSX only, we can get rid of this handler too.
 *
 * @param {JSX} element as is in JSX
 * @returns {JSX} the same element
 */
function renderAsIs(element) {
  return element;
}
var calculateTooltipPos = function calculateTooltipPos(rangeObj, layout) {
  if (layout === 'horizontal') {
    return rangeObj.x;
  }
  if (layout === 'vertical') {
    return rangeObj.y;
  }
  if (layout === 'centric') {
    return rangeObj.angle;
  }
  return rangeObj.radius;
};
var getActiveCoordinate = function getActiveCoordinate(layout, tooltipTicks, activeIndex, rangeObj) {
  var entry = tooltipTicks.find(function (tick) {
    return tick && tick.index === activeIndex;
  });
  if (entry) {
    if (layout === 'horizontal') {
      return {
        x: entry.coordinate,
        y: rangeObj.y
      };
    }
    if (layout === 'vertical') {
      return {
        x: rangeObj.x,
        y: entry.coordinate
      };
    }
    if (layout === 'centric') {
      var _angle = entry.coordinate;
      var _radius = rangeObj.radius;
      return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, _radius, _angle)), {}, {
        angle: _angle,
        radius: _radius
      });
    }
    var radius = entry.coordinate;
    var angle = rangeObj.angle;
    return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle)), {}, {
      angle: angle,
      radius: radius
    });
  }
  return originCoordinate;
};
var getDisplayedData = function getDisplayedData(data, _ref) {
  var graphicalItems = _ref.graphicalItems,
    dataStartIndex = _ref.dataStartIndex,
    dataEndIndex = _ref.dataEndIndex;
  var itemsData = (graphicalItems !== null && graphicalItems !== void 0 ? graphicalItems : []).reduce(function (result, child) {
    var itemData = child.props.data;
    if (itemData && itemData.length) {
      return [].concat(generateCategoricalChart_toConsumableArray(result), generateCategoricalChart_toConsumableArray(itemData));
    }
    return result;
  }, []);
  if (itemsData.length > 0) {
    return itemsData;
  }
  if (data && data.length && isNumber(dataStartIndex) && isNumber(dataEndIndex)) {
    return data.slice(dataStartIndex, dataEndIndex + 1);
  }
  return [];
};
function getDefaultDomainByAxisType(axisType) {
  return axisType === 'number' ? [0, 'auto'] : undefined;
}

/**
 * Get the content to be displayed in the tooltip
 * @param  {Object} state          Current state
 * @param  {Array}  chartData      The data defined in chart
 * @param  {Number} activeIndex    Active index of data
 * @param  {String} activeLabel    Active label of data
 * @return {Array}                 The content of tooltip
 */
var getTooltipContent = function getTooltipContent(state, chartData, activeIndex, activeLabel) {
  var graphicalItems = state.graphicalItems,
    tooltipAxis = state.tooltipAxis;
  var displayedData = getDisplayedData(chartData, state);
  if (activeIndex < 0 || !graphicalItems || !graphicalItems.length || activeIndex >= displayedData.length) {
    return null;
  }
  // get data by activeIndex when the axis don't allow duplicated category
  return graphicalItems.reduce(function (result, child) {
    var _child$props$data;
    /**
     * Fixes: https://github.com/recharts/recharts/issues/3669
     * Defaulting to chartData below to fix an edge case where the tooltip does not include data from all charts
     * when a separate dataset is passed to chart prop data and specified on Line/Area/etc prop data
     */
    var data = (_child$props$data = child.props.data) !== null && _child$props$data !== void 0 ? _child$props$data : chartData;
    if (data && state.dataStartIndex + state.dataEndIndex !== 0 &&
    // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    state.dataEndIndex - state.dataStartIndex >= activeIndex) {
      data = data.slice(state.dataStartIndex, state.dataEndIndex + 1);
    }
    var payload;
    if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
      // graphic child has data props
      var entries = data === undefined ? displayedData : data;
      payload = findEntryInArray(entries, tooltipAxis.dataKey, activeLabel);
    } else {
      payload = data && data[activeIndex] || displayedData[activeIndex];
    }
    if (!payload) {
      return result;
    }
    return [].concat(generateCategoricalChart_toConsumableArray(result), [getTooltipItem(child, payload)]);
  }, []);
};

/**
 * Returns tooltip data based on a mouse position (as a parameter or in state)
 * @param  {Object} state     current state
 * @param  {Array}  chartData the data defined in chart
 * @param  {String} layout     The layout type of chart
 * @param  {Object} rangeObj  { x, y } coordinates
 * @return {Object}           Tooltip data data
 */
var getTooltipData = function getTooltipData(state, chartData, layout, rangeObj) {
  var rangeData = rangeObj || {
    x: state.chartX,
    y: state.chartY
  };
  var pos = calculateTooltipPos(rangeData, layout);
  var ticks = state.orderedTooltipTicks,
    axis = state.tooltipAxis,
    tooltipTicks = state.tooltipTicks;
  var activeIndex = calculateActiveTickIndex(pos, ticks, tooltipTicks, axis);
  if (activeIndex >= 0 && tooltipTicks) {
    var activeLabel = tooltipTicks[activeIndex] && tooltipTicks[activeIndex].value;
    var activePayload = getTooltipContent(state, chartData, activeIndex, activeLabel);
    var activeCoordinate = getActiveCoordinate(layout, ticks, activeIndex, rangeData);
    return {
      activeTooltipIndex: activeIndex,
      activeLabel: activeLabel,
      activePayload: activePayload,
      activeCoordinate: activeCoordinate
    };
  }
  return null;
};

/**
 * Get the configuration of axis by the options of axis instance
 * @param  {Object} props         Latest props
 * @param {Array}  axes           The instance of axes
 * @param  {Array} graphicalItems The instances of item
 * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
 * @param  {String} axisIdKey     The unique id of an axis
 * @param  {Object} stackGroups   The items grouped by axisId and stackId
 * @param {Number} dataStartIndex The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
 * @return {Object}      Configuration
 */
var getAxisMapByAxes = function getAxisMapByAxes(props, _ref2) {
  var axes = _ref2.axes,
    graphicalItems = _ref2.graphicalItems,
    axisType = _ref2.axisType,
    axisIdKey = _ref2.axisIdKey,
    stackGroups = _ref2.stackGroups,
    dataStartIndex = _ref2.dataStartIndex,
    dataEndIndex = _ref2.dataEndIndex;
  var layout = props.layout,
    children = props.children,
    stackOffset = props.stackOffset;
  var isCategorical = isCategoricalAxis(layout, axisType);

  // Eliminate duplicated axes
  return axes.reduce(function (result, child) {
    var _childProps$domain2;
    var childProps = child.type.defaultProps !== undefined ? generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, child.type.defaultProps), child.props) : child.props;
    var type = childProps.type,
      dataKey = childProps.dataKey,
      allowDataOverflow = childProps.allowDataOverflow,
      allowDuplicatedCategory = childProps.allowDuplicatedCategory,
      scale = childProps.scale,
      ticks = childProps.ticks,
      includeHidden = childProps.includeHidden;
    var axisId = childProps[axisIdKey];
    if (result[axisId]) {
      return result;
    }
    var displayedData = getDisplayedData(props.data, {
      graphicalItems: graphicalItems.filter(function (item) {
        var _defaultProps;
        var itemAxisId = axisIdKey in item.props ? item.props[axisIdKey] : (_defaultProps = item.type.defaultProps) === null || _defaultProps === void 0 ? void 0 : _defaultProps[axisIdKey];
        return itemAxisId === axisId;
      }),
      dataStartIndex: dataStartIndex,
      dataEndIndex: dataEndIndex
    });
    var len = displayedData.length;
    var domain, duplicateDomain, categoricalDomain;

    /*
     * This is a hack to short-circuit the domain creation here to enhance performance.
     * Usually, the data is used to determine the domain, but when the user specifies
     * a domain upfront (via props), there is no need to calculate the domain start and end,
     * which is very expensive for a larger amount of data.
     * The only thing that would prohibit short-circuiting is when the user doesn't allow data overflow,
     * because the axis is supposed to ignore the specified domain that way.
     */
    if (isDomainSpecifiedByUser(childProps.domain, allowDataOverflow, type)) {
      domain = parseSpecifiedDomain(childProps.domain, null, allowDataOverflow);
      /* The chart can be categorical and have the domain specified in numbers
       * we still need to calculate the categorical domain
       * TODO: refactor this more
       */
      if (isCategorical && (type === 'number' || scale !== 'auto')) {
        categoricalDomain = getDomainOfDataByKey(displayedData, dataKey, 'category');
      }
    }

    // if the domain is defaulted we need this for `originalDomain` as well
    var defaultDomain = getDefaultDomainByAxisType(type);

    // we didn't create the domain from user's props above, so we need to calculate it
    if (!domain || domain.length === 0) {
      var _childProps$domain;
      var childDomain = (_childProps$domain = childProps.domain) !== null && _childProps$domain !== void 0 ? _childProps$domain : defaultDomain;
      if (dataKey) {
        // has dataKey in <Axis />
        domain = getDomainOfDataByKey(displayedData, dataKey, type);
        if (type === 'category' && isCategorical) {
          // the field type is category data and this axis is categorical axis
          var duplicate = hasDuplicate(domain);
          if (allowDuplicatedCategory && duplicate) {
            duplicateDomain = domain;
            // When category axis has duplicated text, serial numbers are used to generate scale
            domain = range_default()(0, len);
          } else if (!allowDuplicatedCategory) {
            // remove duplicated category
            domain = parseDomainOfCategoryAxis(childDomain, domain, child).reduce(function (finalDomain, entry) {
              return finalDomain.indexOf(entry) >= 0 ? finalDomain : [].concat(generateCategoricalChart_toConsumableArray(finalDomain), [entry]);
            }, []);
          }
        } else if (type === 'category') {
          // the field type is category data and this axis is numerical axis
          if (!allowDuplicatedCategory) {
            domain = parseDomainOfCategoryAxis(childDomain, domain, child).reduce(function (finalDomain, entry) {
              return finalDomain.indexOf(entry) >= 0 || entry === '' || isNil_default()(entry) ? finalDomain : [].concat(generateCategoricalChart_toConsumableArray(finalDomain), [entry]);
            }, []);
          } else {
            // eliminate undefined or null or empty string
            domain = domain.filter(function (entry) {
              return entry !== '' && !isNil_default()(entry);
            });
          }
        } else if (type === 'number') {
          // the field type is numerical
          var errorBarsDomain = parseErrorBarsOfAxis(displayedData, graphicalItems.filter(function (item) {
            var _defaultProps2, _defaultProps3;
            var itemAxisId = axisIdKey in item.props ? item.props[axisIdKey] : (_defaultProps2 = item.type.defaultProps) === null || _defaultProps2 === void 0 ? void 0 : _defaultProps2[axisIdKey];
            var itemHide = 'hide' in item.props ? item.props.hide : (_defaultProps3 = item.type.defaultProps) === null || _defaultProps3 === void 0 ? void 0 : _defaultProps3.hide;
            return itemAxisId === axisId && (includeHidden || !itemHide);
          }), dataKey, axisType, layout);
          if (errorBarsDomain) {
            domain = errorBarsDomain;
          }
        }
        if (isCategorical && (type === 'number' || scale !== 'auto')) {
          categoricalDomain = getDomainOfDataByKey(displayedData, dataKey, 'category');
        }
      } else if (isCategorical) {
        // the axis is a categorical axis
        domain = range_default()(0, len);
      } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && type === 'number') {
        // when stackOffset is 'expand', the domain may be calculated as [0, 1.000000000002]
        domain = stackOffset === 'expand' ? [0, 1] : getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
      } else {
        domain = getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function (item) {
          var itemAxisId = axisIdKey in item.props ? item.props[axisIdKey] : item.type.defaultProps[axisIdKey];
          var itemHide = 'hide' in item.props ? item.props.hide : item.type.defaultProps.hide;
          return itemAxisId === axisId && (includeHidden || !itemHide);
        }), type, layout, true);
      }
      if (type === 'number') {
        // To detect wether there is any reference lines whose props alwaysShow is true
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType, ticks);
        if (childDomain) {
          domain = parseSpecifiedDomain(childDomain, domain, allowDataOverflow);
        }
      } else if (type === 'category' && childDomain) {
        var axisDomain = childDomain;
        var isDomainValid = domain.every(function (entry) {
          return axisDomain.indexOf(entry) >= 0;
        });
        if (isDomainValid) {
          domain = axisDomain;
        }
      }
    }
    return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, result), {}, generateCategoricalChart_defineProperty({}, axisId, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, childProps), {}, {
      axisType: axisType,
      domain: domain,
      categoricalDomain: categoricalDomain,
      duplicateDomain: duplicateDomain,
      originalDomain: (_childProps$domain2 = childProps.domain) !== null && _childProps$domain2 !== void 0 ? _childProps$domain2 : defaultDomain,
      isCategorical: isCategorical,
      layout: layout
    })));
  }, {});
};

/**
 * Get the configuration of axis by the options of item,
 * this kind of axis does not display in chart
 * @param  {Object} props         Latest props
 * @param  {Array} graphicalItems The instances of item
 * @param  {ReactElement} Axis    Axis Component
 * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
 * @param  {String} axisIdKey     The unique id of an axis
 * @param  {Object} stackGroups   The items grouped by axisId and stackId
 * @param {Number} dataStartIndex The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
 * @return {Object}               Configuration
 */
var getAxisMapByItems = function getAxisMapByItems(props, _ref3) {
  var graphicalItems = _ref3.graphicalItems,
    Axis = _ref3.Axis,
    axisType = _ref3.axisType,
    axisIdKey = _ref3.axisIdKey,
    stackGroups = _ref3.stackGroups,
    dataStartIndex = _ref3.dataStartIndex,
    dataEndIndex = _ref3.dataEndIndex;
  var layout = props.layout,
    children = props.children;
  var displayedData = getDisplayedData(props.data, {
    graphicalItems: graphicalItems,
    dataStartIndex: dataStartIndex,
    dataEndIndex: dataEndIndex
  });
  var len = displayedData.length;
  var isCategorical = isCategoricalAxis(layout, axisType);
  var index = -1;

  // The default type of x-axis is category axis,
  // The default contents of x-axis is the serial numbers of data
  // The default type of y-axis is number axis
  // The default contents of y-axis is the domain of data
  return graphicalItems.reduce(function (result, child) {
    var childProps = child.type.defaultProps !== undefined ? generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, child.type.defaultProps), child.props) : child.props;
    var axisId = childProps[axisIdKey];
    var originalDomain = getDefaultDomainByAxisType('number');
    if (!result[axisId]) {
      index++;
      var domain;
      if (isCategorical) {
        domain = range_default()(0, len);
      } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
        domain = getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
      } else {
        domain = parseSpecifiedDomain(originalDomain, getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function (item) {
          var _defaultProps4, _defaultProps5;
          var itemAxisId = axisIdKey in item.props ? item.props[axisIdKey] : (_defaultProps4 = item.type.defaultProps) === null || _defaultProps4 === void 0 ? void 0 : _defaultProps4[axisIdKey];
          var itemHide = 'hide' in item.props ? item.props.hide : (_defaultProps5 = item.type.defaultProps) === null || _defaultProps5 === void 0 ? void 0 : _defaultProps5.hide;
          return itemAxisId === axisId && !itemHide;
        }), 'number', layout), Axis.defaultProps.allowDataOverflow);
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
      }
      return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, result), {}, generateCategoricalChart_defineProperty({}, axisId, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
        axisType: axisType
      }, Axis.defaultProps), {}, {
        hide: true,
        orientation: get_default()(ORIENT_MAP, "".concat(axisType, ".").concat(index % 2), null),
        domain: domain,
        originalDomain: originalDomain,
        isCategorical: isCategorical,
        layout: layout
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return result;
  }, {});
};

/**
 * Get the configuration of all x-axis or y-axis
 * @param  {Object} props          Latest props
 * @param  {String} axisType       The type of axis
 * @param  {React.ComponentType}  [AxisComp]      Axis Component
 * @param  {Array}  graphicalItems The instances of item
 * @param  {Object} stackGroups    The items grouped by axisId and stackId
 * @param {Number} dataStartIndex  The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex    The end index of the data series when a brush is applied
 * @return {Object}          Configuration
 */
var getAxisMap = function getAxisMap(props, _ref4) {
  var _ref4$axisType = _ref4.axisType,
    axisType = _ref4$axisType === void 0 ? 'xAxis' : _ref4$axisType,
    AxisComp = _ref4.AxisComp,
    graphicalItems = _ref4.graphicalItems,
    stackGroups = _ref4.stackGroups,
    dataStartIndex = _ref4.dataStartIndex,
    dataEndIndex = _ref4.dataEndIndex;
  var children = props.children;
  var axisIdKey = "".concat(axisType, "Id");
  // Get all the instance of Axis
  var axes = findAllByType(children, AxisComp);
  var axisMap = {};
  if (axes && axes.length) {
    axisMap = getAxisMapByAxes(props, {
      axes: axes,
      graphicalItems: graphicalItems,
      axisType: axisType,
      axisIdKey: axisIdKey,
      stackGroups: stackGroups,
      dataStartIndex: dataStartIndex,
      dataEndIndex: dataEndIndex
    });
  } else if (graphicalItems && graphicalItems.length) {
    axisMap = getAxisMapByItems(props, {
      Axis: AxisComp,
      graphicalItems: graphicalItems,
      axisType: axisType,
      axisIdKey: axisIdKey,
      stackGroups: stackGroups,
      dataStartIndex: dataStartIndex,
      dataEndIndex: dataEndIndex
    });
  }
  return axisMap;
};
var tooltipTicksGenerator = function tooltipTicksGenerator(axisMap) {
  var axis = getAnyElementOfObject(axisMap);
  var tooltipTicks = getTicksOfAxis(axis, false, true);
  return {
    tooltipTicks: tooltipTicks,
    orderedTooltipTicks: sortBy_default()(tooltipTicks, function (o) {
      return o.coordinate;
    }),
    tooltipAxis: axis,
    tooltipAxisBandSize: getBandSizeOfAxis(axis, tooltipTicks)
  };
};

/**
 * Returns default, reset state for the categorical chart.
 * @param {Object} props Props object to use when creating the default state
 * @return {Object} Whole new state
 */
var createDefaultState = function createDefaultState(props) {
  var children = props.children,
    defaultShowTooltip = props.defaultShowTooltip;
  var brushItem = findChildByType(children, Brush);
  var startIndex = 0;
  var endIndex = 0;
  if (props.data && props.data.length !== 0) {
    endIndex = props.data.length - 1;
  }
  if (brushItem && brushItem.props) {
    if (brushItem.props.startIndex >= 0) {
      startIndex = brushItem.props.startIndex;
    }
    if (brushItem.props.endIndex >= 0) {
      endIndex = brushItem.props.endIndex;
    }
  }
  return {
    chartX: 0,
    chartY: 0,
    dataStartIndex: startIndex,
    dataEndIndex: endIndex,
    activeTooltipIndex: -1,
    isTooltipActive: Boolean(defaultShowTooltip)
  };
};
var hasGraphicalBarItem = function hasGraphicalBarItem(graphicalItems) {
  if (!graphicalItems || !graphicalItems.length) {
    return false;
  }
  return graphicalItems.some(function (item) {
    var name = getDisplayName(item && item.type);
    return name && name.indexOf('Bar') >= 0;
  });
};
var getAxisNameByLayout = function getAxisNameByLayout(layout) {
  if (layout === 'horizontal') {
    return {
      numericAxisName: 'yAxis',
      cateAxisName: 'xAxis'
    };
  }
  if (layout === 'vertical') {
    return {
      numericAxisName: 'xAxis',
      cateAxisName: 'yAxis'
    };
  }
  if (layout === 'centric') {
    return {
      numericAxisName: 'radiusAxis',
      cateAxisName: 'angleAxis'
    };
  }
  return {
    numericAxisName: 'angleAxis',
    cateAxisName: 'radiusAxis'
  };
};

/**
 * Calculate the offset of main part in the svg element
 * @param  {Object} params.props          Latest props
 * @param  {Array}  params.graphicalItems The instances of item
 * @param  {Object} params.xAxisMap       The configuration of x-axis
 * @param  {Object} params.yAxisMap       The configuration of y-axis
 * @param  {Object} prevLegendBBox        The boundary box of legend
 * @return {Object} The offset of main part in the svg element
 */
var calculateOffset = function calculateOffset(_ref5, prevLegendBBox) {
  var props = _ref5.props,
    graphicalItems = _ref5.graphicalItems,
    _ref5$xAxisMap = _ref5.xAxisMap,
    xAxisMap = _ref5$xAxisMap === void 0 ? {} : _ref5$xAxisMap,
    _ref5$yAxisMap = _ref5.yAxisMap,
    yAxisMap = _ref5$yAxisMap === void 0 ? {} : _ref5$yAxisMap;
  var width = props.width,
    height = props.height,
    children = props.children;
  var margin = props.margin || {};
  var brushItem = findChildByType(children, Brush);
  var legendItem = findChildByType(children, Legend);
  var offsetH = Object.keys(yAxisMap).reduce(function (result, id) {
    var entry = yAxisMap[id];
    var orientation = entry.orientation;
    if (!entry.mirror && !entry.hide) {
      return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, result), {}, generateCategoricalChart_defineProperty({}, orientation, result[orientation] + entry.width));
    }
    return result;
  }, {
    left: margin.left || 0,
    right: margin.right || 0
  });
  var offsetV = Object.keys(xAxisMap).reduce(function (result, id) {
    var entry = xAxisMap[id];
    var orientation = entry.orientation;
    if (!entry.mirror && !entry.hide) {
      return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, result), {}, generateCategoricalChart_defineProperty({}, orientation, get_default()(result, "".concat(orientation)) + entry.height));
    }
    return result;
  }, {
    top: margin.top || 0,
    bottom: margin.bottom || 0
  });
  var offset = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, offsetV), offsetH);
  var brushBottom = offset.bottom;
  if (brushItem) {
    offset.bottom += brushItem.props.height || Brush.defaultProps.height;
  }
  if (legendItem && prevLegendBBox) {
    // @ts-expect-error margin is optional in props but required in appendOffsetOfLegend
    offset = appendOffsetOfLegend(offset, graphicalItems, props, prevLegendBBox);
  }
  var offsetWidth = width - offset.left - offset.right;
  var offsetHeight = height - offset.top - offset.bottom;
  return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
    brushBottom: brushBottom
  }, offset), {}, {
    // never return negative values for height and width
    width: Math.max(offsetWidth, 0),
    height: Math.max(offsetHeight, 0)
  });
};
// Determine the size of the axis, used for calculation of relative bar sizes
var getCartesianAxisSize = function getCartesianAxisSize(axisObj, axisName) {
  if (axisName === 'xAxis') {
    return axisObj[axisName].width;
  }
  if (axisName === 'yAxis') {
    return axisObj[axisName].height;
  }
  // This is only supported for Bar charts (i.e. charts with cartesian axes), so we should never get here
  return undefined;
};
var generateCategoricalChart = function generateCategoricalChart(_ref6) {
  var chartName = _ref6.chartName,
    GraphicalChild = _ref6.GraphicalChild,
    _ref6$defaultTooltipE = _ref6.defaultTooltipEventType,
    defaultTooltipEventType = _ref6$defaultTooltipE === void 0 ? 'axis' : _ref6$defaultTooltipE,
    _ref6$validateTooltip = _ref6.validateTooltipEventTypes,
    validateTooltipEventTypes = _ref6$validateTooltip === void 0 ? ['axis'] : _ref6$validateTooltip,
    axisComponents = _ref6.axisComponents,
    legendContent = _ref6.legendContent,
    formatAxisMap = _ref6.formatAxisMap,
    defaultProps = _ref6.defaultProps;
  var getFormatItems = function getFormatItems(props, currentState) {
    var graphicalItems = currentState.graphicalItems,
      stackGroups = currentState.stackGroups,
      offset = currentState.offset,
      updateId = currentState.updateId,
      dataStartIndex = currentState.dataStartIndex,
      dataEndIndex = currentState.dataEndIndex;
    var barSize = props.barSize,
      layout = props.layout,
      barGap = props.barGap,
      barCategoryGap = props.barCategoryGap,
      globalMaxBarSize = props.maxBarSize;
    var _getAxisNameByLayout = getAxisNameByLayout(layout),
      numericAxisName = _getAxisNameByLayout.numericAxisName,
      cateAxisName = _getAxisNameByLayout.cateAxisName;
    var hasBar = hasGraphicalBarItem(graphicalItems);
    var formattedItems = [];
    graphicalItems.forEach(function (item, index) {
      var displayedData = getDisplayedData(props.data, {
        graphicalItems: [item],
        dataStartIndex: dataStartIndex,
        dataEndIndex: dataEndIndex
      });
      var itemProps = item.type.defaultProps !== undefined ? generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, item.type.defaultProps), item.props) : item.props;
      var dataKey = itemProps.dataKey,
        childMaxBarSize = itemProps.maxBarSize;
      // axisId of the numerical axis
      var numericAxisId = itemProps["".concat(numericAxisName, "Id")];
      // axisId of the categorical axis
      var cateAxisId = itemProps["".concat(cateAxisName, "Id")];
      var axisObjInitialValue = {};
      var axisObj = axisComponents.reduce(function (result, entry) {
        var _item$type$displayNam, _item$type;
        // map of axisId to axis for a specific axis type
        var axisMap = currentState["".concat(entry.axisType, "Map")];
        // axisId of axis we are currently computing
        var id = itemProps["".concat(entry.axisType, "Id")];

        /**
         * tell the user in dev mode that their configuration is incorrect if we cannot find a match between
         * axisId on the chart and axisId on the axis. zAxis does not get passed in the map for ComposedChart,
         * leave it out of the check for now.
         */
        !(axisMap && axisMap[id] || entry.axisType === 'zAxis') ?  false ? 0 : (0,tiny_invariant/* default */.A)(false) : void 0;

        // the axis we are currently formatting
        var axis = axisMap[id];
        return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, result), {}, generateCategoricalChart_defineProperty(generateCategoricalChart_defineProperty({}, entry.axisType, axis), "".concat(entry.axisType, "Ticks"), getTicksOfAxis(axis)));
      }, axisObjInitialValue);
      var cateAxis = axisObj[cateAxisName];
      var cateTicks = axisObj["".concat(cateAxisName, "Ticks")];
      var stackedData = stackGroups && stackGroups[numericAxisId] && stackGroups[numericAxisId].hasStack && getStackedDataOfItem(item, stackGroups[numericAxisId].stackGroups);
      var itemIsBar = getDisplayName(item.type).indexOf('Bar') >= 0;
      var bandSize = getBandSizeOfAxis(cateAxis, cateTicks);
      var barPosition = [];
      var sizeList = hasBar && getBarSizeList({
        barSize: barSize,
        stackGroups: stackGroups,
        totalSize: getCartesianAxisSize(axisObj, cateAxisName)
      });
      if (itemIsBar) {
        var _ref7, _getBandSizeOfAxis;
        // If it is bar, calculate the position of bar
        var maxBarSize = isNil_default()(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
        var barBandSize = (_ref7 = (_getBandSizeOfAxis = getBandSizeOfAxis(cateAxis, cateTicks, true)) !== null && _getBandSizeOfAxis !== void 0 ? _getBandSizeOfAxis : maxBarSize) !== null && _ref7 !== void 0 ? _ref7 : 0;
        barPosition = getBarPosition({
          barGap: barGap,
          barCategoryGap: barCategoryGap,
          bandSize: barBandSize !== bandSize ? barBandSize : bandSize,
          sizeList: sizeList[cateAxisId],
          maxBarSize: maxBarSize
        });
        if (barBandSize !== bandSize) {
          barPosition = barPosition.map(function (pos) {
            return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, pos), {}, {
              position: generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, pos.position), {}, {
                offset: pos.position.offset - barBandSize / 2
              })
            });
          });
        }
      }
      // @ts-expect-error we should stop reading data from ReactElements
      var composedFn = item && item.type && item.type.getComposedData;
      if (composedFn) {
        formattedItems.push({
          props: generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, composedFn(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, axisObj), {}, {
            displayedData: displayedData,
            props: props,
            dataKey: dataKey,
            item: item,
            bandSize: bandSize,
            barPosition: barPosition,
            offset: offset,
            stackedData: stackedData,
            layout: layout,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
          }))), {}, generateCategoricalChart_defineProperty(generateCategoricalChart_defineProperty(generateCategoricalChart_defineProperty({
            key: item.key || "item-".concat(index)
          }, numericAxisName, axisObj[numericAxisName]), cateAxisName, axisObj[cateAxisName]), "animationId", updateId)),
          childIndex: parseChildIndex(item, props.children),
          item: item
        });
      }
    });
    return formattedItems;
  };

  /**
   * The AxisMaps are expensive to render on large data sets
   * so provide the ability to store them in state and only update them when necessary
   * they are dependent upon the start and end index of
   * the brush so it's important that this method is called _after_
   * the state is updated with any new start/end indices
   *
   * @param {Object} props          The props object to be used for updating the axismaps
   * dataStartIndex: The start index of the data series when a brush is applied
   * dataEndIndex: The end index of the data series when a brush is applied
   * updateId: The update id
   * @param {Object} prevState      Prev state
   * @return {Object} state New state to set
   */
  var updateStateOfAxisMapsOffsetAndStackGroups = function updateStateOfAxisMapsOffsetAndStackGroups(_ref8, prevState) {
    var props = _ref8.props,
      dataStartIndex = _ref8.dataStartIndex,
      dataEndIndex = _ref8.dataEndIndex,
      updateId = _ref8.updateId;
    if (!validateWidthHeight({
      props: props
    })) {
      return null;
    }
    var children = props.children,
      layout = props.layout,
      stackOffset = props.stackOffset,
      data = props.data,
      reverseStackOrder = props.reverseStackOrder;
    var _getAxisNameByLayout2 = getAxisNameByLayout(layout),
      numericAxisName = _getAxisNameByLayout2.numericAxisName,
      cateAxisName = _getAxisNameByLayout2.cateAxisName;
    var graphicalItems = findAllByType(children, GraphicalChild);
    var stackGroups = getStackGroupsByAxisId(data, graphicalItems, "".concat(numericAxisName, "Id"), "".concat(cateAxisName, "Id"), stackOffset, reverseStackOrder);
    var axisObj = axisComponents.reduce(function (result, entry) {
      var name = "".concat(entry.axisType, "Map");
      return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, result), {}, generateCategoricalChart_defineProperty({}, name, getAxisMap(props, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, entry), {}, {
        graphicalItems: graphicalItems,
        stackGroups: entry.axisType === numericAxisName && stackGroups,
        dataStartIndex: dataStartIndex,
        dataEndIndex: dataEndIndex
      }))));
    }, {});
    var offset = calculateOffset(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, axisObj), {}, {
      props: props,
      graphicalItems: graphicalItems
    }), prevState === null || prevState === void 0 ? void 0 : prevState.legendBBox);
    Object.keys(axisObj).forEach(function (key) {
      axisObj[key] = formatAxisMap(props, axisObj[key], offset, key.replace('Map', ''), chartName);
    });
    var cateAxisMap = axisObj["".concat(cateAxisName, "Map")];
    var ticksObj = tooltipTicksGenerator(cateAxisMap);
    var formattedGraphicalItems = getFormatItems(props, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, axisObj), {}, {
      dataStartIndex: dataStartIndex,
      dataEndIndex: dataEndIndex,
      updateId: updateId,
      graphicalItems: graphicalItems,
      stackGroups: stackGroups,
      offset: offset
    }));
    return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
      formattedGraphicalItems: formattedGraphicalItems,
      graphicalItems: graphicalItems,
      offset: offset,
      stackGroups: stackGroups
    }, ticksObj), axisObj);
  };
  var CategoricalChartWrapper = /*#__PURE__*/function (_Component) {
    function CategoricalChartWrapper(_props) {
      var _props$id, _props$throttleDelay;
      var _this;
      generateCategoricalChart_classCallCheck(this, CategoricalChartWrapper);
      _this = generateCategoricalChart_callSuper(this, CategoricalChartWrapper, [_props]);
      generateCategoricalChart_defineProperty(_this, "eventEmitterSymbol", Symbol('rechartsEventEmitter'));
      generateCategoricalChart_defineProperty(_this, "accessibilityManager", new AccessibilityManager());
      generateCategoricalChart_defineProperty(_this, "handleLegendBBoxUpdate", function (box) {
        if (box) {
          var _this$state = _this.state,
            dataStartIndex = _this$state.dataStartIndex,
            dataEndIndex = _this$state.dataEndIndex,
            updateId = _this$state.updateId;
          _this.setState(generateCategoricalChart_objectSpread({
            legendBBox: box
          }, updateStateOfAxisMapsOffsetAndStackGroups({
            props: _this.props,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex,
            updateId: updateId
          }, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, _this.state), {}, {
            legendBBox: box
          }))));
        }
      });
      generateCategoricalChart_defineProperty(_this, "handleReceiveSyncEvent", function (cId, data, emitter) {
        if (_this.props.syncId === cId) {
          if (emitter === _this.eventEmitterSymbol && typeof _this.props.syncMethod !== 'function') {
            return;
          }
          _this.applySyncEvent(data);
        }
      });
      generateCategoricalChart_defineProperty(_this, "handleBrushChange", function (_ref9) {
        var startIndex = _ref9.startIndex,
          endIndex = _ref9.endIndex;
        // Only trigger changes if the extents of the brush have actually changed
        if (startIndex !== _this.state.dataStartIndex || endIndex !== _this.state.dataEndIndex) {
          var updateId = _this.state.updateId;
          _this.setState(function () {
            return generateCategoricalChart_objectSpread({
              dataStartIndex: startIndex,
              dataEndIndex: endIndex
            }, updateStateOfAxisMapsOffsetAndStackGroups({
              props: _this.props,
              dataStartIndex: startIndex,
              dataEndIndex: endIndex,
              updateId: updateId
            }, _this.state));
          });
          _this.triggerSyncEvent({
            dataStartIndex: startIndex,
            dataEndIndex: endIndex
          });
        }
      });
      /**
       * The handler of mouse entering chart
       * @param  {Object} e              Event object
       * @return {Null}                  null
       */
      generateCategoricalChart_defineProperty(_this, "handleMouseEnter", function (e) {
        var mouse = _this.getMouseInfo(e);
        if (mouse) {
          var _nextState = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, mouse), {}, {
            isTooltipActive: true
          });
          _this.setState(_nextState);
          _this.triggerSyncEvent(_nextState);
          var onMouseEnter = _this.props.onMouseEnter;
          if (isFunction_default()(onMouseEnter)) {
            onMouseEnter(_nextState, e);
          }
        }
      });
      generateCategoricalChart_defineProperty(_this, "triggeredAfterMouseMove", function (e) {
        var mouse = _this.getMouseInfo(e);
        var nextState = mouse ? generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, mouse), {}, {
          isTooltipActive: true
        }) : {
          isTooltipActive: false
        };
        _this.setState(nextState);
        _this.triggerSyncEvent(nextState);
        var onMouseMove = _this.props.onMouseMove;
        if (isFunction_default()(onMouseMove)) {
          onMouseMove(nextState, e);
        }
      });
      /**
       * The handler of mouse entering a scatter
       * @param {Object} el The active scatter
       * @return {Object} no return
       */
      generateCategoricalChart_defineProperty(_this, "handleItemMouseEnter", function (el) {
        _this.setState(function () {
          return {
            isTooltipActive: true,
            activeItem: el,
            activePayload: el.tooltipPayload,
            activeCoordinate: el.tooltipPosition || {
              x: el.cx,
              y: el.cy
            }
          };
        });
      });
      /**
       * The handler of mouse leaving a scatter
       * @return {Object} no return
       */
      generateCategoricalChart_defineProperty(_this, "handleItemMouseLeave", function () {
        _this.setState(function () {
          return {
            isTooltipActive: false
          };
        });
      });
      /**
       * The handler of mouse moving in chart
       * @param  {React.MouseEvent} e        Event object
       * @return {void} no return
       */
      generateCategoricalChart_defineProperty(_this, "handleMouseMove", function (e) {
        e.persist();
        _this.throttleTriggeredAfterMouseMove(e);
      });
      /**
       * The handler if mouse leaving chart
       * @param {Object} e Event object
       * @return {Null} no return
       */
      generateCategoricalChart_defineProperty(_this, "handleMouseLeave", function (e) {
        _this.throttleTriggeredAfterMouseMove.cancel();
        var nextState = {
          isTooltipActive: false
        };
        _this.setState(nextState);
        _this.triggerSyncEvent(nextState);
        var onMouseLeave = _this.props.onMouseLeave;
        if (isFunction_default()(onMouseLeave)) {
          onMouseLeave(nextState, e);
        }
      });
      generateCategoricalChart_defineProperty(_this, "handleOuterEvent", function (e) {
        var eventName = getReactEventByType(e);
        var event = get_default()(_this.props, "".concat(eventName));
        if (eventName && isFunction_default()(event)) {
          var _mouse;
          var mouse;
          if (/.*touch.*/i.test(eventName)) {
            mouse = _this.getMouseInfo(e.changedTouches[0]);
          } else {
            mouse = _this.getMouseInfo(e);
          }
          event((_mouse = mouse) !== null && _mouse !== void 0 ? _mouse : {}, e);
        }
      });
      generateCategoricalChart_defineProperty(_this, "handleClick", function (e) {
        var mouse = _this.getMouseInfo(e);
        if (mouse) {
          var _nextState2 = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, mouse), {}, {
            isTooltipActive: true
          });
          _this.setState(_nextState2);
          _this.triggerSyncEvent(_nextState2);
          var onClick = _this.props.onClick;
          if (isFunction_default()(onClick)) {
            onClick(_nextState2, e);
          }
        }
      });
      generateCategoricalChart_defineProperty(_this, "handleMouseDown", function (e) {
        var onMouseDown = _this.props.onMouseDown;
        if (isFunction_default()(onMouseDown)) {
          var _nextState3 = _this.getMouseInfo(e);
          onMouseDown(_nextState3, e);
        }
      });
      generateCategoricalChart_defineProperty(_this, "handleMouseUp", function (e) {
        var onMouseUp = _this.props.onMouseUp;
        if (isFunction_default()(onMouseUp)) {
          var _nextState4 = _this.getMouseInfo(e);
          onMouseUp(_nextState4, e);
        }
      });
      generateCategoricalChart_defineProperty(_this, "handleTouchMove", function (e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.throttleTriggeredAfterMouseMove(e.changedTouches[0]);
        }
      });
      generateCategoricalChart_defineProperty(_this, "handleTouchStart", function (e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseDown(e.changedTouches[0]);
        }
      });
      generateCategoricalChart_defineProperty(_this, "handleTouchEnd", function (e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseUp(e.changedTouches[0]);
        }
      });
      generateCategoricalChart_defineProperty(_this, "handleDoubleClick", function (e) {
        var onDoubleClick = _this.props.onDoubleClick;
        if (isFunction_default()(onDoubleClick)) {
          var _nextState5 = _this.getMouseInfo(e);
          onDoubleClick(_nextState5, e);
        }
      });
      generateCategoricalChart_defineProperty(_this, "handleContextMenu", function (e) {
        var onContextMenu = _this.props.onContextMenu;
        if (isFunction_default()(onContextMenu)) {
          var _nextState6 = _this.getMouseInfo(e);
          onContextMenu(_nextState6, e);
        }
      });
      generateCategoricalChart_defineProperty(_this, "triggerSyncEvent", function (data) {
        if (_this.props.syncId !== undefined) {
          eventCenter.emit(SYNC_EVENT, _this.props.syncId, data, _this.eventEmitterSymbol);
        }
      });
      generateCategoricalChart_defineProperty(_this, "applySyncEvent", function (data) {
        var _this$props = _this.props,
          layout = _this$props.layout,
          syncMethod = _this$props.syncMethod;
        var updateId = _this.state.updateId;
        var dataStartIndex = data.dataStartIndex,
          dataEndIndex = data.dataEndIndex;
        if (data.dataStartIndex !== undefined || data.dataEndIndex !== undefined) {
          _this.setState(generateCategoricalChart_objectSpread({
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
          }, updateStateOfAxisMapsOffsetAndStackGroups({
            props: _this.props,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex,
            updateId: updateId
          }, _this.state)));
        } else if (data.activeTooltipIndex !== undefined) {
          var chartX = data.chartX,
            chartY = data.chartY;
          var activeTooltipIndex = data.activeTooltipIndex;
          var _this$state2 = _this.state,
            offset = _this$state2.offset,
            tooltipTicks = _this$state2.tooltipTicks;
          if (!offset) {
            return;
          }
          if (typeof syncMethod === 'function') {
            // Call a callback function. If there is an application specific algorithm
            activeTooltipIndex = syncMethod(tooltipTicks, data);
          } else if (syncMethod === 'value') {
            // Set activeTooltipIndex to the index with the same value as data.activeLabel
            // For loop instead of findIndex because the latter is very slow in some browsers
            activeTooltipIndex = -1; // in case we cannot find the element
            for (var i = 0; i < tooltipTicks.length; i++) {
              if (tooltipTicks[i].value === data.activeLabel) {
                activeTooltipIndex = i;
                break;
              }
            }
          }
          var viewBox = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, offset), {}, {
            x: offset.left,
            y: offset.top
          });
          // When a categorical chart is combined with another chart, the value of chartX
          // and chartY may beyond the boundaries.
          var validateChartX = Math.min(chartX, viewBox.x + viewBox.width);
          var validateChartY = Math.min(chartY, viewBox.y + viewBox.height);
          var activeLabel = tooltipTicks[activeTooltipIndex] && tooltipTicks[activeTooltipIndex].value;
          var activePayload = getTooltipContent(_this.state, _this.props.data, activeTooltipIndex);
          var activeCoordinate = tooltipTicks[activeTooltipIndex] ? {
            x: layout === 'horizontal' ? tooltipTicks[activeTooltipIndex].coordinate : validateChartX,
            y: layout === 'horizontal' ? validateChartY : tooltipTicks[activeTooltipIndex].coordinate
          } : originCoordinate;
          _this.setState(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, data), {}, {
            activeLabel: activeLabel,
            activeCoordinate: activeCoordinate,
            activePayload: activePayload,
            activeTooltipIndex: activeTooltipIndex
          }));
        } else {
          _this.setState(data);
        }
      });
      generateCategoricalChart_defineProperty(_this, "renderCursor", function (element) {
        var _element$props$active;
        var _this$state3 = _this.state,
          isTooltipActive = _this$state3.isTooltipActive,
          activeCoordinate = _this$state3.activeCoordinate,
          activePayload = _this$state3.activePayload,
          offset = _this$state3.offset,
          activeTooltipIndex = _this$state3.activeTooltipIndex,
          tooltipAxisBandSize = _this$state3.tooltipAxisBandSize;
        var tooltipEventType = _this.getTooltipEventType();
        // The cursor is a part of the Tooltip, and it should be shown (by default) when the Tooltip is active.
        var isActive = (_element$props$active = element.props.active) !== null && _element$props$active !== void 0 ? _element$props$active : isTooltipActive;
        var layout = _this.props.layout;
        var key = element.key || '_recharts-cursor';
        return /*#__PURE__*/react.createElement(Cursor, {
          key: key,
          activeCoordinate: activeCoordinate,
          activePayload: activePayload,
          activeTooltipIndex: activeTooltipIndex,
          chartName: chartName,
          element: element,
          isActive: isActive,
          layout: layout,
          offset: offset,
          tooltipAxisBandSize: tooltipAxisBandSize,
          tooltipEventType: tooltipEventType
        });
      });
      generateCategoricalChart_defineProperty(_this, "renderPolarAxis", function (element, displayName, index) {
        var axisType = get_default()(element, 'type.axisType');
        var axisMap = get_default()(_this.state, "".concat(axisType, "Map"));
        var elementDefaultProps = element.type.defaultProps;
        var elementProps = elementDefaultProps !== undefined ? generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, elementDefaultProps), element.props) : element.props;
        var axisOption = axisMap && axisMap[elementProps["".concat(axisType, "Id")]];
        return /*#__PURE__*/(0,react.cloneElement)(element, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, axisOption), {}, {
          className: (0,clsx/* default */.A)(axisType, axisOption.className),
          key: element.key || "".concat(displayName, "-").concat(index),
          ticks: getTicksOfAxis(axisOption, true)
        }));
      });
      generateCategoricalChart_defineProperty(_this, "renderPolarGrid", function (element) {
        var _element$props = element.props,
          radialLines = _element$props.radialLines,
          polarAngles = _element$props.polarAngles,
          polarRadius = _element$props.polarRadius;
        var _this$state4 = _this.state,
          radiusAxisMap = _this$state4.radiusAxisMap,
          angleAxisMap = _this$state4.angleAxisMap;
        var radiusAxis = getAnyElementOfObject(radiusAxisMap);
        var angleAxis = getAnyElementOfObject(angleAxisMap);
        var cx = angleAxis.cx,
          cy = angleAxis.cy,
          innerRadius = angleAxis.innerRadius,
          outerRadius = angleAxis.outerRadius;
        return /*#__PURE__*/(0,react.cloneElement)(element, {
          polarAngles: Array.isArray(polarAngles) ? polarAngles : getTicksOfAxis(angleAxis, true).map(function (entry) {
            return entry.coordinate;
          }),
          polarRadius: Array.isArray(polarRadius) ? polarRadius : getTicksOfAxis(radiusAxis, true).map(function (entry) {
            return entry.coordinate;
          }),
          cx: cx,
          cy: cy,
          innerRadius: innerRadius,
          outerRadius: outerRadius,
          key: element.key || 'polar-grid',
          radialLines: radialLines
        });
      });
      /**
       * Draw legend
       * @return {ReactElement}            The instance of Legend
       */
      generateCategoricalChart_defineProperty(_this, "renderLegend", function () {
        var formattedGraphicalItems = _this.state.formattedGraphicalItems;
        var _this$props2 = _this.props,
          children = _this$props2.children,
          width = _this$props2.width,
          height = _this$props2.height;
        var margin = _this.props.margin || {};
        var legendWidth = width - (margin.left || 0) - (margin.right || 0);
        var props = getLegendProps({
          children: children,
          formattedGraphicalItems: formattedGraphicalItems,
          legendWidth: legendWidth,
          legendContent: legendContent
        });
        if (!props) {
          return null;
        }
        var item = props.item,
          otherProps = generateCategoricalChart_objectWithoutProperties(props, generateCategoricalChart_excluded);
        return /*#__PURE__*/(0,react.cloneElement)(item, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, otherProps), {}, {
          chartWidth: width,
          chartHeight: height,
          margin: margin,
          onBBoxUpdate: _this.handleLegendBBoxUpdate
        }));
      });
      /**
       * Draw Tooltip
       * @return {ReactElement}  The instance of Tooltip
       */
      generateCategoricalChart_defineProperty(_this, "renderTooltip", function () {
        var _tooltipItem$props$ac;
        var _this$props3 = _this.props,
          children = _this$props3.children,
          accessibilityLayer = _this$props3.accessibilityLayer;
        var tooltipItem = findChildByType(children, Tooltip_Tooltip);
        if (!tooltipItem) {
          return null;
        }
        var _this$state5 = _this.state,
          isTooltipActive = _this$state5.isTooltipActive,
          activeCoordinate = _this$state5.activeCoordinate,
          activePayload = _this$state5.activePayload,
          activeLabel = _this$state5.activeLabel,
          offset = _this$state5.offset;

        // The user can set isActive on the Tooltip,
        // and we respect the user to enable customisation.
        // The Tooltip is active if the user has set isActive, or if the tooltip is active due to a mouse event.
        var isActive = (_tooltipItem$props$ac = tooltipItem.props.active) !== null && _tooltipItem$props$ac !== void 0 ? _tooltipItem$props$ac : isTooltipActive;
        return /*#__PURE__*/(0,react.cloneElement)(tooltipItem, {
          viewBox: generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, offset), {}, {
            x: offset.left,
            y: offset.top
          }),
          active: isActive,
          label: activeLabel,
          payload: isActive ? activePayload : [],
          coordinate: activeCoordinate,
          accessibilityLayer: accessibilityLayer
        });
      });
      generateCategoricalChart_defineProperty(_this, "renderBrush", function (element) {
        var _this$props4 = _this.props,
          margin = _this$props4.margin,
          data = _this$props4.data;
        var _this$state6 = _this.state,
          offset = _this$state6.offset,
          dataStartIndex = _this$state6.dataStartIndex,
          dataEndIndex = _this$state6.dataEndIndex,
          updateId = _this$state6.updateId;

        // TODO: update brush when children update
        return /*#__PURE__*/(0,react.cloneElement)(element, {
          key: element.key || '_recharts-brush',
          onChange: combineEventHandlers(_this.handleBrushChange, element.props.onChange),
          data: data,
          x: isNumber(element.props.x) ? element.props.x : offset.left,
          y: isNumber(element.props.y) ? element.props.y : offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
          width: isNumber(element.props.width) ? element.props.width : offset.width,
          startIndex: dataStartIndex,
          endIndex: dataEndIndex,
          updateId: "brush-".concat(updateId)
        });
      });
      generateCategoricalChart_defineProperty(_this, "renderReferenceElement", function (element, displayName, index) {
        if (!element) {
          return null;
        }
        var _this2 = _this,
          clipPathId = _this2.clipPathId;
        var _this$state7 = _this.state,
          xAxisMap = _this$state7.xAxisMap,
          yAxisMap = _this$state7.yAxisMap,
          offset = _this$state7.offset;
        var elementDefaultProps = element.type.defaultProps || {};
        var _element$props2 = element.props,
          _element$props2$xAxis = _element$props2.xAxisId,
          xAxisId = _element$props2$xAxis === void 0 ? elementDefaultProps.xAxisId : _element$props2$xAxis,
          _element$props2$yAxis = _element$props2.yAxisId,
          yAxisId = _element$props2$yAxis === void 0 ? elementDefaultProps.yAxisId : _element$props2$yAxis;
        return /*#__PURE__*/(0,react.cloneElement)(element, {
          key: element.key || "".concat(displayName, "-").concat(index),
          xAxis: xAxisMap[xAxisId],
          yAxis: yAxisMap[yAxisId],
          viewBox: {
            x: offset.left,
            y: offset.top,
            width: offset.width,
            height: offset.height
          },
          clipPathId: clipPathId
        });
      });
      generateCategoricalChart_defineProperty(_this, "renderActivePoints", function (_ref10) {
        var item = _ref10.item,
          activePoint = _ref10.activePoint,
          basePoint = _ref10.basePoint,
          childIndex = _ref10.childIndex,
          isRange = _ref10.isRange;
        var result = [];
        // item is not a React Element so we don't need to resolve defaultProps.
        var key = item.props.key;
        var itemItemProps = item.item.type.defaultProps !== undefined ? generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, item.item.type.defaultProps), item.item.props) : item.item.props;
        var activeDot = itemItemProps.activeDot,
          dataKey = itemItemProps.dataKey;
        var dotProps = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
          index: childIndex,
          dataKey: dataKey,
          cx: activePoint.x,
          cy: activePoint.y,
          r: 4,
          fill: getMainColorOfGraphicItem(item.item),
          strokeWidth: 2,
          stroke: '#fff',
          payload: activePoint.payload,
          value: activePoint.value
        }, filterProps(activeDot, false)), adaptEventHandlers(activeDot));
        result.push(CategoricalChartWrapper.renderActiveDot(activeDot, dotProps, "".concat(key, "-activePoint-").concat(childIndex)));
        if (basePoint) {
          result.push(CategoricalChartWrapper.renderActiveDot(activeDot, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, dotProps), {}, {
            cx: basePoint.x,
            cy: basePoint.y
          }), "".concat(key, "-basePoint-").concat(childIndex)));
        } else if (isRange) {
          result.push(null);
        }
        return result;
      });
      generateCategoricalChart_defineProperty(_this, "renderGraphicChild", function (element, displayName, index) {
        var item = _this.filterFormatItem(element, displayName, index);
        if (!item) {
          return null;
        }
        var tooltipEventType = _this.getTooltipEventType();
        var _this$state8 = _this.state,
          isTooltipActive = _this$state8.isTooltipActive,
          tooltipAxis = _this$state8.tooltipAxis,
          activeTooltipIndex = _this$state8.activeTooltipIndex,
          activeLabel = _this$state8.activeLabel;
        var children = _this.props.children;
        var tooltipItem = findChildByType(children, Tooltip_Tooltip);
        // item is not a React Element so we don't need to resolve defaultProps
        var _item$props = item.props,
          points = _item$props.points,
          isRange = _item$props.isRange,
          baseLine = _item$props.baseLine;
        var itemItemProps = item.item.type.defaultProps !== undefined ? generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, item.item.type.defaultProps), item.item.props) : item.item.props;
        var activeDot = itemItemProps.activeDot,
          hide = itemItemProps.hide,
          activeBar = itemItemProps.activeBar,
          activeShape = itemItemProps.activeShape;
        var hasActive = Boolean(!hide && isTooltipActive && tooltipItem && (activeDot || activeBar || activeShape));
        var itemEvents = {};
        if (tooltipEventType !== 'axis' && tooltipItem && tooltipItem.props.trigger === 'click') {
          itemEvents = {
            onClick: combineEventHandlers(_this.handleItemMouseEnter, element.props.onClick)
          };
        } else if (tooltipEventType !== 'axis') {
          itemEvents = {
            onMouseLeave: combineEventHandlers(_this.handleItemMouseLeave, element.props.onMouseLeave),
            onMouseEnter: combineEventHandlers(_this.handleItemMouseEnter, element.props.onMouseEnter)
          };
        }
        var graphicalItem = /*#__PURE__*/(0,react.cloneElement)(element, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, item.props), itemEvents));
        function findWithPayload(entry) {
          // TODO needs to verify dataKey is Function
          return typeof tooltipAxis.dataKey === 'function' ? tooltipAxis.dataKey(entry.payload) : null;
        }
        if (hasActive) {
          if (activeTooltipIndex >= 0) {
            var activePoint, basePoint;
            if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
              // number transform to string
              var specifiedKey = typeof tooltipAxis.dataKey === 'function' ? findWithPayload : 'payload.'.concat(tooltipAxis.dataKey.toString());
              activePoint = findEntryInArray(points, specifiedKey, activeLabel);
              basePoint = isRange && baseLine && findEntryInArray(baseLine, specifiedKey, activeLabel);
            } else {
              activePoint = points === null || points === void 0 ? void 0 : points[activeTooltipIndex];
              basePoint = isRange && baseLine && baseLine[activeTooltipIndex];
            }
            if (activeShape || activeBar) {
              var activeIndex = element.props.activeIndex !== undefined ? element.props.activeIndex : activeTooltipIndex;
              return [/*#__PURE__*/(0,react.cloneElement)(element, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, item.props), itemEvents), {}, {
                activeIndex: activeIndex
              })), null, null];
            }
            if (!isNil_default()(activePoint)) {
              return [graphicalItem].concat(generateCategoricalChart_toConsumableArray(_this.renderActivePoints({
                item: item,
                activePoint: activePoint,
                basePoint: basePoint,
                childIndex: activeTooltipIndex,
                isRange: isRange
              })));
            }
          } else {
            var _this$getItemByXY;
            /**
             * We hit this block if consumer uses a Tooltip without XAxis and/or YAxis.
             * In which case, this.state.activeTooltipIndex never gets set
             * because the mouse events that trigger that value getting set never get trigged without the axis components.
             *
             * An example usage case is a FunnelChart
             */
            var _ref11 = (_this$getItemByXY = _this.getItemByXY(_this.state.activeCoordinate)) !== null && _this$getItemByXY !== void 0 ? _this$getItemByXY : {
                graphicalItem: graphicalItem
              },
              _ref11$graphicalItem = _ref11.graphicalItem,
              _ref11$graphicalItem$ = _ref11$graphicalItem.item,
              xyItem = _ref11$graphicalItem$ === void 0 ? element : _ref11$graphicalItem$,
              childIndex = _ref11$graphicalItem.childIndex;
            var elementProps = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, item.props), itemEvents), {}, {
              activeIndex: childIndex
            });
            return [/*#__PURE__*/(0,react.cloneElement)(xyItem, elementProps), null, null];
          }
        }
        if (isRange) {
          return [graphicalItem, null, null];
        }
        return [graphicalItem, null];
      });
      generateCategoricalChart_defineProperty(_this, "renderCustomized", function (element, displayName, index) {
        return /*#__PURE__*/(0,react.cloneElement)(element, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
          key: "recharts-customized-".concat(index)
        }, _this.props), _this.state));
      });
      generateCategoricalChart_defineProperty(_this, "renderMap", {
        CartesianGrid: {
          handler: renderAsIs,
          once: true
        },
        ReferenceArea: {
          handler: _this.renderReferenceElement
        },
        ReferenceLine: {
          handler: renderAsIs
        },
        ReferenceDot: {
          handler: _this.renderReferenceElement
        },
        XAxis: {
          handler: renderAsIs
        },
        YAxis: {
          handler: renderAsIs
        },
        Brush: {
          handler: _this.renderBrush,
          once: true
        },
        Bar: {
          handler: _this.renderGraphicChild
        },
        Line: {
          handler: _this.renderGraphicChild
        },
        Area: {
          handler: _this.renderGraphicChild
        },
        Radar: {
          handler: _this.renderGraphicChild
        },
        RadialBar: {
          handler: _this.renderGraphicChild
        },
        Scatter: {
          handler: _this.renderGraphicChild
        },
        Pie: {
          handler: _this.renderGraphicChild
        },
        Funnel: {
          handler: _this.renderGraphicChild
        },
        Tooltip: {
          handler: _this.renderCursor,
          once: true
        },
        PolarGrid: {
          handler: _this.renderPolarGrid,
          once: true
        },
        PolarAngleAxis: {
          handler: _this.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: _this.renderPolarAxis
        },
        Customized: {
          handler: _this.renderCustomized
        }
      });
      _this.clipPathId = "".concat((_props$id = _props.id) !== null && _props$id !== void 0 ? _props$id : uniqueId('recharts'), "-clip");

      // trigger 60fps
      _this.throttleTriggeredAfterMouseMove = throttle_default()(_this.triggeredAfterMouseMove, (_props$throttleDelay = _props.throttleDelay) !== null && _props$throttleDelay !== void 0 ? _props$throttleDelay : 1000 / 60);
      _this.state = {};
      return _this;
    }
    generateCategoricalChart_inherits(CategoricalChartWrapper, _Component);
    return generateCategoricalChart_createClass(CategoricalChartWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props$margin$le, _this$props$margin$to;
        this.addListener();
        this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (_this$props$margin$le = this.props.margin.left) !== null && _this$props$margin$le !== void 0 ? _this$props$margin$le : 0,
            top: (_this$props$margin$to = this.props.margin.top) !== null && _this$props$margin$to !== void 0 ? _this$props$margin$to : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        });
        this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function displayDefaultTooltip() {
        var _this$props5 = this.props,
          children = _this$props5.children,
          data = _this$props5.data,
          height = _this$props5.height,
          layout = _this$props5.layout;
        var tooltipElem = findChildByType(children, Tooltip_Tooltip);
        // If the chart doesn't include a <Tooltip /> element, there's no tooltip to display
        if (!tooltipElem) {
          return;
        }
        var defaultIndex = tooltipElem.props.defaultIndex;

        // Protect against runtime errors
        if (typeof defaultIndex !== 'number' || defaultIndex < 0 || defaultIndex > this.state.tooltipTicks.length - 1) {
          return;
        }
        var activeLabel = this.state.tooltipTicks[defaultIndex] && this.state.tooltipTicks[defaultIndex].value;
        var activePayload = getTooltipContent(this.state, data, defaultIndex, activeLabel);
        var independentAxisCoord = this.state.tooltipTicks[defaultIndex].coordinate;
        var dependentAxisCoord = (this.state.offset.top + height) / 2;
        var isHorizontal = layout === 'horizontal';
        var activeCoordinate = isHorizontal ? {
          x: independentAxisCoord,
          y: dependentAxisCoord
        } : {
          y: independentAxisCoord,
          x: dependentAxisCoord
        };

        // Unlike other chart types, scatter plot's tooltip positions rely on both X and Y coordinates. Only the scatter plot
        // element knows its own Y coordinates.
        // If there's a scatter plot, we'll want to grab that element for an interrogation.
        var scatterPlotElement = this.state.formattedGraphicalItems.find(function (_ref12) {
          var item = _ref12.item;
          return item.type.name === 'Scatter';
        });
        if (scatterPlotElement) {
          activeCoordinate = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, activeCoordinate), scatterPlotElement.props.points[defaultIndex].tooltipPosition);
          activePayload = scatterPlotElement.props.points[defaultIndex].tooltipPayload;
        }
        var nextState = {
          activeTooltipIndex: defaultIndex,
          isTooltipActive: true,
          activeLabel: activeLabel,
          activePayload: activePayload,
          activeCoordinate: activeCoordinate
        };
        this.setState(nextState);
        this.renderCursor(tooltipElem);

        // Make sure that anyone who keyboard-only users who tab to the chart will start their
        // cursors at defaultIndex
        this.accessibilityManager.setIndex(defaultIndex);
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function getSnapshotBeforeUpdate(prevProps, prevState) {
        if (!this.props.accessibilityLayer) {
          return null;
        }
        if (this.state.tooltipTicks !== prevState.tooltipTicks) {
          this.accessibilityManager.setDetails({
            coordinateList: this.state.tooltipTicks
          });
        }
        if (this.props.layout !== prevProps.layout) {
          this.accessibilityManager.setDetails({
            layout: this.props.layout
          });
        }
        if (this.props.margin !== prevProps.margin) {
          var _this$props$margin$le2, _this$props$margin$to2;
          this.accessibilityManager.setDetails({
            offset: {
              left: (_this$props$margin$le2 = this.props.margin.left) !== null && _this$props$margin$le2 !== void 0 ? _this$props$margin$le2 : 0,
              top: (_this$props$margin$to2 = this.props.margin.top) !== null && _this$props$margin$to2 !== void 0 ? _this$props$margin$to2 : 0
            }
          });
        }

        // Something has to be returned for getSnapshotBeforeUpdate
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        // Check to see if the Tooltip updated. If so, re-check default tooltip position
        if (!isChildrenEqual([findChildByType(prevProps.children, Tooltip_Tooltip)], [findChildByType(this.props.children, Tooltip_Tooltip)])) {
          this.displayDefaultTooltip();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.removeListener();
        this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function getTooltipEventType() {
        var tooltipItem = findChildByType(this.props.children, Tooltip_Tooltip);
        if (tooltipItem && typeof tooltipItem.props.shared === 'boolean') {
          var eventType = tooltipItem.props.shared ? 'axis' : 'item';
          return validateTooltipEventTypes.indexOf(eventType) >= 0 ? eventType : defaultTooltipEventType;
        }
        return defaultTooltipEventType;
      }

      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function getMouseInfo(event) {
        if (!this.container) {
          return null;
        }
        var element = this.container;
        var boundingRect = element.getBoundingClientRect();
        var containerOffset = getOffset(boundingRect);
        var e = {
          chartX: Math.round(event.pageX - containerOffset.left),
          chartY: Math.round(event.pageY - containerOffset.top)
        };
        var scale = boundingRect.width / element.offsetWidth || 1;
        var rangeObj = this.inRange(e.chartX, e.chartY, scale);
        if (!rangeObj) {
          return null;
        }
        var _this$state9 = this.state,
          xAxisMap = _this$state9.xAxisMap,
          yAxisMap = _this$state9.yAxisMap;
        var tooltipEventType = this.getTooltipEventType();
        var toolTipData = getTooltipData(this.state, this.props.data, this.props.layout, rangeObj);
        if (tooltipEventType !== 'axis' && xAxisMap && yAxisMap) {
          var xScale = getAnyElementOfObject(xAxisMap).scale;
          var yScale = getAnyElementOfObject(yAxisMap).scale;
          var xValue = xScale && xScale.invert ? xScale.invert(e.chartX) : null;
          var yValue = yScale && yScale.invert ? yScale.invert(e.chartY) : null;
          return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, e), {}, {
            xValue: xValue,
            yValue: yValue
          }, toolTipData);
        }
        if (toolTipData) {
          return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, e), toolTipData);
        }
        return null;
      }
    }, {
      key: "inRange",
      value: function inRange(x, y) {
        var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var layout = this.props.layout;
        var scaledX = x / scale,
          scaledY = y / scale;
        if (layout === 'horizontal' || layout === 'vertical') {
          var offset = this.state.offset;
          var isInRange = scaledX >= offset.left && scaledX <= offset.left + offset.width && scaledY >= offset.top && scaledY <= offset.top + offset.height;
          return isInRange ? {
            x: scaledX,
            y: scaledY
          } : null;
        }
        var _this$state10 = this.state,
          angleAxisMap = _this$state10.angleAxisMap,
          radiusAxisMap = _this$state10.radiusAxisMap;
        if (angleAxisMap && radiusAxisMap) {
          var angleAxis = getAnyElementOfObject(angleAxisMap);
          return inRangeOfSector({
            x: scaledX,
            y: scaledY
          }, angleAxis);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function parseEventsOfWrapper() {
        var children = this.props.children;
        var tooltipEventType = this.getTooltipEventType();
        var tooltipItem = findChildByType(children, Tooltip_Tooltip);
        var tooltipEvents = {};
        if (tooltipItem && tooltipEventType === 'axis') {
          if (tooltipItem.props.trigger === 'click') {
            tooltipEvents = {
              onClick: this.handleClick
            };
          } else {
            tooltipEvents = {
              onMouseEnter: this.handleMouseEnter,
              onDoubleClick: this.handleDoubleClick,
              onMouseMove: this.handleMouseMove,
              onMouseLeave: this.handleMouseLeave,
              onTouchMove: this.handleTouchMove,
              onTouchStart: this.handleTouchStart,
              onTouchEnd: this.handleTouchEnd,
              onContextMenu: this.handleContextMenu
            };
          }
        }

        // @ts-expect-error adaptEventHandlers expects DOM Event but generateCategoricalChart works with React UIEvents
        var outerEvents = adaptEventHandlers(this.props, this.handleOuterEvent);
        return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, outerEvents), tooltipEvents);
      }
    }, {
      key: "addListener",
      value: function addListener() {
        eventCenter.on(SYNC_EVENT, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function removeListener() {
        eventCenter.removeListener(SYNC_EVENT, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function filterFormatItem(item, displayName, childIndex) {
        var formattedGraphicalItems = this.state.formattedGraphicalItems;
        for (var i = 0, len = formattedGraphicalItems.length; i < len; i++) {
          var entry = formattedGraphicalItems[i];
          if (entry.item === item || entry.props.key === item.key || displayName === getDisplayName(entry.item.type) && childIndex === entry.childIndex) {
            return entry;
          }
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function renderClipPath() {
        var clipPathId = this.clipPathId;
        var _this$state$offset = this.state.offset,
          left = _this$state$offset.left,
          top = _this$state$offset.top,
          height = _this$state$offset.height,
          width = _this$state$offset.width;
        return /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("clipPath", {
          id: clipPathId
        }, /*#__PURE__*/react.createElement("rect", {
          x: left,
          y: top,
          height: height,
          width: width
        })));
      }
    }, {
      key: "getXScales",
      value: function getXScales() {
        var xAxisMap = this.state.xAxisMap;
        return xAxisMap ? Object.entries(xAxisMap).reduce(function (res, _ref13) {
          var _ref14 = generateCategoricalChart_slicedToArray(_ref13, 2),
            axisId = _ref14[0],
            axisProps = _ref14[1];
          return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, res), {}, generateCategoricalChart_defineProperty({}, axisId, axisProps.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function getYScales() {
        var yAxisMap = this.state.yAxisMap;
        return yAxisMap ? Object.entries(yAxisMap).reduce(function (res, _ref15) {
          var _ref16 = generateCategoricalChart_slicedToArray(_ref15, 2),
            axisId = _ref16[0],
            axisProps = _ref16[1];
          return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, res), {}, generateCategoricalChart_defineProperty({}, axisId, axisProps.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function getXScaleByAxisId(axisId) {
        var _this$state$xAxisMap;
        return (_this$state$xAxisMap = this.state.xAxisMap) === null || _this$state$xAxisMap === void 0 || (_this$state$xAxisMap = _this$state$xAxisMap[axisId]) === null || _this$state$xAxisMap === void 0 ? void 0 : _this$state$xAxisMap.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function getYScaleByAxisId(axisId) {
        var _this$state$yAxisMap;
        return (_this$state$yAxisMap = this.state.yAxisMap) === null || _this$state$yAxisMap === void 0 || (_this$state$yAxisMap = _this$state$yAxisMap[axisId]) === null || _this$state$yAxisMap === void 0 ? void 0 : _this$state$yAxisMap.scale;
      }
    }, {
      key: "getItemByXY",
      value: function getItemByXY(chartXY) {
        var _this$state11 = this.state,
          formattedGraphicalItems = _this$state11.formattedGraphicalItems,
          activeItem = _this$state11.activeItem;
        if (formattedGraphicalItems && formattedGraphicalItems.length) {
          for (var i = 0, len = formattedGraphicalItems.length; i < len; i++) {
            var graphicalItem = formattedGraphicalItems[i];
            // graphicalItem is not a React Element so we don't need to resolve defaultProps
            var props = graphicalItem.props,
              item = graphicalItem.item;
            var itemProps = item.type.defaultProps !== undefined ? generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, item.type.defaultProps), item.props) : item.props;
            var itemDisplayName = getDisplayName(item.type);
            if (itemDisplayName === 'Bar') {
              var activeBarItem = (props.data || []).find(function (entry) {
                return isInRectangle(chartXY, entry);
              });
              if (activeBarItem) {
                return {
                  graphicalItem: graphicalItem,
                  payload: activeBarItem
                };
              }
            } else if (itemDisplayName === 'RadialBar') {
              var _activeBarItem = (props.data || []).find(function (entry) {
                return inRangeOfSector(chartXY, entry);
              });
              if (_activeBarItem) {
                return {
                  graphicalItem: graphicalItem,
                  payload: _activeBarItem
                };
              }
            } else if (isFunnel(graphicalItem, activeItem) || isPie(graphicalItem, activeItem) || isScatter(graphicalItem, activeItem)) {
              var activeIndex = getActiveShapeIndexForTooltip({
                graphicalItem: graphicalItem,
                activeTooltipItem: activeItem,
                itemData: itemProps.data
              });
              var childIndex = itemProps.activeIndex === undefined ? activeIndex : itemProps.activeIndex;
              return {
                graphicalItem: generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, graphicalItem), {}, {
                  childIndex: childIndex
                }),
                payload: isScatter(graphicalItem, activeItem) ? itemProps.data[activeIndex] : graphicalItem.props.data[activeIndex]
              };
            }
          }
        }
        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;
        if (!validateWidthHeight(this)) {
          return null;
        }
        var _this$props6 = this.props,
          children = _this$props6.children,
          className = _this$props6.className,
          width = _this$props6.width,
          height = _this$props6.height,
          style = _this$props6.style,
          compact = _this$props6.compact,
          title = _this$props6.title,
          desc = _this$props6.desc,
          others = generateCategoricalChart_objectWithoutProperties(_this$props6, generateCategoricalChart_excluded2);
        var attrs = filterProps(others, false);

        // The "compact" mode is mainly used as the panorama within Brush
        if (compact) {
          return /*#__PURE__*/react.createElement(ChartLayoutContextProvider, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /*#__PURE__*/react.createElement(Surface, generateCategoricalChart_extends({}, attrs, {
            width: width,
            height: height,
            title: title,
            desc: desc
          }), this.renderClipPath(), renderByOrder(children, this.renderMap)));
        }
        if (this.props.accessibilityLayer) {
          var _this$props$tabIndex, _this$props$role;
          // Set tabIndex to 0 by default (can be overwritten)
          attrs.tabIndex = (_this$props$tabIndex = this.props.tabIndex) !== null && _this$props$tabIndex !== void 0 ? _this$props$tabIndex : 0;
          // Set role to img by default (can be overwritten)
          attrs.role = (_this$props$role = this.props.role) !== null && _this$props$role !== void 0 ? _this$props$role : 'application';
          attrs.onKeyDown = function (e) {
            _this3.accessibilityManager.keyboardEvent(e);
            // 'onKeyDown' is not currently a supported prop that can be passed through
            // if it's added, this should be added: this.props.onKeyDown(e);
          };
          attrs.onFocus = function () {
            _this3.accessibilityManager.focus();
            // 'onFocus' is not currently a supported prop that can be passed through
            // if it's added, the focus event should be forwarded to the prop
          };
        }
        var events = this.parseEventsOfWrapper();
        return /*#__PURE__*/react.createElement(ChartLayoutContextProvider, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /*#__PURE__*/react.createElement("div", generateCategoricalChart_extends({
          className: (0,clsx/* default */.A)('recharts-wrapper', className),
          style: generateCategoricalChart_objectSpread({
            position: 'relative',
            cursor: 'default',
            width: width,
            height: height
          }, style)
        }, events, {
          ref: function ref(node) {
            _this3.container = node;
          }
        }), /*#__PURE__*/react.createElement(Surface, generateCategoricalChart_extends({}, attrs, {
          width: width,
          height: height,
          title: title,
          desc: desc,
          style: FULL_WIDTH_AND_HEIGHT
        }), this.renderClipPath(), renderByOrder(children, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(react.Component);
  generateCategoricalChart_defineProperty(CategoricalChartWrapper, "displayName", chartName);
  // todo join specific chart propTypes
  generateCategoricalChart_defineProperty(CategoricalChartWrapper, "defaultProps", generateCategoricalChart_objectSpread({
    layout: 'horizontal',
    stackOffset: 'none',
    barCategoryGap: '10%',
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: false,
    syncMethod: 'index'
  }, defaultProps));
  generateCategoricalChart_defineProperty(CategoricalChartWrapper, "getDerivedStateFromProps", function (nextProps, prevState) {
    var dataKey = nextProps.dataKey,
      data = nextProps.data,
      children = nextProps.children,
      width = nextProps.width,
      height = nextProps.height,
      layout = nextProps.layout,
      stackOffset = nextProps.stackOffset,
      margin = nextProps.margin;
    var dataStartIndex = prevState.dataStartIndex,
      dataEndIndex = prevState.dataEndIndex;
    if (prevState.updateId === undefined) {
      var defaultState = createDefaultState(nextProps);
      return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, defaultState), {}, {
        updateId: 0
      }, updateStateOfAxisMapsOffsetAndStackGroups(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
        props: nextProps
      }, defaultState), {}, {
        updateId: 0
      }), prevState)), {}, {
        prevDataKey: dataKey,
        prevData: data,
        prevWidth: width,
        prevHeight: height,
        prevLayout: layout,
        prevStackOffset: stackOffset,
        prevMargin: margin,
        prevChildren: children
      });
    }
    if (dataKey !== prevState.prevDataKey || data !== prevState.prevData || width !== prevState.prevWidth || height !== prevState.prevHeight || layout !== prevState.prevLayout || stackOffset !== prevState.prevStackOffset || !shallowEqual(margin, prevState.prevMargin)) {
      var _defaultState = createDefaultState(nextProps);

      // Fixes https://github.com/recharts/recharts/issues/2143
      var keepFromPrevState = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: prevState.chartX,
        chartY: prevState.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: prevState.isTooltipActive
      };
      var updatesToState = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, getTooltipData(prevState, data, layout)), {}, {
        updateId: prevState.updateId + 1
      });
      var newState = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, _defaultState), keepFromPrevState), updatesToState);
      return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, newState), updateStateOfAxisMapsOffsetAndStackGroups(generateCategoricalChart_objectSpread({
        props: nextProps
      }, newState), prevState)), {}, {
        prevDataKey: dataKey,
        prevData: data,
        prevWidth: width,
        prevHeight: height,
        prevLayout: layout,
        prevStackOffset: stackOffset,
        prevMargin: margin,
        prevChildren: children
      });
    }
    if (!isChildrenEqual(children, prevState.prevChildren)) {
      var _brush$props$startInd, _brush$props, _brush$props$endIndex, _brush$props2;
      // specifically check for Brush - if it exists and the start and end indexes are different, re-render with the new ones
      var brush = findChildByType(children, Brush);
      var startIndex = brush ? (_brush$props$startInd = (_brush$props = brush.props) === null || _brush$props === void 0 ? void 0 : _brush$props.startIndex) !== null && _brush$props$startInd !== void 0 ? _brush$props$startInd : dataStartIndex : dataStartIndex;
      var endIndex = brush ? (_brush$props$endIndex = (_brush$props2 = brush.props) === null || _brush$props2 === void 0 ? void 0 : _brush$props2.endIndex) !== null && _brush$props$endIndex !== void 0 ? _brush$props$endIndex : dataEndIndex : dataEndIndex;
      var hasDifferentStartOrEndIndex = startIndex !== dataStartIndex || endIndex !== dataEndIndex;

      // update configuration in children
      var hasGlobalData = !isNil_default()(data);
      var newUpdateId = hasGlobalData && !hasDifferentStartOrEndIndex ? prevState.updateId : prevState.updateId + 1;
      return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
        updateId: newUpdateId
      }, updateStateOfAxisMapsOffsetAndStackGroups(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
        props: nextProps
      }, prevState), {}, {
        updateId: newUpdateId,
        dataStartIndex: startIndex,
        dataEndIndex: endIndex
      }), prevState)), {}, {
        prevChildren: children,
        dataStartIndex: startIndex,
        dataEndIndex: endIndex
      });
    }
    return null;
  });
  generateCategoricalChart_defineProperty(CategoricalChartWrapper, "renderActiveDot", function (option, props, key) {
    var dot;
    if ( /*#__PURE__*/(0,react.isValidElement)(option)) {
      dot = /*#__PURE__*/(0,react.cloneElement)(option, props);
    } else if (isFunction_default()(option)) {
      dot = option(props);
    } else {
      dot = /*#__PURE__*/react.createElement(Dot, props);
    }
    return /*#__PURE__*/react.createElement(Layer, {
      className: "recharts-active-dot",
      key: key
    }, dot);
  });
  var CategoricalChart = /*#__PURE__*/(0,react.forwardRef)(function CategoricalChart(props, ref) {
    return /*#__PURE__*/react.createElement(CategoricalChartWrapper, generateCategoricalChart_extends({}, props, {
      ref: ref
    }));
  });
  CategoricalChart.displayName = CategoricalChartWrapper.displayName;
  return CategoricalChart;
};
;// ./node_modules/recharts/es6/shape/Polygon.js
var Polygon_excluded = ["points", "className", "baseLinePoints", "connectNulls"];
function Polygon_extends() { Polygon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Polygon_extends.apply(this, arguments); }
function Polygon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Polygon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Polygon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function Polygon_toConsumableArray(arr) { return Polygon_arrayWithoutHoles(arr) || Polygon_iterableToArray(arr) || Polygon_unsupportedIterableToArray(arr) || Polygon_nonIterableSpread(); }
function Polygon_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Polygon_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Polygon_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Polygon_arrayLikeToArray(o, minLen); }
function Polygon_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Polygon_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Polygon_arrayLikeToArray(arr); }
function Polygon_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @fileOverview Polygon
 */
;


var isValidatePoint = function isValidatePoint(point) {
  return point && point.x === +point.x && point.y === +point.y;
};
var getParsedPoints = function getParsedPoints() {
  var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var segmentPoints = [[]];
  points.forEach(function (entry) {
    if (isValidatePoint(entry)) {
      segmentPoints[segmentPoints.length - 1].push(entry);
    } else if (segmentPoints[segmentPoints.length - 1].length > 0) {
      // add another path
      segmentPoints.push([]);
    }
  });
  if (isValidatePoint(points[0])) {
    segmentPoints[segmentPoints.length - 1].push(points[0]);
  }
  if (segmentPoints[segmentPoints.length - 1].length <= 0) {
    segmentPoints = segmentPoints.slice(0, -1);
  }
  return segmentPoints;
};
var getSinglePolygonPath = function getSinglePolygonPath(points, connectNulls) {
  var segmentPoints = getParsedPoints(points);
  if (connectNulls) {
    segmentPoints = [segmentPoints.reduce(function (res, segPoints) {
      return [].concat(Polygon_toConsumableArray(res), Polygon_toConsumableArray(segPoints));
    }, [])];
  }
  var polygonPath = segmentPoints.map(function (segPoints) {
    return segPoints.reduce(function (path, point, index) {
      return "".concat(path).concat(index === 0 ? 'M' : 'L').concat(point.x, ",").concat(point.y);
    }, '');
  }).join('');
  return segmentPoints.length === 1 ? "".concat(polygonPath, "Z") : polygonPath;
};
var getRanglePath = function getRanglePath(points, baseLinePoints, connectNulls) {
  var outerPath = getSinglePolygonPath(points, connectNulls);
  return "".concat(outerPath.slice(-1) === 'Z' ? outerPath.slice(0, -1) : outerPath, "L").concat(getSinglePolygonPath(baseLinePoints.reverse(), connectNulls).slice(1));
};
var Polygon = function Polygon(props) {
  var points = props.points,
    className = props.className,
    baseLinePoints = props.baseLinePoints,
    connectNulls = props.connectNulls,
    others = Polygon_objectWithoutProperties(props, Polygon_excluded);
  if (!points || !points.length) {
    return null;
  }
  var layerClass = (0,clsx/* default */.A)('recharts-polygon', className);
  if (baseLinePoints && baseLinePoints.length) {
    var hasStroke = others.stroke && others.stroke !== 'none';
    var rangePath = getRanglePath(points, baseLinePoints, connectNulls);
    return /*#__PURE__*/react.createElement("g", {
      className: layerClass
    }, /*#__PURE__*/react.createElement("path", Polygon_extends({}, filterProps(others, true), {
      fill: rangePath.slice(-1) === 'Z' ? others.fill : 'none',
      stroke: "none",
      d: rangePath
    })), hasStroke ? /*#__PURE__*/react.createElement("path", Polygon_extends({}, filterProps(others, true), {
      fill: "none",
      d: getSinglePolygonPath(points, connectNulls)
    })) : null, hasStroke ? /*#__PURE__*/react.createElement("path", Polygon_extends({}, filterProps(others, true), {
      fill: "none",
      d: getSinglePolygonPath(baseLinePoints, connectNulls)
    })) : null);
  }
  var singlePath = getSinglePolygonPath(points, connectNulls);
  return /*#__PURE__*/react.createElement("path", Polygon_extends({}, filterProps(others, true), {
    fill: singlePath.slice(-1) === 'Z' ? others.fill : 'none',
    className: layerClass,
    d: singlePath
  }));
};
;// ./node_modules/recharts/es6/polar/PolarAngleAxis.js
function PolarAngleAxis_typeof(o) { "@babel/helpers - typeof"; return PolarAngleAxis_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, PolarAngleAxis_typeof(o); }
function PolarAngleAxis_extends() { PolarAngleAxis_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PolarAngleAxis_extends.apply(this, arguments); }
function PolarAngleAxis_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function PolarAngleAxis_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? PolarAngleAxis_ownKeys(Object(t), !0).forEach(function (r) { PolarAngleAxis_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : PolarAngleAxis_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function PolarAngleAxis_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function PolarAngleAxis_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, PolarAngleAxis_toPropertyKey(descriptor.key), descriptor); } }
function PolarAngleAxis_createClass(Constructor, protoProps, staticProps) { if (protoProps) PolarAngleAxis_defineProperties(Constructor.prototype, protoProps); if (staticProps) PolarAngleAxis_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function PolarAngleAxis_callSuper(t, o, e) { return o = PolarAngleAxis_getPrototypeOf(o), PolarAngleAxis_possibleConstructorReturn(t, PolarAngleAxis_isNativeReflectConstruct() ? Reflect.construct(o, e || [], PolarAngleAxis_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function PolarAngleAxis_possibleConstructorReturn(self, call) { if (call && (PolarAngleAxis_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return PolarAngleAxis_assertThisInitialized(self); }
function PolarAngleAxis_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function PolarAngleAxis_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (PolarAngleAxis_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function PolarAngleAxis_getPrototypeOf(o) { PolarAngleAxis_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PolarAngleAxis_getPrototypeOf(o); }
function PolarAngleAxis_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) PolarAngleAxis_setPrototypeOf(subClass, superClass); }
function PolarAngleAxis_setPrototypeOf(o, p) { PolarAngleAxis_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PolarAngleAxis_setPrototypeOf(o, p); }
function PolarAngleAxis_defineProperty(obj, key, value) { key = PolarAngleAxis_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function PolarAngleAxis_toPropertyKey(t) { var i = PolarAngleAxis_toPrimitive(t, "string"); return "symbol" == PolarAngleAxis_typeof(i) ? i : i + ""; }
function PolarAngleAxis_toPrimitive(t, r) { if ("object" != PolarAngleAxis_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != PolarAngleAxis_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview Axis of radial direction
 */
;









var PolarAngleAxis_RADIAN = Math.PI / 180;
var eps = 1e-5;
var PolarAngleAxis = /*#__PURE__*/function (_PureComponent) {
  function PolarAngleAxis() {
    PolarAngleAxis_classCallCheck(this, PolarAngleAxis);
    return PolarAngleAxis_callSuper(this, PolarAngleAxis, arguments);
  }
  PolarAngleAxis_inherits(PolarAngleAxis, _PureComponent);
  return PolarAngleAxis_createClass(PolarAngleAxis, [{
    key: "getTickLineCoord",
    value:
    /**
     * Calculate the coordinate of line endpoint
     * @param  {Object} data The Data if ticks
     * @return {Object} (x0, y0): The start point of text,
     *                  (x1, y1): The end point close to text,
     *                  (x2, y2): The end point close to axis
     */
    function getTickLineCoord(data) {
      var _this$props = this.props,
        cx = _this$props.cx,
        cy = _this$props.cy,
        radius = _this$props.radius,
        orientation = _this$props.orientation,
        tickSize = _this$props.tickSize;
      var tickLineSize = tickSize || 8;
      var p1 = polarToCartesian(cx, cy, radius, data.coordinate);
      var p2 = polarToCartesian(cx, cy, radius + (orientation === 'inner' ? -1 : 1) * tickLineSize, data.coordinate);
      return {
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y
      };
    }

    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function getTickTextAnchor(data) {
      var orientation = this.props.orientation;
      var cos = Math.cos(-data.coordinate * PolarAngleAxis_RADIAN);
      var textAnchor;
      if (cos > eps) {
        textAnchor = orientation === 'outer' ? 'start' : 'end';
      } else if (cos < -eps) {
        textAnchor = orientation === 'outer' ? 'end' : 'start';
      } else {
        textAnchor = 'middle';
      }
      return textAnchor;
    }
  }, {
    key: "renderAxisLine",
    value: function renderAxisLine() {
      var _this$props2 = this.props,
        cx = _this$props2.cx,
        cy = _this$props2.cy,
        radius = _this$props2.radius,
        axisLine = _this$props2.axisLine,
        axisLineType = _this$props2.axisLineType;
      var props = PolarAngleAxis_objectSpread(PolarAngleAxis_objectSpread({}, filterProps(this.props, false)), {}, {
        fill: 'none'
      }, filterProps(axisLine, false));
      if (axisLineType === 'circle') {
        return /*#__PURE__*/react.createElement(Dot, PolarAngleAxis_extends({
          className: "recharts-polar-angle-axis-line"
        }, props, {
          cx: cx,
          cy: cy,
          r: radius
        }));
      }
      var ticks = this.props.ticks;
      var points = ticks.map(function (entry) {
        return polarToCartesian(cx, cy, radius, entry.coordinate);
      });
      return /*#__PURE__*/react.createElement(Polygon, PolarAngleAxis_extends({
        className: "recharts-polar-angle-axis-line"
      }, props, {
        points: points
      }));
    }
  }, {
    key: "renderTicks",
    value: function renderTicks() {
      var _this = this;
      var _this$props3 = this.props,
        ticks = _this$props3.ticks,
        tick = _this$props3.tick,
        tickLine = _this$props3.tickLine,
        tickFormatter = _this$props3.tickFormatter,
        stroke = _this$props3.stroke;
      var axisProps = filterProps(this.props, false);
      var customTickProps = filterProps(tick, false);
      var tickLineProps = PolarAngleAxis_objectSpread(PolarAngleAxis_objectSpread({}, axisProps), {}, {
        fill: 'none'
      }, filterProps(tickLine, false));
      var items = ticks.map(function (entry, i) {
        var lineCoord = _this.getTickLineCoord(entry);
        var textAnchor = _this.getTickTextAnchor(entry);
        var tickProps = PolarAngleAxis_objectSpread(PolarAngleAxis_objectSpread(PolarAngleAxis_objectSpread({
          textAnchor: textAnchor
        }, axisProps), {}, {
          stroke: 'none',
          fill: stroke
        }, customTickProps), {}, {
          index: i,
          payload: entry,
          x: lineCoord.x2,
          y: lineCoord.y2
        });
        return /*#__PURE__*/react.createElement(Layer, PolarAngleAxis_extends({
          className: (0,clsx/* default */.A)('recharts-polar-angle-axis-tick', getTickClassName(tick)),
          key: "tick-".concat(entry.coordinate)
        }, adaptEventsOfChild(_this.props, entry, i)), tickLine && /*#__PURE__*/react.createElement("line", PolarAngleAxis_extends({
          className: "recharts-polar-angle-axis-tick-line"
        }, tickLineProps, lineCoord)), tick && PolarAngleAxis.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value, i) : entry.value));
      });
      return /*#__PURE__*/react.createElement(Layer, {
        className: "recharts-polar-angle-axis-ticks"
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        ticks = _this$props4.ticks,
        radius = _this$props4.radius,
        axisLine = _this$props4.axisLine;
      if (radius <= 0 || !ticks || !ticks.length) {
        return null;
      }
      return /*#__PURE__*/react.createElement(Layer, {
        className: (0,clsx/* default */.A)('recharts-polar-angle-axis', this.props.className)
      }, axisLine && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function renderTickItem(option, props, value) {
      var tickItem;
      if ( /*#__PURE__*/react.isValidElement(option)) {
        tickItem = /*#__PURE__*/react.cloneElement(option, props);
      } else if (isFunction_default()(option)) {
        tickItem = option(props);
      } else {
        tickItem = /*#__PURE__*/react.createElement(Text, PolarAngleAxis_extends({}, props, {
          className: "recharts-polar-angle-axis-tick-value"
        }), value);
      }
      return tickItem;
    }
  }]);
}(react.PureComponent);
PolarAngleAxis_defineProperty(PolarAngleAxis, "displayName", 'PolarAngleAxis');
PolarAngleAxis_defineProperty(PolarAngleAxis, "axisType", 'angleAxis');
PolarAngleAxis_defineProperty(PolarAngleAxis, "defaultProps", {
  type: 'category',
  angleAxisId: 0,
  scale: 'auto',
  cx: 0,
  cy: 0,
  orientation: 'outer',
  axisLine: true,
  tickLine: true,
  tickSize: 8,
  tick: true,
  hide: false,
  allowDuplicatedCategory: true
});
// EXTERNAL MODULE: ./node_modules/lodash/maxBy.js
var maxBy = __webpack_require__(97551);
var maxBy_default = /*#__PURE__*/__webpack_require__.n(maxBy);
// EXTERNAL MODULE: ./node_modules/lodash/minBy.js
var minBy = __webpack_require__(36533);
var minBy_default = /*#__PURE__*/__webpack_require__.n(minBy);
;// ./node_modules/recharts/es6/polar/PolarRadiusAxis.js
var PolarRadiusAxis_excluded = ["cx", "cy", "angle", "ticks", "axisLine"],
  PolarRadiusAxis_excluded2 = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function PolarRadiusAxis_typeof(o) { "@babel/helpers - typeof"; return PolarRadiusAxis_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, PolarRadiusAxis_typeof(o); }
function PolarRadiusAxis_extends() { PolarRadiusAxis_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PolarRadiusAxis_extends.apply(this, arguments); }
function PolarRadiusAxis_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function PolarRadiusAxis_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? PolarRadiusAxis_ownKeys(Object(t), !0).forEach(function (r) { PolarRadiusAxis_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : PolarRadiusAxis_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function PolarRadiusAxis_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PolarRadiusAxis_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function PolarRadiusAxis_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function PolarRadiusAxis_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function PolarRadiusAxis_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, PolarRadiusAxis_toPropertyKey(descriptor.key), descriptor); } }
function PolarRadiusAxis_createClass(Constructor, protoProps, staticProps) { if (protoProps) PolarRadiusAxis_defineProperties(Constructor.prototype, protoProps); if (staticProps) PolarRadiusAxis_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function PolarRadiusAxis_callSuper(t, o, e) { return o = PolarRadiusAxis_getPrototypeOf(o), PolarRadiusAxis_possibleConstructorReturn(t, PolarRadiusAxis_isNativeReflectConstruct() ? Reflect.construct(o, e || [], PolarRadiusAxis_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function PolarRadiusAxis_possibleConstructorReturn(self, call) { if (call && (PolarRadiusAxis_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return PolarRadiusAxis_assertThisInitialized(self); }
function PolarRadiusAxis_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function PolarRadiusAxis_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (PolarRadiusAxis_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function PolarRadiusAxis_getPrototypeOf(o) { PolarRadiusAxis_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PolarRadiusAxis_getPrototypeOf(o); }
function PolarRadiusAxis_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) PolarRadiusAxis_setPrototypeOf(subClass, superClass); }
function PolarRadiusAxis_setPrototypeOf(o, p) { PolarRadiusAxis_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PolarRadiusAxis_setPrototypeOf(o, p); }
function PolarRadiusAxis_defineProperty(obj, key, value) { key = PolarRadiusAxis_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function PolarRadiusAxis_toPropertyKey(t) { var i = PolarRadiusAxis_toPrimitive(t, "string"); return "symbol" == PolarRadiusAxis_typeof(i) ? i : i + ""; }
function PolarRadiusAxis_toPrimitive(t, r) { if ("object" != PolarRadiusAxis_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != PolarRadiusAxis_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview The axis of polar coordinate system
 */
;










var PolarRadiusAxis = /*#__PURE__*/function (_PureComponent) {
  function PolarRadiusAxis() {
    PolarRadiusAxis_classCallCheck(this, PolarRadiusAxis);
    return PolarRadiusAxis_callSuper(this, PolarRadiusAxis, arguments);
  }
  PolarRadiusAxis_inherits(PolarRadiusAxis, _PureComponent);
  return PolarRadiusAxis_createClass(PolarRadiusAxis, [{
    key: "getTickValueCoord",
    value:
    /**
     * Calculate the coordinate of tick
     * @param  {Number} coordinate The radius of tick
     * @return {Object} (x, y)
     */
    function getTickValueCoord(_ref) {
      var coordinate = _ref.coordinate;
      var _this$props = this.props,
        angle = _this$props.angle,
        cx = _this$props.cx,
        cy = _this$props.cy;
      return polarToCartesian(cx, cy, coordinate, angle);
    }
  }, {
    key: "getTickTextAnchor",
    value: function getTickTextAnchor() {
      var orientation = this.props.orientation;
      var textAnchor;
      switch (orientation) {
        case 'left':
          textAnchor = 'end';
          break;
        case 'right':
          textAnchor = 'start';
          break;
        default:
          textAnchor = 'middle';
          break;
      }
      return textAnchor;
    }
  }, {
    key: "getViewBox",
    value: function getViewBox() {
      var _this$props2 = this.props,
        cx = _this$props2.cx,
        cy = _this$props2.cy,
        angle = _this$props2.angle,
        ticks = _this$props2.ticks;
      var maxRadiusTick = maxBy_default()(ticks, function (entry) {
        return entry.coordinate || 0;
      });
      var minRadiusTick = minBy_default()(ticks, function (entry) {
        return entry.coordinate || 0;
      });
      return {
        cx: cx,
        cy: cy,
        startAngle: angle,
        endAngle: angle,
        innerRadius: minRadiusTick.coordinate || 0,
        outerRadius: maxRadiusTick.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function renderAxisLine() {
      var _this$props3 = this.props,
        cx = _this$props3.cx,
        cy = _this$props3.cy,
        angle = _this$props3.angle,
        ticks = _this$props3.ticks,
        axisLine = _this$props3.axisLine,
        others = PolarRadiusAxis_objectWithoutProperties(_this$props3, PolarRadiusAxis_excluded);
      var extent = ticks.reduce(function (result, entry) {
        return [Math.min(result[0], entry.coordinate), Math.max(result[1], entry.coordinate)];
      }, [Infinity, -Infinity]);
      var point0 = polarToCartesian(cx, cy, extent[0], angle);
      var point1 = polarToCartesian(cx, cy, extent[1], angle);
      var props = PolarRadiusAxis_objectSpread(PolarRadiusAxis_objectSpread(PolarRadiusAxis_objectSpread({}, filterProps(others, false)), {}, {
        fill: 'none'
      }, filterProps(axisLine, false)), {}, {
        x1: point0.x,
        y1: point0.y,
        x2: point1.x,
        y2: point1.y
      });
      return /*#__PURE__*/react.createElement("line", PolarRadiusAxis_extends({
        className: "recharts-polar-radius-axis-line"
      }, props));
    }
  }, {
    key: "renderTicks",
    value: function renderTicks() {
      var _this = this;
      var _this$props4 = this.props,
        ticks = _this$props4.ticks,
        tick = _this$props4.tick,
        angle = _this$props4.angle,
        tickFormatter = _this$props4.tickFormatter,
        stroke = _this$props4.stroke,
        others = PolarRadiusAxis_objectWithoutProperties(_this$props4, PolarRadiusAxis_excluded2);
      var textAnchor = this.getTickTextAnchor();
      var axisProps = filterProps(others, false);
      var customTickProps = filterProps(tick, false);
      var items = ticks.map(function (entry, i) {
        var coord = _this.getTickValueCoord(entry);
        var tickProps = PolarRadiusAxis_objectSpread(PolarRadiusAxis_objectSpread(PolarRadiusAxis_objectSpread(PolarRadiusAxis_objectSpread({
          textAnchor: textAnchor,
          transform: "rotate(".concat(90 - angle, ", ").concat(coord.x, ", ").concat(coord.y, ")")
        }, axisProps), {}, {
          stroke: 'none',
          fill: stroke
        }, customTickProps), {}, {
          index: i
        }, coord), {}, {
          payload: entry
        });
        return /*#__PURE__*/react.createElement(Layer, PolarRadiusAxis_extends({
          className: (0,clsx/* default */.A)('recharts-polar-radius-axis-tick', getTickClassName(tick)),
          key: "tick-".concat(entry.coordinate)
        }, adaptEventsOfChild(_this.props, entry, i)), PolarRadiusAxis.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value, i) : entry.value));
      });
      return /*#__PURE__*/react.createElement(Layer, {
        className: "recharts-polar-radius-axis-ticks"
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
        ticks = _this$props5.ticks,
        axisLine = _this$props5.axisLine,
        tick = _this$props5.tick;
      if (!ticks || !ticks.length) {
        return null;
      }
      return /*#__PURE__*/react.createElement(Layer, {
        className: (0,clsx/* default */.A)('recharts-polar-radius-axis', this.props.className)
      }, axisLine && this.renderAxisLine(), tick && this.renderTicks(), Label.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function renderTickItem(option, props, value) {
      var tickItem;
      if ( /*#__PURE__*/react.isValidElement(option)) {
        tickItem = /*#__PURE__*/react.cloneElement(option, props);
      } else if (isFunction_default()(option)) {
        tickItem = option(props);
      } else {
        tickItem = /*#__PURE__*/react.createElement(Text, PolarRadiusAxis_extends({}, props, {
          className: "recharts-polar-radius-axis-tick-value"
        }), value);
      }
      return tickItem;
    }
  }]);
}(react.PureComponent);
PolarRadiusAxis_defineProperty(PolarRadiusAxis, "displayName", 'PolarRadiusAxis');
PolarRadiusAxis_defineProperty(PolarRadiusAxis, "axisType", 'radiusAxis');
PolarRadiusAxis_defineProperty(PolarRadiusAxis, "defaultProps", {
  type: 'number',
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: 'right',
  stroke: '#ccc',
  axisLine: true,
  tick: true,
  tickCount: 5,
  allowDataOverflow: false,
  scale: 'auto',
  allowDuplicatedCategory: true
});
// EXTERNAL MODULE: ./node_modules/lodash/last.js
var last = __webpack_require__(68090);
var last_default = /*#__PURE__*/__webpack_require__.n(last);
;// ./node_modules/recharts/es6/component/LabelList.js
function LabelList_typeof(o) { "@babel/helpers - typeof"; return LabelList_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, LabelList_typeof(o); }
var LabelList_excluded = ["valueAccessor"],
  LabelList_excluded2 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function LabelList_toConsumableArray(arr) { return LabelList_arrayWithoutHoles(arr) || LabelList_iterableToArray(arr) || LabelList_unsupportedIterableToArray(arr) || LabelList_nonIterableSpread(); }
function LabelList_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function LabelList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return LabelList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return LabelList_arrayLikeToArray(o, minLen); }
function LabelList_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function LabelList_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return LabelList_arrayLikeToArray(arr); }
function LabelList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function LabelList_extends() { LabelList_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LabelList_extends.apply(this, arguments); }
function LabelList_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function LabelList_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? LabelList_ownKeys(Object(t), !0).forEach(function (r) { LabelList_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : LabelList_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function LabelList_defineProperty(obj, key, value) { key = LabelList_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function LabelList_toPropertyKey(t) { var i = LabelList_toPrimitive(t, "string"); return "symbol" == LabelList_typeof(i) ? i : i + ""; }
function LabelList_toPrimitive(t, r) { if ("object" != LabelList_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != LabelList_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function LabelList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = LabelList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function LabelList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
;








var defaultAccessor = function defaultAccessor(entry) {
  return Array.isArray(entry.value) ? last_default()(entry.value) : entry.value;
};
function LabelList(_ref) {
  var _ref$valueAccessor = _ref.valueAccessor,
    valueAccessor = _ref$valueAccessor === void 0 ? defaultAccessor : _ref$valueAccessor,
    restProps = LabelList_objectWithoutProperties(_ref, LabelList_excluded);
  var data = restProps.data,
    dataKey = restProps.dataKey,
    clockWise = restProps.clockWise,
    id = restProps.id,
    textBreakAll = restProps.textBreakAll,
    others = LabelList_objectWithoutProperties(restProps, LabelList_excluded2);
  if (!data || !data.length) {
    return null;
  }
  return /*#__PURE__*/react.createElement(Layer, {
    className: "recharts-label-list"
  }, data.map(function (entry, index) {
    var value = isNil_default()(dataKey) ? valueAccessor(entry, index) : getValueByDataKey(entry && entry.payload, dataKey);
    var idProps = isNil_default()(id) ? {} : {
      id: "".concat(id, "-").concat(index)
    };
    return /*#__PURE__*/react.createElement(Label, LabelList_extends({}, filterProps(entry, true), others, idProps, {
      parentViewBox: entry.parentViewBox,
      value: value,
      textBreakAll: textBreakAll,
      viewBox: Label.parseViewBox(isNil_default()(clockWise) ? entry : LabelList_objectSpread(LabelList_objectSpread({}, entry), {}, {
        clockWise: clockWise
      })),
      key: "label-".concat(index) // eslint-disable-line react/no-array-index-key
      ,
      index: index
    }));
  }));
}
LabelList.displayName = 'LabelList';
function parseLabelList(label, data) {
  if (!label) {
    return null;
  }
  if (label === true) {
    return /*#__PURE__*/react.createElement(LabelList, {
      key: "labelList-implicit",
      data: data
    });
  }
  if ( /*#__PURE__*/react.isValidElement(label) || isFunction_default()(label)) {
    return /*#__PURE__*/react.createElement(LabelList, {
      key: "labelList-implicit",
      data: data,
      content: label
    });
  }
  if (isObject_default()(label)) {
    return /*#__PURE__*/react.createElement(LabelList, LabelList_extends({
      data: data
    }, label, {
      key: "labelList-implicit"
    }));
  }
  return null;
}
function LabelList_renderCallByParent(parentProps, data) {
  var checkPropsLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!parentProps || !parentProps.children && checkPropsLabel && !parentProps.label) {
    return null;
  }
  var children = parentProps.children;
  var explicitChildren = findAllByType(children, LabelList).map(function (child, index) {
    return /*#__PURE__*/(0,react.cloneElement)(child, {
      data: data,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(index)
    });
  });
  if (!checkPropsLabel) {
    return explicitChildren;
  }
  var implicitLabelList = parseLabelList(parentProps.label, data);
  return [implicitLabelList].concat(LabelList_toConsumableArray(explicitChildren));
}
LabelList.renderCallByParent = LabelList_renderCallByParent;
;// ./node_modules/recharts/es6/component/Cell.js
/**
 * @fileOverview Cross
 */

var Cell = function Cell(_props) {
  return null;
};
Cell.displayName = 'Cell';
;// ./node_modules/recharts/es6/polar/Pie.js
var _Pie;
function Pie_typeof(o) { "@babel/helpers - typeof"; return Pie_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Pie_typeof(o); }
function Pie_extends() { Pie_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Pie_extends.apply(this, arguments); }
function Pie_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Pie_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Pie_ownKeys(Object(t), !0).forEach(function (r) { Pie_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Pie_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Pie_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Pie_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Pie_toPropertyKey(descriptor.key), descriptor); } }
function Pie_createClass(Constructor, protoProps, staticProps) { if (protoProps) Pie_defineProperties(Constructor.prototype, protoProps); if (staticProps) Pie_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Pie_callSuper(t, o, e) { return o = Pie_getPrototypeOf(o), Pie_possibleConstructorReturn(t, Pie_isNativeReflectConstruct() ? Reflect.construct(o, e || [], Pie_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Pie_possibleConstructorReturn(self, call) { if (call && (Pie_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Pie_assertThisInitialized(self); }
function Pie_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function Pie_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Pie_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function Pie_getPrototypeOf(o) { Pie_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Pie_getPrototypeOf(o); }
function Pie_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Pie_setPrototypeOf(subClass, superClass); }
function Pie_setPrototypeOf(o, p) { Pie_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Pie_setPrototypeOf(o, p); }
function Pie_defineProperty(obj, key, value) { key = Pie_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Pie_toPropertyKey(t) { var i = Pie_toPrimitive(t, "string"); return "symbol" == Pie_typeof(i) ? i : i + ""; }
function Pie_toPrimitive(t, r) { if ("object" != Pie_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Pie_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileOverview Render sectors of a pie
 */
;




















var Pie = /*#__PURE__*/function (_PureComponent) {
  function Pie(props) {
    var _this;
    Pie_classCallCheck(this, Pie);
    _this = Pie_callSuper(this, Pie, [props]);
    Pie_defineProperty(_this, "pieRef", null);
    Pie_defineProperty(_this, "sectorRefs", []);
    Pie_defineProperty(_this, "id", uniqueId('recharts-pie-'));
    Pie_defineProperty(_this, "handleAnimationEnd", function () {
      var onAnimationEnd = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if (isFunction_default()(onAnimationEnd)) {
        onAnimationEnd();
      }
    });
    Pie_defineProperty(_this, "handleAnimationStart", function () {
      var onAnimationStart = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if (isFunction_default()(onAnimationStart)) {
        onAnimationStart();
      }
    });
    _this.state = {
      isAnimationFinished: !props.isAnimationActive,
      prevIsAnimationActive: props.isAnimationActive,
      prevAnimationId: props.animationId,
      sectorToFocus: 0
    };
    return _this;
  }
  Pie_inherits(Pie, _PureComponent);
  return Pie_createClass(Pie, [{
    key: "isActiveIndex",
    value: function isActiveIndex(i) {
      var activeIndex = this.props.activeIndex;
      if (Array.isArray(activeIndex)) {
        return activeIndex.indexOf(i) !== -1;
      }
      return i === activeIndex;
    }
  }, {
    key: "hasActiveIndex",
    value: function hasActiveIndex() {
      var activeIndex = this.props.activeIndex;
      return Array.isArray(activeIndex) ? activeIndex.length !== 0 : activeIndex || activeIndex === 0;
    }
  }, {
    key: "renderLabels",
    value: function renderLabels(sectors) {
      var isAnimationActive = this.props.isAnimationActive;
      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props = this.props,
        label = _this$props.label,
        labelLine = _this$props.labelLine,
        dataKey = _this$props.dataKey,
        valueKey = _this$props.valueKey;
      var pieProps = filterProps(this.props, false);
      var customLabelProps = filterProps(label, false);
      var customLabelLineProps = filterProps(labelLine, false);
      var offsetRadius = label && label.offsetRadius || 20;
      var labels = sectors.map(function (entry, i) {
        var midAngle = (entry.startAngle + entry.endAngle) / 2;
        var endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
        var labelProps = Pie_objectSpread(Pie_objectSpread(Pie_objectSpread(Pie_objectSpread({}, pieProps), entry), {}, {
          stroke: 'none'
        }, customLabelProps), {}, {
          index: i,
          textAnchor: Pie.getTextAnchor(endPoint.x, entry.cx)
        }, endPoint);
        var lineProps = Pie_objectSpread(Pie_objectSpread(Pie_objectSpread(Pie_objectSpread({}, pieProps), entry), {}, {
          fill: 'none',
          stroke: entry.fill
        }, customLabelLineProps), {}, {
          index: i,
          points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint]
        });
        var realDataKey = dataKey;
        // TODO: compatible to lower versions
        if (isNil_default()(dataKey) && isNil_default()(valueKey)) {
          realDataKey = 'value';
        } else if (isNil_default()(dataKey)) {
          realDataKey = valueKey;
        }
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          react.createElement(Layer, {
            key: "label-".concat(entry.startAngle, "-").concat(entry.endAngle, "-").concat(entry.midAngle, "-").concat(i)
          }, labelLine && Pie.renderLabelLineItem(labelLine, lineProps, 'line'), Pie.renderLabelItem(label, labelProps, getValueByDataKey(entry, realDataKey)))
        );
      });
      return /*#__PURE__*/react.createElement(Layer, {
        className: "recharts-pie-labels"
      }, labels);
    }
  }, {
    key: "renderSectorsStatically",
    value: function renderSectorsStatically(sectors) {
      var _this2 = this;
      var _this$props2 = this.props,
        activeShape = _this$props2.activeShape,
        blendStroke = _this$props2.blendStroke,
        inactiveShapeProp = _this$props2.inactiveShape;
      return sectors.map(function (entry, i) {
        if ((entry === null || entry === void 0 ? void 0 : entry.startAngle) === 0 && (entry === null || entry === void 0 ? void 0 : entry.endAngle) === 0 && sectors.length !== 1) return null;
        var isActive = _this2.isActiveIndex(i);
        var inactiveShape = inactiveShapeProp && _this2.hasActiveIndex() ? inactiveShapeProp : null;
        var sectorOptions = isActive ? activeShape : inactiveShape;
        var sectorProps = Pie_objectSpread(Pie_objectSpread({}, entry), {}, {
          stroke: blendStroke ? entry.fill : entry.stroke,
          tabIndex: -1
        });
        return /*#__PURE__*/react.createElement(Layer, Pie_extends({
          ref: function ref(_ref) {
            if (_ref && !_this2.sectorRefs.includes(_ref)) {
              _this2.sectorRefs.push(_ref);
            }
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, adaptEventsOfChild(_this2.props, entry, i), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(entry === null || entry === void 0 ? void 0 : entry.startAngle, "-").concat(entry === null || entry === void 0 ? void 0 : entry.endAngle, "-").concat(entry.midAngle, "-").concat(i)
        }), /*#__PURE__*/react.createElement(Shape, Pie_extends({
          option: sectorOptions,
          isActive: isActive,
          shapeType: "sector"
        }, sectorProps)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function renderSectorsWithAnimation() {
      var _this3 = this;
      var _this$props3 = this.props,
        sectors = _this$props3.sectors,
        isAnimationActive = _this$props3.isAnimationActive,
        animationBegin = _this$props3.animationBegin,
        animationDuration = _this$props3.animationDuration,
        animationEasing = _this$props3.animationEasing,
        animationId = _this$props3.animationId;
      var _this$state = this.state,
        prevSectors = _this$state.prevSectors,
        prevIsAnimationActive = _this$state.prevIsAnimationActive;
      return /*#__PURE__*/react.createElement(es6, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(animationId, "-").concat(prevIsAnimationActive),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function (_ref2) {
        var t = _ref2.t;
        var stepData = [];
        var first = sectors && sectors[0];
        var curAngle = first.startAngle;
        sectors.forEach(function (entry, index) {
          var prev = prevSectors && prevSectors[index];
          var paddingAngle = index > 0 ? get_default()(entry, 'paddingAngle', 0) : 0;
          if (prev) {
            var angleIp = interpolateNumber(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle);
            var latest = Pie_objectSpread(Pie_objectSpread({}, entry), {}, {
              startAngle: curAngle + paddingAngle,
              endAngle: curAngle + angleIp(t) + paddingAngle
            });
            stepData.push(latest);
            curAngle = latest.endAngle;
          } else {
            var endAngle = entry.endAngle,
              startAngle = entry.startAngle;
            var interpolatorAngle = interpolateNumber(0, endAngle - startAngle);
            var deltaAngle = interpolatorAngle(t);
            var _latest = Pie_objectSpread(Pie_objectSpread({}, entry), {}, {
              startAngle: curAngle + paddingAngle,
              endAngle: curAngle + deltaAngle + paddingAngle
            });
            stepData.push(_latest);
            curAngle = _latest.endAngle;
          }
        });
        return /*#__PURE__*/react.createElement(Layer, null, _this3.renderSectorsStatically(stepData));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function attachKeyboardHandlers(pieRef) {
      var _this4 = this;
      // eslint-disable-next-line no-param-reassign
      pieRef.onkeydown = function (e) {
        if (!e.altKey) {
          switch (e.key) {
            case 'ArrowLeft':
              {
                var next = ++_this4.state.sectorToFocus % _this4.sectorRefs.length;
                _this4.sectorRefs[next].focus();
                _this4.setState({
                  sectorToFocus: next
                });
                break;
              }
            case 'ArrowRight':
              {
                var _next = --_this4.state.sectorToFocus < 0 ? _this4.sectorRefs.length - 1 : _this4.state.sectorToFocus % _this4.sectorRefs.length;
                _this4.sectorRefs[_next].focus();
                _this4.setState({
                  sectorToFocus: _next
                });
                break;
              }
            case 'Escape':
              {
                _this4.sectorRefs[_this4.state.sectorToFocus].blur();
                _this4.setState({
                  sectorToFocus: 0
                });
                break;
              }
            default:
              {
                // There is nothing to do here
              }
          }
        }
      };
    }
  }, {
    key: "renderSectors",
    value: function renderSectors() {
      var _this$props4 = this.props,
        sectors = _this$props4.sectors,
        isAnimationActive = _this$props4.isAnimationActive;
      var prevSectors = this.state.prevSectors;
      if (isAnimationActive && sectors && sectors.length && (!prevSectors || !isEqual_default()(prevSectors, sectors))) {
        return this.renderSectorsWithAnimation();
      }
      return this.renderSectorsStatically(sectors);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.pieRef) {
        this.attachKeyboardHandlers(this.pieRef);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var _this$props5 = this.props,
        hide = _this$props5.hide,
        sectors = _this$props5.sectors,
        className = _this$props5.className,
        label = _this$props5.label,
        cx = _this$props5.cx,
        cy = _this$props5.cy,
        innerRadius = _this$props5.innerRadius,
        outerRadius = _this$props5.outerRadius,
        isAnimationActive = _this$props5.isAnimationActive;
      var isAnimationFinished = this.state.isAnimationFinished;
      if (hide || !sectors || !sectors.length || !isNumber(cx) || !isNumber(cy) || !isNumber(innerRadius) || !isNumber(outerRadius)) {
        return null;
      }
      var layerClass = (0,clsx/* default */.A)('recharts-pie', className);
      return /*#__PURE__*/react.createElement(Layer, {
        tabIndex: this.props.rootTabIndex,
        className: layerClass,
        ref: function ref(_ref3) {
          _this5.pieRef = _ref3;
        }
      }, this.renderSectors(), label && this.renderLabels(sectors), Label.renderCallByParent(this.props, null, false), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, sectors, false));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.prevIsAnimationActive !== nextProps.isAnimationActive) {
        return {
          prevIsAnimationActive: nextProps.isAnimationActive,
          prevAnimationId: nextProps.animationId,
          curSectors: nextProps.sectors,
          prevSectors: [],
          isAnimationFinished: true
        };
      }
      if (nextProps.isAnimationActive && nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curSectors: nextProps.sectors,
          prevSectors: prevState.curSectors,
          isAnimationFinished: true
        };
      }
      if (nextProps.sectors !== prevState.curSectors) {
        return {
          curSectors: nextProps.sectors,
          isAnimationFinished: true
        };
      }
      return null;
    }
  }, {
    key: "getTextAnchor",
    value: function getTextAnchor(x, cx) {
      if (x > cx) {
        return 'start';
      }
      if (x < cx) {
        return 'end';
      }
      return 'middle';
    }
  }, {
    key: "renderLabelLineItem",
    value: function renderLabelLineItem(option, props, key) {
      if ( /*#__PURE__*/react.isValidElement(option)) {
        return /*#__PURE__*/react.cloneElement(option, props);
      }
      if (isFunction_default()(option)) {
        return option(props);
      }
      var className = (0,clsx/* default */.A)('recharts-pie-label-line', typeof option !== 'boolean' ? option.className : '');
      return /*#__PURE__*/react.createElement(Curve, Pie_extends({}, props, {
        key: key,
        type: "linear",
        className: className
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function renderLabelItem(option, props, value) {
      if ( /*#__PURE__*/react.isValidElement(option)) {
        return /*#__PURE__*/react.cloneElement(option, props);
      }
      var label = value;
      if (isFunction_default()(option)) {
        label = option(props);
        if ( /*#__PURE__*/react.isValidElement(label)) {
          return label;
        }
      }
      var className = (0,clsx/* default */.A)('recharts-pie-label-text', typeof option !== 'boolean' && !isFunction_default()(option) ? option.className : '');
      return /*#__PURE__*/react.createElement(Text, Pie_extends({}, props, {
        alignmentBaseline: "middle",
        className: className
      }), label);
    }
  }]);
}(react.PureComponent);
_Pie = Pie;
Pie_defineProperty(Pie, "displayName", 'Pie');
Pie_defineProperty(Pie, "defaultProps", {
  stroke: '#fff',
  fill: '#808080',
  legendType: 'rect',
  cx: '50%',
  cy: '50%',
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: '80%',
  paddingAngle: 0,
  labelLine: true,
  hide: false,
  minAngle: 0,
  isAnimationActive: !Global.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: 'ease',
  nameKey: 'name',
  blendStroke: false,
  rootTabIndex: 0
});
Pie_defineProperty(Pie, "parseDeltaAngle", function (startAngle, endAngle) {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  return sign * deltaAngle;
});
Pie_defineProperty(Pie, "getRealPieData", function (itemProps) {
  var data = itemProps.data,
    children = itemProps.children;
  var presentationProps = filterProps(itemProps, false);
  var cells = findAllByType(children, Cell);
  if (data && data.length) {
    return data.map(function (entry, index) {
      return Pie_objectSpread(Pie_objectSpread(Pie_objectSpread({
        payload: entry
      }, presentationProps), entry), cells && cells[index] && cells[index].props);
    });
  }
  if (cells && cells.length) {
    return cells.map(function (cell) {
      return Pie_objectSpread(Pie_objectSpread({}, presentationProps), cell.props);
    });
  }
  return [];
});
Pie_defineProperty(Pie, "parseCoordinateOfPie", function (itemProps, offset) {
  var top = offset.top,
    left = offset.left,
    width = offset.width,
    height = offset.height;
  var maxPieRadius = getMaxRadius(width, height);
  var cx = left + getPercentValue(itemProps.cx, width, width / 2);
  var cy = top + getPercentValue(itemProps.cy, height, height / 2);
  var innerRadius = getPercentValue(itemProps.innerRadius, maxPieRadius, 0);
  var outerRadius = getPercentValue(itemProps.outerRadius, maxPieRadius, maxPieRadius * 0.8);
  var maxRadius = itemProps.maxRadius || Math.sqrt(width * width + height * height) / 2;
  return {
    cx: cx,
    cy: cy,
    innerRadius: innerRadius,
    outerRadius: outerRadius,
    maxRadius: maxRadius
  };
});
Pie_defineProperty(Pie, "getComposedData", function (_ref4) {
  var item = _ref4.item,
    offset = _ref4.offset;
  var itemProps = item.type.defaultProps !== undefined ? Pie_objectSpread(Pie_objectSpread({}, item.type.defaultProps), item.props) : item.props;
  var pieData = _Pie.getRealPieData(itemProps);
  if (!pieData || !pieData.length) {
    return null;
  }
  var cornerRadius = itemProps.cornerRadius,
    startAngle = itemProps.startAngle,
    endAngle = itemProps.endAngle,
    paddingAngle = itemProps.paddingAngle,
    dataKey = itemProps.dataKey,
    nameKey = itemProps.nameKey,
    valueKey = itemProps.valueKey,
    tooltipType = itemProps.tooltipType;
  var minAngle = Math.abs(itemProps.minAngle);
  var coordinate = _Pie.parseCoordinateOfPie(itemProps, offset);
  var deltaAngle = _Pie.parseDeltaAngle(startAngle, endAngle);
  var absDeltaAngle = Math.abs(deltaAngle);
  var realDataKey = dataKey;
  if (isNil_default()(dataKey) && isNil_default()(valueKey)) {
    warn(false, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0");
    realDataKey = 'value';
  } else if (isNil_default()(dataKey)) {
    warn(false, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0");
    realDataKey = valueKey;
  }
  var notZeroItemCount = pieData.filter(function (entry) {
    return getValueByDataKey(entry, realDataKey, 0) !== 0;
  }).length;
  var totalPadingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
  var realTotalAngle = absDeltaAngle - notZeroItemCount * minAngle - totalPadingAngle;
  var sum = pieData.reduce(function (result, entry) {
    var val = getValueByDataKey(entry, realDataKey, 0);
    return result + (isNumber(val) ? val : 0);
  }, 0);
  var sectors;
  if (sum > 0) {
    var prev;
    sectors = pieData.map(function (entry, i) {
      var val = getValueByDataKey(entry, realDataKey, 0);
      var name = getValueByDataKey(entry, nameKey, i);
      var percent = (isNumber(val) ? val : 0) / sum;
      var tempStartAngle;
      if (i) {
        tempStartAngle = prev.endAngle + mathSign(deltaAngle) * paddingAngle * (val !== 0 ? 1 : 0);
      } else {
        tempStartAngle = startAngle;
      }
      var tempEndAngle = tempStartAngle + mathSign(deltaAngle) * ((val !== 0 ? minAngle : 0) + percent * realTotalAngle);
      var midAngle = (tempStartAngle + tempEndAngle) / 2;
      var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
      var tooltipPayload = [{
        name: name,
        value: val,
        payload: entry,
        dataKey: realDataKey,
        type: tooltipType
      }];
      var tooltipPosition = polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);
      prev = Pie_objectSpread(Pie_objectSpread(Pie_objectSpread({
        percent: percent,
        cornerRadius: cornerRadius,
        name: name,
        tooltipPayload: tooltipPayload,
        midAngle: midAngle,
        middleRadius: middleRadius,
        tooltipPosition: tooltipPosition
      }, entry), coordinate), {}, {
        value: getValueByDataKey(entry, realDataKey),
        startAngle: tempStartAngle,
        endAngle: tempEndAngle,
        payload: entry,
        paddingAngle: mathSign(deltaAngle) * paddingAngle
      });
      return prev;
    });
  }
  return Pie_objectSpread(Pie_objectSpread({}, coordinate), {}, {
    sectors: sectors,
    data: pieData
  });
});
;// ./node_modules/recharts/es6/chart/PieChart.js
/**
 * @fileOverview Pie Chart
 */





var PieChart = generateCategoricalChart({
  chartName: 'PieChart',
  GraphicalChild: Pie,
  validateTooltipEventTypes: ['item'],
  defaultTooltipEventType: 'item',
  legendContent: 'children',
  axisComponents: [{
    axisType: 'angleAxis',
    AxisComp: PolarAngleAxis
  }, {
    axisType: 'radiusAxis',
    AxisComp: PolarRadiusAxis
  }],
  formatAxisMap: formatAxisMap,
  defaultProps: {
    layout: 'centric',
    startAngle: 0,
    endAngle: 360,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%'
  }
});
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(74353);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./src/js/component/Loader.js + 1 modules
var Loader = __webpack_require__(65821);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/CheckCircle.js
var CheckCircle = __webpack_require__(20889);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Cancel.js
var Cancel = __webpack_require__(82299);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/ArrowBack.js
var ArrowBack = __webpack_require__(11735);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(17809);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__(13561);
// EXTERNAL MODULE: ./src/js/features/auth/authSlice.js
var authSlice = __webpack_require__(32005);
// EXTERNAL MODULE: ./src/js/component/NetworkLogoutIcon.js
var NetworkLogoutIcon = __webpack_require__(40301);
;// ./src/js/AdminView1/PageView/ExpensesView/ExpensesViewAdminAll.js
var ExpensesViewAdminAll_excluded = ["className"],
  ExpensesViewAdminAll_excluded2 = ["className"];
function ExpensesViewAdminAll_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ExpensesViewAdminAll_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ExpensesViewAdminAll_ownKeys(Object(t), !0).forEach(function (r) { ExpensesViewAdminAll_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ExpensesViewAdminAll_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ExpensesViewAdminAll_defineProperty(e, r, t) { return (r = ExpensesViewAdminAll_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function ExpensesViewAdminAll_toPropertyKey(t) { var i = ExpensesViewAdminAll_toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function ExpensesViewAdminAll_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function ExpensesViewAdminAll_slicedToArray(r, e) { return ExpensesViewAdminAll_arrayWithHoles(r) || ExpensesViewAdminAll_iterableToArrayLimit(r, e) || ExpensesViewAdminAll_unsupportedIterableToArray(r, e) || ExpensesViewAdminAll_nonIterableRest(); }
function ExpensesViewAdminAll_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ExpensesViewAdminAll_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return ExpensesViewAdminAll_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ExpensesViewAdminAll_arrayLikeToArray(r, a) : void 0; } }
function ExpensesViewAdminAll_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ExpensesViewAdminAll_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function ExpensesViewAdminAll_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ExpensesViewAdminAll_extends() { return ExpensesViewAdminAll_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, ExpensesViewAdminAll_extends.apply(null, arguments); }
function ExpensesViewAdminAll_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = ExpensesViewAdminAll_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function ExpensesViewAdminAll_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;





















var ViewTooltip = (0,styled/* default */.Ay)(_ref => {
  var className = _ref.className,
    props = ExpensesViewAdminAll_objectWithoutProperties(_ref, ExpensesViewAdminAll_excluded);
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, ExpensesViewAdminAll_extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(tooltipClasses/* default */.A.tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,styled/* default */.Ay)(_ref3 => {
  var className = _ref3.className,
    props = ExpensesViewAdminAll_objectWithoutProperties(_ref3, ExpensesViewAdminAll_excluded2);
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, ExpensesViewAdminAll_extends({}, props, {
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
function ExpensesViewAdminAll() {
  var _expenses$filter;
  var _useParams = (0,dist/* useParams */.g)(),
    id = _useParams.id;
  var navigate = (0,dist/* useNavigate */.Zp)();
  var dispatch = (0,es/* useDispatch */.wA)();
  var user = (0,es/* useSelector */.d4)(authSlice/* selectCurrentUser */.xu);
  (0,react.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    if (storesUserId) {
      axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/get-employeeuser/").concat(storesUserId)).then(res => {
        // Handle the response data here
        var Name = res.data.data.employeeName;
        var Role = res.data.data.role;
        dispatch((0,authSlice/* setUser */.gV)({
          userName: Name,
          role: Role
        }));
      }).catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
        dispatch((0,authSlice/* logOut */.je)());
      });
    } else {
      console.log('no id');
      navigate('/');
    }
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,authSlice/* logOut */.je)());
    navigate('/');
  };
  var _useState = (0,react.useState)([]),
    _useState2 = ExpensesViewAdminAll_slicedToArray(_useState, 2),
    expenses = _useState2[0],
    setExpenses = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = ExpensesViewAdminAll_slicedToArray(_useState3, 2),
    invoice = _useState4[0],
    setInvoice = _useState4[1];
  var _useState5 = (0,react.useState)({}),
    _useState6 = ExpensesViewAdminAll_slicedToArray(_useState5, 2),
    expenses2 = _useState6[0],
    SetExpenses2 = _useState6[1];
  var _useState7 = (0,react.useState)(true),
    _useState8 = ExpensesViewAdminAll_slicedToArray(_useState7, 2),
    loadingData = _useState8[0],
    setLoadingData = _useState8[1];
  var apiUrl = "".concat(apiConfig/* ENDPOINT_URL */.m, "/dailyexpense");
  (0,react.useEffect)(() => {
    axios/* default */.A.get(apiUrl).then(res => {
      // Handle the response data here
      setExpenses(res.data.data.reverse());
      setLoadingData(false);
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
      setLoadingData(false);
    });
  }, []);
  (0,react.useEffect)(() => {
    axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/invoice?summary=true")).then(res => {
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
  var newExpense = expenses.filter(row => !invoice.some(item => row.referenceNumber === item.invoiceNumber));
  var _useState9 = (0,react.useState)(0),
    _useState0 = ExpensesViewAdminAll_slicedToArray(_useState9, 2),
    amount = _useState0[0],
    setAmount = _useState0[1];
  var _useState1 = (0,react.useState)(0),
    _useState10 = ExpensesViewAdminAll_slicedToArray(_useState1, 2),
    amount2 = _useState10[0],
    setAmount2 = _useState10[1];
  (0,react.useEffect)(() => {
    var row = document.querySelectorAll('#totalCostInfo');
    var sum = 0;
    for (var i = 0; i < row.length; i++) {
      sum += parseFloat(row[i].innerHTML);
      setAmount(sum);
    }
    var invTotal = document.querySelectorAll('#totalInvoice');
    var prod = 0;
    for (var _i = 0; _i < invTotal.length; _i++) {
      prod = parseFloat(invTotal[_i].innerHTML);
      setAmount2(prod);
    }
  });
  var Gain = amount2 - amount;
  var data = [{
    "id": 1,
    "label": "Cost",
    "value": amount
  }, {
    "id": 2,
    "label": "Sell",
    "value": amount2
  }, {
    "id": 3,
    "label": "Sell",
    "value": Gain
  }];
  var RADIAN = Math.PI / 180;
  var renderCustomizedLabel = _ref5 => {
    var cx = _ref5.cx,
      cy = _ref5.cy,
      midAngle = _ref5.midAngle,
      innerRadius = _ref5.innerRadius,
      outerRadius = _ref5.outerRadius,
      percent = _ref5.percent,
      index = _ref5.index;
    var radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    var x = cx + radius * Math.cos(-midAngle * RADIAN);
    var y = cy + radius * Math.sin(-midAngle * RADIAN);
    return /*#__PURE__*/react.createElement("text", {
      x: x,
      y: y,
      fill: "white",
      textAnchor: x > cx ? 'start' : 'end',
      dominantBaseline: "central"
    }, "".concat((percent * 100).toFixed(0), "%"));
  };
  var _useState11 = (0,react.useState)(1),
    _useState12 = ExpensesViewAdminAll_slicedToArray(_useState11, 2),
    show = _useState12[0],
    setShow = _useState12[1];
  var handleShow = e => {
    setShow(e);
  };
  var expensesFiltered = newExpense === null || newExpense === void 0 ? void 0 : newExpense.filter(row => row._id === expenses2._id);
  var _useState13 = (0,react.useState)(1),
    _useState14 = ExpensesViewAdminAll_slicedToArray(_useState13, 2),
    show1 = _useState14[0],
    setShow1 = _useState14[1];
  var handleShow1 = e => {
    setShow1(e);
  };
  var _useState15 = (0,react.useState)(""),
    _useState16 = ExpensesViewAdminAll_slicedToArray(_useState15, 2),
    reason = _useState16[0],
    setReason = _useState16[1];
  var _useState17 = (0,react.useState)([]),
    _useState18 = ExpensesViewAdminAll_slicedToArray(_useState17, 2),
    Comments1 = _useState18[0],
    setComments = _useState18[1];
  (0,react.useEffect)(() => {
    axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/comment")).then(res => {
      var _res$data2;
      // Handle the response data here
      var resp = (_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.filter(row => row.CommentInfo.idInfo === id);
      setComments(resp.reverse());
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  }, [id]);
  var CommentInfo = {
    idInfo: id,
    person: user.data.userName,
    reason
  };
  {/** Loading Start */}
  var _useState19 = (0,react.useState)(false),
    _useState20 = ExpensesViewAdminAll_slicedToArray(_useState19, 2),
    loading = _useState20[0],
    setLoading = _useState20[1];
  var _useState21 = (0,react.useState)(false),
    _useState22 = ExpensesViewAdminAll_slicedToArray(_useState21, 2),
    loadingOpenModal = _useState22[0],
    setLoadingOpenModal = _useState22[1];
  var _useState23 = (0,react.useState)(false),
    _useState24 = ExpensesViewAdminAll_slicedToArray(_useState23, 2),
    ErrorOpenModal = _useState24[0],
    setErrorOpenModal = _useState24[1];
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
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  {/** Loading End */}
  var dateComment = dayjs_min_default()(Date.now());
  var handleSubmitEdit = e => {
    e.preventDefault();
    var data = {
      CommentInfo,
      dateComment
    };
    axios/* default */.A.post("".concat(apiConfig/* ENDPOINT_URL */.m, "/create-comment/"), data).then(res => {
      if (res) {
        setReason("");
        handleOpen();
        var newData = res.data.data;
        setComments([newData, ...Comments1]);
      }
    }).catch(error => {
      if (error) {
        handleError();
      }
    });
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sidemnuandcontent"
  }, /*#__PURE__*/react.createElement(SidebarDash/* default */.A, null), /*#__PURE__*/react.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react.createElement("div", {
    className: "headername"
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5"
  }, "Expenses")), /*#__PURE__*/react.createElement("div", {
    className: "rightcontent"
  }, /*#__PURE__*/react.createElement(ViewTooltip, {
    title: "Back",
    placement: "bottom"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: () => navigate(-1)
  }, /*#__PURE__*/react.createElement(ArrowBack/* default */.A, {
    className: "btnCustomer6"
  }))), /*#__PURE__*/react.createElement(NotificationsNone/* default */.A, {
    className: "iconesize"
  }), /*#__PURE__*/react.createElement(Typography/* default */.A, null, "User Name"), /*#__PURE__*/react.createElement(ViewTooltip, {
    title: "Logout"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: handleLogout
  }, /*#__PURE__*/react.createElement(NetworkLogoutIcon/* default */.A, {
    style: {
      color: 'white'
    }
  })))))), /*#__PURE__*/react.createElement("br", null), loadingData ? /*#__PURE__*/react.createElement("div", {
    className: "invoice"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react.createElement(Loader/* default */.A, null))) : /*#__PURE__*/react.createElement("div", {
    className: "itemview1"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    spacing: 2
  }, show1 === 1 ? /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 3
  }, show === 1 ? /*#__PURE__*/react.createElement("div", {
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
  }, "All Expense")), /*#__PURE__*/react.createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react.createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow(2)
  }, "Filter"))), /*#__PURE__*/react.createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, newExpense === null || newExpense === void 0 ? void 0 : newExpense.map(row => /*#__PURE__*/react.createElement("div", {
    className: "itemInfoContainerContent1",
    key: row._id
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      lineHeight: '2px',
      fontSize: '1rem',
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement(Checkbox/* default */.A, null), /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
    to: "/ExpensesViewAdminAll/".concat(row._id),
    className: "LinkName",
    style: {
      width: '75%'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "itemInfoContainerContent"
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, row.customerName !== undefined ? row.customerName.customerName.toUpperCase() : '')), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Typography/* default */.A, null, "INV-", String(row.referenceNumber).padStart(6, '0')))))))))) : '', show === 2 ? /*#__PURE__*/react.createElement("div", {
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
  }, /*#__PURE__*/react.createElement(Autocomplete/* default */.A, {
    disableClearable: true,
    options: newExpense,
    getOptionLabel: option => 'INV-' + String(option.referenceNumber).padStart(6, '0'),
    renderOption: (props, option) => /*#__PURE__*/react.createElement(Box/* default */.A, props, option.customerName.customerName.toUpperCase(), "/INV-", String(option.referenceNumber).padStart(6, '0')),
    onChange: (e, newValue) => SetExpenses2(newValue),
    renderInput: params => /*#__PURE__*/react.createElement(TextField/* default */.A, ExpensesViewAdminAll_extends({}, params, {
      label: "Expenses"
    })),
    size: "small",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react.createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react.createElement(Close/* default */.A, {
    style: {
      color: '#202a5a'
    }
  }))))), /*#__PURE__*/react.createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'auto',
      width: '100%'
    }
  }, expensesFiltered === null || expensesFiltered === void 0 ? void 0 : expensesFiltered.map(row => /*#__PURE__*/react.createElement("div", {
    className: "itemInfoContainerContent1",
    key: row._id
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      lineHeight: '2px',
      fontSize: '1rem',
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement(Checkbox/* default */.A, null), /*#__PURE__*/react.createElement(react_router_dom_dist/* NavLink */.k2, {
    to: "/ExpensesViewAdminAll/".concat(row._id),
    className: "LinkName",
    style: {
      width: '75%'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "itemInfoContainerContent"
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, row.customerName !== undefined ? row.customerName.customerName.toUpperCase() : '')), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Typography/* default */.A, null, "INV-", String(row.referenceNumber).padStart(6, '0')))))))))) : '') : '', /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 9
  }, /*#__PURE__*/react.createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      width: '100%',
      background: 'white'
    }
  }, expenses === null || expenses === void 0 || (_expenses$filter = expenses.filter(row => row._id === id)) === null || _expenses$filter === void 0 ? void 0 : _expenses$filter.map(row => {
    var _row$items, _row$items2;
    return /*#__PURE__*/react.createElement("div", {
      key: row._id
    }, /*#__PURE__*/react.createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "h5"
    }, row.customerName !== undefined ? row.customerName.customerName.toUpperCase() : ''), /*#__PURE__*/react.createElement(Typography/* default */.A, null, "INV-", String(row.referenceNumber).padStart(6, '0'))), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", {
      className: "btnCustomer1",
      onClick: () => handleShow1(2)
    }, "Comments"))), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("div", {
      style: {
        height: '450px',
        overflow: 'hidden',
        overflowY: 'scroll',
        width: '100%',
        background: 'white',
        margin: '10px'
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "itemInfoContainer2Content"
    }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
      container: true
    }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
      item: true,
      xs: 12
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        padding: '5px'
      }
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react.createElement("table", {
      className: "tableItemInfo"
    }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      align: "left"
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "h6"
    }, "Reference")), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement(Typography/* default */.A, null, "INV-", String(row.referenceNumber).padStart(6, '0')))))), /*#__PURE__*/react.createElement("table", {
      className: "tableItemInfo"
    }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      align: "left"
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
      variant: "h6"
    }, "Date")), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement(Typography/* default */.A, null, dayjs_min_default()(row.expenseDate).format('DD/MM/YYYY'))))))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Item Expenses Cost"), /*#__PURE__*/react.createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/react.createElement("table", {
      className: "tableinvoice"
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      align: "center",
      style: {
        width: '50px'
      }
    }, "#"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'left',
        padding: '10px',
        width: '100px'
      }
    }, "Item"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'left',
        padding: '10px',
        width: '120px'
      }
    }, "Cost Unit price"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'left',
        padding: '10px',
        width: '80px'
      }
    }, "Qty"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'left',
        padding: '10px',
        width: '80px'
      }
    }, "Amount"))), /*#__PURE__*/react.createElement("tbody", null, (_row$items = row.items) === null || _row$items === void 0 ? void 0 : _row$items.map((Item, i) => /*#__PURE__*/react.createElement("tr", {
      key: Item.idRow
    }, /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'center'
      }
    }, " ", i + 1), /*#__PURE__*/react.createElement("td", null, Item.itemName.itemName), /*#__PURE__*/react.createElement("td", null, Item.itemCost), /*#__PURE__*/react.createElement("td", null, Item.itemQty), /*#__PURE__*/react.createElement("td", {
      id: "totalCostInfo"
    }, Item.itemCost * Item.itemQty))))), /*#__PURE__*/react.createElement("div", {
      className: "downTabledetails",
      style: {
        alignItems: 'center'
      }
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        width: '55%',
        padding: '5px'
      }
    }, /*#__PURE__*/react.createElement("ul", {
      style: {
        listStyle: 'none'
      }
    }, /*#__PURE__*/react.createElement("li", null, "Total Cost Item"))), /*#__PURE__*/react.createElement("div", {
      className: "downTabledetailstotal"
    }, /*#__PURE__*/react.createElement("table", {
      className: "firstTable2"
    }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        borderBottom: 'none'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Total")), /*#__PURE__*/react.createElement("td", {
      style: {
        borderBottom: 'none'
      }
    }, /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react.createElement("span", {
      id: "sumTotalCost"
    }, amount)))))))))), /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Item Invoice Sell"), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
      item: true,
      xs: 12
    }, /*#__PURE__*/react.createElement("table", {
      className: "tableinvoice"
    }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      align: "center",
      style: {
        width: '50px'
      }
    }, "#"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'left',
        padding: '10px',
        width: '20%'
      }
    }, "Item"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'left',
        padding: '10px',
        width: '40%'
      }
    }, "Description"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'right',
        padding: '10px',
        width: '10%'
      }
    }, "Qty"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'right',
        padding: '10px',
        width: '15%'
      }
    }, "Unit Price"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'right',
        padding: '10px',
        width: '13%'
      }
    }, "Discount"), /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'right',
        padding: '10px',
        width: '15%'
      }
    }, "Amount"))), /*#__PURE__*/react.createElement("tbody", null, (_row$items2 = row.items) === null || _row$items2 === void 0 ? void 0 : _row$items2.map((Item, i) => /*#__PURE__*/react.createElement("tr", {
      key: Item.idRow
    }, /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'center'
      }
    }, " ", i + 1), /*#__PURE__*/react.createElement("td", null, Item.itemName.itemName), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        padding: '10px'
      }
    }, Item.itemDescription), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'right',
        padding: '10px'
      }
    }, Item.itemQty), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'right',
        padding: '10px'
      }
    }, Item.itemRate), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'right',
        padding: '10px'
      }
    }, Item.itemDiscount, /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "%")), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'right',
        padding: '10px'
      }
    }, Item.itemAmount))))), /*#__PURE__*/react.createElement("div", {
      className: "downTabledetails"
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        width: '55%',
        padding: '5px'
      }
    }, /*#__PURE__*/react.createElement("ul", {
      style: {
        listStyle: 'none'
      }
    }, /*#__PURE__*/react.createElement("li", null, "Total Invoice Item"))), /*#__PURE__*/react.createElement("div", {
      className: "downTabledetailstotal"
    }, /*#__PURE__*/react.createElement("table", {
      className: "firstTable2"
    }, /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        borderBottom: 'none'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Total")), /*#__PURE__*/react.createElement("td", {
      style: {
        borderBottom: 'none'
      }
    }, /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react.createElement("span", {
      id: "totalInvoice"
    }, " ", row.subTotal)))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
      style: {
        textAlign: 'left',
        borderBottom: 'none'
      }
    }, /*#__PURE__*/react.createElement("span", null, "Total in Words")), /*#__PURE__*/react.createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: 'none'
      }
    }, /*#__PURE__*/react.createElement("span", null, row.totalW)))))))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
      item: true,
      xs: 12,
      style: {
        display: 'flex',
        margin: '10px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react.createElement(ResponsiveContainer, {
      width: "100%",
      height: "100%",
      margin: "30%"
    }, /*#__PURE__*/react.createElement(PieChart, {
      width: 50,
      height: 50
    }, /*#__PURE__*/react.createElement(Pie, {
      data: data,
      cx: "50%",
      cy: "50%",
      labelLine: false,
      label: renderCustomizedLabel,
      outerRadius: 80,
      fill: "#8884d8",
      dataKey: "value"
    }, data.map(entry => {
      if (entry.id === 1) {
        return /*#__PURE__*/react.createElement(Cell, {
          key: "cell-".concat(entry.id),
          fill: "#FFBB28"
        });
      } else if (entry.id === 2) {
        return /*#__PURE__*/react.createElement(Cell, {
          key: "cell-".concat(entry.id),
          fill: "#0088FE"
        });
      } else if (entry.id === 3) {
        return /*#__PURE__*/react.createElement(Cell, {
          key: "cell-".concat(entry.id),
          fill: "#00C49F"
        });
      }
    })))), /*#__PURE__*/react.createElement(Table/* default */.A, null, /*#__PURE__*/react.createElement(TableBody/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center",
      sx: {
        backgroundColor: '#FFBB28',
        color: 'white'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Cost")), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "right",
      sx: {
        color: '#FFBB28',
        width: '30%'
      },
      id: "amountT"
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, " ", /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), " ", amount))), /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center",
      sx: {
        backgroundColor: '#0088FE',
        color: 'white'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Sell")), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "right",
      sx: {
        color: '#0088FE',
        width: '30%'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, " ", /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), " ", row.subTotal))), /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center",
      sx: {
        backgroundColor: '#00C49F',
        color: 'white'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, "Gain")), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "right",
      sx: {
        color: '#00C49F',
        width: '30%'
      }
    }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, " ", /*#__PURE__*/react.createElement("span", {
      "data-prefix": true
    }, "$"), " ", row.subTotal - amount))))))))));
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
  }, /*#__PURE__*/react.createElement("p", null, "COMMENTS"), /*#__PURE__*/react.createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow1(1)
  }, "Close")), /*#__PURE__*/react.createElement("form", {
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
    onChange: e => setReason(e.target.value),
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
      height: '333px',
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
  }, Item.dateComment ? dayjs_min_default()(Item.dateComment).format('DD/MM') : '', " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "")), /*#__PURE__*/react.createElement(Modal/* default */.A, {
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
    sx: ExpensesViewAdminAll_objectSpread(ExpensesViewAdminAll_objectSpread({}, style), {}, {
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
    sx: ExpensesViewAdminAll_objectSpread(ExpensesViewAdminAll_objectSpread({}, style), {}, {
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
/* harmony default export */ const ExpensesView_ExpensesViewAdminAll = (ExpensesViewAdminAll);

/***/ },

/***/ 38351
(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */
;(function (globalScope) {
  'use strict';


  /*
   *  decimal.js-light v2.5.1
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js-light
   *  Copyright (c) 2020 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Expat Licence
   */


  // -----------------------------------  EDITABLE DEFAULTS  ------------------------------------ //


    // The limit on the value of `precision`, and on the value of the first argument to
    // `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
  var MAX_DIGITS = 1e9,                        // 0 to 1e9


    // The initial configuration properties of the Decimal constructor.
    Decimal = {

      // These values must be integers within the stated ranges (inclusive).
      // Most of these values can be changed during run-time using `Decimal.config`.

      // The maximum number of significant digits of the result of a calculation or base conversion.
      // E.g. `Decimal.config({ precision: 20 });`
      precision: 20,                         // 1 to MAX_DIGITS

      // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
      // `toFixed`, `toPrecision` and `toSignificantDigits`.
      //
      // ROUND_UP         0 Away from zero.
      // ROUND_DOWN       1 Towards zero.
      // ROUND_CEIL       2 Towards +Infinity.
      // ROUND_FLOOR      3 Towards -Infinity.
      // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      //
      // E.g.
      // `Decimal.rounding = 4;`
      // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
      rounding: 4,                           // 0 to 8

      // The exponent value at and beneath which `toString` returns exponential notation.
      // JavaScript numbers: -7
      toExpNeg: -7,                          // 0 to -MAX_E

      // The exponent value at and above which `toString` returns exponential notation.
      // JavaScript numbers: 21
      toExpPos:  21,                         // 0 to MAX_E

      // The natural logarithm of 10.
      // 115 digits
      LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
    },


  // ----------------------------------- END OF EDITABLE DEFAULTS ------------------------------- //


    external = true,

    decimalError = '[DecimalError] ',
    invalidArgument = decimalError + 'Invalid argument: ',
    exponentOutOfRange = decimalError + 'Exponent out of range: ',

    mathfloor = Math.floor,
    mathpow = Math.pow,

    isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,

    ONE,
    BASE = 1e7,
    LOG_BASE = 7,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_E = mathfloor(MAX_SAFE_INTEGER / LOG_BASE),    // 1286742750677284

    // Decimal.prototype object
    P = {};


  // Decimal prototype methods


  /*
   *  absoluteValue                       abs
   *  comparedTo                          cmp
   *  decimalPlaces                       dp
   *  dividedBy                           div
   *  dividedToIntegerBy                  idiv
   *  equals                              eq
   *  exponent
   *  greaterThan                         gt
   *  greaterThanOrEqualTo                gte
   *  isInteger                           isint
   *  isNegative                          isneg
   *  isPositive                          ispos
   *  isZero
   *  lessThan                            lt
   *  lessThanOrEqualTo                   lte
   *  logarithm                           log
   *  minus                               sub
   *  modulo                              mod
   *  naturalExponential                  exp
   *  naturalLogarithm                    ln
   *  negated                             neg
   *  plus                                add
   *  precision                           sd
   *  squareRoot                          sqrt
   *  times                               mul
   *  toDecimalPlaces                     todp
   *  toExponential
   *  toFixed
   *  toInteger                           toint
   *  toNumber
   *  toPower                             pow
   *  toPrecision
   *  toSignificantDigits                 tosd
   *  toString
   *  valueOf                             val
   */


  /*
   * Return a new Decimal whose value is the absolute value of this Decimal.
   *
   */
  P.absoluteValue = P.abs = function () {
    var x = new this.constructor(this);
    if (x.s) x.s = 1;
    return x;
  };


  /*
   * Return
   *   1    if the value of this Decimal is greater than the value of `y`,
   *  -1    if the value of this Decimal is less than the value of `y`,
   *   0    if they have the same value
   *
   */
  P.comparedTo = P.cmp = function (y) {
    var i, j, xdL, ydL,
      x = this;

    y = new x.constructor(y);

    // Signs differ?
    if (x.s !== y.s) return x.s || -y.s;

    // Compare exponents.
    if (x.e !== y.e) return x.e > y.e ^ x.s < 0 ? 1 : -1;

    xdL = x.d.length;
    ydL = y.d.length;

    // Compare digit by digit.
    for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
      if (x.d[i] !== y.d[i]) return x.d[i] > y.d[i] ^ x.s < 0 ? 1 : -1;
    }

    // Compare lengths.
    return xdL === ydL ? 0 : xdL > ydL ^ x.s < 0 ? 1 : -1;
  };


  /*
   * Return the number of decimal places of the value of this Decimal.
   *
   */
  P.decimalPlaces = P.dp = function () {
    var x = this,
      w = x.d.length - 1,
      dp = (w - x.e) * LOG_BASE;

    // Subtract the number of trailing zeros of the last word.
    w = x.d[w];
    if (w) for (; w % 10 == 0; w /= 10) dp--;

    return dp < 0 ? 0 : dp;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal divided by `y`, truncated to
   * `precision` significant digits.
   *
   */
  P.dividedBy = P.div = function (y) {
    return divide(this, new this.constructor(y));
  };


  /*
   * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
   * by the value of `y`, truncated to `precision` significant digits.
   *
   */
  P.dividedToIntegerBy = P.idiv = function (y) {
    var x = this,
      Ctor = x.constructor;
    return round(divide(x, new Ctor(y), 0, 1), Ctor.precision);
  };


  /*
   * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
   *
   */
  P.equals = P.eq = function (y) {
    return !this.cmp(y);
  };


  /*
   * Return the (base 10) exponent value of this Decimal (this.e is the base 10000000 exponent).
   *
   */
  P.exponent = function () {
    return getBase10Exponent(this);
  };


  /*
   * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
   * false.
   *
   */
  P.greaterThan = P.gt = function (y) {
    return this.cmp(y) > 0;
  };


  /*
   * Return true if the value of this Decimal is greater than or equal to the value of `y`,
   * otherwise return false.
   *
   */
  P.greaterThanOrEqualTo = P.gte = function (y) {
    return this.cmp(y) >= 0;
  };


  /*
   * Return true if the value of this Decimal is an integer, otherwise return false.
   *
   */
  P.isInteger = P.isint = function () {
    return this.e > this.d.length - 2;
  };


  /*
   * Return true if the value of this Decimal is negative, otherwise return false.
   *
   */
  P.isNegative = P.isneg = function () {
    return this.s < 0;
  };


  /*
   * Return true if the value of this Decimal is positive, otherwise return false.
   *
   */
  P.isPositive = P.ispos = function () {
    return this.s > 0;
  };


  /*
   * Return true if the value of this Decimal is 0, otherwise return false.
   *
   */
  P.isZero = function () {
    return this.s === 0;
  };


  /*
   * Return true if the value of this Decimal is less than `y`, otherwise return false.
   *
   */
  P.lessThan = P.lt = function (y) {
    return this.cmp(y) < 0;
  };


  /*
   * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
   *
   */
  P.lessThanOrEqualTo = P.lte = function (y) {
    return this.cmp(y) < 1;
  };


  /*
   * Return the logarithm of the value of this Decimal to the specified base, truncated to
   * `precision` significant digits.
   *
   * If no base is specified, return log[10](x).
   *
   * log[base](x) = ln(x) / ln(base)
   *
   * The maximum error of the result is 1 ulp (unit in the last place).
   *
   * [base] {number|string|Decimal} The base of the logarithm.
   *
   */
  P.logarithm = P.log = function (base) {
    var r,
      x = this,
      Ctor = x.constructor,
      pr = Ctor.precision,
      wpr = pr + 5;

    // Default base is 10.
    if (base === void 0) {
      base = new Ctor(10);
    } else {
      base = new Ctor(base);

      // log[-b](x) = NaN
      // log[0](x)  = NaN
      // log[1](x)  = NaN
      if (base.s < 1 || base.eq(ONE)) throw Error(decimalError + 'NaN');
    }

    // log[b](-x) = NaN
    // log[b](0) = -Infinity
    if (x.s < 1) throw Error(decimalError + (x.s ? 'NaN' : '-Infinity'));

    // log[b](1) = 0
    if (x.eq(ONE)) return new Ctor(0);

    external = false;
    r = divide(ln(x, wpr), ln(base, wpr), wpr);
    external = true;

    return round(r, pr);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal minus `y`, truncated to
   * `precision` significant digits.
   *
   */
  P.minus = P.sub = function (y) {
    var x = this;
    y = new x.constructor(y);
    return x.s == y.s ? subtract(x, y) : add(x, (y.s = -y.s, y));
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal modulo `y`, truncated to
   * `precision` significant digits.
   *
   */
  P.modulo = P.mod = function (y) {
    var q,
      x = this,
      Ctor = x.constructor,
      pr = Ctor.precision;

    y = new Ctor(y);

    // x % 0 = NaN
    if (!y.s) throw Error(decimalError + 'NaN');

    // Return x if x is 0.
    if (!x.s) return round(new Ctor(x), pr);

    // Prevent rounding of intermediate calculations.
    external = false;
    q = divide(x, y, 0, 1).times(y);
    external = true;

    return x.minus(q);
  };


  /*
   * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
   * i.e. the base e raised to the power the value of this Decimal, truncated to `precision`
   * significant digits.
   *
   */
  P.naturalExponential = P.exp = function () {
    return exp(this);
  };


  /*
   * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
   * truncated to `precision` significant digits.
   *
   */
  P.naturalLogarithm = P.ln = function () {
    return ln(this);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
   * -1.
   *
   */
  P.negated = P.neg = function () {
    var x = new this.constructor(this);
    x.s = -x.s || 0;
    return x;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal plus `y`, truncated to
   * `precision` significant digits.
   *
   */
  P.plus = P.add = function (y) {
    var x = this;
    y = new x.constructor(y);
    return x.s == y.s ? add(x, y) : subtract(x, (y.s = -y.s, y));
  };


  /*
   * Return the number of significant digits of the value of this Decimal.
   *
   * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
   *
   */
  P.precision = P.sd = function (z) {
    var e, sd, w,
      x = this;

    if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);

    e = getBase10Exponent(x) + 1;
    w = x.d.length - 1;
    sd = w * LOG_BASE + 1;
    w = x.d[w];

    // If non-zero...
    if (w) {

      // Subtract the number of trailing zeros of the last word.
      for (; w % 10 == 0; w /= 10) sd--;

      // Add the number of digits of the first word.
      for (w = x.d[0]; w >= 10; w /= 10) sd++;
    }

    return z && e > sd ? e : sd;
  };


  /*
   * Return a new Decimal whose value is the square root of this Decimal, truncated to `precision`
   * significant digits.
   *
   */
  P.squareRoot = P.sqrt = function () {
    var e, n, pr, r, s, t, wpr,
      x = this,
      Ctor = x.constructor;

    // Negative or zero?
    if (x.s < 1) {
      if (!x.s) return new Ctor(0);

      // sqrt(-x) = NaN
      throw Error(decimalError + 'NaN');
    }

    e = getBase10Exponent(x);
    external = false;

    // Initial estimate.
    s = Math.sqrt(+x);

    // Math.sqrt underflow/overflow?
    // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
    if (s == 0 || s == 1 / 0) {
      n = digitsToString(x.d);
      if ((n.length + e) % 2 == 0) n += '0';
      s = Math.sqrt(n);
      e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);

      if (s == 1 / 0) {
        n = '5e' + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf('e') + 1) + e;
      }

      r = new Ctor(n);
    } else {
      r = new Ctor(s.toString());
    }

    pr = Ctor.precision;
    s = wpr = pr + 3;

    // Newton-Raphson iteration.
    for (;;) {
      t = r;
      r = t.plus(divide(x, t, wpr + 2)).times(0.5);

      if (digitsToString(t.d).slice(0, wpr) === (n = digitsToString(r.d)).slice(0, wpr)) {
        n = n.slice(wpr - 3, wpr + 1);

        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
        // 4999, i.e. approaching a rounding boundary, continue the iteration.
        if (s == wpr && n == '4999') {

          // On the first iteration only, check to see if rounding up gives the exact result as the
          // nines may infinitely repeat.
          round(t, pr + 1, 0);

          if (t.times(t).eq(x)) {
            r = t;
            break;
          }
        } else if (n != '9999') {
          break;
        }

        wpr += 4;
      }
    }

    external = true;

    return round(r, pr);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal times `y`, truncated to
   * `precision` significant digits.
   *
   */
  P.times = P.mul = function (y) {
    var carry, e, i, k, r, rL, t, xdL, ydL,
      x = this,
      Ctor = x.constructor,
      xd = x.d,
      yd = (y = new Ctor(y)).d;

    // Return 0 if either is 0.
    if (!x.s || !y.s) return new Ctor(0);

    y.s *= x.s;
    e = x.e + y.e;
    xdL = xd.length;
    ydL = yd.length;

    // Ensure xd points to the longer array.
    if (xdL < ydL) {
      r = xd;
      xd = yd;
      yd = r;
      rL = xdL;
      xdL = ydL;
      ydL = rL;
    }

    // Initialise the result array with zeros.
    r = [];
    rL = xdL + ydL;
    for (i = rL; i--;) r.push(0);

    // Multiply!
    for (i = ydL; --i >= 0;) {
      carry = 0;
      for (k = xdL + i; k > i;) {
        t = r[k] + yd[i] * xd[k - i - 1] + carry;
        r[k--] = t % BASE | 0;
        carry = t / BASE | 0;
      }

      r[k] = (r[k] + carry) % BASE | 0;
    }

    // Remove trailing zeros.
    for (; !r[--rL];) r.pop();

    if (carry) ++e;
    else r.shift();

    y.d = r;
    y.e = e;

    return external ? round(y, Ctor.precision) : y;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
   * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
   *
   * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toDecimalPlaces = P.todp = function (dp, rm) {
    var x = this,
      Ctor = x.constructor;

    x = new Ctor(x);
    if (dp === void 0) return x;

    checkInt32(dp, 0, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    return round(x, dp + getBase10Exponent(x) + 1, rm);
  };


  /*
   * Return a string representing the value of this Decimal in exponential notation rounded to
   * `dp` fixed decimal places using rounding mode `rounding`.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toExponential = function (dp, rm) {
    var str,
      x = this,
      Ctor = x.constructor;

    if (dp === void 0) {
      str = toString(x, true);
    } else {
      checkInt32(dp, 0, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      x = round(new Ctor(x), dp + 1, rm);
      str = toString(x, true, dp + 1);
    }

    return str;
  };


  /*
   * Return a string representing the value of this Decimal in normal (fixed-point) notation to
   * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
   * omitted.
   *
   * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
   * (-0).toFixed(3) is '0.000'.
   * (-0.5).toFixed(0) is '-0'.
   *
   */
  P.toFixed = function (dp, rm) {
    var str, y,
      x = this,
      Ctor = x.constructor;

    if (dp === void 0) return toString(x);

    checkInt32(dp, 0, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    y = round(new Ctor(x), dp + getBase10Exponent(x) + 1, rm);
    str = toString(y.abs(), false, dp + getBase10Exponent(y) + 1);

    // To determine whether to add the minus sign look at the value before it was rounded,
    // i.e. look at `x` rather than `y`.
    return x.isneg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
   * rounding mode `rounding`.
   *
   */
  P.toInteger = P.toint = function () {
    var x = this,
      Ctor = x.constructor;
    return round(new Ctor(x), getBase10Exponent(x) + 1, Ctor.rounding);
  };


  /*
   * Return the value of this Decimal converted to a number primitive.
   *
   */
  P.toNumber = function () {
    return +this;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal raised to the power `y`,
   * truncated to `precision` significant digits.
   *
   * For non-integer or very large exponents pow(x, y) is calculated using
   *
   *   x^y = exp(y*ln(x))
   *
   * The maximum error is 1 ulp (unit in last place).
   *
   * y {number|string|Decimal} The power to which to raise this Decimal.
   *
   */
  P.toPower = P.pow = function (y) {
    var e, k, pr, r, sign, yIsInt,
      x = this,
      Ctor = x.constructor,
      guard = 12,
      yn = +(y = new Ctor(y));

    // pow(x, 0) = 1
    if (!y.s) return new Ctor(ONE);

    x = new Ctor(x);

    // pow(0, y > 0) = 0
    // pow(0, y < 0) = Infinity
    if (!x.s) {
      if (y.s < 1) throw Error(decimalError + 'Infinity');
      return x;
    }

    // pow(1, y) = 1
    if (x.eq(ONE)) return x;

    pr = Ctor.precision;

    // pow(x, 1) = x
    if (y.eq(ONE)) return round(x, pr);

    e = y.e;
    k = y.d.length - 1;
    yIsInt = e >= k;
    sign = x.s;

    if (!yIsInt) {

      // pow(x < 0, y non-integer) = NaN
      if (sign < 0) throw Error(decimalError + 'NaN');

    // If y is a small integer use the 'exponentiation by squaring' algorithm.
    } else if ((k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
      r = new Ctor(ONE);

      // Max k of 9007199254740991 takes 53 loop iterations.
      // Maximum digits array length; leaves [28, 34] guard digits.
      e = Math.ceil(pr / LOG_BASE + 4);

      external = false;

      for (;;) {
        if (k % 2) {
          r = r.times(x);
          truncate(r.d, e);
        }

        k = mathfloor(k / 2);
        if (k === 0) break;

        x = x.times(x);
        truncate(x.d, e);
      }

      external = true;

      return y.s < 0 ? new Ctor(ONE).div(r) : round(r, pr);
    }

    // Result is negative if x is negative and the last digit of integer y is odd.
    sign = sign < 0 && y.d[Math.max(e, k)] & 1 ? -1 : 1;

    x.s = 1;
    external = false;
    r = y.times(ln(x, pr + guard));
    external = true;
    r = exp(r);
    r.s = sign;

    return r;
  };


  /*
   * Return a string representing the value of this Decimal rounded to `sd` significant digits
   * using rounding mode `rounding`.
   *
   * Return exponential notation if `sd` is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toPrecision = function (sd, rm) {
    var e, str,
      x = this,
      Ctor = x.constructor;

    if (sd === void 0) {
      e = getBase10Exponent(x);
      str = toString(x, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
    } else {
      checkInt32(sd, 1, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      x = round(new Ctor(x), sd, rm);
      e = getBase10Exponent(x);
      str = toString(x, sd <= e || e <= Ctor.toExpNeg, sd);
    }

    return str;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
   * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
   * omitted.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toSignificantDigits = P.tosd = function (sd, rm) {
    var x = this,
      Ctor = x.constructor;

    if (sd === void 0) {
      sd = Ctor.precision;
      rm = Ctor.rounding;
    } else {
      checkInt32(sd, 1, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
    }

    return round(new Ctor(x), sd, rm);
  };


  /*
   * Return a string representing the value of this Decimal.
   *
   * Return exponential notation if this Decimal has a positive exponent equal to or greater than
   * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
   *
   */
  P.toString = P.valueOf = P.val = P.toJSON = function () {
    var x = this,
      e = getBase10Exponent(x),
      Ctor = x.constructor;

    return toString(x, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
  };


  // Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.


  /*
   *  add                 P.minus, P.plus
   *  checkInt32          P.todp, P.toExponential, P.toFixed, P.toPrecision, P.tosd
   *  digitsToString      P.log, P.sqrt, P.pow, toString, exp, ln
   *  divide              P.div, P.idiv, P.log, P.mod, P.sqrt, exp, ln
   *  exp                 P.exp, P.pow
   *  getBase10Exponent   P.exponent, P.sd, P.toint, P.sqrt, P.todp, P.toFixed, P.toPrecision,
   *                      P.toString, divide, round, toString, exp, ln
   *  getLn10             P.log, ln
   *  getZeroString       digitsToString, toString
   *  ln                  P.log, P.ln, P.pow, exp
   *  parseDecimal        Decimal
   *  round               P.abs, P.idiv, P.log, P.minus, P.mod, P.neg, P.plus, P.toint, P.sqrt,
   *                      P.times, P.todp, P.toExponential, P.toFixed, P.pow, P.toPrecision, P.tosd,
   *                      divide, getLn10, exp, ln
   *  subtract            P.minus, P.plus
   *  toString            P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf
   *  truncate            P.pow
   *
   *  Throws:             P.log, P.mod, P.sd, P.sqrt, P.pow,  checkInt32, divide, round,
   *                      getLn10, exp, ln, parseDecimal, Decimal, config
   */


  function add(x, y) {
    var carry, d, e, i, k, len, xd, yd,
      Ctor = x.constructor,
      pr = Ctor.precision;

    // If either is zero...
    if (!x.s || !y.s) {

      // Return x if y is zero.
      // Return y if y is non-zero.
      if (!y.s) y = new Ctor(x);
      return external ? round(y, pr) : y;
    }

    xd = x.d;
    yd = y.d;

    // x and y are finite, non-zero numbers with the same sign.

    k = x.e;
    e = y.e;
    xd = xd.slice();
    i = k - e;

    // If base 1e7 exponents differ...
    if (i) {
      if (i < 0) {
        d = xd;
        i = -i;
        len = yd.length;
      } else {
        d = yd;
        e = k;
        len = xd.length;
      }

      // Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
      k = Math.ceil(pr / LOG_BASE);
      len = k > len ? k + 1 : len + 1;

      if (i > len) {
        i = len;
        d.length = 1;
      }

      // Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
      d.reverse();
      for (; i--;) d.push(0);
      d.reverse();
    }

    len = xd.length;
    i = yd.length;

    // If yd is longer than xd, swap xd and yd so xd points to the longer array.
    if (len - i < 0) {
      i = len;
      d = yd;
      yd = xd;
      xd = d;
    }

    // Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
    for (carry = 0; i;) {
      carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
      xd[i] %= BASE;
    }

    if (carry) {
      xd.unshift(carry);
      ++e;
    }

    // Remove trailing zeros.
    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    for (len = xd.length; xd[--len] == 0;) xd.pop();

    y.d = xd;
    y.e = e;

    return external ? round(y, pr) : y;
  }


  function checkInt32(i, min, max) {
    if (i !== ~~i || i < min || i > max) {
      throw Error(invalidArgument + i);
    }
  }


  function digitsToString(d) {
    var i, k, ws,
      indexOfLastWord = d.length - 1,
      str = '',
      w = d[0];

    if (indexOfLastWord > 0) {
      str += w;
      for (i = 1; i < indexOfLastWord; i++) {
        ws = d[i] + '';
        k = LOG_BASE - ws.length;
        if (k) str += getZeroString(k);
        str += ws;
      }

      w = d[i];
      ws = w + '';
      k = LOG_BASE - ws.length;
      if (k) str += getZeroString(k);
    } else if (w === 0) {
      return '0';
    }

    // Remove trailing zeros of last w.
    for (; w % 10 === 0;) w /= 10;

    return str + w;
  }


  var divide = (function () {

    // Assumes non-zero x and k, and hence non-zero result.
    function multiplyInteger(x, k) {
      var temp,
        carry = 0,
        i = x.length;

      for (x = x.slice(); i--;) {
        temp = x[i] * k + carry;
        x[i] = temp % BASE | 0;
        carry = temp / BASE | 0;
      }

      if (carry) x.unshift(carry);

      return x;
    }

    function compare(a, b, aL, bL) {
      var i, r;

      if (aL != bL) {
        r = aL > bL ? 1 : -1;
      } else {
        for (i = r = 0; i < aL; i++) {
          if (a[i] != b[i]) {
            r = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }

      return r;
    }

    function subtract(a, b, aL) {
      var i = 0;

      // Subtract b from a.
      for (; aL--;) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * BASE + a[aL] - b[aL];
      }

      // Remove leading zeros.
      for (; !a[0] && a.length > 1;) a.shift();
    }

    return function (x, y, pr, dp) {
      var cmp, e, i, k, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz,
        Ctor = x.constructor,
        sign = x.s == y.s ? 1 : -1,
        xd = x.d,
        yd = y.d;

      // Either 0?
      if (!x.s) return new Ctor(x);
      if (!y.s) throw Error(decimalError + 'Division by zero');

      e = x.e - y.e;
      yL = yd.length;
      xL = xd.length;
      q = new Ctor(sign);
      qd = q.d = [];

      // Result exponent may be one less than e.
      for (i = 0; yd[i] == (xd[i] || 0); ) ++i;
      if (yd[i] > (xd[i] || 0)) --e;

      if (pr == null) {
        sd = pr = Ctor.precision;
      } else if (dp) {
        sd = pr + (getBase10Exponent(x) - getBase10Exponent(y)) + 1;
      } else {
        sd = pr;
      }

      if (sd < 0) return new Ctor(0);

      // Convert precision in number of base 10 digits to base 1e7 digits.
      sd = sd / LOG_BASE + 2 | 0;
      i = 0;

      // divisor < 1e7
      if (yL == 1) {
        k = 0;
        yd = yd[0];
        sd++;

        // k is the carry.
        for (; (i < xL || k) && sd--; i++) {
          t = k * BASE + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k = t % yd | 0;
        }

      // divisor >= 1e7
      } else {

        // Normalise xd and yd so highest order digit of yd is >= BASE/2
        k = BASE / (yd[0] + 1) | 0;

        if (k > 1) {
          yd = multiplyInteger(yd, k);
          xd = multiplyInteger(xd, k);
          yL = yd.length;
          xL = xd.length;
        }

        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;

        // Add zeros to make remainder as long as divisor.
        for (; remL < yL;) rem[remL++] = 0;

        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];

        if (yd[1] >= BASE / 2) ++yd0;

        do {
          k = 0;

          // Compare divisor and remainder.
          cmp = compare(yd, rem, yL, remL);

          // If divisor < remainder.
          if (cmp < 0) {

            // Calculate trial digit, k.
            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * BASE + (rem[1] || 0);

            // k will be how many times the divisor goes into the current remainder.
            k = rem0 / yd0 | 0;

            //  Algorithm:
            //  1. product = divisor * trial digit (k)
            //  2. if product > remainder: product -= divisor, k--
            //  3. remainder -= product
            //  4. if product was < remainder at 2:
            //    5. compare new remainder and divisor
            //    6. If remainder > divisor: remainder -= divisor, k++

            if (k > 1) {
              if (k >= BASE) k = BASE - 1;

              // product = divisor * trial digit.
              prod = multiplyInteger(yd, k);
              prodL = prod.length;
              remL = rem.length;

              // Compare product and remainder.
              cmp = compare(prod, rem, prodL, remL);

              // product > remainder.
              if (cmp == 1) {
                k--;

                // Subtract divisor from product.
                subtract(prod, yL < prodL ? yz : yd, prodL);
              }
            } else {

              // cmp is -1.
              // If k is 0, there is no need to compare yd and rem again below, so change cmp to 1
              // to avoid it. If k is 1 there is a need to compare yd and rem again below.
              if (k == 0) cmp = k = 1;
              prod = yd.slice();
            }

            prodL = prod.length;
            if (prodL < remL) prod.unshift(0);

            // Subtract product from remainder.
            subtract(rem, prod, remL);

            // If product was < previous remainder.
            if (cmp == -1) {
              remL = rem.length;

              // Compare divisor and new remainder.
              cmp = compare(yd, rem, yL, remL);

              // If divisor < new remainder, subtract divisor from remainder.
              if (cmp < 1) {
                k++;

                // Subtract divisor from remainder.
                subtract(rem, yL < remL ? yz : yd, remL);
              }
            }

            remL = rem.length;
          } else if (cmp === 0) {
            k++;
            rem = [0];
          }    // if cmp === 1, k will be 0

          // Add the next digit, k, to the result array.
          qd[i++] = k;

          // Update the remainder.
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }

        } while ((xi++ < xL || rem[0] !== void 0) && sd--);
      }

      // Leading zero?
      if (!qd[0]) qd.shift();

      q.e = e;

      return round(q, dp ? pr + getBase10Exponent(q) + 1 : pr);
    };
  })();


  /*
   * Return a new Decimal whose value is the natural exponential of `x` truncated to `sd`
   * significant digits.
   *
   * Taylor/Maclaurin series.
   *
   * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
   *
   * Argument reduction:
   *   Repeat x = x / 32, k += 5, until |x| < 0.1
   *   exp(x) = exp(x / 2^k)^(2^k)
   *
   * Previously, the argument was initially reduced by
   * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
   * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
   * found to be slower than just dividing repeatedly by 32 as above.
   *
   * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
   *
   *  exp(x) is non-terminating for any finite, non-zero x.
   *
   */
  function exp(x, sd) {
    var denominator, guard, pow, sum, t, wpr,
      i = 0,
      k = 0,
      Ctor = x.constructor,
      pr = Ctor.precision;

    if (getBase10Exponent(x) > 16) throw Error(exponentOutOfRange + getBase10Exponent(x));

    // exp(0) = 1
    if (!x.s) return new Ctor(ONE);

    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }

    t = new Ctor(0.03125);

    while (x.abs().gte(0.1)) {
      x = x.times(t);    // x = x / 2^5
      k += 5;
    }

    // Estimate the precision increase necessary to ensure the first 4 rounding digits are correct.
    guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
    wpr += guard;
    denominator = pow = sum = new Ctor(ONE);
    Ctor.precision = wpr;

    for (;;) {
      pow = round(pow.times(x), wpr);
      denominator = denominator.times(++i);
      t = sum.plus(divide(pow, denominator, wpr));

      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
        while (k--) sum = round(sum.times(sum), wpr);
        Ctor.precision = pr;
        return sd == null ? (external = true, round(sum, pr)) : sum;
      }

      sum = t;
    }
  }


  // Calculate the base 10 exponent from the base 1e7 exponent.
  function getBase10Exponent(x) {
    var e = x.e * LOG_BASE,
      w = x.d[0];

    // Add the number of digits of the first word of the digits array.
    for (; w >= 10; w /= 10) e++;
    return e;
  }


  function getLn10(Ctor, sd, pr) {

    if (sd > Ctor.LN10.sd()) {


      // Reset global state in case the exception is caught.
      external = true;
      if (pr) Ctor.precision = pr;
      throw Error(decimalError + 'LN10 precision limit exceeded');
    }

    return round(new Ctor(Ctor.LN10), sd);
  }


  function getZeroString(k) {
    var zs = '';
    for (; k--;) zs += '0';
    return zs;
  }


  /*
   * Return a new Decimal whose value is the natural logarithm of `x` truncated to `sd` significant
   * digits.
   *
   *  ln(n) is non-terminating (n != 1)
   *
   */
  function ln(y, sd) {
    var c, c0, denominator, e, numerator, sum, t, wpr, x2,
      n = 1,
      guard = 10,
      x = y,
      xd = x.d,
      Ctor = x.constructor,
      pr = Ctor.precision;

    // ln(-x) = NaN
    // ln(0) = -Infinity
    if (x.s < 1) throw Error(decimalError + (x.s ? 'NaN' : '-Infinity'));

    // ln(1) = 0
    if (x.eq(ONE)) return new Ctor(0);

    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }

    if (x.eq(10)) {
      if (sd == null) external = true;
      return getLn10(Ctor, wpr);
    }

    wpr += guard;
    Ctor.precision = wpr;
    c = digitsToString(xd);
    c0 = c.charAt(0);
    e = getBase10Exponent(x);

    if (Math.abs(e) < 1.5e15) {

      // Argument reduction.
      // The series converges faster the closer the argument is to 1, so using
      // ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
      // multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
      // 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
      // later be divided by this number, then separate out the power of 10 using
      // ln(a*10^b) = ln(a) + b*ln(10).

      // max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
      //while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
      // max n is 6 (gives 0.7 - 1.3)
      while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
        x = x.times(y);
        c = digitsToString(x.d);
        c0 = c.charAt(0);
        n++;
      }

      e = getBase10Exponent(x);

      if (c0 > 1) {
        x = new Ctor('0.' + c);
        e++;
      } else {
        x = new Ctor(c0 + '.' + c.slice(1));
      }
    } else {

      // The argument reduction method above may result in overflow if the argument y is a massive
      // number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
      // function using ln(x*10^e) = ln(x) + e*ln(10).
      t = getLn10(Ctor, wpr + 2, pr).times(e + '');
      x = ln(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);

      Ctor.precision = pr;
      return sd == null ? (external = true, round(x, pr)) : x;
    }

    // x is reduced to a value near 1.

    // Taylor series.
    // ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
    // where x = (y - 1)/(y + 1)    (|x| < 1)
    sum = numerator = x = divide(x.minus(ONE), x.plus(ONE), wpr);
    x2 = round(x.times(x), wpr);
    denominator = 3;

    for (;;) {
      numerator = round(numerator.times(x2), wpr);
      t = sum.plus(divide(numerator, new Ctor(denominator), wpr));

      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
        sum = sum.times(2);

        // Reverse the argument reduction.
        if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
        sum = divide(sum, new Ctor(n), wpr);

        Ctor.precision = pr;
        return sd == null ? (external = true, round(sum, pr)) : sum;
      }

      sum = t;
      denominator += 2;
    }
  }


  /*
   * Parse the value of a new Decimal `x` from string `str`.
   */
  function parseDecimal(x, str) {
    var e, i, len;

    // Decimal point?
    if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

    // Exponential form?
    if ((i = str.search(/e/i)) > 0) {

      // Determine exponent.
      if (e < 0) e = i;
      e += +str.slice(i + 1);
      str = str.substring(0, i);
    } else if (e < 0) {

      // Integer.
      e = str.length;
    }

    // Determine leading zeros.
    for (i = 0; str.charCodeAt(i) === 48;) ++i;

    // Determine trailing zeros.
    for (len = str.length; str.charCodeAt(len - 1) === 48;) --len;
    str = str.slice(i, len);

    if (str) {
      len -= i;
      e = e - i - 1;
      x.e = mathfloor(e / LOG_BASE);
      x.d = [];

      // Transform base

      // e is the base 10 exponent.
      // i is where to slice str to get the first word of the digits array.
      i = (e + 1) % LOG_BASE;
      if (e < 0) i += LOG_BASE;

      if (i < len) {
        if (i) x.d.push(+str.slice(0, i));
        for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));
        str = str.slice(i);
        i = LOG_BASE - str.length;
      } else {
        i -= len;
      }

      for (; i--;) str += '0';
      x.d.push(+str);

      if (external && (x.e > MAX_E || x.e < -MAX_E)) throw Error(exponentOutOfRange + e);
    } else {

      // Zero.
      x.s = 0;
      x.e = 0;
      x.d = [0];
    }

    return x;
  }


  /*
   * Round `x` to `sd` significant digits, using rounding mode `rm` if present (truncate otherwise).
   */
   function round(x, sd, rm) {
    var i, j, k, n, rd, doRound, w, xdi,
      xd = x.d;

    // rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
    // w: the word of xd which contains the rounding digit, a base 1e7 number.
    // xdi: the index of w within xd.
    // n: the number of digits of w.
    // i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
    // they had leading zeros)
    // j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).

    // Get the length of the first word of the digits array xd.
    for (n = 1, k = xd[0]; k >= 10; k /= 10) n++;
    i = sd - n;

    // Is the rounding digit in the first word of xd?
    if (i < 0) {
      i += LOG_BASE;
      j = sd;
      w = xd[xdi = 0];
    } else {
      xdi = Math.ceil((i + 1) / LOG_BASE);
      k = xd.length;
      if (xdi >= k) return x;
      w = k = xd[xdi];

      // Get the number of digits of w.
      for (n = 1; k >= 10; k /= 10) n++;

      // Get the index of rd within w.
      i %= LOG_BASE;

      // Get the index of rd within w, adjusted for leading zeros.
      // The number of leading zeros of w is given by LOG_BASE - n.
      j = i - LOG_BASE + n;
    }

    if (rm !== void 0) {
      k = mathpow(10, n - j - 1);

      // Get the rounding digit at index j of w.
      rd = w / k % 10 | 0;

      // Are there any non-zero digits after the rounding digit?
      doRound = sd < 0 || xd[xdi + 1] !== void 0 || w % k;

      // The expression `w % mathpow(10, n - j - 1)` returns all the digits of w to the right of the
      // digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression will give
      // 714.

      doRound = rm < 4
        ? (rd || doRound) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
        : rd > 5 || rd == 5 && (rm == 4 || doRound || rm == 6 &&

          // Check whether the digit to the left of the rounding digit is odd.
          ((i > 0 ? j > 0 ? w / mathpow(10, n - j) : 0 : xd[xdi - 1]) % 10) & 1 ||
            rm == (x.s < 0 ? 8 : 7));
    }

    if (sd < 1 || !xd[0]) {
      if (doRound) {
        k = getBase10Exponent(x);
        xd.length = 1;

        // Convert sd to decimal places.
        sd = sd - k - 1;

        // 1, 0.1, 0.01, 0.001, 0.0001 etc.
        xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
        x.e = mathfloor(-sd / LOG_BASE) || 0;
      } else {
        xd.length = 1;

        // Zero.
        xd[0] = x.e = x.s = 0;
      }

      return x;
    }

    // Remove excess digits.
    if (i == 0) {
      xd.length = xdi;
      k = 1;
      xdi--;
    } else {
      xd.length = xdi + 1;
      k = mathpow(10, LOG_BASE - i);

      // E.g. 56700 becomes 56000 if 7 is the rounding digit.
      // j > 0 means i > number of leading zeros of w.
      xd[xdi] = j > 0 ? (w / mathpow(10, n - j) % mathpow(10, j) | 0) * k : 0;
    }

    if (doRound) {
      for (;;) {

        // Is the digit to be rounded up in the first word of xd?
        if (xdi == 0) {
          if ((xd[0] += k) == BASE) {
            xd[0] = 1;
            ++x.e;
          }

          break;
        } else {
          xd[xdi] += k;
          if (xd[xdi] != BASE) break;
          xd[xdi--] = 0;
          k = 1;
        }
      }
    }

    // Remove trailing zeros.
    for (i = xd.length; xd[--i] === 0;) xd.pop();

    if (external && (x.e > MAX_E || x.e < -MAX_E)) {
      throw Error(exponentOutOfRange + getBase10Exponent(x));
    }

    return x;
  }


  function subtract(x, y) {
    var d, e, i, j, k, len, xd, xe, xLTy, yd,
      Ctor = x.constructor,
      pr = Ctor.precision;

    // Return y negated if x is zero.
    // Return x if y is zero and x is non-zero.
    if (!x.s || !y.s) {
      if (y.s) y.s = -y.s;
      else y = new Ctor(x);
      return external ? round(y, pr) : y;
    }

    xd = x.d;
    yd = y.d;

    // x and y are non-zero numbers with the same sign.

    e = y.e;
    xe = x.e;
    xd = xd.slice();
    k = xe - e;

    // If exponents differ...
    if (k) {
      xLTy = k < 0;

      if (xLTy) {
        d = xd;
        k = -k;
        len = yd.length;
      } else {
        d = yd;
        e = xe;
        len = xd.length;
      }

      // Numbers with massively different exponents would result in a very high number of zeros
      // needing to be prepended, but this can be avoided while still ensuring correct rounding by
      // limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
      i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;

      if (k > i) {
        k = i;
        d.length = 1;
      }

      // Prepend zeros to equalise exponents.
      d.reverse();
      for (i = k; i--;) d.push(0);
      d.reverse();

    // Base 1e7 exponents equal.
    } else {

      // Check digits to determine which is the bigger number.

      i = xd.length;
      len = yd.length;
      xLTy = i < len;
      if (xLTy) len = i;

      for (i = 0; i < len; i++) {
        if (xd[i] != yd[i]) {
          xLTy = xd[i] < yd[i];
          break;
        }
      }

      k = 0;
    }

    if (xLTy) {
      d = xd;
      xd = yd;
      yd = d;
      y.s = -y.s;
    }

    len = xd.length;

    // Append zeros to xd if shorter.
    // Don't add zeros to yd if shorter as subtraction only needs to start at yd length.
    for (i = yd.length - len; i > 0; --i) xd[len++] = 0;

    // Subtract yd from xd.
    for (i = yd.length; i > k;) {
      if (xd[--i] < yd[i]) {
        for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;
        --xd[j];
        xd[i] += BASE;
      }

      xd[i] -= yd[i];
    }

    // Remove trailing zeros.
    for (; xd[--len] === 0;) xd.pop();

    // Remove leading zeros and adjust exponent accordingly.
    for (; xd[0] === 0; xd.shift()) --e;

    // Zero?
    if (!xd[0]) return new Ctor(0);

    y.d = xd;
    y.e = e;

    //return external && xd.length >= pr / LOG_BASE ? round(y, pr) : y;
    return external ? round(y, pr) : y;
  }


  function toString(x, isExp, sd) {
    var k,
      e = getBase10Exponent(x),
      str = digitsToString(x.d),
      len = str.length;

    if (isExp) {
      if (sd && (k = sd - len) > 0) {
        str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
      } else if (len > 1) {
        str = str.charAt(0) + '.' + str.slice(1);
      }

      str = str + (e < 0 ? 'e' : 'e+') + e;
    } else if (e < 0) {
      str = '0.' + getZeroString(-e - 1) + str;
      if (sd && (k = sd - len) > 0) str += getZeroString(k);
    } else if (e >= len) {
      str += getZeroString(e + 1 - len);
      if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);
    } else {
      if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);
      if (sd && (k = sd - len) > 0) {
        if (e + 1 === len) str += '.';
        str += getZeroString(k);
      }
    }

    return x.s < 0 ? '-' + str : str;
  }


  // Does not strip trailing zeros.
  function truncate(arr, len) {
    if (arr.length > len) {
      arr.length = len;
      return true;
    }
  }


  // Decimal methods


  /*
   *  clone
   *  config/set
   */


  /*
   * Create and return a Decimal constructor with the same configuration properties as this Decimal
   * constructor.
   *
   */
  function clone(obj) {
    var i, p, ps;

    /*
     * The Decimal constructor and exported function.
     * Return a new Decimal instance.
     *
     * value {number|string|Decimal} A numeric value.
     *
     */
    function Decimal(value) {
      var x = this;

      // Decimal called without new.
      if (!(x instanceof Decimal)) return new Decimal(value);

      // Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
      // which points to Object.
      x.constructor = Decimal;

      // Duplicate.
      if (value instanceof Decimal) {
        x.s = value.s;
        x.e = value.e;
        x.d = (value = value.d) ? value.slice() : value;
        return;
      }

      if (typeof value === 'number') {

        // Reject Infinity/NaN.
        if (value * 0 !== 0) {
          throw Error(invalidArgument + value);
        }

        if (value > 0) {
          x.s = 1;
        } else if (value < 0) {
          value = -value;
          x.s = -1;
        } else {
          x.s = 0;
          x.e = 0;
          x.d = [0];
          return;
        }

        // Fast path for small integers.
        if (value === ~~value && value < 1e7) {
          x.e = 0;
          x.d = [value];
          return;
        }

        return parseDecimal(x, value.toString());
      } else if (typeof value !== 'string') {
        throw Error(invalidArgument + value);
      }

      // Minus sign?
      if (value.charCodeAt(0) === 45) {
        value = value.slice(1);
        x.s = -1;
      } else {
        x.s = 1;
      }

      if (isDecimal.test(value)) parseDecimal(x, value);
      else throw Error(invalidArgument + value);
    }

    Decimal.prototype = P;

    Decimal.ROUND_UP = 0;
    Decimal.ROUND_DOWN = 1;
    Decimal.ROUND_CEIL = 2;
    Decimal.ROUND_FLOOR = 3;
    Decimal.ROUND_HALF_UP = 4;
    Decimal.ROUND_HALF_DOWN = 5;
    Decimal.ROUND_HALF_EVEN = 6;
    Decimal.ROUND_HALF_CEIL = 7;
    Decimal.ROUND_HALF_FLOOR = 8;

    Decimal.clone = clone;
    Decimal.config = Decimal.set = config;

    if (obj === void 0) obj = {};
    if (obj) {
      ps = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'];
      for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
    }

    Decimal.config(obj);

    return Decimal;
  }


  /*
   * Configure global settings for a Decimal constructor.
   *
   * `obj` is an object with one or more of the following properties,
   *
   *   precision  {number}
   *   rounding   {number}
   *   toExpNeg   {number}
   *   toExpPos   {number}
   *
   * E.g. Decimal.config({ precision: 20, rounding: 4 })
   *
   */
  function config(obj) {
    if (!obj || typeof obj !== 'object') {
      throw Error(decimalError + 'Object expected');
    }
    var i, p, v,
      ps = [
        'precision', 1, MAX_DIGITS,
        'rounding', 0, 8,
        'toExpNeg', -1 / 0, 0,
        'toExpPos', 0, 1 / 0
      ];

    for (i = 0; i < ps.length; i += 3) {
      if ((v = obj[p = ps[i]]) !== void 0) {
        if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
        else throw Error(invalidArgument + p + ': ' + v);
      }
    }

    if ((v = obj[p = 'LN10']) !== void 0) {
        if (v == Math.LN10) this[p] = new this(v);
        else throw Error(invalidArgument + p + ': ' + v);
    }

    return this;
  }


  // Create and configure initial Decimal constructor.
  Decimal = clone(Decimal);

  Decimal['default'] = Decimal.Decimal = Decimal;

  // Internal constant.
  ONE = new Decimal(1);


  // Export.


  // AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Decimal;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Node and other environments that support module.exports.
  } else // removed by dead control flow
{}
})(this);


/***/ },

/***/ 55580
(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(56110),
    root = __webpack_require__(9325);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ },

/***/ 21549
(module, __unused_webpack_exports, __webpack_require__) {

var hashClear = __webpack_require__(22032),
    hashDelete = __webpack_require__(63862),
    hashGet = __webpack_require__(89102),
    hashHas = __webpack_require__(12749),
    hashSet = __webpack_require__(35749);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ },

/***/ 80079
(module, __unused_webpack_exports, __webpack_require__) {

var listCacheClear = __webpack_require__(63702),
    listCacheDelete = __webpack_require__(70080),
    listCacheGet = __webpack_require__(24739),
    listCacheHas = __webpack_require__(48655),
    listCacheSet = __webpack_require__(31175);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ },

/***/ 68223
(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(56110),
    root = __webpack_require__(9325);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ },

/***/ 53661
(module, __unused_webpack_exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(63040),
    mapCacheDelete = __webpack_require__(17670),
    mapCacheGet = __webpack_require__(90289),
    mapCacheHas = __webpack_require__(4509),
    mapCacheSet = __webpack_require__(72949);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ },

/***/ 32804
(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(56110),
    root = __webpack_require__(9325);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ },

/***/ 76545
(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(56110),
    root = __webpack_require__(9325);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ },

/***/ 38859
(module, __unused_webpack_exports, __webpack_require__) {

var MapCache = __webpack_require__(53661),
    setCacheAdd = __webpack_require__(31380),
    setCacheHas = __webpack_require__(51459);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ },

/***/ 37217
(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(80079),
    stackClear = __webpack_require__(51420),
    stackDelete = __webpack_require__(90938),
    stackGet = __webpack_require__(63605),
    stackHas = __webpack_require__(29817),
    stackSet = __webpack_require__(80945);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ },

/***/ 51873
(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(9325);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ },

/***/ 37828
(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(9325);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ },

/***/ 28303
(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(56110),
    root = __webpack_require__(9325);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ },

/***/ 91033
(module) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ },

/***/ 17277
(module) {

/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
function arrayEvery(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

module.exports = arrayEvery;


/***/ },

/***/ 79770
(module) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ },

/***/ 15325
(module, __unused_webpack_exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(96131);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ },

/***/ 29905
(module) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ },

/***/ 70695
(module, __unused_webpack_exports, __webpack_require__) {

var baseTimes = __webpack_require__(78096),
    isArguments = __webpack_require__(72428),
    isArray = __webpack_require__(56449),
    isBuffer = __webpack_require__(3656),
    isIndex = __webpack_require__(30361),
    isTypedArray = __webpack_require__(37167);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ },

/***/ 34932
(module) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ },

/***/ 14528
(module) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ },

/***/ 14248
(module) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ },

/***/ 61074
(module) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ },

/***/ 26025
(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(75288);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ },

/***/ 43360
(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(93243);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ },

/***/ 80909
(module, __unused_webpack_exports, __webpack_require__) {

var baseForOwn = __webpack_require__(30641),
    createBaseEach = __webpack_require__(38329);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ },

/***/ 23777
(module, __unused_webpack_exports, __webpack_require__) {

var baseEach = __webpack_require__(80909);

/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */
function baseEvery(collection, predicate) {
  var result = true;
  baseEach(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

module.exports = baseEvery;


/***/ },

/***/ 93599
(module, __unused_webpack_exports, __webpack_require__) {

var isSymbol = __webpack_require__(44394);

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

module.exports = baseExtremum;


/***/ },

/***/ 2523
(module) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ },

/***/ 83120
(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(14528),
    isFlattenable = __webpack_require__(45891);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ },

/***/ 86649
(module, __unused_webpack_exports, __webpack_require__) {

var createBaseFor = __webpack_require__(83221);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ },

/***/ 30641
(module, __unused_webpack_exports, __webpack_require__) {

var baseFor = __webpack_require__(86649),
    keys = __webpack_require__(95950);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ },

/***/ 47422
(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(31769),
    toKey = __webpack_require__(77797);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ },

/***/ 82199
(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(14528),
    isArray = __webpack_require__(56449);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ },

/***/ 72552
(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(51873),
    getRawTag = __webpack_require__(659),
    objectToString = __webpack_require__(59350);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ },

/***/ 3335
(module) {

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

module.exports = baseGt;


/***/ },

/***/ 28077
(module) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ },

/***/ 96131
(module, __unused_webpack_exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(2523),
    baseIsNaN = __webpack_require__(85463),
    strictIndexOf = __webpack_require__(76959);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ },

/***/ 27534
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(72552),
    isObjectLike = __webpack_require__(40346);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ },

/***/ 60270
(module, __unused_webpack_exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(87068),
    isObjectLike = __webpack_require__(40346);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ },

/***/ 87068
(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(37217),
    equalArrays = __webpack_require__(25911),
    equalByTag = __webpack_require__(21986),
    equalObjects = __webpack_require__(50689),
    getTag = __webpack_require__(5861),
    isArray = __webpack_require__(56449),
    isBuffer = __webpack_require__(3656),
    isTypedArray = __webpack_require__(37167);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ },

/***/ 41799
(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(37217),
    baseIsEqual = __webpack_require__(60270);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ },

/***/ 85463
(module) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ },

/***/ 45083
(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(1882),
    isMasked = __webpack_require__(87296),
    isObject = __webpack_require__(23805),
    toSource = __webpack_require__(47473);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ },

/***/ 4901
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(72552),
    isLength = __webpack_require__(30294),
    isObjectLike = __webpack_require__(40346);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ },

/***/ 15389
(module, __unused_webpack_exports, __webpack_require__) {

var baseMatches = __webpack_require__(93663),
    baseMatchesProperty = __webpack_require__(87978),
    identity = __webpack_require__(83488),
    isArray = __webpack_require__(56449),
    property = __webpack_require__(50583);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ },

/***/ 88984
(module, __unused_webpack_exports, __webpack_require__) {

var isPrototype = __webpack_require__(55527),
    nativeKeys = __webpack_require__(3650);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ },

/***/ 56176
(module) {

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

module.exports = baseLt;


/***/ },

/***/ 5128
(module, __unused_webpack_exports, __webpack_require__) {

var baseEach = __webpack_require__(80909),
    isArrayLike = __webpack_require__(64894);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ },

/***/ 93663
(module, __unused_webpack_exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(41799),
    getMatchData = __webpack_require__(10776),
    matchesStrictComparable = __webpack_require__(67197);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ },

/***/ 87978
(module, __unused_webpack_exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(60270),
    get = __webpack_require__(58156),
    hasIn = __webpack_require__(80631),
    isKey = __webpack_require__(28586),
    isStrictComparable = __webpack_require__(30756),
    matchesStrictComparable = __webpack_require__(67197),
    toKey = __webpack_require__(77797);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ },

/***/ 46155
(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(34932),
    baseGet = __webpack_require__(47422),
    baseIteratee = __webpack_require__(15389),
    baseMap = __webpack_require__(5128),
    baseSortBy = __webpack_require__(73937),
    baseUnary = __webpack_require__(27301),
    compareMultiple = __webpack_require__(43714),
    identity = __webpack_require__(83488),
    isArray = __webpack_require__(56449);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        };
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ },

/***/ 47237
(module) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ },

/***/ 17255
(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(47422);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ },

/***/ 86151
(module) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ },

/***/ 69302
(module, __unused_webpack_exports, __webpack_require__) {

var identity = __webpack_require__(83488),
    overRest = __webpack_require__(56757),
    setToString = __webpack_require__(32865);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ },

/***/ 19570
(module, __unused_webpack_exports, __webpack_require__) {

var constant = __webpack_require__(37334),
    defineProperty = __webpack_require__(93243),
    identity = __webpack_require__(83488);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ },

/***/ 25160
(module) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ },

/***/ 90916
(module, __unused_webpack_exports, __webpack_require__) {

var baseEach = __webpack_require__(80909);

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

module.exports = baseSome;


/***/ },

/***/ 73937
(module) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ },

/***/ 78096
(module) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ },

/***/ 77556
(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(51873),
    arrayMap = __webpack_require__(34932),
    isArray = __webpack_require__(56449),
    isSymbol = __webpack_require__(44394);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ },

/***/ 54128
(module, __unused_webpack_exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(31800);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ },

/***/ 27301
(module) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ },

/***/ 55765
(module, __unused_webpack_exports, __webpack_require__) {

var SetCache = __webpack_require__(38859),
    arrayIncludes = __webpack_require__(15325),
    arrayIncludesWith = __webpack_require__(29905),
    cacheHas = __webpack_require__(19219),
    createSet = __webpack_require__(44517),
    setToArray = __webpack_require__(84247);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ },

/***/ 19219
(module) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ },

/***/ 31769
(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(56449),
    isKey = __webpack_require__(28586),
    stringToPath = __webpack_require__(61802),
    toString = __webpack_require__(13222);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ },

/***/ 28754
(module, __unused_webpack_exports, __webpack_require__) {

var baseSlice = __webpack_require__(25160);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ },

/***/ 53730
(module, __unused_webpack_exports, __webpack_require__) {

var isSymbol = __webpack_require__(44394);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ },

/***/ 43714
(module, __unused_webpack_exports, __webpack_require__) {

var compareAscending = __webpack_require__(53730);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ },

/***/ 55481
(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(9325);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ },

/***/ 38329
(module, __unused_webpack_exports, __webpack_require__) {

var isArrayLike = __webpack_require__(64894);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ },

/***/ 83221
(module) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ },

/***/ 12507
(module, __unused_webpack_exports, __webpack_require__) {

var castSlice = __webpack_require__(28754),
    hasUnicode = __webpack_require__(49698),
    stringToArray = __webpack_require__(63912),
    toString = __webpack_require__(13222);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ },

/***/ 62006
(module, __unused_webpack_exports, __webpack_require__) {

var baseIteratee = __webpack_require__(15389),
    isArrayLike = __webpack_require__(64894),
    keys = __webpack_require__(95950);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ },

/***/ 85508
(module, __unused_webpack_exports, __webpack_require__) {

var baseRange = __webpack_require__(86151),
    isIterateeCall = __webpack_require__(36800),
    toFinite = __webpack_require__(17400);

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ },

/***/ 44517
(module, __unused_webpack_exports, __webpack_require__) {

var Set = __webpack_require__(76545),
    noop = __webpack_require__(63950),
    setToArray = __webpack_require__(84247);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ },

/***/ 93243
(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(56110);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ },

/***/ 25911
(module, __unused_webpack_exports, __webpack_require__) {

var SetCache = __webpack_require__(38859),
    arraySome = __webpack_require__(14248),
    cacheHas = __webpack_require__(19219);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ },

/***/ 21986
(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(51873),
    Uint8Array = __webpack_require__(37828),
    eq = __webpack_require__(75288),
    equalArrays = __webpack_require__(25911),
    mapToArray = __webpack_require__(20317),
    setToArray = __webpack_require__(84247);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ },

/***/ 50689
(module, __unused_webpack_exports, __webpack_require__) {

var getAllKeys = __webpack_require__(50002);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ },

/***/ 34840
(module) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof globalThis == 'object' && globalThis && globalThis.Object === Object && globalThis;

module.exports = freeGlobal;


/***/ },

/***/ 50002
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(82199),
    getSymbols = __webpack_require__(4664),
    keys = __webpack_require__(95950);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ },

/***/ 12651
(module, __unused_webpack_exports, __webpack_require__) {

var isKeyable = __webpack_require__(74218);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ },

/***/ 10776
(module, __unused_webpack_exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(30756),
    keys = __webpack_require__(95950);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ },

/***/ 56110
(module, __unused_webpack_exports, __webpack_require__) {

var baseIsNative = __webpack_require__(45083),
    getValue = __webpack_require__(10392);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ },

/***/ 28879
(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(74335);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ },

/***/ 659
(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(51873);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ },

/***/ 4664
(module, __unused_webpack_exports, __webpack_require__) {

var arrayFilter = __webpack_require__(79770),
    stubArray = __webpack_require__(63345);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ },

/***/ 5861
(module, __unused_webpack_exports, __webpack_require__) {

var DataView = __webpack_require__(55580),
    Map = __webpack_require__(68223),
    Promise = __webpack_require__(32804),
    Set = __webpack_require__(76545),
    WeakMap = __webpack_require__(28303),
    baseGetTag = __webpack_require__(72552),
    toSource = __webpack_require__(47473);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ },

/***/ 10392
(module) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ },

/***/ 49326
(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(31769),
    isArguments = __webpack_require__(72428),
    isArray = __webpack_require__(56449),
    isIndex = __webpack_require__(30361),
    isLength = __webpack_require__(30294),
    toKey = __webpack_require__(77797);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ },

/***/ 49698
(module) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ },

/***/ 22032
(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(81042);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ },

/***/ 63862
(module) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ },

/***/ 89102
(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(81042);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ },

/***/ 12749
(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(81042);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ },

/***/ 35749
(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(81042);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ },

/***/ 45891
(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(51873),
    isArguments = __webpack_require__(72428),
    isArray = __webpack_require__(56449);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ },

/***/ 30361
(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ },

/***/ 36800
(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(75288),
    isArrayLike = __webpack_require__(64894),
    isIndex = __webpack_require__(30361),
    isObject = __webpack_require__(23805);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ },

/***/ 28586
(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(56449),
    isSymbol = __webpack_require__(44394);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ },

/***/ 74218
(module) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ },

/***/ 87296
(module, __unused_webpack_exports, __webpack_require__) {

var coreJsData = __webpack_require__(55481);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ },

/***/ 55527
(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ },

/***/ 30756
(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(23805);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ },

/***/ 63702
(module) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ },

/***/ 70080
(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(26025);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ },

/***/ 24739
(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(26025);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ },

/***/ 48655
(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(26025);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ },

/***/ 31175
(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(26025);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ },

/***/ 63040
(module, __unused_webpack_exports, __webpack_require__) {

var Hash = __webpack_require__(21549),
    ListCache = __webpack_require__(80079),
    Map = __webpack_require__(68223);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ },

/***/ 17670
(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(12651);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ },

/***/ 90289
(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(12651);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ },

/***/ 4509
(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(12651);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ },

/***/ 72949
(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(12651);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ },

/***/ 20317
(module) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ },

/***/ 67197
(module) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ },

/***/ 62224
(module, __unused_webpack_exports, __webpack_require__) {

var memoize = __webpack_require__(50104);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ },

/***/ 81042
(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(56110);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ },

/***/ 3650
(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(74335);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ },

/***/ 86009
(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(34840);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ },

/***/ 59350
(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ },

/***/ 74335
(module) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ },

/***/ 56757
(module, __unused_webpack_exports, __webpack_require__) {

var apply = __webpack_require__(91033);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ },

/***/ 9325
(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(34840);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ },

/***/ 31380
(module) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ },

/***/ 51459
(module) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ },

/***/ 84247
(module) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ },

/***/ 32865
(module, __unused_webpack_exports, __webpack_require__) {

var baseSetToString = __webpack_require__(19570),
    shortOut = __webpack_require__(51811);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ },

/***/ 51811
(module) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ },

/***/ 51420
(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(80079);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ },

/***/ 90938
(module) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ },

/***/ 63605
(module) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ },

/***/ 29817
(module) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ },

/***/ 80945
(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(80079),
    Map = __webpack_require__(68223),
    MapCache = __webpack_require__(53661);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ },

/***/ 76959
(module) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ },

/***/ 63912
(module, __unused_webpack_exports, __webpack_require__) {

var asciiToArray = __webpack_require__(61074),
    hasUnicode = __webpack_require__(49698),
    unicodeToArray = __webpack_require__(42054);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ },

/***/ 61802
(module, __unused_webpack_exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(62224);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ },

/***/ 77797
(module, __unused_webpack_exports, __webpack_require__) {

var isSymbol = __webpack_require__(44394);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ },

/***/ 47473
(module) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ },

/***/ 31800
(module) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ },

/***/ 42054
(module) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ },

/***/ 37334
(module) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ },

/***/ 38221
(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(23805),
    now = __webpack_require__(10124),
    toNumber = __webpack_require__(99374);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ },

/***/ 75288
(module) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ },

/***/ 19747
(module, __unused_webpack_exports, __webpack_require__) {

var arrayEvery = __webpack_require__(17277),
    baseEvery = __webpack_require__(23777),
    baseIteratee = __webpack_require__(15389),
    isArray = __webpack_require__(56449),
    isIterateeCall = __webpack_require__(36800);

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = isArray(collection) ? arrayEvery : baseEvery;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = every;


/***/ },

/***/ 7309
(module, __unused_webpack_exports, __webpack_require__) {

var createFind = __webpack_require__(62006),
    findIndex = __webpack_require__(24713);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ },

/***/ 24713
(module, __unused_webpack_exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(2523),
    baseIteratee = __webpack_require__(15389),
    toInteger = __webpack_require__(61489);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ },

/***/ 47307
(module, __unused_webpack_exports, __webpack_require__) {

var baseFlatten = __webpack_require__(83120),
    map = __webpack_require__(55378);

/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1);
}

module.exports = flatMap;


/***/ },

/***/ 58156
(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(47422);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ },

/***/ 80631
(module, __unused_webpack_exports, __webpack_require__) {

var baseHasIn = __webpack_require__(28077),
    hasPath = __webpack_require__(49326);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ },

/***/ 83488
(module) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ },

/***/ 72428
(module, __unused_webpack_exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(27534),
    isObjectLike = __webpack_require__(40346);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ },

/***/ 56449
(module) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ },

/***/ 64894
(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(1882),
    isLength = __webpack_require__(30294);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ },

/***/ 53812
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(72552),
    isObjectLike = __webpack_require__(40346);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag);
}

module.exports = isBoolean;


/***/ },

/***/ 3656
(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(9325),
    stubFalse = __webpack_require__(89935);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ },

/***/ 2404
(module, __unused_webpack_exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(60270);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ },

/***/ 1882
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(72552),
    isObject = __webpack_require__(23805);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ },

/***/ 30294
(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ },

/***/ 11741
(module, __unused_webpack_exports, __webpack_require__) {

var isNumber = __webpack_require__(98023);

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some
  // ActiveX objects in IE.
  return isNumber(value) && value != +value;
}

module.exports = isNaN;


/***/ },

/***/ 69843
(module) {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ },

/***/ 98023
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(72552),
    isObjectLike = __webpack_require__(40346);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ },

/***/ 23805
(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ },

/***/ 40346
(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ },

/***/ 11331
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(72552),
    getPrototype = __webpack_require__(28879),
    isObjectLike = __webpack_require__(40346);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ },

/***/ 85015
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(72552),
    isArray = __webpack_require__(56449),
    isObjectLike = __webpack_require__(40346);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ },

/***/ 44394
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(72552),
    isObjectLike = __webpack_require__(40346);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ },

/***/ 37167
(module, __unused_webpack_exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(4901),
    baseUnary = __webpack_require__(27301),
    nodeUtil = __webpack_require__(86009);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ },

/***/ 95950
(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(70695),
    baseKeys = __webpack_require__(88984),
    isArrayLike = __webpack_require__(64894);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ },

/***/ 68090
(module) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ },

/***/ 55378
(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(34932),
    baseIteratee = __webpack_require__(15389),
    baseMap = __webpack_require__(5128),
    isArray = __webpack_require__(56449);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ },

/***/ 73916
(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(43360),
    baseForOwn = __webpack_require__(30641),
    baseIteratee = __webpack_require__(15389);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ },

/***/ 94506
(module, __unused_webpack_exports, __webpack_require__) {

var baseExtremum = __webpack_require__(93599),
    baseGt = __webpack_require__(3335),
    identity = __webpack_require__(83488);

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseGt)
    : undefined;
}

module.exports = max;


/***/ },

/***/ 97551
(module, __unused_webpack_exports, __webpack_require__) {

var baseExtremum = __webpack_require__(93599),
    baseGt = __webpack_require__(3335),
    baseIteratee = __webpack_require__(15389);

/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
function maxBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee, 2), baseGt)
    : undefined;
}

module.exports = maxBy;


/***/ },

/***/ 50104
(module, __unused_webpack_exports, __webpack_require__) {

var MapCache = __webpack_require__(53661);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ },

/***/ 31684
(module, __unused_webpack_exports, __webpack_require__) {

var baseExtremum = __webpack_require__(93599),
    baseLt = __webpack_require__(56176),
    identity = __webpack_require__(83488);

/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseLt)
    : undefined;
}

module.exports = min;


/***/ },

/***/ 36533
(module, __unused_webpack_exports, __webpack_require__) {

var baseExtremum = __webpack_require__(93599),
    baseIteratee = __webpack_require__(15389),
    baseLt = __webpack_require__(56176);

/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * // The `_.property` iteratee shorthand.
 * _.minBy(objects, 'n');
 * // => { 'n': 1 }
 */
function minBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee, 2), baseLt)
    : undefined;
}

module.exports = minBy;


/***/ },

/***/ 63950
(module) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ },

/***/ 10124
(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(9325);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ },

/***/ 50583
(module, __unused_webpack_exports, __webpack_require__) {

var baseProperty = __webpack_require__(47237),
    basePropertyDeep = __webpack_require__(17255),
    isKey = __webpack_require__(28586),
    toKey = __webpack_require__(77797);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ },

/***/ 23181
(module, __unused_webpack_exports, __webpack_require__) {

var createRange = __webpack_require__(85508);

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ },

/***/ 42426
(module, __unused_webpack_exports, __webpack_require__) {

var arraySome = __webpack_require__(14248),
    baseIteratee = __webpack_require__(15389),
    baseSome = __webpack_require__(90916),
    isArray = __webpack_require__(56449),
    isIterateeCall = __webpack_require__(36800);

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = some;


/***/ },

/***/ 33031
(module, __unused_webpack_exports, __webpack_require__) {

var baseFlatten = __webpack_require__(83120),
    baseOrderBy = __webpack_require__(46155),
    baseRest = __webpack_require__(69302),
    isIterateeCall = __webpack_require__(36800);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ },

/***/ 63345
(module) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ },

/***/ 89935
(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ },

/***/ 7350
(module, __unused_webpack_exports, __webpack_require__) {

var debounce = __webpack_require__(38221),
    isObject = __webpack_require__(23805);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ },

/***/ 17400
(module, __unused_webpack_exports, __webpack_require__) {

var toNumber = __webpack_require__(99374);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ },

/***/ 61489
(module, __unused_webpack_exports, __webpack_require__) {

var toFinite = __webpack_require__(17400);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ },

/***/ 99374
(module, __unused_webpack_exports, __webpack_require__) {

var baseTrim = __webpack_require__(54128),
    isObject = __webpack_require__(23805),
    isSymbol = __webpack_require__(44394);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ },

/***/ 13222
(module, __unused_webpack_exports, __webpack_require__) {

var baseToString = __webpack_require__(77556);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ },

/***/ 50014
(module, __unused_webpack_exports, __webpack_require__) {

var baseIteratee = __webpack_require__(15389),
    baseUniq = __webpack_require__(55765);

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ },

/***/ 55808
(module, __unused_webpack_exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(12507);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ },

/***/ 78867
(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}__webpack_unused_export__=h;__webpack_unused_export__=g;__webpack_unused_export__=b;__webpack_unused_export__=l;__webpack_unused_export__=d;__webpack_unused_export__=q;__webpack_unused_export__=p;__webpack_unused_export__=c;__webpack_unused_export__=f;__webpack_unused_export__=e;__webpack_unused_export__=m;
__webpack_unused_export__=n;__webpack_unused_export__=function(){return!1};__webpack_unused_export__=function(){return!1};__webpack_unused_export__=function(a){return v(a)===h};__webpack_unused_export__=function(a){return v(a)===g};__webpack_unused_export__=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};__webpack_unused_export__=function(a){return v(a)===l};exports.isFragment=function(a){return v(a)===d};__webpack_unused_export__=function(a){return v(a)===q};__webpack_unused_export__=function(a){return v(a)===p};
__webpack_unused_export__=function(a){return v(a)===c};__webpack_unused_export__=function(a){return v(a)===f};__webpack_unused_export__=function(a){return v(a)===e};__webpack_unused_export__=function(a){return v(a)===m};__webpack_unused_export__=function(a){return v(a)===n};
__webpack_unused_export__=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};__webpack_unused_export__=v;


/***/ },

/***/ 52199
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(78867);
} else // removed by dead control flow
{}


/***/ },

/***/ 11561
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ invariant)
/* harmony export */ });
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}




/***/ }

}]);