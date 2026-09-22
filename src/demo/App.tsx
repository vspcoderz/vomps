import { useEffect, useState } from "react";
import { Moon, ExternalLink } from "lucide-react";

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
  MineProgress,
  MineSlot,
  MineSlotGrid,
  MineWell,
  MineXpShelf,
} from "@/components/minebricks";
import {
  CordBadge,
  CordButton,
  CordCard,
  CordCardContent,
  CordCardDescription,
  CordCardFooter,
  CordCardHeader,
  CordCardTitle,
  CordChannel,
  CordChannelList,
  CordGuild,
  CordGuildRail,
  CordMessage,
  CordSidebarShell,
  CordStatusDot,
} from "@/components/cording";
import { applyTheme, defaultThemeId, themes } from "@/themes/manifest";

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-4 md:grid-cols-[220px_1fr] md:gap-8">
      <div className="md:text-right">
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-wrap items-start gap-4 rounded-xl border bg-card p-6">
        {children}
      </div>
    </section>
  );
}

function ThemeSwitcher() {
  const [current, setCurrent] = useState(defaultThemeId);

  useEffect(() => {
    applyTheme(current);
  }, [current]);

  return (
    <div className="flex items-center gap-2 rounded-lg border bg-card p-1.5">
      <Moon className="ml-1.5 h-4 w-4 text-muted-foreground" />
      <Select value={current} onValueChange={setCurrent}>
        <SelectTrigger className="h-7 w-[150px] border-0 bg-transparent text-xs shadow-none focus:ring-0">
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
      <Badge variant="secondary" className="mr-1.5 text-[10px]">
        {themes.length}/10
      </Badge>
    </div>
  );
}

