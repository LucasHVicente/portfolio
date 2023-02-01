import { BsGithub } from 'react-icons/bs';
import { ProjectCard } from './common/ProjectCard';

export const Projects = () => {
  const projects = [
    {
      title: 'Pokédex React',
      description:
        'Aplicação para a listagem e consulta de Pokémon usando React.',
      live_url: 'https://lucashvicente.github.io/pokedex-react',
      code_repo: 'https://github.com/LucasHVicente/pokedex-react',
    },
    {
      title: 'Covid 19 Monitoring',
      description: 'Aplicação para monitoramento dos casos de covid-19.',
      live_url: 'https://covid-19-brazil-monitoring.netlify.app/',
      code_repo: 'https://github.com/LucasHVicente/covid19-monitoring',
    },
    {
      title: 'NLW Copa',
      description:
        'Aplicativo de bolão desenvolvido usando React, React Native e Node.',
      code_repo: 'https://github.com/LucasHVicente/nlw-copa',
    },
    {
      title: 'Demyx Discord bot',
      description:
        'Bot de discord feito para a reprodução de música desenvolvido em Node.js',
      code_repo: 'https://github.com/LucasHVicente/demyx-discord-bot',
    },
    {
      title: 'Pokédex Ionic',
      description:
        'Aplicação para a listagem e consulta de Pokémon usando Ionic Framework.',
      live_url: 'https://pokedex-ionic.netlify.app/',
      code_repo: 'https://github.com/LucasHVicente/PokedexIonic',
    },
    {
      title: 'Portfólio',
      description: 'Este portfólio foi desenvolvido usando Next.js',
      code_repo: 'https://github.com/LucasHVicente/portfolio',
    },
  ];
  return (
    <div className="section-div start-animation items-center flex flex-col justify-between gap-4">
      <h3 className="text-blue-300 text-3xl">Projetos</h3>
      <p>Alguns projetos que gostaria de destacar:</p>
      <div className="flex p-8 gap-8 flex-wrap justify-evenly">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <p>Mais projetos podem ser encontrados no meu github.</p>
      <div>
        <a
          href="https://www.github.com/LucasHVicente"
          target="_blank"
          className="hover:text-blue-500 transition my-6 flex flex-col items-center gap-4"
          rel="noreferrer"
        >
          <span className="text-3xl">
            <BsGithub />
          </span>
          <span className="lg:block hidden">github.com/LucasHVicente</span>
        </a>
      </div>
    </div>
  );
};
