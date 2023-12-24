import { Inter } from "next/font/google";

import Header from "@/components/Header";

import "../styles/globals.scss";
import styles from "../styles/page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "T's Music School",
  description: "Learn Music from basics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
