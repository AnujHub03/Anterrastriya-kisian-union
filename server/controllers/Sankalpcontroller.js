import Sankalp from "../models/Sankalp.js";

// GET /api/sankalp
// Public. Returns just the resolutions array, creating a blank doc
// the first time it's requested so the frontend always gets a response.
export const getResolutions = async (req, res, next) => {
  try {
    let doc = await Sankalp.findOne();
    if (!doc) {
      doc = await Sankalp.create({ resolutions: [] });
    }
    res.json(doc.resolutions);
  } catch (err) {
    next(err);
  }
};

// PUT /api/sankalp
// Admin only. Replaces the resolutions array with whatever the
// admin dashboard sends.
export const updateResolutions = async (req, res, next) => {
  try {
    const { resolutions } = req.body;

    if (!Array.isArray(resolutions)) {
      return res.status(400).json({ message: "resolutions must be an array" });
    }

    const doc = await Sankalp.findOneAndUpdate(
      {},
      { resolutions },
      { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }
    );

    res.json(doc.resolutions);
  } catch (err) {
    next(err);
  }
};