import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-background">
      <div className="container-blog grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-serif">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-4 font-serif italic">
              {t('hero.subtitle')}
            </p>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            {t('hero.description')}
          </p>
          <Button
            size="lg"
            className="text-base px-8 py-6 font-semibold"
            onClick={scrollToContact}
          >
            {t('hero.cta')}
          </Button>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] bg-muted rounded-lg border border-border flex items-center justify-center">
            <div className="text-center text-muted-foreground space-y-2">
              <div className="w-20 h-20 mx-auto bg-accent rounded-full flex items-center justify-center">
                <span className="text-3xl">📸</span>
              </div>
              <p className="text-sm">Photo placeholder</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => document.getElementById('for-whom')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default HeroSection;
