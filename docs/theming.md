# vomps theming

vomps components contain **zero color values**. Every color comes from CSS
variables (tokens) owned by theme files. A theme is a look; components are
structure. Adding themes 2–10 never touches `src/components/`.

## How it works

```
src/themes/vomp-dark.css   ← actual colors, scoped to [data-theme="vomp-dark"]
src/themes/tokens.css      ← maps tokens to Tailwind (--color-*: var(--*))
src/themes/manifest.ts     ← theme registry + applyTheme()
<html data-theme="...">    ← selects the active theme
```

`tokens.css` uses Tailwind v4 `@theme inline`, so utilities like
`bg-primary` resolve `var(--primary)` **at runtime**. Flipping `data-theme`
re-skins the whole app instantly — no rebuild, no `dark:` classes.

## Token reference (`vomp-dark`)

| Token | Value | Used for |
|---|---|---|
| `--background` | `#0a0a0f` | page background |
| `--foreground` | `#ededf2` | page text |
| `--card` / `--card-foreground` | `#13131a` / `#ededf2` | cards, panels |
| `--popover` / `--popover-foreground` | `#16161f` / `#ededf2` | dialogs, menus, tooltips bg |
| `--primary` / `--primary-foreground` | `#8b5cf6` / `#ffffff` | brand accent, primary buttons |
| `--secondary` / `--secondary-foreground` | `#1c1c26` / `#ededf2` | secondary buttons |
| `--muted` / `--muted-foreground` | `#17171f` / `#9a9aa8` | subtle bg, placeholders, helper text |
| `--accent` / `--accent-foreground` | `#232038` / `#f4f2ff` | hovers, highlights |
| `--destructive` / `--destructive-foreground` | `#ef4444` / `#ffffff` | danger actions |
| `--border` | `#26262f` | default border color |
| `--input` | `#21212a` | input borders, unchecked switch track |
| `--ring` | `#8b5cf6` | focus rings |
| `--radius` | `0.625rem` | base corner radius (`sm/md/lg/xl` derived) |

Every token has a same-named Tailwind color (`bg-card`, `text-muted-foreground`,
`border-border`, `ring-ring`, …). Use exactly these in components.

## Adding a new theme

1. Copy `src/themes/vomp-dark.css` → `src/themes/<new-id>.css`.
2. Rename the selector to `:root[data-theme="<new-id>">`, set `color-scheme`
   (`dark` or `light`) and replace the values. Keep every token name.
3. Import it in the app CSS entry **after** `vomp-dark.css`, **before**
   `tokens.css`:
   ```css
   @import "./themes/vomp-dark.css";
   @import "./themes/<new-id>.css";
   @import "./themes/tokens.css";
   ```
4. Register it in `src/themes/manifest.ts`:
   ```ts
   { id: "<new-id>", name: "Readable Name", description: "One-line vibe." }
   ```
5. Run the demo, flip themes in the switcher. Everything must re-skin with
   zero component edits.

## Rules for component authors

- Only token utilities (`bg-…`, `text-…`, `border-…`, `ring-…`) — no hex,
  `rgb()`, `hsl()`, arbitrary `bg-[#…]` values, and no `dark:` variants.
- Semi-transparent overlays like `bg-black/70` are allowed (neutral scrim,
  not a theme color).
- If a new theme exposes a broken component, the component has a hardcoded
  color — fix the component, never fork it per theme.
- Structural differences between themes (extra variants, shapes) go in the
  component behind variants, still colored by tokens.
