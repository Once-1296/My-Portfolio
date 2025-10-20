import express from "express";
import axios from "axios";
const router = express.Router();
router.post("/", async (req, res) => {
    const { name, email, message } = req.body;
    console.log("Request Body:", req.body);
    if (!name || !email || !message)
        return res.status(400).json({ error: "All fields are required" });
    try {
        const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            template_params: {
                user_name: name,
                user_email: email,
                user_message: message,
            },
        });
        res.status(200).json({ success: true, data: response.data });
    }
    catch (err) {
        console.error("❌ EmailJS Error:", err.response?.data || err.message);
        res.status(500).json({ error: "Failed to send email" });
    }
});
router.get("/", (req, res) => {
    res.send("Email route is active ✅");
});
export default router;
