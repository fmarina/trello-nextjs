import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';

import { Title } from './Example.styles';

const Example = () => {
  const t = useTranslations('Home');

  return (
    <div>
      <Title>{t('hello')}</Title>
    </div>
  );
};

export { Example };

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}.json`)).default,
    },
  };
}
