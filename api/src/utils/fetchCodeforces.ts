import axios from "axios";

export async function fetchCodeforcesStats(handle: string) {
  try {
    const response = await axios.get(
      `https://codeforces.com/api/user.info?handles=${handle}`
    );
    const result = response.data.result[0];

    return {
      handle: result.handle,
      rating: result.rating || "Unrated",
      maxRating: result.maxRating || "Unrated",
      rank: result.rank || "N/A",
      maxRank: result.maxRank || "N/A",
    };
  } catch (err) {
    console.error("❌ Error fetching Codeforces:", err);
    throw new Error("Failed to fetch Codeforces stats");
  }
}
