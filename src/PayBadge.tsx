import { BADGE_COLOR_HEX, type BadgeColor } from './config';

type Props = {
  color: BadgeColor;
  text: string;
  /** Distance from top of the positioning context (in px). Negative means above. */
  topPx?: number;
};

/**
 * Ribbon badge that hangs from the top edge of a payment card.
 *
 * Shape per Figma node 3612:15662:
 *   - Main pill: flat top, rounded-bottom corners (radius ~10.4px), filled with
 *     the badge color, 16px tall. Carries a subtle drop shadow.
 *   - Two small 8×8 dark right-triangle "tails" at the top-OUTER corners of
 *     the pill, filled with the darker shade of the pill colour.
 *   - The badge wrapper is positioned so the pill body straddles the card's
 *     top edge (≈4 px above + 12 px overlapping). The triangle SVGs are
 *     clipped (`clip-path: inset(0 0 50% 0)`) so only the top half above the
 *     card border renders — the bottom half that would visually overlap the
 *     card is hidden, giving the "tucked behind the card" look without
 *     fighting stacking-context issues from negative z-index.
 */
export default function PayBadge({ color, text, topPx = -1 }: Props) {
  const { fill, shade } = BADGE_COLOR_HEX[color];
  // Hides the bottom half of the triangle (the portion that would overlap
  // visually into the card area).
  const clipOverlap = { clipPath: 'inset(0 0 50% 0)' } as const;
  return (
    <div
      className="absolute left-0 right-0 flex justify-center pointer-events-none"
      style={{ top: topPx }}
      aria-hidden="true"
    >
      <div className="relative flex">
        {/* Left tail — visible only above the card */}
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          className="absolute right-full top-0 block"
          style={clipOverlap}
        >
          <path d="M8 8 L8 0 L0 8 Z" fill={shade} />
        </svg>

        {/* Pill — sits on top of the card with a subtle drop shadow */}
        <div
          className="flex items-center justify-center h-[16px] px-[10px] whitespace-nowrap"
          style={{
            backgroundColor: fill,
            borderBottomLeftRadius: 10.383,
            borderBottomRightRadius: 10.383,
            boxShadow: '0 1px 2px rgba(25,40,57,0.18)',
          }}
        >
          <p className="font-['Inter'] font-medium text-[10px] leading-[18px] text-white">
            {text}
          </p>
        </div>

        {/* Right tail — mirror, also clipped to top half */}
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          className="absolute left-full top-0 block"
          style={clipOverlap}
        >
          <path d="M0 8 L0 0 L8 8 Z" fill={shade} />
        </svg>
      </div>
    </div>
  );
}
