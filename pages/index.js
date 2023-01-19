import Link from 'next/link';
import { NextSeo } from 'next-seo';

import styles from '../styles/Home.module.css';

export default function Home({ extraData }) {
  return (
    <>
        <NextSeo title="Next SEO title" description='A short description goes here' />
        <div className={styles.container}>
          <div className={styles.main}>
            <Link href='/ssr'>SSR</Link>
            <Link href='/ssg'>SSG</Link>
            <Link href='/csr'>CSR</Link>
            <Link href='/isr'>ISR</Link>
            <Link href='/normal'>Normal</Link>
            <Link href='/en/blog'>SSG i18n en page</Link>
            <Link href='/de/blog'>SSG i18n de page</Link>
          </div>
        </div>
        <pre className={styles.pre}>{JSON.stringify(extraData, null, 2)}</pre>
    </>
  );
}
