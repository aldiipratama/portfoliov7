"use client";

import { useEffect, useState } from "react";
import { NumberTicker } from "./magicui/number-ticker";
import { GitHubService } from "@/services";

interface RepoStarCountProps {
  owner: string;
  repo: string;
}

export const RepoStarCount = ({ owner, repo }: RepoStarCountProps) => {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    // Pake service layer yang udah ada, lebih clean kan?
    const fetchStars = async () => {
      try {
        const starCount = await GitHubService.getRepoStars(owner, repo);
        setStars(starCount);
      } catch (error) {
        console.error("Gagal ambil star count:", error);
        setStars(0); // Fallback ke 0 biar gak error
      }
    };

    fetchStars();
  }, [owner, repo]);

  return (
    <NumberTicker
      value={stars || 0}
      className="whitespace-pre-wrap text-sm font-medium tracking-tighter text-background"
    />
  );
};
