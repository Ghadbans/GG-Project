const express = require("express");
const Route = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 } // 15MB maximum per file
});

const attachmentSchema = require("../model/attachmentSchema");

// 1. Upload Attachment(s)
Route.post("/upload-attachment", upload.any(), async (req, res, next) => {
  try {
    const files = req.files || (req.file ? [req.file] : []);
    if (!files || files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const { documentId, documentType, documentNumber, uploadedBy, branchId } = req.body;
    if (!documentId) {
      return res.status(400).json({ error: "documentId is required" });
    }

    const createdDocs = [];
    for (const f of files) {
      const doc = await attachmentSchema.create({
        documentId: String(documentId).trim(),
        documentType: documentType || 'Invoice',
        documentNumber: documentNumber ? String(documentNumber).trim() : '',
        fileName: f.originalname,
        fileSize: f.size,
        contentType: f.mimetype || 'application/octet-stream',
        data: f.buffer,
        uploadedBy: uploadedBy || '',
        branchId: branchId || 'HQ',
        createdAt: new Date()
      });

      createdDocs.push({
        _id: doc._id,
        documentId: doc.documentId,
        documentType: doc.documentType,
        documentNumber: doc.documentNumber,
        fileName: doc.fileName,
        fileSize: doc.fileSize,
        contentType: doc.contentType,
        uploadedBy: doc.uploadedBy,
        branchId: doc.branchId,
        createdAt: doc.createdAt
      });
    }

    res.status(200).json({
      message: "Attachment(s) uploaded successfully",
      data: createdDocs,
      count: createdDocs.length
    });
  } catch (error) {
    console.error("Error in /upload-attachment:", error);
    next(error);
  }
});

// 2. Get Attachments Metadata by Document ID (Lightweight, excludes binary data)
Route.get("/attachments/:documentId", async (req, res, next) => {
  try {
    const documentId = req.params.documentId;
    const attachments = await attachmentSchema
      .find({ documentId: String(documentId).trim() })
      .select("-data")
      .sort({ createdAt: -1 })
      .lean();

    res.status(200).json({
      data: attachments,
      count: attachments.length,
      status: 200
    });
  } catch (error) {
    console.error("Error in /attachments/:documentId:", error);
    next(error);
  }
});

// 3. Stream File for Inline Preview or Direct Download
Route.get("/attachment-file/:id", async (req, res, next) => {
  try {
    const attachment = await attachmentSchema.findById(req.params.id);
    if (!attachment || !attachment.data) {
      return res.status(404).send("Attachment not found");
    }

    const isDownload = req.query.download === "true";
    const disposition = isDownload ? "attachment" : "inline";

    res.set("Content-Type", attachment.contentType || "application/octet-stream");
    res.set("Content-Length", attachment.fileSize || attachment.data.length);
    res.set(
      "Content-Disposition",
      `${disposition}; filename="${encodeURIComponent(attachment.fileName)}"`
    );

    res.send(attachment.data);
  } catch (error) {
    console.error("Error in /attachment-file/:id:", error);
    next(error);
  }
});

// 4. Get Attachment Base64 & Info for Frontend Preview
Route.get("/attachment-data/:id", async (req, res, next) => {
  try {
    const attachment = await attachmentSchema.findById(req.params.id);
    if (!attachment || !attachment.data) {
      return res.status(404).json({ error: "Attachment not found" });
    }

    res.status(200).json({
      data: {
        _id: attachment._id,
        documentId: attachment.documentId,
        documentType: attachment.documentType,
        documentNumber: attachment.documentNumber,
        fileName: attachment.fileName,
        fileSize: attachment.fileSize,
        contentType: attachment.contentType,
        uploadedBy: attachment.uploadedBy,
        createdAt: attachment.createdAt,
        base64: attachment.data.toString("base64")
      },
      status: 200
    });
  } catch (error) {
    console.error("Error in /attachment-data/:id:", error);
    next(error);
  }
});

// 5. Delete Attachment
Route.delete("/delete-attachment/:id", async (req, res, next) => {
  try {
    const result = await attachmentSchema.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Attachment not found" });
    }
    res.status(200).json({
      message: "Attachment deleted successfully",
      status: 200
    });
  } catch (error) {
    console.error("Error in /delete-attachment/:id:", error);
    next(error);
  }
});

module.exports = Route;
