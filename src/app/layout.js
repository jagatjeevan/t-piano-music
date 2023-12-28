import { PT_Sans_Narrow } from 'next/font/google';

import Header from '@/components/Header';

import '../styles/globals.scss';
import styles from '../styles/page.module.scss';

export const pt_sans_narrow = PT_Sans_Narrow({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "T's Music School",
  description: 'Learn Music from basics',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pt_sans_narrow.className}>
        <main className={styles.main}>
          <Header />
          <article className={styles.content}>{children}</article>
          <footer className={styles.footer}>
            Made with <span className={styles.hearts}>&hearts;</span> by Jeevan
          </footer>
        </main>
      </body>
    </html>
  );
}
