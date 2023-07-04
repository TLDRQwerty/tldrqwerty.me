import { useState, useEffect } from "react";
import type { CurrentlyPlaying } from "services/spotify/types";

export default function CurrentPlaying() {
  const [data, setData] = useState<CurrentlyPlaying | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/spotify/now-playing");
      const r = await fetch("/api/spotify/top");

      setLoading(false);

      if (response.ok) {
        const d = await response.json();
        setData(d);
      }
    };
    fetchData();
  }, []);

  if (loading || data?.item == null) {
    return null;
  }

  return <span>I'm currently listening to {data?.item?.name}</span>;
}
