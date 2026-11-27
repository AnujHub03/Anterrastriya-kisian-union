
import Leader from "../models/Leader.js";
import cloudinary from "../config/cloudinary.js";

// GET ALL LEADERS
export const getLeaders = async (req, res) => {
  try {
    const leaders = await Leader.find().sort({ createdAt: -1 });

    res.json(leaders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE LEADER
export const getLeaderById = async (req, res) => {
  try {
    const leader = await Leader.findById(req.params.id);

    if (!leader) {
      return res.status(404).json({ message: "Leader not found" });
    }

    res.json(leader);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE LEADER
export const createLeader = async (req, res) => {
  try {
    const {
      name,
      tier,
      region,
      designation,
      email,
      phone,
      joinedDate,
    } = req.body;

    if (!name || !tier || !designation) {
      if (req.file) {
        await cloudinary.uploader.destroy(req.file.filename);
      }

      return res.status(400).json({
        message: "Name, tier and designation are required",
      });
    }

    let responsibilities = req.body.responsibilities || [];

    if (typeof responsibilities === "string") {
      try {
        responsibilities = JSON.parse(responsibilities);
      } catch {
        responsibilities = [responsibilities];
      }
    }

    const leader = await Leader.create({
      name,
      tier,
      region,
      designation,
      email,
      phone,
      joinedDate,
      responsibilities,
      avatar: req.file?.path || "",
      publicId: req.file?.filename || "",
    });

    res.status(201).json(leader);

  } catch (error) {
    if (req.file) {
      await cloudinary.uploader.destroy(req.file.filename).catch(() => {});
    }

    res.status(500).json({ message: error.message });
  }
};

// UPDATE LEADER
export const updateLeader = async (req, res) => {
  try {
    const leader = await Leader.findById(req.params.id);

    if (!leader) {
      if (req.file) {
        await cloudinary.uploader.destroy(req.file.filename);
      }

      return res.status(404).json({ message: "Leader not found" });
    }

    const fields = [
      "name",
      "tier",
      "region",
      "designation",
      "email",
      "phone",
      "joinedDate",
    ];

    fields.forEach((field) => {
      if (req.body[field] !== undefined) {
        leader[field] = req.body[field];
      }
    });

    if (req.body.responsibilities !== undefined) {
      let responsibilities = req.body.responsibilities;

      if (typeof responsibilities === "string") {
        try {
          responsibilities = JSON.parse(responsibilities);
        } catch {
          responsibilities = [responsibilities];
        }
      }

      leader.responsibilities = responsibilities;
    }

    const oldPublicId = leader.publicId;

    if (req.file) {
      leader.avatar = req.file.path;
      leader.publicId = req.file.filename;
    }

    await leader.save();

    if (req.file && oldPublicId) {
      await cloudinary.uploader.destroy(oldPublicId);
    }

    res.json({
      message: "Leader updated successfully",
      leader,
    });

  } catch (error) {
    if (req.file) {
      await cloudinary.uploader.destroy(req.file.filename).catch(() => {});
    }

    res.status(500).json({ message: error.message });
  }
};

// DELETE LEADER
export const deleteLeader = async (req, res) => {
  try {
    const leader = await Leader.findById(req.params.id);

    if (!leader) {
      return res.status(404).json({ message: "Leader not found" });
    }

    if (leader.publicId) {
      await cloudinary.uploader.destroy(leader.publicId);
    }

    await leader.deleteOne();

    res.json({ message: "Leader deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
