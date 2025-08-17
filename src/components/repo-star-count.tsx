"use client";

import { useEffect, useState } from "react";

interface RepoStarCountProps {
  owner: string;
  repo: string;
}

export const RepoStarCount = ({ owner, repo }: RepoStarCountProps) => {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count))
      .catch(() => setStars(null));
  }, [owner, repo]);

  return <span className="text-sm">{stars && stars > 0 ? stars : 0}</span>;
};
