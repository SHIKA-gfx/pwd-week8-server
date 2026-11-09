import asyncHandler from "../utils/asyncHandler";

export const profile = asyncHandler(async (req, res) => {
  res.json({ success: true, data: { user: req.auth } });
});
