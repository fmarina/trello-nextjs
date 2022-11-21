import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';

import styles from '../../styles/Home.module.css';

const Example = () => {
  const t = useTranslations('Home');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Example {t('hello')}</h1>
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
