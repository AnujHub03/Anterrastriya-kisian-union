import mongoose from "mongoose";

const generateReferenceId = () => {
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `PAY-${Date.now().toString(36).toUpperCase()}-${rand}`;
};

const paymentSchema = new mongoose.Schema(
  {
    referenceId: { type: String, required: true, unique: true },
    purpose: { type: String, enum: ["membership", "idcard"], required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    amount: { type: Number, default: 50 },
    // Linked application, only set for purpose === 'membership'.
    member: { type: mongoose.Schema.Types.ObjectId, ref: "Member", default: null },
    // Set the moment the payment record is created — clicking "Pay ₹50"
    // IS the "I've paid" action now, there's no separate confirm step.
    paidAt: { type: Date, default: null },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  },
  { timestamps: true }
);

// IMPORTANT: pre('validate') hooks in Mongoose do NOT receive a `next`
// callback — they must be synchronous (or return a Promise). Calling
// next() here was the cause of "TypeError: next is not a function".
paymentSchema.pre("validate", function () {
  if (!this.referenceId) this.referenceId = generateReferenceId();
});

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;