import { useTranslation } from '../hooks/useTranslation';
import { EducationHistory } from './common/EducationHistory';
import { ExperienceTabs } from './common/ExperienceTabs';

export const Experience = () => {
  const { translation } = useTranslation();
  const { workExperience, title, education } = translation.experience;
  const educationHistory = [
    {
      title: education.bachelorSI,
      college: {
        name: 'FHO - Uniararas',
        link: 'https://vestibular.fho.edu.br/cursos/?tag=sistemas-informacao',
      },
      startYear: '2017',
      endYear: '2020',
    },
  ];
  const experiences = [
    {
      company_name: 'Napp Solutions',
      title: workExperience.napp.title,
      description: workExperience.napp.description,
      start_date: '2020-11-18',
      end_date: '2022-10-18',
      website: 'https://www.nappsolutions.com.br/a-napp',
    },
    {
      company_name: 'Compsoft',
      title: workExperience.compsoft.title,
      description: workExperience.compsoft.description,
      start_date: '2019-11-18',
      end_date: '2020-11-18',
      website: 'http://www.compsoftnet.com.br/site/',
    },
  ];
  return (
    <div className="section-div start-animation flex flex-col items-center gap-4">
      <h3 className="text-3xl text-blue-500">{title}</h3>

      <h4 className="text-2xl text-blue-500">{workExperience.title}</h4>
      <ExperienceTabs initialTab="Napp Solutions" experiences={experiences} />
      <h4 className="text-2xl text-blue-500">{education.title}</h4>
      <div className="w-full">
        <EducationHistory educationHistory={educationHistory} />
      </div>
    </div>
  );
};
