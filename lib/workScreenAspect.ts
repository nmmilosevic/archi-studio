/**
 * Tailwind aspect-ratio classes matched to real screenshot dimensions so
 * key-screen tiles don’t crop (especially tall mobile frames).
 */
const ASPECT_BY_IMAGE: Record<string, string> = {
  "images/project01/P1-thumbnail.png": "aspect-[3/2]",
  "images/project01/p1-homepage.png": "aspect-[3/2]",
  "images/project01/p1-project-detail.png": "aspect-[1402/1122]",
  "images/project01/p1-mobile-view.png": "aspect-[3/2]",
  "images/project01/p1-mobile.png": "aspect-[853/1844]",
  "images/project01/p1-preview.png": "aspect-[3/2]",
  "images/project02/p2-thumbnail-hero.png": "aspect-[3/2]",
  "images/project02/P2-project_details.png": "aspect-[1024/1536]",
  "images/project02/P2-mobile.png": "aspect-[3/2]",
  "images/heromock.png": "aspect-[2/3]",
  "images/after.png": "aspect-[1121/1379]",
  "images/before.png": "aspect-[1122/1402]",
  "images/avant.png": "aspect-[1448/1086]",
  "images/apres.png": "aspect-[1448/1086]",
  "images/redesign-preview.png": "aspect-[3/2]",
  "images/imagesection.png": "aspect-[1394/1035]",
};

/**
 * Second key-screen (project / archive / detail page): same treatment as project 01 —
 * fill the frame edge-to-edge and anchor to the top (no letterboxing).
 */
const PROJECT_PAGE_THUMB_KEYS = new Set<string>([
  "images/project01/p1-project-detail.png",
  "images/project02/P2-project_details.png",
  "images/redesign-preview.png",
]);

function parseAspectFraction(aspectClass: string): { width: number; height: number } {
  const m = aspectClass.match(/\[(\d+)\/(\d+)\]/);
  if (m) return { width: Number(m[1]), height: Number(m[2]) };
  return { width: 3, height: 2 };
}

export function workScreenAspectClass(imagePath: string): string {
  const key = imagePath.replace(/^\/+/, "");
  return ASPECT_BY_IMAGE[key] ?? "aspect-[3/2]";
}

/** Case study hero strip: match real asset ratio so `object-cover` fills the frame on all sides. */
export function caseStudyHeroAspectClass(heroSrc: string): string {
  const key = heroSrc.replace(/^\/+/, "");
  return ASPECT_BY_IMAGE[key] ?? "aspect-[3/2]";
}

/**
 * Grid thumbnail frame: tall “mobile experience” shots use half the height of the real
 * aspect ratio at full column width, with object-cover on the image.
 */
export function workScreenThumbnailAspectClass(imagePath: string): string {
  const key = imagePath.replace(/^\/+/, "");
  if (key === "images/project01/p1-mobile.png") {
    return "aspect-[853/922]";
  }
  if (key === "images/heromock.png") {
    return "aspect-[4/3]";
  }
  return workScreenAspectClass(imagePath);
}

/** object-fit for key-screen thumbnails (mobile tiles are cropped to the shorter frame). */
export function workScreenThumbObjectClass(imagePath: string): string {
  const key = imagePath.replace(/^\/+/, "");
  if (key === "images/project01/p1-mobile.png" || key === "images/heromock.png") {
    return "object-cover object-top";
  }
  if (PROJECT_PAGE_THUMB_KEYS.has(key)) {
    return "object-cover object-top";
  }
  return "object-contain object-center";
}

/**
 * Wide, dual-device mobile mockups: single frame, not stacked “two phone” treatment.
 */
export function workScreenIsWideMobileComposition(imagePath: string): boolean {
  const key = imagePath.replace(/^\/+/, "");
  return key === "images/project01/p1-mobile-view.png" || key === "images/project02/P2-mobile.png";
}

/**
 * Width / height for next/image in the lightbox (any proportional pair with the right ratio).
 */
export function workScreenLightboxSize(imagePath: string): { width: number; height: number } {
  const key = imagePath.replace(/^\/+/, "");
  const aspectClass = ASPECT_BY_IMAGE[key] ?? "aspect-[3/2]";
  return parseAspectFraction(aspectClass);
}

/** Full-width frame; all key-screen tiles align to the grid column. */
export function workScreenFrameLayoutClass(_imagePath: string): string {
  return "w-full min-w-0";
}
