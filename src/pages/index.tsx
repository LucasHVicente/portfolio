import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { Landing } from '../components/Landing';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Header } from '../components/common/Header';
import { Section } from '../components/common/Section';

export default function Home() {
  const sections = [
    {
      label: 'Sobre',
      url: 'about',
      Component: About,
    },
    {
      label: 'Habilidades',
      url: 'skills',
      Component: Skills,
    },
    {
      label: 'Experências',
      url: 'experience',
      Component: Experience,
    },
    {
      label: 'Projetos',
      url: 'projects',
      Component: Projects,
    },
    {
      label: 'Contato',
      url: 'contact',
      Component: Contact,
    },
  ];

  return (
    <div className="bg-bg-dark text-gray-300">
      <Header links={sections} />

      <Landing />

      {sections.map(({ url, Component }) => (
        <Section key={url} id={url}>
          <Component />
        </Section>
      ))}
    </div>
  );
}
