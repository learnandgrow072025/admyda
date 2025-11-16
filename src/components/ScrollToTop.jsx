import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ smooth = false }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Don’t force-scroll if navigating to an in-page anchor like /about#team
    if (hash) return;

    // Disable browser’s automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  }, [pathname, hash, smooth]);

  return null;
}