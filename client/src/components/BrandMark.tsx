export function BrandMark({ light = false, aria }: { light?: boolean; aria: string }) {
  return (
    <a className={`brand-mark ${light ? "brand-mark-light" : ""}`} href="/" aria-label={aria}>
      <span className="brand-symbol" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand-name">PROGRESSO</span>
    </a>
  );
}
