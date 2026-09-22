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
