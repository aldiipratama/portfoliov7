import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [isMatch, setIsMatch] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setIsMatch(window.matchMedia(query).matches);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [query, isClient]);

  return { isMatch: isClient ? isMatch : false };
};

export const useMediaQueryWithSSR = (query: string) => {
  const { isMatch } = useMediaQuery(query);
  return { isMatch };
};
