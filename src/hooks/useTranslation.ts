import { useRouter } from 'next/router';
import { getTranslation } from '../i18n';

export const useTranslation = () => {
  const { locale } = useRouter();
  const translation = getTranslation(locale);

  return {
    locale,
    translation,
  };
};
