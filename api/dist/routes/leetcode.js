import express from "express";
import NodeCache from "node-cache";
import { fetchLeetCodeStats } from "../utils/fetchLeetCode.js";
const router = express.Router();
const cache = new NodeCache({ stdTTL: 3600 }); // cache for 1 hour
router.get("/:username", async (req, res) => {
    const { username } = req.params;
    const cached = cache.get(username);
    if (cached)
        return res.json(cached);
    try {
        const data = await fetchLeetCodeStats(username);
        cache.set(username, data);
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
export default router;
