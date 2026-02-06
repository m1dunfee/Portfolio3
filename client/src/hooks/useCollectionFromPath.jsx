// src/hooks/useCollectionFromPath.js
import { useLocation } from "react-router-dom";

export function useCollectionFromPath() {
  const location = useLocation();

  // Declare variables before use
  const pathname = typeof location?.pathname === "string" ? location.pathname : "";
  const trimmed = pathname.replace(/^\/+|\/+$/g, "");
  const segments = trimmed ? trimmed.split("/") : [];
  const collection = segments.length >= 1 ? segments[0] : null;

  return { pathname, segments, collection };
}
