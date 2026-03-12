import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const levels = ['a0', 'a1', 'a2', 'b1', 'b2', 'c1'];

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', level: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.level) {
      toast({ title: 'Please fill in all fields', variant: 'destructive' });
      return;
    }
    toast({ title: 'Thank you! I\'ll contact you within 24 hours.' });
    setForm({ name: '', email: '', level: '' });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container-blog">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center text-3xl md:text-4xl font-serif">
            {t('contact.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            {t('contact.subtitle')}
          </p>
          <div className="grid lg:grid-cols-5 gap-12">
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                  {t('contact.name')}
                </label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t('contact.name')}
                  maxLength={100}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                  {t('contact.email')}
                </label>
                <Input
                  id="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t('contact.email')}
                  maxLength={200}
                />
              </div>
              <div>
                <label htmlFor="level" className="text-sm font-medium text-foreground block mb-2">
                  {t('contact.level')}
                </label>
                <select
                  id="level"
                  value={form.level}
                  onChange={(e) => setForm({ ...form, level: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">{t('contact.level')}</option>
                  {levels.map((l) => (
                    <option key={l} value={l}>{t(`contact.level.${l}`)}</option>
                  ))}
                </select>
              </div>
              <Button type="submit" size="lg" className="w-full text-base font-semibold">
                <Send className="h-4 w-4 mr-2" />
                {t('contact.submit')}
              </Button>
            </form>

            <div className="lg:col-span-2 space-y-6">
              <p className="text-sm font-medium text-foreground">{t('contact.messengers')}</p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-accent transition-colors text-foreground"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-accent transition-colors text-foreground"
                >
                  <Send className="h-5 w-5" />
                  <span className="text-sm font-medium">Telegram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-accent transition-colors text-foreground"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">WeChat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
