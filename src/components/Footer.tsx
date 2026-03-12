import { useLanguage } from '@/i18n/LanguageContext';
import type { Lang } from '@/i18n/translations';

const langs: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
  { code: 'cn', label: 'CN', flag: '🇨🇳' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
];

const Footer = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="bg-muted border-t border-border" role="contentinfo">
      <div className="container-blog py-12">
        <div className="text-center mb-8">
          <p className="text-lg font-semibold text-foreground">{t('footer.reminder')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold text-foreground font-serif mb-2">Ivan | РКИ</h2>
            <p className="text-sm text-muted-foreground">Russian as a Foreign Language</p>
          </div>

          <div className="text-center">
            <p className="text-sm font-medium text-foreground mb-3">{t('footer.social')}</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">YouTube</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Telegram</a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="inline-flex items-center border border-border rounded-md overflow-hidden mb-3">
              {langs.map(({ code, label, flag }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2 py-1 text-xs font-medium transition-colors ${
                    lang === code
                      ? 'bg-foreground text-background'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {flag} {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
