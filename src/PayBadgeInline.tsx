import { BADGE_COLOR_HEX, type BadgeColor } from './config';

type Props = {
  color: BadgeColor;
  text: string;
};

/**
 * Inline pill badge variant — sits INSIDE the card, above the price column.
 * Used when `badgeLayout === 'above-price'`. Unlike the centered ribbon
 * variant, this has no tails and uses fully rounded corners (it doesn't
 * "hang" from the card edge).
 */
export default function PayBadgeInline({ color, text }: Props) {
  const { fill } = BADGE_COLOR_HEX[color];
  return (
    <div
      className="inline-flex items-center justify-center h-[20px] px-[8px] rounded-[4px] whitespace-nowrap"
      style={{ backgroundColor: fill }}
      aria-hidden="true"
    >
      <p className="font-['Inter'] font-medium text-[10px] leading-[14px] text-white">
        {text}
      </p>
    </div>
  );
}
