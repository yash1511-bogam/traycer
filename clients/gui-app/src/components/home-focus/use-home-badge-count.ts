/**
 * How many unresolved "needs you" prompts are waiting across every task - the
 * count the Home tab renders as its badge. `0` hides the badge.
 *
 * A constant until the cross-task focus model can answer it; the strip item
 * already subscribes through this hook so wiring the real source is a change to
 * this file alone.
 */
export function useHomeBadgeCount(): number {
  return 0;
}
