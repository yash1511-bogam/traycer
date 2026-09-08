/**
 * PLACEHOLDER. The real hook wraps notification activation, the tile-open
 * seam and the stop mutations; this stand-in only satisfies the shape the Home
 * surface calls so the view can be built and tested ahead of it. It is
 * replaced wholesale by the model implementation - do not build on anything
 * here.
 */
import type {
  FocusBackgroundRow,
  FocusPromptRow,
} from "@/lib/home-focus/focus-model";

export interface FocusStopAgentInput {
  readonly epicId: string;
  readonly agentId: string;
  readonly hostId: string | null;
  readonly cascade: boolean;
}

export interface FocusActions {
  readonly openPrompt: (row: FocusPromptRow) => void;
  readonly openAgent: (epicId: string, agentId: string) => void;
  readonly openTask: (epicId: string) => void;
  readonly openBackground: (row: FocusBackgroundRow) => void;
  readonly stopAgent: (input: FocusStopAgentInput) => void;
  readonly stopManagedCommand: (row: FocusBackgroundRow) => void;
  /** Agent ids and `FocusBackgroundRow.key`s with an in-flight stop. */
  readonly stopping: ReadonlySet<string>;
}

const PLACEHOLDER_ACTIONS: FocusActions = {
  openPrompt: () => undefined,
  openAgent: () => undefined,
  openTask: () => undefined,
  openBackground: () => undefined,
  stopAgent: () => undefined,
  stopManagedCommand: () => undefined,
  stopping: new Set<string>(),
};

export function useFocusActions(): FocusActions {
  return PLACEHOLDER_ACTIONS;
}
