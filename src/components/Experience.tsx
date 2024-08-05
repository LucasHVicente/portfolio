import { ExperienceTabs } from './common/ExperienceTabs';

export const Experience = () => {
  const experiences = [
    {
      company_name: 'MaisMei',
      title: 'Desenvolvedor Frontend',
      description: `Atualmente sou desenvolvedor frontend e estrou trabalhando em aplicações web e mobile com foco em auxiliar microempreendedores individuais usando React, React Native e Typescript.`,
      start_date: '2023-05-22',
      website: 'https://www.maismei.com.br/',
    },
    {
      company_name: 'Napp Solutions',
      title: 'Desenvolvedor Frontend',
      description: `Durante meu período na Napp Solutions eu era responsável pelo desenvolvimento e manutenção de sistemas web responsivos e aplicativos mobile para o gerenciamento de comércios e marketplace utilizando Node.js e as linguagens TypeScript e JavaScript com as bibliotecas ReactJS e React Native, testes unitários com Jest e React Testing Library, versionamento usando Git e prototipação de aplicações usando o Figma`,
      start_date: '2020-11-18',
      end_date: '2022-10-18',
      website: 'https://www.nappsolutions.com.br/a-napp',
    },
    {
      company_name: 'Compsoft',
      title: 'Estagiário em Desenvolvimento Mobile',
      description: `Minha primeira experiência profissional como desenvolvedor foi como estagiário na Compsoft, lá eu era responsável pelo desenvolvimento e manutenção de aplicativos mobile voltados para o gerenciamento de estoque e vendas usando Typescript com o Ionic Framework e sistemas web de gerenciamento interno usando React e Typescript.`,
      start_date: '2019-11-18',
      end_date: '2020-11-18',
      website: 'http://www.compsoftnet.com.br/site/',
    },
  ];
  return (
    <div className="section-div flex flex-col items-center gap-4">
      <h3 className="text-3xl text-blue-500">Experiências</h3>

      <h4 className="text-2xl text-blue-500">Experiência Profissional</h4>
      <ExperienceTabs initialTab="MaisMei" experiences={experiences} />
      <h4 className="text-2xl text-blue-500">Formação acadêmica</h4>
      <div>
        <h5 className="text-xl text-blue-500">
          Pós-graduação em Engenharia de Software
        </h5>
        <p>
          Atualmente estou cursando uma pós-graduação em engenharia de software na{' '}
          <a 
            href="https://estacio.br/" 
            target="_blank"
            className="text-blue-500 cursor-pointer"
            rel="noreferrer"
          >
            Estácio.
          </a>
        </p>
        <h5 className="text-xl text-blue-500">
          Bacharelado em Sistemas de Informação
        </h5>
        <p>
          Sou formado em Sistemas de Informação pela{' '}
          <a
            href="https://vestibular.fho.edu.br/cursos/?tag=sistemas-informacao"
            target="_blank"
            className="text-blue-500 cursor-pointer"
            rel="noreferrer"
          >
            FHO - Uniararas
          </a>
          . Comecei o curso em 2017 logo após me formar no ensino médio e
          concluí em 2020.
        </p>
      </div>
    </div>
  );
};
