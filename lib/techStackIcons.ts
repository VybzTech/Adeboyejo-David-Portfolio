// Mapping of tech stack names to icon file paths
// Handles various naming conventions and aliases

const TECH_ICONS: Record<string, string> = {
  // JavaScript/Frontend
  javascript: "/images/Tools/JS.png",
  js: "/images/Tools/JS.png",
  typescript: "/images/Tools/JS.png",
  ts: "/images/Tools/JS.png",
  react: "/images/Tools/ReactJS.png",
  "react.js": "/images/Tools/ReactJS.png",
  reactjs: "/images/Tools/ReactJS.png",
  "next.js": "/images/Tools/Next-JS.svg",
  nextjs: "/images/Tools/Next-JS.svg",
  next: "/images/Tools/Next-JS.svg",
  vue: "/images/Tools/ReactJS.png", // Fallback to React icon
  angular: "/images/Tools/ReactJS.png",

  // Styling
  css: "/images/Tools/CSS3.png",
  css3: "/images/Tools/CSS3.png",
  scss: "/images/Tools/SCSS.png",
  sass: "/images/Tools/SCSS.png",
  tailwind: "/images/Tools/TailwindCSS.png",
  "tailwind css": "/images/Tools/TailwindCSS.png",
  tailwindcss: "/images/Tools/TailwindCSS.png",
  bootstrap: "/images/Tools/Bootstrap.png",
  "material ui": "/images/Tools/Material-ui.png",
  "material-ui": "/images/Tools/Material-ui.png",
  mui: "/images/Tools/Material-ui.png",

  // Markup
  html: "/images/Tools/HTML5.png",
  html5: "/images/Tools/HTML5.png",

  // Backend/Runtime
  node: "/images/Tools/Node.png",
  "node.js": "/images/Tools/Node.png",
  nodejs: "/images/Tools/Node.png",
  php: "/images/Tools/Php.png",
  "c#": "/images/Tools/c-sharp.png",
  csharp: "/images/Tools/c-sharp.png",
  ".net": "/images/Tools/DOTNET-1.svg",
  dotnet: "/images/Tools/DOTNET-1.svg",

  // Mobile
  flutter: "/images/Tools/Flutter.svg",
  dart: "/images/Tools/Dart-Logo.png",
  "android studio": "/images/Tools/Android-studio.png",

  // Backend Services
  firebase: "/images/Tools/Firebase.png",
  "firebase/firestore": "/images/Tools/Firebase.png",

  // Charting/Libraries
  "chart.js": "/images/Tools/Chartjs.svg",
  chartjs: "/images/Tools/Chartjs.svg",
  swiper: "/images/Tools/Swiper.svg",
  jquery: "/images/Tools/Jquery.png",

  // Design/Tools
  figma: "/images/Tools/Figma.png",
  "adobe xd": "/images/Tools/Adobe-XD.png",
  xd: "/images/Tools/Adobe-XD.png",

  // Version Control/Deployment
  github: "/images/Tools/Github.png",
  git: "/images/Tools/Github.png",
  netlify: "/images/Tools/Netlify-Logo.png",

  // IDEs/Editors
  "vs code": "/images/Tools/VS-Code.png",
  vscode: "/images/Tools/VS-Code.png",
  "visual studio": "/images/Tools/Visual_Studio.png",
};

/**
 * Get icon path for a technology
 * Handles case-insensitive matching and common aliases
 */
export function getTechIcon(techName: string): string | null {
  if (!techName) return null;

  const normalized = techName.toLowerCase().trim();
  return TECH_ICONS[normalized] || null;
}

/**
 * Check if an icon exists for a technology
 */
export function hasTechIcon(techName: string): boolean {
  return getTechIcon(techName) !== null;
}

/**
 * Get icon path with fallback
 * Returns icon path if available, otherwise returns the original tech name
 * (useful for displaying fallback text when icon doesn't exist)
 */
export function getTechIconOrLabel(techName: string): { icon: string | null; label: string } {
  return {
    icon: getTechIcon(techName),
    label: techName,
  };
}

/**
 * Filter tech stack to only those with icons
 */
export function filterTechWithIcons(stack: string[]): string[] {
  return stack.filter(hasTechIcon);
}

/**
 * Get icon size classes for different contexts
 */
export const TECH_ICON_SIZES = {
  small: "w-4 h-4",
  medium: "w-6 h-6",
  large: "w-8 h-8",
  xlarge: "w-12 h-12",
};
