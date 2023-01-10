import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { Landing } from '../components/Landing';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

import { Header } from '../components/common/Header';

export default function Home() {
  return (
    <div className="bg-bg-dark text-gray-300">
      <Header
        links={[
          {
            label: 'Sobre',
            url: '#about',
          },
          {
            label: 'Habilidades',
            url: '#skills',
          },
          {
            label: 'Experência',
            url: '#experience',
          },
          {
            label: 'Projetos',
            url: '#projects',
          },
          {
            label: 'Contato',
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
