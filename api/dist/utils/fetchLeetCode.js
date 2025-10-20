import axios from "axios";
const LEETCODE_URL = "https://leetcode.com/graphql";
export async function fetchLeetCodeStats(username) {
    try {
        const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          username
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
    userContestRanking(username: $username) {
        rating
        }
      }
    `;
        const response = await axios.post(LEETCODE_URL, {
            query,
            variables: { username },
        });
        const user = response.data.data.matchedUser;
        if (!user)
            throw new Error("User not found");
        // Convert the difficulty-count array into an object
        const solved = user.submitStatsGlobal.acSubmissionNum.reduce((acc, item) => {
            acc[item.difficulty.toLowerCase()] = item.count;
            return acc;
        }, {});
        return {
            username: user.username,
            rating: Math.round(response.data.data.userContestRanking.rating),
            solved: {
                all: solved.all || 0,
                easy: solved.easy || 0,
                medium: solved.medium || 0,
                hard: solved.hard || 0,
            },
        };
    }
    catch (err) {
        console.error("❌ Error fetching LeetCode:", err);
        throw new Error("Failed to fetch LeetCode stats");
    }
}
export async function fetchLeetCodeRating(username) {
    try {
        const query = `
      query getUserContestRanking ($username: String!) {
    userContestRanking(username: $username) {
        rating
        }
      }
    `;
        const response = await axios.post(LEETCODE_URL, {
            query,
            variables: { username },
        });
        const user = response.data.data.userContestRanking;
        if (!user)
            throw new Error("User not found");
        return {
            username: user.username,
            rating: user.rating,
        };
    }
    catch (err) {
        console.error("❌ Error fetching LeetCode:", err);
        throw new Error("Failed to fetch LeetCode rating stats");
    }
}