export default function App() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-black text-primary-foreground">
              V
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">vomps</h1>
              <p className="text-sm text-muted-foreground">
                Vspcoder'z Components — vomp-dark
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/vspcoderz/vomps"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ExternalLink />
              </a>
            </Button>
          </div>
        </header>

        <main className="space-y-8">
          <Section title="Button" description="6 variants, 4 sizes">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </Section>

          <Section title="Badge" description="4 variants">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </Section>

          <Section title="Card" description="Surface container">
            <Card className="w-[320px]">
              <CardHeader>
                <CardTitle>Deploy to production</CardTitle>
                <CardDescription>
                  Push your agent-built UI live in one click.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Everything is token-driven, so it inherits the active vomps
                  theme automatically.
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm">Deploy</Button>
                <Button size="sm" variant="outline">
                  Cancel
                </Button>
              </CardFooter>
            </Card>
          </Section>

          <Section title="Form" description="Input, Label, Textarea, Select, Switch">
            <div className="grid w-[320px] gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@vomps.dev" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="prompt">Prompt</Label>
                <Textarea
                  id="prompt"
                  placeholder="Describe the UI you want to generate…"
                />
              </div>
              <div className="grid gap-2">
                <Label>Model</Label>
                <Select defaultValue="vomp">
                  <SelectTrigger>
                    <SelectValue placeholder="Pick a model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vomp">vomp-1 (fast)</SelectItem>
                    <SelectItem value="vomp-pro">vomp-1-pro</SelectItem>
                    <SelectItem value="byok">Bring your own key</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="stream">Stream responses</Label>
                <Switch id="stream" defaultChecked />
              </div>
            </div>
          </Section>

          <Section title="Tabs" description="Segmented navigation">
            <Tabs defaultValue="preview" className="w-[360px]">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="a11y">A11y</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="text-sm text-muted-foreground">
                Rendered components on the vomp-dark surface.
              </TabsContent>
              <TabsContent value="code" className="text-sm text-muted-foreground">
                Copy-paste source straight from the registry.
              </TabsContent>
              <TabsContent value="a11y" className="text-sm text-muted-foreground">
                Radix primitives: focus rings, roles, and keyboard support included.
              </TabsContent>
            </Tabs>
          </Section>

          <Section title="Dialog" description="Modal overlay">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Voomp it.</DialogTitle>
                  <DialogDescription>
                    This modal is built on Radix and colored entirely by theme
                    tokens.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-2">
                  <Label htmlFor="name">Project name</Label>
                  <Input id="name" placeholder="my-awesome-app" />
                </div>
                <DialogFooter>
                  <Button>Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>Tooltips use the primary color</TooltipContent>
            </Tooltip>
          </Section>

          <Section title="Skeleton" description="Loading placeholder">
            <div className="flex w-[320px] flex-col gap-3">
              <Skeleton className="h-5 w-3/5" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <div className="flex gap-2">
                <Skeleton className="h-9 w-24" />
                <Skeleton className="h-9 w-24" />
              </div>
            </div>
          </Section>

          {/* ── MineBricks ── */}
          <div className="rounded-xl border border-dashed bg-mine-well/40 p-4">
            <div className="mb-1 flex items-center gap-2">
              <span className="font-mono text-xs font-bold tracking-[0.18em] text-mine-diamond">
                MINEBRICKS
              </span>
              <span className="text-xs text-muted-foreground">
                LabyMod-inspired block kit — token-driven, theme-aware
              </span>
              <MineBadge variant="diamond" pixel dot>
                v1
              </MineBadge>
            </div>
            <p className="text-xs text-muted-foreground">
              Palette scraped from{" "}
              <a className="underline underline-offset-4 hover:text-foreground" href="https://laby.net/client" target="_blank" rel="noreferrer">
                laby.net/client
              </a>
              : brand #3f61ea, surfaces #0e111b→#282d3c, cat colors &amp; 3D block buttons. Switch to{" "}
              <span className="font-semibold text-foreground">MineBricks</span> in the theme picker to see
              the full Laby surfaces.
            </p>
          </div>

          <Section title="MineButton" description="9 variants · 3D edge · pixel option">
            <MineButton>Play</MineButton>
            <MineButton variant="secondary">Options</MineButton>
            <MineButton variant="slot">Slot</MineButton>
            <MineButton variant="destructive">Quit</MineButton>
            <MineButton variant="grass">Grass</MineButton>
            <MineButton variant="gold">Gold</MineButton>
            <MineButton variant="diamond">Diamond</MineButton>
            <MineButton variant="redstone">Redstone</MineButton>
            <MineButton variant="amethyst">Amethyst</MineButton>
            <MineButton size="sm">Small</MineButton>
            <MineButton size="lg">Large</MineButton>
            <MineButton variant="primary" pixel>
              PIXEL FONT
            </MineButton>
          </Section>

          <Section title="MineCard + MineWell" description="Laby frame + well inset">
            <MineCard className="w-[340px]">
              <MineCardHeader>
                <MineCardTitle pixel>One Client. Everything included.</MineCardTitle>
                <MineCardDescription>
                  100+ mods packed into one client with its own launcher — Laby&apos;s hero claim as a card.
                </MineCardDescription>
              </MineCardHeader>
              <MineCardContent className="space-y-3">
                <MineWell className="flex items-center justify-between text-xs">
                  <span className="font-mono font-semibold tracking-wide">LabyMod 4</span>
                  <MineBadge variant="grass" dot>
                    5M+ users
                  </MineBadge>
                </MineWell>
                <p className="text-sm text-muted-foreground">
                  Surfaces use --card / --mine-well so the kit re-skins with the active theme.
                </p>
              </MineCardContent>
              <MineCardFooter className="gap-2">
                <MineButton size="sm">Download</MineButton>
                <MineButton size="sm" variant="slot">
                  Roadmap
                </MineButton>
              </MineCardFooter>
            </MineCard>
          </Section>

          <Section title="MineSlot" description="Inventory slots · hotbar grid">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <MineSlot>
                  <span className="text-lg">⛏️</span>
                </MineSlot>
                <MineSlot count={64}>
                  <span className="text-lg">🧱</span>
                </MineSlot>
                <MineSlot active count={12}>
                  <span className="text-lg">💎</span>
                </MineSlot>
                <MineSlot size="sm">
                  <span className="text-xs">i</span>
                </MineSlot>
                <MineSlot size="lg" interactive>
                  <span className="text-xl">⚔️</span>
                </MineSlot>
              </div>
              <MineWell className="p-2">
                <MineSlotGrid>
                  {Array.from({ length: 9 }).map((_, i) => (
                    <MineSlot key={i} interactive={i === 4} active={i === 4}>
                      {i === 1 ? "🗡️" : i === 4 ? "⛏️" : i === 7 ? "🍞" : ""}
                    </MineSlot>
                  ))}
                </MineSlotGrid>
              </MineWell>
            </div>
          </Section>

          <Section title="MineBadge" description="Cat colors · dot · pixel">
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
            <MineBadge variant="amethyst" dot>
              Amethyst
            </MineBadge>
            <MineBadge variant="secondary">Secondary</MineBadge>
            <MineBadge variant="outline">Outline</MineBadge>
            <MineBadge variant="grass" pixel>
              PIXEL GRASS
            </MineBadge>
            <MineBadge variant="diamond" pixel>
              PIXEL DIA
            </MineBadge>
          </Section>

          <Section title="MineProgress" description="XP bar + segmented shelf">
            <div className="flex w-[360px] flex-col gap-4">
              <MineProgress value={68} variant="grass" showLabel />
              <MineProgress value={42} variant="diamond" />
              <MineProgress value={88} variant="gold" striped showLabel />
              <MineProgress value={54} variant="redstone" />
              <MineProgress value={76} variant="amethyst" />
              <MineXpShelf filled={7} segments={10} variant="grass" />
              <MineXpShelf filled={4} segments={10} variant="diamond" />
            </div>
          </Section>

          {/* ── Cording (Discord-inspired) ── */}
          <div className="rounded-xl border border-dashed bg-cord-guild/20 p-4">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-xs font-bold tracking-[0.18em] text-primary">CORDING</span>
              <span className="text-xs text-muted-foreground">
                Discord-inspired kit — blurple, guild rail &amp; channel list
              </span>
              <CordBadge variant="online" showDot>
                online
              </CordBadge>
            </div>
            <p className="text-xs text-muted-foreground">
              Scraped from{" "}
              <a className="underline underline-offset-4 hover:text-foreground" href="https://discord.com/branding" target="_blank" rel="noreferrer">
                discord.com/branding
              </a>
              : Blurple #5865F2, Light #E0E3FF + client dark surfaces #1e1f22/#2b2d31/#313338. Switch to{" "}
              <span className="font-semibold text-foreground">Cording</span> for the full Discord shell.
            </p>
          </div>

          <Section title="CordButton" description="blurple primary · pill · success/danger">
            <CordButton>Primary</CordButton>
            <CordButton variant="secondary">Secondary</CordButton>
            <CordButton variant="success">Success</CordButton>
            <CordButton variant="danger">Danger</CordButton>
            <CordButton variant="outline">Outline</CordButton>
            <CordButton variant="ghost">Ghost</CordButton>
            <CordButton variant="light">Light Blurple</CordButton>
            <CordButton pill>Rounded Pill</CordButton>
            <CordButton size="sm">Small</CordButton>
            <CordButton size="lg">Large</CordButton>
          </Section>

          <Section title="CordCard + CordMessage" description="panel · message row · mention">
            <CordCard className="w-[380px]">
              <CordCardHeader>
                <CordCardTitle>Welcome to #general</CordCardTitle>
                <CordCardDescription>This is the start of the channel.</CordCardDescription>
              </CordCardHeader>
              <CordCardContent className="space-y-1 p-0">
                <CordMessage username="vspcoderz" timestamp="Today at 17:40">
                  heyo — shipping the Cording kit rn ✨
                </CordMessage>
                <CordMessage username="Clyde" timestamp="Today at 17:41" mention>
                  <span className="rounded bg-primary/20 px-1 font-medium text-primary">@vspcoderz</span> nice — blurple looks good in every season
                </CordMessage>
              </CordCardContent>
              <CordCardFooter className="mt-3">
                <Input placeholder="Message #general" className="bg-cord-guild border-0" />
                <CordButton size="sm">Send</CordButton>
              </CordCardFooter>
            </CordCard>
          </Section>

          <Section title="CordChannel + CordGuild" description="sidebar shells · guild rail">
            <div className="flex gap-3">
              <CordGuildRail>
                <CordGuild active>🏠</CordGuild>
                <CordGuild unread>V</CordGuild>
                <CordGuild>◒</CordGuild>
              </CordGuildRail>
              <CordSidebarShell>
                <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Text Channels
                </div>
                <CordChannelList>
                  <CordChannel active># general</CordChannel>
                  <CordChannel unread># changelog</CordChannel>
                  <CordChannel># questions</CordChannel>
                  <CordChannel icon="voice">Voice Lobby</CordChannel>
                  <CordChannel icon="announcement" badge={3}>
                    announcements
                  </CordChannel>
                </CordChannelList>
              </CordSidebarShell>
            </div>
          </Section>

          <Section title="CordBadge / Status" description="role pills · presence dots">
            <div className="flex flex-wrap items-center gap-2">
              <CordBadge variant="online" showDot>
                Online
              </CordBadge>
              <CordBadge variant="idle" showDot>
                Idle
              </CordBadge>
              <CordBadge variant="dnd" showDot>
                Do Not Disturb
              </CordBadge>
              <CordBadge variant="streaming" showDot>
                Streaming
              </CordBadge>
              <CordBadge>Blurple</CordBadge>
              <CordBadge variant="secondary">Secondary</CordBadge>
              <div className="flex items-center gap-2 rounded-full border bg-card px-3 py-1">
                <CordStatusDot status="online" />
                <CordStatusDot status="idle" />
                <CordStatusDot status="dnd" />
                <CordStatusDot status="streaming" />
                <CordStatusDot status="offline" />
                <span className="text-xs text-muted-foreground">presence</span>
              </div>
            </div>
          </Section>
        </main>

        <footer className="mt-12 border-t pt-6 text-sm text-muted-foreground">
          Built on{" "}
          <a
            className="underline underline-offset-4 hover:text-foreground"
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noreferrer"
          >
            shadcn/ui
          </a>{" "}
          · Components consume tokens only — no hardcoded colors anywhere.
        </footer>
      </div>
    </TooltipProvider>
  );
}
