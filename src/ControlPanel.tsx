import {
  CARD_IDS,
  CARD_LABELS,
  MAX_BADGES,
  getGlobalBadgeColor,
  getRedCardId,
  setGlobalBadgeColor,
  setRedCard,
  type CardConfig,
  type CardId,
  type HighlightColor,
} from './config';

export type Mode = 'default' | 'customize';

type Props = {
  mode: Mode;
  onModeChange: (m: Mode) => void;
  config: CardConfig;
  onChange: (next: CardConfig) => void;
};

const GREEN_BLACK: HighlightColor[] = ['green', 'black'];

export default function ControlPanel({ mode, onModeChange, config, onChange }: Props) {
  const selectedCards = CARD_IDS.filter((id) => config.badges[id] != null);
  const slotsLeft = MAX_BADGES - selectedCards.length;
  const globalBadge = getGlobalBadgeColor(config); // null when only red or no badges
  const redCard = getRedCardId(config);
  const hasAnyBadge = selectedCards.length > 0;

  // ─── Step 1 ─── toggle a card slot
  const toggleCard = (id: CardId, checked: boolean) => {
    const next: CardConfig = { ...config, badges: { ...config.badges } };
    if (checked) {
      if (selectedCards.length >= MAX_BADGES) return;
      // New cards adopt the current global color (defaults to green if there's none yet).
      const color = globalBadge ?? 'green';
      next.badges[id] = { color, text: 'Pay online to get 10% off' };
    } else {
      delete next.badges[id];
      // If the removed card was the red one, no special handling needed —
      // getRedCardId will return null on next render.
    }
    onChange(next);
  };

  const clearBadges = () => onChange({ ...config, badges: {} });

  // ─── Step 2 ─── flip the global colour for every non-red badge
  const flipGlobalBadge = (color: HighlightColor) => {
    onChange(setGlobalBadgeColor(config, color));
  };

  // ─── Step 2 ─── per-card "make red" toggle
  const toggleRed = (id: CardId, makeRed: boolean) => {
    onChange(setRedCard(config, makeRed ? id : null));
  };

  // ─── Step 2 ─── per-card badge text
  const setBadgeText = (id: CardId, text: string) => {
    const cur = config.badges[id];
    if (!cur) return;
    onChange({ ...config, badges: { ...config.badges, [id]: { ...cur, text } } });
  };

  // ─── Step 3 ─── pick which card (if any) gets highlighted
  const setHighlightCard = (cardId: CardId | 'none') => {
    if (cardId === 'none') {
      onChange({ ...config, highlight: null });
      return;
    }
    // Per-card rule: only the highlighted card's OWN badge constrains the color.
    const badge = config.badges[cardId];
    let color: HighlightColor;
    if (!badge || badge.color === 'red') {
      // No conflict — keep previous color if any, else default to green.
      color = config.highlight?.color ?? 'green';
    } else {
      // Badge is green or black on this card — highlight must be the other.
      color = badge.color === 'green' ? 'black' : 'green';
    }
    onChange({ ...config, highlight: { cardId, color } });
  };

  // ─── Step 3 ─── pick the highlight colour
  const setHighlightColor = (color: HighlightColor) => {
    if (!config.highlight) return;
    // Per-card: only block if this card's badge has the same color.
    const badge = config.badges[config.highlight.cardId];
    if (badge && badge.color === color) return;
    onChange({ ...config, highlight: { ...config.highlight, color } });
  };

  const reset = () => onChange({ badges: {}, highlight: null, priceMode: 'full', badgeLayout: 'centered' });

  // The highlight color that's forbidden — depends ONLY on the highlighted
  // card's own badge (per-card rule). null if no card highlighted or its
  // badge doesn't constrain (no badge / red badge).
  const forbiddenHighlight: HighlightColor | null = (() => {
    if (!config.highlight) return null;
    const badge = config.badges[config.highlight.cardId];
    if (!badge || badge.color === 'red') return null;
    return badge.color as HighlightColor;
  })();

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 font-['Inter'] text-[13px] text-[#192839]">
      {/* Mode toggle — always at the top */}
      <div className="flex bg-[#f5f7fa] rounded-full p-0.5 mb-4 w-full">
        <ModeButton active={mode === 'default'} onClick={() => onModeChange('default')}>
          Default
        </ModeButton>
        <ModeButton active={mode === 'customize'} onClick={() => onModeChange('customize')}>
          Customize
        </ModeButton>
      </div>

      {mode === 'default' && (
        <p className="text-[12px] text-[#6c849d] leading-[1.5]">
          Click <b>Customize</b> above to add badges, change badge colours, and apply a coloured
          highlight to one card.
        </p>
      )}

      {mode === 'customize' && (
        <>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[15px] font-semibold">Card config</h2>
        <button
          type="button"
          onClick={reset}
          className="text-[11px] text-[#6c849d] hover:text-[#192839] underline"
        >
          reset all
        </button>
      </div>

      {/* ─── Step 1 ─── */}
      <Step n={1} title="Pick cards with badges" hint={`Max ${MAX_BADGES} • ${slotsLeft} left`}>
        <div className="space-y-2">
          {CARD_IDS.map((id) => {
            const checked = config.badges[id] != null;
            const disabled = !checked && slotsLeft <= 0;
            return (
              <label
                key={id}
                className={`flex items-center gap-2 ${disabled ? 'opacity-40' : 'cursor-pointer'}`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={disabled}
                  onChange={(e) => toggleCard(id, e.target.checked)}
                />
                <span>{CARD_LABELS[id]}</span>
              </label>
            );
          })}
        </div>
        {hasAnyBadge && (
          <button
            type="button"
            onClick={clearBadges}
            className="mt-3 text-[11px] text-[#6c849d] hover:text-[#192839] underline"
          >
            clear all badges (none)
          </button>
        )}
      </Step>

      {/* ─── Step 2 ─── */}
      <Step n={2} title="Badge color" hint="Flip global • make any one red">
        {!hasAnyBadge ? (
          <p className="text-[11px] text-[#6c849d] italic">No badges. Pick at least one card in step 1.</p>
        ) : (
          <>
            <Radio
              label="Global"
              value={globalBadge ?? 'green'}
              options={GREEN_BLACK}
              onChange={flipGlobalBadge}
              hint={!globalBadge ? 'No non-red badges yet — pick green or black to apply.' : undefined}
            />
            <div className="mt-4">
              <p className="text-[11px] font-medium uppercase tracking-wider text-[#6c849d] mb-2">
                Make one card red instead{' '}
                <span className="font-normal normal-case tracking-normal">(max 1)</span>
              </p>
              <div className="space-y-2">
                {selectedCards.map((id) => {
                  const isRed = redCard === id;
                  const disabled = redCard != null && !isRed; // another card already red
                  return (
                    <div key={id}>
                      <label
                        className={`flex items-center gap-2 ${disabled ? 'opacity-40' : 'cursor-pointer'}`}
                      >
                        <input
                          type="checkbox"
                          checked={isRed}
                          disabled={disabled}
                          onChange={(e) => toggleRed(id, e.target.checked)}
                        />
                        <span>
                          {CARD_LABELS[id]}
                          <span className="ml-2 inline-block w-2 h-2 rounded-full align-middle" style={{ backgroundColor: isRed ? '#c91d1d' : (globalBadge === 'black' ? '#1c1c1c' : '#008743') }} />
                        </span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 ml-6 w-[calc(100%-1.5rem)] border border-[#e3eaf3] rounded px-2 py-1 text-[11px]"
                        value={config.badges[id]?.text ?? ''}
                        onChange={(e) => setBadgeText(id, e.target.value)}
                        placeholder="Badge text"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </Step>

      {/* ─── Step 3 ─── */}
      <Step n={3} title="Color one card">
        <div className="space-y-2">
          <Row label="Card">
            <select
              className="border border-[#e3eaf3] rounded px-2 py-1 text-[12px]"
              value={config.highlight?.cardId ?? 'none'}
              onChange={(e) => setHighlightCard(e.target.value as CardId | 'none')}
            >
              <option value="none">none</option>
              {CARD_IDS.map((id) => (
                <option key={id} value={id}>
                  {CARD_LABELS[id]}
                </option>
              ))}
            </select>
          </Row>
          {config.highlight && (
            <>
              <Radio
                label="Color"
                value={config.highlight.color}
                options={GREEN_BLACK}
                onChange={setHighlightColor}
                disabledOption={forbiddenHighlight ?? undefined}
              />
              {forbiddenHighlight && (
                <p className="text-[11px] text-[#6c849d] mt-1 leading-[1.4] bg-[#f5f7fa] border border-[#e3eaf3] rounded px-2 py-1.5">
                  ℹ️ This card's badge is <b>{forbiddenHighlight}</b>, so its color can only be{' '}
                  <b>{forbiddenHighlight === 'green' ? 'black' : 'green'}</b>.
                </p>
              )}
            </>
          )}
          {!config.highlight && (
            <p className="text-[11px] text-[#6c849d] italic">No card highlighted.</p>
          )}
        </div>
      </Step>

      {/* ─── Step 4 ─── Price visibility */}
      <Step n={4} title="Price visibility" hint="Show or hide the prices on each card">
        <div className="space-y-1.5">
          {(['full', 'no-strike', 'none'] as const).map((mode) => (
            <label key={mode} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="priceMode"
                checked={(config.priceMode ?? 'full') === mode}
                onChange={() => onChange({ ...config, priceMode: mode })}
              />
              <span>
                {mode === 'full' && 'Show both prices'}
                {mode === 'no-strike' && 'Hide strikethrough price only'}
                {mode === 'none' && 'Hide both prices'}
              </span>
            </label>
          ))}
        </div>
      </Step>

      {/* ─── Step 5 ─── Badge layout */}
      <Step n={5} title="Badge layout" hint="Where badges sit on each card" last>
        <div className="space-y-1.5">
          {(['centered', 'above-price'] as const).map((layout) => (
            <label key={layout} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="badgeLayout"
                checked={(config.badgeLayout ?? 'centered') === layout}
                onChange={() => onChange({ ...config, badgeLayout: layout })}
              />
              <span>
                {layout === 'centered' && 'Ribbon centered above card'}
                {layout === 'above-price' && 'Pill above the price'}
              </span>
            </label>
          ))}
        </div>
      </Step>
        </>
      )}
    </div>
  );
}

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex-1 px-3 py-1.5 rounded-full text-[12px] font-medium transition-colors',
        active ? 'bg-[#192839] text-white' : 'text-[#6c849d] hover:text-[#192839]',
      ].join(' ')}
    >
      {children}
    </button>
  );
}

// ─── small UI atoms ──────────────────────────────────────────────────────

function Step({
  n,
  title,
  hint,
  children,
  last,
}: {
  n: number;
  title: string;
  hint?: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section className={last ? '' : 'mb-5 pb-5 border-b border-[#eef1f6]'}>
      <h3 className="text-[12px] font-semibold uppercase tracking-wider text-[#6c849d] mb-2 flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#192839] text-white text-[10px]">
          {n}
        </span>
        {title}
      </h3>
      {hint && <p className="text-[11px] text-[#6c849d] mb-3 ml-[26px]">{hint}</p>}
      <div className="ml-[26px]">{children}</div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <label className="font-medium">{label}</label>
      {children}
    </div>
  );
}

function Radio<T extends string>({
  label,
  value,
  options,
  onChange,
  disabledOption,
  hint,
}: {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (v: T) => void;
  disabledOption?: T;
  hint?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <label className="font-medium">{label}</label>
        <div className="flex gap-1 bg-[#f5f7fa] rounded-md p-0.5 border border-[#e3eaf3]">
          {options.map((opt) => {
            const disabled = opt === disabledOption;
            const active = value === opt;
            return (
              <button
                key={opt}
                type="button"
                disabled={disabled}
                onClick={() => onChange(opt)}
                className={[
                  'px-2.5 py-1 text-[11px] rounded transition-colors capitalize',
                  active ? 'bg-white shadow-sm font-medium' : '',
                  disabled ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/60',
                ].join(' ')}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
      {hint && <p className="text-[11px] text-[#6c849d] mt-1">{hint}</p>}
    </div>
  );
}
