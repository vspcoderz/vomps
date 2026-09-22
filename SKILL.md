---
name: vomps
description: Vspcoder'z Components (vomps) — copy-paste React UI components with a dark-first CSS-variable theme system, built on shadcn/ui + Tailwind CSS v4 + Radix. Use when the user mentions vomps, Vspcoder'z, shadcn components, building or restyling a React UI, installing UI components, switching or creating vomps themes, or asks for dark-mode themed Button, Card, Dialog, Form, Tabs, Tooltip, Skeleton or similar primitives.
---

# vomps — Vspcoder'z Components

Copy-paste React components (shadcn/ui architecture) that get all their
colors from CSS-variable theme tokens. 1 theme ships today (`vomp-dark`);
the system is built for 5–10 themes.

## Repo layout

- `src/components/ui/*.tsx` — the components. Copy them, don't import them.
- `src/lib/utils.ts` — the `cn()` helper. Required by every component.
- `src/themes/<id>.css` — one file per theme, pure token values.
- `src/themes/tokens.css` — token → Tailwind mapping (shared by all themes).
- `src/themes/manifest.ts` — theme registry (`applyTheme`, theme list).
- `src/registry/index.json` — machine-readable component catalog
  (shadcn registry format: name, description, dependencies, files).
- `src/demo/` — Vite showcase app rendering every component.
- `docs/theming.md` — full theme authoring guide.

## Installing components into a project

vomps is **copy-paste, not a package**. To use components in a target app:

1. Copy `src/lib/utils.ts` → same path in the target.
2. Copy the needed files from `src/components/ui/` → same path.
3. Copy `src/themes/vomp-dark.css` and `src/themes/tokens.css`,
   import them (theme file FIRST) in the app CSS entry:
   ```css
   @import "./themes/vomp-dark.css";
   @import "./themes/tokens.css";
   ```
4. Set the theme on `<html>`: `<html data-theme="vomp-dark">`
   (or call `applyTheme("vomp-dark")` from the manifest).
5. Install runtime deps for the components you copied:
   ```
   npm i clsx tailwind-merge class-variance-authority lucide-react tw-animate-css
   npm i @radix-ui/react-slot @radix-ui/react-label @radix-ui/react-select \
         @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-dialog \
         @radix-ui/react-tooltip
   ```
   Only install the Radix packages for the components actually used
   (see `src/registry/index.json` → each item's `dependencies`).

## Component catalog

| Component | File | Variants / notes |
|---|---|---|
| Button | `ui/button.tsx` | default, secondary, outline, ghost, destructive, link; sm, default, lg, icon; `asChild` |
| Badge | `ui/badge.tsx` | default, secondary, outline, destructive |
| Card | `ui/card.tsx` | Card + Header, Title, Description, Content, Footer |
| Input | `ui/input.tsx` | email/text/password, `disabled`, placeholder |
| Label | `ui/label.tsx` | `htmlFor` binding |
| Textarea | `ui/textarea.tsx` | multi-line |
| Select | `ui/select.tsx` | Trigger, Content, Item, Label, Group, Separator; portal |
| Switch | `ui/switch.tsx` | `checked` / `defaultChecked` |
| Tabs | `ui/tabs.tsx` | List, Trigger, Content |
| Dialog | `ui/dialog.tsx` | Trigger, Content, Header, Title, Description, Footer; portal |
| Tooltip | `ui/tooltip.tsx` | needs a `TooltipProvider` ancestor |
| Skeleton | `ui/skeleton.tsx` | loading placeholder |

## Rules (must follow)

1. **Never hardcode colors in components or app code.** Use only theme
   tokens: `bg-background`, `text-foreground`, `bg-card`,
   `text-card-foreground`, `bg-popover`, `bg-primary`,
   `text-primary-foreground`, `bg-secondary`, `bg-muted`,
   `text-muted-foreground`, `bg-accent`, `text-accent-foreground`,
   `bg-destructive`, `border-border`, `border-input`, `ring-ring`.
2. **Never add `dark:` variants.** Themes carry dark/light themselves
   via `[data-theme]` — a `dark:` class would fight the theme system.
3. **Keep the shadcn API.** Same props, variants and sub-component names,
   so shadcn knowledge and docs transfer 1:1.
4. **Colors live only in `src/themes/<id>.css`.** To change the look,
   edit tokens — never components.
5. **CSS import order matters:** theme file(s) before `tokens.css`,
   because `tokens.css` maps variables at runtime.

## Theming

- Active theme = `<html data-theme="<id>">`. Switch at runtime with
  `applyTheme(id)` from `src/themes/manifest.ts`.
- **Adding a theme** (full guide in `docs/theming.md`):
  1. Copy `src/themes/vomp-dark.css` → `src/themes/<new-id>.css`.
  2. Change the selector to `:root[data-theme="<new-id>"]` and set values.
  3. Import the new file in the app CSS entry (after `vomp-dark.css`,
     before `tokens.css`).
  4. Add `{ id, name, description }` to `src/themes/manifest.ts`.
  5. Verify in the demo — every component must re-skin with zero
     component edits. If a component needs a fix, it has hardcoded
     colors: fix the component, not the theme.

## Gotchas

- Tooltip does nothing without `<TooltipProvider>` in the tree.
- Dialog/Select render in a portal — they work anywhere, but inherit
  theme tokens from `:root`, so keep theme CSS global.
- `animate-in` / `fade-in-0` / `zoom-in-95` classes need `tw-animate-css`
  (Tailwind v4) — already wired in `tokens.css`.
- Verify with: `npm run build`, then `npm run dev` and eyeball `/`.
