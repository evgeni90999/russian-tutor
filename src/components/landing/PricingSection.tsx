import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  { key: 'single', priceUsd: 25, priceEur: 23, priceCny: 180, lessons: 1, badge: null },
  { key: 'pack5', priceUsd: 112, priceEur: 103, priceCny: 810, lessons: 5, badge: 'pricing.pack5_save' },
  { key: 'pack10', priceUsd: 212, priceEur: 195, priceCny: 1530, lessons: 10, badge: 'pricing.pack10_save' },
];

const PricingSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container-blog">
        <h2 className="section-title text-center text-3xl md:text-4xl font-serif">
          {t('pricing.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
          {plans.map(({ key, priceUsd, priceEur, priceCny, lessons, badge }) => (
            <div
              key={key}
              className={`bg-card border rounded-lg p-8 text-center relative ${
                key === 'pack10' ? 'border-foreground shadow-md' : 'border-border'
              }`}
            >
              {badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-bold px-3 py-1 rounded-full">
                  {t(badge)}
                </span>
              )}
              <h3 className="font-semibold text-foreground mb-4">{t(`pricing.${key}`)}</h3>
              <div className="space-y-1 mb-6">
                <p className="text-3xl font-bold text-foreground">${priceUsd}</p>
                <p className="text-sm text-muted-foreground">€{priceEur} / ¥{priceCny}</p>
                {lessons > 1 && (
                  <p className="text-xs text-muted-foreground">
                    ${(priceUsd / lessons).toFixed(0)} {t('pricing.per_lesson')}
                  </p>
                )}
              </div>
              <Button onClick={scrollToContact} className="w-full">
                {t('pricing.cta')}
              </Button>
            </div>
          ))}
        </div>
        <div className="bg-muted border border-border rounded-lg p-6 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-foreground">
            <Check className="h-5 w-5" />
            <p className="text-sm font-medium">{t('pricing.note')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
