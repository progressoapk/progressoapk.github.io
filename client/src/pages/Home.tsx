import {
  ArrowDownToLine,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  CloudOff,
  Euro,
  Globe2,
  Languages,
  LockKeyhole,
  Menu,
  MoreHorizontal,
  Play,
  RefreshCw,
  ShieldCheck,
  TimerReset,
  UserRound,
  Video,
  WifiOff,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import { BrandMark } from "@/components/BrandMark";
import { useLang, usePageMeta } from "@/hooks/useLang";
import { translations } from "@/lib/translations";

// Update this link whenever a new APK build is uploaded to Google Drive.
const ANDROID_APK_URL =
  "https://drive.google.com/file/d/12DySdqHMtwtxPi9d_OUWbWUcMqVdtxxA/view";

const featureIcons: LucideIcon[] = [
  Clock3,
  CalendarDays,
  TimerReset,
  Euro,
  MoreHorizontal,
  Video,
  UserRound,
  LockKeyhole,
  WifiOff,
  RefreshCw,
];

const highlightIcons: LucideIcon[] = [Video, Globe2, CloudOff];

function PhoneMockup({ t }: { t: (typeof translations)["pt"] }) {
  return (
    <div className="phone-stage" aria-label={t.phone.aria}>
      <div className="phone-glow" />
      <div className="phone-shadow" />
      <div className="phone-shell">
        <div className="phone-screen">
          <div className="phone-status"><span>09:41</span><span>● ● ▰</span></div>
          <div className="phone-topline">
            <div><span className="tiny-overline">{t.phone.greeting}</span><strong>{t.phone.subGreeting}</strong></div>
            <span className="profile-dot"><UserRound size={14} /></span>
          </div>
          <div className="status-card">
            <div className="status-card-head"><span className="live-dot" /> {t.phone.todayShift} <span className="status-pill">{t.phone.statusUpcoming}</span></div>
            <div className="status-time">08:00 <span>—</span> 17:00</div>
            <div className="status-place"><span className="mini-pin">⌖</span> {t.phone.place}</div>
            <button className="punch-button"><span className="punch-icon"><Clock3 size={15} /></span> {t.phone.startShift}</button>
          </div>
          <div className="phone-section-title"><strong>{t.phone.upcomingShifts}</strong><span>{t.phone.viewCalendar}</span></div>
          <div className="mini-calendar">
            <div className="mini-calendar-head">{t.phone.weekdays.map((day) => <span key={day}>{day}</span>)}</div>
            <div className="mini-calendar-row"><span>09</span><span>10</span><span className="today">11</span><span>12</span><span>13</span></div>
          </div>
          <div className="next-shift"><div className="next-shift-icon"><CalendarDays size={15} /></div><div><strong>{t.phone.publishedShift}</strong><span>{t.phone.tomorrowShift}</span></div><ArrowRight size={14} /></div>
          <div className="phone-nav"><span className="active"><CalendarDays size={15} />{t.phone.navHome}</span><span><Clock3 size={15} />{t.phone.navHours}</span><span><UserRound size={15} />{t.phone.navProfile}</span></div>
        </div>
      </div>
      <div className="float-card float-card-check"><span className="float-icon green"><Check size={16} /></span><div><strong>{t.phone.checkConfirmed}</strong><span>{t.phone.locationVerified}</span></div></div>
      <div className="float-card float-card-sync"><span className="float-icon yellow"><RefreshCw size={15} /></span><div><strong>{t.phone.synced}</strong><span>{t.phone.justNow}</span></div></div>
    </div>
  );
}

function DownloadModal({ onClose, t }: { onClose: () => void; t: (typeof translations)["pt"] }) {
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="download-modal" role="dialog" aria-modal="true" aria-labelledby="download-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label={t.modal.close}><X size={18} /></button>
        <div className="modal-icon"><ArrowDownToLine size={22} /></div>
        <span className="eyebrow">{t.modal.eyebrow}</span>
        <h2 id="download-title">{t.modal.title}</h2>
        <p>{t.modal.description}</p>
        <div className="store-options">
          <a className="store-button" href={ANDROID_APK_URL} target="_blank" rel="noopener noreferrer" onClick={onClose}><span className="store-logo play-logo"><Play size={14} fill="currentColor" /></span><span><small>{t.modal.androidLabel}</small><strong>{t.modal.androidCta}</strong></span><ArrowRight size={16} /></a>
          <button className="store-button store-button-disabled" onClick={onClose} disabled aria-disabled="true"><span className="store-logo"></span><span><small>{t.modal.soonOn}</small><strong>{t.modal.appStore}</strong></span><ArrowRight size={16} /></button>
        </div>
        <p className="modal-footnote"><ShieldCheck size={14} /> {t.modal.footnote}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [lang, setLang, t] = useLang();
  usePageMeta(t.meta.title, t.meta.description, t.meta.ogLocale);

  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("is-scrolled", window.scrollY > 18);
    };
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
    };
  }, []);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = () => setLang(lang === "pt" ? "en" : "pt");

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="site-container nav-inner">
          <BrandMark aria={t.nav.brandAria} />
          <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`} aria-label={t.nav.features}>
            <button onClick={() => goTo("#funcionalidades")}>{t.nav.features}</button>
            <button onClick={() => goTo("#como-funciona")}>{t.nav.howItWorks}</button>
            <button onClick={() => goTo("#seguranca")}>{t.nav.security}</button>
            <button onClick={() => goTo("#faq")}>{t.nav.faq}</button>
            <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
              <Languages size={14} /> {t.html.langSwitchLabel}
            </button>
            <button className="nav-download" onClick={() => { setMenuOpen(false); setDownloadOpen(true); }}><ArrowDownToLine size={15} /> {t.nav.download}</button>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-texture" />
          <div className="hero-grid-lines" />
          <div className="site-container hero-grid">
            <div className="hero-copy" data-reveal>
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {t.hero.eyebrow}</div>
              <h1 id="hero-title">{t.hero.titleLine1}<br /><em>{t.hero.titleLine2}</em></h1>
              <p className="hero-description">{t.hero.description}</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => setDownloadOpen(true)}>{t.hero.ctaDownload} <ArrowDownToLine size={17} /></button>
                <button className="text-button text-button-light" onClick={() => goTo("#como-funciona")}><span className="play-circle"><Play size={11} fill="currentColor" /></span> {t.hero.ctaHowItWorks}</button>
              </div>
              <div className="hero-note"><ShieldCheck size={16} /><span>{t.hero.note}</span></div>
            </div>
            <div className="hero-visual-wrap" data-reveal>
              <PhoneMockup t={t} />
            </div>
          </div>
          <div className="hero-bottom-note"><span>{t.hero.tagline}</span><span className="scroll-cue"><span /> {t.hero.scrollCue}</span></div>
        </section>

        <section className="trust-strip">
          <div className="site-container trust-grid">
            {t.trust.map((item) => (
              <div className="trust-item" key={item.number}><span className="trust-number">{item.number}</span><div><strong>{item.title}</strong><span>{item.description}</span></div></div>
            ))}
          </div>
        </section>

        <section className="intro-section section-light" id="funcionalidades">
          <div className="site-container">
            <div className="section-heading split-heading" data-reveal>
              <div><div className="eyebrow"><span className="eyebrow-line dark" /> {t.intro.eyebrow}</div><h2>{t.intro.titleLine1}<br /><em>{t.intro.titleLine2}</em></h2></div>
              <p>{t.intro.description}</p>
            </div>
            <div className="feature-grid">
              {t.features.map((feature, index) => {
                const Icon = featureIcons[index];
                return <article className="feature-card" key={feature.title} data-reveal style={{ "--delay": `${(index % 5) * 55}ms` } as CSSProperties}>
                  <div className="feature-topline"><span className="feature-tag">{feature.tag}</span><span className="feature-index">{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="feature-icon"><Icon size={21} strokeWidth={1.7} /></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                  <span className="card-arrow"><ArrowRight size={16} /></span>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="workflow-section" id="como-funciona">
          <div className="site-container">
            <div className="workflow-intro" data-reveal><div><div className="eyebrow"><span className="eyebrow-line dark" /> {t.workflow.eyebrow}</div><h2>{t.workflow.titleLine1}<br /><em>{t.workflow.titleLine2}</em></h2></div><p>{t.workflow.description}</p></div>
            <div className="workflow-layout">
              <div className="schedule-panel" data-reveal>
                <div className="schedule-panel-head"><div><span className="tiny-overline">{t.workflow.scheduleLabel}</span><strong>{t.workflow.scheduleMonth}</strong></div><span className="published-pill"><span /> {t.workflow.publishedPill}</span></div>
                <div className="calendar-week">{t.workflow.weekdaysShort.map((day) => <span key={day}>{day}</span>)}</div>
                <div className="calendar-days">
                  {[31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3].map((day, index) => <span key={`${day}-${index}`} className={`${index === 12 ? "calendar-today" : ""} ${index === 3 || index === 10 || index === 17 || index === 25 ? "has-shift" : ""} ${index === 0 || index > 30 ? "muted-day" : ""}`}>{day}</span>)}
                </div>
                <div className="calendar-legend"><span><i className="legend-dot shift-dot" /> {t.workflow.legendShift}</span><span><i className="legend-dot today-dot" /> {t.workflow.legendToday}</span></div>
              </div>
              <div className="workflow-copy" data-reveal>
                <span className="workflow-quote">“</span>
                <p className="large-copy">{t.workflow.quote}</p>
                <p>{t.workflow.paragraph}</p>
                <div className="workflow-steps">
                  {t.workflow.steps.map((step) => (
                    <div className="workflow-step" key={step.number}><span>{step.number}</span><div><strong>{step.title}</strong><p>{step.description}</p></div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="highlight-section" id="seguranca">
          <div className="site-container highlight-grid">
            <div className="highlight-copy" data-reveal><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {t.highlight.eyebrow}</div><h2>{t.highlight.titleLine1}<br /><em>{t.highlight.titleLine2}</em></h2><p>{t.highlight.description}</p><button className="text-button text-button-light" onClick={() => goTo("#faq")}>{t.highlight.linkText} <ArrowRight size={16} /></button></div>
            <div className="highlight-cards" data-reveal>
              {t.highlight.cards.map((card, index) => {
                const Icon = highlightIcons[index];
                return <article className="highlight-card" key={card.title}><div className="highlight-card-icon"><Icon size={19} /></div><span className="card-kicker">{card.kicker}</span><h3>{card.title}</h3><p>{card.description}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <div className="site-container privacy-panel" data-reveal>
            <div className="privacy-lock"><LockKeyhole size={23} /></div>
            <div className="privacy-copy"><div className="eyebrow"><span className="eyebrow-line dark" /> {t.privacy.eyebrow}</div><h2>{t.privacy.titleLine1}<br /><em>{t.privacy.titleLine2}</em></h2><p>{t.privacy.description}</p></div>
            <div className="privacy-list">{t.privacy.list.map((item) => <div key={item}><Check size={15} /><span>{item}</span></div>)}</div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="site-container faq-layout">
            <div className="faq-heading" data-reveal><div className="eyebrow"><span className="eyebrow-line dark" /> {t.faqSection.eyebrow}</div><h2>{t.faqSection.titleLine1}<br /><em>{t.faqSection.titleLine2}</em></h2><p>{t.faqSection.description}</p><button className="button button-outline" onClick={() => setDownloadOpen(true)}>{t.faqSection.cta} <ArrowDownToLine size={16} /></button></div>
            <div className="faq-list" data-reveal>{t.faqs.map((faq, index) => <div className={`faq-item ${activeFaq === index ? "faq-active" : ""}`} key={faq.question}><button className="faq-question" onClick={() => setActiveFaq(activeFaq === index ? null : index)} aria-expanded={activeFaq === index}><span>{faq.question}</span><ChevronDown size={18} /></button>{activeFaq === index && <div className="faq-answer"><p>{faq.answer}</p></div>}</div>)}</div>
          </div>
        </section>

        <section className="closing-section">
          <div className="site-container closing-panel" data-reveal><div className="closing-mark">P<span>R</span></div><div className="closing-copy"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {t.closing.eyebrow}</div><h2>{t.closing.titleLine1}<br /><em>{t.closing.titleLine2}</em></h2><p>{t.closing.description}</p></div><button className="button button-yellow" onClick={() => setDownloadOpen(true)}>{t.closing.cta} <ArrowDownToLine size={17} /></button></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-main"><div><BrandMark light aria={t.nav.brandAria} /><p className="footer-tagline">{t.footer.tagline}</p></div><div className="footer-links"><div><span className="footer-label">{t.footer.exploreLabel}</span><button onClick={() => goTo("#funcionalidades")}>{t.nav.features}</button><button onClick={() => goTo("#como-funciona")}>{t.nav.howItWorks}</button><button onClick={() => goTo("#faq")}>{t.nav.faq}</button></div><div><span className="footer-label">{t.footer.supportLabel}</span><a href="mailto:info@progresso-pt.de">info@progresso-pt.de</a><a href="https://progressopt.de/" target="_blank" rel="noreferrer">{t.footer.siteLink} <ArrowUpRight size={13} /></a></div></div></div>
        <div className="site-container footer-bottom"><span>© {new Date().getFullYear()} Progresso. {t.footer.rights}</span><span>{t.footer.builtFor}</span></div>
      </footer>

      {downloadOpen && <DownloadModal onClose={() => setDownloadOpen(false)} t={t} />}
    </div>
  );
}

function ArrowUpRight({ size = 16 }: { size?: number }) {
  return <ArrowRight size={size} style={{ transform: "rotate(-45deg)" }} />;
}
