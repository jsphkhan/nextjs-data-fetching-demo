import { DefaultSeo } from 'next-seo';
import App from 'next/app';
import { appWithTranslation } from 'next-i18next'

import BaseLayout from '../components/BaseLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps, data }) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout || ((page) => <BaseLayout>{page}</BaseLayout>);
  return getLayout(
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} extraData={data} />
    </>
  );
}

// MyApp.getInitialProps = async (appContext) => {
//   console.log('** App getInitialProps ** ');
//   const appProps =  await App.getInitialProps(appContext);
//   // import some random data file for eg. locale file
//   const moduleObj = await import('./data/data');
//   return {
//     ...appProps,
//     data: moduleObj.default
//   }
// }

export default appWithTranslation(MyApp);
