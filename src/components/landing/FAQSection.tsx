import { useLanguage } from '@/i18n/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqKeys = ['1', '2', '3', '4'];

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container-blog">
        <h2 className="section-title text-center text-3xl md:text-4xl font-serif">
          {t('faq.title')}
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqKeys.map((key) => (
              <AccordionItem key={key} value={`faq-${key}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-foreground font-medium">
                  {t(`faq.q${key}`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t(`faq.a${key}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
