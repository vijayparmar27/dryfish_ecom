/**
 * Utility function to get the correct asset path for both development and production
 * Handles base path configuration automatically
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // In Next.js, process.env.NEXT_PUBLIC_BASE_PATH is available
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/dryfish_ecom";

  return `${basePath}/${cleanPath}`;
}

/**
 * Alternative: Direct path resolver that works with Next.js static export
 * This ensures paths work correctly regardless of deployment configuration
 */
export function resolvePublicPath(path: string): string {
  // For Next.js static exports, paths starting with / are resolved correctly
  // This function can be extended if you need custom logic
  return path.startsWith("/") ? path : `/${path}`;
}
