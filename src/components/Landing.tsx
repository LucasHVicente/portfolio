import { TypeAnimation } from 'react-type-animation';
import { LinkButton } from './common/LinkButton';

export const Landing = () => (
  <div className="flex w-full min-h-full lg:min-h-[80vh] items-center flex-col">
    <div className="section-div">
      <h2 className="text-blue-700 text-xl lg:text-2xl">
        <TypeAnimation
          speed={75}
          cursor={false}
          sequence={['Olá, meu nome é']}
        />
      </h2>
      <h1 className="text-blue-500 font-semibold text-3xl lg:text-5xl">
        <TypeAnimation
          speed={65}
          cursor={false}
          sequence={[500, '<Lucas Vicente/>']}
        />
      </h1>
      <h2 className="text-blue-700 text-xl lg:text-3xl">
        <TypeAnimation
          speed={75}
          cursor={false}
          className="typing-cursor"
          sequence={[1000, 'e eu sou um desenvolvedor web.']}
        />
      </h2>
      <p className="start-animation">
        Sou desenvolvedor com foco em desenvolvimento front-end e mobile.
      </p>
    </div>
    <div className="start-animation flex lg:w-[60%] justify-start gap-6 pt-4">
      <LinkButton label="Saiba mais" href="#about" />
      <LinkButton label="Entre em contato" href="#contact" />
    </div>
  </div>
);
