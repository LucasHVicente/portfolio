import { useRouter } from 'next/router';
import { translations } from '../i18n';

export const useTranslation = () => {
  const { locale } = useRouter();

  const translation = translations[locale];

  return {
    locale,
    translation,
  };
};
