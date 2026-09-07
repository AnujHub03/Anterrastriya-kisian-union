import Member from "../models/Member.js";

// GET /api/members
// GET /api/members?phone=9876543210
// Public. Used by the Directory tab, the admin Membership dashboard, and
// the ID card page (which checks ?phone= to see if someone is already
// an approved member before asking them to pay).
export const getMembers = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.phone) filter.phone = req.query.phone;
    const members = await Member.find(filter).sort({ createdAt: -1 });
    res.json(members);
  } catch (err) {
    next(err);
  }
};

// POST /api/members
// Public. Anyone can submit a membership application. Always created
// as "pending" — a person cannot approve themself.
export const createMember = async (req, res, next) => {
  try {
    const { name, phone, land, state, city } = req.body;
    if (!name || !phone || !state) {
      return res.status(400).json({ message: "Name, phone, and state are required" });
    }
    const member = await Member.create({ name, phone, land, state, city, status: "pending" });
    res.status(201).json(member);
  } catch (err) {
    next(err);
  }
};

// PUT /api/members/:id/approve
// Admin only. Marks a pending application as approved.
export const approveMember = async (req, res, next) => {
  try {
    const member = await Member.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );
    if (!member) return res.status(404).json({ message: "Member not found" });
    res.json(member);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/members/:id
// Admin only. Rejects (removes) an application — mirrors the original
// frontend behavior where "reject" simply dropped the entry.
export const rejectMember = async (req, res, next) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).json({ message: "Member not found" });
    res.json({ message: "Rejected" });
  } catch (err) {
    next(err);
  }
};