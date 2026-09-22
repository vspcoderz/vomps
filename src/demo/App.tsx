import { useEffect, useState } from "react";
import {
  Copy,
  Check,
  Sparkles,
  Layers,
  Palette,
  Type as TypeIcon,
  ExternalLink,
  Moon,
  Box,
  Terminal,
  Zap,
  Hash,
} from "lucide-react";

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import {
  MineBadge,
  MineButton,
  MineCard,
  MineCardContent,
  MineCardDescription,
  MineCardFooter,
  MineCardHeader,
  MineCardTitle,
  MineDialog,
  MineDialogContent,
  MineDialogDescription,
  MineDialogHeader,
  MineDialogTitle,
  MineDialogTrigger,
  MineInput,
  MineLabel,
  MineProgress,
  MineSelect,
  MineSelectContent,
  MineSelectItem,
  MineSelectTrigger,
  MineSelectValue,
  MineSkeleton,
  MineSlot,
  MineSlotGrid,
  MineSwitch,
  MineTabs,
  MineTabsList,
  MineTabsTrigger,
  MineTextarea,
  MineTooltip,
  MineTooltipContent,
  MineTooltipProvider,
  MineTooltipTrigger,
  MineWell,
  MineXpShelf,
} from "@/components/minebricks";
import {
  CordBadge,
  CordButton,
  CordCard,
  CordCardContent,
  CordCardFooter,
  CordCardHeader,
  CordCardTitle,
  CordChannel,
  CordChannelList,
  CordDialog,
  CordDialogContent,
  CordDialogDescription,
  CordDialogHeader,
  CordDialogTitle,
  CordDialogTrigger,
  CordGuild,
  CordGuildRail,
  CordInput,
  CordLabel,
  CordMessage,
  CordSelect,
  CordSelectContent,
  CordSelectItem,
  CordSelectTrigger,
  CordSelectValue,
  CordSidebarShell,
  CordSkeleton,
  CordStatusDot,
  CordSwitch,
  CordTabs,
  CordTabsList,
  CordTabsTrigger,
  CordTextarea,
  CordTooltip,
  CordTooltipContent,
  CordTooltipProvider,
  CordTooltipTrigger,
} from "@/components/cording";
import { applyTheme, defaultThemeId, themes } from "@/themes/manifest";

function ThemeSwitcher() {
  const [current, setCurrent] = useState(defaultThemeId);
  useEffect(() => applyTheme(current), [current]);
  return (
    <div className="flex items-center gap-2 rounded-full border bg-card px-2 py-1 shadow-sm">
      <span className="hidden sm:inline-flex items-center gap-1.5 pl-2 text-xs font-medium text-muted-foreground">
        <Moon className="h-3.5 w-3.5" /> theme
      </span>
      <Select value={current} onValueChange={setCurrent}>
        <SelectTrigger className="h-7 w-[148px] rounded-full border-0 bg-muted px-3 text-xs font-medium shadow-none focus:ring-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {themes.map((t) => (
            <SelectItem key={t.id} value={t.id}>
              {t.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Badge variant="secondary" className="rounded-full px-2 text-[10px] tabular-nums">
        {themes.length}/10
      </Badge>
    </div>
  );
}

function CopyBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="group relative flex items-center gap-3 rounded-xl border bg-card px-4 py-3 font-mono text-sm shadow-sm">
      <Terminal className="h-4 w-4 shrink-0 text-muted-foreground" />
      <code className="flex-1 truncate text-foreground">{code}</code>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        }}
        className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-secondary text-secondary-foreground hover:bg-accent"
        aria-label="Copy"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}

function ShowcaseCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="flex items-baseline justify-between gap-4 border-b bg-muted/20 px-5 py-3.5 sm:px-6">
        <h3 className="font-display text-sm font-semibold tracking-tight">{title}</h3>
        <span className="text-xs text-muted-foreground">{description}</span>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start gap-3">{children}</div>
      </div>
    </section>
  );
}

