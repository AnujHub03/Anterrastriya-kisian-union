import Payment from "../models/Payment.js";
import Member from "../models/Member.js";

// POST /api/payments
// Public. Called when the user clicks "Pay ₹50" in the form below the QR
// code — that click IS the payment record being created. A unique
// referenceId is auto-generated (via the schema hook) and paidAt is set
// immediately, since there's no separate confirm step anymore.
export const createPayment = async (req, res, next) => {
  try {
    const { name, phone, purpose, memberId, amount } = req.body;
    if (!name || !phone || !purpose) {
      return res.status(400).json({ message: "name, phone, and purpose are required" });
    }
    if (!["membership", "idcard"].includes(purpose)) {
      return res.status(400).json({ message: "purpose must be 'membership' or 'idcard'" });
    }
    const payment = await Payment.create({
      name,
      phone,
      purpose,
      member: memberId || null,
      amount: amount || 50,
      paidAt: new Date(),
    });
    res.status(201).json(payment);
  } catch (err) {
    next(err);
  }
};

// GET /api/payments
// Admin only. Full list for the Payments dashboard, most recent first.
export const getPayments = async (req, res, next) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });
    res.json(payments);
  } catch (err) {
    next(err);
  }
};

// PUT /api/payments/:id/approve
// Admin only. The admin has checked their own UPI/bank statement and
// confirmed the amount + reference match. If this was a membership
// payment tied to an application, approving it also approves that
// Member — the verified fee is what finalizes membership.
export const approvePayment = async (req, res, next) => {
  try {
    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );
    if (!payment) return res.status(404).json({ message: "Payment not found" });

    if (payment.purpose === "membership" && payment.member) {
      await Member.findByIdAndUpdate(payment.member, { status: "approved" });
    }

    res.json(payment);
  } catch (err) {
    next(err);
  }
};

// PUT /api/payments/:id/reject
// Admin only. No matching transaction found — mark it rejected.
export const rejectPayment = async (req, res, next) => {
  try {
    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true }
    );
    if (!payment) return res.status(404).json({ message: "Payment not found" });
    res.json(payment);
  } catch (err) {
    next(err);
  }
};