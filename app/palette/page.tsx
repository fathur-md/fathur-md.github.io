/* ─── Types ─── */
type SwatchToken = {
  id: string;
  token: string;
  role: string;
  lightHex: string;
  cssVar: string;
  group: string;
};

type FontScale = {
  tag: string;
  label: string;
  size: string;
  px: string;
  weight: string;
  lineHeight: string;
  tracking: string;
};

/* ─── Color Tokens ─── */
const tokens: SwatchToken[] = [
  /* Layout */
  {
    id: 'bg',
    token: '--background',
    role: 'Latar halaman',
    lightHex: '#F7F8FB',
    cssVar: 'var(--background)',
    group: 'Layout',
  },
  {
    id: 'surface',
    token: '--surface',
    role: 'Card / panel / modal',
    lightHex: '#EEF0F6',
    cssVar: 'var(--surface)',
    group: 'Layout',
  },
  {
    id: 'surface-hov',
    token: '--surface-hover',
    role: 'Card hover state',
    lightHex: '#E4E7F0',
    cssVar: 'var(--surface-hover)',
    group: 'Layout',
  },
  {
    id: 'border',
    token: '--border',
    role: 'Garis tepi / divider',
    lightHex: '#DDE0EA',
    cssVar: 'var(--border)',
    group: 'Layout',
  },
  /* Typography */
  {
    id: 'fg',
    token: '--foreground',
    role: 'Teks utama / heading',
    lightHex: '#1A1C23',
    cssVar: 'var(--foreground)',
    group: 'Typography',
  },
  {
    id: 'muted',
    token: '--muted',
    role: 'Teks pendukung',
    lightHex: '#6B7280',
    cssVar: 'var(--muted)',
    group: 'Typography',
  },
  /* Primary */
  {
    id: 'primary',
    token: '--primary',
    role: 'Aksen utama / CTA',
    lightHex: '#547E93',
    cssVar: 'var(--primary)',
    group: 'Primary',
  },
  {
    id: 'primary-hov',
    token: '--primary-hover',
    role: 'Hover tombol',
    lightHex: '#3F6175',
    cssVar: 'var(--primary-hover)',
    group: 'Primary',
  },
  {
    id: 'primary-fg',
    token: '--primary-fg',
    role: 'Teks di atas primary',
    lightHex: '#FFFFFF',
    cssVar: 'var(--primary-fg)',
    group: 'Primary',
  },
  {
    id: 'ring',
    token: '--ring',
    role: 'Focus ring input',
    lightHex: '#547E93',
    cssVar: 'var(--ring)',
    group: 'Primary',
  },
];

const tokenGroups = ['Layout', 'Typography', 'Primary'];

/* ─── Font Scale ─── */
const fontScale: FontScale[] = [
  {
    tag: 'h1',
    label: 'Display / Hero',
    size: 'clamp(2.25–3.75rem)',
    px: '36–60px',
    weight: '700',
    lineHeight: '1.08',
    tracking: '-0.03em',
  },
  {
    tag: 'h2',
    label: 'Section Title',
    size: 'clamp(1.75–2.75rem)',
    px: '28–44px',
    weight: '700',
    lineHeight: '1.10',
    tracking: '-0.025em',
  },
  {
    tag: 'h3',
    label: 'Sub-section',
    size: 'clamp(1.35–1.875rem)',
    px: '22–30px',
    weight: '600',
    lineHeight: '1.15',
    tracking: '-0.02em',
  },
  {
    tag: 'h4',
    label: 'Card Title',
    size: '1.25rem',
    px: '20px',
    weight: '600',
    lineHeight: '1.20',
    tracking: '-0.015em',
  },
  {
    tag: 'h5',
    label: 'Subheadline',
    size: '1.0625rem',
    px: '17px',
    weight: '600',
    lineHeight: '1.25',
    tracking: '-0.01em',
  },
  {
    tag: 'h6',
    label: 'Label / UI',
    size: '0.9375rem',
    px: '15px',
    weight: '600',
    lineHeight: '1.30',
    tracking: '-0.005em',
  },
  {
    tag: 'p',
    label: 'Body Text',
    size: '1.0625rem',
    px: '17px',
    weight: '400',
    lineHeight: '1.65',
    tracking: '-0.005em',
  },
  {
    tag: 'small',
    label: 'Caption / Footnote',
    size: '0.8125rem',
    px: '13px',
    weight: '400',
    lineHeight: '1.50',
    tracking: '0em',
  },
];

