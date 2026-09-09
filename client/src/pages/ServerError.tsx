import { Home, RotateCcw } from "lucide-react";
import { ErrorPage } from "@/components/ErrorPage";
import { useLang } from "@/hooks/useLang";

export default function ServerError() {
  const [lang, setLang, t] = useLang();

  return (
    <ErrorPage
      lang={lang}
      setLang={setLang}
      t={t}
      code={t.errorPage.serverError.code}
      title={t.errorPage.serverError.title}
      description={t.errorPage.serverError.description}
      primaryAction={{ label: t.errorPage.reload, onClick: () => window.location.reload(), icon: RotateCcw }}
      secondaryAction={{ label: t.errorPage.backHome, onClick: () => window.location.assign("/"), icon: Home }}
    />
  );
}
