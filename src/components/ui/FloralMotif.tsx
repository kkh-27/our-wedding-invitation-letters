type FloralMotifProps = {
  className?: string;
  variant?: "botanical" | "corner" | "watercolor" | "wreath";
};

type BloomProps = {
  className?: string;
  scale?: number;
  x: number;
  y: number;
};

function WatercolorBloom({ x, y, scale = 1, className = "" }: BloomProps) {
  return (
    <g className={className} transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse className="watercolor-petal watercolor-petal--blue" cx="0" cy="-10" rx="7" ry="12" />
      <ellipse className="watercolor-petal watercolor-petal--ivory" cx="9" cy="-4" rx="7" ry="12" transform="rotate(58 9 -4)" />
      <ellipse className="watercolor-petal watercolor-petal--rose" cx="6" cy="7" rx="7" ry="12" transform="rotate(125 6 7)" />
      <ellipse className="watercolor-petal watercolor-petal--blue" cx="-6" cy="7" rx="7" ry="12" transform="rotate(55 -6 7)" />
      <ellipse className="watercolor-petal watercolor-petal--ivory" cx="-9" cy="-4" rx="7" ry="12" transform="rotate(122 -9 -4)" />
      <circle className="watercolor-center" cx="0" cy="0" r="4" />
    </g>
  );
}

export function FloralMotif({
  className = "",
  variant = "botanical",
}: FloralMotifProps) {
  return (
    <svg
      aria-hidden="true"
      className={`floral-motif floral-motif--${variant} ${className}`.trim()}
      fill="none"
      focusable="false"
      height={180}
      viewBox="0 0 180 180"
      width={180}
    >
      {variant === "watercolor" ? (
        <g className="watercolor-stems" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 170c18-29 32-52 54-72 21-19 42-30 71-40" />
          <path d="M51 127c-13-14-28-19-46-15 6 18 20 27 43 27" />
          <path d="M69 110c-1-17 5-30 19-39 7 14 4 28-8 39" />
          <path d="M105 80c-8-15-7-28 3-40 12 13 13 27 3 41" />
          <path d="M123 68c4-16 14-25 31-27 0 17-9 28-27 32" />
          <path d="M34 149c-1-13 4-23 16-30 6 12 4 23-6 32" />
          <path d="M77 103c-9 11-20 17-33 19" />
        </g>
      ) : variant === "wreath" ? (
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M89 158C48 151 27 119 31 81c3-30 22-52 49-61" />
          <path d="M91 158c41-7 62-39 58-77-3-30-22-52-49-61" />
          <path d="M48 126c-15-2-24-10-26-24 14 1 23 9 26 24Z" />
          <path d="M39 99c-14-6-20-16-17-30 13 5 20 15 17 30Z" />
          <path d="M47 69c-10-10-11-22-3-34 10 10 11 21 3 34Z" />
          <path d="M66 48c-5-14-2-25 10-34 5 14 2 25-10 34Z" />
          <path d="M131 126c15-2 24-10 26-24-14 1-23 9-26 24Z" />
          <path d="M140 99c14-6 20-16 17-30-13 5-20 15-17 30Z" />
          <path d="M132 69c10-10 11-22 3-34-10 10-11 21-3 34Z" />
          <path d="M113 48c5-14 2-25-10-34-5 14-2 25 10 34Z" />
          <path d="M89 159c-8-7-10-15-5-24 8 7 10 15 5 24Z" />
          <path d="M91 159c8-7 10-15 5-24-8 7-10 15-5 24Z" />
        </g>
      ) : (
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M92 169c-5-34-2-63 9-87 7-15 19-28 37-39" />
          <path d="M100 125c-17-16-34-19-51-12 8 19 24 28 48 26Z" />
          <path d="M109 101c-1-21 7-37 24-49 8 18 4 34-12 49Z" />
          <path d="M91 148c-11-12-25-17-41-15 5 17 17 26 38 27Z" />
          <path d="M84 160c-12-16-26-27-44-33" />
          <path d="M139 42c-6-8-6-16 0-24 7 8 7 16 0 24Z" />
          <path d="M139 42c-11 1-17-4-19-14 10 1 16 6 19 14Z" />
          <path d="M139 42c2-10 8-15 18-15-2 10-8 15-18 15Z" />
          <path d="M139 42c10 4 14 11 11 20-9-5-13-11-11-20Z" />
          <path d="M139 42c-7 8-15 10-23 5 7-8 15-10 23-5Z" />
          <circle cx="139" cy="42" r="3" />
        </g>
      )}

      {variant === "watercolor" && (
        <>
          <g className="watercolor-leaves">
            <path d="M48 129c-13-9-25-10-37-3 10 12 22 16 36 11Z" />
            <path d="M82 101c-8-12-9-23-2-34 10 10 12 21 6 34Z" />
            <path d="M109 74c-10-9-14-19-10-31 12 7 16 17 12 30Z" />
          </g>
          <WatercolorBloom className="watercolor-bloom" x={145} y={38} scale={0.78} />
          <WatercolorBloom className="watercolor-bloom" x={101} y={67} scale={1.05} />
          <WatercolorBloom className="watercolor-bloom" x={57} y={112} scale={0.7} />
        </>
      )}
    </svg>
  );
}
