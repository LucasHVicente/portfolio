import ptBR from './pt-BR.json';
import enUS from './enUS.json';

export const getTranslation = (locale: string | undefined) => {
  switch (locale) {
    case 'pt-BR':
      return ptBR;
    case 'en-US':
      return enUS;
    default:
      return ptBR;
  }
};
