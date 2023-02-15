import { TypeAnimation } from 'react-type-animation';
import { LinkButton } from './common/LinkButton';
import { useTranslation } from '../hooks/useTranslation';

export const Landing = () => {
  const { translation } = useTranslation();
  const { buttons, landing } = translation;

  return (
    <div className="flex w-full min-h-full lg:min-h-[80vh] items-center flex-col">
      <div className="section-div border-none">
        <h2 className="text-blue-700 text-xl lg:text-2xl">
          <TypeAnimation
            speed={75}
            cursor={false}
            sequence={[landing.writer1]}
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
            sequence={[1000, landing.writer2]}
          />
        </h2>
        <p className="start-animation">{landing.description}</p>
      </div>
      <div className="start-animation flex max-w-[900px]  lg:w-[60%] justify-start gap-6 pt-4 border-t border-blue-500">
        <LinkButton label={buttons.about} href="#about" />
        <LinkButton label={buttons.contact} href="#contact" />
      </div>
    </div>
  );
};
