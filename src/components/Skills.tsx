import {
  SiTypescript,
  SiHtml5,
  SiReact,
  SiJavascript,
  SiCss3,
  SiNextdotjs,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiNodedotjs,
  SiMaterialui,
  SiFigma,
  SiSqlite,
  SiFirebase,
  SiGit,
  SiGithub,
  SiExpress,
  SiIonic,
} from 'react-icons/si';
export const Skills = () => {
  const skills = [
    {
      label: 'HTML',
      icon: <SiHtml5 />,
    },
    {
      label: 'CSS',
      icon: <SiCss3 />,
    },
    {
      label: 'JavaScript',
      icon: <SiJavascript />,
    },
    {
      label: 'TypeScript',
      icon: <SiTypescript />,
    },
    {
      label: 'SASS',
      icon: <SiSass />,
    },
    {
      label: 'React',
      icon: <SiReact />,
    },
    {
      label: 'Next.js',
      icon: <SiNextdotjs />,
    },
    {
      label: 'React Native',
      icon: <SiReact />,
    },
    {
      label: 'Ionic',
      icon: <SiIonic />,
    },
    {
      label: 'Node.js',
      icon: <SiNodedotjs />,
    },
    {
      label: 'Express',
      icon: <SiExpress />,
    },
    {
      label: 'Styled Components',
      icon: <SiStyledcomponents />,
    },
    {
      label: 'Material UI',
      icon: <SiMaterialui />,
    },
    {
      label: 'TailwindCSS',
      icon: <SiTailwindcss />,
    },
    {
      label: 'SQLite',
      icon: <SiSqlite />,
    },
    {
      label: 'Firebase',
      icon: <SiFirebase />,
    },
    {
      label: 'Git',
      icon: <SiGit />,
    },
    {
      label: 'Github',
      icon: <SiGithub />,
    },
    {
      label: 'Figma',
      icon: <SiFigma />,
    },
  ];
  return (
    <div className="section-div flex justify-between">
      <div className="w-1/2">
        <h3 className="text-3xl text-blue-500">Habilidades</h3>
        <p>
          Aqui estão listadas algumas das principais tecnologias que eu já usei,
          tanto em ambiente profissional quanto em projetos pessoais.
        </p>
      </div>
      <div className="flex gap-8 w-1/2 flex-wrap justify-center">
        {skills.map((item) => (
          <div
            className="flex gap-2 flex-col items-center w-16"
            key={item.label}
          >
            <span className="text-4xl">{item.icon}</span>
            <span className="text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
