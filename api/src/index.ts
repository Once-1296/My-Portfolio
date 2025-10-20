import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import leetcodeRouter from "./routes/leetcode.js";
import codeforcesRouter from "./routes/codeforces.js";
import emailRouter from "./routes/email.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/leetcode", leetcodeRouter);
app.use("/api/codeforces", codeforcesRouter);
app.use("/api/email", emailRouter);

export default app
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
