import { About } from '../components/About';
import { Landing } from '../components/Landing';

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
            label: 'Experência',
            url: '#experience',
          },
          {
            label: 'Projetos',
            url: '#projects',
          },
          {
            label: 'Contact',
            url: '#contato',
          },
        ]}
      />
      <section>
        <Landing />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">experience section</section>
      <section id="projects">projects section</section>
      <section id="contacts">contacts section</section>
    </div>
  );
}
