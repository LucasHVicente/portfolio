import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { Landing } from '../components/Landing';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

import { Header } from '../components/common/Header';
import { useTranslation } from '../hooks/useTranslation';

export default function Home() {
  const { translation } = useTranslation();

  return (
    <div className="bg-bg-dark text-gray-300">
      <Header
        links={[
          {
            label: translation.about.link,
            url: '#about',
          },
          {
            label: translation.skills.link,
            url: '#skills',
          },
          {
            label: translation.experience.link,
            url: '#experience',
          },
          {
            label: translation.projects.link,
            url: '#projects',
          },
          {
            label: translation.contact.link,
            url: '#contact',
          },
        ]}
      />
      <section>
        <Landing />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
