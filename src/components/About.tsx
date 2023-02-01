import moment from 'moment';

/* eslint-disable @next/next/no-img-element */
export const About = () => {
  const age = moment().diff('1999-04-15', 'years', false);
  return (
    <div className="start-animation section-div flex items-center gap-16 lg:flex-row flex-col">
      <img
        alt="Lucas Vicente"
        src="https://avatars.githubusercontent.com/LucasHVicente"
        className="rounded-full w-40 lg:w-80"
      />
      <div>
        <h3 className="text-3xl text-blue-500">Sobre mim</h3>
        <p>
          Meu nome é Lucas Henrique Vicente, tenho {age} anos e sou
          desenvolvedor desde 2019, em 2020 me formei em Sistemas de Informação
          pela FHO - Uniararas. Sou focado no ecossistema do JavaScript e
          TypeScript, tenho experiência com desenvolvimento front-end web e
          mobile hibrido usando React, React Native e Ionic Framework. Também
          tenho conhecimentos na parte de construção de APIs REST usando
          Node.js, já trabalhei com bancos de dados relacionais como MySQL e
          SQLite e bancos não relacionais como MongoDB e Firebase.
        </p>
      </div>
    </div>
  );
};
