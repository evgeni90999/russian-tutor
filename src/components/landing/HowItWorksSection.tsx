import { useLanguage } from '@/i18n/LanguageContext';
import { MessageSquare, BookOpen, Mic, ClipboardCheck } from 'lucide-react';

const steps = [
  { icon: MessageSquare, titleKey: 'how.warmup_title', timeKey: 'how.warmup_time', descKey: 'how.warmup_desc', color: 'bg-accent' },
  { icon: BookOpen, titleKey: 'how.new_title', timeKey: 'how.new_time', descKey: 'how.new_desc', color: 'bg-accent' },
  { icon: Mic, titleKey: 'how.practice_title', timeKey: 'how.practice_time', descKey: 'how.practice_desc', color: 'bg-accent' },
  { icon: ClipboardCheck, titleKey: 'how.feedback_title', timeKey: 'how.feedback_time', descKey: 'how.feedback_desc', color: 'bg-accent' },
];

const HowItWorksSection = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-20 bg-muted">
      <div className="container-blog">
        <h2 className="section-title text-center text-3xl md:text-4xl font-serif">
          {t('how.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map(({ icon: Icon, titleKey, timeKey, descKey, color }, i) => (
            <div key={titleKey} className="bg-card border border-border rounded-lg p-6 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center`}>
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  {t(timeKey)}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t(titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t(descKey)}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-muted-foreground">→</div>
              )}
            </div>
          ))}
        </div>
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <p className="text-muted-foreground">
            ✨ {t('how.bonus')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
