/**
 * vomps theme manifest.
 *
 * Every theme shipped with vomps is registered here. The demo theme
 * switcher and the AI skill read this file — adding a new theme means
 * (1) creating `themes/<id>.css` and (2) adding an entry below.
 * Nothing else changes. See docs/theming.md.
 */
export interface VompsTheme {
  /** Applied as `<html data-theme="{id}">` and used in `:root[data-theme="{id}"]`. */
  id: string;
  /** Human-readable name. */
  name: string;
  /** One-line vibe description. */
  description: string;
  /** True for the default dark base theme. */
  default?: boolean;
}

export const themes: VompsTheme[] = [
  {
    id: "vomp-dark",
    name: "Vomp Dark",
    description: "Blue-black base, electric violet accent. The original vomps identity.",
    default: true,
  },
  {
    id: "minebricks",
    name: "MineBricks",
    description:
      "LabyMod-inspired client look: deep navy surfaces, brand blue #3f61ea, chunky block controls.",
  },
  {
    id: "cording",
    name: "Cording",
    description:
      "Discord-inspired dark UI: blurple #5865F2, guild rail #1e1f22, chat #313338, rounded panels.",
  },
];

export const defaultThemeId: string =
  themes.find((t) => t.default)?.id ?? themes[0].id;

export function applyTheme(id: string): void {
  document.documentElement.setAttribute("data-theme", id);
}
