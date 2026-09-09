import { ArrowLeft, Home } from "lucide-react";
import { useLocation } from "wouter";
import { ErrorPage } from "@/components/ErrorPage";
import { useLang } from "@/hooks/useLang";

export default function NotFound() {
  const [lang, setLang, t] = useLang();
  const [, setLocation] = useLocation();

  return (
    <ErrorPage
      lang={lang}
      setLang={setLang}
      t={t}
      code={t.errorPage.notFound.code}
      title={t.errorPage.notFound.title}
      description={t.errorPage.notFound.description}
      primaryAction={{ label: t.errorPage.backHome, onClick: () => setLocation("/"), icon: Home }}
      secondaryAction={{ label: t.errorPage.goBack, onClick: () => window.history.back(), icon: ArrowLeft }}
    />
  );
}