const sampleText: Record<string, string> = {
  h1: 'Fathurrahman Muhammad',
  h2: 'Publikasi & Penelitian',
  h3: 'Metodologi Riset Terbaru',
  h4: 'Jurnal Internasional 2024',
  h5: 'Computer Science · Universitas',
  h6: 'LIHAT SELENGKAPNYA',
  p: 'Saya adalah mahasiswa yang berfokus pada penelitian di bidang kecerdasan buatan dan pengembangan perangkat lunak modern.',
  small: 'Terakhir diperbarui: Juli 2026 · Bandung, Indonesia',
};

const tagStyle: Record<string, React.CSSProperties> = {
  h1: {
    fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
    fontWeight: 700,
    lineHeight: 1.08,
    letterSpacing: '-0.03em',
  },
  h2: {
    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
  },
  h3: {
    fontSize: 'clamp(1.35rem, 2.5vw, 1.875rem)',
    fontWeight: 600,
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '-0.015em',
  },
  h5: {
    fontSize: '1.0625rem',
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: '-0.01em',
  },
  h6: {
    fontSize: '0.9375rem',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.005em',
    textTransform: 'uppercase' as const,
  },
  p: {
    fontSize: '1.0625rem',
    fontWeight: 400,
    lineHeight: 1.65,
    letterSpacing: '-0.005em',
  },
  small: {
    fontSize: '0.8125rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
};

/* ─── Section Divider ─── */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p
    className="mb-4 pb-2 text-xs font-bold tracking-widest uppercase"
    style={{
      color: 'var(--foreground)',
      opacity: 0.4,
      borderBottom:
        '1px solid color-mix(in srgb, var(--foreground) 15%, transparent)',
    }}
  >
    {children}
  </p>
);

