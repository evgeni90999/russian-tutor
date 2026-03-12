import { useLanguage } from '@/i18n/LanguageContext';
import { GraduationCap, Award, Users } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, key: 'about.stat_experience' },
    { icon: GraduationCap, key: 'about.stat_education' },
    { icon: Users, key: 'about.stat_students' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-blog">
        <h2 className="section-title text-center text-3xl md:text-4xl font-serif">
          {t('about.title')}
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-video w-full rounded-lg border border-border overflow-hidden bg-muted">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/6aK6v_Qnb-c?si=q7c9kGHk3NGM1FKn"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              {t('about.text')}
            </p>
            <p className="text-muted-foreground leading-relaxed italic border-l-4 border-border pl-4">
              {t('about.personal')}
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map(({ icon: Icon, key }) => (
                <div key={key} className="text-center p-4 bg-muted rounded-lg">
                  <Icon className="h-6 w-6 mx-auto mb-2 text-foreground" />
                  <p className="text-sm font-semibold text-foreground">{t(key)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
