import express from "express";
import NodeCache from "node-cache";
import { fetchCodeforcesStats } from "../utils/fetchCodeforces.js";
const router = express.Router();
const cache = new NodeCache({ stdTTL: 3600 });
router.get("/:handle", async (req, res) => {
    const { handle } = req.params;
    const cached = cache.get(handle);
    if (cached)
        return res.json(cached);
    try {
        const data = await fetchCodeforcesStats(handle);
        cache.set(handle, data);
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
export default router;
