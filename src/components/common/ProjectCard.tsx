import { useTranslation } from '../../hooks/useTranslation';
import { ProjectCardProps } from '../../types/ProjectCard/ProjectCardProps';
import { LinkButton } from './LinkButton';

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { translation } = useTranslation();
  const { buttons } = translation;
  return (
    <div
      className="flex flex-col items-center w-[200px] text-center"
      key={project.title}
    >
      <span className="text-lg text-blue-500">{project.title}</span>
      <p>{project.description}</p>
      <div className="flex gap-4 pt-4">
        {typeof project.code_repo === 'string' && (
          <LinkButton
            target="_blank"
            href={project.code_repo}
            label={buttons.code}
          />
        )}
        {typeof project.live_url === 'string' && (
          <LinkButton
            target="_blank"
            href={project.live_url}
            label={buttons.application}
          />
        )}
      </div>
    </div>
  );
};
