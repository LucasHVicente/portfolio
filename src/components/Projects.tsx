import { BsGithub } from 'react-icons/bs';
import { ProjectCard } from './common/ProjectCard';
import { useTranslation } from '../hooks/useTranslation';

export const Projects = () => {
  const { translation } = useTranslation();
  const projects = [
    {
      title: 'Pokédex React',
      description: translation.projects.descriptions.pokedexReact,
      live_url: 'https://lucashvicente.github.io/pokedex-react',
      code_repo: 'https://github.com/LucasHVicente/pokedex-react',
    },
    {
      title: 'Covid 19 Monitoring',
      description: translation.projects.descriptions.covidMonitoring,
      live_url: 'https://covid-19-brazil-monitoring.netlify.app/',
      code_repo: 'https://github.com/LucasHVicente/covid19-monitoring',
    },
    {
      title: 'NLW Copa',
      description: translation.projects.descriptions.nlwCopa,
      code_repo: 'https://github.com/LucasHVicente/nlw-copa',
    },
    {
      title: 'Demyx Discord bot',
      description: translation.projects.descriptions.demyx,
      code_repo: 'https://github.com/LucasHVicente/demyx-discord-bot',
    },
    {
      title: 'Pokédex Ionic',
      description: translation.projects.descriptions.pokedexIonic,
      live_url: 'https://pokedex-ionic.netlify.app/',
      code_repo: 'https://github.com/LucasHVicente/PokedexIonic',
    },
    {
      title: 'Portfolio',
      description: translation.projects.descriptions.portfolio,
      code_repo: 'https://github.com/LucasHVicente/portfolio',
    },
  ];
  return (
    <div className="section-div start-animation items-center flex flex-col justify-between gap-4">
      <h3 className="text-blue-500 text-3xl">{translation.projects.title}</h3>
      <p>{translation.projects.texts.description}</p>
      <div className="flex p-8 gap-8 flex-wrap justify-evenly">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <p>{translation.projects.texts.moreProjects}</p>
      <div className="transition hover:scale-110">
        <a
          href="https://www.github.com/LucasHVicente"
          target="_blank"
          className="hover:text-blue-500 transition my-6 flex flex-col items-center gap-4"
          rel="noreferrer"
        >
          <span className="text-3xl ">
            <BsGithub />
          </span>
          <span className="lg:block hidden">github.com/LucasHVicente</span>
        </a>
      </div>
    </div>
  );
};
