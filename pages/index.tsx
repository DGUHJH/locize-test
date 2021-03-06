import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Home.module.css';
import { hFetch } from './api/hFetch';

type LanguageType = 'ko' | 'en';

const languageList: LanguageType[] = ['ko', 'en'];

const Home: NextPage = () => {
  const [data, setData] = useState({ test: '' });
  const [language, setLanguage] = useState<LanguageType>('ko');
  const { t } = useTranslation('test');

  useEffect(() => {
    hFetch(
      `https://api.locize.app/07633499-7fb3-42fd-8b81-f18f679c0e6d/latest/${language}/test`,
      'get'
    ).then((res) => {
      console.log(res);
      setData(res);
    });
  }, [language]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Locize 테스트</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>{data?.test}</div>
        <select
          onChange={(e: any) => setLanguage(e.target.value)}
          value={language}
        >
          {languageList.map((lan) => (
            <option key={lan} value={lan}>
              {lan}
            </option>
          ))}
        </select>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
