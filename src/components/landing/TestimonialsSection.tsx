import { useLanguage } from '@/i18n/LanguageContext';
import { Quote } from 'lucide-react';

const testimonialKeys = ['1', '2', '3', '4'];

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-muted">
      <div className="container-blog">
        <h2 className="section-title text-center text-3xl md:text-4xl font-serif">
          {t('testimonials.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialKeys.map((key) => (
            <div key={key} className="bg-card border border-border rounded-lg p-6 space-y-4">
              <Quote className="h-6 w-6 text-muted-foreground" />
              <p className="text-foreground leading-relaxed italic">
                "{t(`testimonial.${key}.text`)}"
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div>
                  <p className="font-semibold text-foreground">
                    {t(`testimonial.${key}.name`)}, {t(`testimonial.${key}.country`)}
                  </p>
                  <p className="text-xs text-muted-foreground">{t(`testimonial.${key}.goal`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
