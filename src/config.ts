// ─── Single source of truth for badge + highlight state ──────────────────
// `defaultConfig` is the startup config. The ControlPanel writes here via
// React state. All cross-card constraints live in this file as pure functions
// so both the UI and the renderer agree on what's legal.

export const CARD_IDS = ['upi', 'cards', 'netbanking', 'emi', 'cod'] as const;
export type CardId = (typeof CARD_IDS)[number];

export type BadgeColor = 'green' | 'red' | 'black';
export type HighlightColor = 'green' | 'black';
/** How badges render on each card.
 *  - 'centered': ribbon sitting centered above the card border (default).
 *  - 'above-price': inline pill, inside the card, above the price column. */
export type BadgeLayout = 'centered' | 'above-price';

/** Price-visibility modes:
 *   - 'full': show both strikethrough (was-price) and regular price
 *   - 'no-strike': hide the strikethrough only; keep the regular price
 *   - 'none': hide both prices entirely (arrow stays)
 */
export type PriceMode = 'full' | 'no-strike' | 'none';

export type BadgeSetting = { color: BadgeColor; text: string };
export type HighlightSetting = { cardId: CardId; color: HighlightColor };

export type CardConfig = {
  badges: Partial<Record<CardId, BadgeSetting | null>>;
  highlight: HighlightSetting | null;
  priceMode: PriceMode;
  badgeLayout: BadgeLayout;
};

// fill = pill body. shade = the tail triangles. Each shade is a noticeably
// darker variant of the corresponding fill (~40% darker by L) so the tails
// always read as a separate, deeper colour against the pill.
export const BADGE_COLOR_HEX: Record<BadgeColor, { fill: string; shade: string }> = {
  green: { fill: '#008743', shade: '#004a25' },
  red:   { fill: '#c91d1d', shade: '#6b0707' },
  black: { fill: '#1c1c1c', shade: '#000000' },
};

export const HIGHLIGHT_COLOR_HEX: Record<HighlightColor, string> = {
  green: '#008743',
  black: '#1c1c1c',
};

/** Tint used for the UPI embedded-providers area when UPI is highlighted.
 *  The grid of provider cards (Google Pay / PayTM / PhonePe / More) sits on
 *  this background, so it stays light to preserve contrast with the inner
 *  white cards.
 */
export const HIGHLIGHT_LIGHT_HEX: Record<HighlightColor, string> = {
  green: '#e6f3ec',
  black: '#ececec',
};

export const CARD_LABELS: Record<CardId, string> = {
  upi: 'UPI',
  cards: 'Cards',
  netbanking: 'Netbanking',
  emi: 'EMI',
  cod: 'Cash on Delivery',
};

export const MAX_BADGES = 3;

export const defaultConfig: CardConfig = {
  badges: {
    upi:   { color: 'green', text: 'Pay online to get 10% off' },
    cards: { color: 'green', text: 'Pay online to get 10% off' },
    emi:   { color: 'green', text: 'Pay online to get 10% off' },
  },
  highlight: null,
  priceMode: 'full',
  badgeLayout: 'centered',
};

// ─── Constraints ─────────────────────────────────────────────────────────
// Rules:
//   - At most MAX_BADGES (3) badges across all cards.
//   - At most 1 RED badge.
//   - GREEN and BLACK badges cannot co-exist (any green ⇒ no black, and vice versa).
//   - At most 1 highlighted card.
//   - PER-CARD: the highlighted card's own badge color (if any) must differ from
//     its highlight color. Badges on OTHER cards don't constrain the highlight.

/** Return the set of badge colors currently used on cards OTHER than `excludeCardId`. */
function otherBadgeColors(config: CardConfig, excludeCardId?: CardId): BadgeColor[] {
  return Object.entries(config.badges)
    .filter(([id, v]) => v != null && id !== excludeCardId)
    .map(([, v]) => (v as BadgeSetting).color);
}

/** Which badge colors are still legal for a given card given the current config?
 *  The highlight-color check only applies when THIS card is the highlighted one. */
export function allowedBadgeColors(config: CardConfig, cardId: CardId): BadgeColor[] {
  const others = otherBadgeColors(config, cardId);
  const hasRed = others.includes('red');
  const hasGreen = others.includes('green');
  const hasBlack = others.includes('black');
  // Only the highlighted card itself feels the cross-constraint.
  const isHighlighted = config.highlight?.cardId === cardId;
  const highlightColor = isHighlighted ? config.highlight!.color : undefined;
  const out: BadgeColor[] = [];
  if (!hasRed) out.push('red'); // rule: max 1 red
  if (!hasBlack && highlightColor !== 'green') out.push('green'); // rule: no green+black mix; if this card is highlighted green, no green badge here
  if (!hasGreen && highlightColor !== 'black') out.push('black');
  return out;
}

/** Which highlight colors are legal for a specific card?
 *  If the card has no badge (or a red one), both green and black are allowed.
 *  Only a green/black badge on THIS card blocks the matching highlight color.
 *  Badges on OTHER cards have no effect. */
