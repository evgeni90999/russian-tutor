import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import type { Lang } from '@/i18n/translations';
import ThemeToggle from './ThemeToggle';

const langs: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
  { code: 'cn', label: 'CN', flag: '🇨🇳' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
];

const navAnchors = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.pricing', href: '#pricing' },
  { key: 'nav.faq', href: '#faq' },
  { key: 'nav.contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const scrollTo = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background/95 backdrop-blur border-b border-border sticky top-0 z-50">
      <div className="container-blog">
        <div className="flex items-center justify-between h-16">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold text-foreground font-serif">
            Ivan | РКИ
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navAnchors.map(({ key, href }) => (
              <button
                key={key}
                onClick={() => scrollTo(href)}
                className="nav-link"
              >
                {t(key)}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-2">
            {/* Language switcher */}
            <div className="flex items-center border border-border rounded-md overflow-hidden">
              {langs.map(({ code, label, flag }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2 py-1 text-xs font-medium transition-colors ${
                    lang === code
                      ? 'bg-foreground text-background'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-label={`Switch to ${label}`}
                >
                  {flag} {label}
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              {navAnchors.map(({ key, href }) => (
                <button
                  key={key}
                  onClick={() => scrollTo(href)}
                  className="nav-link text-left"
                >
                  {t(key)}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2 pt-2">
              {langs.map(({ code, label, flag }) => (
                <button
                  key={code}
                  onClick={() => { setLang(code); setIsMenuOpen(false); }}
                  className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                    lang === code
                      ? 'bg-foreground text-background'
                      : 'text-muted-foreground hover:text-foreground border border-border'
                  }`}
                >
                  {flag} {label}
                </button>
              ))}
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
