import { useLocation } from "react-router-dom";

/**
 * Extracts the first path segment as "collection".
 *
 * Example:
 *   "/" => null
 *   "/projects" => "projects"
 *   "/projects/slug/portfolio" => "projects"
 */
export function usePathFInder() {
  const { pathname } = useLocation();

  // Declare variables before use
  const raw = typeof pathname === "string" ? pathname : "";
  const trimmed = raw.replace(/^\/+|\/+$/g, ""); // remove leading/trailing slashes
  const segments = trimmed ? trimmed.split("/") : [];
  const collection = segments.length >= 1 ? segments[0] : null;

  return { pathname: raw, segments, collection };
}
