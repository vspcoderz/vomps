/**
 * Cording — Discord-inspired UI kit.
 * Palette scraped from discord.com/branding (blurple) + client dark surfaces.
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