export function allowedHighlightColors(
  config: CardConfig,
  cardId?: CardId | null,
): HighlightColor[] {
  if (!cardId) return ['green', 'black'];
  const badge = config.badges[cardId];
  if (!badge || badge.color === 'red') return ['green', 'black'];
  // Badge is green or black — block the matching highlight color
  return (['green', 'black'] as HighlightColor[]).filter((c) => c !== badge.color);
}

/** Can we add a badge to a card not currently in `config.badges`? */
export function canAddBadgeSlot(config: CardConfig): boolean {
  return Object.values(config.badges).filter((b) => b != null).length < MAX_BADGES;
}

/** Default badge color for a new slot — picks the first legal color. */
export function pickDefaultBadgeColor(config: CardConfig, cardId: CardId): BadgeColor | null {
  const allowed = allowedBadgeColors(config, cardId);
  return allowed[0] ?? null;
}

// ─── Global badge-color abstraction (used by the ControlPanel) ─────────────
// The rules guarantee that all non-red badges share the same color. We treat
// that shared color as a "global" toggle the user can flip between green and
// black, with an independent "which one card is red" override.

/** The color shared by all non-red badges, or `null` if there are no non-red
 *  badges (i.e. the config has only a red badge or no badges at all). */
export function getGlobalBadgeColor(config: CardConfig): HighlightColor | null {
  for (const b of Object.values(config.badges)) {
    if (b && b.color !== 'red') return b.color;
  }
  return null;
}

/** The card currently set to red, or null. (At most 1 by construction.) */
export function getRedCardId(config: CardConfig): CardId | null {
  for (const [id, b] of Object.entries(config.badges)) {
    if (b?.color === 'red') return id as CardId;
  }
  return null;
}

/** Set the global (non-red) badge color, flipping every non-red badge.
 *  If the highlighted card's badge would now match the highlight color, the
 *  highlight is flipped to the other legal value (per-card cross-constraint). */
export function setGlobalBadgeColor(config: CardConfig, color: HighlightColor): CardConfig {
  const next: CardConfig = { ...config, badges: { ...config.badges } };
  for (const id of Object.keys(next.badges) as CardId[]) {
    const b = next.badges[id];
    if (b && b.color !== 'red') next.badges[id] = { ...b, color };
  }
  // Only resolve a conflict when the HIGHLIGHTED card itself has a badge that
  // now matches the highlight color. Badges on other cards don't constrain.
  if (next.highlight) {
    const hBadge = next.badges[next.highlight.cardId];
    if (hBadge && hBadge.color === next.highlight.color) {
      next.highlight = {
        ...next.highlight,
        color: next.highlight.color === 'green' ? 'black' : 'green',
      };
    }
  }
  return next;
}

/** Mark exactly one card as red; clears any previous red. Pass `null` to drop
 *  the red back to the current global color. */
export function setRedCard(config: CardConfig, cardId: CardId | null): CardConfig {
  const next: CardConfig = { ...config, badges: { ...config.badges } };
  const global = getGlobalBadgeColor(next) ?? 'green';
  // Clear any existing red back to the global
  for (const id of Object.keys(next.badges) as CardId[]) {
    const b = next.badges[id];
    if (b?.color === 'red') next.badges[id] = { ...b, color: global };
  }
  // Set the new red (if any). Only legal when the card is already a badge slot.
  if (cardId && next.badges[cardId]) {
    next.badges[cardId] = { ...next.badges[cardId]!, color: 'red' };
  }
  return next;
}

/**
 * Enforce constraints by mutating a copy:
 *  - Drops badges beyond MAX_BADGES (keeps first 3 by insertion order).
 *  - If green/black co-exist among badges, keeps the first color seen and drops the others.
 *  - If multiple reds, keeps the first.
 *  - PER-CARD: if the highlighted card has a badge of the SAME color as the highlight,
 *    the highlight is cleared. Badges on OTHER cards don't constrain the highlight.
 */
export function clamp(config: CardConfig): CardConfig {
  const entries = Object.entries(config.badges).filter(([, v]) => v != null) as [
    CardId,
    BadgeSetting,
  ][];
  const kept: [CardId, BadgeSetting][] = [];
  let seenRed = false;
  let seenGreen = false;
  let seenBlack = false;
  for (const [id, b] of entries) {
    if (kept.length >= MAX_BADGES) break;
    if (b.color === 'red' && seenRed) continue;
    if (b.color === 'green' && seenBlack) continue;
    if (b.color === 'black' && seenGreen) continue;
    if (b.color === 'red') seenRed = true;
    if (b.color === 'green') seenGreen = true;
    if (b.color === 'black') seenBlack = true;
    kept.push([id, b]);
  }
  const badges = Object.fromEntries(kept) as CardConfig['badges'];
  let highlight = config.highlight;
  if (highlight) {
    const hBadge = badges[highlight.cardId];
    if (hBadge && hBadge.color === highlight.color) {
      // Highlighted card has a badge of the same color — drop the highlight.
      highlight = null;
    }
  }
  return {
    badges,
    highlight,
    priceMode: config.priceMode ?? 'full',
    badgeLayout: config.badgeLayout ?? 'centered',
  };
}
