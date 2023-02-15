import moment from 'moment';
import { useTranslation } from '../hooks/useTranslation';

/* eslint-disable @next/next/no-img-element */
export const About = () => {
  const { translation } = useTranslation();
  const { about } = translation;
  const age = String(moment().diff('1999-04-15', 'years', false));
  const aboutText = about.text.replace('<age>', age);

  return (
    <div className="start-animation section-div flex items-center gap-16 lg:flex-row flex-col">
      <img
        alt="Lucas Vicente"
        src="https://avatars.githubusercontent.com/LucasHVicente"
        className="rounded-full w-40 lg:w-80 border-2 border-blue-500"
      />
      <div>
        <h3 className="text-3xl text-blue-500">{about.title}</h3>
        <p>{aboutText}</p>
      </div>
    </div>
  );
};
