import { Project } from '../../types/Project';
import { LinkButton } from './LinkButton';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <div
    className="flex flex-col items-center w-[200px] text-center"
    key={project.title}
  >
    <span className="text-lg text-blue-300">{project.title}</span>
    <p>{project.description}</p>
    <div className="flex gap-4 pt-4">
      {typeof project.code_repo === 'string' && (
        <LinkButton href={project.code_repo} label={'Repositório'} />
      )}
      {typeof project.live_url === 'string' && (
        <LinkButton href={project.live_url} label={'Aplicação'} />
      )}
    </div>
  </div>
);