export default function App() {
  const [kit, setKit] = useState<"all" | "core" | "mine" | "cord">("all");
  const showCore = kit === "all" || kit === "core";
  const showMine = kit === "all" || kit === "mine";
  const showCord = kit === "all" || kit === "cord";

  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {/* header */}
        <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-display text-base font-black text-primary-foreground shadow-sm">
                V
              </div>
              <div className="leading-none">
                <div className="font-display text-[15px] font-bold tracking-tight">vomps</div>
                <div className="text-xs text-muted-foreground">Vspcoder&apos;z Components</div>
              </div>
              <Badge variant="outline" className="ml-2 hidden rounded-full px-2 py-0 text-[10px] font-mono sm:inline-flex">
                v0.1 • 40
              </Badge>
            </div>
            <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
              <a href="#components" className="text-muted-foreground hover:text-foreground">
                Components
              </a>
              <a href="#kits" className="text-muted-foreground hover:text-foreground">
                Kits
              </a>
              <a href="#type" className="text-muted-foreground hover:text-foreground">
                Type
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <Button variant="outline" size="sm" asChild className="rounded-full hidden sm:inline-flex">
                <a href="https://github.com/vspcoderz/vomps" target="_blank" rel="noreferrer">
                  GitHub <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* hero */}
        <div className="relative overflow-hidden border-b">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(800px 400px at 20% 0%, color-mix(in oklab, var(--primary) 18%, transparent) 0%, transparent 60%), radial-gradient(600px 400px at 90% 20%, color-mix(in oklab, var(--primary) 12%, transparent) 0%, transparent 55%), linear-gradient(to bottom, transparent, transparent)",
            }}
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--border)_60%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--border)_60%,transparent)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.18] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]" />

          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium shadow-sm">
                <span className="inline-flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                Token-driven · Copy-paste · Dark-first
                <span className="hidden sm:inline text-muted-foreground">— no hardcoded colors</span>
              </div>

              <div className="space-y-4">
                <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[48px] leading-[0.95]">
                  Components that
                  <span className="relative ml-2 inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      re-skin instantly.
                    </span>
                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-1 h-2 bg-primary/15 -rotate-[0.5deg]"
                    />
                  </span>
                </h1>
                <p className="max-w-[56ch] text-[15px] leading-6 text-muted-foreground">
                  shadcn/ui architecture on Tailwind v4 + Radix. Every color is a CSS variable — flip{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">data-theme</code> and the whole UI follows.
                  Two crafted kits: <span className="font-medium text-foreground">MineBricks</span> (LabyMod) and{" "}
                  <span className="font-medium text-foreground">Cording</span> (Discord) with full type systems.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="rounded-full px-6" asChild>
                  <a href="#components">Browse components</a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <a href="https://github.com/vspcoderz/vomps" target="_blank" rel="noreferrer">
                    GitHub <ExternalLink className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="space-y-2 pt-2">
                <CopyBlock code={`npx shadcn@latest add https://vomps.vercel.app/r/button.json`} />
                <p className="text-xs text-muted-foreground">
                  Copy-paste, not a package. Tokens live in <span className="font-mono">src/themes/*.css</span> — change a theme, zero component edits.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 border shadow-sm">
                  <Layers className="h-3.5 w-3.5 text-primary" /> 40 components
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 border shadow-sm">
                  <Palette className="h-3.5 w-3.5 text-primary" /> 3 themes
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 border shadow-sm">
                  <Zap className="h-3.5 w-3.5 text-primary" /> 0 hardcoded colors
                </span>
              </div>
            </div>

            {/* live preview stack */}
            <div className="relative lg:pl-6">
              <div className="relative mx-auto grid max-w-[520px] gap-4">
                {/* card preview */}
                <Card className="overflow-hidden shadow-lg">
                  <div className="h-1 w-full bg-primary" />
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <CardTitle className="font-display text-base">Deploy to production</CardTitle>
                        <CardDescription>Flip the theme switcher — this card re-skins with tokens.</CardDescription>
                      </div>
                      <Badge className="rounded-full">Live</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex items-center gap-2 pt-0">
                    <Button size="sm">Deploy</Button>
                    <Button size="sm" variant="outline">
                      Preview
                    </Button>
                    <span className="ml-auto text-xs text-muted-foreground">Tokens: bg-card · border</span>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border bg-card p-4 shadow-sm">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold">
                      <Box className="h-3.5 w-3.5 text-mine-diamond" /> MineBricks
                    </div>
                    <div className="space-y-2">
                      <MineWell className="flex items-center justify-between py-2 text-xs">
                        <span className="font-mono font-bold">LabyMod 4</span>
                        <MineBadge variant="grass" dot>
                          5M+
                        </MineBadge>
                      </MineWell>
                      <div className="flex gap-2">
                        <MineButton size="sm">Play</MineButton>
                        <MineButton size="sm" variant="slot">
                          Options
                        </MineButton>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border bg-card p-4 shadow-sm">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold">
                      <Hash className="h-3.5 w-3.5 text-primary" /> Cording
                    </div>
                    <CordMessage username="Clyde" timestamp="now" mention>
                      <span className="rounded bg-primary/20 px-1 text-primary">@you</span> blurple!
                    </CordMessage>
                    <div className="mt-3 flex gap-2">
                      <CordButton size="sm">Reply</CordButton>
                      <CordButton size="sm" variant="secondary">
                        Mute
                      </CordButton>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl border bg-muted/30 px-4 py-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Sparkles className="h-3.5 w-3.5 text-primary" /> Try the theme switcher in the header
                  </span>
                  <span className="text-muted-foreground">vomp-dark → minebricks → cording</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-6xl space-y-10 px-6 py-10 sm:space-y-12 sm:py-12">
          {/* features */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Palette className="h-5 w-5" />
              </div>
              <h3 className="font-display text-sm font-semibold">Token-driven</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                All color lives in <span className="font-mono text-xs">themes/*.css</span>. Components only use{" "}
                <span className="font-mono text-xs">bg-primary</span> etc.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="font-display text-sm font-semibold">Copy-paste</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Same API as shadcn/ui. Copy <span className="font-mono text-xs">src/components/ui</span> +{" "}
                <span className="font-mono text-xs">lib/utils</span> and ship.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <TypeIcon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-sm font-semibold">Theme-aware type</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Geist/MonoCraft vs gg sans/Ginto Nord — <span className="font-mono text-xs">var(--font-*)</span> swaps per theme.
              </p>
            </div>
          </div>

          {/* kit switch */}
          <div id="kits" className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-lg font-bold tracking-tight">Kits &amp; themes</h2>
            <div className="inline-flex rounded-full border bg-muted p-1 text-sm">
              {[
                ["all", "All"],
                ["core", "Core"],
                ["mine", "MineBricks"],
                ["cord", "Cording"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => setKit(id as never)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${kit === id ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* type */}
          <section id="type" className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-base font-bold tracking-tight">Typography that belongs to the theme</h3>
                <p className="mt-2 max-w-[52ch] text-sm leading-6 text-muted-foreground">
                  vomp-dark uses Inter, MineBricks uses Geist +{" "}
                  <span className="font-pixel">Monocraft</span> pixel, Cording uses gg sans + Ginto Nord. Switching themes changes{" "}
                  <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">--font-sans</code> /{" "}
                  <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">--font-display</code> live — no rebuild.
                </p>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-xl border bg-muted/30 p-4">
                    <div className="text-xs font-semibold text-muted-foreground">DISPLAY · Ginto Nord / Geist</div>
                    <div className="font-display mt-1 text-2xl font-bold leading-none tracking-tight">Group chat that&apos;s all fun &amp; games</div>
                    <div className="font-display text-sm font-semibold text-muted-foreground">One Client. Everything included.</div>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="rounded-xl border bg-card p-3">
                      <div className="text-xs font-semibold text-muted-foreground">MONO · code</div>
                      <code className="font-mono text-xs">npx vomps add button</code>
                    </div>
                    <div className="rounded-xl border bg-mine-well p-3">
                      <div className="font-pixel text-xs font-bold tracking-widest">PIXEL · Monocraft</div>
                      <div className="font-pixel text-sm">⛏️ MINECRAFT 1.8 → 1.21</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t bg-muted/20 p-6 sm:p-7 lg:border-l lg:border-t-0">
                <div className="text-xs font-semibold tracking-wide text-muted-foreground">LIVE SPECIMEN</div>
                <div className="mt-3 space-y-4 font-sans text-sm leading-6">
                  <p>
                    The quick brown fox jumps over the lazy dog — 16px/24px body copy in{" "}
                    <span className="font-mono rounded bg-muted px-1 text-xs">var(--font-sans)</span>.
                  </p>
                  <p className="text-muted-foreground">
                    Small muted copy, helper text, and placeholders use{" "}
                    <span className="font-mono text-xs">text-muted-foreground</span> so they stay legible on every surface.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* core */}
          {showCore && (
            <div id="components" className="space-y-6">
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-lg font-bold tracking-tight">Core primitives</h2>
                <span className="text-xs text-muted-foreground">shadcn/ui API · token-only</span>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <ShowcaseCard title="Button" description="6 variants · 4 sizes">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link</Button>
                  <Button size="sm">Small</Button>
                  <Button size="lg">Large</Button>
                  <Button disabled>Disabled</Button>
                </ShowcaseCard>

                <ShowcaseCard title="Badge & Card" description="surfaces · borders">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                    <Card className="w-full max-w-[360px] shadow-sm">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Deploy to production</CardTitle>
                        <CardDescription>Token-driven card — bg-card · border · shadow</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm text-muted-foreground">Push your agent-built UI live in one click.</CardContent>
                      <CardFooter className="gap-2">
                        <Button size="sm">Deploy</Button>
                        <Button size="sm" variant="outline">
                          Cancel
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </ShowcaseCard>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <ShowcaseCard title="Form" description="Input · Textarea · Select · Switch">
                  <div className="grid w-full max-w-[360px] gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email-core">Email</Label>
                      <Input id="email-core" placeholder="you@vomps.dev" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="prompt-core">Prompt</Label>
                      <Textarea id="prompt-core" placeholder="Describe the UI…" />
                    </div>
                    <div className="grid gap-2">
                      <Label>Model</Label>
                      <Select defaultValue="vomp">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vomp">vomp-1 (fast)</SelectItem>
                          <SelectItem value="vomp-pro">vomp-1-pro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border bg-muted/30 p-3">
                      <Label htmlFor="stream-core">Stream responses</Label>
                      <Switch id="stream-core" defaultChecked />
                    </div>
                  </div>
                </ShowcaseCard>

                <div className="grid gap-6">
                  <ShowcaseCard title="Tabs" description="segmented">
                    <Tabs defaultValue="preview" className="w-full max-w-[360px]">
                      <TabsList className="w-full">
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                        <TabsTrigger value="a11y">A11y</TabsTrigger>
                      </TabsList>
                      <TabsContent value="preview" className="pt-3 text-sm text-muted-foreground">
                        Rendered components on the active surface — no hardcoded colors.
                      </TabsContent>
                      <TabsContent value="code" className="pt-3 text-sm text-muted-foreground">
                        Copy-paste from <code className="font-mono text-xs">src/components/ui</code>.
                      </TabsContent>
                      <TabsContent value="a11y" className="pt-3 text-sm text-muted-foreground">
                        Radix primitives · focus rings · keyboard.
                      </TabsContent>
                    </Tabs>
                  </ShowcaseCard>

                  <ShowcaseCard title="Dialog · Tooltip · Skeleton" description="overlay · hover · loading">
                    <div className="flex w-full flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              Open dialog
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Voomp it.</DialogTitle>
                              <DialogDescription>Radix + tokens — works in every theme.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-2">
                              <Label htmlFor="name-core">Project name</Label>
                              <Input id="name-core" placeholder="my-awesome-app" />
                            </div>
                            <DialogFooter>
                              <Button>Save changes</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="secondary" size="sm">
                              Hover me
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Tooltips inherit theme tokens</TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="grid gap-2 rounded-lg border bg-muted/20 p-4">
                        <Skeleton className="h-5 w-3/5" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                      </div>
                    </div>
                  </ShowcaseCard>
                </div>
              </div>
            </div>
          )}

          {/* minebricks */}
          {showMine && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-lg font-bold tracking-tight">MineBricks</h2>
                  <span className="hidden sm:inline text-xs text-muted-foreground">LabyMod · block kit · Monocraft</span>
                  <MineBadge variant="diamond" pixel dot>
                    14
                  </MineBadge>
                </div>
                <a href="https://laby.net/client" target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4">
                  laby.net/client — #3f61ea
                </a>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <ShowcaseCard title="MineButton" description="9 variants · 3D edge">
                  <MineButton>Play</MineButton>
                  <MineButton variant="secondary">Options</MineButton>
                  <MineButton variant="slot">Slot</MineButton>
                  <MineButton variant="destructive">Quit</MineButton>
                  <MineButton variant="grass">Grass</MineButton>
                  <MineButton variant="gold">Gold</MineButton>
                  <MineButton variant="diamond">Diamond</MineButton>
                  <MineButton variant="redstone">Redstone</MineButton>
                  <MineButton variant="amethyst">Amethyst</MineButton>
                  <MineButton variant="primary" pixel>
                    PIXEL
                  </MineButton>
                </ShowcaseCard>

                <ShowcaseCard title="MineCard · MineWell" description="lui-frame · inset">
                  <MineCard className="w-full max-w-[360px]">
                    <MineCardHeader>
                      <MineCardTitle pixel>One Client. Everything.</MineCardTitle>
                      <MineCardDescription>100+ mods · LabyMod 4 hero as card</MineCardDescription>
                    </MineCardHeader>
                    <MineCardContent className="space-y-3">
                      <MineWell className="flex items-center justify-between py-2 text-xs">
                        <span className="font-mono font-bold">LabyMod 4</span>
                        <MineBadge variant="grass" dot>
                          5M+ users
                        </MineBadge>
                      </MineWell>
                      <p className="text-sm text-muted-foreground">Well #060911 · edge #04060b · 6px slot radius</p>
                    </MineCardContent>
                    <MineCardFooter className="gap-2">
                      <MineButton size="sm">Download</MineButton>
                      <MineButton size="sm" variant="slot">
                        Roadmap
                      </MineButton>
                    </MineCardFooter>
                  </MineCard>
                </ShowcaseCard>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <ShowcaseCard title="MineSlot" description="inventory · hotbar">
                  <div className="grid gap-3">
                    <div className="flex flex-wrap gap-2">
                      <MineSlot>⛏️</MineSlot>
                      <MineSlot count={64}>🧱</MineSlot>
                      <MineSlot active count={12}>
                        💎
                      </MineSlot>
                    </div>
                    <MineWell className="p-2">
                      <MineSlotGrid>
                        {Array.from({ length: 9 }).map((_, i) => (
                          <MineSlot key={i} active={i === 4} interactive={i === 4}>
                            {i === 1 ? "🗡️" : i === 4 ? "⛏️" : i === 7 ? "🍞" : ""}
                          </MineSlot>
                        ))}
                      </MineSlotGrid>
                    </MineWell>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard title="MineBadge · Progress" description="cat colors · XP">
                  <div className="grid w-full gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <MineBadge variant="grass" dot>
                        Grass
                      </MineBadge>
                      <MineBadge variant="gold" dot>
                        Gold
                      </MineBadge>
                      <MineBadge variant="diamond" dot>
                        Diamond
                      </MineBadge>
                      <MineBadge variant="redstone" dot>
                        Redstone
                      </MineBadge>
                    </div>
                    <MineProgress value={68} variant="grass" showLabel />
                    <MineXpShelf filled={7} segments={10} variant="grass" />
                  </div>
                </ShowcaseCard>

                <ShowcaseCard title="MineForm · Tabs · Dialog" description="full coverage">
                  <div className="grid w-full gap-3">
                    <MineInput placeholder="play.labymod.net" />
                    <MineTextarea placeholder="Addon description…" className="min-h-[56px]" />
                    <div className="flex items-center justify-between rounded-md border border-mine-edge bg-mine-well p-2.5">
                      <MineLabel pixel className="text-[11px]">
                        Shaders
                      </MineLabel>
                      <MineSwitch defaultChecked />
                    </div>
                    <MineTabs defaultValue="a" className="w-full">
                      <MineTabsList className="w-full">
                        <MineTabsTrigger value="a">Installed</MineTabsTrigger>
                        <MineTabsTrigger value="b">Browse</MineTabsTrigger>
                      </MineTabsList>
                    </MineTabs>
                    <div className="flex gap-2">
                      <MineDialog>
                        <MineDialogTrigger asChild>
                          <MineButton size="sm" variant="secondary">
                            Dialog
                          </MineButton>
                        </MineDialogTrigger>
                        <MineDialogContent>
                          <MineDialogHeader>
                            <MineDialogTitle>Install addon?</MineDialogTitle>
                            <MineDialogDescription>Monocraft title · well border</MineDialogDescription>
                          </MineDialogHeader>
                          <MineButton>Confirm</MineButton>
                        </MineDialogContent>
                      </MineDialog>
                      <MineTooltipProvider>
                        <MineTooltip>
                          <MineTooltipTrigger asChild>
                            <MineButton size="sm" variant="slot">
                              Tip
                            </MineButton>
                          </MineTooltipTrigger>
                          <MineTooltipContent>Well tooltip</MineTooltipContent>
                        </MineTooltip>
                      </MineTooltipProvider>
                      <MineSkeleton className="h-7 w-16" />
                    </div>
                  </div>
                </ShowcaseCard>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <ShowcaseCard title="MineSelect" description="well trigger · popover">
                  <MineSelect defaultValue="1-21-1">
                    <MineSelectTrigger className="max-w-[240px]">
                      <MineSelectValue />
                    </MineSelectTrigger>
                    <MineSelectContent>
                      <MineSelectItem value="1-21-1">1.21.1</MineSelectItem>
                      <MineSelectItem value="1-20-1">1.20.1</MineSelectItem>
                      <MineSelectItem value="1-8-9">1.8.9</MineSelectItem>
                    </MineSelectContent>
                  </MineSelect>
                </ShowcaseCard>
                <div className="hidden lg:block rounded-2xl border bg-mine-well/20 p-5 text-sm leading-6 text-muted-foreground">
                  <span className="font-pixel text-xs font-bold tracking-widest text-foreground">LABY SURFACES</span>
                  <p className="mt-2">surface-0 #0e111b · surface-2 #1f2430 · well #060911 · brand #3f61ea · cat colors mirror Minecraft materials.</p>
                </div>
              </div>
            </div>
          )}

          {/* cording */}
          {showCord && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-lg font-bold tracking-tight">Cording</h2>
                  <span className="hidden sm:inline text-xs text-muted-foreground">Discord · blurple · Ginto Nord</span>
                  <CordBadge variant="online" showDot>
                    14
                  </CordBadge>
                </div>
                <a href="https://discord.com/branding" target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4">
                  discord.com/branding — #5865F2
                </a>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <ShowcaseCard title="CordButton" description="blurple · pill · success">
                  <CordButton>Primary</CordButton>
                  <CordButton variant="secondary">Secondary</CordButton>
                  <CordButton variant="success">Success</CordButton>
                  <CordButton variant="danger">Danger</CordButton>
                  <CordButton variant="light">Light</CordButton>
                  <CordButton pill>Rounded Pill</CordButton>
                </ShowcaseCard>

                <ShowcaseCard title="CordCard · Message" description="mention · avatar">
                  <CordCard className="w-full max-w-[360px]">
                    <CordCardHeader className="pb-3">
                      <CordCardTitle className="font-display">Welcome to #general</CordCardTitle>
                      <div className="text-sm text-muted-foreground">This is the start of the channel.</div>
                    </CordCardHeader>
                    <CordCardContent className="space-y-1 p-0">
                      <CordMessage username="vsp" timestamp="now">heyo — shipping cording rn ✨</CordMessage>
                      <CordMessage username="Clyde" timestamp="now" mention>
                        <span className="rounded bg-primary/20 px-1 text-primary">@vsp</span> blurple looks good in every season
                      </CordMessage>
                    </CordCardContent>
                    <CordCardFooter className="mt-3 flex-row gap-2">
                      <CordInput placeholder="Message #general" className="flex-1" />
                      <CordButton size="sm">Send</CordButton>
                    </CordCardFooter>
                  </CordCard>
                </ShowcaseCard>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <ShowcaseCard title="Channels · Guilds" description="sidebar · rail">
                  <div className="flex gap-3">
                    <CordGuildRail>
                      <CordGuild active>✦</CordGuild>
                      <CordGuild unread>V</CordGuild>
                      <CordGuild>◒</CordGuild>
                    </CordGuildRail>
                    <CordSidebarShell className="flex-1">
                      <CordChannelList>
                        <CordChannel active># general</CordChannel>
                        <CordChannel unread># changelog</CordChannel>
                        <CordChannel icon="voice">Voice</CordChannel>
                      </CordChannelList>
                    </CordSidebarShell>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard title="CordBadge · Presence" description="online / idle / dnd">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <CordBadge variant="online" showDot>
                        Online
                      </CordBadge>
                      <CordBadge variant="idle" showDot>
                        Idle
                      </CordBadge>
                      <CordBadge variant="dnd" showDot>
                        DND
                      </CordBadge>
                      <CordBadge variant="streaming" showDot>
                        Live
                      </CordBadge>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border bg-card px-3 py-2">
                      <CordStatusDot status="online" />
                      <CordStatusDot status="idle" />
                      <CordStatusDot status="dnd" />
                      <CordStatusDot status="offline" />
                      <span className="text-xs text-muted-foreground">presence</span>
                    </div>
                  </div>
                </ShowcaseCard>

                <ShowcaseCard title="CordForm · Tabs · Dialog" description="full coverage">
                  <div className="grid w-full gap-3">
                    <CordInput placeholder="vomps — cording" />
                    <CordTextarea placeholder="Channel topic…" className="min-h-[56px]" />
                    <div className="flex items-center justify-between rounded-md bg-cord-channel p-2.5">
                      <CordLabel>Community</CordLabel>
                      <CordSwitch defaultChecked />
                    </div>
                    <CordTabs defaultValue="chat" className="w-full">
                      <CordTabsList>
                        <CordTabsTrigger value="chat">Chat</CordTabsTrigger>
                        <CordTabsTrigger value="voice">Voice</CordTabsTrigger>
                      </CordTabsList>
                    </CordTabs>
                    <div className="flex gap-2">
                      <CordDialog>
                        <CordDialogTrigger asChild>
                          <CordButton size="sm" variant="secondary">
                            Dialog
                          </CordButton>
                        </CordDialogTrigger>
                        <CordDialogContent>
                          <CordDialogHeader>
                            <CordDialogTitle>Create channel</CordDialogTitle>
                            <CordDialogDescription>Ginto Nord display title</CordDialogDescription>
                          </CordDialogHeader>
                          <CordButton>Confirm</CordButton>
                        </CordDialogContent>
                      </CordDialog>
                      <CordTooltipProvider>
                        <CordTooltip>
                          <CordTooltipTrigger asChild>
                            <CordButton size="sm" variant="secondary">
                              Tip
                            </CordButton>
                          </CordTooltipTrigger>
                          <CordTooltipContent>Black #111214</CordTooltipContent>
                        </CordTooltip>
                      </CordTooltipProvider>
                      <CordSkeleton className="h-7 w-16" />
                    </div>
                  </div>
                </ShowcaseCard>
              </div>

              <ShowcaseCard title="CordSelect" description="channel trigger · popover">
                <CordSelect defaultValue="general">
                  <CordSelectTrigger className="max-w-[240px]">
                    <CordSelectValue />
                  </CordSelectTrigger>
                  <CordSelectContent>
                    <CordSelectItem value="general">General</CordSelectItem>
                    <CordSelectItem value="gaming">Gaming</CordSelectItem>
                    <CordSelectItem value="music">Music</CordSelectItem>
                  </CordSelectContent>
                </CordSelect>
              </ShowcaseCard>
            </div>
          )}
        </main>

        <footer className="border-t mt-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-xs">
                V
              </span>
              <span>
                vomps — token-driven, copy-paste, built on{" "}
                <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">
                  shadcn/ui
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <a href="https://github.com/vspcoderz/vomps" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 hover:bg-accent">
                GitHub <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <span className="text-xs text-muted-foreground">40 components · 3 themes · 0 hardcoded colors</span>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
