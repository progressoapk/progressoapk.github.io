import { ArrowLeft, Languages, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { BrandMark } from "@/components/BrandMark";
import { usePageMeta } from "@/hooks/useLang";
import type { Lang, Translations } from "@/lib/translations";

interface ErrorPageProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  code: string;
  title: string;
  description: string;
  primaryAction: { label: string; onClick: () => void; icon?: LucideIcon };
  secondaryAction?: { label: string; onClick: () => void; icon?: LucideIcon };
  children?: ReactNode;
}

export function ErrorPage({ lang, setLang, t, code, title, description, primaryAction, secondaryAction, children }: ErrorPageProps) {
  usePageMeta(`${code} — ${title} · Progresso`, description, t.meta.ogLocale);

  const PrimaryIcon = primaryAction.icon;
  const SecondaryIcon = secondaryAction?.icon;

  return (
    <div className="error-shell">
      <header className="error-header">
        <div className="site-container error-header-inner">
          <BrandMark light aria={t.nav.brandAria} />
          <button className="lang-toggle" onClick={() => setLang(lang === "pt" ? "en" : "pt")} aria-label="Switch language">
            <Languages size={14} /> {t.html.langSwitchLabel}
          </button>
        </div>
      </header>
      <main className="error-main">
        <div className="error-content">
          <span className="error-code">{code}</span>
          <h1 className="error-title">{title}</h1>
          <p className="error-description">{description}</p>
          <div className="error-actions">
            <button className="button button-primary" onClick={primaryAction.onClick}>
              {primaryAction.label} {PrimaryIcon ? <PrimaryIcon size={17} /> : null}
            </button>
            {secondaryAction ? (
              <button className="text-button text-button-light" onClick={secondaryAction.onClick}>
                {SecondaryIcon ? <SecondaryIcon size={16} /> : <ArrowLeft size={16} />} {secondaryAction.label}
              </button>
            ) : null}
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
