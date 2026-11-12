const express = require('express');
const router = express.Router();
const InspectionReport = require('../model/inspectionReportSchema');
const axios = require('axios');

/**
 * 1. GET /endpoint/inspection-reports
 * List reports with optional search, status filtering, and branch isolation.
 */
router.get('/', async (req, res) => {
  try {
    const { branchId, search, status, page = 1, limit = 50 } = req.query;
    const query = {};

    if (branchId && branchId !== 'All' && branchId !== 'HQ') {
      query.branchId = branchId;
    }

    if (status && status !== 'All') {
      query.status = status;
    }

    if (search && search.trim()) {
      const term = search.trim();
      query.$or = [
        { reportCode: { $regex: term, $options: 'i' } },
        { subject: { $regex: term, $options: 'i' } },
        { customerName: { $regex: term, $options: 'i' } },
        { location: { $regex: term, $options: 'i' } },
        { preparedBy: { $regex: term, $options: 'i' } }
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);
    const total = await InspectionReport.countDocuments(query);
    const reports = await InspectionReport.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit))
      .lean();

    return res.json({
      success: true,
      data: reports,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit))
    });
  } catch (err) {
    console.error('[InspectionReport] Error listing reports:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * 2. GET /endpoint/inspection-reports/:id
 * Retrieve a single report by ID.
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const report = await InspectionReport.findById(id).lean();
    if (!report) {
      return res.status(404).json({ success: false, error: 'Inspection report not found' });
    }
    return res.json({ success: true, data: report });
  } catch (err) {
    console.error('[InspectionReport] Error fetching report:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * 3. POST /endpoint/inspection-reports
 * Create a new report with auto-generated sequential number (e.g. IR-0001).
 */
router.post('/', async (req, res) => {
  try {
    const {
      reportTitle,
      subject,
      date,
      location,
      preparedBy,
      customerId,
      customerName,
      customerAddress,
      customerPhone,
      branchId,
      findingsIntro,
      findings,
      photosSection1,
      solutionIntro,
      actionItems,
      photosSection2,
      nextSteps,
      status,
      createdBy
    } = req.body;

    if (!subject || !subject.trim()) {
      return res.status(400).json({ success: false, error: 'Report subject is required' });
    }
    if (!location || !location.trim()) {
      return res.status(400).json({ success: false, error: 'Inspection location is required' });
    }

    // Auto-increment report number
    const lastReport = await InspectionReport.findOne().sort({ reportNumber: -1 }).select('reportNumber').lean();
    const nextNumber = lastReport && typeof lastReport.reportNumber === 'number' ? lastReport.reportNumber + 1 : 1;
    const reportCode = `IR-${String(nextNumber).padStart(4, '0')}`;

    const newReport = await InspectionReport.create({
      reportNumber: nextNumber,
      reportCode,
      reportTitle: reportTitle || 'Technical Inspection & Corrective Action Report',
      subject: subject.trim(),
      date: date ? new Date(date) : new Date(),
      location: location.trim(),
      preparedBy: preparedBy || 'Global Gate Technical Team',
      customerId: customerId || null,
      customerName: customerName || '',
      customerAddress: customerAddress || '',
      customerPhone: customerPhone || '',
      branchId: branchId || 'HQ',
      findingsIntro: findingsIntro || '',
      findings: Array.isArray(findings) ? findings : [],
      photosSection1: Array.isArray(photosSection1) ? photosSection1 : [],
      solutionIntro: solutionIntro || '',
      actionItems: Array.isArray(actionItems) ? actionItems : [],
      photosSection2: Array.isArray(photosSection2) ? photosSection2 : [],
      nextSteps: nextSteps || 'Upon review and approval of this technical recommendation, Global Gate SARL will submit a detailed quotation covering the required materials, custom fabrications, and installation labor.',
      status: status || 'DRAFT',
      createdBy: createdBy || 'GG'
    });

    return res.status(201).json({ success: true, data: newReport });
  } catch (err) {
    console.error('[InspectionReport] Error creating report:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * 4. PUT /endpoint/inspection-reports/:id
 * Update an existing inspection report.
 */
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body };
    delete updates.reportNumber; // Prevent changing reportNumber
    delete updates.reportCode;   // Prevent changing reportCode

    if (updates.date) {
      updates.date = new Date(updates.date);
    }

    const updated = await InspectionReport.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    ).lean();

    if (!updated) {
      return res.status(404).json({ success: false, error: 'Inspection report not found' });
    }

    return res.json({ success: true, data: updated });
  } catch (err) {
    console.error('[InspectionReport] Error updating report:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * 5. DELETE /endpoint/inspection-reports/:id
 * Delete an inspection report.
 */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await InspectionReport.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Inspection report not found' });
    }
    return res.json({ success: true, message: 'Inspection report deleted successfully', id });
  } catch (err) {
    console.error('[InspectionReport] Error deleting report:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * 6. POST /endpoint/inspection-reports/:id/convert-quote
 * Mark report as CONVERTED TO QUOTE and optionally link quotation number and ID.
 */
router.post('/:id/convert-quote', async (req, res) => {
  try {
    const { id } = req.params;
    const { quotationId, quotationNumber } = req.body || {};
    const update = { status: 'CONVERTED TO QUOTE', updatedAt: new Date() };
    if (quotationId) update.linkedQuotationId = quotationId;
    if (quotationNumber) update.linkedQuotationNumber = String(quotationNumber).trim();

    const report = await InspectionReport.findByIdAndUpdate(
      id,
      { $set: update },
      { new: true }
    ).lean();

    if (!report) {
      return res.status(404).json({ success: false, error: 'Inspection report not found' });
    }

    return res.json({ success: true, data: report });
  } catch (err) {
    console.error('[InspectionReport] Error converting report to quote:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * 7. PATCH /endpoint/inspection-reports/:id/status
 * Update report status (DRAFT, COMPLETED, SENT TO CLIENT, CONVERTED TO QUOTE) and optional quotation link.
 */
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status, quotationNumber, quotationId } = req.body || {};

    if (!status) {
      return res.status(400).json({ success: false, error: 'Status is required' });
    }

    const update = { status, updatedAt: new Date() };
    if (quotationNumber !== undefined) update.linkedQuotationNumber = String(quotationNumber).trim();
    if (quotationId !== undefined) update.linkedQuotationId = quotationId;

    const report = await InspectionReport.findByIdAndUpdate(
      id,
      { $set: update },
      { new: true }
    ).lean();

    if (!report) {
      return res.status(404).json({ success: false, error: 'Inspection report not found' });
    }

    return res.json({ success: true, data: report });
  } catch (err) {
    console.error('[InspectionReport] Error updating report status:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * 8. POST /endpoint/inspection-reports/ai-draft
 * Smart AI Technical Report Drafter.
 * Transforms rough field notes into executive engineering findings and action plans.
 */
router.post('/ai-draft', async (req, res) => {
  try {
    const { notes = '', subject = '', customerName = '', location = '' } = req.body;

    if (!notes || !notes.trim()) {
      return res.status(400).json({ success: false, error: 'Please provide inspection field notes to generate a draft.' });
    }

    const prompt = `You are a Senior Technical Engineering Inspector at Global Gate S.A.R.L (DR Congo).
Transform these rough inspection notes into a polished, formal corporate Technical Inspection Report.
Customer: ${customerName || 'Valued Client'}
Subject: ${subject || 'Site Technical Inspection'}
Location: ${location || 'Site Location'}

Field Notes:
"${notes.trim()}"

Return ONLY a valid JSON object with the following exact keys:
{
  "subject": "Clear, professional engineering title",
  "findingsIntro": "A 1-2 sentence executive introduction summarizing the survey and general health of equipment.",
  "findings": [
    {
      "title": "Short bold finding title",
      "description": "Technical root cause explanation and risk analysis."
    }
  ],
  "solutionIntro": "A 1-2 sentence introduction describing the recommended engineering resolution.",
  "actionItems": [
    {
      "actionItem": "Numbered concise action title",
      "scope": "Comprehensive technical scope of work and execution details."
    }
  ],
  "nextSteps": "Clear next steps regarding client review, engineering approval, and subsequent quotation submission."
}`;

    // Attempt Gemini API if key is present
    if (process.env.GEMINI_API_KEY) {
      try {
        const apiKey = process.env.GEMINI_API_KEY;
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        const aiRes = await axios.post(geminiUrl, {
          contents: [{ parts: [{ text: prompt }] }]
        }, { timeout: 15000 });

        const rawText = aiRes.data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const jsonMatch = rawText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          return res.json({ success: true, source: 'gemini', draft: parsed });
        }
      } catch (aiErr) {
        console.warn('[InspectionReport AI] Gemini call warning, falling back to rule-based drafter:', aiErr.message);
      }
    }

    // Resilient Rule-Based Fallback Drafter
    const sentences = notes.split(/[.\n]+/).map(s => s.trim()).filter(Boolean);
    const fallbackFindings = sentences.slice(0, 3).map((s, idx) => ({
      title: `Finding #${idx + 1}: Technical Observation`,
      description: s.charAt(0).toUpperCase() + s.slice(1) + '.'
    }));

    const fallbackActions = sentences.slice(3).map((s, idx) => ({
      actionItem: `${idx + 1}. Corrective Scope Item`,
      scope: s.charAt(0).toUpperCase() + s.slice(1) + '.'
    }));

    if (fallbackActions.length === 0) {
      fallbackActions.push({
        actionItem: '1. Recommended Rectification & Service',
        scope: 'Carry out comprehensive technical overhaul, replace defected components, and verify operational safety parameters.'
      });
    }

    return res.json({
      success: true,
      source: 'local-engine',
      draft: {
        subject: subject || 'Technical Inspection & Corrective Action Report',
        findingsIntro: `During our comprehensive on-site technical inspection, we identified key mechanical, electrical, and thermal factors affecting system performance and reliability.`,
        findings: fallbackFindings.length > 0 ? fallbackFindings : [
          {
            title: 'Equipment Operating Below Nominal Efficiency',
            description: notes.trim()
          }
        ],
        solutionIntro: `To permanently resolve these deficiencies, ensure equipment longevity, and restore optimal efficiency, we recommend the following scope of work:`,
        actionItems: fallbackActions,
        nextSteps: `Upon client review and approval of this technical recommendation, Global Gate SARL will submit a comprehensive commercial quotation covering all materials, support structures, and certified technical labor.`
      }
    });
  } catch (err) {
    console.error('[InspectionReport AI] Error generating draft:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
