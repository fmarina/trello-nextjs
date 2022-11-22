import { GetStaticPropsContext } from 'next';
import { Example as ExampleFeature } from '../features/Example';

export default function Example() {
  return <ExampleFeature />;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  };
}
