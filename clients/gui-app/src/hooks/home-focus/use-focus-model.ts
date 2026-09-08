/**
 * PLACEHOLDER. The real hook joins the activity store, the notification feed
 * and the warm chat sessions; this stand-in only returns a fixed model so the
 * Home surface can be built and tested against the contract. It is replaced
 * wholesale by the model implementation - do not build on anything here.
 */
import type { FocusModel } from "@/lib/home-focus/focus-model";
import type { MergedNotificationRow } from "@/stores/notifications/merged-notifications";

function placeholderActivation(feedId: string): MergedNotificationRow {
  return {
    feedId,
    source: "host",
    sourceId: feedId,
    createdAt: Date.now() - 120_000,
    readAt: null,
    title: "Approve: run bun test",
    body: "The agent wants to run a command.",
    payload: null,
    hostKind: "approval.requested",
    appLocalKind: null,
    globalEntry: null,
    severity: "needs_action",
    outcome: null,
    resolvedAt: null,
    sourceRef: null,
    originHostId: null,
    providerPackAttribution: null,
    category: "task",
  };
}

const PLACEHOLDER_MODEL: FocusModel = {
  prompts: [
    {
      key: "placeholder-prompt",
      kind: "approval",
      epicId: "placeholder-epic-a",
      chatId: "placeholder-chat-a",
      taskTitle: "Payments refactor",
      title: "Approve: run bun test",
      body: "The agent wants to run a command.",
      createdAt: Date.now() - 120_000,
      originHostId: null,
      activation: placeholderActivation("placeholder-prompt"),
    },
  ],
  tasks: [
    {
      epicId: "placeholder-epic-a",
      taskTitle: "Payments refactor",
      mountedHere: true,
      agents: [
        {
          agentId: "placeholder-agent-impl",
          title: "impl",
          surface: "chat",
          tier: "turn",
          parentId: null,
          hostId: null,
        },
        {
          agentId: "placeholder-agent-reviewer",
          title: "reviewer",
          surface: "chat",
          tier: "background",
          parentId: "placeholder-agent-impl",
          hostId: null,
        },
      ],
      needsYou: true,
      stoppable: true,
    },
    {
      epicId: "placeholder-epic-b",
      taskTitle: "Docs sweep",
      mountedHere: false,
      agents: [
        {
          agentId: "placeholder-agent-cold",
          title: null,
          surface: null,
          tier: "background",
          parentId: null,
          hostId: null,
        },
      ],
      needsYou: false,
      stoppable: true,
    },
  ],
  background: [
    {
      key: "placeholder-background",
      epicId: "placeholder-epic-a",
      chatId: "placeholder-chat-a",
      taskTitle: "Payments refactor",
      label: "dev server",
      kind: "managed-command",
      startedAtMs: Date.now() - 41 * 60_000,
      stoppable: true,
    },
  ],
  coverage: {
    activity: "live",
    notifications: "cloud",
    backgroundIsMountedOnly: true,
  },
  badgeCount: 1,
};

export function useFocusModel(): FocusModel {
  return PLACEHOLDER_MODEL;
}
