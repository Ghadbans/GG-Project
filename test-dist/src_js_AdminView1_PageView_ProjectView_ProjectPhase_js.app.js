"use strict";
exports.id = "src_js_AdminView1_PageView_ProjectView_ProjectPhase_js";
exports.ids = ["src_js_AdminView1_PageView_ProjectView_ProjectPhase_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/ProjectView/ProjectPhase.js"
/*!****************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ProjectView/ProjectPhase.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Stepper */ "./node_modules/@mui/material/Stepper/Stepper.js");
/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Step */ "./node_modules/@mui/material/Step/Step.js");
/* harmony import */ var _mui_material_StepButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/StepButton */ "./node_modules/@mui/material/StepButton/StepButton.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;









function ProjectPhase() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useParams)(),
    id = _useParams.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    steps = _useState2[0],
    setSteps = _useState2[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activeStep = _React$useState2[0],
    setActiveStep = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState({}),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    completed = _React$useState4[0],
    setCompleted = _React$useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_8__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_9__.ENDPOINT_URL, "/get-projects/").concat(id)).then(res => {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    nonLinear: true,
    activeStep: activeStep
  }, steps.map((label, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Step__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: label,
    completed: completed[index]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_StepButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "inherit",
    onClick: handleStep(index)
  }, label)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, allStepsCompleted() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      mt: 2,
      mb: 1
    }
  }, "Completed")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      mt: 2,
      mb: 1,
      py: 1
    }
  }, "Phase ", activeStep + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      pt: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "inherit",
    disabled: activeStep === 0,
    onClick: handleBack,
    sx: {
      mr: 1
    }
  }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      flex: '1 1 auto'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleNext,
    sx: {
      mr: 1
    }
  }, "Next"), activeStep !== steps.length && (completed[activeStep] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "caption",
    sx: {
      display: 'inline-block'
    }
  }, "Phase ", activeStep + 1, " already completed") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleComplete
  }, completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Phase'))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectPhase);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUHJvamVjdFZpZXdfUHJvamVjdFBoYXNlX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQStDO0FBQ1g7QUFDUTtBQUNOO0FBQ1k7QUFDUjtBQUNRO0FBQ0w7QUFDbkI7QUFDd0I7QUFJbEQsU0FBU1ksWUFBWUEsQ0FBQSxFQUFFO0VBQ3JCLElBQUFDLFVBQUEsR0FBVUosMkRBQVMsQ0FBQyxDQUFDO0lBQWpCSyxFQUFFLEdBQUFELFVBQUEsQ0FBRkMsRUFBRTtFQUNOLElBQUFDLFNBQUEsR0FBeUJkLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFlLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTlCRyxLQUFLLEdBQUFGLFVBQUE7SUFBQ0csUUFBUSxHQUFBSCxVQUFBO0VBRXJCLElBQUFJLGVBQUEsR0FBb0NwQixxREFBYyxDQUFDLENBQUMsQ0FBQztJQUFBcUIsZ0JBQUEsR0FBQUosY0FBQSxDQUFBRyxlQUFBO0lBQTlDRSxVQUFVLEdBQUFELGdCQUFBO0lBQUVFLGFBQWEsR0FBQUYsZ0JBQUE7RUFDaEMsSUFBQUcsZ0JBQUEsR0FBa0N4QixxREFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUF5QixnQkFBQSxHQUFBUixjQUFBLENBQUFPLGdCQUFBO0lBQTdDRSxTQUFTLEdBQUFELGdCQUFBO0lBQUVFLFlBQVksR0FBQUYsZ0JBQUE7RUFDOUJ2QixnREFBUyxDQUFDLE1BQUs7SUFDYlEsNkNBQUssQ0FBQ2tCLEdBQUcsSUFBQUMsTUFBQSxDQUFJbEIsb0RBQVksb0JBQUFrQixNQUFBLENBQWlCZixFQUFFLENBQUUsQ0FBQyxDQUM5Q2dCLElBQUksQ0FBQ0MsR0FBRyxJQUFJO01BQ1g7TUFDQSxJQUFNQyxVQUFVLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQSxJQUFJLENBQUNDLEtBQUs7TUFDdENmLFFBQVEsQ0FBQ2EsVUFBVSxDQUFD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cGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9Qcm9qZWN0Vmlldy9Qcm9qZWN0UGhhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RlcHBlcic7XHJcbmltcG9ydCBTdGVwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RlcCc7XHJcbmltcG9ydCBTdGVwQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RlcEJ1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdFBoYXNlKCl7XHJcbiAgbGV0e2lkfSA9IHVzZVBhcmFtcygpXHJcbiAgY29uc3QgW3N0ZXBzLHNldFN0ZXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XHJcbiAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LXByb2plY3RzLyR7aWR9YClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YSBoZXJlXHJcbiAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSByZXMuZGF0YS5kYXRhLnBoYXNlXHJcbiAgICAgIHNldFN0ZXBzKGZvcm1hdERhdGUpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgIC8vIEhhbmRsZSBlcnJvcnNcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9LFtdKVxyXG4gICAgY29uc3QgdG90YWxTdGVwcyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIHN0ZXBzLmxlbmd0aDtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBjb21wbGV0ZWRTdGVwcyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbXBsZXRlZCkubGVuZ3RoO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGlzTGFzdFN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBhY3RpdmVTdGVwID09PSB0b3RhbFN0ZXBzKCkgLSAxO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGFsbFN0ZXBzQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gY29tcGxldGVkU3RlcHMoKSA9PT0gdG90YWxTdGVwcygpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZVN0ZXAgPVxyXG4gICAgICAgIGlzTGFzdFN0ZXAoKSAmJiAhYWxsU3RlcHNDb21wbGV0ZWQoKVxyXG4gICAgICAgICAgPyAvLyBJdCdzIHRoZSBsYXN0IHN0ZXAsIGJ1dCBub3QgYWxsIHN0ZXBzIGhhdmUgYmVlbiBjb21wbGV0ZWQsXHJcbiAgICAgICAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IHN0ZXAgdGhhdCBoYXMgYmVlbiBjb21wbGV0ZWRcclxuICAgICAgICAgICAgc3RlcHMuZmluZEluZGV4KChzdGVwLCBpKSA9PiAhKGkgaW4gY29tcGxldGVkKSlcclxuICAgICAgICAgIDogYWN0aXZlU3RlcCArIDE7XHJcbiAgICAgIHNldEFjdGl2ZVN0ZXAobmV3QWN0aXZlU3RlcCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuICAgICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlU3RlcCA9IChzdGVwKSA9PiAoKSA9PiB7XHJcbiAgICAgIHNldEFjdGl2ZVN0ZXAoc3RlcCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0NvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgICAgbmV3Q29tcGxldGVkW2FjdGl2ZVN0ZXBdID0gdHJ1ZTtcclxuICAgICAgc2V0Q29tcGxldGVkKG5ld0NvbXBsZXRlZCk7XHJcbiAgICAgIGhhbmRsZU5leHQoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICA8U3RlcHBlciBub25MaW5lYXIgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH0+XHJcbiAgICAgICAgICB7c3RlcHMubWFwKChsYWJlbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFN0ZXAga2V5PXtsYWJlbH0gY29tcGxldGVkPXtjb21wbGV0ZWRbaW5kZXhdfT5cclxuICAgICAgICAgICAgICA8U3RlcEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVTdGVwKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9TdGVwQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1N0ZXA+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1N0ZXBwZXI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHthbGxTdGVwc0NvbXBsZXRlZCgpID8gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbXQ6IDIsIG1iOiAxIH19PlxyXG4gICAgICAgICAgICAgIENvbXBsZXRlZFxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtdDogMiwgbWI6IDEsIHB5OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgUGhhc2Uge2FjdGl2ZVN0ZXAgKyAxfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIHB0OiAyIH19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQmFja31cclxuICAgICAgICAgICAgICAgICAgc3g9e3sgbXI6IDEgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXg6ICcxIDEgYXV0bycgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlTmV4dH0gc3g9e3sgbXI6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgIT09IHN0ZXBzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAoY29tcGxldGVkW2FjdGl2ZVN0ZXBdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgc3g9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQaGFzZSB7YWN0aXZlU3RlcCArIDF9IGFscmVhZHkgY29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ29tcGxldGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbXBsZXRlZFN0ZXBzKCkgPT09IHRvdGFsU3RlcHMoKSAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnRmluaXNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdDb21wbGV0ZSBQaGFzZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RQaGFzZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIlN0ZXBwZXIiLCJTdGVwIiwiU3RlcEJ1dHRvbiIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJ1c2VQYXJhbXMiLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIlByb2plY3RQaGFzZSIsIl91c2VQYXJhbXMiLCJpZCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInN0ZXBzIiwic2V0U3RlcHMiLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsImNvbXBsZXRlZCIsInNldENvbXBsZXRlZCIsImdldCIsImNvbmNhdCIsInRoZW4iLCJyZXMiLCJmb3JtYXREYXRlIiwiZGF0YSIsInBoYXNlIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJ0b3RhbFN0ZXBzIiwibGVuZ3RoIiwiY29tcGxldGVkU3RlcHMiLCJPYmplY3QiLCJrZXlzIiwiaXNMYXN0U3RlcCIsImFsbFN0ZXBzQ29tcGxldGVkIiwiaGFuZGxlTmV4dCIsIm5ld0FjdGl2ZVN0ZXAiLCJmaW5kSW5kZXgiLCJzdGVwIiwiaSIsImhhbmRsZUJhY2siLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZVN0ZXAiLCJoYW5kbGVDb21wbGV0ZSIsIm5ld0NvbXBsZXRlZCIsImNyZWF0ZUVsZW1lbnQiLCJzeCIsIndpZHRoIiwibm9uTGluZWFyIiwibWFwIiwibGFiZWwiLCJpbmRleCIsImtleSIsImNvbG9yIiwib25DbGljayIsIkZyYWdtZW50IiwibXQiLCJtYiIsInB5IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwdCIsImRpc2FibGVkIiwibXIiLCJmbGV4IiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=