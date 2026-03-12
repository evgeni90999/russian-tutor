import { useLanguage } from '@/i18n/LanguageContext';

const flags = [
  { key: 'english', emoji: '🇺🇸🇬🇧' },
  { key: 'polish', emoji: '🇵🇱' },
  { key: 'chinese', emoji: '🇨🇳' },
];

const ForWhomSection = () => {
  const { t } = useLanguage();

  return (
    <section id="for-whom" className="py-20 bg-muted">
      <div className="container-blog">
        <h2 className="section-title text-center text-3xl md:text-4xl font-serif">
          {t('forwhom.title')}
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          {t('forwhom.description')}
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {flags.map(({ key, emoji }) => (
            <div
              key={key}
              className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-5xl block mb-4">{emoji}</span>
              <h3 className="text-lg font-semibold text-foreground">
                {t(`forwhom.${key}`)}
              </h3>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          🇪🇸 {t('forwhom.spanish_note')}
        </p>
      </div>
    </section>
  );
};

export default ForWhomSection;
