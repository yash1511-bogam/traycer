import {
  AlarmClock,
  Bot,
  Monitor,
  Plug,
  TerminalSquare,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { BackgroundItemKind } from "@traycer/protocol/host/agent/gui/subscribe";

/**
 * The one glyph per Background kind, shared by every surface that draws one -
 * the panel's rows and the compact chip standing in for the panel - so a kind
 * looks the same wherever it appears. The caller sets size and tone.
 */
export const BACKGROUND_KIND_ICONS: Readonly<
  Record<BackgroundItemKind, LucideIcon>
> = {
  subagent: Bot,
  command: TerminalSquare,
  monitor: Monitor,
  wakeup: AlarmClock,
  workflow: Workflow,
  mcp: Plug,
};
