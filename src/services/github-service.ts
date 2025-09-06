import axios from "axios";

// Service buat handle GitHub API calls
export class GitHubService {
  /**
   * Ambil star count dari GitHub repo
   * @param owner - Owner repo
   * @param repo - Nama repo
   */
  static async getRepoStars(owner: string, repo: string): Promise<number> {
    try {
      // Pake GitHub API langsung, bukan internal API
      const response = await axios.get<{ stargazers_count: number }>(
        `https://api.github.com/repos/${owner}/${repo}`
      );

      return response.data.stargazers_count || 0;
    } catch (error) {
      console.error("❌ Error fetching GitHub stars:", error);
      // Return 0 instead of throwing biar UI gak rusak
      return 0;
    }
  }

  /**
   * Ambil repo info lengkap
   * @param owner - Owner repo
   * @param repo - Nama repo
   */
  static async getRepoInfo(owner: string, repo: string): Promise<unknown> {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}`
      );

      return response.data;
    } catch (error: unknown) {
      const apiError = error as { message?: string };
      console.error("❌ Error fetching GitHub repo info:", error);
      throw new Error(apiError.message || "Gagal ngambil info repo GitHub");
    }
  }
}

export default GitHubService;
