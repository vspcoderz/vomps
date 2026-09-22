/**
 * Cording — Discord-inspired UI kit (full kit).
 * Typography: gg sans / Whitney body, ABC Ginto Nord display (--font-display).
 * All colors via tokens: --primary (blurple), --cord-* fallbacks in every theme.
 */
export { CordButton, cordButtonVariants, type CordButtonProps } from "./cord-button";
export {
  CordCard,
  CordCardHeader,
  CordCardTitle,
  CordCardDescription,
  CordCardContent,
  CordCardFooter,
  CordMessage,
} from "./cord-card";
export { CordChannel, CordChannelList, CordSidebarShell, cordChannelVariants, type CordChannelProps } from "./cord-channel";
export { CordBadge, CordStatusDot, cordBadgeVariants, type CordBadgeProps } from "./cord-badge";
export { CordGuild, CordGuildRail } from "./cord-guild";
export { CordInput } from "./cord-input";
export { CordTextarea } from "./cord-textarea";
export { CordLabel } from "./cord-label";
export {
  CordSelect,
  CordSelectGroup,
  CordSelectValue,
  CordSelectTrigger,
  CordSelectContent,
  CordSelectItem,
} from "./cord-select";
export { CordSwitch } from "./cord-switch";
export { CordTabs, CordTabsList, CordTabsTrigger, CordTabsContent } from "./cord-tabs";
export {
  CordDialog,
  CordDialogTrigger,
  CordDialogContent,
  CordDialogHeader,
  CordDialogFooter,
  CordDialogTitle,
  CordDialogDescription,
} from "./cord-dialog";
export {
  CordTooltip,
  CordTooltipTrigger,
  CordTooltipContent,
  CordTooltipProvider,
} from "./cord-tooltip";
export { CordSkeleton } from "./cord-skeleton";
