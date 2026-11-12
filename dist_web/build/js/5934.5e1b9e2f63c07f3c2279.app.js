"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[5934],{

/***/ 45234
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
  d: "M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z"
}), 'Print');

/***/ },

/***/ 85934
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47767);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99380);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73357);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97834);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92659);
/* harmony import */ var _mui_icons_material_Print__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45234);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28597);
/* harmony import */ var _mui_icons_material_RequestQuote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82574);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71510);
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72761);
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_images_png__WEBPACK_IMPORTED_MODULE_14__);
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;










function InspectionReportPrintView() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .useParams */ .g)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .useNavigate */ .Zp)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    report = _useState2[0],
    setReport = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchReport = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_13__/* .ENDPOINT_URL */ .m, "/inspection-reports/").concat(id));
          if (res.data && res.data.success) {
            setReport(res.data.data);
          }
        } catch (err) {
          console.error('Error fetching inspection report for print:', err);
        } finally {
          setLoading(false);
        }
      });
      return function fetchReport() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchReport();
  }, [id]);
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      sx: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      size: 40,
      sx: {
        color: '#30368a'
      }
    }));
  }
  if (!report) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      sx: {
        p: 4,
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      variant: "h6",
      color: "error"
    }, "Inspection Report not found."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      onClick: () => navigate('/InspectionReportView'),
      sx: {
        mt: 2
      }
    }, "Back to Reports"));
  }
  var handlePrint = () => {
    window.print();
  };
  var handleConvertToQuote = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* () {
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_13__/* .ENDPOINT_URL */ .m, "/inspection-reports/").concat(report._id, "/convert-quote"));
      } catch (_) {}
      navigate('/EstimateInvoiceForm', {
        state: {
          fromInspectionReport: true,
          reportCode: report.reportCode,
          customerId: report.customerId,
          customerName: report.customerName,
          estimateSubject: report.subject || "Technical Remediation - ".concat(report.reportCode || '')
        }
      });
    });
    return function handleConvertToQuote() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      backgroundColor: '#f1f5f9',
      minHeight: '100vh',
      py: {
        xs: 1,
        md: 3
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    className: "no-print",
    sx: {
      maxWidth: '850px',
      margin: '0 auto 16px auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      px: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null),
    onClick: () => navigate('/InspectionReportView'),
    sx: {
      textTransform: 'none',
      color: '#475569'
    }
  }, "Back to Reports"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      gap: 1.5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "outlined",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null),
    onClick: () => navigate("/InspectionReportForm/".concat(report._id)),
    sx: {
      textTransform: 'none',
      color: '#30368a',
      borderColor: '#30368a'
    }
  }, "Edit Report"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "outlined",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_RequestQuote__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, null),
    onClick: handleConvertToQuote,
    sx: {
      textTransform: 'none',
      color: '#16a34a',
      borderColor: '#16a34a'
    }
  }, "Convert to Quotation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "contained",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Print__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null),
    onClick: handlePrint,
    sx: {
      backgroundColor: '#30368a',
      '&:hover': {
        backgroundColor: '#1e2468'
      },
      textTransform: 'none',
      px: 3
    }
  }, "Print / Save as PDF"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    id: "inspection-report-document",
    sx: {
      width: '100%',
      maxWidth: '850px !important',
      backgroundColor: '#ffffff',
      color: '#0f172a',
      p: {
        xs: 3,
        md: 5
      },
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      borderRadius: 2,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      mb: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_images_png__WEBPACK_IMPORTED_MODULE_14___default()),
    alt: "Global Gate Logo",
    style: {
      maxHeight: '70px',
      maxWidth: '200px',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      textAlign: 'right',
      fontSize: '9.5px',
      color: '#475569',
      lineHeight: 1.4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '9.5px',
      color: '#475569'
    }
  }, "Avenue Salongo, Q/Industriel, C/Manika, Kolwezi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '9.5px',
      color: '#475569'
    }
  }, "Tel: +243 827 722 222 \u2022 contact@globalgate.sarl"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '9.5px',
      fontWeight: 600,
      color: '#093170'
    }
  }, "www.GlobalGate.sarl"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      height: '2px',
      backgroundColor: '#093170',
      mb: 2.5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      backgroundColor: '#f0f7ff',
      borderLeft: '4px solid #0284c7',
      p: 2,
      mb: 3,
      borderRadius: '0 4px 4px 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontWeight: 800,
      fontSize: '15px',
      color: '#093170',
      mb: 1.5,
      letterSpacing: '0.2px'
    }
  }, report.reportTitle || 'Technical Inspection & Corrective Action Report'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: '1fr 1fr'
      },
      rowGap: 0.8,
      columnGap: 3,
      fontSize: '11px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      width: '90px',
      fontSize: '11px',
      color: '#093170'
    }
  }, "Subject:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '11px',
      color: '#1e293b'
    }
  }, report.subject)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      width: '90px',
      fontSize: '11px',
      color: '#093170'
    }
  }, "Date:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '11px',
      color: '#1e293b'
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_12___default()(report.date).format('MMMM D, YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      width: '90px',
      fontSize: '11px',
      color: '#093170'
    }
  }, "Location:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '11px',
      color: '#1e293b'
    }
  }, report.location)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      width: '90px',
      fontSize: '11px',
      color: '#093170'
    }
  }, "Prepared By:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '11px',
      color: '#1e293b'
    }
  }, report.preparedBy)), report.customerName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      width: '90px',
      fontSize: '11px',
      color: '#093170'
    }
  }, "Client:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '11px',
      color: '#1e293b',
      fontWeight: 600
    }
  }, report.customerName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontWeight: 700,
      width: '90px',
      fontSize: '11px',
      color: '#093170'
    }
  }, "Report #:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '11px',
      color: '#1e293b',
      fontWeight: 700
    }
  }, report.reportCode)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontWeight: 800,
      fontSize: '13px',
      color: '#093170',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      mb: 0.8
    }
  }, "1. Current Situation & Root Cause Findings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      height: '1px',
      backgroundColor: '#cbd5e1',
      mb: 1.5
    }
  }), report.findingsIntro && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '11.5px',
      lineHeight: 1.6,
      color: '#334155',
      mb: 1.5
    }
  }, report.findingsIntro), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    component: "ul",
    sx: {
      m: 0,
      pl: 2.5,
      mb: 2
    }
  }, Array.isArray(report.findings) && report.findings.map((f, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    component: "li",
    key: idx,
    sx: {
      fontSize: '11.5px',
      lineHeight: 1.6,
      color: '#334155',
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontWeight: 700,
      color: '#0f172a'
    }
  }, f.title, ": "), f.description))), Array.isArray(report.photosSection1) && report.photosSection1.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: report.photosSection1.length > 1 ? '1fr 1fr' : '1fr'
      },
      gap: 2,
      mt: 2,
      mb: 1
    }
  }, report.photosSection1.map((photo, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    key: idx,
    sx: {
      border: '1px solid #e2e8f0',
      borderRadius: '4px',
      overflow: 'hidden',
      backgroundColor: '#f8fafc'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      height: 210,
      overflow: 'hidden',
      backgroundColor: '#0f172a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: photo.url,
    alt: photo.caption || "Figure ".concat(idx + 1),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      p: 1.2,
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e2e8f0',
      minHeight: '44px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '10px',
      color: '#475569',
      lineHeight: 1.4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontWeight: 700,
      color: '#093170'
    }
  }, photo.figure || "Figure ".concat(idx + 1), ": "), photo.caption)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontWeight: 800,
      fontSize: '13px',
      color: '#093170',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      mb: 0.8
    }
  }, "2. Recommended Corrective Solution"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      height: '1px',
      backgroundColor: '#cbd5e1',
      mb: 1.5
    }
  }), report.solutionIntro && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '11.5px',
      lineHeight: 1.6,
      color: '#334155',
      mb: 2
    }
  }, report.solutionIntro), Array.isArray(report.actionItems) && report.actionItems.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: '11px',
      marginBottom: '16px',
      border: '1px solid #cbd5e1'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    style: {
      backgroundColor: '#093170',
      color: '#ffffff'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      padding: '8px 12px',
      textAlign: 'left',
      fontWeight: 700,
      width: '220px',
      borderRight: '1px solid #1e3a8a'
    }
  }, "Action Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      padding: '8px 12px',
      textAlign: 'left',
      fontWeight: 700
    }
  }, "Technical Scope & Execution Details"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, report.actionItems.map((item, idx) => {
    var isEven = idx % 2 === 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: idx,
      style: {
        backgroundColor: isEven ? '#ffffff' : '#f8fafc',
        borderBottom: '1px solid #e2e8f0'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        padding: '10px 12px',
        fontWeight: 700,
        color: '#0f172a',
        verticalAlign: 'top',
        borderRight: '1px solid #e2e8f0'
      }
    }, item.actionItem), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        padding: '10px 12px',
        color: '#334155',
        lineHeight: 1.5,
        verticalAlign: 'top'
      }
    }, item.scope));
  }))), Array.isArray(report.photosSection2) && report.photosSection2.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: report.photosSection2.length > 1 ? '1fr 1fr' : '1fr'
      },
      gap: 2,
      mt: 2,
      mb: 1
    }
  }, report.photosSection2.map((photo, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    key: idx,
    sx: {
      border: '1px solid #e2e8f0',
      borderRadius: '4px',
      overflow: 'hidden',
      backgroundColor: '#f8fafc'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      height: 210,
      overflow: 'hidden',
      backgroundColor: '#0f172a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: photo.url,
    alt: photo.caption || "Figure ".concat(idx + 3),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      p: 1.2,
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e2e8f0',
      minHeight: '44px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '10px',
      color: '#475569',
      lineHeight: 1.4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontWeight: 700,
      color: '#093170'
    }
  }, photo.figure || "Figure ".concat(idx + 3), ": "), photo.caption)))))), report.nextSteps && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      backgroundColor: '#f0f7ff',
      borderLeft: '4px solid #0284c7',
      p: 2,
      mb: 3.5,
      borderRadius: '0 4px 4px 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '11px',
      color: '#1e293b',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontWeight: 700,
      color: '#093170'
    }
  }, "Next Steps: "), report.nextSteps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 4,
      pt: 2,
      mb: 4,
      pageBreakInside: 'avoid'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      borderTop: '1px solid #94a3b8',
      pt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '10.5px',
      fontWeight: 700,
      color: '#0f172a'
    }
  }, "Prepared By: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "Global Gate SARL \u2014 Technical Department")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '9px',
      color: '#64748b',
      mt: 0.5
    }
  }, "Engineering Specialist Signature & Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      borderTop: '1px solid #94a3b8',
      pt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '10.5px',
      fontWeight: 700,
      color: '#0f172a'
    }
  }, "Client Acknowledgment / Approval: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "Name, Signature & Stamp")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '9px',
      color: '#64748b',
      mt: 0.5
    }
  }, "Authorized Client Representative"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    sx: {
      borderTop: '1px solid #e2e8f0',
      pt: 1.5,
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '9px',
      color: '#94a3b8'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '9px',
      color: '#94a3b8'
    }
  }, "Global Gate SARL \u2014 Technical Inspection Report (", report.subject, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    sx: {
      fontSize: '9px',
      color: '#94a3b8'
    }
  }, "Official Engineering Document \u2022 ", report.reportCode))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", null, "\n        @media print {\n          body {\n            background-color: #ffffff !important;\n            color: #000000 !important;\n            margin: 0 !important;\n            padding: 0 !important;\n          }\n          .no-print {\n            display: none !important;\n          }\n          #inspection-report-document {\n            box-shadow: none !important;\n            border-radius: 0 !important;\n            padding: 10mm 12mm !important;\n            max-width: 100% !important;\n            width: 100% !important;\n          }\n          @page {\n            size: A4 portrait;\n            margin: 8mm;\n          }\n        }\n      "));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InspectionReportPrintView);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);