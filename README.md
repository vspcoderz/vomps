# vomps

Vooooooooooomp Vomp, React Components Specially for Agents that suck UI

Dark-first, token-driven React components on the shadcn/ui architecture —
built for humans **and** AI agents. Copy-paste the components, flip themes
with one attribute. 1 theme today, 5–10 planned.

> **AI agents: read [`SKILL.md`](./SKILL.md)** for install steps, component
> catalog and the rules (no hardcoded colors, ever).

## Quick start

```bash
git clone https://github.com/vspcoderz/vomps
cd vomps
npm install
npm run dev        # demo showcase at http://localhost:5173
```

To use vomps in your own app, copy what you need (full steps in `SKILL.md`):

1. `src/lib/utils.ts` → your project (the `cn()` helper).
2. Files from `src/components/ui/` → your project.
3. `src/themes/vomp-dark.css` + `src/themes/tokens.css` → your CSS entry
   (theme file first), and set `<html data-theme="vomp-dark">`.
4. `npm i` the deps listed in `src/registry/index.json` for those components.

## Components (12)

Button · Badge · Card · Input · Label · Textarea · Select · Switch · Tabs ·
Dialog · Tooltip · Skeleton

Same API as shadcn/ui, so all shadcn knowledge transfers 1:1.

## Themes

| # | Theme | Status |
|---|---|---|
| 1 | `vomp-dark` — blue-black base, electric violet accent | ✅ shipped |
| 2–10 | TBD — each is one CSS file + one manifest entry | planned |

Theming guide: [`docs/theming.md`](./docs/theming.md).

## Stack

Vite + React 19 + TypeScript · Tailwind CSS v4 · Radix UI · CVA ·
`clsx` + `tailwind-merge` · lucide-react

## Credits

Component architecture and base implementations derived from
[shadcn/ui](https://ui.shadcn.com) (MIT). Theme tokens, docs and the vomps
skill layer are original.

## License

MIT
