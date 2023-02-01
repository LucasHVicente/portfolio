import { LinkButton } from './common/LinkButton';

export const Experience = () => {
  const experiences = [
    {
      company_name: 'Napp Solutions',
      job_title: 'Desenvolvedor Frontend',
      job_description: ``,
      website: 'https://www.nappsolutions.com.br/a-napp',
      image_url: '',
    },
    {
      company_name: 'Compsoft',
      job_title: 'Estagiário em Desenvolvimento Mobile',
      job_description: ``,
      website: 'http://www.compsoftnet.com.br/site/',
      image_url: '',
    },
  ];
  return (
    <div>
      <h3 className="text-3xl text-blue-500">Experiência Profissional</h3>
      {experiences.map((job) => (
        <div key={job.job_title}>
          <h4 className=" text-2xl text-blue-500">{job.company_name}</h4>
          <p>{job.job_description}</p>
          <LinkButton label="Site" href={job.website} />
        </div>
      ))}
    </div>
  );
};
