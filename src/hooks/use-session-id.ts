import { useEffect, useState } from "react";

const KEY = "fi_session_id";

function generate() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function useSessionId(): string | null {
  const [id, setId] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    let s = window.localStorage.getItem(KEY);
    if (!s) {
      s = generate();
      window.localStorage.setItem(KEY, s);
    }
    setId(s);
  }, []);
  return id;
}