/* ─── Component ─── */
export default function PalettePage() {
  return (
    <section className="flex flex-col items-center px-6 py-20">
      <div className="flex w-full max-w-4xl flex-col gap-16">
        {/* ══ HEADING ══ */}
        <div className="text-center">
          <p
            className="mb-3 text-xs font-bold tracking-widest uppercase"
            style={{ color: 'var(--primary)' }}
          >
            Design System Preview
          </p>
          <h1 style={{ color: 'var(--foreground)' }}>Hello There</h1>
          <p style={{ color: 'var(--muted)' }}>
            Semua token warna &amp; skala tipografi aktif ditampilkan di bawah.
          </p>
        </div>

        {/* ══ COLOR PALETTE ══ */}
        <div>
          <SectionLabel>Color Palette — 10 Token</SectionLabel>

          {tokenGroups.map((group) => {
            const groupTokens = tokens.filter((t) => t.group === group);
            return (
              <div key={group} className="mb-8">
                <p
                  className="mb-3 text-xs font-semibold tracking-widest uppercase"
                  style={{ color: 'var(--muted)' }}
                >
                  {group}
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {groupTokens.map((t) => (
                    <div
                      key={t.id}
                      className="overflow-hidden rounded-xl"
                      style={{
                        border:
                          '1px solid color-mix(in srgb, var(--foreground) 12%, transparent)',
                      }}
                    >
                      <div
                        className="h-14 w-full"
                        style={{ background: t.cssVar }}
                      />
                      <div
                        className="p-2.5"
                        style={{ background: 'var(--surface)' }}
                      >
                        <p
                          className="truncate font-mono text-xs font-semibold"
                          style={{
                            color: 'var(--foreground)',
                            fontSize: '0.68rem',
                          }}
                        >
                          {t.token}
                        </p>
                        <p
                          style={{
                            color: 'var(--muted)',
                            fontSize: '0.6rem',
                            marginBottom: '0.3rem',
                            lineHeight: 1.4,
                          }}
                        >
                          {t.role}
                        </p>
                        <div className="flex flex-col gap-0.5">
                          <span
                            className="font-mono"
                            style={{
                              color: 'var(--primary)',
                              fontSize: '0.62rem',
                            }}
                          >
                            ☀ {t.lightHex}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ══ FONT SCALE ══ */}
        <div>
          <SectionLabel>Typography Scale — Inter (Apple-like)</SectionLabel>

          <div className="flex flex-col gap-1">
            {fontScale.map((f) => (
              <div
                key={f.tag}
                className="rounded-xl px-5 py-4"
                style={{
                  background: 'var(--surface)',
                  border:
                    '1px solid color-mix(in srgb, var(--foreground) 8%, transparent)',
                }}
              >
                <div className="mb-2 flex flex-wrap items-start justify-between gap-4">
                  {/* Tag badge */}
                  <div className="flex shrink-0 items-center gap-2">
                    <span
                      className="rounded px-1.5 py-0.5 font-mono font-bold"
                      style={{
                        background:
                          'color-mix(in srgb, var(--primary) 15%, transparent)',
                        color: 'var(--primary)',
                        fontSize: '0.7rem',
                      }}
                    >
                      &lt;{f.tag}&gt;
                    </span>
                    <span
                      style={{ color: 'var(--muted)', fontSize: '0.72rem' }}
                    >
                      {f.label}
                    </span>
                  </div>

                  {/* Specs row */}
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'size', val: f.px },
                      { label: 'weight', val: f.weight },
                      { label: 'leading', val: f.lineHeight },
                      { label: 'tracking', val: f.tracking },
                    ].map((spec) => (
                      <div key={spec.label} className="flex flex-col items-end">
                        <span
                          style={{
                            color: 'var(--muted)',
                            fontSize: '0.6rem',
                            lineHeight: 1.2,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                          }}
                        >
                          {spec.label}
                        </span>
                        <span
                          className="font-mono font-semibold"
                          style={{
                            color: 'var(--foreground)',
                            fontSize: '0.72rem',
                          }}
                        >
                          {spec.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live specimen */}
                <p
                  style={{
                    ...tagStyle[f.tag],
                    color: 'var(--foreground)',
                    fontFamily: 'var(--font-sans)',
                    margin: 0,
                    wordBreak: 'break-word',
                  }}
                >
                  {sampleText[f.tag]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ FONT FAMILY ══ */}
        <div>
          <SectionLabel>Font Family Preview</SectionLabel>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                name: 'Inter',
                var: '--font-inter',
                tag: '--font-sans',
                desc: 'Font utama · System-like',
              },
              {
                name: 'Nunito',
                var: '--font-nunito',
                tag: '--font-round',
                desc: 'Rounded · Alternatif',
              },
              {
                name: 'Borel',
                var: '--font-borel',
                tag: '--font-borel',
                desc: 'Display · Dekoratif',
              },
            ].map((f) => (
              <div
                key={f.name}
                className="flex flex-col gap-3 rounded-2xl p-5"
                style={{
                  background: 'var(--surface)',
                  border:
                    '1.5px solid color-mix(in srgb, var(--foreground) 10%, transparent)',
                }}
              >
                <div>
                  <p
                    className="font-mono text-xs"
                    style={{ color: 'var(--muted)', marginBottom: '0.15rem' }}
                  >
                    {f.tag}
                  </p>
                  <p
                    className="font-semibold"
                    style={{
                      color: 'var(--foreground)',
                      fontFamily: `var(${f.var})`,
                      fontSize: '1.1rem',
                    }}
                  >
                    {f.name}
                  </p>
                  <p style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>
                    {f.desc}
                  </p>
                </div>
                <hr
                  style={{
                    border: 'none',
                    borderTop:
                      '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)',
                  }}
                />
                <p
                  style={{
                    fontFamily: `var(${f.var})`,
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--foreground)',
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Aa Bb Cc Dd
                </p>
                <p
                  style={{
                    fontFamily: `var(${f.var})`,
                    fontSize: '0.85rem',
                    color: 'var(--muted)',
                    lineHeight: 1.6,
                  }}
                >
                  The quick brown fox jumps over the lazy dog.
                </p>
                <p
                  className="font-mono"
                  style={{
                    fontFamily: `var(${f.var})`,
                    fontSize: '0.65rem',
                    color: 'var(--foreground)',
                    opacity: 0.3,
                    letterSpacing: '0.04em',
                  }}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ 0–9
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// End of file
