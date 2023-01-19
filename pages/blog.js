/** 
 * Static Rendered Page with i18n support
 * For eg. /en/blog,/ar/blog
*/
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function StaticDynamicRoutePage({locale}) {
  const { t } = useTranslation('common')
  return (
    <>
      <p>Dynamic Route Example</p>
      <p>Locale({locale}): {t('h1')}</p>
    </>
  );
}

export async function getStaticProps(context) {
  console.log('** context: ', context);
  /** Example context below 
  {
    params: { lang: 'en' },
    locales: [ 'en', 'ar' ],
    locale: 'en',
    defaultLocale: 'en'
  }
*/

return {
  props: {
    ...(await serverSideTranslations(context.locale, [
      'common'
    ])),
    locale: context.locale
    // Will be passed to the page component as props
  },
}
  // return {
  //   props: {
  //       // locale: context.locale
  //       locale: context.params.lang
  //   },
  // };
}

// export async function getStaticPaths() {
//   const langs = ['en', 'ar'];
//   const paths = langs.map((lang) => ({
//     params: {
//       lang
//     },
//     // locale: lang // this is returned to getStaticProps inside context
//   }));
//   return {
//     paths,
//     fallback: false, // can also be true or 'blocking'
//   };
// }
