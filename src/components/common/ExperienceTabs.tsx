import { useEffect, useState } from 'react';
import { LinkButton } from './LinkButton';
import classNames from 'classnames';
import { ExperienceTabProps } from '../../types/Experiences/ExperienceTabProps';
import { Experience } from '../../types/Experiences/Experience';
import { useTranslation } from '../../hooks/useTranslation';

export const ExperienceTabs = ({
  initialTab,
  experiences,
}: ExperienceTabProps) => {
  const { translation } = useTranslation();
  const { buttons } = translation;
  const [currentTab, setCurrentTab] = useState(initialTab);
  const [selectedExperience, setSelectedExperience] = useState<Experience>({
    company_name: '',
    title: '',
    description: '',
    start_date: '',
    website: '',
  });

  function handleSelectExperience(companyName: string) {
    setCurrentTab(companyName);
    const experience = experiences.find(
      (exp) => exp.company_name === companyName
    );
    if (experience !== undefined) setSelectedExperience(experience);
  }

  function getWorkingPeriod(startDate: string, endDate: string | undefined) {
    const startString = new Date(startDate)
      .toLocaleDateString('pt-BR', {
        month: 'short',
        year: 'numeric',
      })
      .toUpperCase();
    if (typeof endDate !== 'string')
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return `${translation.since} ${startString}`;
    const endString = new Date(endDate)
      .toLocaleDateString('pt-BR', {
        month: 'short',
        year: 'numeric',
      })
      .toUpperCase();
    return `${startString} - ${endString}`;
  }

  useEffect(() => {
    handleSelectExperience(initialTab);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:h-[50vh]">
      <div className="flex lg:flex-col lg:w-1/3 lg:flex-wrap lg:h-[50vh] max-w-[80vw] overflow-auto scrollbar-none">
        {experiences.map((exp) => (
          <button
            className={classNames('text-blue-500 p-2 border-blue-500', {
              'border-b lg:border-r lg:border-b-0':
                currentTab !== exp.company_name,
              'border border-b-0 lg:border-b lg:border-r-0 bg-gradient-to-b lg:bg-gradient-to-r from-blue-900':
                currentTab === exp.company_name,
            })}
            onClick={() => handleSelectExperience(exp.company_name)}
            key={exp.title}
          >
            {exp.company_name}
          </button>
        ))}
      </div>
      <div className="flex flex-col w-full p-4 justify-between lg:border-t border-blue-500">
        <div className="overflow-auto my-4 scrollbar-none">
          <h3 className="text-blue-500 text-2xl">{selectedExperience.title}</h3>
          <span className="text-blue-700">
            {getWorkingPeriod(
              selectedExperience.start_date,
              selectedExperience.end_date
            )}
          </span>
          <p>{selectedExperience.description}</p>
        </div>
        <div className="lg:self-end">
          <LinkButton
            href={selectedExperience.website}
            target="_blank"
            label={buttons.company}
          />
        </div>
      </div>
    </div>
  );
};
